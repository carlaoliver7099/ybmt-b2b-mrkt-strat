// 3x3 Build Status Matrix
// Single page that maps the entire engagement: 3 service lines x 3 regions
// across the three streams (Strategy / Assets / Story).
// Built to be the executive scoreboard — what's done, what's partial, what's empty.

import { TopNav } from './nav'

// ---------- Types ----------

type Status = 'done' | 'partial' | 'empty'

type StreamScore = {
  status: Status
  pct: number       // 0-100
  evidence: string  // honest one-liner of what exists
  link?: string     // where to go to see it
}

type Cell = {
  lob: 'termite' | 'pools' | 'units'
  region: 'brisbane' | 'gold-coast' | 'sunshine-coast'
  revenueY2Pct: number   // share of Y2 revenue mix
  strategy: StreamScore
  assets: StreamScore
  story: StreamScore
  nextAction: string
}

// ---------- Score data (honest, audited 2026-06-23) ----------
// Strategy scores reflect what's on GitHub origin/main:
//   - termite-gtm.tsx (4,085 lines, 68 Brisbane / 28 GC / 26 SC mentions)
//   - pools-gtm.tsx   (2,454 lines, 73 Brisbane / 13 GC / 6 SC mentions)
//   - units-gtm.tsx   (2,095 lines, 63 Brisbane / 2 GC / 2 SC mentions)
// Asset scores reflect /marketing-mix folder inventory (22 files).
// Story scores reflect /funnel + /marketing-mix + /value-chain coverage.

const CELLS: Cell[] = [
  // ===== TERMITE ROW (55% of Y2 revenue) =====
  {
    lob: 'termite', region: 'brisbane', revenueY2Pct: 25,
    strategy: { status: 'done', pct: 90, evidence: '4,085-line GTM · 68 Brisbane refs · all 12 pillars covered · pillar/cluster pages mapped', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/termite-gtm.tsx' },
    assets:   { status: 'empty',   pct: 10, evidence: 'Cap statement (Brisbane generic) exists · no termite-specific creative built', link: '/marketing-mix#02-capability-statements' },
    story:    { status: 'partial', pct: 40, evidence: 'In funnel + LP grid · no dedicated termite-Brisbane story page', link: '/funnel' },
    nextAction: 'Build deployable termite-Brisbane asset kit (clone Resort Yards structure) — highest revenue cell',
  },
  {
    lob: 'termite', region: 'gold-coast', revenueY2Pct: 15,
    strategy: { status: 'partial', pct: 55, evidence: '28 Gold Coast refs in termite GTM · regionally tagged but lighter depth', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/termite-gtm.tsx' },
    assets:   { status: 'empty',   pct: 0,  evidence: 'No termite-GC assets · zero deployables', link: '/marketing-mix' },
    story:    { status: 'partial', pct: 30, evidence: 'Appears in LP grid only', link: '/funnel#utm-lp' },
    nextAction: 'After Brisbane kit ships, regional variants (5–7 swap-ins, not a full rebuild)',
  },
  {
    lob: 'termite', region: 'sunshine-coast', revenueY2Pct: 15,
    strategy: { status: 'partial', pct: 55, evidence: '26 Sunshine Coast refs in termite GTM · cap statement exists', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/termite-gtm.tsx' },
    assets:   { status: 'partial', pct: 15, evidence: 'cap-statement-termite-sunshine-coast.pdf exists · nothing else', link: '/marketing-mix/02-capability-statements/cap-statement-termite-sunshine-coast.pdf' },
    story:    { status: 'partial', pct: 30, evidence: 'Appears in LP grid only', link: '/funnel#utm-lp' },
    nextAction: 'Regional variant after Brisbane kit',
  },
  // ===== POOLS ROW (30% of Y2 revenue) =====
  {
    lob: 'pools', region: 'brisbane', revenueY2Pct: 18,
    strategy: { status: 'done', pct: 90, evidence: '2,454-line pools GTM + 338-line gap analysis + Resort Yards rebrand executed · 7 DBAs codified · 4 JTBDs locked', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/pools-gtm.tsx' },
    assets:   { status: 'done', pct: 85, evidence: 'Resort Yards rebuild: DBA-3 seal + 3 archetype heroes (Tropical/Coastal/Mediterranean) + 5 doctrine-compliant pages · zero "Free Quote" violations', link: '/pools' },
    story:    { status: 'done', pct: 90, evidence: `Live hub + 4 JTBD landing pages at /pools · category-defining frame · "Built like it's our own home" closing · Resort Yard Inspection ritual`, link: '/pools' },
    nextAction: 'Add Pool-Brisbane capability statement page · wire lead-magnet downloads · build sonic mnemonic (DBA-6)',
  },
  {
    lob: 'pools', region: 'gold-coast', revenueY2Pct: 7,
    strategy: { status: 'partial', pct: 35, evidence: '13 Gold Coast refs in pools GTM · thin', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/pools-gtm.tsx' },
    assets:   { status: 'empty',   pct: 5,  evidence: 'No GC-tagged assets', link: '/marketing-mix' },
    story:    { status: 'partial', pct: 30, evidence: 'In LP grid', link: '/funnel#utm-lp' },
    nextAction: 'Regional variant after Brisbane Pool kit is locked',
  },
  {
    lob: 'pools', region: 'sunshine-coast', revenueY2Pct: 5,
    strategy: { status: 'partial', pct: 30, evidence: '6 Sunshine Coast refs in pools GTM · thinnest pool cell', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/pools-gtm.tsx' },
    assets:   { status: 'partial', pct: 15, evidence: 'cap-statement-pool-sunshine-coast.pdf exists', link: '/marketing-mix/02-capability-statements/cap-statement-pool-sunshine-coast.pdf' },
    story:    { status: 'partial', pct: 30, evidence: 'In LP grid', link: '/funnel#utm-lp' },
    nextAction: 'Regional variant after Brisbane Pool kit',
  },
  // ===== UNITS ROW (15% of Y2 revenue) =====
  {
    lob: 'units', region: 'brisbane', revenueY2Pct: 11,
    strategy: { status: 'done', pct: 80, evidence: '2,095-line units GTM · 63 Brisbane refs · "Renovations That Settle Quietly" frame · MEDDPICC dual-buyer scorecard', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/units-gtm.tsx' },
    assets:   { status: 'empty', pct: 0, evidence: 'Zero units-specific creative', link: '/marketing-mix' },
    story:    { status: 'partial', pct: 25, evidence: 'In LP grid only', link: '/funnel#utm-lp' },
    nextAction: 'Lowest priority by revenue · build last',
  },
  {
    lob: 'units', region: 'gold-coast', revenueY2Pct: 2,
    strategy: { status: 'empty', pct: 15, evidence: 'Only 2 Gold Coast refs in units GTM · regional thinking not yet done', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/units-gtm.tsx' },
    assets:   { status: 'empty', pct: 0,  evidence: 'Nothing', link: '/marketing-mix' },
    story:    { status: 'partial', pct: 25, evidence: 'In LP grid only', link: '/funnel#utm-lp' },
    nextAction: 'Defer · low revenue contribution · revisit FY28',
  },
  {
    lob: 'units', region: 'sunshine-coast', revenueY2Pct: 2,
    strategy: { status: 'empty', pct: 15, evidence: 'Only 2 Sunshine Coast refs in units GTM', link: 'https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat/blob/main/src/units-gtm.tsx' },
    assets:   { status: 'empty', pct: 0,  evidence: 'Nothing', link: '/marketing-mix' },
    story:    { status: 'partial', pct: 25, evidence: 'In LP grid only', link: '/funnel#utm-lp' },
    nextAction: 'Defer · low revenue contribution · revisit FY28',
  },
]

// ---------- Helpers ----------

const lobMeta = {
  termite:  { label: 'Termite Damage Repair', short: 'Termite', icon: 'fa-shield-halved', accent: '#b8421a', rowShare: 55 },
  pools:    { label: 'Resort Yards',          short: 'Resort Yards', icon: 'fa-water',        accent: '#1d6f8a', rowShare: 30 },
  units:    { label: 'Unit Renovations',      short: 'Units',     icon: 'fa-building',     accent: '#5b7a3a', rowShare: 15 },
} as const

const regionMeta = {
  'brisbane':       { label: 'Brisbane',       icon: 'fa-city' },
  'gold-coast':     { label: 'Gold Coast',     icon: 'fa-umbrella-beach' },
  'sunshine-coast': { label: 'Sunshine Coast', icon: 'fa-sun' },
} as const

const statusMeta = {
  done:    { label: 'Done',    colour: '#1f7a3a', bg: '#e8f3eb', dot: 'bg-green-500',  ring: 'ring-green-200',  icon: 'fa-circle-check' },
  partial: { label: 'Partial', colour: '#b8851a', bg: '#fbf2dc', dot: 'bg-amber-500',  ring: 'ring-amber-200',  icon: 'fa-circle-half-stroke' },
  empty:   { label: 'Empty',   colour: '#7a3a3a', bg: '#f3e8e8', dot: 'bg-stone-300',  ring: 'ring-stone-200',  icon: 'fa-circle-dot' },
} as const

// Aggregate score = simple mean across the 3 streams, weighted by revenue
const cellScore = (c: Cell) => Math.round((c.strategy.pct + c.assets.pct + c.story.pct) / 3)

const totalRevenueWeightedScore = () => {
  const totalPct = CELLS.reduce((acc, c) => acc + (cellScore(c) * c.revenueY2Pct), 0)
  const totalWeight = CELLS.reduce((acc, c) => acc + c.revenueY2Pct, 0)
  return Math.round(totalPct / totalWeight)
}

// ---------- Visual sub-components ----------

const StatusPill = ({ status }: { status: Status }) => {
  const m = statusMeta[status]
  return (
    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
          style={`background:${m.bg};color:${m.colour}`}>
      <i class={`fas ${m.icon} text-[9px]`}></i>
      {m.label}
    </span>
  )
}

const StreamBar = ({ label, score, icon }: { label: string; score: StreamScore; icon: string }) => {
  const m = statusMeta[score.status]
  return (
    <div class="mb-2.5">
      <div class="flex items-center justify-between text-[11px] mb-1">
        <span class="text-[var(--ink-soft)] font-medium">
          <i class={`fas ${icon} mr-1 text-[10px]`} style={`color:${m.colour}`}></i>
          {label}
        </span>
        <span class="font-mono font-semibold" style={`color:${m.colour}`}>{score.pct}%</span>
      </div>
      <div class="h-1.5 rounded-full bg-stone-100 overflow-hidden">
        <div class="h-full rounded-full transition-all" style={`width:${score.pct}%;background:${m.colour}`}></div>
      </div>
      <p class="text-[10px] text-[var(--ink-fade)] mt-1 leading-snug">{score.evidence}</p>
      {score.link && (
        <a href={score.link} target={score.link.startsWith('http') ? '_blank' : undefined}
           class="text-[10px] text-[var(--ybmt-navy)] hover:text-[var(--ybmt-orange)] font-semibold inline-flex items-center gap-1 mt-1">
          <i class="fas fa-arrow-up-right-from-square text-[8px]"></i>
          View source
        </a>
      )}
    </div>
  )
}

const CellCard = ({ cell }: { cell: Cell }) => {
  const lob = lobMeta[cell.lob]
  const region = regionMeta[cell.region]
  const score = cellScore(cell)
  const overall: Status = score >= 70 ? 'done' : score >= 35 ? 'partial' : 'empty'
  const m = statusMeta[overall]

  return (
    <div class={`bg-white border-2 rounded-lg p-4 hover:shadow-md transition-all flex flex-col`}
         style={`border-color:${m.colour}33`}>

      {/* Header */}
      <div class="flex items-start justify-between mb-3 pb-3 border-b border-stone-100">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <i class={`fas ${region.icon} text-[11px] text-[var(--ink-fade)]`}></i>
            <span class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">{region.label}</span>
          </div>
          <h3 class="display text-base font-bold text-[var(--ybmt-navy)] leading-tight">{lob.label}</h3>
        </div>
        <div class="text-right">
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)]">Y2 rev</div>
          <div class="metric-num font-bold text-[var(--ybmt-navy)]" style={`color:${lob.accent}`}>{cell.revenueY2Pct}%</div>
        </div>
      </div>

      {/* Overall score */}
      <div class="flex items-center justify-between mb-3">
        <StatusPill status={overall} />
        <div class="metric-num text-2xl font-bold" style={`color:${m.colour}`}>{score}<span class="text-sm text-[var(--ink-fade)]">/100</span></div>
      </div>

      {/* Three streams */}
      <StreamBar label="Strategy" score={cell.strategy} icon="fa-brain" />
      <StreamBar label="Assets"   score={cell.assets}   icon="fa-box-archive" />
      <StreamBar label="Story"    score={cell.story}    icon="fa-bullhorn" />

      {/* Next action */}
      <div class="mt-auto pt-3 border-t border-stone-100">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">
          <i class="fas fa-arrow-right mr-1"></i> Next action
        </div>
        <p class="text-[11px] text-[var(--ink)] leading-snug">{cell.nextAction}</p>
      </div>
    </div>
  )
}

const LegendBlock = () => (
  <div class="flex flex-wrap items-center gap-4 text-xs">
    <div class="flex items-center gap-2">
      <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
      <span class="text-[var(--ink-soft)]"><strong class="text-[var(--ink)]">Done</strong> · 70%+</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="inline-block w-3 h-3 rounded-full bg-amber-500"></span>
      <span class="text-[var(--ink-soft)]"><strong class="text-[var(--ink)]">Partial</strong> · 35–69%</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="inline-block w-3 h-3 rounded-full bg-stone-300"></span>
      <span class="text-[var(--ink-soft)]"><strong class="text-[var(--ink)]">Empty</strong> · &lt;35%</span>
    </div>
  </div>
)

// ---------- Page ----------

export const MatrixPage = () => {
  const overallScore = totalRevenueWeightedScore()
  const cellsByLob = (lob: Cell['lob']) => CELLS.filter(c => c.lob === lob)

  // Stream totals (revenue-weighted)
  const streamTotal = (key: 'strategy' | 'assets' | 'story') => {
    const totalPct = CELLS.reduce((acc, c) => acc + (c[key].pct * c.revenueY2Pct), 0)
    const totalWeight = CELLS.reduce((acc, c) => acc + c.revenueY2Pct, 0)
    return Math.round(totalPct / totalWeight)
  }

  const streamA = streamTotal('strategy')
  const streamB = streamTotal('assets')
  const streamC = streamTotal('story')

  return (
    <div class="min-h-screen">
      <TopNav active="matrix" />

      {/* HERO */}
      <header class="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-8">
        <div class="flex items-center gap-2 mb-6">
          <span class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
            <span class="dot bg-[var(--ybmt-orange)]"></span> Engagement Scoreboard · v1.0
          </span>
          <span class="chip bg-[var(--ybmt-navy)]/10 text-[var(--ybmt-navy)]">
            <i class="fas fa-calendar text-[10px]"></i> Audited 2026-06-23
          </span>
        </div>

        <h1 class="display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ybmt-navy)] leading-[1.05] mb-6">
          The 3 × 3 Build Status Matrix
        </h1>

        <p class="text-lg text-[var(--ink-soft)] leading-relaxed max-w-3xl mb-8">
          The single page that answers <em>"where are we?"</em> Nine cells — three service lines × three regions —
          scored honestly across the three streams of work:
          <strong class="text-[var(--ink)]"> Strategy</strong> (the Top-4 thinking on GitHub),
          <strong class="text-[var(--ink)]"> Assets</strong> (the deployable marketing kit), and
          <strong class="text-[var(--ink)]"> Story</strong> (this intranet's presentation layer).
        </p>

        <LegendBlock />
      </header>

      {/* THE BIG NUMBER — Overall engagement completion */}
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-[var(--ybmt-navy)] text-white rounded-lg p-6">
            <div class="text-[10px] uppercase tracking-wider text-white/70 font-semibold mb-2">Overall engagement</div>
            <div class="metric-num display text-5xl font-bold mb-1">{overallScore}<span class="text-2xl text-white/60">/100</span></div>
            <div class="text-xs text-white/80">Revenue-weighted completion across all 9 cells × 3 streams</div>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-lg p-6">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">
              <i class="fas fa-brain text-[10px] mr-1"></i> Stream A · Strategy
            </div>
            <div class="metric-num display text-4xl font-bold text-[var(--ybmt-navy)] mb-1">{streamA}<span class="text-xl text-[var(--ink-fade)]">/100</span></div>
            <div class="text-xs text-[var(--ink-soft)]">Top-4 thinking on GitHub · ~22,000 lines across 24 files</div>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-lg p-6">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">
              <i class="fas fa-box-archive text-[10px] mr-1"></i> Stream B · Assets
            </div>
            <div class="metric-num display text-4xl font-bold text-[var(--ybmt-navy)] mb-1">{streamB}<span class="text-xl text-[var(--ink-fade)]">/100</span></div>
            <div class="text-xs text-[var(--ink-soft)]">Deployable marketing kit · 22 artefacts · Resort Yards prototype</div>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-lg p-6">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">
              <i class="fas fa-bullhorn text-[10px] mr-1"></i> Stream C · Story
            </div>
            <div class="metric-num display text-4xl font-bold text-[var(--ybmt-navy)] mb-1">{streamC}<span class="text-xl text-[var(--ink-fade)]">/100</span></div>
            <div class="text-xs text-[var(--ink-soft)]">This intranet · Charter / Funnel / Mix / Value Chain</div>
          </div>
        </div>
      </section>

      {/* PLAIN-ENGLISH READ */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16">
        <div class="callout p-6 rounded-lg">
          <div class="flex items-start gap-4">
            <i class="fas fa-lightbulb text-2xl text-[var(--ybmt-orange)] mt-1"></i>
            <div>
              <h2 class="display text-xl font-bold text-[var(--ybmt-navy)] mb-3">What this picture says — in one paragraph</h2>
              <p class="text-[var(--ink)] leading-relaxed mb-3">
                We have <strong>deep Top-4-tier strategy</strong> covering all three service lines (especially Termite at 4,085 lines), but it's
                <strong> Brisbane-heavy</strong> and the regional variants for Gold Coast and Sunshine Coast are 25–35% complete.
                We have <strong>one fully built deployable kit</strong> (Resort Yards · 22 assets, region-agnostic but Brisbane-fittable) which is the
                <em> prototype that proves the strategy is real</em>. The other 8 of 9 cells need their own kits — but most are
                <strong>variants of the Resort Yards template</strong>, not full rebuilds from zero.
              </p>
              <p class="text-[var(--ink)] leading-relaxed">
                The honest read: <strong>we're not behind</strong>. We're 1.5 of 9 cells into the build — exactly where a real engagement
                sits at this stage. The next decision isn't <em>"build more theory"</em> — it's <em>"which cell do we make deployable next,
                and in what order?"</em> The answer below is dictated by revenue, not effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATRIX — 3 rows by LOB */}
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)] mb-2">The nine cells</h2>
        <p class="text-[var(--ink-soft)] mb-8">Rows sorted by revenue contribution. Each cell scored 0–100 across Strategy · Assets · Story.</p>

        {(['termite', 'pools', 'units'] as const).map(lob => {
          const meta = lobMeta[lob]
          const row = cellsByLob(lob)
          return (
            <div class="mb-10">
              <div class="flex items-center gap-3 mb-4 pb-3 border-b-2" style={`border-color:${meta.accent}33`}>
                <div class="w-10 h-10 rounded-md flex items-center justify-center text-white"
                     style={`background:${meta.accent}`}>
                  <i class={`fas ${meta.icon}`}></i>
                </div>
                <div class="flex-1">
                  <h3 class="display text-2xl font-bold text-[var(--ybmt-navy)] leading-none">{meta.label}</h3>
                  <div class="text-xs text-[var(--ink-soft)] mt-1">
                    <span class="font-semibold" style={`color:${meta.accent}`}>{meta.rowShare}% of Y2 revenue mix</span>
                    {' · '}
                    {row.reduce((a, c) => a + c.revenueY2Pct, 0)}% combined across regions
                  </div>
                </div>
              </div>

              <div class="grid lg:grid-cols-3 gap-4">
                {row.map(c => <CellCard cell={c} />)}
              </div>
            </div>
          )
        })}
      </section>

      {/* SEQUENCING — what to build next */}
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <div class="bg-white border border-[var(--line)] rounded-lg p-8">
          <div class="flex items-center gap-3 mb-6">
            <i class="fas fa-route text-2xl text-[var(--ybmt-orange)]"></i>
            <div>
              <h2 class="display text-2xl font-bold text-[var(--ybmt-navy)]">The replication sequence</h2>
              <p class="text-sm text-[var(--ink-soft)]">Revenue-weighted order to fill the empty cells. Horizontal Hybrid — per the locked Sequencing Decision v1.</p>
            </div>
          </div>

          <ol class="space-y-4">
            <li class="flex gap-4 pb-4 border-b border-stone-100">
              <div class="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div>
                <div class="font-semibold text-[var(--ink)]">Lock the Resort Yards · Brisbane prototype</div>
                <p class="text-sm text-[var(--ink-soft)] mt-1">Close the gaps from POOLS-GAP-ANALYSIS-v1 (6.4/10 → 9/10). Tag the 22-asset kit explicitly as <em>Pool-Brisbane</em>. This becomes the template.</p>
                <div class="text-[11px] text-[var(--ink-fade)] mt-2"><i class="fas fa-clock mr-1"></i> ~2 weeks · ~7% of remaining work</div>
              </div>
            </li>
            <li class="flex gap-4 pb-4 border-b border-stone-100">
              <div class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div>
                <div class="font-semibold text-[var(--ink)]">Build Termite · Brisbane deployable kit</div>
                <p class="text-sm text-[var(--ink-soft)] mt-1">Highest revenue contribution (25% of Y2). Clone the Resort Yards structure — 10 sections, 22 artefacts — swap the photography, copy, and case studies. Strategy is already 90% complete.</p>
                <div class="text-[11px] text-[var(--ink-fade)] mt-2"><i class="fas fa-clock mr-1"></i> ~3–4 weeks · ~25% of remaining work</div>
              </div>
            </li>
            <li class="flex gap-4 pb-4 border-b border-stone-100">
              <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div>
                <div class="font-semibold text-[var(--ink)]">Regional variants: Pool-GC, Pool-SC, Termite-GC, Termite-SC</div>
                <p class="text-sm text-[var(--ink-soft)] mt-1">Not full rebuilds — swap-ins. Per region: capability statement (already partial), LP variant, Meta ad geo-targeting, 1 case study, regional testimonials. ~5–7 swap points per cell.</p>
                <div class="text-[11px] text-[var(--ink-fade)] mt-2"><i class="fas fa-clock mr-1"></i> ~3 weeks total for all 4 variants · ~20% of remaining work</div>
              </div>
            </li>
            <li class="flex gap-4 pb-4 border-b border-stone-100">
              <div class="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
              <div>
                <div class="font-semibold text-[var(--ink)]">Units · Brisbane deployable kit</div>
                <p class="text-sm text-[var(--ink-soft)] mt-1">11% of Y2 revenue. Strategy is solid (2,095 lines · MEDDPICC scorecard · dual-buyer frame). Build creative kit using template.</p>
                <div class="text-[11px] text-[var(--ink-fade)] mt-2"><i class="fas fa-clock mr-1"></i> ~3 weeks · ~15% of remaining work</div>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-stone-50 text-stone-500 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
              <div>
                <div class="font-semibold text-[var(--ink-soft)]">Defer: Units · GC and Units · SC</div>
                <p class="text-sm text-[var(--ink-soft)] mt-1">Combined 4% of Y2 revenue. Revisit in FY28 once Termite and Pools cells are operating. <em>The right answer is sometimes "not yet."</em></p>
                <div class="text-[11px] text-[var(--ink-fade)] mt-2"><i class="fas fa-clock mr-1"></i> FY28+ · cost of building now &gt; revenue gained</div>
              </div>
            </li>
          </ol>

          <div class="mt-6 pt-6 border-t border-stone-100 grid md:grid-cols-3 gap-4">
            <div class="bg-stone-50 rounded p-4">
              <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Total remaining</div>
              <div class="metric-num text-xl font-bold text-[var(--ybmt-navy)] mt-1">~11–13 weeks</div>
              <div class="text-[11px] text-[var(--ink-soft)] mt-1">to reach 80/100 engagement-wide</div>
            </div>
            <div class="bg-stone-50 rounded p-4">
              <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Revenue unlocked</div>
              <div class="metric-num text-xl font-bold text-[var(--ybmt-navy)] mt-1">96%</div>
              <div class="text-[11px] text-[var(--ink-soft)] mt-1">of Y2 mix (steps 1–4 cover 96% of $7M)</div>
            </div>
            <div class="bg-stone-50 rounded p-4">
              <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Quote velocity target</div>
              <div class="metric-num text-xl font-bold text-[var(--ybmt-orange)] mt-1">$200K/wk</div>
              <div class="text-[11px] text-[var(--ink-soft)] mt-1">achieved when steps 1–3 are operational</div>
            </div>
          </div>
        </div>
      </section>

      {/* STREAM EXPLAINER */}
      <section class="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <h2 class="display text-2xl font-bold text-[var(--ybmt-navy)] mb-2">What each stream is — and where it lives</h2>
        <p class="text-[var(--ink-soft)] mb-6">Three streams, three altitudes. None is more important than the others — they stack.</p>

        <div class="grid md:grid-cols-3 gap-4">
          {/* Stream A */}
          <div class="bg-white border-l-4 border-[var(--ybmt-navy)] rounded-lg p-6">
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-brain text-[var(--ybmt-navy)]"></i>
              <h3 class="display text-lg font-bold text-[var(--ybmt-navy)]">Stream A · Strategy</h3>
            </div>
            <p class="text-sm text-[var(--ink-soft)] mb-3 leading-relaxed">
              The Top-4 consulting brain. The <em>why</em> and the <em>how it should work</em>. Lives on GitHub <code class="text-xs bg-stone-100 px-1 rounded">main</code> branch.
            </p>
            <ul class="text-xs text-[var(--ink-soft)] space-y-1 mb-4">
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> 24 .tsx/.md files, ~22,000 lines</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> 12-pillar CMO Delivery Method (locked v1)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> GEO/AEO operating manual (1,610 lines)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Per-LOB GTM papers (Termite 4,085 · Pools 2,454 · Units 2,095)</li>
            </ul>
            <a href="https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat" target="_blank"
               class="text-xs text-[var(--ybmt-navy)] font-semibold hover:text-[var(--ybmt-orange)] inline-flex items-center gap-1">
              <i class="fab fa-github"></i> GitHub repo →
            </a>
          </div>

          {/* Stream B */}
          <div class="bg-white border-l-4 border-[var(--ybmt-orange)] rounded-lg p-6">
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-box-archive text-[var(--ybmt-orange)]"></i>
              <h3 class="display text-lg font-bold text-[var(--ybmt-navy)]">Stream B · Assets</h3>
            </div>
            <p class="text-sm text-[var(--ink-soft)] mb-3 leading-relaxed">
              The Tuesday-morning deployable kit. The <em>what gets sent and shown</em>. Lives in <code class="text-xs bg-stone-100 px-1 rounded">/marketing-mix</code>.
            </p>
            <ul class="text-xs text-[var(--ink-soft)] space-y-1 mb-4">
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> 22 finished artefacts (Resort Yards prototype)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> 6 hero photos + logo</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Buyer guide, landing page, 5 emails, 10 ads, 2 videos</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> 3 capability statements (Brisbane, Pool-SC, Termite-SC)</li>
            </ul>
            <a href="/marketing-mix" class="text-xs text-[var(--ybmt-navy)] font-semibold hover:text-[var(--ybmt-orange)] inline-flex items-center gap-1">
              <i class="fas fa-folder-open"></i> Open the Mix →
            </a>
          </div>

          {/* Stream C */}
          <div class="bg-white border-l-4 border-[var(--paper-warm-2,#c08e3c)] rounded-lg p-6" style="border-left-color:#c08e3c">
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-bullhorn" style="color:#c08e3c"></i>
              <h3 class="display text-lg font-bold text-[var(--ybmt-navy)]">Stream C · Story</h3>
            </div>
            <p class="text-sm text-[var(--ink-soft)] mb-3 leading-relaxed">
              The presentation layer. <em>How Carla shows it to the JV partners and the team.</em> Lives on this intranet.
            </p>
            <ul class="text-xs text-[var(--ink-soft)] space-y-1 mb-4">
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Charter (the 3×3 economics)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Marketing Funnel (with LP/UTM architecture)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Marketing Mix (the 22 deployables)</li>
              <li><i class="fas fa-check text-green-600 mr-1.5"></i> Value Chain (where it all hangs together)</li>
            </ul>
            <a href="/" class="text-xs text-[var(--ybmt-navy)] font-semibold hover:text-[var(--ybmt-orange)] inline-flex items-center gap-1">
              <i class="fas fa-house"></i> Charter →
            </a>
          </div>
        </div>
      </section>

      {/* HONESTY NOTE */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16">
        <div class="bg-stone-50 border border-[var(--line)] rounded-lg p-6">
          <h3 class="display text-lg font-bold text-[var(--ybmt-navy)] mb-3">
            <i class="fas fa-eye text-[var(--ybmt-orange)] mr-2"></i>
            How these scores were calculated
          </h3>
          <p class="text-sm text-[var(--ink-soft)] mb-3 leading-relaxed">
            Strategy scores reflect actual line counts and region-mention frequency in the GitHub <code class="text-xs bg-stone-100 px-1 rounded">main</code> branch
            (audited 2026-06-23). Specifically: Termite 4,085 lines (Brisbane 68 refs / GC 28 / SC 26),
            Pools 2,454 lines (Brisbane 73 / GC 13 / SC 6), Units 2,095 lines (Brisbane 63 / GC 2 / SC 2).
            Asset scores reflect the 22-file inventory in <code class="text-xs bg-stone-100 px-1 rounded">/marketing-mix</code>.
            Story scores reflect what's actually built on this intranet.
          </p>
          <p class="text-sm text-[var(--ink-soft)] leading-relaxed">
            Overall engagement score is <strong>revenue-weighted</strong> — a Brisbane cell counts more than a Sunshine Coast cell
            because the Y2 revenue mix says it should. This is not optimism; it's the same maths you'd use to triage a portfolio.
          </p>
          <div class="mt-4 text-[11px] text-[var(--ink-fade)] italic">
            Sources audited: GitHub <a href="https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat" target="_blank" class="underline">carlaoliver7099/ybmt-b2b-mrkt-strat</a> · main branch · 24 source files · /marketing-mix folder · 22 artefacts.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer class="border-t border-[var(--line)] py-8 mt-8">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 text-xs text-[var(--ink-fade)] flex flex-wrap items-center justify-between gap-4">
          <div>YBMT × CoSai Construction JV · 3 × 3 Build Status Matrix v1.0 · Audited 2026-06-23</div>
          <div class="flex items-center gap-4">
            <a href="/" class="hover:text-[var(--ybmt-orange)]">Charter</a>
            <a href="/funnel" class="hover:text-[var(--ybmt-orange)]">Funnel</a>
            <a href="/marketing-mix" class="hover:text-[var(--ybmt-orange)]">Mix</a>
            <a href="/value-chain" class="hover:text-[var(--ybmt-orange)]">Value Chain</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
