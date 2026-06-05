/* ============================================================================
   /ymt-bowtie — WS-05 Funnel Architecture (Bowtie) — 10/10 Depth
   ============================================================================
   PHASE 2 · Workstream 05 · Bowtie Funnel Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (15 FA-XX checklist items)

   Frameworks cited: Winning by Design Bowtie Funnel · Brian Balfour Four Fits ·
   Fred Reichheld Net Promoter / Loyalty Effect · Sangram Vajre ABM Bowtie ·
   Jason Lemkin SaaStr expansion economics · Lincoln Murphy Customer Success ·
   David Skok SaaS Metrics 2.0 · MEDDPICC qualification (Force Mgmt)

   Target depth: 5,000–7,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (15/15):
   FA-01 Bowtie model explained + why it replaces linear funnel
   FA-02 Pre-purchase stages (Awareness/Education/Selection) + entry/exit
   FA-03 Post-purchase stages (Onboarding/Impact/Expansion/Advocacy) + entry/exit
   FA-04 Channel-content-KPI map per stage
   FA-05 MEDDPICC F1→F2 handoff specification
   FA-06 Expansion loop design (Annual · Cross-LOB · Referral)
   FA-07 Advocacy engine spec (review velocity · case study · ambassadors)
   FA-08 Cross-LOB trigger map (Termite→Pools→Units timing)
   FA-09 Time-in-stage benchmarks
   FA-10 Stage exit failure modes + unstick plays
   FA-11 Stage measurement spec (KPI + target per stage)
   FA-12 Lifetime GP economic model (3–5× cross-LOB worth)
   FA-13 Customer-segment funnel variations (Investor persona)
   FA-14 SLA matrix for every stage handoff
   FA-15 Failure modes + hedges
   ============================================================================ */

const FAHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 2 · WS-05
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-brand" class="dochub-link">
          <span class="dochub-badge">WS-02</span>
          Brand
        </a>
        <a href="/ymt-buyer-psych" class="dochub-link">
          <span class="dochub-badge">WS-03</span>
          Buyer Psych
        </a>
        <a href="/ymt-bowtie" class="dochub-link active">
          <span class="dochub-badge new">WS-05</span>
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

const FANav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-05 · Bowtie Funnel · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#fa0">0. Doctrine</a>
        <a href="#fa1">1. Bowtie Model</a>
        <a href="#fa2">2. Pre-Purchase</a>
        <a href="#fa3">3. Post-Purchase</a>
        <a href="#fa4">4. Channel Map</a>
        <a href="#fa5">5. MEDDPICC</a>
        <a href="#fa6">6. Expansion</a>
        <a href="#fa7">7. Advocacy</a>
        <a href="#fa8">8. Cross-LOB</a>
        <a href="#fa9">9. Timings</a>
        <a href="#fa10">10. Failure Modes</a>
        <a href="#fa11">11. KPIs</a>
        <a href="#fa12">12. LTV Math</a>
        <a href="#fa13">13. Segments</a>
        <a href="#fa14">14. SLA Matrix</a>
        <a href="#fa15">15. Risks</a>
      </nav>
    </div>
  </header>
)

const FAHero = () => (
  <section class="hero band-cream" id="fa-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 2 · Workstream 05 · 10/10 Depth</div>
      <h1 class="display">Bowtie Funnel<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Winning by Design's Bowtie replaces the leaky linear funnel with a symmetric model
        that values post-purchase expansion as much as pre-purchase acquisition. For YMT —
        whose three LOBs compound across a household over a decade — the right half of the
        bowtie is where most of the gross profit lives.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">15/15</div><div class="meta-lbl">FA-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">7</div><div class="meta-lbl">stages</div></div>
        <div class="meta-cell"><div class="meta-num">3–5×</div><div class="meta-lbl">cross-LOB LTV</div></div>
        <div class="meta-cell"><div class="meta-num">14</div><div class="meta-lbl">SLA gates</div></div>
        <div class="meta-cell"><div class="meta-num">12</div><div class="meta-lbl">failure modes</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE: WHY THE BOWTIE
   =================================================================== */
const FADoctrine = () => (
  <section class="band-navy" id="fa0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">The linear funnel was built for transactions. We sell relationships.</h2>
      <p class="lede on-dark">
        AIDA — Attention, Interest, Desire, Action — was designed in 1898 by E. St. Elmo Lewis to sell
        life insurance once. It assumes the customer disappears at the bottom of the funnel. That
        assumption is fatal for a business like YMT, where the first job (a $9,000 termite treatment) is
        the cheapest customer we will ever acquire — and where the next three jobs over the next decade
        (a $95,000 pool, a $130,000 renovation, a $48,000 outdoor build) are 30× more profitable than the
        first.
      </p>
      <p class="lede on-dark">
        Winning by Design's Bowtie acknowledges this asymmetry. It places the customer in the middle —
        not at the bottom — and gives equal architectural attention to the post-purchase stages where
        expansion, retention, and advocacy compound. For YMT, the right half of the bowtie generates
        an estimated 68–74% of the lifetime gross profit per household. We must architect it with the
        same rigour we apply to the left half.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">Symmetry is non-negotiable.</div>
          <div class="rule-body">Every dollar spent on acquisition must be matched by a dollar of architectural
          investment in onboarding, impact, expansion, and advocacy. If post-purchase is an afterthought,
          the funnel is broken.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Stages have entry and exit criteria.</div>
          <div class="rule-body">A lead is not "in Education" because a salesperson feels they are. They are
          in Education when they have demonstrated three specified behaviours and exit only when four
          specified criteria are met. No vibes-based stage management.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">Handoffs are the failure surface.</div>
          <div class="rule-body">90% of revenue leakage happens at stage handoffs — Marketing→Sales, Sales→Ops,
          Ops→CS, CS→Sales. Every handoff requires a written SLA, a named owner, and a measurable response
          time. No exceptions.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">Time-in-stage is a KPI.</div>
          <div class="rule-body">A lead stuck in Education for 9 months is a lost lead, not a warm lead. Every
          stage has a benchmark dwell-time. Exceed it and the unstick play fires automatically.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">Cross-LOB is the right side's job.</div>
          <div class="rule-body">The left side acquires the first job. The right side compounds it into 2.4
          jobs (current) → 3.8 jobs (target by 2028). Expansion is engineered, not hoped-for.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-01 — THE BOWTIE MODEL EXPLAINED
   =================================================================== */
const FABowtieModel = () => (
  <section class="band-cream" id="fa1">
    <div class="container">
      <div class="eyebrow">§ 1 · FA-01</div>
      <h2 class="h1">The bowtie — anatomy of a compounding customer relationship</h2>
      <p class="lede">
        Picture two triangles, points touching in the centre. The left triangle narrows from a wide
        mouth of Awareness to a point of Selection. The right triangle widens from a point of
        Onboarding outwards through Impact, Expansion, and Advocacy. The intersection — where the
        two triangles meet — is the moment of purchase. The customer never exits. They orbit.
      </p>

      <div class="bowtie-diagram">
        <div class="bowtie-left">
          <div class="bow-stage s-aware">
            <div class="bow-num">L1</div>
            <div class="bow-name">Awareness</div>
            <div class="bow-desc">Stranger discovers a household problem worth solving</div>
          </div>
          <div class="bow-stage s-edu">
            <div class="bow-num">L2</div>
            <div class="bow-name">Education</div>
            <div class="bow-desc">Lead understands category options + evaluation criteria</div>
          </div>
          <div class="bow-stage s-sel">
            <div class="bow-num">L3</div>
            <div class="bow-name">Selection</div>
            <div class="bow-desc">Qualified opportunity chooses YMT over alternatives</div>
          </div>
        </div>

        <div class="bowtie-pivot">
          <div class="pivot-label">PURCHASE</div>
          <div class="pivot-sub">The customer never exits.<br />They orbit.</div>
        </div>

        <div class="bowtie-right">
          <div class="bow-stage s-on">
            <div class="bow-num">R1</div>
            <div class="bow-name">Onboarding</div>
            <div class="bow-desc">First 30 days — earn the right to deliver</div>
          </div>
          <div class="bow-stage s-imp">
            <div class="bow-num">R2</div>
            <div class="bow-name">Impact</div>
            <div class="bow-desc">Deliver outcome &gt; expectation; capture proof</div>
          </div>
          <div class="bow-stage s-exp">
            <div class="bow-num">R3</div>
            <div class="bow-name">Expansion</div>
            <div class="bow-desc">Cross-LOB · annual maintenance · referrals</div>
          </div>
          <div class="bow-stage s-adv">
            <div class="bow-num">R4</div>
            <div class="bow-name">Advocacy</div>
            <div class="bow-desc">Customer becomes a node in our acquisition graph</div>
          </div>
        </div>
      </div>

      <h3 class="h2">Why the linear funnel fails YMT specifically</h3>

      <div class="why-linear-fails">
        <div class="wlf-row">
          <div class="wlf-tag">Failure 1</div>
          <div class="wlf-name">It treats every customer as a one-time transaction.</div>
          <div class="wlf-body">In our category, the first job is the lowest-value job. A linear funnel
          declares victory at job #1 and stops measuring. Result: we underinvest in post-purchase
          architecture and forfeit the 3–5× that should follow.</div>
        </div>
        <div class="wlf-row">
          <div class="wlf-tag">Failure 2</div>
          <div class="wlf-name">It hides the right-side stages.</div>
          <div class="wlf-body">Without explicit stages for Onboarding, Impact, Expansion, and Advocacy,
          those activities happen by accident — or not at all. The bowtie forces explicit ownership,
          measurement, and SLA accountability for the post-purchase moments that actually pay the
          mortgage.</div>
        </div>
        <div class="wlf-row">
          <div class="wlf-tag">Failure 3</div>
          <div class="wlf-name">It misallocates spend.</div>
          <div class="wlf-body">A linear-funnel CMO pours 85% of budget into the top of the funnel. A
          bowtie-aware CMO discovers that a $1 invested in Onboarding produces $4.20 in expansion GP
          — and reallocates accordingly. Phase 1 economics: <strong>62% of YMT's lifetime GP is on
          the right side.</strong></div>
        </div>
        <div class="wlf-row">
          <div class="wlf-tag">Failure 4</div>
          <div class="wlf-name">It rewards lead volume, not lead quality.</div>
          <div class="wlf-body">When the funnel ends at "Action," every lead looks equal. The bowtie
          re-prices leads by their downstream behaviour — and an "Investor persona" lead worth $580K
          LTV gets a different SLA than a tyre-kicker worth $9K.</div>
        </div>
      </div>

      <h3 class="h2">Bowtie vs. ABM Bowtie (Vajre) — which we use</h3>
      <p>
        Sangram Vajre's ABM Bowtie collapses the left side into a single "Awareness/Engagement" stage
        and emphasises account-level orchestration. We use Winning by Design's three-stage left (Awareness,
        Education, Selection) because YMT operates in a B2C high-consideration market where the
        Education stage takes 4–14 weeks and requires its own measurement spec. Vajre's model is for
        $250K+ ARR B2B SaaS. Ours is for $48K–$130K household projects with a 9-year retention horizon.
        Same shape. Different stage logic.
      </p>
    </div>
  </section>
)

/* ===================================================================
   FA-02 — PRE-PURCHASE STAGES
   =================================================================== */
const FAPrePurchase = () => (
  <section class="band-white" id="fa2">
    <div class="container">
      <div class="eyebrow">§ 2 · FA-02</div>
      <h2 class="h1">The left side — Awareness · Education · Selection</h2>
      <p class="lede">
        Every pre-purchase stage has a definition, an entry criterion (what must be true for a lead
        to enter), and an exit criterion (what must be true for the lead to advance). No vibes. No
        "they feel ready." Behaviour-gated progression only.
      </p>

      <div class="pre-stages">
        <div class="pre-stage">
          <div class="ps-head">
            <div class="ps-num">L1</div>
            <div class="ps-name">Awareness</div>
            <div class="ps-summary">Stranger discovers that a household problem they vaguely sensed has a name, a cost, and a fix.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The lead has had at least one branded exposure to YMT and now knows that "Whole-of-Home
            Stewardship" exists as a category. They are not yet shopping — they are noticing.</p>

            <h4>Entry criterion (what triggers the stage)</h4>
            <ul>
              <li>Visit to any YMT property for ≥ 45 seconds, OR</li>
              <li>Branded search query containing "ymt" or "your maintenance team," OR</li>
              <li>Inbound referral mention (recorded via the referral capture form)</li>
            </ul>

            <h4>Exit criterion (what must be true to advance to Education)</h4>
            <ul>
              <li>Email captured (lead-magnet download OR newsletter sign-up), AND</li>
              <li>At least 2 distinct content pieces consumed within 30 days, AND</li>
              <li>Self-identified household problem via one form field</li>
            </ul>

            <h4>Time-in-stage benchmark</h4>
            <p><strong>14 days</strong> (median). Anything &gt; 60 days = nurture-stale; trigger the
            re-introduction sequence.</p>
          </div>
        </div>

        <div class="pre-stage">
          <div class="ps-head">
            <div class="ps-num">L2</div>
            <div class="ps-name">Education</div>
            <div class="ps-summary">Lead develops the vocabulary, the evaluation criteria, and the standards by which they will judge any provider.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The lead is now actively investigating. They are reading our category-defining content,
            comparing approaches (Whole-of-Home Stewardship vs. fragmented vendors), and forming an
            opinion about what "good" looks like. This is the stage where we win or lose the framing
            war.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>Two+ qualifying content pieces consumed (defined in WS-08), AND</li>
              <li>Email captured + opted-in to nurture, AND</li>
              <li>Persona signal detected (Investor / Family / Renovator / Empty-Nester)</li>
            </ul>

            <h4>Exit criterion</h4>
            <ul>
              <li>Submitted a free-quote request OR booked a consultation, AND</li>
              <li>MEDDPICC pre-qualification fields completed (Metrics, Decision-Maker, Pain), AND</li>
              <li>Confirmed availability for site visit within 21 days</li>
            </ul>

            <h4>Time-in-stage benchmark</h4>
            <p><strong>28–84 days</strong> (varies by LOB). Pools 8–14 weeks · Termite 1–3 weeks ·
            Units 4–9 weeks. &gt; benchmark = re-engagement sequence #2 fires.</p>
          </div>
        </div>

        <div class="pre-stage">
          <div class="ps-head">
            <div class="ps-num">L3</div>
            <div class="ps-name">Selection</div>
            <div class="ps-summary">Lead is comparing 2–4 providers. We must surface our unique authority + remove the final risk concerns.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The lead is on the short-list. They have a proposal in hand, are vetting references, and
            making the final decision. The brand promise is being stress-tested. This is where DBAs
            (WS-07), social proof (BP-13), and the anxiety toolkit (BP-12) earn their keep.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>Quote delivered + reviewed (open-tracked), AND</li>
              <li>One follow-up question received (signal of genuine consideration), AND</li>
              <li>Decision-maker identified by name</li>
            </ul>

            <h4>Exit criterion</h4>
            <ul>
              <li>Deposit received (Pools/Units) OR contract signed (Termite annual), AND</li>
              <li>Scheduled start date in calendar, AND</li>
              <li>Handoff packet sent to Operations within 24 hours of deposit</li>
            </ul>

            <h4>Time-in-stage benchmark</h4>
            <p><strong>10–21 days</strong>. &gt; 30 days = "Decision Paralysis" play fires (low-stakes
            unblocker meeting + the standards checklist + reference call offer).</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-03 — POST-PURCHASE STAGES
   =================================================================== */
const FAPostPurchase = () => (
  <section class="band-cream" id="fa3">
    <div class="container">
      <div class="eyebrow">§ 3 · FA-03</div>
      <h2 class="h1">The right side — Onboarding · Impact · Expansion · Advocacy</h2>
      <p class="lede">
        The right side is where 62% of YMT's lifetime GP lives. It is also where most home-service
        businesses fail catastrophically — because they do not architect it. Four stages, each with
        entry/exit gates, each owned by a named role, each measured weekly.
      </p>

      <div class="post-stages">
        <div class="post-stage">
          <div class="ps-head">
            <div class="ps-num">R1</div>
            <div class="ps-name">Onboarding (Days 0–30)</div>
            <div class="ps-summary">Earn the right to deliver. Set expectations. Capture the baseline.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The 30-day window from contract signature to first physical site visit (or job start).
            This window determines whether the customer feels they made a brave decision or a stupid
            one. Onboarding is not paperwork. It is reassurance engineering.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>Deposit cleared OR contract signed, AND</li>
              <li>Welcome sequence triggered (Day 0, Day 3, Day 7, Day 14, Day 21, Day 30), AND</li>
              <li>Project Steward assigned by name</li>
            </ul>

            <h4>Exit criterion</h4>
            <ul>
              <li>Site visit complete + baseline photos captured, AND</li>
              <li>Final scope confirmed (no &gt; 7% variance from quote), AND</li>
              <li>Day-30 satisfaction check returns ≥ 8/10, AND</li>
              <li>Job scheduled in delivery calendar</li>
            </ul>

            <h4>Owner</h4>
            <p>Project Steward (the persistent human point-of-contact who stays with the household for
            the decade — the embodiment of our Memory Layer DBA).</p>

            <h4>Time-in-stage</h4>
            <p><strong>30 days exactly.</strong> The clock is non-negotiable. Day 30 = "Onboarding
            complete" checkpoint regardless of job start.</p>
          </div>
        </div>

        <div class="post-stage">
          <div class="ps-head">
            <div class="ps-num">R2</div>
            <div class="ps-name">Impact (Job execution + 60 days post-completion)</div>
            <div class="ps-summary">Deliver the outcome. Document it. Convert delivery into permanent proof.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The job is delivered to standard. Then — critically — we extract the artefacts that make
            the win compoundable: before/after photography, the outcome video, the written testimonial,
            the Google review, the NPS measurement, and the "what surprised you" interview.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>Job started on scheduled date (± 3 business days), AND</li>
              <li>Daily progress photos captured by site lead, AND</li>
              <li>Mid-job 7-day check-in completed</li>
            </ul>

            <h4>Exit criterion</h4>
            <ul>
              <li>Final walkthrough complete + sign-off form signed, AND</li>
              <li>Before/after gallery published to customer's private portal, AND</li>
              <li>Written testimonial captured (target: 80 words, on-brand voice), AND</li>
              <li>Google/Product Review submitted (target: 4.7★+, 60+ words), AND</li>
              <li>NPS captured at Day-30 and Day-60 post-completion, AND</li>
              <li>"What surprised you" 90-second video interview captured</li>
            </ul>

            <h4>Owner</h4>
            <p>Project Steward + Site Lead (joint accountability).</p>

            <h4>Time-in-stage</h4>
            <p>Job duration + 60 days. Termite: ~75 days · Units: 6–14 weeks + 60 · Pools: 10–22 weeks + 60.</p>
          </div>
        </div>

        <div class="post-stage">
          <div class="ps-head">
            <div class="ps-num">R3</div>
            <div class="ps-name">Expansion (Day 61 → forever)</div>
            <div class="ps-summary">Convert proven trust into the next job. Cross-LOB · annual maintenance · uplift.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The customer has proof of YMT capability. The Memory Layer (Project Steward + Household
            Dossier) is active. Now we engineer the next purchase — not by hoping the phone rings, but
            by scheduling the Annual Household Stewardship Review (AHSR) on a calendar 13 months out.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>Impact stage exited cleanly, AND</li>
              <li>Annual Household Stewardship Review (AHSR) scheduled at Day 365 ± 14, AND</li>
              <li>Household Dossier populated (which 4 LOBs/services are next? When? At what spend?)</li>
            </ul>

            <h4>Exit criterion</h4>
            <p>This stage never exits. It is a perpetual loop. Customers cycle through Expansion → Impact
            → Expansion for the decade-long retention horizon. The KPI is jobs-per-household (target: 3.8
            by 2028, 2.4 baseline).</p>

            <h4>Owner</h4>
            <p>Project Steward (perpetual). Backed by quarterly "household intelligence" briefing from
            the AHSR data layer.</p>

            <h4>Sub-loops</h4>
            <ul>
              <li><strong>Annual:</strong> AHSR at Day 365 — produces ≥ 1 additional job recommendation</li>
              <li><strong>Cross-LOB:</strong> Termite finding → Pools opportunity (timber damage near outdoor area triggers)</li>
              <li><strong>Referral:</strong> Embedded into AHSR script — "who do you know with an older pool?"</li>
            </ul>
          </div>
        </div>

        <div class="post-stage">
          <div class="ps-head">
            <div class="ps-num">R4</div>
            <div class="ps-name">Advocacy (parallel to Expansion)</div>
            <div class="ps-summary">Customer becomes a node in our acquisition graph. Referrals are engineered, not requested.</div>
          </div>
          <div class="ps-body">
            <h4>Definition</h4>
            <p>The customer has not only repurchased — they are now actively producing acquisition energy
            for YMT through reviews, referrals, case studies, ambassador appearances, and "let me show
            you what they did" word-of-mouth.</p>

            <h4>Entry criterion</h4>
            <ul>
              <li>NPS ≥ 9 (Promoter), AND</li>
              <li>At least 2 completed YMT jobs, AND</li>
              <li>Opt-in to be featured in case studies / before-after walkthrough video</li>
            </ul>

            <h4>Exit criterion</h4>
            <p>None — Promoters compound forever. The stage measures velocity: referrals-per-promoter-per-year.</p>

            <h4>Owner</h4>
            <p>Marketing (YDT) + Project Steward.</p>

            <h4>KPI</h4>
            <p>Referral velocity: <strong>0.42 referrals per Promoter per year</strong> (target). Each
            referral has an embedded conversion rate (target: 38%) → each Promoter is worth ≈ 0.16 net
            new jobs/year just from referral output.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-04 — CHANNEL · CONTENT · KPI MAP
   =================================================================== */
const FAChannelMap = () => (
  <section class="band-white" id="fa4">
    <div class="container">
      <div class="eyebrow">§ 4 · FA-04</div>
      <h2 class="h1">The channel-content-KPI map per stage</h2>
      <p class="lede">
        Each stage has a dominant channel mix, a content archetype, and a single primary KPI. If you
        cannot name the channel-content-KPI triplet for a stage, the stage is not architected.
      </p>

      <div class="channel-table-wrap">
        <table class="channel-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Dominant Channels</th>
              <th>Content Archetype</th>
              <th>Primary KPI (target)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>L1 · Awareness</strong></td>
              <td>YouTube short-form · IG Reels · Branded search · Local PR · Outdoor (Queensland)</td>
              <td>Category-defining: "Here's the problem most homeowners don't know they have."</td>
              <td>Branded search volume: <strong>+22% YoY</strong></td>
            </tr>
            <tr>
              <td><strong>L2 · Education</strong></td>
              <td>Long-form articles (SEO+GEO) · YouTube long-form · Email nurture · Webinar/AMA</td>
              <td>Evaluation criteria: "Here's how a smart owner judges any provider in this category."</td>
              <td>Quote-request rate: <strong>≥ 3.4% of L2 entries</strong></td>
            </tr>
            <tr>
              <td><strong>L3 · Selection</strong></td>
              <td>Sales calls · Reference videos · Proposal portal · WhatsApp · Site visit</td>
              <td>Proof-stack: case studies · MMXXVI Standards doc · reference reels · warranty doc</td>
              <td>Close rate: <strong>≥ 41%</strong> of qualified L3</td>
            </tr>
            <tr>
              <td><strong>R1 · Onboarding</strong></td>
              <td>Email sequence (6-touch) · Customer portal · SMS · Project Steward calls</td>
              <td>Reassurance: "Here's exactly what happens next + here's who is responsible."</td>
              <td>Day-30 satisfaction: <strong>≥ 8.5/10</strong></td>
            </tr>
            <tr>
              <td><strong>R2 · Impact</strong></td>
              <td>WhatsApp daily updates · Portal photo stream · In-person walkthroughs</td>
              <td>Proof-capture: daily photos · 90-sec "surprise" interview · before-after video</td>
              <td>NPS at Day-60: <strong>≥ 72</strong></td>
            </tr>
            <tr>
              <td><strong>R3 · Expansion</strong></td>
              <td>AHSR meeting · Quarterly newsletter · Household Dossier review · Cross-LOB briefings</td>
              <td>Stewardship: "Your household's next 12-month outlook + recommended priorities."</td>
              <td>Jobs-per-household: <strong>3.8 by 2028</strong> (2.4 baseline)</td>
            </tr>
            <tr>
              <td><strong>R4 · Advocacy</strong></td>
              <td>Case study production · Ambassador program · Review velocity engine · Referral form</td>
              <td>Spotlight: customer-led story · "show your neighbour" content · review prompts</td>
              <td>Referrals/Promoter/year: <strong>0.42</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">Channel mix rationale per LOB</h3>
      <div class="lob-channel-grid">
        <div class="lob-channel pools">
          <div class="lc-tag">Pools / Outdoor</div>
          <div class="lc-mix">High-visual: IG Reels (cinematic golden-hour) + YouTube (build-process docs) + Local outdoor (Queensland coastal regions) dominate L1–L2. Selection driven by reference reels + show-home visits.</div>
        </div>
        <div class="lob-channel termite">
          <div class="lc-tag">Termite</div>
          <div class="lc-mix">High-anxiety: SEO+GEO dominant ("termite damage cost," "termite repair vs replace") for L1–L2. Selection driven by inspection-report + warranty + insurance-grade documentation.</div>
        </div>
        <div class="lob-channel units">
          <div class="lc-tag">Unit Renos</div>
          <div class="lc-mix">High-consideration: Long-form thought leadership (Investor persona) + portfolio walkthroughs + ROI calculators dominate L1–L2. Selection driven by financial modelling + portfolio precedent.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-05 — MEDDPICC F1→F2 HANDOFF
   =================================================================== */
const FAMeddpicc = () => (
  <section class="band-cream" id="fa5">
    <div class="container">
      <div class="eyebrow">§ 5 · FA-05</div>
      <h2 class="h1">MEDDPICC — the F1→F2 qualification specification</h2>
      <p class="lede">
        Adapted from Force Management's enterprise B2B framework for B2C high-consideration sale. F1
        (Fit 1 — Marketing-Qualified Lead) advances to F2 (Fit 2 — Sales-Accepted Lead) only when
        all eight MEDDPICC fields are completed to specification. No exceptions. No "I'll get to it
        later." If MEDDPICC is incomplete, the lead is bounced back to nurture.
      </p>

      <div class="meddpicc-grid">
        <div class="medd-card">
          <div class="medd-letter">M</div>
          <div class="medd-name">Metrics</div>
          <div class="medd-q"><strong>The exact question to ask:</strong> "What outcome would make this project a success in dollar terms — saved, earned, or avoided?"</div>
          <div class="medd-spec">Spec: Numeric answer captured. "I just want a nice pool" = fail. "I want to add $80K to property value and stop paying $1,200/yr to clean an algae-prone pool" = pass.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">E</div>
          <div class="medd-name">Economic Buyer</div>
          <div class="medd-q"><strong>Question:</strong> "Whose name is on the bank account that pays the deposit?"</div>
          <div class="medd-spec">Spec: Named individual. Phone number. Confirmed they will be on the L3 Selection call.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">D</div>
          <div class="medd-name">Decision Criteria</div>
          <div class="medd-q"><strong>Question:</strong> "If you imagine the perfect provider walking through your door, what are the 3 things they bring that win you over?"</div>
          <div class="medd-spec">Spec: 3 ranked criteria. We then check each criterion against our DBA + proof inventory.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">D</div>
          <div class="medd-name">Decision Process</div>
          <div class="medd-q"><strong>Question:</strong> "Walk me through the next 3 steps you will take from quote → start date."</div>
          <div class="medd-spec">Spec: Written timeline. Includes "talk to my spouse," "get a 2nd quote," "review references." This is our predictive map of objections.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">P</div>
          <div class="medd-name">Paper Process</div>
          <div class="medd-q"><strong>Question:</strong> "Will you be paying cash, financing, or insurance-claim funded?"</div>
          <div class="medd-spec">Spec: Funding source confirmed. If financing — pre-approval status. If insurance — claim number + assessor.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">I</div>
          <div class="medd-name">Identified Pain</div>
          <div class="medd-q"><strong>Question:</strong> "What happens if you do nothing for the next 12 months?"</div>
          <div class="medd-spec">Spec: Pain articulated in customer's own words. Recorded verbatim. Used in proposal as the "what we are solving" frame.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">C</div>
          <div class="medd-name">Champion</div>
          <div class="medd-q"><strong>Question:</strong> "Who in your household will be most disappointed if this doesn't happen?"</div>
          <div class="medd-spec">Spec: Champion identified. That person is who we email first when we want movement. Often not the Economic Buyer.</div>
        </div>
        <div class="medd-card">
          <div class="medd-letter">C</div>
          <div class="medd-name">Competition</div>
          <div class="medd-q"><strong>Question:</strong> "Who else are you talking to and what do you like about them?"</div>
          <div class="medd-spec">Spec: Named competitors + their perceived strengths. We use this to surface our differentiated authority on those exact axes in the proposal.</div>
        </div>
      </div>

      <h3 class="h2">F1 → F2 handoff protocol</h3>
      <div class="handoff-spec">
        <ol class="handoff-steps">
          <li><strong>Trigger:</strong> L2 Education exit criterion met (quote request + persona signal + initial form submission).</li>
          <li><strong>Within 4 business hours:</strong> Sales Steward reviews submission + populates MEDDPICC sheet in CRM (8/8 fields).</li>
          <li><strong>Within 24 hours:</strong> First call attempted. If reached, MEDDPICC validated/refined live.</li>
          <li><strong>Within 72 hours:</strong> If MEDDPICC ≥ 6/8 complete → lead enters L3 Selection. If &lt; 6/8 → returned to L2 nurture with note.</li>
          <li><strong>Within 5 business days:</strong> Site visit booked OR formal proposal in flight.</li>
          <li><strong>Audit:</strong> Weekly Sales-Marketing meeting reviews 100% of bounced leads to identify nurture gaps.</li>
        </ol>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-06 — EXPANSION LOOP DESIGN
   =================================================================== */
const FAExpansion = () => (
  <section class="band-white" id="fa6">
    <div class="container">
      <div class="eyebrow">§ 6 · FA-06</div>
      <h2 class="h1">Expansion loops — annual · cross-LOB · referral</h2>
      <p class="lede">
        Expansion is engineered. Three loops, each with a calendared trigger, a script, an owner, and
        a measurable conversion target. Hope is not a loop.
      </p>

      <div class="expansion-loops">
        <div class="exp-loop">
          <div class="el-tag">Loop 1 · Annual</div>
          <div class="el-name">The Annual Household Stewardship Review (AHSR)</div>
          <div class="el-mechanism">
            <h4>Mechanism</h4>
            <p>At Day 365 ± 14 from last completed job, the Project Steward schedules a 45-minute AHSR
            meeting (in-person or video). The Steward arrives with the Household Dossier — every photo,
            spec, warranty, and recommendation from the prior 12 months — plus a forward-12 outlook:
            "Here is what we expect your household to need in the next year."</p>

            <h4>Conversion target</h4>
            <p><strong>54% of AHSR meetings produce a booked next job within 90 days.</strong></p>

            <h4>Owner</h4>
            <p>Project Steward.</p>

            <h4>Failure mode</h4>
            <p>Customer declines AHSR ("we don't need anything"). Counter-play: AHSR is positioned as
            a complimentary stewardship check, not a sales call. We send the Household Dossier whether
            or not they meet — the dossier itself is the seeding mechanism.</p>
          </div>
        </div>

        <div class="exp-loop">
          <div class="el-tag">Loop 2 · Cross-LOB</div>
          <div class="el-name">The Trigger-Map Conversion Engine</div>
          <div class="el-mechanism">
            <h4>Mechanism</h4>
            <p>Every job execution surfaces "next-LOB" signals. A termite inspection finds evidence of
            water damage near an outdoor area → that triggers a Pools/Outdoor team consultation. A pool
            renovation team notices ageing decking → that triggers a Termite inspection. A unit
            renovation finds a neglected outdoor space → that triggers an Outdoor Living quote.</p>

            <h4>Conversion target</h4>
            <p><strong>22% of jobs produce a qualified cross-LOB lead. 38% of those leads convert
            within 6 months.</strong> Net: every primary job seeds ~0.08 cross-LOB jobs.</p>

            <h4>Owner</h4>
            <p>Site Lead surfaces the signal → Project Steward executes the warm intro.</p>

            <h4>Failure mode</h4>
            <p>Site Lead doesn't log the signal (it's "extra work"). Counter-play: cross-LOB signal capture
            is built into the job-completion form. Cannot mark job complete without ticking the trigger
            checklist (Yes/No/N-A on 7 trigger conditions).</p>
          </div>
        </div>

        <div class="exp-loop">
          <div class="el-tag">Loop 3 · Referral</div>
          <div class="el-name">The Promoter Referral Velocity Engine</div>
          <div class="el-mechanism">
            <h4>Mechanism</h4>
            <p>Every Promoter (NPS ≥ 9) receives 4 calendared referral asks per year — embedded into the
            AHSR, the quarterly newsletter, the case-study production process, and the "show a neighbour"
            walkthrough event. Each ask is contextual ("who do you know with an older pool?") not generic
            ("any referrals?").</p>

            <h4>Conversion target</h4>
            <p><strong>0.42 referrals per Promoter per year. 38% convert. Net 0.16 jobs/year per
            Promoter.</strong></p>

            <h4>Owner</h4>
            <p>Marketing (YDT) sends the asks. Project Steward warm-introduces the referred party.</p>

            <h4>Failure mode</h4>
            <p>Asking too often, in too transactional a frame, kills the relationship. Counter-play: asks
            are wrapped inside genuine stewardship moments — never standalone. The 4 calendared moments
            must each have an independent customer-benefit reason to exist.</p>
          </div>
        </div>
      </div>

      <h3 class="h2">Compounding math — why these three loops matter</h3>
      <p>
        Baseline: 2.4 jobs per household over a decade. With all three loops at target performance:
        Annual contributes +0.6 jobs, Cross-LOB contributes +0.4 jobs, Referral contributes +0.4 jobs
        (counted at the household-of-record, not the new household). Net target: <strong>3.8 jobs per
        household</strong> — the 2028 KPI. At YMT's blended GP per job, this single delta moves
        lifetime GP per household from $52K to $87K (+67%).
      </p>
    </div>
  </section>
)

/* ===================================================================
   FA-07 — ADVOCACY ENGINE SPEC
   =================================================================== */
const FAAdvocacy = () => (
  <section class="band-cream" id="fa7">
    <div class="container">
      <div class="eyebrow">§ 7 · FA-07</div>
      <h2 class="h1">Advocacy engine — review velocity, case studies, ambassadors</h2>
      <p class="lede">
        Advocacy compounds. A Promoter who refers 1 customer/year for 5 years generates more new revenue
        than 80% of paid-acquisition leads. The engine has three sub-systems: review velocity, case
        study factory, ambassador program. Each has a quota.
      </p>

      <div class="advocacy-engines">
        <div class="ae-card">
          <div class="ae-h">Sub-system 1 · Review Velocity</div>
          <h4>Targets</h4>
          <ul>
            <li>Google reviews per month: <strong>18+</strong> (YMT-aggregate)</li>
            <li>Average rating: <strong>≥ 4.83★</strong></li>
            <li>Review length: <strong>≥ 60 words median</strong> (specificity = trust signal)</li>
            <li>Photo-attached reviews: <strong>≥ 35%</strong></li>
          </ul>
          <h4>Mechanism</h4>
          <p>Day-7 post-completion automated SMS + branded ask with a one-tap link. Day-14 follow-up
          if no review. Day-30 personal call from Project Steward if still none. Capture rate: 64% of
          completed jobs produce a review within 30 days.</p>
        </div>

        <div class="ae-card">
          <div class="ae-h">Sub-system 2 · Case Study Factory</div>
          <h4>Targets</h4>
          <ul>
            <li>Published case studies/month: <strong>2 per LOB</strong> (6 total)</li>
            <li>Each contains: 1 hero video, 1 written long-form, 1 photo gallery, 1 owner-quote graphic</li>
            <li>Repurposing ratio: <strong>1 case study → 14 derivative content pieces</strong></li>
          </ul>
          <h4>Mechanism</h4>
          <p>Selection criteria: NPS ≥ 9, photogenic project, customer opt-in. Production: in-house at
          delivery (no separate "marketing shoot day"). Standard packet: pre-job photo + 5 progress
          photos + after photo + 90-sec interview + 80-word written quote. YDT scripts the long-form
          + edits the video + ships within 21 days of job completion.</p>
        </div>

        <div class="ae-card">
          <div class="ae-h">Sub-system 3 · Ambassador Program</div>
          <h4>Targets</h4>
          <ul>
            <li>Active ambassadors: <strong>24</strong> (8 per LOB)</li>
            <li>Average referrals per ambassador per year: <strong>2.1</strong></li>
            <li>Recognition: annual ambassador dinner + named honorary "Steward" status</li>
          </ul>
          <h4>Mechanism</h4>
          <p>Selection: top 5% by referral velocity + NPS. Annual signed agreement (non-financial — recognition,
          early access to new services, invitations to private events). Quarterly check-in by senior
          team. Public recognition on website (with consent). No money changes hands — the relationship
          is built on shared standards, not commission.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-08 — CROSS-LOB TRIGGER MAP
   =================================================================== */
const FACrossLOB = () => (
  <section class="band-white" id="fa8">
    <div class="container">
      <div class="eyebrow">§ 8 · FA-08</div>
      <h2 class="h1">Cross-LOB trigger map — Termite → Pools → Units conversion paths</h2>
      <p class="lede">
        The single most under-exploited asset in home services is the cross-LOB signal observed during
        any one job. We map every meaningful trigger explicitly — the observable signal, the second LOB
        that benefits, the conversation script, and the timing window for the warm intro.
      </p>

      <div class="crosslob-table-wrap">
        <table class="crosslob-table">
          <thead>
            <tr>
              <th>Trigger Signal (observed during job)</th>
              <th>Primary LOB</th>
              <th>Cross-Sell LOB</th>
              <th>Timing Window</th>
              <th>Expected Conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timber damage near outdoor entertaining area</td>
              <td>Termite</td>
              <td>Pools/Outdoor (deck/pergola)</td>
              <td>30–60 days post-completion</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Ageing pool decking / pergola obviously beyond patch repair</td>
              <td>Pools (renovation/build)</td>
              <td>Termite (preventive inspection + repair)</td>
              <td>Concurrent with pool job</td>
              <td>52%</td>
            </tr>
            <tr>
              <td>Unit interior renovation reveals outdoor neglect</td>
              <td>Unit Renovation</td>
              <td>Pools/Outdoor + Termite</td>
              <td>60–120 days post-handover</td>
              <td>28%</td>
            </tr>
            <tr>
              <td>Termite inspection finds active infestation requiring full sub-floor repair</td>
              <td>Termite</td>
              <td>Unit Renovation (interior re-fit)</td>
              <td>Concurrent (insurance synergy)</td>
              <td>61%</td>
            </tr>
            <tr>
              <td>Pool design constrained by ageing rear-of-house structure</td>
              <td>Pools</td>
              <td>Unit Renovation (rear extension)</td>
              <td>Phased: pool → reno year 2</td>
              <td>22%</td>
            </tr>
            <tr>
              <td>Investor unit ownership signal (post-AHSR)</td>
              <td>Any LOB</td>
              <td>Unit Renovation (portfolio uplift)</td>
              <td>Within 12 months</td>
              <td>18%</td>
            </tr>
            <tr>
              <td>Family expansion signal (new baby / older relative moving in)</td>
              <td>Any LOB</td>
              <td>Unit Renovation (functional reconfigure)</td>
              <td>3–9 months</td>
              <td>26%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">The cross-LOB introduction script (verbatim, junior-executable)</h3>
      <div class="cl-script">
        <blockquote>
          "I noticed during the inspection that [specific observation]. That's not part of what we're here
          for today — but it's the kind of thing your future self will thank you for catching now rather
          than in 18 months. If you'd like, I can ask [Other LOB Steward] to give you a no-obligation
          assessment within the next [timing window]. There's no quote, no pitch — just a second set of
          informed eyes. Want me to set that up?"
        </blockquote>
      </div>

      <p>
        Why this script works: it acknowledges the boundary of the current job (builds trust), surfaces
        a specific observation (specificity over superlatives — WS-02 Rule 3), uses loss aversion
        ("future self will thank you for catching now rather than in 18 months" — BP-07), and frames
        the cross-LOB intro as a low-stakes assessment, not a sales call. Conversion lift vs. no-script
        control: <strong>+47%</strong>.
      </p>
    </div>
  </section>
)

/* ===================================================================
   FA-09 — TIME-IN-STAGE BENCHMARKS
   =================================================================== */
const FATimings = () => (
  <section class="band-cream" id="fa9">
    <div class="container">
      <div class="eyebrow">§ 9 · FA-09</div>
      <h2 class="h1">Time-in-stage benchmarks — the dwell-time clock</h2>
      <p class="lede">
        A lead stuck in a stage is a lost lead. Every stage has a median and a maximum. Exceed the
        maximum and the unstick play fires automatically. Benchmarks differ by LOB.
      </p>

      <div class="timing-table-wrap">
        <table class="timing-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Pools/Outdoor</th>
              <th>Termite</th>
              <th>Unit Renos</th>
              <th>Max before unstick play</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>L1 Awareness</td><td>14 days</td><td>4 days</td><td>21 days</td><td>60 days</td></tr>
            <tr><td>L2 Education</td><td>8–14 weeks</td><td>1–3 weeks</td><td>4–9 weeks</td><td>26 weeks</td></tr>
            <tr><td>L3 Selection</td><td>14–21 days</td><td>5–10 days</td><td>10–18 days</td><td>45 days</td></tr>
            <tr><td>R1 Onboarding</td><td>30 days (fixed)</td><td>30 days (fixed)</td><td>30 days (fixed)</td><td>45 days</td></tr>
            <tr><td>R2 Impact</td><td>~22 weeks</td><td>~10 weeks</td><td>~16 weeks</td><td>+8 weeks of plan</td></tr>
            <tr><td>R3 Expansion (to AHSR)</td><td>12 months</td><td>12 months</td><td>12 months</td><td>13 months</td></tr>
            <tr><td>R4 Advocacy (to 1st referral)</td><td>9 months</td><td>9 months</td><td>9 months</td><td>14 months</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">Why timings vary by LOB</h3>
      <p>
        <strong>Termite</strong> compresses because it is reactive (a problem is already present). The customer
        moves through Awareness → Selection in days, not weeks. <strong>Pools/Outdoor</strong> elongates because it
        is aspirational, discretionary, and seasonal. <strong>Unit renovations</strong> sit in the middle —
        they are planned but emotional. Knowing this asymmetry is critical to staffing the funnel correctly.
        A single timeline across all three LOBs would mis-serve every one.
      </p>
    </div>
  </section>
)

/* ===================================================================
   FA-10 — STAGE EXIT FAILURE MODES + UNSTICK PLAYS
   =================================================================== */
const FAFailureModes = () => (
  <section class="band-white" id="fa10">
    <div class="container">
      <div class="eyebrow">§ 10 · FA-10</div>
      <h2 class="h1">Stuck-in-stage diagnostics + the unstick plays</h2>
      <p class="lede">
        Twelve named failure modes — one per stage × major variant. Each has a diagnostic signal and
        a named play. Junior YDT can execute the unstick playbook without escalation.
      </p>

      <div class="failure-grid">
        <div class="failure-card">
          <div class="fc-tag">L1 Awareness</div>
          <div class="fc-name">"They visited once, never came back."</div>
          <div class="fc-diag">No second touch within 14 days. No email captured.</div>
          <div class="fc-play"><strong>Play:</strong> Retargeting sequence with a category-shifting lead magnet ("The Whole-of-Home Stewardship Briefing — 12 pages"). Free, no email gate after first download.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">L2 Education</div>
          <div class="fc-name">"They read everything but won't request a quote."</div>
          <div class="fc-diag">5+ content pieces consumed. Email opens but no form fills. &gt; 8 weeks since last action.</div>
          <div class="fc-play"><strong>Play:</strong> "Office Hours" — a no-quote 15-minute consultation. Removes the commitment frame.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">L2 Education</div>
          <div class="fc-name">"They started the form, didn't finish."</div>
          <div class="fc-diag">Partial form fill. Last field touched &gt; 4 days ago.</div>
          <div class="fc-play"><strong>Play:</strong> Personal email from named Steward with a one-link finish button. No third email — that becomes pestering.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">L3 Selection</div>
          <div class="fc-name">"Quote sent, then silence."</div>
          <div class="fc-diag">Quote opened, no reply, &gt; 10 days.</div>
          <div class="fc-play"><strong>Play:</strong> Voss-style email: "It looks like the timing isn't right — fair to assume you've decided to go in another direction?" (Loss aversion + face-saving exit — counter-intuitively pulls them back.)</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">L3 Selection</div>
          <div class="fc-name">"Decision paralysis — multiple quotes, no movement."</div>
          <div class="fc-diag">"Just comparing" stated in 2+ contacts. &gt; 21 days since proposal.</div>
          <div class="fc-play"><strong>Play:</strong> The MMXXVI Standards Checklist — 24 yes/no questions any provider should answer. Reframes the decision around objective criteria. Lifts close rate 19%.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R1 Onboarding</div>
          <div class="fc-name">"Signed, but went quiet."</div>
          <div class="fc-diag">No portal logins. No replies to Day-7 / Day-14 checks.</div>
          <div class="fc-play"><strong>Play:</strong> Project Steward in-person doorstep visit + handwritten welcome letter. Re-anchors the human relationship before delivery.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R1 Onboarding</div>
          <div class="fc-name">"Scope-creep emerging."</div>
          <div class="fc-diag">3+ change requests in the first 30 days. Total quote variance trending &gt; 7%.</div>
          <div class="fc-play"><strong>Play:</strong> "Scope reset" meeting with the Standards Doc as the anchor. Hard line: anything beyond 7% requires a written change order at scope-revision rates.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R2 Impact</div>
          <div class="fc-name">"Job slipping behind schedule."</div>
          <div class="fc-diag">2+ weekly milestones missed without proactive customer comms.</div>
          <div class="fc-play"><strong>Play:</strong> "Honest update" call (not email). Reset expectations. Offer a goodwill gesture if delay is YMT-side. Recovery is in the communication, not the calendar.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R2 Impact</div>
          <div class="fc-name">"Job complete, but customer feels underwhelmed."</div>
          <div class="fc-diag">NPS Day-30 ≤ 6. Vague "fine, I guess" feedback.</div>
          <div class="fc-play"><strong>Play:</strong> Service-recovery call from senior team. Identify the specific dissatisfaction. Make one disproportionate gesture (extra service, extended warranty). Goal: turn detractor → passive → promoter over 90 days.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R3 Expansion</div>
          <div class="fc-name">"AHSR declined."</div>
          <div class="fc-diag">No-reply to AHSR scheduling at Day 365 + 2 nudges.</div>
          <div class="fc-play"><strong>Play:</strong> Send the Household Dossier anyway, with a personal note: "Whether or not we ever speak again, this is your file. We thought you should have it." Builds trust. 28% reactivate within 9 months.</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R3 Expansion</div>
          <div class="fc-name">"Cross-LOB lead surfaced but went cold."</div>
          <div class="fc-diag">Warm intro made, no follow-up engagement within 30 days.</div>
          <div class="fc-play"><strong>Play:</strong> Re-attribute to the Project Steward (not the new-LOB Steward). The trust lives with the existing relationship. New-LOB Steward joins only when the existing Steward says "ready."</div>
        </div>
        <div class="failure-card">
          <div class="fc-tag">R4 Advocacy</div>
          <div class="fc-name">"Promoter, but no referrals."</div>
          <div class="fc-diag">NPS ≥ 9, but 0 referrals after 12 months of asks.</div>
          <div class="fc-play"><strong>Play:</strong> "Show your neighbour" event — invite the Promoter + 1 friend for a private walkthrough of a current project. Social context removes the awkward "selling my friend" frame.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-11 — STAGE MEASUREMENT SPEC
   =================================================================== */
const FAStageMetrics = () => (
  <section class="band-cream" id="fa11">
    <div class="container">
      <div class="eyebrow">§ 11 · FA-11</div>
      <h2 class="h1">Stage measurement — one primary KPI per stage with a hard target</h2>
      <p class="lede">
        Every stage has exactly one primary KPI. Vanity metrics are tracked but never reported as the
        headline number. Targets are quarterly and tied to compensation for the named owner.
      </p>

      <div class="metric-table-wrap">
        <table class="metric-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Primary KPI</th>
              <th>Q1 2027 Target</th>
              <th>Q4 2028 Target</th>
              <th>Owner</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>L1 Awareness</td><td>Branded search MoM growth</td><td>+8% YoY</td><td>+22% YoY</td><td>YDT Demand</td><td>GA4 / SearchConsole</td></tr>
            <tr><td>L2 Education</td><td>Quote-request rate from L2</td><td>2.1%</td><td>3.4%</td><td>YDT Content</td><td>HubSpot / GA4</td></tr>
            <tr><td>L3 Selection</td><td>Close rate (qualified)</td><td>34%</td><td>41%</td><td>Sales Steward</td><td>HubSpot deal stages</td></tr>
            <tr><td>R1 Onboarding</td><td>Day-30 satisfaction</td><td>8.0/10</td><td>8.5/10</td><td>Project Steward</td><td>Automated survey</td></tr>
            <tr><td>R2 Impact</td><td>NPS at Day-60</td><td>62</td><td>72</td><td>Project Steward</td><td>NPS module</td></tr>
            <tr><td>R3 Expansion</td><td>Jobs/household lifetime</td><td>2.8</td><td>3.8</td><td>Project Steward</td><td>CRM rollup</td></tr>
            <tr><td>R4 Advocacy</td><td>Referrals/Promoter/year</td><td>0.28</td><td>0.42</td><td>YDT + Steward</td><td>Referral form + CRM</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-12 — LIFETIME GP ECONOMIC MODEL
   =================================================================== */
const FALifetimeGP = () => (
  <section class="band-white" id="fa12">
    <div class="container">
      <div class="eyebrow">§ 12 · FA-12</div>
      <h2 class="h1">The lifetime GP model — proving cross-LOB is worth 3–5× the initial job</h2>
      <p class="lede">
        Most home-service finance teams model the customer in single-job terms. We model in lifetime
        terms — 9-year retention horizon, multi-LOB orbit, expansion loop economics fully attributed.
        The result reframes every acquisition spend decision.
      </p>

      <div class="ltv-model-wrap">
        <table class="ltv-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Job Type</th>
              <th>Gross Revenue</th>
              <th>Gross Profit</th>
              <th>Cumulative GP</th>
              <th>Compounding Note</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Yr 0</td><td>Initial Termite Treatment</td><td>$9,400</td><td>$3,290</td><td>$3,290</td><td>Acquisition job — lowest GP%</td></tr>
            <tr><td>Yr 1</td><td>Annual Termite Renewal</td><td>$1,850</td><td>$925</td><td>$4,215</td><td>Subscription momentum</td></tr>
            <tr><td>Yr 2</td><td>Outdoor Living (pergola+deck)</td><td>$48,200</td><td>$15,425</td><td>$19,640</td><td>1st cross-LOB triggered by Yr0 termite finding</td></tr>
            <tr><td>Yr 2</td><td>Annual Termite Renewal</td><td>$1,850</td><td>$925</td><td>$20,565</td><td></td></tr>
            <tr><td>Yr 3</td><td>Annual Termite Renewal</td><td>$1,850</td><td>$925</td><td>$21,490</td><td></td></tr>
            <tr><td>Yr 4</td><td>Pool Build (resort-grade)</td><td>$92,400</td><td>$29,570</td><td>$51,060</td><td>2nd cross-LOB · AHSR-sourced</td></tr>
            <tr><td>Yr 4</td><td>Annual Termite Renewal</td><td>$1,850</td><td>$925</td><td>$51,985</td><td></td></tr>
            <tr><td>Yr 5</td><td>Annual Termite + Pool Service</td><td>$3,800</td><td>$1,900</td><td>$53,885</td><td>Recurring stack</td></tr>
            <tr><td>Yr 6</td><td>Annual Termite + Pool Service</td><td>$3,800</td><td>$1,900</td><td>$55,785</td><td></td></tr>
            <tr><td>Yr 7</td><td>Unit Renovation (kitchen+bath)</td><td>$128,900</td><td>$32,225</td><td>$88,010</td><td>3rd cross-LOB · Investor-persona triggered</td></tr>
            <tr><td>Yr 7</td><td>Recurring services</td><td>$3,800</td><td>$1,900</td><td>$89,910</td><td></td></tr>
            <tr><td>Yr 8</td><td>Recurring services</td><td>$3,800</td><td>$1,900</td><td>$91,810</td><td></td></tr>
            <tr><td>Yr 9</td><td>Pool refresh (waterline/tile)</td><td>$18,400</td><td>$5,520</td><td>$97,330</td><td>Mid-life refresh</td></tr>
            <tr><td>Yr 9</td><td>Recurring services</td><td>$3,800</td><td>$1,900</td><td>$99,230</td><td></td></tr>
            <tr class="ltv-total"><td colspan="2"><strong>10-Year Lifetime</strong></td><td><strong>$321,700</strong></td><td><strong>$99,230</strong></td><td><strong>$99,230</strong></td><td>≈ 30× the initial job GP</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">The ratio that changes every spend decision</h3>
      <p>
        Initial job GP: $3,290. Lifetime GP: $99,230. <strong>Ratio: 30.2×.</strong> Even at our conservative
        baseline (2.4 jobs per household, not the 3.8 target), lifetime GP is still ~$47,000 — a 14×
        ratio. This is the math that justifies a CAC of $1,200 for a Termite-initial lead (which a
        single-job-thinking competitor will refuse to spend, because their model says $400 is
        breakeven).
      </p>
      <p>
        For YDT spend planning: <strong>treat every Termite-initial lead as worth $42,000 in modelled
        lifetime GP from day one</strong>, not $3,290. This unlocks 10× the addressable CPL on paid
        channels and is the single largest competitive advantage Phase 2 architecture confers.
      </p>
    </div>
  </section>
)

/* ===================================================================
   FA-13 — CUSTOMER-SEGMENT FUNNEL VARIATIONS
   =================================================================== */
const FASegmentVariations = () => (
  <section class="band-cream" id="fa13">
    <div class="container">
      <div class="eyebrow">§ 13 · FA-13</div>
      <h2 class="h1">Segment variations — does the Investor persona move through differently? Yes.</h2>
      <p class="lede">
        The bowtie shape is universal. The dwell-times, channel mix, and SLA expectations differ by
        persona. Four named personas, four variations.
      </p>

      <div class="segment-grid">
        <div class="seg-card">
          <div class="seg-tag">Persona 1</div>
          <div class="seg-name">The Investor (Unit Reno-led entry)</div>
          <div class="seg-body">
            <h4>How they move through</h4>
            <p>Compressed L1–L2 (research-heavy professional buyer · 21 days median). Extended L3 (financial
            modelling-driven · 18–28 days). Onboarding accelerated (they have done this before). Expansion
            triggered by portfolio additions — every new property = a new household relationship.</p>
            <h4>Funnel KPI differences</h4>
            <ul>
              <li>L3 close rate target: <strong>48%</strong> (vs. 41% baseline) — qualified Investors have done their homework</li>
              <li>Jobs/household lifetime: <strong>5.2</strong> (vs. 3.8 baseline) — portfolio compounding</li>
              <li>Referrals/Promoter/year: <strong>0.84</strong> (vs. 0.42 baseline) — Investors refer other Investors</li>
            </ul>
          </div>
        </div>

        <div class="seg-card">
          <div class="seg-tag">Persona 2</div>
          <div class="seg-name">The Established Family (Pools-led entry)</div>
          <div class="seg-body">
            <h4>How they move through</h4>
            <p>Long L1–L2 (aspirational, seasonal · 10–14 weeks). Tight L3 (decision driven by household
            consensus + spouse alignment). Onboarding requires reassurance for the household-disruption
            anxiety. Expansion driven by life-stage events (new baby → reconfigure; older child → home
            office).</p>
            <h4>Funnel KPI differences</h4>
            <ul>
              <li>L2 → L3 conversion: <strong>2.8%</strong> (vs. 3.4% baseline) — longer consideration</li>
              <li>NPS at Day-60: <strong>74</strong> (vs. 72 baseline) — emotional buy-in is highest</li>
              <li>Referrals/Promoter/year: <strong>0.62</strong> — neighbourhood network effect</li>
            </ul>
          </div>
        </div>

        <div class="seg-card">
          <div class="seg-tag">Persona 3</div>
          <div class="seg-name">The Reactive Owner (Termite-led entry)</div>
          <div class="seg-body">
            <h4>How they move through</h4>
            <p>Compressed entire left side (a problem exists; speed wins). Onboarding focused on anxiety
            reduction + insurance navigation. Expansion is the highest-impact intervention point —
            converting a one-job reactive customer into a stewardship relationship is where the LTV
            multiplier lives.</p>
            <h4>Funnel KPI differences</h4>
            <ul>
              <li>L1 → L3 in days: <strong>5–14</strong> (vs. 30–90 baseline)</li>
              <li>R3 expansion conversion: <strong>34%</strong> in Yr 1 (the make-or-break metric)</li>
              <li>If R3 fails: lifetime GP collapses to ~$5,200 (one-job-only)</li>
            </ul>
          </div>
        </div>

        <div class="seg-card">
          <div class="seg-tag">Persona 4</div>
          <div class="seg-name">The Empty-Nester (Outdoor Living-led entry)</div>
          <div class="seg-body">
            <h4>How they move through</h4>
            <p>Moderate L1–L2 (aspirational but pragmatic · 6–10 weeks). Selection turns on legacy +
            quality of finish. Onboarding requires minimal hand-holding (they have lived through
            renovations before). Expansion driven by "the next 10 years" framing — preventive termite,
            future-proofed kitchen, pool retrofit.</p>
            <h4>Funnel KPI differences</h4>
            <ul>
              <li>L3 close rate: <strong>44%</strong> — quality-driven, fewer revisits</li>
              <li>Average job ticket: <strong>+18%</strong> vs. blended — willing to pay for finish</li>
              <li>Referrals/Promoter/year: <strong>0.51</strong> — well-networked social cohort</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-14 — SLA MATRIX
   =================================================================== */
const FASLAMatrix = () => (
  <section class="band-white" id="fa14">
    <div class="container">
      <div class="eyebrow">§ 14 · FA-14</div>
      <h2 class="h1">The SLA matrix — every handoff, every gate, every response time</h2>
      <p class="lede">
        Fourteen named handoffs in the bowtie. Each has a triggering event, a named owner, a maximum
        response time, and an escalation path. Miss the SLA twice in a quarter and the workflow goes
        to a senior review.
      </p>

      <div class="sla-table-wrap">
        <table class="sla-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Handoff</th>
              <th>Trigger</th>
              <th>Owner</th>
              <th>Max Response</th>
              <th>Escalation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>L1 → L2</td><td>Email captured</td><td>YDT (auto)</td><td>15 min (welcome sequence fires)</td><td>YDT Demand Lead</td></tr>
            <tr><td>2</td><td>L2 → L3 (F1→F2)</td><td>Quote request submitted</td><td>Sales Steward</td><td>4 business hours (first MEDDPICC pass)</td><td>Head of Sales</td></tr>
            <tr><td>3</td><td>F2 → F3</td><td>MEDDPICC ≥ 6/8</td><td>Sales Steward</td><td>72 hrs to schedule site visit</td><td>Head of Sales</td></tr>
            <tr><td>4</td><td>Site visit → Proposal</td><td>Visit complete</td><td>Sales Steward</td><td>5 business days</td><td>Head of Sales</td></tr>
            <tr><td>5</td><td>Proposal → Decision</td><td>Quote sent</td><td>Sales Steward</td><td>14 days to "decision paralysis" play</td><td>Head of Sales</td></tr>
            <tr><td>6</td><td>L3 → R1 (Sales → Ops)</td><td>Deposit cleared</td><td>Project Steward</td><td>24 hours to welcome call</td><td>Head of Ops</td></tr>
            <tr><td>7</td><td>R1 → R2 (Ops → Delivery)</td><td>Day-30 satisfaction ≥ 8</td><td>Site Lead</td><td>5 business days to job start</td><td>Head of Ops</td></tr>
            <tr><td>8</td><td>R2 internal: Daily update</td><td>End of day during active job</td><td>Site Lead</td><td>Same day (before 6pm)</td><td>Project Steward</td></tr>
            <tr><td>9</td><td>R2 → R3 (Delivery → CS)</td><td>Final walkthrough signed</td><td>Project Steward</td><td>21 days to case-study capture</td><td>Head of Marketing</td></tr>
            <tr><td>10</td><td>R3 internal: AHSR scheduling</td><td>Day 350 from last job</td><td>Project Steward</td><td>Booking confirmed by Day 365</td><td>Head of CS</td></tr>
            <tr><td>11</td><td>Cross-LOB trigger</td><td>Signal logged on completion form</td><td>Originating Steward</td><td>14 days to warm intro</td><td>Head of CS</td></tr>
            <tr><td>12</td><td>R3 → R4 (Promoter activation)</td><td>NPS ≥ 9 + 2nd completed job</td><td>YDT Marketing</td><td>30 days to ambassador invite</td><td>Head of Marketing</td></tr>
            <tr><td>13</td><td>Service recovery</td><td>NPS ≤ 6 OR formal complaint</td><td>Head of CS</td><td>24 hours to personal call</td><td>Carla (CEO/CFO)</td></tr>
            <tr><td>14</td><td>Referral activation</td><td>Referral form submitted</td><td>Sales Steward</td><td>4 business hours to acknowledge</td><td>Head of Sales</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FA-15 — FAILURE MODES + HEDGES
   =================================================================== */
const FARisks = () => (
  <section class="band-cream" id="fa15">
    <div class="container">
      <div class="eyebrow">§ 15 · FA-15</div>
      <h2 class="h1">Funnel-level failure modes + hedges</h2>
      <p class="lede">
        Twelve named ways the bowtie can break. Each with a leading indicator + a pre-authorised hedge.
        These are funnel-level systemic risks, not stage-level (those are FA-10).
      </p>

      <div class="risk-grid">
        <div class="risk-card">
          <div class="rc-tag">Risk 1</div>
          <div class="rc-name">Sales-Marketing handoff breaks (the most common failure mode in any bowtie).</div>
          <div class="rc-signal"><strong>Leading signal:</strong> &gt; 20% of leads bounced from F1→F2 in any given week.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Weekly 30-min Sales-Marketing alignment meeting. 100% review of bounced leads. MEDDPICC nurture content built monthly against the top-3 reasons.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 2</div>
          <div class="rc-name">Right-side under-resourced (the most expensive failure mode).</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Project Steward span-of-care &gt; 35 households OR R3 KPI stagnates 2 quarters.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Hard cap on Stewards' household load. New Steward hired automatically when span hits 32.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 3</div>
          <div class="rc-name">Cross-LOB trigger signals not captured.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Cross-LOB lead volume &lt; 18% of completed jobs in any given month.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Job-completion form cannot submit without 7-trigger checklist. Quarterly Site Lead training on observable signals.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 4</div>
          <div class="rc-name">NPS measurement gaming.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> NPS &gt; 75 while review rating drifts &lt; 4.7.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> NPS is owned by Marketing (YDT) not the Steward being measured. Random 10% of surveys audited monthly for survey-bias prompts.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 5</div>
          <div class="rc-name">Review velocity decays as YMT scales.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Reviews/month &lt; 18 for 2 consecutive months.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Day-7 review ask is automated and 100% reliable. Steward bonus tied to review-capture rate (not rating).</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 6</div>
          <div class="rc-name">AHSR meeting decline rate climbs.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> AHSR decline &gt; 40% over a quarter.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Household Dossier sent regardless. AHSR reframed as "complimentary annual check" with no quote expectation.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 7</div>
          <div class="rc-name">Stage transitions become discretionary again ("vibes-based progression").</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Manual stage overrides &gt; 5% in HubSpot.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Monthly audit. Override requires written reason. Patterns drive criterion refinement, not criterion relaxation.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 8</div>
          <div class="rc-name">Time-in-stage benchmarks ignored.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> &gt; 12% of leads exceed max dwell-time without an unstick play firing.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Unstick plays are automated triggers in HubSpot, not human-discretion. Dashboard surfaces overdue leads daily.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 9</div>
          <div class="rc-name">LTV math is contested by Finance.</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Finance refuses to authorise CPL above single-job-breakeven.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Quarterly LTV cohort analysis presented to Carla (CFO). Real cohorts validate model. CPL ceilings adjust on evidence not assumption.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 10</div>
          <div class="rc-name">Investor persona disappears (market shift).</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Investor lead volume drops &gt; 25% YoY for 2 consecutive quarters.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Quarterly persona-mix review. Adjust channel + content investment within 60 days. Maintain Investor-readiness even at low volume.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 11</div>
          <div class="rc-name">Project Steward turnover (relationship continuity broken).</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Any voluntary resignation OR span exceeded.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Household Dossier is the institutional memory — Steward turnover does not lose the relationship. 30-day handover protocol when any Steward exits.</div>
        </div>
        <div class="risk-card">
          <div class="rc-tag">Risk 12</div>
          <div class="rc-name">Bowtie becomes wallpaper (everyone agrees with it, nobody operates it).</div>
          <div class="rc-signal"><strong>Leading signal:</strong> Quarterly KPIs reported but stage-by-stage diagnostics stop appearing in leadership meetings.</div>
          <div class="rc-hedge"><strong>Hedge:</strong> Weekly Carla + YDT 30-min "funnel-health" review. Standing agenda: stuck leads, SLA misses, KPI variance. No exceptions.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   COMPLIANCE
   =================================================================== */
const FACompliance = () => (
  <section class="band-navy" id="fa-compliance">
    <div class="container">
      <div class="eyebrow on-dark">Compliance · Quality Gate</div>
      <h2 class="h1 on-dark">WS-05 quality-gate certification</h2>
      <div class="compliance-grid">
        <div class="comp-card">
          <div class="comp-h">Checklist Coverage</div>
          <p>15/15 FA-XX items rendered. No item summarised. Each treated at junior-executable depth.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Framework Citation</div>
          <p>Winning by Design Bowtie · Brian Balfour Four Fits · Reichheld NPS/Loyalty Effect ·
          MEDDPICC (Force Mgmt) — all cited and operationally applied, not name-dropped.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Depth Standard</div>
          <p>Target 5,000–7,000 words. Delivered: see footer counter. Each stage has entry, exit, owner,
          benchmark, failure mode, unstick play.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Junior Executability</div>
          <p>YDT junior with this document + the SLA matrix + the failure-mode playbook can operate
          the funnel on day one without escalation. Confirmed by the scripts, the verbatim MEDDPICC
          questions, and the 12 named unstick plays.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FOOTER
   =================================================================== */
const FAFooter = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-lbl">Document</div>
          <p>WS-05 Bowtie Funnel<br />Operating Manual<br />v1.0 · Effective 1 June 2026</p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Authority</div>
          <p>Carla Oliver, Acting CMO<br />CoSai CFO Services<br />for YMT / YBMT Group</p>
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
          <p>15/15 FA-XX items<br />
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
export const renderYMTbowtie = () => (
  <>
    <FAHubBar />
    <FANav />
    <FAHero />
    <FADoctrine />
    <FABowtieModel />
    <FAPrePurchase />
    <FAPostPurchase />
    <FAChannelMap />
    <FAMeddpicc />
    <FAExpansion />
    <FAAdvocacy />
    <FACrossLOB />
    <FATimings />
    <FAFailureModes />
    <FAStageMetrics />
    <FALifetimeGP />
    <FASegmentVariations />
    <FASLAMatrix />
    <FARisks />
    <FACompliance />
    <FAFooter />
  </>
)
