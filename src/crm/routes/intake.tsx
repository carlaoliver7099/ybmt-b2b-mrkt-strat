/**
 * CoSai. × YBMT — Phase 5 RFQ Intake
 * ---------------------------------------------------------------------------
 * Single-screen form to capture a new RFQ → write to D1 → redirect to
 * the quote detail (Phase 6 will own that page; we redirect to it anyway
 * so the URL is correct from day one).
 *
 * Mounts at /crm/quotes (the QuotesIntakeApp) and exposes:
 *   GET  /new                → IntakeFormPage (empty form)
 *   POST /new                → validate → upsertClient → createQuote → 302
 *   GET  /                   → QuotesIndexPage (browseable list)
 *
 * Brand-locked. Uses the form / input classes from page-shell baseCss.
 */

import { Hono } from 'hono'
import { PageShell } from '../components/page-shell'
import {
  validateIntake,
  upsertClient,
  createQuote,
  type IntakeForm,
  type IntakeFieldErrors,
} from '../lib/intake'
import { stagePillStyle } from '../lib/brand'
import { money, moneyCompact, pct, date, dateInputValue } from '../lib/formatters'
import {
  getLinesOfBusiness,
  getRegions,
  getScopes,
  getQuoteStages,
  getLeadSources,
  getTeamMembers,
  type LineOfBusiness,
  type Region,
  type Scope,
  type QuoteStage,
  type LeadSource,
  type TeamMember,
} from '../lib/db'
import type { AuthContext } from '../lib/middleware'

export const quotesApp = new Hono<AuthContext>()

// ─── GET /quotes/new · form (empty or re-rendered with errors) ──────────

quotesApp.get('/new', async (c) => {
  const db = c.env.DB
  const user = c.get('user')
  const [lobs, regions, scopes, leadSources, team] = await Promise.all([
    getLinesOfBusiness(db),
    getRegions(db),
    getScopes(db),
    getLeadSources(db),
    getTeamMembers(db),
  ])
  return c.html(
    <IntakeFormPage
      user={user}
      linesOfBusiness={lobs}
      regions={regions}
      scopes={scopes}
      leadSources={leadSources}
      teamMembers={team}
      form={emptyForm(user)}
      errors={null}
    />
  )
})

// ─── POST /quotes/new · validate + write + redirect ─────────────────────

quotesApp.post('/new', async (c) => {
  const db = c.env.DB
  const user = c.get('user')
  const body = await c.req.parseBody()
  const form: IntakeForm = {
    client_name: getStr(body.client_name),
    client_type: getStr(body.client_type),
    primary_contact_name: getStr(body.primary_contact_name),
    primary_phone: getStr(body.primary_phone),
    primary_email: getStr(body.primary_email),
    billing_address: getStr(body.billing_address),
    title: getStr(body.title),
    description: getStr(body.description),
    job_site_address: getStr(body.job_site_address),
    line_of_business_id: getStr(body.line_of_business_id),
    scope_id: getStr(body.scope_id),
    region_id: getStr(body.region_id),
    lead_source_id: getStr(body.lead_source_id),
    estimator_id: getStr(body.estimator_id),
    project_manager_id: getStr(body.project_manager_id),
    estimated_cost: getStr(body.estimated_cost),
    sales_price: getStr(body.sales_price),
    rfq_received_date: getStr(body.rfq_received_date),
    win_probability_pct: getStr(body.win_probability_pct),
    notes: getStr(body.notes),
  }

  const result = validateIntake(form)
  if (!result.ok) {
    const [lobs, regions, scopes, leadSources, team] = await Promise.all([
      getLinesOfBusiness(db),
      getRegions(db),
      getScopes(db),
      getLeadSources(db),
      getTeamMembers(db),
    ])
    c.status(400)
    return c.html(
      <IntakeFormPage
        user={user}
        linesOfBusiness={lobs}
        regions={regions}
        scopes={scopes}
        leadSources={leadSources}
        teamMembers={team}
        form={form}
        errors={result.errors}
      />
    )
  }

  // Map the authed user → team_members.id where possible (for stage_history)
  const createdByTeamId = await resolveTeamMemberId(db, user.name)

  try {
    const client_id = await upsertClient(db, result.data)
    const { quote_id, quote_number } = await createQuote(db, client_id, result.data, createdByTeamId)
    // Redirect to the dashboard with a success toast (Phase 6 will own /quotes/:id)
    return c.redirect(`/crm/quotes?created=${encodeURIComponent(quote_number)}&id=${quote_id}`, 302)
  } catch (err) {
    const [lobs, regions, scopes, leadSources, team] = await Promise.all([
      getLinesOfBusiness(db),
      getRegions(db),
      getScopes(db),
      getLeadSources(db),
      getTeamMembers(db),
    ])
    c.status(500)
    return c.html(
      <IntakeFormPage
        user={user}
        linesOfBusiness={lobs}
        regions={regions}
        scopes={scopes}
        leadSources={leadSources}
        teamMembers={team}
        form={form}
        errors={{
          _form: `Couldn't save this RFQ: ${String((err as Error)?.message ?? err)}. Try again, or contact Carla.`,
        }}
      />
    )
  }
})

// ─── GET /quotes · index list ───────────────────────────────────────────

quotesApp.get('/', async (c) => {
  const db = c.env.DB
  const user = c.get('user')
  const createdQuoteNumber = c.req.query('created') ?? null

  const rows = await db
    .prepare(
      `SELECT
         q.id, q.quote_number, q.title, q.is_sample, q.is_requote,
         q.sales_price_cents, q.gpm_percent, q.rfq_received_date,
         q.win_probability_pct,
         c.client_name,
         s.id AS stage_id, s.name AS stage_name, s.color AS stage_color,
         s.is_terminal AS stage_terminal,
         lob.name AS lob_name, lob.code AS lob_code,
         r.name AS region_name
       FROM quotes q
       JOIN clients c ON c.id = q.client_id
       JOIN quote_stages s ON s.id = q.stage_id
       LEFT JOIN lines_of_business lob ON lob.id = q.line_of_business_id
       LEFT JOIN regions r ON r.id = q.region_id
       ORDER BY q.created_at DESC, q.id DESC
       LIMIT 200`
    )
    .all<QuoteRowSummary>()

  return c.html(
    <QuotesIndexPage
      user={user}
      rows={rows.results ?? []}
      createdQuoteNumber={createdQuoteNumber}
    />
  )
})

// ─── Helpers ───────────────────────────────────────────────────────────

function getStr(v: unknown): string {
  if (typeof v === 'string') return v
  if (Array.isArray(v)) return getStr(v[0])
  if (v == null) return ''
  return String(v)
}

function emptyForm(user: { name: string; role: string }): IntakeForm {
  const todayIso = new Date().toISOString().slice(0, 10)
  return {
    client_name: '',
    client_type: '',
    primary_contact_name: '',
    primary_phone: '',
    primary_email: '',
    billing_address: '',
    title: '',
    description: '',
    job_site_address: '',
    line_of_business_id: '',
    scope_id: '',
    region_id: '',
    lead_source_id: '',
    estimator_id: '',
    project_manager_id: '',
    estimated_cost: '',
    sales_price: '',
    rfq_received_date: dateInputValue(todayIso) || todayIso,
    win_probability_pct: '',
    notes: '',
  }
}

async function resolveTeamMemberId(db: D1Database, fullName: string): Promise<number | null> {
  // Try first-name match against team_members.full_name
  const first = fullName.split(' ')[0]
  if (!first) return null
  const row = await db
    .prepare(`SELECT id FROM team_members WHERE full_name LIKE ? AND active = 1 ORDER BY id LIMIT 1`)
    .bind(`${first}%`)
    .first<{ id: number }>()
  return row?.id ?? null
}

// ─── QuoteRowSummary type ──────────────────────────────────────────────

interface QuoteRowSummary {
  id: number
  quote_number: string | null
  title: string
  is_sample: number
  is_requote: number
  sales_price_cents: number | null
  gpm_percent: number | null
  rfq_received_date: string | null
  win_probability_pct: number | null
  client_name: string
  stage_id: number
  stage_name: string
  stage_color: string | null
  stage_terminal: number
  lob_name: string | null
  lob_code: string | null
  region_name: string | null
}

// ─── INTAKE FORM PAGE ──────────────────────────────────────────────────

interface IntakeFormPageProps {
  user: { name: string; role: string }
  linesOfBusiness: LineOfBusiness[]
  regions: Region[]
  scopes: Scope[]
  leadSources: LeadSource[]
  teamMembers: TeamMember[]
  form: IntakeForm
  errors: IntakeFieldErrors | null
}

const IntakeFormPage = ({
  user, linesOfBusiness, regions, scopes, leadSources, teamMembers, form, errors,
}: IntakeFormPageProps) => {
  // Group scopes by LoB so we can show them grouped in the select
  const scopesByLob = new Map<number, Scope[]>()
  for (const s of scopes) {
    if (s.line_of_business_id == null) continue
    if (!scopesByLob.has(s.line_of_business_id)) scopesByLob.set(s.line_of_business_id, [])
    scopesByLob.get(s.line_of_business_id)!.push(s)
  }
  return (
    <PageShell title="New RFQ" active="new" user={user}>
      <style>{intakeCss}</style>
      <div class="page intake-page">
        <header class="intake-header">
          <div>
            <h1>New RFQ</h1>
            <p class="text-muted intake-sub">
              Log a fresh request-for-quote. We'll allocate a quote number, write the client record if needed,
              and put it in <strong>RFQ Received</strong> ready for site visit scheduling.
            </p>
          </div>
          <a href="/crm/quotes" class="btn btn-ghost">← Back to quotes</a>
        </header>

        {errors?._form && (
          <div role="alert" class="form-banner-error">
            {errors._form}
          </div>
        )}
        {errors && Object.keys(errors).length > 0 && !errors._form && (
          <div role="alert" class="form-banner-error">
            Please fix the highlighted fields below and resubmit.
          </div>
        )}

        <form method="POST" action="/crm/quotes/new" class="intake-form" novalidate>
          {/* ── SECTION 1 · Client ──────────────────────────────── */}
          <fieldset class="intake-section">
            <legend><span class="caption">Step 1 of 3</span><h2>Client</h2></legend>

            <div class="grid-2">
              <Field label="Client name" name="client_name" required error={errors?.client_name}>
                <input class="input" type="text" name="client_name" required maxlength={200}
                  value={form.client_name}
                  aria-invalid={errors?.client_name ? 'true' : undefined}
                  placeholder="e.g. Riverside Strata Management" />
              </Field>

              <Field label="Client type" name="client_type" required error={errors?.client_type}>
                <select class="select" name="client_type" required
                  aria-invalid={errors?.client_type ? 'true' : undefined}>
                  <option value="">— Choose —</option>
                  {['Residential','Commercial','Strata','Insurance','Government','Other'].map((t) => (
                    <option value={t} selected={form.client_type === t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div class="grid-2">
              <Field label="Primary contact name" name="primary_contact_name" error={errors?.primary_contact_name}>
                <input class="input" type="text" name="primary_contact_name" maxlength={200}
                  value={form.primary_contact_name}
                  placeholder="e.g. Sarah Mitchell" />
              </Field>

              <Field label="Phone (AU)" name="primary_phone" error={errors?.primary_phone}
                     help="At least one of phone or email is required.">
                <input class="input" type="tel" name="primary_phone"
                  value={form.primary_phone}
                  aria-invalid={errors?.primary_phone ? 'true' : undefined}
                  placeholder="04XX XXX XXX or (07) XXXX XXXX" />
              </Field>
            </div>

            <div class="grid-2">
              <Field label="Email" name="primary_email" error={errors?.primary_email}>
                <input class="input" type="email" name="primary_email"
                  value={form.primary_email}
                  aria-invalid={errors?.primary_email ? 'true' : undefined}
                  placeholder="sarah@example.com.au" />
              </Field>

              <Field label="Billing address" name="billing_address">
                <input class="input" type="text" name="billing_address"
                  value={form.billing_address}
                  placeholder="e.g. 42 Marine Pde, Coolangatta QLD 4225" />
              </Field>
            </div>
          </fieldset>

          {/* ── SECTION 2 · Job ─────────────────────────────────── */}
          <fieldset class="intake-section">
            <legend><span class="caption">Step 2 of 3</span><h2>Job</h2></legend>

            <Field label="Quote title" name="title" required error={errors?.title}
                   help="Short, descriptive. Shown in lists, emails and on the quote PDF.">
              <input class="input" type="text" name="title" required maxlength={200}
                value={form.title}
                aria-invalid={errors?.title ? 'true' : undefined}
                placeholder="e.g. Bathroom + kitchen refresh — Unit 4B, 42 Marine Pde" />
            </Field>

            <Field label="Description (scope of works)" name="description"
                   help="Plain-English summary. Long form goes in the proposal document later.">
              <textarea class="textarea" name="description" rows={4}
                placeholder="What's the customer asking for? What's the brief?">{form.description}</textarea>
            </Field>

            <Field label="Job site address" name="job_site_address"
                   help="Leave blank if same as billing address.">
              <input class="input" type="text" name="job_site_address"
                value={form.job_site_address}
                placeholder="e.g. Unit 4B, 42 Marine Pde, Coolangatta QLD 4225" />
            </Field>

            <div class="grid-3">
              <Field label="Line of business" name="line_of_business_id" required error={errors?.line_of_business_id}>
                <select class="select" name="line_of_business_id" required id="lob-select"
                  aria-invalid={errors?.line_of_business_id ? 'true' : undefined}>
                  <option value="">— Choose —</option>
                  {linesOfBusiness.map((l) => (
                    <option value={String(l.id)} selected={form.line_of_business_id === String(l.id)}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Region" name="region_id" required error={errors?.region_id}>
                <select class="select" name="region_id" required
                  aria-invalid={errors?.region_id ? 'true' : undefined}>
                  <option value="">— Choose —</option>
                  {regions.map((r) => (
                    <option value={String(r.id)} selected={form.region_id === String(r.id)}>{r.name}</option>
                  ))}
                </select>
              </Field>

              <Field label="Scope" name="scope_id"
                     help="Optional · narrows the line of business.">
                <select class="select" name="scope_id" id="scope-select">
                  <option value="">— Optional —</option>
                  {linesOfBusiness.map((l) => {
                    const list = scopesByLob.get(l.id) ?? []
                    if (list.length === 0) return null
                    return (
                      <optgroup label={l.name}>
                        {list.map((s) => (
                          <option value={String(s.id)} selected={form.scope_id === String(s.id)}>
                            {s.name}
                          </option>
                        ))}
                      </optgroup>
                    )
                  })}
                </select>
              </Field>
            </div>

            <div class="grid-3">
              <Field label="Lead source" name="lead_source_id" help="How did this RFQ reach us?">
                <select class="select" name="lead_source_id">
                  <option value="">— Optional —</option>
                  {leadSources.map((ls) => (
                    <option value={String(ls.id)} selected={form.lead_source_id === String(ls.id)}>
                      {ls.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Estimator" name="estimator_id" help="Who's preparing the quote?">
                <select class="select" name="estimator_id">
                  <option value="">— Unassigned —</option>
                  {teamMembers.map((t) => (
                    <option value={String(t.id)} selected={form.estimator_id === String(t.id)}>
                      {t.full_name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Project manager" name="project_manager_id" help="Owns delivery if won.">
                <select class="select" name="project_manager_id">
                  <option value="">— Unassigned —</option>
                  {teamMembers.map((t) => (
                    <option value={String(t.id)} selected={form.project_manager_id === String(t.id)}>
                      {t.full_name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </fieldset>

          {/* ── SECTION 3 · Numbers + dates ──────────────────────── */}
          <fieldset class="intake-section">
            <legend><span class="caption">Step 3 of 3</span><h2>Numbers & dates</h2></legend>

            <div class="grid-2">
              <Field label="Estimated cost ($)" name="estimated_cost" error={errors?.estimated_cost}
                     help="Internal cost of materials + labour. Used to compute GPM.">
                <input class="input mono" type="text" inputmode="decimal" name="estimated_cost"
                  value={form.estimated_cost}
                  aria-invalid={errors?.estimated_cost ? 'true' : undefined}
                  placeholder="e.g. 12500.00" />
              </Field>

              <Field label="Sales price ($)" name="sales_price" error={errors?.sales_price}
                     help="What we'll charge the client (ex-GST). GPM = (sales − cost) / sales.">
                <input class="input mono" type="text" inputmode="decimal" name="sales_price"
                  value={form.sales_price}
                  aria-invalid={errors?.sales_price ? 'true' : undefined}
                  placeholder="e.g. 18750.00" />
              </Field>
            </div>

            <div class="grid-2">
              <Field label="RFQ received date" name="rfq_received_date" required error={errors?.rfq_received_date}
                     help="When did the customer first contact us about this job?">
                <input class="input" type="date" name="rfq_received_date" required
                  value={form.rfq_received_date}
                  aria-invalid={errors?.rfq_received_date ? 'true' : undefined} />
              </Field>

              <Field label="Win probability (%)" name="win_probability_pct" error={errors?.win_probability_pct}
                     help="0–100. Estimator's gut feel today. Updates as the quote progresses.">
                <input class="input mono" type="number" min={0} max={100} step={5} name="win_probability_pct"
                  value={form.win_probability_pct}
                  aria-invalid={errors?.win_probability_pct ? 'true' : undefined}
                  placeholder="e.g. 50" />
              </Field>
            </div>

            <Field label="Notes" name="notes"
                   help="Anything else worth knowing — site access, deadlines, customer mood.">
              <textarea class="textarea" name="notes" rows={3}
                placeholder="e.g. Customer mentioned the body corp meets the 28th — quote sent by 27th gives best shot at acceptance.">{form.notes}</textarea>
            </Field>
          </fieldset>

          <div class="intake-actions">
            <button type="submit" class="btn btn-primary">
              Save RFQ + create quote number
            </button>
            <a href="/crm/quotes" class="btn btn-ghost">Cancel</a>
          </div>
        </form>
      </div>
    </PageShell>
  )
}

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

// ─── QUOTES INDEX PAGE ────────────────────────────────────────────────

interface QuotesIndexPageProps {
  user: { name: string; role: string }
  rows: QuoteRowSummary[]
  createdQuoteNumber: string | null
}

const QuotesIndexPage = ({ user, rows, createdQuoteNumber }: QuotesIndexPageProps) => {
  const totalValue = rows.reduce((s, r) => s + (r.sales_price_cents ?? 0), 0)
  const realCount = rows.filter((r) => !r.is_sample).length
  const sampleCount = rows.length - realCount

  return (
    <PageShell title="Quotes" active="quotes" user={user}>
      <style>{quotesIndexCss}</style>
      <div class="page">
        <header class="quotes-header">
          <div>
            <h1>Quotes</h1>
            <p class="text-muted quotes-sub">
              {rows.length} quote{rows.length === 1 ? '' : 's'} · {moneyCompact(totalValue / 100)} total value
              {sampleCount > 0 && <> · {sampleCount} sample / {realCount} real</>}
            </p>
          </div>
          <a href="/crm/quotes/new" class="btn btn-primary">+ New RFQ</a>
        </header>

        {createdQuoteNumber && (
          <div role="status" class="created-toast">
            <strong class="mono">{createdQuoteNumber}</strong> saved · status <strong>RFQ Received</strong>.
            Next step: schedule the site visit.
          </div>
        )}

        {rows.length === 0 ? (
          <div class="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <h3 style={{ marginBottom: '8px' }}>No quotes yet.</h3>
            <p class="text-muted" style={{ marginBottom: '20px' }}>Log the first one to get rolling.</p>
            <a href="/crm/quotes/new" class="btn btn-primary">+ New RFQ</a>
          </div>
        ) : (
          <div class="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div class="quotes-table-wrap">
              <table class="quotes-table">
                <thead>
                  <tr>
                    <th>Quote#</th>
                    <th>Client</th>
                    <th>Title</th>
                    <th>LoB · Region</th>
                    <th>Stage</th>
                    <th class="num-col">Sales</th>
                    <th class="num-col">GPM</th>
                    <th class="num-col">Win %</th>
                    <th>RFQ date</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr class={r.is_sample ? 'row-sample' : ''}>
                      <td>
                        <a href={`/crm/quotes/${r.id}`} class="mono qnum">
                          {r.quote_number ?? `#${r.id}`}
                        </a>
                        {r.is_sample === 1 && <span class="badge badge-sample">sample</span>}
                        {r.is_requote === 1 && <span class="badge badge-requote">re-quote</span>}
                      </td>
                      <td>{r.client_name}</td>
                      <td><span class="quote-title">{r.title}</span></td>
                      <td class="text-muted">
                        {r.lob_code ?? '—'} · {r.region_name ?? '—'}
                      </td>
                      <td>
                        <span class="stage-pill" style={stagePillStyle(r.stage_color ?? '#7c7a78')}>
                          {r.stage_name}
                        </span>
                      </td>
                      <td class="num-col num">{r.sales_price_cents == null ? '—' : moneyCompact(r.sales_price_cents / 100)}</td>
                      <td class="num-col num text-muted">{r.gpm_percent == null ? '—' : pct(r.gpm_percent)}</td>
                      <td class="num-col num text-muted">{r.win_probability_pct == null ? '—' : `${r.win_probability_pct}%`}</td>
                      <td class="text-muted">{date(r.rfq_received_date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </PageShell>
  )
}

// ─── CSS ───────────────────────────────────────────────────────────────

const intakeCss = `
  .intake-page { max-width: 960px; }
  .intake-header {
    display: flex; justify-content: space-between; align-items: flex-start;
    gap: 24px; padding-top: 16px; margin-bottom: 24px;
  }
  .intake-sub { max-width: 640px; margin-top: 6px; }
  .intake-form { display: flex; flex-direction: column; gap: 24px; }
  .intake-section {
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(27,26,30,0.04);
    padding: 24px;
    margin: 0;
  }
  .intake-section legend {
    display: flex; flex-direction: column; gap: 4px;
    padding: 0 0 16px 0;
    border-bottom: 1px solid var(--border-soft);
    margin-bottom: 16px;
    width: 100%;
  }
  .intake-section legend h2 { margin: 0; font-weight: 500; }
  .intake-section legend .caption { color: var(--muted-stone); }

  .field { margin-bottom: 16px; }
  .field:last-child { margin-bottom: 0; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .grid-2 .field { margin-bottom: 0; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .grid-3 .field { margin-bottom: 0; }
  @media (max-width: 760px) {
    .grid-2, .grid-3 { grid-template-columns: 1fr; }
  }

  .intake-actions {
    display: flex; gap: 12px; align-items: center;
    padding: 16px 0 32px 0;
  }

  .form-banner-error {
    background: rgba(168,69,60,0.10);
    border: 1px solid rgba(168,69,60,0.35);
    color: var(--danger-terracotta);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
    font-size: 13px;
    font-weight: 600;
  }
`

const quotesIndexCss = `
  .quotes-header {
    display: flex; justify-content: space-between; align-items: flex-start;
    gap: 24px; padding-top: 16px; margin-bottom: 24px;
  }
  .quotes-sub { margin-top: 4px; font-size: 13px; }

  .created-toast {
    background: rgba(74,124,89,0.10);
    border: 1px solid rgba(74,124,89,0.35);
    color: var(--good-green);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 24px;
    font-size: 13px;
  }
  .created-toast .mono { color: var(--good-green); }

  .quotes-table-wrap { overflow-x: auto; }
  .quotes-table { width: 100%; border-collapse: collapse; }
  .quotes-table th, .quotes-table td {
    padding: 12px 16px; text-align: left;
    border-bottom: 1px solid var(--border-soft);
    font-size: 13px; vertical-align: middle;
  }
  .quotes-table tbody tr:last-child td { border-bottom: none; }
  .quotes-table thead th {
    background: var(--paper-cream);
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted-stone);
  }
  .quotes-table .num-col { text-align: right; }
  .quotes-table .qnum { color: var(--ink-charcoal); text-decoration: none; font-weight: 500; }
  .quotes-table .qnum:hover { color: var(--brass-accent); }
  .quote-title {
    display: inline-block;
    max-width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .row-sample td { background: rgba(245,243,239,0.5); }
  .badge {
    display: inline-block;
    margin-left: 6px;
    padding: 1px 6px;
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .badge-sample { background: rgba(124,122,120,0.15); color: var(--muted-stone); }
  .badge-requote { background: rgba(200,169,106,0.18); color: var(--brass-accent); }
`
