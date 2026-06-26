import { Hono } from 'hono'
import { renderer } from './renderer'
import { TopNav } from './nav'
import { ValueChainPage } from './value-chain'
import { FunnelPage } from './funnel'
import { MarketingMixPage } from './marketing-mix'
import { MatrixPage } from './matrix'
import {
  ResortYardsHubPage,
  FastTrackHostPage,
  PoolCompletionPage,
  DeckReplacementPage,
  PreSaleInvestorPage,
  CapabilityStatementBrisbanePage,
} from './resort-yards'
import {
  TermiteHubPage,
  TermitePrePurchasePage,
  TermitePreSalePage,
  TermiteActiveDiscoveryPage,
  TermiteAnnualStewardshipPage,
} from './termite-brisbane'

const app = new Hono()

app.use(renderer)

app.get('/value-chain', (c) => c.render(<ValueChainPage />))
app.get('/funnel', (c) => c.render(<FunnelPage />))
app.get('/marketing-mix', (c) => c.render(<MarketingMixPage />))
app.get('/matrix', (c) => c.render(<MatrixPage />))

// Resort Yards (Pool LOB) prototype — built 100% to locked strategy spec
app.get('/pools', (c) => c.render(<ResortYardsHubPage />))
app.get('/pools/fast-track-host', (c) => c.render(<FastTrackHostPage />))
app.get('/pools/pool-completion', (c) => c.render(<PoolCompletionPage />))
app.get('/pools/deck-replacement', (c) => c.render(<DeckReplacementPage />))
app.get('/pools/pre-sale-investor', (c) => c.render(<PreSaleInvestorPage />))
app.get('/pools/capability-statement-brisbane', (c) => c.render(<CapabilityStatementBrisbanePage />))

// Termite Damage Repair (highest-revenue LOB · 55% of Y2 sales mix · 45% GPM)
// Built 100% to locked GitHub strategy (termite-gtm.tsx 4,085 lines + ymt-jtbd.tsx)
app.get('/termite', (c) => c.render(<TermiteHubPage />))
app.get('/termite/pre-purchase', (c) => c.render(<TermitePrePurchasePage />))
app.get('/termite/pre-sale', (c) => c.render(<TermitePreSalePage />))
app.get('/termite/active-discovery', (c) => c.render(<TermiteActiveDiscoveryPage />))
app.get('/termite/annual-stewardship', (c) => c.render(<TermiteAnnualStewardshipPage />))

app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen">
      {/* ============== TOP NAV ============== */}
      <TopNav active="home" />
      <nav class="sticky top-14 z-40 bg-[#fbfaf8]/85 backdrop-blur-md border-b border-[var(--line)] no-print">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-10 h-11 flex items-center justify-end">
          <div class="hidden md:flex items-center gap-1 text-xs text-[var(--ink-soft)]">
            <a href="#overview" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">Overview</a>
            <a href="#financials" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">Financials</a>
            <a href="#grid" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">3×3 Grid</a>
            <a href="#salesmix" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">Sales Mix</a>
            <a href="#unit-econ" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">Unit Economics</a>
            <a href="#kpis" class="px-3 py-1.5 rounded hover:bg-[var(--paper-warm)]">KPIs</a>
          </div>
        </div>
      </nav>

      {/* ============== HERO ============== */}
      <header id="overview" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div class="flex items-center gap-2 mb-6">
          <span class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
            <span class="dot bg-[var(--ybmt-orange)]"></span> FY27 – FY29 · 3-Year Fixed-Term
          </span>
          <span class="chip bg-[var(--ybmt-navy)]/10 text-[var(--ybmt-navy)]">
            <i class="fas fa-lock text-[10px]"></i> Locked Charter
          </span>
        </div>

        <h1 class="display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--ybmt-navy)] leading-[1.05] mb-6">
          One business.<br />
          Three services.<br />
          Three regions.<br />
          <span class="text-[var(--ybmt-orange)]">Three years to $10M.</span>
        </h1>

        <p class="text-xl text-[var(--ink-soft)] leading-relaxed max-w-3xl">
          The YBMT × CoSai Construction Joint Venture is a 3-year strategic build that
          takes <span class="font-semibold text-[var(--ink)]">Your Building & Maintenance Team</span> from
          $5M to $10M in revenue across South-East Queensland — operating as one master brand,
          three endorsed service lines, three regional markets.
        </p>

        <div class="mt-10 grid grid-cols-3 gap-4 max-w-2xl">
          <div class="border border-[var(--line)] rounded-lg p-4 bg-white">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Year 1 (FY27)</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">$5M</div>
          </div>
          <div class="border border-[var(--line)] rounded-lg p-4 bg-white">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Year 2 (FY28)</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">$7M</div>
          </div>
          <div class="border-2 border-[var(--ybmt-orange)] rounded-lg p-4 bg-white shadow-sm">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ybmt-orange)] font-semibold">Year 3 (FY29)</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">$10M</div>
          </div>
        </div>
      </header>

      {/* ============== NEW: 3x3 MATRIX BANNER ============== */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-10">
        <a href="/matrix" class="block group">
          <div class="bg-gradient-to-br from-[var(--ybmt-navy)] to-[#0d2236] text-white rounded-xl p-6 hover:shadow-lg transition-all">
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-table-cells-large text-3xl text-[var(--ybmt-orange)]"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="chip bg-[var(--ybmt-orange)]/20 text-[var(--ybmt-orange)] text-[10px]">NEW · v1.0</span>
                  <span class="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Engagement scoreboard</span>
                </div>
                <h2 class="display text-2xl font-bold leading-tight mb-1">Where are we, exactly?</h2>
                <p class="text-sm text-white/80">
                  The 3 × 3 Build Status Matrix — nine cells, three streams (Strategy · Assets · Story), scored honestly.
                  Answers <em>"what's done, what's partial, what's empty, and what do we build next?"</em>
                </p>
              </div>
              <div class="hidden md:flex items-center text-white/60 group-hover:text-[var(--ybmt-orange)] transition-colors">
                <i class="fas fa-arrow-right text-xl"></i>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ============== CALLOUT: WHAT THIS IS ============== */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16">
        <div class="callout p-6 rounded-lg">
          <div class="flex items-start gap-4">
            <i class="fas fa-quote-left text-2xl text-[var(--ybmt-orange)] mt-1"></i>
            <div>
              <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Plain English</div>
              <p class="text-lg leading-relaxed text-[var(--ink)]">
                Think of this like <strong>Uber Eats</strong>. One trusted master brand —
                <strong> YBMT</strong> — with three clearly-labelled "doors" customers can walk through:
                <strong> Decks</strong>, <strong>Renovations</strong>, and <strong>Termite Repairs</strong>.
                We open those three doors in <strong>three regions</strong> — Brisbane, Gold Coast,
                Sunshine Coast — and we have <strong>three fixed years</strong> to turn the structure
                into a $10M business with $1M net profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FINANCIAL STRATEGY (Diagram A) ============== */}
      <section id="financials" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="flex items-baseline justify-between mb-2">
          <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
            <span class="text-[var(--ybmt-orange)] mr-3">A.</span>The Financial Strategy
          </h2>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Diagram A</span>
        </div>
        <p class="text-[var(--ink-soft)] mb-10">The three-year financial path Sinbau (CoSai's JV partner) is funding against.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Year 1 */}
          <div class="year-card bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <span class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)]">Year 1 · FY27</span>
              <span class="text-[var(--ink-fade)] text-xs">Foundation</span>
            </div>
            <div class="metric-num display text-5xl font-bold text-[var(--ybmt-navy)]">$5M</div>
            <div class="text-sm text-[var(--ink-soft)] mt-1">Revenue target</div>

            <div class="mt-5 pt-5 border-t border-[var(--line)] space-y-2">
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Gross Profit Margin</span><span class="font-semibold metric-num">34%</span></div>
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Net Profit</span><span class="font-semibold metric-num text-[var(--emerald)]">$500K</span></div>
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Net Profit Margin</span><span class="font-semibold metric-num">10%</span></div>
            </div>
          </div>

          {/* Year 2 */}
          <div class="year-card bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <span class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)]">Year 2 · FY28</span>
              <span class="text-[var(--ink-fade)] text-xs">Scale</span>
            </div>
            <div class="metric-num display text-5xl font-bold text-[var(--ybmt-navy)]">$7M</div>
            <div class="text-sm text-[var(--ink-soft)] mt-1">Revenue target</div>

            <div class="mt-5 pt-5 border-t border-[var(--line)] space-y-2">
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Gross Profit Margin</span><span class="font-semibold metric-num">34%</span></div>
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Net Profit</span><span class="font-semibold metric-num text-[var(--emerald)]">$700K</span></div>
              <div class="flex justify-between text-sm"><span class="text-[var(--ink-soft)]">Net Profit Margin</span><span class="font-semibold metric-num">10%</span></div>
            </div>
          </div>

          {/* Year 3 */}
          <div class="year-card bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[var(--ybmt-orange)]/20"></div>
            <div class="flex items-center justify-between mb-4 relative">
              <span class="chip bg-[var(--ybmt-orange)] text-white">Year 3 · FY29</span>
              <span class="text-white/60 text-xs">Milestone</span>
            </div>
            <div class="metric-num display text-5xl font-bold relative">$10M</div>
            <div class="text-sm text-white/70 mt-1">Revenue target</div>

            <div class="mt-5 pt-5 border-t border-white/15 space-y-2 relative">
              <div class="flex justify-between text-sm"><span class="text-white/70">Gross Profit Margin</span><span class="font-semibold metric-num">34%</span></div>
              <div class="flex justify-between text-sm"><span class="text-white/70">Net Profit</span><span class="font-semibold metric-num text-[var(--ybmt-orange-soft)]">$1.0M</span></div>
              <div class="flex justify-between text-sm"><span class="text-white/70">Net Profit Margin</span><span class="font-semibold metric-num">10%</span></div>
            </div>
          </div>
        </div>

        {/* Bracket / explainer */}
        <div class="mt-8 grid md:grid-cols-3 gap-6 items-start">
          <div class="md:col-span-2 flex items-start gap-4 p-5 bg-[var(--paper-warm)] rounded-lg border border-[var(--line)]">
            <i class="fas fa-link text-[var(--ybmt-navy)] mt-1"></i>
            <div>
              <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">What links the three years</div>
              <p class="text-sm text-[var(--ink)] leading-relaxed">
                The numbers above are not three independent goals. They are <strong>one compounding system</strong>:
                build the foundation in Year 1, scale on it in Year 2, mature it in Year 3. The 34% gross margin
                stays constant — we grow by selling more jobs, not by squeezing supplier costs.
              </p>
            </div>
          </div>
          <div class="p-5 rounded-lg border-2 border-dashed border-[var(--ybmt-orange)] bg-white">
            <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange)] font-semibold mb-2">Personal milestone</div>
            <div class="metric-num display text-3xl font-bold text-[var(--ybmt-navy)]">$250K × 3</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">Carla's milestone payout per year, contingent on hitting each year's NP target. Total: $750K over the JV term.</p>
          </div>
        </div>
      </section>

      {/* ============== 3 x 3 GRID ============== */}
      <section id="grid" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="flex items-baseline justify-between mb-2">
          <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
            <span class="text-[var(--ybmt-orange)] mr-3">B.</span>The 3 × 3 Grid
          </h2>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Operating Surface</span>
        </div>
        <p class="text-[var(--ink-soft)] mb-10">
          Nine cells. Every dollar of revenue traces back to exactly one of these. Every marketing
          asset, every job, every team member sits inside one or more of these nine boxes.
        </p>

        {/* Grid */}
        <div class="bg-white rounded-2xl border border-[var(--line)] p-6 shadow-sm overflow-x-auto">
          <table class="w-full min-w-[680px]">
            <thead>
              <tr>
                <th class="text-left p-3 text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold w-1/4">Service Line ↓ &nbsp; / &nbsp; Region →</th>
                <th class="p-3">
                  <div class="flex flex-col items-center">
                    <i class="fas fa-city text-[var(--ybmt-navy)] text-lg mb-1"></i>
                    <span class="text-sm font-semibold text-[var(--ybmt-navy)]">Brisbane</span>
                  </div>
                </th>
                <th class="p-3">
                  <div class="flex flex-col items-center">
                    <i class="fas fa-umbrella-beach text-[var(--ybmt-navy)] text-lg mb-1"></i>
                    <span class="text-sm font-semibold text-[var(--ybmt-navy)]">Gold Coast</span>
                  </div>
                </th>
                <th class="p-3">
                  <div class="flex flex-col items-center">
                    <i class="fas fa-sun text-[var(--ybmt-navy)] text-lg mb-1"></i>
                    <span class="text-sm font-semibold text-[var(--ybmt-navy)]">Sunshine Coast</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* DECKS */}
              <tr class="border-t border-[var(--line)]">
                <td class="p-3 align-middle">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-water text-[var(--ybmt-orange)]"></i>
                    <span class="font-semibold text-[var(--ybmt-navy)]">YBMT Decks</span>
                  </div>
                  <div class="text-xs text-[var(--ink-soft)] mt-1">Pool decks, outdoor entertainment, carpentry</div>
                </td>
                {['BNE', 'GC', 'SC'].map((r) => (
                  <td class="p-2">
                    <div class="grid-cell border border-[var(--line)] rounded-lg p-3 text-center cursor-default bg-[var(--paper-warm)]">
                      <div class="text-xs font-semibold text-[var(--ybmt-navy)]">YBMT Decks</div>
                      <div class="text-[11px] text-[var(--ink-soft)] mt-0.5">{r === 'BNE' ? 'Brisbane' : r === 'GC' ? 'Gold Coast' : 'Sunshine Coast'}</div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* RENOVATIONS */}
              <tr class="border-t border-[var(--line)]">
                <td class="p-3 align-middle">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-hammer text-[var(--ybmt-orange)]"></i>
                    <span class="font-semibold text-[var(--ybmt-navy)]">YBMT Renovations</span>
                  </div>
                  <div class="text-xs text-[var(--ink-soft)] mt-1">Unit & apartment renovations</div>
                </td>
                {['BNE', 'GC', 'SC'].map((r) => (
                  <td class="p-2">
                    <div class="grid-cell border border-[var(--line)] rounded-lg p-3 text-center cursor-default bg-[var(--paper-warm)]">
                      <div class="text-xs font-semibold text-[var(--ybmt-navy)]">YBMT Renovations</div>
                      <div class="text-[11px] text-[var(--ink-soft)] mt-0.5">{r === 'BNE' ? 'Brisbane' : r === 'GC' ? 'Gold Coast' : 'Sunshine Coast'}</div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* TERMITE */}
              <tr class="border-t border-[var(--line)]">
                <td class="p-3 align-middle">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-bug text-[var(--ybmt-orange)]"></i>
                    <span class="font-semibold text-[var(--ybmt-navy)]">YBMT Termite Repairs</span>
                  </div>
                  <div class="text-xs text-[var(--ink-soft)] mt-1">Termite damage repair (channel-led)</div>
                </td>
                {['BNE', 'GC', 'SC'].map((r) => (
                  <td class="p-2">
                    <div class="grid-cell border border-[var(--line)] rounded-lg p-3 text-center cursor-default bg-[var(--paper-warm)]">
                      <div class="text-xs font-semibold text-[var(--ybmt-navy)]">YBMT Termite Repairs</div>
                      <div class="text-[11px] text-[var(--ink-soft)] mt-0.5">{r === 'BNE' ? 'Brisbane' : r === 'GC' ? 'Gold Coast' : 'Sunshine Coast'}</div>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">3 Service Lines</div>
            <p class="text-[var(--ink-soft)]">One master brand, three endorsed descriptors. Like Uber Eats / Freight / Health.</p>
          </div>
          <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">3 Regions</div>
            <p class="text-[var(--ink-soft)]">South-East Queensland's three economic engines. Same playbook, three local overlays.</p>
          </div>
          <div class="p-4 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">3 Fixed Years</div>
            <p class="text-[var(--ink-soft)]">FY27 build · FY28 scale · FY29 mature. The JV term is fixed — the trajectory is not.</p>
          </div>
        </div>
      </section>

      {/* ============== SALES MIX FUNNEL (Diagram B) ============== */}
      <section id="salesmix" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="flex items-baseline justify-between mb-2">
          <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
            <span class="text-[var(--ybmt-orange)] mr-3">C.</span>The Sales Mix
          </h2>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Diagram B</span>
        </div>
        <p class="text-[var(--ink-soft)] mb-10">
          How a stranger becomes a paying customer — and what we measure at every stage.
        </p>

        <div class="grid lg:grid-cols-5 gap-8 items-start">
          {/* FUNNEL SVG / VISUAL */}
          <div class="lg:col-span-3 bg-white rounded-2xl border border-[var(--line)] p-8 shadow-sm">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-6 text-center">Demand → Quote → Won</div>

            {/* Awareness */}
            <div class="funnel-stage relative">
              <div class="mx-auto bg-gradient-to-r from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-lg p-4 text-center shadow-sm" style="width: 100%;">
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Stage 1</div>
                <div class="font-bold text-lg">Awareness</div>
                <div class="text-xs text-white/80 mt-1">Paid Ads (Google · Meta) · SEO · AI Agent search</div>
              </div>
            </div>
            <div class="flex justify-center my-1"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

            {/* Consideration */}
            <div class="funnel-stage relative">
              <div class="mx-auto bg-[var(--ybmt-navy-soft)] text-white rounded-lg p-4 text-center shadow-sm" style="width: 80%;">
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Stage 2</div>
                <div class="font-bold text-lg">Consideration</div>
                <div class="text-xs text-white/80 mt-1">Landing pages · Buyer's Guide (re-qualification) · Time on site</div>
              </div>
            </div>
            <div class="flex justify-center my-1"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

            {/* RFQ */}
            <div class="funnel-stage relative">
              <div class="mx-auto bg-[var(--ybmt-orange)] text-white rounded-lg p-4 text-center shadow-sm" style="width: 60%;">
                <div class="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Stage 3</div>
                <div class="font-bold text-lg">RFQ</div>
                <div class="text-xs text-white/90 mt-1">Request for Quote submitted</div>
              </div>
            </div>
            <div class="flex justify-center my-1"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

            {/* Quotes */}
            <div class="funnel-stage relative">
              <div class="mx-auto bg-[var(--ybmt-orange-soft)] text-[var(--ybmt-navy)] rounded-lg p-4 text-center shadow-sm" style="width: 45%;">
                <div class="text-[10px] uppercase tracking-wider font-semibold opacity-70">Stage 4</div>
                <div class="font-bold text-lg">Quotes Issued</div>
                <div class="text-xs mt-1 opacity-80 metric-num">$200K per week</div>
              </div>
            </div>
            <div class="flex justify-center my-1"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

            {/* Won */}
            <div class="funnel-stage relative">
              <div class="mx-auto bg-[var(--emerald)] text-white rounded-lg p-4 text-center shadow-md" style="width: 35%;">
                <div class="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Stage 5</div>
                <div class="font-bold text-lg">Sales Won</div>
                <div class="text-xs text-white/90 mt-1 metric-num">$100K – $150K / week</div>
                <div class="text-[10px] text-white/70 mt-0.5">50% – 75% strike rate</div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-[var(--line)] text-center text-xs text-[var(--ink-soft)]">
              Every stage tracked. Every drop-off owned. Every dollar attributed.
            </div>
          </div>

          {/* SIDE PANEL — explainer */}
          <div class="lg:col-span-2 space-y-4">
            <div class="p-5 rounded-lg bg-white border border-[var(--line)]">
              <div class="flex items-start gap-3">
                <i class="fas fa-bullhorn text-[var(--ybmt-orange)] mt-1"></i>
                <div>
                  <h3 class="font-semibold text-[var(--ybmt-navy)]">Top of funnel</h3>
                  <p class="text-sm text-[var(--ink-soft)] mt-1">We buy attention (Paid Ads) and we earn attention (SEO + AI Agent search). Both routes funnel into the same landing pages.</p>
                </div>
              </div>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[var(--line)]">
              <div class="flex items-start gap-3">
                <i class="fas fa-book-open text-[var(--ybmt-orange)] mt-1"></i>
                <div>
                  <h3 class="font-semibold text-[var(--ybmt-navy)]">Middle of funnel</h3>
                  <p class="text-sm text-[var(--ink-soft)] mt-1">The Buyer's Guide is the requalification layer. People who download it self-select as serious; those who don't, drop. We protect the sales team's time.</p>
                </div>
              </div>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[var(--line)]">
              <div class="flex items-start gap-3">
                <i class="fas fa-handshake text-[var(--ybmt-orange)] mt-1"></i>
                <div>
                  <h3 class="font-semibold text-[var(--ybmt-navy)]">Bottom of funnel</h3>
                  <p class="text-sm text-[var(--ink-soft)] mt-1">We issue ~$200K of quotes per week. We win 50–75% of those. That's $100K–$150K of new sales per week — the Year 1 run rate to $5M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== UNIT ECONOMICS (Diagram C) ============== */}
      <section id="unit-econ" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="flex items-baseline justify-between mb-2">
          <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
            <span class="text-[var(--ybmt-orange)] mr-3">D.</span>The Unit Economics
          </h2>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Diagram C</span>
        </div>
        <p class="text-[var(--ink-soft)] mb-10">
          How $5M of sales becomes $500K of net profit. Read the triangle from top to bottom.
        </p>

        <div class="grid lg:grid-cols-5 gap-8 items-start">
          {/* TRIANGLE VISUAL */}
          <div class="lg:col-span-3 bg-white rounded-2xl border border-[var(--line)] p-8 shadow-sm">
            {/* Layer 1 — Sales */}
            <div class="margin-layer bg-[var(--ybmt-navy)] text-white rounded-t-lg p-5 text-center">
              <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Layer 1 · Top line</div>
              <div class="flex items-baseline justify-center gap-3 mt-1">
                <div class="display text-3xl font-bold">$5M</div>
                <div class="text-sm text-white/70">Sales (Year 1)</div>
              </div>
              <div class="text-xs text-white/70 mt-1 metric-num">≈ $100K per week</div>
            </div>

            {/* Layer 2 — GPM */}
            <div class="margin-layer bg-[var(--ybmt-navy-soft)] text-white p-5 text-center" style="width: 80%; margin: 0 auto;">
              <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Layer 2 · Gross Profit</div>
              <div class="flex items-baseline justify-center gap-3 mt-1">
                <div class="display text-2xl font-bold">34%</div>
                <div class="text-sm text-white/70">GPM = $1.7M gross profit</div>
              </div>
            </div>

            {/* Layer 3 — Overheads */}
            <div class="margin-layer bg-[var(--ybmt-orange)] text-white p-5 text-center" style="width: 60%; margin: 0 auto;">
              <div class="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Layer 3 · Overheads</div>
              <div class="flex items-baseline justify-center gap-3 mt-1">
                <div class="display text-2xl font-bold">$1.2M</div>
                <div class="text-sm text-white/90">Salaries, rent, marketing, insurance, software</div>
              </div>
            </div>

            {/* Layer 4 — Net */}
            <div class="margin-layer bg-[var(--emerald)] text-white rounded-b-lg p-5 text-center" style="width: 40%; margin: 0 auto;">
              <div class="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Layer 4 · Net Profit</div>
              <div class="flex items-baseline justify-center gap-3 mt-1">
                <div class="display text-3xl font-bold">$500K</div>
                <div class="text-sm text-white/90 metric-num">10% NPM</div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-[var(--line)] grid grid-cols-2 gap-4 text-sm">
              <div class="p-3 bg-[var(--paper-warm)] rounded-lg">
                <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">CFO Rule #1</div>
                <p class="text-[var(--ink)]"><strong>Manage the margin</strong> — protect 34% GPM job by job.</p>
              </div>
              <div class="p-3 bg-[var(--paper-warm)] rounded-lg">
                <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">CFO Rule #2</div>
                <p class="text-[var(--ink)]"><strong>Quote = actual cost</strong> — no scope creep, no margin leakage.</p>
              </div>
            </div>
          </div>

          {/* SIDE PANEL — the 3 KPIs that protect the margin */}
          <div class="lg:col-span-2 space-y-4">
            <div class="p-5 rounded-lg bg-[var(--ybmt-navy)] text-white">
              <div class="text-xs uppercase tracking-wider text-white/60 font-semibold mb-3">Every job is measured on…</div>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center">
                    <i class="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <div class="font-semibold">On time</div>
                    <div class="text-xs text-white/70">Delivered when promised</div>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center">
                    <i class="fas fa-clipboard-check text-white"></i>
                  </div>
                  <div>
                    <div class="font-semibold">On scope</div>
                    <div class="text-xs text-white/70">No variations creep — change orders priced</div>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center">
                    <i class="fas fa-dollar-sign text-white"></i>
                  </div>
                  <div>
                    <div class="font-semibold">On budget</div>
                    <div class="text-xs text-white/70">Actual cost ≤ quoted cost</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-lg bg-white border border-[var(--line)]">
              <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Stretch target</div>
              <p class="text-sm text-[var(--ink)]">The diagram leaves a marker at <strong>15% NPM</strong> as the stretch ceiling. Every basis point above 10% is upside Carla & Sinbau share on the milestone math.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== KPI BAR ============== */}
      <section id="kpis" class="read-section max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="flex items-baseline justify-between mb-2">
          <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
            <span class="text-[var(--ybmt-orange)] mr-3">E.</span>The Operating KPIs
          </h2>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Non-negotiable</span>
        </div>
        <p class="text-[var(--ink-soft)] mb-10">
          These five operating KPIs are the heartbeat. A repeated breach is an operational red card —
          not a "we'll do better next week."
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div class="bg-white border border-[var(--line)] rounded-xl p-5">
            <div class="w-10 h-10 rounded-lg bg-[var(--ybmt-navy)] flex items-center justify-center mb-3">
              <i class="fas fa-bolt text-white"></i>
            </div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">First response</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">4 hrs</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">From RFQ submitted to first human contact.</p>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-xl p-5">
            <div class="w-10 h-10 rounded-lg bg-[var(--ybmt-navy)] flex items-center justify-center mb-3">
              <i class="fas fa-file-invoice-dollar text-white"></i>
            </div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Quote turnaround</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">24 hrs</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">Site-visited quotes delivered within one business day.</p>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-xl p-5">
            <div class="w-10 h-10 rounded-lg bg-[var(--ybmt-navy)] flex items-center justify-center mb-3">
              <i class="fas fa-phone-volume text-white"></i>
            </div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Quote follow-up</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">24 hrs</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">Active follow-up after quote sent, then sequenced cadence.</p>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-xl p-5">
            <div class="w-10 h-10 rounded-lg bg-[var(--emerald)] flex items-center justify-center mb-3">
              <i class="fas fa-bullseye text-white"></i>
            </div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Strike rate</div>
            <div class="metric-num display text-2xl font-bold text-[var(--ybmt-navy)] mt-1">50 – 75%</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">Quoted jobs converted to signed contracts.</p>
          </div>
          <div class="bg-white border border-[var(--line)] rounded-xl p-5">
            <div class="w-10 h-10 rounded-lg bg-[var(--crimson)] flex items-center justify-center mb-3">
              <i class="fas fa-exclamation-triangle text-white"></i>
            </div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Breach rule</div>
            <div class="metric-num display text-2xl font-bold text-[var(--crimson)] mt-1">0</div>
            <p class="text-xs text-[var(--ink-soft)] mt-2">Zero tolerance for <em>repeating</em> KPI breaches. Root-cause review triggered.</p>
          </div>
        </div>
      </section>

      {/* ============== HOW IT ALL CONNECTS ============== */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
        <div class="bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange-soft)] font-semibold mb-3">How it all connects</div>
          <h2 class="display text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            The three diagrams are one system.
          </h2>
          <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-[var(--ybmt-orange)] text-white text-xs flex items-center justify-center font-bold">A</span>
                <span class="font-semibold">Financial Strategy</span>
              </div>
              <p class="text-white/80">tells us <em>where</em> we have to land — $5M → $7M → $10M with 10% NPM.</p>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-[var(--ybmt-orange)] text-white text-xs flex items-center justify-center font-bold">B</span>
                <span class="font-semibold">Sales Mix</span>
              </div>
              <p class="text-white/80">tells us <em>how</em> we get the revenue — funnel a stranger to a signed customer at 50–75% strike rate.</p>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-[var(--ybmt-orange)] text-white text-xs flex items-center justify-center font-bold">C</span>
                <span class="font-semibold">Unit Economics</span>
              </div>
              <p class="text-white/80">tells us <em>what</em> a healthy job looks like — protect 34% GPM, $X overheads, 10% NPM.</p>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-white/15">
            <p class="text-base lg:text-lg text-white/90">
              The <span class="font-bold text-[var(--ybmt-orange-soft)]">3 × 3 grid</span> is where the
              system runs. Nine cells. Three years. One playbook. One scoreboard.
            </p>
          </div>
        </div>
      </section>

      {/* ============== READY-TO-SEE CTA TILE ============== */}
      <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16">
        <a href="/marketing-mix" class="group block bg-gradient-to-br from-[var(--ybmt-orange)] to-[var(--ybmt-orange-soft)] text-white rounded-2xl p-8 lg:p-10 shadow-md hover:shadow-lg transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div class="flex-1">
              <div class="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                <i class="fas fa-folder-open mr-1.5"></i> Marketing Mix Inventory
              </div>
              <h2 class="display text-3xl lg:text-4xl font-bold leading-tight">
                Ready to see the new <span class="italic">marketing materials</span> for the 3 × 3 strategy?
              </h2>
              <p class="text-white/85 mt-3 max-w-2xl">
                22 launch-ready assets across 10 categories — brand · capability statements · website · lead magnet ·
                sales · paid ads · email · print · partnerships · execution. One cell of the 3 × 3 grid is finished.
              </p>
            </div>
            <div class="shrink-0">
              <span class="inline-flex items-center gap-2 bg-white text-[var(--ybmt-orange)] font-semibold px-5 py-3 rounded-lg group-hover:bg-[var(--paper-warm)] transition-colors">
                Open the inventory <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* ============== FOOTER / META ============== */}
      <footer class="max-w-[1100px] mx-auto px-6 lg:px-10 pb-16">
        <div class="border-t border-[var(--line)] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--ink-fade)]">
          <div class="flex items-center gap-4">
            <div class="w-7 h-7 rounded bg-[var(--ybmt-navy)] flex items-center justify-center text-white font-bold text-xs">Y</div>
            <div>
              <div class="font-semibold text-[var(--ink-soft)]">YBMT × CoSai Construction Joint Venture</div>
              <div>Charter homepage · v1.0 · 2026</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 md:gap-6">
            <span><i class="fas fa-id-card mr-1"></i> QBCC 15030821</span>
            <span><i class="fas fa-building mr-1"></i> ABN 74 076 531 765</span>
            <span><i class="fas fa-phone mr-1"></i> 1300 448 784</span>
            <span><i class="fas fa-envelope mr-1"></i> info@ybmt.com.au</span>
          </div>
        </div>
        <div class="mt-6 text-[11px] text-[var(--ink-fade)] leading-relaxed">
          This homepage is the plain-English explainer of the JV's operating model.
          It synthesises three source diagrams (A · Financial Strategy, B · Sales Mix, C · Unit Economics)
          into a single visual hierarchy designed to onboard any new reader in under 5 minutes.
        </div>
      </footer>
    </div>
  )
})

export default app
