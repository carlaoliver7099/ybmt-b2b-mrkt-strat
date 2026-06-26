/**
 * CoSai. × YBMT — RFQ Intake helpers
 * ---------------------------------------------------------------------------
 * Server-side primitives for Phase 5:
 *
 *   1. Race-safe quote-number allocator (Q-YYYY-NNNN)
 *   2. Client upsert (lookup-or-create by email or phone)
 *   3. Quote create (single transaction-like sequence)
 *   4. Form validation (returns typed { ok | errors } shape)
 *
 * Conventions:
 *   - Money in INTEGER cents (multiply incoming dollars × 100 here, never in JSX)
 *   - Datetimes stored as ISO 8601 UTC
 *   - Phone normalised via normalisePhoneAU before persist
 *   - quote_number generated atomically by SELECT MAX → INSERT chain inside
 *     a single transaction-equivalent code path. On collision (UNIQUE error),
 *     retry up to 5 times — handles the rare race between two estimators
 *     hitting the button in the same second.
 */

import { normalisePhoneAU } from './formatters'

// ─── TYPES ──────────────────────────────────────────────────────────────

export interface IntakeForm {
  // Client (always required for a new quote)
  client_name: string
  client_type: string                  // Residential | Commercial | Strata | Insurance | Government | Other
  primary_contact_name: string
  primary_phone: string
  primary_email: string
  billing_address: string

  // Quote core
  title: string
  description: string
  job_site_address: string
  line_of_business_id: string          // form field arrives as string
  scope_id: string
  region_id: string
  lead_source_id: string
  estimator_id: string                 // team_members.id
  project_manager_id: string

  // Money (DOLLARS as typed — we'll multiply by 100 server-side)
  estimated_cost: string
  sales_price: string

  // Dates (yyyy-mm-dd)
  rfq_received_date: string

  // Win probability
  win_probability_pct: string

  // Notes
  notes: string
}

export interface IntakeFieldErrors {
  client_name?: string
  client_type?: string
  primary_contact_name?: string
  primary_phone?: string
  primary_email?: string
  title?: string
  description?: string
  job_site_address?: string
  line_of_business_id?: string
  scope_id?: string
  region_id?: string
  lead_source_id?: string
  estimator_id?: string
  estimated_cost?: string
  sales_price?: string
  rfq_received_date?: string
  win_probability_pct?: string
  /** General/cross-field validation error */
  _form?: string
}

export interface ValidatedIntake {
  client_name: string
  client_type: string
  primary_contact_name: string | null
  primary_phone: string | null
  primary_email: string | null
  billing_address: string | null

  title: string
  description: string | null
  job_site_address: string | null
  line_of_business_id: number
  scope_id: number | null
  region_id: number
  lead_source_id: number | null
  estimator_id: number | null
  project_manager_id: number | null

  estimated_cost_cents: number | null
  sales_price_cents: number | null

  rfq_received_date: string
  rfq_received_at: string             // ISO UTC at 09:00 Brisbane on the rfq_received_date
  win_probability_pct: number | null

  notes: string | null
}

// ─── VALIDATION ─────────────────────────────────────────────────────────

const CLIENT_TYPES = new Set([
  'Residential', 'Commercial', 'Strata', 'Insurance', 'Government', 'Other',
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

export function validateIntake(form: IntakeForm): { ok: true; data: ValidatedIntake } | { ok: false; errors: IntakeFieldErrors } {
  const errors: IntakeFieldErrors = {}

  // ── Client ──
  const client_name = (form.client_name ?? '').trim()
  if (!client_name) errors.client_name = 'Client name is required.'
  else if (client_name.length > 200) errors.client_name = 'Client name is too long (max 200).'

  const client_type = (form.client_type ?? '').trim()
  if (!client_type) errors.client_type = 'Choose a client type.'
  else if (!CLIENT_TYPES.has(client_type)) errors.client_type = 'Choose a valid client type.'

  const primary_contact_name = (form.primary_contact_name ?? '').trim() || null

  const primary_phone_raw = (form.primary_phone ?? '').trim()
  const primary_phone = primary_phone_raw ? normalisePhoneAU(primary_phone_raw) : null

  const primary_email_raw = (form.primary_email ?? '').trim().toLowerCase()
  let primary_email: string | null = null
  if (primary_email_raw) {
    if (!EMAIL_RE.test(primary_email_raw)) {
      errors.primary_email = 'Enter a valid email address (or leave blank).'
    } else {
      primary_email = primary_email_raw
    }
  }

  // At least one contact channel
  if (!primary_phone && !primary_email) {
    errors.primary_phone = errors.primary_phone ?? 'Provide at least a phone or email.'
  }

  const billing_address = (form.billing_address ?? '').trim() || null

  // ── Quote ──
  const title = (form.title ?? '').trim()
  if (!title) errors.title = 'A quote title is required.'
  else if (title.length > 200) errors.title = 'Title is too long (max 200).'

  const description = (form.description ?? '').trim() || null
  const job_site_address = (form.job_site_address ?? '').trim() || null

  const line_of_business_id = parseId(form.line_of_business_id)
  if (line_of_business_id === null) errors.line_of_business_id = 'Choose a line of business.'

  const scope_id = parseId(form.scope_id) // optional but recommended

  const region_id = parseId(form.region_id)
  if (region_id === null) errors.region_id = 'Choose a region.'

  const lead_source_id = parseId(form.lead_source_id)
  const estimator_id = parseId(form.estimator_id)
  const project_manager_id = parseId(form.project_manager_id)

  // Money — accept "$1,234.56" / "1234.56" / "" — render as cents int
  const estimated_cost_cents = parseDollarsToCents(form.estimated_cost)
  if (estimated_cost_cents === 'invalid') {
    errors.estimated_cost = 'Enter a valid dollar amount (e.g. 12500 or 12500.50).'
  }
  const sales_price_cents = parseDollarsToCents(form.sales_price)
  if (sales_price_cents === 'invalid') {
    errors.sales_price = 'Enter a valid dollar amount (e.g. 12500 or 12500.50).'
  }

  // RFQ date
  const rfq_received_date = (form.rfq_received_date ?? '').trim()
  if (!rfq_received_date) {
    errors.rfq_received_date = 'When did the RFQ come in?'
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(rfq_received_date)) {
    errors.rfq_received_date = 'Use yyyy-mm-dd.'
  } else if (Number.isNaN(new Date(rfq_received_date).getTime())) {
    errors.rfq_received_date = 'Not a valid date.'
  }

  // Win probability
  let win_probability_pct: number | null = null
  if ((form.win_probability_pct ?? '').trim()) {
    const n = Number(form.win_probability_pct)
    if (!Number.isFinite(n) || n < 0 || n > 100) {
      errors.win_probability_pct = '0–100 only.'
    } else {
      win_probability_pct = Math.round(n)
    }
  }

  const notes = (form.notes ?? '').trim() || null

  if (Object.keys(errors).length > 0) return { ok: false, errors }

  // Build rfq_received_at — 09:00 Brisbane time on the rfq_received_date,
  // converted to UTC. Brisbane = AEST = UTC+10 (no DST), so 09:00 AEST = 23:00 UTC the prior day.
  const rfq_received_at = isoUtcForBrisbaneDateTime(rfq_received_date, 9, 0)

  return {
    ok: true,
    data: {
      client_name,
      client_type,
      primary_contact_name,
      primary_phone,
      primary_email,
      billing_address,
      title,
      description,
      job_site_address,
      line_of_business_id: line_of_business_id!,
      scope_id,
      region_id: region_id!,
      lead_source_id,
      estimator_id,
      project_manager_id,
      estimated_cost_cents: estimated_cost_cents === 'invalid' || estimated_cost_cents === null ? null : estimated_cost_cents,
      sales_price_cents: sales_price_cents === 'invalid' || sales_price_cents === null ? null : sales_price_cents,
      rfq_received_date,
      rfq_received_at,
      win_probability_pct,
      notes,
    },
  }
}

function parseId(v: string | undefined | null): number | null {
  if (!v) return null
  const s = v.trim()
  if (!s) return null
  const n = Number(s)
  if (!Number.isInteger(n) || n <= 0) return null
  return n
}

function parseDollarsToCents(raw: string | undefined | null): number | null | 'invalid' {
  if (!raw) return null
  const cleaned = raw.replace(/[$,\s]/g, '')
  if (!cleaned) return null
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return 'invalid'
  const dollars = Number(cleaned)
  if (!Number.isFinite(dollars) || dollars < 0) return 'invalid'
  return Math.round(dollars * 100)
}

/**
 * Build an ISO 8601 UTC string for the given Brisbane local date + 24-hour time.
 * Brisbane is fixed UTC+10 (no DST) so we just subtract 10 hours.
 */
function isoUtcForBrisbaneDateTime(yyyy_mm_dd: string, hour: number, minute: number): string {
  const [y, m, d] = yyyy_mm_dd.split('-').map(Number)
  // Construct as UTC, then shift back by 10h to represent the Brisbane local moment
  const utcMs = Date.UTC(y, (m ?? 1) - 1, d ?? 1, hour - 10, minute, 0)
  return new Date(utcMs).toISOString()
}

// ─── QUOTE NUMBER ALLOCATOR (race-safe) ────────────────────────────────

/**
 * Allocate the next quote_number for the given year.
 * Strategy: SELECT MAX → format → INSERT (caller). Inserts may fail with
 * UNIQUE constraint if another writer beat us; the caller retries.
 *
 * Returns the formatted string (e.g. "Q-2026-0030") and the underlying
 * sequence number.
 */
export async function nextQuoteNumber(
  db: D1Database,
  year: number,
  isRequote = false
): Promise<{ quote_number: string; n: number }> {
  const yearPrefix = `Q-${year}-`
  const row = await db
    .prepare(
      `SELECT MAX(CAST(SUBSTR(quote_number, ?, 4) AS INTEGER)) AS max_n
         FROM quotes
        WHERE quote_number LIKE ? || '%'`
    )
    .bind(yearPrefix.length + 1, yearPrefix)
    .first<{ max_n: number | null }>()
  const next = (row?.max_n ?? 0) + 1
  const padded = next.toString().padStart(4, '0')
  return {
    quote_number: `${yearPrefix}${padded}${isRequote ? 'R' : ''}`,
    n: next,
  }
}

// ─── CLIENT UPSERT ─────────────────────────────────────────────────────

/**
 * Look up an existing client by primary_email or normalised primary_phone;
 * if none found, create one. Returns the client id.
 *
 * Phase 5 keeps this simple — Phase 6/7 may surface a UI confirmation
 * ("Did you mean: existing client X?") before creating duplicates.
 */
export async function upsertClient(
  db: D1Database,
  v: ValidatedIntake
): Promise<number> {
  // Try lookup by email first (more unique than phone)
  if (v.primary_email) {
    const row = await db
      .prepare(`SELECT id FROM clients WHERE LOWER(primary_email) = ? LIMIT 1`)
      .bind(v.primary_email.toLowerCase())
      .first<{ id: number }>()
    if (row?.id) return row.id
  }
  if (v.primary_phone) {
    const row = await db
      .prepare(`SELECT id FROM clients WHERE primary_phone = ? LIMIT 1`)
      .bind(v.primary_phone)
      .first<{ id: number }>()
    if (row?.id) return row.id
  }

  // Create new client
  const result = await db
    .prepare(
      `INSERT INTO clients (
         client_name, client_type, primary_contact_name,
         primary_phone, primary_email, billing_address, is_sample
       ) VALUES (?, ?, ?, ?, ?, ?, 0)`
    )
    .bind(
      v.client_name,
      v.client_type,
      v.primary_contact_name,
      v.primary_phone,
      v.primary_email,
      v.billing_address
    )
    .run()
  const id = (result.meta as { last_row_id?: number }).last_row_id
  if (!id) throw new Error('Client insert returned no id')
  return id
}

// ─── QUOTE CREATE ──────────────────────────────────────────────────────

export interface CreatedQuote {
  quote_id: number
  quote_number: string
}

/**
 * Create the quote row with stage_id=1 (RFQ Received), allocate a quote_number,
 * and insert an initial stage_history row.
 *
 * Race-safe: if quote_number collides on UNIQUE, retry up to 5 times.
 */
export async function createQuote(
  db: D1Database,
  client_id: number,
  v: ValidatedIntake,
  createdByTeamMemberId: number | null = null
): Promise<CreatedQuote> {
  const year = new Date(v.rfq_received_at).getUTCFullYear()
  const STAGE_RFQ_RECEIVED = 1

  let lastError: unknown = null
  for (let attempt = 0; attempt < 5; attempt++) {
    const { quote_number } = await nextQuoteNumber(db, year, false)
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
             is_requote, requote_opportunity, is_sample,
             notes
           ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0, 0, ?)`
        )
        .bind(
          quote_number,
          client_id,
          v.scope_id,
          STAGE_RFQ_RECEIVED,
          v.title,
          v.description,
          v.job_site_address,
          v.estimator_id,
          v.project_manager_id,
          v.line_of_business_id,
          v.region_id,
          v.lead_source_id,
          v.rfq_received_date,
          v.rfq_received_at,
          v.estimated_cost_cents,
          v.sales_price_cents,
          v.win_probability_pct,
          v.notes
        )
        .run()
      const quote_id = (insert.meta as { last_row_id?: number }).last_row_id
      if (!quote_id) throw new Error('Quote insert returned no id')

      // Initial stage history (from null → RFQ Received)
      await db
        .prepare(
          `INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)
           VALUES (?, NULL, ?, ?, 'RFQ logged via /crm/quotes/new')`
        )
        .bind(quote_id, STAGE_RFQ_RECEIVED, createdByTeamMemberId)
        .run()

      return { quote_id, quote_number }
    } catch (err) {
      lastError = err
      const msg = String((err as Error)?.message ?? err)
      if (msg.includes('UNIQUE') || msg.includes('constraint')) {
        // Collision on quote_number — retry with a freshly-allocated number
        continue
      }
      throw err
    }
  }
  throw new Error(`createQuote failed after 5 attempts: ${String(lastError)}`)
}
