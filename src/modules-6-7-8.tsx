/* ============================================================================
   Module 6 — Measurement Spine (Lead/Lag KPIs + funnel benchmarks)
   Module 7 — Interactive Dashboard (Chart.js illustrative target model)
   Module 8 — Commercial Architecture ($10K settlement + $600/wk + sign-off)
   ============================================================================ */

const Module6 = () => (
  <section class="module" id="m6">
    <div class="module-header">
      <div class="label">Module 6</div>
      <div class="eyebrow">Measurement Spine</div>
      <h2>Lead indicators that move every week. Lag indicators that move every quarter.</h2>
      <p class="lede">
        The CFO's golden rule: if the only number you watch is revenue, you find out you're missing the plan <em>after</em> you've already missed it. This module gives YDT and Gerry a separated <strong>lead/lag</strong> framework — leading indicators (activity, pipeline) that reveal trouble inside <strong>seven days</strong>, and lagging indicators (revenue, GPM, partner count) that confirm whether the strategy is actually landing.
      </p>
    </div>

    <h3>The Lead / Lag KPI framework</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Type</th>
            <th>Cadence</th>
            <th>Owner</th>
            <th class="r">Y1 Target</th>
            <th>Trigger if missed</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Outreach attempts</td><td><span class="pill lead">Lead</span></td><td>Weekly</td><td>Gerry</td><td class="r">5 / week</td><td>Re-block calendar Monday</td></tr>
          <tr><td class="b">First conversations</td><td><span class="pill lead">Lead</span></td><td>Weekly</td><td>Gerry</td><td class="r">2 / week</td><td>Review outreach quality</td></tr>
          <tr><td class="b">Discovery meetings booked</td><td><span class="pill lead">Lead</span></td><td>Weekly</td><td>Gerry</td><td class="r">1 / week</td><td>Conversation→meeting script review</td></tr>
          <tr><td class="b">Trial jobs offered</td><td><span class="pill lead">Lead</span></td><td>Weekly</td><td>Gerry</td><td class="r">0.6 / week avg</td><td>Commercial terms review</td></tr>
          <tr><td class="b">Trial jobs completed on spec</td><td><span class="pill lag">Lag</span></td><td>Monthly</td><td>Gerry + Ops</td><td class="r">≥85% on-spec</td><td>Quality intervention — pause new trials</td></tr>
          <tr><td class="b">New active partners signed</td><td><span class="pill lag">Lag</span></td><td>Monthly</td><td>Gerry</td><td class="r">1.5 / month avg</td><td>Funnel diagnosis: which stage broke?</td></tr>
          <tr><td class="b">Active partners (cumulative)</td><td><span class="pill lag">Lag</span></td><td>Monthly</td><td>Carla</td><td class="r">18 by 31 May 2027</td><td>Strategic review with CoSai</td></tr>
          <tr><td class="b">Jobs per active partner per quarter</td><td><span class="pill lag">Lag</span></td><td>Quarterly</td><td>Gerry</td><td class="r">≥2.5</td><td>Partner-success program activated</td></tr>
          <tr><td class="b">Revenue (rolling 3-mo)</td><td><span class="pill lag">Lag</span></td><td>Monthly</td><td>Carla</td><td class="r">$540K / month avg Y1</td><td>Mix &amp; pricing review</td></tr>
          <tr><td class="b">Gross profit margin (blended)</td><td><span class="pill lag">Lag</span></td><td>Monthly</td><td>Carla</td><td class="r">32% Y1 / 34% Y2</td><td>Line-by-line GPM diagnostic</td></tr>
          <tr><td class="b">Net profit margin</td><td><span class="pill lag">Lag</span></td><td>Quarterly</td><td>Carla</td><td class="r">6% Y1 / 10% Y2</td><td>Overhead &amp; pricing review</td></tr>
          <tr><td class="b">Marketing cost per partner acquired</td><td><span class="pill lag">Lag</span></td><td>Quarterly</td><td>YDT + Carla</td><td class="r">≤$1,200</td><td>Channel mix re-allocation</td></tr>
        </tbody>
      </table>
    </div>

    <h3>B2B funnel benchmarks — stage-by-stage conversion</h3>
    <div class="grid cols-3">
      <div class="card info">
        <div class="tiny">Stage 1 → 2</div>
        <h4>Outreach → Conversation</h4>
        <p><strong>Benchmark: 40%</strong></p>
        <p class="small">If &lt;30%: outreach lists are wrong, message is wrong, or both. Review ICP filter before adding volume.</p>
      </div>
      <div class="card info">
        <div class="tiny">Stage 2 → 3</div>
        <h4>Conversation → Meeting</h4>
        <p><strong>Benchmark: 50%</strong></p>
        <p class="small">If &lt;40%: Gerry's discovery script isn't surfacing pain or value early enough. Review script in monthly cadence.</p>
      </div>
      <div class="card info">
        <div class="tiny">Stage 3 → 4</div>
        <h4>Meeting → Trial offer</h4>
        <p><strong>Benchmark: 60%</strong></p>
        <p class="small">If &lt;50%: commercial framing isn't landing. Review trial structure (scope, price, risk-share).</p>
      </div>
      <div class="card info">
        <div class="tiny">Stage 4 → 5</div>
        <h4>Trial offered → Trial accepted &amp; completed</h4>
        <p><strong>Benchmark: 75%</strong> offered → accepted · <strong>70%</strong> accepted → completed on spec</p>
        <p class="small">If &lt;60% on-spec: an operations problem, not a sales problem. Pause new trials, fix delivery.</p>
      </div>
      <div class="card info">
        <div class="tiny">Stage 5 → 6</div>
        <h4>Trial complete → 2nd job booked (active)</h4>
        <p><strong>Benchmark: 70%</strong></p>
        <p class="small">If &lt;50%: post-trial follow-up is broken. This is the single highest-leverage stage in the funnel.</p>
      </div>
      <div class="card flag">
        <div class="tiny">Compound</div>
        <h4>Top-of-funnel → Active partner</h4>
        <p><strong>End-to-end: ~6.3%</strong></p>
        <p class="small">480 prospects in → 30 active partners out (24-month cumulative). Every stage matters.</p>
      </div>
    </div>

    <h3>Kill criteria — when CoSai recommends a strategic pause</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Trigger</th>
            <th>Diagnosis window</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Fewer than 4 partners signed by 31 Aug 2026 (end of fiscal Q1)</td><td>Within 14 days</td><td>Joint Carla + Gerry + Corrina review. Re-baseline targets or escalate intervention.</td></tr>
          <tr><td class="b">Termite GPM below 33% for two consecutive months</td><td>Within 30 days</td><td>Line-level pricing review — adjust trade-partner mix or input pricing.</td></tr>
          <tr><td class="b">Trial-complete-on-spec drops below 70%</td><td>Immediate</td><td>Pause new trial commitments. Quality remediation before adding partner volume.</td></tr>
          <tr><td class="b">Gerry weekly outreach &lt;3 for two consecutive weeks</td><td>Within 7 days</td><td>Capacity intervention — either workload re-design or hire decision brought forward.</td></tr>
          <tr><td class="b">Blended GPM below 30% at 6-month mark</td><td>Within 30 days</td><td>Full mix and pricing review. CoSai re-engages on advisory basis.</td></tr>
          <tr><td class="b">Cash buffer &lt;6 weeks operating expense</td><td>Immediate</td><td>Liquidity intervention. CoSai re-engages for treasury action.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout">
      <div class="eyebrow">CFO Note</div>
      <h3>Why lead indicators carry more strategic weight than lag indicators</h3>
      <p>Lag indicators are the scoreboard. Lead indicators are the gameplay. If Gerry runs 5 outreaches, 2 conversations, 1 meeting <em>every week</em> (with a trial offer roughly every fortnight), the lag indicators take care of themselves. The role of YDT and Carla is to make sure the <strong>lead activity</strong> never stalls — and to surface the problem in a 7-day window if it does, not a 90-day one.</p>
    </div>
  </section>
)

const Module7 = () => (
  <section class="module" id="m7">
    <div class="module-header">
      <div class="label">Module 7</div>
      <div class="eyebrow">Interactive Dashboard · Illustrative Target Model</div>
      <h2>What the destination looks like, modelled month by month.</h2>
      <p class="lede">
        This is an <strong>illustrative target model</strong> — not actual performance data. It's the picture YDT will populate from real CRM and finance numbers, monthly. The shape of these curves is the strategic intent: a B2B partner ramp that compounds, a revenue curve that respects sales-cycle reality, a GPM line that climbs as the termite mix takes hold. Hover any chart for detail.
      </p>
    </div>

    <div class="grid cols-2">
      <div class="card chart-card">
        <div class="tiny">Chart 1 of 5 · Lag</div>
        <h4>Revenue ramp — 24-month target</h4>
        <p class="small">$3.5M baseline → $6.5M Y1 → $10M Y2. Notice the Q1–Q2 lag while pipeline fills, then the compounding effect once 18 partners are signed.</p>
        <div class="chart-wrap"><canvas id="chart-revenue"></canvas></div>
      </div>
      <div class="card chart-card">
        <div class="tiny">Chart 2 of 5 · Lead</div>
        <h4>Partner pipeline — funnel waterfall</h4>
        <p class="small">480 prospects → 192 conversations → 96 meetings → 58 offers → 43 completed → 30 active partners (24-month cumulative).</p>
        <div class="chart-wrap"><canvas id="chart-funnel"></canvas></div>
      </div>
      <div class="card chart-card">
        <div class="tiny">Chart 3 of 5 · Lag</div>
        <h4>Cumulative active partners</h4>
        <p class="small">The compound curve. Concentration over breadth: 18 by end of Y1, 30 by end of Y2 — each one delivering recurring volume.</p>
        <div class="chart-wrap"><canvas id="chart-partners"></canvas></div>
      </div>
      <div class="card chart-card">
        <div class="tiny">Chart 4 of 5 · Lag</div>
        <h4>Gross profit margin — blended &amp; by line</h4>
        <p class="small">Blended GPM climbs from 25% → 32% → 34% as termite mix grows. Termite is the margin engine; pool decks the volume base.</p>
        <div class="chart-wrap"><canvas id="chart-gpm"></canvas></div>
      </div>
      <div class="card chart-card span-2">
        <div class="tiny">Chart 5 of 5 · Strategic Mix</div>
        <h4>Y2 revenue mix — by product line &amp; by region</h4>
        <p class="small">Termite Repair 55% / Pool Decks 30% / Unit Renos 15%. Brisbane 44% / Gold Coast 27.5% / Sunshine Coast 28.5%. Demand-weighted, not equal thirds.</p>
        <div class="chart-wrap chart-wrap-tall"><canvas id="chart-mix"></canvas></div>
      </div>
    </div>

    <h3>Dashboard specification — what YDT operates monthly</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Dashboard component</th>
            <th>Data source</th>
            <th>Update frequency</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">Pipeline funnel (live)</td><td>YBMT CRM (or spreadsheet substitute)</td><td>Weekly</td><td>Gerry posts, YDT publishes</td></tr>
          <tr><td class="b">Revenue ramp vs plan</td><td>Xero / accounting system</td><td>Monthly close</td><td>Carla → YDT</td></tr>
          <tr><td class="b">GPM by product line</td><td>Job cost ledger</td><td>Monthly</td><td>Carla → YDT</td></tr>
          <tr><td class="b">Active partner register</td><td>Partner CRM</td><td>Monthly</td><td>Gerry → YDT</td></tr>
          <tr><td class="b">Jobs per partner per quarter</td><td>Job register</td><td>Quarterly</td><td>Gerry → YDT</td></tr>
          <tr><td class="b">Geographic split</td><td>Job register (by postcode)</td><td>Quarterly</td><td>YDT</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout">
      <div class="eyebrow">Read the dashboard correctly</div>
      <h3>The curves above are <em>illustrative target shapes</em>, not forecasts</h3>
      <p>This dashboard exists to give Gerry and Corrina a <strong>visual definition of "on track"</strong>. When YDT populates it with real CRM and finance data monthly, deviations from these curves are the signal — not the absolute values. If real partners-acquired is tracking 30% below the target curve at month 4, that's a Q1 intervention trigger (see Module 6 kill criteria). The dashboard's job is to make deviation visible, fast.</p>
    </div>
  </section>
)

const Module8 = () => (
  <section class="module" id="m8">
    <div class="module-header">
      <div class="label">Module 8</div>
      <div class="eyebrow">Commercial Architecture</div>
      <h2>Closing the back-account. Opening the ongoing scope. Sign-off.</h2>
      <p class="lede">
        This module formalises three things: the <strong>$10K back-account settlement</strong> YBMT owes YDT for prior work; the <strong>$600/week ongoing operating scope</strong> that YDT will run from sign-off forward; and the <strong>three-party sign-off block</strong> that makes this brief contractually binding between CoSai, YBMT and YDT.
      </p>
    </div>

    <h3>1. The $10K back-account settlement (CoSai → YBMT → YDT)</h3>
    <div class="card dark">
      <div class="tiny">Settlement letter · attached to this brief</div>
      <h4>From CoSai CFO Services to Your Digital Team — re: YBMT outstanding account</h4>
      <p>Corrina,</p>
      <p>On behalf of YBMT (Gerry McGuire, CEO), and acting as appointed CFO advisor, this letter confirms the following commercial position with respect to the outstanding $10,000 balance owed by YBMT to YDT in respect of the marketing infrastructure deliverables already produced (22 assets across brand, website, lead magnet, sales, paid ads, email, partnerships, print, video and execution calendar).</p>
      <ol>
        <li><strong>Acknowledgement.</strong> YBMT acknowledges the $10,000 balance as a valid, payable debt for work delivered. The $15,000 already paid is accepted as covering the underlying infrastructure build.</li>
        <li><strong>Settlement.</strong> On signature of this Design Brief by both Gerry McGuire (YBMT) and Corrina McGowan (YDT), YBMT will settle the $10,000 in full within seven (7) business days by bank transfer to the YDT operating account on file.</li>
        <li><strong>Asset disposition.</strong> The 22 previously produced assets remain hosted, owned and operated by YDT as part of the ongoing commercial relationship (Section 2 below). The strategic re-purposing of those assets — from B2C lead-generation to B2B partner-acquisition support — is governed by this brief, in particular Modules 4 and 5.</li>
        <li><strong>Scope closure for CoSai.</strong> Settlement of this balance, combined with sign-off of this brief, closes CoSai's scope of work. CoSai is not a continuing service provider on this engagement. Re-engagement is by separate agreement only.</li>
        <li><strong>Ongoing relationship.</strong> The commercial relationship between YBMT and YDT from sign-off forward is governed exclusively by the $600/week ongoing scope set out in Section 2 of this Module.</li>
      </ol>
      <p>This letter resolves the open balance and formally transitions the marketing function to its operational footing under YDT.</p>
      <p style="margin-top:1.2rem"><strong>Carla</strong><br/><span class="small">Strategic Lead · CoSai CFO Services</span><br/><span class="small">On behalf of YBMT · 1 June 2026</span></p>
    </div>

    <h3>2. The $600/week ongoing YDT operating scope</h3>
    <p>From sign-off forward, YDT operates the marketing function for YBMT under a flat <strong>$600/week retainer ($31,200 annualised)</strong> — significantly below the cost of an in-house junior marketer, and structured around what actually moves the partner-acquisition needle. The scope below is what's included; anything outside is by separate proposal.</p>
    <div class="grid cols-2">
      <div class="card success">
        <div class="tiny">Included · weekly</div>
        <h4>Channel operations</h4>
        <ul>
          <li>LinkedIn ad layer running (target: pool builders, PMs, insurance assessors) — campaign monitoring, creative refresh, budget pacing</li>
          <li>LinkedIn organic — 2 posts/week from Gerry's profile (ghost-written by YDT)</li>
          <li>Email nurture sequences sending to partner-segmented lists</li>
          <li>Website &amp; landing-page uptime, content updates, lead routing into CRM</li>
        </ul>
      </div>
      <div class="card success">
        <div class="tiny">Included · monthly</div>
        <h4>Asset production &amp; dashboard</h4>
        <ul>
          <li>1 new case study (B2B partner result, written + designed)</li>
          <li>1 dashboard refresh (this site, Module 7) populated from real data</li>
          <li>Email newsletter to active &amp; prospect partner list</li>
          <li>Performance summary email to Gerry &amp; Carla</li>
        </ul>
      </div>
      <div class="card success">
        <div class="tiny">Included · quarterly</div>
        <h4>Strategic review</h4>
        <ul>
          <li>Joint review session (Gerry + Corrina, Carla optional)</li>
          <li>Mix &amp; channel performance diagnostic</li>
          <li>Next-quarter campaign plan</li>
          <li>Kill-criteria audit (Module 6)</li>
        </ul>
      </div>
      <div class="card warning">
        <div class="tiny">Not included · by separate proposal</div>
        <h4>Out of scope at $600/week</h4>
        <ul>
          <li>New video production (additional 16:9 or 9:16 assets)</li>
          <li>Trade-show stand design or event collateral</li>
          <li>Net-new website builds or major re-platforming</li>
          <li>Paid-media spend (this is platform fees paid by YBMT directly)</li>
          <li>PR retainers, third-party media relations</li>
        </ul>
      </div>
    </div>

    <h3>3. Commercial summary table</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Party</th>
            <th class="r">Amount</th>
            <th>Timing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="b">YBMT prior-period infrastructure (paid)</td><td>YBMT → YDT</td><td class="r">$15,000</td><td>Already paid</td><td><span class="pill lag">Closed</span></td></tr>
          <tr><td class="b">YBMT outstanding balance (settlement)</td><td>YBMT → YDT</td><td class="r">$10,000</td><td>7 days from sign-off</td><td><span class="pill lead">Action on sign</span></td></tr>
          <tr><td class="b">YDT ongoing operating retainer</td><td>YBMT → YDT</td><td class="r">$600 / week</td><td>From sign-off, ongoing</td><td><span class="pill lead">Activates on sign</span></td></tr>
          <tr><td class="b">Annualised YDT retainer (12 months)</td><td>YBMT → YDT</td><td class="r">$31,200 / year</td><td>Year 1 forward</td><td><span class="pill lead">Activates on sign</span></td></tr>
          <tr><td class="b">LinkedIn ad spend (platform direct, capped)</td><td>YBMT → LinkedIn</td><td class="r">$500 / month ($6,000 / year)</td><td>From sign-off, ongoing</td><td><span class="pill lead">YBMT-direct</span></td></tr>
          <tr><td class="b">CoSai CFO advisory fee (this brief)</td><td>YBMT → CoSai</td><td class="r">Per separate engagement letter</td><td>On sign-off</td><td><span class="pill lag">Closes scope</span></td></tr>
          <tr class="total"><td>Total Y1 marketing investment</td><td>YBMT total spend</td><td class="r">$47,200</td><td>Y1 ($10K settlement + $31.2K retainer + $6K ad spend)</td><td>—</td></tr>
        </tbody>
      </table>
    </div>

    <h3>4. Sign-off block</h3>
    <p>By signing below, the three parties confirm:</p>
    <ul>
      <li>The strategic framework set out in Modules 1–7 is accepted as the operating model for the next 24 months.</li>
      <li>The commercial architecture in this Module 8 is accepted as the binding financial arrangement.</li>
      <li>CoSai's engagement closes on full settlement of the $10,000 and on countersignature of this brief.</li>
      <li>YDT's $600/week scope activates from the date of the last signature below.</li>
      <li>Gerry McGuire (YBMT) carries the commercial-function operating cadence set out in Module 3 from sign-off forward.</li>
    </ul>

    <div class="grid cols-3">
      <div class="signoff signed">
        <div class="signoff-brand">
          <img src="/static/brand/cosai-logo.png" alt="CoSai CFO Services" class="signoff-logo" />
        </div>
        <div class="tiny">For CoSai CFO Services</div>
        <h4>Carla</h4>
        <p class="small">Strategic Lead · CoSai CFO Services</p>
        <div class="sig-block">
          <img src="/static/brand/carla-signature.png" alt="Carla — signature" class="sig-image" />
          <div class="sig-line"></div>
          <div class="sig-row">
            <span>Signed · Carla</span>
            <span>Date: 1 June 2026</span>
          </div>
        </div>
      </div>
      <div class="signoff">
        <div class="signoff-brand">
          <img src="/static/brand/ybmt-logo.png" alt="Your Building &amp; Maintenance Team" class="signoff-logo" />
        </div>
        <div class="tiny">For YBMT</div>
        <h4>Gerry McGuire</h4>
        <p class="small">CEO · Your Building &amp; Maintenance Team</p>
        <div class="sig-block">
          <div class="sig-line"></div>
          <div class="sig-row">
            <span>Signed</span>
            <span>Date: _____________</span>
          </div>
        </div>
      </div>
      <div class="signoff">
        <div class="signoff-brand">
          <div class="ydt-placeholder">YDT</div>
        </div>
        <div class="tiny">For YDT</div>
        <h4>Corrina McGowan</h4>
        <p class="small">CEO · Your Digital Team</p>
        <div class="sig-block">
          <div class="sig-line"></div>
          <div class="sig-row">
            <span>Signed</span>
            <span>Date: _____________</span>
          </div>
        </div>
      </div>
    </div>

    <div class="callout final">
      <div class="eyebrow">Brief closure</div>
      <h3>This is what CoSai builds. This is what YDT operates. This is what YBMT becomes.</h3>
      <p>CoSai's job ends here. From the moment all three signatures are on the page above, the operating responsibility for the $3.5M → $10M transformation sits with Gerry McGuire (commercial cadence, Module 3) and Corrina McGowan (marketing operation, Modules 4–5 + ongoing scope). The CFO will reappear quarterly for the strategic review session, and immediately if any of the kill criteria in Module 6 trigger. Otherwise — execute the plan.</p>
      <p style="margin-top:1rem"><strong>Effective: 1 June 2026</strong> · <strong>Destination: 31 May 2028</strong> · <strong>Domain: cosaiybmtpool.org</strong></p>
    </div>
  </section>
)

export const renderModules678 = () => (
  <>
    <Module6 />
    <Module7 />
    <Module8 />
  </>
)
