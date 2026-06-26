/**
 * CoSai. × YBMT — Phase 1 Landing Page
 * ---------------------------------------------------------------------------
 * The "annual report cover" page. Proves the brand spec is locked.
 * What you should see:
 *   - Warm cream paper background (#f5f3ef)
 *   - Charcoal brand bar (#1b1a1e) at top
 *   - "CoSai. × YBMT" wordmark with BRASS PERIOD (#c8a96a) — the signature element
 *   - "Quote CRM" subhead in Space Grotesk
 *   - Phase progress strip (where we are in the 7-phase build)
 *   - Brand-system swatches (proof that every token resolves correctly)
 *
 * Replaces itself with /crm/dashboard once auth is wired in Phase 3.
 */

import { PageShell } from '../components/page-shell'
import { Wordmark } from '../components/wordmark'

const PHASES = [
  { n: 1, title: 'Foundation', detail: 'Brand · fonts · D1 binding · folder structure',          status: 'done'    },
  { n: 2, title: 'Schema',     detail: '16 tables · GPM generated col · 9 lookup seeds',          status: 'done'    },
  { n: 3, title: 'Auth',       detail: '4 roles · bcrypt · requireRole() · session mgmt',          status: 'done'    },
  { n: 4, title: 'Dashboard',  detail: 'KPI strip · 4×3 funnel matrix · SLA actions · timeline',   status: 'done'    },
  { n: 5, title: 'RFQ Intake', detail: 'Single-screen form · Q-YYYY-NNNN race-safe allocator',     status: 'done'    },
  { n: 6, title: 'Quote Detail', detail: 'Contact logger · stage transitions · requote flow',       status: 'done'    },
  { n: 7, title: 'Real Data',  detail: '68 Meta Ads leads imported · SAMPLE badge UI · Corrina linked', status: 'current' },
] as const

interface CrmLandingPageProps {
  /** When the landing is shown to an authenticated user (post-login), pass their identity here. */
  authedUser?: { name: string; role: string } | null
  /** When true, render a one-shot "Password updated" toast. */
  pwChanged?: boolean
}

export const CrmLandingPage = ({ authedUser = null, pwChanged = false }: CrmLandingPageProps = {}) => (
  <PageShell title="CoSai. × YBMT Quote CRM" active={authedUser ? 'dashboard' : null} user={authedUser} trainingMode={false}>
    <div class="page">

      {pwChanged && (
        <div
          role="status"
          style={{
            background: 'rgba(74,124,89,0.10)',
            border: '1px solid rgba(74,124,89,0.35)',
            color: 'var(--good-green)',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '24px',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          Password updated · you're signed in.
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '32px', paddingBottom: '48px', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ marginBottom: '24px' }}>
          <Wordmark jv size="hero" />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 500, lineHeight: 1.15, marginBottom: '16px', maxWidth: '720px' }}>
          Quote CRM
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted-stone)', maxWidth: '640px', lineHeight: 1.6 }}>
          Micro-management of the RFQ → quote sent → accepted / rejected → requote → Aroflo handover path.
          Single source of truth for pipeline value, win rate, gross margin and response time across four lines
          of business and three regions.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          {authedUser ? (
            <>
              <a href="/crm/settings/lookups" class="btn btn-primary">View seed data</a>
              <a href="/crm/auth/logout" class="btn btn-secondary">Sign out</a>
            </>
          ) : (
            <>
              <a href="/crm/auth/login" class="btn btn-primary">Sign in</a>
              <a href="/" class="btn btn-secondary">← Back to intranet</a>
            </>
          )}
        </div>
      </section>

      {/* ── PHASE PROGRESS ───────────────────────────────────────── */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--border-soft)' }}>
        <div class="section-heading">
          <h2>Build progress</h2>
          <span class="caption">7-phase delivery plan</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          {PHASES.map(p => {
            const isCurrent = p.status === 'current'
            const isQueued = p.status === 'queued'
            return (
              <div
                class="card"
                style={{
                  padding: '18px',
                  borderColor: isCurrent ? 'var(--brass-accent)' : 'var(--border-soft)',
                  borderWidth: isCurrent ? '1.5px' : '1px',
                  opacity: isQueued ? 0.55 : 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span class="caption" style={{ color: isCurrent ? 'var(--brass-accent)' : 'var(--muted-stone)' }}>
                    Phase {p.n}
                  </span>
                  {isCurrent && (
                    <span style={{ background: 'var(--brass-accent)', color: 'var(--ink-charcoal)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Live now
                    </span>
                  )}
                  {p.status === 'next' && (
                    <span style={{ background: 'transparent', color: 'var(--ink-charcoal)', border: '1px solid var(--ink-charcoal)', padding: '1px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Next
                    </span>
                  )}
                  {p.status === 'done' && (
                    <span style={{ background: 'rgba(74,124,89,0.12)', color: 'var(--good-green)', border: '1px solid rgba(74,124,89,0.35)', padding: '1px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Done
                    </span>
                  )}
                </div>
                <h3 style={{ marginBottom: '6px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted-stone)', margin: 0, lineHeight: 1.5 }}>{p.detail}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── NON-NEGOTIABLES (proof we read the brief) ────────────── */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--border-soft)' }}>
        <div class="section-heading">
          <h2>Locked rules</h2>
          <span class="caption">Non-negotiables from Part 1</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {[
            ['Money', 'NUMERIC(14,2) storage · $1,234,567 display · never floats'],
            ['GPM', 'GENERATED column · ((sales − cost) / sales) × 100 · target 34% / stretch 40%'],
            ['Quote numbers', 'Q-YYYY-NNNN · requotes append R · race-safe FOR UPDATE allocator'],
            ['Timezone', 'All datetimes stored UTC · displayed Australia/Brisbane'],
            ['Reject flow', 'Reason mandatory at stage 10 · 3 reasons force requote prompt'],
            ['Sample data', 'is_sample flag · Training Mode banner when count(real)=0'],
            ['No triggers', 'Stage history written by app in same transaction'],
            ['Light mode only', 'No dark mode · no theme toggle · brass period always'],
          ].map(([label, body]) => (
            <div class="card" style={{ padding: '18px' }}>
              <div class="caption" style={{ marginBottom: '8px' }}>{label}</div>
              <p style={{ fontSize: '13px', color: 'var(--ink-charcoal)', margin: 0, lineHeight: 1.5 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND SWATCHES (visual proof every token resolves) ────── */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--border-soft)' }}>
        <div class="section-heading">
          <h2>Brand system</h2>
          <span class="caption">Locked palette · do not redesign</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
          {[
            ['#1b1a1e', 'Ink charcoal',       'brand bar · body text',   '#ffffff'],
            ['#f5f3ef', 'Paper cream',        'page background',          '#1b1a1e'],
            ['#ffffff', 'White card',         'cards · inputs',           '#1b1a1e'],
            ['#c8a96a', 'Brass accent',       'the period · CTAs',        '#1b1a1e'],
            ['#4a7c59', 'Good green',         'won · on-target',          '#ffffff'],
            ['#b5793a', 'Warn amber',         'SLA approaching',          '#ffffff'],
            ['#a8453c', 'Danger terracotta',  'rejected · SLA breach',    '#ffffff'],
            ['#7c7a78', 'Muted stone',        'secondary text',            '#ffffff'],
          ].map(([hex, name, use, ink]) => (
            <div style={{ background: hex, color: ink, padding: '20px 16px', borderRadius: '12px', border: hex === '#ffffff' ? '1px solid var(--border-soft)' : 'none', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', opacity: 0.85 }}>{hex}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '13px' }}>{name}</div>
                <div style={{ fontSize: '11px', opacity: 0.75, marginTop: '2px' }}>{use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TYPOGRAPHY PROOF ─────────────────────────────────────── */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--border-soft)' }}>
        <div class="section-heading">
          <h2>Typography</h2>
          <span class="caption">3 type families · tabular numerals · monospace quote#</span>
        </div>
        <div class="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          <div>
            <div class="caption" style={{ marginBottom: '8px' }}>Display · Space Grotesk</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>$1,234,567</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '36px', letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--brass-accent)', fontVariantNumeric: 'tabular-nums', marginTop: '6px' }}>34.4%</div>
          </div>
          <div>
            <div class="caption" style={{ marginBottom: '8px' }}>Body · Inter</div>
            <p style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: '6px' }}>
              The standard body face. Reads at 14px / 1.55 line-height, 400 for paragraphs and 600 for emphasis.
            </p>
            <p style={{ fontSize: '12px', color: 'var(--muted-stone)', margin: 0 }}>Secondary text muted stone</p>
          </div>
          <div>
            <div class="caption" style={{ marginBottom: '8px' }}>Mono · JetBrains Mono</div>
            <div class="mono" style={{ fontSize: '15px' }}>Q-2026-0001</div>
            <div class="mono" style={{ fontSize: '15px', marginTop: '4px' }}>Q-2026-0003R</div>
            <div class="mono" style={{ fontSize: '15px', marginTop: '4px', color: 'var(--muted-stone)' }}>quote_sent_at: 14:30</div>
          </div>
        </div>
      </section>

      {/* ── COMPONENT PROOF ──────────────────────────────────────── */}
      <section style={{ paddingTop: '40px', paddingBottom: '64px' }}>
        <div class="section-heading">
          <h2>Components</h2>
          <span class="caption">Buttons · pills · inputs (locked)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div class="card">
            <div class="caption" style={{ marginBottom: '14px' }}>Buttons</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button class="btn btn-primary">Create quote</button>
              <button class="btn btn-secondary">Cancel</button>
              <button class="btn btn-danger">Reject</button>
              <button class="btn btn-ghost">Skip</button>
            </div>
          </div>

          <div class="card">
            <div class="caption" style={{ marginBottom: '14px' }}>Stage pills (sample colours from quote_stages.color)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { name: 'RFQ Received',                color: '#6366f1' },
                { name: 'Quote Sent',                  color: '#f59e0b' },
                { name: 'Follow-up / Negotiation',     color: '#f97316' },
                { name: 'Accepted — Handed to Aroflo', color: '#10b981' },
                { name: 'Rejected',                    color: '#ef4444' },
                { name: 'On Hold',                     color: '#94a3b8' },
              ].map(s => (
                <span
                  class="stage-pill"
                  style={{
                    background: s.color + '1f',
                    borderColor: s.color + '99',
                    color: s.color,
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div class="card">
            <div class="caption" style={{ marginBottom: '14px' }}>Inputs</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label class="label" for="demo-text">Client name</label>
                <input id="demo-text" class="input" placeholder="Harbour View Strata" />
              </div>
              <div>
                <label class="label" for="demo-select">Line of business</label>
                <select id="demo-select" class="select">
                  <option>Unit Renovations</option>
                  <option>Termite Damage Repair</option>
                  <option>Decks Entertainment</option>
                  <option>Commercial / Other</option>
                </select>
              </div>
              <div>
                <label class="label" for="demo-error">Estimated cost (with error)</label>
                <input id="demo-error" class="input" aria-invalid="true" placeholder="32500" />
                <span class="error-text">Must be a positive number</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ paddingTop: '32px', paddingBottom: '40px', borderTop: '1px solid var(--border-soft)', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted-stone)', fontSize: '12px' }}>
        <div>
          <Wordmark jv size="sm" />
          <div style={{ marginTop: '4px' }}>
            CoSai Construction Pty Ltd · ABN 83 699 078 852 · in joint venture with Sinbau Pty Ltd · ABN 74 076 531 765
          </div>
        </div>
        <div class="mono" style={{ fontSize: '11px' }}>cosai-crm · phase-1 · session/cosai-crm</div>
      </footer>

    </div>
  </PageShell>
)
