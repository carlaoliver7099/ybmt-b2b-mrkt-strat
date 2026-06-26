/**
 * CoSai. × YBMT — Dashboard Aggregation Queries
 * ---------------------------------------------------------------------------
 * All read-only D1 queries that power /crm/dashboard.
 *
 * Conventions:
 *   - Money is returned as INTEGER cents (suffix `_cents`). Convert to dollars
 *     at the render boundary via lib/formatters.ts (money / moneyCompact).
 *   - Percentages are returned as REAL 0-100 (e.g. 34.4). Render via pct().
 *   - All datetimes are ISO 8601 UTC strings. Render via date/dateTime/ago().
 *   - `is_sample = 1` is INCLUDED everywhere on Phase 4 (we want the seed
 *     to render). Phase 7 "Clear samples" will flip this behaviour by setting
 *     all is_sample rows to 0 after wiping.
 *   - Terminal stages: 9 (won) · 10 (rejected) · 11 (lost/withdrawn).
 *     Open = stage_id NOT IN (9, 10, 11).
 *
 * Schema reference: migrations/crm/0001_schema.sql
 */

// Helper: terminal stage IDs from the seed (0002_lookups.sql)
const WON_STAGE = 9
const REJECTED_STAGE = 10
const LOST_STAGE = 11
const TERMINAL_STAGES = [WON_STAGE, REJECTED_STAGE, LOST_STAGE]
const TERMINAL_IN = `(${TERMINAL_STAGES.join(',')})`

// ─── 1. KPI strip ────────────────────────────────────────────────────────

export interface DashboardKpis {
  /** Sum of sales_price_cents over OPEN quotes (non-terminal stages). */
  pipeline_value_cents: number
  /** Number of open quotes. */
  open_count: number
  /** Won / (Won + Rejected + Lost) over last 90 days, as percent 0-100. */
  win_rate_pct: number | null
  /** Avg gpm_percent across all SENT quotes (quote_sent_at IS NOT NULL). */
  avg_gpm_pct: number | null
  /** Avg hours from rfq_received_at → first_response_at (where both set). */
  avg_response_hours: number | null
  /** P90 days from rfq_received_at → quote_sent_at. */
  p90_cycle_days: number | null
  /** Sum of won (stage 9) sales_price_cents over last 7 days. */
  weekly_won_cents: number
  /** Sum of all sales_price_cents over RFQs received last 7 days. */
  weekly_rfq_cents: number
}

export async function getDashboardKpis(
  db: D1Database,
  now: Date = new Date()
): Promise<DashboardKpis> {
  const nowIso = now.toISOString()
  const ninetyDaysAgoIso = new Date(now.getTime() - 90 * 24 * 3_600_000).toISOString()
  const sevenDaysAgoIso = new Date(now.getTime() - 7 * 24 * 3_600_000).toISOString()

  // 1. Pipeline value + open count (open = NOT terminal)
  const pipeline = await db
    .prepare(
      `SELECT
         COALESCE(SUM(sales_price_cents), 0) AS pipeline_value_cents,
         COUNT(*) AS open_count
       FROM quotes
       WHERE stage_id NOT IN ${TERMINAL_IN}`
    )
    .first<{ pipeline_value_cents: number; open_count: number }>()

  // 2. Win rate over last 90 days (terminal decisions only)
  const winRow = await db
    .prepare(
      `SELECT
         SUM(CASE WHEN stage_id = ${WON_STAGE} THEN 1 ELSE 0 END) AS won,
         SUM(CASE WHEN stage_id IN ${TERMINAL_IN} THEN 1 ELSE 0 END) AS decided
       FROM quotes
       WHERE decision_date IS NOT NULL
         AND decision_date >= ?`
    )
    .bind(ninetyDaysAgoIso.slice(0, 10))
    .first<{ won: number | null; decided: number | null }>()
  const won = winRow?.won ?? 0
  const decided = winRow?.decided ?? 0
  const win_rate_pct = decided > 0 ? (won / decided) * 100 : null

  // 3. Avg GPM on sent quotes
  const gpmRow = await db
    .prepare(
      `SELECT AVG(gpm_percent) AS avg_gpm
       FROM quotes
       WHERE quote_sent_at IS NOT NULL
         AND gpm_percent IS NOT NULL`
    )
    .first<{ avg_gpm: number | null }>()
  const avg_gpm_pct = gpmRow?.avg_gpm ?? null

  // 4. Avg first-response hours
  const respRow = await db
    .prepare(
      `SELECT AVG((julianday(first_response_at) - julianday(rfq_received_at)) * 24.0) AS avg_hours
       FROM quotes
       WHERE rfq_received_at IS NOT NULL
         AND first_response_at IS NOT NULL`
    )
    .first<{ avg_hours: number | null }>()
  const avg_response_hours = respRow?.avg_hours ?? null

  // 5. P90 cycle days (rfq_received_at → quote_sent_at)
  // SQLite has no PERCENTILE_CONT; compute by ordering and indexing in app.
  const cycleRows = await db
    .prepare(
      `SELECT (julianday(quote_sent_at) - julianday(rfq_received_at)) AS days
       FROM quotes
       WHERE rfq_received_at IS NOT NULL
         AND quote_sent_at IS NOT NULL
       ORDER BY days ASC`
    )
    .all<{ days: number }>()
  const arr = (cycleRows.results ?? []).map((r) => r.days).filter((d) => d != null)
  let p90_cycle_days: number | null = null
  if (arr.length > 0) {
    const idx = Math.floor(arr.length * 0.9)
    p90_cycle_days = arr[Math.min(idx, arr.length - 1)]
  }

  // 6. Weekly won value
  const weeklyWonRow = await db
    .prepare(
      `SELECT COALESCE(SUM(sales_price_cents), 0) AS cents
       FROM quotes
       WHERE stage_id = ${WON_STAGE}
         AND decision_date IS NOT NULL
         AND decision_date >= ?`
    )
    .bind(sevenDaysAgoIso.slice(0, 10))
    .first<{ cents: number }>()

  // 7. Weekly RFQ value
  const weeklyRfqRow = await db
    .prepare(
      `SELECT COALESCE(SUM(sales_price_cents), 0) AS cents
       FROM quotes
       WHERE rfq_received_at >= ?`
    )
    .bind(sevenDaysAgoIso)
    .first<{ cents: number }>()

  return {
    pipeline_value_cents: pipeline?.pipeline_value_cents ?? 0,
    open_count: pipeline?.open_count ?? 0,
    win_rate_pct,
    avg_gpm_pct,
    avg_response_hours,
    p90_cycle_days,
    weekly_won_cents: weeklyWonRow?.cents ?? 0,
    weekly_rfq_cents: weeklyRfqRow?.cents ?? 0,
  }
}

// ─── 2. 4×3 LoB × Region funnel matrix ───────────────────────────────────

export interface MatrixCell {
  lob_id: number
  lob_code: string
  lob_name: string
  lob_color: string | null
  region_id: number
  region_code: string
  region_name: string
  /** Open quotes (non-terminal) in this cell. */
  open_count: number
  /** Sum of sales_price_cents on open quotes. */
  open_value_cents: number
  /** YTD won value in cents. */
  won_ytd_value_cents: number
  /** YTD won quote count. */
  won_ytd_count: number
  /** Win rate YTD = won / (won + rejected + lost) — percent 0-100 or null. */
  win_rate_pct: number | null
}

export async function getFunnelMatrix(
  db: D1Database,
  now: Date = new Date()
): Promise<MatrixCell[]> {
  const yearStartIso = `${now.getUTCFullYear()}-01-01`

  // Single query: returns one row per (lob, region) cell with aggregated metrics.
  // CROSS JOIN to ensure empty cells still appear (12 cells guaranteed).
  const rows = await db
    .prepare(
      `SELECT
         lob.id   AS lob_id,
         lob.code AS lob_code,
         lob.name AS lob_name,
         lob.color AS lob_color,
         lob.sort_order AS lob_sort,
         r.id     AS region_id,
         r.code   AS region_code,
         r.name   AS region_name,
         r.sort_order AS region_sort,
         COALESCE(SUM(CASE WHEN q.stage_id NOT IN ${TERMINAL_IN} THEN 1 ELSE 0 END), 0) AS open_count,
         COALESCE(SUM(CASE WHEN q.stage_id NOT IN ${TERMINAL_IN} THEN q.sales_price_cents ELSE 0 END), 0) AS open_value_cents,
         COALESCE(SUM(CASE WHEN q.stage_id = ${WON_STAGE} AND q.decision_date >= ? THEN q.sales_price_cents ELSE 0 END), 0) AS won_ytd_value_cents,
         COALESCE(SUM(CASE WHEN q.stage_id = ${WON_STAGE} AND q.decision_date >= ? THEN 1 ELSE 0 END), 0) AS won_ytd_count,
         COALESCE(SUM(CASE WHEN q.stage_id IN ${TERMINAL_IN} AND q.decision_date >= ? THEN 1 ELSE 0 END), 0) AS decided_ytd_count
       FROM lines_of_business lob
       CROSS JOIN regions r
       LEFT JOIN quotes q
         ON q.line_of_business_id = lob.id
        AND q.region_id = r.id
       WHERE lob.active = 1 AND r.active = 1
       GROUP BY lob.id, r.id
       ORDER BY lob_sort IS NULL, lob_sort, lob.id, region_sort IS NULL, region_sort, r.id`
    )
    .bind(yearStartIso, yearStartIso, yearStartIso)
    .all<{
      lob_id: number
      lob_code: string
      lob_name: string
      lob_color: string | null
      lob_sort: number | null
      region_id: number
      region_code: string
      region_name: string
      region_sort: number | null
      open_count: number
      open_value_cents: number
      won_ytd_value_cents: number
      won_ytd_count: number
      decided_ytd_count: number
    }>()

  return (rows.results ?? []).map((r) => ({
    lob_id: r.lob_id,
    lob_code: r.lob_code,
    lob_name: r.lob_name,
    lob_color: r.lob_color,
    region_id: r.region_id,
    region_code: r.region_code,
    region_name: r.region_name,
    open_count: r.open_count,
    open_value_cents: r.open_value_cents,
    won_ytd_value_cents: r.won_ytd_value_cents,
    won_ytd_count: r.won_ytd_count,
    win_rate_pct:
      r.decided_ytd_count > 0
        ? (r.won_ytd_count / r.decided_ytd_count) * 100
        : null,
  }))
}

// ─── 3. Pipeline by stage ────────────────────────────────────────────────

export interface PipelineStageRow {
  stage_id: number
  stage_name: string
  color: string | null
  sort_order: number
  count: number
  value_cents: number
}

export async function getPipelineByStage(
  db: D1Database
): Promise<PipelineStageRow[]> {
  const rows = await db
    .prepare(
      `SELECT
         s.id AS stage_id,
         s.name AS stage_name,
         s.color AS color,
         s.sort_order AS sort_order,
         COALESCE(COUNT(q.id), 0) AS count,
         COALESCE(SUM(q.sales_price_cents), 0) AS value_cents
       FROM quote_stages s
       LEFT JOIN quotes q ON q.stage_id = s.id
       WHERE s.is_terminal = 0
       GROUP BY s.id
       ORDER BY s.sort_order, s.id`
    )
    .all<PipelineStageRow>()
  return rows.results ?? []
}

// ─── 4. Reject reasons breakdown (last 90 days) ──────────────────────────

export interface RejectReasonRow {
  reason_id: number
  reason: string
  is_requote_eligible: number
  count: number
  value_cents: number
}

export async function getRejectReasonsBreakdown(
  db: D1Database,
  now: Date = new Date()
): Promise<RejectReasonRow[]> {
  const ninetyDaysAgoDate = new Date(now.getTime() - 90 * 24 * 3_600_000)
    .toISOString()
    .slice(0, 10)

  const rows = await db
    .prepare(
      `SELECT
         rr.id   AS reason_id,
         rr.reason AS reason,
         rr.is_requote_eligible AS is_requote_eligible,
         COALESCE(COUNT(q.id), 0) AS count,
         COALESCE(SUM(q.sales_price_cents), 0) AS value_cents
       FROM reject_reasons rr
       LEFT JOIN quotes q
         ON q.reject_reason_id = rr.id
        AND q.stage_id = ${REJECTED_STAGE}
        AND q.decision_date >= ?
       WHERE rr.active = 1
       GROUP BY rr.id
       HAVING count > 0
       ORDER BY count DESC, value_cents DESC, rr.sort_order`
    )
    .bind(ninetyDaysAgoDate)
    .all<RejectReasonRow>()
  return rows.results ?? []
}

// ─── 5. Actions needed (SLA breaches) ────────────────────────────────────

export type SlaSeverity = 'breached' | 'warning' | 'ok'

export interface ActionNeededRow {
  quote_id: number
  quote_number: string | null
  client_id: number
  client_name: string
  stage_id: number
  stage_name: string
  stage_color: string | null
  /** What we're measuring time-in for — the stage's entry timestamp. */
  in_stage_since: string
  /** Hours elapsed since that timestamp. */
  hours_in_stage: number
  /** SLA target (hours) — if the user blows past this, "warning". */
  sla_target_hours: number | null
  /** SLA breach (hours) — past this, "breached" (red). */
  sla_breach_hours: number | null
  /** Hours overdue relative to the breach threshold (positive = breached). */
  hours_overdue: number
  severity: SlaSeverity
}

/**
 * Open quotes whose time-in-current-stage exceeds the configured SLA breach
 * threshold. Returns up to `limit` rows, worst-first.
 *
 * SLA selection: matches stage_slas rows by from_stage_id (the "how long can
 * a quote sit in this stage" SLA). If multiple SLAs exist for a stage, takes
 * the largest target_hours (most lenient) — anything past that is a problem.
 */
export async function getActionsNeeded(
  db: D1Database,
  now: Date = new Date(),
  limit: number = 12
): Promise<ActionNeededRow[]> {
  const nowIso = now.toISOString()

  // For each open quote, compute hours-in-stage from the most recent
  // stage_history entry where to_stage_id = current stage_id; fall back to
  // rfq_received_at if no history row exists.
  const rows = await db
    .prepare(
      `WITH stage_entry AS (
         SELECT
           q.id AS quote_id,
           COALESCE(
             (SELECT MAX(sh.changed_at)
                FROM stage_history sh
               WHERE sh.quote_id = q.id
                 AND sh.to_stage_id = q.stage_id),
             q.rfq_received_at,
             q.created_at
           ) AS entered_at
         FROM quotes q
         WHERE q.stage_id NOT IN ${TERMINAL_IN}
       ),
       sla_for_stage AS (
         SELECT from_stage_id AS stage_id,
                MAX(target_hours) AS target_hours,
                MAX(breach_hours) AS breach_hours
           FROM stage_slas
          WHERE active = 1 AND from_stage_id IS NOT NULL
          GROUP BY from_stage_id
       )
       SELECT
         q.id AS quote_id,
         q.quote_number,
         c.id AS client_id,
         c.client_name,
         s.id AS stage_id,
         s.name AS stage_name,
         s.color AS stage_color,
         se.entered_at AS in_stage_since,
         (julianday(?) - julianday(se.entered_at)) * 24.0 AS hours_in_stage,
         sfs.target_hours AS sla_target_hours,
         sfs.breach_hours AS sla_breach_hours
       FROM quotes q
       JOIN stage_entry se ON se.quote_id = q.id
       JOIN quote_stages s ON s.id = q.stage_id
       JOIN clients c ON c.id = q.client_id
       LEFT JOIN sla_for_stage sfs ON sfs.stage_id = q.stage_id
       WHERE q.stage_id NOT IN ${TERMINAL_IN}
       ORDER BY hours_in_stage DESC
       LIMIT ?`
    )
    .bind(nowIso, limit * 2) // overfetch so we can filter & still hit limit
    .all<{
      quote_id: number
      quote_number: string | null
      client_id: number
      client_name: string
      stage_id: number
      stage_name: string
      stage_color: string | null
      in_stage_since: string
      hours_in_stage: number
      sla_target_hours: number | null
      sla_breach_hours: number | null
    }>()

  const result: ActionNeededRow[] = []
  for (const r of rows.results ?? []) {
    const target = r.sla_target_hours
    const breach = r.sla_breach_hours
    const hours = r.hours_in_stage ?? 0
    let severity: SlaSeverity = 'ok'
    let hours_overdue = 0
    if (breach != null && hours >= breach) {
      severity = 'breached'
      hours_overdue = hours - breach
    } else if (target != null && hours >= target) {
      severity = 'warning'
      hours_overdue = hours - target
    } else {
      // Not interesting — skip
      continue
    }
    result.push({ ...r, hours_overdue, severity })
    if (result.length >= limit) break
  }
  return result
}

// ─── 6. Recent activity (unified stage_history + contact_log feed) ───────

export type ActivityKind = 'stage_change' | 'contact'

export interface RecentActivityRow {
  kind: ActivityKind
  quote_id: number
  quote_number: string | null
  client_name: string
  when: string // ISO 8601 UTC
  who: string | null
  /** Human-readable summary: "Moved to Quote Sent" or "Phone call (outbound)" */
  what: string
  /** Optional secondary line: stage_color hex or contact subject */
  detail: string | null
  /** Stage color (only set for stage_change rows). */
  stage_color: string | null
}

export async function getRecentActivity(
  db: D1Database,
  limit: number = 12
): Promise<RecentActivityRow[]> {
  // Stage changes: pull the to_stage row info.
  const stageRows = await db
    .prepare(
      `SELECT
         'stage_change' AS kind,
         sh.quote_id AS quote_id,
         q.quote_number AS quote_number,
         c.client_name AS client_name,
         sh.changed_at AS when_iso,
         tm.full_name AS who,
         ts.name AS to_stage_name,
         ts.color AS to_stage_color,
         sh.note AS note
       FROM stage_history sh
       JOIN quotes q ON q.id = sh.quote_id
       JOIN clients c ON c.id = q.client_id
       JOIN quote_stages ts ON ts.id = sh.to_stage_id
       LEFT JOIN team_members tm ON tm.id = sh.changed_by
       ORDER BY sh.changed_at DESC
       LIMIT ?`
    )
    .bind(limit)
    .all<{
      kind: 'stage_change'
      quote_id: number
      quote_number: string | null
      client_name: string
      when_iso: string
      who: string | null
      to_stage_name: string
      to_stage_color: string | null
      note: string | null
    }>()

  const contactRows = await db
    .prepare(
      `SELECT
         'contact' AS kind,
         cl.quote_id AS quote_id,
         q.quote_number AS quote_number,
         c.client_name AS client_name,
         cl.contact_datetime AS when_iso,
         tm.full_name AS who,
         cm.name AS method_name,
         cl.subject AS subject,
         cl.direction AS direction
       FROM contact_log cl
       JOIN quotes q ON q.id = cl.quote_id
       JOIN clients c ON c.id = q.client_id
       LEFT JOIN contact_methods cm ON cm.id = cl.contact_method_id
       LEFT JOIN team_members tm ON tm.id = cl.our_staff_id
       ORDER BY cl.contact_datetime DESC
       LIMIT ?`
    )
    .bind(limit)
    .all<{
      kind: 'contact'
      quote_id: number
      quote_number: string | null
      client_name: string
      when_iso: string
      who: string | null
      method_name: string | null
      subject: string | null
      direction: string | null
    }>()

  const merged: RecentActivityRow[] = []

  for (const r of stageRows.results ?? []) {
    merged.push({
      kind: 'stage_change',
      quote_id: r.quote_id,
      quote_number: r.quote_number,
      client_name: r.client_name,
      when: r.when_iso,
      who: r.who,
      what: `Moved to ${r.to_stage_name}`,
      detail: r.note,
      stage_color: r.to_stage_color,
    })
  }

  for (const r of contactRows.results ?? []) {
    const method = r.method_name ?? 'Contact'
    const directionTag =
      r.direction === 'Inbound' ? ' (in)' : r.direction === 'Outbound' ? ' (out)' : ''
    merged.push({
      kind: 'contact',
      quote_id: r.quote_id,
      quote_number: r.quote_number,
      client_name: r.client_name,
      when: r.when_iso,
      who: r.who,
      what: `${method}${directionTag}`,
      detail: r.subject,
      stage_color: null,
    })
  }

  // Sort merged feed by when DESC and clamp to limit.
  merged.sort((a, b) => (a.when < b.when ? 1 : a.when > b.when ? -1 : 0))
  return merged.slice(0, limit)
}
