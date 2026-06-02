import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

/* ============================================================================
   Re-usable presentational components
   ============================================================================ */

const Hero = () => (
  <section class="hero">
    <div class="hero-inner">
      <div class="eyebrow">CoSai CFO Services · Design Brief</div>
      <h1>
        From <em>$3.5M</em> to <em>$10M</em>.<br />
        A B2B growth strategy for YBMT.
      </h1>
      <p class="hero-sub">
        A CFO-engineered marketing-mix design brief from <strong style="color:var(--cream)">CoSai CFO Services</strong> to <strong style="color:var(--cream)">Your Digital Team (YDT)</strong> — front-loading the strategic assets, operating cadence, partner acquisition framework and measurement spine required to transform YBMT (Your Building &amp; Maintenance Team) from $3.5M / 25% GPM / 3% NPM into $10M / 34% GPM / 10% NPM across Pool Decks, Termite Damage Repair and Unit Renovations in Brisbane, Gold Coast and Sunshine Coast.
      </p>

      <div class="hero-brandbar">
        <img src="/static/brand/ybmt-logo.png" alt="Your Building &amp; Maintenance Team" class="ybmt-mark" />
        <div class="brandbar-line">The client this brief is built for</div>
      </div>

      <div class="hero-meta">
        <div class="item"><div class="l">Prepared by</div><div class="v">Carla · CoSai CFO Services</div></div>
        <div class="item"><div class="l">Prepared for</div><div class="v">Corrina McGowan · YDT CEO</div></div>
        <div class="item">
          <div class="l">Approver</div>
          <div class="v approver-block">
            <img src="/static/brand/gerry-photo.png" alt="Gerry McGuire" class="gerry-avatar" />
            <span>Gerry McGuire · YBMT CEO</span>
          </div>
        </div>
        <div class="item"><div class="l">Effective</div><div class="v">1 June 2026</div></div>
      </div>
    </div>
  </section>
)

const Nav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai CFO Services" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">YBMT $10M Design Brief · prepared for YDT</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#m1">1. Summary</a>
        <a href="#m2">2. Architecture</a>
        <a href="#m3">3. Gerry's Cadence</a>
        <a href="#m4">4. Mix</a>
        <a href="#m5">5. Assets</a>
        <a href="#m6">6. KPIs</a>
        <a href="#m7">7. Dashboard</a>
        <a href="#m8">8. Commercial</a>
      </nav>
    </div>
  </header>
)

/* ============================================================================
   Module 1 — Executive Summary + Scope Boundary
   ============================================================================ */
const Module1 = () => (
  <section class="module" id="m1">
    <div class="module-header">
      <div class="label">Module 1</div>
      <div class="eyebrow">Executive Summary</div>
      <h2>The strategic shift in one page.</h2>
      <p class="lede">
        YBMT's current marketing infrastructure was built for a <em>B2C luxury consumer</em> launch in Pool Decks. The CFO has rebriefed the strategy as <em>B2B trade-to-trade</em> across three product lines and three regions. This design brief replaces the prior assumption and front-loads the assets required to execute the new strategy. CoSai CFO Services delivers this brief. YDT operates it.
      </p>
    </div>

    <div class="grid cols-3">
      <div class="stat-block navy">
        <div class="label">Current State · Y0</div>
        <div class="value">$3.5M</div>
        <div class="delta">25% GPM · 3% NPM · 0 active partners</div>
      </div>
      <div class="stat-block aqua">
        <div class="label">Year 1 Realistic · May 27</div>
        <div class="value">$6.5M</div>
        <div class="delta">32% GPM · 6% NPM · 18 partners</div>
      </div>
      <div class="stat-block green">
        <div class="label">Year 2 Destination · May 28</div>
        <div class="value">$10.0M</div>
        <div class="delta">34% GPM · 10% NPM · 30 partners</div>
      </div>
    </div>

    <h3>The five strategic decisions in this brief</h3>
    <div class="grid cols-2">
      <div class="card flag">
        <div class="tiny">Decision 1</div>
        <h4>B2B-primary, B2C-secondary</h4>
        <p>YBMT acquires <em>partners</em> (pool builders, pest control firms, insurance assessors, property managers, real estate agencies) rather than acquiring <em>customers</em> directly. Walk-in homeowner work is taken when it appears but is not invested-in.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Decision 2</div>
        <h4>Concentration over breadth</h4>
        <p>Pursue the <em>top 25% of partner targets</em> per segment — large pool builders, large pest control firms, large PM agencies — rather than 44 small partners. 18 concentrated partners in Year 1 → 30 in Year 2.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Decision 3</div>
        <h4>Termite-led product mix (55%)</h4>
        <p>Termite Repair leads the mix at 55% of revenue because of structural margin (38% GPM), urgent buying behaviour, and Brisbane's housing-stock-driven demand. Pool Decks 30%, Unit Renos 15%.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Decision 4</div>
        <h4>Demand-weighted regional split</h4>
        <p>Brisbane 44% · Gold Coast 28.5% · Sunshine Coast 27.5%. Equal regional thirds is mathematically suboptimal — Brisbane is where the largest pest, strata and PM markets actually exist.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Decision 5</div>
        <h4>Honest two-year ramp</h4>
        <p>$10M is achieved in <em>Year 2</em>, not Year 1, because Gerry McGuire is solo BD without a team. Year 1 lands $6.5M booked with a $10M+ exit run-rate. The brief commits to the honest curve.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Decision 6</div>
        <h4>One scorecard, weekly</h4>
        <p>Gerry reports a 5-metric lead-indicator scorecard every Friday: prospects contacted, conversations held, meetings booked, trial jobs offered, trial jobs completed. The CFO board reviews monthly.</p>
      </div>
    </div>

    <h3>Scope handoff — CoSai exits, YDT operates</h3>
    <div class="handoff">
      <div class="col exit">
        <div class="tiny">CoSai CFO Services</div>
        <h4>Scope: complete on acceptance</h4>
        <ul class="check-list">
          <li>Strategic financial architecture (3×3 matrix)</li>
          <li>Gerry McGuire Sales Operating System</li>
          <li>B2B marketing mix per buyer segment (7Ps)</li>
          <li>Asset specifications &amp; handoff inventory</li>
          <li>Lead / Lag KPI framework</li>
          <li>Interactive performance dashboard</li>
          <li>YDT commercial agreement scaffold</li>
        </ul>
        <p class="small muted"><em>Scope complete on sign-off below.</em></p>
      </div>
      <div class="arrow"><i class="fa-solid fa-arrow-right"></i></div>
      <div class="col enter">
        <div class="tiny">Your Digital Team (YDT)</div>
        <h4>Scope: ongoing operation</h4>
        <ul class="check-list">
          <li>Receive and host all CoSai-built assets</li>
          <li>Maintain partner-facing website &amp; LinkedIn</li>
          <li>Produce monthly case studies from completed jobs</li>
          <li>Run LinkedIn ad layer ($500/mo cap) for partner targeting</li>
          <li>Quarterly partner newsletter</li>
          <li>Populate &amp; report the CFO dashboard monthly</li>
          <li>Operate at <strong>$600/week ongoing</strong></li>
        </ul>
        <p class="small muted"><em>Effective on commercial agreement signature.</em></p>
      </div>
    </div>

    <div class="signoff">
      <div class="eyebrow">Sign-off Block</div>
      <h3 style="margin:0">Acceptance &amp; Trigger</h3>
      <p class="small muted">Signature of this design brief closes CoSai CFO Services' scope and triggers the separate ongoing commercial agreement between YBMT and YDT. The $10K outstanding YDT infrastructure account is acknowledged for settlement on signature.</p>
      <div class="signoff-grid">
        <div class="sig-block">
          <div class="role">Approved by · CFO</div>
          <div class="sig-line">Signature &amp; Date</div>
          <div class="name" style="margin-top:6px">Carla</div>
          <div class="title">CoSai CFO Services · Strategic Lead</div>
        </div>
        <div class="sig-block">
          <div class="role">Approved by · Client</div>
          <div class="sig-line">Signature &amp; Date</div>
          <div class="name" style="margin-top:6px">Gerry McGuire</div>
          <div class="title">CEO · YBMT (Your Building &amp; Maintenance Team)</div>
        </div>
        <div class="sig-block">
          <div class="role">Approved by · Operating Agency</div>
          <div class="sig-line">Signature &amp; Date</div>
          <div class="name" style="margin-top:6px">Corrina McGowan</div>
          <div class="title">CEO · Your Digital Team (YDT)</div>
        </div>
      </div>
    </div>
  </section>
)

/* ============================================================================
   Module 2 — $10M Financial Architecture
   ============================================================================ */
const Module2 = () => (
  <section class="module" id="m2">
    <div class="module-header">
      <div class="label">Module 2</div>
      <div class="eyebrow">Financial Architecture</div>
      <h2>The $10M model — 3 products × 3 regions.</h2>
      <p class="lede">
        From a standing start of 0 active partners on 1 June 2026, the model engineers $10M of annual booked revenue by 31 May 2028 (Year 2). Year 1 lands $6.5M booked with a $10M+ exit run-rate. The mix is <em>Termite-led at 55%</em>, geographically <em>weighted to Brisbane at 44%</em>, and partner counts are <em>concentrated</em> rather than fragmented.
      </p>
    </div>

    <h3>Current state → Year 1 → Year 2 bridge</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th class="r">Current (Y0) · Jun 26</th>
            <th class="r">Year 1 · May 27</th>
            <th class="r">Year 2 · May 28</th>
            <th class="r">Year 1 → 2 Gap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Revenue</td><td class="r">$3.50M</td><td class="r">$6.50M</td><td class="r">$10.00M</td><td class="r">+$3.50M</td></tr>
          <tr><td class="b">Weighted GPM</td><td class="r">25%</td><td class="r">32%</td><td class="r">34%</td><td class="r">+2 pts</td></tr>
          <tr><td class="b">Gross Profit ($)</td><td class="r">$0.88M</td><td class="r">$2.08M</td><td class="r">$3.40M</td><td class="r">+$1.32M</td></tr>
          <tr><td class="b">NPM</td><td class="r">3%</td><td class="r">6%</td><td class="r">10%</td><td class="r">+4 pts</td></tr>
          <tr><td class="b">Net Profit ($)</td><td class="r">$0.11M</td><td class="r">$0.39M</td><td class="r">$1.00M</td><td class="r">+$0.61M</td></tr>
          <tr><td class="b">Active partners</td><td class="r">0</td><td class="r">18</td><td class="r">30</td><td class="r">+12</td></tr>
          <tr class="total"><td>Cumulative GP delivery 24 months</td><td class="r" colspan="4">$5.48M</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Year 2 product mix — Termite-led, margin-engineered</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Product Line</th>
            <th class="r">% Mix</th>
            <th class="r">Revenue</th>
            <th class="r">GPM</th>
            <th class="r">GP $</th>
            <th class="r">Avg Job</th>
            <th class="r">Jobs/yr</th>
            <th class="r">Jobs/Partner</th>
            <th class="r">Partners</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Termite Damage Repair</td><td class="r">55%</td><td class="r">$5.50M</td><td class="r">38%</td><td class="r">$2.09M</td><td class="r">$25K</td><td class="r">220</td><td class="r">~12</td><td class="r">18</td></tr>
          <tr><td class="b">Pool Decks (B2B sub)</td><td class="r">30%</td><td class="r">$3.00M</td><td class="r">32%</td><td class="r">$0.96M</td><td class="r">$30K</td><td class="r">100</td><td class="r">~20</td><td class="r">5</td></tr>
          <tr><td class="b">Unit Renovations</td><td class="r">15%</td><td class="r">$1.50M</td><td class="r">22%</td><td class="r">$0.33M</td><td class="r">$15K</td><td class="r">100</td><td class="r">~14</td><td class="r">7</td></tr>
          <tr class="total"><td>Total · Year 2</td><td class="r">100%</td><td class="r">$10.0M</td><td class="r">33.8%</td><td class="r">$3.38M</td><td class="r"></td><td class="r">420</td><td class="r"></td><td class="r">30</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Year 2 regional split — demand-weighted, not equal thirds</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th class="r">Termite</th>
            <th class="r">Pool Decks</th>
            <th class="r">Unit Renos</th>
            <th class="r">Total $</th>
            <th class="r">% of Total</th>
            <th class="r">Partners</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Brisbane</td><td class="r">$2.75M</td><td class="r">$0.90M</td><td class="r">$0.75M</td><td class="r">$4.40M</td><td class="r">44.0%</td><td class="r">14</td></tr>
          <tr><td class="b">Gold Coast</td><td class="r">$1.10M</td><td class="r">$1.20M</td><td class="r">$0.45M</td><td class="r">$2.75M</td><td class="r">27.5%</td><td class="r">8</td></tr>
          <tr><td class="b">Sunshine Coast</td><td class="r">$1.65M</td><td class="r">$0.90M</td><td class="r">$0.30M</td><td class="r">$2.85M</td><td class="r">28.5%</td><td class="r">8</td></tr>
          <tr class="total"><td>Total</td><td class="r">$5.50M</td><td class="r">$3.00M</td><td class="r">$1.50M</td><td class="r">$10.0M</td><td class="r">100%</td><td class="r">30</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout">
      <div class="eyebrow">CFO Note</div>
      <h3>Why this mix &amp; geography is correct</h3>
      <p><strong>Termite leads (55%)</strong> because it has the highest sustainable GPM (38%), most fragmented competitive landscape (more partner targets), urgent buying behaviour (insurance-paid, time-pressured), and Brisbane's older housing stock is a structural demand engine.</p>
      <p><strong>Pool Decks (30%)</strong> capped at 30% because crew capacity for skilled deck carpentry is finite — adding more partners means longer lead times, not more revenue. Better to be the preferred sub for 5 large pool builders than a sub-par sub for 12.</p>
      <p><strong>Unit Renos (15%)</strong> sized for cashflow rather than margin — it complements termite (cross-sell on damaged units) but is structurally lower-margin and price-pressured by PMs.</p>
      <p><strong>Brisbane 44%</strong> because that's where the largest pest mgmt, strata and PM markets actually exist. Equal regional thirds would be CFO malpractice — forcing investment into Sunshine Coast unit renos (small market) while under-investing in Brisbane termite (huge market).</p>
    </div>

    <h3>Year 1 ramp from standing start</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th class="r">New Partners</th>
            <th class="r">Cumulative</th>
            <th class="r">Booked Revenue</th>
            <th class="r">Cumulative Booked</th>
            <th class="r">Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Jun 26</td><td class="r">1</td><td class="r">1</td><td class="r">$30K</td><td class="r">$30K</td><td class="r"><span class="tag grey">Foundation</span></td></tr>
          <tr><td>Jul 26</td><td class="r">2</td><td class="r">3</td><td class="r">$120K</td><td class="r">$150K</td><td class="r"><span class="tag grey">Foundation</span></td></tr>
          <tr><td>Aug 26</td><td class="r">2</td><td class="r">5</td><td class="r">$250K</td><td class="r">$400K</td><td class="r"><span class="tag grey">Foundation</span></td></tr>
          <tr><td>Sep 26</td><td class="r">2</td><td class="r">7</td><td class="r">$380K</td><td class="r">$780K</td><td class="r"><span class="tag aqua">Acceleration</span></td></tr>
          <tr><td>Oct 26</td><td class="r">2</td><td class="r">9</td><td class="r">$510K</td><td class="r">$1.29M</td><td class="r"><span class="tag aqua">Acceleration</span></td></tr>
          <tr><td>Nov 26</td><td class="r">1</td><td class="r">10</td><td class="r">$620K</td><td class="r">$1.91M</td><td class="r"><span class="tag aqua">Acceleration</span></td></tr>
          <tr><td>Dec 26</td><td class="r">1</td><td class="r">11</td><td class="r">$580K</td><td class="r">$2.49M</td><td class="r"><span class="tag grey">Seasonal dip</span></td></tr>
          <tr><td>Jan 27</td><td class="r">1</td><td class="r">12</td><td class="r">$650K</td><td class="r">$3.14M</td><td class="r"><span class="tag aqua">Acceleration</span></td></tr>
          <tr><td>Feb 27</td><td class="r">2</td><td class="r">14</td><td class="r">$700K</td><td class="r">$3.84M</td><td class="r"><span class="tag timber">Scaling</span></td></tr>
          <tr><td>Mar 27</td><td class="r">1</td><td class="r">15</td><td class="r">$780K</td><td class="r">$4.62M</td><td class="r"><span class="tag timber">Scaling</span></td></tr>
          <tr><td>Apr 27</td><td class="r">2</td><td class="r">17</td><td class="r">$870K</td><td class="r">$5.49M</td><td class="r"><span class="tag timber">Scaling</span></td></tr>
          <tr><td>May 27</td><td class="r">1</td><td class="r">18</td><td class="r">$1.01M</td><td class="r"><strong>$6.50M</strong></td><td class="r"><span class="tag green">Y1 Target Hit</span></td></tr>
          <tr class="total"><td>Year 1 Total</td><td class="r">18</td><td class="r">18</td><td class="r">$6.50M</td><td class="r">$6.50M</td><td class="r">$12M+ Y1 exit run-rate</td></tr>
        </tbody>
      </table>
    </div>

    <p class="small muted"><strong>Read:</strong> Year 1 booked revenue is $6.5M from a standing start. By May 2027, monthly run-rate is $1.0M+ (= $12M annualised). The $10M Year 2 destination is reached because Year 2 starts with mature partnerships flowing recurring jobs, not because new partner acquisition accelerates.</p>
  </section>
)

export default app

// Mount remaining sections from separate file
import { renderModules345 } from './modules-3-4-5'
import { renderModules678 } from './modules-6-7-8'

app.get('/', (c) => {
  return c.render(
    <div>
      <Nav />
      <Hero />
      <main>
        <Module1 />
        <Module2 />
        {renderModules345()}
        {renderModules678()}
      </main>
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="row">
            <div>
              <h4>CoSai CFO Services</h4>
              <p class="small">Strategic finance &amp; transformation advisory for SME growth.</p>
              <p class="small">Prepared by Carla · Strategic Lead</p>
            </div>
            <div>
              <h4>Your Digital Team (YDT)</h4>
              <p class="small">Headless marketing agency · Brisbane</p>
              <p class="small">Corrina McGowan · CEO</p>
              <p class="small"><a href="mailto:corrina@yourdigitalteam.com" style="color:var(--aqua-light)">corrina@yourdigitalteam.com</a></p>
            </div>
            <div>
              <h4>YBMT</h4>
              <p class="small">Your Building &amp; Maintenance Team</p>
              <p class="small">Gerry McGuire · CEO</p>
              <p class="small"><a href="https://ybmt.com.au" style="color:var(--aqua-light)">ybmt.com.au</a> · 1300 448 784</p>
            </div>
            <div>
              <h4>This Brief</h4>
              <p class="small">Effective 1 June 2026</p>
              <p class="small">Version 1.0 · CFO Design Brief</p>
              <p class="small">cosaiybmtpool.org</p>
            </div>
          </div>
          <div class="bottom">
            <p>© 2026 CoSai CFO Services · This design brief is the property of YBMT (Your Building &amp; Maintenance Team) on acceptance. CoSai CFO Services' scope is complete on sign-off. Ongoing operation is the responsibility of Your Digital Team (YDT) under a separate commercial agreement.</p>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
      <script src="/static/dashboard.js" defer></script>
    </div>
  )
})
