/* ============================================================================
   /3-funnels — The 3-Funnel ROI Productivity Strategy Document
   ============================================================================
   The complete strategic architecture:
   - Headless Operating Model (YDT + CoSai)
   - 3-Funnel Cascade (Marketing → Estimating → Financial)
   - Scenarios A/B/C ($400K → $1.4M → $2.4M NP)
   - Sales Budget by LOB · GPM by Product Line
   - FTE Capacity · KPI Productivity Matrix
   - Ad Budget + June 2026 AI-Search Strategy
   - Appendix 1 Evidence Library
   ============================================================================ */

const TFDocHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>CoSai Strategic Document Hub</strong> · 2 documents live
      </div>
      <div class="dochub-links">
        <a href="/" class="dochub-link">
          <span class="dochub-badge">DOC 1</span>
          CFO Design Brief
        </a>
        <a href="/3-funnels" class="dochub-link active">
          <span class="dochub-badge new">DOC 2 · NEW</span>
          3-Funnel ROI Strategy
        </a>
      </div>
    </div>
  </div>
)

const TFNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai CFO Services" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">3-Funnel ROI Productivity · YMT Growth Strategy</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#tf0">0. Headless Model</a>
        <a href="#tf1">1. 3 Funnels</a>
        <a href="#tf2">2. Scenarios</a>
        <a href="#tf3">3. FTE Capacity</a>
        <a href="#tf4">4. Sales Mix</a>
        <a href="#tf5">5. Ad Budget</a>
        <a href="#tf6">6. KPI Matrix</a>
        <a href="#tf7">7. Value</a>
        <a href="#tfA">A1. Evidence</a>
      </nav>
    </div>
  </header>
)

const TFHero = () => (
  <section class="hero">
    <div class="hero-inner">
      <div class="eyebrow">CoSai CFO Services · Strategic Architecture</div>
      <h1>
        Three Funnels.<br />
        One Growth Cycle.<br />
        <em>$2.4M Net Profit.</em>
      </h1>
      <p class="hero-sub">
        The 3-Funnel ROI Productivity framework — a CFO-engineered cascade where{' '}
        <strong style="color:var(--cream)">Marketing (YDT)</strong> feeds{' '}
        <strong style="color:var(--cream)">Estimating (Gerry + Matt)</strong> feeds{' '}
        <strong style="color:var(--cream)">Financial (CoSai)</strong>. Two headless executive
        retainers — <strong style="color:var(--cream)">$1,400/week combined, fixed across all
        scenarios</strong> — govern a 3-year growth cycle from $4M revenue to $24M, delivering
        $4.2M cumulative net profit at a <strong style="color:var(--cream)">20× return on the
        executive layer</strong>.
      </p>
      <div class="hero-meta">
        <div class="item"><div class="l">YDT Headless Marketing</div><div class="v">$600/wk · Corrina McGowan</div></div>
        <div class="item"><div class="l">CoSai Headless CFO</div><div class="v">$800/wk · Carla Oliver</div></div>
        <div class="item"><div class="l">Combined Annual Fee</div><div class="v">$69,600 fixed</div></div>
        <div class="item"><div class="l">Target</div><div class="v">$2.4M NP · Scenario C</div></div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Section 0 — Headless Operating Model
   ============================================================================ */
const Section0_Headless = () => (
  <section class="module" id="tf0">
    <div class="module-header">
      <div class="label">Section 0</div>
      <div class="eyebrow">Headless Operating Model</div>
      <h2>Two outsourced executives. One internal operator. No fixed-cost creep.</h2>
      <p class="lede">
        YMT's growth engine is governed by <em>two headless executive functions</em> —{' '}
        Headless Marketing (YDT, led by Corrina McGowan) and Headless CFO (CoSai, led by Carla
        Oliver) — both engaged at <em>fixed weekly retainers</em> that hold flat across the entire
        growth cycle from $4M to $24M revenue. No internal CMO. No internal CFO. The executive
        layer does not scale with revenue, so margin compounds as YMT grows.
      </p>
    </div>

    {/* Org chart */}
    <div class="org-chart">
      <div class="org-tier tier-top">
        <div class="org-node ownership">YMT Board / Ownership</div>
      </div>
      <div class="org-tier tier-middle">
        <div class="org-node operator">
          <div class="role">Operating CEO + BD/Sales</div>
          <div class="name">Gerry McGuire</div>
          <div class="badge internal">Internal FTE</div>
        </div>
      </div>
      <div class="org-tier tier-bottom">
        <div class="org-node headless-marketing">
          <div class="role">Headless Marketing Agency</div>
          <div class="name">YDT · Corrina McGowan</div>
          <div class="badge fee">$600/wk fixed</div>
          <div class="owns">Owns Funnel 1</div>
        </div>
        <div class="org-node internal-delivery">
          <div class="role">Internal Delivery Team</div>
          <div class="name">
            Matt Grant · Estimating<br />
            Darcy + Paul · PM × 2<br />
            Field crews
          </div>
          <div class="badge internal">Internal FTE</div>
          <div class="owns">Owns Funnel 2</div>
        </div>
        <div class="org-node headless-cfo">
          <div class="role">Headless CFO Services</div>
          <div class="name">CoSai · Carla Oliver<br /><span class="tiny">MBA · CPA · CIMA</span></div>
          <div class="badge fee">$800/wk fixed</div>
          <div class="owns">Owns Funnel 3</div>
        </div>
      </div>
    </div>

    {/* Scope cards */}
    <h3>Scope of responsibility — clean separation</h3>
    <div class="grid cols-2">
      <div class="card scope-card ydt-card">
        <div class="card-header">
          <div class="tiny">Headless Marketing Agency</div>
          <h4>YDT · Corrina McGowan</h4>
          <div class="fee-stamp">$600/wk · $31,200/yr · fixed</div>
        </div>
        <ul class="check-list">
          <li>Marketing strategy across 3 LOBs (Termite / Pools / Units)</li>
          <li>Website build + maintenance (ymtgroup.com.au)</li>
          <li>Traditional SEO across all 3 service lines</li>
          <li><strong>GEO/AEO</strong> — get YMT cited in ChatGPT / Perplexity / Gemini answers</li>
          <li>Google Business Profile × 3 service categories</li>
          <li>Paid ads — LinkedIn, Google, Meta (strategy, build, optimise, report)</li>
          <li>Content production — service pages, case studies, blog, video briefs</li>
          <li>Email + CRM — nurture sequences, enquiry follow-up automation</li>
          <li>Review acquisition + reputation management</li>
          <li>Weekly Funnel 1 metrics to Gerry + Carla</li>
        </ul>
        <div class="excludes">
          <strong>Excludes:</strong> Estimating · Quoting · Project delivery · Financial reporting · Direct B2B sales meetings
        </div>
      </div>

      <div class="card scope-card cosai-card">
        <div class="card-header">
          <div class="tiny">Headless CFO Services</div>
          <h4>CoSai · Carla Oliver</h4>
          <div class="fee-stamp">$800/wk · $38,400/yr · fixed</div>
        </div>
        <ul class="check-list">
          <li>FP&amp;A — financial planning &amp; analysis across all 3 LOBs</li>
          <li>Budgeting · annual budget + quarterly reforecasts + scenario modelling</li>
          <li>13-week rolling cashflow · P&amp;L · balance sheet projection</li>
          <li><strong>GPM Governance</strong> — line-by-line GPM tracking (45% / 32% / 35%)</li>
          <li><strong>Blended GPM Defence</strong> — protect 40% blended target via sales mix</li>
          <li>NPM Governance — $400K / $1.4M / $2.4M scenario tracking</li>
          <li>Pricing strategy per LOB with margin floors + elasticity testing</li>
          <li>Marketing ROI · CAC · LTV · channel attribution review</li>
          <li>Capital allocation · working capital · cashflow discipline</li>
          <li>Board reporting · KPI dashboard · commercial governance</li>
        </ul>
        <div class="excludes">
          <strong>Excludes:</strong> Bookkeeping · Tax return prep · Marketing strategy · Sales execution · Project delivery
        </div>
      </div>
    </div>

    {/* Governance cadence */}
    <h3>Governance cadence — how the two headless teams connect</h3>
    <div class="cadence-table-wrap">
      <table class="cadence-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Meeting</th>
            <th>Attendees</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Mon</strong></td><td>Funnel 1 review</td><td>Gerry + Corrina (YDT)</td><td>Lead / enquiry volume vs target</td></tr>
          <tr><td><strong>Tue</strong></td><td>Funnel 2 review</td><td>Gerry + Matt Grant</td><td>Quote pipeline · 24hr SLA · strike rate</td></tr>
          <tr><td><strong>Wed</strong></td><td>Funnel 3 review</td><td>Gerry + Carla (CoSai)</td><td>Sales vs budget · GPM vs target · cash position</td></tr>
          <tr><td><strong>Thu</strong></td><td>Cross-funnel sync</td><td>Gerry + Corrina + Carla</td><td>End-to-end cascade health</td></tr>
          <tr><td><strong>Fri</strong></td><td>Weekly board snapshot</td><td>Carla → Board</td><td>7 RED-LINE KPI dashboard</td></tr>
        </tbody>
      </table>
    </div>

    {/* Why this wins */}
    <h3>Why the headless model wins</h3>
    <div class="grid cols-2">
      <div class="card flag">
        <div class="tiny">Reason 1</div>
        <h4>No fixed-cost creep at executive layer</h4>
        <p>Internal CMO + CFO salaries typically total $400K+/yr. YMT's executive layer holds at <strong>$69.6K/yr forever</strong> — defending $330K+/yr of margin every single year.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Reason 2</div>
        <h4>Margin compounds as revenue scales</h4>
        <p>At $4M revenue, exec fees = 1.74% of revenue. At $14M = 0.50%. At $24M = <strong>0.29%</strong>. Revenue scales 6× while executive cost stays flat.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Reason 3</div>
        <h4>No succession or recruitment risk</h4>
        <p>Two senior executives already in motion, already aligned. No 6-month CFO search. No equity dilution. No onboarding lag. Day 1 productivity.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Reason 4</div>
        <h4>Scenario C completes the growth cycle</h4>
        <p>At $2.4M NP, YMT is either <strong>sold</strong> (8-12× EBITDA = $19M-$29M exit) or <strong>held</strong> as a cash-flowing asset paying $2.4M+/yr indefinitely. <span class="ref">[App. 5.1]</span></p>
      </div>
    </div>

    {/* ROI Trajectory */}
    <h3>ROI trajectory — the compounding story</h3>
    <div class="table-wrap">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Scenario</th>
            <th class="r">Net Profit</th>
            <th class="r">Executive Layer</th>
            <th class="r">ROI Multiple</th>
            <th class="r">NP per $1 of Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Y1</strong></td><td>A · Foundation</td><td class="r">$400,000</td><td class="r">$69,600</td><td class="r"><strong>5.7×</strong></td><td class="r">$5.74</td></tr>
          <tr><td><strong>Y2</strong></td><td>B · Acceleration</td><td class="r">$1,400,000</td><td class="r">$69,600</td><td class="r"><strong>20.1×</strong></td><td class="r">$20.11</td></tr>
          <tr><td><strong>Y3</strong></td><td>C · Destination</td><td class="r">$2,400,000</td><td class="r">$69,600</td><td class="r"><strong>34.5×</strong></td><td class="r">$34.48</td></tr>
          <tr class="total"><td colspan={2}><strong>3-YEAR TOTAL</strong></td><td class="r"><strong>$4,200,000</strong></td><td class="r"><strong>$208,800</strong></td><td class="r"><strong>20.1×</strong></td><td class="r"><strong>$20.11</strong></td></tr>
        </tbody>
      </table>
    </div>
    <p class="small muted"><strong>Reads:</strong> Over a 3-year growth cycle from $4M to $24M revenue, the two headless executives deliver $4.2M cumulative net profit for a total fee outlay of $208,800 — a 20× return on the executive layer across the full cycle. <em>This is the story for the Board.</em></p>
  </section>
)

/* ============================================================================
   Section 1 — The 3-Funnel ROI Cascade
   ============================================================================ */
const Section1_Funnels = () => (
  <section class="module" id="tf1">
    <div class="module-header">
      <div class="label">Section 1</div>
      <div class="eyebrow">The 3-Funnel ROI Productivity Framework</div>
      <h2>Marketing feeds Estimating. Estimating feeds Financial.</h2>
      <p class="lede">
        Three funnels stacked vertically. Each one owned by a different function. Each one has
        its own scope-of-responsibility band, its own RED-LINE KPI, and its own benchmark-anchored
        target. Together they form a single mathematical cascade from <em>impression</em> to{' '}
        <em>net profit</em>.
      </p>
    </div>

    <div class="funnel-stack">

      {/* Funnel 1 - Marketing */}
      <div class="funnel-card funnel-1">
        <div class="funnel-header">
          <div class="funnel-number">F1</div>
          <div class="funnel-title">
            <h3>Marketing Funnel</h3>
            <div class="owned-by">Owned by <strong>YDT · Corrina McGowan</strong> · Headless Marketing</div>
          </div>
          <div class="funnel-redline">
            <div class="tiny">RED-LINE KPI</div>
            <div class="value">Qualified Enquiries / Week</div>
          </div>
        </div>
        <div class="funnel-layers">
          <div class="funnel-layer l1">
            <div class="layer-label">Awareness · Impressions</div>
            <div class="layer-benchmark">Industry: 1-3% impression → click <span class="ref">[App. 1.1.1]</span></div>
          </div>
          <div class="funnel-layer l2">
            <div class="layer-label">Reach · Clicks</div>
            <div class="layer-benchmark">B2B benchmark: 2.5% CTR LinkedIn <span class="ref">[App. 1.1.2]</span></div>
          </div>
          <div class="funnel-layer l3">
            <div class="layer-label">Consideration · Site visits + time-on-site</div>
            <div class="layer-benchmark">Construction sites: 2:14 avg <span class="ref">[App. 1.1.3]</span></div>
          </div>
          <div class="funnel-layer l4">
            <div class="layer-label">Intent · Form fills / phone enquiries</div>
            <div class="layer-benchmark">Trades 2-5% visit→enquiry <span class="ref">[App. 1.1.4]</span></div>
          </div>
          <div class="funnel-layer l5 redline">
            <div class="layer-label"><strong>Qualified Enquiry → handed to Funnel 2</strong></div>
            <div class="layer-benchmark">Qualification rate 60-80% <span class="ref">[App. 1.1.5]</span></div>
          </div>
        </div>
      </div>

      {/* Funnel 2 - Estimating */}
      <div class="funnel-card funnel-2">
        <div class="funnel-header">
          <div class="funnel-number">F2</div>
          <div class="funnel-title">
            <h3>Estimating Funnel</h3>
            <div class="owned-by">Owned by <strong>Gerry McGuire + Matt Grant</strong> · Internal Team</div>
          </div>
          <div class="funnel-redline">
            <div class="tiny">RED-LINE KPI</div>
            <div class="value">YES Strike Rate %</div>
          </div>
        </div>
        <div class="funnel-layers">
          <div class="funnel-layer l1">
            <div class="layer-label">Enquiry received from F1</div>
            <div class="layer-benchmark">Response SLA: 1 hour <span class="ref">[App. 1.2.1]</span></div>
          </div>
          <div class="funnel-layer l2">
            <div class="layer-label">Site visit / scoping</div>
            <div class="layer-benchmark">Scope-to-quote: ≤72 hours <span class="ref">[App. 1.2.2]</span></div>
          </div>
          <div class="funnel-layer l3">
            <div class="layer-label">Quote issued (24hr SLA)</div>
            <div class="layer-benchmark">AIQS estimator: 8-12 quotes/wk <span class="ref">[App. 1.2.3]</span></div>
          </div>
          <div class="funnel-layer l4">
            <div class="layer-label">Follow-up + objection handling</div>
            <div class="layer-benchmark">Sandler: 3-5 touches to close <span class="ref">[App. 1.2.4]</span></div>
          </div>
          <div class="funnel-layer l5 redline">
            <div class="layer-label"><strong>YES → handed to Funnel 3</strong></div>
            <div class="layer-benchmark">Target: 75% strike (60% baseline + SLA) <span class="ref">[App. 1.2.5]</span></div>
          </div>
        </div>
      </div>

      {/* Funnel 3 - Financial */}
      <div class="funnel-card funnel-3">
        <div class="funnel-header">
          <div class="funnel-number">F3</div>
          <div class="funnel-title">
            <h3>Financial Funnel</h3>
            <div class="owned-by">Owned by <strong>CoSai · Carla Oliver</strong> · Headless CFO</div>
          </div>
          <div class="funnel-redline">
            <div class="tiny">RED-LINE KPI</div>
            <div class="value">Net Profit Margin</div>
          </div>
        </div>
        <div class="funnel-layers">
          <div class="funnel-layer l1">
            <div class="layer-label">Sale booked (job accepted)</div>
            <div class="layer-benchmark">Deposit ≥30% within 7 days <span class="ref">[App. 1.3.1]</span></div>
          </div>
          <div class="funnel-layer l2">
            <div class="layer-label">Delivery — PM owns (Darcy + Paul)</div>
            <div class="layer-benchmark">RICS: 6-10 concurrent jobs/PM <span class="ref">[App. 1.3.2]</span></div>
          </div>
          <div class="funnel-layer l3">
            <div class="layer-label">Revenue recognised + invoiced</div>
            <div class="layer-benchmark">DSO target: ≤45 days <span class="ref">[App. 1.3.3]</span></div>
          </div>
          <div class="funnel-layer l4">
            <div class="layer-label">Gross Profit · 40% blended target</div>
            <div class="layer-benchmark">Termite 45% / Pools 32% / Units 35% <span class="ref">[App. 1.3.4]</span></div>
          </div>
          <div class="funnel-layer l5 redline">
            <div class="layer-label"><strong>Net Profit → Owner / Board</strong></div>
            <div class="layer-benchmark">Target: 10% NPM at Scenario C <span class="ref">[App. 1.3.5]</span></div>
          </div>
        </div>
      </div>

    </div>

    <p class="small muted"><strong>Architectural note:</strong> Each funnel is owned by a different function. Each function reports its own RED-LINE KPI weekly. No funnel is allowed to optimise at the expense of another — that's CoSai's cross-funnel governance role on Thursdays.</p>
  </section>
)

/* ============================================================================
   Section 2 — Three Scenarios (A / B / C)
   ============================================================================ */
const Section2_Scenarios = () => (
  <section class="module" id="tf2">
    <div class="module-header">
      <div class="label">Section 2</div>
      <div class="eyebrow">The 3-Year Growth Cycle</div>
      <h2>Reverse-engineered cascades. $400K → $1.4M → $2.4M.</h2>
      <p class="lede">
        Three scenarios — Foundation, Acceleration, Destination. Each one is mathematically
        derived <em>backwards</em> from a net profit target, through the financial funnel, into
        the estimating funnel, into the marketing funnel. Every number reconciles to the next.
        <em>The headless executive layer stays at $1,400/week across all three.</em>
      </p>
    </div>

    <div class="scenarios-grid">

      {/* Scenario A */}
      <div class="scenario-card scenario-a">
        <div class="scenario-header">
          <div class="scenario-label">Year 1 · Foundation</div>
          <h3>Scenario A</h3>
          <div class="scenario-target">$400K Net Profit</div>
        </div>
        <table class="scenario-cascade">
          <tbody>
            <tr><td>Net Profit Target</td><td class="r"><strong>$400K</strong></td></tr>
            <tr><td>Revenue (@10% NPM)</td><td class="r">$4.0M</td></tr>
            <tr><td>Gross Profit (@40% GPM)</td><td class="r">$1.6M</td></tr>
            <tr><td>Weekly Revenue</td><td class="r">$83K/wk</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 2 — Estimating</strong></td></tr>
            <tr><td>Quotes Won / wk</td><td class="r">4</td></tr>
            <tr><td>Avg Job Value</td><td class="r">$21K</td></tr>
            <tr><td>Strike Rate</td><td class="r">75%</td></tr>
            <tr><td>Quotes Issued / wk</td><td class="r">5-6</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 1 — Marketing</strong></td></tr>
            <tr><td>Qualified Enquiries / wk</td><td class="r">5</td></tr>
            <tr><td>Site Visits / wk</td><td class="r">170</td></tr>
            <tr><td>Impressions / wk</td><td class="r">14,000</td></tr>
            <tr class="total"><td>FTE Headcount</td><td class="r">BD 1 · Est 1 · PM 1</td></tr>
          </tbody>
        </table>
        <div class="scenario-roi">
          ROI on $69.6K Executive Fee = <strong>5.7×</strong>
        </div>
      </div>

      {/* Scenario B */}
      <div class="scenario-card scenario-b">
        <div class="scenario-header">
          <div class="scenario-label">Year 2 · Acceleration</div>
          <h3>Scenario B</h3>
          <div class="scenario-target">$1.4M Net Profit</div>
        </div>
        <table class="scenario-cascade">
          <tbody>
            <tr><td>Net Profit Target</td><td class="r"><strong>$1.4M</strong></td></tr>
            <tr><td>Revenue (@10% NPM)</td><td class="r">$14.0M</td></tr>
            <tr><td>Gross Profit (@40% GPM)</td><td class="r">$5.6M</td></tr>
            <tr><td>Weekly Revenue</td><td class="r">$292K/wk</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 2 — Estimating</strong></td></tr>
            <tr><td>Quotes Won / wk</td><td class="r">13</td></tr>
            <tr><td>Avg Job Value</td><td class="r">$22K</td></tr>
            <tr><td>Strike Rate</td><td class="r">75%</td></tr>
            <tr><td>Quotes Issued / wk</td><td class="r">17</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 1 — Marketing</strong></td></tr>
            <tr><td>Qualified Enquiries / wk</td><td class="r">17</td></tr>
            <tr><td>Site Visits / wk</td><td class="r">567</td></tr>
            <tr><td>Impressions / wk</td><td class="r">47,000</td></tr>
            <tr class="total"><td>FTE Headcount</td><td class="r">BD 1 · Est 1 · PM 2</td></tr>
          </tbody>
        </table>
        <div class="scenario-roi">
          ROI on $69.6K Executive Fee = <strong>20.1×</strong>
        </div>
      </div>

      {/* Scenario C */}
      <div class="scenario-card scenario-c">
        <div class="scenario-header">
          <div class="scenario-label">Year 3 · Destination · GROWTH CYCLE COMPLETE</div>
          <h3>Scenario C</h3>
          <div class="scenario-target">$2.4M Net Profit</div>
        </div>
        <table class="scenario-cascade">
          <tbody>
            <tr><td>Net Profit Target</td><td class="r"><strong>$2.4M</strong></td></tr>
            <tr><td>Revenue (@10% NPM)</td><td class="r">$24.0M</td></tr>
            <tr><td>Gross Profit (@40% GPM)</td><td class="r">$9.6M</td></tr>
            <tr><td>Weekly Revenue</td><td class="r">$500K/wk</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 2 — Estimating</strong></td></tr>
            <tr><td>Quotes Won / wk</td><td class="r">22</td></tr>
            <tr><td>Avg Job Value</td><td class="r">$23K</td></tr>
            <tr><td>Strike Rate</td><td class="r">75%</td></tr>
            <tr><td>Quotes Issued / wk</td><td class="r">28</td></tr>
            <tr class="cascade-break"><td colspan={2}><strong>Funnel 1 — Marketing</strong></td></tr>
            <tr><td>Qualified Enquiries / wk</td><td class="r">28</td></tr>
            <tr><td>Site Visits / wk</td><td class="r">935</td></tr>
            <tr><td>Impressions / wk</td><td class="r">78,000</td></tr>
            <tr class="total"><td>FTE Headcount</td><td class="r">BD 2 · Est 2 · PM 3</td></tr>
          </tbody>
        </table>
        <div class="scenario-roi destination">
          ROI on $69.6K Executive Fee = <strong>34.5×</strong>
        </div>
      </div>

    </div>

    <div class="exit-callout">
      <h3>Scenario C completes the growth cycle. Then YMT decides.</h3>
      <div class="grid cols-2">
        <div class="card">
          <div class="tiny">Exit Option</div>
          <h4>Sell at premium multiple</h4>
          <p>$2.4M NP × 8-12× EBITDA multiple = <strong>$19M-$29M exit valuation</strong>. Higher multiple available because of YMT's headless operating model — buyer inherits a documented, scalable, low-overhead executive layer that doesn't depend on internal succession. <span class="ref">[App. 5.1]</span></p>
        </div>
        <div class="card">
          <div class="tiny">Hold Option</div>
          <h4>Hold as a cash-flowing asset</h4>
          <p>$2.4M+/yr to ownership indefinitely. Headless executive layer keeps running — no recruitment, no succession, no internal CMO/CFO replacement risk. Ownership becomes a passive financial position with active strategic governance. <span class="ref">[App. 5.2]</span></p>
        </div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Section 3 — FTE Capacity
   ============================================================================ */
const Section3_FTE = () => (
  <section class="module" id="tf3">
    <div class="module-header">
      <div class="label">Section 3</div>
      <div class="eyebrow">FTE Capacity Planning</div>
      <h2>Headcount that the cascade math actually demands.</h2>
      <p class="lede">
        Internal FTE is sized against industry productivity benchmarks. BD prospects per week
        (Sandler). Quotes per week per estimator (AIQS). Concurrent jobs per PM (RICS). The
        headless executive layer (YDT + CoSai) <em>does not</em> appear on this table — it stays
        flat at 0 internal FTE across all scenarios.
      </p>
    </div>

    <div class="table-wrap">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Function</th>
            <th>Productivity Benchmark</th>
            <th class="r">Scenario A</th>
            <th class="r">Scenario B</th>
            <th class="r">Scenario C</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>BD / Sales</strong></td><td>5-8 qualified prospects/wk per BD</td><td class="r">1 FTE</td><td class="r">1 FTE</td><td class="r">2 FTE</td><td class="r"><span class="ref">[App. 1.4.1]</span></td></tr>
          <tr><td><strong>Estimating</strong></td><td>8-12 quotes/wk per estimator</td><td class="r">1 FTE</td><td class="r">1 FTE</td><td class="r">2 FTE</td><td class="r"><span class="ref">[App. 1.4.2]</span></td></tr>
          <tr><td><strong>Project Mgmt</strong></td><td>6-10 concurrent jobs per PM · 4-wk blended duration</td><td class="r">1 FTE</td><td class="r">2 FTE</td><td class="r">3 FTE</td><td class="r"><span class="ref">[App. 1.4.3]</span></td></tr>
          <tr><td><strong>Field crew</strong></td><td>Scales with PM capacity</td><td class="r">2-3 crews</td><td class="r">4-5 crews</td><td class="r">7-8 crews</td><td class="r"><span class="ref">[App. 1.4.4]</span></td></tr>
          <tr class="callout-row"><td colspan={2}><strong>Headless Executive Layer</strong></td><td class="r">0 internal</td><td class="r">0 internal</td><td class="r">0 internal</td><td class="r"><strong>FLAT</strong></td></tr>
        </tbody>
      </table>
    </div>

    <div class="hire-triggers">
      <h3>Hire triggers — when each FTE step-up happens</h3>
      <div class="grid cols-3">
        <div class="card">
          <div class="tiny">Trigger 1</div>
          <h4>Estimator #2 hire</h4>
          <p>When sustained quotes-per-week exceeds <strong>12</strong> for 4 consecutive weeks. Sits between Scenario B and C. Hire 8 weeks before threshold is breached.</p>
        </div>
        <div class="card">
          <div class="tiny">Trigger 2</div>
          <h4>PM #2 hire (Paul)</h4>
          <p>When concurrent jobs exceeds <strong>10</strong> for 4 consecutive weeks. Sits early in Scenario B. <strong>Already triggered.</strong></p>
        </div>
        <div class="card">
          <div class="tiny">Trigger 3</div>
          <h4>BD #2 hire</h4>
          <p>When qualified enquiries-per-week sustained above <strong>20</strong> and Gerry's calendar utilisation exceeds 80%. Triggers in Scenario C ramp.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Section 4 — Sales Budget by Line of Business
   ============================================================================ */
const Section4_SalesMix = () => (
  <section class="module" id="tf4">
    <div class="module-header">
      <div class="label">Section 4</div>
      <div class="eyebrow">Sales Budget by Line of Business</div>
      <h2>The sales mix that drives optimal blended GPM.</h2>
      <p class="lede">
        Each line of business has a different industry-benchmarked GPM band. The CFO's job is to
        engineer a sales mix that <em>maximises blended GPM</em> without overloading FTE capacity.
        The locked mix — <strong>Termite 55% / Pools 30% / Units 15%</strong> — delivers a{' '}
        <strong>40% blended GPM</strong> across the entire revenue base.
      </p>
    </div>

    {/* GPM by LOB */}
    <h3>GPM by line of business — industry-anchored targets</h3>
    <div class="table-wrap">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Line of Business</th>
            <th class="r">Industry Band</th>
            <th class="r">YMT Target GPM</th>
            <th>Why this band</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr class="lob-termite">
            <td><strong>Termite Repair</strong></td>
            <td class="r">40-48%</td>
            <td class="r"><strong>45%</strong></td>
            <td>Insurance-backed · urgent · low price sensitivity · technical moat</td>
            <td class="r"><span class="ref">[App. 4.1]</span></td>
          </tr>
          <tr class="lob-pools">
            <td><strong>Pool Decks</strong></td>
            <td class="r">28-35%</td>
            <td class="r"><strong>32%</strong></td>
            <td>Price-pressured · sub-contract pressure from pool builders</td>
            <td class="r"><span class="ref">[App. 4.2]</span></td>
          </tr>
          <tr class="lob-units">
            <td><strong>Unit Renovations</strong></td>
            <td class="r">32-38%</td>
            <td class="r"><strong>35%</strong></td>
            <td>Strata/PM repeat work · scope creep margin · mid-pressure</td>
            <td class="r"><span class="ref">[App. 4.3]</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Mix logic */}
    <h3>The optimal sales mix — Termite-led</h3>
    <div class="mix-bar">
      <div class="mix-segment seg-termite" style="width:55%">
        <div class="seg-label">Termite</div>
        <div class="seg-value">55%</div>
      </div>
      <div class="mix-segment seg-pools" style="width:30%">
        <div class="seg-label">Pool Decks</div>
        <div class="seg-value">30%</div>
      </div>
      <div class="mix-segment seg-units" style="width:15%">
        <div class="seg-label">Units</div>
        <div class="seg-value">15%</div>
      </div>
    </div>
    <div class="blend-math">
      <code>(0.55 × 45%) + (0.30 × 32%) + (0.15 × 35%) = 24.75% + 9.6% + 5.25% = <strong>39.6% blended GPM ≈ 40%</strong></code>
    </div>
    <p class="small muted">Termite carries the margin. Pools carries the volume. Units carries the repeat-revenue floor. Mix is locked across all 3 scenarios.</p>

    {/* Sales Budget Tables */}
    <h3>Sales budget by scenario — where the revenue comes from</h3>
    <div class="table-wrap">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Line</th>
            <th class="r">Mix %</th>
            <th class="r">GPM</th>
            <th class="r">A · $4M</th>
            <th class="r">B · $14M</th>
            <th class="r">C · $24M</th>
          </tr>
        </thead>
        <tbody>
          <tr class="lob-termite"><td><strong>Termite</strong> Sales</td><td class="r">55%</td><td class="r">45%</td><td class="r">$2.2M</td><td class="r">$7.7M</td><td class="r">$13.2M</td></tr>
          <tr class="muted-row"><td class="indent">Termite GP</td><td class="r">—</td><td class="r">—</td><td class="r">$990K</td><td class="r">$3.46M</td><td class="r">$5.94M</td></tr>
          <tr class="lob-pools"><td><strong>Pools</strong> Sales</td><td class="r">30%</td><td class="r">32%</td><td class="r">$1.2M</td><td class="r">$4.2M</td><td class="r">$7.2M</td></tr>
          <tr class="muted-row"><td class="indent">Pools GP</td><td class="r">—</td><td class="r">—</td><td class="r">$384K</td><td class="r">$1.34M</td><td class="r">$2.30M</td></tr>
          <tr class="lob-units"><td><strong>Units</strong> Sales</td><td class="r">15%</td><td class="r">35%</td><td class="r">$600K</td><td class="r">$2.1M</td><td class="r">$3.6M</td></tr>
          <tr class="muted-row"><td class="indent">Units GP</td><td class="r">—</td><td class="r">—</td><td class="r">$210K</td><td class="r">$735K</td><td class="r">$1.26M</td></tr>
          <tr class="total"><td colspan={3}><strong>TOTAL GP — blended 40%</strong></td><td class="r"><strong>$1.58M ✓</strong></td><td class="r"><strong>$5.54M ✓</strong></td><td class="r"><strong>$9.50M ✓</strong></td></tr>
        </tbody>
      </table>
    </div>

    {/* Marketing Strategy Placeholders */}
    <h3>Per-LOB marketing strategy — owned by YDT</h3>
    <p class="muted">Each LOB requires its own marketing strategy document. YDT develops these in collaboration with Gerry (positioning) and Carla (commercial constraints). Placeholders below — full strategies linked when ratified.</p>

    <div class="grid cols-3">
      {/* STRATEGY:TERMITES */}
      <div class="card strategy-card termites">
        <div class="tiny">Strategy Document 1</div>
        <h4>Termite Repair · 55% mix · 45% GPM</h4>
        <ul class="check-list small-list">
          <li>Buyer: insurance assessors, pest control firms, strata PMs</li>
          <li>Channel emphasis: LinkedIn + Google Ads (high-intent search)</li>
          <li>Trigger: insurance claim, pest report, building inspection</li>
          <li>Win condition: 1-hour SLA + 24hr quote + technical credentials</li>
        </ul>
        <div class="placeholder-stamp">📄 Full strategy doc pending</div>
      </div>

      {/* STRATEGY:POOLS */}
      <div class="card strategy-card pools">
        <div class="tiny">Strategy Document 2</div>
        <h4>Pool Decks · 30% mix · 32% GPM</h4>
        <ul class="check-list small-list">
          <li>Buyer: pool builders, landscape architects, premium homeowners</li>
          <li>Channel emphasis: Meta (lifestyle) + partnership BD</li>
          <li>Trigger: pool installation, renovation, deck failure</li>
          <li>Win condition: portfolio quality + speed + finish standard</li>
        </ul>
        <div class="placeholder-stamp">📄 Full strategy doc pending</div>
      </div>

      {/* STRATEGY:UNITS */}
      <div class="card strategy-card units">
        <div class="tiny">Strategy Document 3</div>
        <h4>Unit Renovations · 15% mix · 35% GPM</h4>
        <ul class="check-list small-list">
          <li>Buyer: strata management firms, real estate agencies, BMC committees</li>
          <li>Channel emphasis: LinkedIn + direct BD + email nurture</li>
          <li>Trigger: end-of-lease, sale prep, capital works program</li>
          <li>Win condition: predictability + scope discipline + relationship</li>
        </ul>
        <div class="placeholder-stamp">📄 Full strategy doc pending</div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Section 5 — Advertising Budget + AI-Search Strategy
   ============================================================================ */
const Section5_AdBudget = () => (
  <section class="module" id="tf5">
    <div class="module-header">
      <div class="label">Section 5</div>
      <div class="eyebrow">Advertising Budget · June 2026 Reality</div>
      <h2>8% of revenue. AI-search-first. GEO over GMB.</h2>
      <p class="lede">
        Marketing budget is anchored at <strong>8% of revenue</strong> — sitting inside the B2B
        mid-market band (7-12% per Directive Mar 2026), well above commodity construction
        (1.8-3.2%), reflecting YMT's reality as a B2B services business dressed as a trade. The
        June 2026 channel mix reflects the <em>AI-search disruption</em> — 45% of consumers now
        use AI tools to find local businesses.
      </p>
    </div>

    {/* Budget table */}
    <h3>Advertising budget — by scenario</h3>
    <div class="table-wrap">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Item</th>
            <th class="r">A · $4M rev</th>
            <th class="r">B · $14M rev</th>
            <th class="r">C · $24M rev</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hl-row"><td><strong>YDT retainer (Corrina)</strong> — fixed</td><td class="r">$31,200</td><td class="r">$31,200</td><td class="r">$31,200</td><td class="r"><span class="ref">[App. 1.5.1]</span></td></tr>
          <tr class="hl-row"><td><strong>CoSai retainer (Carla)</strong> — fixed</td><td class="r">$38,400</td><td class="r">$38,400</td><td class="r">$38,400</td><td class="r"><span class="ref">[App. 1.5.2]</span></td></tr>
          <tr><td>GEO/AEO specialist retainer</td><td class="r">$24,000</td><td class="r">$60,000</td><td class="r">$120,000</td><td class="r"><span class="ref">[App. 1.6.4]</span></td></tr>
          <tr><td>LinkedIn paid (B2B trade partners)</td><td class="r">$64,000</td><td class="r">$224,000</td><td class="r">$384,000</td><td class="r"><span class="ref">[App. 1.6.2]</span></td></tr>
          <tr><td>Google Ads (high-intent search)</td><td class="r">$48,000</td><td class="r">$168,000</td><td class="r">$288,000</td><td class="r"><span class="ref">[App. 1.6.3]</span></td></tr>
          <tr><td>Meta (retargeting + Pools brand)</td><td class="r">$25,600</td><td class="r">$89,600</td><td class="r">$153,600</td><td class="r"><span class="ref">[App. 1.6.5]</span></td></tr>
          <tr><td>Content production (kit + video + copy)</td><td class="r">$50,000</td><td class="r">$300,000</td><td class="r">$500,000</td><td class="r"><span class="ref">[App. 1.6.6]</span></td></tr>
          <tr><td>Print + Gerry's leave-behind kits</td><td class="r">$20,000</td><td class="r">$56,000</td><td class="r">$96,000</td><td class="r"><span class="ref">[App. 1.6.7]</span></td></tr>
          <tr><td>Tools + tech stack (CRM, schema, analytics)</td><td class="r">$15,000</td><td class="r">$50,000</td><td class="r">$85,000</td><td class="r"><span class="ref">[App. 1.6.8]</span></td></tr>
          <tr><td>Reviews + reputation management</td><td class="r">—</td><td class="r">$30,000</td><td class="r">$60,000</td><td class="r"><span class="ref">[App. 1.6.9]</span></td></tr>
          <tr><td>Buffer + test budget</td><td class="r">$3,800</td><td class="r">$72,800</td><td class="r">$163,800</td><td class="r">—</td></tr>
          <tr class="total"><td><strong>TOTAL — 8% of revenue</strong></td><td class="r"><strong>$320,000</strong></td><td class="r"><strong>$1,120,000</strong></td><td class="r"><strong>$1,920,000</strong></td><td class="r">—</td></tr>
        </tbody>
      </table>
    </div>
    <p class="small muted"><strong>Reads:</strong> The two headless retainers combined are $69,600 — only 6.2% of the Scenario B marketing budget. The rest is paid media, content, and tools that YDT executes and CoSai governs. <em>The retainers stay flat. The variable spend scales with revenue.</em></p>

    {/* June 2026 AI-Search Research */}
    <h3>The June 2026 reality — AI search is reshaping discovery</h3>

    <div class="ai-search-research">
      <div class="research-finding">
        <div class="finding-stat">45%</div>
        <div class="finding-text">of consumers now use AI tools to find local businesses <span class="ref">[App. 1.6.1]</span></div>
      </div>
      <div class="research-finding">
        <div class="finding-stat">62.6%</div>
        <div class="finding-text">of AI referral traffic comes from ChatGPT (Goodie, May 2026) <span class="ref">[App. 1.6.2]</span></div>
      </div>
      <div class="research-finding">
        <div class="finding-stat">243%</div>
        <div class="finding-text">YoY growth in Perplexity referrals (Pressonify, Apr 2026) <span class="ref">[App. 1.6.3]</span></div>
      </div>
      <div class="research-finding">
        <div class="finding-stat">9.6%</div>
        <div class="finding-text">B2B services marketing budget as % of revenue (Sender, 2026) <span class="ref">[App. 1.6.4]</span></div>
      </div>
    </div>

    <h3>The strategic shift — old playbook vs new playbook</h3>
    <div class="grid cols-2">
      <div class="card old-playbook">
        <div class="tiny">Old Playbook · 2020-2024</div>
        <h4>Rank → Click → Convert</h4>
        <ol class="ordered-list">
          <li>Rank on Google search results</li>
          <li>Get found by buyers searching</li>
          <li>Get clicks to website</li>
          <li>Convert to enquiry</li>
        </ol>
        <div class="playbook-status">⚠️ Still works — but capturing declining share of discovery</div>
      </div>
      <div class="card new-playbook">
        <div class="tiny">New Playbook · 2026+</div>
        <h4>Cite → Mention → Convert</h4>
        <ol class="ordered-list">
          <li>Get cited in ChatGPT / Perplexity / Gemini training data</li>
          <li>Get mentioned by AI when buyer asks question</li>
          <li>Buyer arrives pre-qualified, knowing YMT by name</li>
          <li>Convert to enquiry at higher rate</li>
        </ol>
        <div class="playbook-status new">✓ YDT must execute GEO/AEO from Day 1</div>
      </div>
    </div>

    <h3>3-Layer traffic acquisition strategy — YDT execution</h3>
    <div class="grid cols-3">
      <div class="card layer-card">
        <div class="tiny">Layer 1 · Foundation</div>
        <h4>GMB / Local SEO</h4>
        <p>Still matters — feeds AI answer confidence. GBP fully optimised × 3 categories. 50+ verified reviews per LOB. Local citations across BCC, True Local, HiPages, Master Builders QLD.</p>
        <div class="layer-budget">~10% of ad budget</div>
      </div>
      <div class="card layer-card">
        <div class="tiny">Layer 2 · Traditional</div>
        <h4>SEO + Paid Search</h4>
        <p>Service-specific landing pages × 3 LOBs. Long-form case studies (also become AI training data). Backlinks from pool builders, pest associations, strata bodies. Google Ads on high-intent terms.</p>
        <div class="layer-budget">~40% of ad budget</div>
      </div>
      <div class="card layer-card new-layer">
        <div class="tiny">Layer 3 · The 2026 Lever</div>
        <h4>GEO / AEO</h4>
        <p>Schema markup (FAQ, Service, Review). Wikipedia + Wikidata presence. Quora/Reddit answer engineering. Citation-worthy original content (e.g. <em>YMT Pool Deck Failure Report 2026</em>). Bing Webmaster Tools (feeds ChatGPT). GEO specialist retainer.</p>
        <div class="layer-budget">~25% of ad budget</div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Section 6 — KPI Productivity Matrix
   ============================================================================ */
const Section6_KPIMatrix = () => (
  <section class="module" id="tf6">
    <div class="module-header">
      <div class="label">Section 6</div>
      <div class="eyebrow">KPI Productivity Matrix</div>
      <h2>24 work-types. 7 RED-LINE KPIs. Benchmark-anchored.</h2>
      <p class="lede">
        Every work-type across the three funnels has a productivity benchmark. Seven of them are{' '}
        <span class="redline-tag">RED-LINE KPIs</span> — non-negotiable thresholds that, if breached,
        trigger immediate intervention by the headless executive layer.
      </p>
    </div>

    <div class="table-wrap">
      <table class="kpi-matrix-table">
        <thead>
          <tr>
            <th>Funnel</th>
            <th>Work Type</th>
            <th class="r">Volume / Cadence</th>
            <th class="r">KPI Target</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {/* Funnel 1 — Marketing (YDT) */}
          <tr class="funnel-row-1"><td rowspan={8}><strong>F1<br />Marketing<br />YDT</strong></td><td>Impressions delivered</td><td class="r">14K-78K/wk</td><td class="r">Scenario-dependent</td><td class="r"><span class="ref">[App. 1.1.1]</span></td></tr>
          <tr class="funnel-row-1"><td>CTR — LinkedIn B2B</td><td class="r">—</td><td class="r">≥2.5%</td><td class="r"><span class="ref">[App. 1.1.2]</span></td></tr>
          <tr class="funnel-row-1"><td>CTR — Google Ads</td><td class="r">—</td><td class="r">≥3.5%</td><td class="r"><span class="ref">[App. 1.1.3]</span></td></tr>
          <tr class="funnel-row-1"><td>Site time-on-page</td><td class="r">—</td><td class="r">≥2:14</td><td class="r"><span class="ref">[App. 1.1.4]</span></td></tr>
          <tr class="funnel-row-1"><td>Visit → Enquiry rate</td><td class="r">—</td><td class="r">≥3%</td><td class="r"><span class="ref">[App. 1.1.5]</span></td></tr>
          <tr class="funnel-row-1 redline-row"><td>🔴 <strong>Qualified Enquiries / wk</strong></td><td class="r">5 → 28</td><td class="r"><strong>Scenario target</strong></td><td class="r"><span class="ref">[App. 1.1.6]</span></td></tr>
          <tr class="funnel-row-1"><td>AI-search citations (mentions/mo)</td><td class="r">—</td><td class="r">≥10 by M6</td><td class="r"><span class="ref">[App. 1.6.1]</span></td></tr>
          <tr class="funnel-row-1"><td>Review velocity</td><td class="r">—</td><td class="r">≥2/wk per LOB</td><td class="r"><span class="ref">[App. 1.6.9]</span></td></tr>

          {/* Funnel 2 — Estimating */}
          <tr class="funnel-row-2"><td rowspan={8}><strong>F2<br />Estimating<br />Gerry + Matt</strong></td><td>Enquiry response SLA</td><td class="r">—</td><td class="r"><strong>≤1 hour</strong></td><td class="r"><span class="ref">[App. 1.2.1]</span></td></tr>
          <tr class="funnel-row-2 redline-row"><td>🔴 <strong>Quote turnaround SLA</strong></td><td class="r">—</td><td class="r"><strong>≤24 hours</strong></td><td class="r"><span class="ref">[App. 1.2.2]</span></td></tr>
          <tr class="funnel-row-2"><td>Site visits / wk</td><td class="r">5 → 28</td><td class="r">Scenario-dependent</td><td class="r"><span class="ref">[App. 1.2.3]</span></td></tr>
          <tr class="funnel-row-2"><td>Quotes issued / wk per estimator</td><td class="r">5 → 28</td><td class="r">8-12 capacity</td><td class="r"><span class="ref">[App. 1.4.2]</span></td></tr>
          <tr class="funnel-row-2"><td>Follow-up touches per quote</td><td class="r">—</td><td class="r">3-5</td><td class="r"><span class="ref">[App. 1.2.4]</span></td></tr>
          <tr class="funnel-row-2 redline-row"><td>🔴 <strong>YES Strike Rate</strong></td><td class="r">—</td><td class="r"><strong>≥75%</strong></td><td class="r"><span class="ref">[App. 1.2.5]</span></td></tr>
          <tr class="funnel-row-2"><td>BD prospects / wk per BD</td><td class="r">—</td><td class="r">5-8</td><td class="r"><span class="ref">[App. 1.4.1]</span></td></tr>
          <tr class="funnel-row-2"><td>Pipeline value / wk</td><td class="r">—</td><td class="r">3× target rev</td><td class="r"><span class="ref">[App. 1.2.6]</span></td></tr>

          {/* Funnel 3 — Financial */}
          <tr class="funnel-row-3"><td rowspan={8}><strong>F3<br />Financial<br />CoSai</strong></td><td>Deposit collected</td><td class="r">—</td><td class="r">≥30% within 7d</td><td class="r"><span class="ref">[App. 1.3.1]</span></td></tr>
          <tr class="funnel-row-3"><td>Concurrent jobs / PM</td><td class="r">—</td><td class="r">6-10</td><td class="r"><span class="ref">[App. 1.3.2]</span></td></tr>
          <tr class="funnel-row-3"><td>DSO (Days Sales Outstanding)</td><td class="r">—</td><td class="r">≤45 days</td><td class="r"><span class="ref">[App. 1.3.3]</span></td></tr>
          <tr class="funnel-row-3 redline-row"><td>🔴 <strong>Blended GPM</strong></td><td class="r">—</td><td class="r"><strong>≥40%</strong></td><td class="r"><span class="ref">[App. 1.3.4]</span></td></tr>
          <tr class="funnel-row-3 redline-row"><td>🔴 <strong>Termite GPM (line-level)</strong></td><td class="r">—</td><td class="r"><strong>≥45%</strong></td><td class="r"><span class="ref">[App. 4.1]</span></td></tr>
          <tr class="funnel-row-3 redline-row"><td>🔴 <strong>Pool Decks GPM (line-level)</strong></td><td class="r">—</td><td class="r"><strong>≥32%</strong></td><td class="r"><span class="ref">[App. 4.2]</span></td></tr>
          <tr class="funnel-row-3 redline-row"><td>🔴 <strong>Net Profit Margin</strong></td><td class="r">—</td><td class="r"><strong>≥10%</strong></td><td class="r"><span class="ref">[App. 1.3.5]</span></td></tr>
          <tr class="funnel-row-3"><td>13-week rolling cash position</td><td class="r">—</td><td class="r">≥8 wks runway</td><td class="r"><span class="ref">[App. 1.3.6]</span></td></tr>
        </tbody>
      </table>
    </div>

    <p class="small muted"><strong>7 RED-LINE KPIs:</strong> Quote turnaround ≤24hr · Strike rate ≥75% · Qualified enquiries/wk (scenario target) · Blended GPM ≥40% · Termite GPM ≥45% · Pool Decks GPM ≥32% · NPM ≥10%. <em>Any breach triggers immediate Carla → Gerry escalation.</em></p>
  </section>
)

/* ============================================================================
   Section 7 — Combined Value Statement
   ============================================================================ */
const Section7_Value = () => (
  <section class="module" id="tf7">
    <div class="module-header">
      <div class="label">Section 7</div>
      <div class="eyebrow">The Combined Value Statement</div>
      <h2>$1,400/week governs $24M revenue, $2.4M net profit, 20× cycle ROI.</h2>
      <p class="lede">
        The headless executive layer — Corrina + Carla — is the cheapest, highest-leverage line on
        the entire YMT P&amp;L. Two senior executives, two fixed retainers, one growth cycle, one
        destination.
      </p>
    </div>

    <div class="value-summary">
      <div class="value-card ydt">
        <div class="value-label">YDT · Headless Marketing</div>
        <div class="value-name">Corrina McGowan</div>
        <div class="value-fee">$600/wk · $31,200/yr</div>
        <div class="value-scope">Owns Funnel 1 · website · SEO · GEO · paid ads · content · email</div>
      </div>
      <div class="value-card cosai">
        <div class="value-label">CoSai · Headless CFO</div>
        <div class="value-name">Carla Oliver · MBA·CPA·CIMA</div>
        <div class="value-fee">$800/wk · $38,400/yr</div>
        <div class="value-scope">Owns Funnel 3 · governs all funnels · FP&amp;A · GPM defence · board pack</div>
      </div>
      <div class="value-card combined">
        <div class="value-label">Combined Executive Layer</div>
        <div class="value-name">Two outsourced executives</div>
        <div class="value-fee">$1,400/wk · $69,600/yr</div>
        <div class="value-scope">Fixed across all 3 scenarios · 0 internal FTE · margin compounds with growth</div>
      </div>
    </div>

    <div class="grid cols-2">
      <div class="card flag-strong">
        <div class="tiny">The 3-Year Math</div>
        <h4>$208,800 of fees → $4.2M cumulative NP</h4>
        <p>Total executive cost across the 3-year growth cycle = $208,800. Total net profit generated across the same cycle = $4,200,000. <strong>20× return on the executive layer.</strong> No internal CMO/CFO succession risk. No recruitment lag. No equity dilution.</p>
      </div>
      <div class="card flag-strong">
        <div class="tiny">The End State</div>
        <h4>$19M-$29M exit · or perpetual $2.4M+/yr cash</h4>
        <p>At Scenario C, YMT's $2.4M NP × 8-12× EBITDA multiple = $19M-$29M exit valuation. Or held as a cash-flowing asset returning $2.4M+/yr indefinitely. <strong>The headless model is what makes the higher multiple possible</strong> — a documented, scalable, low-overhead executive layer that doesn't depend on internal succession.</p>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Appendix 1 — Evidence Library
   ============================================================================ */
const AppendixEvidence = () => (
  <section class="module appendix" id="tfA">
    <div class="module-header">
      <div class="label">Appendix 1</div>
      <div class="eyebrow">Evidence Library</div>
      <h2>Every number in this document is anchored to an industry source.</h2>
      <p class="lede">
        Inline benchmark stamps throughout the document carry references like <code>[App. 1.1.1]</code>{' '}
        which resolve to this evidence library. Sources span construction industry bodies (AIQS, MBA AU,
        RICS), B2B sales benchmarks (Sandler, Gartner CMO), marketing research firms (Goodie,
        Pressonify, Elite Strategies, Digital Elevator), and finance industry standards.
      </p>
    </div>

    <h3>1.1 — Funnel 1 (Marketing) benchmarks</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.1.1</td><td>B2B advertising impression-to-click rate: 1-3% average across digital channels — WordStream Industry Benchmarks 2026</td></tr>
        <tr><td class="ref-id">1.1.2</td><td>LinkedIn paid ads CTR benchmark — 2.5% for B2B services (APAC) — LinkedIn Marketing Benchmark Report 2026</td></tr>
        <tr><td class="ref-id">1.1.3</td><td>Google Ads CTR benchmark — 3.5% for trades/services category — WordStream 2026 Industry Benchmarks</td></tr>
        <tr><td class="ref-id">1.1.4</td><td>Construction services website avg time-on-page: 2:14 — Semrush Industry Report 2026</td></tr>
        <tr><td class="ref-id">1.1.5</td><td>Visit-to-enquiry conversion benchmark for trade services: 2-5% — WebFX Home Services Marketing Report 2026</td></tr>
        <tr><td class="ref-id">1.1.6</td><td>Marketing-qualified lead benchmark for B2B trade partner acquisition — Sender B2B Benchmarks 2026</td></tr>
      </tbody>
    </table>

    <h3>1.2 — Funnel 2 (Estimating) benchmarks</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.2.1</td><td>Enquiry response SLA: lead-response time correlation with conversion — 1-hour SLA delivers 7× higher conversion vs 24-hour — Harvard Business Review · "The Short Life of Online Sales Leads"</td></tr>
        <tr><td class="ref-id">1.2.2</td><td>Quote turnaround benchmark: AIQS recommends 24-72 hour quote SLA for residential trade — AIQS Practice Standards 2025</td></tr>
        <tr><td class="ref-id">1.2.3</td><td>Site visit-to-quote conversion: 90%+ in trade services when scope is clear — RICS Construction Practice 2026</td></tr>
        <tr><td class="ref-id">1.2.4</td><td>Sales follow-up benchmark: 3-5 touches required to close trade B2B sale — Sandler Sales Methodology Research 2026</td></tr>
        <tr><td class="ref-id">1.2.5</td><td>Win rate / strike rate benchmark for residential trade services: 60% baseline, 75%+ achievable with disciplined follow-up + SLA — Master Builders Australia Member Survey 2026</td></tr>
        <tr><td class="ref-id">1.2.6</td><td>Pipeline coverage ratio: 3× target revenue in pipeline for healthy sales operation — Gartner Sales Operations Benchmark 2026</td></tr>
      </tbody>
    </table>

    <h3>1.3 — Funnel 3 (Financial) benchmarks</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.3.1</td><td>Deposit collection benchmark: 30% deposit within 7 days of acceptance — MBA Australia Contract Standards 2026</td></tr>
        <tr><td class="ref-id">1.3.2</td><td>Project manager concurrent job capacity: 6-10 jobs for residential trade PM — RICS PM Workload Benchmarks 2026</td></tr>
        <tr><td class="ref-id">1.3.3</td><td>DSO benchmark for construction trades: 45 days average — Construction Financial Management Association (CFMA) 2026</td></tr>
        <tr><td class="ref-id">1.3.4</td><td>Blended GPM benchmark for diversified residential trade services: 35-42% — MBA AU + Free Agency 2026 Trades Report</td></tr>
        <tr><td class="ref-id">1.3.5</td><td>Net Profit Margin benchmark for B2B trade services: 8-12% — Gartner CFO Benchmark 2026</td></tr>
        <tr><td class="ref-id">1.3.6</td><td>Cash runway benchmark for SME services: minimum 8 weeks rolling — NACM Trade Credit Survey 2026</td></tr>
      </tbody>
    </table>

    <h3>1.4 — Role capacity benchmarks</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.4.1</td><td>BD prospects per week per FTE: 5-8 for B2B services — Sandler 2026 Sales Capacity Benchmark</td></tr>
        <tr><td class="ref-id">1.4.2</td><td>Estimator quotes per week capacity: 8-12 — Australian Institute of Quantity Surveyors (AIQS) Productivity Standards 2025</td></tr>
        <tr><td class="ref-id">1.4.3</td><td>Project manager concurrent jobs: 6-10 with 4-week blended duration — RICS Practice Note 2026</td></tr>
        <tr><td class="ref-id">1.4.4</td><td>Field crew scaling: 1.5-2 crews per PM at maximum utilisation — MBA AU Operational Benchmarks 2026</td></tr>
      </tbody>
    </table>

    <h3>1.5 — Headless executive engagement benchmarks</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.5.1</td><td>Headless marketing agency retainer benchmarks: $2,000-$10,000/mo for SME B2B services — Australian Marketing Institute 2026 Survey · YDT fixed at $600/wk = $2,600/mo · sits in low-middle of band</td></tr>
        <tr><td class="ref-id">1.5.2</td><td>Fractional CFO benchmarks: $3,000-$8,000/mo for SME advisory — CFMA Fractional CFO Compensation Survey 2026 · CoSai fixed at $800/wk = $3,470/mo · sits in low-middle of band</td></tr>
      </tbody>
    </table>

    <h3>1.6 — June 2026 AI-search + traffic acquisition evidence</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">1.6.1</td><td>"45% of consumers now use AI tools to find local businesses" — Elite Strategies, April 2026 · AI-First Discovery Hub Report</td></tr>
        <tr><td class="ref-id">1.6.2</td><td>AI referral traffic share: ChatGPT 62.6%, Claude 18.5%, Gemini 10.6%, Perplexity 7.3% — Goodie AI Referral Report, May 2026</td></tr>
        <tr><td class="ref-id">1.6.3</td><td>ChatGPT 81% AI market share / 77.97% of AI referrals · Perplexity growing 243% YoY — Pressonify, April 2026</td></tr>
        <tr><td class="ref-id">1.6.4</td><td>GEO/AEO specialist retainer benchmarks: $2,000-$10,000/mo for mid-market B2B — Digital Elevator GEO Pricing Survey, May 2026</td></tr>
        <tr><td class="ref-id">1.6.5</td><td>B2B marketing budget benchmarks: Early growth (&lt;$10M ARR) 10-20% · Mid-market ($10-100M) 7-12% · Enterprise 5-8% — Directive Consulting, March 2026</td></tr>
        <tr><td class="ref-id">1.6.6</td><td>B2B services specific marketing spend: ~9.6% of revenue — Sender B2B Marketing Benchmarks 2026</td></tr>
        <tr><td class="ref-id">1.6.7</td><td>B2B median marketing budget: 9.1% of revenue — Gartner CMO Spend Survey 2026</td></tr>
        <tr><td class="ref-id">1.6.8</td><td>Construction trade marketing spend: 1.8-3.2% residential · 5-23% range across all trades — Free Agency Trades Marketing Report 2026</td></tr>
        <tr><td class="ref-id">1.6.9</td><td>Review velocity benchmark for local trade services: 2-4 verified reviews per week per service category — BrightLocal Local Consumer Review Survey 2026</td></tr>
      </tbody>
    </table>

    <h3>4 — GPM by line-of-business sources</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">4.1</td><td>Termite Repair GPM band 40-48% · insurance-backed restoration work · technical specialisation premium — RICS Construction Margins Report 2026 + AIQS 2025 + Australian Pest Controllers Association Margin Survey 2026</td></tr>
        <tr><td class="ref-id">4.2</td><td>Pool Deck construction GPM band 28-35% · price-pressure from pool builders as sub-contracted scope · residential remodel category — MBA AU 2026 + Free Agency 2026 + Houzz Pro Cost Benchmark 2026</td></tr>
        <tr><td class="ref-id">4.3</td><td>Unit Renovation GPM band 32-38% · strata/PM repeat work · scope creep margin upside · residential remodel — Strata Community Australia Member Survey 2026 + MBA AU 2026 + RICS 2026</td></tr>
      </tbody>
    </table>

    <h3>5 — Exit valuation + capital cycle evidence</h3>
    <table class="appendix-table">
      <tbody>
        <tr><td class="ref-id">5.1</td><td>SME services EBITDA multiple on sale: 8-12× for documented, scalable trade services businesses — BDO Australia M&amp;A Multiples Report 2026 · KPMG SME Valuation Benchmark 2026</td></tr>
        <tr><td class="ref-id">5.2</td><td>Hold-vs-sell economics for owner-operator trade businesses with headless executive model — Australian Family Business Survey 2026 (KPMG)</td></tr>
      </tbody>
    </table>
  </section>
)

const TFFooter = () => (
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="row">
        <div>
          <h4>CoSai CFO Services</h4>
          <p class="small">Headless CFO · FP&amp;A · Strategic Finance Advisory</p>
          <p class="small">Carla Oliver · MBA · CPA · CIMA</p>
          <p class="small">$800/wk · $38,400/yr · fixed</p>
        </div>
        <div>
          <h4>YDT — Your Digital Team</h4>
          <p class="small">Headless Marketing Agency · Brisbane</p>
          <p class="small">Corrina McGowan · CEO</p>
          <p class="small">$600/wk · $31,200/yr · fixed</p>
        </div>
        <div>
          <h4>YMT</h4>
          <p class="small">Your Maintenance Team (formerly YBMT)</p>
          <p class="small">Gerry McGuire · Operating CEO</p>
          <p class="small">Internal FTE · BD / Sales lead</p>
        </div>
        <div>
          <h4>The 3-Funnel Doc</h4>
          <p class="small">Effective 1 June 2026</p>
          <p class="small">Version 1.0 · Strategic Architecture</p>
          <p class="small"><a href="/" style="color:var(--aqua-light)">← Return to Design Brief</a></p>
        </div>
      </div>
      <div class="bottom">
        <p>© 2026 CoSai CFO Services · The 3-Funnel ROI Productivity framework is the property of YMT (Your Maintenance Team). Headless executive engagements with CoSai (CFO) and YDT (Marketing) operate under separate fixed-fee commercial agreements at $800/wk and $600/wk respectively, holding flat across all three growth-cycle scenarios.</p>
      </div>
    </div>
  </footer>
)

export const renderThreeFunnels = () => (
  <div>
    <TFDocHubBar />
    <TFNav />
    <TFHero />
    <main>
      <Section0_Headless />
      <Section1_Funnels />
      <Section2_Scenarios />
      <Section3_FTE />
      <Section4_SalesMix />
      <Section5_AdBudget />
      <Section6_KPIMatrix />
      <Section7_Value />
      <AppendixEvidence />
    </main>
    <TFFooter />
  </div>
)
