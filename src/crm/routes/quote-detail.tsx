/**
 * CoSai. × YBMT — Phase 6 Quote Detail
 * ---------------------------------------------------------------------------
 * Single-quote operating page. Five capabilities on one screen:
 *
 *   1. Quote header  · number · client · current stage · sample/requote badges
 *   2. KPI strip     · sales · cost · GPM · win% · age · last touchpoint
 *   3. Edit panel    · sales / cost / win% / dates / notes (POST /:id/edit)
 *   4. Stage panel   · forward + back transition buttons (POST /:id/transition)
 *                       terminal moves capture reason (Won → text · Rejected → dropdown)
 *                       Requote button appears on rejected + requote-eligible (POST /:id/requote)
 *   5. Contact logger· method · direction · subject · notes · follow-up (POST /:id/log-contact)
 *   6. History       · stage_history timeline · contact_log timeline
 *
 * All POSTs redirect back to /:id?<toast params> on success.
 * On validation failure the page re-renders with sticky form values + per-panel errors.
 *
 * Brand-locked. Mount expectation: this router is mounted under quotesApp
 * which already inherits requireAuth() from /crm/quotes/* in app.tsx.
 */

import { Hono } from 'hono'
import { PageShell } from '../components/page-shell'
import { stagePillStyle } from '../lib/brand'
import {
  money,
  moneyCompact,
  pct,
  date,
  dateTime,
  ago,
  dateInputValue,
  hoursSince,
} from '../lib/formatters'
import {
  getQuoteStages,
  getRejectReasons,
  getContactMethods,
  type QuoteStage,
  type RejectReason,
  type ContactMethod,
} from '../lib/db'
import {
  getQuoteById,
  getClientById,
  getStageHistory,
  getContactLog,
  transitionStage,
  logContact,
  createRequote,
  updateQuoteFields,
  resolveActor,
  TERMINAL_STAGES,
  STAGE_REJECTED,
  STAGE_WON,
  STAGE_LOST,
  STAGE_QUOTE_SENT,
  type QuoteRow,
  type ClientRow,
  type StageHistoryRow,
  type ContactLogRow,
  type EditFieldErrors,
} from '../lib/quote-actions'
import type { AuthContext } from '../lib/middleware'

export const quoteDetailApp = new Hono<AuthContext>()

// ─── GET /:id · render the page ─────────────────────────────────────────

quoteDetailApp.get('/:id', async (c) => {
  return renderDetail(c, null)
})

// ─── POST /:id/edit · patch editable fields ────────────────────────────

quoteDetailApp.post('/:id/edit', async (c) => {
  const id = parseId(c.req.param('id'))
  if (id === null) return c.redirect('/crm/quotes', 302)

  const body = await c.req.parseBody()
  const input = {
    sales_price:        getStr(body.sales_price),
    estimated_cost:     getStr(body.estimated_cost),
    win_probability_pct: getStr(body.win_probability_pct),
    quote_sent_date:    getStr(body.quote_sent_date),
    decision_date:      getStr(body.decision_date),
    job_start_date:     getStr(body.job_start_date),
    job_end_date:       getStr(body.job_end_date),
    notes:              getStr(body.notes),
  }
  const result = await updateQuoteFields(c.env.DB, id, input)
  if (!result.ok) {
    return renderDetail(c, {
      kind: 'edit',
      errors: result.errors ?? { _form: result.error },
      stickyEdit: input,
    })
  }
  return c.redirect(`/crm/quotes/${id}?edited=1`, 302)
})

// ─── POST /:id/transition · move stage ──────────────────────────────────

quoteDetailApp.post('/:id/transition', async (c) => {
  const id = parseId(c.req.param('id'))
  if (id === null) return c.redirect('/crm/quotes', 302)

  const body = await c.req.parseBody()
  const to_stage_id = parseId(getStr(body.to_stage_id))
  if (to_stage_id === null) {
    return renderDetail(c, { kind: 'transition', error: 'Pick a target stage.' })
  }

  const user = c.get('user')
  const actor = await resolveActor(c.env.DB, user)

  const reject_reason_id = parseId(getStr(body.reject_reason_id))
  const reject_notes = getStr(body.reject_notes) || null
  const accept_reason = getStr(body.accept_reason) || null
  const note = getStr(body.note) || null

  const result = await transitionStage(c.env.DB, id, actor, {
    to_stage_id,
    reject_reason_id,
    reject_notes,
    accept_reason,
    note,
  })
  if (!result.ok) {
    return renderDetail(c, { kind: 'transition', error: result.error })
  }
  return c.redirect(`/crm/quotes/${id}?moved=${to_stage_id}`, 302)
})

// ─── POST /:id/log-contact · append to contact_log ─────────────────────

quoteDetailApp.post('/:id/log-contact', async (c) => {
  const id = parseId(c.req.param('id'))
  if (id === null) return c.redirect('/crm/quotes', 302)

  const body = await c.req.parseBody()
  const contact_method_id = parseId(getStr(body.contact_method_id))
  const direction = getStr(body.direction)
  const dateStr = getStr(body.contact_date)        // yyyy-mm-dd
  const timeStr = getStr(body.contact_time)        // HH:MM (Brisbane local)
  const client_contact_name = getStr(body.client_contact_name) || null
  const subject = getStr(body.subject) || null
  const notes = getStr(body.notes)
  const duration_minutes_raw = getStr(body.duration_minutes)
  const follow_up_required = getStr(body.follow_up_required) === 'on'
  const follow_up_date = getStr(body.follow_up_date) || null

  // Sticky form values for re-render
  const sticky = {
    contact_method_id: getStr(body.contact_method_id),
    direction,
    contact_date: dateStr,
    contact_time: timeStr,
    client_contact_name: client_contact_name ?? '',
    subject: subject ?? '',
    notes,
    duration_minutes: duration_minutes_raw,
    follow_up_required,
    follow_up_date: follow_up_date ?? '',
  }

  if (!contact_method_id) {
    return renderDetail(c, {
      kind: 'log',
      error: 'Choose a contact method.',
      stickyLog: sticky,
    })
  }
  if (direction !== 'Inbound' && direction !== 'Outbound' && direction !== 'Internal') {
    return renderDetail(c, {
      kind: 'log',
      error: 'Choose a direction (Inbound, Outbound, or Internal).',
      stickyLog: sticky,
    })
  }
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return renderDetail(c, {
      kind: 'log',
      error: 'Enter the contact date (yyyy-mm-dd).',
      stickyLog: sticky,
    })
  }
  const [hStr, mStr] = (timeStr || '09:00').split(':')
  const hh = Number(hStr)
  const mm = Number(mStr)
  if (!Number.isInteger(hh) || hh < 0 || hh > 23 || !Number.isInteger(mm) || mm < 0 || mm > 59) {
    return renderDetail(c, {
      kind: 'log',
      error: 'Enter a valid time (HH:MM, 24-hour).',
      stickyLog: sticky,
    })
  }
  if (!notes.trim()) {
    return renderDetail(c, {
      kind: 'log',
      error: 'Notes are required — capture what was discussed.',
      stickyLog: sticky,
    })
  }
  let duration_minutes: number | null = null
  if (duration_minutes_raw.trim()) {
    const n = Number(duration_minutes_raw)
    if (!Number.isFinite(n) || n < 0 || n > 24 * 60) {
      return renderDetail(c, {
        kind: 'log',
        error: 'Duration must be a positive number of minutes (max 1440).',
        stickyLog: sticky,
      })
    }
    duration_minutes = Math.round(n)
  }
  if (follow_up_required && !follow_up_date) {
    return renderDetail(c, {
      kind: 'log',
      error: 'When follow-up is required, set the follow-up date.',
      stickyLog: sticky,
    })
  }
  if (follow_up_date && !/^\d{4}-\d{2}-\d{2}$/.test(follow_up_date)) {
    return renderDetail(c, {
      kind: 'log',
      error: 'Follow-up date must be yyyy-mm-dd.',
      stickyLog: sticky,
    })
  }

  // Build ISO UTC from Brisbane local date + time (Brisbane = UTC+10 no DST)
  const [y, mo, d] = dateStr.split('-').map(Number)
  const utcMs = Date.UTC(y, (mo ?? 1) - 1, d ?? 1, hh - 10, mm, 0)
  const contact_datetime = new Date(utcMs).toISOString()

  const user = c.get('user')
  const actor = await resolveActor(c.env.DB, user)

  const result = await logContact(c.env.DB, id, actor, {
    contact_method_id,
    direction,
    contact_datetime,
    client_contact_name,
    subject,
    notes,
    duration_minutes,
    follow_up_required,
    follow_up_date,
  })
  if (!result.ok) {
    return renderDetail(c, {
      kind: 'log',
      error: result.error,
      stickyLog: sticky,
    })
  }
  return c.redirect(`/crm/quotes/${id}?logged=1`, 302)
})

// ─── POST /:id/requote · clone rejected into new requote ───────────────

quoteDetailApp.post('/:id/requote', async (c) => {
  const id = parseId(c.req.param('id'))
  if (id === null) return c.redirect('/crm/quotes', 302)

  const user = c.get('user')
  const actor = await resolveActor(c.env.DB, user)

  const result = await createRequote(c.env.DB, id, actor)
  if (!result.ok) {
    return renderDetail(c, { kind: 'requote', error: result.error })
  }
  return c.redirect(`/crm/quotes/${result.data.quote_id}?requoted=${encodeURIComponent(result.data.quote_number)}`, 302)
})

// ─── render helper ──────────────────────────────────────────────────────

type PanelError =
  | { kind: 'edit'; errors: EditFieldErrors; stickyEdit: Record<string, string> }
  | { kind: 'transition'; error: string }
  | { kind: 'log'; error: string; stickyLog: LogStickyForm }
  | { kind: 'requote'; error: string }

interface LogStickyForm {
  contact_method_id: string
  direction: string
  contact_date: string
  contact_time: string
  client_contact_name: string
  subject: string
  notes: string
  duration_minutes: string
  follow_up_required: boolean
  follow_up_date: string
}

async function renderDetail(c: any, panel: PanelError | null) {
  const id = parseId(c.req.param('id'))
  if (id === null) return c.redirect('/crm/quotes', 302)

  const db = c.env.DB
  const user = c.get('user')

  const quote = await getQuoteById(db, id)
  if (!quote) {
    return c.html(
      <PageShell title="Quote not found" active="quotes" user={user}>
        <div class="page">
          <h1>Quote not found</h1>
          <p class="text-muted">Quote #{id} doesn't exist (or was deleted).</p>
          <p style={{ marginTop: '20px' }}><a href="/crm/quotes" class="btn btn-secondary">← Back to quotes</a></p>
        </div>
      </PageShell>,
      404
    )
  }

  const [client, stages, rejectReasons, contactMethods, history, contacts] = await Promise.all([
    getClientById(db, quote.client_id),
    getQuoteStages(db),
    getRejectReasons(db),
    getContactMethods(db),
    getStageHistory(db, id),
    getContactLog(db, id),
  ])

  // Parent quote info if this is a requote
  let parentInfo: { id: number; quote_number: string } | null = null
  if (quote.parent_quote_id) {
    const p = await db
      .prepare('SELECT id, quote_number FROM quotes WHERE id = ? LIMIT 1')
      .bind(quote.parent_quote_id)
      .first<{ id: number; quote_number: string }>()
    parentInfo = p ?? null
  }

  // Reject reason label for header if rejected
  let rejectReasonLabel: string | null = null
  let rejectReasonRequoteEligible = false
  if (quote.reject_reason_id) {
    const r = rejectReasons.find((rr) => rr.id === quote.reject_reason_id)
    if (r) {
      rejectReasonLabel = r.reason
      rejectReasonRequoteEligible = r.is_requote_eligible === 1
    }
  }

  // Toasts from query string
  const editedToast    = c.req.query('edited') === '1'
  const loggedToast    = c.req.query('logged') === '1'
  const movedToastId   = parseId(c.req.query('moved') ?? null)
  const requotedToastQ = c.req.query('requoted') ?? null

  const movedToStage = movedToastId !== null ? stages.find((s) => s.id === movedToastId) : null

  return c.html(
    <QuoteDetailPage
      user={user}
      quote={quote}
      client={client}
      stages={stages}
      rejectReasons={rejectReasons}
      contactMethods={contactMethods}
      history={history}
      contacts={contacts}
      parentInfo={parentInfo}
      rejectReasonLabel={rejectReasonLabel}
      rejectReasonRequoteEligible={rejectReasonRequoteEligible}
      panel={panel}
      editedToast={editedToast}
      loggedToast={loggedToast}
      movedToStage={movedToStage ?? null}
      requotedToastQ={requotedToastQ}
      now={new Date()}
    />
  )
}

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────

interface QuoteDetailPageProps {
  user: { name: string; role: string }
  quote: QuoteRow
  client: ClientRow | null
  stages: QuoteStage[]
  rejectReasons: RejectReason[]
  contactMethods: ContactMethod[]
  history: StageHistoryRow[]
  contacts: ContactLogRow[]
  parentInfo: { id: number; quote_number: string } | null
  rejectReasonLabel: string | null
  rejectReasonRequoteEligible: boolean
  panel: PanelError | null
  editedToast: boolean
  loggedToast: boolean
  movedToStage: QuoteStage | null
  requotedToastQ: string | null
  now: Date
}

const QuoteDetailPage = ({
  user, quote, client, stages, rejectReasons, contactMethods, history, contacts,
  parentInfo, rejectReasonLabel, rejectReasonRequoteEligible,
  panel, editedToast, loggedToast, movedToStage, requotedToastQ, now,
}: QuoteDetailPageProps) => {
  const currentStage = stages.find((s) => s.id === quote.stage_id) ?? null
  const isTerminal = TERMINAL_STAGES.has(quote.stage_id)
  const canRequote = quote.stage_id === STAGE_REJECTED && rejectReasonRequoteEligible
  const editSticky = panel?.kind === 'edit' ? panel.stickyEdit : null
  const editErrors = panel?.kind === 'edit' ? panel.errors : null
  const transitionError = panel?.kind === 'transition' ? panel.error : null
  const logError = panel?.kind === 'log' ? panel.error : null
  const requoteError = panel?.kind === 'requote' ? panel.error : null
  const logSticky = panel?.kind === 'log' ? panel.stickyLog : null

  // Age (hours since rfq_received_at)
  const ageHours = hoursSince(quote.rfq_received_at, now)
  const ageLabel = ageHours === null
    ? '—'
    : ageHours < 24
      ? `${Math.round(ageHours)}h`
      : `${Math.round(ageHours / 24)}d`

  // Editable defaults
  const ed = (k: string, fallback: string) => (editSticky?.[k] ?? fallback)

  // Forward stages = non-terminal stages with sort_order > current
  // Back stages    = non-terminal stages with sort_order < current
  // Plus terminal stages always available if currently non-terminal
  const currentOrder = currentStage?.sort_order ?? 0
  const forwardStages = stages.filter((s) => s.is_terminal === 0 && s.sort_order > currentOrder)
  const backStages    = stages.filter((s) => s.is_terminal === 0 && s.sort_order < currentOrder)
  const terminalStages = stages.filter((s) => s.is_terminal === 1)

  return (
    <PageShell title={`${quote.quote_number} · ${quote.title}`} active="quotes" user={user}>
      <style>{detailCss}</style>
      <div class="page detail-page">

        {/* Breadcrumb + toasts */}
        <div class="detail-breadcrumb">
          <a href="/crm/quotes">← Quotes</a>
          <span class="sep">·</span>
          <span class="mono">{quote.quote_number}</span>
        </div>

        {editedToast && (
          <div role="status" class="toast toast-success">
            Saved. {quote.gpm_percent !== null && <>GPM is now <strong>{pct(quote.gpm_percent)}</strong>.</>}
          </div>
        )}
        {loggedToast && (
          <div role="status" class="toast toast-success">
            Contact logged. Last touchpoint updated.
          </div>
        )}
        {movedToStage && (
          <div role="status" class="toast toast-success">
            Moved to <strong>{movedToStage.name}</strong>.
          </div>
        )}
        {requotedToastQ && (
          <div role="status" class="toast toast-brass">
            New requote created — viewing it now: <strong class="mono">{requotedToastQ}</strong>
          </div>
        )}

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <header class="detail-header card">
          <div class="detail-header-main">
            <div class="detail-header-titles">
              <div class="detail-header-row">
                <h1 class="mono detail-quote-no">{quote.quote_number}</h1>
                {currentStage && (
                  <span class="stage-pill" style={stagePillStyle(currentStage.color ?? '#64748b')}>
                    {currentStage.name}
                  </span>
                )}
                {quote.is_sample === 1 && <span class="badge badge-sample">SAMPLE</span>}
                {quote.is_requote === 1 && <span class="badge badge-requote">REQUOTE</span>}
              </div>
              <h2 class="detail-title">{quote.title}</h2>
              {client && (
                <p class="detail-client">
                  <strong>{client.client_name}</strong>
                  {client.client_type && <> · <span class="text-muted">{client.client_type}</span></>}
                  {client.primary_contact_name && <> · {client.primary_contact_name}</>}
                  {client.primary_phone && <> · <span class="mono">{client.primary_phone}</span></>}
                  {client.primary_email && <> · <span class="mono">{client.primary_email}</span></>}
                </p>
              )}
              {quote.description && <p class="detail-description text-muted">{quote.description}</p>}
              {quote.job_site_address && (
                <p class="detail-meta"><span class="caption">JOB SITE</span> {quote.job_site_address}</p>
              )}
              {parentInfo && (
                <p class="detail-meta">
                  <span class="caption">REQUOTE OF</span>{' '}
                  <a href={`/crm/quotes/${parentInfo.id}`} class="mono">{parentInfo.quote_number}</a>
                </p>
              )}
              {isTerminal && quote.stage_id === STAGE_REJECTED && rejectReasonLabel && (
                <p class="detail-meta">
                  <span class="caption">REJECTED</span> {rejectReasonLabel}
                  {rejectReasonRequoteEligible && <span class="brass-glyph"> · ↻ requote-eligible</span>}
                  {quote.reject_notes && <> · <span class="text-muted">{quote.reject_notes}</span></>}
                </p>
              )}
              {isTerminal && quote.stage_id === STAGE_WON && quote.accept_reason && (
                <p class="detail-meta">
                  <span class="caption">WON</span> {quote.accept_reason}
                </p>
              )}
            </div>
          </div>

          {/* KPI strip */}
          <div class="detail-kpis">
            <div class="kpi">
              <span class="kpi-label">Sales</span>
              <span class="kpi-value">{quote.sales_price_cents !== null ? money(quote.sales_price_cents / 100) : '—'}</span>
            </div>
            <div class="kpi">
              <span class="kpi-label">Est. cost</span>
              <span class="kpi-value">{quote.estimated_cost_cents !== null ? money(quote.estimated_cost_cents / 100) : '—'}</span>
            </div>
            <div class="kpi">
              <span class="kpi-label">GPM</span>
              <span class={`kpi-value ${gpmTone(quote.gpm_percent)}`}>{pct(quote.gpm_percent)}</span>
            </div>
            <div class="kpi">
              <span class="kpi-label">Win %</span>
              <span class="kpi-value">{quote.win_probability_pct !== null ? `${quote.win_probability_pct}%` : '—'}</span>
            </div>
            <div class="kpi">
              <span class="kpi-label">Age</span>
              <span class="kpi-value">{ageLabel}</span>
            </div>
            <div class="kpi">
              <span class="kpi-label">Last touch</span>
              <span class="kpi-value mono">{ago(quote.last_touchpoint_at, now)}</span>
            </div>
          </div>
        </header>

        {/* ── TWO-COLUMN BODY ─────────────────────────────────────── */}
        <div class="detail-grid">

          {/* LEFT: edit · transitions · logger */}
          <div class="detail-col-left">

            {/* EDIT panel */}
            <section class="card detail-panel">
              <header class="panel-header">
                <h3>Edit fields</h3>
                <span class="caption">Numbers in dollars · dates yyyy-mm-dd</span>
              </header>
              {editErrors?._form && (
                <div role="alert" class="form-banner-error">{editErrors._form}</div>
              )}
              <form method="post" action={`/crm/quotes/${quote.id}/edit`} class="detail-form" novalidate>
                <div class="form-grid-2">
                  <Field label="Sales price ($)" name="sales_price" error={editErrors?.sales_price}>
                    <input id="sales_price" name="sales_price" class="input" inputmode="decimal" placeholder="0.00"
                      value={ed('sales_price', quote.sales_price_cents !== null ? (quote.sales_price_cents / 100).toFixed(2) : '')}
                      aria-invalid={editErrors?.sales_price ? 'true' : undefined} />
                  </Field>
                  <Field label="Estimated cost ($)" name="estimated_cost" error={editErrors?.estimated_cost}>
                    <input id="estimated_cost" name="estimated_cost" class="input" inputmode="decimal" placeholder="0.00"
                      value={ed('estimated_cost', quote.estimated_cost_cents !== null ? (quote.estimated_cost_cents / 100).toFixed(2) : '')}
                      aria-invalid={editErrors?.estimated_cost ? 'true' : undefined} />
                  </Field>
                  <Field label="Win probability %" name="win_probability_pct" error={editErrors?.win_probability_pct} help="0–100 integer">
                    <input id="win_probability_pct" name="win_probability_pct" class="input" inputmode="numeric"
                      value={ed('win_probability_pct', quote.win_probability_pct !== null ? String(quote.win_probability_pct) : '')}
                      aria-invalid={editErrors?.win_probability_pct ? 'true' : undefined} />
                  </Field>
                  <div class="field"><span class="label">GPM (computed)</span>
                    <div class="readonly-field mono">{pct(quote.gpm_percent)}</div>
                    <span class="help">Auto-computed from sales − cost on save.</span>
                  </div>
                  <Field label="Quote sent date" name="quote_sent_date" error={editErrors?.quote_sent_date}>
                    <input id="quote_sent_date" name="quote_sent_date" type="date" class="input"
                      value={ed('quote_sent_date', dateInputValue(quote.quote_sent_date))}
                      aria-invalid={editErrors?.quote_sent_date ? 'true' : undefined} />
                  </Field>
                  <Field label="Decision date" name="decision_date" error={editErrors?.decision_date}>
                    <input id="decision_date" name="decision_date" type="date" class="input"
                      value={ed('decision_date', dateInputValue(quote.decision_date))}
                      aria-invalid={editErrors?.decision_date ? 'true' : undefined} />
                  </Field>
                  <Field label="Job start" name="job_start_date" error={editErrors?.job_start_date}>
                    <input id="job_start_date" name="job_start_date" type="date" class="input"
                      value={ed('job_start_date', dateInputValue(quote.job_start_date))} />
                  </Field>
                  <Field label="Job end" name="job_end_date" error={editErrors?.job_end_date}>
                    <input id="job_end_date" name="job_end_date" type="date" class="input"
                      value={ed('job_end_date', dateInputValue(quote.job_end_date))} />
                  </Field>
                </div>
                <Field label="Notes" name="notes">
                  <textarea id="notes" name="notes" class="input" rows={3}>{ed('notes', quote.notes ?? '')}</textarea>
                </Field>
                <div class="form-actions">
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
            </section>

            {/* STAGE TRANSITION panel — only for non-terminal */}
            {!isTerminal && (
              <section class="card detail-panel">
                <header class="panel-header">
                  <h3>Move stage</h3>
                  <span class="caption">Every move is logged · current = <strong>{currentStage?.name}</strong></span>
                </header>
                {transitionError && (
                  <div role="alert" class="form-banner-error">{transitionError}</div>
                )}

                {/* Forward / back quick buttons (no reason capture needed) */}
                {(forwardStages.length > 0 || backStages.length > 0) && (
                  <div class="transition-grid">
                    {forwardStages.map((s) => (
                      <form method="post" action={`/crm/quotes/${quote.id}/transition`} class="transition-form">
                        <input type="hidden" name="to_stage_id" value={String(s.id)} />
                        <button type="submit" class="btn btn-stage" style={stagePillStyle(s.color ?? '#64748b')}>
                          → {s.name}
                        </button>
                      </form>
                    ))}
                    {backStages.map((s) => (
                      <form method="post" action={`/crm/quotes/${quote.id}/transition`} class="transition-form">
                        <input type="hidden" name="to_stage_id" value={String(s.id)} />
                        <button type="submit" class="btn btn-stage btn-stage-back" style={stagePillStyle(s.color ?? '#64748b')}>
                          ← {s.name}
                        </button>
                      </form>
                    ))}
                  </div>
                )}

                {/* Terminal moves — each needs reason capture */}
                <div class="terminal-row">
                  {/* Won */}
                  <form method="post" action={`/crm/quotes/${quote.id}/transition`} class="terminal-form">
                    <input type="hidden" name="to_stage_id" value={String(STAGE_WON)} />
                    <h4 class="terminal-h">Move to Won</h4>
                    <Field label="Accept reason" name="accept_reason" required>
                      <input name="accept_reason" class="input" placeholder="Why did we win this?" required />
                    </Field>
                    <button type="submit" class="btn btn-primary btn-won">Mark Won</button>
                  </form>

                  {/* Rejected */}
                  <form method="post" action={`/crm/quotes/${quote.id}/transition`} class="terminal-form">
                    <input type="hidden" name="to_stage_id" value={String(STAGE_REJECTED)} />
                    <h4 class="terminal-h">Move to Rejected</h4>
                    <Field label="Reject reason" name="reject_reason_id" required>
                      <select name="reject_reason_id" class="input" required>
                        <option value="">— Choose —</option>
                        {rejectReasons.filter(r => r.active === 1).map((r) => (
                          <option value={String(r.id)}>
                            {r.reason}{r.is_requote_eligible === 1 ? ' · ↻' : ''}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Notes (optional)" name="reject_notes">
                      <input name="reject_notes" class="input" placeholder="Extra context" />
                    </Field>
                    <button type="submit" class="btn btn-danger">Mark Rejected</button>
                  </form>

                  {/* Lost */}
                  <form method="post" action={`/crm/quotes/${quote.id}/transition`} class="terminal-form">
                    <input type="hidden" name="to_stage_id" value={String(STAGE_LOST)} />
                    <h4 class="terminal-h">Move to Lost / Withdrawn</h4>
                    <Field label="Note (optional)" name="note">
                      <input name="note" class="input" placeholder="Why is this lost?" />
                    </Field>
                    <button type="submit" class="btn btn-secondary">Mark Lost</button>
                  </form>
                </div>
              </section>
            )}

            {/* REQUOTE panel — only when rejected + requote-eligible */}
            {isTerminal && quote.stage_id === STAGE_REJECTED && (
              <section class="card detail-panel">
                <header class="panel-header">
                  <h3>Requote opportunity</h3>
                  <span class="caption">
                    {canRequote
                      ? 'This reject reason is flagged requote-eligible.'
                      : 'This reject reason is not flagged requote-eligible.'}
                  </span>
                </header>
                {requoteError && (
                  <div role="alert" class="form-banner-error">{requoteError}</div>
                )}
                {canRequote ? (
                  <form method="post" action={`/crm/quotes/${quote.id}/requote`}>
                    <p class="text-muted" style={{ marginBottom: '12px' }}>
                      Clone this quote into a new <strong>Q-…R</strong> at <strong>Re-quote / Negotiation</strong>.
                      Client, scope, and numbers will carry over.
                    </p>
                    <button type="submit" class="btn btn-brass">↻ Start requote</button>
                  </form>
                ) : (
                  <p class="text-muted">No requote action available.</p>
                )}
              </section>
            )}

            {/* CONTACT LOGGER panel */}
            <section class="card detail-panel">
              <header class="panel-header">
                <h3>Log a contact</h3>
                <span class="caption">Phone · email · site visit · meeting</span>
              </header>
              {logError && (
                <div role="alert" class="form-banner-error">{logError}</div>
              )}
              <form method="post" action={`/crm/quotes/${quote.id}/log-contact`} class="detail-form" novalidate>
                <div class="form-grid-2">
                  <Field label="Method" name="contact_method_id" required>
                    <select name="contact_method_id" class="input" required>
                      <option value="">— Choose —</option>
                      {Array.from(new Set(contactMethods.map((cm) => cm.category ?? '—'))).map((cat) => (
                        <optgroup label={cat}>
                          {contactMethods.filter((cm) => (cm.category ?? '—') === cat && cm.active === 1).map((cm) => (
                            <option value={String(cm.id)} selected={logSticky?.contact_method_id === String(cm.id)}>
                              {cm.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </Field>
                  <Field label="Direction" name="direction" required>
                    <select name="direction" class="input" required>
                      <option value="">— Choose —</option>
                      <option value="Inbound"  selected={logSticky?.direction === 'Inbound'}>Inbound (client → us)</option>
                      <option value="Outbound" selected={logSticky?.direction === 'Outbound' || !logSticky}>Outbound (us → client)</option>
                      <option value="Internal" selected={logSticky?.direction === 'Internal'}>Internal (team)</option>
                    </select>
                  </Field>
                  <Field label="Date" name="contact_date" required>
                    <input name="contact_date" type="date" class="input" required
                      value={logSticky?.contact_date ?? dateInputValue(new Date())} />
                  </Field>
                  <Field label="Time (Brisbane)" name="contact_time" required help="HH:MM, 24-hour">
                    <input name="contact_time" type="time" class="input" required
                      value={logSticky?.contact_time ?? '09:00'} />
                  </Field>
                  <Field label="Client contact name" name="client_contact_name" help="Who you spoke with">
                    <input name="client_contact_name" class="input"
                      value={logSticky?.client_contact_name ?? (client?.primary_contact_name ?? '')} />
                  </Field>
                  <Field label="Subject" name="subject" help="One line, e.g. 'Confirmed site visit'">
                    <input name="subject" class="input" value={logSticky?.subject ?? ''} />
                  </Field>
                  <Field label="Duration (mins)" name="duration_minutes" help="Optional">
                    <input name="duration_minutes" class="input" inputmode="numeric"
                      value={logSticky?.duration_minutes ?? ''} />
                  </Field>
                </div>
                <Field label="Notes" name="notes" required help="What was discussed / agreed">
                  <textarea name="notes" class="input" rows={3} required>{logSticky?.notes ?? ''}</textarea>
                </Field>
                <div class="follow-up-row">
                  <label class="check-label">
                    <input type="checkbox" name="follow_up_required" checked={logSticky?.follow_up_required ?? false} />
                    <span>Follow-up required</span>
                  </label>
                  <input name="follow_up_date" type="date" class="input follow-up-date"
                    value={logSticky?.follow_up_date ?? ''} />
                </div>
                <div class="form-actions">
                  <button type="submit" class="btn btn-primary">Log contact</button>
                </div>
              </form>
            </section>
          </div>

          {/* RIGHT: history timelines */}
          <div class="detail-col-right">

            {/* STAGE HISTORY */}
            <section class="card detail-panel">
              <header class="panel-header">
                <h3>Stage history</h3>
                <span class="caption">{history.length} change{history.length === 1 ? '' : 's'}</span>
              </header>
              {history.length === 0 ? (
                <p class="text-muted">No stage changes yet.</p>
              ) : (
                <ul class="timeline">
                  {history.map((h) => (
                    <li class="timeline-row">
                      <span class="timeline-dot" style={{ backgroundColor: h.to_stage_color ?? '#64748b' }} aria-hidden="true" />
                      <div class="timeline-body">
                        <div class="timeline-headline">
                          {h.from_stage_name
                            ? <><span class="text-muted">{h.from_stage_name}</span> → <strong>{h.to_stage_name}</strong></>
                            : <><strong>{h.to_stage_name}</strong> <span class="text-muted">(initial)</span></>
                          }
                        </div>
                        <div class="timeline-meta caption">
                          {dateTime(h.changed_at)}
                          {h.changed_by_name && <> · {h.changed_by_name}</>}
                        </div>
                        {h.note && <div class="timeline-note">{h.note}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* CONTACT LOG */}
            <section class="card detail-panel">
              <header class="panel-header">
                <h3>Contact log</h3>
                <span class="caption">{contacts.length} entr{contacts.length === 1 ? 'y' : 'ies'}</span>
              </header>
              {contacts.length === 0 ? (
                <p class="text-muted">No contacts logged yet.</p>
              ) : (
                <ul class="timeline">
                  {contacts.map((c) => (
                    <li class="timeline-row">
                      <span class={`timeline-dot dir-${(c.direction ?? '').toLowerCase()}`} aria-hidden="true" />
                      <div class="timeline-body">
                        <div class="timeline-headline">
                          <strong>{c.contact_method_name ?? 'Contact'}</strong>
                          {c.direction && <> · <span class="text-muted">{c.direction}</span></>}
                          {c.subject && <> · {c.subject}</>}
                        </div>
                        <div class="timeline-meta caption">
                          {dateTime(c.contact_datetime)}
                          {c.our_staff_name && <> · {c.our_staff_name}</>}
                          {c.client_contact_name && <> ↔ {c.client_contact_name}</>}
                          {c.duration_minutes !== null && <> · {c.duration_minutes}m</>}
                        </div>
                        <div class="timeline-note">{c.notes}</div>
                        {c.follow_up_required === 1 && c.follow_up_date && (
                          <div class="timeline-followup">
                            <span class="caption">FOLLOW UP</span> {date(c.follow_up_date)}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>

      </div>
    </PageShell>
  )
}

// ─── HELPER COMPONENTS ──────────────────────────────────────────────────

interface FieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  help?: string
  children?: any
}
const Field = ({ label, name, required, error, help, children }: FieldProps) => (
  <div class="field">
    <label class="label" for={name}>
      {label}{required && <span class="text-bad" aria-hidden="true"> *</span>}
    </label>
    {children}
    {help && !error && <span class="help">{help}</span>}
    {error && <span class="error-text" role="alert">{error}</span>}
  </div>
)

function gpmTone(gpm: number | null): string {
  if (gpm === null) return ''
  if (gpm >= 30) return 'tone-good'
  if (gpm >= 20) return 'tone-warn'
  return 'tone-bad'
}

// ─── HELPERS ────────────────────────────────────────────────────────────

function parseId(v: string | null | undefined): number | null {
  if (!v) return null
  const n = Number(v)
  if (!Number.isInteger(n) || n <= 0) return null
  return n
}
function getStr(v: unknown): string {
  if (typeof v === 'string') return v
  if (Array.isArray(v)) return getStr(v[0])
  if (v == null) return ''
  return String(v)
}

// ─── CSS ────────────────────────────────────────────────────────────────

const detailCss = /* css */ `
.detail-page { max-width: 1280px; }

.detail-breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 13px; color: var(--muted-stone);
  margin-bottom: 16px;
}
.detail-breadcrumb a { color: var(--muted-stone); text-decoration: none; }
.detail-breadcrumb a:hover { color: var(--ink); text-decoration: underline; }
.detail-breadcrumb .sep { color: var(--border); }
.detail-breadcrumb .mono { color: var(--ink); }

.toast {
  padding: 12px 16px; border-radius: 8px; margin-bottom: 16px;
  font-size: 14px;
}
.toast-success {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  color: #15803d;
}
.toast-brass {
  background: rgba(184, 134, 11, 0.08);
  border: 1px solid rgba(184, 134, 11, 0.3);
  color: var(--brass);
}

.detail-header { padding: 24px; margin-bottom: 16px; }
.detail-header-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
.detail-quote-no { font-size: 22px; margin: 0; letter-spacing: -0.01em; }
.detail-title { font-size: 24px; margin: 4px 0 12px; font-weight: 600; line-height: 1.25; }
.detail-client { margin: 0 0 8px; font-size: 14px; line-height: 1.6; }
.detail-description { margin: 8px 0; line-height: 1.55; }
.detail-meta { margin: 6px 0; font-size: 13px; color: var(--ink); }
.detail-meta .caption {
  display: inline-block; margin-right: 6px;
  font-size: 11px; letter-spacing: 0.06em; color: var(--muted-stone);
}

.badge {
  display: inline-block;
  padding: 2px 8px; border-radius: 4px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
}
.badge-sample {
  background: rgba(100, 116, 139, 0.12);
  color: var(--muted-stone);
  border: 1px solid rgba(100, 116, 139, 0.3);
}
.badge-requote {
  background: rgba(184, 134, 11, 0.12);
  color: var(--brass);
  border: 1px solid rgba(184, 134, 11, 0.3);
}

.brass-glyph { color: var(--brass); font-weight: 600; }

.detail-kpis {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 8px; margin-top: 20px;
  border-top: 1px solid var(--border); padding-top: 20px;
}
.kpi { display: flex; flex-direction: column; gap: 2px; }
.kpi-label { font-size: 11px; letter-spacing: 0.06em; color: var(--muted-stone); text-transform: uppercase; }
.kpi-value { font-size: 18px; font-weight: 600; font-variant-numeric: tabular-nums; }
.tone-good { color: #15803d; }
.tone-warn { color: #b45309; }
.tone-bad  { color: var(--danger-terracotta); }

.detail-grid {
  display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 16px;
}
@media (max-width: 980px) {
  .detail-grid { grid-template-columns: 1fr; }
  .detail-kpis { grid-template-columns: repeat(3, 1fr); }
}

.detail-panel { padding: 20px 24px; margin-bottom: 16px; }
.panel-header { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
.panel-header h3 { margin: 0; font-size: 16px; font-weight: 600; }
.panel-header .caption { font-size: 11px; letter-spacing: 0.06em; color: var(--muted-stone); }

.detail-form .field { margin-bottom: 12px; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 16px; margin-bottom: 12px; }
@media (max-width: 640px) {
  .form-grid-2 { grid-template-columns: 1fr; }
}

.readonly-field {
  padding: 10px 12px; background: var(--bg-subtle);
  border: 1px solid var(--border); border-radius: 6px;
  font-size: 14px; color: var(--ink);
}

.form-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 12px; }

.form-banner-error {
  padding: 10px 14px; margin-bottom: 12px;
  background: rgba(192, 78, 53, 0.08);
  border: 1px solid rgba(192, 78, 53, 0.3);
  color: var(--danger-terracotta);
  border-radius: 6px; font-size: 13px;
}

.transition-grid {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;
  padding-bottom: 16px; border-bottom: 1px solid var(--border);
}
.transition-form { margin: 0; }
.btn-stage {
  border: 1px solid transparent;
  font-size: 13px; padding: 6px 12px; border-radius: 6px;
  cursor: pointer; font-weight: 500;
}
.btn-stage:hover { transform: translateY(-1px); }
.btn-stage-back { opacity: 0.7; }
.btn-stage-back:hover { opacity: 1; }

.terminal-row {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
@media (max-width: 980px) {
  .terminal-row { grid-template-columns: 1fr; }
}
.terminal-form {
  padding: 12px; background: var(--bg-subtle);
  border: 1px solid var(--border); border-radius: 8px;
  display: flex; flex-direction: column; gap: 8px;
}
.terminal-h { margin: 0 0 4px; font-size: 13px; font-weight: 600; }
.terminal-form .field { margin-bottom: 4px; }
.btn-won { background: #15803d; border-color: #15803d; }
.btn-won:hover { background: #166534; border-color: #166534; }
.btn-danger { background: var(--danger-terracotta); color: white; border: 1px solid var(--danger-terracotta); padding: 8px 14px; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; }
.btn-danger:hover { filter: brightness(0.95); }
.btn-brass { background: var(--brass); color: white; border: 1px solid var(--brass); padding: 8px 14px; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; }
.btn-brass:hover { filter: brightness(0.95); }

.follow-up-row {
  display: flex; align-items: center; gap: 12px; margin: 8px 0 12px;
}
.check-label { display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer; }
.check-label input[type="checkbox"] { width: 16px; height: 16px; }
.follow-up-date { max-width: 180px; }

.timeline { list-style: none; padding: 0; margin: 0; }
.timeline-row {
  display: grid; grid-template-columns: auto 1fr; gap: 12px;
  padding: 12px 0; border-bottom: 1px solid var(--border);
}
.timeline-row:last-child { border-bottom: none; }
.timeline-dot {
  width: 10px; height: 10px; border-radius: 50%;
  margin-top: 6px;
  background: var(--muted-stone);
}
.timeline-dot.dir-inbound  { background: #2563eb; }
.timeline-dot.dir-outbound { background: var(--brass); }
.timeline-dot.dir-internal { background: var(--muted-stone); }
.timeline-headline { font-size: 14px; line-height: 1.45; }
.timeline-meta { margin-top: 4px; font-size: 11px; color: var(--muted-stone); letter-spacing: 0.04em; }
.timeline-note {
  margin-top: 6px; font-size: 13px; line-height: 1.55;
  color: var(--ink);
  white-space: pre-wrap;
}
.timeline-followup {
  margin-top: 6px; font-size: 12px;
  padding: 4px 8px; background: rgba(184, 134, 11, 0.08);
  border-left: 2px solid var(--brass);
  border-radius: 0 4px 4px 0;
  display: inline-block;
}
.timeline-followup .caption { color: var(--brass); margin-right: 6px; }
`
