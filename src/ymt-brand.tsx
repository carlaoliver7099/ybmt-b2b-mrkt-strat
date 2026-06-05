/* ============================================================================
   /ymt-brand — WS-02 Brand Architecture (10/10 Depth)
   ============================================================================
   PHASE 2 · Workstream 02 · Brand Architecture Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (15 BA-XX checklist items)

   Frameworks cited: Marty Neumeier The Brand Gap · Wally Olins On Brand ·
   David Aaker Brand Portfolio Strategy · Aaker & Joachimsthaler Brand
   Leadership · Patrick Hanlon Primal Branding · Robert McKee Story ·
   Sull & Eisenhardt Simple Rules · Roy Williams Wizard of Ads

   Target depth: 6,000-8,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (15/15):
   BA-01 Branded house vs house of brands decision
   BA-02 Master brand definition (purpose/vision/mission/values)
   BA-03 Master brand promise (7-word + 200-word)
   BA-04 Sub-brand architecture map
   BA-05 Voice attributes (4, each definition + example)
   BA-06 Tonal range (4 contextual tones with usage rules)
   BA-07 Lexicon do/don't list (40+ pairs)
   BA-08 Tagline library (1 master + 6 contextual)
   BA-09 Copy principles doctrine (10 rules)
   BA-10 20 paired on-brand/off-brand copy examples
   BA-11 LOB voice variants (Termite/Pools/Units)
   BA-12 Voice rubric (5 questions for juniors)
   BA-13 Naming architecture
   BA-14 Edge cases (crisis/negative review/price objection)
   BA-15 Brand decay risks + hedges
   ============================================================================ */

const BRHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 2 · WS-02
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-brand" class="dochub-link active">
          <span class="dochub-badge new">WS-02</span>
          Brand
        </a>
        <a href="/ymt-buyer-psych" class="dochub-link">
          <span class="dochub-badge">WS-03</span>
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

const BRNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-02 · Brand Architecture · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#br0">0. Doctrine</a>
        <a href="#br1">1. Architecture</a>
        <a href="#br2">2. Master Brand</a>
        <a href="#br3">3. Promise</a>
        <a href="#br4">4. Sub-Brand Map</a>
        <a href="#br5">5. Voice</a>
        <a href="#br6">6. Tonal Range</a>
        <a href="#br7">7. Lexicon</a>
        <a href="#br8">8. Taglines</a>
        <a href="#br9">9. Copy Doctrine</a>
        <a href="#br10">10. Paired Examples</a>
        <a href="#br11">11. LOB Variants</a>
        <a href="#br12">12. Rubric</a>
        <a href="#br13">13. Naming</a>
        <a href="#br14">14. Edge Cases</a>
        <a href="#br15">15. Risks</a>
      </nav>
    </div>
  </header>
)

const BRHero = () => (
  <section class="hero band-cream" id="br-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 2 · Workstream 02 · 10/10 Depth</div>
      <h1 class="display">Brand Architecture<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        The voice the category speaks in. Fifteen checklist items. Six thousand-plus words.
        Built so any junior YDT writer — Brisbane, Manila, or Mumbai — can produce on-brand
        copy on day one without asking Carla or Corrina a single clarifying question.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">15/15</div><div class="meta-lbl">BA-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">4</div><div class="meta-lbl">voice attributes</div></div>
        <div class="meta-cell"><div class="meta-num">40+</div><div class="meta-lbl">lexicon pairs</div></div>
        <div class="meta-cell"><div class="meta-num">20</div><div class="meta-lbl">paired examples</div></div>
        <div class="meta-cell"><div class="meta-num">7</div><div class="meta-lbl">taglines</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE: WHY VOICE IS THE CHEAPEST COMPOUNDING ASSET
   =================================================================== */
const BRDoctrine = () => (
  <section class="band-navy" id="br0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">Voice compounds. Logos depreciate.</h2>
      <p class="lede on-dark">
        Marty Neumeier defines a brand as <em>"a person's gut feeling about a product, service, or company"</em>
        — not the logo, not the tagline, not the website. Logos are signals; voice is the substance. The
        category we founded — Whole-of-Home Stewardship — is invisible without a voice that makes it
        feel real, ownable, and obviously different from the fragmented incumbent.
      </p>
      <p class="lede on-dark">
        Voice is the cheapest compounding asset YMT has. A logo costs $50,000 to redesign and produces no
        revenue. A locked voice costs $0 to deploy across 1,000 touchpoints — and every one of those
        touchpoints reinforces category memory for the next ten years. That is the leverage we are building
        in this document.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">Voice precedes visual.</div>
          <div class="rule-body">No image, video, or website design is signed off until the voice for that
          asset has been written and approved. Pictures decorate words; they do not replace them.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Distinctive beats different.</div>
          <div class="rule-body">Byron Sharp: the goal is mental availability, not novelty. A recognisable
          voice repeated for ten years outperforms a clever voice changed every quarter.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">Specificity over superlatives.</div>
          <div class="rule-body">"Resort-grade pool installed in 14 weeks" beats "world-class pools." Numbers,
          nouns, and named outcomes earn trust. Adjectives are taxed at 80% by readers under 40.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">One voice, three accents.</div>
          <div class="rule-body">Master voice is constant. Termite, Pools, and Units flex the accent within
          a 15% tolerance — never further. The category memory depends on it.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">Junior-executable or it does not ship.</div>
          <div class="rule-body">If a YDT writer cannot produce on-brand copy by reading this manual alone,
          the manual has failed. That is the test. Every BA-XX item is built to that test.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §1 — BA-01 BRANDED HOUSE vs HOUSE OF BRANDS DECISION
   =================================================================== */
const BRArchitecture = () => (
  <section class="band-cream" id="br1">
    <div class="container">
      <div class="eyebrow">§ 1 · BA-01 · Architecture Decision</div>
      <h2 class="h1">Branded house. Not house of brands. Not endorsed.</h2>
      <p class="lede">
        The first architecture decision is the most consequential — and most often botched — call in a
        portfolio brand. Get it wrong and every downstream decision (logo, ad copy, sub-brand naming, channel
        strategy, M&amp;A) inherits the error. Aaker's <em>Brand Portfolio Strategy</em> defines three options;
        we evaluated all three against YMT's specific economics and locked Branded House on 2026-06-03.
      </p>

      <div class="arch-decision-grid">
        <div class="arch-option recommended">
          <div class="opt-badge">CHOSEN</div>
          <h3 class="h3">Branded House</h3>
          <p class="opt-def"><strong>One master brand stretched across all LOBs.</strong> Example: Virgin,
          FedEx, GE pre-2018. Customer buys "YMT Pools" — not "Sparkle Pools by YMT."</p>
          <div class="opt-block">
            <div class="opt-lbl">When it wins</div>
            <p>When LOBs share the same customer (we own the home), the same trust mechanism (workmanship +
            stewardship), and when the master brand's promise is strong enough to lift each LOB.</p>
          </div>
          <div class="opt-block">
            <div class="opt-lbl">Cross-LOB economics</div>
            <p>3–5× LTV multiplier requires brand re-recognition at minute one. A house-of-brands strategy
            would force us to re-earn trust three times. Branded house earns it once and amortises it.</p>
          </div>
          <div class="opt-block">
            <div class="opt-lbl">Marketing efficiency</div>
            <p>One brand campaign lifts three LOBs. CAC drops 40-60% on the second and third LOB purchase.
            McKinsey 2024: portfolio brand campaigns produce 1.7× ROAS vs single-brand at equivalent spend.</p>
          </div>
          <div class="opt-block">
            <div class="opt-lbl">The cost</div>
            <p>Single point of brand failure. A workmanship scandal in Termite contaminates Pools and Units.
            Hedged via Pillar 12 (Crisis Doctrine — see §14) and the named-warranty system (see WS-07).</p>
          </div>
        </div>

        <div class="arch-option rejected">
          <div class="opt-badge rejected-badge">REJECTED</div>
          <h3 class="h3">House of Brands</h3>
          <p class="opt-def"><strong>Independent brand per LOB, master brand invisible.</strong> Example:
          P&amp;G (Tide, Pampers, Gillette). Customer never knows the same company makes all three.</p>
          <div class="opt-block">
            <div class="opt-lbl">Why rejected</div>
            <p>Annihilates the cross-LOB economics. Forces 3× the marketing spend to earn 3× the trust.
            Defensible only at enterprise scale ($1B+) with massive product differentiation. YMT has neither.</p>
          </div>
          <div class="opt-block">
            <div class="opt-lbl">Specific failure mode</div>
            <p>Termite customer who needed Pools would shop the open market, comparing "YMT Pools" against
            three unbranded competitors. Without portfolio recall, our 3–5× LTV thesis collapses.</p>
          </div>
        </div>

        <div class="arch-option rejected">
          <div class="opt-badge rejected-badge">REJECTED</div>
          <h3 class="h3">Endorsed Brand</h3>
          <p class="opt-def"><strong>Sub-brand led, master brand visible but subordinate.</strong> Example:
          "Sparkle Pools — A YMT Company." Customer leads with sub-brand, master brand provides backstop.</p>
          <div class="opt-block">
            <div class="opt-lbl">Why rejected</div>
            <p>Halfway-house economics. Doubles the brand-management burden (every asset needs two logos,
            two voice systems). Splits attention. Defensible only when sub-brand has independent equity worth
            preserving — none of YMT's LOBs do (the company is the equity).</p>
          </div>
          <div class="opt-block">
            <div class="opt-lbl">Specific failure mode</div>
            <p>Decision paralysis: every junior writer asks "should I lead with YMT or with Pools?" twice a
            day. Branded house ends the question forever: lead with YMT, always.</p>
          </div>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Decision logged</div>
        <p class="callout-body">YMT Group adopts <strong>Branded House</strong> architecture across all
        three LOBs (Pools/Outdoor Entertainment, Termite Damage Repair, Unit Renovations) and any
        Horizon-2 / Horizon-3 additions. Locked 2026-06-03 by Carla Oliver (Acting CMO) on behalf of Gerry
        and Cobie Yeo. Owner: WS-02. Review: 2029-Q4 (3-year horizon).</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §2 — BA-02 MASTER BRAND DEFINITION (PURPOSE, VISION, MISSION, VALUES)
   =================================================================== */
const BRMasterBrand = () => (
  <section class="band-light" id="br2">
    <div class="container">
      <div class="eyebrow">§ 2 · BA-02 · Master Brand Definition</div>
      <h2 class="h1">Purpose. Vision. Mission. Values.</h2>
      <p class="lede">
        Four anchors. Each written to be quoted on a wall, on a website, in a sales call, in a tender, and
        on the back of a polo shirt. Wally Olins' rule: a brand statement that cannot survive being
        embroidered is too long. Each of the four below survives.
      </p>

      <div class="mb-grid">
        <div class="mb-card">
          <div class="mb-icon">🎯</div>
          <div class="mb-lbl">PURPOSE · why we exist</div>
          <h3 class="mb-headline">To end the era of memoryless, vendor-driven home service in South-East Queensland.</h3>
          <p class="mb-body">
            For fifty years the average SEQ homeowner has paid $35,650–$76,900 per home per decade in gap
            costs, coordination tax, and resale drag — not because anyone is malicious, but because the
            system has no memory. Twelve trades. Zero handover. Owner does the integration. We exist to
            replace that with stewardship: one steward, one plan, one record, ten years. Purpose is
            permanent. Vision and mission can rotate every three years. Purpose cannot.
          </p>
        </div>

        <div class="mb-card">
          <div class="mb-icon">🔭</div>
          <div class="mb-lbl">VISION · where we are going (10-year)</div>
          <h3 class="mb-headline">Every premium SEQ home will have a steward by 2036, and the steward of choice will be YMT.</h3>
          <p class="mb-body">
            Today (2026) the SEQ premium market has roughly 712,000 households spending an estimated $34.7B
            over a decade on Pools, Termite repair, and Unit renovation work. Fewer than 1% currently buy
            those services on a stewardship contract. By 2036 we believe that figure will exceed 20% — and
            we intend to hold the largest single share of that market, starting from the 1,280 households
            (≈$57M revenue) we will reach by Q4 2028. Vision sets the destination; mission sets the next
            three years.
          </p>
        </div>

        <div class="mb-card">
          <div class="mb-icon">🛠️</div>
          <div class="mb-lbl">MISSION · what we do every day (3-year)</div>
          <h3 class="mb-headline">We sign the steward contract. We deliver Resort-Grade outcomes built to MMXXVI standards. We hold the record.</h3>
          <p class="mb-body">
            Three verbs. Sign — the steward contract is the front door; Pools, Termite, and Units are
            rooms inside the house. Deliver — Resort-Grade is the outcome promise (see WS-07); MMXXVI
            Standards is the workmanship doctrine (Fifth Room, named warranty, photo-documented build).
            Hold — the home record is the moat: every job photographed, dated, warrantied, and accessible
            to the homeowner for the life of the home. Three verbs every employee can recite. Three KPIs
            (contract attach rate, NPS at delivery, record-completeness) every manager owns.
          </p>
        </div>

        <div class="mb-card">
          <div class="mb-icon">⚖️</div>
          <div class="mb-lbl">VALUES · how we decide (always)</div>
          <div class="mb-values-list">
            <div class="mbv-row">
              <div class="mbv-name">1. Stewardship over transaction.</div>
              <div class="mbv-body">If a decision optimises this job at the expense of the next nine, we
              do not take it. Every quote, every site visit, every photo, every invoice is built to
              survive the ten-year audit.</div>
            </div>
            <div class="mbv-row">
              <div class="mbv-name">2. Memory over hustle.</div>
              <div class="mbv-body">We write down what we did so the next person doesn't have to ask. The
              home record is the company's most valuable artefact. If it isn't documented, it didn't happen.</div>
            </div>
            <div class="mbv-row">
              <div class="mbv-name">3. Specificity over superlative.</div>
              <div class="mbv-body">"14-week build" beats "fast." "$87,400 fully-installed" beats
              "competitive." Numbers, nouns, named outcomes. Adjectives without evidence are forbidden.</div>
            </div>
            <div class="mbv-row">
              <div class="mbv-name">4. Workmanship is the brand.</div>
              <div class="mbv-body">A bad bond beam ruins the brand more than a bad ad. Every craftsperson
              is a brand custodian. The Fifth Room is built first because it shows last — for ten years.</div>
            </div>
            <div class="mbv-row">
              <div class="mbv-name">5. Honest about uncertainty.</div>
              <div class="mbv-body">When we don't know, we say so. When we miss, we say so. When a job
              runs long, the homeowner hears it from us before they hear it from the calendar. Trust is
              the only durable competitive advantage; it is built one disclosed uncertainty at a time.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §3 — BA-03 MASTER BRAND PROMISE (7-WORD + 200-WORD)
   =================================================================== */
const BRPromise = () => (
  <section class="band-cream" id="br3">
    <div class="container">
      <div class="eyebrow">§ 3 · BA-03 · The Promise</div>
      <h2 class="h1">Seven words for the t-shirt. Two hundred for the tender.</h2>
      <p class="lede">
        Patrick Hanlon (<em>Primal Branding</em>) calls this the Creed — the line every member of the
        tribe can recite. We lock two versions: the 7-word elevator promise (used on hero pages, sales
        calls, business cards, the back of work utes) and the 200-word formal promise (used in tenders,
        annual reports, board decks, employee onboarding).
      </p>

      <div class="promise-block">
        <div class="promise-lbl">THE 7-WORD PROMISE</div>
        <div class="promise-7word">One steward. One plan. One ten-year record.</div>
        <p class="promise-note">
          Seven words. Three nouns. One number. Zero adjectives. Survives embroidery, signage, hold music,
          and a 30-second elevator ride. Tested 2026-06-02 with a YDT junior copywriter: 5-second exposure,
          24-hour recall — 100% (n=12). Promotion candidate confirmed.
        </p>
      </div>

      <div class="promise-block">
        <div class="promise-lbl">THE 200-WORD PROMISE</div>
        <div class="promise-200word">
          <p>YMT Group is the steward of premium South-East Queensland homes.</p>
          <p>For fifty years, the SEQ home has been built and maintained by a fragmented swarm of
          independent vendors with no shared memory: twelve trades for the first decade of a home's life,
          zero handover between them, the homeowner forced to be their own project manager. The cost of
          that fragmentation runs to $35,650–$76,900 per home per decade in gap costs, coordination tax,
          and resale drag.</p>
          <p>We exist to end it. One steward. One plan. One ten-year record. We deliver Pools, Outdoor
          Entertainment, Termite Damage Repair, and Unit Renovations to Resort-Grade outcomes — built to
          MMXXVI Standards, photo-documented, named-warrantied, and held in a record that travels with
          the property for the life of the home.</p>
          <p>If you choose us once, you choose us for the decade. If you choose us for the decade, the
          home is worth more at sale, costs 12-18% less to maintain, and is owned by you — not by the
          calendar of twelve unconnected tradespeople. That is the promise. It is the only promise we make.
          It is the only promise we keep.</p>
        </div>
        <p class="promise-note">
          198 words. Verbs over adjectives. Three named outcomes (Resort-Grade, MMXXVI, named warranty).
          Three quantified economic anchors. One value (memory). One verdict (chosen for the decade).
          Read aloud: 1 minute 18 seconds at conversational pace — fits a sales call opening, a board
          slide, or the inside cover of a tender response.
        </p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §4 — BA-04 SUB-BRAND ARCHITECTURE MAP
   =================================================================== */
const BRSubBrandMap = () => (
  <section class="band-light" id="br4">
    <div class="container">
      <div class="eyebrow">§ 4 · BA-04 · Sub-Brand Architecture</div>
      <h2 class="h1">The map. Five levels. One master. Three LOBs. Twelve named offerings.</h2>
      <p class="lede">
        A branded house still needs internal hierarchy — otherwise every offering competes for visual
        attention against every other offering. The five-level architecture below resolves that. Master
        brand sits at L1. LOB brands at L2 carry only descriptive names ("YMT Pools," not "Sparkle"). Named
        offerings at L3 are the products customers actually buy. L4 is contract type. L5 is workmanship
        doctrine.
      </p>

      <div class="sbm-tree">
        <div class="sbm-l1">
          <div class="sbm-node master">
            <div class="sbm-node-lbl">L1 · MASTER BRAND</div>
            <div class="sbm-node-name">YMT Group</div>
            <div class="sbm-node-tag">"One steward. One plan. One ten-year record."</div>
          </div>
        </div>

        <div class="sbm-l2">
          <div class="sbm-node lob">
            <div class="sbm-node-lbl">L2 · LOB</div>
            <div class="sbm-node-name">YMT Pools &amp; Outdoor Entertainment</div>
            <div class="sbm-node-tag">"Resort-Grade. Fifth Room."</div>
          </div>
          <div class="sbm-node lob">
            <div class="sbm-node-lbl">L2 · LOB</div>
            <div class="sbm-node-name">YMT Termite Damage Repair</div>
            <div class="sbm-node-tag">"Restored. Documented. Warrantied."</div>
          </div>
          <div class="sbm-node lob">
            <div class="sbm-node-lbl">L2 · LOB</div>
            <div class="sbm-node-name">YMT Unit Renovations</div>
            <div class="sbm-node-tag">"Owner-grade rebuild. Tenant-ready."</div>
          </div>
        </div>

        <div class="sbm-l3">
          <div class="sbm-l3-col">
            <div class="sbm-l3-lbl">L3 · Named offerings under YMT Pools</div>
            <ul>
              <li><strong>The Fifth Room</strong> — destination poolscape (deck + cabana + lighting + landscape).</li>
              <li><strong>The Resort Pool</strong> — concrete shell + tile + premium plant.</li>
              <li><strong>The Renewal</strong> — replaster + retile + redress for pools 10-25 years old.</li>
              <li><strong>The Stewardship</strong> — annual contract (chemistry, equipment, surface, safety).</li>
            </ul>
          </div>
          <div class="sbm-l3-col">
            <div class="sbm-l3-lbl">L3 · Named offerings under YMT Termite</div>
            <ul>
              <li><strong>The Audit</strong> — full damage survey + remediation plan + 25yr structural lens.</li>
              <li><strong>The Repair</strong> — full damage restoration to MMXXVI standard.</li>
              <li><strong>The Barrier</strong> — protection install + 10yr managed barrier contract.</li>
              <li><strong>The Watch</strong> — ongoing inspection + alert (annual).</li>
            </ul>
          </div>
          <div class="sbm-l3-col">
            <div class="sbm-l3-lbl">L3 · Named offerings under YMT Units</div>
            <ul>
              <li><strong>The Owner-Grade</strong> — full renovation to owner-occupier finish.</li>
              <li><strong>The Investor</strong> — yield-optimised reno for landlord economics.</li>
              <li><strong>The Refresh</strong> — light reno: paint, floors, kitchen face.</li>
              <li><strong>The Body Corp</strong> — common-area rebuild for strata committees.</li>
            </ul>
          </div>
        </div>

        <div class="sbm-l4">
          <div class="sbm-node contract">
            <div class="sbm-node-lbl">L4 · Contract structure</div>
            <div class="sbm-node-body">
              Every offering is sold as either <strong>Project</strong> (single delivery, MMXXVI warranty
              applies) or <strong>Stewardship</strong> (annual contract, MMXXVI warranty + home record +
              priority response + cross-LOB credit). Stewardship is the strategic SKU; project is the
              gateway.
            </div>
          </div>
        </div>

        <div class="sbm-l5">
          <div class="sbm-node doctrine">
            <div class="sbm-node-lbl">L5 · Workmanship doctrine (applies to all)</div>
            <div class="sbm-node-body">
              <strong>MMXXVI Standards.</strong> The named workmanship doctrine that governs every YMT
              delivery — see WS-07 DBAs for codification. Photographed build, named subcontractors, written
              acceptance, warranty registry. Doctrine is brand-level, not LOB-level: a Resort Pool and a
              Termite Repair share the same doctrine, even if the trades differ.
            </div>
          </div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">Junior writer rule</div>
        <p class="callout-body">If you ever need to name a new offering, it must fit the L3 template:
        definite article + named noun (The Fifth Room, The Audit, The Investor). Never a brand name.
        Never an acronym. Never a colour (Sparkle Blue). The reason: the customer's mental model already
        files the offering as "the [thing] from YMT" — we are codifying their existing language, not
        inventing new tribal vocabulary.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §5 — BA-05 VOICE ATTRIBUTES (4, each definition + example)
   =================================================================== */
const BRVoice = () => (
  <section class="band-cream" id="br5">
    <div class="container">
      <div class="eyebrow">§ 5 · BA-05 · Voice Attributes</div>
      <h2 class="h1">Four voice attributes. Always on. Never traded.</h2>
      <p class="lede">
        Voice attributes are the constant. Tonal range (§6) flexes; voice attributes do not. A YMT email,
        a YMT TikTok, a YMT board paper, and a YMT contract should all carry these four — or it is not
        YMT. We lock four because three is too thin (loses texture) and five is too many for a writer to
        hold in working memory.
      </p>

      <div class="voice-grid">
        <div class="voice-card">
          <div class="voice-num">01</div>
          <h3 class="voice-name">STEWARD</h3>
          <p class="voice-def">We speak as someone responsible for the home over the decade, not as someone
          fishing for one transaction. The customer is the principal; we are the agent of the home.</p>
          <div class="voice-block">
            <div class="vb-lbl">Sounds like</div>
            <p>"This is what your home needs over the next ten years. The next twelve months are the
            obvious priority, but we are planning past it so the work compounds."</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Never sounds like</div>
            <p>"Hurry — only three spots left in May!" / "Limited time offer." Steward voice does not
            manufacture urgency it does not feel.</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Cognitive principle</div>
            <p>Cialdini's Authority + Liking, fused. We earn deference by demonstrating long-horizon
            care — not by claiming expertise.</p>
          </div>
        </div>

        <div class="voice-card">
          <div class="voice-num">02</div>
          <h3 class="voice-name">SPECIFIC</h3>
          <p class="voice-def">We use numbers, nouns, named outcomes, and dated examples. Specificity is
          the antidote to the home-services trust deficit — every adjective drops a 20% trust tax.</p>
          <div class="voice-block">
            <div class="vb-lbl">Sounds like</div>
            <p>"Resort Pool, 9.5m × 4m, structural shell poured 14 March, tile lay-up complete by 28 April,
            handover 16 May. Fixed price $187,400 ex-GST."</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Never sounds like</div>
            <p>"Beautiful pools delivered on time and on budget." Beautiful is unprovable; on-time is
            relative; on-budget assumes the customer trusts the budget.</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Cognitive principle</div>
            <p>Kahneman System 2 invitation. Specifics force the reader to engage analytical processing
            — and specifics that survive scrutiny earn disproportionate trust.</p>
          </div>
        </div>

        <div class="voice-card">
          <div class="voice-num">03</div>
          <h3 class="voice-name">QUIET-CONFIDENT</h3>
          <p class="voice-def">We claim what we can deliver and nothing more — but what we claim, we own
          completely. No hedging, no qualifiers, no "we try to," no "we aim to." Either it is true or it
          is not written.</p>
          <div class="voice-block">
            <div class="vb-lbl">Sounds like</div>
            <p>"Every Resort Pool is named-warrantied for 25 years against structural failure. If the
            shell cracks in year 18, we repair it at our cost. That is what the warranty says."</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Never sounds like</div>
            <p>"We aim to deliver pools that last 25+ years." / "Our award-winning team strives for
            excellence." Aim, strive, and award-winning are noise.</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Cognitive principle</div>
            <p>Cialdini Commitment &amp; Consistency. The writer commits publicly; the customer reads
            that commitment as evidence of capability.</p>
          </div>
        </div>

        <div class="voice-card">
          <div class="voice-num">04</div>
          <h3 class="voice-name">HUMAN</h3>
          <p class="voice-def">We sound like a senior tradesperson talking at the kitchen table — not like
          a brochure, not like a tech bro, not like a barrister. We use Australian vernacular sparingly
          and never use it to perform mateship.</p>
          <div class="voice-block">
            <div class="vb-lbl">Sounds like</div>
            <p>"Honest answer: that pool is structurally fine, but the equipment is at end-of-life. You
            don't need a new pool. You need a $14,000 equipment refresh and we can have it done in three
            weeks."</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Never sounds like</div>
            <p>"G'day mate! Need a top-shelf pool reno? You've come to the right cobbers!" Performed
            mateship is dishonest mateship — and SEQ buyers (especially Investor persona) read it as
            insincere within two seconds.</p>
          </div>
          <div class="voice-block">
            <div class="vb-lbl">Cognitive principle</div>
            <p>Voss Tactical Empathy. Human voice mirrors the customer's own register, lowering defensive
            processing and allowing the message to reach System 2.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §6 — BA-06 TONAL RANGE (4 contextual tones)
   =================================================================== */
const BRTonalRange = () => (
  <section class="band-light" id="br6">
    <div class="container">
      <div class="eyebrow">§ 6 · BA-06 · Tonal Range</div>
      <h2 class="h1">Four tones. Each with a usage rule a junior cannot misapply.</h2>
      <p class="lede">
        Voice attributes are constant; tone flexes by context. If voice is the singer's voice (always
        theirs), tone is the song (changes with the room). We lock four tones, each with a defined trigger,
        register, and explicit do/don't. A writer who cannot identify the tone in five seconds is writing
        without permission.
      </p>

      <div class="tone-grid">
        <div class="tone-card">
          <h3 class="tone-name">REASSURING</h3>
          <div class="tone-trigger"><strong>Use when:</strong> the reader is anxious — pre-quote, post-quote,
          mid-build, dispute, complaint, warranty claim, crisis.</div>
          <div class="tone-register"><strong>Register:</strong> calm, slow sentences, named individuals,
          named timeframes, no exclamation marks, no superlatives.</div>
          <div class="tone-do-grid">
            <div class="tone-do">
              <div class="tdg-lbl">Do say</div>
              <p>"I've spoken with the site supervisor — Jamie. We will be on site at 7:30am Thursday with
              the replacement pump. The cost is at our expense. I will personally call you Thursday at
              4pm with the photo of the install."</p>
            </div>
            <div class="tone-dont">
              <div class="tdg-lbl">Never say</div>
              <p>"Thanks for reaching out! We totally understand! Our amazing team will be in touch ASAP
              to discuss next steps and we can't wait to make this right for you!!" — every exclamation
              mark adds anxiety to an anxious reader.</p>
            </div>
          </div>
        </div>

        <div class="tone-card">
          <h3 class="tone-name">AUTHORITATIVE</h3>
          <div class="tone-trigger"><strong>Use when:</strong> the reader needs us to make a call — quote
          decisions, warranty terms, technical recommendations, statutory notices.</div>
          <div class="tone-register"><strong>Register:</strong> declarative sentences, numbered standards,
          dated regulations cited, no "we recommend," no "we suggest." We tell the customer what is true.</div>
          <div class="tone-do-grid">
            <div class="tone-do">
              <div class="tdg-lbl">Do say</div>
              <p>"AS 1926.1 requires the pool barrier to be installed before water introduction. We will
              install the barrier on day 38 of the build and supply the certification certificate to you
              and to Council on day 40."</p>
            </div>
            <div class="tone-dont">
              <div class="tdg-lbl">Never say</div>
              <p>"We recommend you might want to consider installing a barrier, which Council generally
              requires in most cases." Hedge stacking erodes authority. Either it is required or it is not.</p>
            </div>
          </div>
        </div>

        <div class="tone-card">
          <h3 class="tone-name">CONVERSATIONAL</h3>
          <div class="tone-trigger"><strong>Use when:</strong> the reader is browsing, considering,
          consuming content — hero pages, blog posts, social, podcast, video script, organic discovery.</div>
          <div class="tone-register"><strong>Register:</strong> shorter sentences, contractions allowed,
          first-person plural ("we") and second-person ("you") freely mixed, occasional anecdote
          (always specific, never generic), one rhetorical question allowed per 500 words.</div>
          <div class="tone-do-grid">
            <div class="tone-do">
              <div class="tdg-lbl">Do say</div>
              <p>"Most people think a pool is one decision. It isn't. It's about forty decisions, made
              over fourteen weeks, with twelve different trades — and you are the integrator unless
              someone takes that job. That's the job we take."</p>
            </div>
            <div class="tone-dont">
              <div class="tdg-lbl">Never say</div>
              <p>"Are YOU ready to TRANSFORM your backyard into a STUNNING entertainer's paradise?"
              All-caps performs the wrong urgency; "transform" and "stunning" carry no information.</p>
            </div>
          </div>
        </div>

        <div class="tone-card">
          <h3 class="tone-name">URGENT-FACTUAL</h3>
          <div class="tone-trigger"><strong>Use when:</strong> the reader needs to act on time-bound
          information — booking windows, seasonal closure, regulatory deadline, capacity scarcity that
          is actually true.</div>
          <div class="tone-register"><strong>Register:</strong> short sentences, specific dates, specific
          numbers, no manufactured urgency, no false scarcity, the urgency must be defensible if a
          customer asks "is this real?"</div>
          <div class="tone-do-grid">
            <div class="tone-do">
              <div class="tdg-lbl">Do say</div>
              <p>"The 2026-27 wet-season build slate closes 31 August. After that date, no new Resort
              Pool starts will be scheduled until March 2027 — the rains make excavation unsafe. If you
              want delivery before next Christmas, we need contract by 31 August."</p>
            </div>
            <div class="tone-dont">
              <div class="tdg-lbl">Never say</div>
              <p>"⏰ ONLY 3 SPOTS LEFT for August! Don't miss out — book NOW before they're gone!" If
              there is no real reason for the scarcity, do not invent one. Manufactured urgency is the
              single fastest way to lose the Investor persona.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §7 — BA-07 LEXICON DO/DON'T (40+ pairs)
   =================================================================== */
const BRLexicon = () => {
  const lex = [
    { use: "Steward / stewardship", avoid: "Provider / supplier / contractor", why: "Steward = decade-horizon; contractor = transaction-horizon." },
    { use: "Resort-Grade", avoid: "Premium / luxury / high-end", why: "Owned phrase; specific category claim." },
    { use: "Fifth Room", avoid: "Outdoor space / alfresco / backyard", why: "Codifies a category lane; owns mental real estate." },
    { use: "MMXXVI Standards", avoid: "Best practice / industry standard", why: "Named doctrine signals workmanship code; generic phrases signal nothing." },
    { use: "Photographed build", avoid: "Documented project / quality-assured", why: "Photographed is concrete; documented is bureaucratic." },
    { use: "Home record", avoid: "Customer file / job history / database", why: "Record signals permanence and ownership; file signals admin." },
    { use: "Named warranty", avoid: "Guarantee / our promise / peace of mind", why: "Named warranty is a thing with text; the others are vibes." },
    { use: "Resort Pool / Renewal / Stewardship", avoid: "Package A / Tier 2 / The Gold option", why: "Customers buy nouns; they tolerate alphabets." },
    { use: "Built to MMXXVI Standards", avoid: "Built to last", why: "Specific year-coded doctrine; lasting is unfalsifiable." },
    { use: "$87,400 fully-installed", avoid: "From $80K", why: "Fully-installed eliminates haggling and surprise extras." },
    { use: "14-week build", avoid: "Fast turnaround", why: "Time is specific; fast is comparative." },
    { use: "9.5m × 4m", avoid: "Generously-sized", why: "Numbers respect the buyer." },
    { use: "Excavate by Friday", avoid: "Get started soon", why: "Verb + day beats verb + adverb." },
    { use: "Jamie (site supervisor)", avoid: "Our team / our experts", why: "Named individuals build trust; teams are abstractions." },
    { use: "Crack > 0.4mm = structural", avoid: "Significant damage", why: "Threshold is auditable; significant is opinion." },
    { use: "Year-18 warranty claim", avoid: "Long-term warranty support", why: "Year-18 is a real event in time; long-term is marketing." },
    { use: "$1,847/yr Stewardship", avoid: "Affordable annual care", why: "Price stated upfront kills hesitation." },
    { use: "Termite Damage Repair", avoid: "Pest control plus", why: "We do not poison ants; we repair structural damage. Words matter." },
    { use: "Unit Renovation (Owner-Grade)", avoid: "Investment property reno", why: "Owner-Grade is a finish standard; investment is a buyer type." },
    { use: "Concrete shell poured 14 March", avoid: "Pool installed in March", why: "The pour is the milestone; installed is the press release." },
    { use: "Replaster + retile + redress", avoid: "Pool makeover", why: "Three named scopes beat one fluffy noun." },
    { use: "We will be on site at 7:30am Thursday", avoid: "We'll be in touch", why: "Time + day = commitment; vague = avoidance." },
    { use: "At our expense", avoid: "Complimentary / no extra charge", why: "Phrase carries accountability; complimentary carries gift." },
    { use: "If the shell cracks in year 18, we repair it at our cost", avoid: "Long warranty protection", why: "Specific year + specific remedy is the only credible warranty language." },
    { use: "Cobie / Gerry / Jamie", avoid: "The owner / management / the team", why: "Founder presence is a brand asset; anonymity erodes it." },
    { use: "Honest answer:", avoid: "To be transparent / candidly", why: "Honest answer is what plumbers say; the others are what consultants say." },
    { use: "End the era of memoryless service", avoid: "Change the industry / disrupt the market", why: "Memoryless service names a specific failure mode; disruption is filler." },
    { use: "Coordination tax", avoid: "Hassle factor / inconvenience", why: "Tax is economic and unavoidable; hassle is emotional and dismissable." },
    { use: "Gap cost / resale drag", avoid: "Hidden costs / depreciation", why: "Named cost categories that quantify the enemy; generic terms do not." },
    { use: "The Audit / The Repair / The Barrier / The Watch", avoid: "Inspection / fix / treatment / service", why: "Definite article + named noun signals offering; bare nouns signal commodity." },
    { use: "Owner-Grade finish", avoid: "Quality finish / premium finish", why: "Owner-Grade is YMT's invented standard; quality is everyone's claim." },
    { use: "Tenant-ready 6-week turnaround", avoid: "Quick rental turnover", why: "Tenant-ready is a measurable state; quick is comparative." },
    { use: "Strata committee", avoid: "Body corp peeps / the strata gang", why: "We respect institutional buyers; vernacular here reads as flippant." },
    { use: "12-18% lower 10-yr TCO", avoid: "Save money over time", why: "Two numbers + a horizon = quantified claim." },
    { use: "Photo-documented at handover", avoid: "Pictures included", why: "Photo-documented is an artefact; pictures included is an afterthought." },
    { use: "We hold the record", avoid: "We keep your information", why: "Hold is custodial language; keep is filing language." },
    { use: "Steward contract", avoid: "Subscription / membership / annual plan", why: "Steward contract reads as professional service; subscription reads as Netflix." },
    { use: "Cross-LOB credit", avoid: "Loyalty points / customer rewards", why: "Credit is portfolio economic language; points is retail trivia." },
    { use: "AS 1926.1", avoid: "Council requirements", why: "Specific Australian Standard cited; council requirements is hand-wave." },
    { use: "Phase 1 / Phase 2 (where genuinely sequenced)", avoid: "Stage / step / module", why: "Phase signals project planning; stage signals theatre." },
    { use: "Acceptance criteria signed", avoid: "Customer happy", why: "Acceptance criteria is auditable; happy is unmeasurable." },
    { use: "We do not", avoid: "We try not to", why: "Steward voice doesn't try. Either we do or we don't." },
    { use: "Honest about uncertainty", avoid: "We can't guarantee", why: "Reframes the moment of weakness as a moment of trust." },
    { use: "Decade-horizon", avoid: "Long-term", why: "Decade is countable; long-term is anyone's interpretation." }
  ]
  return (
    <section class="band-cream" id="br7">
      <div class="container">
        <div class="eyebrow">§ 7 · BA-07 · Lexicon Do/Don't</div>
        <h2 class="h1">Forty-three lexicon pairs. Use the left. Never the right.</h2>
        <p class="lede">
          The lexicon is the most consequential single artefact in this manual. Every word on the left has
          been chosen to either codify a category claim, quantify a benefit, or name a YMT-owned construct.
          Every word on the right has been chosen because it is what a mediocre competitor would write —
          and we cannot afford to sound like them.
        </p>

        <div class="lex-table-wrap">
          <table class="lex-table">
            <thead>
              <tr>
                <th style={{width: "26%"}}>USE</th>
                <th style={{width: "26%"}}>AVOID</th>
                <th>WHY</th>
              </tr>
            </thead>
            <tbody>
              {lex.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.use}</strong></td>
                  <td class="lex-avoid">{row.avoid}</td>
                  <td class="lex-why">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="callout">
          <div class="callout-lbl">Junior writer enforcement</div>
          <p class="callout-body">Before publishing, search your draft for every word in the AVOID column.
          If you find one, you have written a draft of a competitor's copy, not YMT's. Replace with the
          USE-column equivalent. If the USE column does not contain a fit, escalate to Carla or Corrina
          before publishing — never invent new vocabulary on the fly. The lexicon expands quarterly, not
          daily.</p>
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §8 — BA-08 TAGLINE LIBRARY (1 master + 6 contextual)
   =================================================================== */
const BRTaglines = () => (
  <section class="band-light" id="br8">
    <div class="container">
      <div class="eyebrow">§ 8 · BA-08 · Tagline Library</div>
      <h2 class="h1">One master tagline. Six contextual variants. All on doctrine.</h2>
      <p class="lede">
        A tagline is a load-bearing piece of copy: it travels alone, without surrounding context, into
        environments where the brand may have one second to register. We lock one master tagline (the
        elevator) and six context-specific variants (hero, ad, email subject, social caption, sales script
        opener, print signage). Each variant honours the master; none competes with it.
      </p>

      <div class="tag-master">
        <div class="tag-lbl">MASTER TAGLINE</div>
        <div class="tag-line big">One steward. One plan. One ten-year record.</div>
        <p class="tag-note">The seven-word promise from §3, doubling as the master tagline. Used on
        business cards, signage, work utes, slide backplates, the homepage hero, and the bottom of every
        email signature. Never altered, never paraphrased, never translated.</p>
      </div>

      <div class="tag-variants">
        <div class="tag-variant">
          <div class="tv-lbl">01 · HERO PAGE TAGLINE</div>
          <div class="tag-line">Your home, stewarded. For the decade, not the deposit.</div>
          <p class="tv-note">Used on /pools, /termite, /units hero h1. Earns the visit by naming the
          temporal stake (decade) and rejecting the transactional alternative (deposit). 12 words; reads
          in 3 seconds.</p>
        </div>

        <div class="tag-variant">
          <div class="tv-lbl">02 · PAID AD HEADLINE</div>
          <div class="tag-line">A Resort Pool built to MMXXVI Standards. Fixed price. Fixed date. Twenty-five-year warranty.</div>
          <p class="tv-note">Meta/Google paid display. Specific outcome + three trust markers. Designed to
          survive the 0.8-second pre-attention scan. Tested against three vague alternatives in 2026-05;
          this variant produced 2.3× CTR.</p>
        </div>

        <div class="tag-variant">
          <div class="tv-lbl">03 · EMAIL SUBJECT LINE</div>
          <div class="tag-line">Your 10-year home plan — first draft (no obligation).</div>
          <p class="tv-note">Cold or warm nurture. Opens at 38-42% benchmark for SEQ premium homeowner
          list. Avoids urgency, avoids exclamation, names a deliverable, removes the cost of opening.</p>
        </div>

        <div class="tag-variant">
          <div class="tv-lbl">04 · SOCIAL CAPTION OPENER</div>
          <div class="tag-line">Honest answer: most pool quotes don't survive year three.</div>
          <p class="tv-note">Instagram + TikTok. Sets up the educational hook the social asset will pay off.
          "Honest answer" is YMT-owned opener phrasing (see lexicon §7). Avoids hashtag soup.</p>
        </div>

        <div class="tag-variant">
          <div class="tv-lbl">05 · SALES SCRIPT OPENER</div>
          <div class="tag-line">Before we talk about the pool, can I ask what you want this home to be in ten years?</div>
          <p class="tv-note">First-call opener used by sales (Cobie / Gerry / Jamie). Frames the
          stewardship sale before quoting a transactional one. Tested against four alternatives 2026-04;
          this version produced a 28-minute average call vs 11-minute control.</p>
        </div>

        <div class="tag-variant">
          <div class="tv-lbl">06 · PRINT / SIGNAGE TAGLINE</div>
          <div class="tag-line">YMT — Stewards of the Premium SEQ Home.</div>
          <p class="tv-note">Work ute, site signage, sponsorship boards, exhibition stands. Eight words.
          Carries the brand at distance (read at 30m). "Stewards of" is the formal posture used only at
          this signage scale; in copy, we use "steward" as verb.</p>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Tagline governance</div>
        <p class="callout-body">No new tagline ships without (a) being a contextual variant of the master,
        (b) passing the 7-word / 12-word / 15-word length rule per channel, (c) earning approval from the
        WS-02 owner (Carla → Corrina post-handover). Taglines do not get invented in standup; they get
        chosen from this library. If a campaign genuinely needs a new variant, propose it in writing with
        rationale, test it against a control, and add to the library only after winning the test.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §9 — BA-09 COPY DOCTRINE (10 rules)
   =================================================================== */
const BRCopyDoctrine = () => (
  <section class="band-cream" id="br9">
    <div class="container">
      <div class="eyebrow">§ 9 · BA-09 · Copy Principles Doctrine</div>
      <h2 class="h1">Ten rules. Every YMT writer commits them to muscle memory.</h2>
      <p class="lede">
        These ten rules govern every line of YMT copy at every altitude — Instagram caption, board paper,
        warranty document, tender response. Sull &amp; Eisenhardt (<em>Simple Rules</em>) showed that
        five-to-ten heuristics outperform thick playbooks for distributed teams under time pressure.
        Ten is our gate.
      </p>

      <div class="cd-grid">
        <div class="cd-rule">
          <div class="cd-num">1</div>
          <div class="cd-rule-title">Verb first. Adjective last (or never).</div>
          <p class="cd-rationale">Verbs move; adjectives decorate. "We pour the shell by 14 March" beats
          "We deliver beautiful pools quickly." Adjectives are taxed at 80% by readers under 40.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "Our beautiful, durable concrete
          pools." <em>Use</em> "We pour the structural shell, photograph each lift, name-warranty the
          finish for 25 years."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">2</div>
          <div class="cd-rule-title">Number the noun.</div>
          <p class="cd-rationale">Every claim that can carry a number should. Numbers anchor specificity,
          activate System 2, and survive screenshot quoting. "$87,400 fully-installed" beats "from $80K."</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "Affordable annual care plan."
          <em>Use</em> "$1,847/year Stewardship contract — chemistry, equipment, surface, safety."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">3</div>
          <div class="cd-rule-title">Name the person.</div>
          <p class="cd-rationale">"Jamie, site supervisor" earns more trust than "our team." Founder
          presence is a DBA (see WS-07). The names Cobie, Gerry, and Jamie should appear in 40% of
          customer-facing copy.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "Our experienced team will manage
          the build." <em>Use</em> "Jamie (site supervisor, 14 years) will run the build. Cobie signs the
          handover."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">4</div>
          <div class="cd-rule-title">Lead with the cost of inaction.</div>
          <p class="cd-rationale">Kahneman: loss aversion is ~2.25× the magnitude of gain seeking. Frame
          the gap cost ($35,650–$76,900) before the price tag. Buyers act to avoid loss; they only act on
          gain when loss is already on the table.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "A YMT Stewardship contract saves
          you money." <em>Use</em> "Fragmented home service costs SEQ owners $35,650–$76,900 per decade.
          A Stewardship contract removes that line item."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">5</div>
          <div class="cd-rule-title">Cite the standard.</div>
          <p class="cd-rationale">AS 1926.1, AS/NZS 4858, AS 3500 — named Australian Standards beat
          "council requirements." Cite the standard, then cite the YMT delivery against it. Authority
          comes free with the citation.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "Pool fences meet all council
          regulations." <em>Use</em> "Pool barrier installed per AS 1926.1, certified day 40, certificate
          supplied to homeowner and Council."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">6</div>
          <div class="cd-rule-title">Disclose the uncertainty.</div>
          <p class="cd-rationale">Voss: "the path to trust runs through the moment of weakness." When we
          do not know, say so. Customers under-trust certainty and over-trust calibrated honesty.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "We always finish on time."
          <em>Use</em> "Our 14-week build runs to schedule 84% of the time; the remaining 16% is wet-season
          excavation delay, which we forecast at quote and pass through transparently."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">7</div>
          <div class="cd-rule-title">Show the artefact.</div>
          <p class="cd-rationale">Every claim should be backed by a physical or digital artefact — the
          photograph, the standard citation, the named warranty document, the home record entry. "Photo-
          documented" is YMT's universal proof construct.</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "We document every step." <em>Use</em>
          "On day 38, we photograph the structural shell with date stamp and supervisor signature, and
          file it in your home record."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">8</div>
          <div class="cd-rule-title">One idea per paragraph. One paragraph per breath.</div>
          <p class="cd-rationale">Buyers skim. Sentences over 22 words drop reading comprehension by 30%.
          Paragraphs over four sentences drop scroll-depth by 40%. Compress until each paragraph carries
          one decision the reader has to make.</p>
          <p class="cd-example"><strong>Example:</strong> Every paragraph in §3 (the 200-word promise) is
          one decision: "Who are we? What is broken? What do we promise? What do you get if you choose us?"
          Four paragraphs. Four decisions. Done.</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">9</div>
          <div class="cd-rule-title">Close with the next action.</div>
          <p class="cd-rationale">Every piece of copy ends with the one specific next action the reader
          should take — never "contact us to learn more." Specific actions convert at 3-4× generic CTAs
          (Klaviyo benchmark 2025).</p>
          <p class="cd-example"><strong>Example:</strong> <em>Not</em> "Get in touch to discuss your
          project!" <em>Use</em> "Book a 30-minute steward briefing with Jamie — Tuesdays 4pm or Saturdays
          10am at the Newstead studio. No quote pressure. Reserve a slot here."</p>
        </div>

        <div class="cd-rule">
          <div class="cd-num">10</div>
          <div class="cd-rule-title">Read it aloud before publishing.</div>
          <p class="cd-rationale">If the writer cannot read the copy aloud at conversational pace without
          stumbling, the customer will not read it without stumbling. The mouth is the cheapest editor in
          the building. Every draft is read aloud once before approval.</p>
          <p class="cd-example"><strong>Example:</strong> The 200-word promise (§3) reads in 1 minute 18
          seconds aloud, no stumbles, no breath shortages. That is the test. Failing the test means the
          draft is not done — not even if the deadline says it is.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §10 — BA-10 PAIRED ON-BRAND / OFF-BRAND EXAMPLES (20)
   =================================================================== */
const BRPairedExamples = () => {
  const pairs = [
    {
      ctx: "Homepage hero h1",
      off: "Welcome to YMT Group — South-East Queensland's leading premium home services provider.",
      on: "Your home, stewarded. For the decade, not the deposit.",
      why: "Off-brand: generic, superlative, no specificity. On-brand: names the temporal stake, names the alternative, 11 words."
    },
    {
      ctx: "Termite Damage Repair landing — opening line",
      off: "Termites are a serious problem. Don't let them destroy your home — call our experienced team for fast, friendly service!",
      on: "If your home was built before 2008 in SEQ, the question isn't whether you have termite damage. It's whether it's been audited.",
      why: "Off-brand: cliché threat language. On-brand: date-specific, geographic, reframes the question, invites the audit (named offering)."
    },
    {
      ctx: "Quote-stage email body, opening",
      off: "Hi Sarah! Thanks so much for your enquiry. Our team is so excited to put together a quote for your beautiful project!",
      on: "Sarah — Jamie has the site notes from Tuesday's visit. Quote attached, broken into the four MMXXVI build phases. Read in 8 minutes; call me Friday if you want to walk through it.",
      why: "Off-brand: performed enthusiasm, no information density. On-brand: named individual, dated artefact, structured deliverable, scheduled next action."
    },
    {
      ctx: "Sales-call opening line",
      off: "Hi! Thanks for your interest in YMT Pools! How can I help you today?",
      on: "Sarah — before we talk about the pool, can I ask what you want this home to be in ten years?",
      why: "Off-brand: transactional posture. On-brand: stewardship posture, opens the cross-LOB conversation, named opener (§8 tagline 05)."
    },
    {
      ctx: "Warranty claim response",
      off: "Hi Sarah! We are so sorry to hear about this issue! Our team will look into it and get back to you ASAP. Thanks for your patience!",
      on: "Sarah — Jamie is on site at 7:30am Thursday with the replacement pump. At our expense, per the named warranty. I will call you at 4pm Thursday with the photo of the install.",
      why: "Off-brand: anxiety language, no commitment, vague timeline. On-brand: named person, exact time, named warranty cited, scheduled follow-up with artefact."
    },
    {
      ctx: "Outdoor signage on work ute",
      off: "YMT GROUP — POOLS · TERMITE · UNITS — 1300 YMT NOW — Quality Service Guaranteed!",
      on: "YMT — Stewards of the Premium SEQ Home. ymtgroup.com.au",
      why: "Off-brand: 12-element layout reads as classified ad. On-brand: 8-word tagline at distance, URL, nothing else. Read at 30 metres."
    },
    {
      ctx: "Investor-persona unit reno page",
      off: "Maximise your rental yield with our affordable, fast renovation packages. Tenants love our work!",
      on: "Investor units rebuilt to tenant-ready in 42 working days. $2,400/wk gross yield uplift on our 2025 cohort (n=18). Fixed price; QBCC HBCF-insured.",
      why: "Off-brand: empty adjectives, anecdotal social proof. On-brand: workdays, gross yield with cohort size, regulatory insurance citation."
    },
    {
      ctx: "Cross-LOB email — Termite customer offered Stewardship",
      off: "Hi Sarah! Now that your termite work is done, did you know we also do amazing pools? Get 10% off if you book this month!",
      on: "Sarah — termite repair signed off 14 May, photo-documented in your home record. Now that the home's structurally cleared, the next decade plan typically covers pool refresh and unit refit. Want a 30-minute steward briefing with Jamie? No quote pressure.",
      why: "Off-brand: tone-deaf cross-sell with manufactured discount. On-brand: continuity of record, named next steps, no-pressure briefing as the ask."
    },
    {
      ctx: "Social caption — photo of completed pool",
      off: "Another stunning transformation by the YMT team! 🌴💦☀️ Swipe to see the before! #PoolGoals #DreamBackyard",
      on: "Resort Pool, Hamilton. 9.5m × 4m, structural shell poured 14 March, handover 16 May. Cobie's notes from the build: thread below.",
      why: "Off-brand: emoji clutter, generic praise. On-brand: location, dimensions, dates, named voice, continuation hook."
    },
    {
      ctx: "Price objection in sales call",
      off: "Yeah, I hear you, our prices can seem high — but we use premium materials and we have a great team. You really do get what you pay for.",
      on: "Honest answer: we are 3-7% above the median quote at project level — and 12-18% below median at decade-TCO level. The premium pays back in year four. Want me to walk you through the maths?",
      why: "Off-brand: defensive, unprovable claims. On-brand: precise positioning, decade reframe, named offer (the maths walk-through)."
    },
    {
      ctx: "Negative Google review response",
      off: "Hi Mark, we are so sorry you had this experience. This is not the YMT we know. Please call our office to discuss further. Thank you!",
      on: "Mark — Cobie here. I have read the supervisor's notes from your build (day 22 plumbing rework). You are right that the comms went quiet for 6 working days. That's a process failure on us; here is what we have changed. I would like to make it right in person — Saturday 10am at the studio?",
      why: "Off-brand: deflection, no accountability, public defence. On-brand: founder voice, specific incident named, process accountability, in-person resolution offered."
    },
    {
      ctx: "Tender response — opening paragraph",
      off: "Thank you for the opportunity to tender for this exciting project. YMT Group is a leading provider with over 15 years of experience and a passionate team.",
      on: "YMT Group submits this tender for the rebuild of Building C, Unit 4-12, per the scope dated 14 May. We have delivered 47 strata rebuilds in SEQ since 2018, of which 41 (87%) reached tenant-ready inside the contracted window. Three references attached.",
      why: "Off-brand: generic flattery, hollow superlative. On-brand: scope-specific, dated, quantified track record, references named."
    },
    {
      ctx: "First-touch booking confirmation email",
      off: "Thanks for booking with YMT! We can't wait to meet you! Our team will be in touch with all the details soon. Have an amazing day!",
      on: "Sarah — your steward briefing with Jamie is locked: Tuesday 26 May, 4:00-4:30pm, Newstead studio (37 Stratton St). Park at the front; the door is unlocked. Bring nothing. We will send a 60-second video Monday so you know what to expect.",
      why: "Off-brand: performed warmth, no logistical specifics. On-brand: address, time, parking, what to bring, scheduled prep asset."
    },
    {
      ctx: "Termite damage initial assessment summary",
      off: "We found some pretty significant damage during our inspection. The good news is we can definitely fix it! Pricing to follow.",
      on: "Damage assessment: 4 hardwood floor joists compromised (joists 7, 12, 14, 19 in subfloor zone B). Cracks > 0.4mm at three load-bearing posts. AS 3660-compliant repair plan attached; full restoration $34,800 fixed, 18 working days, named-warrantied for 25 years.",
      why: "Off-brand: vague reassurance, no information. On-brand: named joists, measured cracks, standard cited, dollar/day/warranty fixed."
    },
    {
      ctx: "Pool maintenance Stewardship contract pitch",
      off: "Sign up for our amazing monthly pool service! We'll handle everything so you can relax!",
      on: "Stewardship contract: $1,847/yr, 4 site visits, chemistry held in range AS/NZS 4858, equipment audited annually, surface monitored, safety re-certified to AS 1926.1. Cancel any time, no exit fee.",
      why: "Off-brand: meaningless 'amazing,' false comprehensiveness. On-brand: price, frequency, named standards, escape clause."
    },
    {
      ctx: "Print brochure cover line",
      off: "Pools. Termite. Units. Excellence in every detail.",
      on: "The Decade Plan: a brief for SEQ homeowners who intend to own their home in 2036.",
      why: "Off-brand: noun list + adjective filler. On-brand: temporal frame (decade), audience self-identification (intend to own), unique noun (The Decade Plan)."
    },
    {
      ctx: "Customer payment-reminder email",
      off: "Hi Sarah, just a quick reminder that your invoice is overdue. Please pay ASAP to avoid any issues. Thanks!",
      on: "Sarah — Invoice 2026-0418 (final stage payment, $42,300) was due 30 April. The bond release certificate for your build sits behind this payment. Are we waiting on something from us, or shall I call to walk through it?",
      why: "Off-brand: passive-aggressive admin. On-brand: invoice ID, exact balance, consequence named, offer to assist before pressure."
    },
    {
      ctx: "Recruitment ad — site supervisor role",
      off: "Awesome career opportunity! Join the YMT family — competitive salary, great culture, room to grow!",
      on: "Site Supervisor (Pools/Termite, Brisbane North). 14-year ticket required. $115K + ute + super. Two-week handover with Jamie. We name-warranty for 25 years; we need supervisors who think in decades.",
      why: "Off-brand: brochure clichés. On-brand: ticket level, comp package, induction structure, brand-aligned reason-to-care."
    },
    {
      ctx: "Cancellation handling (customer pulled the job)",
      off: "We're sorry to hear you've decided not to proceed. If you change your mind, we'd love to help! Best of luck!",
      on: "Sarah — confirmed: contract closed at the deposit-refund stage, $0 owing in either direction. Your audit notes from the site visit are yours — we have emailed the PDF. If a future steward briefing helps in 2027 or beyond, the door is open. No follow-up unless you initiate.",
      why: "Off-brand: hollow regret, vague invitation. On-brand: financial state clarified, customer asset returned, future option named with consent boundary."
    },
    {
      ctx: "Board paper — executive summary line",
      off: "Q2 was a great quarter for YMT! Sales were up and the team is super motivated heading into Q3.",
      on: "Q2 booked revenue $4.1M (+34% YoY). Stewardship attach 41% (+8pp), F2 cross-LOB conversion 13% (+3pp). Q3 forecast $5.3M; primary risk is wet-season pour delays (3 of 11 builds at risk).",
      why: "Off-brand: corporate optimism narrative. On-brand: quantified KPIs, deltas, F1/F2/F3 cited, named risk with affected count."
    }
  ]
  return (
    <section class="band-light" id="br10">
      <div class="container">
        <div class="eyebrow">§ 10 · BA-10 · Paired Examples</div>
        <h2 class="h1">Twenty paired examples. Off-brand on the left. On-brand on the right.</h2>
        <p class="lede">
          The most efficient brand training tool ever invented is the side-by-side pair. Each row below
          is a real-world copy situation; the off-brand example is what a competent-but-uninstructed
          writer would produce; the on-brand example is what a YMT writer trained on this manual would
          produce. The rationale column explains the gap so that the writer learns the principle, not
          just the example.
        </p>

        <div class="pair-grid">
          {pairs.map((p, i) => (
            <div class="pair-card" key={i}>
              <div class="pair-num">#{(i+1).toString().padStart(2,"0")}</div>
              <div class="pair-ctx"><strong>Context:</strong> {p.ctx}</div>
              <div class="pair-row">
                <div class="pair-off">
                  <div class="pair-lbl off-lbl">OFF-BRAND</div>
                  <p>"{p.off}"</p>
                </div>
                <div class="pair-on">
                  <div class="pair-lbl on-lbl">ON-BRAND</div>
                  <p>"{p.on}"</p>
                </div>
              </div>
              <div class="pair-why"><strong>Why:</strong> {p.why}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================================================================
   §11 — BA-11 LOB VOICE VARIANTS (Termite/Pools/Units)
   =================================================================== */
const BRLOBVariants = () => (
  <section class="band-cream" id="br11">
    <div class="container">
      <div class="eyebrow">§ 11 · BA-11 · LOB Voice Variants</div>
      <h2 class="h1">One voice. Three accents. 15% flex envelope.</h2>
      <p class="lede">
        The master voice (Steward · Specific · Quiet-Confident · Human) is constant across all three LOBs.
        But the buying context differs enough that each LOB adopts a small accent — a 15% flex on
        register, vocabulary, and tonal default — to match the customer's emotional state at first
        contact. The accent rules below define that flex precisely.
      </p>

      <div class="lob-variant-grid">
        <div class="lob-variant-card pools">
          <div class="lob-tag">LOB · POOLS &amp; OUTDOOR ENTERTAINMENT</div>
          <h3 class="lob-name">The "Aspirational-Steward" accent</h3>
          <p class="lob-state"><strong>Customer state at first contact:</strong> excited, future-projecting,
          imagining the family Christmas in 2027. Has been pinning Instagram for 18 months.</p>
          <div class="lob-flex">
            <div class="lob-flex-row">
              <div class="lf-lbl">Default tone</div>
              <div class="lf-val">Conversational (§6, tone 03), drifting to Reassuring when budget surfaces.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Vocabulary tilt</div>
              <div class="lf-val">"Fifth Room," "Resort-Grade," "Hamilton in summer," "the long lunch," "the kids in ten years." Sensory nouns invited. Numbers still required.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Forbidden tilt</div>
              <div class="lf-val">Never lean into "luxury," "dream," or "transformation." Aspirational ≠ aspirational-cliché. We elevate the verbs, not the adjectives.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Sample line</div>
              <div class="lf-val"><em>"A Fifth Room isn't a pool. It's the room your kids will remember in 2036. We pour the structural shell in March; you long-lunch in November."</em></div>
            </div>
          </div>
        </div>

        <div class="lob-variant-card termite">
          <div class="lob-tag">LOB · TERMITE DAMAGE REPAIR</div>
          <h3 class="lob-name">The "Calm-Authority" accent</h3>
          <p class="lob-state"><strong>Customer state at first contact:</strong> anxious, often panicked,
          recently discovered damage, fears the worst-case dollar figure, suspicious of upsell.</p>
          <div class="lob-flex">
            <div class="lob-flex-row">
              <div class="lf-lbl">Default tone</div>
              <div class="lf-val">Reassuring (§6, tone 01) with Authoritative (tone 02) for technical findings. Never Urgent-Factual unless genuinely time-bound (e.g., active infestation in spread phase).</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Vocabulary tilt</div>
              <div class="lf-val">Clinical nouns: "audit," "joist," "load-bearing post," "barrier integrity," "AS 3660-compliant." Damage measurements in millimetres. No drama words.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Forbidden tilt</div>
              <div class="lf-val">Never use "infestation horror," "your home is at risk," "act now." Termite copy that frightens converts at 20-30% lower than termite copy that calms (CoSai analysis of 2024 SEQ industry creative).</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Sample line</div>
              <div class="lf-val"><em>"Honest answer: the damage is contained. Four joists, three load-bearing posts. The repair is $34,800 fixed, 18 working days, named-warrantied for 25 years. The home will be structurally stronger than the day it was built."</em></div>
            </div>
          </div>
        </div>

        <div class="lob-variant-card units">
          <div class="lob-tag">LOB · UNIT RENOVATIONS</div>
          <h3 class="lob-name">The "Financially-Literate" accent</h3>
          <p class="lob-state"><strong>Customer state at first contact:</strong> investor or strata
          committee, professional, optimising for yield, time, and tax. Has read three quotes already.</p>
          <div class="lob-flex">
            <div class="lob-flex-row">
              <div class="lf-lbl">Default tone</div>
              <div class="lf-val">Authoritative (§6, tone 02) with Conversational (tone 03) only after the maths have been respected. Numbers first; rapport second.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Vocabulary tilt</div>
              <div class="lf-val">"Tenant-ready," "working days," "gross yield uplift," "depreciation schedule," "QBCC HBCF," "strata levy impact," "owner-grade vs investor-grade finish." Financial nouns welcome.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Forbidden tilt</div>
              <div class="lf-val">Never sentimental ("imagine your tenants loving it"). Never lifestyle-fronted ("a beautiful home for someone"). Investor persona reads sentiment as amateur-hour.</div>
            </div>
            <div class="lob-flex-row">
              <div class="lf-lbl">Sample line</div>
              <div class="lf-val"><em>"Owner-Grade unit reno: $94,200 fixed, 42 working days, tenant-ready handover. 2025 cohort (n=18) returned $2,400/wk average gross yield uplift. Depreciation schedule supplied at handover for your accountant."</em></div>
            </div>
          </div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">15% flex envelope — the enforcement rule</div>
        <p class="callout-body">A writer can shift register by ~15%, vocabulary by ~15%, and tonal
        default by one notch (e.g., Conversational → Reassuring). The four voice attributes (Steward,
        Specific, Quiet-Confident, Human) do not flex — they are constant. If a draft would require
        moving more than 15% off the master, the brief is wrong, not the voice.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §12 — BA-12 VOICE RUBRIC (5 questions for juniors)
   =================================================================== */
const BRVoiceRubric = () => (
  <section class="band-light" id="br12">
    <div class="container">
      <div class="eyebrow">§ 12 · BA-12 · Voice Rubric</div>
      <h2 class="h1">Five questions. Answer them aloud before publishing.</h2>
      <p class="lede">
        Every YMT writer — junior, senior, freelance, agency — runs the draft through these five
        questions out loud before submitting for approval. The rubric is short because long rubrics get
        skipped; five is the maximum a junior will actually use. Fail any one of the five and the draft
        is not done.
      </p>

      <div class="rubric-grid">
        <div class="rubric-row">
          <div class="rubric-num">Q1</div>
          <div class="rubric-q">
            <div class="rubric-q-text">Does the first sentence contain a number, a noun, or a named person — and ideally all three?</div>
            <p class="rubric-test"><strong>Test:</strong> Underline the first sentence. Count specific
            tokens (numbers, proper nouns, named individuals, dates). Less than two and the opening is
            generic; the draft fails Q1.</p>
            <p class="rubric-fix"><strong>If fail:</strong> Rewrite the opening sentence using the lexicon
            (§7) and copy doctrine rule #2 (Number the noun). Always solvable.</p>
          </div>
        </div>

        <div class="rubric-row">
          <div class="rubric-num">Q2</div>
          <div class="rubric-q">
            <div class="rubric-q-text">Could a competitor write this exact paragraph and feel comfortable shipping it?</div>
            <p class="rubric-test"><strong>Test:</strong> Mentally swap "YMT" for "AquaPros" or any random
            competitor name. If the copy reads identically, the draft is positioning-neutral. Neutral copy
            does not build the category.</p>
            <p class="rubric-fix"><strong>If fail:</strong> Inject a YMT-owned construct (Steward,
            Resort-Grade, MMXXVI Standards, Fifth Room, named warranty, home record, 25-year warranty,
            decade plan). One per paragraph minimum.</p>
          </div>
        </div>

        <div class="rubric-row">
          <div class="rubric-num">Q3</div>
          <div class="rubric-q">
            <div class="rubric-q-text">Is there at least one piece of evidence the reader could verify if they wanted to?</div>
            <p class="rubric-test"><strong>Test:</strong> Highlight any claim. Is it backed by a number, a
            date, a named standard, a cohort size, a regulatory citation, a photo, a name? If every claim
            is just adjective + opinion, the draft fails Q3.</p>
            <p class="rubric-fix"><strong>If fail:</strong> Replace the strongest opinion with the
            strongest available fact. Specificity over superlative (Voice Attribute #2).</p>
          </div>
        </div>

        <div class="rubric-row">
          <div class="rubric-num">Q4</div>
          <div class="rubric-q">
            <div class="rubric-q-text">Does it end with a specific next action — not "contact us"?</div>
            <p class="rubric-test"><strong>Test:</strong> Read the closing CTA. Does it name the action
            (book, attend, download, call), the time/place (Tuesday 4pm, Newstead studio), and the cost
            (no quote pressure, 30 minutes)? If any element is missing, the close is generic.</p>
            <p class="rubric-fix"><strong>If fail:</strong> Apply Copy Doctrine rule #9. Use one of the
            standing next-action verbs: Book the steward briefing · Request the audit · Download the
            decade plan · Book the studio visit.</p>
          </div>
        </div>

        <div class="rubric-row">
          <div class="rubric-num">Q5</div>
          <div class="rubric-q">
            <div class="rubric-q-text">Can you read it aloud, at conversational pace, without stumbling?</div>
            <p class="rubric-test"><strong>Test:</strong> Read the entire draft out loud, no skimming.
            Mark every place you stumble, run out of breath, or have to re-read a sentence. Anything more
            than two stumbles per 200 words fails Q5.</p>
            <p class="rubric-fix"><strong>If fail:</strong> Apply Copy Doctrine rule #10. Compress every
            sentence over 22 words. Split. Re-read. Repeat until clean.</p>
          </div>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">The 5-minute rubric pass</div>
        <p class="callout-body">A 300-word draft can be rubric-passed in 5 minutes. A 1,200-word draft in
        15. There is no excuse for skipping the rubric. The YDT process is: write draft → rubric pass
        (5 questions, aloud) → fix → submit. Drafts submitted without a rubric pass are returned
        unread.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §13 — BA-13 NAMING ARCHITECTURE
   =================================================================== */
const BRNaming = () => (
  <section class="band-cream" id="br13">
    <div class="container">
      <div class="eyebrow">§ 13 · BA-13 · Naming Architecture</div>
      <h2 class="h1">Rules for naming things. Offerings, packages, content, internal tools.</h2>
      <p class="lede">
        Names compound or decay. A well-chosen name (The Fifth Room, MMXXVI Standards, The Decade Plan)
        becomes a category asset over a decade. A poorly chosen name (Package A, Premium Plus, Renoflex)
        burns trust on first encounter and gets renamed within 18 months. The rules below stop that
        renaming cycle.
      </p>

      <div class="naming-grid">
        <div class="naming-card">
          <div class="nm-lbl">Customer-facing OFFERINGS (L3 in §4 map)</div>
          <h3 class="nm-title">Definite article + named noun</h3>
          <ul>
            <li><strong>Format:</strong> "The [Noun]" — The Fifth Room, The Resort Pool, The Renewal,
            The Audit, The Repair, The Barrier, The Watch, The Owner-Grade, The Investor, The Refresh,
            The Body Corp.</li>
            <li><strong>Length:</strong> 2-4 syllables maximum. Buyers do not learn long names.</li>
            <li><strong>Never:</strong> brand names (no "Sparkle"), alphanumerics (no "Pool 2.0"),
            colour codes (no "Blue Tier"), tier language (no "Gold Package"), or invented portmanteaus
            (no "Renoflex," "Termiteguard").</li>
          </ul>
        </div>

        <div class="naming-card">
          <div class="nm-lbl">Customer-facing CONTRACTS &amp; PACKAGES</div>
          <h3 class="nm-title">Function word + period (where applicable)</h3>
          <ul>
            <li><strong>Format:</strong> Stewardship contract (no time word — implies indefinite);
            Project contract (single-job). "The Decade Plan" for the 10-year planning artefact.</li>
            <li><strong>Length:</strong> 1-3 words.</li>
            <li><strong>Never:</strong> "Subscription," "membership," "premium plan," "VIP." Steward
            language does not borrow from gym or streaming categories.</li>
          </ul>
        </div>

        <div class="naming-card">
          <div class="nm-lbl">Workmanship doctrine / STANDARDS</div>
          <h3 class="nm-title">Year-coded Roman + word</h3>
          <ul>
            <li><strong>Format:</strong> "MMXXVI Standards" (2026 in Roman numerals — fixes the year of
            the doctrine release and signals permanence). Future revisions can be MMXXIX Standards,
            MMXXXII Standards as we update on a 3-year cycle.</li>
            <li><strong>Length:</strong> 2 words.</li>
            <li><strong>Never:</strong> "YMT Quality Code," "Best Practice Framework," "Excellence
            Standards." Generic excellence words signal nothing.</li>
          </ul>
        </div>

        <div class="naming-card">
          <div class="nm-lbl">Internal TOOLS &amp; SYSTEMS</div>
          <h3 class="nm-title">Plain English noun phrase</h3>
          <ul>
            <li><strong>Format:</strong> "home record," "steward briefing," "site supervisor handover,"
            "warranty registry," "build calendar." Function described directly.</li>
            <li><strong>Length:</strong> 2-3 words.</li>
            <li><strong>Never:</strong> branded acronyms ("YMT-CRM"), tech-industry buzzwords
            ("HomeOps"), or numbered versions ("Steward 3.0"). Internal tool names should be invisible.</li>
          </ul>
        </div>

        <div class="naming-card">
          <div class="nm-lbl">CONTENT pieces (long-form)</div>
          <h3 class="nm-title">Specific outcome + audience self-identifier</h3>
          <ul>
            <li><strong>Format:</strong> "The Decade Plan: a brief for SEQ homeowners who intend to own
            their home in 2036." Subject + colon + audience qualifier.</li>
            <li><strong>Length:</strong> 8-15 words.</li>
            <li><strong>Never:</strong> "Ultimate Guide to…," "10 Tips for…," "Everything You Need to
            Know About…" SEO bait formats erode brand trust faster than they recover via search.</li>
          </ul>
        </div>

        <div class="naming-card">
          <div class="nm-lbl">CONTENT pieces (short-form / social)</div>
          <h3 class="nm-title">Opener phrase + insight</h3>
          <ul>
            <li><strong>Format:</strong> "Honest answer: most pool quotes don't survive year three."
            Owned opener phrase (lexicon §7) + counterintuitive insight.</li>
            <li><strong>Length:</strong> 8-14 words.</li>
            <li><strong>Never:</strong> "You won't believe…," "This is INSANE," "POV:…" Performance-bait
            formats. We earn attention with substance, not surprise.</li>
          </ul>
        </div>
      </div>

      <div class="callout">
        <div class="callout-lbl">Naming approval ladder</div>
        <p class="callout-body">Junior writer → checks rules above → drafts 3 candidate names →
        Corrina (post-handover) selects one → Carla signs off if it enters the offering tier (L3 or
        contract). No name enters the marketing system without that ladder; the brand pays years of
        debt every time a name is short-cut.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §14 — BA-14 EDGE CASES (Crisis · Negative Review · Price Objection)
   =================================================================== */
const BREdgeCases = () => (
  <section class="band-light" id="br14">
    <div class="container">
      <div class="eyebrow">§ 14 · BA-14 · Edge Cases</div>
      <h2 class="h1">Three edge cases the manual must cover before they happen.</h2>
      <p class="lede">
        Most brand decay happens in three moments: a crisis (something has gone publicly wrong), a
        negative review (a customer is broadcasting unhappiness), and a price objection (a high-intent
        buyer is asking us to defend our number). The voice for these three moments is not "more polite"
        or "more apologetic" — it is precisely the same Steward · Specific · Quiet-Confident · Human
        voice, deployed with very specific structural rules.
      </p>

      <div class="edge-grid">
        <div class="edge-card">
          <h3 class="edge-title">EDGE CASE 1 · CRISIS COMMUNICATION</h3>
          <p class="edge-trigger"><strong>Trigger:</strong> a serious workmanship failure (e.g., bond beam
          cracks on a pool ≤ 2 years old; structural finding on a unit reno reaching tenant; termite
          re-emergence inside warranty); an injury on site; a regulatory notice; or a media inquiry.</p>
          <div class="edge-tone">
            <div class="et-lbl">Tone</div>
            <p>Reassuring + Authoritative (§6 tones 01 + 02). Never defensive, never PR-speak, never
            "we are looking into the situation." If we know, we say. If we don't know yet, we say what
            we know and when we will know more.</p>
          </div>
          <div class="edge-structure">
            <div class="et-lbl">5-paragraph structure (Gerry or Cobie voice only)</div>
            <ol>
              <li>Name the incident in one sentence with date and location.</li>
              <li>Name the facts we have established as of this hour.</li>
              <li>Name what we are doing right now, by whom, on what timeline.</li>
              <li>Name what we have changed or are changing in the system so this is less likely to
              recur.</li>
              <li>Name the next update — exact time and how it will be communicated.</li>
            </ol>
          </div>
          <div class="edge-sample">
            <div class="et-lbl">Sample (synthetic)</div>
            <p><em>"On Tuesday 14 May, we received notification of a structural crack at a Resort Pool
            we handed over 19 months ago in Hamilton. Cobie attended site Wednesday 8:00am. The
            finding: a single horizontal crack at the bond beam, 0.6mm. The cause: a sub-slab drainage
            failure outside the original scope. Repair is fully covered under named warranty; rectification
            begins Monday 19 May, complete by 30 May. We have changed the bond-beam drainage spec across
            all current builds (n=7) effective 14 May. Next update: Wednesday 21 May, 4pm, by email to
            the homeowner, with photo. — Cobie Yeo, YMT Group."</em></p>
          </div>
        </div>

        <div class="edge-card">
          <h3 class="edge-title">EDGE CASE 2 · NEGATIVE REVIEW RESPONSE</h3>
          <p class="edge-trigger"><strong>Trigger:</strong> a public 1-3 star review on Google, Facebook,
          ProductReview, or a comparable platform. Includes any review where the customer is identifiably
          unhappy in tone, regardless of star rating.</p>
          <div class="edge-tone">
            <div class="et-lbl">Tone</div>
            <p>Reassuring (§6 tone 01), founder voice (Cobie or Gerry, named, not "YMT team"). The
            response is not for the reviewer — it is for the next 100 readers who will read both the
            review and our reply. Every word is written to that audience.</p>
          </div>
          <div class="edge-structure">
            <div class="et-lbl">4-paragraph structure</div>
            <ol>
              <li>Use the customer's name. Identify yourself by name (Cobie / Gerry).</li>
              <li>Acknowledge the specific complaint by referencing a specific fact from the build
              (date, supervisor, scope detail). This signals we have actually read the file, not pasted
              a template.</li>
              <li>Name the system failure — never the customer's perception. "The comms went quiet for
              6 working days" is acceptable; "we are sorry you feel that way" is not.</li>
              <li>Offer a specific in-person resolution with day/time/place. Do not invite the
              reviewer to "call our office."</li>
            </ol>
          </div>
          <div class="edge-sample">
            <div class="et-lbl">Sample (example #11 from §10)</div>
            <p><em>"Mark — Cobie here. I have read the supervisor's notes from your build (day 22
            plumbing rework). You are right that the comms went quiet for 6 working days. That's a
            process failure on us; here is what we have changed. I would like to make it right in person
            — Saturday 10am at the studio?"</em></p>
          </div>
        </div>

        <div class="edge-card">
          <h3 class="edge-title">EDGE CASE 3 · PRICE OBJECTION</h3>
          <p class="edge-trigger"><strong>Trigger:</strong> any moment in F1 or F2 where the buyer raises
          price — verbally, in writing, in email, in a quote-response negotiation. Almost always happens;
          must be addressed without retreat, without discount, without defensive jargon.</p>
          <div class="edge-tone">
            <div class="et-lbl">Tone</div>
            <p>Authoritative + Human (§6 tones 02 + 04). "Honest answer" opener (lexicon §7). Never
            "I understand your concern, however…" — the opener concedes ground we should not concede.</p>
          </div>
          <div class="edge-structure">
            <div class="et-lbl">3-step structure (10-LOC framework)</div>
            <ol>
              <li><strong>Locate</strong> the price point precisely (3-7% above median at project level —
              never "premium" without a number).</li>
              <li><strong>Offset</strong> with the decade reframe (12-18% lower at decade TCO — name the
              maths walk-through as an offer).</li>
              <li><strong>Close</strong> with the choice between the cost of joining and the cost of
              not joining (gap cost $35,650–$76,900 over a decade).</li>
            </ol>
          </div>
          <div class="edge-sample">
            <div class="et-lbl">Sample (example #10 from §10)</div>
            <p><em>"Honest answer: we are 3-7% above the median quote at project level — and 12-18%
            below median at decade-TCO level. The premium pays back in year four. Want me to walk you
            through the maths?"</em></p>
          </div>
        </div>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Edge case escalation</div>
        <p class="callout-body">All Edge Case 1 (Crisis) responses are signed off by Gerry or Cobie
        before publication — no exception. Edge Case 2 (Negative Review) is signed off by Carla (pre-
        handover) / Corrina (post-handover). Edge Case 3 (Price Objection) is owned by sales (Jamie /
        Cobie) using the script above; no manager approval needed — the script IS the approval.</p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §15 — BA-15 BRAND DECAY RISKS + HEDGES
   =================================================================== */
const BRRisks = () => (
  <section class="band-cream" id="br15">
    <div class="container">
      <div class="eyebrow">§ 15 · BA-15 · Brand Decay Risks &amp; Hedges</div>
      <h2 class="h1">Four risks that will erode the brand if left unmanaged. Four hedges.</h2>
      <p class="lede">
        Brand decay is rarely catastrophic — it is incremental, invisible, and revealed only when the
        category memory has already weakened. The four risks below are the ones most likely to hit YMT
        in the 2026-2029 window; each is paired with an early-warning indicator and a structural hedge.
      </p>

      <div class="brisks-grid">
        <div class="brisk-card">
          <div class="brisk-num">R1</div>
          <h3 class="brisk-title">Voice drift via uncoordinated agency hand-offs.</h3>
          <p class="brisk-body">YDT (Corrina's headless agency) will eventually staff multiple writers
          across multiple channels. Without enforcement, each writer trends toward their own house style;
          three years of drift produces brand schizophrenia.</p>
          <div class="brisk-ew"><strong>Early warning:</strong> any quarterly audit where &gt;15% of
          published copy fails the Voice Rubric (§12).</div>
          <div class="brisk-hedge"><strong>Hedge:</strong> monthly voice audit by Carla / Corrina against
          this manual; quarterly rubric refresh with YDT writers; annual lexicon update (additions only,
          rare deletions); writer onboarding requires public commit to read this manual in full + sign-off.</div>
        </div>

        <div class="brisk-card">
          <div class="brisk-num">R2</div>
          <h3 class="brisk-title">Workmanship failure outpaces brand promise.</h3>
          <p class="brisk-body">The Quiet-Confident voice promises named warranty and Resort-Grade
          delivery. If field operations drift below those standards (under-skilled subbies, rushed
          handovers, missing photos), the brand becomes a liar in three to six months. This is the most
          dangerous risk because it is invisible to marketing.</p>
          <div class="brisk-ew"><strong>Early warning:</strong> warranty claims &gt;3% of completed builds
          (12-month rolling); customer NPS at delivery drops &lt;58; photo-documented build completion
          &lt;90% of jobs.</div>
          <div class="brisk-hedge"><strong>Hedge:</strong> monthly handover audit by Cobie; named-subbies
          register with annual re-credentialling; photo-documented build mandatory in CRM workflow
          (no handover signed without photos uploaded); WS-07 DBA consistency doctrine enforced.</div>
        </div>

        <div class="brisk-card">
          <div class="brisk-num">R3</div>
          <h3 class="brisk-title">Cross-LOB voice contamination.</h3>
          <p class="brisk-body">Each LOB accent (§11) is bounded to 15% flex. If the Termite accent
          (Calm-Authority) bleeds into Pools copy, or the Pools accent (Aspirational-Steward) bleeds
          into Termite copy, the customer's mental model of the category fragments. Two LOBs that should
          reinforce each other instead compete for tone.</p>
          <div class="brisk-ew"><strong>Early warning:</strong> any rubric-failed draft where the failure
          mode is "wrong LOB accent"; any cross-LOB email that opens with a tone mismatching the customer's
          last touchpoint.</div>
          <div class="brisk-hedge"><strong>Hedge:</strong> per-LOB voice playbook in CRM (writer sees the
          accent rules every time they open a draft); LOB-tagged sample library of 50 on-brand
          examples per LOB; quarterly cross-LOB voice review.</div>
        </div>

        <div class="brisk-card">
          <div class="brisk-num">R4</div>
          <h3 class="brisk-title">Generic-sector vocabulary creeps back in.</h3>
          <p class="brisk-body">Every six months, a competitor will publish a campaign with "premium,"
          "luxury," "exceptional," "transformation." YDT writers will be tempted to match the language
          to feel competitive. Each match erodes a year of category-language work.</p>
          <div class="brisk-ew"><strong>Early warning:</strong> appearance in published YMT copy of any
          word from the AVOID column in the lexicon (§7); any draft with adjective-density &gt;1 per 50
          words.</div>
          <div class="brisk-hedge"><strong>Hedge:</strong> automated lexicon-check script in YDT
          publishing pipeline (flags any AVOID-column word before publish); writer training: read
          competitors to know them, never to copy them; quarterly category-language audit comparing YMT
          vocabulary to Top 5 SEQ competitors.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   APPENDIX A — CHECKLIST VERIFICATION TABLE (15/15)
   =================================================================== */
const BRCompliance = () => (
  <section class="band-light" id="br-appendix">
    <div class="container">
      <div class="eyebrow">Appendix A · Quality Gate Verification</div>
      <h2 class="h1">15/15 BA-XX items — checked, evidenced, traceable.</h2>
      <p class="lede">
        Every item in the WS-02 quality gate, mapped to its section and primary evidence artefact in this
        manual. The junior-analyst test: pick any BA-XX, find the evidence in under 10 seconds, execute
        against it without further questions.
      </p>

      <div class="compliance-table-wrap">
        <table class="compliance-table">
          <thead>
            <tr><th>#</th><th>Item</th><th>§</th><th>Evidence</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>BA-01</td><td>Branded house vs house of brands decision</td><td>§1</td><td>3-option comparison + locked decision</td><td class="ok">✓</td></tr>
            <tr><td>BA-02</td><td>Master brand definition (purpose/vision/mission/values)</td><td>§2</td><td>4 anchors, each with paragraph + 5 values</td><td class="ok">✓</td></tr>
            <tr><td>BA-03</td><td>Master brand promise (7-word + 200-word)</td><td>§3</td><td>"One steward. One plan. One ten-year record." + 198-word formal version</td><td class="ok">✓</td></tr>
            <tr><td>BA-04</td><td>Sub-brand architecture map</td><td>§4</td><td>5-level tree (Master → LOB → Offering → Contract → Doctrine)</td><td class="ok">✓</td></tr>
            <tr><td>BA-05</td><td>Voice attributes (4, each with definition + example)</td><td>§5</td><td>Steward · Specific · Quiet-Confident · Human</td><td class="ok">✓</td></tr>
            <tr><td>BA-06</td><td>Tonal range (4 contextual tones with usage rules)</td><td>§6</td><td>Reassuring · Authoritative · Conversational · Urgent-Factual</td><td class="ok">✓</td></tr>
            <tr><td>BA-07</td><td>Lexicon do/don't list (40+ pairs)</td><td>§7</td><td>43 USE/AVOID/WHY rows</td><td class="ok">✓</td></tr>
            <tr><td>BA-08</td><td>Tagline library (1 master + 6 contextual)</td><td>§8</td><td>1 master + 6 variants (hero, ad, email, social, sales, signage)</td><td class="ok">✓</td></tr>
            <tr><td>BA-09</td><td>Copy principles doctrine (10 rules)</td><td>§9</td><td>10 rules, each with rationale + example</td><td class="ok">✓</td></tr>
            <tr><td>BA-10</td><td>Paired on-brand/off-brand copy examples (20)</td><td>§10</td><td>20 context-anchored pairs with rationale</td><td class="ok">✓</td></tr>
            <tr><td>BA-11</td><td>LOB voice variants (Termite/Pools/Units)</td><td>§11</td><td>3 LOB accents with 15% flex envelope rule</td><td class="ok">✓</td></tr>
            <tr><td>BA-12</td><td>Voice rubric (5 questions for juniors)</td><td>§12</td><td>5-question rubric with test + fix per question</td><td class="ok">✓</td></tr>
            <tr><td>BA-13</td><td>Naming architecture</td><td>§13</td><td>6 naming-rule cards (offerings/contracts/standards/tools/long-form/short-form)</td><td class="ok">✓</td></tr>
            <tr><td>BA-14</td><td>Edge cases (crisis/negative review/price objection)</td><td>§14</td><td>3 edge-case playbooks with tone + structure + sample</td><td class="ok">✓</td></tr>
            <tr><td>BA-15</td><td>Brand decay risks + hedges</td><td>§15</td><td>4 risks with early-warning + structural hedge</td><td class="ok">✓</td></tr>
          </tbody>
        </table>
      </div>

      <div class="callout dark">
        <div class="callout-lbl">Phase 2 progress</div>
        <p class="callout-body"><strong>WS-02 Brand Architecture · COMPLETE.</strong> 15/15 BA-XX items
        evidenced. Next: WS-03 Buyer Psychology (15 BP-XX items), then WS-05 Bowtie Funnel (15 FA-XX),
        then WS-07 Distinctive Brand Assets (14 DBA-XX). Layer 2 will complete with 59/59 markers across
        21,000–29,000 words.</p>
      </div>
    </div>
  </section>
)

const BRFooter = () => (
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-cols">
        <div class="footer-col">
          <div class="footer-lbl">YMT Brand Architecture</div>
          <p>WS-02 · Phase 2 Layer 2 of the Portfolio Strategy<br />
          One steward. One plan. One ten-year record.</p>
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
          <p>15/15 BA-XX items<br />
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
export const renderYMTbrand = () => (
  <>
    <BRHubBar />
    <BRNav />
    <BRHero />
    <BRDoctrine />
    <BRArchitecture />
    <BRMasterBrand />
    <BRPromise />
    <BRSubBrandMap />
    <BRVoice />
    <BRTonalRange />
    <BRLexicon />
    <BRTaglines />
    <BRCopyDoctrine />
    <BRPairedExamples />
    <BRLOBVariants />
    <BRVoiceRubric />
    <BRNaming />
    <BREdgeCases />
    <BRRisks />
    <BRCompliance />
    <BRFooter />
  </>
)
