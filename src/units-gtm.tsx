/**
 * /units-gtm — DOC 6 · Phase 4 · Unit Renovations GTM Operating Paper
 * Creative priority 3 of 3 · 20% sales mix · 28% GPM · volume-velocity LOB
 * Built to CMO-DELIVERY-METHOD v1.0 (12-pillar definition of done · P-07 deferred)
 * Built on top of DOC 3 strategic foundation (11 operating manuals · 145/145 markers)
 * Built against UNITS-GAP-ANALYSIS-v1 audit (target 9/10 partner-grade depth)
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
 * Sub-brand identity: YBMT Units (clear-of-clutter sub-brand · investor+owner-occupier scope)
 * Category-defining frame: "Renovations That Settle Quietly — Body Corporate, Tenant, Owner-Occupier"
 *
 * The Unit Commuter route: tight, repeatable, body-corporate-friendly,
 * 4–10 week build window, $28k–$120k AOV, volume-velocity economics.
 * Persona overlay onto Sarah & Mark: a Mark with a Toowong investment unit,
 * a Sarah considering downsizing from the Bulimba family home to a New Farm
 * riverside two-bedder. Same parent persona, different decision frame.
 *
 * Authority: Carla Oliver · Acting CMO · YBMT Group
 */

import type { FC } from 'hono/jsx'
import { UpstreamAnchor } from './upstream-anchor'

// ============================================================================
// HUB BAR — top of every DOC 6 page · cross-doc navigation
// ============================================================================
const UGHubBar: FC = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <span class="dochub-eyebrow">YBMT GROUP · MARKETING STRATEGY HANDOVER</span>
        <span class="dochub-title">DOC 6 · UNITS GTM OPERATING PAPER · UNIT COMMUTER CARRIAGE</span>
      </div>
      <nav class="dochub-nav">
        <a href="/ymt-group-strategy" class="dochub-link">Strategy Index</a>
        <a href="/termite-gtm" class="dochub-link">DOC 4 · Termite</a>
        <a href="/pools-gtm" class="dochub-link">DOC 5 · Pools</a>
        <a href="/units-gtm" class="dochub-link dochub-link-active">DOC 6 · Units</a>
      </nav>
    </div>
  </div>
)

// ============================================================================
// PAGE NAV — pillar jump-links · sticky · 12 P-pillars
// ============================================================================
const UGNav: FC = () => (
  <nav class="pillar-nav" aria-label="Pillars">
    <div class="pillar-nav-inner">
      <span class="pillar-nav-label">PILLARS</span>
      <a href="#p01">P-01 Brand</a>
      <a href="#p02">P-02 Website</a>
      <a href="#p03">P-03 Lead Magnets</a>
      <a href="#p04">P-04 SEO/GEO</a>
      <a href="#p05">P-05 Google</a>
      <a href="#p06">P-06 Meta</a>
      <a href="#p08">P-08 Sales</a>
      <a href="#p09">P-09 Social</a>
      <a href="#p10">P-10 Partners</a>
      <a href="#p11">P-11 Print</a>
      <a href="#p12">P-12 KPI</a>
    </div>
  </nav>
)

// ============================================================================
// HERO — opens the Unit Commuter narrative · sets stake + sub-brand
// ============================================================================
const UGHero: FC = () => (
  <section class="pillar-hero">
    <div class="pillar-hero-inner">
      <div class="hero-eyebrow">DOC 6 · PHASE 4 · UNIT RENOVATIONS GTM</div>
      <h1 class="hero-title">
        Renovations that <span class="hero-italic">settle quietly</span> —
        body-corporate friendly, tenant-respectful, signed-off in 30 days.
      </h1>
      <p class="hero-sub">
        The Unit Commuter carriage. Tight build windows (4–10 weeks). $28k–$120k AOV.
        Volume-velocity economics. The third route on the YBMT railway — and the one
        that compounds the bowtie 30× LTV the fastest because investor-owners hold
        multiple properties, and owner-occupiers know fifteen neighbours in the same
        strata. <strong>Built like it's our own home.</strong>
      </p>
      <div class="hero-meta">
        <div class="hero-meta-card">
          <span class="hmc-label">LOB SCOPE</span>
          <span class="hmc-val">Kitchen · Bathroom · Whole-unit refresh · BCM-coordinated upgrades · Pre-sale renovations</span>
        </div>
        <div class="hero-meta-card">
          <span class="hmc-label">BUILD WINDOW</span>
          <span class="hmc-val">4–10 weeks · 80% of jobs complete in &lt; 6 weeks · tenant-vacancy-window aware</span>
        </div>
        <div class="hero-meta-card">
          <span class="hmc-label">AOV BAND</span>
          <span class="hmc-val">$28k (cosmetic refresh) → $120k (whole-unit gut) · blended avg $52k · 28% GPM</span>
        </div>
        <div class="hero-meta-card">
          <span class="hmc-label">PERSONA OVERLAY</span>
          <span class="hmc-val">Sarah &amp; Mark as investor-owner (Toowong unit) OR downsizer (New Farm two-bedder)</span>
        </div>
      </div>
    </div>
  </section>
)

// ============================================================================
// DOCTRINE BLOCK — 8 rules · the locked operating principles for this LOB
// ============================================================================
const UGDoctrine: FC = () => (
  <section class="doctrine-block">
    <div class="doctrine-inner">
      <h2 class="doctrine-title">Operating Doctrine — DOC 6 Units · 8 Locked Rules</h2>
      <ol class="doctrine-list">
        <li>
          <strong>Rule 1 · The unit is not a house.</strong> Body-corporate by-laws,
          strata committee approvals, working-hour restrictions (7am–3pm in most
          buildings), lift-protection requirements, and shared-wall acoustic
          obligations are not edge-cases — they are the operating environment.
          Every YBMT Units job arrives with a BCM Approval Pack (Pillar P-03)
          before scope is finalised. <em>No BCM pack = no quote.</em>
        </li>
        <li>
          <strong>Rule 2 · Same parent · same promise · same Sarah &amp; Mark.</strong>
          The Units sub-brand inherits "Built like it's our own home" from the
          parent (WS-02). The persona is the same Sarah &amp; Mark from WS-04,
          overlaid as either investor-owner (multiple-property holder) or downsizer
          (selling the family home to move into a two-bedder). The trust artefacts
          (QBCC license · $20M PL · 12 years · Carla's direct line) are identical.
          What changes: the unit-specific JTBDs, the BCM-coordination ritual, the
          tenant-vacancy window, the velocity expectation.
        </li>
        <li>
          <strong>Rule 3 · Volume-velocity, not bespoke craft.</strong> Where Pools
          is a 6-month bespoke build and Termite is a 4–8 week insurance-paid
          repair, Units is volume-velocity: 8 jobs in flight simultaneously at M12,
          repeatable scope patterns, productised pricing tiers (Refresh / Renew /
          Reset · §1.5 below), 4–10 week turnaround mandatory. <em>The carriage is
          built for throughput, not for theatrics.</em>
        </li>
        <li>
          <strong>Rule 4 · The bowtie expansion engine is at maximum velocity here.</strong>
          A Resort Yards customer takes 12–18 months to convert into a Units F1
          conversation (WS-05 §5.7). An investor-owner Units customer converts into
          a second Units job within 4–8 months (the next unit in their portfolio)
          and a Termite annual inspection within 12 months (every YBMT Units job
          ships with the annual termite voucher per Pools P-11 §11F.1 doctrine
          extended). M24 modelled: 1.6 cross-LOB jobs per Units customer.
        </li>
        <li>
          <strong>Rule 5 · Five upstream anchors are non-negotiable.</strong>
          The 5 anchors locked in CONGRUENCY-DOCTRINE-v1.md must appear in every
          page of this document and every downstream marketing-mix asset: WS-04
          persona (Sarah &amp; Mark) · WS-01 category (Whole-of-Home Stewardship) ·
          WS-02 promise ("Built like it's our own home") · WS-05 economics
          (30× cross-LOB LTV over 10 years · bowtie expansion) · WS-11 KPI
          contract (F1 → F2 → F3 · MEDDPICC · MMM). Coverage thresholds enforced
          (Termite ≥ 6 refs · Pools ≥ 4 refs · Units own-LOB ≥ saturated).
        </li>
        <li>
          <strong>Rule 6 · The trust transfer to body-corporate managers (BCMs) is the
          channel moat.</strong> Brisbane has ~340 active BCM firms (Whittles · Archers
          · BCsystems · etc.) managing the strata schemes where YBMT Units customers
          live. The P-10 partnership channel here is BCM relationships — once a BCM
          knows YBMT will deliver to lot-owner specification with by-law compliance,
          tidy-site rules, and zero common-property damage, they recommend us to every
          unit-owner in the scheme who asks. This is the highest-LTV partner channel
          in the LOB.
        </li>
        <li>
          <strong>Rule 7 · The pre-sale renovation is the highest-AOV JTBD.</strong>
          A Sarah &amp; Mark preparing a unit for sale will spend $65k–$95k for an
          $180k–$240k uplift in achieved sale price. The "pre-sale renovation"
          JTBD-4 (P-02 §2.4) is the most profitable per-job + carries the strongest
          realtor referral channel (LJ Hooker · Belle · Place · Ray White local
          principals — see P-10). This LOB lives or dies on realtor relationships.
        </li>
        <li>
          <strong>Rule 8 · MEDDPICC at a different cadence than Pools.</strong> Units
          MEDDPICC is shallower (faster decision · lower AOV · lower emotional load)
          but two fields take on outsized weight: <strong>Decision Process</strong>
          (the BCM approval pathway · who at BCM signs off + how long they take) and
          <strong>Champion</strong> (who in the household drives the project —
          usually one person, not the spouse-coalition of Pools). MEDDPICC scorecard
          gate ≥ 12/21 (vs. ≥ 16/21 for Pools) — lower bar reflects faster cycle.
        </li>
      </ol>
    </div>
  </section>
)

export const renderUnitsGTM = () => (
  <>
    <UGHubBar />
    <UGNav />
    <UGHero />
    <UGDoctrine />
    <UpstreamAnchor doc="DOC 6 · Units Renovations GTM Kit" />
    <UGPillar01Brand />
    <UGPillar02Website />
    <UGPillar03LeadMagnets />
    <UGPillar04SeoGeoAeo />
    {/* Pillars P-05..P-12 appended in subsequent cycles · P-07 Email deferred to WS-10 */}
  </>
)

/* ============================================================================
 * PILLAR P-01 · BRAND IDENTITY KIT  (YBMT Units sub-brand)
 *
 * Doctrine binding:
 *   - WS-02 promise — "Built like it's our own home" is the parent promise.
 *     Sub-brand inherits intact. Visual system MUST not fragment the trust.
 *   - WS-04 persona — Sarah & Mark as investor-owner OR downsizer.
 *     Visual system reads "calm · compliant · efficient" not "luxe theatrics".
 *   - WS-07 DBAs — 7 codified DBAs · same navy/timber/aqua/cream palette but
 *     applied with restraint to suit the body-corporate environment. The
 *     "loud" treatments used on a Pools build site (6×3m hoarding) are
 *     replaced with "considered" treatments (A4 BCM-approval folder, neat
 *     hi-vis, tidy-site protocols). DBAs codified for the Units medium.
 *   - WS-01 category — "Whole-of-Home Stewardship" expressed via the cross-
 *     LOB bowtie: same family of tradespeople, same warranty stack, same
 *     Carla direct line — across the unit, the investment property, and
 *     when Sarah & Mark eventually buy a house, the Pools build too.
 *   - WS-11 KPI — every brand asset routes to a tracked event via P-12.
 *
 * Cross-LOB inheritance:
 *   - Logo lockup mirrors Pools P-01 §1.1 endorsement architecture (parent
 *     YBMT bold sans · sub-brand "Units" Fraunces italic).
 *   - QBCC + PL insurance + 12-yr trust strip identical to TDR + Pools.
 *   - Vehicle livery + uniform spec inherited from Pools P-11 §11A with
 *     Units-specific modifications (smaller fleet, lift-friendly tools).
 *
 * Audit elevation: Mirrors /pools-gtm P-01 depth · adapted for $28k–$120k
 * AOV + 4–10 week build window + BCM-compliant aesthetic restraint.
 * ============================================================================ */
const UGPillar01Brand = () => (
  <section className="pillar-block pillar-block-rev" id="p01">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-01 · BRAND IDENTITY KIT — YBMT UNITS</span>
      <h2 className="pillar-block-title">P-01 · Brand Identity Kit · YBMT Units · Sub-brand Architecture · 7 Distinctive Brand Assets Codified for the Body-Corporate Environment</h2>
      <p className="kw-block">
        The Units sub-brand operates in a different aesthetic register than Resort
        Yards or Termite Damage Repair. <strong>Sarah &amp; Mark — whether as
        investor-owner or downsizer — judge the brand by whether the BCM approval
        runs cleanly, the building manager nods on the lift on day one, and the
        neighbouring lot-owner does not file an acoustic complaint.</strong>
        Theatre is forbidden. The 7 DBAs are inherited from WS-07 but expressed
        through restraint, compliance signalling, and tidy-site presentation.
        The brand promise — "Built like it's our own home" — is identical to
        Pools and Termite (WS-02). What changes is the medium: less loud, more
        precise. The Romaniuk distinctiveness rule still applies (0.2-second
        recognition with the wordmark removed) — but the surfaces are smaller,
        the typography quieter, the colour distribution shifted toward navy and
        cream (less aqua, less timber, more restraint).
      </p>
    </div>

    {/* ---------- 1.1 Sub-brand naming + endorsement architecture ---------- */}
    <div className="kw-block">
      <h4>1.1 · Sub-brand naming &amp; endorsement architecture</h4>
      <ul className="voice-list">
        <li><strong>Parent brand:</strong> YBMT (Yang Building &amp; Maintenance Team) — credibility endorsement, 12-year operating history, $20M PL insurance, QBCC Open Builder licence 1234567.</li>
        <li><strong>Sub-brand (LOB 3 of 3):</strong> <strong>YBMT Units</strong> — scope: kitchen renovation · bathroom renovation · whole-unit refresh · BCM-coordinated common-property upgrades · pre-sale renovation packages. Named for what we build (clear · functional · investor-legible) rather than aspirational language ("Resort Yards" elevation would mis-signal in the BCM environment where understatement signals competence).</li>
        <li><strong>Lockup rule:</strong> "YBMT" set bold sans (Inter ExtraBold) · "Units" set serif italic (Fraunces Italic 600). Vertical lockup primary (mark stacked above "Units" tagline) · horizontal lockup secondary (for narrow BCM-approval folder spines). Square avatar lockup tertiary (mark only · used on hi-vis chest patch + iPad case).</li>
        <li><strong>Tagline lockup (locked):</strong> <em>"Renovations That Settle Quietly. 30 Days. Body Corporate Approved."</em> The "Settle Quietly" phrasing does triple duty: (a) acoustic-friendly construction signal, (b) by-law compliance signal, (c) tenant-respectful signal. "30 Days" is the velocity promise (mirrors Pools 30-day guarantee but applied to the build window proper). "Body Corporate Approved" is the trust artefact unique to this LOB — no other Brisbane unit-renovator leads with BCM compliance language.</li>
        <li><strong>Endorsement signal placement:</strong> "By YBMT · QBCC 1234567 · $20M PL Insured · 12 years on the Coast" set at 70% scale of the sub-brand lockup. Appears: footer of every quote folder · last frame of every quote video · back of every business card · tail of every BCM-approval email signature.</li>
        <li><strong>Sub-brand authority:</strong> The Units sub-brand may run its own social handles (@ybmtunits Instagram + LinkedIn page), its own URL paths (yourunit.ybmt.com.au or units.ybmt.com.au · final decision Carla 2026-Q3), its own ads — but cannot operate financially separately from YBMT. Insurance, warranty (2-year build warranty on every job), QBCC, ABN, PL — all roll up to the parent. (Architectural decision locked with Carla 2026-06-04 · same rule as Resort Yards.)</li>
        <li><strong>The "three carriages, one railway" rule:</strong> Customer arriving for a Units job sees the same QBCC number, the same Carla direct line, the same 12-year operating history, the same trust stack as a customer arriving for Termite or Pools. The sub-brand identifies the carriage; the parent brand carries the promise. This is the operational expression of WS-01 Whole-of-Home Stewardship.</li>
      </ul>
    </div>

    {/* ---------- 1.2 Logo system + visual hierarchy ---------- */}
    <div className="kw-block">
      <h4>1.2 · Logo system &amp; visual hierarchy (Units-specific)</h4>
      <ul className="voice-list">
        <li><strong>Primary lockup:</strong> Vertical · YBMT (Inter ExtraBold 800 · 60pt) on top · "Units" (Fraunces Italic 600 · 38pt) below · separated by a single 1pt navy hairline rule. The hairline is itself a DBA (DBA-4 adapted · the "horizontal line under the mark" treatment specific to Units · distinguishes from the wave motif used on Pools).</li>
        <li><strong>Secondary lockup:</strong> Horizontal · "YBMT Units" inline · used on BCM-folder spines, quote-folder cover spines, business-card edges where vertical real estate is constrained.</li>
        <li><strong>Avatar lockup:</strong> Square · "YBMT" stacked over "U" in Fraunces Italic 800 · used on @ybmtunits social handle + iPad chest case. The single-letter U is the most-compressed expression of the brand — recognisable at 32px favicon size.</li>
        <li><strong>Forbidden treatments:</strong> Logo on photographic backgrounds darker than 60% black (loses contrast in BCM PDF reproduction · the most common attack on brand integrity). Logo at less than 22mm width in print (Fraunces sub-pixel hinting breaks). Logo combined with any colour outside the locked palette (1.3 below). Logo without "by YBMT" endorsement strip in any external-facing context where the recipient may not know the YBMT-Units relationship (a BCM seeing the Units mark for the first time must immediately know it carries YBMT credibility).</li>
        <li><strong>Clear-space rule:</strong> Minimum clear-space around the lockup = 1× the height of "Units" lowercase x-height. Stricter than Pools (which allows 0.5×) because the BCM environment is densely cluttered with strata signage, building manager notices, and 6 other contractors' branding — Units brand needs visual breathing room to assert presence amid the noise.</li>
        <li><strong>Lockup file delivery:</strong> 14 file formats supplied to YDT for handover · AI · EPS · PDF/X-1a · SVG · PNG transparent (4× sizes: 256/512/1024/2048) · JPG white-bg · JPG navy-bg · favicon ICO multi-resolution. Single master file on Google Drive · WORM-locked (Write Once Read Many · prevents accidental edits) · Carla holds master-edit access · YDT receives use-only access.</li>
      </ul>
    </div>

    {/* ---------- 1.3 Colour palette ---------- */}
    <div className="kw-block">
      <h4>1.3 · Colour palette (Units-specific distribution)</h4>
      <ul className="voice-list">
        <li><strong>Primary colours (inherited from WS-07 DBAs):</strong>
          <ul>
            <li><strong>Navy</strong> <code>#1B3A5C</code> — the spine of every YBMT sub-brand · used as primary background on quote-folder covers, BCM-approval folders, hi-vis back panels, vehicle livery base. Pantone reference 7546 C. CMYK 89/68/35/19. Print on uncoated stock: shifts to 7547 C. Print on coated stock: stays true to 7546 C.</li>
            <li><strong>Cream</strong> <code>#F5F1EA</code> — the page · the warmth · the calm. Units-specific note: cream gets <em>more</em> distribution than in Pools (60% of any layout · vs. 45% in Pools) because the BCM-compliant aesthetic favours restraint and calm over saturation.</li>
          </ul>
        </li>
        <li><strong>Accent colours (used sparingly):</strong>
          <ul>
            <li><strong>Timber</strong> <code>#B8743D</code> — used as a thin accent rule, a single accent on a quote-folder cover badge, an embossed detail on the BCM-approval folder. <em>Never</em> as background fill in Units. The "loud timber" treatment of a Pools batten wall is replaced with "considered timber" — a single rule, a single embossed detail.</li>
            <li><strong>Aqua</strong> <code>#4DB6C7</code> — used only on the BCM-approval folder spine indicator strip + a single QR-code accent on the back cover of the Pre-Reno Checklist. Minimal distribution. The aqua wave motif of Pools is <em>forbidden</em> in Units — replaced by the navy hairline rule (1.2 above).</li>
          </ul>
        </li>
        <li><strong>Greyscale neutrals (functional):</strong>
          <ul>
            <li><strong>Ink</strong> <code>#1A1A1A</code> — body copy on cream backgrounds · 95% black equivalent · readable across print + screen.</li>
            <li><strong>Mist</strong> <code>#E8E4DD</code> — table-row alternating fill · subtle UI separation · 96% lightness · prevents the "stark white" effect that visually fragments BCM documents.</li>
          </ul>
        </li>
        <li><strong>Forbidden colours:</strong> No pure white (always Cream <code>#F5F1EA</code>). No pure black (always Ink <code>#1A1A1A</code>). No red, orange, green, or any high-saturation accent. Any contractor entering the YBMT Units design system who proposes a "pop colour" CTA must be redirected — the CTA in Units is achieved via Navy on Cream contrast at 16:1 ratio, not via colour shouting.</li>
        <li><strong>Accessibility audit:</strong> All Units-brand colour combinations tested to WCAG 2.2 AA at minimum (Navy on Cream = 11.2:1 · Ink on Cream = 14.8:1 · Aqua on Cream = 3.4:1 · Aqua used only as accent · never for body text). AAA-equivalent achieved on the two primary combinations.</li>
      </ul>
    </div>

    {/* ---------- 1.4 Typography ---------- */}
    <div className="kw-block">
      <h4>1.4 · Typography system (DBA-2 codified)</h4>
      <ul className="voice-list">
        <li><strong>Display + headline:</strong> <strong>Fraunces</strong> — variable font · weight axis 100–900 · optical-size axis 9–144 · soft-axis 0–100 · YEAR axis 1700–2000. Units-specific defaults: weight 600 · optical-size 48 · soft 30 · YEAR 1900. The "soft" axis at 30 produces a slightly humanist treatment that prevents the Units brand reading as clinical or aggressive — important in BCM-document environments. License: SIL Open Font License 1.1 · free to use commercially.</li>
        <li><strong>Body + UI:</strong> <strong>Inter</strong> — variable font · weight axis 100–900 · width 75–125. Units-specific defaults: weight 400 (body) / 600 (bold inline) / 700 (UI labels) · width 100 (regular) / 90 (narrow for table columns where space is tight). License: SIL Open Font License 1.1.</li>
        <li><strong>Hierarchy locked:</strong> H1 = Fraunces 600 / 48pt · H2 = Fraunces 600 / 32pt · H3 = Fraunces 600 / 24pt · H4 = Inter 700 / 16pt · body = Inter 400 / 16pt / 1.55 line-height · caption = Inter 400 / 13pt · UI label = Inter 700 / 11pt / tracked +60. These six levels cover every document YBMT Units produces · forbidden to add new levels without Carla signoff.</li>
        <li><strong>Italic doctrine:</strong> Fraunces Italic 600 reserved for: (a) the sub-brand mark itself ("Units"), (b) the brand promise quote ("Built like it's our own home."), (c) section-opening pull-quotes in quote folders + BCM approval packs. Inter italic forbidden in body copy (under-articulated italic in Inter weakens the brand read).</li>
        <li><strong>Numeric formatting (Units-specific · matters because half our customers are investors):</strong> Currency always preceded by AUD or $ · thousands always comma-separated · cents shown only if non-zero · ratios always set with thin-space separators (e.g. 18:7, not 18 : 7). Spreadsheet-friendly. This protects the WS-02 promise — sloppy numeric formatting destroys the investor-buyer's read of competence.</li>
      </ul>
    </div>

    {/* ---------- 1.5 Productised pricing tiers (LOB-specific) ---------- */}
    <div className="kw-block">
      <h4>1.5 · Productised pricing tiers — Refresh · Renew · Reset (the velocity unlock)</h4>
      <p className="kw-sub">Where Pools is bespoke and Termite is insurance-scoped, Units uses three productised pricing tiers as the velocity unlock. This is the operational expression of Doctrine Rule 3 (volume-velocity, not bespoke craft). The tiers are codified at the brand level (not pricing-team level) because they shape the entire P-02 website + P-03 lead magnets + P-05/06 paid creative + P-08 sales scripts.</p>
      <ul className="voice-list">
        <li><strong>TIER 1 · REFRESH</strong> · cosmetic update · $28k–$42k · 3–4 week build · scope: paint · floor coverings · kitchen splashback + benchtop · bathroom regrouting + tap upgrade · door hardware refresh · no plumbing/electrical reconfiguration. Investor JTBD: between-tenant uplift, sale-ready cosmetic refresh. M12 mix target: 45% of Units jobs by volume.</li>
        <li><strong>TIER 2 · RENEW</strong> · partial gut · $42k–$78k · 5–7 week build · scope: full kitchen gut + new cabinetry/benchtop/appliances · full bathroom gut (1 bathroom) · paint · floor coverings · electrical reconfiguration to current code · plumbing fixture replacement. Owner-occupier JTBD: lift the unit to "modern liveable" standard. M12 mix target: 38% of Units jobs by volume.</li>
        <li><strong>TIER 3 · RESET</strong> · whole-unit gut · $78k–$120k · 8–10 week build · scope: full kitchen + full bathroom(s) + full living-area floor + complete electrical recompliance + complete plumbing recompliance + balcony refresh (where strata permits) + acoustic floor treatment (BCM-compliant). Pre-sale + downsizer JTBD. M12 mix target: 17% of Units jobs by volume (lowest count but highest GP per job).</li>
        <li><strong>Tier-mix economics (M12):</strong> Refresh 45% × $35k = $15.75k weighted · Renew 38% × $60k = $22.80k weighted · Reset 17% × $99k = $16.83k weighted · <strong>blended AOV = $55.4k</strong> · 28% GPM · $15.5k GP/job · 8 jobs/mo M12 = $124k GP/mo from Units. M24: 18 jobs/mo · $280k GP/mo.</li>
        <li><strong>Tier discipline:</strong> Custom scope outside the three tiers is permitted only via Carla signoff · forbidden state: designers offering bespoke "off-tier" scope to win deals (destroys velocity economics + creates margin leakage). Tiers are reviewed annually · refreshed in December per P-12 §12F.4 annual ritual.</li>
        <li><strong>Tier-level brand expression:</strong> Each tier has its own quote-folder spine colour-cue (Refresh = aqua hairline · Renew = timber hairline · Reset = navy hairline) so the YBMT site supervisor + BCM manager can identify the job tier at a glance on-site. Subtle but operationally valuable.</li>
      </ul>
    </div>

    {/* ---------- 1.6 The seven Distinctive Brand Assets (Units-tuned) ---------- */}
    <div className="kw-block">
      <h4>1.6 · The 7 codified Distinctive Brand Assets (Romaniuk JR-DBA · Units-tuned)</h4>
      <p className="kw-sub">DBAs inherited from WS-07 but tuned for the Units medium. Every DBA tested quarterly via Pureprofile 200-respondent SEQ panel (P-12 §12D · same instrument shared across all 3 LOBs).</p>
      <ul className="voice-list">
        <li><strong>DBA-1 · Navy + Cream palette saturated</strong> — applied 60/30 (navy/cream) on every external-facing artefact · the "calm competence" register · 0.2-second recognition target M24 = 38% unaided. Distinguished from Pools DBA-1 (which uses Aqua more prominently).</li>
        <li><strong>DBA-2 · Fraunces typographic mark</strong> — "Units" set Fraunces Italic 600 in cream on navy · single most-distinctive visual signature of the sub-brand · M24 target = 36% unaided recall.</li>
        <li><strong>DBA-3 · The navy hairline rule</strong> — single 1pt navy line under every section heading, every quote-folder cover, every BCM-approval folder spine · the Units-specific replacement for the Pools aqua wave · M24 target = 28% recall (newer DBA, slower build).</li>
        <li><strong>DBA-4 · "Body Corporate Approved" tagline lockup</strong> — the four-word phrase set Inter 700 / +60 tracking · only YBMT in SEQ leads with this language · creates a distinct linguistic territory · M24 target = 41% recall (the most operationally distinctive of the 7 DBAs).</li>
        <li><strong>DBA-5 · Carla as founder presence</strong> — Carla photograph + "Carla Oliver, CFO" attribution on every BCM-approval folder + every quote folder + every sales-call email signature · the human trust artefact · M24 target = 32% recognition (inherited from Pools DBA-5 cross-LOB).</li>
        <li><strong>DBA-6 · The "30-Day Settle" guarantee mark</strong> — small circular badge · navy fill · cream type · "30 DAYS · SETTLE QUIETLY" · appears on quote folders + BCM packs + vehicle livery tailgate · M24 target = 38% recall (the velocity-promise badge).</li>
        <li><strong>DBA-7 · The BCM Approval Pack ritual</strong> — the named product ritual unique to this LOB (P-03 §3.1 lead-magnet expression) · when Sarah &amp; Mark or their BCM ask "what's involved in approving this renovation?" the unaided answer should be "ask YBMT for the BCM Approval Pack" · M24 target = 21% unaided ritual-naming (most ambitious DBA · 18-month build period).</li>
      </ul>
    </div>

    {/* ---------- 1.7 Photography + voice ---------- */}
    <div className="kw-block">
      <h4>1.7 · Photography style + voice + tone-of-voice rules</h4>
      <ul className="voice-list">
        <li><strong>Photography aesthetic:</strong> "Considered residential editorial" — natural light · 4500K colour temperature · slight cream cast in post · no harsh shadows · interior shots framed at 35mm equivalent (matches human eye-line · prevents the wide-angle real-estate cliché that signals "lifestyle marketing" rather than "trade competence"). Engaged photographer: <strong>Toby Scott</strong> (the same architectural photographer used for Pools P-01 §1.7 · single-photographer doctrine maintains visual coherence across LOBs). Per-shoot budget $1,800 · 2 shoots/mo at M12.</li>
        <li><strong>Subject discipline:</strong> Shoot the work, not the lifestyle. Forbidden: aspirational lifestyle imagery (the "smiling couple drinking wine in their new kitchen" cliché). Mandatory: empty-room reveal photography (the actual kitchen, no people, no props beyond what the build delivered). The exception: one "named-customer-on-site" portrait per build for use in case-study P-04 + Concept Book testimonial pages.</li>
        <li><strong>BCM-compliant on-site photography:</strong> Photographer briefed on body-corporate by-laws · no flash on common property · no tripod blocking lift access · no shoot before 7am or after 4pm (BCM working-hours rule) · no shooting common property areas without BCM written consent. The photography process itself reinforces the WS-02 promise.</li>
        <li><strong>Voice (the YBMT Units register):</strong> Calm · numerate · BCM-fluent · respectful of the lot-owner's intelligence. Forbidden: "amazing", "stunning", "transform your life", any superlative or aspirational phrase. Mandatory: specific timeframes (4 weeks · 7 weeks · 30 days), specific dollar ranges ($28k–$42k), specific compliance language (AS/NZS, by-laws, BCM approval pathway). The voice is closer to a quantity surveyor than a copywriter — and this is correct for the investor + downsizer persona overlay.</li>
        <li><strong>Tone of voice rules — 8 locked:</strong>
          <ul>
            <li>1. Lead with the timeline. Every Units customer asks "how long?" first.</li>
            <li>2. Quote the BCM by-law clause number if applicable. Demonstrates trade competence in 7 words.</li>
            <li>3. Name the building manager (with permission). Personalises trust transfer.</li>
            <li>4. Use Mark or Sarah's specific JTBD trigger ("between-tenant" or "pre-sale" or "downsizing") in the first sentence of every reply.</li>
            <li>5. Cite QBCC + $20M PL in every external communication. Trust stack repetition.</li>
            <li>6. Promise &lt; promise. Never overpromise on a tight tenant-vacancy window — the deal is lost on Day 2 if we slip.</li>
            <li>7. Reference the warranty (2-year build warranty transferable to next lot-owner — a deliberate differentiation from 1-year competitors).</li>
            <li>8. End every external email with Carla's direct line. "Built like it's our own home" requires a real person at the other end.</li>
          </ul>
        </li>
        <li><strong>Voice forbidden phrases:</strong> "Cheap" · "budget" · "luxury" · "premium" · "world-class" · "best-in-class" · "transform" · "dream" · "vision". Carla's quarterly voice audit flags any of these in customer-facing copy · YDT analytics lead enforces post-handover.</li>
      </ul>
    </div>

    {/* ---------- 1.8 Brand expression in every customer touchpoint ---------- */}
    <div className="kw-block">
      <h4>1.8 · Brand expression mapping — every customer touchpoint scored against the 7 DBAs</h4>
      <table className="services-table meta-table">
        <thead><tr><th>Touchpoint</th><th>DBA-1 Navy</th><th>DBA-2 Fraunces</th><th>DBA-3 Hairline</th><th>DBA-4 "BC Approved"</th><th>DBA-5 Carla</th><th>DBA-6 30-Day Badge</th><th>DBA-7 BCM Pack Ritual</th></tr></thead>
        <tbody>
          <tr><td>Website hero (yourunit.ybmt)</td><td>✅ saturated</td><td>✅ H1</td><td>✅ under H1</td><td>✅ subtitle</td><td>✅ Carla-quote band</td><td>✅ hero badge</td><td>✅ primary CTA</td></tr>
          <tr><td>BCM Approval Pack (PDF)</td><td>✅ cover</td><td>✅ cover</td><td>✅ spine + sections</td><td>✅ cover badge</td><td>✅ signed page 12</td><td>✅ back cover</td><td>✅ named product</td></tr>
          <tr><td>Quote folder</td><td>✅ cloth-bind cover</td><td>✅ embossed</td><td>✅ pocket dividers</td><td>✅ inside cover</td><td>✅ Carla letter</td><td>✅ inside back</td><td>✅ Pocket 5</td></tr>
          <tr><td>Email signature (Carla)</td><td>✅ bg</td><td>✅ name set</td><td>✅ separator</td><td>✅ tagline</td><td>✅ headshot</td><td>—</td><td>✅ booking link</td></tr>
          <tr><td>Hi-vis uniform</td><td>✅ back panel</td><td>✅ "Units" embroidered</td><td>—</td><td>✅ left chest patch</td><td>—</td><td>✅ right chest</td><td>—</td></tr>
          <tr><td>Vehicle livery (subset of P-11)</td><td>✅ base wrap</td><td>✅ driver panel</td><td>✅ underline</td><td>✅ tailgate</td><td>—</td><td>✅ tailgate badge</td><td>✅ QR to BCM pack</td></tr>
          <tr><td>Google Ad RSA headlines (P-05)</td><td>—</td><td>—</td><td>—</td><td>✅ in headline copy</td><td>—</td><td>✅ "30 days"</td><td>✅ "free BCM pack"</td></tr>
          <tr><td>Instagram grid (P-09)</td><td>✅ palette discipline</td><td>✅ captions</td><td>✅ post-rule frames</td><td>✅ bio</td><td>✅ Carla face-to-camera</td><td>✅ story stickers</td><td>✅ link-in-bio</td></tr>
          <tr><td>Realtor referral card (P-10)</td><td>✅ navy stock</td><td>✅ embossed</td><td>✅ separator</td><td>✅ subtitle</td><td>✅ Carla portrait</td><td>✅ corner badge</td><td>✅ back-of-card</td></tr>
          <tr><td>Handover gift (P-11)</td><td>✅ box</td><td>✅ thank-you card</td><td>—</td><td>—</td><td>✅ handwritten card</td><td>✅ certificate badge</td><td>—</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Saturation rule: every customer-facing touchpoint must carry ≥ 4 of the 7 DBAs. Forbidden state: any external asset shipping with &lt; 4 DBAs · YDT analytics lead audits monthly post-handover · Carla audits quarterly.</p>
    </div>

    {/* ---------- 1.9 Sub-brand cross-LOB protocol ---------- */}
    <div className="kw-block">
      <h4>1.9 · Sub-brand cross-LOB protocol — how Units talks to Pools + Termite</h4>
      <ul className="voice-list">
        <li><strong>Cross-sell into Termite:</strong> Every Units handover ships with the annual Termite voucher (cost $0 · booked against Termite LOB · same artefact as Pools P-11 §11F.1 §Item 4). Standard language: "Your unit sits in a building. Once a year — same family of tradespeople — we walk the common property and your lot for termite activity. First inspection on us." 78% redemption M+14 (cross-LOB consistency with Pools data).</li>
        <li><strong>Cross-sell into Pools:</strong> When an investor-owner Units customer subsequently buys a freestanding house (12–18 months out per WS-05 §5.7 bowtie), the warm-handoff letter from Carla offers a complimentary Resort Yard Inspection. Tracked via HubSpot deal property <code>units_to_pools_handoff</code> · M24 modelled: 6% of Units customers cross-sell to Pools within 30 months.</li>
        <li><strong>Sub-brand visual coherence:</strong> When a customer is concurrently a Units + Pools customer (e.g. Mark renovates his Toowong investment + Sarah commissions the Bulimba Resort Yard), the YBMT parent identity surfaces (not Units, not Pools) on all consolidated communications. A monthly statement showing both jobs ships under the YBMT parent letterhead with both sub-brand acknowledgements. The "Whole-of-Home Stewardship" promise is operationalised here.</li>
        <li><strong>Forbidden cross-LOB state:</strong> A Units quote folder that fails to mention the Termite voucher cross-sell · a Pools handover gift kit that fails to mention the "What's Possible Inside" cross-sell letter (Pools P-11 §11F.1 §Item 5) · a Termite annual inspection report that fails to ask "anything inside the home we should be looking at?". Cross-LOB attribution is a chain — break one link, lose the LTV multiplier.</li>
      </ul>
    </div>

    {/* ---------- 1.10 Brand book governance ---------- */}
    <div className="kw-block">
      <h4>1.10 · Brand book governance — versioning, changes, audit</h4>
      <ul className="voice-list">
        <li><strong>Brand book master:</strong> A 42-page PDF + Figma library · stored in YBMT shared Drive · WORM-locked master · YDT receives read-access copy at handover · any change requires Carla written approval + version-number increment.</li>
        <li><strong>Versioning:</strong> Semantic versioning (vMAJOR.MINOR.PATCH) · MAJOR = palette/typography/logo change (rare · annual at most) · MINOR = new DBA addition or tagline lockup change (~quarterly) · PATCH = correction to specs (monthly cadence). Current target version at YDT handover: v1.0.0.</li>
        <li><strong>Quarterly brand audit (Carla · last Friday of each quarter):</strong> 8 customer-facing touchpoints (1.8 above) sampled · each scored against the 7 DBAs · any touchpoint scoring &lt; 4 DBAs triggers a restate (YDT analytics lead executes correction within 5 business days). Audit log filed in Q+1 board pack (P-12 §12F.3).</li>
        <li><strong>Annual brand health benchmark (Pureprofile 200-panel · P-12 §12D):</strong> 7 DBAs tested unaided + aided · year-on-year delta reported · CFO-grade evidence the brand investment is compounding.</li>
        <li><strong>Forbidden state — silent brand drift:</strong> Any agency, contractor, or YDT team-member modifying a brand asset without versioning the change is in breach. The audit trail must show who changed what, when, and why. This is the YBMT operational expression of "Built like it's our own home" — applied to the brand itself.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-01 · 10 sub-sections · YBMT Units sub-brand · 7 DBAs codified for BCM environment</span>
      <span className="pf-pill">Lockup: YBMT (Inter ExtraBold) + Units (Fraunces Italic) · navy/cream 60/30 distribution</span>
      <span className="pf-pill">3 productised tiers · Refresh ($28-42k) · Renew ($42-78k) · Reset ($78-120k) · blended $55k AOV</span>
      <span className="pf-pill">Cross-LOB: same QBCC + Carla + 2-yr warranty as Pools + TDR · "Whole-of-Home Stewardship" operationalised</span>
    </div>
  </section>
)

/* ============================================================================
 * PILLAR P-02 · WEBSITE COPY KIT  (Units LOB · 4 JTBD landings)
 *
 * Doctrine binding:
 *   - WS-04 persona — Sarah & Mark as investor-owner OR downsizer.
 *   - WS-02 promise — "Built like it's our own home" + "30 Days · Settle Quietly"
 *   - WS-03 buyer psych — Cialdini compliance signals + Kahneman tiered pricing
 *   - WS-07 DBA-7 — every page MUST funnel to the BCM Approval Pack ritual
 *   - WS-11 KPI — F1 page views → F2 form-fill bookings · UTM-tagged
 *
 * 4 JTBD landing pages (per Doctrine Rule 7):
 *   JTBD-1 · Between-tenant refresh (investor)
 *   JTBD-2 · Modern liveable renovation (owner-occupier)
 *   JTBD-3 · BCM common-property coordination (BCM-channel inbound)
 *   JTBD-4 · Pre-sale renovation (realtor-channel · highest AOV)
 * ============================================================================ */
const UGPillar02Website = () => (
  <section className="pillar-block pillar-block-rev" id="p02">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-02 · WEBSITE COPY KIT — 4 JTBD LANDING PAGES</span>
      <h2 className="pillar-block-title">P-02 · Website Copy Kit · 4 JTBD-Specific Landing Pages · BCM Approval Pack As The Universal Primary CTA</h2>
      <p className="kw-block">
        Where Pools needs a single emotional storytelling site that takes Sarah &amp;
        Mark on a 6-month design journey, <strong>Units needs four sharp, JTBD-
        specific landing pages that each terminate in a single primary CTA: download
        the BCM Approval Pack (Pillar P-03)</strong>. The investor needs different
        proof than the downsizer. The BCM-referred lot-owner needs different language
        than the realtor-referred pre-sale renovator. P-02 codifies the four
        distinct buyer doorways into the LOB — and the universal funnel they all
        feed (DBA-7 · BCM Approval Pack lead-magnet · F1 → F2 transition).
      </p>
    </div>

    <div className="kw-block">
      <h4>2.1 · Site architecture — 4 JTBD landings + 6 supporting pages</h4>
      <ul className="voice-list">
        <li><strong>Domain decision:</strong> Sub-domain on YBMT parent — <code>units.ybmt.com.au</code> (decided Carla 2026-06 · same pattern as <code>yourresortyards.com.au</code> sub-domain ratio with parent). Permits Units-specific SEO authority build (P-04) while inheriting parent domain authority.</li>
        <li><strong>Site structure (locked):</strong>
          <ul>
            <li><code>/</code> · home · funnels to 4 JTBD doorways · 60s scroll · 3 trust strips · single Carla quote · 1 primary CTA (BCM Approval Pack)</li>
            <li><code>/refresh</code> · JTBD-1 landing · between-tenant cosmetic refresh · Refresh tier ($28k–$42k)</li>
            <li><code>/renew</code> · JTBD-2 landing · modern liveable renovation · Renew tier ($42k–$78k)</li>
            <li><code>/bcm-coordination</code> · JTBD-3 landing · BCM common-property upgrade coordination</li>
            <li><code>/pre-sale</code> · JTBD-4 landing · pre-sale renovation · Reset tier ($78k–$120k) · realtor-referred</li>
            <li><code>/bcm-approval-pack</code> · primary lead-magnet landing (the DBA-7 ritual destination)</li>
            <li><code>/our-jobs</code> · case-study hub · 18 builds at M12 · 36 at M24 · suburb + tier filterable</li>
            <li><code>/our-jobs/[suburb]</code> · suburb-specific hub (45 SEQ suburbs · P-04 SEO architecture)</li>
            <li><code>/process</code> · the 30-day timeline + BCM approval pathway visualised · trust-build page</li>
            <li><code>/team</code> · Carla + supervisors + the BCM relationship managers (DBA-5 saturation)</li>
            <li><code>/warranty</code> · the 2-year build warranty + transferability clauses · trust-build</li>
            <li><code>/contact</code> · BCM Approval Pack form + phone + Carla direct line</li>
          </ul>
        </li>
        <li><strong>Universal page footer:</strong> QBCC 1234567 · $20M PL Insured · 12 years on the Coast · Carla direct line +61 4XX XXX XXX · email carla@ybmt.com.au · "Built like it's our own home." Identical across all 12 pages.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>2.2 · JTBD-1 page · /refresh · Between-Tenant Refresh (Investor)</h4>
      <ul className="voice-list">
        <li><strong>H1:</strong> "Between tenants. 28 days. Body Corporate Approved."</li>
        <li><strong>Subhead (180 chars):</strong> "Refresh your investment unit between leases — paint, splashback, regrout, fixtures, floors. $28k–$42k fixed price. We co-ordinate the BCM approval. You collect rent again in 28 days."</li>
        <li><strong>Trust strip:</strong> QBCC 1234567 · $20M PL · 12 yrs SEQ · 2-yr warranty transferable to next tenant</li>
        <li><strong>Section 1 · "The investor problem we solve" (180 words):</strong> Names the specific pain — between-tenant downtime · BCM by-law uncertainty · contractor reliability for short-window jobs · the trade-off between cheap cosmetic refresh and rent-uplift ROI. Closes with: "Our Refresh tier is engineered for the investor who needs the unit re-let on Day 28, with a $1,800–$3,200/month rent uplift to justify the spend."</li>
        <li><strong>Section 2 · "What's in the Refresh tier" (table · 8 line items):</strong> Paint (premium / 2-coat / Dulux Cool Crisp neutrals) · Floor coverings (engineered timber Brisbane-supplier locked · 7-yr warranty) · Kitchen splashback + benchtop (3 colour ranges) · Bathroom regrouting + tap+showerhead upgrade · Door hardware refresh · Light fitting upgrade (8 fittings) · Final clean · BCM-compliant rubbish removal. Excluded (named): plumbing reconfiguration · electrical reconfiguration · cabinetry replacement.</li>
        <li><strong>Section 3 · "Investor ROI evidence" (Cialdini social proof · 4 anonymised case studies):</strong> Suburb · pre-reno rent · post-reno rent · spend · payback period. M12 historical example: Toowong 1-bed · $480/wk → $620/wk · $34k spend · payback 4.6 yrs · capital uplift on resale ~$72k. Real numbers, anonymised.</li>
        <li><strong>Section 4 · "The BCM approval process" (the trust-build):</strong> 5-step visual showing how YBMT coordinates BCM approval on behalf of the lot-owner · no homework required from the investor · "we handle the BCM, you handle the leasing agent."</li>
        <li><strong>Primary CTA (the conversion event):</strong> <strong>"Download the BCM Approval Pack · Refresh edition"</strong> · single form · name + email + suburb + building name (optional) · 4 fields max · submit triggers F2 event <code>refresh_bcm_pack_requested</code> · email sequence (WS-10 Klaviyo flow #6 · 5 emails over 14 days · Refresh-specific).</li>
        <li><strong>Secondary CTA:</strong> "Book a 20-minute Refresh consult with Carla" · Calendly embed · 24 slots/wk · F2 event <code>refresh_consult_booked</code>.</li>
        <li><strong>Page footer-trust block:</strong> 3 anonymised investor testimonials · each &lt; 35 words · each names the specific JTBD trigger ("between tenant", "before re-let", "after acquisition refresh") · each shows the timeline + ROI.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>2.3 · JTBD-2 page · /renew · Modern Liveable Renovation (Owner-Occupier)</h4>
      <ul className="voice-list">
        <li><strong>H1:</strong> "Renew your unit. 6 weeks. You live in it again."</li>
        <li><strong>Subhead (180 chars):</strong> "Full kitchen + full bathroom + electrical recompliance + floor coverings. $42k–$78k fixed price. 6-week build window. Body Corporate Approved. Built like it's our own home."</li>
        <li><strong>Trust strip:</strong> QBCC 1234567 · $20M PL · 12 yrs SEQ · 2-yr build warranty · acoustic-floor compliant (AAAC star rated)</li>
        <li><strong>Section 1 · "The owner-occupier problem we solve" (200 words):</strong> Names the specific tension — living in or temporarily relocating from the unit during a 6-week build · neighbour noise sensitivity (shared walls + floors) · BCM working-hours restrictions (7am–3pm Brisbane standard) · the difference between "Refresh tier cosmetic" and "Renew tier full reconfiguration". Closes with: "If you need to live in your unit again in 6 weeks with a kitchen and bathroom that match a 2026-built apartment, the Renew tier is engineered for that exact brief."</li>
        <li><strong>Section 2 · "What's in the Renew tier" (table · 12 line items):</strong> Full kitchen gut + new cabinetry (3 ranges: Hidden Coast minimalist / Brisbane warmth oak / Coastal cream shaker) + new benchtop (Caesarstone or compact laminate) + new appliances (Bosch package · 5-yr warranty) · Full bathroom (1) gut + new tiling + new vanity + new shower + new toilet + frameless shower screen · Electrical recompliance to AS/NZS 3000:2018 + AS/NZS 3760:2022 testing · Plumbing fixture replacement · Floor coverings whole unit · Paint whole unit · BCM-compliant working hours adherence · 2-yr build warranty.</li>
        <li><strong>Section 3 · "Living through the build — what to expect" (the trust-build · 6-week timeline):</strong> Week 1 (demo · ~3 days of meaningful noise · BCM-coordinated · lift-protection installed) · Week 2–3 (rough-in · trades sequenced for minimum disruption) · Week 4 (cabinetry + tiling) · Week 5 (fixtures + finishes + paint) · Week 6 (final compliance + handover). Closes with: "You can live in the unit from Week 4 onwards if you choose. Most owner-occupiers move out for Weeks 1–3 and move back for Weeks 4–6 finishing."</li>
        <li><strong>Section 4 · "BCM coordination — Carla handles it":</strong> Reuses the §2.2 BCM 5-step visual · adds the working-hours discipline + lift-booking protocol + shared-wall acoustic monitoring (continuous dB logger installed for any wall-shared trade) — codified compliance evidence the lot-owner can show their neighbours.</li>
        <li><strong>Primary CTA:</strong> <strong>"Download the BCM Approval Pack · Renew edition"</strong> · 4-field form · F2 event <code>renew_bcm_pack_requested</code> · Klaviyo flow #7 · 5 emails over 18 days.</li>
        <li><strong>Secondary CTA:</strong> "Book a 30-minute walkthrough · Carla brings the materials samples" · Calendly · in-home or in-unit · F2 event <code>renew_walkthrough_booked</code>.</li>
        <li><strong>Page footer-trust block:</strong> 3 owner-occupier testimonials · 1 from a Toowong investor → owner-occupier transition · 1 from a downsizer · 1 from a young-family upsize-out-of-rental customer.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>2.4 · JTBD-3 page · /bcm-coordination · BCM-Channel Inbound (the partner-channel page)</h4>
      <ul className="voice-list">
        <li><strong>Audience:</strong> The BCM (body corporate manager) who has just been asked by a lot-owner committee member "do you know anyone who can renovate Unit 14?" — this is the page the BCM sends to the lot-owner. Written for the BCM-as-recommender, not the lot-owner direct.</li>
        <li><strong>H1:</strong> "For Body Corporate Managers · We make your scheme renovations easier."</li>
        <li><strong>Subhead:</strong> "QBCC-licensed builder, $20M PL, BCM-compliant working hours, lift protection, acoustic monitoring. We file BCM approval applications on behalf of the lot-owner. We never damage common property. You don't get the phone calls."</li>
        <li><strong>Section 1 · "Why BCMs recommend YBMT" (180 words):</strong> Names the BCM-specific value-prop — fewer common-property damage claims · cleaner building-manager handovers · proactive approval-pack delivery before the work-order is raised · single point-of-contact (Carla direct line) · the "no surprises" build experience. Closes: "We've worked with 34 BCM firms across SEQ since 2014. Talk to any of them."</li>
        <li><strong>Section 2 · "What YBMT does that other builders don't":</strong>
          <ul>
            <li>File a complete BCM Approval Pack before the work-order is raised (saves the BCM 4–6 hours of back-and-forth per renovation)</li>
            <li>Provide AS/NZS-compliant lift protection (custom-fit floor + wall protection for every Brisbane lift size · branded YBMT navy fabric)</li>
            <li>Continuous dB logging for any wall-shared trade (logger installed Day 1 · BCM receives daily summary email)</li>
            <li>Pre-clean common property at end of every working day (lift lobby + corridor wiped down + rubbish removed via private trade entry)</li>
            <li>Single-account billing for the BCM (consolidated weekly statement if multiple jobs running in the same scheme)</li>
            <li>2-year transferable build warranty (the BCM can verify warranty status without contacting the lot-owner)</li>
          </ul>
        </li>
        <li><strong>Section 3 · "The 34 BCM firms we've worked with" (Cialdini social proof + authority transfer):</strong> Logo grid (with permission · 18 logos at M12 · 34 by M24) · standardised attestation: "YBMT has completed [N] renovations in schemes we manage since [year], without a single common-property damage claim or by-law breach." Each logo links to a private BCM-only reference page with named building manager testimonials.</li>
        <li><strong>Primary CTA (BCM-specific):</strong> <strong>"Request a BCM Referral Kit"</strong> · separate form · 6 fields (BCM firm · BM name · contact + email + your role + 1-question intent · which scheme prompted the inquiry) · triggers F2 event <code>bcm_referral_kit_requested</code> · Carla personally responds within 1 business day · ships a physical BCM Referral Kit (P-11 §11D adapted for Units · 24-page A4 binder).</li>
        <li><strong>Secondary CTA:</strong> "Add YBMT to your preferred-contractor list" · single field email · triggers automatic 7-email onboarding sequence + Carla intro call · F2 event <code>bcm_preferred_contractor_request</code>.</li>
        <li><strong>The BCM-specific footer:</strong> "Carla Oliver · CFO · YBMT Group · direct +61 4XX XXX XXX · carla@ybmt.com.au · Born and raised in Brisbane · BCM relationships matter to us because they matter to the lot-owners we serve."</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>2.5 · JTBD-4 page · /pre-sale · Pre-Sale Renovation (the highest-AOV page · realtor-channel)</h4>
      <ul className="voice-list">
        <li><strong>H1:</strong> "Renovate before sale. 8 weeks. Add $180k to your achieved price."</li>
        <li><strong>Subhead:</strong> "Reset tier whole-unit gut. $78k–$120k fixed price. 8-week build window. We work with your sales agent on the listing timeline. Body Corporate Approved."</li>
        <li><strong>Trust strip:</strong> QBCC 1234567 · $20M PL · 12 yrs SEQ · 2-yr warranty transferable to purchaser · realtor-coordinated handover</li>
        <li><strong>Section 1 · "The pre-sale ROI evidence" (the headline section):</strong> 6-row table showing actual M12 historical jobs: pre-reno suburb median sale price · post-reno achieved price · spend · uplift · ROI. Example: New Farm 2-bed pre-reno median $880k · post-reno achieved $1.12M · spend $94k · uplift $240k · ROI 2.55× · holding period 8 weeks. Six real anonymised examples · all in YBMT target suburbs (Bulimba · New Farm · Hamilton · Toowong · Indooroopilly · Hawthorne).</li>
        <li><strong>Section 2 · "The Reset tier scope" (12 line items):</strong> Full kitchen + 2 bathrooms (where applicable) + whole floor recover + electrical + plumbing + interior paint + balcony refresh (BCM-permitting) + acoustic floor underlay (AAAC 4-star) + LED lighting refresh whole unit + door hardware refresh whole unit + 1× feature wall (per Reset tier brand spec) + final styling consult (referred to YBMT-vetted stylist for the listing photography).</li>
        <li><strong>Section 3 · "Working with your sales agent" (the realtor channel signal):</strong> Names the standard YBMT process for realtor-coordinated pre-sale renovations: (1) agent introduces seller to YBMT · (2) Carla + agent + seller joint walkthrough · (3) scope agreed against the seller's settlement-timeline target · (4) Reset tier executed in 8 weeks · (5) handover 5 business days before agent's listing-go-live · (6) listing photography by YBMT-recommended Toby Scott · (7) 2-year build warranty transferable to purchaser at settlement.</li>
        <li><strong>Section 4 · "Realtor partners we work with" (Cialdini authority transfer):</strong> Logo grid of 8 active realtor partnerships at M12 (LJ Hooker New Farm · Place Estate Agents · Belle Property Bulimba · Ray White Hamilton + 4 more). Each agent has a named principal contact at YBMT (Carla for relationships &gt; $80k AOV jobs · the supervisor for &lt; $80k). Single line: "Ask your agent if they work with YBMT Units."</li>
        <li><strong>Primary CTA:</strong> <strong>"Download the Pre-Sale ROI Calculator"</strong> · lead magnet form (P-03 §3.4) · 5 fields (suburb · bedroom count · current pre-sale estimate · target uplift · agent name optional) · triggers F2 event <code>presale_calculator_requested</code> · 8-email Klaviyo flow (WS-10 flow #8 · pre-sale specific · timing-sensitive · paced to agent listing-prep timeline).</li>
        <li><strong>Secondary CTA:</strong> "Book a joint walkthrough with Carla + your agent" · Calendly · 2 slots/wk · 60-min window in-unit · F2 event <code>presale_joint_walkthrough_booked</code>.</li>
        <li><strong>Page footer-trust block:</strong> 2 realtor testimonials (named) + 2 anonymised seller testimonials showing pre/post · always with the specific ROI number.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>2.6 · Microcopy library (24 strings · YDT-ready)</h4>
      <p className="kw-sub">All form labels, button text, error messages, confirmation strings, email opt-in microcopy — 24 strings codified so YDT can deploy uniformly. Voice-tested against the WS-02 promise + tone-of-voice rules §1.7 above.</p>
      <table className="services-table meta-table">
        <thead><tr><th>String ID</th><th>Context</th><th>Copy</th></tr></thead>
        <tbody>
          <tr><td>UNITS-MC-01</td><td>BCM Pack download button</td><td>Download the BCM Approval Pack →</td></tr>
          <tr><td>UNITS-MC-02</td><td>Calendly walkthrough CTA</td><td>Book a 30-minute walkthrough · Carla brings the samples</td></tr>
          <tr><td>UNITS-MC-03</td><td>Pre-sale calculator CTA</td><td>See your pre-sale ROI in 90 seconds</td></tr>
          <tr><td>UNITS-MC-04</td><td>Form name field label</td><td>Your name</td></tr>
          <tr><td>UNITS-MC-05</td><td>Form email field label</td><td>Email · we won't share it</td></tr>
          <tr><td>UNITS-MC-06</td><td>Form suburb field label</td><td>Suburb · so we know your BCM environment</td></tr>
          <tr><td>UNITS-MC-07</td><td>Form building name (optional) field label</td><td>Building name · optional · helps us pull your BCM contact</td></tr>
          <tr><td>UNITS-MC-08</td><td>Form submit confirmation</td><td>Thanks — your BCM Approval Pack will arrive in your inbox in &lt; 2 minutes. Carla will follow up personally within 1 business day.</td></tr>
          <tr><td>UNITS-MC-09</td><td>Form error · invalid email</td><td>That email looks like it has a typo — try again?</td></tr>
          <tr><td>UNITS-MC-10</td><td>Page-bottom Carla quote</td><td>"If you've got a unit you want renovated quietly, compliantly, and on time — call me directly. — Carla Oliver, CFO, YBMT Group"</td></tr>
          <tr><td>UNITS-MC-11</td><td>Phone number lead-in</td><td>Carla's direct line ·</td></tr>
          <tr><td>UNITS-MC-12</td><td>Email signature line</td><td>Built like it's our own home. — Carla</td></tr>
          <tr><td>UNITS-MC-13</td><td>Trust strip QBCC label</td><td>QBCC 1234567</td></tr>
          <tr><td>UNITS-MC-14</td><td>Trust strip PL label</td><td>$20M PL Insured</td></tr>
          <tr><td>UNITS-MC-15</td><td>Trust strip years label</td><td>12 years on the Coast</td></tr>
          <tr><td>UNITS-MC-16</td><td>Trust strip warranty label</td><td>2-year build warranty transferable</td></tr>
          <tr><td>UNITS-MC-17</td><td>BCM Approved tagline</td><td>Renovations That Settle Quietly · 30 Days · Body Corporate Approved.</td></tr>
          <tr><td>UNITS-MC-18</td><td>Refresh tier ribbon</td><td>REFRESH · $28k–$42k · 28 days</td></tr>
          <tr><td>UNITS-MC-19</td><td>Renew tier ribbon</td><td>RENEW · $42k–$78k · 6 weeks</td></tr>
          <tr><td>UNITS-MC-20</td><td>Reset tier ribbon</td><td>RESET · $78k–$120k · 8 weeks</td></tr>
          <tr><td>UNITS-MC-21</td><td>Case-study filter label</td><td>Filter by suburb · tier · BCM firm</td></tr>
          <tr><td>UNITS-MC-22</td><td>Process page section header</td><td>The 30-day BCM approval pathway · what Carla handles</td></tr>
          <tr><td>UNITS-MC-23</td><td>Realtor banner CTA</td><td>For realtors: download the Pre-Sale Reno Partnership Kit</td></tr>
          <tr><td>UNITS-MC-24</td><td>BCM banner CTA</td><td>For BCMs: add YBMT to your preferred-contractor list</td></tr>
        </tbody>
      </table>
    </div>

    <div className="kw-block">
      <h4>2.7 · UX + measurement + accessibility</h4>
      <ul className="voice-list">
        <li><strong>Performance budget:</strong> LCP &lt; 2.0s · INP &lt; 200ms · CLS &lt; 0.05 · all pages · tested on 3G + low-end Android (Carla audits monthly via Lighthouse + Chrome UX Report).</li>
        <li><strong>Accessibility:</strong> WCAG 2.2 AA mandatory · keyboard navigation tested · screen-reader tested (NVDA + VoiceOver) · colour contrast ≥ 4.5:1 on all body text · form labels properly associated · alt-text on every image.</li>
        <li><strong>Tag-managed analytics (P-12 §12A integration):</strong> GA4 + sGTM + CallRail DNI · 4 active phone numbers for the Units LOB (Brisbane inner / Brisbane outer / Sunshine Coast / Gold Coast) · UTM scheme per P-12 §12A.6 · all F1 + F2 events fire with <code>brand_sub=units</code> + <code>jtbd</code> field.</li>
        <li><strong>Conversion targets M12:</strong> /refresh page · 2.4% page-to-form-fill rate · /renew page · 2.1% · /bcm-coordination page · 4.8% (BCM-channel high-intent inbound) · /pre-sale page · 3.2%. Blended F1 → F2 conversion: 2.6% (vs. 2.3% Pools at M12 · faster cycle = higher conversion).</li>
        <li><strong>Privacy + cookie compliance:</strong> Single cookie banner · Privacy Act 1988 compliant · explicit consent for tracking · sGTM-hashed PII · forbidden state: any third-party pixel firing without consent.</li>
        <li><strong>Acceptance criteria (Carla signs off before YDT handover):</strong> All 24 microcopy strings locked · all 4 JTBD landings live · all sub-routes resolvable · Core Web Vitals green · WCAG AA pass · P-12 GA4 events firing · DBA-3 + DBA-4 + DBA-7 surfaced on every relevant page · BCM Pack primary CTA tested on 12 device-browser combinations.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-02 · 4 JTBD landings + 6 supporting pages · units.ybmt.com.au sub-domain</span>
      <span className="pf-pill">Primary CTA universal: BCM Approval Pack (DBA-7) · 4 JTBD-specific lead magnets feed the F1 → F2 funnel</span>
      <span className="pf-pill">24 microcopy strings locked · YDT-ready · WCAG 2.2 AA · LCP &lt; 2.0s · 2.6% blended page-to-F2 conversion target M12</span>
    </div>
  </section>
)

/* ============================================================================
 * PILLAR P-03 · LEAD MAGNET KIT  (Units LOB · 4 JTBD-tied lead magnets)
 *
 * Doctrine binding:
 *   - DBA-7 — the BCM Approval Pack is THE Units LOB ritual product · this
 *     pillar codifies its content + production + delivery
 *   - WS-04 persona — Sarah & Mark (investor + owner-occupier + BCM + realtor)
 *   - WS-05 bowtie — every lead magnet has a tail-section seeding cross-LOB
 *     conversation (Termite annual inspection · Pools resort yard if house owned)
 *   - WS-11 KPI — every download fires F1 → F2 transition event
 * ============================================================================ */
const UGPillar03LeadMagnets = () => (
  <section className="pillar-block pillar-block-rev" id="p03">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-03 · LEAD MAGNET KIT — 4 JTBD-TIED MAGNETS</span>
      <h2 className="pillar-block-title">P-03 · Lead Magnet Kit · The BCM Approval Pack · Pre-Reno Checklist · Pre-Sale ROI Calculator · BCM Referral Kit</h2>
      <p className="kw-block">
        Four lead magnets · one per JTBD landing · each engineered as both a
        genuine working tool AND an F1 → F2 funnel transition mechanism. The
        flagship — the BCM Approval Pack (DBA-7) — is the named product ritual
        that makes the Units sub-brand recognisable in the BCM channel. Without
        the BCM Approval Pack as a real, downloadable, BCM-genuinely-useful tool,
        DBA-7 collapses to wallpaper. P-03 codifies the content + production +
        delivery + tracking of all 4 magnets.
      </p>
    </div>

    <div className="kw-block">
      <h4>3.1 · LEAD MAGNET 1 · The BCM Approval Pack (the DBA-7 flagship)</h4>
      <ul className="voice-list">
        <li><strong>Format:</strong> 14-page A4 PDF · navy cover · cream interior · Fraunces "BCM APPROVAL PACK · YBMT UNITS · EDITION [N]" · personalised in real-time with lot-owner name + building name on cover page if collected at form submission (DocRaptor server-side personalisation via Cloudflare Worker).</li>
        <li><strong>Contents (locked · 14 pages):</strong>
          <ul>
            <li><strong>Page 1 · Cover</strong> — personalised navy cover · "Prepared for [Name] · [Building] · [Date]" · Fraunces typesetting · DBA-3 hairline · DBA-6 "30 DAY" badge</li>
            <li><strong>Page 2 · Carla foreword (240 words)</strong> — "Why we created this pack" · signed Carla · DBA-5 portrait · the 12-year story compressed · sets the tone (calm · numerate · BCM-fluent)</li>
            <li><strong>Pages 3–4 · The 10 BCM by-law clauses we comply with</strong> — listed by clause number + plain-English explanation (e.g. "Clause 17.2 · Working hours 7am–3pm weekdays · we maintain a daily start/finish log shared with the building manager")</li>
            <li><strong>Page 5 · The BCM approval pathway · 5-step visual</strong> — what Carla does on behalf of the lot-owner · timeline 2–14 days depending on BCM firm</li>
            <li><strong>Pages 6–7 · Sample completed BCM approval application</strong> — actual redacted prior approval pack (with permission) · demonstrates competence + saves the BCM the rework of "first-time-submitter" applications</li>
            <li><strong>Page 8 · Lift protection + acoustic monitoring spec</strong> — photos of YBMT-installed lift protection · dB monitoring methodology · "the common-property protection commitment"</li>
            <li><strong>Page 9 · Tidy-site daily checklist</strong> — 12-item daily checklist YBMT supervisors execute on every Units job · transparency artefact for BCM peace of mind</li>
            <li><strong>Page 10 · The 3 pricing tiers explained</strong> — Refresh / Renew / Reset · scope · timeline · price range</li>
            <li><strong>Page 11 · The 2-year transferable build warranty</strong> — full T&amp;Cs in plain English · differentiation from 1-year competitors</li>
            <li><strong>Page 12 · Carla's commitment letter</strong> — signed personal letter · DBA-5 + WS-02 promise carried verbatim · direct line + email</li>
            <li><strong>Page 13 · The 34 BCM firms we've worked with</strong> — logo grid with permissions · social proof + authority transfer</li>
            <li><strong>Page 14 · The cross-LOB conversation</strong> — gentle: "When you're ready to think about the rest of your home — the resort yard at the family house, the annual termite walk-through, the bathroom in your investment property — same team, same warranty, same Carla. Whole-of-Home Stewardship · WS-01." (Bowtie seeding · WS-05.)</li>
          </ul>
        </li>
        <li><strong>Personalisation engine:</strong> DocRaptor (or equivalent PDF-from-HTML service) running on Cloudflare Worker · personalises cover page + Carla letter + suburb-relevant case studies (page 13) in &lt; 4 seconds from form submission · email delivery via Klaviyo · 98% inbox delivery rate (SPF + DKIM + DMARC locked via WS-10 §10.4).</li>
        <li><strong>Production cost:</strong> Initial design + content authoring $14,800 (Carla + designer + copywriter) · per-edition refresh $4,200 (quarterly) · per-download cost $0.02 (DocRaptor + email + storage) · zero marginal cost at scale.</li>
        <li><strong>Tracked outcome (M12 target):</strong> 280 BCM Approval Pack downloads/mo · 22% open the email follow-up sequence · 9% book a walkthrough (F2 event) · ~6 walkthroughs/mo direct attributable · ~3 contracts signed/mo direct attributable · attributed revenue ~$165k/mo at M12.</li>
        <li><strong>Forbidden state:</strong> Sending a non-personalised BCM Approval Pack · sending without the cross-LOB conversation page 14 · sending without the 2-year warranty page 11 (the differentiation collapses without it).</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>3.2 · LEAD MAGNET 2 · The Pre-Reno Checklist (investor + owner-occupier)</h4>
      <ul className="voice-list">
        <li><strong>Format:</strong> 8-page A4 PDF · same brand system · "PRE-RENO CHECKLIST · 6 WEEKS BEFORE THE BUILDER STARTS" · DBA-3 hairline + DBA-6 badge.</li>
        <li><strong>Contents (8 pages, 60 checklist items):</strong>
          <ul>
            <li><strong>Page 1 · Cover</strong></li>
            <li><strong>Page 2 · Foreword</strong> — "Why the 6-week-before window matters" · 180 words</li>
            <li><strong>Page 3 · 6-weeks-before checklist (12 items)</strong> — BCM approval submission · scope agreement · materials sourcing decisions · removalist booking · tenant notice (if applicable) · neighbour-notification courtesy letter (BCM-compliant)</li>
            <li><strong>Page 4 · 4-weeks-before checklist (12 items)</strong> — final colour + finish selections · appliance procurement · trade scheduling confirmation · BCM working-hours confirmation · lift booking</li>
            <li><strong>Page 5 · 2-weeks-before checklist (12 items)</strong> — pack-up of valuables · neighbour final notification · key-handover to YBMT · access arrangement · pet-arrangement (if applicable)</li>
            <li><strong>Page 6 · Week 1 of build · what to expect (12 items)</strong> — demo day timing · noise expectations · daily site-clean evidence · supervisor introductions</li>
            <li><strong>Page 7 · Mid-build + finishing weeks (12 items)</strong> — fixture inspections · final colour confirmations · cleaning protocol · handover prep</li>
            <li><strong>Page 8 · Post-handover (12 items)</strong> — 2-year warranty activation · maintenance schedule · cross-LOB conversation (Termite annual + Pools if applicable)</li>
          </ul>
        </li>
        <li><strong>Production cost:</strong> $4,800 design + content · quarterly refresh $1,200 · per-download $0.02.</li>
        <li><strong>Tracked outcome (M12 target):</strong> 380 downloads/mo · 18% open the follow-up sequence · 11% book a walkthrough · ~7 walkthroughs/mo · ~3 contracts/mo attributable.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>3.3 · LEAD MAGNET 3 · The Pre-Sale ROI Calculator (highest-AOV magnet · realtor channel)</h4>
      <ul className="voice-list">
        <li><strong>Format:</strong> Interactive web tool at <code>/pre-sale-roi-calculator</code> · 8-input form · server-side calculation via Cloudflare Worker · output: PDF summary emailed to user + saved to HubSpot deal record. Tool design: clean · numerate · investor-grade interface · no aspirational lifestyle imagery.</li>
        <li><strong>Inputs (8):</strong> Suburb (autocomplete from 45 SEQ list) · bedroom count (1/2/3+) · current condition (poor/fair/good) · current pre-reno valuation · target settlement timeline (weeks) · sales agent (optional) · scope preference (Refresh / Renew / Reset) · email + name.</li>
        <li><strong>Calculation engine:</strong> Suburb-specific median uplift coefficients (sourced from CoreLogic + YBMT M12+ historical actuals · refreshed quarterly) · scope-specific cost ranges · settlement-timeline adjustment factor · output: estimated achieved sale price · estimated YBMT cost · estimated net uplift · estimated ROI · estimated holding-period cost.</li>
        <li><strong>Output PDF (4 pages):</strong> Page 1 · personalised cover · Page 2 · your inputs + your scenario · Page 3 · the 6-row comparison table (your suburb · 5 comparable prior YBMT pre-sale jobs) · Page 4 · next steps (book a joint walkthrough with Carla + your agent · 30-day BCM approval pathway · cross-LOB Termite voucher).</li>
        <li><strong>Production cost:</strong> Initial tool build $18,400 (Carla + designer + Cloudflare Worker dev · calculation engine + PDF output) · quarterly refresh of coefficients $2,800 · per-calculation cost $0.04.</li>
        <li><strong>Tracked outcome (M12 target):</strong> 140 calculations/mo · 28% submit the joint-walkthrough booking (F2 event) · ~39 joint walkthroughs/mo · 28% F2 → F3 conversion · ~11 Reset-tier contracts/mo attributable at $94k AOV = ~$1.03M/mo revenue attributable · the highest-yield lead magnet in the LOB.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>3.4 · LEAD MAGNET 4 · The BCM Referral Kit (BCM-channel partnership artefact)</h4>
      <ul className="voice-list">
        <li><strong>Format:</strong> Physical kit · A4 navy cloth-bound binder · 24 pages · embossed Fraunces "BCM REFERRAL KIT · YBMT UNITS" · ships via courier within 1 business day of request · cost-of-goods $42/kit.</li>
        <li><strong>Contents (24 pages):</strong>
          <ul>
            <li>Pages 1–2 · Carla foreword + the 12-year YBMT BCM history</li>
            <li>Pages 3–4 · The 34 BCM firms we've worked with · with permissions</li>
            <li>Pages 5–8 · The 6 differentiated BCM-protocols (lift protection · acoustic logging · tidy-site daily checklist · pre-clean common property · BCM single-account billing · 2-yr transferable warranty)</li>
            <li>Pages 9–12 · 6 case studies of multi-job BCM-channel relationships · named BCM firms · named building managers (with permissions) · attestation per scheme</li>
            <li>Pages 13–16 · Pricing tier explainer (Refresh / Renew / Reset) · scope · timeline · price range · suitable JTBD</li>
            <li>Page 17 · The BCM Approval Pack overview (links back to the digital flagship · §3.1)</li>
            <li>Page 18 · The 2-year transferable warranty + insurance certificates</li>
            <li>Pages 19–20 · Sample completed BCM approval applications</li>
            <li>Page 21 · The "what we don't do" — forbidden states (no damage to common property · no by-law breaches · no missed lift bookings · no after-hours work without explicit approval)</li>
            <li>Page 22 · Carla's commitment letter · DBA-5 + WS-02 promise</li>
            <li>Page 23 · Direct contact card · Carla + 4 supervisors named + their direct lines</li>
            <li>Page 24 · The cross-LOB Whole-of-Home Stewardship conversation (Termite · Pools · Units · the 30× LTV bowtie story)</li>
          </ul>
        </li>
        <li><strong>Production cost:</strong> Initial design $9,800 · quarterly refresh $1,400 · per-kit $42 all-in (printing + binding + courier) · budgeted 12 kits/mo at M12 ($504/mo spend).</li>
        <li><strong>Distribution:</strong> Ships only to BCM firms that have requested via /bcm-coordination page form (3 fields qualifying) · never bulk-mailed · the scarcity + courier-delivery experience reinforces the WS-02 "Built like it's our own home" promise.</li>
        <li><strong>Tracked outcome (M12 target):</strong> 12 BCM Referral Kits issued/mo · 4 BCM firms added to YBMT preferred-contractor lists/mo · 18 BCM-channel inspections/mo by M12 · ~6 contracts signed/mo attributable to BCM channel.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>3.5 · Lead-magnet KPI scorecard (4 magnets · M12 target)</h4>
      <table className="services-table meta-table">
        <thead><tr><th>Magnet</th><th>Downloads / mo</th><th>F2 conversions / mo</th><th>F3 attributable / mo</th><th>Revenue attributable / mo</th><th>Cost / mo</th><th>ROI</th></tr></thead>
        <tbody>
          <tr><td>BCM Approval Pack (digital)</td><td>280</td><td>25</td><td>3</td><td>$165k</td><td>$2.4k</td><td>69×</td></tr>
          <tr><td>Pre-Reno Checklist (digital)</td><td>380</td><td>42</td><td>3</td><td>$140k</td><td>$0.8k</td><td>175×</td></tr>
          <tr><td>Pre-Sale ROI Calculator (interactive)</td><td>140</td><td>39</td><td>11</td><td>$1.03M</td><td>$5.6k</td><td>184×</td></tr>
          <tr><td>BCM Referral Kit (physical)</td><td>12</td><td>4</td><td>6</td><td>$310k</td><td>$1.0k</td><td>310×</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>812</strong></td><td><strong>110</strong></td><td><strong>23</strong></td><td><strong>$1.65M</strong></td><td><strong>$9.8k</strong></td><td><strong>168×</strong></td></tr>
        </tbody>
      </table>
      <p className="kw-sub">The Pre-Sale ROI Calculator and BCM Referral Kit produce 70% of the LOB's attributable revenue from 19% of the lead-magnet downloads · the textbook case of high-quality F2 capture beating high-volume F1 capture. P-12 instrumentation governs the audit.</p>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-03 · 4 lead magnets · BCM Approval Pack (flagship · DBA-7) · Pre-Reno Checklist · Pre-Sale ROI Calculator · BCM Referral Kit</span>
      <span className="pf-pill">M12: 812 downloads/mo · 110 F2 conversions/mo · 23 contracts attributable · $1.65M revenue/mo · 168× blended ROI</span>
      <span className="pf-pill">Cross-LOB: every magnet seeds Termite + Pools cross-sell conversation · WS-05 bowtie at maximum velocity in this LOB</span>
    </div>
  </section>
)

/* ============================================================================
 * PILLAR P-04 · SEO / GEO / AEO CONTENT ENGINE  (Units LOB · 45 SEQ suburbs)
 *
 * Doctrine binding:
 *   - WS-04 persona — Sarah & Mark search differently as investor vs. downsizer
 *   - WS-11 KPI — organic F1 events feed the funnel · ranked + tracked
 *   - WS-08 GEO doctrine — every page engineered for LLM citation
 *   - WS-05 bowtie — suburb hubs cross-link to Termite + Pools suburb hubs
 * ============================================================================ */
const UGPillar04SeoGeoAeo = () => (
  <section className="pillar-block pillar-block-rev" id="p04">
    <div className="pillar-block-h">
      <span className="pf-pill">PILLAR P-04 · SEO / GEO / AEO CONTENT ENGINE</span>
      <h2 className="pillar-block-title">P-04 · SEO / GEO / AEO Content Engine · 45 SEQ Suburbs · Unit-Specific Intent Terms · BCM Authority Hub · LLM-Citation Engineered</h2>
      <p className="kw-block">
        Pools has 45 suburb hubs because Sarah &amp; Mark live in a $1.4M+ home in a
        specific suburb. <strong>Units has 45 suburb hubs too — but the suburb +
        intent map is different.</strong> Investor-buyers search "best unit
        renovator Toowong" + "BCM approved bathroom Toowong" + "between-tenant
        kitchen Toowong". Owner-occupiers search "unit renovation New Farm" +
        "kitchen renovation New Farm apartment" + "body corporate renovation
        approval New Farm". P-04 codifies the 45-suburb × 12-intent-type matrix
        (540 unique URLs) + the BCM-authority content hub + the WS-08 GEO/AEO
        doctrine applied to make the YBMT Units sub-brand the SEQ-default LLM
        citation for unit-renovation queries.
      </p>
    </div>

    <div className="kw-block">
      <h4>4.1 · Suburb × intent matrix — 45 suburbs × 12 intents = 540 URLs</h4>
      <ul className="voice-list">
        <li><strong>45 priority suburbs (locked):</strong> Brisbane inner (Bulimba · Hawthorne · Norman Park · Morningside · Coorparoo · Camp Hill · East Brisbane · Kangaroo Point · New Farm · Teneriffe · Newstead · Bowen Hills · Spring Hill · Highgate Hill · West End · Toowong · Auchenflower · St Lucia · Indooroopilly · Taringa) · Brisbane northside (Hamilton · Ascot · Clayfield · Albion · Wilston · Windsor · Hendra) · Brisbane bayside (Wynnum · Manly · Manly West · Cleveland) · Sunshine Coast (Mooloolaba · Maroochydore · Buderim · Noosa Heads · Noosaville · Caloundra) · Gold Coast (Main Beach · Surfers Paradise · Mermaid Beach · Broadbeach · Burleigh Heads · Palm Beach · Mermaid Waters) · plus 1 reserved slot for high-intent emerging suburb (refreshed quarterly via Google Search Console data review).</li>
        <li><strong>12 intent types per suburb:</strong>
          <ul>
            <li>1. <em>unit renovation [suburb]</em> — generic broad-match · highest volume</li>
            <li>2. <em>apartment renovation [suburb]</em> — alternate-phrasing capture</li>
            <li>3. <em>kitchen renovation [suburb] unit</em> — JTBD-specific (kitchen)</li>
            <li>4. <em>bathroom renovation [suburb] apartment</em> — JTBD-specific (bathroom)</li>
            <li>5. <em>body corporate renovation [suburb]</em> — BCM-channel intent</li>
            <li>6. <em>between tenant renovation [suburb]</em> — investor JTBD-1</li>
            <li>7. <em>pre-sale renovation [suburb]</em> — realtor JTBD-4</li>
            <li>8. <em>unit renovator [suburb]</em> — brand-of-trade search</li>
            <li>9. <em>apartment renovator BCM [suburb]</em> — qualified-trade search</li>
            <li>10. <em>QBCC builder unit renovation [suburb]</em> — compliance-first search</li>
            <li>11. <em>30 day unit renovation [suburb]</em> — velocity-promise capture</li>
            <li>12. <em>[suburb] unit renovation cost</em> — pricing-research search</li>
          </ul>
        </li>
        <li><strong>URL pattern (locked):</strong> <code>/our-jobs/[suburb]</code> for the suburb-hub · <code>/[intent-phrase]-[suburb]</code> for intent-specific pages where keyword volume justifies (~140 URLs at M12, scaling to 540 by M24 as content production cadence builds).</li>
        <li><strong>Content authority brief (per page · M12 minimum spec):</strong> 1,200+ words · 2 case studies from that suburb (anonymised if needed) · 1 named BCM firm operating in that suburb (with permission) · suburb-specific median unit price + median rental data (CoreLogic feed) · 3 internal links · 1 external authority link (BCM firm site or QBCC) · 1 schema.org markup block (LocalBusiness + Service + FAQPage).</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>4.2 · Suburb hub template — 9-section structure</h4>
      <ol className="voice-list">
        <li><strong>Hero band:</strong> "Unit renovations in [Suburb] · Body Corporate Approved · Built like it's our own home." H1 · trust strip · primary CTA (BCM Approval Pack)</li>
        <li><strong>Section 1 · "Why we know [Suburb]"</strong> (180 words) — local-knowledge proof · names BCM firms active in suburb · names buildings YBMT has worked in (with permission) · cites local-market data point</li>
        <li><strong>Section 2 · "Recent jobs in [Suburb]"</strong> — 4-job case-study grid · suburb + tier + timeline + anonymised cost-range + BCM firm</li>
        <li><strong>Section 3 · "What [Suburb] units typically cost to renovate"</strong> (data section · the BCM-specific cost intelligence) — 3-tier pricing table (Refresh / Renew / Reset) with suburb-adjusted ranges</li>
        <li><strong>Section 4 · "The [Suburb] BCM environment"</strong> — names the 3 most-active BCM firms in that suburb · explains the by-law nuances of older walk-up buildings vs. newer high-rises in that suburb · operationally useful information that demonstrates trade competence</li>
        <li><strong>Section 5 · "Working with [Suburb] sales agents"</strong> — names 2 active realtor partners in that suburb · the pre-sale renovation playbook for that market (JTBD-4)</li>
        <li><strong>Section 6 · FAQ block (8 Q&amp;As)</strong> — schema.org FAQPage markup · LLM-citation engineered per WS-08 doctrine · answers the 8 most-asked Suburb-specific BCM + cost + timeline questions</li>
        <li><strong>Section 7 · Cross-LOB pull-through</strong> (the bowtie expansion) — "If you own the unit in [Suburb] and a house elsewhere, ask Carla about the cross-LOB Termite + Resort Yards conversation. WS-01 Whole-of-Home Stewardship."</li>
        <li><strong>Section 8 · Primary CTA + secondary CTA</strong> — BCM Approval Pack + Calendly walkthrough · UTM-tagged per P-12</li>
      </ol>
    </div>

    <div className="kw-block">
      <h4>4.3 · GEO / AEO doctrine — engineered for LLM citation (WS-08 inheritance)</h4>
      <ul className="voice-list">
        <li><strong>Schema.org saturation:</strong> Every suburb hub carries 4 schema blocks · LocalBusiness (with NAP locked) · Service (with priceRange + areaServed) · FAQPage (with 8 Q&amp;As) · BreadcrumbList. Validated weekly via Google Rich Results Test + Schema.org Validator (automated CI check on every deploy).</li>
        <li><strong>Answer-Engine-Optimised content structure:</strong> Every FAQ answer is structured as a 50-80 word standalone block that can be quoted verbatim by an LLM without context-stripping. Format: 1-sentence direct answer + 2-3 sentence supporting evidence + 1 trust attribution ("YBMT has completed [N] [SCOPE] jobs in [SUBURB] since [YEAR]"). This is the WS-08 §AEO-7 doctrine made operational for Units.</li>
        <li><strong>"Who is the best unit renovator in [SUBURB]?" pre-emption:</strong> Each suburb hub carries an FAQ Q&amp;A explicitly answering this question with the verbatim text "YBMT Units is one of the most-recommended unit renovation builders in [SUBURB], with a 12-year operating history, $20M PL insurance, QBCC Open Builder licence 1234567, and a 2-year transferable build warranty." This block is structurally identical across 45 suburbs so LLM citation training reinforces the brand association.</li>
        <li><strong>External authority signals:</strong> Each suburb hub links out to 3 external authority sources · the BCM firm site for that suburb · the QBCC licence-lookup tool · the relevant strata-management association (SCA QLD). Inbound link strategy: pursue 1 inbound link per suburb hub per quarter from BCM-firm sites, realtor sites, or Brisbane/SEQ lifestyle publications.</li>
        <li><strong>Internal authority architecture:</strong> Each suburb hub links inward to (a) the 4 JTBD landings (Refresh / Renew / Reset / BCM Coordination) · (b) the central <code>/process</code> trust-build page · (c) the BCM Approval Pack lead magnet · (d) 2 sibling suburb hubs (nearby suburbs · creates topical clustering) · (e) the cross-LOB Pools + Termite suburb hubs (the WS-05 bowtie operationalised in internal linking).</li>
        <li><strong>Content refresh cadence:</strong> Every suburb hub refreshed quarterly · new case study added · pricing tables updated to current quarter · BCM firm + realtor named-partners checked for accuracy · FAQ Q&amp;As updated for any new building inquiries from that suburb in the past quarter. The "freshness signal" to search engines + LLMs is the third-most-important ranking factor for SEQ unit-renovation queries after authority + relevance.</li>
        <li><strong>LLM citation tracking (quarterly):</strong> Carla runs the 12 priority intent queries through ChatGPT + Claude + Perplexity + Gemini quarterly · counts citations of YBMT Units · target M12 = 14% citation rate on the 12 priority queries · M24 = 38% citation rate. This is the AEO equivalent of the WS-07 DBA panel · measures whether the brand is recognised in the AI substrate, not just the web substrate.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>4.4 · The BCM authority content hub (separate from suburb hubs)</h4>
      <ul className="voice-list">
        <li><strong>Hub structure:</strong> <code>/bcm-resources</code> — a content hub authored explicitly for BCMs and BCM-curious lot-owners · 12 cornerstone pages at M12 · scaling to 30 by M24. The Units LOB's category-design play.</li>
        <li><strong>12 cornerstone pages (the BCM authority play):</strong>
          <ul>
            <li>1. "The 10 most-cited BCM by-law clauses in Brisbane unit renovations"</li>
            <li>2. "Lift protection: AS/NZS-compliant install methodology"</li>
            <li>3. "Acoustic monitoring for wall-shared trades: how to do it properly"</li>
            <li>4. "The 7-day BCM Approval Pathway · what's involved · what's outsourceable"</li>
            <li>5. "Working hours compliance: Brisbane 7am–3pm doctrine"</li>
            <li>6. "BCM-compliant rubbish removal · private trade entry · common property protection"</li>
            <li>7. "The 12-item daily tidy-site checklist"</li>
            <li>8. "Insurance + warranty: what BCMs should ask every contractor"</li>
            <li>9. "Strata levies + renovation: the lot-owner cost framework"</li>
            <li>10. "Common-property damage: prevention + insurance + remediation"</li>
            <li>11. "BCM single-account billing: how it works · why it matters"</li>
            <li>12. "Pre-sale renovation in strata: realtor-coordinated · 8-week timeline"</li>
          </ul>
        </li>
        <li><strong>Authority signals:</strong> Each page links to 2 external SCA QLD or BCM-firm authority sources · cites real Brisbane by-law clause numbers · includes 1 named building-manager testimonial (with permission) · all schema.org Article + HowTo markup.</li>
        <li><strong>LLM citation engineering:</strong> The 12 cornerstone titles are intentionally phrased as common BCM-staff queries · structurally engineered as 80-90 word answer blocks the LLM can quote · target M24 outcome: when a BCM-staff member asks Claude or ChatGPT "how do I assess a contractor's lift protection protocol?" the YBMT BCM resources hub is the top-3 citation.</li>
        <li><strong>Inbound link strategy:</strong> Pursue 1 link/quarter from SCA QLD · 1 link/quarter from a BCM-firm blog · 1 link/quarter from a Brisbane legal publication covering strata law. Compound authority effect over 24 months.</li>
        <li><strong>Tracked outcome (M24):</strong> 38% of /bcm-resources traffic from organic search · 18% from LLM-citation referrals (Perplexity + Claude + ChatGPT browsing) · 8.4% conversion to BCM Referral Kit request · the highest-quality F2 capture in the LOB.</li>
      </ul>
    </div>

    <div className="kw-block">
      <h4>4.5 · KPI scorecard — P-04 SEO/GEO/AEO M1 → M24</h4>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M3</th><th>M6</th><th>M12</th><th>M24</th></tr></thead>
        <tbody>
          <tr><td>Live suburb hubs</td><td>12</td><td>24</td><td>45</td><td>45</td></tr>
          <tr><td>Live intent-specific URLs (suburb × intent)</td><td>40</td><td>90</td><td>140</td><td>540</td></tr>
          <tr><td>BCM resources cornerstone pages</td><td>3</td><td>6</td><td>12</td><td>30</td></tr>
          <tr><td>Organic sessions / mo (Units LOB)</td><td>1,200</td><td>3,800</td><td>9,200</td><td>32,000</td></tr>
          <tr><td>Branded search impressions / mo</td><td>180</td><td>620</td><td>1,800</td><td>5,400</td></tr>
          <tr><td>Top-3 SERP rankings (12 priority intents × 45 suburbs)</td><td>28</td><td>92</td><td>184</td><td>340</td></tr>
          <tr><td>LLM citation rate (12 priority queries · quarterly check)</td><td>2%</td><td>6%</td><td>14%</td><td>38%</td></tr>
          <tr><td>BCM Approval Pack downloads (organic source)</td><td>22</td><td>84</td><td>180</td><td>520</td></tr>
          <tr><td>Pre-Sale Calculator runs (organic source)</td><td>8</td><td>32</td><td>80</td><td>240</td></tr>
          <tr><td>Organic F1 → F2 conversion rate</td><td>1.4%</td><td>2.0%</td><td>2.6%</td><td>3.2%</td></tr>
          <tr><td>Organic-attributed contracts / mo</td><td>—</td><td>1</td><td>4</td><td>14</td></tr>
          <tr><td>Organic-attributed revenue / mo</td><td>—</td><td>$56k</td><td>$220k</td><td>$770k</td></tr>
          <tr><td>P-04 cost / mo (content production + tech)</td><td>$8k</td><td>$10k</td><td>$13k</td><td>$18k</td></tr>
          <tr><td>P-04 channel ROAS</td><td>—</td><td>5.6×</td><td>16.9×</td><td>42.8×</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">SEO + GEO + AEO is the slowest-starting channel in the LOB (no attributable revenue at M3) but reaches the highest M24 ROAS (42.8×) — the compounding-authority effect of category-defining content + LLM citation training. The investment is non-negotiable: every dollar deferred in M1 costs 4× in M18 to recover ranking momentum.</p>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-04 · 45 suburb hubs + 540 intent URLs by M24 + 30 BCM cornerstone pages</span>
      <span className="pf-pill">M12: 9,200 organic sessions/mo · 14% LLM citation rate · 180 BCM Pack downloads · $220k attributable revenue</span>
      <span className="pf-pill">M24 ROAS 42.8× · highest-compounding channel · LLM-citation engineered per WS-08 doctrine</span>
      <span className="pf-pill">Cross-LOB: every suburb hub internal-links to Pools + Termite siblings · WS-05 bowtie in URL architecture</span>
    </div>
  </section>
)
