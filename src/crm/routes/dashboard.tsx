/**
 * CoSai. × YBMT — Phase 4 Dashboard
 * ---------------------------------------------------------------------------
 * The operating cockpit. Six sections, top to bottom:
 *
 *   1. KPI strip               · pipeline value · open count · win rate · GPM · response · cycle
 *   2. 4×3 funnel matrix       · LoB (rows) × Region (cols)
 *   3. Pipeline by stage       · 8 non-terminal stages, count + value
 *   4. Reject reasons          · last 90 days, requote-eligible highlighted in brass
 *   5. Actions needed          · open quotes past their stage SLA, worst-first
 *   6. Recent activity         · stage_history + contact_log unified timeline
 *
 * Brand rules enforced:
 *   - Money via money() / moneyCompact() — never `toString()` on cents
 *   - Percentages via pct() — always 1 decimal
 *   - Dates via date() / ago() — Brisbane TZ
 *   - Quote numbers in JetBrains Mono via .mono class
 *   - All colours come from CSS vars or quote_stages.color (no hard-coded hex)
 */

import { PageShell } from '../components/page-shell'
import { stagePillStyle } from '../lib/brand'
import { money, moneyCompact, pct, date, ago, dateTime } from '../lib/formatters'
import type { LineOfBusiness, Region } from '../lib/db'
import type {
  DashboardKpis,
  MatrixCell,
  PipelineStageRow,
  RejectReasonRow,
  ActionNeededRow,
  RecentActivityRow,
} from '../lib/dashboard-queries'

interface DashboardPageProps {
  user: { name: string; role: string }
  pwChanged: boolean
  now: string // ISO 8601
  kpis: DashboardKpis
  matrix: MatrixCell[]
  linesOfBusiness: LineOfBusiness[]
  regions: Region[]
  pipeline: PipelineStageRow[]
  rejectReasons: RejectReasonRow[]
  actionsNeeded: ActionNeededRow[]
  recentActivity: RecentActivityRow[]
}

export const DashboardPage = ({
  user,
  pwChanged,
  now,
  kpis,
  matrix,
  linesOfBusiness,
  regions,
  pipeline,
  rejectReasons,
  actionsNeeded,
  recentActivity,
}: DashboardPageProps) => (
  <PageShell title="Dashboard" active="dashboard" user={user} trainingMode={false}>
    <style>{dashboardCss}</style>
    <div class="page">
      {pwChanged && (
        <div role="status" class="pw-toast">
          Password updated · you're signed in.
        </div>
      )}

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <header class="dash-header">
        <div>
          <h1>Dashboard</h1>
          <p class="dash-sub">
            Operating cockpit · {date(now)} · {kpis.open_count} open quotes
          </p>
        </div>
        <div class="dash-header-actions">
          <a href="/crm/quotes/new" class="btn btn-primary">+ New RFQ</a>
          <a href="/crm/quotes" class="btn btn-secondary">All quotes</a>
        </div>
      </header>

      {/* ── 1. KPI STRIP ──────────────────────────────────────────── */}
      <section class="dash-section">
        <div class="kpi-strip">
          <KpiCard
            label="Pipeline value"
            value={moneyCompact(kpis.pipeline_value_cents / 100)}
            sub={`${kpis.open_count} open quotes`}
          />
          <KpiCard
            label="Win rate · 90d"
            value={pct(kpis.win_rate_pct)}
            sub="vs 50% target"
            tone={
              kpis.win_rate_pct == null
                ? 'muted'
                : kpis.win_rate_pct >= 50
                  ? 'good'
                  : kpis.win_rate_pct >= 35
                    ? 'warn'
                    : 'bad'
            }
          />
          <KpiCard
            label="Avg GPM · sent"
            value={pct(kpis.avg_gpm_pct)}
            sub="vs 34% target"
            tone={
              kpis.avg_gpm_pct == null
                ? 'muted'
                : kpis.avg_gpm_pct >= 34
                  ? 'good'
                  : kpis.avg_gpm_pct >= 25
                    ? 'warn'
                    : 'bad'
            }
          />
          <KpiCard
            label="Avg response"
            value={
              kpis.avg_response_hours == null
                ? '—'
                : `${kpis.avg_response_hours.toFixed(1)}h`
            }
            sub="RFQ → first contact"
            tone={
              kpis.avg_response_hours == null
                ? 'muted'
                : kpis.avg_response_hours <= 1
                  ? 'good'
                  : kpis.avg_response_hours <= 4
                    ? 'warn'
                    : 'bad'
            }
          />
          <KpiCard
            label="P90 cycle"
            value={
              kpis.p90_cycle_days == null
                ? '—'
                : `${kpis.p90_cycle_days.toFixed(1)}d`
            }
            sub="RFQ → quote sent"
            tone={
              kpis.p90_cycle_days == null
                ? 'muted'
                : kpis.p90_cycle_days <= 5
                  ? 'good'
                  : kpis.p90_cycle_days <= 10
                    ? 'warn'
                    : 'bad'
            }
          />
        </div>
        <div class="kpi-footnote">
          <span>This week's won: <strong class="num">{moneyCompact(kpis.weekly_won_cents / 100)}</strong></span>
          <span>This week's new RFQs: <strong class="num">{moneyCompact(kpis.weekly_rfq_cents / 100)}</strong></span>
        </div>
      </section>

      {/* ── 2. FUNNEL MATRIX (4×3) ───────────────────────────────── */}
      <section class="dash-section">
        <div class="section-heading">
          <h2>Funnel matrix · Lines of business × Regions</h2>
          <span class="caption">Open count · open value · YTD won · win rate</span>
        </div>
        <FunnelMatrix matrix={matrix} linesOfBusiness={linesOfBusiness} regions={regions} />
      </section>

      {/* ── 3 + 4 SIDE BY SIDE ───────────────────────────────────── */}
      <div class="dash-2col">
        <section class="dash-section">
          <div class="section-heading">
            <h2>Pipeline by stage</h2>
            <span class="caption">Non-terminal stages</span>
          </div>
          <PipelineByStage rows={pipeline} />
        </section>

        <section class="dash-section">
          <div class="section-heading">
            <h2>Reject reasons · 90d</h2>
            <span class="caption text-brass">Brass = requote-eligible</span>
          </div>
          <RejectReasons rows={rejectReasons} />
        </section>
      </div>

      {/* ── 5. ACTIONS NEEDED ────────────────────────────────────── */}
      <section class="dash-section">
        <div class="section-heading">
          <h2>Actions needed · SLA</h2>
          <span class="caption">{actionsNeeded.length} quote(s) past target or breach threshold</span>
        </div>
        <ActionsNeeded rows={actionsNeeded} />
      </section>

      {/* ── 6. RECENT ACTIVITY ───────────────────────────────────── */}
      <section class="dash-section">
        <div class="section-heading">
          <h2>Recent activity</h2>
          <span class="caption">Stage changes + customer touchpoints</span>
        </div>
        <RecentActivityFeed rows={recentActivity} />
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer class="dash-footer">
        <span class="caption">
          CoSai. × YBMT Quote CRM · Phase 4 dashboard · data fresh at {dateTime(now)}
        </span>
      </footer>
    </div>
  </PageShell>
)

// ─── KPI CARD ─────────────────────────────────────────────────────────

interface KpiCardProps {
  label: string
  value: string
  sub: string
  tone?: 'good' | 'warn' | 'bad' | 'muted' | 'default'
}

const KpiCard = ({ label, value, sub, tone = 'default' }: KpiCardProps) => {
  const toneClass =
    tone === 'good' ? 'text-good' : tone === 'warn' ? 'text-warn' : tone === 'bad' ? 'text-bad' : tone === 'muted' ? 'text-muted' : ''
  return (
    <div class="kpi-card">
      <div class="caption">{label}</div>
      <div class={`num kpi-value ${toneClass}`}>{value}</div>
      <div class="kpi-sub">{sub}</div>
    </div>
  )
}

// ─── FUNNEL MATRIX (4×3) ──────────────────────────────────────────────

interface FunnelMatrixProps {
  matrix: MatrixCell[]
  linesOfBusiness: LineOfBusiness[]
  regions: Region[]
}

const FunnelMatrix = ({ matrix, linesOfBusiness, regions }: FunnelMatrixProps) => {
  // Index cells by composite key for O(1) lookup.
  const cellByKey = new Map<string, MatrixCell>()
  for (const c of matrix) cellByKey.set(`${c.lob_id}:${c.region_id}`, c)

  return (
    <div class="matrix-wrap">
      <table class="matrix">
        <thead>
          <tr>
            <th class="matrix-corner">LoB / Region</th>
            {regions.map((r) => (
              <th class="matrix-col-head" key={r.id}>{r.name}</th>
            ))}
            <th class="matrix-col-head matrix-total">Total</th>
          </tr>
        </thead>
        <tbody>
          {linesOfBusiness.map((lob) => {
            const rowCells = regions.map((r) => cellByKey.get(`${lob.id}:${r.id}`))
            const rowOpen = rowCells.reduce((sum, c) => sum + (c?.open_count ?? 0), 0)
            const rowOpenValue = rowCells.reduce((sum, c) => sum + (c?.open_value_cents ?? 0), 0)
            const rowWon = rowCells.reduce((sum, c) => sum + (c?.won_ytd_value_cents ?? 0), 0)
            return (
              <tr key={lob.id}>
                <th class="matrix-row-head" style={{ borderLeftColor: lob.color ?? 'var(--border-soft)' }}>
                  <div class="matrix-row-name">{lob.name}</div>
                  <div class="caption">{lob.code}</div>
                </th>
                {regions.map((r) => {
                  const c = cellByKey.get(`${lob.id}:${r.id}`)
                  return <MatrixCellView key={`${lob.id}:${r.id}`} cell={c} lobColor={lob.color} />
                })}
                <td class="matrix-cell matrix-total-cell">
                  <div class="matrix-cell-main num">{rowOpen}</div>
                  <div class="matrix-cell-value">{moneyCompact(rowOpenValue / 100)} open</div>
                  <div class="matrix-cell-sub text-good num">{moneyCompact(rowWon / 100)} won YTD</div>
                </td>
              </tr>
            )
          })}
          {/* Column totals */}
          <tr class="matrix-totals-row">
            <th class="matrix-row-head matrix-row-total">Total</th>
            {regions.map((r) => {
              const colCells = linesOfBusiness.map((lob) => cellByKey.get(`${lob.id}:${r.id}`))
              const colOpen = colCells.reduce((s, c) => s + (c?.open_count ?? 0), 0)
              const colOpenValue = colCells.reduce((s, c) => s + (c?.open_value_cents ?? 0), 0)
              const colWon = colCells.reduce((s, c) => s + (c?.won_ytd_value_cents ?? 0), 0)
              return (
                <td class="matrix-cell matrix-total-cell" key={r.id}>
                  <div class="matrix-cell-main num">{colOpen}</div>
                  <div class="matrix-cell-value">{moneyCompact(colOpenValue / 100)} open</div>
                  <div class="matrix-cell-sub text-good num">{moneyCompact(colWon / 100)} won YTD</div>
                </td>
              )
            })}
            {/* Grand total */}
            {(() => {
              const allOpen = matrix.reduce((s, c) => s + c.open_count, 0)
              const allOpenValue = matrix.reduce((s, c) => s + c.open_value_cents, 0)
              const allWon = matrix.reduce((s, c) => s + c.won_ytd_value_cents, 0)
              return (
                <td class="matrix-cell matrix-total-cell matrix-grand">
                  <div class="matrix-cell-main num">{allOpen}</div>
                  <div class="matrix-cell-value">{moneyCompact(allOpenValue / 100)} open</div>
                  <div class="matrix-cell-sub text-good num">{moneyCompact(allWon / 100)} won YTD</div>
                </td>
              )
            })()}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const MatrixCellView = ({ cell, lobColor }: { cell: MatrixCell | undefined; lobColor: string | null }) => {
  if (!cell || cell.open_count === 0 && cell.won_ytd_count === 0) {
    return (
      <td class="matrix-cell matrix-empty">
        <div class="text-muted">—</div>
      </td>
    )
  }
  return (
    <td class="matrix-cell">
      <div class="matrix-cell-main num">{cell.open_count}</div>
      <div class="matrix-cell-value">{moneyCompact(cell.open_value_cents / 100)} open</div>
      {cell.won_ytd_value_cents > 0 && (
        <div class="matrix-cell-sub text-good num">{moneyCompact(cell.won_ytd_value_cents / 100)} won</div>
      )}
      {cell.win_rate_pct != null && (
        <div class="matrix-cell-sub text-muted">{pct(cell.win_rate_pct)} win</div>
      )}
    </td>
  )
}

// ─── PIPELINE BY STAGE ────────────────────────────────────────────────

const PipelineByStage = ({ rows }: { rows: PipelineStageRow[] }) => {
  const total = rows.reduce((s, r) => s + r.count, 0)
  const totalValue = rows.reduce((s, r) => s + r.value_cents, 0)
  const maxValue = Math.max(1, ...rows.map((r) => r.value_cents))

  return (
    <div class="card pipeline-card">
      {rows.map((r) => (
        <div class="pipeline-row" key={r.stage_id}>
          <div class="pipeline-label">
            <span class="stage-pill" style={stagePillStyle(r.color ?? '#7c7a78')}>
              {r.stage_name}
            </span>
          </div>
          <div class="pipeline-bar-wrap">
            <div
              class="pipeline-bar"
              style={{
                width: `${(r.value_cents / maxValue) * 100}%`,
                background: r.color ?? 'var(--muted-stone)',
              }}
            />
          </div>
          <div class="pipeline-count num">{r.count}</div>
          <div class="pipeline-value num">{moneyCompact(r.value_cents / 100)}</div>
        </div>
      ))}
      <div class="pipeline-row pipeline-total">
        <div class="pipeline-label caption">Total open</div>
        <div class="pipeline-bar-wrap" />
        <div class="pipeline-count num"><strong>{total}</strong></div>
        <div class="pipeline-value num"><strong>{moneyCompact(totalValue / 100)}</strong></div>
      </div>
    </div>
  )
}

// ─── REJECT REASONS ───────────────────────────────────────────────────

const RejectReasons = ({ rows }: { rows: RejectReasonRow[] }) => {
  if (rows.length === 0) {
    return (
      <div class="card">
        <p class="text-muted" style={{ margin: 0 }}>No rejections in the last 90 days.</p>
      </div>
    )
  }
  const maxCount = Math.max(1, ...rows.map((r) => r.count))
  return (
    <div class="card reject-card">
      {rows.map((r) => (
        <div
          class={`reject-row ${r.is_requote_eligible ? 'reject-row-eligible' : ''}`}
          key={r.reason_id}
        >
          <div class="reject-reason">
            {r.is_requote_eligible ? <span class="reject-flag">↻</span> : null}
            {r.reason}
          </div>
          <div class="reject-bar-wrap">
            <div
              class="reject-bar"
              style={{
                width: `${(r.count / maxCount) * 100}%`,
                background: r.is_requote_eligible ? 'var(--brass-accent)' : 'var(--muted-stone)',
              }}
            />
          </div>
          <div class="reject-count num">{r.count}</div>
          <div class="reject-value num">{moneyCompact(r.value_cents / 100)}</div>
        </div>
      ))}
    </div>
  )
}

// ─── ACTIONS NEEDED ───────────────────────────────────────────────────

const ActionsNeeded = ({ rows }: { rows: ActionNeededRow[] }) => {
  if (rows.length === 0) {
    return (
      <div class="card">
        <p class="text-good" style={{ margin: 0, fontWeight: 600 }}>
          ✓ Nothing past SLA. All open quotes are within target.
        </p>
      </div>
    )
  }
  return (
    <div class="card actions-card">
      <table class="actions-table">
        <thead>
          <tr>
            <th>Quote</th>
            <th>Client</th>
            <th>Stage</th>
            <th class="num-col">Time in stage</th>
            <th class="num-col">SLA target</th>
            <th class="num-col">Overdue by</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.quote_id}>
              <td>
                <a href={`/crm/quotes/${r.quote_id}`} class="mono action-quote">
                  {r.quote_number ?? `#${r.quote_id}`}
                </a>
              </td>
              <td>{r.client_name}</td>
              <td>
                <span class="stage-pill" style={stagePillStyle(r.stage_color ?? '#7c7a78')}>
                  {r.stage_name}
                </span>
              </td>
              <td class="num-col num">{formatHours(r.hours_in_stage)}</td>
              <td class="num-col num text-muted">
                {r.sla_target_hours != null ? formatHours(r.sla_target_hours) : '—'}
              </td>
              <td class={`num-col num ${r.severity === 'breached' ? 'text-bad' : 'text-warn'}`}>
                +{formatHours(r.hours_overdue)}
              </td>
              <td>
                {r.severity === 'breached' ? (
                  <span class="severity-badge severity-bad">Breached</span>
                ) : (
                  <span class="severity-badge severity-warn">Warning</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatHours(h: number): string {
  if (h < 24) return `${Math.round(h)}h`
  const d = h / 24
  if (d < 14) return `${d.toFixed(1)}d`
  return `${Math.round(d)}d`
}

// ─── RECENT ACTIVITY ──────────────────────────────────────────────────

const RecentActivityFeed = ({ rows }: { rows: RecentActivityRow[] }) => {
  if (rows.length === 0) {
    return (
      <div class="card">
        <p class="text-muted" style={{ margin: 0 }}>No recent activity yet.</p>
      </div>
    )
  }
  return (
    <div class="card activity-card">
      <ol class="activity-list">
        {rows.map((r, i) => (
          <li class="activity-item" key={`${r.kind}-${r.quote_id}-${i}`}>
            <div class="activity-marker" style={{
              background: r.kind === 'stage_change' ? (r.stage_color ?? 'var(--muted-stone)') : 'var(--ink-charcoal)',
            }} />
            <div class="activity-body">
              <div class="activity-headline">
                <a href={`/crm/quotes/${r.quote_id}`} class="mono">
                  {r.quote_number ?? `#${r.quote_id}`}
                </a>
                <span class="text-muted"> · {r.client_name}</span>
              </div>
              <div class="activity-what">{r.what}</div>
              {r.detail && <div class="activity-detail text-muted">{r.detail}</div>}
              <div class="activity-meta caption">
                {ago(r.when)}{r.who ? ` · ${r.who}` : ''} · {date(r.when)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

// ─── DASHBOARD-SCOPED CSS ─────────────────────────────────────────────

const dashboardCss = `
  /* ── Header ──────────────────────────────────────────────── */
  .dash-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 32px;
    padding-top: 16px;
  }
  .dash-sub {
    color: var(--muted-stone);
    margin: 4px 0 0 0;
    font-size: 13px;
  }
  .dash-header-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }
  .dash-section { margin-bottom: 40px; }
  .dash-2col {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }
  @media (max-width: 1000px) {
    .dash-2col { grid-template-columns: 1fr; }
  }

  /* ── Password toast ──────────────────────────────────────── */
  .pw-toast {
    background: rgba(74,124,89,0.10);
    border: 1px solid rgba(74,124,89,0.35);
    color: var(--good-green);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 24px;
    font-size: 13px;
    font-weight: 600;
  }

  /* ── KPI strip ──────────────────────────────────────────── */
  .kpi-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
  @media (max-width: 1100px) { .kpi-strip { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 720px)  { .kpi-strip { grid-template-columns: repeat(2, 1fr); } }
  .kpi-card {
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: 0 1px 2px rgba(27,26,30,0.04);
  }
  .kpi-value {
    font-size: 28px;
    line-height: 1.1;
    margin-top: 6px;
    color: var(--ink-charcoal);
  }
  .kpi-sub {
    color: var(--muted-stone);
    font-size: 12px;
    margin-top: 4px;
  }
  .kpi-footnote {
    display: flex;
    gap: 32px;
    margin-top: 12px;
    padding: 0 4px;
    color: var(--muted-stone);
    font-size: 13px;
  }
  .kpi-footnote strong { color: var(--ink-charcoal); }

  /* ── Funnel matrix ──────────────────────────────────────── */
  .matrix-wrap {
    overflow-x: auto;
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(27,26,30,0.04);
  }
  table.matrix {
    border-collapse: collapse;
    width: 100%;
    min-width: 720px;
  }
  .matrix th, .matrix td { padding: 14px 16px; text-align: left; vertical-align: top; }
  .matrix thead th {
    background: var(--paper-cream);
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted-stone);
    border-bottom: 1px solid var(--border-soft);
  }
  .matrix-corner { width: 200px; }
  .matrix-row-head {
    border-left: 3px solid var(--border-soft);
    border-bottom: 1px solid var(--border-soft);
    background: var(--paper-cream);
  }
  .matrix-row-name { font-weight: 600; font-size: 13px; }
  .matrix-cell {
    border-bottom: 1px solid var(--border-soft);
    border-left: 1px solid var(--border-soft);
    min-width: 130px;
  }
  .matrix-cell-main {
    font-size: 22px;
    line-height: 1.1;
    color: var(--ink-charcoal);
  }
  .matrix-cell-value {
    font-size: 12px;
    color: var(--muted-stone);
    margin-top: 2px;
  }
  .matrix-cell-sub {
    font-size: 11px;
    margin-top: 2px;
  }
  .matrix-empty { background: rgba(245,243,239,0.5); }
  .matrix-total-cell { background: var(--paper-cream); font-weight: 600; }
  .matrix-grand { background: rgba(200,169,106,0.10); }
  .matrix-totals-row th, .matrix-totals-row td { border-top: 2px solid var(--ink-charcoal); }
  .matrix-row-total { font-weight: 600; }

  /* ── Pipeline by stage ──────────────────────────────────── */
  .pipeline-card { padding: 16px 20px; }
  .pipeline-row {
    display: grid;
    grid-template-columns: 180px 1fr 50px 80px;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-soft);
  }
  .pipeline-row:last-child { border-bottom: none; }
  .pipeline-row.pipeline-total { border-top: 1px solid var(--ink-charcoal); margin-top: 4px; padding-top: 12px; }
  .pipeline-label { overflow: hidden; }
  .pipeline-bar-wrap {
    background: var(--paper-cream);
    border-radius: 4px;
    height: 8px;
    overflow: hidden;
  }
  .pipeline-bar { height: 100%; border-radius: 4px; transition: width 0.25s; min-width: 2px; }
  .pipeline-count { text-align: right; font-size: 14px; }
  .pipeline-value { text-align: right; font-size: 13px; color: var(--muted-stone); }

  /* ── Reject reasons ─────────────────────────────────────── */
  .reject-card { padding: 16px 20px; }
  .reject-row {
    display: grid;
    grid-template-columns: 1fr 100px 40px 70px;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-soft);
  }
  .reject-row:last-child { border-bottom: none; }
  .reject-reason { font-size: 13px; }
  .reject-row-eligible .reject-reason { color: var(--brass-accent); font-weight: 600; }
  .reject-flag {
    display: inline-block;
    margin-right: 6px;
    color: var(--brass-accent);
    font-weight: 700;
  }
  .reject-bar-wrap { background: var(--paper-cream); border-radius: 4px; height: 6px; overflow: hidden; }
  .reject-bar { height: 100%; border-radius: 4px; min-width: 2px; }
  .reject-count { text-align: right; font-size: 13px; }
  .reject-value { text-align: right; font-size: 12px; color: var(--muted-stone); }

  /* ── Actions needed ─────────────────────────────────────── */
  .actions-card { padding: 0; overflow: hidden; }
  .actions-table { width: 100%; border-collapse: collapse; }
  .actions-table th, .actions-table td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-soft);
    font-size: 13px;
    vertical-align: middle;
  }
  .actions-table thead th {
    background: var(--paper-cream);
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted-stone);
  }
  .actions-table tbody tr:last-child td { border-bottom: none; }
  .actions-table .num-col { text-align: right; }
  .action-quote { color: var(--ink-charcoal); text-decoration: none; }
  .action-quote:hover { color: var(--brass-accent); }
  .severity-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .severity-bad { background: rgba(168,69,60,0.12); color: var(--danger-terracotta); }
  .severity-warn { background: rgba(181,121,58,0.12); color: var(--warn-amber); }

  /* ── Activity feed ──────────────────────────────────────── */
  .activity-card { padding: 16px 20px; }
  .activity-list { list-style: none; margin: 0; padding: 0; }
  .activity-item {
    display: grid;
    grid-template-columns: 14px 1fr;
    gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-soft);
  }
  .activity-item:last-child { border-bottom: none; }
  .activity-marker {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    margin-top: 6px;
  }
  .activity-headline { font-size: 13px; font-weight: 600; }
  .activity-what { font-size: 13px; margin-top: 2px; }
  .activity-detail { font-size: 12px; margin-top: 2px; font-style: italic; }
  .activity-meta { margin-top: 4px; }

  /* ── Footer ─────────────────────────────────────────────── */
  .dash-footer {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--border-soft);
    text-align: center;
  }
`
