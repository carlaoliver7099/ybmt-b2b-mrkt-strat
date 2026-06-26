/**
 * CoSai. × YBMT — Phase 2 Verification Page
 * ---------------------------------------------------------------------------
 * /crm/settings/lookups
 *
 * Read-only proof that the schema + seed migrations applied correctly.
 * Every lookup table renders as its own card section so Carla can verify
 * every reference row at a glance before Phase 3 layers auth on top.
 *
 * Source data: migrations/crm/0001_schema.sql + 0002_lookups.sql
 * Sample data counters: migrations/crm/0003_sample_data.sql
 *
 * This page is intentionally not behind auth — it'll be wrapped with
 * requireRole('cosai_admin') in Phase 3.
 */

import { PageShell } from '../components/page-shell'
import { money, pct } from '../lib/formatters'
import { stagePillStyle } from '../lib/brand'
import type {
  LineOfBusiness,
  Region,
  Scope,
  QuoteStage,
  RejectReason,
  ContactMethod,
  LeadSource,
  FinancialTarget,
  StageSla,
  TeamMember,
} from '../lib/db'

// ── Props ────────────────────────────────────────────────────────────────

export interface LookupsPageProps {
  linesOfBusiness: LineOfBusiness[]
  regions: Region[]
  scopes: Scope[]
  quoteStages: QuoteStage[]
  rejectReasons: RejectReason[]
  contactMethods: ContactMethod[]
  leadSources: LeadSource[]
  financialTargets: FinancialTarget[]
  stageSlas: StageSla[]
  teamMembers: TeamMember[]
  counts: {
    clients: number
    quotes_real: number
    quotes_sample: number
    contact_log: number
    stage_history: number
    users: number
  }
}

// ── Small inline helpers ────────────────────────────────────────────────

/**
 * Financial-target unit decoder. The seed stores all values as a scaled
 * INTEGER in `target_value_cents` regardless of the unit, so this function
 * reverses the scale per spec:
 *
 *   $/week  → divide by 100 → money()
 *   %       → divide by 100 → "34.0%"
 *   hours   → divide by 10  → "10 hrs"
 *   days    → divide by 100 → "5.0 days"
 */
const formatTargetValue = (raw: number | null, unit: string | null): string => {
  if (raw === null) return '—'
  switch (unit) {
    case '$/week':
      return money(raw / 100)
    case '%':
      return pct(raw / 100)
    case 'hours':
      return (raw / 10).toFixed(1).replace(/\.0$/, '') + ' hrs'
    case 'days':
      return (raw / 100).toFixed(1).replace(/\.0$/, '') + ' days'
    default:
      return String(raw)
  }
}

/** Yes/no badge for the 0/1 boolean columns. */
const Bool = ({ v }: { v: number }) =>
  v ? (
    <span class="text-good" style={{ fontWeight: 600 }}>yes</span>
  ) : (
    <span class="text-muted">no</span>
  )

/** Stage pill that respects each stage's color. */
const StagePill = ({ name, color }: { name: string; color: string | null }) => {
  const c = color || '#7c7a78'
  const s = stagePillStyle(c)
  return (
    <span
      class="stage-pill"
      style={{
        backgroundColor: s.backgroundColor,
        borderColor: s.borderColor,
        color: s.color,
      }}
    >
      {name}
    </span>
  )
}

/** Section wrapper: card with heading + table. */
const Section = ({
  id,
  title,
  count,
  caption,
  children,
}: {
  id: string
  title: string
  count: number
  caption?: string
  children: any
}) => (
  <section
    id={id}
    style={{ marginBottom: '32px' }}
  >
    <div class="section-heading">
      <h2>
        {title}{' '}
        <span class="text-muted" style={{ fontWeight: 400, fontSize: '16px' }}>
          · {count} {count === 1 ? 'row' : 'rows'}
        </span>
      </h2>
      {caption ? <span class="caption">{caption}</span> : null}
    </div>
    <div class="card" style={{ padding: 0, overflow: 'hidden' }}>
      {children}
    </div>
  </section>
)

/** Common table styles. */
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontSize: '13px',
}
const thStyle = {
  textAlign: 'left' as const,
  padding: '10px 16px',
  background: 'var(--paper-cream)',
  borderBottom: '1px solid var(--border-soft)',
  fontWeight: 600,
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  color: 'var(--muted-stone)',
  whiteSpace: 'nowrap' as const,
}
const tdStyle = {
  padding: '10px 16px',
  borderBottom: '1px solid var(--border-soft)',
  verticalAlign: 'top' as const,
}
const tdMonoStyle = {
  ...tdStyle,
  fontFamily: 'var(--font-mono)',
  fontSize: '12px',
  color: 'var(--muted-stone)',
  whiteSpace: 'nowrap' as const,
}
const tdNumStyle = {
  ...tdStyle,
  textAlign: 'right' as const,
  fontVariantNumeric: 'tabular-nums' as const,
}

// ── Page ─────────────────────────────────────────────────────────────────

export const LookupsPage = (props: LookupsPageProps) => {
  const {
    linesOfBusiness, regions, scopes, quoteStages, rejectReasons,
    contactMethods, leadSources, financialTargets, stageSlas, teamMembers, counts,
  } = props

  // Use Training Mode whenever there are zero real quotes
  const trainingMode = counts.quotes_real === 0

  // Build a name lookup for stages so SLAs and rejects render readable names
  const stageNameById = new Map<number, { name: string; color: string | null }>()
  for (const s of quoteStages) stageNameById.set(s.id, { name: s.name, color: s.color })
  const lobNameById = new Map<number, string>()
  for (const l of linesOfBusiness) lobNameById.set(l.id, l.name)

  return (
    <PageShell title="Lookups · Phase 2 verification" active="settings" user={null} trainingMode={trainingMode}>
      <div class="page">

        {/* ── Page header ──────────────────────────────────────── */}
        <header style={{ marginBottom: '32px' }}>
          <span class="caption" style={{ color: 'var(--brass-accent)' }}>Phase 2 · Schema + Seed</span>
          <h1 style={{ marginTop: '8px' }}>Lookup tables · verification</h1>
          <p style={{ color: 'var(--muted-stone)', maxWidth: '720px', marginTop: '12px' }}>
            Every reference table from <code class="mono">migrations/crm/0002_lookups.sql</code> rendered straight from D1.
            If a row is missing or a number looks off, the seed didn't apply cleanly — fix the migration, re-run, refresh.
          </p>
        </header>

        {/* ── Summary strip ────────────────────────────────────── */}
        <div
          class="card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
            padding: '20px 24px',
          }}
        >
          <SummaryCell label="Lines of business" value={linesOfBusiness.length} />
          <SummaryCell label="Regions"            value={regions.length} />
          <SummaryCell label="Scopes"             value={scopes.length} />
          <SummaryCell label="Quote stages"       value={quoteStages.length} />
          <SummaryCell label="Reject reasons"     value={rejectReasons.length} />
          <SummaryCell label="Contact methods"    value={contactMethods.length} />
          <SummaryCell label="Lead sources"       value={leadSources.length} />
          <SummaryCell label="Financial targets"  value={financialTargets.length} />
          <SummaryCell label="Stage SLAs"         value={stageSlas.length} />
          <SummaryCell label="Team members"       value={teamMembers.length} />
        </div>

        {/* ── Core data counts ─────────────────────────────────── */}
        <div
          class="card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
            padding: '20px 24px',
            borderLeft: '3px solid var(--brass-accent)',
          }}
        >
          <SummaryCell label="Clients"             value={counts.clients} />
          <SummaryCell label="Sample quotes"       value={counts.quotes_sample} />
          <SummaryCell label="Real quotes"         value={counts.quotes_real} />
          <SummaryCell label="Contact-log rows"    value={counts.contact_log} />
          <SummaryCell label="Stage-history rows"  value={counts.stage_history} />
          <SummaryCell label="Users"               value={counts.users} />
        </div>

        {/* ── 1. Lines of business ─────────────────────────────── */}
        <Section id="lob" title="Lines of business" count={linesOfBusiness.length} caption="LoB taxonomy">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Code</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Specialty</th>
                <th style={thStyle}>Color</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Avg won target</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Wins/wk</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {linesOfBusiness.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdMonoStyle}>{r.code}</td>
                  <td style={tdStyle}>{r.name}</td>
                  <td style={tdStyle}><Bool v={r.is_specialty} /></td>
                  <td style={tdStyle}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: r.color || 'transparent', border: '1px solid var(--border-soft)' }} />
                      <span class="mono">{r.color || '—'}</span>
                    </span>
                  </td>
                  <td style={tdNumStyle}>{r.target_avg_won_value_cents !== null ? money(r.target_avg_won_value_cents / 100) : '—'}</td>
                  <td style={tdNumStyle}>{r.target_wins_per_week ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 2. Regions ───────────────────────────────────────── */}
        <Section id="regions" title="Regions" count={regions.length} caption="Geographic split">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Code</th>
                <th style={thStyle}>Name</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {regions.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdMonoStyle}>{r.code}</td>
                  <td style={tdStyle}>{r.name}</td>
                  <td style={tdNumStyle}>{r.sort_order ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 3. Quote stages ─────────────────────────────────── */}
        <Section id="stages" title="Quote stages" count={quoteStages.length} caption="11 canonical stages">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Stage</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Terminal</th>
                <th style={thStyle}>Won</th>
                <th style={thStyle}>Lost</th>
                <th style={thStyle}>Color</th>
              </tr>
            </thead>
            <tbody>
              {quoteStages.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}><StagePill name={r.name} color={r.color} /></td>
                  <td style={tdNumStyle}>{r.sort_order}</td>
                  <td style={tdStyle}><Bool v={r.is_terminal} /></td>
                  <td style={tdStyle}><Bool v={r.is_won} /></td>
                  <td style={tdStyle}><Bool v={r.is_lost} /></td>
                  <td style={tdMonoStyle}>{r.color || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 4. Reject reasons ───────────────────────────────── */}
        <Section id="reject" title="Reject reasons" count={rejectReasons.length} caption="Requote-eligible flagged">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Reason</th>
                <th style={thStyle}>Requote-eligible</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {rejectReasons.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}>{r.reason}</td>
                  <td style={tdStyle}>
                    {r.is_requote_eligible
                      ? <span class="text-brass" style={{ fontWeight: 600 }}>yes</span>
                      : <span class="text-muted">no</span>}
                  </td>
                  <td style={tdNumStyle}>{r.sort_order ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 5. Contact methods ──────────────────────────────── */}
        <Section id="contact" title="Contact methods" count={contactMethods.length} caption="Grouped by category">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Category</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {contactMethods.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}>{r.name}</td>
                  <td style={tdStyle}><span class="caption">{r.category || '—'}</span></td>
                  <td style={tdNumStyle}>{r.sort_order ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 6. Lead sources ─────────────────────────────────── */}
        <Section id="leads" title="Lead sources" count={leadSources.length} caption="Digital · Referral · Insurance · Direct">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Paid</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {leadSources.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}>{r.name}</td>
                  <td style={tdStyle}><span class="caption">{r.category || '—'}</span></td>
                  <td style={tdStyle}><Bool v={r.is_paid} /></td>
                  <td style={tdNumStyle}>{r.sort_order ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 7. Financial targets ────────────────────────────── */}
        <Section id="targets" title="Financial targets" count={financialTargets.length} caption="Operating goals">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Metric</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Target</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Stretch</th>
                <th style={thStyle}>Unit</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              {financialTargets.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdMonoStyle}>{r.metric}</td>
                  <td style={tdNumStyle}>{formatTargetValue(r.target_value_cents, r.unit)}</td>
                  <td style={tdNumStyle}>{formatTargetValue(r.stretch_value_cents, r.unit)}</td>
                  <td style={tdStyle}><span class="caption">{r.unit || '—'}</span></td>
                  <td style={{ ...tdStyle, color: 'var(--muted-stone)' }}>{r.description || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 8. Stage SLAs ───────────────────────────────────── */}
        <Section id="slas" title="Stage SLAs" count={stageSlas.length} caption="Target vs breach hours">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>SLA</th>
                <th style={thStyle}>From → To</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Target (h)</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Breach (h)</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {stageSlas.map(r => {
                const from = r.from_stage_id !== null ? stageNameById.get(r.from_stage_id) : null
                const to = r.to_stage_id !== null ? stageNameById.get(r.to_stage_id) : null
                return (
                  <tr>
                    <td style={tdMonoStyle}>{r.id}</td>
                    <td style={tdStyle}>{r.sla_name}</td>
                    <td style={tdStyle}>
                      {from ? <StagePill name={from.name} color={from.color} /> : <span class="text-muted">(any)</span>}
                      <span class="text-muted" style={{ margin: '0 8px' }}>→</span>
                      {to ? <StagePill name={to.name} color={to.color} /> : <span class="text-muted">—</span>}
                    </td>
                    <td style={tdNumStyle}>{r.target_hours}</td>
                    <td style={tdNumStyle}>
                      <span class={r.breach_hours <= 48 ? 'text-warn' : ''}>{r.breach_hours}</span>
                    </td>
                    <td style={tdStyle}><Bool v={r.active} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Section>

        {/* ── 9. Team members ─────────────────────────────────── */}
        <Section id="team" title="Team members" count={teamMembers.length} caption="Carla · Gerry · Matt · Paul · Darcy">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Company</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}>{r.full_name}</td>
                  <td style={tdStyle}><span class="caption">{r.role}</span></td>
                  <td style={tdStyle}>{r.company}</td>
                  <td style={tdMonoStyle}>{r.email || '—'}</td>
                  <td style={tdMonoStyle}>{r.phone || '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── 10. Scopes (longest table — keep last) ───────────── */}
        <Section id="scopes" title="Scopes" count={scopes.length} caption="Grouped by line of business">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Line of business</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sort</th>
                <th style={thStyle}>Active</th>
              </tr>
            </thead>
            <tbody>
              {scopes.map(r => (
                <tr>
                  <td style={tdMonoStyle}>{r.id}</td>
                  <td style={tdStyle}>{r.name}</td>
                  <td style={tdStyle}>
                    {r.line_of_business_id !== null
                      ? <span class="caption">{lobNameById.get(r.line_of_business_id) || `LoB#${r.line_of_business_id}`}</span>
                      : <span class="text-muted">—</span>}
                  </td>
                  <td style={tdNumStyle}>{r.sort_order ?? '—'}</td>
                  <td style={tdStyle}><Bool v={r.active} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border-soft)', color: 'var(--muted-stone)', fontSize: '12px' }}>
          <p style={{ margin: 0 }}>
            <span class="caption" style={{ color: 'var(--brass-accent)' }}>Phase 2 verification</span>
            {' '}· Data sourced live from D1 binding <code class="mono">DB</code> · No caching.
          </p>
          <p style={{ margin: '8px 0 0 0' }}>
            Next: Phase 3 — Auth + 4 roles + RBAC. This page will become admin-only.
          </p>
        </footer>

      </div>
    </PageShell>
  )
}

/** Small repeated cell for the two summary strips at the top. */
const SummaryCell = ({ label, value }: { label: string; value: number }) => (
  <div>
    <div class="caption" style={{ marginBottom: '4px' }}>{label}</div>
    <div class="num" style={{ fontSize: '24px', lineHeight: 1.1 }}>{value}</div>
  </div>
)
