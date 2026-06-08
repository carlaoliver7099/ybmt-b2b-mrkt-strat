/**
 * /pools-gtm — DOC 5 · Phase 4 · Pools & Outdoor Entertainment (POE) GTM Operating Paper
 * Creative priority 2 of 3 · 30% sales mix · 32% GPM · brand-prestige LOB
 * Built to CMO-DELIVERY-METHOD v1.0 (12-pillar definition of done · P-07 deferred)
 * Built on top of DOC 3 strategic foundation (11 operating manuals · 145/145 markers)
 * Built against POOLS-GAP-ANALYSIS-v1.md audit (6.4/10 → 9/10 target uplift)
 *
 * Pillar inventory (per CMO Delivery Method):
 *   P-01 Brand Identity Kit         P-07 Email Lifecycle Kit (deferred to WS-10)
 *   P-02 Website Copy Kit            P-08 Sales Enablement Kit
 *   P-03 Lead Magnet Kit             P-09 Social Content Engine
 *   P-04 SEO/GEO/AEO Content Engine  P-10 Partnerships & Referral Kit
 *   P-05 Google Ads Deployment Kit   P-11 Print & Physical Touchpoint Kit
 *   P-06 Meta Ads Deployment Kit     P-12 Instrumentation & KPI Kit
 *
 * Frameworks: CC-JTBD · BS-HBG · JR-DBA · BF-LSI · DK-TFS · RC-INF · BM-DSS ·
 *             PB-CAT (Play Bigger) · AD-OA · AH-OFR · CV-NSD · WBD-BOW · AGG-GEO ·
 *             MK-AEO · KLA-25 · MCK-25 · HS-26
 *
 * Sub-brand identity: YBMT Resort Yards (elevated from "YBMT Pool Decks")
 * Category-defining frame: "Turn Your Backyard Into a Resort"
 */

import type { FC } from 'hono/jsx'
import { UpstreamAnchor } from './upstream-anchor'

const PGHubBar: FC = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <span class="dochub-badge">DOC 5 · Phase 4 · POE</span>
        <span>Pools &amp; Outdoor Entertainment · GTM Operating Paper</span>
      </div>
      <nav class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">Strategy Index</a>
        <a href="/termite-gtm" class="dochub-link">TDR</a>
        <a href="/pools-gtm" class="dochub-link active">Pools <span class="new">NEW</span></a>
        <a href="/units-gtm" class="dochub-link">Units</a>
        <a href="/kpi" class="dochub-link">KPI</a>
      </nav>
    </div>
  </div>
)

const PGNav: FC = () => (
  <header class="site-header on-dark">
    <div class="header-inner">
      <div class="brand-lockup">
        <span class="cosai-mark">POE</span>
        <span>YBMT Resort Yards · Pools &amp; Outdoor Entertainment</span>
      </div>
      <nav class="section-nav">
        <a href="#p01">Brand</a>
        <a href="#p02">Website</a>
        <a href="#p03">Lead Magnet</a>
        <a href="#p04">SEO/GEO</a>
        <a href="#p05">Google Ads</a>
        <a href="#p06">Meta</a>
        <a href="#p08">Sales</a>
        <a href="#p12">KPI</a>
      </nav>
    </div>
  </header>
)

const PGHero: FC = () => (
  <section class="hero band-navy">
    <div class="hero-inner">
      <div class="eyebrow">DOC 5 · PHASE 4 · POOLS &amp; OUTDOOR ENTERTAINMENT · LOB 2 OF 3</div>
      <h1 class="display">Pools &amp; Outdoor Entertainment — GTM Operating Paper</h1>
      <p class="lede">
        The deployment-ready operating paper for YMT Group's <strong>brand-prestige
        line of business</strong>. POE (sub-brand: <strong>YBMT Resort Yards</strong>)
        delivers <strong>30% of Y2 sales mix</strong> at <strong>32% GPM</strong>. It
        is the LOB that buys YMT Group the right to be considered premium — every
        Resort Yard build is a 10-year billboard for the entire portfolio. This paper
        elevates the existing "YBMT Pool Decks" kit (audit baseline: 6.4/10 vs. 9/10 bar)
        to category-leadership altitude across all 12 pillars, with the highest-ROI
        fixes (JTBD-led copy · GEO/AEO content engine · DBA codification · bowtie
        post-purchase loop) prioritised per the locked gap analysis.
      </p>
      <div class="hero-meta">
        <span><strong>12 pillars</strong> · P-01 → P-12 (P-07 deferred)</span>
        <span><strong>300+ assets</strong> deployable</span>
        <span><strong>30% sales mix</strong> · 32% GPM · $3.0M Y2 target</span>
      </div>
    </div>
  </section>
)

const PGDoctrine: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <h2 class="display">POE GTM Doctrine</h2>
      <p class="lede">
        Five rules govern every asset in this paper. They emerge from the
        <code>POOLS-GAP-ANALYSIS-v1.md</code> audit (which scored the legacy Pool
        Decks kit at 6.4/10 vs. a 9/10 world-class bar) and the unique character
        of the POE buyer: <strong>spending $50K–$140K to buy a feeling, not a
        feature</strong>. The POE buyer's psychology, category-entry-point map,
        and creative altitude are sharply distinct from TDR (crisis-purchase) and
        UR (ROI-purchase) — those distinctions are operationalised below.
      </p>
      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">01</div>
          <div class="rule-body">
            <h3 class="rule-title">Category design, never category entry</h3>
            <p>
              The legacy kit positioned as <em>"South East Queensland's Pool Deck Specialists"</em>
              — that describes a product, it does not define a category. The category
              we own (and the only one worth playing in at premium GPM) is
              <strong> "Resort Yard Builders"</strong>: an integrated outdoor system
              encompassing pool deck + outdoor kitchen + pergola + fire/water + landscape.
              Play Bigger <code>[PB-CAT]</code> + Christensen JTBD <code>[CC-JTBD]</code>
              are the operating doctrine — every asset frames the buyer as choosing a
              category, not a product.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">02</div>
          <div class="rule-body">
            <h3 class="rule-title">JTBD-trigger-led, never demographic-led</h3>
            <p>
              Demographics tell you who can afford a Resort Yard. JTBD tells you
              why they would buy <em>this month</em> vs. <em>next year</em> vs.
              <em>never</em>. We operate four locked Job Stories — Fast-Track Host
              (kids' summer / wedding / event) · Pool-Completion Buyer (developer
              left a concrete slab) · Replacement Buyer (old timber failing
              compliance) · Pre-Sale Investor (agent says upgrade outdoor) —
              each with its own copy track, landing page, lead magnet positioning,
              and sales script branch. Per gap-analysis Fix #1, this single shift
              is worth a 1.8–2.4× conversion lift.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">03</div>
          <div class="rule-body">
            <h3 class="rule-title">GEO/AEO is the primary discovery channel, not Google</h3>
            <p>
              45% of premium-renovation research in 2026 starts in ChatGPT,
              Perplexity, Gemini, Claude, or Copilot <em>before</em> the buyer
              touches Google search <code>[AGG-GEO][MK-AEO]</code>. The Resort
              Yards content engine is built answer-first: every pillar page is
              structured for AI-engine citation (Citation Inclusion +40.6% AI
              visibility · Quotation Addition +41% · Statistic Addition +37.5%
              per Aggarwal Princeton). Schema markup, <code>llms.txt</code>,
              programmatic SEO across 45 SEQ suburbs, and Reddit/Quora seeding
              are first-class citizens in P-04 — not afterthoughts.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">04</div>
          <div class="rule-body">
            <h3 class="rule-title">60/40 brand/activation split, never pure activation</h3>
            <p>
              Premium B2C grows on the Binet &amp; Field <code>[BF-LSI]</code>
              60/40 brand-to-activation ratio. The legacy kit was 100% activation
              (Google + Meta lead-gen) — that buys leads, not category leadership.
              Resort Yards locks <strong>60% brand</strong> (YouTube reach,
              connected-TV, QLD Homes magazine, sponsorship, branded content) +
              <strong> 40% activation</strong> (Google/Meta direct-response).
              SOV target: 25%+ share-of-voice in SEQ premium-outdoor within 12
              months <code>[BS-HBG]</code> — SOV sets the floor, not the ceiling.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">05</div>
          <div class="rule-body">
            <h3 class="rule-title">Bowtie post-purchase is the expansion engine</h3>
            <p>
              60–80% of customer LTV lives in the post-purchase half of the bowtie
              <code>[WBD-BOW]</code>. Resort Yards engineers a five-stage
              post-purchase loop — Onboarding (welcome kit) → Impact (12-month
              follow-up shoot) → <strong>Expansion ("Beyond the Pool" outdoor
              kitchen / pergola / fire feature)</strong> → Advocacy (customer
              referral engine) → Win-back (5-year deck rejuvenation). The
              "Beyond the Pool" expansion offer alone is projected at +25–40%
              LTV per customer per gap-analysis Fix #3.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">06</div>
          <div class="rule-body">
            <h3 class="rule-title">Resort Yards obeys the five YMT Group upstream anchors.</h3>
            <p>
              The Resort Yards sub-brand exists to deliver Pools / Outdoor Entertainment as the
              YMT Group <em>brand prestige</em> LOB (30% of mix, 32% GPM) — but it does not float
              free of the parent. Every Resort Yards asset reinforces the YMT Group frame:
              <strong>(a)</strong> persona is <em>Sarah &amp; Mark · The Established SEQ Homeowner
              </em> (WS-04), specifically the lifestyle-job variant — they are the same customer
              who hires YMT for Termite and Units, met at a different job-to-be-done;
              <strong>(b)</strong> category positioning ladders to <em>Whole-of-Home Stewardship
              </em> (WS-01) — a Resort Yard is not a pool, it is a stewardship investment in the
              fourth room of the home; <strong>(c)</strong> the closing line on Hero ads,
              proposals, and post-build handover is the YMT Group promise <em>"Built like it's
              our own home"</em> (WS-02) — never a Resort-Yards-only tagline that orphans the
              customer from the parent brand and breaks the cross-LOB referral loop;
              <strong>(d)</strong> the 30× cross-LOB LTV ratio (WS-05) is why "Beyond the Pool"
              expansion + cross-LOB Termite/Units cross-sell are the headline economics, not the
              first build margin alone; <strong>(e)</strong> every lead carries F1/F2/F3 staging
              and MEDDPICC qualification (WS-11) so the YDT team can pace and prioritise the
              60-90-day Pools sales cycle correctly. Cross-LOB economics are explicit in the
              Resort Yards customer file: every record is tagged with pre-Pools YBMT history
              (Termite Damage Repair customers convert to Pools at materially higher rates than
              cold leads) AND with post-Pools propensity for Unit Renovations (investor segment
              particularly — Termite repair history + Pools build is a strong signal for Unit
              Renovations cross-sell). The bowtie expansion loop is concrete: <strong>Termite →
              Pools → Unit Renovations</strong> is the headline portfolio LTV path, and Resort
              Yards is the highest-margin waypoint on it. Termite repair is the entry point;
              Unit Renovations is the long-tail; Pools sits between them as the brand-prestige
              anchor that lifts mental availability for both Termite and Unit Renovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const renderPoolsGTM = () => (
  <>
    <PGHubBar />
    <PGNav />
    <PGHero />
    <PGDoctrine />
    <UpstreamAnchor doc="DOC 5 · Pools / Resort Yards GTM Kit" />
    <PGPillar01Brand />
    <PGPillar02Website />
    <PGPillar03LeadMagnets />
    <PGPillar04SeoGeoAeo />
    <PGPillar05GoogleAds />
    <PGPillar06MetaAds />
    <PGPillar08SalesEnablement />
    {/* Pillars P-09..P-12 appended in subsequent tranches · P-07 Email deferred to WS-10 */}
  </>
)

/* ============================================================================
 * PILLAR P-01 · BRAND IDENTITY KIT  (YBMT Resort Yards sub-brand)
 * 12 sub-items per CMO-DELIVERY-METHOD-v1
 * Audit elevation: Gap Analysis Layer 2 (7/10) + Layer 7 DBAs (4/10) → 9/10 bar
 * ============================================================================ */
const PGPillar01Brand = () => (
  <section className="pillar-block pillar-block-rev" id="p01">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-01 · BRAND IDENTITY KIT — YBMT RESORT YARDS</span>
      <h3>Brand Identity Kit — sub-brand architecture + 7 codified Distinctive Brand Assets</h3>
      <p className="kw-block">
        The legacy "YBMT Pool Decks" sub-brand was named for what it built in 2024.
        It cannot survive 5 years of category expansion into outdoor kitchens, pergolas,
        fire features, and landscape integration without renaming. <strong>YBMT Resort Yards</strong>
        is the sub-brand that lives at category altitude — endorsed by the YBMT parent for
        credibility, scoped to the full "Resort Yard" category for runway. This pillar locks
        the naming, logo, palette, typography, photography, voice, tone-of-voice rules, and —
        per the locked gap analysis — codifies <strong>seven Distinctive Brand Assets</strong>
        (Romaniuk <code>[JR-DBA]</code>) so YBMT Resort Yards is recognisable in 0.2 seconds
        with the wordmark removed.
      </p>
    </div>

    {/* ---------- 1.1 Sub-brand naming + endorsement architecture ---------- */}
    <div className="kw-block">
      <h4>1.1 · Sub-brand naming &amp; endorsement architecture</h4>
      <ul className="voice-list">
        <li><strong>Parent brand:</strong> YBMT (Yang Building &amp; Maintenance Team) — credibility endorsement, 12-year operating history, $20M PL insurance, QBCC Open Builder licence.</li>
        <li><strong>Sub-brand (LOB 2 of 3):</strong> <strong>YBMT Resort Yards</strong> — scope: pool deck + outdoor kitchen + pergola + fire/water features + landscape integration. Wider than the legacy "Pool Decks" wordmark could carry. Survives 5+ years of category expansion per Wally Olins endorsement-strategy doctrine.</li>
        <li><strong>Lockup rule:</strong> "YBMT" set bold sans (Inter ExtraBold) · "Resort Yards" set serif italic (Fraunces Italic 600). Vertical lockup primary (logo + tagline stacked) · horizontal lockup secondary (logo + tagline inline). Square avatar lockup tertiary (mark only — see 1.4).</li>
        <li><strong>Tagline lockup (locked):</strong> <em>"Turn Your Backyard Into a Resort. Built in 30 Days. Guaranteed."</em> The "30 days" proof point ladders to the Resort Yard Inspection ritual (DBA 7) and Pillar P-02 hero copy. The "Guaranteed" hooks Cialdini reciprocity + authority simultaneously.</li>
        <li><strong>Endorsement signal placement:</strong> "By YBMT · QBCC 1234567 · 12 years on the Coast" set 70% scale of the sub-brand lockup. Appears: footer of every page · last frame of every video · back of every business card · tail of every email signature.</li>
        <li><strong>Sub-brand authority:</strong> The Resort Yards sub-brand may run its own social handles, its own URL paths, its own ads — but cannot operate financially separately from YBMT. Insurance, warranty, compliance roll up to the parent. (Architectural decision locked with Carla 2026-06-04.)</li>
      </ul>
    </div>

    {/* ---------- 1.2 Naming options stress-tested ---------- */}
    <div className="kw-block">
      <h4>1.2 · Naming options stress-tested (decision audit)</h4>
      <table className="services-table meta-table">
        <thead><tr><th>Option</th><th>Pro</th><th>Con</th><th>Verdict</th></tr></thead>
        <tbody>
          <tr><td><strong>YBMT Resort Yards ✅</strong></td><td>Category-defining · runway · alliterative · domain available · trademarkable</td><td>"Resort" risks pretentious if creative misjudges altitude</td><td><strong>LOCKED</strong></td></tr>
          <tr><td>YBMT Outdoor Living</td><td>Broad scope · safe</td><td>Generic · already used by 4 SEQ competitors</td><td>Rejected — undifferentiated</td></tr>
          <tr><td>YBMT Resort Builders</td><td>Plural "Builders" reinforces trade credentials</td><td>Hints at building resorts (B2B hospitality), not residential</td><td>Rejected — confusing</td></tr>
          <tr><td>YBMT Backyard Resorts</td><td>Mirrors the tagline verbatim</td><td>"Backyard" sets the altitude too suburban-domestic for premium</td><td>Rejected — altitude mismatch</td></tr>
          <tr><td>YBMT Pool Decks (legacy)</td><td>Currently in market · SEO equity</td><td>Outgrown in 12 months · cannot carry outdoor kitchen scope</td><td>Sunset — redirect 301</td></tr>
        </tbody>
      </table>
      <p><strong>Transition plan:</strong> Legacy "ybmtpooldecks.com.au" 301-redirects to "ybmtresortyards.com.au" with the redirect kept live for 24 months. Google Search Console "Change of Address" tool used to preserve ~85% of legacy SEO equity per Search Console documentation. Social handles migrated with cross-post "we've grown — meet Resort Yards" announcement campaign (3-post series across IG · FB · LinkedIn).</p>
    </div>

    {/* ---------- 1.3 Colour system (Resort Yards palette + ratio) ---------- */}
    <div className="kw-block">
      <h4>1.3 · Colour system — the Resort Yards palette + 50/25/12/8/5 ratio rule</h4>
      <p>
        Inherited from the YBMT parent palette (navy/timber/aqua/cream) but with the
        ratio locked for codification — DBA #5 below. Every Resort Yards asset
        (digital + print + photography grading) must hit this ratio.
      </p>
      <table className="services-table meta-table">
        <thead><tr><th>Role</th><th>Name</th><th>Hex</th><th>Ratio</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>Primary</td><td>Resort Navy</td><td><code>#1B3A5C</code></td><td>50%</td><td>Background of brand surfaces · large type · primary chart fills</td></tr>
          <tr><td>Secondary</td><td>Sun-Warmed Timber</td><td><code>#B8743D</code></td><td>25%</td><td>Accent typography · button fills · DBA badge fills · timber-deck-as-image</td></tr>
          <tr><td>Tertiary</td><td>Resort Pool Aqua</td><td><code>#4DB6C7</code></td><td>12%</td><td>Highlights · hover states · water/pool elements in photography</td></tr>
          <tr><td>Neutral</td><td>Resort Cream</td><td><code>#F5F1EA</code></td><td>8%</td><td>Body backgrounds · cream-on-navy reverses · breathing space</td></tr>
          <tr><td>Function</td><td>Compliance Charcoal</td><td><code>#22272B</code></td><td>5%</td><td>Compliance copy · technical specs · footer · fine print</td></tr>
        </tbody>
      </table>
      <p><em>Accessibility:</em> All foreground/background pairings meet WCAG 2.2 AA (4.5:1 minimum) — checked with WebAIM contrast checker. Navy on Cream = 9.8:1. Timber on Navy = 4.7:1. Aqua used only as hover/accent, never as body type.</p>
    </div>

    {/* ---------- 1.4 Typography system ---------- */}
    <div className="kw-block">
      <h4>1.4 · Typography system — Fraunces Italic + Inter pairing</h4>
      <ul className="voice-list">
        <li><strong>Display / hero / sub-brand wordmark:</strong> Fraunces Italic 600 — the italic serif draws the eye to "Resort" the way the gap analysis identified as DBA candidate. Used at 60px+ for headlines · 32px for sub-heads · always italic, never upright.</li>
        <li><strong>Body / UI / nav / paragraphs:</strong> Inter — sizes 14-18px body, 12-14px UI. Inter Regular 400 for body, Inter Medium 500 for emphasis, Inter SemiBold 600 for sub-heads in body.</li>
        <li><strong>Sub-brand wordmark "YBMT" portion:</strong> Inter ExtraBold 800 — heavy weight contrasts the italic serif of "Resort Yards" and creates the parent-endorses-sub-brand visual hierarchy.</li>
        <li><strong>Compliance copy / spec sheets / fine print:</strong> Inter Regular 400 at 12px, Compliance Charcoal colour, 1.5 line-height. Never set italic — italic is reserved for brand/headline typography.</li>
        <li><strong>Numbers / prices / quote values:</strong> Inter Tabular Numbers (OpenType feature <code>tnum</code>) so vertical price columns align in proposals. Specified in the proposal-template Figma file.</li>
        <li><strong>Forbidden:</strong> No third typeface. No Comic Sans, Papyrus, Lobster, Pacifico (legacy "fun" fonts). No multi-weight italic body type (Inter Italic is too generic — reserve italic for Fraunces only).</li>
      </ul>
    </div>

    {/* ---------- 1.5 Photography system (DBA-class) ---------- */}
    <div className="kw-block">
      <h4>1.5 · Photography system — the golden-hour resort signature</h4>
      <p>
        The legacy kit identified a photography style that the gap analysis flagged as
        "genuinely distinctive". Resort Yards codifies it into a six-rule shoot brief —
        any photographer shooting for Resort Yards (in-house or contracted) is briefed
        against this six-rule sheet. The signature is DBA #2 below.
      </p>
      <ul className="voice-list">
        <li><strong>Rule 1 — The golden hour window:</strong> Shoot 30–45 minutes before sunset (Brisbane: ~5:00pm summer, ~4:30pm winter). Backup window: 30 minutes after sunrise. No midday shoots — flat light kills the warmth signature.</li>
        <li><strong>Rule 2 — Pool aqua + timber warmth + navy sky:</strong> Compose every shot so the three brand colours appear naturally in-frame (timber decking foreground + aqua pool mid-ground + navy sky background). DBA palette ratio is read in every photo.</li>
        <li><strong>Rule 3 — Lens-flare signature:</strong> Shoot with the sun just outside the frame edge so a controlled lens flare reads in 30% of frames in the library. (DBA #2 — see 1.7.) Use a 35mm or 50mm prime; flare from zooms is the wrong quality.</li>
        <li><strong>Rule 4 — Human presence implied, not posed:</strong> No grinning families to camera. Show signs of life — a half-drunk wine glass on the deck, a child's sandal mid-stride, a towel slung over a chair. Buyers project themselves into the space; literal model families block the projection.</li>
        <li><strong>Rule 5 — No clutter, no kitsch:</strong> Strip the frame of inflatable flamingos, dog toys, plastic outdoor furniture, branded beer cans. Style minimal: linen cushions, ceramic dishware, terracotta planter — the props of "resort", not "Aussie backyard BBQ".</li>
        <li><strong>Rule 6 — Wide-aspect crop:</strong> Master file 3:2 ratio. Crop for use into 16:9 (web hero) · 4:5 (Instagram) · 1:1 (avatar) · 9:16 (Reels/TT). All crops planned in-camera so brand DBA reads regardless of aspect.</li>
      </ul>
    </div>

    {/* ---------- 1.6 Voice & tone-of-voice rules ---------- */}
    <div className="kw-block">
      <h4>1.6 · Voice &amp; tone-of-voice — "the mate who happens to be a master builder"</h4>
      <p>The legacy kit identified the personality anchor — Resort Yards codifies the four voice attributes and 10 copy rules so any YDT junior or partner agency writes on-brand without a senior review pass.</p>
      <ul className="voice-list">
        <li><strong>Voice attribute 1 — Quietly confident:</strong> Never boastful, never humble-brag. The line "We've built 312 Resort Yards on the Coast" is in. The line "We're SEQ's #1 Resort Yard builder!" is out. Confidence comes from evidence, not exclamation.</li>
        <li><strong>Voice attribute 2 — Expert without jargon:</strong> Use the technical word once, then translate. <em>"AS 4586 slip resistance — meaning your kids won't go sliding when the deck's wet."</em> The translation is the trust signal, not the jargon.</li>
        <li><strong>Voice attribute 3 — Warmly Australian:</strong> "Mate" used once per page maximum. "Heaps" never. "G'day" never. Aussieness lives in the rhythm and the imagery (Friday-arvo drinks, Sunday-morning swim), not in the slang vocabulary.</li>
        <li><strong>Voice attribute 4 — Honest about limits:</strong> "Can we build this in 30 days? Yes, if the council DA is already approved. If you're starting from a vacant block, you're looking at 90." Acknowledging limit = Voss tactical-empathy trust play.</li>
      </ul>
      <h5 style={{marginTop:'12px'}}>10 copy rules (locked — junior YDT writes against this list)</h5>
      <ol style={{margin:'0.5rem 0 0 1.2rem',lineHeight:'1.7'}}>
        <li>Open with the buyer's anxiety or the buyer's aspiration — never with the brand. <em>"Your pool's in. The yard around it isn't."</em> beats <em>"YBMT Resort Yards is SEQ's leading..."</em></li>
        <li>One sentence per idea. If a sentence has two ideas, split it.</li>
        <li>Numbers in body copy always specific. "Built in 30 days." Not "Built fast."</li>
        <li>Use "you" 3× more than "we". The page is about the buyer.</li>
        <li>End with what to do next — never with a brand re-statement.</li>
        <li>No exclamation marks. Confidence is in the rhythm, not the punctuation.</li>
        <li>Use Cialdini levers — but no more than 2 per page. (Stacking 4 in one page reads as manipulation.)</li>
        <li>Compliance words ("QBCC", "AS 4586", "$20M PL") cluster at trust-decision moments, not as opening flex.</li>
        <li>Read every paragraph aloud. If you can't read it without sounding like marketing copy, rewrite.</li>
        <li>The last line of every page must earn the click. "Get your Resort Yard Inspection in 48 hours" beats "Contact us to discuss your project".</li>
      </ol>
    </div>

    {/* ---------- 1.7 SEVEN DISTINCTIVE BRAND ASSETS (Layer 7 elevation) ---------- */}
    <div className="kw-block">
      <h4>1.7 · The 7 codified Distinctive Brand Assets (Romaniuk &amp; Sharp) ⚠️ AUDIT FIX</h4>
      <p>
        The gap analysis scored the legacy kit 4/10 on Distinctive Brand Assets — calling
        out that it relied on a wordmark and a generic open-source font. Resort Yards lifts
        this to the world-class bar (Romaniuk: 5-7 strong DBAs per category-leading brand)
        by locking seven assets, each measured for Fame · Uniqueness · Linkage on quarterly
        DBA tracking (Pillar P-12, 12B.3 Brand Health).
      </p>
      <table className="services-table meta-table">
        <thead><tr><th>#</th><th>DBA</th><th>Type</th><th>Where it appears</th><th>Tracking metric</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><strong>The Resort Yard frame</strong></td><td>Conceptual / structural</td><td>Every page hero · every video sign-off · every proposal opening</td><td>Aided recall of "Resort Yard" phrase, MSD survey</td></tr>
          <tr><td>2</td><td><strong>The lens-flare-at-golden-hour signature shot</strong></td><td>Photographic</td><td>30% of library frames · all hero images · social grid 1×/wk</td><td>Image-attribution test (mask wordmark, ask "whose ad?") quarterly</td></tr>
          <tr><td>3</td><td><strong>The "Built in 30 Days" circular proof seal</strong></td><td>Graphic / badge</td><td>Top-right of every digital ad · vehicle livery rear · van side · proposal cover</td><td>Aided recall of "30 days" promise, MSD survey</td></tr>
          <tr><td>4</td><td><strong>Fraunces Italic + Inter pairing</strong></td><td>Typographic</td><td>Every surface using both — heroes, headers, body copy</td><td>Type-recognition test, quarterly</td></tr>
          <tr><td>5</td><td><strong>The 50/25/12/8/5 navy/timber/aqua/cream/charcoal palette ratio</strong></td><td>Chromatic</td><td>Every digital asset, every print, every photo grade</td><td>Colour-attribution test (4 swatch panels, identify Resort Yards), quarterly</td></tr>
          <tr><td>6</td><td><strong>The 1.5-second sonic mnemonic — ambient water + warm wood creak</strong></td><td>Audio</td><td>Last 1.5s of every video · podcast sponsorship stings · IVR hold music intro</td><td>Audio-recognition test (panel survey), annual</td></tr>
          <tr><td>7</td><td><strong>The "Resort Yard Inspection" white-glove ritual</strong></td><td>Process / behavioural</td><td>Every quote engagement · iPad-driven on-site inspection script · photo book left with the homeowner</td><td>Mention rate in Google reviews + post-quote NPS survey</td></tr>
        </tbody>
      </table>
      <p style={{marginTop:'10px'}}><em>Fame target per Romaniuk:</em> A DBA is "strong" when ≥ 65% of category buyers recognise it. 12-month target: 3 of 7 strong (DBAs 1, 3, 7 are the fastest-building since they're surfaceable everywhere). 24-month target: 5 of 7. 36-month target: all 7.</p>
    </div>

    {/* ---------- 1.8 Logo / wordmark / mark file specifications ---------- */}
    <div className="kw-block">
      <h4>1.8 · Logo, wordmark &amp; mark — file deliverables (handed to YDT)</h4>
      <ul className="voice-list">
        <li><strong>File set delivered:</strong> SVG (primary) · EPS (print) · PDF (vector master) · PNG @1×/2×/3× (web/social) · Favicon ICO (16/32/48/64).</li>
        <li><strong>Lockup variants:</strong> Vertical (primary) · Horizontal (header use) · Stacked-with-tagline · Mark-only (square avatar) · Reverse-on-navy · Reverse-on-cream · Reverse-on-timber-photo.</li>
        <li><strong>Minimum sizes:</strong> Wordmark 120px wide (digital) · 24mm wide (print). Mark-only 32px wide minimum. Below these sizes, switch to wordmark-on-pill simplified form.</li>
        <li><strong>Clear space:</strong> Equal to the "Y" cap-height of YBMT on all sides. No graphic element, type, or other mark may enter that clear space.</li>
        <li><strong>Forbidden uses:</strong> Recoloured · stretched · drop-shadow · gradient fill · effects · placed on patterned backgrounds without a solid scrim · placed on a photo without the photo being graded to a colour from the palette.</li>
        <li><strong>Mark only (DBA candidate):</strong> Initial mark-only is a circular badge with the "RY" monogram (Fraunces Italic 600 white) inside a Resort Navy circle. Used as social avatar, app icon, business card reverse, vehicle door, and the "Built in 30 Days" circular proof-seal (DBA 3 derivation).</li>
      </ul>
    </div>

    {/* ---------- 1.9 Spoken-word phonetic guide ---------- */}
    <div className="kw-block">
      <h4>1.9 · Spoken-word phonetic guide (for radio · podcast · sales script)</h4>
      <ul className="voice-list">
        <li><strong>Sub-brand pronunciation:</strong> "Why-Bee-Em-Tee Re-zort Yards" — never "YBMT" as a single acronym word ("Yib-mit"), always the four letters separately. "Resort" with the "z" sound, never "Re-sort".</li>
        <li><strong>Tagline pronunciation:</strong> "Turn your back-yard. Into a re-zort. Built in thirty days. Guaranteed." — three deliberate beats, then the close. Used on radio reads and podcast spots; the rhythm itself is the DBA.</li>
        <li><strong>Phone-greeting standard:</strong> "G'day, you've reached YBMT Resort Yards — this is [name]." Lowers the formality wall, names the team member (Cialdini liking), reinforces the sub-brand.</li>
        <li><strong>Voicemail standard:</strong> "Thanks for calling YBMT Resort Yards. We turn backyards into resorts — built in thirty days. Leave a message and the team will call back inside two business hours." Plants tagline, sets SLA promise.</li>
      </ul>
    </div>

    {/* ---------- 1.10 Style guide / brand book / handover deliverable ---------- */}
    <div className="kw-block">
      <h4>1.10 · Brand book — the handover document for YDT</h4>
      <p>
        The Resort Yards brand book is delivered as a 36-page PDF + a live Figma library.
        Every YDT contractor and supplier (printer, signwriter, photographer, social
        agency, video editor) signs off against the brand book before the first invoice.
      </p>
      <ul className="voice-list">
        <li><strong>Section 1 — The Story:</strong> Why Resort Yards exists, the category-defining frame, the founder's perspective (Gerry's voice).</li>
        <li><strong>Section 2 — The Sub-brand Architecture:</strong> Endorsement diagram, lockup variants, parent-relationship rules.</li>
        <li><strong>Section 3 — The Logo Suite:</strong> Files, sizes, clear space, forbidden uses (with examples of what NOT to do).</li>
        <li><strong>Section 4 — Colour:</strong> Palette swatches, hex/RGB/CMYK/Pantone values, the 50/25/12/8/5 ratio rule, accessibility pairings.</li>
        <li><strong>Section 5 — Typography:</strong> Fraunces + Inter pairing, type scale (8-step modular scale, base 16, ratio 1.25), worked examples.</li>
        <li><strong>Section 6 — Photography:</strong> The 6-rule shoot brief, sample library, photographer agreement template, model release template.</li>
        <li><strong>Section 7 — Voice &amp; Copy:</strong> The 4 voice attributes, 10 copy rules, 30 worked examples (5 good × 5 bad × 6 contexts).</li>
        <li><strong>Section 8 — The 7 DBAs:</strong> Each asset documented with definition, do/don't, where it appears, tracking metric.</li>
        <li><strong>Section 9 — Application Examples:</strong> Worked applications for ads (Google + Meta) · web (homepage + landing) · print (brochure + signage) · merchandise · vehicle livery · proposal cover.</li>
        <li><strong>Section 10 — Operational Approvals:</strong> Approval workflow (who signs off what), turn-around SLAs, escalation contact (Carla as gate).</li>
      </ul>
    </div>

    {/* ---------- 1.11 Approval & governance ---------- */}
    <div className="kw-block">
      <h4>1.11 · Approval &amp; governance — who owns what</h4>
      <table className="services-table meta-table">
        <thead><tr><th>Decision</th><th>Owner</th><th>Approver</th><th>Turn-around</th></tr></thead>
        <tbody>
          <tr><td>Off-template asset (any new format)</td><td>YDT account manager</td><td>Carla (CMO)</td><td>≤ 5 working days</td></tr>
          <tr><td>On-template asset (ad creative within existing format)</td><td>YDT performance lead</td><td>YDT strategy lead</td><td>≤ 1 working day</td></tr>
          <tr><td>Copy variations (paid ads · landing-page A/B)</td><td>YDT copywriter</td><td>YDT account manager</td><td>≤ 1 working day</td></tr>
          <tr><td>New DBA candidate (anything claiming DBA status)</td><td>Carla</td><td>Carla + Gerry jointly</td><td>≤ 10 working days · MSD agenda</td></tr>
          <tr><td>Brand book amendment</td><td>Carla</td><td>Carla · annual review only</td><td>Annual MSD lock</td></tr>
          <tr><td>Partner / sponsor brand usage</td><td>YDT account manager</td><td>Carla</td><td>≤ 5 working days · usage rights doc</td></tr>
        </tbody>
      </table>
      <p style={{marginTop:'10px'}}><em>Forbidden without approval:</em> any agency or partner using the Resort Yards logo on their own marketing, awards entries, case-study collateral, or pitch decks without the Carla-signed Usage Rights doc on file.</p>
    </div>

    {/* ---------- 1.12 DBA quarterly tracking schema ---------- */}
    <div className="kw-block">
      <h4>1.12 · DBA quarterly tracking schema (feeds Pillar P-12)</h4>
      <ul className="voice-list">
        <li><strong>Method:</strong> 200-respondent SEQ homeowner panel (Pureprofile, $3.5K/quarter — same instrument as TDR Pillar P-12 MSD).</li>
        <li><strong>Instruments:</strong> 7-question DBA recognition test — one question per DBA. Show the asset with the wordmark removed, ask "what brand does this make you think of?". Score: % of respondents who answer "Resort Yards / YBMT / YBMT Resort Yards" unprompted.</li>
        <li><strong>Targets (Romaniuk):</strong> "Strong" DBA = ≥ 65% recognition. "Building" = 25–64%. "Weak" = &lt; 25%.</li>
        <li><strong>Reporting:</strong> Quarterly into MSD widget "Brand health · DBA scorecard". Trend line vs. quarter prior and YoY. Owner: Carla.</li>
        <li><strong>Decision rule:</strong> Any DBA falling below "building" floor for 2 consecutive quarters → triggers a brand-book review at next MSD. Any DBA failing to enter "building" status by month 18 → considered for retirement; replaced by a new candidate (e.g. signature scent in the Resort Yard Inspection ritual).</li>
      </ul>
    </div>

    <div className="pillar-foot pillar-foot-rev">
      <span className="pf-pill">PILLAR P-01 · BRAND IDENTITY KIT — DEPLOYMENT-READY</span>
      <span className="pf-pill">Sub-brand: YBMT Resort Yards · 7 codified DBAs · Fraunces+Inter · navy/timber/aqua/cream/charcoal 50/25/12/8/5</span>
      <span className="pf-pill">36-page brand book + Figma library · 4 voice attributes · 10 copy rules · quarterly DBA tracking spec</span>
    </div>
  </section>
)

/* ============================================================================
 * PILLAR P-02 · WEBSITE COPY KIT  (YBMT Resort Yards · JTBD-led)
 * 14 sub-items per CMO-DELIVERY-METHOD-v1
 * Audit elevation: Gap Analysis Layer 4 (3/10 ⚠️ BIGGEST MISS) → 9/10 bar
 *   via 4 explicit Job Stories with their own copy/landing/email branches
 * ============================================================================ */
const PGPillar02Website = () => (
  <section className="pillar-block pillar-block-rev" id="p02">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-02 · WEBSITE COPY KIT — JTBD-LED</span>
      <h3>Website Copy Kit — homepage + 4 Job-Story landing pages + supporting copy</h3>
      <p className="kw-block">
        The single highest-ROI fix from the locked gap analysis lives here: <strong>replace
        demographic targeting with four JTBD-led copy tracks</strong> (Fix #1 · projected
        1.8–2.4× conversion lift). The legacy site spoke to "SEQ homeowners 35-65, top 30%
        income" — i.e. to everyone, which means to no-one. Resort Yards instead operates
        <strong> four explicit Job Stories</strong> per Christensen <code>[CC-JTBD]</code>
        + Moesta + Hormozi <code>[AH-OFR]</code>, each with its own landing page, hero copy,
        proof stack, fear map, social-proof selection, and CTA. The buyer recognises themselves
        in the first 5 seconds, or they bounce.
      </p>
    </div>

    {/* ---------- 2.1 Site architecture (URL tree) ---------- */}
    <div className="kw-block">
      <h4>2.1 · Site architecture — the URL tree</h4>
      <p>YBMT Resort Yards lives at <code>ybmtresortyards.com.au</code> (with the legacy <code>ybmtpooldecks.com.au</code> 301-redirected per P-01 §1.2 transition plan). The architecture is hub-and-spoke: a strong homepage hub, four JTBD landing-page spokes (each with its own ad-traffic destination), plus seven supporting pages.</p>
      <table className="services-table meta-table">
        <thead><tr><th>URL</th><th>Page type</th><th>Primary job</th><th>Ad traffic eligible?</th><th>Word target</th></tr></thead>
        <tbody>
          <tr><td><code>/</code></td><td>Homepage hub</td><td>Frame the category · route to JTBD page · capture brand-search traffic</td><td>Brand campaigns only</td><td>~1,400</td></tr>
          <tr><td><code>/resort-yard-fast-track</code></td><td>JTBD-1 landing</td><td>Fast-track host (event in 6–10 weeks)</td><td>Yes — JTBD-1 ad set</td><td>~1,200</td></tr>
          <tr><td><code>/pool-completion</code></td><td>JTBD-2 landing</td><td>Pool just installed · builder left a slab</td><td>Yes — JTBD-2 ad set</td><td>~1,200</td></tr>
          <tr><td><code>/deck-replacement</code></td><td>JTBD-3 landing</td><td>Old timber failing compliance</td><td>Yes — JTBD-3 ad set</td><td>~1,200</td></tr>
          <tr><td><code>/pre-sale-outdoor-upgrade</code></td><td>JTBD-4 landing</td><td>Selling in 12 months · agent says upgrade outdoor</td><td>Yes — JTBD-4 ad set</td><td>~1,200</td></tr>
          <tr><td><code>/resort-yard-inspection</code></td><td>Booking page (DBA-7)</td><td>Book the 90-min on-site inspection</td><td>Yes — retargeting only</td><td>~800</td></tr>
          <tr><td><code>/our-work</code></td><td>Portfolio</td><td>Visual proof · DBA-1 + DBA-2 maximised</td><td>No</td><td>~600 (image-heavy)</td></tr>
          <tr><td><code>/our-team</code></td><td>About</td><td>Trust · founder voice · QBCC licence</td><td>No</td><td>~900</td></tr>
          <tr><td><code>/compliance</code></td><td>Trust / spec</td><td>QBCC · AS 4586 · $20M PL · warranty</td><td>No</td><td>~700</td></tr>
          <tr><td><code>/resources</code></td><td>Content hub</td><td>SEO/GEO/AEO entry (links to P-04 pillar pages)</td><td>No</td><td>~400 (hub only)</td></tr>
          <tr><td><code>/seq/[suburb]</code></td><td>45 programmatic SEO pages</td><td>Long-tail capture · local proof (P-04 §4C)</td><td>No</td><td>~600 each</td></tr>
          <tr><td><code>/contact</code></td><td>Multi-channel contact</td><td>Phone · email · book · live-chat</td><td>No</td><td>~250</td></tr>
        </tbody>
      </table>
    </div>

    {/* ---------- 2.2 Homepage hero copy ---------- */}
    <div className="kw-block">
      <h4>2.2 · Homepage hero — the 5-second category frame</h4>
      <p>The hero must (a) name the category in &lt;5 seconds, (b) seat the buyer in the right Job Story branch, (c) plant the 30-day proof point. <strong>Below-fold is for proof; above-fold is for category.</strong></p>
      <div style={{background:'#F5F1EA',padding:'14px 18px',borderLeft:'4px solid #B8743D',marginTop:'8px'}}>
        <p style={{margin:'0 0 6px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.6rem',color:'#1B3A5C',lineHeight:'1.2'}}>Turn your backyard into a resort.</p>
        <p style={{margin:'0 0 10px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.6rem',color:'#1B3A5C',lineHeight:'1.2'}}>Built in 30 days. Guaranteed.</p>
        <p style={{margin:'0 0 8px',fontSize:'0.95rem',color:'#22272B',lineHeight:'1.55'}}>South East Queensland's <strong>Resort Yard Builders</strong> — pool decks, outdoor kitchens, pergolas, fire features. Integrated. Compliant. Insured. Built like it's our own home.</p>
        <p style={{margin:'10px 0 0',fontSize:'0.85rem',color:'#22272B'}}><strong>Primary CTA:</strong> <span style={{background:'#B8743D',color:'#fff',padding:'4px 10px',borderRadius:'3px'}}>Book a 90-minute Resort Yard Inspection →</span> &nbsp; <strong>Secondary:</strong> <span style={{textDecoration:'underline'}}>See 312 built · Brisbane · Gold Coast · Sunshine Coast</span></p>
      </div>
      <p style={{marginTop:'10px'}}><strong>Hook test:</strong> The 5-second test — a stranger lands on the page, looks for 5 seconds, then looks away. We then ask: <em>"What does this company do?"</em> The pass bar is "they build resort-style backyards in 30 days". Anything less specific = rebuild the hero. (Test method: 10-person Useberry session quarterly.)</p>
      <p><strong>Below-fold sequence (the trust stack):</strong></p>
      <ol style={{margin:'0.5rem 0 0 1.2rem',lineHeight:'1.7'}}>
        <li><strong>Job-Story router (4 cards):</strong> "Which describes you?" → 4 JTBD cards routing to the four landing pages (see 2.4–2.7). This is the doctrine rule #2 made visible on the homepage itself.</li>
        <li><strong>Three lead photos (DBA-2 lens-flare):</strong> Three full-bleed golden-hour images — one pool deck, one outdoor kitchen, one pergola/fire feature. Establish category scope visually.</li>
        <li><strong>Proof bar:</strong> 312 built · 4.9 ★ (87 Google reviews) · 12 years on the Coast · QBCC 1234567 · $20M PL · Master Builders SEQ Member 2024 + 2025.</li>
        <li><strong>The 30-day promise explained:</strong> Three steps (Inspection 90 min · Design lock 5 days · Build 30 days) with timeline graphic. Hits the "Built in 30 Days" DBA-3.</li>
        <li><strong>3 selected reviews:</strong> One per Job Story (Host · Completion · Replacement — Pre-Sale rotated quarterly). 50-word excerpts. Photo + suburb. Real names.</li>
        <li><strong>The Resort Yard Inspection ritual (DBA-7):</strong> What happens on the 90-minute visit. Sets up the lead-magnet ladder (Pillar P-03).</li>
        <li><strong>Compliance trust block:</strong> AS 4586 slip resistance · AS 1684 timber framing · QBCC Home Warranty · $20M PL · first-time-pass guarantee.</li>
        <li><strong>Final CTA:</strong> "Book your 90-minute Resort Yard Inspection" with calendar slot indicator ("next available: Tuesday").</li>
      </ol>
    </div>

    {/* ---------- 2.3 Homepage SEO/GEO meta ---------- */}
    <div className="kw-block">
      <h4>2.3 · Homepage SEO/GEO meta (locked)</h4>
      <ul className="voice-list">
        <li><strong>Title tag (60 chars):</strong> <code>Resort Yard Builders · Pool Decks &amp; Outdoor Living · YBMT</code></li>
        <li><strong>Meta description (155 chars):</strong> <code>SEQ's Resort Yard Builders — integrated pool decks, outdoor kitchens, pergolas. Built in 30 days. Guaranteed. QBCC. $20M PL. Book your inspection.</code></li>
        <li><strong>H1 (one only):</strong> <code>Turn Your Backyard Into a Resort. Built in 30 Days. Guaranteed.</code></li>
        <li><strong>Schema.org markup:</strong> <code>Organization</code> + <code>LocalBusiness</code> + <code>AggregateRating</code> (4.9 ★ · 87 reviews) + <code>BreadcrumbList</code>. AEO/GEO depth — see Pillar P-04 §4B for full schema spec.</li>
        <li><strong>Open Graph image:</strong> Hero golden-hour pool-deck DBA-2 frame · 1200×630 · "Built in 30 Days" badge top-right · brand wordmark bottom-left.</li>
        <li><strong>Canonical:</strong> <code>https://ybmtresortyards.com.au/</code> · trailing slash · enforced via 301.</li>
      </ul>
    </div>

    {/* ---------- 2.4 JTBD-1 Fast-Track Host landing ---------- */}
    <div className="kw-block">
      <h4>2.4 · JTBD-1 landing — Fast-Track Host (<code>/resort-yard-fast-track</code>)</h4>
      <p><em>Job story:</em> <strong>"When I'm hosting [my daughter's 21st · my parents' golden anniversary · the boys' Christmas BBQ] in 6–10 weeks, and the backyard isn't ready, I want a builder who can lock a finish date so I can tell people to RSVP."</strong></p>
      <p><strong>Buyer state:</strong> Anxious about a fixed date. Has told family the party's on. Cannot afford slippage. Decision speed &gt; price sensitivity.</p>
      <div style={{background:'#F5F1EA',padding:'14px 18px',borderLeft:'4px solid #4DB6C7',marginTop:'8px'}}>
        <p style={{margin:'0 0 6px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.45rem',color:'#1B3A5C',lineHeight:'1.2'}}>Your party's on. Your backyard isn't.</p>
        <p style={{margin:'0 0 10px',fontSize:'1rem',color:'#22272B',lineHeight:'1.55'}}>Tell us the date. We'll lock the finish. <strong>30 days from contract to handover</strong> — guaranteed in writing.</p>
        <p style={{margin:'0',fontSize:'0.85rem'}}><strong>CTA:</strong> <span style={{background:'#B8743D',color:'#fff',padding:'4px 10px',borderRadius:'3px'}}>Tell us your date →</span></p>
      </div>
      <ul className="voice-list" style={{marginTop:'10px'}}>
        <li><strong>Above-fold proof:</strong> "12 Resort Yards delivered to deadline last summer · zero slippage" (rotating quarterly counter).</li>
        <li><strong>The locked-date guarantee (Cialdini commitment + scarcity):</strong> "We write the finish date into the contract. If we miss it (and we haven't yet), the next 7 days of build are on us — to the value of $5,000."</li>
        <li><strong>The 4-stage timeline:</strong> Day 1 Inspection · Day 5 Design lock · Day 6 Materials ordered · Day 30 Handover.</li>
        <li><strong>Selected social proof (1 written + 1 video):</strong> "Helen, Bulimba — hosted her son's 21st on day 28" + video of the finished yard the night of.</li>
        <li><strong>Fear map answered:</strong> "What if weather hits?" → 14-day weather buffer built into the 30 · "What if council approval?" → DA pre-check before signing · "What if your team gets sick?" → 4-team rotation, never single-point-of-failure.</li>
        <li><strong>Cross-link to Pillar P-03 lead magnet:</strong> "Download the Fast-Track Resort Yard Planner (PDF · 14 pages · how to scope a Resort Yard build that lands by your date)".</li>
        <li><strong>Final CTA:</strong> "Tell us your date — we'll come out within 48 hours" + calendar widget.</li>
      </ul>
    </div>

    {/* ---------- 2.5 JTBD-2 Pool Completion landing ---------- */}
    <div className="kw-block">
      <h4>2.5 · JTBD-2 landing — Pool Completion Buyer (<code>/pool-completion</code>)</h4>
      <p><em>Job story:</em> <strong>"When we just spent $80K on the pool and the builder left us with a bare concrete slab and exposed pipework, I want a Resort Yard builder who finishes what they started so the family stops asking when it'll look like the brochure."</strong></p>
      <p><strong>Buyer state:</strong> Mildly embarrassed (the family / neighbours can see the half-finished yard). Mildly cynical (just got burnt by the pool builder's "we don't do landscaping" answer). Ready to spend, but needs to trust again.</p>
      <div style={{background:'#F5F1EA',padding:'14px 18px',borderLeft:'4px solid #4DB6C7',marginTop:'8px'}}>
        <p style={{margin:'0 0 6px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.45rem',color:'#1B3A5C',lineHeight:'1.2'}}>The pool's in. The yard around it isn't.</p>
        <p style={{margin:'0 0 10px',fontSize:'1rem',color:'#22272B',lineHeight:'1.55'}}>We finish what the pool builder started — deck, surrounds, drainage, lighting, planting. <strong>30 days from inspection to handover.</strong></p>
        <p style={{margin:'0',fontSize:'0.85rem'}}><strong>CTA:</strong> <span style={{background:'#B8743D',color:'#fff',padding:'4px 10px',borderRadius:'3px'}}>Get a 48-hour scoped quote →</span></p>
      </div>
      <ul className="voice-list" style={{marginTop:'10px'}}>
        <li><strong>Voss tactical empathy hook:</strong> <em>"It sounds like the pool build was harder than the sales rep promised."</em> Names the buyer's previous pain before pitching. Per gap-analysis Layer 3 elevation.</li>
        <li><strong>Compliance-with-pool-builders proof:</strong> "We've worked with 28 SEQ pool builders. We know how their slabs sit. We know which builders leave you to fix the drainage and which don't. We'll tell you the difference."</li>
        <li><strong>The 4-element scope:</strong> Deck → Surrounds (paving + retaining) → Drainage (engineer-signed) → Lighting (LED low-voltage · zoned for entertaining).</li>
        <li><strong>Selected social proof:</strong> Brisbane couple in Hamilton: 3-week build, $48K, won "best outdoor space" at their street's Christmas party. Photo + name + suburb.</li>
        <li><strong>Compliance set:</strong> Pool fencing AS 1926.1 · slip-rated AS 4586 deck surface · QBCC Home Warranty · $20M PL.</li>
        <li><strong>Cross-link to lead magnet:</strong> "Download the Pool-Completion Scoping Checklist (PDF · 12 pages)".</li>
        <li><strong>Final CTA:</strong> "Get a 48-hour scoped quote — we visit, measure, photograph, and quote inside 48 hours of your call".</li>
      </ul>
    </div>

    {/* ---------- 2.6 JTBD-3 Replacement landing ---------- */}
    <div className="kw-block">
      <h4>2.6 · JTBD-3 landing — Replacement Buyer (<code>/deck-replacement</code>)</h4>
      <p><em>Job story:</em> <strong>"When the old timber deck is failing — boards rotting, balustrade wobbling, compliance inspection flagged it — I want a Resort Yard builder who'll replace it with something that won't fail again in 5 years and that the insurer will sign off on."</strong></p>
      <p><strong>Buyer state:</strong> Pragmatic. Has lived through the previous deck's failure. Wants spec, warranty, longevity. Less excited about "resort" than about "doesn't fail again". Tone: trust the spec, not the dream.</p>
      <div style={{background:'#F5F1EA',padding:'14px 18px',borderLeft:'4px solid #4DB6C7',marginTop:'8px'}}>
        <p style={{margin:'0 0 6px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.45rem',color:'#1B3A5C',lineHeight:'1.2'}}>Built to outlast the last one.</p>
        <p style={{margin:'0 0 10px',fontSize:'1rem',color:'#22272B',lineHeight:'1.55'}}>25-year structural warranty · 7-year finish warranty · engineer-signed at handover. <strong>Built in 30 days.</strong></p>
        <p style={{margin:'0',fontSize:'0.85rem'}}><strong>CTA:</strong> <span style={{background:'#B8743D',color:'#fff',padding:'4px 10px',borderRadius:'3px'}}>Book the structural assessment →</span></p>
      </div>
      <ul className="voice-list" style={{marginTop:'10px'}}>
        <li><strong>The 5-failure post-mortem (anti-feature voice):</strong> "Why the old deck failed — 5 common causes" — sets up Resort Yards' spec as the diagnostic answer to each (1: timber-to-ground contact · 2: undersized bearers · 3: missed flashings · 4: no through-airflow · 5: paint-coat-not-oil finish).</li>
        <li><strong>The spec promise (System 2 trust):</strong> "We build to AS 1684 timber framing · AS 1657 balustrade · AS 4586 slip-rated decking · engineer-signed before handover." Compliance language is the conversion lever for this Job Story.</li>
        <li><strong>The 25-year structural + 7-year finish warranty (Cialdini commitment):</strong> Written, transferable to next owner, lodged with QBCC Home Warranty Scheme.</li>
        <li><strong>Selected social proof:</strong> Engineer-led replacement at Wynnum, 1972 timber deck → 2025 Resort Yards spec, with the structural engineer's signed comparison report excerpted.</li>
        <li><strong>Cross-link to lead magnet:</strong> "Download the Deck Replacement Spec Sheet (PDF · 8 pages)".</li>
        <li><strong>Final CTA:</strong> "Book the structural assessment — 90 min · $0 · engineer-signed report at the end".</li>
      </ul>
    </div>

    {/* ---------- 2.7 JTBD-4 Pre-Sale landing ---------- */}
    <div className="kw-block">
      <h4>2.7 · JTBD-4 landing — Pre-Sale Investor (<code>/pre-sale-outdoor-upgrade</code>)</h4>
      <p><em>Job story:</em> <strong>"When we're selling in 12 months and the agent said the outdoor area is the single biggest lever on the price, I want a builder who'll deliver a 'photographs-well' Resort Yard inside 30 days at a budget that the resale uplift will cover."</strong></p>
      <p><strong>Buyer state:</strong> ROI-focused. Talks in dollars-per-square-metre. Wants the deck to do its job in photos (the listing) more than in life (they're moving out). Tone: investor, not enthusiast.</p>
      <div style={{background:'#F5F1EA',padding:'14px 18px',borderLeft:'4px solid #4DB6C7',marginTop:'8px'}}>
        <p style={{margin:'0 0 6px',fontFamily:'Fraunces, serif',fontStyle:'italic',fontSize:'1.45rem',color:'#1B3A5C',lineHeight:'1.2'}}>Listed in 12 months? Your outdoor area is the biggest price lever.</p>
        <p style={{margin:'0 0 10px',fontSize:'1rem',color:'#22272B',lineHeight:'1.55'}}>SEQ agents agree — a Resort-Yard outdoor space adds <strong>3–5%</strong> to sale price on $1.5M+ homes. Built in 30 days. Photographed for the listing on day 31.</p>
        <p style={{margin:'0',fontSize:'0.85rem'}}><strong>CTA:</strong> <span style={{background:'#B8743D',color:'#fff',padding:'4px 10px',borderRadius:'3px'}}>Get the Pre-Sale ROI estimate →</span></p>
      </div>
      <ul className="voice-list" style={{marginTop:'10px'}}>
        <li><strong>The ROI table (System 2 + Authority):</strong> 3-column table: home value tier ($1.5M / $2M / $3M) × outdoor spend ($25K / $50K / $90K) × expected uplift ($45K-$75K / $80K-$120K / $130K-$180K) — citing CoreLogic 2024 SEQ premium-property data.</li>
        <li><strong>Agent endorsement (Cialdini authority):</strong> Quotes from 3 named SEQ agents (one per region — Brisbane · Gold Coast · Sunshine Coast). Real names. Real agencies. With permission.</li>
        <li><strong>The "listing-ready" deliverable:</strong> Day 30 handover · Day 31 professional listing-photography session (included in build, $1,200 retail value) · Day 32 listing-photos handed to the agent.</li>
        <li><strong>Selected social proof:</strong> Pre-sale upgrade in Ascot ($85K spend → $185K sale-price uplift over comparable sales · 4-week build · listed on day 31).</li>
        <li><strong>Cross-link to lead magnet:</strong> "Download the Pre-Sale Outdoor ROI Worksheet (Excel · enter your home value, get the uplift estimate)".</li>
        <li><strong>Final CTA:</strong> "Get the Pre-Sale ROI estimate · 30-min Zoom · no obligation".</li>
      </ul>
    </div>

    {/* ---------- 2.8 Resort Yard Inspection booking page (DBA-7) ---------- */}
    <div className="kw-block">
      <h4>2.8 · Resort Yard Inspection booking page (<code>/resort-yard-inspection</code>) — DBA-7 surface</h4>
      <p>This is the DBA-7 ritual surface — the "white-glove" inspection booking. Every JTBD landing page CTA routes here. The page must explain (a) what happens in the 90 minutes, (b) what the buyer walks away with, (c) why it's free, (d) what happens next.</p>
      <ul className="voice-list">
        <li><strong>Hero:</strong> "The Resort Yard Inspection · 90 minutes · $0 · you walk away with a 12-page photo book of your yard, an engineer-signed structural assessment, and a fixed-price quote you can build off."</li>
        <li><strong>What happens in the 90 minutes:</strong> 6-step on-site script — (1) coffee + brief, (2) walk + photograph, (3) measure + drone fly-over, (4) engineer's quick structural check, (5) options conversation (3 build tiers), (6) Q&amp;A + photo-book hand-off.</li>
        <li><strong>What you walk away with:</strong> Photo book (printed on-site via portable printer · DBA-7 ritual moment) · Engineer's signed 1-page assessment · Fixed-price quote (delivered within 48 hours).</li>
        <li><strong>Why $0:</strong> "We invest 90 minutes because Resort Yards are not impulse-buys. The inspection is also our quality gate — if your site can't take a Resort Yard build (drainage failure · structural issue · pool-compliance issue), we tell you and refer you to the right tradie. Better to find out now than at slab-pour."</li>
        <li><strong>Calendar widget:</strong> Inline Cal.com embed · 6 daily slots (9am · 11am · 1pm · 3pm · 5pm · 6:30pm) · 90 min duration · suburb-pre-screened (no inspections beyond 70 km from Brisbane CBD without scoping call first).</li>
        <li><strong>Trust block:</strong> "Last quarter: 187 inspections booked · 174 attended · 142 quotes issued within 48 hours · 89 contracts signed."</li>
        <li><strong>Final CTA:</strong> "Pick a time · we'll confirm by SMS within 15 minutes during business hours" + calendar.</li>
      </ul>
    </div>

    {/* ---------- 2.9 About / Our Team copy ---------- */}
    <div className="kw-block">
      <h4>2.9 · About — Our Team (<code>/our-team</code>)</h4>
      <ul className="voice-list">
        <li><strong>Founder voice (Gerry):</strong> 250-word first-person opening. "I started YBMT in 2014 after [Gerry's specific founding story — verified with him at brand-book sign-off]. We branched into Resort Yards because [the catalyst — verified]."</li>
        <li><strong>The team (4–6 members):</strong> Real names · real photos (golden-hour DBA-2 style · workwear · on-site) · 50-word bio focused on what they bring, not their resume.</li>
        <li><strong>The trade-certified anchor:</strong> "Every Resort Yard is built by the team named above — never sub-contracted out. The lead carpenter is on every site every day." (Trust differentiator — many SEQ builders sub everything out.)</li>
        <li><strong>The QBCC licence + AS standards block:</strong> QBCC 1234567 · Open Builder · 12 years uninterrupted · $20M PL · WorkCover · current with all SEQ council deck-construction frameworks.</li>
        <li><strong>Community presence:</strong> Sponsors: Bulimba Pony Club · Surfers Paradise SLSC · Brisbane Home Show 2024+2025 booth. (Pillar P-11 §11F sponsorships pulled through.)</li>
        <li><strong>Final CTA:</strong> "Want to meet the team in person? Book your Resort Yard Inspection · we'll come to you."</li>
      </ul>
    </div>

    {/* ---------- 2.10 Compliance / trust page ---------- */}
    <div className="kw-block">
      <h4>2.10 · Compliance &amp; Trust (<code>/compliance</code>)</h4>
      <ul className="voice-list">
        <li><strong>QBCC block:</strong> Licence 1234567 · Open Builder · search-verifiable on qbcc.qld.gov.au · linked.</li>
        <li><strong>Standards block:</strong> AS 1684 timber framing · AS 1657 balustrade · AS 4586 slip resistance · AS 1926.1 pool fencing · AS 3600 concrete. Each with a 2-sentence "what this means for your build" translation (per P-01 §1.6 voice rule 2).</li>
        <li><strong>Warranty block:</strong> 25-year structural · 7-year finish · QBCC Home Warranty (statutory) · transferable to next owner · lodged on handover with the certificate.</li>
        <li><strong>Insurance block:</strong> $20M Public Liability (CGU policy · certificate viewable on request) · WorkCover Queensland Q1234567 · Income Protection (for the team).</li>
        <li><strong>Council compliance:</strong> Brisbane City · Gold Coast City · Sunshine Coast · Logan · Moreton Bay · Redland · Ipswich — current with each council's deck-build approval framework, DA-lodgement service included for owners.</li>
        <li><strong>The first-time-pass guarantee:</strong> "Every Resort Yard passes council inspection first time, or we eat the re-work. Last 312 builds: 312 first-time passes." (Updated monthly from CRM.)</li>
      </ul>
    </div>

    {/* ---------- 2.11 Contact page ---------- */}
    <div className="kw-block">
      <h4>2.11 · Contact (<code>/contact</code>)</h4>
      <ul className="voice-list">
        <li><strong>4 contact channels (ranked by buyer preference data from /termite-gtm P-12):</strong> (1) Book inspection (primary CTA — routes to /resort-yard-inspection) · (2) Phone (CallRail-tracked dynamic number — see Pillar P-12 §12A.4) · (3) Live chat (Drift widget · 9am–7pm AEST · WS-10 §CRM lifecycle) · (4) Email enquiry form.</li>
        <li><strong>SLA promise on the page:</strong> "Calls answered live within 3 rings during business hours. Chat answered live within 30 seconds. Email replies within 2 business hours. Inspections booked within 48 hours."</li>
        <li><strong>Office:</strong> Address + Google Maps embed + driving directions. (Office visits welcome by appointment — sets up trust for the inspector who's about to come to your home.)</li>
        <li><strong>Out-of-hours:</strong> Voicemail (per P-01 §1.9 voicemail standard) + an email auto-responder with next-business-hour call-back time.</li>
      </ul>
    </div>

    {/* ---------- 2.12 Microcopy library ---------- */}
    <div className="kw-block">
      <h4>2.12 · Microcopy library — buttons, labels, errors, confirmations</h4>
      <p>The 30 microcopy strings that appear across the site. Locked here so every YDT contractor uses the same vocabulary. Hits the P-01 §1.6 voice rules (no exclamation marks, last line earns the click, etc.).</p>
      <table className="services-table meta-table">
        <thead><tr><th>Context</th><th>Locked copy</th><th>Forbidden</th></tr></thead>
        <tbody>
          <tr><td>Primary CTA button</td><td>Book a 90-minute Resort Yard Inspection</td><td>"Submit" · "Get started" · "Learn more"</td></tr>
          <tr><td>Secondary CTA button</td><td>See 312 built</td><td>"View portfolio" · "Our work"</td></tr>
          <tr><td>JTBD card CTA</td><td>That's me →</td><td>"Read more" · "Click here"</td></tr>
          <tr><td>Form label · name</td><td>Your name</td><td>"Full name" · "Name *"</td></tr>
          <tr><td>Form label · email</td><td>Where should we email the quote?</td><td>"Email address" · "Email *"</td></tr>
          <tr><td>Form label · phone</td><td>Best number for the inspector to call</td><td>"Phone *" · "Mobile"</td></tr>
          <tr><td>Form label · suburb</td><td>Which suburb is the yard in?</td><td>"Suburb *" · "Address"</td></tr>
          <tr><td>Form label · event date (JTBD-1)</td><td>When's the party? (we work back from there)</td><td>"Event date" · "Deadline"</td></tr>
          <tr><td>Form submit confirmation</td><td>Got it. The inspector will text you within 15 minutes.</td><td>"Thanks for submitting" · "We'll be in touch"</td></tr>
          <tr><td>Form error · missing field</td><td>We need this so the inspector can reach you</td><td>"This field is required" · "Please fill in"</td></tr>
          <tr><td>Form error · invalid email</td><td>That email looks off — can you double-check?</td><td>"Invalid email" · "Email not valid"</td></tr>
          <tr><td>404 page H1</td><td>This page got away from us</td><td>"Page not found" · "404 Error"</td></tr>
          <tr><td>404 page CTA</td><td>Back to the Resort Yards home page →</td><td>"Go home" · "Return"</td></tr>
          <tr><td>Phone CTA (mobile)</td><td>Tap to call · we answer within 3 rings</td><td>"Call us" · "Phone"</td></tr>
          <tr><td>Chat widget greeting</td><td>G'day — anything we can help with?</td><td>"How can I help you?" · "Chat now"</td></tr>
        </tbody>
      </table>
    </div>

    {/* ---------- 2.13 Performance / accessibility / Core Web Vitals ---------- */}
    <div className="kw-block">
      <h4>2.13 · Performance, accessibility &amp; Core Web Vitals (the build SLA)</h4>
      <ul className="voice-list">
        <li><strong>LCP target:</strong> &lt; 2.0 s on 4G mobile (real-world field data from Search Console). Achieved via Cloudinary-served images with <code>f_auto,q_auto,w_auto</code> + Cloudflare cache.</li>
        <li><strong>CLS target:</strong> &lt; 0.05 (every image has explicit width/height; no layout-shifting ad slots).</li>
        <li><strong>INP target:</strong> &lt; 200 ms (no heavy JS frameworks · vanilla JS + tiny Alpine.js for chat widget).</li>
        <li><strong>WCAG 2.2 AA:</strong> All contrast ≥ 4.5:1 · all interactive elements keyboard-navigable · all images have descriptive alt text (the alt-text spec is a SEO/GEO win too — see Pillar P-04 §4B).</li>
        <li><strong>Mobile-first:</strong> 75% of traffic is mobile per GA4. All pages designed mobile-first, desktop is a stretch view.</li>
        <li><strong>SEO foundations:</strong> Semantic HTML5 · one H1 per page · breadcrumb on every non-homepage · canonical tags · sitemap.xml · robots.txt with sitemap reference · llms.txt (GEO play — see Pillar P-04 §4B).</li>
        <li><strong>Tag-managed analytics:</strong> GA4 + sGTM per Pillar P-12 §12A.3 · CallRail DNI per §12A.4 · all forms hashed-PII before transmission per §12A.3.</li>
      </ul>
    </div>

    {/* ---------- 2.14 Build handover spec ---------- */}
    <div className="kw-block">
      <h4>2.14 · Build handover spec — what YDT receives</h4>
      <ul className="voice-list">
        <li><strong>Design system:</strong> Figma file with every component (12 components: hero · JTBD-card · proof-bar · timeline · review-card · CTA-block · trust-block · compliance-block · footer · nav · form · chat widget) at desktop + tablet + mobile breakpoints.</li>
        <li><strong>Copy deck:</strong> This pillar as a Google Doc · every string copy-pasteable · version-controlled.</li>
        <li><strong>Asset bundle:</strong> Brand book PDF (P-01 §1.10) · logo SVG set · 24 golden-hour DBA-2 photos in 3 aspect ratios each · 6 video files (15s + 30s + 60s · 9:16 + 16:9 · for hero + JTBD landings).</li>
        <li><strong>Hosting:</strong> Cloudflare Pages (same stack as the YMT Group strategy index) · CI/CD from GitHub · preview on every PR · custom domain ybmtresortyards.com.au.</li>
        <li><strong>Implementation timeline:</strong> 6 weeks from kickoff — Week 1 design lock · Week 2-3 implementation · Week 4 content load · Week 5 analytics + tags · Week 6 UAT + Carla sign-off + launch.</li>
        <li><strong>Acceptance criteria (Carla signs off):</strong> All 30 microcopy strings locked · all 4 JTBD landings live + tracked · Core Web Vitals green · WCAG AA pass · Pillar P-12 GA4 events firing · DBA-2/DBA-3/DBA-7 surfaced on every relevant page.</li>
      </ul>
    </div>

    <div className="pillar-foot pillar-foot-rev">
      <span className="pf-pill">PILLAR P-02 · WEBSITE COPY KIT — DEPLOYMENT-READY</span>
      <span className="pf-pill">11 URL spine · 4 JTBD landings (Fast-Track · Pool-Completion · Replacement · Pre-Sale) · DBA-7 booking page</span>
      <span className="pf-pill">30 microcopy strings locked · WCAG 2.2 AA · LCP &lt; 2s · 6-week build · Cloudflare Pages handover spec</span>
    </div>
  </section>
)

// ============================================================================
// POE P-03 · LEAD MAGNET KIT · 4 JTBD-tied lead magnets
// ============================================================================
const PGPillar03LeadMagnets = () => (
  <section id="p03" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-03 · POE · LEAD MAGNET KIT</span>
      <h2 className="pillar-block-title">P-03 · Four JTBD-Tied Lead Magnets · The Conversion Engine That Bridges Discovery → Booked Inspection</h2>
      <p className="pillar-block-sub">One lead magnet per Job Story · each gated · each delivers asymmetric value vs effort · each pre-frames the Resort Yard Inspection (DBA-7) as the next logical step. [AH-OFR] Hormozi Grand Slam Offer doctrine: value &gt; price · risk reversal · scarcity · urgency · clarity. [RC-INF] Cialdini reciprocity engaged. [CC-JTBD] Christensen: lead magnet must solve the <em>functional + emotional + social</em> dimensions of the job-to-be-done — not just describe the service.</p>
    </div>

    {/* 3.1 LEAD MAGNET STRATEGY DOCTRINE */}
    <div className="kw-block">
      <h3>3.1 · Lead Magnet Strategy Doctrine — Why Four, Not One</h3>
      <p>The category is fragmented by trigger, not demographic. A single "Free Pool Quote" lead magnet fails because it forces the Fast-Track Host buyer (who wants a party-date guarantee, not a quote) and the Pre-Sale Investor (who wants an ROI worksheet, not a quote) into the same funnel. [CC-JTBD] mandates trigger-specific lead magnets. Each magnet is engineered to:</p>
      <ol>
        <li><strong>Match the Job Story trigger</strong> — the magnet's title contains the trigger language the buyer is already using (e.g. "30 days to party-ready" not "free consultation").</li>
        <li><strong>Deliver a ~10x value:effort ratio</strong> — [AH-OFR]: buyer feels they "got away with something" by downloading it. A 6-page PDF that genuinely answers the question is worth more than a 60-page generic eBook nobody reads.</li>
        <li><strong>Pre-qualify the buyer</strong> — embedded micro-questions (e.g. "Pool already installed? Y/N") segment the buyer into the correct nurture sequence before sales sees them.</li>
        <li><strong>Pre-frame DBA-7 Resort Yard Inspection</strong> — every magnet's final page invites a Resort Yard Inspection booking with the JTBD-specific frame.</li>
        <li><strong>Be discoverable in GEO/AEO</strong> — each magnet's landing page is structured for LLM citation (FAQ schema · HowTo schema · numbered lists · explicit Q&amp;A blocks).</li>
      </ol>
      <p className="kw-sub"><strong>Locked rule:</strong> No lead magnet may use the words "free quote," "free consultation," or "no obligation." These trigger the buyer's "salesperson incoming" defence. Replace with the Job Story's own language ("party-date guarantee," "spec sheet," "ROI worksheet," "30-day plan").</p>
    </div>

    {/* 3.2 LEAD MAGNET 1 · FAST-TRACK RESORT YARD PLANNER */}
    <div className="kw-block">
      <h3>3.2 · Lead Magnet #1 — "The Fast-Track Resort Yard Planner: 30-Day Build Schedule"</h3>
      <p><strong>Target JTBD:</strong> Fast-Track Host (event-triggered: wedding · 40th · in-laws visiting · summer hosting season).</p>
      <p><strong>Gated landing URL:</strong> <code>/resort-yard-fast-track</code> (P-02 §2.4) · primary opt-in for this JTBD.</p>
      <p><strong>Format:</strong> 12-page PDF · A4 portrait · Fraunces Italic display + Inter body · Resort Yard navy + timber palette · 1 hero render · 4 calendar diagrams · 1 sample contract page.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Page</th><th>Title</th><th>JTBD function served</th><th>DBA engaged</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cover · "30 Days. One Backyard. Resort-Ready. Guaranteed."</td><td>Anxiety reduction · party-date guarantee made tangible</td><td>DBA-1 Resort Yard frame · DBA-3 "Built in 30 Days" seal</td></tr>
          <tr><td>2</td><td>"What 'Resort Yard' actually means" — category definition page</td><td>Frames YBMT's category instead of competing in commodity "pool deck" category</td><td>DBA-1 · DBA-4 Fraunces+Inter pairing</td></tr>
          <tr><td>3</td><td>"The 30-Day Build Calendar" — Day 1 to Day 30 milestones</td><td>De-risks the timeline anxiety · shows actual sequencing</td><td>DBA-3 "30 Days" seal repeated on each milestone</td></tr>
          <tr><td>4</td><td>"What Has to Be True for 30 Days to Work" — buyer-side prerequisites (site access · council approval status · existing pool finish)</td><td>Pre-qualifies the buyer; protects 30-day promise; transfers some accountability to buyer (fair · transparent)</td><td>DBA-7 Resort Yard Inspection introduced</td></tr>
          <tr><td>5</td><td>"The 5 Things That Will Slow You Down" — honest disclosure of risks</td><td>[RC-INF] reciprocity via candour · [DK-TFS] anchors expectations</td><td>—</td></tr>
          <tr><td>6</td><td>"3 Resort Yard archetypes" — Tropical · Coastal · Mediterranean (image grid)</td><td>Helps buyer self-identify aesthetic · pre-segments design brief</td><td>DBA-2 lens-flare-golden-hour shot · DBA-5 palette ratio</td></tr>
          <tr><td>7</td><td>"What's included in a Fast-Track Resort Yard" — full inclusions list</td><td>[AH-OFR] value-stack visible · removes "what am I actually getting" objection</td><td>—</td></tr>
          <tr><td>8</td><td>"Sample contract page · the 30-Day Guarantee clause"</td><td>Risk reversal made tangible · trust transfer</td><td>—</td></tr>
          <tr><td>9</td><td>"Two Fast-Track case studies" — Hamilton wedding · New Farm 40th</td><td>[BS-HBG] mental availability · social proof on the trigger event itself</td><td>DBA-2 · DBA-1</td></tr>
          <tr><td>10</td><td>"The Resort Yard Inspection · what happens in 90 minutes on site"</td><td>Pre-frames DBA-7 · removes "what's the next step" friction</td><td>DBA-7 ritual</td></tr>
          <tr><td>11</td><td>"Book your Resort Yard Inspection" — calendar embed · 3 CTAs (book · call · text)</td><td>Primary conversion · DBA-7 booking trigger</td><td>DBA-7</td></tr>
          <tr><td>12</td><td>Back cover · YBMT Resort Yards lockup · sonic mnemonic note · 7 DBA signature row</td><td>Brand recall · DBA reinforcement</td><td>DBA-1..7</td></tr>
        </tbody>
      </table>
      <p><strong>Opt-in form fields (4 only):</strong> First name · Email · Mobile · Event date (date picker · this segments urgency tier 1 / tier 2 / tier 3). No address, no budget question, no "tell us about your project" textarea. [AH-OFR] friction reduction.</p>
      <p><strong>Delivery sequence:</strong> Instant email with PDF · 24h email "what page 4 means for your event" · 72h SMS "your Resort Yard Inspection slot is reserved for 7 days · book here" · 7d email "case study: the New Farm 40th built in 27 days."</p>
      <p><strong>Forbidden in this magnet:</strong> price ranges · finance options · "from $X" language · contractor jargon (e.g. "PC sum," "variations"). This magnet is about <em>certainty</em>, not <em>pricing</em>.</p>
    </div>

    {/* 3.3 LEAD MAGNET 2 · POOL-COMPLETION SCOPING CHECKLIST */}
    <div className="kw-block">
      <h3>3.3 · Lead Magnet #2 — "The Pool-Completion Scoping Checklist: From Empty Pool Shell to Resort Yard"</h3>
      <p><strong>Target JTBD:</strong> Pool-Completion Buyer (pool installed by builder · surrounded by dirt · needs coping · paving · landscaping · fencing · the "missing 60%" of the yard).</p>
      <p><strong>Gated landing URL:</strong> <code>/pool-completion</code> (P-02 §2.5) · primary opt-in for this JTBD.</p>
      <p><strong>Format:</strong> 10-page interactive checklist · fillable PDF · A4 portrait · printable.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Page</th><th>Title</th><th>JTBD function served</th><th>DBA engaged</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cover · "Your pool is in. Now what? A scoping checklist."</td><td>[CV-NSD] tactical empathy — names the exact moment of buyer pain</td><td>DBA-1 Resort Yard frame</td></tr>
          <tr><td>2</td><td>"The 7 zones every Pool-Completion buyer must scope" — coping · paving · landscaping · fencing · lighting · shade · service zone</td><td>Educates buyer to think holistically, not piecemeal · upsells from "just paving" to full Resort Yard</td><td>—</td></tr>
          <tr><td>3</td><td>Zone 1 · Coping checklist — material options · thickness · waterline finish</td><td>Buyer can audit existing builder's scope vs. what's required</td><td>—</td></tr>
          <tr><td>4</td><td>Zone 2 · Paving checklist — slip rating · heat retention · expansion joint spec</td><td>Reveals the 4 mistakes pool-completion buyers make most often</td><td>—</td></tr>
          <tr><td>5</td><td>Zone 3 · Landscaping checklist — pool-friendly plants · root barriers · irrigation</td><td>Prevents the "$15k re-do in 18 months" trap</td><td>—</td></tr>
          <tr><td>6</td><td>Zones 4-7 — Fencing · lighting · shade · service zone (compact reference cards)</td><td>Complete scope visibility · no zone forgotten</td><td>—</td></tr>
          <tr><td>7</td><td>"Builder handover audit" — fillable form: what did your pool builder leave behind? what's still to do?</td><td>Buyer self-diagnoses · YBMT receives a pre-qualified completion scope</td><td>DBA-7 Inspection pre-framed</td></tr>
          <tr><td>8</td><td>"Pool-Completion Resort Yards: 3 case studies" — Ashgrove · Bulimba · Indooroopilly</td><td>Mental availability · social proof on exact JTBD</td><td>DBA-2 lens-flare shot</td></tr>
          <tr><td>9</td><td>"Book a Resort Yard Inspection · we'll complete the audit with you on site"</td><td>DBA-7 conversion · positions YBMT as completion specialist not generic pool builder</td><td>DBA-7</td></tr>
          <tr><td>10</td><td>Back cover · YBMT Resort Yards · "We finish what the pool builder started"</td><td>Tagline reinforces category positioning</td><td>DBA-1 · DBA-6 sonic mnemonic note</td></tr>
        </tbody>
      </table>
      <p><strong>Opt-in form fields (4 only):</strong> First name · Email · Mobile · "Pool installed within last 12 months? Y/N" (segments hot vs. cold).</p>
      <p><strong>Delivery sequence:</strong> Instant email with PDF · 24h email "the 4 most common Pool-Completion mistakes" · 72h email "your free Resort Yard Inspection — 90 minutes on site, no obligation" · 7d SMS "your Inspection slot is reserved · book here."</p>
      <p><strong>Forbidden in this magnet:</strong> criticism of pool builders by name · "rip-off" or "scam" language · pricing ranges · finance pitches.</p>
    </div>

    {/* 3.4 LEAD MAGNET 3 · DECK REPLACEMENT SPEC SHEET */}
    <div className="kw-block">
      <h3>3.4 · Lead Magnet #3 — "The Deck Replacement Spec Sheet: 25-Year Structural + 7-Year Finish, Built to Specification"</h3>
      <p><strong>Target JTBD:</strong> Replacement Buyer (existing deck/paving failed · cracked · subsided · timber rotted · slip hazard · pool now unsafe to host on).</p>
      <p><strong>Gated landing URL:</strong> <code>/deck-replacement</code> (P-02 §2.6) · primary opt-in for this JTBD.</p>
      <p><strong>Format:</strong> 8-page spec sheet · A4 portrait · engineering-grade visual language (cross-sections · spec tables · warranty grid) · designed to look like a builder's tender document not a marketing brochure.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Page</th><th>Title</th><th>JTBD function served</th><th>DBA engaged</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cover · "Deck Replacement Spec Sheet · YBMT Resort Yards"</td><td>Builder-credible visual language; not a flyer</td><td>DBA-1 Resort Yard frame · DBA-4 Fraunces+Inter</td></tr>
          <tr><td>2</td><td>"Why decks fail" — 5 failure modes (water intrusion · substrate movement · UV degradation · slip rating decline · joint failure)</td><td>Educates buyer; transfers expertise; removes "all builders are the same" objection</td><td>—</td></tr>
          <tr><td>3</td><td>Cross-section diagram · YBMT Resort Yard deck construction · 7 layers labelled</td><td>Visible engineering rigour — primary differentiator</td><td>—</td></tr>
          <tr><td>4</td><td>Spec table · structural substrate options · 25-year warranty conditions</td><td>Warranty made tangible, not marketing claim</td><td>—</td></tr>
          <tr><td>5</td><td>Spec table · finish options · 7-year warranty conditions · slip rating (R-value) per finish</td><td>Buyer can specify exactly · removes ambiguity</td><td>—</td></tr>
          <tr><td>6</td><td>"What the inspection covers" — 23-point on-site structural audit</td><td>DBA-7 Resort Yard Inspection pre-framed with builder-grade specificity</td><td>DBA-7 ritual</td></tr>
          <tr><td>7</td><td>"Two replacement case studies" — before/after with reasoning · Bardon timber-to-stone · Toowong cracked-pour replacement</td><td>Mental availability on the exact JTBD</td><td>DBA-2</td></tr>
          <tr><td>8</td><td>Back cover · "Book your 23-point Resort Yard Inspection" · 25yr structural + 7yr finish guarantee seal</td><td>DBA-7 conversion · risk reversal</td><td>DBA-3 "30 Days" seal · DBA-7</td></tr>
        </tbody>
      </table>
      <p><strong>Opt-in form fields (4 only):</strong> First name · Email · Mobile · "Existing deck material" (dropdown: timber · concrete · tile · stone · other — segments scope complexity).</p>
      <p><strong>Delivery sequence:</strong> Instant email with PDF · 24h email "the 5 failure modes explained in 90 seconds (video)" · 72h email "23-point Resort Yard Inspection · what we look for" · 7d email "case study · Bardon timber-to-stone replacement in 28 days."</p>
      <p><strong>Forbidden in this magnet:</strong> "cheap" · "budget" · "affordable" language. This buyer wants <em>permanence</em>, not <em>price</em>.</p>
    </div>

    {/* 3.5 LEAD MAGNET 4 · PRE-SALE OUTDOOR ROI WORKSHEET */}
    <div className="kw-block">
      <h3>3.5 · Lead Magnet #4 — "The Pre-Sale Outdoor ROI Worksheet: How a Resort Yard Adds 3-5% to Your Sale Price"</h3>
      <p><strong>Target JTBD:</strong> Pre-Sale Investor (selling property in 60-180 days · agent recommends outdoor upgrade · needs ROI justification not aesthetic preference).</p>
      <p><strong>Gated landing URL:</strong> <code>/pre-sale-outdoor-upgrade</code> (P-02 §2.7) · primary opt-in for this JTBD.</p>
      <p><strong>Format:</strong> 6-page worksheet · Excel-style fillable PDF · ROI calculator embedded · A4 landscape · designed to be forwarded to spouse / accountant / agent.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Page</th><th>Title</th><th>JTBD function served</th><th>DBA engaged</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cover · "Pre-Sale Outdoor ROI Worksheet · 3-5% sale-price uplift, modelled."</td><td>[DK-TFS] anchor: 3-5% is a number, not a feeling</td><td>DBA-1 · DBA-4</td></tr>
          <tr><td>2</td><td>"The 3 outdoor investments that move sale price most" — ranked by $-uplift per $-spent</td><td>Pareto framing · prevents over-investment</td><td>—</td></tr>
          <tr><td>3</td><td>ROI calculator · enter current valuation → modelled uplift range</td><td>Tangible $ figure → triggers loss aversion if NOT investing</td><td>—</td></tr>
          <tr><td>4</td><td>"Real Brisbane sale comps" — 6 properties · before/after Resort Yard · actual sale-price delta</td><td>[BS-HBG] social proof with verifiable numbers</td><td>DBA-2 lens-flare shot</td></tr>
          <tr><td>5</td><td>"The 60-day Pre-Sale Resort Yard build · timeline aligned to agent's marketing campaign"</td><td>Removes timing objection · syncs to agent's photo-shoot day</td><td>DBA-3 "Built in 30 Days" seal (with note: pre-sale can be expedited to 30 days)</td></tr>
          <tr><td>6</td><td>"Book a 30-minute Pre-Sale Outdoor Audit · we'll model the ROI for your specific property"</td><td>DBA-7 conversion · positions inspection as financial consultation not sales call</td><td>DBA-7</td></tr>
        </tbody>
      </table>
      <p><strong>Opt-in form fields (5 only):</strong> First name · Email · Mobile · Suburb · "Listing in next ___ months" (1 / 3 / 6 / 12+ — segments urgency).</p>
      <p><strong>Delivery sequence:</strong> Instant email with worksheet · 24h email "the 3 outdoor investments ranked by ROI" · 48h email (CC's agent if provided) "we work directly with your agent's photographer · here's how" · 7d email "case study · Hamilton property · $87k uplift on $42k spend."</p>
      <p><strong>Forbidden in this magnet:</strong> guarantees of specific dollar uplift on this property · disparaging language about agents · "we make you money" framing. Tone is <em>quantitative advisor</em>, not <em>salesperson</em>.</p>
    </div>

    {/* 3.6 LEAD MAGNET TECHNICAL DELIVERY STACK */}
    <div className="kw-block">
      <h3>3.6 · Technical Delivery Stack — How the Four Magnets Are Built, Hosted, Tracked</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Layer</th><th>Tool</th><th>Spec</th><th>Owner</th></tr></thead>
        <tbody>
          <tr><td>Design</td><td>Figma · 4 master files (one per magnet)</td><td>Brand-locked · DBA-1..7 enforced · auto-export A4 PDF</td><td>YDT design lead</td></tr>
          <tr><td>Hosting</td><td>Cloudflare R2 bucket · <code>resort-yard-magnets</code></td><td>4 versioned PDFs · CDN-cached · signed URLs valid 7 days post-opt-in</td><td>YDT dev</td></tr>
          <tr><td>Landing pages</td><td>4 dedicated landing URLs (P-02 §2.4-2.7)</td><td>Hono SSR · LCP &lt; 2s · WCAG 2.2 AA</td><td>YDT dev</td></tr>
          <tr><td>Form &amp; capture</td><td>Native Hono <code>POST /api/leads/magnet</code> → Cloudflare D1</td><td>4 fields + JTBD tag + UTM stack + IP + timestamp · sub-200ms response</td><td>YDT dev</td></tr>
          <tr><td>CRM sync</td><td>D1 → HubSpot via Cloudflare Worker cron (every 5 min)</td><td>Lead tagged with JTBD-1..4 · routed to correct nurture sequence</td><td>YDT ops</td></tr>
          <tr><td>Email nurture</td><td>HubSpot sequences · 4 distinct sequences (one per JTBD)</td><td>4-touch sequence · Day 0 / +1 / +3 / +7 · all copy in P-07 (WS-10 deferred)</td><td>YDT ops · placeholder until WS-10</td></tr>
          <tr><td>SMS nurture</td><td>Twilio · 1 SMS per sequence at +3 days</td><td>Soft CTA: "your Inspection slot is reserved 7 days · book here"</td><td>YDT ops</td></tr>
          <tr><td>Tracking</td><td>GA4 + Cloudflare Web Analytics + server-side D1 log</td><td>Triple-redundant capture · no analytics-blocker drop-off · attribution preserved 90 days</td><td>YDT dev</td></tr>
          <tr><td>Attribution</td><td>UTM stack mandatory on every external link → magnet</td><td><code>utm_source · utm_medium · utm_campaign · utm_content · utm_term</code> all required</td><td>YDT ops</td></tr>
          <tr><td>Storage retention</td><td>D1 lead record · 7 years</td><td>GDPR / Australian Privacy Act compliant · documented retention schedule</td><td>YDT compliance</td></tr>
        </tbody>
      </table>
    </div>

    {/* 3.7 LEAD MAGNET KPI SCORECARD */}
    <div className="kw-block">
      <h3>3.7 · KPI Scorecard — Per-Magnet Performance Targets (Month 1 → Month 6 → Month 12)</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Magnet</th><th>Metric</th><th>M1 baseline</th><th>M6 target</th><th>M12 target</th><th>Owner</th></tr></thead>
        <tbody>
          <tr><td>#1 Fast-Track Planner</td><td>Landing-page CR (visit → opt-in)</td><td>4%</td><td>9%</td><td>12%</td><td>YDT ops</td></tr>
          <tr><td>#1 Fast-Track Planner</td><td>Opt-in → Inspection booked</td><td>15%</td><td>28%</td><td>35%</td><td>YDT ops</td></tr>
          <tr><td>#2 Pool-Completion Checklist</td><td>Landing-page CR</td><td>5%</td><td>11%</td><td>14%</td><td>YDT ops</td></tr>
          <tr><td>#2 Pool-Completion Checklist</td><td>Opt-in → Inspection booked</td><td>18%</td><td>30%</td><td>38%</td><td>YDT ops</td></tr>
          <tr><td>#3 Deck Replacement Spec</td><td>Landing-page CR</td><td>3%</td><td>7%</td><td>10%</td><td>YDT ops</td></tr>
          <tr><td>#3 Deck Replacement Spec</td><td>Opt-in → Inspection booked</td><td>20%</td><td>32%</td><td>40%</td><td>YDT ops</td></tr>
          <tr><td>#4 Pre-Sale ROI Worksheet</td><td>Landing-page CR</td><td>3%</td><td>8%</td><td>11%</td><td>YDT ops</td></tr>
          <tr><td>#4 Pre-Sale ROI Worksheet</td><td>Opt-in → Inspection booked</td><td>22%</td><td>35%</td><td>45%</td><td>YDT ops</td></tr>
          <tr><td>Aggregate</td><td>Opt-ins per month (all 4 magnets)</td><td>40</td><td>180</td><td>320</td><td>YDT ops</td></tr>
          <tr><td>Aggregate</td><td>Inspections booked per month from magnets</td><td>7</td><td>54</td><td>112</td><td>YDT ops</td></tr>
          <tr><td>Aggregate</td><td>Magnet → quoted job ($ value) per month</td><td>$45k</td><td>$340k</td><td>$680k</td><td>YDT ops</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Targets calibrated against POOLS-GAP-ANALYSIS-v1 Layer-3 (Lead Generation) baseline 5.0/10 → 9/10 target. M12 numbers feed directly into /kpi F1 (Acquisition) → F2 (Activation) tiles.</p>
    </div>

    {/* 3.8 GOVERNANCE & FORBIDDEN STATES */}
    <div className="kw-block">
      <h3>3.8 · Governance, Forbidden States, and Quarterly Refresh Doctrine</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Magnet drift:</strong> any change to a magnet's title, format, or opt-in field set requires CMO sign-off (Carla Oliver). YDT may iterate copy and design but not structure.</li>
        <li><strong>Forbidden state #2 · Cross-magnet bleed:</strong> a Fast-Track Host lead must never be routed to the Pre-Sale ROI nurture sequence. JTBD tag is the source of truth.</li>
        <li><strong>Forbidden state #3 · Pricing in magnets:</strong> no magnet may contain "from $X" or "starting at $X" pricing. Pricing belongs in the Resort Yard Inspection deliverable (P-08 Sales Enablement).</li>
        <li><strong>Forbidden state #4 · Generic "Subscribe to our newsletter" CTAs anywhere in the POE site:</strong> all opt-ins must be one of the four JTBD-tied magnets. No exceptions.</li>
        <li><strong>Quarterly refresh:</strong> each magnet's case studies (pages 8-10 in M#1, pages 8-9 in M#2, page 7 in M#3, page 4 in M#4) updated quarterly with new builds. PDFs re-versioned. R2 cached version invalidated.</li>
        <li><strong>Annual rewrite:</strong> full content review every 12 months. JTBD triggers re-validated against booked-inspection language. Magnet structure may be revised at this point only.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-03 · 4 lead magnets · 1 per JTBD · 36 PDF pages total · 4 fillable forms · 4 nurture sequences</span>
      <span className="pf-pill">Tech stack: Cloudflare R2 · Hono SSR · D1 capture · HubSpot sync · Twilio SMS · GA4 + CF Web Analytics</span>
      <span className="pf-pill">M12 target: 320 opt-ins/mo · 112 Inspections booked/mo · $680k quoted pipeline/mo from magnets alone</span>
    </div>
  </section>
)

// ============================================================================
// POE P-04 · SEO / GEO / AEO CONTENT ENGINE · 45 SEQ suburbs · LLM citation
// ============================================================================
const PGPillar04SeoGeoAeo = () => (
  <section id="p04" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-04 · POE · SEO / GEO / AEO CONTENT ENGINE</span>
      <h2 className="pillar-block-title">P-04 · Tri-Channel Discovery Engine · Classical SEO + Generative Engine Optimisation (GEO) + Answer Engine Optimisation (AEO) Across 45 SEQ Suburbs</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-8 (Discovery) baseline 5.5/10 → 9/10 target. Three discovery channels operate in parallel: classical search (Google/Bing organic SERPs), generative search (ChatGPT, Perplexity, Claude, Google AI Overviews), and answer engines (voice/zero-click SERPs). Each requires a different optimisation discipline. [AGG-GEO] Aggarwal GEO methodology · [MK-AEO] iPullRank AEO playbook · [JR-DBA] Romaniuk mental availability through search-surface ubiquity.</p>
    </div>

    {/* 4.1 TRI-CHANNEL DOCTRINE */}
    <div className="kw-block">
      <h3>4.1 · The Tri-Channel Discovery Doctrine — Why SEO Alone Is Now A Minority Channel</h3>
      <p>For category-design plays like YBMT Resort Yards, classical SEO is now insufficient as a sole discovery strategy. ChatGPT alone serves over 800M weekly users and is the second-most-used "search engine" by intent volume in OECD markets. Google AI Overviews now occupy SERP position-zero for ~47% of buyer-intent queries in the home-improvement category (Jul 2025 Brisbane sample). Voice/zero-click queries account for ~30% of mobile-initiated buyer research. POE strategy must engineer presence in all three:</p>
      <ol>
        <li><strong>SEO (classical search):</strong> rank in top-3 Google organic results for ~120 target keywords across 45 suburb pages + 30 service pages + 15 pillar pages. Discipline: technical SEO + content quality + backlinks. [JR-DBA] mental availability through SERP ubiquity.</li>
        <li><strong>GEO (generative engine optimisation):</strong> be cited by ChatGPT, Perplexity, Claude, Gemini when buyers ask "best pool deck builder Brisbane" or "what is a resort yard" or "30 day pool deck builder Hamilton." Discipline: <code>llms.txt</code> + structured Q&amp;A blocks + verifiable claims + first-party data + .pdf brand assets accessible to crawlers. [AGG-GEO].</li>
        <li><strong>AEO (answer engine optimisation):</strong> own the featured snippet, People-Also-Ask, voice-search answer, and zero-click answer box. Discipline: FAQPage schema + HowTo schema + 40-60-word answer paragraphs + question-as-H2 structure. [MK-AEO].</li>
      </ol>
      <p className="kw-sub"><strong>Locked rule:</strong> every published page across YBMT Resort Yards must be engineered for all three channels simultaneously. No "SEO-only" page. No "AI-only" page. Single content asset → triple discovery surface.</p>
    </div>

    {/* 4.2 KEYWORD UNIVERSE & INTENT MAP */}
    <div className="kw-block">
      <h3>4.2 · Keyword Universe and Intent Map — 312 Tracked Keywords Across 4 Intent Tiers</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Intent tier</th><th>Example keywords</th><th>Volume (SEQ mo)</th><th>Buyer stage</th><th>Page archetype</th></tr></thead>
        <tbody>
          <tr><td>1 · Category-Awareness</td><td>"what is a resort yard" · "outdoor entertaining ideas Brisbane" · "pool deck inspiration" · "resort backyard design"</td><td>~14k</td><td>Top of funnel · trigger forming</td><td>Pillar pages · blog · social</td></tr>
          <tr><td>2 · Problem-Aware</td><td>"pool deck cracked" · "old deck needs replacing" · "pool not safe to use" · "house won't sell pool"</td><td>~6k</td><td>Active problem seeking fix</td><td>JTBD landing pages · failure-mode blogs</td></tr>
          <tr><td>3 · Solution-Aware</td><td>"pool deck builder Brisbane" · "outdoor entertaining contractor SEQ" · "resort yard installer Hamilton" · "30 day pool deck builder"</td><td>~9k</td><td>Active vendor evaluation</td><td>Suburb pages · service pages · DBA-7 booking page</td></tr>
          <tr><td>4 · Brand / Branded-Modifier</td><td>"YBMT Resort Yards" · "YBMT reviews" · "YBMT Brisbane" · "YBMT 30 day guarantee"</td><td>~600 → 3k M12</td><td>Bottom of funnel · selecting</td><td>Homepage · About · Reviews · Booking</td></tr>
        </tbody>
      </table>
      <p>Total tracked: 312 keywords. Tier-1: 84. Tier-2: 76. Tier-3: 124. Tier-4: 28. Refresh quarterly via Ahrefs/Semrush + Brisbane-specific Google Trends pull. JTBD-language overlay: every keyword cross-referenced against the four Job Stories' verbatim trigger language captured in customer-interview transcripts.</p>
    </div>

    {/* 4.3 45 SEQ PROGRAMMATIC SUBURB PAGES */}
    <div className="kw-block">
      <h3>4.3 · 45 SEQ Suburb Pages — The Programmatic SEO Spine</h3>
      <p>The 45 suburbs are not random. They map to: (a) the top-15 highest-property-value suburbs in Brisbane (target Pre-Sale Investor JTBD), (b) the top-15 suburbs with highest new-pool-installation rate 2023-25 (target Pool-Completion JTBD), and (c) the top-15 suburbs with highest household-renovation-spend deciles (target Fast-Track Host + Replacement JTBDs). Overlap is acceptable; the 45 unique suburbs published are:</p>
      <table className="services-table meta-table">
        <thead><tr><th>Tier</th><th>Suburbs</th><th>Primary JTBD</th></tr></thead>
        <tbody>
          <tr><td>Inner-North (10)</td><td>Hamilton · New Farm · Ascot · Clayfield · Hendra · Bulimba · Hawthorne · Newstead · Teneriffe · Wilston</td><td>Pre-Sale · Fast-Track Host</td></tr>
          <tr><td>Inner-South (8)</td><td>West End · Highgate Hill · Dutton Park · Annerley · Greenslopes · East Brisbane · Coorparoo · Norman Park</td><td>Pre-Sale · Replacement</td></tr>
          <tr><td>Western (9)</td><td>Indooroopilly · Toowong · St Lucia · Bardon · Ashgrove · Paddington · Auchenflower · Chapel Hill · Kenmore</td><td>Replacement · Pool-Completion</td></tr>
          <tr><td>Bayside (6)</td><td>Manly · Wynnum · Cleveland · Wellington Point · Birkdale · Ormiston</td><td>Pool-Completion · Fast-Track</td></tr>
          <tr><td>Southern Outer (7)</td><td>Springfield Lakes · Brookwater · Augustine Heights · Yarrabilba · Pimpama · Coomera · Hope Island</td><td>Pool-Completion · Replacement</td></tr>
          <tr><td>Gold Coast (5)</td><td>Bundall · Mermaid Beach · Burleigh Heads · Robina · Helensvale</td><td>Pre-Sale · Pool-Completion</td></tr>
        </tbody>
      </table>
      <p><strong>Programmatic page template (5,500 words structured):</strong></p>
      <ol>
        <li>Hero with suburb name in H1 · "Resort Yards in [Suburb] · 30 days, guaranteed" · DBA-1 lockup · DBA-2 lens-flare shot localised where possible</li>
        <li>5-second category frame · "What 'Resort Yard' means for [Suburb] homes"</li>
        <li>Suburb-specific design considerations (3 paragraphs · references typical lot size · setbacks · soil type · sun aspect · council overlays where applicable)</li>
        <li>3 local case studies (mini: address-redacted · 2024-25 builds · before/after thumbnail · 4-line summary)</li>
        <li>The 4 JTBDs in [Suburb] — which Resort Yard fits which trigger (cross-link to 4 JTBD landings)</li>
        <li>"Resort Yard Inspection in [Suburb]" — DBA-7 booking with travel-time note "we're typically on site in [Suburb] within 5 working days of booking"</li>
        <li>Local trust signals (years operating · suburbs served · awards · BSA licence)</li>
        <li>FAQ block (12 Q&amp;As · FAQPage schema · AEO-optimised 40-60-word answers)</li>
        <li>HowTo schema "How to plan a Resort Yard in [Suburb]" (6 steps)</li>
        <li>Local internal-link mesh (4 nearest suburb pages · 4 service pages · 1 booking)</li>
      </ol>
      <p><strong>Build pattern:</strong> Hono SSR · single template <code>/src/poe-suburb.tsx</code> · data table of 45 suburbs in <code>/src/data/poe-suburbs.ts</code> · build-time generation of 45 routes <code>/resort-yards/{`{suburb-slug}`}</code> · canonical tags self-referencing · no thin-content duplication (each page has ≥40% suburb-unique copy via case-study + design-consideration sections).</p>
    </div>

    {/* 4.4 SCHEMA & STRUCTURED DATA */}
    <div className="kw-block">
      <h3>4.4 · Schema and Structured Data — JSON-LD Stack Per Page Archetype</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Page archetype</th><th>Required schemas</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Homepage</td><td>Organization · LocalBusiness (HomeAndConstructionBusiness) · WebSite (with SearchAction) · BreadcrumbList</td><td>Brand entity definition · LocalBusiness for Maps · Sitelinks search box</td></tr>
          <tr><td>JTBD landing pages</td><td>Service · FAQPage · HowTo · BreadcrumbList · Offer (with priceRange)</td><td>Service entity · AEO featured-snippet capture · price-band indication</td></tr>
          <tr><td>Suburb pages (45)</td><td>Service · LocalBusiness (with serviceArea pointing to suburb) · FAQPage · BreadcrumbList · Place</td><td>Local SEO ranking signals · Place entity for AI Overviews</td></tr>
          <tr><td>Booking page (DBA-7)</td><td>Reservation · Service · BreadcrumbList · ContactPoint</td><td>Calendar appointment indexability</td></tr>
          <tr><td>Case-study pages</td><td>Article · Project (custom) · ImageObject (with creator/license) · BreadcrumbList</td><td>Portfolio surfacing in AI image+text answers</td></tr>
          <tr><td>FAQ / blog pages</td><td>FAQPage · Article · BreadcrumbList · Person (author)</td><td>AEO + E-E-A-T authorship signal</td></tr>
        </tbody>
      </table>
      <p>All JSON-LD generated server-side by Hono · validated nightly via cron against Google Rich Results Test API · validation failures block deploy in CI.</p>
    </div>

    {/* 4.5 LLMS.TXT & GEO MANIFEST */}
    <div className="kw-block">
      <h3>4.5 · <code>llms.txt</code>, <code>llms-full.txt</code>, and the GEO Manifest</h3>
      <p>The GEO discipline rests on giving LLMs an authoritative, machine-readable, summarised manifest of the brand at the well-known path <code>/llms.txt</code> (Anthropic-proposed standard, now widely respected by ChatGPT/Perplexity/Claude crawlers). [AGG-GEO] Aggarwal methodology adopted in full.</p>
      <p><strong><code>/llms.txt</code> structure (locked):</strong></p>
      <ol>
        <li>H1: "YBMT Resort Yards — Brisbane Outdoor-Entertainment Specialist · 30-Day Build Guarantee"</li>
        <li>Blockquote: 2-sentence category definition + DBA-3 "Built in 30 Days" claim</li>
        <li>"Key Pages" section: links to 4 JTBD landings + Booking + About + Compliance + 4 pillar suburb pages</li>
        <li>"Key Documents" section: links to 4 lead-magnet PDFs (Fast-Track Planner · Pool-Completion Checklist · Deck Replacement Spec · Pre-Sale ROI Worksheet)</li>
        <li>"Optional" section: blog · case-study index · awards</li>
      </ol>
      <p><strong><code>/llms-full.txt</code></strong> — a full ~80k-token concatenation of all canonical Resort Yard content (no marketing fluff · facts, claims, FAQ, case studies, pricing-band ranges). Auto-generated nightly from the site's content database. Cached at Cloudflare edge.</p>
      <p><strong>Per-page LLM-only metadata block</strong> (HTML comment, invisible to users but crawled): each canonical page contains a 200-word machine-readable summary block <code>&lt;!-- llm-summary: ... --&gt;</code> stating: page topic · JTBD addressed · key claims (with citations to source) · primary CTA · canonical URL. This dramatically lifts citation rate from generative engines per [AGG-GEO] Aggarwal A/B data (avg +2.4x citations in 8-week test window).</p>
    </div>

    {/* 4.6 AEO TACTICAL PLAYBOOK */}
    <div className="kw-block">
      <h3>4.6 · AEO Tactical Playbook — Engineering for the 40-60-Word Answer Box</h3>
      <p>[MK-AEO] iPullRank's research: featured-snippet answer paragraphs that win the box are 40-60 words, start with a direct restatement of the question, use a concrete number or list in the first sentence, and appear in the first 3 paragraphs of the page body. Locked AEO rules for every POE page:</p>
      <ul className="voice-list">
        <li><strong>Question-as-H2:</strong> every FAQ Q&amp;A renders the question as an H2 (not H3), making it the most likely featured-snippet target on the page.</li>
        <li><strong>Direct-answer first sentence:</strong> answer the question literally in sentence 1, with the number/fact embedded. Example: "A Resort Yard from YBMT is typically built in 30 days from contract sign, guaranteed in writing."</li>
        <li><strong>40-60 word ceiling:</strong> the answer block following each H2 question is hard-capped at 60 words. Expansion goes into a separate paragraph below.</li>
        <li><strong>Schema-paired:</strong> the Q&amp;A is wrapped in FAQPage JSON-LD with identical text. Mismatches blocked in CI.</li>
        <li><strong>List-format priority:</strong> "how" and "what are" questions answered with 5-7 bullet HTML lists (not prose paragraphs) — these capture list-format featured snippets at 3.1x the prose rate (iPullRank 2024).</li>
        <li><strong>"Brisbane"-modifier mandatory:</strong> every JTBD landing FAQ contains at least one Q&amp;A with "Brisbane" in the question text to capture local-modified voice searches.</li>
      </ul>
      <p><strong>FAQ inventory deliverable:</strong> 12 Q&amp;As per JTBD landing × 4 = 48 Q&amp;As · 12 Q&amp;As per suburb page × 45 = 540 Q&amp;As · 24 Q&amp;As on homepage · 18 Q&amp;As on Booking page = <strong>630 AEO-engineered Q&amp;As at launch.</strong></p>
    </div>

    {/* 4.7 TECHNICAL SEO FOUNDATION */}
    <div className="kw-block">
      <h3>4.7 · Technical SEO Foundation — Site-Wide Non-Negotiables</h3>
      <ul className="voice-list">
        <li><strong>Core Web Vitals:</strong> LCP &lt; 2.0s · INP &lt; 200ms · CLS &lt; 0.1 (P-02 §2.13 locked).</li>
        <li><strong>Mobile-first:</strong> all rendering tested in Chrome DevTools "Moto G Power" preset · all CTAs ≥ 48×48 px touch target · no horizontal scroll &lt; 360 px viewport.</li>
        <li><strong>Crawlability:</strong> <code>/sitemap.xml</code> auto-generated · 220+ URLs · last-modified accurate to ±24h · submitted to Google + Bing Search Console.</li>
        <li><strong>Robots:</strong> <code>/robots.txt</code> allows all major LLM crawlers (GPTBot · ClaudeBot · PerplexityBot · Google-Extended · CCBot · Applebot-Extended) · disallows aggressive scrapers.</li>
        <li><strong>Canonicals:</strong> self-referencing canonical on every page · no parameter-drift duplicate content.</li>
        <li><strong>Hreflang:</strong> single <code>en-AU</code> declaration · explicit (no en-AU/en-US confusion).</li>
        <li><strong>HTTPS:</strong> Cloudflare-issued cert · HSTS preload · TLS 1.3.</li>
        <li><strong>Image SEO:</strong> all 200+ portfolio images have descriptive alt text (suburb + JTBD + DBA-2 visual style) · WebP/AVIF served via Cloudflare Image Resizing · lazy-loaded below the fold.</li>
        <li><strong>Internal-link mesh:</strong> every page links to ≥3 other Resort Yard pages with descriptive anchor text (no "click here").</li>
        <li><strong>External authority:</strong> 30 backlinks acquired in M1-M6 from QLD-relevant publishers (suburb-news sites · Brisbane lifestyle blogs · Master Builders QLD · HIA QLD · architect/landscape-designer partner sites — see P-10).</li>
      </ul>
    </div>

    {/* 4.8 EDITORIAL CALENDAR & CONTENT VELOCITY */}
    <div className="kw-block">
      <h3>4.8 · Editorial Calendar and Content Velocity — 24-Month Publishing Cadence</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Asset class</th><th>M1-M3 (launch)</th><th>M4-M12 (build)</th><th>M13-M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Pillar/category pages</td><td>4 published</td><td>+8 → 12 total</td><td>+4 → 16 total</td></tr>
          <tr><td>JTBD landing pages</td><td>4 published (locked)</td><td>quarterly refresh</td><td>quarterly refresh</td></tr>
          <tr><td>Suburb pages</td><td>15 published</td><td>+30 → 45 total</td><td>annual refresh all 45</td></tr>
          <tr><td>Case-study pages</td><td>6 published</td><td>2/month → +18 → 24 total</td><td>1/month → +12 → 36 total</td></tr>
          <tr><td>FAQ/blog articles</td><td>12 published</td><td>3/month → +27 → 39 total</td><td>2/month → +24 → 63 total</td></tr>
          <tr><td>Lead-magnet PDFs</td><td>4 published (locked)</td><td>quarterly case-study refresh</td><td>annual rewrite eligibility</td></tr>
        </tbody>
      </table>
      <p>All content briefed against the keyword universe (§4.2) · all content checked against tri-channel doctrine (§4.1) · all content reviewed by Carla Oliver on JTBD-fit · all content shipped via YDT.</p>
    </div>

    {/* 4.9 KPI SCORECARD & MEASUREMENT */}
    <div className="kw-block">
      <h3>4.9 · KPI Scorecard — SEO + GEO + AEO Performance Targets</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Channel</th><th>Metric</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>SEO</td><td>Top-3 SEQ rankings (target keywords)</td><td>18</td><td>52</td><td>118</td><td>180</td></tr>
          <tr><td>SEO</td><td>Organic sessions/month</td><td>1,400</td><td>5,200</td><td>14,500</td><td>32,000</td></tr>
          <tr><td>SEO</td><td>Organic → Inspection booked/month</td><td>9</td><td>34</td><td>96</td><td>210</td></tr>
          <tr><td>GEO</td><td>LLM citation count/month (ChatGPT + Perplexity + Claude tracked)</td><td>20</td><td>140</td><td>620</td><td>1,400</td></tr>
          <tr><td>GEO</td><td>LLM-attributed sessions (UTM-tagged shared links)</td><td>40</td><td>280</td><td>980</td><td>2,200</td></tr>
          <tr><td>AEO</td><td>Featured snippets owned (Brisbane modifier)</td><td>6</td><td>22</td><td>58</td><td>92</td></tr>
          <tr><td>AEO</td><td>People-Also-Ask appearances</td><td>14</td><td>48</td><td>110</td><td>180</td></tr>
          <tr><td>AEO</td><td>Voice-search "near me" Brisbane wins (sample tested monthly)</td><td>2</td><td>9</td><td>24</td><td>40</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Tracked weekly via Ahrefs + Semrush + Cloudflare Web Analytics + custom LLM-citation scraper (Carla's daily prompt-bank tested across 4 LLMs Mon-Fri). Reported to CMO every Monday. All numbers feed /kpi F1 (Acquisition) tile and Bowtie post-deal-stage expansion telemetry.</p>
    </div>

    {/* 4.10 GOVERNANCE */}
    <div className="kw-block">
      <h3>4.10 · Governance, Forbidden States, and Refresh Doctrine</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · AI-generated content shipped without human edit:</strong> all LLM-drafted content must be edited by Carla or her delegate · zero exceptions · auto-detection scan in CI.</li>
        <li><strong>Forbidden state #2 · Doorway pages / thin suburb pages:</strong> each suburb page must contain ≥40% suburb-unique content (case studies · design notes · local references). CI fails if duplication exceeds 60%.</li>
        <li><strong>Forbidden state #3 · Keyword stuffing:</strong> primary keyword density capped at 1.4% per page. Linter enforced.</li>
        <li><strong>Forbidden state #4 · Schema/content mismatch:</strong> FAQPage JSON-LD answer text must exactly match the visible answer text. CI validates byte-for-byte.</li>
        <li><strong>Forbidden state #5 · Cloaking for LLMs:</strong> the <code>llm-summary</code> HTML-comment block must contain only facts present on the visible page. No promotional language hidden from users but shown to LLMs. Carla audits monthly.</li>
        <li><strong>Quarterly refresh:</strong> all FAQ Q&amp;As reviewed for AI-Overview rotation · top-20 underperforming keywords re-briefed for new content · suburb page case studies refreshed with newest builds.</li>
        <li><strong>Annual rewrite:</strong> pillar pages and homepage rewritten end-to-end Sept of each year · category-frame language re-validated against customer-interview transcripts.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-04 · Tri-channel: SEO + GEO + AEO · 312 keywords tracked · 220+ URLs · 630 AEO Q&amp;As · 45 SEQ suburb pages</span>
      <span className="pf-pill">llms.txt + llms-full.txt + per-page llm-summary blocks · 6 LLM crawlers allow-listed · [AGG-GEO] + [MK-AEO] disciplines locked</span>
      <span className="pf-pill">M12 targets: 118 top-3 rankings · 14.5k organic sessions/mo · 620 LLM citations/mo · 58 featured snippets · 96 Inspections/mo from organic</span>
    </div>
  </section>
)

// ============================================================================
// POE P-05 · GOOGLE ADS DEPLOYMENT KIT · JTBD-segmented · Bowtie-integrated
// ============================================================================
const PGPillar05GoogleAds = () => (
  <section id="p05" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-05 · POE · GOOGLE ADS DEPLOYMENT KIT</span>
      <h2 className="pillar-block-title">P-05 · Google Ads Engine · JTBD-Segmented Campaigns Across Search · Performance Max · Demand Gen · LSA</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-6 (Paid Acquisition) baseline 4.5/10 → 9/10 target. The Google Ads architecture mirrors the four POE Job Stories one-to-one — no demographic targeting, no generic "outdoor entertaining" buckets. Each campaign answers a single trigger with a single offer (DBA-7 Resort Yard Inspection) and feeds a single nurture sequence. [BF-LSI] Binet &amp; Field 60/40 brand-activation split governs budget; [JR-DBA] DBA-3 "Built in 30 Days" seal travels through every creative; [AH-OFR] offer-clarity discipline removes price-shopping behaviour from the SERP.</p>
    </div>

    {/* 5.1 PAID DOCTRINE */}
    <div className="kw-block">
      <h3>5.1 · POE Paid-Search Doctrine — Five Locked Rules</h3>
      <ol>
        <li><strong>JTBD-segmented, not service-segmented.</strong> Campaigns are named for the Job Story (Fast-Track / Pool-Completion / Replacement / Pre-Sale), not the service (paving / decking / landscaping). Same physical service, different buyer story.</li>
        <li><strong>One offer per ad group.</strong> The offer is always the Resort Yard Inspection (DBA-7) · never a quote · never a brochure · never a phone call alone.</li>
        <li><strong>Match the JTBD landing exactly.</strong> Every ad routes to the JTBD landing built in P-02 §2.4-2.7 — never the homepage · never a generic services page. [AH-OFR] message-to-landing congruence.</li>
        <li><strong>Negative keyword discipline.</strong> "Cheap," "DIY," "kit," "second-hand," "near me free" added globally. Pool-Completion-specific negatives include "pool builder," "pool repair," "pool resurfacing" to avoid bleed into adjacent categories.</li>
        <li><strong>Conversion = booked Inspection, not lead form.</strong> Primary conversion event is calendar-confirmed Resort Yard Inspection (Calendly webhook → GA4 event). Lead-form fill is a micro-conversion, weighted 0.2. This re-shapes Smart Bidding to optimise for actual revenue-correlated outcomes, not vanity fills.</li>
      </ol>
    </div>

    {/* 5.2 CAMPAIGN ARCHITECTURE */}
    <div className="kw-block">
      <h3>5.2 · Campaign Architecture — 9 Campaigns Across 4 Channels</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign</th><th>Channel</th><th>JTBD</th><th>Primary keyword theme</th><th>Daily budget M3</th><th>Target CPL</th><th>Target CPI</th></tr></thead>
        <tbody>
          <tr><td>POE-S-01 Fast-Track Search</td><td>Search</td><td>JTBD-1</td><td>"30 day pool deck" · "fast pool deck builder" · "outdoor entertaining quick build"</td><td>$120</td><td>$48</td><td>$160</td></tr>
          <tr><td>POE-S-02 Pool-Completion Search</td><td>Search</td><td>JTBD-2</td><td>"finish pool surrounds" · "pool deck after install" · "coping and paving Brisbane"</td><td>$140</td><td>$42</td><td>$140</td></tr>
          <tr><td>POE-S-03 Replacement Search</td><td>Search</td><td>JTBD-3</td><td>"pool deck replacement" · "cracked deck repair" · "rotten deck replacement"</td><td>$130</td><td>$55</td><td>$180</td></tr>
          <tr><td>POE-S-04 Pre-Sale Search</td><td>Search</td><td>JTBD-4</td><td>"outdoor renovation before selling" · "increase house value pool deck" · "pre-sale outdoor upgrade"</td><td>$90</td><td>$60</td><td>$200</td></tr>
          <tr><td>POE-PM-01 Resort Yard PMax</td><td>Performance Max</td><td>All 4 (asset-group-segmented)</td><td>Audience signals: 4 JTBD-coded signals · feed: Resort Yard inventory</td><td>$160</td><td>$50</td><td>$170</td></tr>
          <tr><td>POE-DG-01 Demand Gen — Category</td><td>Demand Gen</td><td>Trigger-forming (top funnel)</td><td>Resort Yard concept videos · DBA-2 imagery · 45-sec category-design hook</td><td>$80</td><td>n/a (brand)</td><td>n/a</td></tr>
          <tr><td>POE-LSA-01 LSA</td><td>Local Services Ads</td><td>All</td><td>"Google Guaranteed" badge · Brisbane LSA category: Outdoor Construction</td><td>$110</td><td>$38</td><td>$120</td></tr>
          <tr><td>POE-B-01 Branded Defence</td><td>Search</td><td>All</td><td>"YBMT Resort Yards" · branded modifiers · competitor-conquest sub-group</td><td>$25</td><td>$15</td><td>$45</td></tr>
          <tr><td>POE-RM-01 Remarketing</td><td>Display + RLSA</td><td>Returning by JTBD tag</td><td>4 audience segments mirroring the 4 JTBD landing visitors</td><td>$45</td><td>$22</td><td>$70</td></tr>
        </tbody>
      </table>
      <p><strong>Total M3 daily budget:</strong> $900/day · ~$27k/month. <strong>Total M12 daily budget:</strong> $1,650/day · ~$50k/month. <strong>Brand/Activation split (Binet &amp; Field):</strong> 35% Demand Gen + Branded Defence = brand bucket · 65% Search + PMax + LSA + Remarketing = activation bucket. The 35/65 weighting is intentional: POE is a category-design play and needs more brand-side investment than a pure performance category, but TDR/UR maturity means YBMT Group still needs activation efficiency.</p>
    </div>

    {/* 5.3 AD COPY LIBRARY */}
    <div className="kw-block">
      <h3>5.3 · Ad Copy Library — 4 JTBD × 5 Headlines × 4 Descriptions Per Ad Group</h3>
      <p><strong>JTBD-1 Fast-Track Host · POE-S-01 ad group:</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Asset</th><th>Copy</th></tr></thead>
        <tbody>
          <tr><td>Headline 1</td><td>Resort Yard · Built In 30 Days · Guaranteed</td></tr>
          <tr><td>Headline 2</td><td>Your Party's On. Backyard Ready In 30 Days.</td></tr>
          <tr><td>Headline 3</td><td>90-Min Resort Yard Inspection · Brisbane</td></tr>
          <tr><td>Headline 4</td><td>Pool Deck, Paving &amp; Landscaping · 30-Day Build</td></tr>
          <tr><td>Headline 5</td><td>YBMT Resort Yards · 25-Year Structural Warranty</td></tr>
          <tr><td>Description 1</td><td>Built in 30 days from contract — guaranteed in writing. Book a free 90-minute Resort Yard Inspection. Brisbane &amp; Gold Coast.</td></tr>
          <tr><td>Description 2</td><td>Wedding, 40th, summer hosting — your Resort Yard is ready when you are. Free Inspection. Built by licensed builders.</td></tr>
          <tr><td>Description 3</td><td>Not a quote. A Resort Yard Inspection. 90 minutes on site. We measure, brief, schedule. No pressure, no sales pitch.</td></tr>
          <tr><td>Description 4</td><td>25-year structural · 7-year finish warranty. 200+ Brisbane Resort Yards delivered. Master Builders QLD member.</td></tr>
        </tbody>
      </table>
      <p><strong>Sitelink extensions (8):</strong> "Resort Yard Inspection" · "Fast-Track Planner PDF" · "30-Day Guarantee" · "Case Studies" · "Warranty Terms" · "Hamilton Builds" · "New Farm Builds" · "Free Design Consult."</p>
      <p><strong>Callout extensions (10):</strong> "30-Day Build Guarantee" · "25-Year Structural Warranty" · "7-Year Finish Warranty" · "Master Builders QLD" · "Licensed &amp; Insured" · "200+ Brisbane Builds" · "Free 90-Min Inspection" · "No Sales Pressure" · "Brisbane &amp; Gold Coast" · "BSA #XXXXXX."</p>
      <p><strong>Structured snippets:</strong> "Services: Decking, Paving, Landscaping, Fencing, Lighting, Shade." · "Locations: Brisbane Inner-North, Inner-South, Western, Bayside, Gold Coast."</p>
      <p>JTBD-2 Pool-Completion, JTBD-3 Replacement, JTBD-4 Pre-Sale ad groups each receive their own bespoke 5-headline / 4-description / 8-sitelink / 10-callout set, brief-locked, copy in YDT deliverable folder.</p>
    </div>

    {/* 5.4 PERFORMANCE MAX ASSET GROUPS */}
    <div className="kw-block">
      <h3>5.4 · Performance Max — 4 Asset Groups, 1 Per JTBD</h3>
      <p>PMax campaign POE-PM-01 split into 4 asset groups (one per JTBD), each with locked DBA enforcement:</p>
      <ul className="voice-list">
        <li><strong>Asset group 1 · Fast-Track Host:</strong> 5 long headlines · 5 short headlines · 5 descriptions · 15 images (DBA-2 lens-flare golden-hour Resort Yard shots) · 5 videos (15-sec, 30-sec, 60-sec versions of the "30-day build" timelapse) · audience signal: in-market for outdoor renovation + life-event seekers + summer-host intenders.</li>
        <li><strong>Asset group 2 · Pool-Completion:</strong> creatives lead with "After your pool" framing · audience signal: recent pool-builder converters (custom intent from pool-builder competitor SERP queries).</li>
        <li><strong>Asset group 3 · Replacement:</strong> creatives lead with engineering-cross-section diagrams · audience signal: home-improvement DIY → contractor handoff intent.</li>
        <li><strong>Asset group 4 · Pre-Sale:</strong> creatives lead with sale-uplift comp tables · audience signal: real-estate-listing intenders + agent-search SERPs.</li>
      </ul>
      <p><strong>PMax exclusions (account-level):</strong> brand search excluded (forces PMax to find net-new not steal from POE-B-01) · YouTube placements excluded if mobile-only/sub-15-sec inventory · Display partners excluded if quality score &lt; 7 (manual sweep monthly).</p>
    </div>

    {/* 5.5 LSA & GOOGLE GUARANTEED */}
    <div className="kw-block">
      <h3>5.5 · Local Services Ads (LSA) and Google Guaranteed Setup</h3>
      <p>LSA is the highest-ROAS channel for trade businesses in Brisbane. Setup non-negotiables:</p>
      <ol>
        <li><strong>Google Guaranteed badge</strong> — full background check, licence verification (BSA), insurance verification ($2M public liability minimum), 100% completion within 14 days of P-05 launch.</li>
        <li><strong>Service categories listed:</strong> "Outdoor Construction" · "Landscaper" · "Deck Builder" (3-category cross-listing maximises impression share).</li>
        <li><strong>Service area:</strong> 45 SEQ suburbs from P-04 §4.3 mapped to LSA polygon.</li>
        <li><strong>Photo set:</strong> 25 DBA-2 lens-flare golden-hour Resort Yard photos · 1 photo per locked suburb where possible · all submitted for Google approval batch.</li>
        <li><strong>Review velocity:</strong> 2 Google reviews/week minimum (drip request via P-08 sales-enablement post-handover sequence). Target 4.9★ avg, 60+ reviews by M6, 120+ by M12.</li>
        <li><strong>Lead disputes:</strong> any non-fit LSA lead disputed within 48h to maintain Quality Score. SOP doc'd for YDT ops.</li>
        <li><strong>Budget mode:</strong> Maximise Leads (not target CPL) for M1-M3 · switch to Target CPL = $38 from M4 once data sufficient.</li>
      </ol>
    </div>

    {/* 5.6 BIDDING & MEASUREMENT */}
    <div className="kw-block">
      <h3>5.6 · Bidding Strategy and Conversion Measurement Stack</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign</th><th>Bid strategy M1-M2 (learning)</th><th>Bid strategy M3+ (mature)</th><th>Target</th></tr></thead>
        <tbody>
          <tr><td>POE-S-01..04 (JTBD Search)</td><td>Maximise Conversions</td><td>Target CPA</td><td>$48-$60 depending on JTBD</td></tr>
          <tr><td>POE-PM-01 (PMax)</td><td>Maximise Conversions</td><td>Target ROAS</td><td>4.2x at gross-margin level</td></tr>
          <tr><td>POE-DG-01 (Demand Gen)</td><td>Maximise Clicks (brand)</td><td>Target CPM</td><td>Reach-weighted · no CPL target</td></tr>
          <tr><td>POE-LSA-01 (LSA)</td><td>Maximise Leads</td><td>Target Cost Per Lead</td><td>$38</td></tr>
          <tr><td>POE-B-01 (Brand Defence)</td><td>Manual CPC</td><td>Target Impression Share 95% top of page</td><td>Defensive · no CPL target</td></tr>
          <tr><td>POE-RM-01 (Remarketing)</td><td>Maximise Conversions</td><td>Target CPA</td><td>$22</td></tr>
        </tbody>
      </table>
      <p><strong>Conversion event hierarchy (primary → secondary → micro):</strong></p>
      <ol>
        <li><strong>Primary (value = 1.0):</strong> Resort Yard Inspection booked AND held (Calendly webhook + attendance confirmation from sales).</li>
        <li><strong>Secondary (value = 0.5):</strong> Resort Yard Inspection booked but not yet held.</li>
        <li><strong>Micro (value = 0.2):</strong> Lead-magnet PDF downloaded (one of 4 from P-03).</li>
        <li><strong>Micro (value = 0.1):</strong> Contact-form submission via /contact (P-02 §2.11).</li>
        <li><strong>Micro (value = 0.05):</strong> Phone call ≥ 90 seconds (Google forwarding number).</li>
      </ol>
      <p><strong>Tracking stack:</strong> GA4 (primary) + Google Ads conversion tags + Cloudflare Web Analytics (independent verification) + server-side D1 log (analytics-blocker resilient) + Calendly webhook → Cloudflare Worker → D1. Enhanced Conversions enabled (hashed email/phone passed back to Google for closed-loop attribution). [WBD-BOW] Bowtie post-deal expansion data fed back into Smart Bidding via offline conversion uploads M4+.</p>
    </div>

    {/* 5.7 KPI SCORECARD */}
    <div className="kw-block">
      <h3>5.7 · KPI Scorecard — Google Ads M1 → M24</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Total monthly spend</td><td>$18k</td><td>$27k</td><td>$38k</td><td>$50k</td><td>$72k</td></tr>
          <tr><td>Total Inspections booked from paid</td><td>40</td><td>110</td><td>210</td><td>380</td><td>620</td></tr>
          <tr><td>Blended CPI (cost per Inspection)</td><td>$450</td><td>$245</td><td>$181</td><td>$132</td><td>$116</td></tr>
          <tr><td>Inspection → quoted job rate</td><td>55%</td><td>68%</td><td>74%</td><td>78%</td><td>80%</td></tr>
          <tr><td>Quoted → won rate</td><td>22%</td><td>30%</td><td>35%</td><td>38%</td><td>40%</td></tr>
          <tr><td>Implied paid-channel won deals/month</td><td>5</td><td>22</td><td>54</td><td>113</td><td>198</td></tr>
          <tr><td>Avg deal value (POE)</td><td>$48k</td><td>$52k</td><td>$56k</td><td>$60k</td><td>$65k</td></tr>
          <tr><td>Implied paid revenue/month</td><td>$240k</td><td>$1.14M</td><td>$3.02M</td><td>$6.78M</td><td>$12.87M</td></tr>
          <tr><td>Paid GPM (32% blended GP)</td><td>$77k</td><td>$365k</td><td>$967k</td><td>$2.17M</td><td>$4.12M</td></tr>
          <tr><td>Paid ROAS (GP basis)</td><td>4.3x</td><td>13.5x</td><td>25.4x</td><td>43.4x</td><td>57.2x</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">M1 is intentional learning loss · target ROAS only locks from M3. M24 figures assume the Bowtie post-purchase expansion engine (P-09 + P-10) is operating · paid acquisition decays as a % of new revenue from M18 onward as referral and partnerships compound.</p>
    </div>

    {/* 5.8 GOVERNANCE & ANTI-PATTERNS */}
    <div className="kw-block">
      <h3>5.8 · Governance, Forbidden States, Anti-Patterns</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · "Free quote" CTA on any ad.</strong> Always Resort Yard Inspection. Auto-flagged in copy linter.</li>
        <li><strong>Forbidden state #2 · Landing-page = homepage on a JTBD campaign.</strong> Each JTBD campaign routes to its JTBD landing (P-02 §2.4-2.7). No exceptions.</li>
        <li><strong>Forbidden state #3 · Mixing JTBDs in one ad group.</strong> A Fast-Track keyword + Pre-Sale keyword in same ad group = restructure. JTBD coherence is the discipline.</li>
        <li><strong>Forbidden state #4 · Bidding on competitor brand without offer-superiority asset live.</strong> No conquest unless we have a verifiable "we will match + 30-day guarantee" landing built.</li>
        <li><strong>Forbidden state #5 · Smart Bidding optimising on lead-form fills.</strong> Primary conversion must be Inspection-booked-and-held. Quality control reviewed weekly.</li>
        <li><strong>Forbidden state #6 · No Brisbane-suburb modifier in geo-targeting.</strong> 45 SEQ suburbs from P-04 are the locked geo-target set. National Australia exclusion enforced.</li>
        <li><strong>Weekly cadence:</strong> Mon search-terms-report + n-gram analysis + negative-keyword update · Wed creative-fatigue check (CTR decay &gt;15% week-over-week = rotate) · Fri budget reallocation by JTBD CPI performance.</li>
        <li><strong>Monthly cadence:</strong> Bid-strategy review · audience-signal refresh on PMax · LSA review velocity audit · branded SOV report.</li>
        <li><strong>Quarterly cadence:</strong> Full account restructure check · negative keyword list audit · landing-page CR audit (paired with P-02 changes if needed) · 60/40 brand/activation budget review.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-05 · 9 campaigns across Search · PMax · Demand Gen · LSA · Branded · Remarketing</span>
      <span className="pf-pill">$50k/mo M12 spend · CPI $132 · 380 Inspections/mo from paid · 43x GP-basis ROAS</span>
      <span className="pf-pill">JTBD-segmented · DBA-3 "Built in 30 Days" travels every creative · Enhanced Conversions · offline upload from Bowtie</span>
    </div>
  </section>
)

// ============================================================================
// POE P-06 · META ADS DEPLOYMENT KIT · Category-design + JTBD remarketing
// ============================================================================
const PGPillar06MetaAds = () => (
  <section id="p06" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-06 · POE · META ADS DEPLOYMENT KIT</span>
      <h2 className="pillar-block-title">P-06 · Meta Ads Engine · Category-Design Brand Layer + JTBD Activation + Bowtie Re-Engagement Across Facebook · Instagram · WhatsApp</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-6 (Paid Acquisition) baseline 4.5/10 → 9/10 target. Meta plays a different role than Google: where Google captures existing demand, Meta <em>creates</em> the Resort Yard category in the buyer's mind before the trigger fires. [PB-CAT] Play Bigger category-design framework operationalised through Meta's reach + creative-quality dynamics. [BS-HBG] mental availability through DBA-1 (Resort Yard frame) + DBA-2 (lens-flare golden-hour shot) shown 7x to the household over a 90-day window. [BF-LSI] 60/40 brand/activation governs budget split inside Meta itself.</p>
    </div>

    {/* 6.1 META DOCTRINE */}
    <div className="kw-block">
      <h3>6.1 · POE Meta Doctrine — Six Locked Rules</h3>
      <ol>
        <li><strong>Meta creates the category, Google captures it.</strong> Meta budget is 60% brand-frame (Resort Yard concept videos · DBA-led carousels) and 40% activation (JTBD-tied lead-gen). Google paid-search budget is inverted: 35% brand / 65% activation.</li>
        <li><strong>Creative is the algorithm.</strong> [BF-LSI] research confirms creative quality is now the dominant lever; ad-set targeting is mostly automated by Advantage+ Audience. We optimise creative weekly, audience monthly.</li>
        <li><strong>Vertical video first.</strong> 9:16 Reels + Stories take 70% of impressions. 1:1 feed gets 25%. 16:9 in-stream takes 5%. No 1.91:1 link-only ads.</li>
        <li><strong>DBA enforcement in every asset.</strong> DBA-1 lockup + DBA-2 image style + DBA-3 "Built in 30 Days" seal + DBA-4 Fraunces/Inter typography appear in every Reel/carousel. Creative review checklist blocks publish if any DBA missing.</li>
        <li><strong>Lookalike audiences seeded from booked-Inspection list, not contact-form list.</strong> Quality of seed list governs LAL quality. Inspection-booked-and-held is our highest-fidelity signal.</li>
        <li><strong>Bowtie re-engagement is a Meta campaign, not just a CRM sequence.</strong> Post-purchase referral + advocacy-amplification + lifecycle-rebuy targeting runs as dedicated Meta campaigns [WBD-BOW].</li>
      </ol>
    </div>

    {/* 6.2 META CAMPAIGN ARCHITECTURE */}
    <div className="kw-block">
      <h3>6.2 · Meta Campaign Architecture — 8 Campaigns Across 3 Objectives</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign</th><th>Objective</th><th>JTBD/Role</th><th>Daily budget M3</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>POE-M-B01 Resort Yard Category</td><td>Awareness (Reach)</td><td>Brand · all 4 JTBDs</td><td>$110</td><td>3-sec video-view rate &gt; 65% · CPM &lt; $9 (SEQ)</td></tr>
          <tr><td>POE-M-B02 Built In 30 Days Manifesto</td><td>Brand-Lift (ThruPlay)</td><td>Brand · DBA-3 amplification</td><td>$70</td><td>15-sec ThruPlay rate &gt; 25% · brand-lift survey lift +6pp</td></tr>
          <tr><td>POE-M-A01 Fast-Track Host Lead-Gen</td><td>Conversions (Inspection book)</td><td>JTBD-1</td><td>$95</td><td>CPI &lt; $145 · CR &gt; 8%</td></tr>
          <tr><td>POE-M-A02 Pool-Completion Lead-Gen</td><td>Conversions (Inspection book)</td><td>JTBD-2</td><td>$110</td><td>CPI &lt; $125 · CR &gt; 9%</td></tr>
          <tr><td>POE-M-A03 Replacement Lead-Gen</td><td>Conversions (Inspection book)</td><td>JTBD-3</td><td>$90</td><td>CPI &lt; $165 · CR &gt; 7%</td></tr>
          <tr><td>POE-M-A04 Pre-Sale Lead-Gen</td><td>Conversions (Inspection book)</td><td>JTBD-4 · agent-co-promo</td><td>$75</td><td>CPI &lt; $185 · CR &gt; 6%</td></tr>
          <tr><td>POE-M-R01 JTBD Remarketing</td><td>Conversions (Inspection book)</td><td>Landing-page visitors by JTBD</td><td>$60</td><td>CPI &lt; $70 · 7-day attribution</td></tr>
          <tr><td>POE-M-BOW01 Bowtie Advocacy</td><td>Engagement + Reach</td><td>Post-deal customer base</td><td>$40</td><td>Referral-tagged Inspection bookings · target 4/month M6</td></tr>
        </tbody>
      </table>
      <p><strong>M3 daily total:</strong> $650/day · ~$19.5k/month. <strong>M12 daily total:</strong> $1,200/day · ~$36k/month. Brand-bucket = B01 + B02 = $180/day = 28% in M3 (will lift to 35% as creative library matures and brand campaigns become more efficient).</p>
    </div>

    {/* 6.3 CREATIVE PRODUCTION SYSTEM */}
    <div className="kw-block">
      <h3>6.3 · Creative Production System — 32 Creatives in Rotation at Any Time</h3>
      <p>Meta creative fatigue at $20k+/month spend kills CR within 12-18 days unless creative-rotation discipline is enforced. The locked production system:</p>
      <ul className="voice-list">
        <li><strong>4 hero Reels per JTBD</strong> (16 total) · 15-30 sec · vertical · DBA-2 lens-flare opener · DBA-3 "30 Days" seal at 0:03 · JTBD-language hook in caption · 1 month rotation.</li>
        <li><strong>4 carousel ads per JTBD</strong> (16 total) · 6-slide carousel · slide-1 hook · slides-2-5 before/during/after build · slide-6 DBA-7 Inspection CTA · 6-week rotation.</li>
        <li><strong>4 user-generated-style testimonials per JTBD</strong> (16 total) · 30-60 sec · real customers from each Job Story · DBA-3 seal end-card · 8-week rotation.</li>
        <li><strong>2 "Resort Yard timelapse" hero films</strong> · 60-90 sec · full Day-1-to-Day-30 builds · DBA-1+2+3 saturated · evergreen.</li>
        <li><strong>1 "Manifesto" Reel</strong> · 45 sec · DBA-4 typography-led · "What is a Resort Yard?" category-frame · 6-month evergreen.</li>
      </ul>
      <p><strong>Total at-launch library:</strong> 51 unique creatives. <strong>Refresh cadence:</strong> weekly creative-fatigue scan (CTR + freq) · monthly add 6 new creatives · quarterly retire bottom-10 performers. Production owned by YDT creative pod (1 strategist + 1 video editor + 1 designer + 1 motion graphic) at ~$8k/month.</p>
    </div>

    {/* 6.4 AUDIENCE STRATEGY */}
    <div className="kw-block">
      <h3>6.4 · Audience Strategy — Advantage+ Default Plus Three Locked Custom Layers</h3>
      <p>Meta's machine targeting outperforms manual targeting in 92% of A/B tests post-iOS-14 (Meta &amp; Common Thread Collective 2024 meta-analysis). We default to Advantage+ Audience for all conversion campaigns, but layer three custom inputs:</p>
      <ol>
        <li><strong>Custom audience 1 · Inspection-booked-and-held seed (highest fidelity).</strong> Feeds Lookalike 1% (Brisbane + Gold Coast) for Advantage+ to use as suggestion. Refreshed weekly via CRM sync.</li>
        <li><strong>Custom audience 2 · Lead-magnet downloaders by JTBD tag.</strong> 4 separate audiences (one per JTBD) used for remarketing campaign POE-M-R01.</li>
        <li><strong>Custom audience 3 · Past-customer base (Bowtie seed).</strong> Used for POE-M-BOW01 advocacy campaign + excluded from all acquisition campaigns to prevent wasted spend.</li>
        <li><strong>Exclusion audiences:</strong> Anyone who booked an Inspection in last 90 days · current customer list · employees + family · competitor company-page audiences (Pinterest research scrape).</li>
        <li><strong>Geo:</strong> 45 SEQ suburbs from P-04 §4.3 in radius targeting. Polygon drawn around each suburb's centroid +5km. Verified against Meta's reach estimates monthly.</li>
        <li><strong>Demographics in Advantage+:</strong> minimum age 28 (sub-28 filtered as low purchase-power in residential outdoor construction · validated by 18-month YBMT booked-Inspection data). No gender filter. No income filter (Meta's interest-graph already weights for property-value proxies).</li>
      </ol>
    </div>

    {/* 6.5 META PIXEL & CAPI */}
    <div className="kw-block">
      <h3>6.5 · Meta Pixel + Conversions API (CAPI) Setup — Server-Side Conversion Tracking</h3>
      <p>iOS 14.5 + 17 ATT + Chrome 3rd-party-cookie deprecation = browser-side Pixel alone loses ~40% of attribution. CAPI is non-negotiable. Setup:</p>
      <ul className="voice-list">
        <li><strong>Browser Pixel:</strong> standard install in <code>&lt;head&gt;</code> · Advanced Matching enabled (em, ph, fn, ln, ge, db, ct, st, zp, country).</li>
        <li><strong>CAPI server-side:</strong> Hono endpoint <code>/api/meta-capi</code> · receives conversion events from D1 (Inspection booked) and Calendly webhook (Inspection held) · fires server-side event to Meta with hashed PII + event_id matching browser Pixel for deduplication.</li>
        <li><strong>Event Match Quality (EMQ) target:</strong> 7.5+ on a 10-point scale (current Meta-defined "good"). Verified weekly in Events Manager.</li>
        <li><strong>Aggregated Event Measurement (AEM):</strong> 8 events configured · priority order locked: 1. Inspection booked &amp; held · 2. Inspection booked · 3. Lead magnet downloaded (JTBD-tagged) · 4. Contact form · 5. Phone call · 6. ViewContent JTBD landing · 7. AddToCart (saving a quote) · 8. PageView.</li>
        <li><strong>iOS attribution window:</strong> 7-day click + 1-day view (Meta default). Modeled conversions used for budget allocation but not LAL-seeding.</li>
      </ul>
    </div>

    {/* 6.6 META AD COPY LIBRARY */}
    <div className="kw-block">
      <h3>6.6 · Meta Ad Copy Library — Sample Sets per JTBD (Hooks · Bodies · CTAs)</h3>
      <p><strong>JTBD-1 Fast-Track Host · POE-M-A01:</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Element</th><th>Copy</th></tr></thead>
        <tbody>
          <tr><td>Hook (first 3 sec spoken / 0.5 sec on-screen text)</td><td>"Your party's on. Your backyard isn't. We fix that in 30 days."</td></tr>
          <tr><td>Body 1 (under-video text)</td><td>YBMT Resort Yards builds resort-style outdoor entertainment areas in 30 days from contract sign — guaranteed in writing. Book a 90-minute Resort Yard Inspection. No quote pressure. No sales pitch.</td></tr>
          <tr><td>Body 2 (alt copy)</td><td>200+ Brisbane backyards transformed. 30-day build guarantee. 25-year structural warranty. Free Resort Yard Inspection at your home.</td></tr>
          <tr><td>Body 3 (story-led)</td><td>The Hamilton wedding had 110 guests. The backyard had 4 weeks. Here's how YBMT built a Resort Yard in 27 days — including pool deck, paving, landscaping, and lighting.</td></tr>
          <tr><td>CTA button</td><td>Book Inspection</td></tr>
          <tr><td>Landing</td><td>/resort-yard-fast-track (P-02 §2.4)</td></tr>
          <tr><td>Visual treatment</td><td>DBA-2 lens-flare golden-hour Reel · DBA-3 "30 Days" seal animated in at 0:03 · DBA-1 logo lockup end-card at 0:15</td></tr>
        </tbody>
      </table>
      <p>Equivalent 5-hook / 3-body / locked-CTA / locked-landing matrices built for JTBD-2 Pool-Completion (POE-M-A02), JTBD-3 Replacement (POE-M-A03), JTBD-4 Pre-Sale (POE-M-A04). Microcopy locked-strings library from P-02 §2.12 enforced — no creative may use "Free Quote", "No Obligation", "Get Pricing" or other forbidden strings.</p>
    </div>

    {/* 6.7 KPI SCORECARD */}
    <div className="kw-block">
      <h3>6.7 · KPI Scorecard — Meta Ads M1 → M24</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>Total monthly spend</td><td>$12k</td><td>$19.5k</td><td>$26k</td><td>$36k</td><td>$48k</td></tr>
          <tr><td>Reach in SEQ household (unique 28d)</td><td>120k</td><td>320k</td><td>540k</td><td>820k</td><td>1.1M</td></tr>
          <tr><td>Frequency (28d, brand bucket)</td><td>2.4</td><td>3.8</td><td>5.2</td><td>6.9</td><td>7.4</td></tr>
          <tr><td>Inspections booked from Meta</td><td>22</td><td>72</td><td>148</td><td>270</td><td>440</td></tr>
          <tr><td>Blended Meta CPI</td><td>$545</td><td>$271</td><td>$176</td><td>$133</td><td>$109</td></tr>
          <tr><td>Inspection → quoted job rate</td><td>50%</td><td>62%</td><td>70%</td><td>74%</td><td>77%</td></tr>
          <tr><td>Quoted → won rate</td><td>20%</td><td>28%</td><td>33%</td><td>36%</td><td>38%</td></tr>
          <tr><td>Implied Meta-channel won deals/month</td><td>2</td><td>13</td><td>34</td><td>72</td><td>129</td></tr>
          <tr><td>Implied Meta revenue/month</td><td>$96k</td><td>$650k</td><td>$1.90M</td><td>$4.32M</td><td>$8.39M</td></tr>
          <tr><td>Meta GPM (32%)</td><td>$31k</td><td>$208k</td><td>$610k</td><td>$1.38M</td><td>$2.68M</td></tr>
          <tr><td>Meta ROAS (GP basis)</td><td>2.6x</td><td>10.7x</td><td>23.5x</td><td>38.4x</td><td>55.9x</td></tr>
          <tr><td>Brand-lift survey (DBA-1 Resort Yard recall in SEQ)</td><td>3%</td><td>8%</td><td>15%</td><td>24%</td><td>32%</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Brand-lift survey conducted monthly via Meta's native Brand Lift tool (sample n=600 SEQ residents) — measures unaided + aided "Resort Yard" recall. The 24% M12 target is the leading indicator that the category-design play is working: when 24% of Brisbane households know "Resort Yard" means YBMT, the Google-side CPI on branded keywords collapses and organic search compounds.</p>
    </div>

    {/* 6.8 GOVERNANCE */}
    <div className="kw-block">
      <h3>6.8 · Governance, Forbidden States, Anti-Patterns</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Boosted post becomes "the strategy."</strong> No boosted posts from organic feed — all paid Meta is briefed, briefed-locked, and runs through Ads Manager.</li>
        <li><strong>Forbidden state #2 · Creative without DBA enforcement.</strong> All creative passes 7-DBA checklist before publish. CI failure blocks paid push.</li>
        <li><strong>Forbidden state #3 · Single-creative ad-set.</strong> Minimum 4 creatives per ad set to give Advantage+ optimisation room.</li>
        <li><strong>Forbidden state #4 · LAL seeded from low-intent events.</strong> Only Inspection-booked-and-held seeds LAL. Lead-form fill is too noisy.</li>
        <li><strong>Forbidden state #5 · Lookalike spend without EMQ ≥ 7.</strong> If Pixel/CAPI Event Match Quality drops, LAL pause until restored.</li>
        <li><strong>Weekly cadence:</strong> Mon creative-fatigue review · Wed audience-overlap audit (Meta's tool) · Fri budget shift across ad sets by CPI.</li>
        <li><strong>Monthly cadence:</strong> Brand-Lift survey · creative library refresh (+6 new) · audience exclusion list audit · LAL refresh.</li>
        <li><strong>Quarterly cadence:</strong> Account restructure check · campaign budget optimisation (CBO vs ABO test) · creative tone-of-voice audit · Bowtie advocacy campaign performance audit.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-06 · 8 campaigns across Reach · ThruPlay · Conversions · Engagement · 60/40 brand/activation inside Meta</span>
      <span className="pf-pill">$36k/mo M12 spend · CPI $133 · 270 Inspections/mo · 24% Brisbane "Resort Yard" brand recall</span>
      <span className="pf-pill">51-creative library · Advantage+ + 3 custom layers · CAPI EMQ 7.5+ · Bowtie advocacy campaign integrated</span>
    </div>
  </section>
)

// ============================================================================
// POE P-08 · SALES ENABLEMENT KIT · Resort Yard Inspection → Quote → Won → Bowtie
// ============================================================================
const PGPillar08SalesEnablement = () => (
  <section id="p08" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-08 · POE · SALES ENABLEMENT KIT</span>
      <h2 className="pillar-block-title">P-08 · Sales Enablement · The Resort Yard Inspection Operating System · DBA-7 White-Glove Ritual + Quote Document + Buyer Psychology + Bowtie Handover</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-7 (Sales Conversion) baseline 6.0/10 → 9/10 target. Sales is where category design meets cash. The Resort Yard Inspection (DBA-7) is not a sales call — it is a 90-minute white-glove on-site consultation that pre-qualifies the buyer, demonstrates expertise, captures the brief, and pre-commits to the 30-day build sequence before pricing is discussed. [CV-NSD] Voss tactical empathy + [RC-INF] Cialdini reciprocity + commitment-consistency + [DK-TFS] Kahneman anchoring all operationalised in a documented sales playbook. The output is not a "quote" — it is a Resort Yard Proposal.</p>
    </div>

    {/* 8.1 SALES DOCTRINE */}
    <div className="kw-block">
      <h3>8.1 · POE Sales Doctrine — Seven Locked Rules</h3>
      <ol>
        <li><strong>The Resort Yard Inspection is the product before the project.</strong> 90 minutes of expert time, on site, before any pricing conversation. The buyer leaves the Inspection with a documented brief, a build-week schedule, and a clear sense of next step — whether they buy from YBMT or not.</li>
        <li><strong>No prices quoted at Inspection.</strong> Pricing is delivered as a Resort Yard Proposal within 72 hours of Inspection — never verbally on site. [DK-TFS] anchors are managed in writing, not under emotional pressure.</li>
        <li><strong>Buyer signs the brief, not the contract, at Inspection.</strong> A signed Design Brief Document at end of Inspection commits the buyer to a process without committing to spend. Reciprocity + consistency engaged. [RC-INF].</li>
        <li><strong>Proposal not quote.</strong> "Quote" frames buyer as commodity-shopper. "Proposal" frames YBMT as professional service. Language locked.</li>
        <li><strong>3-option Proposal structure, not 1-quote.</strong> Good / Better / Best Resort Yard configurations. [DK-TFS] decoy effect engaged. Middle option is always the "designed-to-win" tier.</li>
        <li><strong>Handover-to-Bowtie at deposit.</strong> The moment deposit clears, customer enters Bowtie post-purchase expansion engine [WBD-BOW]. No "we'll be in touch" gap.</li>
        <li><strong>Sales rep is the same person from Inspection to handover.</strong> One human relationship · no "warm intro to project manager" hand-off until Day 1 of build.</li>
      </ol>
    </div>

    {/* 8.2 RESORT YARD INSPECTION · 90-MINUTE SCRIPT */}
    <div className="kw-block">
      <h3>8.2 · The 90-Minute Resort Yard Inspection — Scripted Operating System</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Phase</th><th>Time</th><th>Activity</th><th>Psychological mechanism</th></tr></thead>
        <tbody>
          <tr><td>1 · Arrival ritual</td><td>0:00 - 0:05</td><td>YBMT branded vehicle parked street-front · uniformed YBMT polo + clipboard + tablet · greeted by name at door · shoe covers offered · A4 printed Inspection Agenda handed over</td><td>Trust transfer via signal-cost (uniform + vehicle + printed agenda = "this is professional")</td></tr>
          <tr><td>2 · 5-minute discovery</td><td>0:05 - 0:10</td><td>"Before we look at anything — tell me what made you book the Inspection." Open question. Listen. Take notes. Mirror their language. [CV-NSD]</td><td>Buyer auto-classifies into JTBD via own language · sales rep tags JTBD on tablet</td></tr>
          <tr><td>3 · 20-min site walk</td><td>0:10 - 0:30</td><td>Walk yard with buyer · measure tape · drone overview shot · note 8 standard data points (lot orientation · sun aspect · drainage · access · soil indication · existing structure · safety hazards · neighbour overlooks)</td><td>Demonstrates technical depth · buyer sees expertise vs commodity contractor</td></tr>
          <tr><td>4 · 10-min "what we'd build here" preview</td><td>0:30 - 0:40</td><td>Tablet-based 3-config preview (Tropical / Coastal / Mediterranean Resort Yard archetypes overlaid on drone shot of THIS yard). No prices.</td><td>Mental availability + concreteness · buyer can "see" the outcome</td></tr>
          <tr><td>5 · 15-min Design Brief co-authoring</td><td>0:40 - 0:55</td><td>Together: fill out a 1-page Design Brief Document on tablet · 12 questions · buyer signs at end · they keep a copy · we keep a copy · auto-synced to CRM</td><td>Commitment + consistency [RC-INF] · buyer has invested time → reluctant to walk away</td></tr>
          <tr><td>6 · 10-min "How the 30 days work"</td><td>0:55 - 1:05</td><td>Walk through the 30-day build calendar tied to a specific assumed start date · what they need to decide by when · risks · weather contingency</td><td>De-risks the central promise · DBA-3 made tangible</td></tr>
          <tr><td>7 · 10-min Q&A</td><td>1:05 - 1:15</td><td>Open Q&A · buyer asks questions · rep handles each with prepared response from objection-handler library (§8.5) · NO PRICES quoted</td><td>Objection list captured → enters Proposal customisation</td></tr>
          <tr><td>8 · 10-min next-step lock</td><td>1:15 - 1:25</td><td>"Your Resort Yard Proposal will land in your inbox within 72 hours. Do you want me to walk you through it in person or on a 30-minute video call? I'll book that slot now while I'm here." Calendly opened on tablet · slot booked.</td><td>Future-pacing commitment · sales pipeline integrity preserved (no "I'll get back to you" drop)</td></tr>
          <tr><td>9 · 5-min thank-you ritual</td><td>1:25 - 1:30</td><td>Hand over: 1) printed Design Brief signed copy · 2) "Brisbane Resort Yards" hardcover lookbook (DBA-1 + DBA-2 saturated) · 3) Hormozi-style "Why Brisbane families choose YBMT" 4-page card · 4) YBMT branded coaster set (DBA-3 seal)</td><td>Reciprocity (4 physical gifts) + sensory anchoring · buyer talks about YBMT to spouse that evening with physical artefacts on the counter</td></tr>
        </tbody>
      </table>
      <p><strong>Critical hard-rule:</strong> if the 90-minute Inspection runs over 100 minutes total, the sales rep is over-talking. Re-trained immediately. Brevity = confidence = expertise.</p>
    </div>

    {/* 8.3 RESORT YARD PROPOSAL DOCUMENT */}
    <div className="kw-block">
      <h3>8.3 · The Resort Yard Proposal Document — 18-Page Structure</h3>
      <p>Delivered as PDF + interactive web link within 72 hours of Inspection. Built from CRM data captured at Inspection. Never auto-generated boilerplate — every Proposal is individually authored by sales rep with manager review before send.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Page</th><th>Content</th><th>Function</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Cover · "Resort Yard Proposal for [Buyer Name] · [Suburb]" · DBA-1 lockup · personalised drone shot of their yard</td><td>Bespoke feel · not template</td></tr>
          <tr><td>2</td><td>"Your Resort Yard, in your words" · the Design Brief Document signed at Inspection, restated verbatim</td><td>Buyer sees their own language reflected · commitment-consistency [RC-INF]</td></tr>
          <tr><td>3-5</td><td>"What we'd build here" · 3 archetype overlays on their drone shot · annotated · materials called out</td><td>Visual concreteness · 3 options [DK-TFS] decoy structure</td></tr>
          <tr><td>6</td><td>"The 30-Day Build Calendar for your project" · specific dates assumed · weather contingency stated</td><td>DBA-3 made specific to this buyer · removes timeline ambiguity</td></tr>
          <tr><td>7</td><td>"What's included" · detailed line-by-line inclusions (no sub-totals)</td><td>Removes "what am I getting" anxiety · prevents change-order surprises</td></tr>
          <tr><td>8</td><td>"What's not included" · clear exclusions (e.g. pool fence to council standards is separate · landscape softscape after Day 25 is separate)</td><td>Honesty + risk transparency · trust signal</td></tr>
          <tr><td>9</td><td>"The Three Resort Yards" · Good / Better / Best with photo · single-page summary · price under each</td><td>3-option anchoring [DK-TFS] · middle is "designed-to-win" tier</td></tr>
          <tr><td>10</td><td>"What changes between the Three" · feature comparison grid</td><td>Buyer's spouse/accountant can self-audit · enables shared decision</td></tr>
          <tr><td>11</td><td>"Payment schedule" · 4-stage payment schedule with milestone triggers</td><td>Cash-flow clarity · matches build progress</td></tr>
          <tr><td>12</td><td>"Warranties &amp; guarantees" · 30-day build · 25-year structural · 7-year finish · what each covers · what voids</td><td>Risk reversal [AH-OFR]</td></tr>
          <tr><td>13</td><td>"Two recent builds nearest you" · 2 case studies from same suburb tier · before/after · build-time delivered · 1-line customer quote</td><td>Social proof on locality · [BS-HBG]</td></tr>
          <tr><td>14</td><td>"Why us" · 8-bullet Hormozi-style "value stack" page · differentiators not features</td><td>Decision-justification ammo for buyer to share with spouse</td></tr>
          <tr><td>15</td><td>"How we work together" · process from Proposal sign-off to handover · 4 milestones · who you talk to at each</td><td>Process predictability · removes "what happens next" anxiety</td></tr>
          <tr><td>16</td><td>"FAQ — the 12 questions buyers ask most" · written answers · same as JTBD landing FAQ but specific to this buyer's brief</td><td>Pre-emptive objection handling</td></tr>
          <tr><td>17</td><td>"Your next step" · signature page · 3 boxes: "Yes, Better — let's start" / "Yes, but I'd like to discuss" / "Not now — please refer me as completed list when next available"</td><td>Trichotomy [CV-NSD] · "no" option preserves relationship for Bowtie referral later</td></tr>
          <tr><td>18</td><td>"Reserve your build slot" · calendar embed · next 4 available build start dates · 7-day-hold deposit explained</td><td>Scarcity [RC-INF] · concrete next action</td></tr>
        </tbody>
      </table>
    </div>

    {/* 8.4 BUYER PSYCHOLOGY OPERATING NOTES */}
    <div className="kw-block">
      <h3>8.4 · Buyer Psychology Operating Notes — POE-Specific Patterns</h3>
      <ul className="voice-list">
        <li><strong>Spouse decision dynamic.</strong> 78% of POE deals require dual-spouse sign-off. Sales rep must address BOTH at Inspection · physical artefacts (lookbook, brief copy, card, coasters) enable evening dinner-table conversation.</li>
        <li><strong>Anchoring against pool-builder cost memory.</strong> Buyer just spent $80-150k on a pool (JTBD-2 especially). Their cost-anchor is high. We do NOT compete on price-down; we compete on completion-up. "You finished the pool. Now finish the yard." [CV-NSD] reframe.</li>
        <li><strong>Loss aversion vs sale-uplift framing (JTBD-4 Pre-Sale).</strong> "What does it cost you NOT to do this before listing?" The ROI worksheet (P-03 §3.5) makes this loss tangible. [DK-TFS].</li>
        <li><strong>Trigger-event urgency (JTBD-1 Fast-Track).</strong> The wedding/40th date is not flexible. Our 30-day promise is the most valuable asset we have. Sales rep references the buyer's specific event by name + date at least 4 times in Inspection.</li>
        <li><strong>Engineering-respect dynamic (JTBD-3 Replacement).</strong> Buyer was burned by last contractor. Sales rep speaks engineering not aesthetic for first 30 minutes of Inspection. The Deck Replacement Spec Sheet (P-03 §3.4) is the language anchor.</li>
        <li><strong>"Free quote" is the enemy.</strong> Buyer who books an Inspection has already self-segmented away from quote-shoppers. Sales rep should NEVER price-anchor against "free quotes from 3 other builders" — engaging with that framing devalues YBMT. [PB-CAT] category-design protects price.</li>
        <li><strong>Silence is a tool [CV-NSD].</strong> After presenting the 3-option Proposal page, sales rep stops talking. The buyer must be the first to speak. Coaching: count to 7 internally before any follow-up sentence.</li>
      </ul>
    </div>

    {/* 8.5 OBJECTION HANDLER LIBRARY */}
    <div className="kw-block">
      <h3>8.5 · Objection Handler Library — 16 Locked Responses</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Objection</th><th>Reframe / Response (locked language)</th></tr></thead>
        <tbody>
          <tr><td>"It's more than I expected."</td><td>"Most Resort Yards land between $48k and $95k depending on size, materials, and timeline. What did you have in mind — and what would have to be true for the Resort Yard to be worth that to you?" [CV-NSD] tactical empathy</td></tr>
          <tr><td>"Why is YBMT more expensive than [competitor]?"</td><td>"We're not the same product. Most pool deck contractors give you paving around a pool. YBMT builds a Resort Yard — that's 7 zones, designed and integrated, with a 30-day guarantee and 25-year structural warranty. If you want a paver around your pool, I can refer you to someone good. If you want a Resort Yard, you want us."</td></tr>
          <tr><td>"I want to think about it."</td><td>"That's exactly what you should do — this is a six-figure decision. Most clients spend a week with the Proposal, then come back with three questions. Can I lock a 30-minute call with you for [day +7]? I'll answer those three questions, and we can decide whether the timing's right." [RC-INF] commitment</td></tr>
          <tr><td>"I need to talk to my partner."</td><td>"Of course. The Proposal is designed to be read together — pages 9 and 10 especially. When you've both had a chance to read it, do you want to come back to me individually or together? I find together is faster and avoids misalignment." Future-pace the conversation.</td></tr>
          <tr><td>"What if the build runs over 30 days?"</td><td>"In the last 200 builds, we've hit 30 days on 94% and 35 days on 99.5%. If we run beyond 30 days for reasons not caused by you or weather, our contract pays you $300/day. That's in writing on page 12." Risk reversal made specific.</td></tr>
          <tr><td>"Can you match a quote from [competitor]?"</td><td>"I can't match a quote that isn't for the same product. If their quote is for the same scope — 7 zones, 30-day guarantee, 25-year structural, 7-year finish — we'll match it. If it's not, I'll show you what they're not building, and you can decide if you want that or not."</td></tr>
          <tr><td>"Can we phase the project?"</td><td>"Yes — Resort Yards can phase across 2 or 3 stages. The trade-off is that phased builds typically cost 18-22% more than a single 30-day build. I'll add a phased option to your Proposal so you can compare like-for-like."</td></tr>
          <tr><td>"I want to do the landscaping myself."</td><td>"Many clients do. We can scope to hardscape-only (Zones 1-2 and 4-7) and you take the softscape (Zone 3). I'll add that as Option C in your Proposal."</td></tr>
          <tr><td>"What about the 12-month review?"</td><td>"12 months after handover we're back on site for a complimentary 60-minute Resort Yard Health Check. We re-seal anything that needs it, inspect drainage, test slip rating. It's included. Page 12 of the Proposal."</td></tr>
          <tr><td>"Can you work with my pool builder?"</td><td>"Yes — we work alongside [common pool builders] regularly. I'll coordinate directly with them. You won't be the messenger."</td></tr>
          <tr><td>"What about finance?"</td><td>"We work with [BSA-approved finance partner] for staged-payment finance. Typical structure is 20% deposit, 30/30/20 across build stages. I'll add a finance summary to your Proposal."</td></tr>
          <tr><td>"Will my house be liveable during the build?"</td><td>"Yes. We work outdoor-side only · no internal disruption · noise window 7am-3pm · driveway access maintained · pool unusable for ~10 days mid-build only."</td></tr>
          <tr><td>"What if I don't like a design choice mid-build?"</td><td>"Variations are part of building. We schedule a Day 14 site walk where you and I review the work to date and approve the next two weeks. Any variation is documented on a Variation Note · costed · signed by you before we proceed. No surprise variations."</td></tr>
          <tr><td>"How do you handle warranties?"</td><td>"Warranty is administered by YBMT direct. One number to call. You don't chase subbies. Page 12 lists what's covered for how long. Years 1-7 cover finishes; years 1-25 cover structural."</td></tr>
          <tr><td>"What if I sell the house — does the warranty transfer?"</td><td>"Yes — warranty is on the structure not the owner. It transfers automatically. Adds documented value at sale."</td></tr>
          <tr><td>"I want a fixed price, no variations."</td><td>"Our Proposals are fixed-price for scope-as-specified. Variations only happen if you request a change or if site conditions reveal something genuinely unforeseeable (e.g. rock substrate). Both are rare. We've delivered 92% of last 200 builds at exactly the Proposal number."</td></tr>
        </tbody>
      </table>
    </div>

    {/* 8.6 SALES STACK & CADENCE */}
    <div className="kw-block">
      <h3>8.6 · Sales Stack and Operating Cadence — Tools · Roles · Rituals</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Layer</th><th>Tool</th><th>Purpose</th><th>Owner</th></tr></thead>
        <tbody>
          <tr><td>CRM</td><td>HubSpot Sales Pro</td><td>Pipeline · contact · deal · automation · sequences (post-WS-10)</td><td>YDT ops + Carla</td></tr>
          <tr><td>Inspection booking</td><td>Calendly (white-label embed)</td><td>Buyer self-books · auto-syncs to rep calendar · auto-creates HubSpot deal</td><td>YDT dev</td></tr>
          <tr><td>On-site tablet</td><td>iPad Pro 11" · DBA-cased</td><td>Digital Design Brief Document · drone overlay tool · 3-archetype previewer · Calendly embed</td><td>Sales rep</td></tr>
          <tr><td>Drone</td><td>DJI Mini 4 Pro · YBMT branded case</td><td>Pre-Inspection drone shot · annotated for Proposal pages 3-5 · all builds aerial-timelapsed for marketing</td><td>Sales rep + creative pod</td></tr>
          <tr><td>Proposal author tool</td><td>PandaDoc + custom Resort Yard template</td><td>Each Proposal individually authored · manager review · e-sign · payment-link embedded</td><td>Sales rep + sales manager</td></tr>
          <tr><td>Print collateral</td><td>"Brisbane Resort Yards" hardcover lookbook · "Why Brisbane families choose YBMT" 4-page card · branded coasters</td><td>Inspection thank-you ritual · reciprocity · sensory anchoring</td><td>YDT design pod + print partner</td></tr>
          <tr><td>Call recording &amp; coaching</td><td>Gong (Inspection audio recorded with buyer consent)</td><td>Sales coaching · objection-handler refinement · onboarding new reps faster</td><td>Sales manager</td></tr>
          <tr><td>Quote-to-cash</td><td>PandaDoc → Stripe/Xero · deposit triggers Bowtie handover</td><td>Deposit-cleared event = deal won · auto-handover to Bowtie M0 sequence</td><td>YDT dev + finance</td></tr>
        </tbody>
      </table>
      <p><strong>Operating cadence:</strong></p>
      <ul className="voice-list">
        <li><strong>Daily:</strong> 8am sales stand-up (15 min) · review today's Inspections · prep tablet decks · pipeline review.</li>
        <li><strong>Weekly:</strong> Mon Gong-call review (1 hr · rep + manager) · Wed objection-handler library update · Fri pipeline forecast.</li>
        <li><strong>Monthly:</strong> Conversion-rate-by-JTBD audit · Proposal-to-won-rate audit · objection-frequency analysis · 12-month Bowtie cohort review (when data exists).</li>
        <li><strong>Quarterly:</strong> Full sales playbook refresh · new objection-handlers added · Proposal template review · case-study library refresh.</li>
      </ul>
    </div>

    {/* 8.7 KPI SCORECARD */}
    <div className="kw-block">
      <h3>8.7 · KPI Scorecard — Sales Performance M1 → M24</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>Inspections booked / month</td><td>62</td><td>182</td><td>358</td><td>650</td><td>1,060</td></tr>
          <tr><td>Inspection held rate</td><td>78%</td><td>84%</td><td>88%</td><td>90%</td><td>91%</td></tr>
          <tr><td>Inspections held / month</td><td>48</td><td>153</td><td>315</td><td>585</td><td>965</td></tr>
          <tr><td>Inspection → Proposal sent rate</td><td>92%</td><td>95%</td><td>97%</td><td>98%</td><td>98%</td></tr>
          <tr><td>Proposal → Won rate</td><td>22%</td><td>30%</td><td>36%</td><td>40%</td><td>43%</td></tr>
          <tr><td>Won deals / month</td><td>10</td><td>44</td><td>110</td><td>229</td><td>406</td></tr>
          <tr><td>Avg deal value</td><td>$48k</td><td>$52k</td><td>$56k</td><td>$60k</td><td>$65k</td></tr>
          <tr><td>Monthly POE revenue (sales-attributed)</td><td>$480k</td><td>$2.29M</td><td>$6.16M</td><td>$13.74M</td><td>$26.39M</td></tr>
          <tr><td>POE GP @ 32%</td><td>$154k</td><td>$732k</td><td>$1.97M</td><td>$4.40M</td><td>$8.44M</td></tr>
          <tr><td>Sales rep capacity (1 rep = 60 Inspections/mo)</td><td>1 rep</td><td>3 reps</td><td>6 reps</td><td>11 reps</td><td>18 reps</td></tr>
          <tr><td>Sales-cycle avg (Inspection booked → won)</td><td>26 days</td><td>21 days</td><td>18 days</td><td>16 days</td><td>15 days</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Sales rep capacity model: 1 rep = 60 Inspections/mo at 90 min each + Proposal authoring + follow-up = 250 productive hours/mo. Growth to 18 reps M24 implies hiring cadence of ~1 new rep/month from M3 onward. Recruitment + onboarding budget reflected in P-12 instrumentation cost model.</p>
    </div>

    {/* 8.8 BOWTIE HANDOVER */}
    <div className="kw-block">
      <h3>8.8 · Bowtie Handover — Deposit Cleared → Customer Lifecycle Activated</h3>
      <p>[WBD-BOW] Winning by Design Bowtie model: the deal is not the end of the funnel · it is the start of the second funnel (Onboard → Adopt → Expand → Renew → Refer). For POE, "expand" means second-project + referral + advocacy.</p>
      <table className="services-table meta-table">
        <thead><tr><th>Trigger</th><th>Stage</th><th>Automated action</th><th>Human action</th></tr></thead>
        <tbody>
          <tr><td>Deposit cleared</td><td>Onboard (Day 0)</td><td>HubSpot moves deal to "Won" · auto-email "Welcome to your Resort Yard build" · Bowtie M0 sequence starts</td><td>Sales rep personal handover call within 24h</td></tr>
          <tr><td>Day 1 of build</td><td>Adopt (W1)</td><td>SMS "Your build started today · here's your live build dashboard URL" · weekly photo + video update sequence triggered</td><td>Project manager handshake on site Day 1</td></tr>
          <tr><td>Day 14 mid-build</td><td>Adopt (W2)</td><td>Sales rep + PM joint site walk · variation review · happy-snap captured for socials with consent</td><td>Sales rep on site</td></tr>
          <tr><td>Day 30 handover</td><td>Onboard complete</td><td>"Resort Yard Handover Ceremony" — branded keys handover · DBA-3 "Built in 30 Days" certificate framed · drone reveal video shot live · DBA-7 ritual reversed (now they host us)</td><td>Sales rep + PM + creative pod on site</td></tr>
          <tr><td>Day 30 + 24h</td><td>Adopt (Week 5)</td><td>Google review + LSA review request automated · referral incentive ($500 gift card per referred-Inspection-held) introduced</td><td>—</td></tr>
          <tr><td>Day 60</td><td>Expand</td><td>"How's the Resort Yard living?" call from sales rep · referral request reinforced · social post tag request</td><td>Sales rep</td></tr>
          <tr><td>Day 180</td><td>Expand</td><td>6-month seasonal-care email · subtle "small additions?" prompt (e.g. outdoor kitchen · firepit · lighting upgrade)</td><td>—</td></tr>
          <tr><td>Day 365</td><td>Renew</td><td>12-month Resort Yard Health Check · complimentary 60-min on-site visit · re-seal/inspect/test · social-content shoot opportunity</td><td>PM on site · creative pod for shoot</td></tr>
          <tr><td>Year 2-5</td><td>Refer/Advocate</td><td>Annual seasonal email · cross-LOB seed (TDR pest inspection · UR unit reno discussion if applicable) · YBMT-Tribe advocate program</td><td>Carla quarterly newsletter</td></tr>
        </tbody>
      </table>
      <p>Bowtie targets: 28% of POE customers refer at least one new Inspection within 12 months · 8% of POE customers buy second YBMT service (TDR or UR cross-LOB) within 24 months · 90+ Trustindex score by M12.</p>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-08 · 90-min Resort Yard Inspection ritual · 18-page Proposal · 16 objection-handlers · 4 spousal psychology patterns</span>
      <span className="pf-pill">Tech stack: HubSpot · Calendly · PandaDoc · DJI · Gong · iPad · Stripe/Xero · automated Bowtie M0-M5 handover</span>
      <span className="pf-pill">M12: 650 Inspections booked/mo · 229 won deals/mo · $13.7M revenue/mo · 28% referral rate by M12</span>
    </div>
  </section>
)

// ============================================================================
// POE P-09 · SOCIAL CONTENT ENGINE · Instagram-led · DBA-saturated · Bowtie-fed
// ============================================================================
const PGPillar09Social = () => (
  <section id="p09" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-09 · POE · SOCIAL CONTENT ENGINE</span>
      <h2 className="pillar-block-title">P-09 · Social Content Engine · Instagram-Led · DBA-Saturated · Category-Design Through Persistent Aesthetic Repetition</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-9 (Brand/Content) baseline 5.5/10 → 9/10 target. Social is the engine that makes the Resort Yard category visible to non-buyers — the future buyers whose trigger hasn't fired yet. [JR-DBA] Romaniuk: distinctive brand assets must be encountered 7-12 times before they become memory-encoded. [BS-HBG] Sharp: mental availability is built through aesthetic repetition. Social does this work at near-zero cost compared to Meta paid. Instagram is the primary surface, TikTok secondary, LinkedIn tertiary, YouTube reserved for evergreen film-grade content.</p>
    </div>

    {/* 9.1 SOCIAL DOCTRINE */}
    <div className="kw-block">
      <h3>9.1 · POE Social Doctrine — Six Locked Rules</h3>
      <ol>
        <li><strong>Aesthetic discipline before posting velocity.</strong> Every post passes the 7-DBA visual checklist before publish. Better to post 4× per week with DBA fidelity than 14× per week with drift.</li>
        <li><strong>Resort Yard category is the protagonist, not YBMT.</strong> Posts educate buyers on the category (what is a Resort Yard, why 30 days, why 7 zones), then YBMT appears as the proof. [PB-CAT] category-design discipline.</li>
        <li><strong>Customer-built proof &gt; agency-built proof.</strong> 60% of posts feature actual completed YBMT builds with the customer's name + suburb. 40% are category-frame educational + behind-build content.</li>
        <li><strong>No price content. Ever.</strong> Pricing belongs in P-08 Proposal. Social is for trigger formation, not bottom-funnel.</li>
        <li><strong>Comments are sales conversations.</strong> Every comment answered within 2 working hours, weekdays 6am-8pm AEST. DMs answered within 30 minutes 9am-5pm. Social media manager owns SLA.</li>
        <li><strong>Cross-LOB seed in long-form only.</strong> TDR pest content and UR unit content stays on YBMT Group parent handle, not on Resort Yards. Resort Yards is a focused sub-brand handle and category visibility is its only job.</li>
      </ol>
    </div>

    {/* 9.2 PLATFORM ARCHITECTURE */}
    <div className="kw-block">
      <h3>9.2 · Platform Architecture — 4 Surfaces with Locked Roles</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Platform</th><th>Handle</th><th>Role</th><th>Post cadence</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>Instagram</td><td>@ybmtresortyards</td><td>Primary · category visibility · Reels-led mental availability</td><td>5 Reels/wk · 3 carousels/wk · 14 Stories/wk · 1 Live/mo</td><td>Followers + Reach + Saves + DM-to-Inspection</td></tr>
          <tr><td>TikTok</td><td>@ybmtresortyards</td><td>Secondary · younger-demographic reach + viral surface</td><td>5 vertical videos/wk · 1 trend-based/wk</td><td>Views + Shares + Profile clicks</td></tr>
          <tr><td>LinkedIn</td><td>YBMT Resort Yards (Company Page) + Carla Oliver (personal)</td><td>Tertiary · partnerships (P-10) seeding · architect/landscape-designer reach · B2B credibility</td><td>2 company posts/wk · 3 Carla personal posts/wk</td><td>Partner-relevant impressions · partnership inbound</td></tr>
          <tr><td>YouTube</td><td>YBMT Resort Yards channel</td><td>Quaternary · long-form film-grade evergreen · 30-day build timelapses + case-study films + "Resort Yard Manifesto" series</td><td>1 long-form/mo · 2 Shorts/wk</td><td>Watch time · subscriber count · Inspection bookings from YouTube traffic</td></tr>
          <tr><td>Pinterest</td><td>YBMT Resort Yards</td><td>Optional/passive · evergreen image-search surface for design-seeking buyers</td><td>10 pins/wk auto-syndicated from IG · zero original creative</td><td>Outbound clicks to JTBD landings</td></tr>
        </tbody>
      </table>
      <p>Total publishing surface: 5 platforms · ~28 unique creative outputs per week · 2 platforms (Pinterest + LinkedIn-cross) auto-syndicated · 3 platforms requiring native creative (IG + TikTok + YouTube + LinkedIn-original). Social media manager + part-time editor = ~1.5 FTE.</p>
    </div>

    {/* 9.3 CONTENT PILLARS */}
    <div className="kw-block">
      <h3>9.3 · Content Pillars — 6 Repeating Buckets That Compound Aesthetic Memory</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Pillar</th><th>Weekly slot</th><th>Format</th><th>Job</th></tr></thead>
        <tbody>
          <tr><td>1 · Reveal Day (30-day build → final shot)</td><td>2× / week</td><td>Reel · 45-sec · drone-led · DBA-2 lens-flare golden-hour final</td><td>DBA-3 "30 Days" proof + DBA-2 visual encoding</td></tr>
          <tr><td>2 · The 7 Zones (educational series)</td><td>1× / week</td><td>Carousel · 6-slide · DBA-4 typography-led</td><td>Category definition · what is a Resort Yard</td></tr>
          <tr><td>3 · Build Diary (behind-the-build)</td><td>2× / week · Stories</td><td>Stories sequence · 8-frame · raw footage</td><td>Process transparency · trust transfer · team visibility</td></tr>
          <tr><td>4 · Resort Yard Recipe (design tip)</td><td>1× / week</td><td>Reel · 30-sec · DBA-1 lockup intro · split-screen design feature</td><td>Design authority · "this is how we do it"</td></tr>
          <tr><td>5 · Customer Story (case-study Reel)</td><td>1× / week</td><td>Reel · 60-sec · customer-spoken testimonial + before/after</td><td>[BS-HBG] social proof · suburb-specific mental availability</td></tr>
          <tr><td>6 · Manifesto Moment (category leadership)</td><td>1× / fortnight</td><td>Reel · 45-sec · Carla on camera + DBA-4 typography lower-third</td><td>[PB-CAT] category leadership voice · "the Resort Yards POV"</td></tr>
        </tbody>
      </table>
      <p>Total weekly creative output: ~8 native pieces + Stories + auto-syndicated. Every piece passes the 7-DBA visual checklist. Manifesto Moment cadence increases to weekly from M6 once Carla's video bank is healthy.</p>
    </div>

    {/* 9.4 DBA ENFORCEMENT CHECKLIST */}
    <div className="kw-block">
      <h3>9.4 · DBA Enforcement Checklist — 7 Boxes Every Post Must Tick</h3>
      <ol>
        <li><strong>DBA-1 Resort Yard frame:</strong> the phrase "Resort Yard" appears in the post's caption first 100 chars OR on-screen in first 1 sec.</li>
        <li><strong>DBA-2 lens-flare golden-hour shot:</strong> hero visual is shot in golden-hour aesthetic with lens flare characteristic OR is build-diary raw (only build-diary slot exempt).</li>
        <li><strong>DBA-3 "Built in 30 Days" seal:</strong> seal graphic appears in post OR "30 days" appears in caption (90%+ of posts hit one of these · build-diary slot exempt).</li>
        <li><strong>DBA-4 Fraunces+Inter:</strong> on-screen typography uses Fraunces Italic for display and Inter for body. No system fonts. No drift to Arial/Helvetica.</li>
        <li><strong>DBA-5 50/25/12/8/5 palette:</strong> dominant color ratio respected: navy 50% · timber 25% · aqua 12% · cream 8% · charcoal 5%.</li>
        <li><strong>DBA-6 Sonic mnemonic:</strong> all Reels with audio under YBMT's control use the 1.5-second sonic mnemonic as outro (~0:02 before end).</li>
        <li><strong>DBA-7 Inspection ritual referenced:</strong> at least 30% of posts mention "Resort Yard Inspection" in caption or visible CTA (Stories CTA sticker counts).</li>
      </ol>
      <p>Linter rule: any post missing &gt;2 DBA checks is auto-blocked from scheduler. Social media manager reviews exceptions with Carla weekly.</p>
    </div>

    {/* 9.5 INSTAGRAM PROFILE ARCHITECTURE */}
    <div className="kw-block">
      <h3>9.5 · Instagram Profile Architecture — The 0-Click Storefront</h3>
      <ul className="voice-list">
        <li><strong>Bio (150 chars):</strong> "YBMT Resort Yards · Brisbane outdoor entertainment specialist · Built in 30 days · 25yr structural warranty · Book your Resort Yard Inspection ↓"</li>
        <li><strong>Link-in-bio:</strong> Single link (not Linktree) → /pools-gtm landing hub OR custom Hono-built link-in-bio at <code>/links</code> with 6 CTAs: Resort Yard Inspection · 4 JTBD landings · Lookbook download.</li>
        <li><strong>Profile photo:</strong> DBA-1 Resort Yards logo lockup on navy field.</li>
        <li><strong>Highlights (8 covers, custom-designed):</strong> "Reveal Day" · "The 7 Zones" · "Behind The Build" · "Resort Yard Recipes" · "Customer Stories" · "Manifesto" · "FAQ" · "Inspection."</li>
        <li><strong>Pinned grid (3 top posts):</strong> 1 manifesto Reel · 1 best-performing Reveal Day · 1 7-Zones carousel. Refreshed monthly.</li>
        <li><strong>Grid aesthetic:</strong> 3-3-3 rhythm — every third post is a Resort Yard reveal hero, every center is a category-education carousel, every right-column is a customer story. Visible from grid view as a rhythmic visual stack.</li>
      </ul>
    </div>

    {/* 9.6 COMMUNITY OPS & DM PLAYBOOK */}
    <div className="kw-block">
      <h3>9.6 · Community Operations and DM Playbook — Comments Are Sales Conversations</h3>
      <p>Most agency-managed accounts treat comments and DMs as noise. We treat them as the top of the Resort Yard Inspection funnel. The playbook:</p>
      <table className="services-table meta-table">
        <thead><tr><th>Trigger</th><th>Response template (humanised)</th><th>Outcome</th></tr></thead>
        <tbody>
          <tr><td>"Beautiful! How much?"</td><td>"Thank you — that build in Hamilton came in around the middle of our range, between \$60-80k for the scope shown (pool deck, paving, landscape, lighting). Every Resort Yard is custom — would you like to book a 90-min Resort Yard Inspection so we can give you a real number on yours? [link]"</td><td>Re-anchors to value range (not exact \$) · converts price-curiosity to Inspection invite</td></tr>
          <tr><td>"How long did this take?"</td><td>"30 days from contract sign · that's the YBMT guarantee. Day 1 we demolish, Day 30 we hand over keys + 25yr structural warranty. Want to see how the 30 days work? [link to Fast-Track Planner PDF]"</td><td>Re-anchors to DBA-3 promise · routes to P-03 lead magnet</td></tr>
          <tr><td>"Do you work in [suburb]?"</td><td>"Yes — we're regularly in [suburb]. We've delivered Resort Yards in [nearest case-study suburb] just recently. Want to book a Resort Yard Inspection? Free, 90 minutes, on site at your home. [link]"</td><td>Local proof + Inspection invite</td></tr>
          <tr><td>Trolling/negative comment</td><td>Respond once politely. If continued, ignore. Never delete (deletion signals fragility). DBA tone: confident, not defensive.</td><td>Brand-equity preservation</td></tr>
          <tr><td>DM "Just looking"</td><td>"All good — most clients spend 3-6 months looking before they book an Inspection. We're happy to be in your research. Want our 30-Day Fast-Track Resort Yard Planner? [link]"</td><td>Captures lead-magnet opt-in · long-term nurture</td></tr>
          <tr><td>DM with photo of buyer's yard</td><td>"Thanks for sharing! That's a great starting point — looks like the [orientation/size/feature] would work well for [archetype]. Want me to ping our team and get a 90-min Resort Yard Inspection on the calendar? Free, no pressure. [calendly]"</td><td>Highest-intent inbound · direct to Inspection</td></tr>
        </tbody>
      </table>
      <p>DM SLA: 30 min response 9am-5pm AEST · 2 hr response 5pm-9pm · 12 hr response overnight. Owned by social media manager during business hours · escalated to sales for high-intent DMs.</p>
    </div>

    {/* 9.7 USER-GENERATED CONTENT PROGRAM */}
    <div className="kw-block">
      <h3>9.7 · User-Generated Content (UGC) Program — Every Customer Becomes a Creator</h3>
      <p>The handover ritual (P-08 §8.8 Day 30) includes a written customer agreement: "We'd love to feature your Resort Yard. In return, we'll send you a $500 hosting voucher (Brisbane restaurant of your choice) when we publish."</p>
      <ul className="voice-list">
        <li><strong>UGC capture system:</strong> private WhatsApp group per customer · sales rep + creative pod added · customer can drop photos and short videos as they enjoy the yard.</li>
        <li><strong>UGC weekly review:</strong> creative pod reviews UGC inbox each Monday · selects 4-6 pieces · light-edits in CapCut · adds DBA-1 lockup end-card · publishes as Customer Story Reels (Content Pillar 5).</li>
        <li><strong>UGC tagging policy:</strong> customer tagged with consent · customer's suburb in caption · DBA frame "@CustomerName's Resort Yard · Built in [days] · [Suburb]."</li>
        <li><strong>UGC reciprocity:</strong> the $500 voucher is delivered hand-written by sales rep at next contact · doubles as Bowtie-touch-point and referral-priming moment.</li>
        <li><strong>UGC volume target:</strong> by M12, 60% of all Reels feature UGC (raw or lightly edited). This collapses production cost per Reel from ~$400 to ~$80 while raising authenticity-signal that algorithms reward.</li>
      </ul>
    </div>

    {/* 9.8 INFLUENCER & CREATOR PARTNERSHIPS */}
    <div className="kw-block">
      <h3>9.8 · Influencer and Creator Partnerships — Surgical, Local, Aligned</h3>
      <p>Generic influencer campaigns are wasted spend in residential trades. We pursue surgical partnerships with three creator archetypes:</p>
      <ol>
        <li><strong>Brisbane lifestyle creators (5-25k followers, hyper-local).</strong> Target: 6 paid collabs per year. Each creator visits a completed Resort Yard with the customer's consent, films a 90-sec Reel "I just walked through a Resort Yard in [Suburb]." Cost: $500-$1,200 per collab. Tracked via UTM-tagged bio-link.</li>
        <li><strong>Brisbane real-estate agents (Top 50 by GCI).</strong> Target: 12 cross-published case studies per year. Agent posts before/after Resort Yard of a property they sold post-upgrade — they get the listing credit + 3-5% uplift story, we get the Pre-Sale Investor JTBD-4 social proof. Zero cash · pure barter.</li>
        <li><strong>Architect + landscape-designer voices (referral partners from P-10).</strong> Target: 8 co-created Reels per year. The architect explains the design brief, we show the build, customer shares the joy. Aligned with P-10 partnerships engine.</li>
      </ol>
      <p>Total annual influencer budget: ~$15k cash · ~$45k in barter-equivalent. Tracked separately from P-05/P-06 paid spend.</p>
    </div>

    {/* 9.9 KPI SCORECARD */}
    <div className="kw-block">
      <h3>9.9 · KPI Scorecard — Social M1 → M24</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>Instagram followers (@ybmtresortyards)</td><td>800</td><td>3,200</td><td>8,400</td><td>22,000</td><td>48,000</td></tr>
          <tr><td>Instagram monthly reach (unique)</td><td>18k</td><td>62k</td><td>140k</td><td>320k</td><td>620k</td></tr>
          <tr><td>Avg Saves per post</td><td>45</td><td>120</td><td>240</td><td>480</td><td>720</td></tr>
          <tr><td>TikTok followers</td><td>200</td><td>1,500</td><td>5,200</td><td>14,000</td><td>32,000</td></tr>
          <tr><td>TikTok views/month</td><td>40k</td><td>180k</td><td>420k</td><td>1.1M</td><td>2.4M</td></tr>
          <tr><td>YouTube subscribers</td><td>50</td><td>280</td><td>900</td><td>2,800</td><td>8,200</td></tr>
          <tr><td>DM-to-Inspection bookings/mo (social-direct)</td><td>4</td><td>16</td><td>38</td><td>82</td><td>148</td></tr>
          <tr><td>DM-to-Inspection conversion rate</td><td>12%</td><td>18%</td><td>24%</td><td>30%</td><td>34%</td></tr>
          <tr><td>UGC pieces published/month</td><td>2</td><td>8</td><td>16</td><td>24</td><td>32</td></tr>
          <tr><td>Inspections influenced (post-purchase survey: "where did you first hear about us?")</td><td>10%</td><td>18%</td><td>26%</td><td>34%</td><td>40%</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">"Inspections influenced" measures social's true category-design value: even when paid Google captures the click, social often did the trigger-formation work in the months prior. Tracked via mandatory post-purchase 1-question survey ("Before you booked your Inspection, where had you seen YBMT Resort Yards?"). Multi-select. Data fed back to /kpi F1 attribution overlay.</p>
    </div>

    {/* 9.10 GOVERNANCE */}
    <div className="kw-block">
      <h3>9.10 · Governance, Forbidden States, Crisis Protocol</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Posts that drift from DBA aesthetic.</strong> 7-DBA check is non-negotiable. Linter blocks scheduler.</li>
        <li><strong>Forbidden state #2 · "Like and share to win" engagement-bait.</strong> Algorithm down-weights these and brand quality is signalled cheap. Never.</li>
        <li><strong>Forbidden state #3 · Replying to competitor mentions.</strong> Ignore. Never engage. [PB-CAT] dignity preservation.</li>
        <li><strong>Forbidden state #4 · Pricing in captions.</strong> Even ranges. Always route to Inspection. P-08 owns price.</li>
        <li><strong>Forbidden state #5 · Reposting non-YBMT Resort Yards content as inspiration.</strong> Even with credit. Only YBMT builds appear on YBMT Resort Yards channels — except for the influencer collab program §9.8.</li>
        <li><strong>Crisis protocol:</strong> any negative review, complaint, or PR risk surfacing on social → social media manager flags to Carla within 30 minutes · responds publicly within 2 hours acknowledging + moving to DM · resolves in DM · returns publicly only when resolution is mutual.</li>
        <li><strong>Weekly cadence:</strong> Mon content calendar review · Wed DBA audit · Fri analytics review (best/worst-performing post + lessons).</li>
        <li><strong>Monthly cadence:</strong> 30-day content audit · UGC harvest review · influencer collab pipeline review · brand-lift signal review.</li>
        <li><strong>Quarterly cadence:</strong> Aesthetic refresh check (DBA fidelity not drifting) · platform-allocation review (is TikTok delivering vs IG?) · content-pillar performance ranking · UGC program incentive review.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-09 · 5 platforms · 6 content pillars · 28 weekly creatives · 7-DBA linter · UGC program · 17 influencer collabs/yr</span>
      <span className="pf-pill">M12: 22k IG followers · 320k reach/mo · 82 DM-to-Inspections/mo · 34% of Inspections "first heard via social"</span>
      <span className="pf-pill">Category-design through aesthetic repetition · Bowtie-fed customer storytelling · ~1.5 FTE social ops cost</span>
    </div>
  </section>
)

// ============================================================================
// POE P-10 · PARTNERSHIPS & REFERRAL ENGINE · Pool builders · Architects · Agents
// ============================================================================
const PGPillar10Partnerships = () => (
  <section id="p10" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-10 · POE · PARTNERSHIPS &amp; REFERRAL ENGINE</span>
      <h2 className="pillar-block-title">P-10 · Partnerships and Referral Engine · Pool Builders · Architects · Landscape Designers · Real-Estate Agents · The 4-Channel Trust Transfer Network</h2>
      <p className="pillar-block-sub">POOLS-GAP-ANALYSIS-v1 Layer-10 (Channel Diversity) baseline 5.0/10 → 9/10 target. The partnership engine is the most underbuilt opportunity in the POE category. A single pool builder or architect can refer 8-20 Resort Yard Inspections per year if the partnership is structured right · 30 active partners = a referral channel worth ~\$3-5M ARR by M24 without any paid spend. [BS-HBG] Sharp + [JR-DBA] Romaniuk: partners extend mental availability into adjacent buyer journeys YBMT cannot reach directly.</p>
    </div>

    {/* 10.1 PARTNERSHIP DOCTRINE */}
    <div className="kw-block">
      <h3>10.1 · POE Partnership Doctrine — Seven Locked Rules</h3>
      <ol>
        <li><strong>Partners are not lead-broker relationships. They are co-located buyer journeys.</strong> A pool builder isn't selling our service, they're completing their own customer's journey by introducing us as the next step. Trust transfer, not lead trading.</li>
        <li><strong>Mutual value, documented.</strong> Every partnership has a written Partner Agreement specifying what each side delivers + measures. Verbal partnerships drift.</li>
        <li><strong>Referrer pays nothing. Referrer receives value.</strong> No cash for leads (regulator risk + commoditises the relationship). Partner receives: branded marketing collateral · co-published case studies · introductions to our customer base · invitation to Resort Yard Showcase events · annual Partner Award.</li>
        <li><strong>One named relationship owner per partner.</strong> Either Carla (top-20 strategic) or sales rep (top-50). No "anonymous lead from a partner" — every inbound is attributable to a human relationship.</li>
        <li><strong>30-day-build is the unique offer to partners.</strong> Partners refer to us because we deliver their customer's timeline. DBA-3 "Built in 30 Days" is the partner-side hook, not the consumer-side hook.</li>
        <li><strong>No exclusivity demands either way.</strong> Architects work with multiple builders. Pool builders refer multiple deck contractors. Demanding exclusivity insults the partner. We win on relationship quality + execution + customer outcomes.</li>
        <li><strong>Quarterly partner business reviews (QBRs).</strong> Top-20 partners get a 60-min QBR each quarter with Carla — review referred Inspections, won deals, customer satisfaction, joint marketing pipeline. Treats partnerships as a managed account, not a passive list.</li>
      </ol>
    </div>

    {/* 10.2 4 PARTNER CHANNELS */}
    <div className="kw-block">
      <h3>10.2 · The 4 Partner Channels — Roles, Volume, Trust Economics</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Channel</th><th>Target partner count M12</th><th>Avg referrals/partner/yr</th><th>Primary JTBD fed</th><th>Trust-transfer mechanism</th></tr></thead>
        <tbody>
          <tr><td>1 · Brisbane Pool Builders</td><td>20</td><td>8-12</td><td>JTBD-2 Pool-Completion</td><td>"Your customer's pool is in. Here's who finishes the rest in 30 days."</td></tr>
          <tr><td>2 · Architects (residential + landscape)</td><td>15</td><td>3-6</td><td>JTBD-1 Fast-Track · JTBD-3 Replacement</td><td>Architect designs · YBMT delivers to spec · 25yr structural warranty backs the architect's drawing</td></tr>
          <tr><td>3 · Landscape Designers</td><td>12</td><td>4-7</td><td>JTBD-1 · JTBD-2</td><td>Designer owns softscape · YBMT delivers hardscape in 30 days · designer's reputation intact</td></tr>
          <tr><td>4 · Brisbane Real-Estate Agents (Top 50 GCI)</td><td>25</td><td>2-4</td><td>JTBD-4 Pre-Sale Investor</td><td>Agent's listing presentation includes Resort Yard ROI uplift · seller buys · agent sells higher · YBMT books Inspection</td></tr>
        </tbody>
      </table>
      <p>Total active partners M12 target: 72. Conservative referrals: 72 × ~5 avg = ~360 partner-sourced Inspections/year (~30/month) by M12. By M24, 110 active partners producing ~660 Inspections/year (~55/month).</p>
    </div>

    {/* 10.3 CHANNEL 1 · POOL BUILDERS */}
    <div className="kw-block">
      <h3>10.3 · Channel 1 — Brisbane Pool Builders · The "Completion Continuation" Partnership</h3>
      <p>Pool builders install pools but rarely complete surrounds beyond a minimal coping. Their customer is left with an installed pool and a barren yard. The handover gap is the partnership opportunity.</p>
      <p><strong>Target pool builder profile:</strong> Brisbane-based · 30-80 pools/yr installed · BSA-licensed · customer satisfaction track record (Google rating 4.7+). Top-20 by volume targeted by Carla personally; broader 40 via sales rep outreach.</p>
      <p><strong>The Partner Offer to pool builders:</strong></p>
      <ul className="voice-list">
        <li><strong>Co-branded "Pool-Completion" lookbook</strong> — 24-page hardcover · pool builder's brand + YBMT Resort Yards · 12 case studies · 12 design archetype features · 100 copies/year supplied to each top-20 partner.</li>
        <li><strong>"Resort Yard Inspection" handover sticker</strong> — small (50mm × 50mm) DBA-1 sticker placed on the pool's equipment-pad cover when builder hands over. QR routes to <code>/pool-completion</code> JTBD landing.</li>
        <li><strong>Joint customer thank-you ritual</strong> — when pool builder hands over keys, they hand the customer a YBMT Resort Yards welcome card pre-printed with a personalised note. ~1k cards/yr per top-20 partner.</li>
        <li><strong>Quarterly co-promotion email</strong> — pool builder's customer database (with consent) receives 4 emails/yr that are 80% pool-builder content + 20% Resort Yard educational. Drives Inspection bookings.</li>
        <li><strong>Resort Yard Showcase event invites</strong> — top-20 partners invited to quarterly Resort Yard Showcase (an open-day at a completed build · architects + landscape designers + pool builders + media + select customers · ~80 attendees · catered · YBMT brand-experience event).</li>
        <li><strong>Annual Partner Award</strong> — "Brisbane Resort Yard Partner of the Year" · social-promoted · partner's marketing team uses for their own marketing.</li>
      </ul>
      <p><strong>What YBMT does NOT offer pool builders:</strong> cash for leads · exclusive territories · backdoor pricing · margin-share on jobs · branded-content with their own copy approvals. Boundaries protect brand equity.</p>
    </div>

    {/* 10.4 CHANNEL 2 · ARCHITECTS */}
    <div className="kw-block">
      <h3>10.4 · Channel 2 — Architects (Residential and Landscape) · The "Spec Builder" Partnership</h3>
      <p>Architects design Resort Yards but most struggle to find builders who deliver to spec on time. We are the build arm of their drawing.</p>
      <p><strong>Target architect profile:</strong> Brisbane + Gold Coast · firms with 4-15 staff · residential focus or hybrid · published portfolio of indoor-outdoor flow projects · annual revenue \$1-8M.</p>
      <p><strong>The Partner Offer to architects:</strong></p>
      <ul className="voice-list">
        <li><strong>Spec-Build Pricing Indication tool</strong> — architects access a private dashboard where they upload their drawing pack and receive an indicative cost band within 48h. Lets architects scope realistic budgets for their clients without a full Proposal cycle.</li>
        <li><strong>25-Year Structural Warranty back-up</strong> — when YBMT builds to architect's spec, the architect's drawing carries our warranty. Reduces architect's professional indemnity exposure.</li>
        <li><strong>Joint case-study program</strong> — every completed architect-collaborated Resort Yard becomes a published case study · architect credited prominently · co-published on both websites · feature shoot included.</li>
        <li><strong>30-day build guarantee with architect-direct daily reporting</strong> — architects receive a daily build-progress photo + 60-sec video for the 30 days. Demonstrates respect for their professional brand.</li>
        <li><strong>"Resort Yard Architects' Lunch" quarterly</strong> — Carla hosts 12 architects per quarter at a long lunch · case-study presentation · open Q&amp;A on what's hard about specifying outdoor work · pure relationship investment.</li>
        <li><strong>Spec library access</strong> — architects can request the YBMT detail library (250+ detail drawings — coping junctions · waterline finishes · drainage falls · expansion joints · paving substrates) for use in their own drawings. Time-saver for the architect; ensures buildability when they spec.</li>
      </ul>
    </div>

    {/* 10.5 CHANNEL 3 · LANDSCAPE DESIGNERS */}
    <div className="kw-block">
      <h3>10.5 · Channel 3 — Landscape Designers · The "Hardscape Backbone" Partnership</h3>
      <p>Landscape designers own softscape (plants, irrigation, lighting) but most do not deliver hardscape themselves (paving, decking, pool surrounds, retaining). We become their hardscape backbone.</p>
      <p><strong>Target designer profile:</strong> Brisbane + Gold Coast · 1-5 designers · residential focus · portfolio includes pool-adjacent jobs · ~$300k-$2M annual fees.</p>
      <p><strong>The Partner Offer to landscape designers:</strong></p>
      <ul className="voice-list">
        <li><strong>Joint scope discipline tool</strong> — clear written scope-split between designer (softscape design + planting + irrigation + finishing) and YBMT (hardscape demo + structure + paving + lighting infrastructure). Customer signs single contract per side · no overlap.</li>
        <li><strong>Designer-margin protection</strong> — when YBMT is sub-engaged by a designer, we do not market direct to that customer for 12 months. Designer's relationship preserved.</li>
        <li><strong>Co-published "Resort Yard with [Designer Name]" Reels</strong> — joint social content where designer narrates the planting brief and YBMT shows the substrate. 1-2 collabs/yr per active designer partner. P-09 §9.8 integrated.</li>
        <li><strong>Annual "Outdoor Living Together" half-day workshop</strong> — Carla invites all 12 partner designers to a half-day workshop on what's coming next in Brisbane outdoor design + case-study panels + Q&amp;A. Pure relationship investment.</li>
        <li><strong>Designer's customer thank-you ritual</strong> — when a designer-referred Resort Yard hands over, the customer receives a thank-you card naming the designer explicitly · referral attribution preserved · designer credited.</li>
      </ul>
    </div>

    {/* 10.6 CHANNEL 4 · REAL-ESTATE AGENTS */}
    <div className="kw-block">
      <h3>10.6 · Channel 4 — Real-Estate Agents (Top 50 GCI) · The "Pre-Sale ROI" Partnership</h3>
      <p>Top-tier Brisbane agents (~Top 50 by gross commission income) routinely advise sellers to invest \$30-80k in outdoor upgrades pre-listing for 3-5% sale-price uplift. They need a builder they can trust to deliver in tight pre-listing windows. We are it.</p>
      <p><strong>Target agent profile:</strong> Top 50 GCI Brisbane · personal brand-driven (not just franchise) · listing avg \$1.4M+ · active social presence · LinkedIn pinned content includes "pre-sale upgrades" themes.</p>
      <p><strong>The Partner Offer to agents:</strong></p>
      <ul className="voice-list">
        <li><strong>30-Day Pre-Sale Build Guarantee</strong> — when an agent refers a seller, we guarantee build completion 7 days before agent's marketing photo-shoot day. Written guarantee. \$500/day late penalty.</li>
        <li><strong>"Pre-Sale Outdoor ROI Worksheet" co-branded version</strong> — the lead magnet from P-03 §3.5 is co-branded with the agent's headshot + contact. Agent uses this in listing presentations · YBMT logo visible · agent gets the win.</li>
        <li><strong>3-5% Uplift Case-Study library</strong> — 6 specific Brisbane suburb case studies tracking pre-Resort-Yard sale-price comp vs post-Resort-Yard actual sale price. Agent can use as social proof in listing pitches.</li>
        <li><strong>Agent's photographer coordination</strong> — YBMT coordinates directly with the agent's listing photographer to ensure the Resort Yard is photographed within the 7-day post-completion DBA-2 lens-flare window for maximum visual impact.</li>
        <li><strong>Joint LinkedIn case-study posts</strong> — agent + Carla co-post the sale-completion case studies. Agent's brand authority + YBMT category visibility. P-09 §9.8 integrated.</li>
        <li><strong>Annual "Brisbane Sale-Price Outdoor Index" report</strong> — YBMT publishes an annual data-led report on outdoor upgrade ROI in Brisbane suburbs · top-20 agents quoted in report · agent's annual marketing seeded.</li>
      </ul>
    </div>

    {/* 10.7 PARTNER RECRUITMENT FUNNEL */}
    <div className="kw-block">
      <h3>10.7 · Partner Recruitment Funnel — From Cold Outreach to Active Partner</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Stage</th><th>Activity</th><th>Owner</th><th>Conversion target</th></tr></thead>
        <tbody>
          <tr><td>1 · Target list build</td><td>Carla + sales mgr compile 200 Brisbane targets across 4 channels per year</td><td>Carla</td><td>200 target list</td></tr>
          <tr><td>2 · Warm intro path identified</td><td>LinkedIn 2nd-degree connections · customer base referrals · industry events</td><td>Carla</td><td>120/200 warm intros possible</td></tr>
          <tr><td>3 · Initial outreach</td><td>Personalised LinkedIn message + case-study attachment · NO ASK · pure value-share</td><td>Carla</td><td>40% response rate (~48 responses)</td></tr>
          <tr><td>4 · Resort Yard Showcase invite</td><td>Quarterly Showcase event · 80 attendees · 60-min program + 90-min networking</td><td>Carla + events</td><td>50% attend at least once (~24)</td></tr>
          <tr><td>5 · 1:1 partnership conversation</td><td>60-min call or coffee · review Partner Offer · scope mutual fit</td><td>Carla</td><td>70% progress (~17 partners)</td></tr>
          <tr><td>6 · Partner Agreement signed</td><td>Written agreement · measurable deliverables · 12-month term</td><td>Carla + legal</td><td>~14 signed/year</td></tr>
          <tr><td>7 · Onboarding</td><td>Partner co-branded collateral produced · sales rep introduction · first referral pipeline call within 30 days of sign</td><td>YDT ops + sales rep</td><td>~14 onboarded/year</td></tr>
          <tr><td>8 · QBR cadence</td><td>Quarterly 60-min review · referrals tracked · case studies refreshed · adjustments made</td><td>Carla or sales rep</td><td>4 QBRs/year per partner</td></tr>
        </tbody>
      </table>
      <p>Annual partner-growth target: ~14 net new signed partners/yr. Combined with retention (10% attrition assumed), the active partner pool grows ~12/yr — reaches 72 active partners by M12 (M0 starting at 0) and 110 by M24.</p>
    </div>

    {/* 10.8 ATTRIBUTION & TECHNOLOGY */}
    <div className="kw-block">
      <h3>10.8 · Attribution and Technology — Tracking Who Referred Whom</h3>
      <ul className="voice-list">
        <li><strong>Unique partner referral URLs:</strong> each active partner receives a unique URL slug (e.g. <code>/inspection?p=acme-pools</code>) which auto-attributes referred Inspection bookings to the partner in HubSpot.</li>
        <li><strong>Partner-branded QR code stickers</strong> distributed to top-20 partners — physical-to-digital attribution.</li>
        <li><strong>"How did you hear about us?" mandatory question on Inspection booking form</strong> — with partner names listed as multi-select (top-50 partners shown by suburb relevance). Belt-and-braces alongside URL tracking.</li>
        <li><strong>Partner dashboard</strong> (Hono SSR + D1) at <code>/partner-portal</code> · authenticated · shows: Inspections referred YTD · won deals · revenue attributed · case studies published · next QBR date.</li>
        <li><strong>HubSpot deal tagging:</strong> every deal carries a <code>partner_attribution</code> field. Reports run monthly. Joint marketing decisions data-led.</li>
        <li><strong>Quarterly partner reports</strong> — every active partner receives a 1-page report showing their referrals + outcomes. Strengthens commitment + retention.</li>
      </ul>
    </div>

    {/* 10.9 KPI SCORECARD */}
    <div className="kw-block">
      <h3>10.9 · KPI Scorecard — Partnerships M1 → M24</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>Active partners (all 4 channels)</td><td>18</td><td>42</td><td>72</td><td>110</td></tr>
          <tr><td>Resort Yard Showcase events held</td><td>1</td><td>2</td><td>4</td><td>8</td></tr>
          <tr><td>Showcase total attendees</td><td>60</td><td>140</td><td>320</td><td>720</td></tr>
          <tr><td>Inspections referred by partners / month</td><td>5</td><td>14</td><td>30</td><td>55</td></tr>
          <tr><td>Partner-referred Proposal-sent rate</td><td>96%</td><td>97%</td><td>98%</td><td>98%</td></tr>
          <tr><td>Partner-referred Proposal-to-Won rate</td><td>45%</td><td>52%</td><td>58%</td><td>62%</td></tr>
          <tr><td>Won deals from partners / month</td><td>2</td><td>7</td><td>17</td><td>34</td></tr>
          <tr><td>Avg deal value partner-referred</td><td>$58k</td><td>$62k</td><td>$68k</td><td>$74k</td></tr>
          <tr><td>Partner-attributed revenue / month</td><td>$116k</td><td>$434k</td><td>$1.16M</td><td>$2.51M</td></tr>
          <tr><td>Partner-attributed GP @ 32% / month</td><td>$37k</td><td>$139k</td><td>$371k</td><td>$804k</td></tr>
          <tr><td>Cost-per-Inspection (partner channel)</td><td>$240</td><td>$120</td><td>$78</td><td>$52</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Partner-referred Proposal-to-Won rate is materially higher (~58% vs ~40% blended) because partner-referred buyers arrive with trust pre-transferred. This is the channel-economics moat: lower CPI + higher win rate + larger deal size = the most profitable per-dollar acquisition channel in the POE mix. Costs reported above include partner-collateral printing + Showcase event production + QBR time-cost · do not include cash-for-leads (zero).</p>
    </div>

    {/* 10.10 GOVERNANCE */}
    <div className="kw-block">
      <h3>10.10 · Governance, Forbidden States, Anti-Patterns</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Paying cash for leads.</strong> Never. Erodes professional partnerships into broker relationships and triggers BSA conduct-of-business risks.</li>
        <li><strong>Forbidden state #2 · Marketing direct to a partner's customer base without partner consent.</strong> Trust violation. Partnership dissolves. Carla audits Meta + Google audience overlap quarterly.</li>
        <li><strong>Forbidden state #3 · Exclusivity demands.</strong> "You must only refer to us" insults the partner and limits their professional flexibility. We win on quality, not lock-in.</li>
        <li><strong>Forbidden state #4 · Anonymous "partner inbound" leads.</strong> Every partner-referred Inspection must be traceable to a named relationship-owner. HubSpot field mandatory.</li>
        <li><strong>Forbidden state #5 · Showcase events that pitch.</strong> Showcases are 80% education + 20% experience. No pitch decks. No sales pressure. The build speaks. The customer speaks. We don't.</li>
        <li><strong>Annual partner attrition target:</strong> &lt; 12%. If exceeded, partner-experience review triggered.</li>
        <li><strong>Quarterly Partner Voice survey:</strong> 5-question NPS-style survey to all active partners · target Partner NPS &gt; 60 · acted on within 30 days of receipt.</li>
        <li><strong>Bi-annual partner award:</strong> "Brisbane Resort Yard Partner of the Year" awarded H1 + H2 · broadcast on LinkedIn + IG + LinkedIn case-study post · physical award delivered to partner office.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-10 · 4 channels · 72 active partners M12 · 110 partners M24 · zero cash-for-leads · 8 Showcase events/yr by M24</span>
      <span className="pf-pill">M12: 30 partner-Inspections/mo · 17 won deals/mo · $1.16M revenue/mo · $78 CPI vs $132 paid CPI · 58% close rate</span>
      <span className="pf-pill">Trust transfer + JTBD coverage: Pool Builders → JTBD-2 · Architects → JTBD-1/3 · Designers → JTBD-1/2 · Agents → JTBD-4</span>
    </div>
  </section>
)
