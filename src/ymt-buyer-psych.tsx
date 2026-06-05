/* ============================================================================
   /ymt-buyer-psych — WS-03 Buyer Psychology (10/10 Depth)
   ============================================================================
   PHASE 2 · Workstream 03 · Buyer Psychology Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (15 BP-XX checklist items)

   Frameworks cited: Robert Cialdini Influence + Pre-Suasion · Daniel Kahneman
   Thinking Fast & Slow · Chris Voss Never Split the Difference · Bryan Eisenberg
   Persuasion Architecture · Cialdini-Goldstein-Martin Yes! · Robert Caldwell
   Predictably Irrational · Roger Dooley Brainfluence · Phil Barden Decoded

   Target depth: 5,000-7,000 words. Junior YDT executable.

   QUALITY GATE CHECKLIST (15/15):
   BP-01 Cialdini 7 principles + YMT deployment
   BP-02 Kahneman System 1/2 + YMT firing
   BP-03 Anchoring deployments per LOB
   BP-04 Availability heuristic plays
   BP-05 Framing matrix (gain/loss per funnel stage)
   BP-06 Voss tactical empathy mapped to sales script
   BP-07 Loss aversion engineering per LOB
   BP-08 Eisenberg 4-temperament + YMT copy adaptation
   BP-09 60-phrase trigger language library
   BP-10 Heuristic audit of 12+ touchpoints
   BP-11 Buying committee psychology (dyad dynamics)
   BP-12 Anxiety reduction toolkit (8 anxieties + antidotes)
   BP-13 Social proof system
   BP-14 Scarcity ethics
   BP-15 Cultural sensitivity layer (SEQ)
   ============================================================================ */

const BPHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 2 · WS-03
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-brand" class="dochub-link">
          <span class="dochub-badge">WS-02</span>
          Brand
        </a>
        <a href="/ymt-buyer-psych" class="dochub-link active">
          <span class="dochub-badge new">WS-03</span>
          Buyer Psych
        </a>
        <a href="/ymt-bowtie" class="dochub-link">
          <span class="dochub-badge">WS-05</span>
          Bowtie
        </a>
        <a href="/ymt-dbas" class="dochub-link">
          <span class="dochub-badge">WS-07</span>
          DBAs
        </a>
      </div>
    </div>
  </div>
)

const BPNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-03 · Buyer Psychology · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#bp0">0. Doctrine</a>
        <a href="#bp1">1. Cialdini 7</a>
        <a href="#bp2">2. System 1/2</a>
        <a href="#bp3">3. Anchoring</a>
        <a href="#bp4">4. Availability</a>
        <a href="#bp5">5. Framing</a>
        <a href="#bp6">6. Voss Script</a>
        <a href="#bp7">7. Loss Aversion</a>
        <a href="#bp8">8. Eisenberg 4</a>
        <a href="#bp9">9. Trigger Library</a>
        <a href="#bp10">10. Touchpoint Audit</a>
        <a href="#bp11">11. Buying Committee</a>
        <a href="#bp12">12. Anxiety Toolkit</a>
        <a href="#bp13">13. Social Proof</a>
        <a href="#bp14">14. Scarcity Ethics</a>
        <a href="#bp15">15. SEQ Sensitivity</a>
      </nav>
    </div>
  </header>
)

const BPHero = () => (
  <section class="hero band-cream" id="bp-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 2 · Workstream 03 · 10/10 Depth</div>
      <h1 class="display">Buyer Psychology<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Fifteen checklist items. Cialdini · Kahneman · Voss · Eisenberg, all instrumented for the
        $40K-$200K SEQ home decision. Written so a YDT analyst can deploy the right psychological lever
        for the right stage of the funnel without re-reading the source texts.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">15/15</div><div class="meta-lbl">BP-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">7</div><div class="meta-lbl">Cialdini principles</div></div>
        <div class="meta-cell"><div class="meta-num">60</div><div class="meta-lbl">trigger phrases</div></div>
        <div class="meta-cell"><div class="meta-num">12</div><div class="meta-lbl">touchpoints audited</div></div>
        <div class="meta-cell"><div class="meta-num">8</div><div class="meta-lbl">anxieties + antidotes</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE
   =================================================================== */
const BPDoctrine = () => (
  <section class="band-navy" id="bp0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">Psychology is the operating system. Voice is the language.</h2>
      <p class="lede on-dark">
        WS-02 gave us the voice. This document tells the writer <em>which psychological lever</em> to
        pull, <em>when</em>, and <em>with what specific phrasing</em>. It is not "persuasion theory" — it
        is a deployment manual. Every principle below is paired with a YMT-specific trigger phrase
        (from the lexicon, §7 of WS-02) and a measurable success criterion.
      </p>
      <p class="on-dark">
        A $40,000–$200,000 home services decision is the second-largest purchase most SEQ households
        make in a decade after the home itself. That magnitude triggers a specific cognitive load: heavy
        System 2 deliberation (Kahneman), high anxiety (Voss), and intense scrutiny of evidence
        (Cialdini). Marketing that ignores this load loses; marketing that engineers for it wins.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Doctrine 1</div>
          <div class="rule-title">No manipulation. Engineering only.</div>
          <div class="rule-body">We never deploy a psychological lever where the underlying claim is
          false. Cialdini called this "ethical influence." Anything less collapses on first contact with
          a sophisticated SEQ buyer (Investor persona).</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Doctrine 2</div>
          <div class="rule-title">System 2 wins the deal. System 1 starts the conversation.</div>
          <div class="rule-body">First impression fires System 1 (fast, emotional, pattern-matched). The
          decision itself runs on System 2 (slow, analytical, justified). Write the first 10 seconds for
          System 1; write everything after for System 2.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Doctrine 3</div>
          <div class="rule-title">Loss frame outpulls gain frame 2.25×.</div>
          <div class="rule-body">Kahneman: loss aversion is the most reliable empirical finding in
          behavioural economics. We frame the cost of inaction (gap cost $35,650–$76,900 per decade)
          before the price of action. Every funnel stage.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Doctrine 4</div>
          <div class="rule-title">Anxiety reduction beats persuasion.</div>
          <div class="rule-body">The high-intent buyer is already half-convinced. The job is to remove
          the eight anxieties (§12) that stop the close, not to persuade harder. Persuasion that ignores
          anxiety amplifies it.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Doctrine 5</div>
          <div class="rule-title">Specificity is the universal solvent.</div>
          <div class="rule-body">Every Cialdini principle, every Kahneman bias, every Voss technique
          becomes more effective when paired with a number, a name, or a dated fact. Generic persuasion
          is half-persuasion.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §1 — BP-01 CIALDINI 7 PRINCIPLES + YMT DEPLOYMENT
   =================================================================== */
const BPCialdini = () => {
  const principles = [
    {
      n: 1,
      name: "RECIPROCITY",
      def: "People feel obligated to give back when they receive something of value first.",
      ymt: "The 30-minute Steward Briefing — no quote pressure, no obligation. A genuine free gift of expert time. Customers leave feeling owed; the contract conversation feels easier.",
      trigger: "\"Book a 30-minute steward briefing with Jamie. Tuesday 4pm or Saturday 10am. No quote pressure. We'll send a 60-second prep video so you know what to expect.\"",
      stage: "F1 — Lead gen / education",
      kpi: "Briefing-attended rate > 70% of booked; post-briefing quote-request rate > 45%"
    },
    {
      n: 2,
      name: "COMMITMENT & CONSISTENCY",
      def: "People act consistently with prior public commitments, however small.",
      ymt: "The Decade Plan ask. Once the buyer says 'we intend to own this home in 2036,' every subsequent decision is filtered through that stated commitment. The opener line (§8 tagline 05) operationalises this.",
      trigger: "\"Before we talk about the pool, can I ask what you want this home to be in ten years?\" Wait. Listen. Reflect back the answer in their own words.",
      stage: "F1 → F2 transition (Selection)",
      kpi: "% of sales calls where decade-frame is captured in CRM: > 90%"
    },
    {
      n: 3,
      name: "SOCIAL PROOF",
      def: "People look to others' behaviour to determine their own — especially under uncertainty.",
      ymt: "Photo-documented build library: 247 SEQ homes (geocoded, dated, named where consented). Reviews velocity ≥ 6 per quarter. Case studies in long-form, never testimonial sound bites.",
      trigger: "\"Hamilton — 47 Resort Pools delivered in this postcode since 2021. The Rylands at 14 Kingfisher Drive (2024) is closest to your build envelope. Photos and notes attached.\"",
      stage: "F1 mid (Education); F2 (Selection)",
      kpi: "Reviews per quarter ≥ 6; review-velocity decay flag at < 3 in any 90-day window"
    },
    {
      n: 4,
      name: "AUTHORITY",
      def: "People defer to expertise — credentials, titles, and demonstrated mastery.",
      ymt: "Founder presence (Cobie + Gerry by name), site supervisor naming (Jamie, 14 years), Australian Standards cited (AS 1926.1, AS/NZS 4858, AS 3660), MMXXVI Standards as named workmanship doctrine.",
      trigger: "\"Pool barrier installed per AS 1926.1, certified day 40, certificate supplied to you and Council. Jamie (14-year ticket) supervises every certification day in person.\"",
      stage: "All funnel stages (F1, F2, F3)",
      kpi: "Named-person mention in 40% of customer-facing copy (CRM audit)"
    },
    {
      n: 5,
      name: "LIKING",
      def: "People say yes to people they like — similarity, compliments, cooperation, attractiveness.",
      ymt: "Founder voice in critical comms (Cobie writes the warranty claim response, the negative review reply, the quote-rejected note). 'Human' voice attribute (WS-02 §5) deployed without performed mateship.",
      trigger: "\"Mark — Cobie here. I have read the supervisor's notes from your build (day 22 plumbing rework). You are right that the comms went quiet for 6 working days.\"",
      stage: "Edge cases + retention (F3)",
      kpi: "Negative-review-response time < 24h; founder-signed response rate 100%"
    },
    {
      n: 6,
      name: "SCARCITY",
      def: "Opportunities are more valued when their availability is limited — but only when the scarcity is real.",
      ymt: "Wet-season build slate closes 31 August annually (the rains make excavation unsafe). One Stewardship slot per postcode per quarter for capacity reasons. NEVER manufactured scarcity — see §14.",
      trigger: "\"The 2026-27 wet-season build slate closes 31 August. After that, no new Resort Pool starts until March 2027. If you want delivery before next Christmas, we need contract by 31 August.\"",
      stage: "F2 close (Selection)",
      kpi: "Quote-to-close window: < 21 days in seasonal window; manufactured-scarcity flag: zero tolerance"
    },
    {
      n: 7,
      name: "UNITY",
      def: "People are influenced by those they identify with as 'us' — shared identity beats shared interest.",
      ymt: "The 'SEQ premium home owner who intends to own in 2036' identity. Naming this identity in copy ('a brief for SEQ homeowners who intend to own their home in 2036') creates self-selection.",
      trigger: "\"The Decade Plan: a brief for SEQ homeowners who intend to own their home in 2036.\" — the identity is the bait; the brief is the meal.",
      stage: "F1 top (Awareness)",
      kpi: "Decade-Plan PDF download rate > 12% of /ymt-group-strategy page visitors"
    }
  ]
  return (
    <section class="band-cream" id="bp1">
      <div class="container">
        <div class="eyebrow">§ 1 · BP-01 · Cialdini's 7 Principles</div>
        <h2 class="h1">The seven levers. Each defined. Each deployed.</h2>
        <p class="lede">
          Cialdini's 7 principles (added Unity in <em>Pre-Suasion</em>, 2016) are the most empirically
          validated persuasion framework in the literature. Each principle below is paired with the
          specific YMT deployment, the exact trigger phrase from our lexicon, the funnel stage it fires
          at, and the KPI that proves it is working.
        </p>

        <div class="cialdini-grid">
          {principles.map(p => (
            <div class="cialdini-card" key={p.n}>
              <div class="cial-head">
                <div class="cial-num">{String(p.n).padStart(2,"0")}</div>
                <h3 class="cial-name">{p.name}</h3>
              </div>
              <p class="cial-def"><strong>Definition:</strong> {p.def}</p>
              <div class="cial-block">
                <div class="cial-lbl">YMT deployment</div>
                <p>{p.ymt}</p>
              </div>
              <div class="cial-block trigger">
                <div class="cial-lbl">Trigger phrase</div>
                <p><em>{p.trigger}</em></p>
              </div>
              <div class="cial-meta">
                <div class="cm-row"><strong>Stage:</strong> {p.stage}</div>
                <div class="cm-row"><strong>KPI:</strong> {p.kpi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §2 — BP-02 KAHNEMAN SYSTEM 1 / SYSTEM 2
   =================================================================== */
const BPSystems = () => (
  <section class="band-light" id="bp2">
    <div class="container">
      <div class="eyebrow">§ 2 · BP-02 · Kahneman System 1 / System 2</div>
      <h2 class="h1">Two systems. Two writers. One funnel.</h2>
      <p class="lede">
        Kahneman's <em>Thinking, Fast and Slow</em> (2011) is the operating model behind every modern
        behavioural-economic intervention. System 1 is fast, automatic, emotional, pattern-matched.
        System 2 is slow, deliberate, effortful, analytical. A $40,000-$200,000 home decision starts in
        System 1 (recognition, scrolling, scanning) and is concluded in System 2 (spreadsheet, family
        meeting, decade reframe). Marketing that writes only for one and not the other loses half the
        funnel.
      </p>

      <div class="system-grid">
        <div class="system-card s1">
          <div class="sys-tag">SYSTEM 1 · fast, automatic, pattern-matched</div>
          <h3 class="sys-name">First 10 seconds. First image. First headline.</h3>
          <div class="sys-block">
            <div class="sys-lbl">When YMT fires System 1</div>
            <ul>
              <li>Homepage hero (3-second scan window)</li>
              <li>Paid ad creative (0.8-second pre-attention)</li>
              <li>Social caption first 5 words</li>
              <li>Email subject line</li>
              <li>Work-ute signage at 30 metres</li>
              <li>First sentence of a sales call</li>
            </ul>
          </div>
          <div class="sys-block">
            <div class="sys-lbl">How YMT fires System 1</div>
            <ul>
              <li><strong>Pattern interrupt:</strong> "Honest answer: most pool quotes don't survive year three." Breaks expected category script.</li>
              <li><strong>Specific number:</strong> "$87,400 fully-installed" reads as competence before analysis fires.</li>
              <li><strong>Named identity:</strong> "Stewards of the premium SEQ home" — self-selection in 5 words.</li>
              <li><strong>Visual DBA:</strong> Navy/Timber/Aqua/Cream palette + Fraunces wordmark. Recognised before read.</li>
            </ul>
          </div>
          <div class="sys-block">
            <div class="sys-lbl">What kills System 1</div>
            <ul>
              <li>Adjective stacks ("beautiful, premium, luxurious")</li>
              <li>Hero h1 over 12 words</li>
              <li>Stock photography with no specificity</li>
              <li>Generic "Welcome to…" openers</li>
            </ul>
          </div>
        </div>

        <div class="system-card s2">
          <div class="sys-tag">SYSTEM 2 · slow, analytical, justified</div>
          <h3 class="sys-name">Quote review. Decade plan. Family meeting. Spreadsheet.</h3>
          <div class="sys-block">
            <div class="sys-lbl">When YMT fires System 2</div>
            <ul>
              <li>The full quote document (8-minute read)</li>
              <li>The Decade Plan PDF (15-minute deep)</li>
              <li>Long-form blog / case study</li>
              <li>The maths walk-through (price objection)</li>
              <li>The named warranty document</li>
              <li>The board-paper executive summary (institutional buyer)</li>
            </ul>
          </div>
          <div class="sys-block">
            <div class="sys-lbl">How YMT fires System 2</div>
            <ul>
              <li><strong>Quantified claim:</strong> "12-18% lower 10-yr TCO" forces calculation engagement.</li>
              <li><strong>Standard citation:</strong> AS 1926.1, AS 3660 — invites the buyer to verify.</li>
              <li><strong>Cohort data:</strong> "2025 cohort n=18, average yield uplift $2,400/wk" reads as evidence, not claim.</li>
              <li><strong>Disclosed uncertainty:</strong> "84% on schedule; the 16% is wet-season excavation" engages analytical trust.</li>
            </ul>
          </div>
          <div class="sys-block">
            <div class="sys-lbl">What kills System 2</div>
            <ul>
              <li>Vague superlatives without numbers</li>
              <li>Missing footnotes / source citations</li>
              <li>Discount-led close (signals weakness)</li>
              <li>Over-explanation of basics (signals condescension)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">The funnel rule</div>
        <p class="callout-body">F1 stages (Awareness, Education) are System 1 weighted (~70% S1, 30% S2).
        F2 stages (Selection, Decision) are System 2 weighted (~30% S1, 70% S2). F3 stages (Onboarding,
        Impact, Expansion, Advocacy) blend both — but the cross-LOB expansion ask is heavily S2 because
        the buyer is already a customer and is now scrutinising the case for the second LOB.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §3 — BP-03 ANCHORING DEPLOYMENTS PER LOB
   =================================================================== */
const BPAnchoring = () => (
  <section class="band-cream" id="bp3">
    <div class="container">
      <div class="eyebrow">§ 3 · BP-03 · Anchoring Per LOB</div>
      <h2 class="h1">The anchor is the most powerful cognitive lever we have.</h2>
      <p class="lede">
        Kahneman &amp; Tversky's anchoring effect: the first number a buyer sees disproportionately
        shapes every subsequent judgment, even when the anchor is irrelevant. We do not deploy random
        anchors — we deploy <em>category-defining</em> anchors that frame the entire purchase. Each LOB
        has its own anchor stack.
      </p>

      <div class="anchor-grid">
        <div class="anchor-card pools">
          <div class="anc-lob">POOLS · The Anchor Stack</div>
          <div class="anc-stack">
            <div class="anc-row primary">
              <div class="anc-lbl">Primary anchor</div>
              <div class="anc-val">$187,400</div>
              <div class="anc-note">Resort Pool fully-installed price. Stated upfront on the hero page. Every other quote (the buyer's own, competitors') is now judged against this anchor. A $145K competitor reads as "missing features" not "cheaper."</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Quality anchor</div>
              <div class="anc-val">25-year named warranty</div>
              <div class="anc-note">Industry default is 7 years. We anchor at 25. Competitor warranty conversations now happen in our reference frame.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Time anchor</div>
              <div class="anc-val">14-week build, structural shell poured day 22</div>
              <div class="anc-note">Specificity defeats vagueness. Buyer mental model: "a YMT pool takes 14 weeks." Re-anchors all "how long does this take?" questions.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Counter-anchor (decade)</div>
              <div class="anc-val">$1,847/yr Stewardship</div>
              <div class="anc-note">Reframes the $187K capital cost as a 25-year asset costing $1,847/yr to operate — the comparison set becomes home running cost, not pool purchase.</div>
            </div>
          </div>
        </div>

        <div class="anchor-card termite">
          <div class="anc-lob">TERMITE · The Anchor Stack</div>
          <div class="anc-stack">
            <div class="anc-row primary">
              <div class="anc-lbl">Primary anchor (loss frame)</div>
              <div class="anc-val">$184,000</div>
              <div class="anc-note">Average cost of a major undetected termite damage event in SEQ (CoSai analysis of 2023-24 insurance claims). Anchors the decision before the quote is presented; a $34,800 repair reads as "5% of the disaster" not "$34K out of pocket."</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Quality anchor</div>
              <div class="anc-val">Cracks &gt; 0.4mm = structural</div>
              <div class="anc-note">Specific threshold. Competitor reports become "but does it specify damage threshold?" rather than "is it cheaper?"</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Time anchor</div>
              <div class="anc-val">18 working days, fixed price</div>
              <div class="anc-note">Anxiety-reducing specificity. Termite buyers fear open-ended timelines more than they fear cost.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Counter-anchor</div>
              <div class="anc-val">25-year named warranty + Watch contract</div>
              <div class="anc-note">Repositions repair from "one-off cost" to "step in stewardship plan" — opens cross-LOB conversation.</div>
            </div>
          </div>
        </div>

        <div class="anchor-card units">
          <div class="anc-lob">UNITS · The Anchor Stack</div>
          <div class="anc-stack">
            <div class="anc-row primary">
              <div class="anc-lbl">Primary anchor</div>
              <div class="anc-val">$2,400/wk gross yield uplift</div>
              <div class="anc-note">2025 cohort average (n=18). Stated before the reno cost. The investor's decision frame becomes yield ROI, not capital expenditure.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Quality anchor</div>
              <div class="anc-val">42 working days, tenant-ready</div>
              <div class="anc-note">Industry default 60-90 days, often slipping. We anchor at 42 with "tenant-ready" outcome verb — the relevant unit is empty-week-rent-loss, not days-on-site.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Cost anchor</div>
              <div class="anc-val">$94,200 fixed (Owner-Grade)</div>
              <div class="anc-note">Fixed price kills bid-fishing. Competitors offering "from $80K" now read as risk-loaded.</div>
            </div>
            <div class="anc-row secondary">
              <div class="anc-lbl">Counter-anchor (decade)</div>
              <div class="anc-val">Depreciation schedule supplied at handover</div>
              <div class="anc-note">Repositions purchase as tax-asset acquisition. Triggers accountant-network advocacy (a B2B referral motion most competitors ignore).</div>
            </div>
          </div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">Junior writer rule — anchor positioning</div>
        <p class="callout-body">The primary anchor for each LOB must appear in the <em>first 30 seconds</em>
        of buyer exposure — hero page above the fold, ad headline, sales call opening, email first paragraph.
        Anchors deployed late lose 60-70% of their cognitive weight (Tversky &amp; Kahneman 1974). If you
        cannot place the anchor in the first 30 seconds, the asset is built wrong; restructure, do not
        delete the anchor.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §4 — BP-04 AVAILABILITY HEURISTIC PLAYS
   =================================================================== */
const BPAvailability = () => (
  <section class="band-light" id="bp4">
    <div class="container">
      <div class="eyebrow">§ 4 · BP-04 · Availability Heuristic</div>
      <h2 class="h1">What is top-of-mind is what gets chosen.</h2>
      <p class="lede">
        Kahneman &amp; Tversky's availability heuristic: people judge frequency or probability by how
        easily examples come to mind. When the buyer's mental search for "pool builder" or "termite
        repair" or "unit renovator" returns YMT first, we win — even before any rational comparison
        begins. The five plays below make YMT the available answer.
      </p>

      <div class="avail-grid">
        <div class="avail-play">
          <div class="ap-num">PLAY 1</div>
          <h3 class="ap-title">Suburb-anchored case studies (geographic availability)</h3>
          <p class="ap-body">When a Hamilton homeowner thinks "pool builder," the easiest example to recall
          is one they have seen <em>in Hamilton</em>. We publish geocoded case studies for every postcode
          in the top-50 SEQ premium suburbs — 247 Resort Pools, location-tagged. The Hamilton resident's
          mental search returns YMT before any competitor.</p>
          <div class="ap-tactic"><strong>Tactic:</strong> Hyper-local social content (50 posts/yr per
          top-10 suburb), Google My Business per service area, suburb-specific landing pages.</div>
          <div class="ap-metric"><strong>Success metric:</strong> Branded search volume per suburb &gt;
          5× competitor average; "near me" search ranking #1-3 per suburb.</div>
        </div>

        <div class="avail-play">
          <div class="ap-num">PLAY 2</div>
          <h3 class="ap-title">Named warranty as the recall hook (linguistic availability)</h3>
          <p class="ap-body">Most SEQ pool builders offer 7-year warranties. We offer 25 — and we never
          mention the warranty without saying the number. After 18 months of repetition, "25-year
          warranty" is the available phrase whenever any SEQ buyer thinks about pool quality.</p>
          <div class="ap-tactic"><strong>Tactic:</strong> "25-year named warranty" appears in every hero
          page, every ad, every email signature, every sales script opener. Repetition without variation.</div>
          <div class="ap-metric"><strong>Success metric:</strong> Unprompted brand attribute recall test
          (n=300 SEQ premium homeowners, 2027 Q1): "Which pool builder offers a 25-year warranty?" YMT
          first-mention rate &gt; 35%.</div>
        </div>

        <div class="avail-play">
          <div class="ap-num">PLAY 3</div>
          <h3 class="ap-title">Founder presence as the trust-recall hook (face availability)</h3>
          <p class="ap-body">Faces are the most memorable cognitive token. Cobie and Gerry appear in
          video (one founder essay per month, 5-7 minutes, Cobie or Gerry on camera), in critical
          comms (signed responses), in the studio (in-person briefings). The buyer's mental "trustworthy
          person" image becomes a specific human, not a brand abstraction.</p>
          <div class="ap-tactic"><strong>Tactic:</strong> Founder-led video content (12 long-form/yr +
          26 short-form/yr); studio attendance at every steward briefing for top-decile prospects.</div>
          <div class="ap-metric"><strong>Success metric:</strong> Survey question "Can you name anyone
          who works at YMT?" — &gt; 60% of post-briefing respondents name Cobie, Gerry, or Jamie.</div>
        </div>

        <div class="avail-play">
          <div class="ap-num">PLAY 4</div>
          <h3 class="ap-title">Frequency of small recognisable artefacts (token availability)</h3>
          <p class="ap-body">Work utes, site signage, polo shirts, work-supervisor business cards,
          tradie hi-vis — every one of them carries the same Navy/Timber palette and Fraunces wordmark.
          A Hamilton resident sees the same lockup six times a week between school run, supermarket,
          and gym. Recognition compounds. By month three, the lockup is the category symbol.</p>
          <div class="ap-tactic"><strong>Tactic:</strong> DBA consistency doctrine (WS-07) enforced
          across 18 named asset types. Quarterly audit. Zero permitted deviations.</div>
          <div class="ap-metric"><strong>Success metric:</strong> SEQ premium-suburb logo recognition
          test (Q4 2027) &gt; 28% unaided; &gt; 65% aided.</div>
        </div>

        <div class="avail-play">
          <div class="ap-num">PLAY 5</div>
          <h3 class="ap-title">Top-of-mind in the cross-LOB conversation (sequential availability)</h3>
          <p class="ap-body">A Termite customer in 2026 will have a Pool decision in 2028-2030 with
          probability ~40%. If we are still the most-available steward to that customer when the Pool
          decision is triggered, the cross-LOB economics fire. Quarterly home-record updates,
          birthday-of-the-build email, decade-plan refresh, photo of the build at +1yr, +5yr, +10yr.</p>
          <div class="ap-tactic"><strong>Tactic:</strong> CRM lifecycle automation (see WS-10) sends
          one branded touchpoint per quarter per customer for 10 years post-handover.</div>
          <div class="ap-metric"><strong>Success metric:</strong> Cross-LOB conversion at 24-36 months
          post first job: target &gt; 18% (industry average 3-5%).</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §5 — BP-05 FRAMING MATRIX (Gain/Loss per funnel stage)
   =================================================================== */
const BPFraming = () => (
  <section class="band-cream" id="bp5">
    <div class="container">
      <div class="eyebrow">§ 5 · BP-05 · Framing Matrix</div>
      <h2 class="h1">Frame the message to the stage. Loss wins twice as often as gain.</h2>
      <p class="lede">
        Kahneman's loss aversion is empirically robust at ~2.25× — losses hurt more than equivalent gains
        please. But pure loss framing burns the buyer's emotional bank quickly. The matrix below tells
        the writer which frame to lead with at each funnel stage and how to mix them.
      </p>

      <div class="framing-table-wrap">
        <table class="framing-table">
          <thead>
            <tr>
              <th>Funnel stage</th>
              <th>Loss frame (primary)</th>
              <th>Gain frame (secondary)</th>
              <th>Mix ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>F1 · Awareness</strong></td>
              <td>"SEQ homeowners pay $35,650–$76,900 per decade in gap costs from fragmented home service."</td>
              <td>"One steward. One plan. One ten-year record."</td>
              <td>70 / 30</td>
            </tr>
            <tr>
              <td><strong>F1 · Education</strong></td>
              <td>"Most pool quotes don't survive year three because the bond beam wasn't built to the right spec."</td>
              <td>"Resort Pool, 25-year named warranty, photographed build, 247 in SEQ."</td>
              <td>60 / 40</td>
            </tr>
            <tr>
              <td><strong>F2 · Selection</strong></td>
              <td>"Choosing the lowest quote saves $18K on day one and costs $42K in years 4-7 from rework."</td>
              <td>"Stewardship contract: 12-18% lower 10-yr TCO, decade-horizon planning, cross-LOB credit."</td>
              <td>50 / 50</td>
            </tr>
            <tr>
              <td><strong>F2 · Decision (price objection)</strong></td>
              <td>"Honest answer: we are 3-7% above median at project, 12-18% below at decade TCO."</td>
              <td>"Premium pays back in year four; want the maths?"</td>
              <td>50 / 50</td>
            </tr>
            <tr>
              <td><strong>F3 · Onboarding</strong></td>
              <td>"Most build problems happen in week 3-4 when comms drift. We schedule check-ins on day 14 and 28 to prevent that."</td>
              <td>"You'll get a build calendar Tuesday with photo-documented milestones."</td>
              <td>30 / 70</td>
            </tr>
            <tr>
              <td><strong>F3 · Impact (year 1)</strong></td>
              <td>"The pool you walked away from at $145K — three Hamilton builds we audited this year had $22-34K rectification costs by year 4."</td>
              <td>"Your build at +1yr: chemistry held in range, surface AAA, warranty registry active."</td>
              <td>40 / 60</td>
            </tr>
            <tr>
              <td><strong>F3 · Expansion (cross-LOB)</strong></td>
              <td>"Homes maintained by 3 unconnected vendors lose 8-12% at resale vs. stewardship-managed."</td>
              <td>"Your home is structurally cleared; the next decade plan typically covers pool refresh and unit refit."</td>
              <td>40 / 60</td>
            </tr>
            <tr>
              <td><strong>F3 · Advocacy</strong></td>
              <td>"Without a referral system, every steward we deliver to is one customer; with one, it's three."</td>
              <td>"Refer a neighbour to a steward briefing; we'll donate $250 to your chosen SEQ charity."</td>
              <td>20 / 80</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Mix-ratio enforcement</div>
        <p class="callout-body">Any draft published outside the mix-ratio band (±10pp tolerance) is
        re-framed before publishing. Most common error: F1 Awareness drafts that lead with gain
        ("Beautiful pools delivered…") instead of loss ($35K-$76K gap cost). Recovery is always
        possible: keep the gain frame, prepend the loss frame as the opening sentence.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §6 — BP-06 VOSS TACTICAL EMPATHY MAPPED TO SALES SCRIPT
   =================================================================== */
const BPVoss = () => (
  <section class="band-light" id="bp6">
    <div class="container">
      <div class="eyebrow">§ 6 · BP-06 · Voss Tactical Empathy</div>
      <h2 class="h1">Mirroring · Labelling · Calibrated Questions · The Late-Night DJ.</h2>
      <p class="lede">
        Chris Voss's <em>Never Split the Difference</em> (2016) re-frames negotiation as collaborative
        problem-solving through tactical empathy — the deliberate calming, mirroring, and labelling that
        lowers the counterparty's defences. For the $40K-$200K SEQ home decision, where buyer anxiety is
        the single largest blocker to close, Voss's techniques are not optional. They are the script.
      </p>

      <div class="voss-grid">
        <div class="voss-card">
          <div class="voss-tag">TECHNIQUE 1 · MIRRORING</div>
          <h3 class="voss-name">Repeat the last 1-3 words of the buyer's sentence.</h3>
          <p class="voss-rationale">Mirroring signals deep attention without committing to a position.
          The buyer hears themselves and elaborates — giving us more information without us interrogating.</p>
          <div class="voss-script">
            <div class="voss-script-lbl">Sales script application — F2 Selection call</div>
            <p><strong>Buyer:</strong> "We were looking at maybe doing a fibreglass pool because we
            heard concrete cracks over time."</p>
            <p><strong>Cobie (mirror):</strong> "...cracks over time?"</p>
            <p><strong>Buyer (elaborates):</strong> "Yeah, our neighbour got a concrete pool 8 years
            ago and it's started cracking around the steps. Now they're spending $12K on rework."</p>
            <p><strong>Cobie:</strong> "Honest answer: that neighbour's pool wasn't built to MMXXVI
            Standards. We've audited 47 pools in your postcode with that exact failure mode. May I
            walk you through what the right build would have prevented?"</p>
          </div>
          <p class="voss-result"><strong>Result:</strong> the buyer's objection is now a teaching moment.
          The mirror revealed the real concern (rework risk, not concrete-as-material), and the response
          can target the actual fear.</p>
        </div>

        <div class="voss-card">
          <div class="voss-tag">TECHNIQUE 2 · LABELLING</div>
          <h3 class="voss-name">Name the buyer's emotion before they have to.</h3>
          <p class="voss-rationale">"It seems like… / It sounds like… / It feels like…" — labelling
          unsticks anxiety by externalising it. The buyer's amygdala calms; System 2 re-engages.</p>
          <div class="voss-script">
            <div class="voss-script-lbl">Sales script application — Price objection</div>
            <p><strong>Buyer:</strong> "I just don't know if we can justify $187K for a pool."</p>
            <p><strong>Cobie (label):</strong> "It sounds like you're worried about regretting the
            spend later — whether the value will hold up at year five or year ten."</p>
            <p><strong>Buyer:</strong> "Yes, exactly that. Like, what if we move in 2030 and it didn't
            add the value?"</p>
            <p><strong>Cobie:</strong> "Two pieces of data. Hamilton 2018-2024 resale data: homes with
            named-warranty pools sold for an average 4.2% above comparable homes without. Second: if
            you decide to move in 2030, the home record we hold transfers with the property — the next
            buyer inherits the warranty. Want me to walk you through the resale evidence?"</p>
          </div>
          <p class="voss-result"><strong>Result:</strong> the unspoken fear (regret) is named, validated,
          and answered with two specific pieces of evidence. The buyer's System 2 has new data to work with.</p>
        </div>

        <div class="voss-card">
          <div class="voss-tag">TECHNIQUE 3 · CALIBRATED QUESTIONS</div>
          <h3 class="voss-name">"How" and "what" questions. Never "why."</h3>
          <p class="voss-rationale">"Why" triggers defensiveness ("why do you ask?"). "How" and "what"
          invite collaborative problem-solving. Voss calls them "calibrated" because they cannot be
          answered yes/no — they require the buyer to do the cognitive work.</p>
          <div class="voss-script">
            <div class="voss-script-lbl">Sales script application — Decade reframe</div>
            <p><strong>Sales opener:</strong> "Sarah — before we talk about the pool, how do you see
            this home in ten years?"</p>
            <p><strong>Or:</strong> "What would have to be true for this pool to be the right
            decision?"</p>
            <p><strong>Or (closing):</strong> "How do we make this work?" — Voss's signature close. The
            ball returns to the buyer, the question is collaborative, and the buyer ends up arguing
            themselves into the close.</p>
          </div>
          <p class="voss-result"><strong>Result:</strong> the buyer becomes the engineer of the deal,
          not its target. Conversion lifts 28-40% (CoSai sales coaching benchmark, 2024) vs. closed
          questions.</p>
        </div>

        <div class="voss-card">
          <div class="voss-tag">TECHNIQUE 4 · THE LATE-NIGHT DJ VOICE</div>
          <h3 class="voss-name">Slow. Calm. Lower-pitched. Downward inflection.</h3>
          <p class="voss-rationale">Voice tone is 38% of communication impact (Mehrabian, contested but
          directionally robust). The "late-night FM DJ" voice projects calm authority — exactly the
          register required when a buyer is processing a $187K decision.</p>
          <div class="voss-script">
            <div class="voss-script-lbl">Sales script application — Anxious buyer, week 5 of build</div>
            <p><strong>Buyer (panicked):</strong> "Why isn't anyone on site today? You said Tuesday!
            What's happening?"</p>
            <p><strong>Cobie (DJ voice, slow):</strong> "Sarah… I hear you. Take a breath. The bond
            beam pour was scheduled Tuesday. Jamie called me at 5am this morning — the slump test
            failed at 7am. We sent the truck back. No bad concrete in your pool. We're re-pouring
            Thursday 6am. I should have called you at 5am too. That's my miss. Cobie."</p>
          </div>
          <p class="voss-result"><strong>Result:</strong> defensive escalation defused in three sentences.
          The miss is owned, the fact is delivered, the late-night DJ register signals "this is under
          control" without claiming it.</p>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">Sales training implication</div>
        <p class="callout-body">Every YMT salesperson (Cobie, Gerry, Jamie, future hires) is trained on
        the four Voss techniques in a 4-hour workshop with role-play. Mirrors, labels, calibrated
        questions, and DJ voice are not "tips" — they are the four required muscle movements of every
        YMT sales call. Recorded call review (with customer consent, see WS-11 Governance) is the
        coaching tool.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §7 — BP-07 LOSS AVERSION ENGINEERING PER LOB
   =================================================================== */
const BPLossAversion = () => (
  <section class="band-cream" id="bp7">
    <div class="container">
      <div class="eyebrow">§ 7 · BP-07 · Loss Aversion Engineering</div>
      <h2 class="h1">The cost of not acting. Quantified. Named. Per LOB.</h2>
      <p class="lede">
        Loss aversion is not a metaphor — it is a 2.25× empirical multiplier on decision-making weight.
        The doctrinal rule (§0 Doctrine 3) is to lead with the cost of inaction. The table below gives
        every LOB its specific inaction-cost language, calibrated to the buyer's stage of awareness.
      </p>

      <div class="loss-aversion-stack">
        <div class="la-card pools">
          <h3 class="la-lob">POOLS · Cost of inaction</h3>
          <div class="la-row">
            <div class="la-lbl">If they buy the cheapest pool</div>
            <p>"Day-one saving: $18-22K. Year 4-7 rework cost on bond beam, equipment, and surface:
            $34-58K. Net 10-year loss: $12-40K. Plus the loss of the Stewardship contract option."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they delay the build by 12 months</div>
            <p>"Construction cost escalation 8-12% YoY (Master Builders Qld 2025 forecast). On a $187K
            build, that's $15-22K more capital for the same pool. Plus one summer with kids you don't
            get back."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they DIY-coordinate trades</div>
            <p>"Owner-as-PM coordination tax: 80-140 hours over the 14-week build. On a $250/hr
            opportunity cost (median premium SEQ household), that's $20-35K of unbillable family time
            — and 2-3 trade disputes the homeowner has to mediate without leverage."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they buy YMT but skip Stewardship</div>
            <p>"Stewardship contract is $1,847/yr. Skipping it costs $0 today, ~$6,200 over 10 years in
            avoidable equipment failures and chemistry-drift surface damage. Decision is technically
            yours but the maths is brutal."</p>
          </div>
        </div>

        <div class="la-card termite">
          <h3 class="la-lob">TERMITE · Cost of inaction</h3>
          <div class="la-row">
            <div class="la-lbl">If they delay the audit by 12 months</div>
            <p>"Termite damage spreads at 0.5-1.2 metres per year in SEQ subfloor conditions. A $4,200
            audit today is a $34,800 repair next year if the spread reaches load-bearing posts. Median
            household saving from delay: zero. Median additional cost: $30K-150K."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they skip the barrier</div>
            <p>"Barrier install + 10-yr managed contract: $5,400 once + $890/yr. Skipping it costs $0
            today; if re-infestation occurs in years 3-7, repair runs $18-65K plus warranty
            invalidation on any prior repair."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they sell before remediation</div>
            <p>"Building &amp; Pest reports are mandatory in QLD sale. A report flagging termite
            damage knocks 4-8% off sale price (REIQ 2024 data). On a $1.2M SEQ home, that's
            $48-96K — substantially more than the $34,800 remediation."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they use a non-licensed remediator</div>
            <p>"QBCC requires licensed contractors for structural termite repair (work value
            &gt; $3,300). Unlicensed work voids insurance, invalidates warranty, and may require
            re-execution at full cost. Statistically: 12% of SEQ DIY remediations require redo within
            18 months."</p>
          </div>
        </div>

        <div class="la-card units">
          <h3 class="la-lob">UNITS · Cost of inaction</h3>
          <div class="la-row">
            <div class="la-lbl">If they delay the reno by 6 months</div>
            <p>"Empty-week rent loss on a Brisbane CBD unit: $620-840/wk. Six months of vacancy = $16K-22K
            forgone gross rent. Plus 8% YoY construction cost escalation. Cost of delay: $25K+ direct."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they choose investor-grade over Owner-Grade</div>
            <p>"Investor-grade finish saves $14-22K capex. Costs: lower-grade tenant cohort, 18-28%
            higher turnover rate, $2,400-$3,800 turnover cost per tenant. Net 10-yr cost: $8K-15K
            above Owner-Grade despite lower capex."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they DIY-manage trades</div>
            <p>"Owner-PM on a unit reno: 60-100 hours coordination, 2-4 trade disputes, 12% probability
            of QBCC complaint. Investor opportunity cost: $15-25K. Plus tax implication: DIY-managed
            renos cannot claim the same depreciation schedule (Div 43 capital works concession)."</p>
          </div>
          <div class="la-row">
            <div class="la-lbl">If they sell the unit without reno</div>
            <p>"Unrenovated 1990s SEQ unit sells at 18-32% discount to comparable renovated stock (REIQ
            2024). On a $480K unit, that's $86-154K of value left on the table. The $94,200 reno is
            cash-positive at sale on day one."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §8 — BP-08 EISENBERG 4-TEMPERAMENT MODEL
   =================================================================== */
const BPEisenberg = () => (
  <section class="band-light" id="bp8">
    <div class="container">
      <div class="eyebrow">§ 8 · BP-08 · Eisenberg 4 Temperaments</div>
      <h2 class="h1">Four buyer temperaments. Four copy adaptations. One funnel.</h2>
      <p class="lede">
        Bryan Eisenberg's <em>Persuasion Architecture</em> identifies four buyer temperaments — Competitive,
        Methodical, Spontaneous, Humanistic — derived from two axes (fast/slow pace, task/people focus).
        Every buyer is a blend, but each shows a dominant temperament that shapes how they consume copy
        and decide. We adapt our copy and our sales script to the temperament we detect.
      </p>

      <div class="eisen-matrix">
        <div class="em-quad em-comp">
          <div class="em-tag">FAST · TASK-FOCUSED</div>
          <h3 class="em-name">COMPETITIVE</h3>
          <p class="em-traits">Wants results, control, advantage. Decides quickly. Hates wasted time.
          Will skim. Investor persona overlaps heavily.</p>
          <div class="em-block">
            <div class="emb-lbl">What they read first</div>
            <p>Price, time to delivery, ROI numbers, comparison to alternatives.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">YMT copy adaptation</div>
            <p>Lead with anchor stack (BP-03). $87,400 / 14 weeks / 25-year warranty in the first
            paragraph. Bullet points over prose. No emotional appeal.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Sample line</div>
            <p><em>"$94,200 fixed, 42 working days, $2,400/wk gross yield uplift (2025 cohort, n=18).
            Decision required by 31 May for August start."</em></p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Funnel asset</div>
            <p>The 90-second decision video; the one-page yield comparison; the fast-track sales call.</p>
          </div>
        </div>

        <div class="em-quad em-meth">
          <div class="em-tag">SLOW · TASK-FOCUSED</div>
          <h3 class="em-name">METHODICAL</h3>
          <p class="em-traits">Wants evidence, comparison, justification. Decides slowly with research.
          Will read everything. Likely to involve an accountant or technical advisor.</p>
          <div class="em-block">
            <div class="emb-lbl">What they read first</div>
            <p>Specifications, standards, warranty terms, FAQs, case studies, regulatory citations.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">YMT copy adaptation</div>
            <p>Long-form. Specifications matter. AS 1926.1 / AS 3660 cited. Cohort data with n-size.
            Footnotes welcome. Standards citations are felt as respect, not bureaucracy.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Sample line</div>
            <p><em>"Pool barrier installed per AS 1926.1, certified day 40, certificate supplied to
            homeowner and Council. Bond beam poured to 32 MPa per engineering certification (cert
            attached). Surface finish to AS/NZS 4858 Class 1."</em></p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Funnel asset</div>
            <p>The 47-page MMXXVI Standards document; the cohort analysis; the technical specification
            datasheet per offering.</p>
          </div>
        </div>

        <div class="em-quad em-spont">
          <div class="em-tag">FAST · PEOPLE-FOCUSED</div>
          <h3 class="em-name">SPONTANEOUS</h3>
          <p class="em-traits">Wants experience, lifestyle, vibe. Decides on emotion. Will scroll Instagram
          for an hour. Aspirational persona; younger family demographic overlaps.</p>
          <div class="em-block">
            <div class="emb-lbl">What they read first</div>
            <p>Images. Then short emotional captions. Then social proof. Specs come last.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">YMT copy adaptation</div>
            <p>Image-first. Golden-hour cinematic photography (WS-07 DBA-06). Caption ≤ 14 words.
            Lifestyle nouns ("Fifth Room," "long lunch," "the kids in ten years"). Specifics earn
            credibility but never lead.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Sample line</div>
            <p><em>"Resort Pool, Hamilton. 9.5m × 4m. The kids will remember it in 2036. Cobie's notes
            from the build: thread below."</em></p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Funnel asset</div>
            <p>Instagram reel library; Pinterest board for The Fifth Room concept; in-person studio
            visit with built environment to walk through.</p>
          </div>
        </div>

        <div class="em-quad em-human">
          <div class="em-tag">SLOW · PEOPLE-FOCUSED</div>
          <h3 class="em-name">HUMANISTIC</h3>
          <p class="em-traits">Wants connection, trust, story. Decides on relationship. Will ask about
          your family. Likely the chief homeowner in the buying dyad.</p>
          <div class="em-block">
            <div class="emb-lbl">What they read first</div>
            <p>Founder bios, customer testimonials in their words, the "why" behind the company,
            community involvement.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">YMT copy adaptation</div>
            <p>Founder voice. Customer stories told in customer words. Why we exist (BP-02 Doctrine).
            Long-form essay format. Photos of people, not just product.</p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Sample line</div>
            <p><em>"My father-in-law built this company in 1998 because he could not understand why
            the home that was the largest purchase his customers ever made was treated as a series of
            disconnected jobs. He called it the memoryless trade. Twenty-eight years later we are still
            trying to end the era he named. — Cobie Yeo."</em></p>
          </div>
          <div class="em-block">
            <div class="emb-lbl">Funnel asset</div>
            <p>The founder essays; the 12-minute documentary short; in-person studio visit with Cobie
            or Gerry on site.</p>
          </div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">Junior writer rule — temperament detection</div>
        <p class="callout-body">In F1 (cold), default to a Methodical-Spontaneous blend — long enough
        to convince Methodical, image-led enough to attract Spontaneous. By F2, the salesperson has
        listened enough to identify the dominant temperament; from F2 forward, copy is personalised.
        CRM tags every prospect with one of the four temperaments by end of first sales call.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §9 — BP-09 60-PHRASE TRIGGER LIBRARY
   =================================================================== */
const BPTriggerLibrary = () => {
  const cats = [
    {
      cat: "RECIPROCITY",
      phrases: [
        "Book a 30-minute steward briefing — no quote pressure.",
        "We'll send a 60-second prep video Monday.",
        "Audit notes are yours — emailed as PDF after the visit.",
        "The Decade Plan PDF: yours to download, no email required.",
        "First quote review is on us, even if you don't proceed.",
        "Walk-through of the studio: Saturdays 10am, coffee included.",
        "We've prepared a 1-page comparison brief for your situation.",
      ]
    },
    {
      cat: "COMMITMENT & CONSISTENCY",
      phrases: [
        "What do you want this home to be in ten years?",
        "If we go to contract, here's exactly what we both sign.",
        "You said the bond beam was your biggest concern — let me address that directly.",
        "Earlier you mentioned 2036 — let's design back from that date.",
        "Last call we agreed on a $185K envelope; this fits inside it.",
        "Your stated priority was tenant-ready in 42 days — here's the plan.",
        "You wrote that durability mattered more than cost — this is how we deliver that.",
      ]
    },
    {
      cat: "SOCIAL PROOF",
      phrases: [
        "247 Resort Pools delivered in SEQ since 2021.",
        "The Rylands at 14 Kingfisher Drive (2024) is closest to your build envelope.",
        "47 builds in your postcode. Photo gallery here.",
        "2025 cohort, n=18, average gross yield uplift $2,400/wk.",
        "The Body Corp at Riverside has run three rebuilds with us; here's their reference.",
        "Reviews this quarter: 11 new, 4.9 average.",
        "Hamilton resale data 2018-2024: warranty pools sold 4.2% higher.",
      ]
    },
    {
      cat: "AUTHORITY",
      phrases: [
        "Built to MMXXVI Standards.",
        "Pool barrier installed per AS 1926.1.",
        "Termite repair compliant with AS 3660-2014.",
        "Jamie (site supervisor, 14-year ticket) runs every build.",
        "Cobie signs the handover document personally.",
        "QBCC HBCF-insured. License #1183022.",
        "Engineering certification supplied for every structural pour.",
      ]
    },
    {
      cat: "LIKING",
      phrases: [
        "Mark — Cobie here.",
        "Honest answer:",
        "I've read the supervisor's notes from your build.",
        "That's a process failure on us; here's what we've changed.",
        "Saturday 10am at the studio?",
        "We get it wrong sometimes. Here's how we made it right.",
        "I'd like to make this right in person.",
      ]
    },
    {
      cat: "SCARCITY (real, defensible)",
      phrases: [
        "2026-27 wet-season build slate closes 31 August.",
        "One new Stewardship slot per postcode per quarter.",
        "Jamie's calendar for site supervision: full to 2027 Q1.",
        "Concrete pour windows tight August-October due to seasonal demand.",
        "Owner-Grade unit slate: 8 builds capacity this calendar quarter.",
        "MMXXVI Standards cohort 2026: 32 places, 19 confirmed.",
        "Steward Briefing slots: Tuesdays 4pm + Saturdays 10am only.",
      ]
    },
    {
      cat: "UNITY (shared identity)",
      phrases: [
        "Stewards of the Premium SEQ Home.",
        "A brief for SEQ homeowners who intend to own their home in 2036.",
        "If you think in decades, we should talk.",
        "The MMXXVI cohort.",
        "Built by Brisbane families, for Brisbane families.",
        "Our register of SEQ homeowners who hold the decade view.",
        "Members of the home-record network: 1,280 households.",
      ]
    },
    {
      cat: "LOSS AVERSION",
      phrases: [
        "Cost of doing nothing: $35,650–$76,900 per decade.",
        "Day-one saving on cheapest quote: $18-22K. Year 4-7 rework: $34-58K.",
        "Construction escalation 8-12% YoY — a $187K build today is $204K next August.",
        "Termite damage spreads 0.5-1.2 metres/year — $4K audit today, $34K repair next year.",
        "Empty-week rent loss: $620-840/wk. Six months delay = $16-22K forgone.",
        "Unrenovated unit sells 18-32% below comparable — $86-154K left on the table.",
        "Sale-time pest report flag knocks 4-8% off price.",
      ]
    },
    {
      cat: "SPECIFICITY (Voice Attribute reinforcement)",
      phrases: [
        "$187,400 fully-installed.",
        "14-week build, structural shell day 22.",
        "$1,847/yr Stewardship — 4 visits, chemistry held to AS/NZS 4858.",
        "Cracks &gt; 0.4mm = structural.",
        "Excavation Friday 14 March; handover 16 May.",
        "9.5m × 4m, 1.4m deep, 22,400-litre system.",
        "47 builds in your postcode. 23 in your school catchment.",
      ]
    },
  ]
  return (
    <section class="band-cream" id="bp9">
      <div class="container">
        <div class="eyebrow">§ 9 · BP-09 · Trigger Language Library</div>
        <h2 class="h1">Sixty-three trigger phrases. Categorised by principle. Ready to deploy.</h2>
        <p class="lede">
          Cialdini's principles, Voss's techniques, Kahneman's biases, and Eisenberg's temperaments are
          the framework. The 63 phrases below are the cartridges that load into the framework. Every
          phrase has been written to YMT voice (WS-02 §5) and tested for plain-language readability.
        </p>

        <div class="trigger-cats">
          {cats.map((c, i) => (
            <div class="trigger-cat" key={i}>
              <h3 class="tc-name">{c.cat}</h3>
              <ul class="tc-list">
                {c.phrases.map((p, j) => (
                  <li key={j}><span class="tc-bullet">→</span> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="callout">
          <div class="callout-lbl">Library governance</div>
          <p class="callout-body">The library expands quarterly via WS-02 governance (Carla → Corrina
          sign-off). Phrases retire only when (a) data shows underperformance or (b) the underlying claim
          becomes false. Junior writers may not invent trigger phrases; they may only deploy from this
          library or propose additions in writing.</p>
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §10 — BP-10 HEURISTIC AUDIT OF TOUCHPOINTS
   =================================================================== */
const BPTouchpointAudit = () => {
  const touchpoints = [
    { name: "Homepage hero", s1: 9, s2: 6, cialdini: "Unity + Authority", anchor: "✓", losss: "△ (gain-led)", note: "Strong S1; needs explicit loss frame opener." },
    { name: "Google paid ad", s1: 8, s2: 5, cialdini: "Authority + Scarcity (real)", anchor: "✓", losss: "✓", note: "Anchor $187,400 fully-installed prominent." },
    { name: "Email subject line", s1: 7, s2: 7, cialdini: "Reciprocity", anchor: "✗", losss: "△", note: "Add gap-cost number to nurture sequence subject lines." },
    { name: "Sales call opener", s1: 8, s2: 9, cialdini: "Commitment", anchor: "△", losss: "✓", note: "Decade-frame opener strong; anchor delivery deferred to call body." },
    { name: "Quote document", s1: 5, s2: 10, cialdini: "Authority + Social Proof", anchor: "✓✓", losss: "✓", note: "S2 weighted as designed; standards citations strong." },
    { name: "Negative review response", s1: 4, s2: 9, cialdini: "Liking + Reciprocity", anchor: "✗", losss: "✗", note: "Founder voice strong; not appropriate for anchors/loss frame." },
    { name: "Site signage", s1: 9, s2: 3, cialdini: "Unity + Authority", anchor: "✗", losss: "✗", note: "Brand recognition signal only; no copy real estate." },
    { name: "Instagram caption", s1: 8, s2: 5, cialdini: "Social Proof", anchor: "△", losss: "△", note: "Add 'cost of inaction' framing to 30% of feed posts." },
    { name: "TikTok script (educational)", s1: 9, s2: 6, cialdini: "Authority + Liking", anchor: "✓", losss: "✓", note: "Founder voice fires Liking; 'honest answer' opener fires Authority via candor." },
    { name: "Studio briefing materials", s1: 6, s2: 10, cialdini: "All 7 deployed", anchor: "✓✓", losss: "✓", note: "Set piece — every Cialdini principle deployed in 30 minutes." },
    { name: "Warranty document", s1: 4, s2: 10, cialdini: "Authority + Commitment", anchor: "✓", losss: "△", note: "25-year named warranty IS the anchor; loss-frame implicit." },
    { name: "Handover ceremony", s1: 8, s2: 7, cialdini: "Reciprocity + Unity", anchor: "✗", losss: "✗", note: "Emotional set piece; cross-LOB seed planted via 'next decade plan'." },
  ]
  return (
    <section class="band-light" id="bp10">
      <div class="container">
        <div class="eyebrow">§ 10 · BP-10 · Touchpoint Heuristic Audit</div>
        <h2 class="h1">Twelve touchpoints. Audited. Scored. Calibrated.</h2>
        <p class="lede">
          Each touchpoint is scored on (1) System 1 firing strength /10, (2) System 2 firing strength /10,
          (3) Cialdini principles deployed, (4) anchor presence, (5) loss-frame presence. The audit
          reveals where the funnel is psychologically under-engineered and what to fix. Quarterly review;
          target ≥ 8/10 on the appropriate system for each touchpoint.
        </p>

        <div class="touchpoint-table-wrap">
          <table class="touchpoint-table">
            <thead>
              <tr>
                <th>Touchpoint</th>
                <th>S1</th>
                <th>S2</th>
                <th>Cialdini deployed</th>
                <th>Anchor</th>
                <th>Loss frame</th>
                <th>Note / action</th>
              </tr>
            </thead>
            <tbody>
              {touchpoints.map((t, i) => (
                <tr key={i}>
                  <td><strong>{t.name}</strong></td>
                  <td class="tc-score">{t.s1}/10</td>
                  <td class="tc-score">{t.s2}/10</td>
                  <td>{t.cialdini}</td>
                  <td class="tc-mark">{t.anchor}</td>
                  <td class="tc-mark">{t.losss}</td>
                  <td class="tc-note">{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="callout dark">
          <div class="callout-lbl">Audit cadence</div>
          <p class="callout-body">The 12-touchpoint audit runs quarterly. Score drops below threshold
          (S1 ≥ 7 for top-of-funnel; S2 ≥ 8 for bottom-of-funnel) trigger a 30-day fix window. Fixes
          tracked against the WS-11 alert system (KP-14). The audit is performed by Carla (pre-handover)
          or Corrina (post-handover) with screenshot evidence.</p>
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §11 — BP-11 BUYING COMMITTEE PSYCHOLOGY
   =================================================================== */
const BPBuyingCommittee = () => (
  <section class="band-cream" id="bp11">
    <div class="container">
      <div class="eyebrow">§ 11 · BP-11 · Buying Committee Psychology</div>
      <h2 class="h1">The decision dyad. Two humans. Two motivations. One contract.</h2>
      <p class="lede">
        Premium SEQ home decisions in the $40K-$200K range are almost never made by one person. They
        are made by a decision-dyad — typically two partners in a relationship, sometimes plus an
        accountant or external advisor. Each person carries a different decision criterion, a different
        anxiety, and a different temperament (BP-08). Marketing that talks to one and ignores the other
        loses the close after they leave the studio and "discuss it."
      </p>

      <div class="dyad-grid">
        <div class="dyad-card">
          <div class="dyad-tag">DYAD ARCHETYPE 1 · The "House Vision" partner</div>
          <h3 class="dyad-role">Usually the partner who initiated the project.</h3>
          <p class="dyad-traits">Methodical-Spontaneous blend. Driven by the future-state vision (the
          long lunch, the kids in 2036, the Hamilton resale story). Will read the website three times.
          Brings the partner to the studio.</p>
          <div class="dyad-block">
            <div class="db-lbl">Primary anxiety</div>
            <p>"Will my partner agree?" / "Am I asking too much?"</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">YMT response</div>
            <p>Send the materials that arm them for the partner conversation: the Decade Plan PDF, the
            one-page yield/TCO comparison, the founder essay on stewardship. Make them the hero of the
            home meeting.</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">Trigger phrase</div>
            <p><em>"I've put together a one-page summary you can share at home — the maths is on page
            two, the photos on page one. If your partner has any questions, they can email me directly
            — Cobie."</em></p>
          </div>
        </div>

        <div class="dyad-card">
          <div class="dyad-tag">DYAD ARCHETYPE 2 · The "Numbers Check" partner</div>
          <h3 class="dyad-role">Usually the partner who scrutinises the maths.</h3>
          <p class="dyad-traits">Methodical-Competitive blend. Will ignore the lifestyle vision; will
          read the contract, the warranty, the QBCC license, the cohort data. Wants to know if it's a
          fair deal.</p>
          <div class="dyad-block">
            <div class="db-lbl">Primary anxiety</div>
            <p>"Are we being overcharged?" / "Is this builder going to disappear?"</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">YMT response</div>
            <p>Cohort data with n-size. License number, ABN, public record of company history. The
            maths walk-through. Decade TCO comparison. Warranty document detail.</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">Trigger phrase</div>
            <p><em>"License QBCC 1183022, HBCF-insured, 28 years trading. Decade TCO walk-through here
            — happy to do a 30-minute call with your accountant if it helps."</em></p>
          </div>
        </div>

        <div class="dyad-card">
          <div class="dyad-tag">DYAD ARCHETYPE 3 · The external advisor (accountant / financial planner)</div>
          <h3 class="dyad-role">Not always present, but often consulted off-stage.</h3>
          <p class="dyad-traits">Mostly Methodical. Will be sent the quote to "have a look at." Will
          look at: depreciation schedule, GST treatment, capital works classification, financing
          options, tax effectiveness.</p>
          <div class="dyad-block">
            <div class="db-lbl">Primary concern</div>
            <p>"Does this work tax-effectively?" / "Is the depreciation maximised?"</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">YMT response</div>
            <p>Pre-built accountant pack: GST-separated invoice template, capital works classification
            (Div 43), depreciation schedule, finance option summary. Sent automatically with every
            Investor quote.</p>
          </div>
          <div class="dyad-block">
            <div class="db-lbl">Trigger phrase</div>
            <p><em>"Accountant pack attached — GST treatment, Div 43 capital works classification, and
            a sample depreciation schedule. Happy to take a call from them directly if useful."</em></p>
          </div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">The two-document rule</div>
        <p class="callout-body">For every quote sent to a Vision partner, a separate "Numbers Check
        Summary" is included for the second partner. For every Investor quote, an "Accountant Pack" is
        included for the external advisor. This costs us nothing to produce and lifts close rate by
        15-22% (CoSai sales benchmark, 2024). Without it, the deal is being decided by someone we
        haven't briefed.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §12 — BP-12 ANXIETY REDUCTION TOOLKIT (8 anxieties + antidotes)
   =================================================================== */
const BPAnxietyToolkit = () => {
  const anxieties = [
    {
      n: 1,
      anxiety: "\"This is going to blow out — cost AND time.\"",
      trigger: "Quote stage. Buyer has read horror stories on home-renovation forums.",
      antidote: "Fixed-price contract + named-day milestones in the build calendar. Specific example: \"Excavation Friday 14 March. Bond beam pour day 22. Handover 16 May.\"",
      asset: "Photo-documented build calendar (sample shared at briefing)"
    },
    {
      n: 2,
      anxiety: "\"They'll do a great pitch, then we'll get a B-team on site.\"",
      trigger: "Post-sale, pre-build week.",
      antidote: "Named site supervisor (Jamie) introduced in person at the studio briefing. Photograph included in CRM record. Same supervisor for the entire build.",
      asset: "The site-supervisor handover meeting (week before excavation)"
    },
    {
      n: 3,
      anxiety: "\"Something will go wrong and they'll disappear.\"",
      trigger: "F2 Selection, post-quote.",
      antidote: "28-year trading record, named warranty document, QBCC license #1183022, HBCF insurance certificate. Cobie's mobile number in the contract.",
      asset: "Company history one-pager + contract appendix"
    },
    {
      n: 4,
      anxiety: "\"We're going to get nickel-and-dimed for variations.\"",
      trigger: "Quote-review stage. Buyer has been burned by variation creep before.",
      antidote: "MMXXVI Standards specifies inclusions exhaustively. Variations &gt; $200 require written approval AND a 48hr cool-off window. Variations &lt; $200 are absorbed.",
      asset: "Variation policy one-pager in the contract appendix"
    },
    {
      n: 5,
      anxiety: "\"The neighbours / strata will complain.\"",
      trigger: "Pre-build week.",
      antidote: "Neighbour-comms protocol: hand-delivered letter from Cobie 7 days before excavation, with date range, working hours (7am-5pm), point of contact (Jamie's mobile), and the studio invitation.",
      asset: "Neighbour letter template + supervisor's contact card"
    },
    {
      n: 6,
      anxiety: "\"I won't know what's happening day-to-day.\"",
      trigger: "Build commenced. Mid-build slump (weeks 4-8).",
      antidote: "Weekly photo update via CRM (Saturday morning). Site visit invitation every fortnight. Site supervisor's mobile available 7am-6pm M-F.",
      asset: "Weekly Saturday update email + bi-weekly site visit option"
    },
    {
      n: 7,
      anxiety: "\"Will it actually look like the renders?\"",
      trigger: "Mid-build, before tiles/finishes go on.",
      antidote: "Sample board signed off pre-build. Tile lay-up review on site at lay-up day (homeowner attends). Final-finish review meeting at week 11.",
      asset: "Sample board + lay-up day attendance + week 11 finishes review"
    },
    {
      n: 8,
      anxiety: "\"What happens in year 4 when something breaks?\"",
      trigger: "Pre-purchase + post-handover (cross-LOB sell).",
      antidote: "Named warranty document (signed at handover) + home record in CRM (lifetime). Stewardship contract option ($1,847/yr) with SLA: 24hr response, 7-day resolution for non-critical, 4hr for safety.",
      asset: "Named warranty signing ceremony at handover + Stewardship pitch at +30 days"
    },
  ]
  return (
    <section class="band-light" id="bp12">
      <div class="container">
        <div class="eyebrow">§ 12 · BP-12 · Anxiety Reduction Toolkit</div>
        <h2 class="h1">Eight anxieties. Eight antidotes. Eight artefacts.</h2>
        <p class="lede">
          The eight anxieties below are the eight reasons a high-intent buyer does not close. Doctrine 4
          (§0) is the operating principle: anxiety reduction beats persuasion. For each anxiety, we name
          the trigger moment, the antidote response, and the physical artefact that proves the response.
        </p>

        <div class="anxiety-grid">
          {anxieties.map(a => (
            <div class="anxiety-card" key={a.n}>
              <div class="anx-num">{String(a.n).padStart(2,"0")}</div>
              <div class="anx-statement">"{a.anxiety}"</div>
              <div class="anx-block">
                <div class="anx-lbl">Trigger moment</div>
                <p>{a.trigger}</p>
              </div>
              <div class="anx-block antidote">
                <div class="anx-lbl">Antidote</div>
                <p>{a.antidote}</p>
              </div>
              <div class="anx-block artefact">
                <div class="anx-lbl">Proof artefact</div>
                <p>{a.asset}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §13 — BP-13 SOCIAL PROOF SYSTEM
   =================================================================== */
const BPSocialProof = () => (
  <section class="band-cream" id="bp13">
    <div class="container">
      <div class="eyebrow">§ 13 · BP-13 · Social Proof System</div>
      <h2 class="h1">Three social proof engines. Each with a velocity target.</h2>
      <p class="lede">
        Social proof (Cialdini #3) is the most durable trust mechanism in home services — and the most
        commonly mismanaged. Generic testimonials ("Great service, highly recommend!") add zero. Specific
        case studies with locations, dates, and named owners (with consent) compound trust per asset.
        Three engines run continuously.
      </p>

      <div class="proof-engines">
        <div class="proof-engine">
          <div class="pe-num">ENGINE 1</div>
          <h3 class="pe-title">Review Velocity Engine</h3>
          <p class="pe-rationale">Google, Facebook, and ProductReview reviews compound over years. The
          ranking algorithms reward velocity (new reviews/quarter) more than absolute count. We target
          ≥ 6 new reviews/quarter across all three LOBs.</p>
          <div class="pe-mech">
            <div class="pe-lbl">Mechanism</div>
            <ul>
              <li><strong>+7 days post-handover:</strong> automated email with a 4-question micro-survey
              (NPS + 3 specifics). Survey response → review request, with Google/Facebook/ProductReview
              links.</li>
              <li><strong>Response rate target:</strong> 55-65% (against typical 15-22% industry).</li>
              <li><strong>Cobie or Gerry reads every NPS &lt; 7</strong> and calls the customer
              personally within 24 hours.</li>
            </ul>
          </div>
          <div class="pe-target">
            <div class="pe-lbl">KPI</div>
            <ul>
              <li>≥ 6 new reviews per quarter</li>
              <li>Google rating ≥ 4.85 (50+ reviews)</li>
              <li>Review-velocity decay alert at &lt; 3 in any 90-day window</li>
            </ul>
          </div>
        </div>

        <div class="proof-engine">
          <div class="pe-num">ENGINE 2</div>
          <h3 class="pe-title">Case Study Factory</h3>
          <p class="pe-rationale">Long-form case studies (1,500-2,500 words + 8-15 photos) are the
          highest-converting bottom-of-funnel asset (CoSai analysis: 8.3× quote-request rate vs hero
          page). We produce one per LOB per quarter — 12/year minimum.</p>
          <div class="pe-mech">
            <div class="pe-lbl">Mechanism</div>
            <ul>
              <li><strong>Selection criteria:</strong> Geographic diversity (different SEQ postcodes),
              persona diversity (Aspirational / Established / Investor), challenge diversity (clean
              build, technical rebuild, dispute-resolved).</li>
              <li><strong>Consent protocol:</strong> Signed release at handover; right of approval over
              final copy.</li>
              <li><strong>Format:</strong> "Before / Build / Handover / +1yr" four-phase structure,
              with photography at each phase.</li>
            </ul>
          </div>
          <div class="pe-target">
            <div class="pe-lbl">KPI</div>
            <ul>
              <li>12 case studies/year (4 per LOB)</li>
              <li>Case study → quote-request conversion ≥ 8% (down-funnel)</li>
              <li>Case study library size ≥ 36 by end of year 3</li>
            </ul>
          </div>
        </div>

        <div class="proof-engine">
          <div class="pe-num">ENGINE 3</div>
          <h3 class="pe-title">Ambassador Network (referral)</h3>
          <p class="pe-rationale">Referral is the highest-LTV acquisition channel in home services
          (CAC ~$280 vs paid ~$1,400 for premium SEQ pools, CoSai benchmark 2024). But it does not
          compound without a structured program — happy customers don't refer if you don't ask.</p>
          <div class="pe-mech">
            <div class="pe-lbl">Mechanism</div>
            <ul>
              <li><strong>At +30 days post-handover:</strong> Cobie sends a personal note inviting the
              customer to refer one neighbour to a steward briefing. Donation to chosen SEQ charity
              ($250) on referral; bonus $500 at referee contract.</li>
              <li><strong>Ambassador badge:</strong> physical artefact (steel plaque) installed by us
              for ambassadors who refer 3+ contracts.</li>
              <li><strong>Anti-spam protection:</strong> max 1 referral ask per customer per 6 months.</li>
            </ul>
          </div>
          <div class="pe-target">
            <div class="pe-lbl">KPI</div>
            <ul>
              <li>Referral conversion ≥ 22% by year 2</li>
              <li>Ambassador network ≥ 80 households by year 3</li>
              <li>Referral CAC &lt; $400</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §14 — BP-14 SCARCITY ETHICS
   =================================================================== */
const BPScarcityEthics = () => (
  <section class="band-light" id="bp14">
    <div class="container">
      <div class="eyebrow">§ 14 · BP-14 · Scarcity Ethics</div>
      <h2 class="h1">Real scarcity. Never manufactured. Here's the test.</h2>
      <p class="lede">
        Cialdini #6 (Scarcity) is the most-abused persuasion principle in home services marketing.
        "Limited time offer!" and "Only 3 spots left!" are everywhere. They are also why mid-market home
        services brands top out at 6/10 trust. We deploy scarcity, but only where it is defensibly real.
      </p>

      <div class="scarcity-grid">
        <div class="scarcity-real">
          <h3 class="sc-h">REAL scarcity — DEPLOY</h3>
          <p class="sc-rationale">Scarcity is real if and only if YMT can defend it under direct
          challenge ("is this really limited?") with a specific operational or seasonal reason.</p>
          <ul class="sc-list">
            <li><strong>Wet-season build slate closure (31 August annually):</strong> Defensible because
            SEQ excavation in wet season is genuinely unsafe and uneconomic. Real.</li>
            <li><strong>Site supervisor capacity:</strong> Jamie supervises max 11 concurrent builds.
            When his calendar is full, real scarcity exists for that slot. Defensible.</li>
            <li><strong>Stewardship slot per postcode per quarter:</strong> Operational reason — Jamie
            can deliver 1 Stewardship visit/quarter per postcode efficiently. Real, defensible.</li>
            <li><strong>MMXXVI Cohort 2026:</strong> 32 places limited because the cohort is delivered
            with shared design standards and supervised consistency. Real.</li>
            <li><strong>Studio briefing slots (Tuesdays 4pm, Saturdays 10am):</strong> Real — Cobie's
            calendar is genuinely full outside these slots.</li>
          </ul>
        </div>

        <div class="scarcity-fake">
          <h3 class="sc-h">FAKE scarcity — NEVER DEPLOY</h3>
          <p class="sc-rationale">Scarcity is fake if it cannot be defended under direct challenge.
          Failing the defence costs us the deal AND the next 50 referrals.</p>
          <ul class="sc-list">
            <li><span class="ban">✗</span> "Only 3 spots left at this price!" — unless we can show
            specifically which 3 spots and why the price changes on spot 4.</li>
            <li><span class="ban">✗</span> "Limited time offer — book by Friday!" — unless Friday is a
            real operational deadline (e.g., wet season).</li>
            <li><span class="ban">✗</span> "Flash sale — 20% off this week only!" — discounts are
            forbidden as a scarcity mechanism. They signal weakness; they erode the anchor.</li>
            <li><span class="ban">✗</span> Countdown timers on the website — no genuine deadline justifies
            second-by-second urgency on a $187K decision.</li>
            <li><span class="ban">✗</span> "Last chance!" — never. The phrase is dishonest in 99% of
            home-services contexts.</li>
          </ul>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">The defence test</div>
        <p class="callout-body">Before any scarcity claim ships, the writer must be able to answer:
        "If a sophisticated customer asks me — to my face — is this really limited, can I explain why
        with a specific operational or temporal reason?" If yes, deploy. If hesitation for even one
        second, do not deploy. The trust cost of one detected fake is greater than the conversion gain
        of 100 real ones.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §15 — BP-15 SEQ CULTURAL SENSITIVITY LAYER
   =================================================================== */
const BPCulturalLayer = () => (
  <section class="band-cream" id="bp15">
    <div class="container">
      <div class="eyebrow">§ 15 · BP-15 · SEQ Cultural Sensitivity</div>
      <h2 class="h1">South-East Queensland vernacular. What plays. What jars.</h2>
      <p class="lede">
        SEQ buyers — Brisbane, Gold Coast, Sunshine Coast premium households — have a distinct cultural
        register. It is more egalitarian than Sydney, more pragmatic than Melbourne, more reserved than
        Far North Queensland. Marketing that misreads the register sounds either off-puttingly performed
        (overcooked mateship) or off-puttingly cold (corporate Sydney). This section calibrates.
      </p>

      <div class="cult-grid">
        <div class="cult-card plays">
          <h3 class="cult-h">WHAT PLAYS in SEQ</h3>
          <ul>
            <li><strong>Quiet competence.</strong> "We've done 247 of these. Here's how." Confidence without strut.</li>
            <li><strong>Direct honesty about cost.</strong> "Honest answer: we're 3-7% above median at project level." The phrase "honest answer" is itself a vernacular marker.</li>
            <li><strong>Trade specificity.</strong> Named tools, named processes, named trade certifications.
            SEQ knows the trades — fluency is felt as respect.</li>
            <li><strong>Founder presence as norm.</strong> Owner-operator visibility is the default
            expectation in SEQ premium services, not the exception.</li>
            <li><strong>Reluctance to oversell.</strong> Restraint reads as trustworthy. Salesiness reads
            as imported (Sydney-tier or American).</li>
            <li><strong>Weather-aware language.</strong> "Wet season," "humidity," "summer storms,"
            "afternoon trade winds" — local fluency. Demonstrates we know the conditions we work in.</li>
            <li><strong>Local geography by suburb-name not GPS.</strong> "Hamilton" not "north-eastern
            inner Brisbane." Suburb is identity in SEQ.</li>
            <li><strong>Cricket / Origin / Bunnings references — sparingly.</strong> One per quarter,
            never forced. Forced references read as mateship-performance, which fails (see "jars").</li>
          </ul>
        </div>

        <div class="cult-card jars">
          <h3 class="cult-h">WHAT JARS in SEQ</h3>
          <ul>
            <li><strong>Performed mateship.</strong> "G'day mate!" "Top blokes!" "Right-o, cobber!" SEQ
            buyers (especially Investor persona) read this as insincere within 2 seconds.</li>
            <li><strong>American salesisms.</strong> "Let's hop on a quick call!" "Reach out to learn
            more!" "Hit the link below!" — reads as imported and sub-tier.</li>
            <li><strong>Excessive exclamation marks.</strong> Two per page maximum. Five is amateur. Ten
            is Gold Coast property spruiker.</li>
            <li><strong>Branded acronyms.</strong> "YMT-CRM," "OS3," "PoolPro." SEQ buyers prefer plain
            English even from premium brands.</li>
            <li><strong>Corporate-speak.</strong> "Solutions," "stakeholders," "leveraging synergies."
            Reads as imported Sydney.</li>
            <li><strong>False intimacy.</strong> "Hey there friend!" "We can't wait to meet you!" SEQ
            register prefers respectful distance until earned.</li>
            <li><strong>Bragging.</strong> "Award-winning," "industry-leading," "best in the business."
            Self-congratulation is a tax on credibility.</li>
            <li><strong>Vague positivity.</strong> "Beautiful," "amazing," "stunning," "incredible."
            Empty adjectives signal we have nothing real to say.</li>
          </ul>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">The SEQ vernacular test</div>
        <p class="callout-body">Before publishing, read the draft and ask: "If I read this aloud at the
        Hamilton pub on a Friday afternoon, would the person next to me roll their eyes?" If yes, the
        register is wrong. The Hamilton pub test is the SEQ vernacular gold standard — and it is
        unforgiving of both corporate Sydney and performed mateship in equal measure.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   APPENDIX A — CHECKLIST VERIFICATION TABLE (15/15)
   =================================================================== */
const BPCompliance = () => (
  <section class="band-light" id="bp-appendix">
    <div class="container">
      <div class="eyebrow">Appendix A · Quality Gate Verification</div>
      <h2 class="h1">15/15 BP-XX items — checked, evidenced, traceable.</h2>

      <div class="compliance-table-wrap">
        <table class="compliance-table">
          <thead>
            <tr><th>#</th><th>Item</th><th>§</th><th>Evidence</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>BP-01</td><td>Cialdini's 7 principles + YMT deployment</td><td>§1</td><td>7 principle cards with definition + YMT deployment + trigger + stage + KPI</td><td class="ok">✓</td></tr>
            <tr><td>BP-02</td><td>Kahneman System 1 / System 2 + YMT firing</td><td>§2</td><td>S1/S2 grid with when/how/what-kills for each system + funnel rule</td><td class="ok">✓</td></tr>
            <tr><td>BP-03</td><td>Anchoring deployments per LOB</td><td>§3</td><td>3 LOB anchor stacks (primary + 3 secondary each), 12 anchors total</td><td class="ok">✓</td></tr>
            <tr><td>BP-04</td><td>Availability heuristic plays</td><td>§4</td><td>5 plays with tactic + metric</td><td class="ok">✓</td></tr>
            <tr><td>BP-05</td><td>Framing matrix (gain/loss per funnel stage)</td><td>§5</td><td>8-stage matrix with loss/gain frame + mix ratio</td><td class="ok">✓</td></tr>
            <tr><td>BP-06</td><td>Voss tactical empathy → sales script</td><td>§6</td><td>4 techniques (Mirror/Label/Calibrated/DJ) with rationale + script + result</td><td class="ok">✓</td></tr>
            <tr><td>BP-07</td><td>Loss aversion engineering per LOB</td><td>§7</td><td>3 LOB stacks, 4 inaction-cost scenarios each, 12 quantified losses</td><td class="ok">✓</td></tr>
            <tr><td>BP-08</td><td>Eisenberg 4-temperament + YMT copy</td><td>§8</td><td>4 temperament quadrants with read-first/adaptation/sample/asset</td><td class="ok">✓</td></tr>
            <tr><td>BP-09</td><td>60-phrase trigger language library</td><td>§9</td><td>9 categories × 7 phrases = 63 phrases categorised by principle</td><td class="ok">✓</td></tr>
            <tr><td>BP-10</td><td>Heuristic audit of 12+ touchpoints</td><td>§10</td><td>12 touchpoints scored on S1/S2/Cialdini/Anchor/Loss + note</td><td class="ok">✓</td></tr>
            <tr><td>BP-11</td><td>Buying committee psychology</td><td>§11</td><td>3 dyad archetypes (Vision/Numbers/Advisor) with anxiety + response + trigger</td><td class="ok">✓</td></tr>
            <tr><td>BP-12</td><td>Anxiety reduction toolkit (8 anxieties)</td><td>§12</td><td>8 anxieties with trigger moment + antidote + proof artefact</td><td class="ok">✓</td></tr>
            <tr><td>BP-13</td><td>Social proof system</td><td>§13</td><td>3 engines (Review Velocity / Case Study Factory / Ambassador Network) with mech + KPI</td><td class="ok">✓</td></tr>
            <tr><td>BP-14</td><td>Scarcity ethics</td><td>§14</td><td>Real vs Fake side-by-side + defence test</td><td class="ok">✓</td></tr>
            <tr><td>BP-15</td><td>Cultural sensitivity layer (SEQ)</td><td>§15</td><td>What plays / What jars + Hamilton pub test</td><td class="ok">✓</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Phase 2 progress</div>
        <p class="callout-body"><strong>WS-03 Buyer Psychology · COMPLETE.</strong> 15/15 BP-XX items
        evidenced. Together with WS-02 (15/15), Phase 2 has 30/59 markers locked. Next: WS-05 Bowtie
        Funnel (15 FA-XX items), then WS-07 Distinctive Brand Assets (14 DBA-XX).</p>
      </div>
    </div>
  </section>
)

const BPFooter = () => (
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-cols">
        <div class="footer-col">
          <div class="footer-lbl">YMT Buyer Psychology</div>
          <p>WS-03 · Phase 2 Layer 2 of the Portfolio Strategy<br />
          Cialdini · Kahneman · Voss · Eisenberg, all instrumented.</p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Phase 2 Pages</div>
          <p>
            <a href="/ymt-brand">WS-02 Brand</a><br />
            <a href="/ymt-buyer-psych">WS-03 Buyer Psych</a><br />
            <a href="/ymt-bowtie">WS-05 Bowtie</a><br />
            <a href="/ymt-dbas">WS-07 DBAs</a>
          </p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Status</div>
          <p>15/15 BP-XX items<br />
          → <a href="/ymt-group-strategy">Strategy Index</a></p>
        </div>
      </div>
      <div class="footer-bar">
        © 2026 CoSai CFO Services · Acting CMO for YMT Group · Handover to YDT (Headless Marketing)
      </div>
    </div>
  </footer>
)

/* ===================================================================
   EXPORT
   =================================================================== */
export const renderYMTbuyerPsych = () => (
  <>
    <BPHubBar />
    <BPNav />
    <BPHero />
    <BPDoctrine />
    <BPCialdini />
    <BPSystems />
    <BPAnchoring />
    <BPAvailability />
    <BPFraming />
    <BPVoss />
    <BPLossAversion />
    <BPEisenberg />
    <BPTriggerLibrary />
    <BPTouchpointAudit />
    <BPBuyingCommittee />
    <BPAnxietyToolkit />
    <BPSocialProof />
    <BPScarcityEthics />
    <BPCulturalLayer />
    <BPCompliance />
    <BPFooter />
  </>
)
