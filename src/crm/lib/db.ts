/**
 * CoSai. × YBMT — D1 Query Helpers
 * ---------------------------------------------------------------------------
 * Thin, typed wrappers around `c.env.DB.prepare(...).all<T>()`.
 *
 * Conventions:
 *   - All helpers take a `D1Database` as the first argument so they're trivially
 *     testable and can be reused from any route or job.
 *   - Return shapes are typed to match the migration column names exactly
 *     (snake_case), so callers don't need to remap.
 *   - Money columns are returned as INTEGER cents (named `*_cents`). Convert
 *     to dollars at the render boundary via `lib/formatters.ts`.
 *   - Boolean columns are returned as 0/1 INTEGERs. Cast at the render
 *     boundary if you need true/false.
 *
 * Schema reference: migrations/crm/0001_schema.sql
 */

// ── Row shape types (match migrations/crm/0001_schema.sql exactly) ──────────

export interface LineOfBusiness {
  id: number
  code: string
  name: string
  description: string | null
  is_specialty: number
  sort_order: number | null
  color: string | null
  active: number
  target_avg_won_value_cents: number | null
  target_wins_per_week: number | null
}

export interface Region {
  id: number
  code: string
  name: string
  sort_order: number | null
  active: number
}

export interface Scope {
  id: number
  name: string
  description: string | null
  sort_order: number | null
  active: number
  line_of_business_id: number | null
}

export interface QuoteStage {
  id: number
  name: string
  sort_order: number
  is_terminal: number
  is_won: number
  is_lost: number
  color: string | null
}

export interface RejectReason {
  id: number
  reason: string
  is_requote_eligible: number
  sort_order: number | null
  active: number
}

export interface ContactMethod {
  id: number
  name: string
  category: string | null
  sort_order: number | null
  active: number
}

export interface LeadSource {
  id: number
  name: string
  category: string | null
  is_paid: number
  sort_order: number | null
  active: number
}

export interface FinancialTarget {
  id: number
  metric: string
  target_value_cents: number | null
  stretch_value_cents: number | null
  unit: string | null
  description: string | null
  active: number
}

export interface StageSla {
  id: number
  from_stage_id: number | null
  to_stage_id: number | null
  sla_name: string
  target_hours: number
  breach_hours: number
  description: string | null
  active: number
}

export interface TeamMember {
  id: number
  full_name: string
  role: string
  company: string
  email: string | null
  phone: string | null
  active: number
}

// ── Generic helper ──────────────────────────────────────────────────────────

/**
 * Run a SELECT and return the typed `.results` array (or `[]` on null).
 */
export async function query<T = Record<string, unknown>>(
  db: D1Database,
  sql: string,
  ...params: unknown[]
): Promise<T[]> {
  const stmt = params.length ? db.prepare(sql).bind(...params) : db.prepare(sql)
  const res = await stmt.all<T>()
  return res.results ?? []
}

// ── Lookup readers ──────────────────────────────────────────────────────────

export const getLinesOfBusiness = (db: D1Database) =>
  query<LineOfBusiness>(
    db,
    `SELECT id, code, name, description, is_specialty, sort_order, color, active,
            target_avg_won_value_cents, target_wins_per_week
       FROM lines_of_business
       ORDER BY sort_order IS NULL, sort_order, id`
  )

export const getRegions = (db: D1Database) =>
  query<Region>(
    db,
    `SELECT id, code, name, sort_order, active
       FROM regions
       ORDER BY sort_order IS NULL, sort_order, id`
  )

export const getScopes = (db: D1Database) =>
  query<Scope>(
    db,
    `SELECT id, name, description, sort_order, active, line_of_business_id
       FROM scopes
       ORDER BY line_of_business_id IS NULL, line_of_business_id,
                sort_order IS NULL, sort_order, id`
  )

export const getQuoteStages = (db: D1Database) =>
  query<QuoteStage>(
    db,
    `SELECT id, name, sort_order, is_terminal, is_won, is_lost, color
       FROM quote_stages
       ORDER BY sort_order, id`
  )

export const getRejectReasons = (db: D1Database) =>
  query<RejectReason>(
    db,
    `SELECT id, reason, is_requote_eligible, sort_order, active
       FROM reject_reasons
       ORDER BY sort_order IS NULL, sort_order, id`
  )

export const getContactMethods = (db: D1Database) =>
  query<ContactMethod>(
    db,
    `SELECT id, name, category, sort_order, active
       FROM contact_methods
       ORDER BY category IS NULL, category, sort_order IS NULL, sort_order, id`
  )

export const getLeadSources = (db: D1Database) =>
  query<LeadSource>(
    db,
    `SELECT id, name, category, is_paid, sort_order, active
       FROM lead_sources
       ORDER BY category IS NULL, category, sort_order IS NULL, sort_order, id`
  )

export const getFinancialTargets = (db: D1Database) =>
  query<FinancialTarget>(
    db,
    `SELECT id, metric, target_value_cents, stretch_value_cents, unit, description, active
       FROM financial_targets
       ORDER BY id`
  )

export const getStageSlas = (db: D1Database) =>
  query<StageSla>(
    db,
    `SELECT id, from_stage_id, to_stage_id, sla_name, target_hours, breach_hours, description, active
       FROM stage_slas
       ORDER BY id`
  )

export const getTeamMembers = (db: D1Database) =>
  query<TeamMember>(
    db,
    `SELECT id, full_name, role, company, email, phone, active
       FROM team_members
       ORDER BY id`
  )

// ── Counters used by Training Mode + the lookups page footer ────────────────

/**
 * Count of real (non-sample) quotes. Drives the Training Mode banner —
 * shown automatically when this returns 0.
 */
export async function countRealQuotes(db: D1Database): Promise<number> {
  const row = await db
    .prepare('SELECT COUNT(*) AS n FROM quotes WHERE is_sample = 0')
    .first<{ n: number }>()
  return row?.n ?? 0
}

/**
 * Count of sample quotes. Used by the lookup verification page to confirm
 * the seed loaded as expected.
 */
export async function countSampleQuotes(db: D1Database): Promise<number> {
  const row = await db
    .prepare('SELECT COUNT(*) AS n FROM quotes WHERE is_sample = 1')
    .first<{ n: number }>()
  return row?.n ?? 0
}

/**
 * Generic table-count helper. Returns 0 if the table is missing.
 */
export async function countRows(db: D1Database, table: string): Promise<number> {
  try {
    const row = await db
      .prepare(`SELECT COUNT(*) AS n FROM ${table}`)
      .first<{ n: number }>()
    return row?.n ?? 0
  } catch {
    return 0
  }
}
