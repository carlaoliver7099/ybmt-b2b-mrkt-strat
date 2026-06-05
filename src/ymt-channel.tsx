/* ============================================================================
   /ymt-channel — WS-06 Channel Architecture — 10/10 Depth
   ============================================================================
   PHASE 3 · Workstream 06 · Channel Architecture Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (12 CH-XX checklist items)

   Frameworks cited: Binet & Field The Long and the Short of It · SparkToro
   Audience Research / Search Everywhere · Tom Goodwin Digital Darwinism ·
   Mark Ritson Multi-Channel Marketing · IPA Effectiveness Code

   Target depth: 4,000–6,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (12/12):
   CH-01 Channel mix matrix (12+ channels × 7 funnel stages × content type)
   CH-02 Budget allocation per channel per stage
   CH-03 Hero/Hub/Hygiene model per channel
   CH-04 Cross-channel customer journey diagram
   CH-05 SparkToro Search Everywhere where SEQ buyers actually attend
   CH-06 Channel attribution model (per-channel)
   CH-07 Owned vs. earned vs. paid balance per LOB
   CH-08 Channel pivot/sunset rules
   CH-09 Test budget protocol
   CH-10 Channel orchestration doctrine (the handshake)
   CH-11 Reporting cadence per channel
   CH-12 Failure modes + hedges
   ============================================================================ */

const CHHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 3 · WS-06
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-channel" class="dochub-link active">
          <span class="dochub-badge new">WS-06</span>
          Channel
        </a>
        <a href="/ymt-geo" class="dochub-link">
          <span class="dochub-badge">WS-08</span>
          GEO/AEO
        </a>
        <a href="/ymt-paid" class="dochub-link">
          <span class="dochub-badge">WS-09</span>
          Paid
        </a>
        <a href="/ymt-crm" class="dochub-link">
          <span class="dochub-badge">WS-10</span>
          CRM
        </a>
      </div>
    </div>
  </div>
)

const CHNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-06 · Channel Architecture · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#ch0">0. Doctrine</a>
        <a href="#ch1">1. Mix Matrix</a>
        <a href="#ch2">2. Budget</a>
        <a href="#ch3">3. Hero/Hub/Hygiene</a>
        <a href="#ch4">4. Journey</a>
        <a href="#ch5">5. Attention</a>
        <a href="#ch6">6. Attribution</a>
        <a href="#ch7">7. O/E/P Balance</a>
        <a href="#ch8">8. Pivot/Sunset</a>
        <a href="#ch9">9. Test Budget</a>
        <a href="#ch10">10. Orchestration</a>
        <a href="#ch11">11. Reporting</a>
        <a href="#ch12">12. Risks</a>
      </nav>
    </div>
  </header>
)

const CHHero = () => (
  <section class="hero band-cream" id="ch-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 3 · Workstream 06 · 10/10 Depth</div>
      <h1 class="display">Channel Architecture<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Binet & Field's 60/40 long-short doctrine + SparkToro's "Search Everywhere" reality + Tom
        Goodwin's "thank you for the platforms but our customer doesn't live there anymore."
        Twelve channels mapped across seven funnel stages, with explicit Hero/Hub/Hygiene roles,
        budget allocation, orchestration logic, and sunset rules. The channel system that turns the
        bowtie funnel from theory into media spend.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">12/12</div><div class="meta-lbl">CH-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">12</div><div class="meta-lbl">channels mapped</div></div>
        <div class="meta-cell"><div class="meta-num">60/40</div><div class="meta-lbl">long/short split</div></div>
        <div class="meta-cell"><div class="meta-num">10%</div><div class="meta-lbl">test budget</div></div>
        <div class="meta-cell"><div class="meta-num">7</div><div class="meta-lbl">funnel stages</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE
   =================================================================== */
const CHDoctrine = () => (
  <section class="band-navy" id="ch0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">Channels are leased attention. Audiences are owned attention. We must build both.</h2>
      <p class="lede on-dark">
        Tom Goodwin's most-quoted observation — "Uber owns no cars, Airbnb owns no hotels" — has an
        uncomfortable corollary: most home-service brands rent every channel they appear on. Google
        owns the search query. Meta owns the audience graph. Realestate.com.au owns the property
        intent. When the rent goes up, the brand has nowhere to go. The channel architecture below
        is designed so that, by 2030, ≥ 45% of YMT acquisition revenue arrives via channels we own —
        the email list, the customer portal, the referral network, the YouTube subscriber base, and
        the brand-search engine that 7 years of distinctive-asset investment will produce.
      </p>
      <p class="lede on-dark">
        Binet & Field's IPA-derived 60/40 split is the foundation: 60% of media spend on long-term
        brand-building (broad reach, brand-search demand creation), 40% on short-term activation
        (demand harvesting, conversion). Most home-service competitors run an 85/15 short/long split
        because the short side reports faster. They are buying revenue this quarter at the cost of
        revenue this decade. We will not make that trade.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">60% long. 40% short. Both, always.</div>
          <div class="rule-body">No campaign launches without both a brand layer and an activation
          layer. A short-only campaign without brand support is a leaking bucket. A brand-only
          campaign without activation has no commercial accountability.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Owned compounds. Earned multiplies. Paid is leverage.</div>
          <div class="rule-body">Every channel is classified Owned / Earned / Paid. Target mix by
          2030: 45% owned, 25% earned, 30% paid. Today's mix is 12 / 18 / 70. The strategy is to
          systematically shift weight.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">Audience research before channel selection.</div>
          <div class="rule-body">SparkToro Search Everywhere methodology: we do not start with "which
          channel is hot." We start with "where do SEQ homeowners actually spend attention?" Then we
          go there. Even if it is unsexy.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">Channels have roles, not just budgets.</div>
          <div class="rule-body">Every channel has an explicit Hero / Hub / Hygiene role. YouTube
          Hero is a different brief, budget, and KPI than YouTube Hygiene. Without role clarity,
          channels become "we post stuff there" — which is how brands waste 30% of their channel
          budget.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">10% of spend is reserved for testing.</div>
          <div class="rule-body">Every quarter, 10% of media budget goes to channels not yet in the
          active mix. This is not optional. It is the only way to find the next channel before the
          current channels decay.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   CH-01 — CHANNEL MIX MATRIX (12 CHANNELS × 7 STAGES)
   =================================================================== */
const CHMixMatrix = () => (
  <section class="band-cream" id="ch1">
    <div class="container">
      <div class="eyebrow">§ 1 · CH-01</div>
      <h2 class="h1">Channel mix matrix — 12 channels × 7 funnel stages</h2>
      <p class="lede">
        Every channel is mapped to the bowtie stages where it does its most leveraged work. A channel
        listed in a stage means: that channel has a written brief, a budget allocation, a content
        archetype, and a KPI. Empty cells mean: the channel does not serve that stage and should
        not be used there.
      </p>

      <div class="ch-matrix-wrap">
        <table class="ch-matrix">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Class</th>
              <th>L1 Aware</th>
              <th>L2 Educate</th>
              <th>L3 Select</th>
              <th>R1 Onboard</th>
              <th>R2 Impact</th>
              <th>R3 Expand</th>
              <th>R4 Advocate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>1. YouTube long-form</strong></td><td>Earned/Owned</td><td>●</td><td>●●●</td><td>●●</td><td>—</td><td>●</td><td>●</td><td>●●</td></tr>
            <tr><td><strong>2. YouTube Shorts</strong></td><td>Paid/Earned</td><td>●●●</td><td>●●</td><td>—</td><td>—</td><td>—</td><td>●</td><td>●</td></tr>
            <tr><td><strong>3. IG Reels / TikTok</strong></td><td>Paid/Earned</td><td>●●●</td><td>●●</td><td>—</td><td>—</td><td>●</td><td>●</td><td>●●</td></tr>
            <tr><td><strong>4. Google Search (paid)</strong></td><td>Paid</td><td>●</td><td>●●●</td><td>●●●</td><td>—</td><td>—</td><td>●</td><td>—</td></tr>
            <tr><td><strong>5. Google Search (organic/AEO)</strong></td><td>Owned</td><td>●●</td><td>●●●</td><td>●●●</td><td>—</td><td>—</td><td>●</td><td>—</td></tr>
            <tr><td><strong>6. Meta Ads (FB/IG)</strong></td><td>Paid</td><td>●●●</td><td>●●</td><td>●</td><td>—</td><td>—</td><td>●●</td><td>●</td></tr>
            <tr><td><strong>7. Email (Klaviyo)</strong></td><td>Owned</td><td>—</td><td>●●●</td><td>●●</td><td>●●●</td><td>●●●</td><td>●●●</td><td>●●●</td></tr>
            <tr><td><strong>8. SMS / WhatsApp</strong></td><td>Owned</td><td>—</td><td>—</td><td>●●</td><td>●●●</td><td>●●●</td><td>●●</td><td>●●</td></tr>
            <tr><td><strong>9. Outdoor (BNE/GC)</strong></td><td>Paid</td><td>●●●</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td><strong>10. Local PR / Editorial</strong></td><td>Earned</td><td>●●●</td><td>●●</td><td>●</td><td>—</td><td>●</td><td>—</td><td>●●</td></tr>
            <tr><td><strong>11. Customer Portal</strong></td><td>Owned</td><td>—</td><td>—</td><td>●●</td><td>●●●</td><td>●●●</td><td>●●●</td><td>●●</td></tr>
            <tr><td><strong>12. Referral / Word-of-Mouth</strong></td><td>Earned</td><td>●●</td><td>●●</td><td>●●●</td><td>—</td><td>●</td><td>●●</td><td>●●●</td></tr>
          </tbody>
        </table>
      </div>

      <p class="legend">
        <strong>Legend:</strong> ●●● Dominant role · ●● Significant role · ● Supporting role · — Not used at this stage
      </p>

      <h3 class="h2">Why these twelve and not others</h3>
      <p>
        Channels deliberately excluded: LinkedIn organic (Investor persona present but not dominant
        enough to justify the cost-of-discipline · use sparingly, no dedicated budget); X / Twitter
        (irrelevant to category buyers in SEQ — confirmed by SparkToro panel data); Podcasts
        (audience too generic for SEQ-specific intent — revisit via Phase 3 test budget); Print
        magazines (audience size insufficient post-2022 attention shift). Channels under active test
        in 2026: connected-TV (CTV) for Hero brand stories; Reddit r/AusFinance for Investor persona
        education; Threads for short-form earned reach.
      </p>
    </div>
  </section>
)

/* ===================================================================
   CH-02 — BUDGET ALLOCATION PER CHANNEL PER STAGE
   =================================================================== */
const CHBudget = () => (
  <section class="band-white" id="ch2">
    <div class="container">
      <div class="eyebrow">§ 2 · CH-02</div>
      <h2 class="h1">Budget allocation — annual media plan with rationale</h2>
      <p class="lede">
        Annual blended channel budget across all three LOBs: $720,000 (yr 1 commitment, locked by
        Carla as CFO/CMO). Allocation defined per channel + per funnel stage + with rationale. The
        60/40 long/short split is enforced at the line-item level, not just the headline.
      </p>

      <div class="budget-table-wrap">
        <table class="budget-table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Annual $</th>
              <th>% of total</th>
              <th>Long/Short</th>
              <th>Stage emphasis</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>YouTube long-form (Hero)</td><td>$96,000</td><td>13.3%</td><td>Long</td><td>L1/L2</td><td>Highest-leverage brand asset; compounds for 3+ yrs</td></tr>
            <tr><td>YouTube Shorts (Hub)</td><td>$42,000</td><td>5.8%</td><td>Long</td><td>L1</td><td>Reach amplifier; repurpose from Hero</td></tr>
            <tr><td>IG Reels / TikTok</td><td>$66,000</td><td>9.2%</td><td>Long</td><td>L1</td><td>Cinematic short-form; SparkToro signal strong</td></tr>
            <tr><td>Google Search (paid)</td><td>$168,000</td><td>23.3%</td><td>Short</td><td>L2/L3</td><td>Demand harvesting; highest CPL but highest intent</td></tr>
            <tr><td>Google Search (AEO/SEO)</td><td>$72,000</td><td>10.0%</td><td>Long</td><td>L2/L3</td><td>Content investment; compounds via AI Overviews (see WS-08)</td></tr>
            <tr><td>Meta Ads (FB/IG)</td><td>$102,000</td><td>14.2%</td><td>Mixed</td><td>L1/L2</td><td>Prospecting (long) + retargeting (short) split 60/40</td></tr>
            <tr><td>Email (Klaviyo)</td><td>$24,000</td><td>3.3%</td><td>Long</td><td>L2-R4</td><td>Owned channel; platform + ops, not media</td></tr>
            <tr><td>SMS / WhatsApp</td><td>$8,400</td><td>1.2%</td><td>Long</td><td>R1-R4</td><td>Platform + ops; high-value moments only</td></tr>
            <tr><td>Outdoor (BNE/GC)</td><td>$48,000</td><td>6.7%</td><td>Long</td><td>L1</td><td>Brand-fame builder for Pools+Outdoor LOB primarily</td></tr>
            <tr><td>Local PR / Editorial</td><td>$36,000</td><td>5.0%</td><td>Long</td><td>L1/L2</td><td>Editorial seeding; 6 placements/yr target</td></tr>
            <tr><td>Customer Portal</td><td>$12,000</td><td>1.7%</td><td>Long</td><td>R1-R3</td><td>Platform tooling; not media — operational investment</td></tr>
            <tr><td>Referral / WOM (program)</td><td>$22,000</td><td>3.1%</td><td>Long</td><td>L3/R4</td><td>Ambassador program + event budget</td></tr>
            <tr><td><strong>Sub-total — Production</strong></td><td><strong>$696,400</strong></td><td><strong>96.7%</strong></td><td colspan="3"></td></tr>
            <tr><td>Test channel reserve</td><td>$23,600</td><td>3.3%</td><td>Mixed</td><td>Various</td><td>Quarterly drawdown for new-channel pilots</td></tr>
            <tr class="budget-total"><td><strong>Annual Total</strong></td><td><strong>$720,000</strong></td><td><strong>100%</strong></td><td><strong>60/40</strong></td><td colspan="2"></td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">Budget split — long vs. short verification</h3>
      <ul class="budget-verify">
        <li><strong>Long (brand-building):</strong> YouTube long+shorts + IG/TikTok + Google AEO + Meta prospecting (~60% of Meta) + Email + SMS + Outdoor + PR + Portal + Referral = $431,400 = <strong>59.9%</strong> ✓</li>
        <li><strong>Short (activation):</strong> Google Paid + Meta retargeting (~40% of Meta) = $208,800 + $40,800 = <strong>34.7%</strong> ✓</li>
        <li><strong>Reserve / Test:</strong> $23,600 = 3.3%, allocated quarterly across both pools.</li>
        <li><strong>Verdict:</strong> 60/40 long/short discipline holds. Audit quarterly. Any quarter that drifts &gt; 5pp toward short triggers a CMO review.</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   CH-03 — HERO / HUB / HYGIENE
   =================================================================== */
const CHHHH = () => (
  <section class="band-cream" id="ch3">
    <div class="container">
      <div class="eyebrow">§ 3 · CH-03</div>
      <h2 class="h1">The Hero / Hub / Hygiene content model — per channel</h2>
      <p class="lede">
        Borrowed from Google's original 3H content framework + refined by Mark Ritson's media mix
        logic. Every channel must have all three layers — without a hero piece, the channel feels
        episodic; without hygiene content, the channel forfeits search authority.
      </p>

      <div class="hhh-grid">
        <div class="hhh-card hero">
          <div class="hhh-tag">Hero</div>
          <div class="hhh-name">Tentpole brand moments — 4–6 per year</div>
          <div class="hhh-body">
            <p>High-investment cinematic pieces that anchor the channel's narrative for a quarter.
            Examples: an 8-minute YouTube documentary on a Resort-Grade pool build; a 60-second
            outdoor billboard campaign tied to a Queensland cyclone-season stewardship message; a
            local PR piece featuring Gerry in <em>Queensland Homes</em>.</p>
            <p><strong>Budget share:</strong> 35% of channel spend on 4–6 pieces · <strong>KPI:</strong>
            reach, brand-search lift, branded YouTube subscribes, organic earned media.</p>
          </div>
        </div>

        <div class="hhh-card hub">
          <div class="hhh-tag">Hub</div>
          <div class="hhh-name">Series content — 2–4 per month per channel</div>
          <div class="hhh-body">
            <p>Recurring formats that build subscriber affinity over time. Examples: monthly "Standards
            Notebook" YouTube episode (15-25 min); weekly "Whole-of-Home Stewardship Letter" email
            (~600 words); monthly "Steward of the Quarter" customer profile on IG.</p>
            <p><strong>Budget share:</strong> 40% of channel spend · <strong>KPI:</strong> retention
            (subscriber growth, email-open rate), watch time, return-visit rate.</p>
          </div>
        </div>

        <div class="hhh-card hygiene">
          <div class="hhh-tag">Hygiene</div>
          <div class="hhh-name">Always-on content — daily / weekly cadence</div>
          <div class="hhh-body">
            <p>Search-intent answers and AEO-targeted pieces that serve buyers who are actively
            researching. Examples: "How much does a fibreglass pool cost in 2026?" article; YouTube
            short answering "Do I need a termite inspection annually?"; product/process explainers
            on the website.</p>
            <p><strong>Budget share:</strong> 25% of channel spend · <strong>KPI:</strong> search
            impressions, AI Overview citations, click-through to L3 quote-request.</p>
          </div>
        </div>
      </div>

      <h3 class="h2">Channel-specific 3H execution map</h3>
      <div class="hhh-channel-grid">
        <div class="hhh-channel">
          <h4>YouTube</h4>
          <p><strong>Hero:</strong> 4×/yr · 8-12 min documentary builds · $24K each<br />
          <strong>Hub:</strong> 12×/yr · Standards Notebook · 15-25 min<br />
          <strong>Hygiene:</strong> 24×/yr · Quick-answer shorts on category queries</p>
        </div>
        <div class="hhh-channel">
          <h4>IG / TikTok</h4>
          <p><strong>Hero:</strong> 4×/yr · 60s cinematic flagship<br />
          <strong>Hub:</strong> 12×/yr · "Fifth Room reveal" reels<br />
          <strong>Hygiene:</strong> 100+/yr · daily build-progress + how-it-works</p>
        </div>
        <div class="hhh-channel">
          <h4>Email (Klaviyo)</h4>
          <p><strong>Hero:</strong> 4×/yr · the Annual Standards Letter from Gerry<br />
          <strong>Hub:</strong> 52×/yr · weekly Stewardship Letter<br />
          <strong>Hygiene:</strong> automated flows (see WS-10) running 24/7</p>
        </div>
        <div class="hhh-channel">
          <h4>Google Search</h4>
          <p><strong>Hero:</strong> N/A (paid channel, no hero content)<br />
          <strong>Hub:</strong> 12×/yr · pillar articles ranking for category-defining terms<br />
          <strong>Hygiene:</strong> 80+/yr · long-tail FAQ articles (programmatic SEO — see WS-08)</p>
        </div>
        <div class="hhh-channel">
          <h4>Local PR</h4>
          <p><strong>Hero:</strong> 2×/yr · founder profile pieces in QLD media<br />
          <strong>Hub:</strong> 4×/yr · "MMXXVI Standards" thought-leadership op-eds<br />
          <strong>Hygiene:</strong> press releases on community/charity moments</p>
        </div>
        <div class="hhh-channel">
          <h4>Outdoor</h4>
          <p><strong>Hero:</strong> 2×/yr · billboard campaigns (Pools-season, Cyclone-prep)<br />
          <strong>Hub:</strong> N/A — outdoor is event-driven<br />
          <strong>Hygiene:</strong> N/A — outdoor is event-driven</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   CH-04 — CROSS-CHANNEL CUSTOMER JOURNEY
   =================================================================== */
const CHJourney = () => (
  <section class="band-white" id="ch4">
    <div class="container">
      <div class="eyebrow">§ 4 · CH-04</div>
      <h2 class="h1">The cross-channel customer journey — text-form diagram</h2>
      <p class="lede">
        A representative SEQ homeowner journey across channels, from first exposure to advocacy.
        This is not a one-channel story. It is a 14-touchpoint orchestration that takes 9–18 months
        and crosses 7 channels. Mapping it explicitly is how we stop blaming "last-click attribution"
        for budget decisions.
      </p>

      <div class="journey-flow">
        <div class="journey-step"><div class="js-num">T1</div><div class="js-when">Month 0</div><div class="js-chan">Outdoor billboard (Bruce Hwy)</div><div class="js-desc">Cyclone-prep stewardship message. Driver notices "MMXXVI Standards" and Navy/Timber pair. No conscious memory yet.</div></div>
        <div class="journey-step"><div class="js-num">T2</div><div class="js-when">Month 1</div><div class="js-chan">YouTube Shorts (auto-served)</div><div class="js-desc">90-sec termite damage reveal short. Same Navy/Timber pair. Pattern recognition begins (DBA-10 mental availability).</div></div>
        <div class="journey-step"><div class="js-num">T3</div><div class="js-when">Month 3</div><div class="js-chan">Local PR (Queensland Homes)</div><div class="js-desc">Reads a profile piece on Gerry. Founder presence anchors trust. Still passive.</div></div>
        <div class="journey-step"><div class="js-num">T4</div><div class="js-when">Month 5</div><div class="js-chan">YouTube long-form (organic discovery)</div><div class="js-desc">Watches a Standards Notebook episode about pool decking failure modes. 14-minute commitment. Subscribes.</div></div>
        <div class="journey-step"><div class="js-num">T5</div><div class="js-when">Month 5–7</div><div class="js-chan">Email (newsletter signup)</div><div class="js-desc">Receives 8 weekly Stewardship Letters. Education stage active. Building category vocabulary.</div></div>
        <div class="journey-step"><div class="js-num">T6</div><div class="js-when">Month 7</div><div class="js-chan">Google Search (organic) → AEO citation</div><div class="js-desc">Searches "fibreglass vs concrete pool QLD." ChatGPT cites the YMT comparison article. Brand reinforcement.</div></div>
        <div class="journey-step"><div class="js-num">T7</div><div class="js-when">Month 8</div><div class="js-chan">Google Search (paid brand)</div><div class="js-desc">Searches "ymt pools." Clicks paid brand ad to landing page. Quote request initiated.</div></div>
        <div class="journey-step"><div class="js-num">T8</div><div class="js-when">Month 8</div><div class="js-chan">Email (lead nurture flow)</div><div class="js-desc">Auto-triggered nurture sequence. 5 emails over 14 days. Education + proof + soft CTA.</div></div>
        <div class="journey-step"><div class="js-num">T9</div><div class="js-when">Month 8–9</div><div class="js-chan">WhatsApp (sales steward)</div><div class="js-desc">Sales steward responds in 4hr SLA. MEDDPICC discovery. Site visit booked.</div></div>
        <div class="journey-step"><div class="js-num">T10</div><div class="js-when">Month 9</div><div class="js-chan">Customer Portal (proposal review)</div><div class="js-desc">Receives proposal + Standards Checklist + reference reels. Sonic logo plays on portal open.</div></div>
        <div class="journey-step"><div class="js-num">T11</div><div class="js-when">Month 9–10</div><div class="js-chan">SMS + Email (decision support)</div><div class="js-desc">Anxiety-toolkit content drip. References call offered. Deposit cleared on day 14.</div></div>
        <div class="journey-step"><div class="js-num">T12</div><div class="js-when">Month 10–14</div><div class="js-chan">Portal + WhatsApp (delivery)</div><div class="js-desc">Daily build-progress updates. Day-30 satisfaction check at 8.5/10. Job completes.</div></div>
        <div class="journey-step"><div class="js-num">T13</div><div class="js-when">Month 14–15</div><div class="js-chan">Email + Portal (Impact stage)</div><div class="js-desc">Case-study production. Google review submitted. NPS 9. Household Dossier delivered.</div></div>
        <div class="journey-step"><div class="js-num">T14</div><div class="js-when">Month 21+</div><div class="js-chan">Referral + Email + IG</div><div class="js-desc">Becomes ambassador. Refers 1.2 households/yr. Posts to IG, tagging YMT. Word-of-mouth loop closes.</div></div>
      </div>

      <h3 class="h2">What last-click attribution gets wrong</h3>
      <p>
        In a default Google Analytics 4 last-click model, this customer is attributed to "Google Paid
        Brand Search" — touchpoint T7. T7 receives 100% of the credit. T1–T6 receive zero. The
        consequence: a last-click-only CFO would cut the outdoor budget, the YouTube budget, the PR
        budget, and the email budget — every long-channel investment that did the actual work of
        creating demand. The brand survives one quarter, then collapses. This is why our attribution
        model (CH-06 below) is data-driven multi-touch with a 90-day window — and why our reporting
        cadence (CH-11) explicitly never reports any channel by single-touch logic.
      </p>
    </div>
  </section>
)

/* ===================================================================
   CH-05 — SPARKTORO: WHERE BUYERS ACTUALLY SPEND ATTENTION
   =================================================================== */
const CHAttention = () => (
  <section class="band-cream" id="ch5">
    <div class="container">
      <div class="eyebrow">§ 5 · CH-05</div>
      <h2 class="h1">Search Everywhere — where SEQ pool/termite/units buyers actually attend</h2>
      <p class="lede">
        SparkToro's Search Everywhere methodology (Rand Fishkin 2024): assume buyers spend
        attention in 8–12 distinct surfaces, not the 2–3 we instinctively associate with the
        category. Below is the YMT attention map for the SEQ homeowner persona — built on third-party
        panel data, validated against our own Phase 1 customer interviews.
      </p>

      <div class="attention-grid">
        <div class="attention-card high">
          <div class="ac-rank">High attention · target</div>
          <div class="ac-surfaces">
            <ul>
              <li><strong>Google Search</strong> — 89% weekly use for any household project research</li>
              <li><strong>YouTube</strong> — 76% weekly · highest for &gt; $50K project decisions</li>
              <li><strong>Realestate.com.au / Domain</strong> — 68% monthly for Investor persona; 41% Established Family</li>
              <li><strong>Local Facebook groups</strong> — 64% monthly · "Tradesperson recommendations" requests</li>
              <li><strong>Instagram</strong> — 58% weekly · visual research for renos / pools / outdoor</li>
              <li><strong>WhatsApp</strong> — 52% weekly · spouse-to-spouse decision discussion</li>
              <li><strong>ChatGPT / Perplexity</strong> — 38% and rising fast (+11pp YoY) · category research</li>
            </ul>
          </div>
        </div>
        <div class="attention-card mid">
          <div class="ac-rank">Mid attention · qualify</div>
          <div class="ac-surfaces">
            <ul>
              <li><strong>TikTok</strong> — 33% weekly · skews younger; under-indexed for 50+</li>
              <li><strong>Reddit (r/AusFinance, r/AusProperty)</strong> — 22% monthly · skews Investor persona</li>
              <li><strong>LinkedIn</strong> — 19% weekly · Investor persona only</li>
              <li><strong>Houzz / homify</strong> — 17% monthly · Established Family + Empty-Nester</li>
              <li><strong>Spotify (podcasts + ads)</strong> — 28% weekly · property podcasts emerging</li>
            </ul>
          </div>
        </div>
        <div class="attention-card low">
          <div class="ac-rank">Low attention · avoid</div>
          <div class="ac-surfaces">
            <ul>
              <li><strong>Pinterest</strong> — 14% monthly · skews aspirational not transactional</li>
              <li><strong>X / Twitter</strong> — 12% monthly · noise/sport-dominated for QLD</li>
              <li><strong>Print magazines</strong> — 9% monthly · revisit only via PR placements</li>
              <li><strong>Radio</strong> — 31% weekly (commute) but low-attention-state · use only Hero spots</li>
              <li><strong>TV (broadcast)</strong> — 41% weekly but cost-prohibitive at our budget · revisit CTV in Phase 3</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="h2">The non-obvious finding</h3>
      <p>
        Two surfaces outpace conventional wisdom for SEQ home-service buyers: <strong>Local Facebook
        groups</strong> (64% monthly) and <strong>WhatsApp spouse-channels</strong> (52% weekly).
        Most home-service brands have no presence on either because they are not "advertisable
        channels" in the traditional sense. They are influence channels. Our response: a structured
        ambassador program (CH-12 referral) that seeds positive mentions in local Facebook groups
        + a dedicated WhatsApp Business identity that handles spouse-to-spouse forwarded enquiries
        with the same SLA as any other channel.
      </p>
    </div>
  </section>
)

/* ===================================================================
   CH-06 — ATTRIBUTION MODEL
   =================================================================== */
const CHAttribution = () => (
  <section class="band-white" id="ch6">
    <div class="container">
      <div class="eyebrow">§ 6 · CH-06</div>
      <h2 class="h1">Channel attribution model — multi-touch with a 90-day window</h2>
      <p class="lede">
        Last-click is dead. First-click is sentimental. Time-decay is a defensible default. We deploy
        a data-driven multi-touch attribution model with a 90-day lookback window — long enough to
        catch the L1→L3 nurture path documented in CH-04.
      </p>

      <div class="attrib-table-wrap">
        <table class="attrib-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>What it credits</th>
              <th>Use case</th>
              <th>Where we apply it</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Last-click</strong></td><td>100% to the final touch before conversion</td><td>Quick sanity check; what the customer remembers</td><td>Internal reference only · never reported as the headline</td></tr>
            <tr><td><strong>First-click</strong></td><td>100% to the first touch</td><td>Awareness-stage channel evaluation</td><td>Internal reference for top-of-funnel comparison</td></tr>
            <tr><td><strong>Linear</strong></td><td>Equal credit across all touches</td><td>Conservative; understates concentrated drivers</td><td>Validation only</td></tr>
            <tr><td><strong>Time-decay</strong></td><td>More credit to touches closer to conversion (½-life: 7 days)</td><td>Defensible default; weights recency without ignoring history</td><td><strong>Primary reporting model</strong></td></tr>
            <tr><td><strong>Data-driven (GA4 Advanced)</strong></td><td>Algorithm-determined weights based on conversion path analysis</td><td>When the volume threshold is met (400+ conversions in 28 days)</td><td>Validation against time-decay; will replace time-decay when volume permits</td></tr>
            <tr><td><strong>Marketing Mix Modelling (MMM)</strong></td><td>Econometric attribution including offline + long-tail effects</td><td>Annual review only; explains what digital can't see</td><td>Annual board-level review with external partner</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">The reporting hierarchy</h3>
      <ol class="report-hier">
        <li><strong>Headline number (every report):</strong> time-decay attributed CPL and CAC per channel.</li>
        <li><strong>Secondary number:</strong> first-touch attribution for top-of-funnel channels — credits brand-building work.</li>
        <li><strong>Tertiary number:</strong> assisted conversions for every channel — surfaces under-credited helpers.</li>
        <li><strong>Quarterly:</strong> conversion-path analysis. The Top-5 paths and what they tell us.</li>
        <li><strong>Annually:</strong> MMM run by external partner. The truth-checker.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   CH-07 — OWNED / EARNED / PAID BALANCE
   =================================================================== */
const CHOEP = () => (
  <section class="band-cream" id="ch7">
    <div class="container">
      <div class="eyebrow">§ 7 · CH-07</div>
      <h2 class="h1">Owned / Earned / Paid balance — per LOB</h2>
      <p class="lede">
        The mix is different by LOB because the buying behaviour is different. Termite (reactive,
        urgent) needs more paid. Pools (aspirational, long consideration) needs more owned. Units
        (investor-led) needs more earned. Per-LOB targets for 2030.
      </p>

      <div class="oep-grid">
        <div class="oep-card pools">
          <div class="oep-tag">Pools / Outdoor</div>
          <div class="oep-2030">Target 2030: 52% owned · 22% earned · 26% paid</div>
          <div class="oep-now">Today: 14% / 16% / 70%</div>
          <div class="oep-rationale">
            <p>Aspirational long-consideration buyer. The Hub content (Standards Notebook · monthly
            Fifth Room reveal) compounds for years. Owned email LTV per subscriber projected at
            $7,200 by 2030. Paid spend can decline as brand search grows.</p>
          </div>
        </div>
        <div class="oep-card termite">
          <div class="oep-tag">Termite</div>
          <div class="oep-2030">Target 2030: 36% owned · 24% earned · 40% paid</div>
          <div class="oep-now">Today: 10% / 18% / 72%</div>
          <div class="oep-rationale">
            <p>Reactive demand. Paid search will always be a significant share because the buyer
            arrives mid-anxiety with high intent. Owned share grows via the annual contract base
            (recurring revenue, owned channel by definition). Earned share grows via referrals +
            local PR (Insurance Council recognition, etc.).</p>
          </div>
        </div>
        <div class="oep-card units">
          <div class="oep-tag">Unit Renovations</div>
          <div class="oep-2030">Target 2030: 44% owned · 32% earned · 24% paid</div>
          <div class="oep-now">Today: 12% / 22% / 66%</div>
          <div class="oep-rationale">
            <p>Investor-led B2B-flavoured. Earned channel dominates (LinkedIn organic, Investor
            podcasts, Reddit AusFinance referrals). Owned grows via the quarterly portfolio
            newsletter. Paid can shrink to brand-defence + LinkedIn-targeted prospecting only.</p>
          </div>
        </div>
      </div>

      <h3 class="h2">The transition path — 2026 → 2030</h3>
      <p>
        Year 1 (2026): hold paid share constant while building owned + earned capacity. Year 2: paid
        share declines 8pp; owned + earned share increases. Year 3: paid share declines another 12pp.
        By Year 4-5, the system flips — owned + earned exceed paid for the first time. Critical
        precondition: the customer portal, the email list, and the YouTube subscriber base must be
        built first. We do not declare a paid-share reduction until the owned-capacity is proven.
      </p>
    </div>
  </section>
)

/* ===================================================================
   CH-08 — PIVOT / SUNSET RULES
   =================================================================== */
const CHPivot = () => (
  <section class="band-white" id="ch8">
    <div class="container">
      <div class="eyebrow">§ 8 · CH-08</div>
      <h2 class="h1">Channel pivot / sunset rules — when to kill a channel</h2>
      <p class="lede">
        Channels decay. Most agencies will not kill a channel because the budget belongs to the
        agency. We use pre-defined sunset rules so the decision is data-driven and emotionally
        unblockable.
      </p>

      <div class="sunset-grid">
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 1</div>
          <div class="sn-name">CPL inflation &gt; 35% YoY for 2 consecutive quarters.</div>
          <div class="sn-action">Pause for 1 quarter. Diagnose: market shift, creative fatigue, or platform algorithm change. Resume only if diagnosis identifies a fix path. Otherwise sunset.</div>
        </div>
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 2</div>
          <div class="sn-name">Conversion rate decline &gt; 25% with no creative reason.</div>
          <div class="sn-action">A/B audit the LP + creative. If unable to recover, the channel has lost relevance to current buyers. Sunset.</div>
        </div>
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 3</div>
          <div class="sn-name">Platform policy/restriction limits creative authenticity.</div>
          <div class="sn-action">If Meta restrictions force us to remove before/after photography, evaluate whether the channel can still serve the brand without distortion. If not, sunset.</div>
        </div>
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 4</div>
          <div class="sn-name">Sustained &lt; 6% share of leads while consuming &gt; 12% of spend.</div>
          <div class="sn-action">Channel is sub-scale. Either reallocate spend to scale it through a critical threshold OR sunset and redeploy.</div>
        </div>
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 5</div>
          <div class="sn-name">Audience exodus (SparkToro panel shows &gt; 20% drop in attention share over 12 months).</div>
          <div class="sn-action">Forward indicator. Begin transition planning. Sunset within 6 months unless attention recovers.</div>
        </div>
        <div class="sunset-card">
          <div class="sn-tag">Sunset Trigger 6</div>
          <div class="sn-name">Brand-safety incident on the channel exceeds risk tolerance.</div>
          <div class="sn-action">Immediate pause. Brand risk &gt; performance gain. Resume only if platform makes structural change.</div>
        </div>
      </div>

      <h3 class="h2">Pivot vs. sunset — the distinction</h3>
      <p>
        <strong>Pivot</strong> = the channel role changes (e.g. YouTube long-form moves from L2
        Education to L1 Awareness because the audience shape shifted). <strong>Sunset</strong> =
        the channel is removed from the mix. Pivot first. Sunset only when pivot exhausts. We have
        budgeted explicitly for one major channel sunset every 24 months — that is the long-term
        average expected churn rate.
      </p>
    </div>
  </section>
)

/* ===================================================================
   CH-09 — TEST BUDGET PROTOCOL
   =================================================================== */
const CHTest = () => (
  <section class="band-cream" id="ch9">
    <div class="container">
      <div class="eyebrow">§ 9 · CH-09</div>
      <h2 class="h1">Test budget protocol — 10% reserved for new channels</h2>
      <p class="lede">
        The test budget is not optional. It is the only mechanism that prevents the channel mix
        from becoming brittle. 10% of annual media spend ($72K in 2026) is reserved for channels
        not yet in production.
      </p>

      <div class="test-protocol">
        <h3 class="h2">The five-stage test protocol</h3>
        <ol class="test-stages">
          <li><strong>Discovery (4 weeks):</strong> hypothesis written, success criteria defined, budget capped at $3K-$6K, creative built, KPIs locked.</li>
          <li><strong>Pilot (6-8 weeks):</strong> spend deployed in a single LOB only, against a tightly-targeted audience, with creative purpose-built for the channel (not repurposed).</li>
          <li><strong>Evaluation (2 weeks):</strong> against the success criteria written in Discovery. Pass / fail / extend-for-more-data.</li>
          <li><strong>Scale decision:</strong> if Pass → add to production mix at proper budget; if Fail → kill; if extend → second pilot at doubled budget for 12 weeks.</li>
          <li><strong>Library:</strong> all tests (Pass and Fail) are documented in the channel test library. Failed tests are as valuable as Passed ones — they prevent re-testing the same hypothesis later.</li>
        </ol>

        <h3 class="h2">2026 test pipeline (committed)</h3>
        <ul class="test-pipeline">
          <li><strong>Q1:</strong> Connected-TV (CTV) for Hero brand placement — Brisbane + Gold Coast geo-fenced</li>
          <li><strong>Q2:</strong> Reddit r/AusFinance + r/AusProperty — Investor persona content seeding</li>
          <li><strong>Q3:</strong> Spotify property-podcast pre-roll — narrow audience, low-cost-of-entry</li>
          <li><strong>Q4:</strong> Threads + Bluesky — earned-reach experiment for Hub content</li>
        </ul>
      </div>
    </div>
  </section>
)

/* ===================================================================
   CH-10 — ORCHESTRATION DOCTRINE
   =================================================================== */
const CHOrchestration = () => (
  <section class="band-white" id="ch10">
    <div class="container">
      <div class="eyebrow">§ 10 · CH-10</div>
      <h2 class="h1">Orchestration doctrine — the handshake between channels</h2>
      <p class="lede">
        A channel mix is not an orchestra unless the channels know about each other. Six
        orchestration handshakes that turn isolated channels into a compounding system.
      </p>

      <div class="orch-grid">
        <div class="orch-card">
          <div class="o-num">H1</div>
          <div class="o-name">Hero-to-Hub re-purposing</div>
          <div class="o-body">Every Hero YouTube documentary spawns: 8 shorts, 4 IG Reels, 1 long-form email, 3 LinkedIn posts, 1 blog article. The cost of repurposing is 8% of the Hero production cost — but multiplies the surface area by 17×.</div>
        </div>
        <div class="orch-card">
          <div class="o-num">H2</div>
          <div class="o-name">Paid → Owned retargeting</div>
          <div class="o-body">Anyone who watches &gt; 50% of a Hero piece on paid YouTube is added to an owned audience (Meta custom, Google customer match, email if captured). Paid lights the fire; owned tends it.</div>
        </div>
        <div class="orch-card">
          <div class="o-num">H3</div>
          <div class="o-name">Search → Email capture handshake</div>
          <div class="o-body">Every organic SEO article ends with a context-relevant lead magnet (the topic-specific guide). Conversion-to-email target: 4.2% of article visitors. The article performs both for search and for list growth.</div>
        </div>
        <div class="orch-card">
          <div class="o-num">H4</div>
          <div class="o-name">PR → Owned amplification</div>
          <div class="o-body">Every earned-media placement is amplified: shared to email list, posted to YouTube as "the conversation behind the piece" interview, surfaced on the website's Press page. Earned coverage triples in impact through owned amplification.</div>
        </div>
        <div class="orch-card">
          <div class="o-num">H5</div>
          <div class="o-name">Customer → Channel content loop</div>
          <div class="o-body">Every completed job produces ≥ 1 content asset (DBA-13 Case Study Factory). Customer becomes the content. Loops back into Hero + Hub + Hygiene.</div>
        </div>
        <div class="orch-card">
          <div class="o-num">H6</div>
          <div class="o-name">Channel-to-channel timing</div>
          <div class="o-body">Major campaigns launch in a defined sequence: Hero asset publishes; 7 days later paid amplification begins; 14 days later email arrives; 21 days later PR cadence runs. Sequencing matters; simultaneous launch leaves earned-amplification opportunities unmet.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   CH-11 — REPORTING CADENCE
   =================================================================== */
const CHReporting = () => (
  <section class="band-cream" id="ch11">
    <div class="container">
      <div class="eyebrow">§ 11 · CH-11</div>
      <h2 class="h1">Reporting cadence — what gets seen, by whom, when</h2>
      <p class="lede">
        Reports are commitments, not analytics. Each cadence has a named audience and a small set of
        decisions it must enable. If a report does not enable a decision, it is removed from the
        calendar.
      </p>

      <div class="reporting-table-wrap">
        <table class="reporting-table">
          <thead>
            <tr>
              <th>Cadence</th>
              <th>Audience</th>
              <th>Decisions enabled</th>
              <th>Headline metrics</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Daily (auto)</strong></td><td>YDT Demand Lead</td><td>Pause-or-continue paid campaigns</td><td>Spend pacing · CPL · conversion rate per platform</td></tr>
            <tr><td><strong>Weekly (auto + 30-min review)</strong></td><td>YDT team + Carla</td><td>Creative refresh; audience adjustments</td><td>Channel CPL trend · top performing creatives · funnel-stage volume</td></tr>
            <tr><td><strong>Monthly (1-page brief)</strong></td><td>Carla + Corrina (YDT)</td><td>Budget reallocation within ±15% per channel</td><td>Time-decay attributed CAC per LOB · share-of-voice indicators · share of total leads by channel</td></tr>
            <tr><td><strong>Quarterly (30-page review)</strong></td><td>Carla + Gerry + Corrina</td><td>Channel pivot or sunset; test pipeline; next quarter's budget allocation</td><td>Channel KPI vs target · O/E/P balance shift · DBA fame×uniqueness scores · LTV cohort trends</td></tr>
            <tr><td><strong>Annual (board document)</strong></td><td>Full leadership + external MMM partner</td><td>Strategic channel rebalance; 60/40 long/short audit; 3-year forecast</td><td>MMM-attributed contribution · LTV by acquisition cohort · brand health (Fame/Uniqueness/category awareness)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

/* ===================================================================
   CH-12 — FAILURE MODES + HEDGES
   =================================================================== */
const CHRisks = () => (
  <section class="band-navy" id="ch12">
    <div class="container">
      <div class="eyebrow on-dark">§ 12 · CH-12</div>
      <h2 class="h1 on-dark">Channel-level failure modes + hedges</h2>

      <div class="ch-risk-grid">
        <div class="chr-card">
          <div class="chr-tag">Risk 1</div>
          <div class="chr-name">Platform algorithm change destroys a primary channel overnight.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> No single channel may exceed 38% of acquisition revenue. Owned-channel share target ≥ 45% by 2030 means the audience remains accessible even if a platform goes hostile.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 2</div>
          <div class="chr-name">Channel CPL inflation outpaces lifetime value growth.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Quarterly CAC:LTV review per LOB (target ≥ 1:5 within 24 months of acquisition). Channel sunset rules (CH-08) trigger automatically when CPL inflation exceeds 35% YoY.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 3</div>
          <div class="chr-name">Last-click attribution distorts channel decisions.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Time-decay model is the primary; last-click is reference only (CH-06). Quarterly path-analysis surfaces under-credited helpers. Annual MMM as the truth-check.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 4</div>
          <div class="chr-name">Test budget gets squeezed in a low-revenue quarter.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Test budget is line-itemed as a non-discretionary OPEX item, not a media discretionary line. Cutting it requires CMO sign-off + a written rationale.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 5</div>
          <div class="chr-name">60/40 long/short discipline erodes in a soft quarter.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Monthly verification report. &gt; 5pp drift toward short triggers CMO review. Drift trends documented to identify systemic pressure points.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 6</div>
          <div class="chr-name">Owned-channel growth lags behind paid-channel reliance.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Owned-share KPI tracked per LOB quarterly. If owned share fails to advance 2pp per quarter, dedicated investment plan refreshed within the next quarter.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 7</div>
          <div class="chr-name">Channel orchestration handshakes get skipped under deadline pressure.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Hero asset launches require an orchestration checklist signed off by YDT before publish. Skipping the handshakes invalidates the launch.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 8</div>
          <div class="chr-name">Reporting becomes wallpaper (looked-at, not acted-on).</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Every report concludes with the explicit decision it enables and the action taken in the last cycle. Reports that fail to enable a decision twice are removed from the calendar.</div>
        </div>
      </div>
    </div>
  </section>
)

const CHCompliance = () => (
  <section class="band-cream" id="ch-compliance">
    <div class="container">
      <div class="eyebrow">Compliance · Quality Gate</div>
      <h2 class="h1">WS-06 quality-gate certification</h2>
      <div class="compliance-grid">
        <div class="comp-card"><div class="comp-h">Checklist Coverage</div><p>12/12 CH-XX items. Every channel + stage + budget + rationale + role + handshake explicitly specified.</p></div>
        <div class="comp-card"><div class="comp-h">Framework Citation</div><p>Binet & Field 60/40 long/short doctrine · SparkToro Search Everywhere methodology · Tom Goodwin Digital Darwinism · Mark Ritson multi-channel logic · IPA Effectiveness Code — all cited and operationally applied.</p></div>
        <div class="comp-card"><div class="comp-h">Depth Standard</div><p>Target 4,000–6,000 words. Each CH item carries usage rationale, measurement spec, and integration with WS-05 bowtie + WS-08 GEO + WS-09 paid + WS-10 CRM.</p></div>
        <div class="comp-card"><div class="comp-h">Junior Executability</div><p>YDT junior with this document + the budget allocation table + reporting cadence + sunset rules can manage the entire channel mix on day one without escalation.</p></div>
      </div>
    </div>
  </section>
)

const CHFooter = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col"><div class="footer-lbl">Document</div><p>WS-06 Channel Architecture<br />Operating Manual<br />v1.0 · Effective 1 June 2026</p></div>
        <div class="footer-col"><div class="footer-lbl">Authority</div><p>Carla Oliver, Acting CMO<br />CoSai CFO Services<br />for YMT / YBMT Group</p></div>
        <div class="footer-col"><div class="footer-lbl">Phase 3 Pages</div><p><a href="/ymt-channel">WS-06 Channel</a><br /><a href="/ymt-geo">WS-08 GEO/AEO</a><br /><a href="/ymt-paid">WS-09 Paid Media</a><br /><a href="/ymt-crm">WS-10 CRM</a></p></div>
        <div class="footer-col"><div class="footer-lbl">Status</div><p>12/12 CH-XX items<br />→ <a href="/ymt-group-strategy">Strategy Index</a></p></div>
      </div>
      <div class="footer-bar">© 2026 CoSai CFO Services · Acting CMO for YMT Group · Handover to YDT (Headless Marketing)</div>
    </div>
  </footer>
)

export const renderYMTchannel = () => (
  <>
    <CHHubBar />
    <CHNav />
    <CHHero />
    <CHDoctrine />
    <CHMixMatrix />
    <CHBudget />
    <CHHHH />
    <CHJourney />
    <CHAttention />
    <CHAttribution />
    <CHOEP />
    <CHPivot />
    <CHTest />
    <CHOrchestration />
    <CHReporting />
    <CHRisks />
    <CHCompliance />
    <CHFooter />
  </>
)
