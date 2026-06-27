// ═══════════════════════════════════════════════════════════════════════════
// Marketing BI · /marketing-bi landing page (Day 1 scaffold)
// ═══════════════════════════════════════════════════════════════════════════
// Day 1 deliverable: page shell · 8 module placeholders · doctrine display ·
//                    "what we need from Corrina" handover panel ·
//                    UTM validator demo · integration status board.
// Day 2-7: each module lights up in turn.
// ═══════════════════════════════════════════════════════════════════════════

import { TopNav } from '../../nav'
import { LOBS, REGIONS, STAGES, BUDGET, BRAND, LOB_ORDER, REGION_GRID_ORDER } from '../lib/doctrine'

// ─── Status pill ───────────────────────────────────────────────────────────

const StatusPill = ({ status }: { status: 'live' | 'building' | 'pending-data' | 'parked' }) => {
  const map = {
    live:           { label: 'LIVE',          bg: '#2E7D5B', fg: '#fff' },
    building:       { label: 'BUILDING',      bg: '#C77A1A', fg: '#fff' },
    'pending-data': { label: 'PENDING DATA',  bg: '#5A554F', fg: '#fff' },
    parked:         { label: 'PARKED',        bg: '#E5E0D8', fg: '#1A1814' },
  }
  const s = map[status]
  return (
    <span style={`background:${s.bg};color:${s.fg}`}
          class="inline-block text-[10px] font-bold tracking-wider px-2 py-0.5 rounded">
      {s.label}
    </span>
  )
}

// ─── Module card placeholder ───────────────────────────────────────────────

const ModuleCard = ({ n, title, status, lines }: {
  n: string; title: string; status: 'live' | 'building' | 'pending-data' | 'parked'; lines: string[];
}) => (
  <div class="border border-[var(--line)] rounded-lg p-5 bg-white">
    <div class="flex items-start justify-between gap-3 mb-3">
      <div>
        <div class="text-[11px] text-[var(--ink-soft)] font-mono">MODULE {n}</div>
        <h3 class="text-lg font-semibold text-[var(--ink)] leading-tight">{title}</h3>
      </div>
      <StatusPill status={status} />
    </div>
    <ul class="text-xs text-[var(--ink-soft)] space-y-1">
      {lines.map(l => <li>· {l}</li>)}
    </ul>
  </div>
)

// ─── Main page ─────────────────────────────────────────────────────────────

export const MarketingBiPage = () => {
  return (
    <>
      <TopNav active="marketing-mix" />
      <main class="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 space-y-12 text-[var(--ink)]">

        {/* HERO */}
        <header class="space-y-3">
          <div class="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-[var(--ink-soft)]">
            <span>YBMT × CoSai</span>
            <span class="opacity-50">·</span>
            <span>Marketing Funnel BI</span>
            <span class="opacity-50">·</span>
            <span class="font-mono">v0.1 · Day 1</span>
          </div>
          <h1 class="font-serif text-4xl lg:text-5xl tracking-tight leading-[1.05]" style={`color:${BRAND.navy}`}>
            Marketing Funnel KPI &amp; Attribution BI Tool
          </h1>
          <p class="text-base text-[var(--ink-soft)] max-w-3xl leading-relaxed">
            The third of three funnel tools. Sits upstream of the CRM/quoting tool ·
            feeds qualified leads in · measures every dollar of the
            <strong> $720K Yr-1 envelope</strong> against the
            <strong> four locked North Stars</strong>. Built Path B
            (SEMrush-Enterprise-tier · first-party + API integrations · no third-party SaaS dependency).
          </p>
        </header>

        {/* THREE-FUNNEL CONTEXT BAR */}
        <section class="border-y border-[var(--line)] py-6">
          <h2 class="text-[11px] tracking-[0.18em] uppercase text-[var(--ink-soft)] mb-4">
            The three-funnel architecture
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
              <div class="text-[11px] font-mono text-[var(--ink-soft)]">FUNNEL 1 · MARKETING</div>
              <div class="font-semibold text-[var(--ink)] mt-1">This tool · /marketing-bi</div>
              <div class="text-xs text-[var(--ink-soft)] mt-2">Owner: Corrina / YDT · Stranger → SQL · UTM attribution · $720K spend tracking</div>
              <div class="mt-2"><StatusPill status="building" /></div>
            </div>
            <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
              <div class="text-[11px] font-mono text-[var(--ink-soft)]">FUNNEL 2 · QUOTING</div>
              <div class="font-semibold text-[var(--ink)] mt-1">CRM/Quoting · /crm</div>
              <div class="text-xs text-[var(--ink-soft)] mt-2">Owner: Gerry &amp; Matt · SQL → Quoted → Won · already live at cosai-crm.pages.dev</div>
              <div class="mt-2"><StatusPill status="live" /></div>
            </div>
            <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
              <div class="text-[11px] font-mono text-[var(--ink-soft)]">FUNNEL 3 · FINANCE</div>
              <div class="font-semibold text-[var(--ink)] mt-1">Finance BI (separate)</div>
              <div class="text-xs text-[var(--ink-soft)] mt-2">Owner: CoSai / Carla · Won → Cash → LTGP · already built</div>
              <div class="mt-2"><StatusPill status="live" /></div>
            </div>
          </div>
        </section>

        {/* THE 8 MODULES */}
        <section>
          <div class="flex items-baseline justify-between mb-5">
            <h2 class="font-serif text-2xl tracking-tight" style={`color:${BRAND.navy}`}>The 8 modules (v1 scope)</h2>
            <div class="text-xs text-[var(--ink-soft)]">7-day build · Day 1 of 7 in progress</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <ModuleCard n="01" title="Command Centre"           status="building" lines={[
              'Today\'s burn vs plan',
              '4 North Star gauges',
              'Top 3 anomalies',
              'Trailing 7-day funnel waterfall',
            ]} />
            <ModuleCard n="02" title="Spend Tracker"             status="building" lines={[
              `$${(BUDGET.yr1Total/1000).toFixed(0)}K Yr-1 envelope`,
              'TDR $224K · POE $138K · UR $69K',
              '60/40 long/short tracker',
              'CSV upload + API ingest',
            ]} />
            <ModuleCard n="03" title="Activity Matrix"           status="pending-data" lines={[
              '12 channels × 7 stages = 84 cells',
              'Impressions · CTR · CPC · CPM',
              'Performance vs benchmark',
              'Awaits Google Ads + Meta connection',
            ]} />
            <ModuleCard n="04" title="Funnel Waterfall"          status="pending-data" lines={[
              'L1 → L2 → L3 → [PURCHASE] → R1-R4',
              'Sessions → MQL → SQL → Quoted → Won',
              'Drop-off analysis per stage',
              'Awaits GA4 + CRM cross-DB read',
            ]} />
            <ModuleCard n="05" title="UTM Attribution Engine"    status="building" lines={[
              '6 models side-by-side',
              'First · Last · Linear · Time-decay · Position · Data-driven',
              'CAS-C per cell × channel',
              'Channel ROI ranked',
            ]} />
            <ModuleCard n="06" title="3×3 Cell Performance Grid" status="pending-data" lines={[
              `${LOB_ORDER.length} LOBs × ${REGION_GRID_ORDER.length} regions = 9 cells`,
              'Heatmap: leads · CAS-C · win rate',
              '"Dark cell" alerting',
              'Click to drill into channels',
            ]} />
            <ModuleCard n="07" title="North Star Tracker"        status="building" lines={[
              'F1 CAS-C ≤ $3,200 by Q4 2027',
              'F2 cross-LOB attach ≥ 29%',
              'F3 referral revenue ≥ 22%',
              'Portfolio LTGP:AC ≥ $36K by Q4 2028',
            ]} />
            <ModuleCard n="08" title="Reports &amp; Exports"     status="parked" lines={[
              'Printable PDF reports (white-label)',
              'CSV exports · scheduled digests',
              'Shareable read-only links',
              'Day 6-7 build',
            ]} />
          </div>
        </section>

        {/* HANDOVER PANEL — what we need from Corrina */}
        <section style={`background:${BRAND.cream};border-color:${BRAND.timber}`}
                 class="rounded-lg border-2 p-6 lg:p-8">
          <div class="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase mb-2"
               style={`color:${BRAND.timber}`}>
            <i class="fas fa-handshake"></i>
            <span>Corrina — Day 1 handover panel</span>
          </div>
          <h2 class="font-serif text-2xl mb-4 tracking-tight" style={`color:${BRAND.navy}`}>
            What unblocks the next 6 days
          </h2>
          <p class="text-sm text-[var(--ink-soft)] mb-5 max-w-3xl leading-relaxed">
            Carla has granted you full authority to connect data sources. The tool is designed
            to receive your data the moment it arrives — each module above lights up as its
            data source comes online. Three asks in priority order:
          </p>
          <ol class="space-y-4 text-sm">
            <li class="flex gap-3">
              <span class="font-mono text-xs px-2 py-1 rounded font-bold flex-shrink-0"
                    style={`background:${BRAND.navy};color:#fff`}>1</span>
              <div>
                <div class="font-semibold">UTM convention lock-in (30 min · highest priority)</div>
                <div class="text-[var(--ink-soft)] mt-1">
                  The schema is in the database (
                  <code class="text-xs bg-white px-1 py-0.5 rounded border border-[var(--line)]">utm_convention</code> table ·
                  <code class="text-xs bg-white px-1 py-0.5 rounded border border-[var(--line)]">utm_campaign = LOB-stage-region(-cell)</code>).
                  Test it live: POST any URL to <code class="text-xs">/mbi/api/utm/validate</code> and it returns valid/drift.
                  Once you sign off, YDT can start tagging assets to it immediately.
                </div>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="font-mono text-xs px-2 py-1 rounded font-bold flex-shrink-0"
                    style={`background:${BRAND.navy};color:#fff`}>2</span>
              <div>
                <div class="font-semibold">Data source inventory</div>
                <div class="text-[var(--ink-soft)] mt-1">
                  Which of these does YDT have live, and roughly how much history?
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 mt-2 text-xs">
                  <div>☐ Google Ads</div>
                  <div>☐ Meta Ads</div>
                  <div>☐ LinkedIn Ads</div>
                  <div>☐ GA4</div>
                  <div>☐ Search Console</div>
                  <div>☐ Google Business Profile</div>
                  <div>☐ Email platform</div>
                  <div>☐ Call tracking</div>
                  <div>☐ Heatmaps</div>
                  <div>☐ Social listening</div>
                  <div>☐ CRM (or shared with Gerry/Matt?)</div>
                  <div>☐ Other</div>
                </div>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="font-mono text-xs px-2 py-1 rounded font-bold flex-shrink-0"
                    style={`background:${BRAND.navy};color:#fff`}>3</span>
              <div>
                <div class="font-semibold">Pick a handover method</div>
                <ul class="text-[var(--ink-soft)] mt-1 space-y-1">
                  <li>(a) Grant OAuth account access (I create a service account email · safest)</li>
                  <li>(b) Send API keys via password manager (1Password / Bitwarden secure share)</li>
                  <li>(c) Send CSV exports via secure file share</li>
                  <li>(d) All of the above per source</li>
                  <li>(e) Screen-share session · we set it up together (recommended for first time)</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>

        {/* DOCTRINE DISPLAY — what the tool was BUILT to measure */}
        <section>
          <h2 class="font-serif text-2xl mb-2 tracking-tight" style={`color:${BRAND.navy}`}>
            Locked doctrine — what this tool measures
          </h2>
          <p class="text-sm text-[var(--ink-soft)] mb-5 max-w-3xl">
            These are baked in at the schema level. If Carla's drift rulings change any of them,
            it's a migration · not a config edit.
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div class="border border-[var(--line)] rounded-lg p-5 bg-white">
              <h3 class="font-semibold mb-3">3 LOBs (Y2 paid share)</h3>
              <div class="space-y-2 text-sm">
                {LOB_ORDER.map(code => (
                  <div class="flex items-center justify-between gap-3">
                    <span><strong>{code}</strong> · {LOBS[code].name}</span>
                    <span class="font-mono text-xs text-[var(--ink-soft)]">${(LOBS[code].yr1Paid/1000).toFixed(0)}K · GPM {(LOBS[code].gpm*100).toFixed(0)}%</span>
                  </div>
                ))}
                <div class="flex items-center justify-between gap-3 pt-2 border-t border-[var(--line)] mt-2 font-semibold">
                  <span>Yr-1 paid envelope</span>
                  <span class="font-mono">${(BUDGET.yr1Paid/1000).toFixed(0)}K</span>
                </div>
                <div class="flex items-center justify-between gap-3 text-xs text-[var(--ink-soft)]">
                  <span>+ owned/earned non-paid</span>
                  <span class="font-mono">${(BUDGET.yr1NonPaid/1000).toFixed(0)}K</span>
                </div>
                <div class="flex items-center justify-between gap-3 font-bold pt-2 border-t border-[var(--line)]"
                     style={`color:${BRAND.timber}`}>
                  <span>Yr-1 total</span>
                  <span class="font-mono">${(BUDGET.yr1Total/1000).toFixed(0)}K</span>
                </div>
              </div>
            </div>

            <div class="border border-[var(--line)] rounded-lg p-5 bg-white">
              <h3 class="font-semibold mb-3">7 Stages × 3 Funnels (Bowtie)</h3>
              <div class="space-y-1 text-sm">
                {Object.entries(STAGES).map(([code, s]) => (
                  <div class="flex items-center gap-3 text-xs">
                    <span class="font-mono w-8 font-bold" style={`color:${BRAND.navy}`}>{code}</span>
                    <span class="flex-1">{s.name}</span>
                    <span class="font-mono text-[10px] px-2 py-0.5 rounded"
                          style={`background:${s.funnel==='F1'?BRAND.aqua:s.funnel==='F2'?BRAND.timber:BRAND.navy};color:#fff`}>
                      {s.funnel}
                    </span>
                    <span class="text-[var(--ink-soft)] text-[10px] w-16 text-right">{s.side === 'pre' ? 'pre-purchase' : 'post-purchase'}</span>
                  </div>
                ))}
              </div>
            </div>

            <div class="border border-[var(--line)] rounded-lg p-5 bg-white">
              <h3 class="font-semibold mb-3">4 North Stars (locked targets)</h3>
              <ul class="text-sm space-y-2">
                <li><strong>F1 CAS-C</strong> ≤ $3,200 by Q4 2027</li>
                <li><strong>F2 Cross-LOB attach</strong> ≥ 29% by Q4 2028</li>
                <li><strong>F3 Referral revenue</strong> ≥ 22% by Q4 2028</li>
                <li><strong>Portfolio LTGP:AC</strong> ≥ $36K by Q4 2028</li>
                <li class="text-xs text-[var(--ink-soft)] pt-2 border-t border-[var(--line)] mt-2">
                  + 1,280 cumulative customers by Q4 2028 · share-of-search ≥ 12% by Q4 2027
                </li>
              </ul>
            </div>

            <div class="border border-[var(--line)] rounded-lg p-5 bg-white">
              <h3 class="font-semibold mb-3">UTM convention (LOCKED)</h3>
              <ul class="text-xs space-y-2 font-mono">
                <li><strong class="text-[var(--ink)]">utm_source</strong> = google · meta · linkedin · youtube · email · referral · direct · organic · gbp · aeo · pr</li>
                <li><strong class="text-[var(--ink)]">utm_medium</strong> = paid · cpc · cpm · organic · email · social · referral · qr · partner · direct</li>
                <li><strong class="text-[var(--ink)]">utm_campaign</strong> = LOB-stage-region(-cell)<br/>
                  <span class="text-[var(--ink-soft)] pl-4">e.g. poe-l1-seq-decks · tdr-l3-bne · ur-l2-gc-investor</span></li>
                <li><strong class="text-[var(--ink)]">utm_content</strong> = creative-variant-id (lowercase slug)</li>
                <li><strong class="text-[var(--ink)]">utm_term</strong> = keyword-or-audience (lowercase slug)</li>
              </ul>
            </div>

          </div>
        </section>

        {/* DAY-BY-DAY BUILD PLAN */}
        <section>
          <h2 class="font-serif text-2xl mb-4 tracking-tight" style={`color:${BRAND.navy}`}>7-day build plan</h2>
          <div class="border border-[var(--line)] rounded-lg overflow-hidden bg-white">
            <table class="w-full text-sm">
              <thead class="bg-[var(--paper-warm)] text-[var(--ink-soft)]">
                <tr>
                  <th class="text-left px-4 py-2 font-mono text-[11px] uppercase tracking-wider">Day</th>
                  <th class="text-left px-4 py-2 font-mono text-[11px] uppercase tracking-wider">Deliverable</th>
                  <th class="text-left px-4 py-2 font-mono text-[11px] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D1</td>
                  <td class="px-4 py-3">Scaffold · D1 schema · doctrine seed · UTM validator · this page</td>
                  <td class="px-4 py-3"><StatusPill status="building" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D2</td>
                  <td class="px-4 py-3">Spend Tracker · CSV ingest live</td>
                  <td class="px-4 py-3"><StatusPill status="parked" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D3</td>
                  <td class="px-4 py-3">API integrations · Google Ads + Meta + GA4 OAuth flows</td>
                  <td class="px-4 py-3"><StatusPill status="pending-data" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D4</td>
                  <td class="px-4 py-3">Funnel Waterfall · UTM attribution running on live data</td>
                  <td class="px-4 py-3"><StatusPill status="parked" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D5</td>
                  <td class="px-4 py-3">3×3 Cell Grid · North Star tracker · calibrated to real baselines</td>
                  <td class="px-4 py-3"><StatusPill status="parked" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D6</td>
                  <td class="px-4 py-3">LinkedIn + GSC + email platform + reports/exports</td>
                  <td class="px-4 py-3"><StatusPill status="parked" /></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-4 py-3 font-mono font-bold">D7</td>
                  <td class="px-4 py-3">Anomaly detection · cohort · forecasting · polish</td>
                  <td class="px-4 py-3"><StatusPill status="parked" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FOOTER */}
        <footer class="pt-8 border-t border-[var(--line)] text-xs text-[var(--ink-soft)] flex flex-wrap items-center justify-between gap-4">
          <div>
            <strong>YBMT × CoSai · Marketing Funnel BI</strong> · v0.1 Day 1 scaffold ·
            Branch <code class="font-mono bg-white px-1.5 py-0.5 rounded border border-[var(--line)]">feature/marketing-bi</code>
          </div>
          <div class="font-mono">QBCC 15030821 · ABN 74 076 531 765 · 1300 448 784</div>
        </footer>
      </main>
    </>
  )
}
