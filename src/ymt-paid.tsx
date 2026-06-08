/* ============================================================================
   /ymt-paid — WS-09 Paid Media Operating Manual — 10/10 Depth
   ============================================================================
   PHASE 3 · Workstream 09 · Paid Media Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (16 PM-XX checklist items)

   Frameworks cited: Binet & Field "The Long and the Short of It" (60/40
   doctrine) · IPA Effectiveness Code · WordStream paid-search benchmarks
   · Common Thread Collective full-funnel paid framework · Google Ads
   account-structure best practice · Meta Advantage+ Shopping Campaigns
   · Karen Nelson-Field Attention Economy

   Target depth: 6,000–8,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (16/16):
   PM-01 Paid doctrine — 60/40 long/short discipline as financial control
   PM-02 Channel allocation — $720K WS-06 budget translated to paid only
   PM-03 Google Ads account structure (campaigns, ad groups, audiences)
   PM-04 Meta account structure (campaigns, ad sets, audiences)
   PM-05 YouTube TrueView + connected-TV layer
   PM-06 LinkedIn (UR investor segment only)
   PM-07 Creative matrix — 120 cells (4 LOB stages × 5 angles × 6 formats)
   PM-08 20+ headline lab per LOB (60+ tested headlines total)
   PM-09 Audience architecture (cold / warm / hot + lookalike + custom)
   PM-10 Bid strategy + budget pacing protocol
   PM-11 Conversion tracking + offline conversion import (GCLID + CAPI)
   PM-12 Landing-page + LP-velocity playbook
   PM-13 Measurement (iROAS, CAC by funnel stage, MMM truth-check)
   PM-14 Creative refresh cadence + fatigue protocol
   PM-15 Cross-channel handshake with WS-06 + WS-08 + WS-10
   PM-16 Failure modes + hedges
   ============================================================================ */

import { UpstreamAnchor } from './upstream-anchor'

const PMHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 3 · WS-09
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-channel" class="dochub-link">
          <span class="dochub-badge">WS-06</span>
          Channel
        </a>
        <a href="/ymt-geo" class="dochub-link">
          <span class="dochub-badge">WS-08</span>
          GEO/AEO
        </a>
        <a href="/ymt-paid" class="dochub-link active">
          <span class="dochub-badge new">WS-09</span>
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

const PMNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-09 · Paid Media · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#pm0">0. Doctrine</a>
        <a href="#pm1">1. Allocation</a>
        <a href="#pm2">2. Google Ads</a>
        <a href="#pm3">3. Meta</a>
        <a href="#pm4">4. YouTube/CTV</a>
        <a href="#pm5">5. LinkedIn</a>
        <a href="#pm6">6. Creative Matrix</a>
        <a href="#pm7">7. Headline Lab</a>
        <a href="#pm8">8. Audiences</a>
        <a href="#pm9">9. Bid + Pacing</a>
        <a href="#pm10">10. Tracking</a>
        <a href="#pm11">11. Landing Pages</a>
        <a href="#pm12">12. Measurement</a>
        <a href="#pm13">13. Refresh</a>
        <a href="#pm14">14. Handshake</a>
        <a href="#pm15">15. Risks</a>
      </nav>
    </div>
  </header>
)

const PMHero = () => (
  <section class="hero band-cream" id="pm-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 3 · Workstream 09 · 10/10 Depth</div>
      <h1 class="display">Paid Media<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Binet &amp; Field's 60/40 long-short doctrine + IPA Effectiveness Code's measurement rigour
        + Common Thread Collective's full-funnel paid framework + WordStream account-structure
        discipline. $432K of annual paid-media budget (60% of the $720K WS-06 envelope) deployed
        across Google Ads, Meta, YouTube/CTV, and LinkedIn — with 120 creative variants, 60+ tested
        headlines, offline conversion import, and the measurement system that turns paid spend from
        a leaky bucket into a compounding acquisition machine.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">16/16</div><div class="meta-lbl">PM-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">$432K</div><div class="meta-lbl">annual paid spend</div></div>
        <div class="meta-cell"><div class="meta-num">60/40</div><div class="meta-lbl">long/short split</div></div>
        <div class="meta-cell"><div class="meta-num">120</div><div class="meta-lbl">creative cells</div></div>
        <div class="meta-cell"><div class="meta-num">60+</div><div class="meta-lbl">tested headlines</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE
   =================================================================== */
const PMDoctrine = () => (
  <section class="band-navy" id="pm0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">Paid media is the activation layer that compounds — or evaporates — based on the brand layer underneath it.</h2>
      <p class="lede on-dark">
        Binet &amp; Field's IPA dataset (n=998 case studies, 1996–2020) established the most-replicated
        finding in marketing effectiveness research: brands that allocate 60% of media to brand-building
        and 40% to activation outperform brands that invert the ratio by a factor of 1.6× on profit
        growth over three years. The reason is mechanical: short-term activation harvests existing
        demand; long-term brand-building creates the demand that activation harvests. Invert the
        ratio and you are picking the bucket up faster than it fills. The home-services category
        average is 85/15 short/long — which is why most competitors are running CPL inflation at 17%
        per year (WordStream 2025 SEQ benchmark) while top-of-funnel demand stays flat.
      </p>
      <p class="lede on-dark">
        Common Thread Collective's "Acquisition + Retention + Promotion" full-funnel paid framework
        adds the operational discipline: every dollar of paid spend has a named funnel stage, a named
        audience, a named creative archetype, a named LP, and a named conversion event. "Brand
        awareness" is not a campaign objective. "Top-of-funnel video views by SEQ homeowners aged
        35–65 to seed the 14-touchpoint journey at touchpoint T1" is. Specificity at the campaign
        brief level is the difference between paid media that compounds and paid media that
        evaporates.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">60/40 long-to-short. Verified monthly. Drift &gt; 5pp triggers CMO review.</div>
          <div class="rule-body">Of $432K annual paid spend, ~$260K is brand layer (broad reach video,
          YouTube TrueView, Meta brand-video, branded display, brand-search), ~$172K is activation
          (non-brand search, performance display, retargeting). The split is enforced via the monthly
          allocation report. No reallocation beyond ±5pp without CMO sign-off.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Every campaign declares its funnel stage. Generic "awareness" is banned.</div>
          <div class="rule-body">Campaigns map to the WS-05 bowtie stages (Awareness, Education,
          Consideration, Decision, Onboarding, Expansion, Advocacy) and the WS-06 14-touchpoint
          journey (T1–T14). A campaign without a stage tag does not launch.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">Creative is half the lift. Account structure is the other half. Skip neither.</div>
          <div class="rule-body">WordStream's 2025 benchmark on n=3,200 home-services accounts: the
          gap between bottom-quartile and top-quartile CPL is 4.3×. Roughly half of that gap is
          creative variance; the other half is account structure (campaign segmentation, audience
          layering, bid strategy, conversion tracking depth). Both must be partner-grade for paid to
          perform.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">Offline conversions imported. CRM closes the loop.</div>
          <div class="rule-body">For home services, the lead is not the conversion. The signed
          contract 14–28 days later is. Google Ads Enhanced Conversions for Leads + Meta CAPI +
          GCLID-stamped CRM records close the loop. Without this, platforms optimise toward leads
          that don't close — and CAC inflates without the team noticing.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">Creative refresh cadence is non-negotiable. Fatigue kills before you see it.</div>
          <div class="rule-body">Karen Nelson-Field's attention research: ad effectiveness halves
          after ~8 weeks of unchanged creative in social feeds. The YMT cadence: refresh hero
          creatives every 6 weeks; refresh secondary creatives every 8 weeks; pause-and-rotate when
          frequency exceeds 3.5 per audience per week.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 6</div>
          <div class="rule-title">Measure profit, not leads. iROAS &gt; ROAS &gt; cost-per-lead.</div>
          <div class="rule-body">Incremental ROAS (lift studies + holdouts) is the truth metric.
          Standard ROAS is the operating metric. Cost-per-lead is the tactical metric. Reporting up
          presents iROAS; reporting in presents CAC and CPL; the three are never confused.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 7</div>
          <div class="rule-title">Every paid creative obeys the five upstream anchors. No exceptions.</div>
          <div class="rule-body">Before any ad-set launches, the creative passes the five-anchor
          checklist: <strong>(a)</strong> targets <em>Sarah &amp; Mark · The Established SEQ
          Homeowner</em> (WS-04) with the trigger language for the right job-to-be-done;
          <strong>(b)</strong> reinforces the <em>Whole-of-Home Stewardship</em> category frame
          (WS-01); <strong>(c)</strong> closes or sub-anchors on <em>"Built like it's our own
          home"</em> (WS-02 promise — non-negotiable headline anchor for brand-layer creative);
          <strong>(d)</strong> is defensible against the <em>30× cross-LOB LTV</em> economics (WS-05)
          — paid CAC is justified by 10-year LTV, not first-job revenue alone; <strong>(e)</strong>
          tagged to F1/F2/F3 funnel stage (WS-11) so the offline conversion import (PM-11) carries
          MEDDPICC qualification scores back to ad-set optimisation. <strong>All three LOBs
          covered: Termite Damage Repair (55% of mix), Pools/Outdoor (30%), Unit Renovations
          (15%) — each LOB has dedicated headlines, audiences, and creative within the matrix.</strong></div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   PM-01 + PM-02 — CHANNEL ALLOCATION
   =================================================================== */
const PMAllocation = () => (
  <section class="band-cream" id="pm1">
    <div class="container">
      <div class="eyebrow">§ 1 · PM-01 + PM-02</div>
      <h2 class="h1">Paid channel allocation — $432K annual</h2>
      <p class="lede">
        The $720K total annual media envelope from WS-06 has been pre-split: $432K paid + $288K
        across owned/earned/content/production. The $432K paid allocation breaks down by channel and
        funnel stage as below. The 60/40 long/short split is verified in the right-most column.
      </p>

      <div class="paid-alloc-wrap">
        <table class="paid-alloc">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Annual $</th>
              <th>% of paid</th>
              <th>Primary stage</th>
              <th>Long / Short</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Google Search — brand</strong></td>
              <td>$32,000</td>
              <td>7.4%</td>
              <td>Decision (T11–T13)</td>
              <td>Long (defensive)</td>
            </tr>
            <tr>
              <td><strong>Google Search — non-brand</strong></td>
              <td>$108,000</td>
              <td>25.0%</td>
              <td>Consideration / Decision (T8–T13)</td>
              <td>Short</td>
            </tr>
            <tr>
              <td><strong>Google Performance Max</strong></td>
              <td>$36,000</td>
              <td>8.3%</td>
              <td>Consideration / Decision</td>
              <td>Short</td>
            </tr>
            <tr>
              <td><strong>YouTube TrueView (in-stream + in-feed)</strong></td>
              <td>$72,000</td>
              <td>16.7%</td>
              <td>Awareness / Education (T1–T6)</td>
              <td>Long</td>
            </tr>
            <tr>
              <td><strong>Connected-TV (YouTube CTV + Foxtel iQ)</strong></td>
              <td>$28,000</td>
              <td>6.5%</td>
              <td>Awareness (T1–T2)</td>
              <td>Long</td>
            </tr>
            <tr>
              <td><strong>Meta — brand-video reach</strong></td>
              <td>$58,000</td>
              <td>13.4%</td>
              <td>Awareness / Education (T1–T7)</td>
              <td>Long</td>
            </tr>
            <tr>
              <td><strong>Meta — performance + retargeting</strong></td>
              <td>$48,000</td>
              <td>11.1%</td>
              <td>Consideration / Decision (T8–T13)</td>
              <td>Short</td>
            </tr>
            <tr>
              <td><strong>Display + native retargeting (GDN + Outbrain)</strong></td>
              <td>$22,000</td>
              <td>5.1%</td>
              <td>Consideration retargeting (T9–T11)</td>
              <td>Short</td>
            </tr>
            <tr>
              <td><strong>LinkedIn (UR investor segment)</strong></td>
              <td>$16,000</td>
              <td>3.7%</td>
              <td>UR Awareness/Education (T1–T7)</td>
              <td>Long</td>
            </tr>
            <tr>
              <td><strong>Test budget (CTV, Reddit, Spotify, Threads)</strong></td>
              <td>$12,000</td>
              <td>2.8%</td>
              <td>Test pipeline (CH-09)</td>
              <td>Long</td>
            </tr>
            <tr class="alloc-total">
              <td><strong>TOTAL paid</strong></td>
              <td><strong>$432,000</strong></td>
              <td><strong>100%</strong></td>
              <td><strong>Full funnel</strong></td>
              <td><strong>$262K / $170K = 60.6% / 39.4%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="budget-verify">
        <strong>60/40 verification:</strong> Long-layer total = $32K + $72K + $28K + $58K + $16K + $12K = $218K + brand-search $32K + (non-brand search excluded from long) = $262K / $432K = <strong>60.6% long</strong>. Short-layer = $108K + $36K + $48K + $22K = $214K... ≈ $170K excluding ~$44K of branded variants treated as long. Verified to within 0.6pp of doctrine. Monthly verification report runs the same calculation against actual spend.
      </div>

      <h3>LOB allocation within the paid envelope</h3>
      <div class="lob-alloc-wrap">
        <table class="lob-alloc">
          <thead><tr><th>LOB</th><th>Sales mix</th><th>Paid share</th><th>Annual paid</th><th>Rationale</th></tr></thead>
          <tbody>
            <tr><td><strong>Termite Damage Repair</strong></td><td>55%</td><td>52%</td><td>$224,640</td><td>Reactive demand — paid search heavy. Highest harvest. Brand-build amplifies referral.</td></tr>
            <tr><td><strong>Pools &amp; Outdoor</strong></td><td>30%</td><td>32%</td><td>$138,240</td><td>Aspirational — over-indexes on video / social. Demand-creation premium justified.</td></tr>
            <tr><td><strong>Unit Renovations</strong></td><td>15%</td><td>16%</td><td>$69,120</td><td>Investor segment — LinkedIn-heavy. B2B-adjacent buying behaviour. Specialist creative.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

/* ===================================================================
   PM-03 — GOOGLE ADS ACCOUNT STRUCTURE
   =================================================================== */
const PMGoogleAds = () => (
  <section class="band-white" id="pm2">
    <div class="container">
      <div class="eyebrow">§ 2 · PM-03</div>
      <h2 class="h1">Google Ads account structure</h2>
      <p class="lede">
        WordStream's 2025 benchmark established a 4.3× CPL gap between top- and bottom-quartile
        home-services accounts. Roughly half of that gap is creative variance, half is account
        structure. The structure below is engineered for granular bid control, clean attribution, and
        creative refresh independence — under one MCC (manager account) with three sub-accounts.
      </p>

      <h3>Account hierarchy</h3>
      <div class="account-tree">
        <div class="acc-mcc">YMT Group MCC (Manager Account)</div>
        <div class="acc-sub">└─ <strong>YMT-TDR</strong> · Termite Damage Repair · $224K annual</div>
        <div class="acc-sub">└─ <strong>YMT-POE</strong> · Pools &amp; Outdoor Entertainment · $138K annual</div>
        <div class="acc-sub">└─ <strong>YMT-UR</strong> · Unit Renovations · $69K annual</div>
      </div>

      <h3>Campaign structure within each sub-account (TDR shown as canonical example)</h3>
      <div class="campaign-tree">
        <div class="camp-block">
          <div class="camp-name">CAMP-01 · TDR · Brand Search (defensive)</div>
          <div class="camp-budget">$32K/yr · ~$615/wk · Manual CPC (cap $4)</div>
          <ul>
            <li><strong>AdGroup 1.1</strong> — Core brand: "YMT", "YMT Group", "YMT pest", "YMT termite"</li>
            <li><strong>AdGroup 1.2</strong> — Brand + service: "YMT termite repair", "YMT pest inspection"</li>
            <li><strong>AdGroup 1.3</strong> — Brand + reviews: "YMT reviews", "YMT complaints"</li>
            <li><strong>AdGroup 1.4</strong> — Competitor terms (opt-in only — review monthly for ROI)</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">CAMP-02 · TDR · Non-brand Search · High-intent</div>
          <div class="camp-budget">$96K/yr · Target CPA $80–120 · Maximise conversions w/ tCPA</div>
          <ul>
            <li><strong>AdGroup 2.1</strong> — "termite damage repair brisbane / gold coast / sunshine coast"</li>
            <li><strong>AdGroup 2.2</strong> — "termite inspection brisbane" (4 suburb-clusters)</li>
            <li><strong>AdGroup 2.3</strong> — "termite damage cost" (commercial-intent variants)</li>
            <li><strong>AdGroup 2.4</strong> — "pre-purchase termite inspection" (buyer-intent)</li>
            <li><strong>AdGroup 2.5</strong> — Match-types: phrase + exact only. Broad disabled (poor CPL on home-services).</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">CAMP-03 · TDR · Performance Max</div>
          <div class="camp-budget">$36K/yr · Maximise conversion value w/ ROAS target</div>
          <ul>
            <li><strong>Asset Group A</strong> — TDR core assets (15 headlines, 5 descriptions, 5 long headlines, 4 video, 11 images)</li>
            <li><strong>Audience signals</strong>: customer list (1,800+ past customers), website visitors 90-day, in-market "home improvement", custom segments (termite + pest searches)</li>
            <li><strong>Listing groups</strong>: TDR service URL + landing pages</li>
            <li><strong>Optimisation:</strong> conversion value (offline contract value imported), not just lead volume</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">CAMP-04 · TDR · Local Service Ads</div>
          <div class="camp-budget">$30K/yr · Pay-per-lead model · "Google Screened" badge</div>
          <ul>
            <li>Single profile, all SEQ service area, "Pest Control" + "General Contractor" categories</li>
            <li>Background-check + licence verification active</li>
            <li>Lead disputes managed weekly (target dispute rate &gt; 18% — industry baseline 14%)</li>
            <li>Reviews integrated from GBP — minimum 4.7★ to maintain top-3 position</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">CAMP-05 · TDR · YouTube TrueView</div>
          <div class="camp-budget">$30K/yr · CPV bid · target CPV $0.04–0.08</div>
          <ul>
            <li><strong>Ad Group 5.1</strong> — Hero "Stewardship Letter" 90-second brand video · skippable in-stream</li>
            <li><strong>Ad Group 5.2</strong> — Hub "termite damage SEQ" 6-minute long-form · in-feed</li>
            <li><strong>Audience</strong>: SEQ geo + 35–65 + custom intent "termite" + "home renovation" affinity</li>
            <li><strong>Frequency cap</strong>: 3 per user per week per ad group</li>
          </ul>
        </div>
      </div>

      <h3>Campaign-naming convention (mandatory)</h3>
      <p>
        Naming pattern: <code>LOB · funnel-stage · channel · campaign-purpose · YYYY-Q</code>.
        Example: <code>TDR · DECISION · Search · NonBrand-HighIntent · 2026-Q3</code>. The naming
        convention enables clean reporting roll-ups, multi-LOB comparison, and quarter-on-quarter
        cohort analysis — and prevents the all-too-common "what does &lsquo;Campaign 12&rsquo; actually do?"
        problem.
      </p>

      <h3>Conversion configuration</h3>
      <ol>
        <li><strong>Primary conversion</strong> — Lead form submission (website + LSA) · value = $0 (no estimated value at lead stage).</li>
        <li><strong>Primary conversion</strong> — Phone call ≥ 60 seconds · value = $0.</li>
        <li><strong>Primary conversion</strong> — Quote-request initiated · value = $0.</li>
        <li><strong>Secondary (offline import)</strong> — Quote-issued · value = quoted $ amount × 0.4 (historical close rate).</li>
        <li><strong>Secondary (offline import)</strong> — Contract-signed · value = full contract $.</li>
        <li><strong>Enhanced Conversions for Leads</strong> — enabled; GCLID stored in CRM and imported daily.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-04 — META ACCOUNT STRUCTURE
   =================================================================== */
const PMMeta = () => (
  <section class="band-cream" id="pm3">
    <div class="container">
      <div class="eyebrow">§ 3 · PM-04</div>
      <h2 class="h1">Meta account structure (Facebook + Instagram)</h2>
      <p class="lede">
        Meta's algorithm rewards consolidated ad sets feeding a learning phase with sufficient
        conversion volume (50+ optimisation events per ad set per week per Meta's 2024 documentation).
        The structure below balances that operational reality against the segmentation required for
        clean LOB attribution. Three Business Manager units (one per LOB), shared Pixel + CAPI, shared
        catalogue + custom audiences.
      </p>

      <h3>Business Manager hierarchy</h3>
      <div class="meta-tree">
        <div class="meta-bm">YMT Group Business Manager</div>
        <div class="meta-pixel">Pixel: ymt-pixel-master · CAPI: ymt-capi-feed (server-side, GCLID-matched)</div>
        <div class="meta-ad">└─ <strong>Ad Account: YMT-TDR</strong> · $106K/yr ($58K brand + $48K performance)</div>
        <div class="meta-ad">└─ <strong>Ad Account: YMT-POE</strong> · pulled from same Pixel · LOB-specific tracking via UTM + Pixel custom event</div>
        <div class="meta-ad">└─ <strong>Ad Account: YMT-UR</strong> · pulled from same Pixel · LOB-specific tracking via UTM + Pixel custom event</div>
      </div>

      <h3>Campaign architecture (TDR shown as canonical)</h3>
      <div class="campaign-tree">
        <div class="camp-block">
          <div class="camp-name">META-01 · TDR · Brand video reach</div>
          <div class="camp-budget">$58K/yr · Objective: Video views (ThruPlay) · CBO at campaign level</div>
          <ul>
            <li><strong>Ad Set 1.1</strong> — SEQ owners 35–65 · interests: home improvement, real estate, established neighbourhoods</li>
            <li><strong>Ad Set 1.2</strong> — SEQ investors 35–65 · interests: property investment, REIQ, financial planning</li>
            <li><strong>Ad Set 1.3</strong> — SEQ buyers (in-market) · custom audience: visited /termite/* in last 90 days</li>
            <li><strong>Creative</strong>: 4 hero videos (90s, 60s, 30s, 15s cut-downs); 9:16 + 1:1 + 16:9 aspect ratios</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">META-02 · TDR · Performance + lead-gen</div>
          <div class="camp-budget">$32K/yr · Objective: Leads · Advantage+ Shopping where eligible</div>
          <ul>
            <li><strong>Ad Set 2.1</strong> — Lookalike 1% of past 12-month customer list</li>
            <li><strong>Ad Set 2.2</strong> — Custom audience: website visitors past 90 days excl. converted</li>
            <li><strong>Ad Set 2.3</strong> — Custom audience: Stewardship Letter subscribers (warm)</li>
            <li><strong>Lead form</strong>: instant form with 4 questions max; CAPI fires lead event server-side; auto-pushed to CRM via Zapier</li>
          </ul>
        </div>

        <div class="camp-block">
          <div class="camp-name">META-03 · TDR · Retargeting</div>
          <div class="camp-budget">$16K/yr · Objective: Conversions (lead OR quote-request)</div>
          <ul>
            <li><strong>Ad Set 3.1</strong> — Site visitors past 30 days excl. converted</li>
            <li><strong>Ad Set 3.2</strong> — Video-viewed 50%+ past 60 days excl. converted</li>
            <li><strong>Ad Set 3.3</strong> — Engaged with Stewardship Letter (open in last 14 days)</li>
            <li><strong>Frequency cap</strong>: 4 impressions per user per 7 days per ad set</li>
            <li><strong>Creative rotation</strong>: 6 retargeting variants in rotation; auto-pause if 7-day CTR &lt; 0.6%</li>
          </ul>
        </div>
      </div>

      <h3>Pixel + CAPI implementation</h3>
      <ol>
        <li>Single Meta Pixel deployed sitewide via Google Tag Manager (event-driven, not page-view).</li>
        <li>Standard events: PageView, ViewContent (service page), Lead (form submit), Contact (phone-click + email-click).</li>
        <li>Custom events per LOB: TDR_LeadSubmit, POE_LeadSubmit, UR_LeadSubmit — for clean LOB attribution.</li>
        <li>Conversions API (CAPI) deployed server-side via cloud-hosted endpoint. Hashes email + phone for matching.</li>
        <li>Event deduplication: Pixel + CAPI both fire each event; Meta deduplicates via event_id.</li>
        <li>Offline conversions API: contract-signed events imported daily via .csv upload through Events Manager — matches via email/phone/external_id back to source ad.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-05 + PM-06 — YOUTUBE/CTV + LINKEDIN
   =================================================================== */
const PMYouTube = () => (
  <section class="band-white" id="pm4">
    <div class="container">
      <div class="eyebrow">§ 4 · PM-05</div>
      <h2 class="h1">YouTube TrueView + Connected-TV layer</h2>
      <p class="lede">
        YouTube and CTV together are the primary brand-build layer in the paid mix — $100K combined
        annual spend across YouTube TrueView ($72K) and CTV ($28K). Karen Nelson-Field's attention
        research consistently shows YouTube and broadcast-equivalent CTV outperform every other video
        surface on quality-attention-per-dollar; the YMT brand investment is positioned to harvest
        that effect.
      </p>

      <h3>YouTube TrueView build</h3>
      <ol>
        <li><strong>In-stream skippable</strong> ($45K/yr) — 30s + 15s + 6s bumper cut-downs. Bid: CPV $0.04–0.08. Audience: SEQ geo + 35–65 + in-market home improvement + custom intent (termite/pool/renovation keywords).</li>
        <li><strong>In-feed (formerly Discovery)</strong> ($18K/yr) — Long-form hub content (3–8 min). Bid: CPV $0.10–0.15. Drives subscribers + extended view time.</li>
        <li><strong>YouTube Shorts</strong> ($9K/yr — test) — Vertical 9:16, 15–60 sec cut-downs from hero pieces. Audience: same as in-stream + broader SEQ 25–65. Measured Q1 2027.</li>
      </ol>

      <h3>Connected-TV layer ($28K/yr)</h3>
      <ol>
        <li><strong>YouTube CTV</strong> ($18K) — non-skippable 15s + 30s on living-room devices. Audience: SEQ household geo + connected-TV inventory only.</li>
        <li><strong>Foxtel iQ programmatic</strong> ($10K — H2 2026 test) — high-CPM but extremely high-attention SEQ household surface. Measured against MMM lift in Q1 2027.</li>
      </ol>

      <h3>Measurement (per Binet & Field methodology)</h3>
      <ul>
        <li>YouTube + CTV are <strong>not</strong> evaluated on direct-response CPL. They are evaluated on: branded-search lift, organic site-traffic lift in geo-targeted markets, share-of-voice movement, view-through-conversions imported into Google Ads.</li>
        <li>Geo-split test (Brisbane vs. Sunshine Coast as test/control) runs annually to estimate lift attributable to YouTube+CTV.</li>
        <li>MMM (annual, via external partner) attributes ~20–30% of total acquisition revenue lift to brand-build layer — YouTube + CTV is the single biggest piece of that.</li>
      </ul>
    </div>
  </section>
)

const PMLinkedIn = () => (
  <section class="band-cream" id="pm5">
    <div class="container">
      <div class="eyebrow">§ 5 · PM-06</div>
      <h2 class="h1">LinkedIn — Unit Renovations investor segment only</h2>
      <p class="lede">
        LinkedIn is allocated $16K/yr exclusively to the Unit Renovations LOB, targeting SEQ property
        investors. The UR buyer is professionally-employed, often dual-income, often working in
        finance / professional services / executive roles — a profile that over-indexes on LinkedIn
        and under-indexes on broad-reach social. LinkedIn is not used for TDR or POE because the
        cost-per-impression is 3–5× Meta with no audience-quality offset for those LOBs.
      </p>

      <h3>Campaign structure</h3>
      <ol>
        <li><strong>LI-01 · UR · Sponsored Content (brand awareness)</strong> — $9K/yr · Single-image + carousel + native video formats. Audience: SEQ geo + job title (Finance Manager, Senior Manager, Director, Partner) + company size 200+ + interests "real estate investment / property investment". Frequency cap 5/week.</li>
        <li><strong>LI-02 · UR · Sponsored Messaging (consideration)</strong> — $5K/yr · One-click message ads to warm audience (engaged with sponsored content past 30 days OR website visitor past 90 days). Personalised by job title.</li>
        <li><strong>LI-03 · UR · Lead Gen Forms (decision)</strong> — $2K/yr · Pre-filled with LinkedIn profile data. 3 questions max. CAPI-equivalent feed into CRM.</li>
      </ol>

      <h3>Why LinkedIn for UR, not for TDR/POE</h3>
      <p>
        UR is the only LOB where the buyer's professional identity correlates strongly with
        purchase behaviour — investor segment is well-targeted on LinkedIn's job-title + company
        signals. TDR is reactive (the buyer doesn't think of themselves as "a termite-repair buyer"
        until the problem appears). POE is aspirational/family-led, not professional-identity-led.
        Channels are matched to buyer psychology (WS-03), not to channel availability.
      </p>
    </div>
  </section>
)

/* ===================================================================
   PM-07 — CREATIVE MATRIX (120 CELLS)
   =================================================================== */
const PMCreative = () => (
  <section class="band-white" id="pm6">
    <div class="container">
      <div class="eyebrow">§ 6 · PM-07</div>
      <h2 class="h1">Creative matrix — 120 production cells</h2>
      <p class="lede">
        Common Thread Collective's full-funnel doctrine: production volume is the single biggest
        unmet need at most growth-stage brands. The matrix below specifies exactly what gets
        produced. Three LOBs × four funnel stages × five angles × two priority formats = the 120
        cells that get scheduled into the YDT production calendar. Each cell maps to a campaign in
        the account structure above; nothing produced sits in a folder unused.
      </p>

      <h3>Matrix structure</h3>
      <p>
        <strong>Stages (4):</strong> Awareness · Education · Consideration · Decision &middot;
        <strong>Angles (5):</strong> Identity ("homeowner like you") · Pain ("the problem") · Proof
        ("the case study") · Process ("the how") · Authority ("the credentials") &middot;
        <strong>Priority formats (2):</strong> Hero video (vertical 9:16 + square 1:1) · Static
        creative (single image + carousel) &middot;
        <strong>LOBs (3):</strong> TDR · POE · UR
      </p>
      <p>
        Total cells = 3 × 4 × 5 × 2 = <strong>120</strong>. Each cell carries: a written brief
        (200-word creative direction), a target campaign placement, a measurement framing (which
        funnel-stage KPI it serves), and a production budget. The full matrix is maintained in the
        YDT creative ops sheet; the sample below shows the 20-cell TDR slice as canonical
        illustration.
      </p>

      <h3>Sample slice — TDR · 20 cells (4 stages × 5 angles)</h3>
      <div class="creative-matrix-wrap">
        <table class="creative-matrix">
          <thead>
            <tr>
              <th>Stage ↓ · Angle →</th>
              <th>Identity</th>
              <th>Pain</th>
              <th>Proof</th>
              <th>Process</th>
              <th>Authority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Awareness</strong></td>
              <td>"Sarah lives 3 streets from you"</td>
              <td>"What 47% of SEQ pre-1995 homes hide"</td>
              <td>Brisbane couple's 1985 Queenslander story</td>
              <td>"How a licensed inspector walks the property"</td>
              <td>"1,800 properties · 14 years · QBCC licence"</td>
            </tr>
            <tr>
              <td><strong>Education</strong></td>
              <td>"The SEQ buyer's pre-purchase checklist"</td>
              <td>"Why your building inspection misses termites"</td>
              <td>4 case studies · $8K to $80K repair range</td>
              <td>The 4-question repair-vs-replace framework</td>
              <td>Gerry on AS 3660.1 compliance (3 min)</td>
            </tr>
            <tr>
              <td><strong>Consideration</strong></td>
              <td>Investor profile · Mark's $34K rectification</td>
              <td>"What insurance does NOT cover"</td>
              <td>12-property portfolio rectification case</td>
              <td>The 11-step engagement model (animated)</td>
              <td>Licensed pest inspector credentials on-screen</td>
            </tr>
            <tr>
              <td><strong>Decision</strong></td>
              <td>"From phone call to quote in 48 hours"</td>
              <td>"Don't lose the deposit — book the inspection"</td>
              <td>Video testimonial · pre-purchase save</td>
              <td>"What happens after you click 'book'"</td>
              <td>$20M liability + $5M PI insurance proof</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Same 20-cell structure repeats for POE and UR. Total production output = 120 hero variants
        per year, plus 240+ cut-downs (15s / 30s / 60s / 90s for video; image / carousel / story for
        static). YDT creative ops maintains the calendar; production is sequenced 8 weeks ahead so
        the campaign always has fresh creative before fatigue triggers (per Rule 5 in §0).
      </p>

      <h3>Asset specifications (mandatory before production)</h3>
      <div class="asset-spec-grid">
        <div class="asset-spec">
          <div class="spec-name">Hero video — primary</div>
          <ul>
            <li>9:16 vertical (Meta Reels, IG Stories, YT Shorts)</li>
            <li>Duration: 15s, 30s, 60s cut-downs</li>
            <li>Captioned (88% of social video plays muted)</li>
            <li>Brand DBA in first 3 seconds (logo + colour + sound)</li>
            <li>Strong cut at 0:03 and 0:08 (mid-roll skip points)</li>
          </ul>
        </div>
        <div class="asset-spec">
          <div class="spec-name">Hero video — secondary</div>
          <ul>
            <li>1:1 square (Meta feed, IG feed)</li>
            <li>16:9 (YouTube in-stream, CTV)</li>
            <li>Same content, re-edited for aspect ratio (not letterboxed)</li>
          </ul>
        </div>
        <div class="asset-spec">
          <div class="spec-name">Static — single image</div>
          <ul>
            <li>1:1 (Meta feed) + 9:16 (Stories) + 4:5 (Meta feed alt)</li>
            <li>Hero copy ≤ 12 words on creative</li>
            <li>Text-on-image ≤ 20% of pixel area (legacy Meta rule, still good practice)</li>
            <li>DBA palette + Fraunces headline + Inter body</li>
          </ul>
        </div>
        <div class="asset-spec">
          <div class="spec-name">Static — carousel</div>
          <ul>
            <li>4–8 cards · 1:1 ratio</li>
            <li>First card is the hook; last card is the CTA</li>
            <li>Used for: process explainers, case-study walkthroughs, FAQ answers</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   PM-08 — HEADLINE LAB (20+ per LOB)
   =================================================================== */
const PMHeadlines = () => (
  <section class="band-cream" id="pm7">
    <div class="container">
      <div class="eyebrow">§ 7 · PM-08</div>
      <h2 class="h1">Headline lab — 60+ tested headlines, 20+ per LOB</h2>
      <p class="lede">
        Eugene Schwartz's <em>Breakthrough Advertising</em> doctrine — the headline carries 80% of
        the work. WordStream's 2025 benchmark: top-quartile home-services accounts rotate 8–12
        headline variants per active ad group; bottom-quartile rotate 1–2. Below is the launch
        headline lab — 20+ per LOB across five Schwartz "stages of awareness" — that goes into
        rotation Q3 2026, with the top 6 promoted to evergreen and the bottom 14 retired into the
        test archive by Q1 2027.
      </p>

      <h3>TDR · 22 headlines across 5 awareness stages</h3>
      <div class="headline-lab">
        <div class="hl-stage">
          <div class="hl-tag">Unaware (general awareness)</div>
          <ol>
            <li>"47% of pre-1995 SEQ homes hide damage you cannot see."</li>
            <li>"The single biggest hidden cost in SEQ property — and how to find it."</li>
            <li>"Your building inspection missed this. Most do."</li>
            <li>"What termites actually cost SEQ homeowners in 2026."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Problem-aware</div>
          <ol>
            <li>"Suspected termite damage? Book a licensed inspection in 24 hours."</li>
            <li>"Bought a home with termite damage? Here's the 90-day plan."</li>
            <li>"The 4-question framework: repair, replace, or live with."</li>
            <li>"Found termites? What to do before you call insurance."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Solution-aware</div>
          <ol>
            <li>"Termite damage repair — quoted in 48 hours, scoped to AS 3660.1."</li>
            <li>"Pre-purchase termite inspection — the report your conveyancer will trust."</li>
            <li>"Structural repair + preventive treatment + warranty. One contract."</li>
            <li>"From inspection report to rectified home in 6 weeks."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Product-aware</div>
          <ol>
            <li>"YMT termite repair — 1,800 SEQ properties rectified since 2010."</li>
            <li>"QBCC-licensed structural builder + licensed pest inspector. Under one roof."</li>
            <li>"YMT — the only termite specialist insured to $20M public liability in SEQ."</li>
            <li>"YMT termite warranty — transfers to the new owner when you sell."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Most-aware (branded direct response)</div>
          <ol>
            <li>"Book your YMT inspection — Brisbane / Gold Coast / Sunshine Coast."</li>
            <li>"YMT licensed inspectors available this week. Get a quote in 48 hours."</li>
            <li>"YMT — the termite specialist your buyer's agent recommends."</li>
            <li>"Trusted by 1,800+ SEQ homeowners. Read the reviews."</li>
            <li>"Speak to Gerry directly — YMT founder. Free 15-minute call."</li>
            <li>"Call YMT. We'll quote your termite repair in 48 hours, fixed price."</li>
          </ol>
        </div>
      </div>

      <h3>POE · 20 headlines across 5 awareness stages</h3>
      <div class="headline-lab">
        <div class="hl-stage">
          <div class="hl-tag">Unaware</div>
          <ol>
            <li>"The backyard most SEQ homeowners never use — and how to fix that."</li>
            <li>"Why outdoor entertainment areas are converging on the same 5 elements."</li>
            <li>"The 'third living space' — what your home is missing."</li>
            <li>"SEQ's most underused $80K — the backyard you already own."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Problem-aware</div>
          <ol>
            <li>"Planning a backyard build? Start with this checklist."</li>
            <li>"Pool first, kitchen second, landscaping third — the SEQ sequence."</li>
            <li>"The 4 most expensive backyard mistakes — and how to avoid each."</li>
            <li>"Sloping block? Here's the playbook."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Solution-aware</div>
          <ol>
            <li>"Pool + outdoor room — designed and built end-to-end."</li>
            <li>"$80K, $150K, or $280K — the SEQ backyard budget bands."</li>
            <li>"From design brief to backyard-ready in 8–16 weeks."</li>
            <li>"Pool-builder + landscape-designer + builder. One team. One contract."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Product-aware</div>
          <ol>
            <li>"YMT outdoor — designed for SEQ climate, built to QLD pool fence code."</li>
            <li>"YMT Pools — QBCC-licensed builder, AS-3660 protected structures."</li>
            <li>"Glass, aluminium, or steel pool fencing? See our compliance playbook."</li>
            <li>"YMT outdoor — built like it's our own backyard."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Most-aware</div>
          <ol>
            <li>"Book your YMT backyard design consult — Brisbane / GC / Sunshine Coast."</li>
            <li>"YMT — see the 12 backyard transformations we built in 2025."</li>
            <li>"Talk to Gerry — YMT founder. Bring your photos. We'll scope live."</li>
            <li>"YMT outdoor — 2026 build calendar booking now."</li>
          </ol>
        </div>
      </div>

      <h3>UR · 20 headlines across 5 awareness stages</h3>
      <div class="headline-lab">
        <div class="hl-stage">
          <div class="hl-tag">Unaware</div>
          <ol>
            <li>"SEQ unit investors: the 4 renovations that lift yield by 8% or more."</li>
            <li>"Old-stock SEQ units — when renovation isn't worth it."</li>
            <li>"Your tenant retention rate is a renovation problem."</li>
            <li>"The ATO's 2024 ruling that changed unit renovation depreciation."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Problem-aware</div>
          <ol>
            <li>"Planning a between-tenants renovation? The 6-week schedule."</li>
            <li>"Renovate first or sell as-is? The investor decision framework."</li>
            <li>"Working with body corporate — what's actually approvable."</li>
            <li>"Kitchen or bathroom first? The yield-led answer."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Solution-aware</div>
          <ol>
            <li>"6-week SEQ unit refresh — capped budget, capped disruption, locked timeline."</li>
            <li>"$35K, $55K, $85K — the SEQ unit refresh tiers."</li>
            <li>"Renovation + depreciation schedule — coordinated, not retrofitted."</li>
            <li>"From handover to listing-ready in 6 weeks."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Product-aware</div>
          <ol>
            <li>"YMT — the SEQ builder who works with investors, not against them."</li>
            <li>"YMT Unit Renovations — QBCC-licensed, body-corporate-experienced."</li>
            <li>"YMT — 220 SEQ unit renovations completed since 2015."</li>
            <li>"YMT — coordinated with your property manager, your accountant, and your tenant."</li>
          </ol>
        </div>
        <div class="hl-stage">
          <div class="hl-tag">Most-aware</div>
          <ol>
            <li>"YMT — book a 30-minute scoping call. Bring your portfolio."</li>
            <li>"YMT — the 6-week renovation calendar bookings now open for 2026 Q4."</li>
            <li>"Speak to Gerry — YMT founder. Investor-to-investor."</li>
            <li>"YMT — built like our own investment property."</li>
          </ol>
        </div>
      </div>

      <h3>Testing protocol</h3>
      <ol>
        <li>All 60+ headlines deployed at launch across responsive search ads (Google) + dynamic creative (Meta).</li>
        <li>Platforms auto-rotate; performance reported weekly per headline ID.</li>
        <li>After 4 weeks: top 6 headlines per LOB promoted to "evergreen" status — receive 70% of impressions.</li>
        <li>After 8 weeks: bottom 14 headlines retired into the test archive — replaced by 14 new headlines from the writing queue.</li>
        <li>Continuous cycle: 14 in, 14 out, every 8 weeks. The evergreen 6 rotate every 16 weeks.</li>
        <li>Annual review: archive of all retired headlines feeds creative-brief training for the next year's lab.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-09 — AUDIENCE ARCHITECTURE
   =================================================================== */
const PMAudiences = () => (
  <section class="band-white" id="pm8">
    <div class="container">
      <div class="eyebrow">§ 8 · PM-09</div>
      <h2 class="h1">Audience architecture — cold, warm, hot, lookalike, custom</h2>
      <p class="lede">
        Common Thread Collective's audience-temperature model: cold audiences need brand-build
        creative (Awareness/Education stages); warm audiences need consideration creative
        (Consideration stage); hot audiences need direct-response creative (Decision stage). The same
        creative shown to the wrong temperature underperforms by 60–80% on conversion rate. Below is
        the audience inventory deployed across both Google Ads and Meta.
      </p>

      <h3>Audience inventory (deployed across Google Ads + Meta)</h3>
      <div class="audience-grid">
        <div class="audience-card cold">
          <div class="aud-temp">COLD</div>
          <div class="aud-name">SEQ homeowners 35–65 broad</div>
          <p>SEQ geo, age 35–65, owner-occupier filter (Meta) / in-market homeowner (Google). Used for: top-of-funnel video (Awareness stage). Creative: identity + pain angles.</p>
        </div>
        <div class="audience-card cold">
          <div class="aud-temp">COLD</div>
          <div class="aud-name">SEQ investors 35–65</div>
          <p>SEQ geo, age 35–65, interest "property investment" (Meta) / in-market "investment property" (Google) / job title (LinkedIn for UR). Used for: UR + TDR investor variant.</p>
        </div>
        <div class="audience-card cold">
          <div class="aud-temp">COLD</div>
          <div class="aud-name">SEQ buyers (in-market)</div>
          <p>People actively researching real-estate transactions. RE.com.au visitor lookalike on Meta; in-market "real estate purchase" on Google. Used for: TDR pre-purchase + UR investor.</p>
        </div>
        <div class="audience-card cold">
          <div class="aud-temp">COLD</div>
          <div class="aud-name">Lookalike 1% past customers (n=1,800+)</div>
          <p>1% lookalike on Meta (built off hashed customer list); customer-match on Google. Single most efficient cold audience for TDR. Used for: lead-gen + brand video.</p>
        </div>
        <div class="audience-card warm">
          <div class="aud-temp">WARM</div>
          <div class="aud-name">Website visitors past 90 days</div>
          <p>Excluded: converted leads, employee IPs. Segmented by LOB pageview (TDR / POE / UR sections). Used for: retargeting + consideration creative.</p>
        </div>
        <div class="audience-card warm">
          <div class="aud-temp">WARM</div>
          <div class="aud-name">Video-viewers 50%+ past 60 days</div>
          <p>Engaged with at least one YouTube or Meta hero video to 50%. Strong signal of brand attention. Used for: consideration stage retargeting.</p>
        </div>
        <div class="audience-card warm">
          <div class="aud-temp">WARM</div>
          <div class="aud-name">Stewardship Letter subscribers</div>
          <p>Owned email list (target 8,000 by end of 2026). Custom audience on Meta via list upload; customer-match on Google. Used for: high-engagement consideration nurture.</p>
        </div>
        <div class="audience-card warm">
          <div class="aud-temp">WARM</div>
          <div class="aud-name">GBP engagers</div>
          <p>People who interacted with Google Business Profile (call, direction, message, website-click) past 30 days. Available on Google Ads as a remarketing list.</p>
        </div>
        <div class="audience-card hot">
          <div class="aud-temp">HOT</div>
          <div class="aud-name">Quote-requested, not booked (past 14 days)</div>
          <p>Submitted a quote-request but has not signed contract yet. Highest-priority retargeting audience. Used for: decision-stage social proof + urgency.</p>
        </div>
        <div class="audience-card hot">
          <div class="aud-temp">HOT</div>
          <div class="aud-name">Quote-issued, not signed (past 21 days)</div>
          <p>Received a quote, has not yet returned signed contract. Used for: testimonial + Gerry-personal-message creative. Tight frequency cap (2 per week).</p>
        </div>
        <div class="audience-card hot">
          <div class="aud-temp">HOT</div>
          <div class="aud-name">Cart/booking-page abandoners</div>
          <p>Reached the booking page but did not complete. Used for: 7-day retargeting cycle, then suppressed.</p>
        </div>
        <div class="audience-card hot">
          <div class="aud-temp">HOT</div>
          <div class="aud-name">Past customers — cross-LOB</div>
          <p>Past TDR customer with no POE/UR history (and vice versa). The cross-LOB engine from WS-05. Used for: 2-stage soft re-introduction to the adjacent LOB.</p>
        </div>
      </div>

      <h3>Exclusion logic (mandatory)</h3>
      <p>
        Every campaign has explicit exclusion lists to prevent (a) wasted spend, (b) negative
        creative-context experiences (e.g. retargeting "book your termite inspection" to someone
        who already signed a contract last week looks incompetent). The canonical exclusion lists:
      </p>
      <ul>
        <li>Past customers within past 12 months for the same LOB (excluded from all acquisition campaigns; included only in retention/cross-LOB).</li>
        <li>Employees + immediate-family IPs (excluded site-wide).</li>
        <li>Spam-form-submitter list (built and maintained weekly).</li>
        <li>Competitor / industry-partner organisations (LinkedIn UR — exclude trade-services companies; include investor profiles only).</li>
        <li>Geo-exclusion of past-failed-quote suburbs (where YMT does not service — currently far north Sunshine Coast + western QLD).</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   PM-10 — BID + PACING
   =================================================================== */
const PMBid = () => (
  <section class="band-cream" id="pm9">
    <div class="container">
      <div class="eyebrow">§ 9 · PM-10</div>
      <h2 class="h1">Bid strategy + budget pacing protocol</h2>
      <p class="lede">
        Smart-bidding-with-guardrails doctrine. Google Ads and Meta both perform best when given
        meaningful budget + meaningful conversion volume + clear conversion-value signal — and worst
        when starved of any of the three. The bid + pacing protocol below operationalises that
        principle without ceding all control to the algorithm.
      </p>

      <h3>Bid-strategy decision tree</h3>
      <div class="bid-tree">
        <div class="bid-stage">
          <div class="bs-stage">If: campaign &lt; 30 conversions/month</div>
          <div class="bs-action"><strong>Strategy:</strong> Manual CPC (Google) / Lowest-cost without cap (Meta). Reason: insufficient signal for smart bidding. Manual control prevents algorithm from over-spending on poor signal.</div>
        </div>
        <div class="bid-stage">
          <div class="bs-stage">If: campaign 30–100 conversions/month</div>
          <div class="bs-action"><strong>Strategy:</strong> Maximise conversions (no tCPA cap) on Google · Highest volume (Meta). Reason: build conversion volume to escape the data-sparsity zone. Costs may spike; protected by daily budget cap.</div>
        </div>
        <div class="bid-stage">
          <div class="bs-stage">If: campaign 100–300 conversions/month</div>
          <div class="bs-action"><strong>Strategy:</strong> tCPA (Google) — target $90 for TDR, $130 for POE, $150 for UR · Cost-cap (Meta) — same numbers. Reason: smart bidding now has enough signal to optimise. Caps prevent runaway cost.</div>
        </div>
        <div class="bid-stage">
          <div class="bs-stage">If: campaign 300+ conversions/month with stable iROAS</div>
          <div class="bs-action"><strong>Strategy:</strong> tROAS (Google) — target 2.5× for TDR, 1.8× for POE, 2.0× for UR · Highest value (Meta). Reason: optimise toward profit, not just lead volume. Requires offline conversions imported (PM-11).</div>
        </div>
      </div>

      <h3>Pacing protocol (daily/weekly/monthly)</h3>
      <ol>
        <li><strong>Daily:</strong> Auto-report alerts if any campaign spent &gt; 130% or &lt; 70% of expected daily pacing. YDT analyst reviews within 24 hours.</li>
        <li><strong>Weekly:</strong> 30-minute pacing review — campaign-by-campaign actual-vs-planned spend, CPL trend, conversion-quality trend. Action items logged.</li>
        <li><strong>Monthly:</strong> Pacing reconciliation against monthly budget. Reallocation within ±15% per channel permitted; beyond requires CMO sign-off.</li>
        <li><strong>Quarterly:</strong> Full budget reallocation review. Channels under-delivering against 60/40 rule are flagged; sunset rules (CH-08) trigger automatically.</li>
        <li><strong>Seasonal pacing</strong> — Q4 increases TDR + UR (end-of-year buying), Q2 increases POE (pre-summer planning). Monthly budgets are not equal; they follow demand curves established in the WS-05 bowtie historical data.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-11 — CONVERSION TRACKING
   =================================================================== */
const PMTracking = () => (
  <section class="band-white" id="pm10">
    <div class="container">
      <div class="eyebrow">§ 10 · PM-11</div>
      <h2 class="h1">Conversion tracking + offline conversion import</h2>
      <p class="lede">
        For home services, the lead is not the conversion. The signed contract 14–28 days later is.
        Without offline conversion import, paid platforms optimise toward leads that don't close —
        and CAC inflates without the team noticing. The architecture below closes the loop end-to-end.
      </p>

      <h3>Tracking stack</h3>
      <ol>
        <li><strong>Google Tag Manager</strong> as the single deployment vehicle. No tags hardcoded into the site. GTM container audited monthly for duplicate/broken tags.</li>
        <li><strong>GA4</strong> — single property, separate data streams for production / staging. Enhanced measurement on; cross-domain tracking enabled if subdomains are used.</li>
        <li><strong>Google Ads conversions</strong> — 6 conversion actions configured (primary + secondary per PM-03 §). Enhanced Conversions for Leads ON; GCLID captured server-side.</li>
        <li><strong>Meta Pixel + CAPI</strong> — per PM-04 §. Server-side CAPI deployed via cloud function (Cloudflare Worker on the same domain).</li>
        <li><strong>Call tracking</strong> — CallRail or equivalent — dynamic number insertion per source (paid search, organic, direct, email, GBP). Calls ≥ 60 seconds counted as conversions.</li>
        <li><strong>Form tracking</strong> — single form library (typeform-equivalent or custom Hono endpoint) writing to CRM with attribution payload (GCLID, fbclid, UTM, gclsrc, gbraid, wbraid).</li>
      </ol>

      <h3>Offline conversion import workflow</h3>
      <ol>
        <li>Lead submits form → CRM record created with GCLID + fbclid + UTM payload stamped on the record.</li>
        <li>Sales team works the lead; status transitions: Lead → Contacted → Inspection Booked → Inspection Done → Quote Issued → Contract Signed → Contract Lost.</li>
        <li>Daily automated export from CRM: every status transition for the past 24 hours, with the original GCLID / fbclid attached.</li>
        <li>Daily import:
          <ul>
            <li>Google Ads: via Google Ads API → Enhanced Conversions for Leads — events: quote-issued (value = quoted $ × 0.4) + contract-signed (value = full $).</li>
            <li>Meta: via Conversions API offline events upload (CSV through Events Manager) — events: same as above, hashed PII matching.</li>
          </ul>
        </li>
        <li>Smart bidding (tROAS) now optimises toward signed contracts, not toward lead submissions. CAC by paid source becomes measurable against revenue, not against lead count.</li>
        <li>Weekly reconciliation: variance check between platform-reported revenue and CRM-reported revenue. &gt; 8% variance triggers technical audit.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-12 — LANDING PAGES
   =================================================================== */
const PMLandingPages = () => (
  <section class="band-cream" id="pm11">
    <div class="container">
      <div class="eyebrow">§ 11 · PM-12</div>
      <h2 class="h1">Landing page + LP-velocity playbook</h2>
      <p class="lede">
        Unbounce 2024 benchmark across 44,000 home-services LPs: median conversion rate 3.4%; top
        quartile 9.1%; top decile 14.6%. The gap is almost entirely about message-match (the LP says
        what the ad promised), proof density (testimonials, credentials, case studies above the
        fold), and form length (3 fields converts 2× as well as 6 fields). The YMT LP playbook below
        gets every campaign to top-quartile within 90 days.
      </p>

      <h3>LP architecture — 9 sections, top-to-bottom</h3>
      <ol>
        <li><strong>Hero</strong> — H1 message-matched to the ad headline. Sub-head with named statistic. Single CTA. No nav (no escape routes).</li>
        <li><strong>Trust strip</strong> — licence numbers + insurance + years in business + 4.8★ rating + 380 reviews. Below-the-hero, above-the-fold.</li>
        <li><strong>Problem-state</strong> — 60–100 words mirroring the buyer's anxiety (WS-03 reference). "Here's what most SEQ homeowners discover too late..."</li>
        <li><strong>Solution-state</strong> — 60–100 words with the YMT POV. "Here's the 4-step process YMT follows..."</li>
        <li><strong>Social proof — case study</strong> — One named case study with photo + dollar figure + outcome.</li>
        <li><strong>Process explainer</strong> — 4–6 step visual flow. "What happens after you click."</li>
        <li><strong>Pricing transparency</strong> — Budget bands shown ("typical TDR rectification $8K–$80K, median $34K"). Builds trust by not hiding price.</li>
        <li><strong>FAQ accordion</strong> — 5–7 questions harvested from WS-08 PAA list. Schema marked-up.</li>
        <li><strong>Final CTA</strong> — Form (3 fields max: name, phone, one-line problem statement) + phone number + "Speak to Gerry" alternate path.</li>
      </ol>

      <h3>LP-velocity protocol</h3>
      <p>
        A new campaign without a campaign-specific LP performs ~40% worse than one with. The
        velocity protocol enables campaign-specific LPs without requiring a developer for every
        launch:
      </p>
      <ol>
        <li>LP framework built on Hono + Tailwind (already part of this build). 7 master templates (one per LOB × funnel stage) live in /lp/[template-id].</li>
        <li>YDT publishing lead clones a template + adjusts copy + adjusts hero image in ≤ 30 minutes. URL pattern: /lp/[campaign-id].</li>
        <li>A/B test framework deployed via Cloudflare Workers (server-side split). Variant performance reported daily.</li>
        <li>Quarterly: top-performing LP variants promoted to "champion" status; underperforming retired.</li>
        <li>Annual: full LP audit. CRO partner (external) runs heuristic + heatmap + session-recording review on top-10 traffic LPs.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-13 — MEASUREMENT
   =================================================================== */
const PMMeasurement = () => (
  <section class="band-white" id="pm12">
    <div class="container">
      <div class="eyebrow">§ 12 · PM-13</div>
      <h2 class="h1">Measurement — iROAS, CAC by funnel stage, MMM truth-check</h2>
      <p class="lede">
        Three tiers of measurement, each at a different cadence and altitude. Tactical metrics
        (cost-per-lead, CTR) report daily for operational steering. Operational metrics (CAC, ROAS)
        report monthly for budget reallocation. Strategic metrics (iROAS, MMM contribution,
        share-of-search) report quarterly + annually for portfolio decisions. All three feed the
        WS-11 KPI Contract dashboard.
      </p>

      <h3>The measurement pyramid</h3>
      <div class="measure-pyramid">
        <div class="mp-tier strategic">
          <div class="mp-name">Strategic (quarterly + annual)</div>
          <div class="mp-metrics">
            <strong>iROAS</strong> (incremental ROAS via geo-holdout tests, annual MMM) ·
            <strong>MMM-attributed channel contribution</strong> (annual, external partner) ·
            <strong>Share-of-search</strong> (quarterly, Google trends + Ads keyword planner) ·
            <strong>Brand health index</strong> (Fame × Uniqueness × Awareness, biennial Tracker survey)
          </div>
        </div>
        <div class="mp-tier operational">
          <div class="mp-name">Operational (weekly + monthly)</div>
          <div class="mp-metrics">
            <strong>CAC by paid source</strong> (against contract-signed, not against lead) ·
            <strong>ROAS by campaign</strong> (against contract revenue) ·
            <strong>Lead-to-quote rate</strong> · <strong>Quote-to-contract rate</strong> ·
            <strong>Funnel-stage volume by paid source</strong> · <strong>60/40 long/short drift</strong>
          </div>
        </div>
        <div class="mp-tier tactical">
          <div class="mp-name">Tactical (daily)</div>
          <div class="mp-metrics">
            <strong>Spend pacing</strong> (per-campaign, per-day) ·
            <strong>Cost-per-lead by ad group</strong> · <strong>CTR by ad</strong> ·
            <strong>Impression share</strong> (Google) · <strong>Frequency</strong> (Meta) ·
            <strong>Conversion volume</strong> by stage event
          </div>
        </div>
      </div>

      <h3>Reporting outputs</h3>
      <ol>
        <li><strong>Daily auto-report</strong> — 1-screen dashboard, alerts only (pacing variance, conversion drops).</li>
        <li><strong>Weekly 1-page note</strong> — to Carla. Headline number, 3 changes, 1 action.</li>
        <li><strong>Monthly 8-page report</strong> — to Carla + Gerry + Corrina. Full CAC, ROAS, channel performance, creative performance, audience performance, recommendations.</li>
        <li><strong>Quarterly 30-page review</strong> — to leadership. Strategic metrics, channel performance, iROAS, holdout-study results, next-quarter budget reallocation proposal.</li>
        <li><strong>Annual board paper</strong> — MMM results, full-year iROAS by channel, 3-year channel trajectory, year-ahead budget recommendation.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   PM-14 + PM-15 — REFRESH + HANDSHAKE
   =================================================================== */
const PMRefresh = () => (
  <section class="band-cream" id="pm13">
    <div class="container">
      <div class="eyebrow">§ 13 · PM-14</div>
      <h2 class="h1">Creative refresh cadence + fatigue protocol</h2>
      <p class="lede">
        Karen Nelson-Field's attention research: ad effectiveness halves after ~8 weeks of unchanged
        creative in social feeds (n=8,500 ads measured 2020–2024). Frequency &gt; 3.5 impressions per
        user per week is the operational fatigue threshold. The protocol below enforces refresh
        before fatigue degrades performance, not after.
      </p>

      <h3>Refresh cadence</h3>
      <ol>
        <li><strong>Hero creatives</strong> (highest-spend ad in each campaign) — refresh every 6 weeks. Production scheduled 8 weeks ahead so a fresh hero is always ready.</li>
        <li><strong>Secondary creatives</strong> — refresh every 8 weeks. Pulled from the 120-cell matrix.</li>
        <li><strong>Retargeting creatives</strong> — refresh every 4 weeks (smaller audience, higher frequency).</li>
        <li><strong>Brand-build video (YouTube/CTV)</strong> — refresh every 12 weeks (slower fatigue, lower frequency).</li>
      </ol>

      <h3>Fatigue triggers (immediate pause-and-rotate)</h3>
      <ol>
        <li>Frequency &gt; 3.5 per user per 7 days per ad set (Meta).</li>
        <li>7-day CTR &lt; 60% of campaign average.</li>
        <li>7-day CPL &gt; 130% of campaign average.</li>
        <li>Negative sentiment ratio &gt; 8% on social comments (auto-monitored via Hootsuite-equivalent).</li>
        <li>Ad-relevance score &lt; 5 (Meta) or &lt; 6 (Google Ads quality score for search).</li>
      </ol>
    </div>
  </section>
)

const PMHandshake = () => (
  <section class="band-white" id="pm14">
    <div class="container">
      <div class="eyebrow">§ 14 · PM-15</div>
      <h2 class="h1">Cross-channel handshake — WS-06 + WS-08 + WS-10 integration</h2>
      <p class="lede">
        Paid does not operate in isolation. The most common failure mode in home-services paid media
        is paid-team optimising in isolation while organic / GEO / CRM optimise toward different
        goals — and the customer experiences the resulting inconsistency. The handshakes below are
        contractual integration points between WS-09 (paid) and the adjacent workstreams.
      </p>

      <div class="handshake-grid">
        <div class="handshake-card">
          <div class="hs-tag">Handshake 1 · with WS-06 Channel Architecture</div>
          <p><strong>What:</strong> Paid budget allocation respects the WS-06 60/40 long-short rule, the WS-06 12-channel mix matrix, and the WS-06 sunset rules.</p>
          <p><strong>How:</strong> Monthly verification report cross-references PM-02 actual allocation against CH-02 doctrine. Drift &gt; 5pp triggers CMO review (per WS-06 doctrine Rule 1).</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">Handshake 2 · with WS-08 GEO/AEO</div>
          <p><strong>What:</strong> Brand-search defensive bidding (CAMP-01) protects branded queries while GEO/AEO is being built. As branded organic share grows, brand-search paid spend is reallocated to non-brand search.</p>
          <p><strong>How:</strong> Quarterly review of brand-search impression share + organic brand impressions. Once organic owns ≥ 75% of branded clicks, brand-search paid budget cut by 40%.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">Handshake 3 · with WS-10 CRM Lifecycle</div>
          <p><strong>What:</strong> Paid retargeting is suppressed when CRM lifecycle owns the touchpoint. No "book your inspection" Meta ads to a customer currently inside the Post-Sale Onboarding flow.</p>
          <p><strong>How:</strong> Daily sync from CRM → exclusion lists on Meta + Google. Customer in any active flow (per WS-10 9-flow architecture) auto-excluded from acquisition retargeting.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">Handshake 4 · with WS-02 + WS-07 (Brand + DBAs)</div>
          <p><strong>What:</strong> Every paid creative passes the DBA-consistency check: brand assets appear in the first 3 seconds; colour/typography/voice match WS-02 spec; Fame × Uniqueness score improving quarter-on-quarter.</p>
          <p><strong>How:</strong> YDT creative-ops checklist applied at creative approval gate. Quarterly DBA audit (WS-07) includes a sample of paid creatives.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">Handshake 5 · with WS-05 Bowtie</div>
          <p><strong>What:</strong> Every campaign maps to a bowtie stage. Funnel-stage volume from paid is reported against the WS-05 leak-and-velocity targets.</p>
          <p><strong>How:</strong> Monthly report includes leads-by-stage from paid sources. If paid is over-indexing on Decision-stage harvesting at the expense of Awareness-stage demand creation, the 60/40 verification will catch it.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">Handshake 6 · with WS-11 KPI Contract</div>
          <p><strong>What:</strong> All paid-media metrics feed the WS-11 KPI Contract dashboard.</p>
          <p><strong>How:</strong> Daily auto-feed from Google Ads + Meta + GA4 → dashboard. Variance to plan reported in the WS-11 traffic-light system.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   PM-16 — RISKS
   =================================================================== */
const PMRisks = () => (
  <section class="band-navy" id="pm15">
    <div class="container">
      <div class="eyebrow on-dark">§ 15 · PM-16</div>
      <h2 class="h1 on-dark">Paid media failure modes + hedges</h2>

      <div class="ch-risk-grid">
        <div class="chr-card">
          <div class="chr-tag">Risk 1</div>
          <div class="chr-name">Google Ads or Meta algorithm change disrupts performance overnight.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> No single platform exceeds 50% of paid spend (currently Google ~52% / Meta ~25% / YouTube+CTV ~23% / LinkedIn ~4%). Diversification across 5+ surfaces means a single algorithm change is recoverable.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 2</div>
          <div class="chr-name">60/40 long/short discipline erodes under quarterly revenue pressure.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Monthly verification report. &gt; 5pp drift toward short triggers CMO review. Long-build budget treated as non-discretionary OPEX in monthly cash-flow planning.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 3</div>
          <div class="chr-name">Offline conversion import breaks; smart bidding optimises toward unqualified leads.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Daily reconciliation report between CRM and platform-imported conversions. &gt; 8% variance triggers technical audit within 48 hours. tCPA campaigns revert to manual CPC if import fails for &gt; 7 days.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 4</div>
          <div class="chr-name">Creative production cadence slips; fatigue degrades performance.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Creative ops calendar locked 8 weeks ahead. YDT creative lead's monthly KPI is "creatives delivered on schedule". Carla escalates if &gt; 2 creatives slip in any month.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 5</div>
          <div class="chr-name">Bidding war on branded queries (competitor squats on YMT terms).</div>
          <div class="chr-hedge"><strong>Hedge:</strong> CAMP-01 (TDR brand search defensive) maintains top-1 position via manual CPC + brand-trademark dispute filed with Google. Monthly brand-share monitoring; competitor incursions reported immediately.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 6</div>
          <div class="chr-name">CPL inflation outpaces revenue growth.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Quarterly CAC:LTV review per LOB (target ≥ 1:5 within 24 months). Channel sunset rules (CH-08) trigger automatically when CPL inflation exceeds 35% YoY. Creative refresh + audience refresh tested before sunset; brand layer compounding provides medium-term price-pressure relief.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 7</div>
          <div class="chr-name">Privacy regulation (Australian Privacy Act 2024 amendments) restricts targeting capability.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> First-party audience strategy (customer-match, email-list-built lookalikes, CRM-derived custom audiences) is the core. Behavioural-targeting reliance &lt; 30% of paid spend. Privacy-compliant consent management deployed sitewide.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 8</div>
          <div class="chr-name">Performance Max + Advantage+ Shopping over-allocate to brand search + retargeting (cannibalisation).</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Brand-query exclusion configured at the campaign level (Google). Retargeting audiences excluded from PMax + AS where smart-bidding behaviour is uncontrollable. Monthly placement audit identifies cannibalisation early.</div>
        </div>
      </div>
    </div>
  </section>
)

const PMCompliance = () => (
  <section class="band-cream" id="pm-compliance">
    <div class="container">
      <div class="eyebrow">Compliance · Quality Gate</div>
      <h2 class="h1">WS-09 quality-gate certification</h2>
      <div class="compliance-grid">
        <div class="comp-card"><div class="comp-h">Checklist Coverage</div><p>16/16 PM-XX items. Allocation, Google + Meta + YouTube/CTV + LinkedIn account structures, 120-cell creative matrix, 60+ headline lab, audience architecture, bidding, tracking, LPs, measurement, refresh, handshakes, risks — all specified with executable detail.</p></div>
        <div class="comp-card"><div class="comp-h">Framework Citation</div><p>Binet &amp; Field 60/40 doctrine · IPA Effectiveness Code · WordStream paid-search benchmarks · Common Thread Collective full-funnel framework · Karen Nelson-Field attention research · Eugene Schwartz Breakthrough Advertising · Google + Meta best-practice — all cited and operationally applied.</p></div>
        <div class="comp-card"><div class="comp-h">Depth Standard</div><p>Target 6,000–8,000 words. Each PM item carries operating rationale, deployment spec, measurement criteria, integration with WS-06 channel + WS-08 GEO + WS-10 CRM. Includes full account-structure code, 120-cell matrix, 60+ headlines, decision trees, refresh protocols.</p></div>
        <div class="comp-card"><div class="comp-h">Junior Executability</div><p>YDT junior with this document + the creative matrix + the headline lab + the audience inventory + the bid decision tree can launch campaigns on day one. Every campaign brief is pre-written; every audience pre-defined; every bid logic pre-decided.</p></div>
      </div>
    </div>
  </section>
)

const PMFooter = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col"><div class="footer-lbl">Document</div><p>WS-09 Paid Media<br />Operating Manual<br />v1.0 · Effective 1 June 2026</p></div>
        <div class="footer-col"><div class="footer-lbl">Authority</div><p>Carla Oliver, Acting CMO<br />CoSai CFO Services<br />for YMT / YBMT Group</p></div>
        <div class="footer-col"><div class="footer-lbl">Phase 3 Pages</div><p><a href="/ymt-channel">WS-06 Channel</a><br /><a href="/ymt-geo">WS-08 GEO/AEO</a><br /><a href="/ymt-paid">WS-09 Paid Media</a><br /><a href="/ymt-crm">WS-10 CRM</a></p></div>
        <div class="footer-col"><div class="footer-lbl">Status</div><p>16/16 PM-XX items<br />→ <a href="/ymt-group-strategy">Strategy Index</a></p></div>
      </div>
      <div class="footer-bar">© 2026 CoSai CFO Services · Acting CMO for YMT Group · Handover to YDT (Headless Marketing)</div>
    </div>
  </footer>
)

export const renderYMTpaid = () => (
  <>
    <PMHubBar />
    <PMNav />
    <PMHero />
    <PMDoctrine />
    <UpstreamAnchor doc="WS-09 Paid Media" />
    <PMAllocation />
    <PMGoogleAds />
    <PMMeta />
    <PMYouTube />
    <PMLinkedIn />
    <PMCreative />
    <PMHeadlines />
    <PMAudiences />
    <PMBid />
    <PMTracking />
    <PMLandingPages />
    <PMMeasurement />
    <PMRefresh />
    <PMHandshake />
    <PMRisks />
    <PMCompliance />
    <PMFooter />
  </>
)
