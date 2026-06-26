/**
 * CoSai. × YBMT — Quote Actions (Phase 6)
 * ---------------------------------------------------------------------------
 * Server-side operations against a single quote. Four primitives:
 *
 *   1. transitionStage   — move a quote from its current stage to a new one,
 *                          writing an audit row to stage_history. Enforces:
 *                          • a reject_reason_id is required for stage 10 (Rejected)
 *                          • an accept_reason text is required for stage 9 (Won)
 *                          • timestamps on the quote row are updated where appropriate
 *                            (quote_sent_at, last_touchpoint_at, first_response_at)
 *
 *   2. logContact        — insert into contact_log + bump quotes.last_touchpoint_at.
 *                          If first contact ever for this quote, also set
 *                          first_response_at.
 *
 *   3. createRequote     — clone a rejected quote into a new quote at stage 7
 *                          (Re-quote / Negotiation) with is_requote=1,
 *                          parent_quote_id set, and quote_number suffix R.
 *                          Audit row written for the new quote.
 *
 *   4. updateQuoteFields — patch the editable fields on the quote
 *                          (sales_price_cents, estimated_cost_cents, win_probability_pct,
 *                          quote_sent_date, decision_date). GPM auto-recomputes via
 *                          the GENERATED column.
 *
 * All four return discriminated unions { ok: true, data } | { ok: false, error }
 * so callers can render either a redirect-with-toast or a sticky form error.
 *
 * Conventions inherited from Phase 5:
 *   - Money INTEGER cents
 *   - Datetimes ISO 8601 UTC
 *   - changed_by stamped from authed user.team_member_id (preferred) or
 *     first-name match into team_members.full_name
 *   - quote_number allocator from lib/intake.ts is reused for the R suffix
 */

import { nextQuoteNumber } from './intake'

// ─── CONSTANTS ──────────────────────────────────────────────────────────

export const STAGE_RFQ_RECEIVED       = 1
export const STAGE_RFQ_REVIEWED       = 2
export const STAGE_QUOTE_PREP         = 3
export const STAGE_QUOTE_SENT         = 4
export const STAGE_FOLLOW_UP          = 5
export const STAGE_NEGOTIATION        = 6
export const STAGE_REQUOTE_NEGOTIATION = 7
export const STAGE_AWAITING_DECISION  = 8
export const STAGE_WON                = 9
export const STAGE_REJECTED           = 10
export const STAGE_LOST               = 11

export const TERMINAL_STAGES = new Set([STAGE_WON, STAGE_REJECTED, STAGE_LOST])

// ─── TYPES ──────────────────────────────────────────────────────────────

export interface QuoteRow {
  id: number
  quote_number: string
  client_id: number
  stage_id: number
  title: string
  description: string | null
  job_site_address: string | null
  scope_id: number | null
  estimator_id: number | null
  project_manager_id: number | null
  line_of_business_id: number | null
  region_id: number | null
  lead_source_id: number | null
  rfq_received_date: string | null
  quote_sent_date: string | null
  decision_date: string | null
  job_start_date: string | null
  job_end_date: string | null
  estimated_cost_cents: number | null
  sales_price_cents: number | null
  actual_delivered_cost_cents: number | null
  gpm_percent: number | null
  win_probability_pct: number | null
  accept_reason: string | null
  reject_reason_id: number | null
  reject_notes: string | null
  is_requote: number
  parent_quote_id: number | null
  requote_opportunity: number
  is_sample: number
  rfq_received_at: string | null
  first_response_at: string | null
  quote_sent_at: string | null
  last_touchpoint_at: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export type ActionResult<T = void> =
  | { ok: true; data: T }
  | { ok: false; error: string }

// ─── HELPERS ────────────────────────────────────────────────────────────

const nowIsoUtc = () => new Date().toISOString()

/**
 * Resolve an authenticated user to a team_members.id. Prefers the explicit
 * `user.team_member_id` set on the AuthUser row (when migrations linked the
 * user to a team_member), and falls back to a first-name LIKE search for
 * older bootstrap accounts where the link wasn't set.
 */
export async function resolveActor(
  db: D1Database,
  user: { name: string; team_member_id: number | null }
): Promise<number | null> {
  if (user.team_member_id && user.team_member_id > 0) return user.team_member_id
  const first = (user.name ?? '').split(' ')[0]
  if (!first) return null
  const row = await db
    .prepare(`SELECT id FROM team_members WHERE full_name LIKE ? AND active = 1 ORDER BY id LIMIT 1`)
    .bind(`${first}%`)
    .first<{ id: number }>()
  return row?.id ?? null
}

/** Fetch a single quote row by id (or null if not found). */
export async function getQuoteById(db: D1Database, quoteId: number): Promise<QuoteRow | null> {
  const row = await db
    .prepare(
      `SELECT id, quote_number, client_id, stage_id, title, description, job_site_address,
              scope_id, estimator_id, project_manager_id,
              line_of_business_id, region_id, lead_source_id,
              rfq_received_date, quote_sent_date, decision_date, job_start_date, job_end_date,
              estimated_cost_cents, sales_price_cents, actual_delivered_cost_cents,
              gpm_percent, win_probability_pct, accept_reason,
              reject_reason_id, reject_notes,
              is_requote, parent_quote_id, requote_opportunity, is_sample,
              rfq_received_at, first_response_at, quote_sent_at, last_touchpoint_at,
              notes, created_at, updated_at
         FROM quotes
        WHERE id = ?
        LIMIT 1`
    )
    .bind(quoteId)
    .first<QuoteRow>()
  return row ?? null
}

// ─── 1. transitionStage ─────────────────────────────────────────────────

export interface TransitionInput {
  to_stage_id: number
  /** Required when to_stage_id === STAGE_REJECTED. */
  reject_reason_id?: number | null
  /** Optional free-text reject notes. */
  reject_notes?: string | null
  /** Required when to_stage_id === STAGE_WON. */
  accept_reason?: string | null
  /** Optional audit note attached to the stage_history row. */
  note?: string | null
}

/**
 * Move a quote from its current stage to a new stage, writing an audit row
 * and updating any side-effect timestamps on the quote.
 *
 * Side-effects:
 *   - moving INTO Quote Sent (4)        → set quote_sent_at = now if null
 *   - moving INTO Won (9)               → store accept_reason (required)
 *   - moving INTO Rejected (10)         → store reject_reason_id + reject_notes (required)
 *   - moving INTO Lost (11)             → set decision_date if null
 *   - every successful transition       → last_touchpoint_at = now
 *                                       → first_response_at = now if null AND moving away from stage 1
 */
export async function transitionStage(
  db: D1Database,
  quoteId: number,
  actorTeamMemberId: number | null,
  input: TransitionInput
): Promise<ActionResult<{ from_stage_id: number; to_stage_id: number }>> {
  // Load current quote
  const q = await getQuoteById(db, quoteId)
  if (!q) return { ok: false, error: 'Quote not found.' }

  const from_stage_id = q.stage_id
  const to_stage_id = input.to_stage_id

  if (!Number.isInteger(to_stage_id) || to_stage_id < 1 || to_stage_id > 11) {
    return { ok: false, error: 'Invalid target stage.' }
  }
  if (to_stage_id === from_stage_id) {
    return { ok: false, error: 'Quote is already at that stage.' }
  }

  // Terminal-move validation
  if (to_stage_id === STAGE_REJECTED) {
    const rid = input.reject_reason_id
    if (rid === null || rid === undefined || !Number.isInteger(rid) || rid <= 0) {
      return { ok: false, error: 'A reject reason is required to move to Rejected.' }
    }
    // Confirm the reason exists
    const exists = await db
      .prepare('SELECT id FROM reject_reasons WHERE id = ? AND active = 1 LIMIT 1')
      .bind(rid)
      .first<{ id: number }>()
    if (!exists) return { ok: false, error: 'Selected reject reason is not valid.' }
  }
  if (to_stage_id === STAGE_WON) {
    const reason = (input.accept_reason ?? '').trim()
    if (!reason) {
      return { ok: false, error: 'Capture a short accept reason to move to Won.' }
    }
  }

  const now = nowIsoUtc()

  // Build the UPDATE statement dynamically based on which side-effect fields apply
  const setParts: string[] = ['stage_id = ?', 'updated_at = ?', 'last_touchpoint_at = ?']
  const setBinds: unknown[] = [to_stage_id, now, now]

  if (to_stage_id === STAGE_QUOTE_SENT && !q.quote_sent_at) {
    setParts.push('quote_sent_at = ?')
    setBinds.push(now)
  }
  if (from_stage_id === STAGE_RFQ_RECEIVED && !q.first_response_at) {
    setParts.push('first_response_at = ?')
    setBinds.push(now)
  }
  if (to_stage_id === STAGE_WON) {
    setParts.push('accept_reason = ?')
    setBinds.push((input.accept_reason ?? '').trim() || null)
    if (!q.decision_date) {
      setParts.push('decision_date = ?')
      setBinds.push(now.slice(0, 10))
    }
  }
  if (to_stage_id === STAGE_REJECTED) {
    setParts.push('reject_reason_id = ?')
    setBinds.push(input.reject_reason_id ?? null)
    setParts.push('reject_notes = ?')
    setBinds.push((input.reject_notes ?? '').trim() || null)
    if (!q.decision_date) {
      setParts.push('decision_date = ?')
      setBinds.push(now.slice(0, 10))
    }
  }
  if (to_stage_id === STAGE_LOST && !q.decision_date) {
    setParts.push('decision_date = ?')
    setBinds.push(now.slice(0, 10))
  }

  setBinds.push(quoteId)
  await db
    .prepare(`UPDATE quotes SET ${setParts.join(', ')} WHERE id = ?`)
    .bind(...setBinds)
    .run()

  // Audit
  await db
    .prepare(
      `INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_at, changed_by, note)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .bind(quoteId, from_stage_id, to_stage_id, now, actorTeamMemberId, (input.note ?? '').trim() || null)
    .run()

  return { ok: true, data: { from_stage_id, to_stage_id } }
}

// ─── 2. logContact ──────────────────────────────────────────────────────

export interface LogContactInput {
  contact_method_id: number
  direction: 'Inbound' | 'Outbound' | 'Internal'
  contact_datetime: string   // ISO 8601 UTC (constructed from form fields by caller)
  client_contact_name?: string | null
  subject?: string | null
  notes: string
  duration_minutes?: number | null
  follow_up_required?: boolean
  follow_up_date?: string | null   // yyyy-mm-dd
}

const DIRECTIONS = new Set(['Inbound', 'Outbound', 'Internal'])

/**
 * Log a contact against a quote. Also bumps quotes.last_touchpoint_at to the
 * contact_datetime (if newer) and sets first_response_at if null and the
 * direction is Outbound (the team's first response on the RFQ).
 */
export async function logContact(
  db: D1Database,
  quoteId: number,
  actorTeamMemberId: number | null,
  input: LogContactInput
): Promise<ActionResult<{ contact_log_id: number }>> {
  // Validate
  if (!Number.isInteger(input.contact_method_id) || input.contact_method_id <= 0) {
    return { ok: false, error: 'Choose a contact method.' }
  }
  if (!DIRECTIONS.has(input.direction)) {
    return { ok: false, error: 'Choose a direction.' }
  }
  if (!input.contact_datetime || Number.isNaN(new Date(input.contact_datetime).getTime())) {
    return { ok: false, error: 'Enter a valid contact date + time.' }
  }
  const notes = (input.notes ?? '').trim()
  if (!notes) return { ok: false, error: 'Notes are required (what was discussed).' }
  if (notes.length > 4000) return { ok: false, error: 'Notes are too long (max 4000).' }

  // Confirm method exists
  const method = await db
    .prepare('SELECT id FROM contact_methods WHERE id = ? AND active = 1 LIMIT 1')
    .bind(input.contact_method_id)
    .first<{ id: number }>()
  if (!method) return { ok: false, error: 'Selected contact method is not valid.' }

  // Confirm quote exists
  const q = await getQuoteById(db, quoteId)
  if (!q) return { ok: false, error: 'Quote not found.' }

  // Insert log row
  const insert = await db
    .prepare(
      `INSERT INTO contact_log (
         quote_id, contact_method_id, contact_datetime, direction,
         our_staff_id, client_contact_name, subject, notes,
         duration_minutes, follow_up_required, follow_up_date
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      quoteId,
      input.contact_method_id,
      input.contact_datetime,
      input.direction,
      actorTeamMemberId,
      (input.client_contact_name ?? '').trim() || null,
      (input.subject ?? '').trim() || null,
      notes,
      input.duration_minutes !== null && input.duration_minutes !== undefined
        ? Math.max(0, Math.round(input.duration_minutes))
        : null,
      input.follow_up_required ? 1 : 0,
      input.follow_up_date && /^\d{4}-\d{2}-\d{2}$/.test(input.follow_up_date)
        ? input.follow_up_date
        : null
    )
    .run()
  const contact_log_id = (insert.meta as { last_row_id?: number }).last_row_id
  if (!contact_log_id) return { ok: false, error: 'Contact log insert returned no id.' }

  // Update quote touchpoint timestamps
  const setParts: string[] = ['last_touchpoint_at = ?', 'updated_at = ?']
  const setBinds: unknown[] = [input.contact_datetime, nowIsoUtc()]
  if (!q.first_response_at && input.direction === 'Outbound') {
    setParts.push('first_response_at = ?')
    setBinds.push(input.contact_datetime)
  }
  setBinds.push(quoteId)
  await db
    .prepare(`UPDATE quotes SET ${setParts.join(', ')} WHERE id = ?`)
    .bind(...setBinds)
    .run()

  return { ok: true, data: { contact_log_id } }
}

// ─── 3. createRequote ───────────────────────────────────────────────────

/**
 * Clone a rejected quote into a brand-new requote row at stage 7
 * (Re-quote / Negotiation). The new quote:
 *   - has is_requote = 1, parent_quote_id = parentQuoteId
 *   - has quote_number with R suffix (e.g. Q-2026-0017R)
 *   - inherits client, title, description, job site, LoB, region, scope,
 *     estimator, PM, lead source, estimated cost, sales price, notes
 *   - keeps win_probability_pct, but blanks reject fields
 *   - is NOT a sample (is_sample = 0)
 *   - gets a stage_history row from null → 7 with a note
 *
 * Race-safe: retries up to 5 times on UNIQUE collision on quote_number.
 */
export async function createRequote(
  db: D1Database,
  parentQuoteId: number,
  actorTeamMemberId: number | null
): Promise<ActionResult<{ quote_id: number; quote_number: string }>> {
  const parent = await getQuoteById(db, parentQuoteId)
  if (!parent) return { ok: false, error: 'Parent quote not found.' }
  if (parent.stage_id !== STAGE_REJECTED) {
    return { ok: false, error: 'Only rejected quotes can be requoted.' }
  }
  // Confirm the reject reason was flagged requote-eligible
  if (parent.reject_reason_id) {
    const r = await db
      .prepare('SELECT is_requote_eligible FROM reject_reasons WHERE id = ? LIMIT 1')
      .bind(parent.reject_reason_id)
      .first<{ is_requote_eligible: number }>()
    if (r && r.is_requote_eligible === 0) {
      return { ok: false, error: 'This reject reason is not flagged requote-eligible.' }
    }
  }

  const now = nowIsoUtc()
  const year = new Date(parent.rfq_received_at ?? now).getUTCFullYear()

  let lastError: unknown = null
  for (let attempt = 0; attempt < 5; attempt++) {
    const { quote_number } = await nextQuoteNumber(db, year, true) // isRequote = true → R suffix
    try {
      const insert = await db
        .prepare(
          `INSERT INTO quotes (
             quote_number, client_id, scope_id, stage_id,
             title, description, job_site_address,
             estimator_id, project_manager_id,
             line_of_business_id, region_id, lead_source_id,
             rfq_received_date, rfq_received_at,
             estimated_cost_cents, sales_price_cents,
             win_probability_pct,
             is_requote, parent_quote_id, requote_opportunity, is_sample,
             notes,
             last_touchpoint_at
           ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, 0, 0, ?, ?)`
        )
        .bind(
          quote_number,
          parent.client_id,
          parent.scope_id,
          STAGE_REQUOTE_NEGOTIATION,
          parent.title,
          parent.description,
          parent.job_site_address,
          parent.estimator_id,
          parent.project_manager_id,
          parent.line_of_business_id,
          parent.region_id,
          parent.lead_source_id,
          now.slice(0, 10),     // rfq_received_date = today (the requote start)
          now,                   // rfq_received_at = now
          parent.estimated_cost_cents,
          parent.sales_price_cents,
          parent.win_probability_pct,
          parentQuoteId,
          parent.notes,
          now
        )
        .run()
      const quote_id = (insert.meta as { last_row_id?: number }).last_row_id
      if (!quote_id) throw new Error('Requote insert returned no id')

      // Audit on the new quote
      await db
        .prepare(
          `INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_at, changed_by, note)
           VALUES (?, NULL, ?, ?, ?, ?)`
        )
        .bind(
          quote_id,
          STAGE_REQUOTE_NEGOTIATION,
          now,
          actorTeamMemberId,
          `Requote of ${parent.quote_number}`
        )
        .run()

      // Mark the parent as a requote opportunity that converted
      await db
        .prepare(`UPDATE quotes SET requote_opportunity = 1, updated_at = ? WHERE id = ?`)
        .bind(now, parentQuoteId)
        .run()

      return { ok: true, data: { quote_id, quote_number } }
    } catch (err) {
      lastError = err
      const msg = String((err as Error)?.message ?? err)
      if (msg.includes('UNIQUE') || msg.includes('constraint')) continue
      return { ok: false, error: `Requote failed: ${msg}` }
    }
  }
  return { ok: false, error: `Requote failed after 5 attempts: ${String(lastError)}` }
}

// ─── 4. updateQuoteFields ───────────────────────────────────────────────

export interface UpdateQuoteFieldsInput {
  /** Strings as they arrived from the form. Empty string → null. */
  sales_price?: string
  estimated_cost?: string
  win_probability_pct?: string
  quote_sent_date?: string       // yyyy-mm-dd
  decision_date?: string         // yyyy-mm-dd
  job_start_date?: string        // yyyy-mm-dd
  job_end_date?: string          // yyyy-mm-dd
  notes?: string
}

export type EditFieldErrors = Partial<Record<keyof UpdateQuoteFieldsInput, string>> & { _form?: string }

function parseDollarsToCentsLocal(raw: string | undefined | null): number | null | 'invalid' {
  if (raw === undefined || raw === null) return null
  const cleaned = raw.replace(/[$,\s]/g, '')
  if (!cleaned) return null
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return 'invalid'
  const dollars = Number(cleaned)
  if (!Number.isFinite(dollars) || dollars < 0) return 'invalid'
  return Math.round(dollars * 100)
}

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/**
 * Patch the editable fields on a quote. Returns the new GPM (re-read from D1
 * after the UPDATE so the caller can render the freshly-computed value from
 * the GENERATED column without doing math here).
 */
export async function updateQuoteFields(
  db: D1Database,
  quoteId: number,
  input: UpdateQuoteFieldsInput
): Promise<ActionResult<{ gpm_percent: number | null }> & { errors?: EditFieldErrors }> {
  const errors: EditFieldErrors = {}

  // Sales / cost
  const sp = parseDollarsToCentsLocal(input.sales_price)
  if (sp === 'invalid') errors.sales_price = 'Enter a valid dollar amount.'
  const ec = parseDollarsToCentsLocal(input.estimated_cost)
  if (ec === 'invalid') errors.estimated_cost = 'Enter a valid dollar amount.'

  // Win probability
  let winPct: number | null | 'noop' = 'noop'
  if (input.win_probability_pct !== undefined) {
    const s = (input.win_probability_pct ?? '').trim()
    if (!s) {
      winPct = null
    } else {
      const n = Number(s)
      if (!Number.isFinite(n) || n < 0 || n > 100) {
        errors.win_probability_pct = '0–100 only.'
      } else {
        winPct = Math.round(n)
      }
    }
  }

  // Dates
  const dateFields: Array<[keyof UpdateQuoteFieldsInput, string]> = [
    ['quote_sent_date', 'Quote sent date'],
    ['decision_date',   'Decision date'],
    ['job_start_date',  'Job start date'],
    ['job_end_date',    'Job end date'],
  ]
  const cleanDates: Partial<Record<string, string | null | 'noop'>> = {}
  for (const [k, label] of dateFields) {
    const v = input[k]
    if (v === undefined) {
      cleanDates[k] = 'noop'
      continue
    }
    const s = (v ?? '').trim()
    if (!s) {
      cleanDates[k] = null
    } else if (!ISO_DATE_RE.test(s) || Number.isNaN(new Date(s).getTime())) {
      errors[k] = `${label} must be yyyy-mm-dd.`
    } else {
      cleanDates[k] = s
    }
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, error: 'Some fields are invalid.', errors }
  }

  // Build dynamic UPDATE
  const setParts: string[] = ['updated_at = ?']
  const binds: unknown[] = [nowIsoUtc()]

  if (sp !== 'invalid' && input.sales_price !== undefined) {
    setParts.push('sales_price_cents = ?')
    binds.push(sp)
  }
  if (ec !== 'invalid' && input.estimated_cost !== undefined) {
    setParts.push('estimated_cost_cents = ?')
    binds.push(ec)
  }
  if (winPct !== 'noop') {
    setParts.push('win_probability_pct = ?')
    binds.push(winPct)
  }
  for (const [k] of dateFields) {
    const v = cleanDates[k]
    if (v !== 'noop' && v !== undefined) {
      setParts.push(`${k} = ?`)
      binds.push(v)
    }
  }
  if (input.notes !== undefined) {
    const n = (input.notes ?? '').trim()
    setParts.push('notes = ?')
    binds.push(n || null)
  }

  if (setParts.length === 1) {
    // Only updated_at — nothing to change.
    const r = await db
      .prepare('SELECT gpm_percent FROM quotes WHERE id = ? LIMIT 1')
      .bind(quoteId)
      .first<{ gpm_percent: number | null }>()
    return { ok: true, data: { gpm_percent: r?.gpm_percent ?? null } }
  }

  binds.push(quoteId)
  await db
    .prepare(`UPDATE quotes SET ${setParts.join(', ')} WHERE id = ?`)
    .bind(...binds)
    .run()

  const r = await db
    .prepare('SELECT gpm_percent FROM quotes WHERE id = ? LIMIT 1')
    .bind(quoteId)
    .first<{ gpm_percent: number | null }>()
  return { ok: true, data: { gpm_percent: r?.gpm_percent ?? null } }
}

// ─── HISTORY READERS (for the detail page) ──────────────────────────────

export interface StageHistoryRow {
  id: number
  from_stage_id: number | null
  from_stage_name: string | null
  from_stage_color: string | null
  to_stage_id: number
  to_stage_name: string
  to_stage_color: string | null
  changed_at: string
  changed_by_name: string | null
  note: string | null
}

export async function getStageHistory(db: D1Database, quoteId: number): Promise<StageHistoryRow[]> {
  const res = await db
    .prepare(
      `SELECT sh.id,
              sh.from_stage_id,
              fs.name  AS from_stage_name,
              fs.color AS from_stage_color,
              sh.to_stage_id,
              ts.name  AS to_stage_name,
              ts.color AS to_stage_color,
              sh.changed_at,
              tm.full_name AS changed_by_name,
              sh.note
         FROM stage_history sh
         LEFT JOIN quote_stages fs ON fs.id = sh.from_stage_id
         JOIN      quote_stages ts ON ts.id = sh.to_stage_id
         LEFT JOIN team_members tm ON tm.id = sh.changed_by
        WHERE sh.quote_id = ?
        ORDER BY sh.changed_at DESC, sh.id DESC`
    )
    .bind(quoteId)
    .all<StageHistoryRow>()
  return res.results ?? []
}

export interface ContactLogRow {
  id: number
  contact_method_id: number | null
  contact_method_name: string | null
  contact_method_category: string | null
  contact_datetime: string
  direction: string | null
  our_staff_name: string | null
  client_contact_name: string | null
  subject: string | null
  notes: string
  duration_minutes: number | null
  follow_up_required: number
  follow_up_date: string | null
}

export async function getContactLog(db: D1Database, quoteId: number): Promise<ContactLogRow[]> {
  const res = await db
    .prepare(
      `SELECT cl.id,
              cl.contact_method_id,
              cm.name     AS contact_method_name,
              cm.category AS contact_method_category,
              cl.contact_datetime,
              cl.direction,
              tm.full_name AS our_staff_name,
              cl.client_contact_name,
              cl.subject,
              cl.notes,
              cl.duration_minutes,
              cl.follow_up_required,
              cl.follow_up_date
         FROM contact_log cl
         LEFT JOIN contact_methods cm ON cm.id = cl.contact_method_id
         LEFT JOIN team_members   tm ON tm.id = cl.our_staff_id
        WHERE cl.quote_id = ?
        ORDER BY cl.contact_datetime DESC, cl.id DESC`
    )
    .bind(quoteId)
    .all<ContactLogRow>()
  return res.results ?? []
}

// ─── CLIENT READER ──────────────────────────────────────────────────────

export interface ClientRow {
  id: number
  client_name: string
  client_type: string | null
  primary_contact_name: string | null
  primary_phone: string | null
  primary_email: string | null
  billing_address: string | null
}

export async function getClientById(db: D1Database, clientId: number): Promise<ClientRow | null> {
  const row = await db
    .prepare(
      `SELECT id, client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address
         FROM clients
        WHERE id = ?
        LIMIT 1`
    )
    .bind(clientId)
    .first<ClientRow>()
  return row ?? null
}
