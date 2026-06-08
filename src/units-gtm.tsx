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
    <UGPillar05GoogleAds />
    <UGPillar06MetaAds />
    <UGPillar08SalesEnablement />
    <UGPillar09Social />
    <UGPillar10Partnerships />
    <UGPillar11PrintPhysical />
    <UGPillar12Instrumentation />
    {/* DOC 6 · Units · 11 of 12 pillars mounted · P-07 Email deferred to WS-10 CRM workstream */}
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

// ============================================================================
// UNITS P-05 · GOOGLE ADS DEPLOYMENT KIT · BCM-coordinator + lot-owner + investor JTBD
// ============================================================================
const UGPillar05GoogleAds = () => (
  <section id="p05" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-05 · UNITS · GOOGLE ADS DEPLOYMENT KIT</span>
      <h2 className="pillar-block-title">P-05 · Google Ads Engine · 4 JTBD-Segmented Campaigns + BCM Defensive Layer + Investor PMax + LSA Across Brisbane Strata Belt</h2>
      <p className="pillar-block-sub">Units paid-search has a structurally different shape from Pools or Termite. The buyer is rarely the lot-owner searching alone — 64% of qualified Units leads arrive via a BCM coordinator, a realtor, or an investor's accountant. The Google Ads architecture therefore runs four JTBD campaigns one-to-one with the WS-04 Sarah &amp; Mark personas extended to the strata-lot environment: BCM-Coordinated · Lot-Owner-Refresh · Pre-Sale-Investor · Renew-Transformation. Each campaign answers one trigger with one offer: the <strong>BCM Approval Pack</strong> (DBA flagship from P-03 §3.2) — not a quote, not a free measure, not a phone call. Every ad enforces the WS-02 Promise "Built like it's our own home" through the strata-tuned variant "Renovations That Settle Quietly," and every creative carries the 30-Day Refresh seal from P-01 §1.4. [BF-LSI] Binet &amp; Field 55/45 brand-activation split governs budget — Units leans 5 points more brand-side than Pools because category-design (BCM-friendly renovation) is the primary play; [JR-DBA] DBA-3 "BCM-Approved Methodology" travels every creative; [AH-OFR] offer-clarity removes price-shopping behaviour from the SERP; Sarah &amp; Mark recognise themselves in the ad because the headline names the BCM tension, not the renovation aesthetic.</p>
    </div>

    {/* 5.1 PAID DOCTRINE */}
    <div className="kw-block">
      <h3>5.1 · Units Paid-Search Doctrine — Six Locked Rules</h3>
      <ol>
        <li><strong>JTBD-segmented, not service-segmented.</strong> Campaigns are named for the Job Story (BCM-Coordinated / Lot-Owner-Refresh / Pre-Sale-Investor / Renew-Transformation), not the renovation type (kitchen / bathroom / floors). Same physical renovation, different buyer story, different BCM friction. A BCM-Coordinated bathroom and a Pre-Sale-Investor bathroom are not the same advertising problem.</li>
        <li><strong>One offer per ad group · the BCM Approval Pack is the locked F2.</strong> Never a quote · never a free measure · never a phone call as primary CTA. The Approval Pack is the only conversion event Google Ads is allowed to optimise for. This is the WS-11 KPI lock travelling into the bidding layer.</li>
        <li><strong>Match the JTBD landing exactly.</strong> Every ad routes to one of the four JTBD landings built in P-02 §2.4-2.7 (<code>/refresh</code>, <code>/renew</code>, <code>/bcm-coordination</code>, <code>/pre-sale</code>) — never the homepage · never a generic services page · never a Pools or Termite landing. [AH-OFR] message-to-landing congruence is non-negotiable.</li>
        <li><strong>Negative keyword discipline · strata-specific.</strong> Globals: "cheap," "DIY," "kit," "second-hand," "near me free." Strata-specific negatives: "townhouse," "house," "freestanding," "duplex," "subdivision," "knock down rebuild," "ground floor extension." The Units LOB explicitly excludes non-strata enquiries so paid spend never bleeds into the freestanding-home market (covered by Pools/Termite cross-sell, not Units).</li>
        <li><strong>Conversion = BCM Approval Pack downloaded + Pre-Reno Consult booked, not lead form.</strong> Primary conversion is the personalised BCM Approval Pack download (P-03 §3.2 DocRaptor flow) AND the Pre-Reno Consult held within 14 days. Lead-form fill is a 0.15-weighted micro-conversion. Smart Bidding optimises for revenue-correlated outcomes, not vanity fills. This is the WS-11 F1→F2→F3 funnel travelling into the bidding configuration.</li>
        <li><strong>BCM defensive bidding.</strong> A separate brand-defence campaign (UG-B-01) bids on "YBMT Units" + "BCM-approved renovation Brisbane" + the names of the 34 priority BCM firms from P-10 (preview — partnerships pillar). Defensive impression share target 96% top-of-page. This protects the BCM-referred warm traffic from competitors who target our partnerships network.</li>
      </ol>
    </div>

    {/* 5.2 CAMPAIGN ARCHITECTURE */}
    <div className="kw-block">
      <h3>5.2 · Campaign Architecture — 10 Campaigns Across 5 Channels</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign code</th><th>Channel</th><th>JTBD / function</th><th>Primary keyword theme</th><th>Daily budget M3</th><th>Target CPL</th><th>Target CP-Pack-Download</th></tr></thead>
        <tbody>
          <tr><td>UG-S-01 BCM-Coordinated Search</td><td>Search</td><td>JTBD-1 (BCM as buyer-influence)</td><td>"BCM approved renovation," "strata-compliant unit renovation Brisbane," "body corporate friendly contractor"</td><td>$95</td><td>$58</td><td>$22</td></tr>
          <tr><td>UG-S-02 Lot-Owner-Refresh Search</td><td>Search</td><td>JTBD-2 (lot-owner self-initiated)</td><td>"unit renovation Brisbane," "apartment kitchen renovation," "strata bathroom refresh"</td><td>$120</td><td>$48</td><td>$18</td></tr>
          <tr><td>UG-S-03 Pre-Sale-Investor Search</td><td>Search</td><td>JTBD-3 (investor uplift)</td><td>"pre-sale apartment renovation," "increase unit value Brisbane," "investor strata refresh"</td><td>$85</td><td>$62</td><td>$24</td></tr>
          <tr><td>UG-S-04 Renew-Transformation Search</td><td>Search</td><td>JTBD-4 (whole-of-unit reset)</td><td>"complete apartment renovation Brisbane," "full strata unit overhaul," "8 week unit transformation"</td><td>$80</td><td>$72</td><td>$28</td></tr>
          <tr><td>UG-PM-01 Units PMax</td><td>Performance Max</td><td>All 4 (asset-group-segmented)</td><td>Audience signals: 4 JTBD-coded · feed: 3 productised tier pages</td><td>$140</td><td>$54</td><td>$20</td></tr>
          <tr><td>UG-DG-01 Demand Gen — BCM category</td><td>Demand Gen</td><td>Trigger-forming (top funnel)</td><td>30-sec "Renovations That Settle Quietly" video · 4 BCM testimonial reels · 45-sec category-design hook</td><td>$70</td><td>n/a (brand)</td><td>n/a</td></tr>
          <tr><td>UG-LSA-01 LSA</td><td>Local Services Ads</td><td>All</td><td>"Google Guaranteed" badge · LSA category: General Contractor + Renovation</td><td>$90</td><td>$42</td><td>$16</td></tr>
          <tr><td>UG-B-01 BCM Brand Defence</td><td>Search</td><td>All · defensive</td><td>"YBMT Units" + branded modifiers + 34 BCM firm conquest sub-group</td><td>$22</td><td>$14</td><td>$8</td></tr>
          <tr><td>UG-RM-01 JTBD Remarketing</td><td>Display + RLSA</td><td>Returning by JTBD tag</td><td>4 audience segments mirroring 4 JTBD landings · BCM Pack abandoners prioritised</td><td>$38</td><td>$24</td><td>$11</td></tr>
          <tr><td>UG-YT-01 Realtor + Investor YouTube</td><td>YouTube Skippable</td><td>JTBD-3 (Pre-Sale-Investor) · life-event trigger</td><td>4 in-stream creatives · realtor-channel-affinity audience · 6 SEQ DMAs</td><td>$45</td><td>n/a (view rate)</td><td>$32</td></tr>
        </tbody>
      </table>
      <p><strong>Total M3 daily budget:</strong> $785/day · ~$23.5k/month. <strong>Total M12 daily budget:</strong> $1,420/day · ~$42.6k/month. <strong>Brand/Activation split (Binet &amp; Field):</strong> 45% Demand Gen + Branded Defence + YouTube + 25% of PMax = brand bucket · 55% Search + LSA + Remarketing + 75% of PMax = activation bucket. The 55/45 split reflects the category-design imperative: BCM-friendly renovation is a frame that doesn't yet exist in the buyer's vocabulary at M0, so trigger-forming top-of-funnel investment is higher than in a mature paid-search category like Termite. Units paid budget is also intentionally smaller than Pools because the partnership-driven F1 channel (P-10) carries more of the volume.</p>
    </div>

    {/* 5.3 AD COPY LIBRARY */}
    <div className="kw-block">
      <h3>5.3 · Ad Copy Library — 4 JTBD × 5 Headlines × 4 Descriptions Per Ad Group</h3>
      <p><strong>JTBD-1 BCM-Coordinated · UG-S-01 ad group · primary buyer signal = BCM staff search:</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Asset</th><th>Copy</th></tr></thead>
        <tbody>
          <tr><td>Headline 1</td><td>BCM-Approved Renovations · Brisbane Strata · 30 Days</td></tr>
          <tr><td>Headline 2</td><td>Body Corporate Approval Pack · Free · 7-Day Pathway</td></tr>
          <tr><td>Headline 3</td><td>Renovations That Settle Quietly · BCM Pre-Cleared</td></tr>
          <tr><td>Headline 4</td><td>Strata-Compliant Contractor · Brisbane · 200+ Units Done</td></tr>
          <tr><td>Headline 5</td><td>Built Like It's Our Own Home · BCM-Coordinated Trades</td></tr>
          <tr><td>Description 1</td><td>Download the free BCM Approval Pack: by-law compliance template, working-hours schedule, common-property protection plan. 7-day Body Corporate pathway.</td></tr>
          <tr><td>Description 2</td><td>Single-account billing to the BCM. Acoustic monitoring. AS/NZS lift protection. 7am-3pm Brisbane working-hours doctrine. Renovations that settle quietly.</td></tr>
          <tr><td>Description 3</td><td>200+ Brisbane strata units delivered. Zero BCM complaints in 18 months. Master Builders QLD member. Built like it's our own home.</td></tr>
          <tr><td>Description 4</td><td>Free 60-minute Pre-Reno Consult. We arrive with the BCM Approval Pack pre-filled for your building. No sales pressure. Sarah &amp; Mark's exact playbook.</td></tr>
        </tbody>
      </table>
      <p><strong>Sitelink extensions (8):</strong> "BCM Approval Pack" · "/bcm-coordination landing" · "30-Day Refresh Tier" · "Pre-Reno Consult" · "BCM Compliance FAQ" · "Hamilton Strata Builds" · "South Brisbane Units" · "BCM Referral Kit."</p>
      <p><strong>Callout extensions (10):</strong> "BCM-Approved Methodology" · "7-Day Approval Pathway" · "Single-Account Billing" · "Acoustic Monitoring Standard" · "AS/NZS Lift Protection" · "Brisbane 7am-3pm Doctrine" · "Master Builders QLD" · "200+ Strata Units" · "Zero BCM Complaints 18 Mo" · "Built Like Our Own Home."</p>
      <p><strong>Structured snippets:</strong> "Tiers: Refresh ($28-42k/28d), Renew ($42-78k/6w), Reset ($78-120k/8w)." · "Buildings: South Brisbane, Hamilton, Newstead, Fortitude Valley, West End, Toowong."</p>
      <p>JTBD-2 Lot-Owner-Refresh ad group leads with "Your Apartment, Refreshed in 28 Days · BCM Already Handled." JTBD-3 Pre-Sale-Investor ad group leads with "Pre-Sale Apartment Refresh · 6.8× ROI Average · 28 Days to Listing." JTBD-4 Renew-Transformation ad group leads with "Complete Apartment Reset · 8 Weeks · Body Corporate Coordinated." Each receives a bespoke 5-headline / 4-description / 8-sitelink / 10-callout set · all locked in YDT deliverable folder /units/p05/copy-v1.</p>
    </div>

    {/* 5.4 PERFORMANCE MAX ASSET GROUPS */}
    <div className="kw-block">
      <h3>5.4 · Performance Max — 4 Asset Groups, 1 Per JTBD, BCM-Tuned Signals</h3>
      <p>UG-PM-01 split into 4 asset groups (one per JTBD), each with locked DBA enforcement (DBA-3 "BCM-Approved Methodology" travels every creative · DBA-7 "30-Day Refresh seal" travels every static):</p>
      <ul className="voice-list">
        <li><strong>Asset group 1 · BCM-Coordinated:</strong> 5 long headlines · 5 short headlines · 5 descriptions · 15 images (DBA-2 "quiet site" lens — clean common-property entry, no dust, no trade chaos) · 5 videos (15-sec, 30-sec, 60-sec versions of the BCM approval pathway timelapse) · audience signal: in-market for strata-management services + custom intent built from "body corporate manager" + "strata committee" search history.</li>
        <li><strong>Asset group 2 · Lot-Owner-Refresh:</strong> creatives lead with "your unit, refreshed, BCM already cleared" framing · audience signal: recent Brisbane apartment purchasers (5-year window) via custom intent + lookalike of HubSpot Refresh-tier deal-won cohort.</li>
        <li><strong>Asset group 3 · Pre-Sale-Investor:</strong> creatives lead with sale-uplift comp tables (Pre-Sale ROI Calculator output) · audience signal: real-estate-listing intenders (Domain + realestate.com.au custom audiences) + investor-finance affinity + Brisbane investment-property search history.</li>
        <li><strong>Asset group 4 · Renew-Transformation:</strong> creatives lead with 8-week before/after carousels · audience signal: "renovation finance Brisbane" custom intent + lookalike of HubSpot Reset-tier deal-won cohort + apartment-renovation Pinterest-board audience.</li>
      </ul>
      <p><strong>PMax exclusions (account-level):</strong> brand search excluded (forces PMax to find net-new, not steal from UG-B-01) · YouTube placements excluded if mobile-only/sub-15-sec inventory · Display partners excluded if quality score &lt; 7 (manual sweep monthly) · all "townhouse" / "duplex" / "house" / "knock down rebuild" placements blacklisted via account-level negative content filter.</p>
    </div>

    {/* 5.5 LSA & GOOGLE GUARANTEED */}
    <div className="kw-block">
      <h3>5.5 · Local Services Ads (LSA) and Google Guaranteed Setup — Strata-Specific Configuration</h3>
      <p>LSA is the second-highest-ROAS channel for Units after partnerships (P-10). Strata-specific setup non-negotiables:</p>
      <ol>
        <li><strong>Google Guaranteed badge</strong> — full background check, licence verification (BSA), insurance verification ($5M public liability minimum — strata work requires higher cover than freestanding), 100% completion within 21 days of P-05 launch.</li>
        <li><strong>Service categories listed:</strong> "General Contractor" · "Renovation Company" · "Kitchen Renovation" · "Bathroom Renovation" (4-category cross-listing maximises impression share).</li>
        <li><strong>Service area:</strong> 45 SEQ strata-dense suburbs from P-04 §4.3 mapped to LSA polygon · Hamilton + South Brisbane + Newstead + Fortitude Valley + West End + Toowong + St Lucia weighted 1.4× via bid modifier.</li>
        <li><strong>Photo set:</strong> 30 strata-tuned photos — common-property entries pre/during/post (zero damage doctrine visualised) · BCM-coordinator on-site shots · 28-day timelapse stills · all submitted for Google approval batch.</li>
        <li><strong>Review velocity:</strong> 3 Google reviews/week minimum (drip request via P-08 sales-enablement post-handover sequence · BCM-coordinator reviews encouraged separately from lot-owner reviews). Target 4.9★ avg, 50+ reviews by M6, 110+ by M12, 220+ by M24. <strong>Critical:</strong> at least 18% of reviews must mention "BCM" or "body corporate" or "strata" to train Google's LSA algorithm that this contractor is the strata-specialist for the polygon.</li>
        <li><strong>Lead disputes:</strong> any non-fit LSA lead (freestanding home, townhouse, knock-down-rebuild, ground-floor extension) disputed within 24h to maintain Quality Score. SOP doc'd for YDT ops at /docs/sop/lsa-dispute-units.md.</li>
        <li><strong>Budget mode:</strong> Maximise Leads (not target CPL) for M1-M3 · switch to Target CPL = $42 from M4 once data sufficient.</li>
      </ol>
    </div>

    {/* 5.6 BIDDING & MEASUREMENT */}
    <div className="kw-block">
      <h3>5.6 · Bidding Strategy and Conversion Measurement Stack</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign</th><th>Bid strategy M1-M2 (learning)</th><th>Bid strategy M3+ (mature)</th><th>Target</th></tr></thead>
        <tbody>
          <tr><td>UG-S-01..04 (JTBD Search)</td><td>Maximise Conversions</td><td>Target CPA</td><td>$48-$72 depending on JTBD</td></tr>
          <tr><td>UG-PM-01 (PMax)</td><td>Maximise Conversions</td><td>Target ROAS</td><td>3.8× at gross-margin level</td></tr>
          <tr><td>UG-DG-01 (Demand Gen)</td><td>Maximise Clicks (brand)</td><td>Target CPM</td><td>Reach-weighted · no CPL target · category-design KPI = branded search lift</td></tr>
          <tr><td>UG-LSA-01 (LSA)</td><td>Maximise Leads</td><td>Target Cost Per Lead</td><td>$42</td></tr>
          <tr><td>UG-B-01 (BCM Brand Defence)</td><td>Manual CPC</td><td>Target Impression Share 96% top of page</td><td>Defensive · no CPL target</td></tr>
          <tr><td>UG-RM-01 (Remarketing)</td><td>Maximise Conversions</td><td>Target CPA</td><td>$24</td></tr>
          <tr><td>UG-YT-01 (YouTube)</td><td>Target CPM (skippable)</td><td>Target CPV</td><td>$0.04/view · view-through-conv weighted 0.3</td></tr>
        </tbody>
      </table>
      <p><strong>Conversion event hierarchy (primary → secondary → micro) · WS-11 F1→F2→F3 doctrine enforced:</strong></p>
      <ol>
        <li><strong>Primary F2 (value = 1.0):</strong> BCM Approval Pack downloaded AND Pre-Reno Consult held within 14 days (Calendly webhook + DocRaptor download fingerprint matched in D1).</li>
        <li><strong>Primary F3 leading indicator (value = 1.5 — uploaded offline M4+):</strong> Contract signed within 60 days of F2.</li>
        <li><strong>Secondary (value = 0.6):</strong> BCM Approval Pack downloaded only (no Consult held).</li>
        <li><strong>Micro (value = 0.25):</strong> Pre-Sale ROI Calculator runs to completion (P-03 §3.4 magnet).</li>
        <li><strong>Micro (value = 0.15):</strong> Lead-form submission via /bcm-coordination contact path.</li>
        <li><strong>Micro (value = 0.08):</strong> Phone call ≥ 90 seconds (Google forwarding number routed via CallRail DNI · WS-11 §1.2 instrumentation).</li>
      </ol>
      <p><strong>Tracking stack:</strong> GA4 (primary) + Google Ads conversion tags + Cloudflare Web Analytics (independent verification) + server-side D1 log (analytics-blocker resilient) + Calendly webhook → Cloudflare Worker → D1 + CallRail DNI → HubSpot deal-create → Google Ads offline conversion upload. Enhanced Conversions enabled (hashed email/phone passed back to Google for closed-loop attribution). [WBD-BOW] Bowtie post-contract cross-LOB expansion data fed back into Smart Bidding via offline conversion uploads from M4 onwards · the 50% LTV credit-back doctrine (WS-05) flows to PMax + Search Smart Bidding so Google sees the true $-value of a Units lead, not just the Units contract value. Critical: every Units F2 conversion includes a "BCM_Firm" custom parameter so Google Ads can model the 22% lift in conversion rate when a BCM firm is upstream — protecting the partnerships-channel against paid-channel cannibalisation accounting.</p>
    </div>

    {/* 5.7 KPI SCORECARD */}
    <div className="kw-block">
      <h3>5.7 · KPI Scorecard — Google Ads M1 → M24 · Units LOB</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Total monthly spend</td><td>$14k</td><td>$23.5k</td><td>$31k</td><td>$42.6k</td><td>$62k</td></tr>
          <tr><td>BCM Approval Pack downloads (paid-attributed)</td><td>52</td><td>168</td><td>310</td><td>540</td><td>880</td></tr>
          <tr><td>Pre-Reno Consults held (paid-attributed)</td><td>14</td><td>48</td><td>112</td><td>225</td><td>410</td></tr>
          <tr><td>Blended Cost Per Pack-Download</td><td>$269</td><td>$140</td><td>$100</td><td>$79</td><td>$70</td></tr>
          <tr><td>Pack-Download → Consult-held rate</td><td>27%</td><td>29%</td><td>36%</td><td>42%</td><td>47%</td></tr>
          <tr><td>Consult-held → contract-signed rate</td><td>32%</td><td>40%</td><td>48%</td><td>54%</td><td>58%</td></tr>
          <tr><td>Implied paid-channel won contracts/month</td><td>4</td><td>19</td><td>54</td><td>122</td><td>238</td></tr>
          <tr><td>Avg contract value (Units · tier-blended)</td><td>$52k</td><td>$56k</td><td>$58k</td><td>$62k</td><td>$66k</td></tr>
          <tr><td>Implied paid revenue/month</td><td>$208k</td><td>$1.06M</td><td>$3.13M</td><td>$7.56M</td><td>$15.71M</td></tr>
          <tr><td>Paid GPM (28% blended GP · Units lower-margin than Pools)</td><td>$58k</td><td>$298k</td><td>$877k</td><td>$2.12M</td><td>$4.40M</td></tr>
          <tr><td>Paid ROAS (GP basis · pre-bowtie credit-back)</td><td>4.2×</td><td>12.7×</td><td>28.3×</td><td>49.8×</td><td>71.0×</td></tr>
          <tr><td>Paid ROAS (GP basis · post-bowtie credit-back +50% LTV)</td><td>5.0×</td><td>15.2×</td><td>34.0×</td><td>59.8×</td><td>85.2×</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">M1 is intentional learning loss · target ROAS only locks from M3. M24 figures assume the partnerships-channel (P-10) is operating at scale and Bowtie cross-LOB expansion (Units → Pools post-handover) is uploading offline conversions to Google Ads from M9 onwards. The post-bowtie ROAS of 85.2× at M24 is the true financial signal — paid acquisition in Units looks lossy if measured at the contract level alone (49.8× pre-bowtie at M12 is below Pools' 43.4× at the same maturity), but once the 50% LTV credit-back from cross-LOB expansion is applied (a Units customer is 38% likely to commission a Pools project within 36 months · 22% likely to commission Termite), Units paid acquisition becomes the highest-ROAS channel in the YBMT Group at M24. This is the WS-05 Economics doctrine made operational in the bidding layer · Sarah &amp; Mark's true Lifetime Value of $30× the first contract is what we bid for, not the first contract alone.</p>
    </div>

    {/* 5.8 GOVERNANCE & ANTI-PATTERNS */}
    <div className="kw-block">
      <h3>5.8 · Governance, Forbidden States, Anti-Patterns</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · "Free quote" CTA on any ad.</strong> Always BCM Approval Pack + Pre-Reno Consult. Auto-flagged in copy linter at YDT.</li>
        <li><strong>Forbidden state #2 · Landing-page = homepage on a JTBD campaign.</strong> Each JTBD campaign routes to its JTBD landing (P-02 §2.4-2.7). No exceptions. CI check fails the deploy if any UG-S-* ad URL doesn't match the canonical landing for its JTBD code.</li>
        <li><strong>Forbidden state #3 · Mixing JTBDs in one ad group.</strong> A BCM-Coordinated keyword + Pre-Sale-Investor keyword in same ad group = restructure. JTBD coherence is the discipline because Sarah &amp; Mark's pain language is different at each JTBD.</li>
        <li><strong>Forbidden state #4 · Bidding on BCM firm names without partnerships consent.</strong> The 34 BCM firms in UG-B-01 conquest are only included with written partnership consent (P-10 governs) — bidding on a partnership-channel BCM without consent risks the entire P-10 relationship for short-term paid lift.</li>
        <li><strong>Forbidden state #5 · Smart Bidding optimising on lead-form fills.</strong> Primary conversion must be BCM Approval Pack + Pre-Reno Consult held. Quality control reviewed weekly. If lead-form fills exceed 30% of conversions in any campaign for 2 weeks, the conversion configuration is broken.</li>
        <li><strong>Forbidden state #6 · No Brisbane-strata-suburb modifier in geo-targeting.</strong> 45 SEQ strata-dense suburbs from P-04 are the locked geo-target set. Townhouse-heavy outer suburbs (Springfield, Ipswich greenfield, Logan greenfield) explicitly excluded.</li>
        <li><strong>Forbidden state #7 · Renovation-aesthetic creatives instead of BCM-tension creatives.</strong> A "beautiful kitchen reveal" creative without the BCM compliance frame breaks Sarah &amp; Mark recognition. All creatives must visibly cue the strata environment (door-frame protection, lift padding, BCM coordinator on site) in at least 1 of 3 above-fold visual moments.</li>
        <li><strong>Forbidden state #8 · Cross-LOB cannibalisation in remarketing.</strong> A Pools-LOB visitor cannot be retargeted by Units remarketing within 90 days of their Pools Inspection booking · prevents Sarah &amp; Mark feeling spam-marketed by the Group. WS-04 persona-care doctrine enforced at the audience-list level.</li>
        <li><strong>Weekly cadence:</strong> Mon search-terms-report + n-gram analysis + negative-keyword update (strata-specific list reviewed separately) · Wed creative-fatigue check (CTR decay &gt;15% week-over-week = rotate) · Fri budget reallocation by JTBD CP-Pack-Download performance + BCM-firm referral attribution check.</li>
        <li><strong>Monthly cadence:</strong> Bid-strategy review · audience-signal refresh on PMax · LSA review velocity + strata-keyword saturation audit · branded SOV report · BCM-firm conquest audit (any partnership-consent changes since last review).</li>
        <li><strong>Quarterly cadence:</strong> Full account restructure check · negative keyword list audit · landing-page CR audit (paired with P-02 changes if needed) · 55/45 brand/activation budget review · Pureprofile SEQ panel question audit (WS-11 §6.4 — Sarah &amp; Mark BCM-pain-recall measured every quarter, paid creative tuned to recall data).</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-05 · 10 campaigns across Search · PMax · Demand Gen · LSA · Brand Defence · Remarketing · YouTube</span>
      <span className="pf-pill">$42.6k/mo M12 spend · CP-Pack-Download $79 · 540 Packs/mo · 122 contracts/mo paid-attributed</span>
      <span className="pf-pill">JTBD-segmented · BCM Approval Pack = locked F2 · Enhanced Conversions · offline upload from bowtie LTV credit-back</span>
      <span className="pf-pill">M24 post-bowtie ROAS 85.2× — highest in YBMT Group · because Units F2 fans into Pools + Termite F1 inside 36 months</span>
    </div>
  </section>
)

// ============================================================================
// UNITS P-06 · META ADS DEPLOYMENT KIT · Category-design top funnel + BCM-credibility middle + JTBD activation
// ============================================================================
const UGPillar06MetaAds = () => (
  <section id="p06" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-06 · UNITS · META ADS DEPLOYMENT KIT</span>
      <h2 className="pillar-block-title">P-06 · Meta Ads Engine · 3-Layer Funnel Across Facebook · Instagram · WhatsApp · BCM Authority Layer + JTBD Activation + Bowtie Cross-LOB Re-Engagement</h2>
      <p className="pillar-block-sub">Meta is structurally different from Google for Units. Google captures buyers already searching the BCM-renovation problem — a small intent pool. Meta is where the category gets <em>designed</em>: where Sarah &amp; Mark first encounter the idea that "BCM-friendly renovation" exists as a discrete service category, where they form the trigger language before they ever type a search. The architecture runs a 3-layer funnel (Category Design top · BCM Authority middle · JTBD Activation bottom) with a cross-LOB bowtie re-engagement layer that captures the Pools and Termite alumni who never knew Units existed. Every creative carries WS-02 Promise "Built like it's our own home" through the strata-tuned variant "Renovations That Settle Quietly," every creative cues Sarah &amp; Mark recognition in the first 2 seconds, and every offer remains the locked WS-11 F2: the <strong>BCM Approval Pack</strong>. [BF-LSI] 60/40 brand-activation split on Meta (5 points more brand than the Group default of 55/45 · because Meta is the primary category-design surface) · [JR-DBA] DBA-2 "quiet site" visual cue + DBA-3 "BCM-Approved Methodology" badge travels every static · [AH-OFR] one offer per audience · never multiple CTAs in a single ad.</p>
    </div>

    {/* 6.1 META DOCTRINE */}
    <div className="kw-block">
      <h3>6.1 · Units Meta Doctrine — Seven Locked Rules</h3>
      <ol>
        <li><strong>3-layer funnel discipline · no layer-skipping.</strong> Category Design (top) feeds BCM Authority (middle) feeds JTBD Activation (bottom) feeds Bowtie Cross-LOB (lateral). No campaign attempts to do two layers' work. A category-design video does not have a "Get BCM Pack" CTA — it has a "Learn how" CTA that routes to a long-form article. Sarah &amp; Mark are not ready for the Pack at first impression — the category must be designed first.</li>
        <li><strong>Cue Sarah &amp; Mark in 2 seconds.</strong> Every video creative's first 2 seconds must show one of three recognition cues: (a) a BCM-coordinated trade entry through a unit building lobby (clean, quiet, padded) · (b) a 30-something/40-something couple consulting a body-corporate document at a kitchen bench · (c) a unit-block exterior with a "trade vehicle parked discreetly · 7:02am" caption. No generic renovation b-roll without strata context.</li>
        <li><strong>BCM voice in 23% of creatives minimum.</strong> Sarah &amp; Mark trust BCM voices more than contractor voices for strata-compliance claims. A minimum 23% of all paid Meta creative inventory must feature a real BCM coordinator (with permission) speaking on camera. This breaks the contractor-self-praise pattern and trains the algorithm that BCM-credibility is the unit-renovation buyer's primary trust signal.</li>
        <li><strong>One offer per audience.</strong> Top-funnel audiences get the BCM-resources content hub (no form fill). Middle-funnel audiences get the BCM Approval Pack download. Bottom-funnel audiences get the Pre-Reno Consult booking. Cross-LOB bowtie audiences get a "your Pools/Termite project unlocks a Units consult at $0" specific offer. Mixing offers in a single audience is the most common Meta-failure mode and explicitly forbidden.</li>
        <li><strong>Conversion API + Enhanced CAPI signal pass-back.</strong> Meta Pixel + Conversion API both fire on the same events. WS-11 §1.4 server-side GTM proxies Pixel events through Cloudflare Worker → Meta CAPI for iOS 14.5+ resilience. Match quality target ≥ 7.8/10. Hashed PII (email + phone + name) passed back from HubSpot for all F2/F3 events so Meta sees the complete funnel including the contract-signed F3 event invisible to the pixel.</li>
        <li><strong>Bowtie cross-LOB whitelist · explicit consent.</strong> Pools and Termite customers retargeted into Units campaigns only after the 90-day cool-down (WS-04 persona-care) AND only if their HubSpot record has the bowtie-consent flag = TRUE (set at handover survey, P-08 §8.6). Without explicit consent, the customer is excluded from Units retargeting via Meta custom audience exclusion. This protects the Group's long-term trust capital.</li>
        <li><strong>Forbidden creative category · "renovation glamour shots."</strong> The category is BCM-Friendly Renovation, not Apartment Aesthetic Renovation. Beautiful kitchen reveals without the strata-tension cue (door-frame protection, lift padding, BCM coordinator, building manager signage) are explicitly forbidden creative templates. Aesthetic content lives in P-09 organic — paid Meta is for category design + BCM credibility + JTBD activation only.</li>
      </ol>
    </div>

    {/* 6.2 CAMPAIGN ARCHITECTURE */}
    <div className="kw-block">
      <h3>6.2 · Campaign Architecture — 12 Campaigns Across 4 Layers</h3>
      <p><strong>Layer 1 · Category Design (top funnel · 25% budget · brand-bucket KPIs):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign code</th><th>Objective</th><th>Audience</th><th>Creative format</th><th>Daily budget M3</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>UG-M-CD-01 "What Settles Quietly Means"</td><td>Reach</td><td>Brisbane apartment owners + 1° lookalike of BCM-coordinated HubSpot deals · age 32-58 · interest: home renovation, body corporate, strata</td><td>4 in-feed videos · 30 / 60 / 90 / 180 sec · Sarah &amp; Mark testimonial-style narratives</td><td>$45</td><td>3-second video view rate</td></tr>
          <tr><td>UG-M-CD-02 "The 7am-3pm Doctrine"</td><td>Video views (Thruplay)</td><td>Brisbane apartment owners · 1% lookalike of BCM Approval Pack downloaders</td><td>6 in-feed reels · 22-45 sec · single-day-in-the-life trade narrative</td><td>$35</td><td>Thruplay completion rate &gt; 32%</td></tr>
          <tr><td>UG-M-CD-03 BCM Voice Testimonial Series</td><td>Brand awareness</td><td>Brisbane strata-density polygon · interest: real estate investing + body corporate</td><td>6 testimonial reels · real BCM coordinators · 45-90 sec each</td><td>$40</td><td>Branded recall lift study (Meta-native)</td></tr>
        </tbody>
      </table>
      <p><strong>Layer 2 · BCM Authority (middle funnel · 30% budget · F2-bucket KPIs):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign code</th><th>Objective</th><th>Audience</th><th>Creative format</th><th>Daily budget M3</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>UG-M-BA-01 BCM Approval Pack Lead-Gen</td><td>Conversions (lead)</td><td>1° lookalike of /bcm-coordination landing + 3-second video viewers from CD-01/02</td><td>5 carousels · BCM Pack contents preview · 3 reels · 2 statics with "what's in the Pack" overlay</td><td>$85</td><td>Cost per Pack-download &lt; $34</td></tr>
          <tr><td>UG-M-BA-02 BCM Resources Authority Content</td><td>Traffic + Engagement</td><td>Brisbane apartment owners + 2° lookalike of Pack downloaders + interest: strata law, body corporate AGM</td><td>8 link-cards · each linking to a /bcm-resources cornerstone page (P-04 §4.4)</td><td>$45</td><td>Time-on-page &gt; 4:20 + Pack-download conv rate &gt; 6.4%</td></tr>
          <tr><td>UG-M-BA-03 Realtor + Investor Authority</td><td>Conversions (Pre-Sale Calculator)</td><td>Brisbane investment-property owners · realtor-adjacent affinity · age 38-65 · 1° lookalike of Pre-Sale ROI Calculator completers</td><td>4 carousels · case-study format · 3 statics with ROI uplift charts · 2 reels · realtor testimonial</td><td>$45</td><td>Cost per Calculator completion &lt; $22</td></tr>
        </tbody>
      </table>
      <p><strong>Layer 3 · JTBD Activation (bottom funnel · 30% budget · F3 leading-indicator KPIs):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign code</th><th>Objective</th><th>Audience</th><th>Creative format</th><th>Daily budget M3</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>UG-M-JA-01 BCM-Coordinated JTBD-1 Conv</td><td>Conversions (Consult)</td><td>Pack downloaders + BCM-coordination landing visitors · 14-day window · BCM-tag = TRUE</td><td>2 in-feed videos · 3 carousels · Sarah-Mark recognition-cue first 2s</td><td>$45</td><td>Consult-booking cost &lt; $58</td></tr>
          <tr><td>UG-M-JA-02 Lot-Owner-Refresh JTBD-2 Conv</td><td>Conversions (Consult)</td><td>Pack downloaders + /refresh landing visitors · 14-day · BCM-tag = FALSE</td><td>2 in-feed videos · 3 carousels · self-initiated narrative · pricing transparency badge</td><td>$45</td><td>Consult-booking cost &lt; $52</td></tr>
          <tr><td>UG-M-JA-03 Pre-Sale-Investor JTBD-3 Conv</td><td>Conversions (Calculator OR Consult)</td><td>Calculator completers + Domain/realestate.com.au lookalike · investor + realtor-affinity</td><td>3 carousels with ROI comp tables · 2 reels with 6.8× ROI hook · realtor testimonial</td><td>$45</td><td>Calculator OR Consult cost &lt; $62</td></tr>
          <tr><td>UG-M-JA-04 Renew-Transformation JTBD-4 Conv</td><td>Conversions (Consult)</td><td>Pack downloaders + /renew landing visitors · 14-day · saved-listings + Pinterest-board affinity</td><td>4 reels · 8-week before/after carousels · finance-friendly framing</td><td>$45</td><td>Consult-booking cost &lt; $72</td></tr>
        </tbody>
      </table>
      <p><strong>Layer 4 · Bowtie Cross-LOB Re-Engagement (lateral · 15% budget · 50% LTV credit-back KPIs · WS-05 economics in action):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Campaign code</th><th>Objective</th><th>Audience</th><th>Creative format</th><th>Daily budget M3</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>UG-M-BT-01 Pools Alumni → Units</td><td>Conversions (Consult)</td><td>Pools customers · bowtie-consent flag = TRUE · 90+ days post-handover · own a Brisbane apartment as 2nd property</td><td>4 in-feed videos · "you trusted us with your Resort Yard · here's what we do for your investment unit" narrative · same craft-team voice as Pools P-09</td><td>$25</td><td>Bowtie-attributed Consult cost &lt; $42</td></tr>
          <tr><td>UG-M-BT-02 Termite Alumni → Units (investor cohort)</td><td>Conversions (Calculator)</td><td>Termite Damage Repair customers · bowtie-consent flag = TRUE · 60+ days post-handover · investor-segment in HubSpot</td><td>3 carousels · "the building you saved · what's next" narrative · Pre-Sale Calculator as primary CTA</td><td>$15</td><td>Calculator completion cost &lt; $32</td></tr>
        </tbody>
      </table>
      <p><strong>Total M3 daily budget:</strong> $670/day · ~$20k/month. <strong>Total M12 daily budget:</strong> $1,180/day · ~$35.4k/month. <strong>Brand/Activation split (Binet &amp; Field):</strong> 25% Category Design + 35% BCM Authority brand-leaning = 60% brand · 30% JTBD + 10% Bowtie = 40% activation. The 60/40 weighting reflects Meta's primary purpose for Units: category design, not last-click conversion (that's Google's job in this LOB).</p>
    </div>

    {/* 6.3 CREATIVE LIBRARY */}
    <div className="kw-block">
      <h3>6.3 · Creative Library — 48 Production-Ready Concepts Across 4 Layers</h3>
      <p><strong>Layer 1 · Category Design — 12 video concepts:</strong></p>
      <ol>
        <li>"Day 1 of your renovation should not announce itself." — quiet trade entry · BCM coordinator nod · 30 sec.</li>
        <li>"Your neighbour's kettle should still work at 7:02am." — building corridor · soft-shoe trades · 22 sec reel.</li>
        <li>"There is a way to renovate without becoming the building's villain." — montage of 4 BCM coordinators speaking · 60 sec.</li>
        <li>"The 28-day BCM approval pathway, in plain English." — animated explainer · cornerstone-page link · 45 sec.</li>
        <li>"What 'BCM-Approved Methodology' actually means." — voiceover with on-screen BCM checklist · 38 sec.</li>
        <li>"Sarah &amp; Mark didn't lose a friend in the building. Here's why." — couple testimonial (composite) · 90 sec.</li>
        <li>"The lift padding video that 14 BCMs asked for." — 60-second methodology demo · 60 sec.</li>
        <li>"Why we end work at 3pm." — trade voice · school-pickup framing · 25 sec reel.</li>
        <li>"The building manager's 12-item daily tidy checklist." — animated checklist · 48 sec.</li>
        <li>"Why we don't sub-let common-property cleaning." — single-take trade narrative · 35 sec.</li>
        <li>"Brisbane unit renovation in 2026: what's changed." — category-design think-piece · 180 sec long-form.</li>
        <li>"The 7am-3pm doctrine in 90 seconds." — methodology hero · 90 sec.</li>
      </ol>
      <p><strong>Layer 2 · BCM Authority — 18 concepts (mix of carousels · reels · statics):</strong> 6 "Inside the BCM Approval Pack" carousels (1 per page · screenshot + value claim) · 4 BCM-coordinator testimonial reels (real names with permission) · 4 "BCM-resources hub deep-dive" link-cards (1 per cornerstone page) · 2 "single-account billing explainer" statics · 2 "acoustic monitoring SOP" reels.</p>
      <p><strong>Layer 3 · JTBD Activation — 12 concepts (3 per JTBD):</strong> each JTBD gets 1 hero video · 1 carousel · 1 reel · all locked to /refresh /renew /bcm-coordination /pre-sale landings respectively. All carry the WS-02 Promise variant and the 30-Day Refresh seal.</p>
      <p><strong>Layer 4 · Bowtie Cross-LOB — 6 concepts:</strong> 4 Pools-alumni narratives (1 per Pools JTBD origin) · 2 Termite-alumni narratives (investor cohort focus).</p>
      <p>All 48 concepts production-locked in /units/p06/creative-v1 deliverable folder · production cadence 12 new + 12 refresh per quarter to combat CTR decay · creative refresh KPI = no concept exceeds 18 days at &gt; 1.5 frequency without rotation.</p>
    </div>

    {/* 6.4 AUDIENCE STRATEGY */}
    <div className="kw-block">
      <h3>6.4 · Audience Strategy — 18 Custom + Lookalike + Interest Audiences</h3>
      <ul className="voice-list">
        <li><strong>Custom audience 1 · Brisbane Strata Lot-Owners:</strong> built from CRM list of opt-in homeowners + matched LinkedIn job-title "Lot Owner / Investor" + custom intent from "body corporate manager" search-string crawl.</li>
        <li><strong>Custom audience 2 · BCM-Resources Engagers:</strong> visited /bcm-resources/* in past 90 days · time-on-page &gt; 2:30 · excluded from CD-01/02 (already category-formed) · included in BA-01/02 only.</li>
        <li><strong>Custom audience 3 · Pack Downloaders:</strong> high-intent · the gold-standard middle-funnel audience · primary remarketing seed.</li>
        <li><strong>Custom audience 4 · Calculator Completers:</strong> investor-segment specific · highest 30-day conversion rate in the account.</li>
        <li><strong>Custom audience 5 · JTBD-Tagged Landing Visitors:</strong> 4 separate audiences (one per JTBD landing) for surgical JTBD activation remarketing.</li>
        <li><strong>Custom audience 6 · Pools Alumni Bowtie-Consenting:</strong> HubSpot bowtie-flag = TRUE + 90+ days post-Pools-handover · bowtie-only.</li>
        <li><strong>Custom audience 7 · Termite Alumni Bowtie-Consenting:</strong> HubSpot bowtie-flag = TRUE + 60+ days post-Termite-handover · investor-segment filter.</li>
        <li><strong>Lookalike 1 (1%):</strong> Pack Downloaders (12-month window) · used in BA-01.</li>
        <li><strong>Lookalike 2 (1%):</strong> Closed-won Refresh-tier contracts · used in JA-02.</li>
        <li><strong>Lookalike 3 (1%):</strong> Closed-won Pre-Sale-tier contracts · used in JA-03.</li>
        <li><strong>Lookalike 4 (1%):</strong> BCM-coordinated closed-wons · used in JA-01.</li>
        <li><strong>Lookalike 5 (2%):</strong> 30-second video viewers of CD-03 (BCM testimonials) · used in BA-02 + BA-03.</li>
        <li><strong>Interest audience 1:</strong> "Body Corporate" + "Strata Title" + "Apartment Investing" + "Real Estate Investment Trust" · narrowed to Brisbane DMA · used in CD-01/02/03.</li>
        <li><strong>Interest audience 2:</strong> "Home Renovation" + "Interior Design" + age 32-58 + Brisbane apartment-density geo-poly · used in BA-02/03.</li>
        <li><strong>Interest audience 3:</strong> "Real Estate Listing" + "Selling a Home" + life-event "Recently Listed" · used in JA-03 + BT-02.</li>
        <li><strong>Audience exclusion 1:</strong> All Units F2 conversions (Pack downloaders + Calculator completers) excluded from all CD-* campaigns — never show category-design content to already-category-formed buyers.</li>
        <li><strong>Audience exclusion 2:</strong> All Pools or Termite active-project households (deal stage 4-9 in HubSpot) excluded from all Units campaigns — Sarah &amp; Mark's persona-care doctrine.</li>
        <li><strong>Audience exclusion 3:</strong> Townhouse-density polygons excluded from all campaigns — strata-only LOB.</li>
      </ul>
    </div>

    {/* 6.5 MEASUREMENT & ATTRIBUTION */}
    <div className="kw-block">
      <h3>6.5 · Measurement Stack and Attribution Model</h3>
      <p><strong>Meta Pixel + Conversion API dual-tracking · all events fire both client-side and server-side via Cloudflare Worker proxy (WS-11 §1.4 sGTM-equivalent for iOS resilience):</strong></p>
      <ol>
        <li><strong>F2 primary (value $58 = avg margin × 0.18 attribution credit):</strong> Pack download + Consult booked (composite event).</li>
        <li><strong>F2 secondary (value $24):</strong> Pack download only.</li>
        <li><strong>F2 micro (value $18):</strong> Pre-Sale Calculator completion.</li>
        <li><strong>F3 leading (value $2,800 = avg margin × 0.45 attribution credit · uploaded offline from HubSpot M4+):</strong> Contract signed within 90 days of last Meta-touch.</li>
        <li><strong>F3 confirmed (value $5,600 · uploaded offline from HubSpot M6+):</strong> Project delivered + Pureprofile NPS &gt; 75.</li>
        <li><strong>Bowtie F3 (value $8,400 · uploaded offline from HubSpot M9+):</strong> Cross-LOB expansion event (Pools/Termite contract signed within 36 months of Units project) · 50% LTV credit-back to the original Meta touchpoint that drove the Units F1.</li>
        <li><strong>Match quality target:</strong> ≥ 7.8/10 (Meta-native quality score) · hashed email + phone + first/last name + zip passed back via CAPI for every F2/F3.</li>
      </ol>
      <p><strong>Attribution windows:</strong> 7-day click + 1-day view (Meta default) for Pixel-side · 28-day click + 7-day view (server-side via Robyn MMM weekly batch). The Robyn MMM model (WS-09 §7.3 · Units-tuned 26-week adstock with 0.18 decay for high-consideration purchase) is the source-of-truth for paid-Meta ROI · Meta Ads Manager numbers are operational only. [WBD-BOW] The 50% LTV credit-back from cross-LOB expansion lifts Meta's apparent ROAS by 1.4× at M24 — without this credit-back, Meta would be misallocated as a "soft" channel and starved of budget; with it, Meta is the highest-strategic-leverage channel in the LOB.</p>
    </div>

    {/* 6.6 KPI SCORECARD */}
    <div className="kw-block">
      <h3>6.6 · KPI Scorecard — Meta M1 → M24 · Units LOB</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Total monthly spend</td><td>$11k</td><td>$20k</td><td>$26k</td><td>$35.4k</td><td>$48k</td></tr>
          <tr><td>Reach (unique users · Brisbane apartment-owner cohort)</td><td>180k</td><td>280k</td><td>340k</td><td>420k</td><td>520k</td></tr>
          <tr><td>Frequency (weekly average · capped 1.8)</td><td>1.2</td><td>1.5</td><td>1.6</td><td>1.7</td><td>1.7</td></tr>
          <tr><td>Branded search lift (Google Trends Brisbane proxy)</td><td>—</td><td>+12%</td><td>+34%</td><td>+78%</td><td>+220%</td></tr>
          <tr><td>BCM Approval Pack downloads (Meta-attributed)</td><td>62</td><td>184</td><td>340</td><td>610</td><td>980</td></tr>
          <tr><td>Pre-Reno Consults held (Meta-attributed)</td><td>11</td><td>42</td><td>104</td><td>220</td><td>415</td></tr>
          <tr><td>Cost per Pack-download (blended)</td><td>$177</td><td>$109</td><td>$76</td><td>$58</td><td>$49</td></tr>
          <tr><td>Cost per Consult-held (blended)</td><td>$1,000</td><td>$476</td><td>$250</td><td>$161</td><td>$116</td></tr>
          <tr><td>Implied Meta-attributed contracts/month</td><td>3</td><td>16</td><td>49</td><td>118</td><td>238</td></tr>
          <tr><td>Implied Meta-attributed revenue/month</td><td>$156k</td><td>$896k</td><td>$2.84M</td><td>$7.32M</td><td>$15.71M</td></tr>
          <tr><td>Meta GPM (28% blended GP)</td><td>$44k</td><td>$251k</td><td>$795k</td><td>$2.05M</td><td>$4.40M</td></tr>
          <tr><td>Meta ROAS (GP basis · pre-bowtie)</td><td>4.0×</td><td>12.6×</td><td>30.6×</td><td>57.9×</td><td>91.7×</td></tr>
          <tr><td>Meta ROAS (GP basis · post-bowtie 50% LTV credit-back)</td><td>4.8×</td><td>15.1×</td><td>36.7×</td><td>69.5×</td><td>110.0×</td></tr>
          <tr><td>Category-design KPI · branded search lift (Brisbane "BCM renovation" SOV)</td><td>—</td><td>4.2%</td><td>11.8%</td><td>28%</td><td>52%</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Meta is the highest-compounding paid channel in the YBMT Group · branded search lift of +220% by M24 means Meta is doing category-design work that re-shapes Google Ads economics: every Meta dollar spent at M0 creates a Google Ads CPC reduction at M18-M24 by lifting Quality Scores via branded-search proxy signals. The post-bowtie ROAS of 110× at M24 is the financial signature of category-design economics — Sarah &amp; Mark recognise the YBMT Units brand 2 years before they ever search, and when they do search, the conversion rate is 3.4× a cold-search lead's rate. This is the WS-01 Category doctrine and WS-05 Economics doctrine working in alignment.</p>
    </div>

    {/* 6.7 GOVERNANCE & ANTI-PATTERNS */}
    <div className="kw-block">
      <h3>6.7 · Governance, Forbidden States, Quality Gates</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Aesthetic-only renovation creative.</strong> Every Meta creative must visibly cue strata context (door-frame protection / lift padding / BCM coordinator / building manager signage) in at least 1 of the first 3 above-fold seconds. Aesthetic-only creative is for P-09 organic, never paid.</li>
        <li><strong>Forbidden state #2 · CD-* campaigns running with a Pack-download CTA.</strong> Category Design is a "learn how" funnel rung. The Pack-download CTA appears only in BA-* and JA-* campaigns. CI-equivalent linter at YDT auto-flags mis-tagged creatives.</li>
        <li><strong>Forbidden state #3 · Bowtie campaign without explicit consent flag.</strong> A Pools or Termite customer is excluded from BT-01/02 unless HubSpot bowtie-consent = TRUE. Audit reviewed weekly · any leak rolls back to immediate audience-rebuild + apology email to leaked customer.</li>
        <li><strong>Forbidden state #4 · Frequency &gt; 1.8 weekly.</strong> Sarah &amp; Mark's WS-04 persona-care doctrine: a 5-touch-week is intrusion, not awareness. Frequency cap at 1.8 enforced at audience level. Auto-pause if any audience exceeds 2.0 for &gt; 7 days.</li>
        <li><strong>Forbidden state #5 · Pools or Termite active-project households retargeted.</strong> Audience exclusion 2 (deal stage 4-9 in HubSpot) blocks Units retargeting until handover complete + 60-day cool-down. Persona-care over short-term efficiency.</li>
        <li><strong>Forbidden state #6 · Townhouse-density polygons.</strong> Springfield, Ipswich greenfield, Logan greenfield, Pine Rivers excluded at account level. Strata-only LOB.</li>
        <li><strong>Forbidden state #7 · Generic "renovation" interest audiences without Brisbane geo + strata narrowing.</strong> All interest-based audiences must AND with apartment-density geo-poly + min 1 strata-related interest. Pure interest-only targeting is forbidden — wastes 38% of spend on non-strata in test data.</li>
        <li><strong>Forbidden state #8 · Lookalike audiences not refreshed quarterly.</strong> Lookalikes decay; quarterly rebuild from current 12-month CRM seed is the discipline.</li>
        <li><strong>Weekly cadence:</strong> Mon creative-fatigue audit (CTR decay &gt;12% week-over-week = rotate) · Wed audience-overlap report + frequency-cap check · Fri budget reallocation by layer-level ROAS + bowtie attribution audit.</li>
        <li><strong>Monthly cadence:</strong> Full creative refresh batch (12 new + 12 refresh per quarter cadence operationalised monthly) · audience rebuild · CAPI match-quality review · creative-layer-ratio review (25/30/30/15 maintained or adjusted within 5pp).</li>
        <li><strong>Quarterly cadence:</strong> Robyn MMM Units-tuned re-run · lookalike full rebuild · Pureprofile SEQ panel question audit (Sarah &amp; Mark BCM-pain recall measured against Meta-creative-recall · creative tuned to recall data).</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-06 · 12 campaigns across 4 layers · Category Design · BCM Authority · JTBD Activation · Bowtie Cross-LOB</span>
      <span className="pf-pill">$35.4k/mo M12 spend · Cost-per-Pack $58 · 610 Packs/mo · 118 contracts/mo Meta-attributed</span>
      <span className="pf-pill">CAPI + sGTM proxy · 7.8/10 match quality · Robyn MMM source-of-truth · 50% LTV credit-back</span>
      <span className="pf-pill">M24 post-bowtie ROAS 110× · branded search lift +220% — the category-design engine of the Group</span>
    </div>
  </section>
)

// ============================================================================
// UNITS P-08 · SALES ENABLEMENT KIT · BCM-coordinated sales process + MEDDPICC ≥12/21 gate
// ============================================================================
const UGPillar08SalesEnablement = () => (
  <section id="p08" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-08 · UNITS · SALES ENABLEMENT KIT</span>
      <h2 className="pillar-block-title">P-08 · Sales Enablement Engine · BCM-Coordinated 12-Stage HubSpot Pipeline · MEDDPICC ≥12/21 Gate · Pre-Reno Consult Playbook · Bowtie Handover Discipline</h2>
      <p className="pillar-block-sub">Units sales is a two-buyer process: the lot-owner is the economic buyer (signs the cheque) but the BCM coordinator is the gatekeeper (vetoes the trade or accelerates the approval). The MEDDPICC scorecard (WS-11 §2.3) must score ≥12/21 across <strong>both</strong> buyer profiles before a quote is issued — no exceptions. This is the single most non-negotiable rule in the LOB because issuing a quote to an unqualified BCM-buyer-set burns the partnership channel (P-10) for that BCM firm for 24 months. The sales process is built around a single F2 offer: the 60-minute <strong>Pre-Reno Consult</strong> (held on-site in the unit + 15 minutes in the building manager's office) — never a free quote · never a phone call alone · never a remote video meeting for first contact. Every stage of the 12-stage HubSpot pipeline maps to a MEDDPICC component, a Sarah &amp; Mark WS-04 persona-care check, a Promise-tested moment ("Built like it's our own home" experienced not just stated), and a bowtie disclosure point (where cross-LOB Pools/Termite history is surfaced if applicable). The pipeline does not optimise for close-rate · it optimises for <em>fit-rate</em> — a 38% lower close-rate than industry average is deliberate because every Units deal we win must be a customer we can also serve in Pools or Termite at month 24-36 (WS-05 economics). Bad-fit Units customers cost the Group 4.2× the deal margin in BCM-relationship damage and cross-LOB cannibalisation.</p>
    </div>

    {/* 8.1 SALES DOCTRINE */}
    <div className="kw-block">
      <h3>8.1 · Units Sales Doctrine — Eight Locked Rules</h3>
      <ol>
        <li><strong>Two-buyer qualification · MEDDPICC scored against both.</strong> The lot-owner MEDDPICC scorecard runs in parallel to the BCM MEDDPICC scorecard. Both must reach ≥12/21 before quote issuance. A 19/21 lot-owner with an 8/21 BCM is a no-quote — the BCM is the blocker and quoting without their alignment burns the channel.</li>
        <li><strong>Pre-Reno Consult is the only first-contact F2.</strong> 60 minutes on-site (45 in the unit · 15 in the BCM office where possible) · Sales rep arrives with the BCM Approval Pack pre-filled for that specific building · no slide deck · no laptop · structured-conversation script doc'd at /units/p08/consult-script-v1. The Pack-pre-fill is the trust signal that compounds in WS-04 persona recognition. Sarah &amp; Mark feel seen because we did our homework on their building before we walked through the door.</li>
        <li><strong>"Built like it's our own home" is experienced, not stated.</strong> The phrase appears once in the Consult — at minute 38, after the rep has demonstrated 6 specific moments where they treated the unit as their own home (shoes off · drop-cloth deployed before any tool touched a surface · neighbour's mat straightened on the way in · BCM coordinator addressed by name · acoustic-decibel meter taken out and shown · timeline drawn by hand on a notepad, not a printed brochure). The Promise is felt before it's spoken — WS-02 doctrine made operational.</li>
        <li><strong>Sarah &amp; Mark persona-check at every stage gate.</strong> Each of the 12 pipeline stages has a Sarah &amp; Mark check question (e.g., Stage 4: "Has the BCM coordinator's first name been used by the rep in the last interaction?") — if the answer is no, the stage cannot advance. This is the WS-04 anchor made into a pipeline control rather than a poster on the wall.</li>
        <li><strong>Bowtie disclosure at Stage 6.</strong> At Stage 6 (Solution Designed), the rep discloses if the prospect has a Pools or Termite project in the Group's history (or not). The 50% LTV credit-back (WS-05) is then transparently calculated and presented on the proposal at Stage 8 — Sarah &amp; Mark see that being a returning customer earns them measurable economics, not vague loyalty. This converts cross-LOB churn into cross-LOB compounding.</li>
        <li><strong>No quote at first Consult.</strong> The Consult delivers a Scope Confirmation Document (not a quote) at the end · the quote follows 5-7 business days later after BCM by-law cross-check + acoustic-monitoring SOP fit-test + insurance verification + tier-recommendation modelling. This 5-7-day discipline is the trust-compounding feature, not a delay — it visibly distinguishes YBMT Units from the contractor-who-quotes-on-the-spot whose subsequent revisions burn BCM goodwill.</li>
        <li><strong>F3 = signed contract · F3+ = first 5 days delivered without incident.</strong> WS-11 KPI doctrine: contract signature alone is not F3 — F3 includes the first 5 days of execution where any BCM complaint or trade dispute would have surfaced. Sales rep compensation is structured 60% at F3 (signature) + 40% at F3+ (5-day-clean execution) · this aligns sales with delivery and prevents the "close-and-flick" anti-pattern that destroys partnerships.</li>
        <li><strong>BCM single-account billing — fee for BCM service disclosed at Stage 5.</strong> The BCM single-account billing service (P-01 §1.6) costs the lot-owner $1,200-$2,800 fee depending on tier · this is disclosed at Stage 5 (Pricing Discussion) not buried in the contract · transparent fee structure is the BCM-coordination authority signal Sarah &amp; Mark trust.</li>
      </ol>
    </div>

    {/* 8.2 12-STAGE PIPELINE */}
    <div className="kw-block">
      <h3>8.2 · 12-Stage HubSpot Pipeline · Stage Definitions, Required MEDDPICC Score, Exit Criteria</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Stage</th><th>Name</th><th>Required MEDDPICC (lot-owner)</th><th>Required MEDDPICC (BCM)</th><th>Sarah &amp; Mark check</th><th>Avg duration</th><th>Conv to next</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Lead Captured</td><td>—</td><td>—</td><td>Source-channel WS-04-tagged · JTBD-coded</td><td>Same day</td><td>62%</td></tr>
          <tr><td>2</td><td>Pack Downloaded</td><td>1/21</td><td>0/21</td><td>Pack personalisation tier matched to building?</td><td>2 days</td><td>54%</td></tr>
          <tr><td>3</td><td>Consult Booked</td><td>3/21</td><td>1/21</td><td>BCM coordinator notified + invited?</td><td>3 days</td><td>78%</td></tr>
          <tr><td>4</td><td>Consult Held</td><td>7/21</td><td>5/21</td><td>BCM coordinator first-name used in last interaction?</td><td>5 days</td><td>74%</td></tr>
          <tr><td>5</td><td>Pricing Discussion</td><td>9/21</td><td>7/21</td><td>Single-account-billing fee disclosed in writing?</td><td>4 days</td><td>68%</td></tr>
          <tr><td>6</td><td>Solution Designed (Scope Confirmed)</td><td>12/21 ✓ gate</td><td>9/21</td><td>Bowtie disclosure made? Pools/Termite history shared?</td><td>5 days</td><td>72%</td></tr>
          <tr><td>7</td><td>BCM By-Law Cross-Check</td><td>12/21</td><td>12/21 ✓ gate</td><td>BCM coordinator signed off on by-law fit?</td><td>4 days</td><td>92%</td></tr>
          <tr><td>8</td><td>Proposal Issued</td><td>14/21</td><td>13/21</td><td>50% LTV credit-back visible on proposal if applicable?</td><td>2 days</td><td>64%</td></tr>
          <tr><td>9</td><td>Proposal Reviewed (&lt;1 of 3 revisions allowed)</td><td>15/21</td><td>14/21</td><td>BCM coordinator copied on revisions?</td><td>7 days</td><td>78%</td></tr>
          <tr><td>10</td><td>Contract Signed (F3)</td><td>17/21</td><td>15/21</td><td>Welcome-call within 24h booked?</td><td>3 days</td><td>96%</td></tr>
          <tr><td>11</td><td>Site Setup Day 0-1</td><td>17/21</td><td>16/21</td><td>BCM coordinator on-site for setup walk-through?</td><td>2 days</td><td>100%</td></tr>
          <tr><td>12</td><td>Day 5 Clean-Execution Confirmed (F3+)</td><td>—</td><td>—</td><td>Zero BCM complaints? Acoustic-monitoring log clean?</td><td>5 days</td><td>—</td></tr>
        </tbody>
      </table>
      <p><strong>Stage 6 and Stage 7 are the dual MEDDPICC gates.</strong> Stage 6 = lot-owner ≥12/21 minimum · Stage 7 = BCM ≥12/21 minimum. A deal that reaches Stage 6 with lot-owner 14/21 but BCM 8/21 is held at Stage 7 until the BCM gap closes — never advanced. <strong>Total median pipeline duration M0-F3:</strong> 42 days (Stages 1-10) · 49 days inc. F3+ confirmation. <strong>Blended close-rate M0→F3:</strong> 8.4% of lead-captured (intentionally lower than Pools 11.2% or Termite 14.8% because fit-rate over close-rate is the discipline).</p>
    </div>

    {/* 8.3 MEDDPICC SCORECARDS */}
    <div className="kw-block">
      <h3>8.3 · MEDDPICC Scorecard — Lot-Owner and BCM (Both Required ≥12/21)</h3>
      <p><strong>Lot-Owner MEDDPICC (21 points across 7 components · 3 points each):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Component</th><th>3 (verified)</th><th>2 (stated)</th><th>1 (implied)</th><th>0 (unknown)</th></tr></thead>
        <tbody>
          <tr><td>Metrics</td><td>ROI target named in $ (e.g., $42k pre-sale uplift) · validated by Calculator</td><td>"Increase value" stated without $</td><td>"Make it nicer" mentioned</td><td>No outcome named</td></tr>
          <tr><td>Economic Buyer</td><td>Cheque-signer in the Consult · ID verified</td><td>Cheque-signer named · not yet met</td><td>"My partner decides"</td><td>Unknown</td></tr>
          <tr><td>Decision Criteria</td><td>3 criteria named in writing · BCM-compliance #1</td><td>2 criteria named verbally</td><td>"Price + quality"</td><td>None</td></tr>
          <tr><td>Decision Process</td><td>BCM meeting calendar-confirmed · sign-off doc'd</td><td>BCM aware but not scheduled</td><td>"I'll tell them later"</td><td>Process unknown</td></tr>
          <tr><td>Identify Pain</td><td>Specific pain named with date (e.g., "lift broken from 2019 reno · sold for $48k below comp in 2022")</td><td>Pain named vaguely</td><td>"Old kitchen"</td><td>No pain stated</td></tr>
          <tr><td>Champion</td><td>BCM coordinator or partner is named champion · introduced</td><td>Champion named · not yet engaged</td><td>"Someone in the building likes you"</td><td>No champion</td></tr>
          <tr><td>Competition</td><td>2-3 named alt-contractors with quotes · we've seen them</td><td>1 named competitor · no quote seen</td><td>"Other quotes"</td><td>Unknown</td></tr>
        </tbody>
      </table>
      <p><strong>BCM MEDDPICC (21 points across 7 components · 3 points each):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Component</th><th>3 (verified)</th><th>2 (stated)</th><th>1 (implied)</th><th>0 (unknown)</th></tr></thead>
        <tbody>
          <tr><td>Metrics (BCM-facing)</td><td>BCM names 2+ KPIs we'll help with (complaint reduction, levy stability)</td><td>1 BCM KPI named</td><td>"Make my life easier"</td><td>None</td></tr>
          <tr><td>Economic Buyer</td><td>BCM committee approval pathway named · meeting scheduled</td><td>Pathway named · not scheduled</td><td>"We'll work it out"</td><td>Unknown</td></tr>
          <tr><td>Decision Criteria</td><td>BCM by-law clauses we must satisfy named with §-numbers</td><td>By-laws mentioned generally</td><td>"By-laws"</td><td>None</td></tr>
          <tr><td>Decision Process</td><td>BCM approval doc'd timeline within 7 days · committee chair informed</td><td>Approval doc'd · no timeline</td><td>"BCM will sign off"</td><td>Process unknown</td></tr>
          <tr><td>Identify Pain (BCM's pain)</td><td>BCM names a previous bad-contractor experience that defines their criteria</td><td>BCM expresses generic concern</td><td>"Trades are hard"</td><td>No BCM pain</td></tr>
          <tr><td>Champion (in BCM committee)</td><td>BCM committee chair or treasurer named · pre-aligned</td><td>Committee member identified</td><td>"Someone on the committee"</td><td>None</td></tr>
          <tr><td>Competition (other contractors)</td><td>BCM has previously approved/rejected named competitors · we know which</td><td>Other contractors mentioned vaguely</td><td>"Other quotes"</td><td>Unknown</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">A 12/21 score is not "barely qualified" — it's the floor of "this deal is real." The discipline is to stop selling at 11/21 and start qualifying — a 23-minute structured BCM call typically lifts a BCM score from 8 to 14 if the relationship is real. If 30 minutes of qualifying effort cannot move the score above 12, the deal is not real and should be passed back to nurture (P-09 + email · WS-10).</p>
    </div>

    {/* 8.4 PRE-RENO CONSULT PLAYBOOK */}
    <div className="kw-block">
      <h3>8.4 · Pre-Reno Consult Playbook — The 60-Minute Trust-Compounding Conversation</h3>
      <p><strong>Pre-Consult preparation (24 hours before · doc'd at /units/p08/preconsult-checklist):</strong></p>
      <ol>
        <li>Building dossier pulled: BCM firm name + coordinator first name + committee chair name + 3 most recent BCM-approved renovations in the building (public record).</li>
        <li>By-law document accessed via SCA QLD or BCM firm portal · cross-reference of the 8 most-cited clauses for the renovation type proposed.</li>
        <li>BCM Approval Pack pre-filled for that specific building (by-law clauses inserted · working-hours schedule auto-built · common-property protection plan diagrammed).</li>
        <li>Past Sarah &amp; Mark behaviour pattern reviewed in HubSpot if returning customer (Pools/Termite history surfaced · bowtie credit pre-calculated).</li>
        <li>Acoustic-monitoring decibel meter + drop-cloth + lift-padding sample + lot-owner Welcome Card (handwritten name · ready to deliver).</li>
      </ol>
      <p><strong>Consult execution (60 minutes · doc'd at /units/p08/consult-script-v1):</strong></p>
      <ol>
        <li><strong>Minute 0-5 · Arrival ritual.</strong> Trade vehicle parked discreetly (P-11 doctrine preview) · shoes off at door · acoustic meter visible · BCM coordinator addressed by first name on entry · partner offered tea/coffee from supplies they have, not brought-in.</li>
        <li><strong>Minute 5-15 · Tour the unit + 4 listening questions.</strong> Listen 80% · ask 4 questions: "Walk me through the morning routine here." · "Where do you sit when you're tired?" · "What broke in the last reno you can think of?" · "What does the BCM coordinator wish trades would do?" These 4 questions surface 80% of MEDDPICC data.</li>
        <li><strong>Minute 15-30 · Tour the building (with BCM coordinator if available).</strong> Identify common-property pinch-points · agree the trade-entry pathway · meet 1-2 neighbours if possible · acoustically test 1 wall.</li>
        <li><strong>Minute 30-38 · BCM Approval Pack walkthrough.</strong> Pack opened on kitchen bench · 6 sections walked through with the lot-owner · BCM-clauses-cross-checked named · 7-day approval pathway visualised.</li>
        <li><strong>Minute 38-45 · The Promise is spoken (once, after demonstration).</strong> Single sentence: "We build this like it's our own home — and you'll see exactly what that means before the contract." Promise spoken once. Not repeated. Sarah &amp; Mark register the discipline.</li>
        <li><strong>Minute 45-55 · Tier match + budget conversation.</strong> 3 tiers laid out (Refresh / Renew / Reset) · tier recommended based on Listening data · range given · single-account-billing fee disclosed in writing.</li>
        <li><strong>Minute 55-60 · Scope Confirmation Document signed.</strong> Not a quote · a scope agreement · "we agree this is the work · the quote follows in 5-7 days after BCM cross-check." Welcome Card delivered. Photo of BCM coordinator + couple (with permission) for the project file.</li>
      </ol>
      <p><strong>Post-Consult discipline (within 24h):</strong> handwritten thank-you note posted · HubSpot record updated with both MEDDPICC scores · Scope Confirmation Doc sent · BCM cross-check workflow auto-initiated · WS-04 persona-care follow-up auto-scheduled.</p>
    </div>

    {/* 8.5 PROPOSAL PACK */}
    <div className="kw-block">
      <h3>8.5 · Proposal Pack — The 12-Page Document That Quotes</h3>
      <p>The proposal is not a one-page price list · it is a 12-page Pack that visibly reflects every MEDDPICC point gathered. Structure (each page locked in YDT proposal template /units/p08/proposal-template-v1):</p>
      <ol>
        <li><strong>Cover · Sarah &amp; Mark recognition page.</strong> Couple first names + building name + BCM firm name + project label (e.g., "The Hamilton Refresh"). No stock photography · only photo from the Consult (with permission). Sarah &amp; Mark see themselves on page 1, not the contractor's brand.</li>
        <li><strong>The Promise page.</strong> "Built like it's our own home" + the 6 demonstrated moments from the Consult listed by name. Promise made specific, not generic.</li>
        <li><strong>BCM compliance map.</strong> 8 most-relevant by-law clauses with our specific compliance approach per clause. BCM coordinator sees the by-law numbers they live with referenced by §-number.</li>
        <li><strong>Scope of work · plain English.</strong> Detailed but jargon-free · written for a non-trade reader · 1 photo per scope item from past comparable build (with permission).</li>
        <li><strong>Project timeline · day-by-day for first 14 days · weekly for the rest.</strong> BCM coordinator + working-hours schedule + acoustic-monitoring checkpoints visible on the timeline.</li>
        <li><strong>3-tier comparison · Refresh / Renew / Reset.</strong> Why we recommend the tier · what the other tiers would deliver · price ranges per tier · clear "this tier was chosen because..." reasoning. Sarah &amp; Mark understand the choice, they don't feel sold a tier.</li>
        <li><strong>Single-account billing breakdown.</strong> BCM admin fee disclosed + what's included + 12-month invoice schedule template · transparency over surprise.</li>
        <li><strong>Bowtie credit page (if applicable).</strong> "You completed a Pools project with us in 2024 · here is your 50% LTV credit-back of $X · here is how it's applied to this contract." Returning-customer economics made visible.</li>
        <li><strong>Insurance + warranty + licence page.</strong> $5M public liability cert · BSA licence number · Master Builders QLD membership · 25-year structural / 7-year finish warranty terms · post-handover support process.</li>
        <li><strong>What we ask of you · in writing.</strong> The 5 things Sarah &amp; Mark commit to (e.g., emergency-contact response within 4h on weekdays · BCM coordinator copied on any change request) · symmetry of commitment is a trust signal.</li>
        <li><strong>Testimonials · 3 specific to building type + BCM firm.</strong> Not generic 5-star quotes · 3 mini case-studies from comparable buildings with comparable BCM firms · with BCM coordinator names (with permission).</li>
        <li><strong>Acceptance page · signatures + counter-signature line for BCM coordinator (optional but offered).</strong> The BCM coordinator can co-sign as a witness if they choose · this small gesture lifts BCM partnership compounding 38%.</li>
      </ol>
      <p className="kw-sub">Proposal Pack delivered 5-7 days after the Consult · printed and posted (not just emailed) · email follow-up sends a digital copy 48h after physical Pack arrives. Tactile delivery distinguishes YBMT from email-only competitors.</p>
    </div>

    {/* 8.6 BOWTIE HANDOVER */}
    <div className="kw-block">
      <h3>8.6 · Bowtie Handover Discipline — What Sales Does at F3+ for the Cross-LOB Engine</h3>
      <p>Closing the Units contract is not the end of sales activity · F3 (signature) is followed by F3+ (Day-5 clean execution) and then the <strong>Bowtie Handover Ritual</strong> at Day 30 that seeds 38% cross-LOB expansion within 36 months. The ritual:</p>
      <ol>
        <li><strong>Day 5 · Clean Execution survey.</strong> 4-question SMS to Sarah &amp; Mark + 3-question SMS to BCM coordinator · responses logged in HubSpot. Sales rep commission unlocks 40% balance only if both NPS &gt; 70.</li>
        <li><strong>Day 14 · Project Photo Album delivered.</strong> Physical printed album (16 photos · before/during/after) · gift-wrapped · hand-delivered by sales rep, not posted. Cost $180 per album · ROI 7.2× via referral lift.</li>
        <li><strong>Day 28 · Handover Day Ritual.</strong> Final walk-through with Sarah &amp; Mark + BCM coordinator + project manager + sales rep. 4 specific moments orchestrated: (a) hand keys back · (b) deliver the 25-year structural warranty document in a leather folder · (c) the Promise re-stated for the second and final time · (d) BCM coordinator presented with a $200 voucher to the BCM-firm preferred cafe (if appropriate · partnership-aligned).</li>
        <li><strong>Day 30 · Bowtie Consent Conversation.</strong> Structured 12-minute conversation with Sarah &amp; Mark: "Now that you've experienced this · would you like to know what else we do?" · Pools + Termite LOBs introduced as <em>options, not pitches</em> · bowtie-consent flag set in HubSpot based on the conversation outcome. <strong>Critical:</strong> if Sarah &amp; Mark say no, the flag stays false and zero marketing outreach for those LOBs occurs · WS-04 persona-care doctrine. ~62% set flag to TRUE post-Units · the 38% who don't are equally valued · their referrals (P-10) typically arrive within 18 months anyway.</li>
        <li><strong>Day 60 · Cross-LOB nurture begins (only if consent = TRUE).</strong> Email cadence (WS-10) introduces Pools or Termite via Sarah &amp; Mark's specific 2nd-property situation · no generic blast · individually-curated.</li>
        <li><strong>Day 90 · BCM coordinator review meeting.</strong> Sales rep + BCM coordinator coffee · 30 minutes · "what worked · what didn't · would you refer us?" · this is the P-10 partnerships engine in motion · each conversation generates an average 1.8 BCM-coordinator-introductions to other buildings in the firm's portfolio.</li>
      </ol>
    </div>

    {/* 8.7 SALES OPS & CADENCE */}
    <div className="kw-block">
      <h3>8.7 · Sales Operations · Team Structure · Compensation · Cadence</h3>
      <p><strong>Team structure (Units sales) · M0-M12:</strong></p>
      <ul className="voice-list">
        <li><strong>1 × Sales Lead (Carla-reported during transition):</strong> books all Pre-Reno Consults personally for M0-M3 · holds MEDDPICC accountability · runs Friday pipeline review.</li>
        <li><strong>2 × Sales Reps (BCM-fluent · trained in strata environment):</strong> each carries 18-22 deals in active pipeline · 12-stage HubSpot pipeline managed nightly.</li>
        <li><strong>1 × Sales Operations Coordinator (shared with Pools/Termite · 0.4 FTE for Units):</strong> handles Pack pre-fills + Proposal Pack production + bowtie credit calculations + HubSpot hygiene.</li>
        <li><strong>1 × BCM Liaison (shared with P-10 · 0.6 FTE for Units sales):</strong> attends BCM coordinator meetings + cross-checks by-laws + maintains the 34 BCM firm relationship register.</li>
      </ul>
      <p><strong>Compensation structure (Sales Reps):</strong> base $95k + commission. Commission structure: 60% paid at F3 (contract signed) + 40% paid at F3+ (Day-5 clean execution + both NPS &gt; 70). Bowtie expansion bonus: +25% commission uplift on the Pools/Termite F3 if that contract is signed within 24 months of the Units F3 + traceable to the original Units rep's bowtie-consent conversation. This aligns sales with the WS-05 economics doctrine — the rep is incentivised on lifetime value, not first-contract value.</p>
      <p><strong>Sales rep KPI scorecard (monthly):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>KPI</th><th>Target M3</th><th>Target M12</th><th>Floor (action if below)</th></tr></thead>
        <tbody>
          <tr><td>Consults held / month</td><td>8</td><td>14</td><td>&lt; 5: PIP triggered</td></tr>
          <tr><td>MEDDPICC ≥12/21 dual-pass rate</td><td>62%</td><td>78%</td><td>&lt; 50%: training intervention</td></tr>
          <tr><td>Proposal → Contract close rate</td><td>40%</td><td>54%</td><td>&lt; 30%: full deal review</td></tr>
          <tr><td>Day-5 clean execution rate</td><td>88%</td><td>96%</td><td>&lt; 75%: delivery-team alignment</td></tr>
          <tr><td>Bowtie-consent conversion rate (Day 30)</td><td>58%</td><td>68%</td><td>&lt; 45%: persona-care training</td></tr>
          <tr><td>BCM coordinator NPS (post-project)</td><td>72</td><td>82</td><td>&lt; 60: partnership-channel risk</td></tr>
          <tr><td>Sarah &amp; Mark check-question compliance</td><td>92%</td><td>98%</td><td>&lt; 85%: stage-gate audit</td></tr>
        </tbody>
      </table>
      <p><strong>Cadence:</strong> Daily pipeline-hygiene check 8:30am (15 min · MEDDPICC scores updated before stand-up) · Weekly pipeline review Friday 2:00pm (90 min · all deals at Stage 5+ reviewed) · Monthly bowtie attribution + cross-LOB performance review last Tuesday (60 min · Carla + Sales Lead + Channels Lead) · Quarterly Pureprofile SEQ-panel-recall-review (sales-process language tested against persona-recall data · scripts refined).</p>
    </div>

    {/* 8.8 KPI SCORECARD */}
    <div className="kw-block">
      <h3>8.8 · KPI Scorecard — Sales Enablement M1 → M24 · Units LOB</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Pre-Reno Consults held / month</td><td>14</td><td>32</td><td>62</td><td>118</td><td>205</td></tr>
          <tr><td>Dual MEDDPICC ≥12/21 pass rate</td><td>42%</td><td>62%</td><td>72%</td><td>78%</td><td>82%</td></tr>
          <tr><td>Proposals issued / month</td><td>6</td><td>20</td><td>45</td><td>92</td><td>168</td></tr>
          <tr><td>Contracts signed (F3) / month</td><td>2</td><td>8</td><td>22</td><td>50</td><td>92</td></tr>
          <tr><td>Day-5 clean execution rate (F3+)</td><td>72%</td><td>86%</td><td>92%</td><td>96%</td><td>98%</td></tr>
          <tr><td>Avg contract value (tier-blended)</td><td>$52k</td><td>$56k</td><td>$58k</td><td>$62k</td><td>$66k</td></tr>
          <tr><td>Total contracted revenue / month</td><td>$104k</td><td>$448k</td><td>$1.28M</td><td>$3.10M</td><td>$6.07M</td></tr>
          <tr><td>Bowtie-consent rate (Day 30)</td><td>—</td><td>54%</td><td>62%</td><td>68%</td><td>72%</td></tr>
          <tr><td>Bowtie-attributed Pools/Termite contracts (lagging 12-month)</td><td>—</td><td>—</td><td>2</td><td>14</td><td>42</td></tr>
          <tr><td>BCM-coordinator NPS (post-project)</td><td>62</td><td>74</td><td>80</td><td>84</td><td>88</td></tr>
          <tr><td>Sales cost / contract (loaded)</td><td>$8,400</td><td>$5,200</td><td>$3,800</td><td>$2,400</td><td>$1,800</td></tr>
          <tr><td>Sales-loaded margin contribution</td><td>$4.2k/contract</td><td>$10.4k</td><td>$13.6k</td><td>$15.2k</td><td>$16.7k</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">Bowtie compounding becomes the structural advantage from M12 onward · 14 cross-LOB contracts at M12 represents ~$840k incremental Pools/Termite revenue that would not exist without the Units bowtie engine · scaling to 42 cross-LOB contracts ($2.52M incremental) by M24. By M36 (off-page), the bowtie engine is projected to contribute 28% of all Pools and Termite new revenue · the WS-05 30× LTV doctrine made visible in cash terms.</p>
    </div>

    {/* 8.9 GOVERNANCE & FORBIDDEN STATES */}
    <div className="kw-block">
      <h3>8.9 · Governance, Forbidden States, Anti-Patterns</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Quote issued before Stage 7 BCM gate.</strong> Sales rep cannot issue a quote until BCM MEDDPICC ≥12/21. HubSpot workflow blocks proposal generation if the gate is unmet. Auto-flag to Sales Lead.</li>
        <li><strong>Forbidden state #2 · Single-buyer sales process.</strong> A Units deal with no BCM contact named in HubSpot is a "ghost deal" — auto-paused at Stage 3 until BCM is identified · zero-tolerance rule.</li>
        <li><strong>Forbidden state #3 · Promise spoken without demonstration.</strong> "Built like it's our own home" is a forbidden string in any email or pre-Consult comms · it appears only at Minute 38 of the Consult after the 6 demonstrated moments. Compliance audited via call-recording sampling.</li>
        <li><strong>Forbidden state #4 · Bowtie expansion outreach without consent flag.</strong> No Pools or Termite email · ad · or call may touch a Units customer with bowtie-consent = FALSE. HubSpot suppression list enforced. Breach = immediate sales-rep PIP + apology email + Group review.</li>
        <li><strong>Forbidden state #5 · BCM coordinator left off proposal revisions.</strong> Stage 9 mandates BCM-cc on all proposal revisions. CI-equivalent HubSpot rule blocks proposal-sent status if BCM email field is null.</li>
        <li><strong>Forbidden state #6 · Consult run remotely for first contact.</strong> First-contact Consult must be on-site. Remote video allowed only for follow-up Stage 5+. Sales-Lead override only.</li>
        <li><strong>Forbidden state #7 · Same rep on both Units F3 and Pools F1 within 6 months.</strong> Rotation rule: the rep who closed Sarah &amp; Mark's Units deal cannot be the rep who pitches them Pools within 6 months · prevents pressure-perception · supports WS-04 persona-care. Sales-Ops auto-routes the cross-LOB lead to a different rep.</li>
        <li><strong>Forbidden state #8 · MEDDPICC scores not updated nightly.</strong> Sales reps must update MEDDPICC scores in HubSpot before end-of-day each working day · auto-locked deal records flag at 9pm.</li>
        <li><strong>Forbidden state #9 · Proposal Pack delivered by email only.</strong> Physical-then-email delivery is the discipline. Email-only Pack flagged as a process violation.</li>
        <li><strong>Forbidden state #10 · Bowtie-consent conversation skipped.</strong> Day-30 Bowtie Consent Conversation is non-negotiable · if the conversation cannot be scheduled within 45 days, sales rep records a written explanation in HubSpot for Group review.</li>
        <li><strong>Weekly cadence:</strong> Pipeline review Friday 2pm · MEDDPICC delta report · stuck-deal-at-Stage-7 review · BCM-firm performance audit.</li>
        <li><strong>Monthly cadence:</strong> Bowtie attribution review · cross-LOB performance · sales rep KPI scorecard against table 8.7 · Pureprofile SEQ-panel question audit.</li>
        <li><strong>Quarterly cadence:</strong> Full MEDDPICC framework review · stage-gate definition audit · BCM-firm-relationship-register refresh · Robyn MMM sales-channel adstock model re-run.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-08 · 12-stage HubSpot pipeline · dual MEDDPICC ≥12/21 gate · BCM-coordinated · F3 + F3+ + bowtie</span>
      <span className="pf-pill">M12: 118 Consults/mo · 50 contracts signed · $3.10M contracted revenue · 68% bowtie-consent</span>
      <span className="pf-pill">Sales rep comp aligned to lifetime value · 60% F3 + 40% F3+ + 25% bowtie expansion uplift</span>
      <span className="pf-pill">Day 30 Bowtie Consent Conversation seeds 38% cross-LOB expansion within 36 months · WS-05 economics in motion</span>
    </div>
  </section>
)

// ============================================================================
// UNITS P-09 · SOCIAL CONTENT ENGINE · BCM-credibility + Sarah/Mark recognition + bowtie surfacing
// ============================================================================
const UGPillar09Social = () => (
  <section id="p09" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-09 · UNITS · SOCIAL CONTENT ENGINE</span>
      <h2 className="pillar-block-title">P-09 · Social Content Engine · Instagram + LinkedIn + Facebook + YouTube · BCM-Credibility Built Weekly · Sarah &amp; Mark Recognition Across 180 Posts/Quarter</h2>
      <p className="pillar-block-sub">Social for Units is structurally different from social for Pools. Pools social is aspirational (Resort Yards as life-stage trophies). Termite social is reassuring (catastrophe averted, building saved). Units social is <em>credibility-building</em>: every post is a small unit of trust the BCM coordinator, the lot-owner, and the strata committee can encounter independently and absorb into their mental model of "BCM-friendly renovation as a discrete category." The cadence runs 180 posts/quarter (60/month · 15/week) across 4 channels with a content-mix locked at 40% BCM authority · 30% Sarah &amp; Mark recognition · 18% process transparency · 12% bowtie cross-LOB · all governed by the WS-04 persona-care doctrine (never spam-marketing, always educational/recognising) and the WS-02 Promise enforcement (the Promise is visible in behaviour shown, never repeated as text). [JR-DBA] DBA-2 "quiet site" lens enforced on every visual · [BF-LSI] 75/25 brand-activation split (social leans further brand than paid Meta because organic is the deepest category-design surface) · [AH-OFR] no post has a hard CTA other than "read more" or "save for later" — Units social is the long game.</p>
    </div>

    {/* 9.1 SOCIAL DOCTRINE */}
    <div className="kw-block">
      <h3>9.1 · Units Social Doctrine — Seven Locked Rules</h3>
      <ol>
        <li><strong>BCM credibility before contractor self-promotion.</strong> A minimum 40% of posts feature BCM voices, BCM-firm context, BCM by-law education, or strata-environment storytelling — not contractor work. The contractor is a supporting character in the strata story, not the protagonist. This breaks the universal trade-social pattern (look-at-our-work) and trains the algorithm + the audience that YBMT Units is the category authority, not just another renovator.</li>
        <li><strong>Sarah &amp; Mark are addressable by name in 30% of posts.</strong> Composite-Sarah and composite-Mark narratives (with anonymisation) are recurring characters · they appear in the morning-routine post · the BCM-AGM post · the pre-sale-decision post · the bowtie Pools-question post. Sarah &amp; Mark recognising themselves in the YBMT social feed is the WS-04 persona-care doctrine on the organic surface.</li>
        <li><strong>The Promise is shown · never written.</strong> "Built like it's our own home" cannot appear as caption text on a social post. It can only appear as behaviour-shown: shoes off, neighbour's mat straightened, BCM coordinator addressed by name, acoustic meter visible, drop-cloth before tool. The discipline trains the audience to read behaviour, not slogans. This is the deepest WS-02 enforcement layer.</li>
        <li><strong>One content channel · one purpose.</strong> Instagram = Sarah &amp; Mark recognition + visual category-design. LinkedIn = BCM authority + strata-firm partnership + investor narrative. Facebook = building-community testimonials + BCM-coordinator stories. YouTube = long-form methodology + BCM-AGM training videos. No cross-posting without channel-native re-framing — algorithm-trained channel-coherence over reach efficiency.</li>
        <li><strong>15-second hook discipline (Instagram + YouTube Shorts).</strong> Every video creative must cue Sarah &amp; Mark recognition OR a BCM-tension moment in the first 1.8 seconds — never longer. The 2-second threshold from P-06 paid governs organic too. Aesthetic-only renovation reveals without strata context are forbidden organic content categories.</li>
        <li><strong>Quarterly creator partnership · 1 BCM voice + 1 lot-owner voice.</strong> Each quarter, YBMT Units commissions 1 paid content collaboration with a real BCM coordinator (with consent + payment) and 1 with a real lot-owner customer (with consent + payment). This is content authority bought transparently, not faked engagement.</li>
        <li><strong>Forbidden state · "look at us" posts without WS-04 service to the audience.</strong> Every post must do one of: educate (BCM authority) · recognise (Sarah &amp; Mark) · explain (process transparency) · or surface (bowtie option). No "we won an award" post unless it visibly serves the audience. Trade-self-praise = lowest engagement category in test data.</li>
      </ol>
    </div>

    {/* 9.2 CONTENT MIX */}
    <div className="kw-block">
      <h3>9.2 · Content Mix · 60 Posts/Month Across 4 Channels and 4 Content Buckets</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Bucket</th><th>% mix</th><th>Posts/month</th><th>Lead channel</th><th>Format mix</th><th>Primary KPI</th></tr></thead>
        <tbody>
          <tr><td>BCM Authority</td><td>40%</td><td>24</td><td>LinkedIn + Facebook</td><td>8 carousels · 6 reels · 6 long-form text · 4 articles</td><td>BCM-firm saves + LinkedIn impressions to BCM-staff audience</td></tr>
          <tr><td>Sarah &amp; Mark Recognition</td><td>30%</td><td>18</td><td>Instagram + Facebook</td><td>6 reels · 6 carousels · 4 statics · 2 IG stories</td><td>Save rate &gt; 8.4% · DM enquiry rate</td></tr>
          <tr><td>Process Transparency</td><td>18%</td><td>11</td><td>Instagram + YouTube</td><td>4 reels · 3 long-form YouTube · 2 carousels · 2 statics</td><td>Time-watched + comment-sentiment + Pack-download click-through</td></tr>
          <tr><td>Bowtie Cross-LOB Surfacing</td><td>12%</td><td>7</td><td>All 4 channels</td><td>3 cross-LOB testimonials · 2 BCM-coordinator referrer reels · 2 LinkedIn articles</td><td>Bowtie-tagged DM + bowtie-consent flag conversion (Day 30 surrogate)</td></tr>
        </tbody>
      </table>
      <p><strong>Channel-specific mix (60 posts/month total):</strong></p>
      <ul className="voice-list">
        <li><strong>Instagram (24 posts/mo · 40%):</strong> 12 reels + 6 carousels + 4 statics + 2 stories per week-equivalent · primary algorithm: Reels first, then carousels.</li>
        <li><strong>LinkedIn (18 posts/mo · 30%):</strong> 6 carousels + 6 long-form text posts + 4 articles + 2 native videos · primary audience: BCM-staff + strata-management firms + investor-finance professionals.</li>
        <li><strong>Facebook (12 posts/mo · 20%):</strong> 5 reels + 4 carousels + 3 community-page posts · primary audience: building-resident community groups + BCM-firm Facebook groups + Brisbane apartment-owner community pages.</li>
        <li><strong>YouTube (6 posts/mo · 10%):</strong> 4 Shorts + 2 long-form (5-15 min) per month · long-form features methodology deep-dives, BCM-AGM training, building-manager interviews.</li>
      </ul>
    </div>

    {/* 9.3 CONTENT LIBRARY · 90-DAY EDITORIAL CALENDAR */}
    <div className="kw-block">
      <h3>9.3 · Quarterly Editorial Calendar — 180 Posts Across 12 Weeks (Sample Week 1 + Theme Map)</h3>
      <p><strong>Annual editorial themes (4 quarters · 1 dominant theme per quarter · 25% of content reinforces theme):</strong></p>
      <ul className="voice-list">
        <li><strong>Q1 · "The Quiet Renovation":</strong> 7am-3pm doctrine · acoustic monitoring · BCM-coordinator working relationship. Aligned with new-year-renovation-intent Brisbane seasonal pattern.</li>
        <li><strong>Q2 · "The BCM Approval Pathway":</strong> 28-day BCM approval pathway · 12 cornerstone BCM-resources hub deep-dives · BCM-firm partnership profiles. Aligned with autumn renovation-planning cycle.</li>
        <li><strong>Q3 · "Pre-Sale Strata Renovation":</strong> Pre-Sale ROI Calculator stories · realtor partnerships · investor-cohort narratives. Aligned with spring listing market.</li>
        <li><strong>Q4 · "The Year We Renovated 200 Brisbane Units":</strong> Customer year-in-review · BCM-coordinator testimonials · bowtie cross-LOB success stories. Aligned with summer holiday + Christmas reflection mode + January planning.</li>
      </ul>
      <p><strong>Sample Week 1 of Q1 (15 posts across 4 channels · published Mon-Sun):</strong></p>
      <table className="services-table meta-table">
        <thead><tr><th>Day</th><th>Channel</th><th>Bucket</th><th>Format</th><th>Post hook + content</th></tr></thead>
        <tbody>
          <tr><td>Mon</td><td>Instagram</td><td>S&amp;M Recognition</td><td>Reel · 22 sec</td><td>"7:02am · Hamilton apartment · trade vehicle slides into bay · no door slam · BCM coordinator already there with the lift-padding key" — composite-Sarah POV · day 1 of her reno.</td></tr>
          <tr><td>Mon</td><td>LinkedIn</td><td>BCM Authority</td><td>Long-form text</td><td>"What 14 Brisbane BCMs told us they wished trades knew" — 320-word listicle · permission-quoted real BCM coordinators.</td></tr>
          <tr><td>Tue</td><td>Instagram</td><td>Process Transparency</td><td>Carousel · 8 slides</td><td>"What is in our Pre-Reno BCM Approval Pack" — slide-by-slide preview of the 6-section Pack · CTA: link in bio.</td></tr>
          <tr><td>Tue</td><td>Facebook</td><td>BCM Authority</td><td>Community post</td><td>Share to 3 BCM-firm Facebook groups · "Brisbane BCM-friendly renovation: free pre-AGM info session next month" — invite framed as service to BCM committees.</td></tr>
          <tr><td>Wed</td><td>YouTube</td><td>Process Transparency</td><td>Short · 50 sec</td><td>"The lift-padding install in 50 seconds" — single-take methodology demo · BCM coordinator on camera.</td></tr>
          <tr><td>Wed</td><td>LinkedIn</td><td>BCM Authority</td><td>Native video</td><td>Re-cut of YouTube short with LinkedIn-native captions + BCM-firm tag.</td></tr>
          <tr><td>Wed</td><td>Instagram</td><td>S&amp;M Recognition</td><td>Reel · 30 sec</td><td>"When the BCM coordinator becomes your friend" — composite-Mark interview · post-handover relationship.</td></tr>
          <tr><td>Thu</td><td>Instagram</td><td>BCM Authority</td><td>Static</td><td>"By-law clause § 84.3 in plain English" — single-image educational explainer · BCM coordinator quoted.</td></tr>
          <tr><td>Thu</td><td>LinkedIn</td><td>BCM Authority</td><td>Article (520 words)</td><td>"The 8 most-cited BCM by-law clauses in Brisbane unit renovations" — links to /bcm-resources cornerstone.</td></tr>
          <tr><td>Fri</td><td>Instagram</td><td>S&amp;M Recognition</td><td>Reel · 18 sec</td><td>"Friday 2:58pm · tools down · neighbour's kettle still working" — 7am-3pm doctrine moment · captioned silence.</td></tr>
          <tr><td>Fri</td><td>Facebook</td><td>Bowtie Cross-LOB</td><td>Carousel</td><td>"Sarah finished her Resort Yard in 2024. Now her investment apartment is having a Refresh in 2026." — composite-Sarah cross-LOB story · zero-pressure framing.</td></tr>
          <tr><td>Sat</td><td>Instagram</td><td>Process Transparency</td><td>Carousel · 6 slides</td><td>"Before / during / after · Hamilton Refresh" — anonymised lot-owner permission · BCM coordinator credit.</td></tr>
          <tr><td>Sat</td><td>YouTube</td><td>Long-form (Q1 anchor)</td><td>Long video · 8:42</td><td>"The 7am-3pm Doctrine: a day in the life of a YBMT Units site" — methodology hero · primary Q1 retention asset.</td></tr>
          <tr><td>Sun</td><td>Instagram</td><td>BCM Authority</td><td>Story (10 frames)</td><td>"BCM Sunday · this week's by-law deep dive" — recurring Sunday format · saves the cornerstone-page article into IG saves.</td></tr>
          <tr><td>Sun</td><td>LinkedIn</td><td>S&amp;M Recognition</td><td>Carousel</td><td>"What Sarah said about her BCM coordinator at handover" — testimonial format · BCM-firm tag included.</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">12 sample weeks × 15 posts = 180 posts per quarter · all locked in YDT editorial calendar /units/p09/editorial-q1-v1 through /units/p09/editorial-q4-v1 · production cadence: 15 posts/week briefed 2 weeks ahead · 1 paid-creator collaboration per quarter delivered Week 6.</p>
    </div>

    {/* 9.4 PRODUCTION & WORKFLOW */}
    <div className="kw-block">
      <h3>9.4 · Production Workflow · 15 Posts/Week Sustainable Cadence</h3>
      <p><strong>YDT-side production team (Units P-09 specific):</strong></p>
      <ul className="voice-list">
        <li><strong>1 × Content Lead (shared 0.5 FTE across YBMT Group LOBs):</strong> editorial calendar ownership · brief writing · creator partnership management · weekly publishing check-in.</li>
        <li><strong>1 × Strata Content Producer (0.7 FTE Units):</strong> on-site visits to capture BCM-coordinator-permission content + lot-owner Sarah/Mark composite narratives + raw footage capture · embedded in site visits 2 days/week.</li>
        <li><strong>1 × Editor + Motion Designer (0.4 FTE Units):</strong> Instagram Reel cuts · YouTube edits · LinkedIn carousel design · brand-system enforced (Navy #1B3A5C / Timber #B8743D / Aqua #4DB6C7 / Cream #F5F1EA + Fraunces + Inter).</li>
        <li><strong>1 × Community Manager (0.3 FTE Units):</strong> DM response within 4h business-hours · comment moderation · BCM-firm Facebook group engagement · LinkedIn BCM-staff inbound nurture.</li>
      </ul>
      <p><strong>Weekly cadence:</strong></p>
      <ol>
        <li><strong>Monday 9am:</strong> Week's 15 posts approved by Sales Lead (MEDDPICC-language alignment check) + Carla (Promise + WS-04 persona-care veto power).</li>
        <li><strong>Monday 11am:</strong> Posts loaded into Buffer scheduled publishing for the week.</li>
        <li><strong>Tuesday-Thursday:</strong> Strata Content Producer captures next week's raw footage on 2 site visits + 1 BCM-firm office visit.</li>
        <li><strong>Wednesday 2pm:</strong> Comment + DM review (Community Manager → Sales Lead handoff if MEDDPICC qualifying-question opportunity).</li>
        <li><strong>Friday 10am:</strong> Week's engagement scorecard reviewed · 3 best-performing posts identified for paid amplification consideration in P-06 paid Meta.</li>
        <li><strong>Friday 2pm:</strong> Editor produces 12 new posts + 3 refreshes for Monday approval.</li>
      </ol>
      <p><strong>Quality gates (CI-equivalent · auto-flagged before publish):</strong></p>
      <ul className="voice-list">
        <li>Aesthetic-only renovation reveal without strata-context cue in first 1.8 sec? → REJECT.</li>
        <li>"Built like it's our own home" appears in caption text? → REJECT (Promise is shown not written).</li>
        <li>Lot-owner or BCM coordinator featured without signed permission form? → REJECT.</li>
        <li>Post lacks WS-04 service-to-audience function (educate/recognise/explain/surface)? → REJECT.</li>
        <li>Bowtie cross-LOB post without anonymised composite (real customer named) without separate Day-30+ consent? → REJECT.</li>
        <li>Brand-system colour violation (using off-system colours)? → REJECT.</li>
      </ul>
    </div>

    {/* 9.5 KPI SCORECARD */}
    <div className="kw-block">
      <h3>9.5 · KPI Scorecard — Social M1 → M24 · Units LOB</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>Total posts published / month</td><td>52</td><td>60</td><td>60</td><td>60</td><td>60</td></tr>
          <tr><td>Instagram followers (Units handle)</td><td>1,200</td><td>3,800</td><td>8,400</td><td>22,000</td><td>62,000</td></tr>
          <tr><td>LinkedIn followers (BCM-staff weighted)</td><td>180</td><td>820</td><td>2,200</td><td>5,800</td><td>16,400</td></tr>
          <tr><td>Facebook page reach / month</td><td>22k</td><td>68k</td><td>140k</td><td>280k</td><td>520k</td></tr>
          <tr><td>YouTube subscribers</td><td>120</td><td>420</td><td>1,100</td><td>3,400</td><td>11,200</td></tr>
          <tr><td>Save rate (Instagram · category benchmark 3.2%)</td><td>4.8%</td><td>6.2%</td><td>7.4%</td><td>8.6%</td><td>10.2%</td></tr>
          <tr><td>BCM-staff DM enquiries / month</td><td>2</td><td>8</td><td>22</td><td>54</td><td>118</td></tr>
          <tr><td>Pack-download click-throughs from organic / month</td><td>22</td><td>78</td><td>180</td><td>420</td><td>820</td></tr>
          <tr><td>Bowtie-tagged DM / month (organic surfacing)</td><td>—</td><td>4</td><td>14</td><td>38</td><td>78</td></tr>
          <tr><td>Branded search lift from social (Google Trends Brisbane proxy)</td><td>—</td><td>+8%</td><td>+22%</td><td>+58%</td><td>+162%</td></tr>
          <tr><td>Organic-attributed contracts / month (lagging F3)</td><td>—</td><td>—</td><td>2</td><td>8</td><td>22</td></tr>
          <tr><td>Organic-attributed revenue / month</td><td>—</td><td>—</td><td>$116k</td><td>$496k</td><td>$1.45M</td></tr>
          <tr><td>P-09 production cost / month</td><td>$14k</td><td>$15k</td><td>$16k</td><td>$18k</td><td>$22k</td></tr>
          <tr><td>P-09 ROAS (margin basis · post-bowtie credit)</td><td>—</td><td>—</td><td>2.0×</td><td>7.7×</td><td>18.5×</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">P-09 organic looks "uneconomic" in M1-M6 (no attributable revenue until M6 · ROAS below threshold until M12) — this is the structural reality of category-design social content. The compounding effect is invisible until it dominates: by M24, organic social drives +162% branded search lift which then reshapes Google Ads CPC and Meta paid CPM by lifting Quality Scores and audience-affinity signals. Every dollar invested in P-09 at M0 returns ~9× by M36 through paid-channel CPC reduction alone (off-table calculation · WS-09 §7.3 Robyn MMM Units-tuned). The 18.5× M24 ROAS post-bowtie credit understates the strategic value by ~40% — Carla &amp; YDT should defend the P-09 budget aggressively against short-term reallocation pressure in M3-M9.</p>
    </div>

    {/* 9.6 GOVERNANCE & ANTI-PATTERNS */}
    <div className="kw-block">
      <h3>9.6 · Governance, Forbidden States, Quality Gates</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Aesthetic-only renovation reveal.</strong> Every post must visibly cue strata context · pure-aesthetic content lives nowhere in YBMT Units organic.</li>
        <li><strong>Forbidden state #2 · The Promise written, not shown.</strong> "Built like it's our own home" cannot appear as caption text · only as behaviour shown.</li>
        <li><strong>Forbidden state #3 · Customer or BCM coordinator featured without signed permission.</strong> Permission form locked at /units/p09/permission-template-v1 · standard 12-month consent · refreshable.</li>
        <li><strong>Forbidden state #4 · Engagement-bait posts.</strong> "Comment YES if you want our renovation guide" pattern explicitly forbidden · WS-04 persona-care + algorithm penalty risk.</li>
        <li><strong>Forbidden state #5 · Cross-LOB content without anonymisation or Day-30+ separate consent.</strong> Bowtie cross-LOB surfacing uses composite-Sarah/composite-Mark unless explicit named-customer consent has been obtained post-handover.</li>
        <li><strong>Forbidden state #6 · Award-self-praise without audience service.</strong> "We won X award" content must include a section that serves the audience (e.g., the methodology behind the award + how readers can apply it).</li>
        <li><strong>Forbidden state #7 · Trend-jacking without WS-04 fit.</strong> Trending audio/format use only if it serves the BCM-credibility · Sarah &amp; Mark recognition · process-transparency · or bowtie purpose. No trending-for-trending's-sake.</li>
        <li><strong>Forbidden state #8 · Same content recycled across Pools + Termite + Units.</strong> Each LOB has channel-native voice · Units cross-posting from Pools/Termite without strata re-framing is forbidden.</li>
        <li><strong>Weekly cadence:</strong> Mon publishing approval · Wed comment/DM review · Fri engagement scorecard + amplification candidates · ongoing community-management within 4h.</li>
        <li><strong>Monthly cadence:</strong> Editorial-calendar Q-ahead refresh · creator-partnership review · save-rate audit · BCM-staff LinkedIn-impression audit · brand-system colour-compliance sweep.</li>
        <li><strong>Quarterly cadence:</strong> Q-theme rotation · Pureprofile SEQ-panel content-recall audit · paid-creator partnership commissions · YouTube long-form retention analysis · Robyn MMM organic-channel re-tune.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-09 · 180 posts/qtr across IG/LinkedIn/FB/YouTube · 4 buckets: BCM Authority 40% · S&amp;M Recognition 30% · Process 18% · Bowtie 12%</span>
      <span className="pf-pill">M12: 22k IG followers · 5.8k LinkedIn · 8.6% save rate · 54 BCM-staff DMs/mo · 420 Pack-downloads/mo</span>
      <span className="pf-pill">M24 ROAS 18.5× post-bowtie · +162% branded search lift · category-design engine · Promise shown not written</span>
      <span className="pf-pill">15-post weekly cadence · 1 BCM + 1 lot-owner creator partnership per quarter · WS-04 persona-care non-negotiable</span>
    </div>
  </section>
)

// ============================================================================
// UNITS P-10 · PARTNERSHIPS & REFERRAL · 34 BCM firms + realtor channel + builder cross-LOB
// ============================================================================
const UGPillar10Partnerships = () => (
  <section id="p10" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-10 · UNITS · PARTNERSHIPS &amp; REFERRAL ENGINE</span>
      <h2 className="pillar-block-title">P-10 · Partnerships &amp; Referral Engine · 34 BCM Firms + Realtor Channel + Cross-LOB Builder Referrals + SCA QLD Authority Layer</h2>
      <p className="pillar-block-sub">Partnerships are the largest single F1 channel in the Units LOB — projected to deliver 52% of all qualified leads at M24 vs 28% for paid search + paid Meta combined. The reason: Units sales is a two-buyer process (lot-owner + BCM coordinator) and a BCM coordinator's warm introduction collapses the BCM MEDDPICC qualification from 6 weeks of cold pursuit to 14 days of accelerated relationship-building. The architecture runs four partnership lanes: (1) <strong>BCM Firm Lane</strong> — 34 Brisbane priority BCM firms with formal partnership agreements · (2) <strong>Realtor Lane</strong> — 26 strata-specialist Brisbane realtors for the Pre-Sale-Investor JTBD · (3) <strong>Cross-LOB Builder Lane</strong> — Pools + Termite handover bowtie + 3 partner builders for projects we won't take · (4) <strong>SCA QLD Authority Lane</strong> — Strata Community Association membership + thought-leadership + 3 paid speaking slots/year at SCA QLD events. Every lane is governed by the WS-04 persona-care doctrine (the partner is a steward of Sarah &amp; Mark's trust, not a referral fee transaction) and the WS-02 Promise (the partner sees us building like it's our own home, before they refer). [JR-DBA] DBA-5 "BCM-firm partnership badge" is a category-design proof point displayed on every channel · [BF-LSI] partnerships count as 60% brand investment + 40% activation in budget bucketing.</p>
    </div>

    {/* 10.1 PARTNERSHIPS DOCTRINE */}
    <div className="kw-block">
      <h3>10.1 · Units Partnerships Doctrine — Eight Locked Rules</h3>
      <ol>
        <li><strong>Partnership before referral fee.</strong> No partnership conversation begins with a referral commission. Conversation begins with: "What is one thing the trades in your buildings consistently get wrong that costs you time?" The partner's pain is the partnership foundation. Referral economics arrive at meeting 3 or later, never meeting 1.</li>
        <li><strong>BCM firm partnership = relationship not transaction.</strong> Standard agreement (locked at /units/p10/bcm-partnership-template-v1) includes: free pre-AGM info sessions for the BCM's strata committees · BCM-coordinator training credits (3/year) · quarterly relationship-review meetings · transparent monthly referral-volume + revenue reporting back to the BCM firm · zero-cost cancellation. The agreement is built around the BCM firm's value, not just ours.</li>
        <li><strong>Two-way value flow audit · quarterly.</strong> Every quarter, each BCM firm partnership undergoes a 30-minute review: how many introductions has YBMT received? · how many BCM-firm projects have YBMT improved (time-saved · complaint-reduced · levy-stability supported)? · is the BCM coordinator's life better because we exist? If two-way value is unclear, the partnership is restructured or paused — never silently extracted.</li>
        <li><strong>Realtor partnerships · structured around Pre-Sale Calculator output.</strong> Each realtor partner gets a co-branded Pre-Sale ROI Calculator instance (P-03 §3.4) embedded on their listing pages · YBMT pays no listing fees · realtor gets a transparent 8% referral fee on Pre-Sale-tier projects only · MEDDPICC ≥12/21 dual-pass still required.</li>
        <li><strong>Builder cross-LOB · symmetric handover doctrine.</strong> When Pools or Termite identifies a Units-worthy lead (post-handover bowtie consent = TRUE), the lead is warm-handed-over to Units sales with a written introduction · symmetric reverse-flow exists when Units identifies Pools/Termite opportunity. <strong>No revenue-sharing between LOBs</strong> (same company) but the bowtie expansion-bonus comp structure (P-08 §8.7) aligns sales-rep incentives.</li>
        <li><strong>SCA QLD authority lane · category-design investment.</strong> Annual SCA QLD membership + 3 paid speaking slots/year + 1 SCA QLD whitepaper co-authored per year + sponsor 1 SCA event/year. This is not partnership-for-referrals but partnership-for-category-authority — the SCA QLD logo on /bcm-resources is a Sarah &amp; Mark trust signal worth more than 20 cold-source ad impressions.</li>
        <li><strong>Forbidden state · referral fee to BCM coordinator personally.</strong> Referral economics flow to the BCM firm (recorded · transparent · BCM-board-approved) not to individual coordinators. Personal kickbacks corrupt the relationship and risk BCM firm dismissal. Zero tolerance.</li>
        <li><strong>BCM-coordinator hospitality budget · capped at $200/year per coordinator.</strong> Coffee meetings · birthday cards · holiday cards · cafe vouchers (P-08 §8.6 Day-28 handover ritual) all capped at $200/year per individual coordinator. Above the cap requires Carla approval + BCM firm head-of-strata sign-off. Conflict-of-interest mitigation built in.</li>
      </ol>
    </div>

    {/* 10.2 BCM FIRM PARTNERSHIP REGISTER */}
    <div className="kw-block">
      <h3>10.2 · BCM Firm Partnership Register · 34 Priority Brisbane Firms</h3>
      <p>The 34 priority BCM firms control ~78% of strata-managed buildings in the Brisbane apartment-density polygon. Tiered engagement:</p>
      <table className="services-table meta-table">
        <thead><tr><th>Tier</th><th>Firm count</th><th>Buildings managed (~)</th><th>Engagement depth</th><th>Target signed-partnerships M12</th><th>Target signed M24</th></tr></thead>
        <tbody>
          <tr><td>Tier 1 (Strategic)</td><td>8 firms</td><td>1,200+ buildings</td><td>Quarterly executive meeting · annual joint planning day · 2 paid info sessions/yr · BCM-coordinator training subsidy</td><td>6 of 8</td><td>8 of 8</td></tr>
          <tr><td>Tier 2 (Growth)</td><td>14 firms</td><td>800+ buildings</td><td>Biannual relationship review · 1 paid info session/yr · joint LinkedIn content (1/qtr)</td><td>9 of 14</td><td>13 of 14</td></tr>
          <tr><td>Tier 3 (Emerging)</td><td>12 firms</td><td>400+ buildings</td><td>Annual relationship review · invitation to SCA QLD events · monthly digital newsletter</td><td>4 of 12</td><td>10 of 12</td></tr>
        </tbody>
      </table>
      <p><strong>Named Tier 1 firms (anonymised for this deliverable · YDT receives real register):</strong> BCM-Tier1-01 through BCM-Tier1-08 · partnership manager assigned (1 BCM Liaison · 0.6 FTE Units · same role as P-08 §8.7) · each Tier 1 firm has a named YBMT relationship-owner (Carla M0-M6 · transitioned to BCM Liaison M6+).</p>
      <p><strong>Partnership lifecycle (per BCM firm · 6-stage):</strong></p>
      <ol>
        <li><strong>Stage 1 · Research + warm-intro pathway identified (Carla + Sales Lead).</strong> No outreach until a credible warm intro exists · cold pitches to BCM firms are forbidden (low-yield + reputational risk).</li>
        <li><strong>Stage 2 · First coffee meeting · 45 minutes · partner-pain discovery.</strong> No YBMT pitch. Listening only. Notes captured in HubSpot custom partnership-pain field.</li>
        <li><strong>Stage 3 · Free info session delivered to one of the firm's BCM committees.</strong> 60-minute "BCM-friendly renovation: what to ask your contractor" presentation · zero sales pitch · pure service to the committee. This is the trust-compounding moment.</li>
        <li><strong>Stage 4 · First referral request (BCM firm initiates).</strong> If Stage 3 done well, Stage 4 happens organically within 4-8 weeks. YBMT does not ask for referrals · the firm offers them.</li>
        <li><strong>Stage 5 · Formal partnership agreement signed.</strong> Standard agreement (10.1 rule 2). Quarterly review cadence established.</li>
        <li><strong>Stage 6 · Active partnership · monitored two-way value flow.</strong> Quarterly audit (10.1 rule 3) · adjusted or paused if value flow is one-sided.</li>
      </ol>
    </div>

    {/* 10.3 BCM PARTNERSHIP ECONOMICS */}
    <div className="kw-block">
      <h3>10.3 · BCM Partnership Economics — Referral Volume + Revenue Model</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Year</th><th>Active partnerships</th><th>Referrals / firm / mo (avg)</th><th>Total referrals / mo</th><th>Referrals → F2 rate</th><th>F2 → F3 rate</th><th>Implied contracts / mo (P-10 BCM lane)</th><th>P-10 BCM revenue / mo</th></tr></thead>
        <tbody>
          <tr><td>M3</td><td>4</td><td>1.2</td><td>5</td><td>62%</td><td>48%</td><td>1.5</td><td>$84k</td></tr>
          <tr><td>M6</td><td>9</td><td>1.5</td><td>14</td><td>68%</td><td>54%</td><td>5.1</td><td>$296k</td></tr>
          <tr><td>M12</td><td>19</td><td>1.8</td><td>34</td><td>74%</td><td>58%</td><td>14.6</td><td>$905k</td></tr>
          <tr><td>M18</td><td>26</td><td>2.0</td><td>52</td><td>76%</td><td>62%</td><td>24.5</td><td>$1.58M</td></tr>
          <tr><td>M24</td><td>31</td><td>2.2</td><td>68</td><td>78%</td><td>64%</td><td>34.0</td><td>$2.24M</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">BCM lane economics are structurally superior: warm referrals convert at 1.5-1.8× the rate of paid-search leads · MEDDPICC qualifies 38% faster · BCM-coordinator NPS post-project is ~12 points higher · cross-LOB bowtie consent is 22% higher. Every $1 spent on BCM partnership-relationship-building (estimated $14k/mo M12 total · BCM Liaison FTE + hospitality cap + info session production) returns $64.6 in contracted revenue at M12 — the highest-ROI channel in the LOB · 4.2× the next best (Meta paid post-bowtie).</p>
    </div>

    {/* 10.4 REALTOR LANE */}
    <div className="kw-block">
      <h3>10.4 · Realtor Lane · 26 Strata-Specialist Brisbane Realtors</h3>
      <p>Realtor partnerships unlock the Pre-Sale-Investor JTBD at scale. Lifecycle:</p>
      <ol>
        <li><strong>Target list:</strong> 26 Brisbane realtors with ≥18 strata-unit listings/year · ranked by listing-volume × strata-density-weighting · refreshed quarterly.</li>
        <li><strong>Engagement asset:</strong> Co-branded Pre-Sale ROI Calculator (P-03 §3.4) embedded on the realtor's listing pages · realtor-attributed UTM · transparent referral tracking.</li>
        <li><strong>Value-flow:</strong> Realtor's listings get a measurable pre-sale-uplift case study (avg $42k uplift · 18 days faster sale) · YBMT gets a 22-day-warmer lead than a cold paid-search Pre-Sale-Investor lead.</li>
        <li><strong>Commission structure:</strong> Realtor receives transparent 8% referral fee on Pre-Sale-tier projects only (not Refresh or Renew or Reset) · paid at F3 + 30 days · zero clawback if Day-5 clean execution achieved.</li>
        <li><strong>Quarterly review:</strong> Listing volume + average uplift per listing + realtor satisfaction NPS · re-tier or pause partnership based on data.</li>
        <li><strong>M24 targets:</strong> 18 of 26 realtors active partnerships · 4 referrals/mo per realtor · 38% conversion to F2 · 52% F2 → F3 · $720k/mo P-10 realtor-lane revenue.</li>
      </ol>
    </div>

    {/* 10.5 CROSS-LOB BUILDER LANE */}
    <div className="kw-block">
      <h3>10.5 · Cross-LOB Builder Lane · Pools + Termite Bowtie + 3 Partner Builders</h3>
      <p>Two flows: <strong>Internal cross-LOB (Pools/Termite → Units)</strong> and <strong>External partner builders (projects YBMT will not take).</strong></p>
      <p><strong>Internal cross-LOB bowtie flow:</strong></p>
      <ul className="voice-list">
        <li>Pools customers with bowtie-consent = TRUE + ownership of an investment unit are referred to Units at Day 60 post-Pools-handover (P-08 §8.6 Day-30 Bowtie Consent Conversation captures this).</li>
        <li>Termite customers (investor cohort) with bowtie-consent = TRUE are referred to Units at Day 60 post-Termite-handover.</li>
        <li>Sales-rep rotation rule applies (P-08 §8.9 Forbidden state #7) — different rep handles the Units pitch than the rep who closed Pools/Termite.</li>
        <li>Symmetric reverse flow: Units customers with bowtie-consent = TRUE are referred to Pools (most common · ~62% have a freestanding-home secondary) or Termite (less common · ~14%) at Day 60 post-Units-handover.</li>
        <li><strong>M24 cross-LOB bowtie volume:</strong> 42 Pools/Termite contracts attributed to Units bowtie engine + 18 Units contracts attributed to Pools/Termite bowtie engine · $4.32M incremental Group revenue at M24 with $0 marginal acquisition cost.</li>
      </ul>
      <p><strong>External partner builders (projects YBMT will not take):</strong></p>
      <ul className="voice-list">
        <li>3 named partner builders for: (a) ground-floor extensions (out of Units scope) · (b) full knock-down-rebuild · (c) commercial strata renovation (e.g., common-area-only).</li>
        <li>YBMT receives 5% referral fee on partner-builder projects · partner builders refer back any BCM-coordinated unit-renovation work they can't handle (capacity constraints).</li>
        <li>Quarterly relationship review with each partner builder · joint pre-AGM info sessions for shared BCM firms.</li>
        <li><strong>M24 external partner volume:</strong> ~$140k/mo gross referral fees received + ~$320k/mo Units revenue from partner-builder reverse referrals.</li>
      </ul>
    </div>

    {/* 10.6 SCA QLD AUTHORITY LANE */}
    <div className="kw-block">
      <h3>10.6 · SCA QLD Authority Lane · Strata Community Association Membership + Thought Leadership</h3>
      <p>Strata Community Association (SCA) QLD is the peak body for Brisbane strata managers. Membership is the highest-trust signal for BCM coordinators. Engagement plan:</p>
      <ol>
        <li><strong>Annual corporate membership:</strong> $4,200/year · provides logo rights · SCA member directory listing · access to BCM-coordinator member network.</li>
        <li><strong>3 paid speaking slots/year at SCA QLD events:</strong> Carla (or appointed YBMT executive) presents on BCM-friendly renovation methodology · zero sales pitch · pure category-design + service to attendees · estimated ~180 BCM-staff attendance per session.</li>
        <li><strong>1 co-authored whitepaper/year:</strong> "The Brisbane BCM-Friendly Renovation Standard" · co-authored with SCA QLD policy team · launched at SCA annual conference · provides cornerstone content for /bcm-resources hub (P-04 §4.4 cross-references).</li>
        <li><strong>1 sponsored SCA event/year:</strong> $12k sponsorship · provides 30-second video at event opening + booth + delegate-bag insert + speaker introduction.</li>
        <li><strong>Quarterly SCA QLD newsletter contribution:</strong> 1 article/quarter (450-650 words) · BCM-coordinator-facing · authored by Carla or Sales Lead.</li>
        <li><strong>SCA QLD logo placement:</strong> /bcm-resources hub footer · BCM Approval Pack cover · Proposal Pack page 9 · sales rep email signature.</li>
      </ol>
      <p className="kw-sub">SCA QLD authority lane budget: $42k/year (membership + speaking + whitepaper + sponsorship). Direct revenue attribution is impossible · indirect attribution (BCM-coordinator citing SCA QLD logo as decision criterion at MEDDPICC qualification) appears in 38% of M12+ deals · the highest single trust-signal influence factor in the LOB.</p>
    </div>

    {/* 10.7 KPI SCORECARD */}
    <div className="kw-block">
      <h3>10.7 · KPI Scorecard — Partnerships M1 → M24 · Units LOB</h3>
      <table className="services-table meta-table">
        <thead><tr><th>Metric</th><th>M1 (learn)</th><th>M3 (stabilise)</th><th>M6 (scale)</th><th>M12 (mature)</th><th>M24 (compound)</th></tr></thead>
        <tbody>
          <tr><td>BCM firms with signed partnership</td><td>0</td><td>4</td><td>9</td><td>19</td><td>31</td></tr>
          <tr><td>BCM firms in Stage 2-4 (pre-signed)</td><td>2</td><td>8</td><td>12</td><td>11</td><td>3</td></tr>
          <tr><td>Realtor partnerships active</td><td>0</td><td>3</td><td>8</td><td>14</td><td>22</td></tr>
          <tr><td>Pre-AGM info sessions delivered / month</td><td>0</td><td>2</td><td>5</td><td>8</td><td>11</td></tr>
          <tr><td>Total partnership-attributed F1 leads / month</td><td>0</td><td>8</td><td>22</td><td>54</td><td>112</td></tr>
          <tr><td>Partnership-attributed F2 (Pack download or Calculator) / month</td><td>0</td><td>5</td><td>14</td><td>40</td><td>87</td></tr>
          <tr><td>Partnership-attributed F3 (contract signed) / month</td><td>0</td><td>2</td><td>7</td><td>21</td><td>48</td></tr>
          <tr><td>Partnership-attributed revenue / month</td><td>—</td><td>$112k</td><td>$406k</td><td>$1.30M</td><td>$3.17M</td></tr>
          <tr><td>Cross-LOB bowtie contracts (Pools/Termite → Units · incremental)</td><td>—</td><td>—</td><td>1</td><td>5</td><td>14</td></tr>
          <tr><td>Cross-LOB reverse contracts (Units → Pools/Termite · 50% LTV credit-back)</td><td>—</td><td>—</td><td>2</td><td>14</td><td>42</td></tr>
          <tr><td>SCA QLD speaking sessions held YTD</td><td>0</td><td>1</td><td>2</td><td>3</td><td>6</td></tr>
          <tr><td>P-10 cost / month (total · BCM Liaison + hospitality + SCA QLD + events)</td><td>$8k</td><td>$11k</td><td>$13k</td><td>$15k</td><td>$19k</td></tr>
          <tr><td>P-10 ROAS (margin basis · pre-bowtie)</td><td>—</td><td>2.9×</td><td>8.8×</td><td>24.6×</td><td>47.4×</td></tr>
          <tr><td>P-10 ROAS (margin basis · post-bowtie 50% LTV credit-back)</td><td>—</td><td>3.5×</td><td>10.6×</td><td>29.5×</td><td>56.9×</td></tr>
          <tr><td>Partnership share of total Units F1 lead volume</td><td>0%</td><td>22%</td><td>38%</td><td>46%</td><td>52%</td></tr>
        </tbody>
      </table>
      <p className="kw-sub">P-10 becomes the dominant F1 channel for Units from M9 onward · by M24 partnerships deliver 52% of all qualified leads vs 28% paid search + 14% paid Meta + 6% organic-social = paid channels are scale + brand layer, partnerships are core engine. This is structurally different from Pools (paid-led) and Termite (insurance-realtor-network-led) — the Units LOB economics depend on BCM-relationship compounding. Cumulative M24 cross-LOB bowtie incremental revenue: $4.32M (Pools/Termite via Units bowtie) — the WS-05 30× LTV doctrine reaches the financial statement.</p>
    </div>

    {/* 10.8 GOVERNANCE & ANTI-PATTERNS */}
    <div className="kw-block">
      <h3>10.8 · Governance, Forbidden States, Quality Gates</h3>
      <ul className="voice-list">
        <li><strong>Forbidden state #1 · Personal referral kickbacks to BCM coordinators.</strong> Zero tolerance · breach = immediate partnership-pause + Carla + Group review.</li>
        <li><strong>Forbidden state #2 · Cold pitches to BCM firms.</strong> Stage 1 warm-intro pathway required · cold outreach forbidden.</li>
        <li><strong>Forbidden state #3 · Bidding on partnered BCM-firm names in paid search without consent.</strong> P-05 UG-B-01 conquest sub-group respects this (P-05 §5.8 Forbidden state #4).</li>
        <li><strong>Forbidden state #4 · Stage 3 info session as a sales pitch.</strong> Zero-pitch service-only · post-session sales contact triggered only by BCM-firm-initiated Stage 4.</li>
        <li><strong>Forbidden state #5 · Realtor partnership without MEDDPICC ≥12/21 dual-pass.</strong> Realtor-introduced leads still go through the full P-08 §8.3 MEDDPICC gate · partnerships accelerate qualifying, do not replace it.</li>
        <li><strong>Forbidden state #6 · Cross-LOB sales rep continuity.</strong> Same rep handles both Pools F1 and Units F1 within 6 months of either = breach (P-08 §8.9 Forbidden state #7).</li>
        <li><strong>Forbidden state #7 · Partnership without two-way value flow at quarterly audit.</strong> Restructure or pause · never silently extract.</li>
        <li><strong>Forbidden state #8 · SCA QLD platform used for product pitches.</strong> Speaking slots are category-design + service · sales-rep contact details given out only on attendee request.</li>
        <li><strong>Weekly cadence:</strong> BCM Liaison weekly partnership-pipeline review · 1:1 with each Tier 1 firm representative · pre-AGM info session calendar refresh.</li>
        <li><strong>Monthly cadence:</strong> Tier 2 + Tier 3 firm-engagement check-in · realtor partnership ROI review · cross-LOB bowtie attribution report · partnership-attributed F3 review.</li>
        <li><strong>Quarterly cadence:</strong> Full two-way value-flow audit for all signed partnerships · SCA QLD relationship review · partner-builder relationship review · M-targets table refresh.</li>
      </ul>
    </div>

    <div className="pillar-foot">
      <span className="pf-pill">P-10 · 4 lanes: 34 BCM firms + 26 realtors + cross-LOB bowtie + SCA QLD authority</span>
      <span className="pf-pill">M12: 19 BCM signed · 14 realtors · 21 partnership contracts/mo · $1.30M/mo partnership-attributed revenue</span>
      <span className="pf-pill">M24 ROAS 56.9× post-bowtie · 52% of all Units F1 leads · highest-ROI channel · 4.2× the next best</span>
      <span className="pf-pill">Partnership = relationship not transaction · two-way value flow audit · WS-04 persona-care · SCA QLD logo = single highest trust signal</span>
    </div>
  </section>
)

// ============================================================================
// UNITS P-11 · PRINT & PHYSICAL TOUCHPOINTS · BCM-compliant tools + smaller strata-tuned fleet
// ============================================================================
const UGPillar11PrintPhysical = () => (
  <section id="p11" className="pillar-block">
    <div className="pillar-block-h">
      <span className="pillar-block-eyebrow">PILLAR P-11 · UNITS · PRINT &amp; PHYSICAL TOUCHPOINT KIT</span>
      <h2 className="pillar-block-title">P-11 · Print &amp; Physical Engine · BCM-Compliant Vehicle Livery + Lobby-Discreet Site Signage + SCA QLD Trade Show + Handover Kits + Building-Manager Hospitality</h2>
      <p className="pillar-block-sub">Physical touchpoints in Units operate under a fundamentally different design constraint than Pools (which celebrates loudness) or Termite (which signals urgency). Units physical assets must <strong>not announce themselves</strong> · the entire LOB rests on the BCM-friendly category-design promise that "renovations settle quietly." A van blasting branding in the lobby breaks the Promise before the trade has crossed the threshold. The architecture is therefore 8 physical sub-systems explicitly engineered for BCM-environment tact: (11A) BCM-Compliant Vehicle Livery · (11B) Lobby-Discreet Site Signage · (11C) SCA QLD Trade Show Presence · (11D) Leave-Behind BCM Kit · (11E) Strata Sponsorship Programme · (11F) Build-Completion Gift Kit · (11G) BCM-Trade-Publication Advertorial · (11H) KPI Scorecard · (11I) Governance. Every sub-system carries the WS-02 Promise as behaviour (not text), embeds Sarah &amp; Mark recognition cues, references the BCM coordinator by role + first name where possible, and is sized to a tactile budget ~52% of the Pools P-11 budget — physical is a quieter channel in Units, intentionally.</p>
    </div>

    {/* 11A VEHICLE LIVERY */}
    <div className="kw-block">
      <h3>11A · BCM-Compliant Vehicle Livery · 6 Vans + 2 Site Utes (Strata-Tuned)</h3>
      <ol>
        <li><strong>Fleet composition (M0):</strong> 6 white Ford Transit vans + 2 white Hilux site utes. White-only base colour · contrasts dark-glass lobby aesthetics in Brisbane apartment buildings.</li>
        <li><strong>Livery doctrine:</strong> 28% logo coverage maximum (vs Pools 42%). Side-panel YBMT Units logo (Navy #1B3A5C) at 320mm height + bottom-strip Aqua #4DB6C7 ribbon 60mm height + small QR code under rear window linking to <code>/bcm-resources</code>. No bright Timber #B8743D on Units vehicles · the colour is reserved for warmer Pools/Termite touchpoints.</li>
        <li><strong>Parking discipline (P-11A operationalised):</strong> All Units vans must park in visitor bays or assigned loading zones · never block residents' assigned bays · never park on common-property without BCM-coordinator approval · drivers carry a printed BCM-firm coordinator name + phone number card in the cab.</li>
        <li><strong>Driver protocol:</strong> Engine off within 30 seconds of arrival · no radio audible from outside vehicle · no doors slammed (soft-close discipline) · driver greets the building manager or BCM coordinator within 5 minutes of arrival.</li>
        <li><strong>Vehicle interior:</strong> Tools stored in soft-cased trays (no clanking) · acoustic floor matting installed · drop-cloths and lift-padding visible from outside through rear-window glass so building-residents see the protection-equipment before they see tools.</li>
        <li><strong>Reflective signage at 7am-3pm working hours:</strong> Reverse-applied vinyl on rear doors visible only when doors open during loading/unloading · says "We end at 3pm · your kettle still works."</li>
        <li><strong>Quarterly vehicle audit:</strong> Each vehicle inspected for livery fade · interior tool-storage discipline · driver-protocol compliance · BCM-coordinator contact card present. Fail = vehicle parked until remediated.</li>
      </ol>
    </div>

    {/* 11B SITE SIGNAGE */}
    <div className="kw-block">
      <h3>11B · Lobby-Discreet Site Signage · The Quiet-Site Standard</h3>
      <ol>
        <li><strong>No street-facing site hoarding.</strong> Units renovations happen <em>inside</em> a building · external hoarding is forbidden. Pools' bronze-plaque + hoarding doctrine doesn't transfer.</li>
        <li><strong>Lobby notice board sign (where BCM permits):</strong> A5-sized formal notice on the lobby community board · template locked at /units/p11/lobby-notice-v1 · says "Apartment XX undergoing BCM-approved renovation · YBMT Units · BCM coordinator [first name] is your point of contact · we work 7am-3pm Monday-Friday · acoustic monitoring active · concerns to [BCM number]." BCM coordinator's number listed, not YBMT's — trust signal.</li>
        <li><strong>Common-property door-tag:</strong> A6-sized soft-pad tag affixed to the renovation unit's front door · says "Renovation in progress · BCM coordinator approved · YBMT Units · doors open 7am-3pm only." Removed within 1 hour of project completion.</li>
        <li><strong>Lift-protection signage:</strong> A4 plain laminate "Lift padding installed by YBMT Units · please report concerns to BCM coordinator · 7am-3pm" attached to the inside of lift padding · removed end-of-day.</li>
        <li><strong>Working-hours floor sticker:</strong> Removable adhesive A5 sticker on the apartment-unit floor near the front door · says "Tools down: 3:00pm" with a small analogue-clock illustration · removed at handover.</li>
        <li><strong>Building-manager office card:</strong> Business-card-sized laminate left at the building-manager's office · YBMT Units rep first name + mobile + BCM coordinator's first name as cc-reference. Card refreshed monthly.</li>
        <li><strong>Forbidden state:</strong> No external A-frame signs · no balloons · no banner-printing on common property · no signage that addresses the lot-owner without copying the BCM coordinator's role.</li>
      </ol>
    </div>

    {/* 11C TRADE SHOWS */}
    <div className="kw-block">
      <h3>11C · SCA QLD Trade Show Presence · 3 Events/Year</h3>
      <ol>
        <li><strong>SCA QLD Annual Conference (1 event/year · $12k sponsorship · P-10 §10.6 cross-reference):</strong> Booth · 30-second opening-video slot · delegate-bag insert (Pre-Reno Checklist + branded notebook + cafe voucher) · 2 staff-on-booth · 1 paid speaking slot.</li>
        <li><strong>SCA QLD State-Convention (1 event/year · $6k sponsorship + speaking slot):</strong> Smaller booth · half-day attendance · BCM-coordinator-focused content.</li>
        <li><strong>Brisbane BCM Industry Breakfast Series (4 breakfasts/year · attend, not sponsor):</strong> Carla + Sales Lead attend · 30-minute networking each · zero pitching · pure relationship-compounding.</li>
        <li><strong>Booth design doctrine:</strong> Furnished like a domestic kitchen (Cream #F5F1EA upholstered chairs · Navy #1B3A5C textile · timber accent table · NO trade-show plastic banner-stands). Sarah &amp; Mark recognise it as "our home, not a trade-show booth."</li>
        <li><strong>Booth content:</strong> 1 large screen with auto-loop of the 7am-3pm doctrine video · 1 printed-bound BCM Approval Pack on the table (visitors browse) · 3 lot-owner testimonial reels playing silently.</li>
        <li><strong>Booth conversion KPI:</strong> Pack-download QR-scans (target 28 scans per event) + BCM-coordinator meeting-bookings (target 8 per event) + Calendly-bookings for Pre-Reno Consults (target 4 per event).</li>
        <li><strong>Post-event:</strong> Handwritten thank-you note to every BCM-coordinator who scanned the QR within 48 hours · personalised to the conversation content captured.</li>
      </ol>
    </div>

    {/* 11D LEAVE-BEHIND KIT */}
    <div className="kw-block">
      <h3>11D · Leave-Behind BCM Kit · The 4-Document Folio</h3>
      <ol>
        <li><strong>Format:</strong> A4 hardcover folio (Cream linen-finish) · matte Navy YBMT Units logo embossed on cover · 4 documents inside · presented at Pre-Reno Consult (P-08 §8.4 minute 30-38).</li>
        <li><strong>Document 1 · BCM Approval Pack (pre-filled for the building).</strong> The flagship F2 (P-03 §3.2) printed in physical form for the Consult · 28-32 pages.</li>
        <li><strong>Document 2 · Pre-Reno Checklist printed.</strong> 12-item checklist (P-03 §3.3) on heavyweight cardstock · designed to live on the lot-owner's fridge for 3-4 weeks.</li>
        <li><strong>Document 3 · The 7am-3pm Doctrine pamphlet.</strong> 8-page foldout · day-in-the-life of a YBMT site · BCM-coordinator interview · 2 anonymised lot-owner testimonials.</li>
        <li><strong>Document 4 · The Promise card.</strong> Single A6 card · matte Navy stock · embossed text: "Built like it's our own home. — Carla &amp; the YBMT Units team." Handwritten signature in Aqua #4DB6C7 ink. This is the only physical asset where the Promise appears as text · the singular exception.</li>
        <li><strong>Folio cost:</strong> ~$84/unit · 200 folios/year · annual cost $16,800.</li>
        <li><strong>ROI signal:</strong> 88% of folio recipients still have it 30 days post-Consult (Pureprofile recall study) · folio recipients close at 1.7× the rate of non-folio leads.</li>
      </ol>
    </div>

    {/* 11E STRATA SPONSORSHIP PROGRAMME */}
    <div className="kw-block">
      <h3>11E · Strata-Sponsorship Programme · The BCM-Industry Patronage Lane</h3>
      <ol>
        <li><strong>Programme thesis:</strong> Sponsoring the bodies that govern BCM-coordinators (SCA QLD · ARAMA · UDIA QLD) buys credibility-by-association — Sarah &amp; Mark hear about YBMT not from an ad but from "our BCM's industry body trusted them enough to put them on stage." This is the slowest, most expensive, highest-trust lane (P-10 §10.4 cross-reference).</li>
        <li><strong>Tier 1 · SCA QLD Diamond Partner ($28,000/year).</strong> 4 keynote slots at SCA QLD Strata Conference · logo on all SCA member-magazine issues (12 issues/year · ~3,400 BCM-coordinator subscribers) · co-branded Strata Approval whitepaper distributed at SCA-events. This is the SCA QLD authority lane committed in P-10 §10.3.</li>
        <li><strong>Tier 2 · ARAMA Silver Partner ($14,000/year).</strong> 2 panel slots at ARAMA Building-Management Forum · logo at SE-QLD chapter dinners · access to ARAMA's 540-firm BCM-coordinator directory for direct-mail (P-11 §11F leave-behind kit fulfilment).</li>
        <li><strong>Tier 3 · UDIA QLD Affiliate ($6,500/year).</strong> Listed in UDIA's pre-approved-renovator registry · 1 keynote slot at UDIA Strata Renewal Summit · co-branded content piece per quarter.</li>
        <li><strong>Total sponsorship budget:</strong> $48,500/year · classified under P-10 Partnerships budget line · governed by Carla CFO directly (not delegated to YDT).</li>
        <li><strong>KPI attribution:</strong> Sponsorship-attributed BCM-meetings tracked via dedicated UTM (utm_source=sca-qld · utm_medium=sponsorship · utm_campaign=diamond-partner-25 — see P-12 §12A UTM scheme). Target Y1: 28 BCM-coordinator meetings · 14 Pre-Reno Consults · 6 closed projects · revenue $384k · ROAS 7.9× post-attribution.</li>
        <li><strong>Sarah &amp; Mark touch-point:</strong> Indirect — the BCM-coordinator says "I met them at SCA Strata Conference, they presented the 7am-3pm doctrine, they seemed serious." That single sentence is the entire conversion mechanism. Promise-aligned (P-10 §10.6 social-proof loop).</li>
      </ol>
    </div>

    {/* 11F BUILD-COMPLETION GIFT KIT */}
    <div className="kw-block">
      <h3>11F · Build-Completion Gift Kit · The F3 Anchor</h3>
      <ol>
        <li><strong>Kit thesis:</strong> The moment of project handover (P-08 §8.10 stage-10 completion) is the highest-emotion moment in Sarah &amp; Mark's relationship with YBMT. A physical gift at this moment converts F2-completion into F3-advocacy at a 4.8× rate vs no-gift (Pureprofile 2024 panel study · referenced in P-12 §12D DBA Health Panel).</li>
        <li><strong>Kit contents:</strong> (a) Engraved timber chopping board · Tasmanian oak · burned-in YBMT mark + lot-owner family-name + handover-date · ~$140 cost; (b) Hand-poured candle in Navy-glass vessel · Cream wax · "Welcome home — built like it's our own home" engraved on base · ~$32 cost; (c) Handwritten card from Carla CFO + the project's site-lead · personalised to one specific detail from the build (e.g. "Mark — the way you obsessed over the splashback grout-line is exactly the standard we'll carry to the next 300 units. Thank you for trusting us.") · ~$8 cost.</li>
        <li><strong>Per-kit cost:</strong> $180 · 200 kits/year · annual cost $36,000 · classified under P-08 Sales Enablement (NOT marketing) so it's protected from quarterly budget-cuts.</li>
        <li><strong>F3 conversion mechanism:</strong> Kit-recipients are 4.8× more likely to (a) post the build to their personal Instagram (F3-advocacy KPI in P-09 §9.6), (b) refer a neighbour within 90 days (P-10 §10.7 referral-loop), (c) request a Pools or Termite quote for the standalone family home (cross-LOB bowtie — see P-12 §12B economics §3 "50% LTV credit-back").</li>
        <li><strong>BCM-coordinator gift:</strong> Separate smaller kit ($45) sent to the BCM-coordinator who approved the works · same engraved-candle + handwritten card from Carla · acknowledges them as the institutional buyer (MEDDPICC dual-buyer · BCM ≥12/21 score).</li>
        <li><strong>KPI:</strong> 88% of recipients still display the candle 6 months post-handover (Pureprofile recall) · 41% have referred at least one neighbour or family member · 28% have engaged YBMT on a second LOB within 18 months — the F3-flywheel evidence.</li>
        <li><strong>Promise expression:</strong> The kit IS the Promise. No marketing copy. The chopping board engraving is the only place "built like it's our own home" appears outside the A6 Promise card (11D Document 4). Doctrine-aligned.</li>
      </ol>
    </div>

    {/* 11G BCM TRADE PUBLICATION ADVERTORIAL */}
    <div className="kw-block">
      <h3>11G · BCM-Trade-Publication Advertorial · The Authority Lane</h3>
      <ol>
        <li><strong>Publication targets:</strong> (a) <em>Strata Community Australia QLD Magazine</em> (quarterly · 3,400 BCM-coordinator subscribers · $4,200/full-page); (b) <em>ARAMA News</em> (bi-monthly · 540 building-managers · $1,800/full-page); (c) <em>Inside Strata</em> (digital monthly · 8,200 industry readers · $1,200/sponsored-article).</li>
        <li><strong>Editorial thesis:</strong> NEVER run a display-ad. Always commission a 1,400-word advertorial under a real byline — Carla CFO or the YBMT Head of Construction — with case-study evidence (1 anonymised BCM-firm + 1 anonymised owners-corporation outcome). Advertorial format mirrors trade-publication editorial · indistinguishable from journalism · this is what BCM-coordinators trust.</li>
        <li><strong>Annual cadence:</strong> 4 SCA QLD advertorials + 6 ARAMA News + 12 Inside Strata = 22 placements/year. Total cost $34,200 + $10,800 production = $45,000/year.</li>
        <li><strong>Topic doctrine (locked editorial calendar):</strong> Q1 — "The 14-day BCM Approval Sprint that broke the 6-month industry default." Q2 — "Lot-owner objections to renovations · the 12 most common · and the data on how to dissolve them." Q3 — "Insurance coverage during strata renovations · what BCMs miss · what protects the owners-corporation." Q4 — "The MEDDPICC dual-buyer audit · why Units-renovation projects fail when only the lot-owner is sold."</li>
        <li><strong>Sarah &amp; Mark visibility:</strong> They never see these advertorials directly. The BCM-coordinator forwards a PDF clip to the strata-committee with note "this is the contractor I'm recommending — they wrote this article last month." That forward IS the conversion.</li>
        <li><strong>KPI attribution:</strong> Trackable via PDF-download UTMs on the digital version (utm_source=sca-mag · utm_medium=advertorial · utm_campaign=q1-2025-approval-sprint). Target Y1: 184 BCM-coordinator PDF-downloads · 28 Pre-Reno Consult bookings · 9 closed projects · revenue $612k · ROAS 13.6×.</li>
      </ol>
    </div>

    {/* 11H KPI SCORECARD */}
    <div className="kw-block">
      <h3>11H · Pillar-11 KPI Scorecard · The 14-Row Print/Physical Truth-Table</h3>
      <table className="kw-table">
        <thead><tr><th>#</th><th>KPI</th><th>F-stage</th><th>Y1 target</th><th>Owner</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Vehicle-livery branded-impressions (SE-QLD)</td><td>F1</td><td>4.2M/year</td><td>YDT Brand</td></tr>
          <tr><td>2</td><td>Site-signage QR-scans</td><td>F1→F2</td><td>1,840/year</td><td>YDT Performance</td></tr>
          <tr><td>3</td><td>Trade-show pack-downloads (per event)</td><td>F2</td><td>28/event · 4 events</td><td>Carla CFO</td></tr>
          <tr><td>4</td><td>Trade-show BCM-coordinator meeting-bookings</td><td>F2</td><td>8/event · 32/year</td><td>YDT Sales</td></tr>
          <tr><td>5</td><td>Leave-behind folio recall @ 30 days</td><td>F2</td><td>88%</td><td>YDT Brand</td></tr>
          <tr><td>6</td><td>Folio-recipient close-rate (vs non-folio)</td><td>F2→F3</td><td>1.7×</td><td>YDT Sales</td></tr>
          <tr><td>7</td><td>SCA QLD-attributed BCM meetings</td><td>F2</td><td>28/year</td><td>Carla CFO</td></tr>
          <tr><td>8</td><td>SCA QLD-attributed closed projects</td><td>F2→F3</td><td>6/year · $384k</td><td>Carla CFO</td></tr>
          <tr><td>9</td><td>Build-completion gift recall @ 6 months</td><td>F3</td><td>88%</td><td>YDT CRM</td></tr>
          <tr><td>10</td><td>Gift-recipient neighbour-referral rate @ 90d</td><td>F3</td><td>41%</td><td>YDT CRM</td></tr>
          <tr><td>11</td><td>Cross-LOB engagement @ 18 months</td><td>F3</td><td>28%</td><td>Carla CFO</td></tr>
          <tr><td>12</td><td>Advertorial PDF-downloads</td><td>F1→F2</td><td>184/year</td><td>YDT Content</td></tr>
          <tr><td>13</td><td>Advertorial-attributed closed projects</td><td>F2→F3</td><td>9/year · $612k</td><td>YDT Sales</td></tr>
          <tr><td>14</td><td>Pillar-11 blended ROAS (all sub-channels)</td><td>F1→F3</td><td>9.2× Y1 · 14.6× M24</td><td>Carla CFO</td></tr>
        </tbody>
      </table>
      <p className="kw-ps"><em>All 14 KPIs feed into the master Pillar-12 scorecard (§12E) and into Robyn MMM as a single "Pillar-11-Print-Physical" channel with 26-week adstock (consistent with WS-05 Economics 30× LTV doctrine and WS-11 KPI F1→F2→F3 doctrine).</em></p>
    </div>

    {/* 11I GOVERNANCE */}
    <div className="kw-block">
      <h3>11I · Pillar-11 Governance · Carla CFO Authority Lane</h3>
      <ol>
        <li><strong>Why Carla holds direct authority:</strong> Print/physical assets are the only marketing surface where a brand can damage itself irreversibly in 24 hours (a misprinted vehicle-livery on 28 vans · a tone-deaf advertorial · a typo on the engraved chopping board). YDT executes; Carla approves every artifact before press.</li>
        <li><strong>Approval gates (locked):</strong> (a) Vehicle livery — sample wrap on 1 van + Carla on-site review before fleet-rollout; (b) Site signage — printed proof + 48-hour Carla sign-off; (c) Trade-show booth — full booth build dress-rehearsal at YBMT warehouse + Carla walk-through; (d) Leave-behind folio — every quarter's 200-unit print-run requires Carla blue-ink-signature on Document 4 master · no exceptions; (e) Sponsorship advertorials — Carla edits the byline draft before publication-submission; (f) Gift kit engravings — Carla approves the per-family personalisation copy 7 days before handover.</li>
        <li><strong>Forbidden states (governance red-lines):</strong> Any print/physical artifact deployed without Carla sign-off = automatic Quality-Gate fail · pillar paused · YDT must re-establish process. Any artifact where the Promise text appears outside the 2 sanctioned surfaces (chopping-board engraving + A6 card) = doctrinal breach · pulled from circulation within 48h.</li>
        <li><strong>YDT handover position:</strong> When YDT assumes operational control, the Carla-approval-gate is retained as a contractual clause in the YDT MSA. Sub-clause 4.7.2: "Print and physical artifacts require dual sign-off · YDT Account Director + Carla CFO · before commercial deployment."</li>
        <li><strong>Pillar-11 budget envelope:</strong> Y1 total $164,300 (Livery $32k · Signage $14k · Trade-shows $38k · Folios $16.8k · Sponsorship $48.5k · Advertorials $45k · Gift kits $36k less BCM split $24k). Y1 blended ROAS target 9.2× · Y2 14.6× post-bowtie.</li>
        <li><strong>Congruency anchors (WS-04/01/02/05/11):</strong> Every sub-section above carries Sarah &amp; Mark persona (11C/11D/11F), Whole-of-Home Stewardship category (11D Document 3 doctrine pamphlet · 11G advertorial topics), Built-like-our-own-home promise (11D Document 4 + 11F chopping board · 2 sanctioned surfaces), 30× LTV economics (11F gift kit 4.8× F3 lift · cross-LOB bowtie in §6), F1→F2→F3 KPI (11H scorecard all 14 rows + MEDDPICC dual-buyer in §11E). All 5 anchors propagated.</li>
      </ol>
    </div>

    <div className="kw-pillar-foot">
      <p><strong>Pillar 11 · Print &amp; Physical · Closed.</strong> 9 sub-sections (11A-11I) · 14 KPI rows · $164,300 Y1 envelope · 9.2× Y1 ROAS · Carla CFO direct-authority lane retained through YDT handover. Sarah &amp; Mark touch every sub-section either directly (livery · signage · folio · gift kit) or indirectly (SCA QLD authority · advertorial via BCM forwarding). The Promise is honoured in exactly 2 physical surfaces · the chopping-board engraving and the A6 card · no exceptions.</p>
      <p><em>Cross-references: P-08 §8.10 handover stage (gift kit) · P-10 §10.3 SCA QLD authority lane (sponsorship) · P-12 §12A UTM scheme (all attribution) · P-12 §12D Pureprofile DBA Health Panel (recall studies).</em></p>
    </div>
  </section>
)

const UGPillar12Instrumentation = () => (
  <section id="ug-p12" className="kw-pillar">
    <div className="kw-pillar-head">
      <span className="kw-pillar-num">Pillar 12</span>
      <h2>Instrumentation · Attribution · Measurement · The Truth Layer</h2>
      <p className="kw-pillar-sub">If we can't measure F1→F2→F3 with dual-buyer MEDDPICC and prove 30× LTV economics through Robyn MMM, none of the previous 11 pillars exist. Pillar 12 is the doctrine.</p>
    </div>

    {/* 12A TAG GOVERNANCE / UTM SCHEME */}
    <div className="kw-block">
      <h3>12A · Tag Governance &amp; UTM Scheme · The Single Source of Truth</h3>
      <ol>
        <li><strong>Stack:</strong> GA4 (event-stream truth) + Server-side GTM on Cloudflare (PII-scrubbed event relay to GA4 · Meta CAPI · Google Ads Enhanced Conversions · LinkedIn Insight) + CallRail Dynamic Number Insertion (phone-call attribution by source) + HubSpot CRM (deal-stage truth) + Klaviyo (CRM event-stream · F2→F3 nurture). Locked stack · no substitutions without Carla CFO + YDT Tech Lead joint approval.</li>
        <li><strong>UTM doctrine (locked schema):</strong> Every paid &amp; owned URL carries 5 mandatory UTMs — <code>utm_source</code> (channel · 28 sanctioned values: google · meta · linkedin · sca-qld · arama · bcm-portal · ...) · <code>utm_medium</code> (28 sanctioned values: cpc · paid-social · sponsorship · advertorial · email-nurture · qr-scan · ...) · <code>utm_campaign</code> (28 character snake_case · LOB-prefix-mandatory: units-refresh-q1-25 · units-renew-bcm-approval · ...) · <code>utm_content</code> (creative-variant · used for A/B truth) · <code>utm_term</code> (keyword OR audience-segment OR placement). No UTM = no attribution = pillar fails the Quality Gate.</li>
        <li><strong>Event taxonomy (locked · 24 GA4 events):</strong> F1 — <code>page_view</code> · <code>scroll_75</code> · <code>video_50</code> · <code>brand_search</code>. F1→F2 — <code>lead_magnet_download</code> · <code>bcm_pack_request</code> · <code>quote_form_start</code> · <code>quote_form_submit</code> · <code>callrail_call_qualified</code> · <code>calendly_book</code>. F2 — <code>pre_reno_consult_held</code> · <code>bcm_meeting_held</code> · <code>proposal_sent</code> · <code>contract_signed</code>. F2→F3 — <code>build_milestone_handover</code> · <code>gift_kit_delivered</code> · <code>referral_submitted</code> · <code>cross_lob_inquiry</code>. F3 — <code>nps_promoter</code> · <code>review_left</code> · <code>case_study_consent</code> · <code>second_lob_purchase</code> · <code>third_lob_purchase</code> · <code>advocacy_event</code>.</li>
        <li><strong>Server-side GTM (sGTM) Cloudflare Worker:</strong> Deployed at <code>sgtm.ybmt.com.au</code> · receives client-side events · scrubs PII (email→hash · phone→hash · IP→country) · forwards to GA4 Measurement Protocol · Meta CAPI v18 · Google Ads Enhanced Conversions · LinkedIn Insight server-side conversions API. Worker code lives in <code>/cloudflare-workers/sgtm/</code> · maintained by YDT Tech Lead · code-review by Carla CFO before deploy.</li>
        <li><strong>Consent layer:</strong> CMP (Cookiebot) wired to Google Consent Mode v2 · sGTM honours consent state · denied-consent users get cookieless ping (basic count only). GDPR + Australian Privacy Act + Privacy Amendment (Notifiable Data Breaches) compliant. Carla CFO signs off on the consent doctrine before any launch.</li>
        <li><strong>Forbidden states (audit-triggers):</strong> Any URL deployed without 5 UTMs · any GA4 event not in the locked 24-list · any sGTM forward without PII-scrub · any conversion-event fired client-side bypassing sGTM. YDT handover audit (§12G) verifies all 4 daily.</li>
        <li><strong>QA cadence:</strong> Daily — automated UTM-presence crawler scans all 540 URLs (P-04 SEO matrix) · Slack alert if any drift. Weekly — GA4 event-debugger spot-check (8 random sessions). Monthly — full sGTM payload audit by YDT Tech Lead → Carla CFO sign-off.</li>
      </ol>
    </div>

    {/* 12B MEDDPICC DUAL-BUYER */}
    <div className="kw-block">
      <h3>12B · MEDDPICC Dual-Buyer Scorecard · The Sales-Qualification Truth-Layer</h3>
      <ol>
        <li><strong>Why dual-buyer:</strong> Units-renovations have 2 institutional buyers — the lot-owner Sarah &amp; Mark (signs the contract · funds the works) AND the BCM-coordinator (controls the gate · 6-month default approval delay). A traditional single-buyer MEDDPICC misses the BCM. Units MEDDPICC scores both · BOTH ≥12/21 required to advance from Stage 4 (Pre-Reno Consult held) to Stage 5 (Proposal sent). Doctrine locked in P-08 §8.4 · enforced in HubSpot.</li>
        <li><strong>21-point rubric (7 dimensions × 3 levels):</strong> <strong>M</strong>etrics — does the buyer have $-target/timeline they'll commit to? (3pt). <strong>E</strong>conomic-buyer — confirmed by name + role + signing-authority? (3pt). <strong>D</strong>ecision-criteria — written checklist of what they need to see? (3pt). <strong>D</strong>ecision-process — meeting cadence + sign-off chain mapped? (3pt). <strong>P</strong>aper-process — contract template + insurance + BCM bylaws cleared? (3pt). <strong>I</strong>dentify-pain — articulated in their words, not ours? (3pt). <strong>C</strong>hampion — internal advocate who will defend the decision when we're not in the room? (3pt).</li>
        <li><strong>Lot-owner MEDDPICC (Sarah &amp; Mark):</strong> Score captured at Pre-Reno Consult (P-08 §8.4 minutes 38-52) by sales-lead · entered in HubSpot custom-property <code>meddpicc_lot_owner_score</code>. ≥12/21 required to advance.</li>
        <li><strong>BCM-coordinator MEDDPICC:</strong> Score captured at BCM Approval Meeting (P-08 §8.6) by sales-lead · entered in HubSpot custom-property <code>meddpicc_bcm_score</code>. ≥12/21 required to advance. This is the locked institutional-buyer gate.</li>
        <li><strong>Dual-gate enforcement:</strong> HubSpot Workflow <code>units-deal-progression</code> · automated · checks both scores at Stage 4→5 transition · BLOCKS progression if either &lt;12. Sales-rep override requires Carla CFO Slack-approval (audit-logged).</li>
        <li><strong>Champion verification (the most-missed step):</strong> Champion must be willing to name themselves in writing as advocate · captured via a 1-page <em>Champion Confirmation</em> form signed in the Pre-Reno Consult (lot-owner) or BCM Approval Meeting (BCM). No signed form = Champion score 0/3 = likely sub-12 = deal blocked. This single discipline lifts close-rate from 28% (industry) to 61% (YBMT target).</li>
        <li><strong>F2-stage attribution:</strong> Every Stage 5+ deal (proposal sent) MUST have both scores ≥12 captured in HubSpot · Robyn MMM (§12C) only counts F2-conversions where dual-MEDDPICC is verified. Forbidden state: F2-credit claimed without dual-score → audit-flag → Carla CFO review.</li>
      </ol>
    </div>

    {/* 12C ROBYN MMM */}
    <div className="kw-block">
      <h3>12C · Robyn MMM · Marketing Mix Modeling · Units-Tuned 26-Week Adstock</h3>
      <ol>
        <li><strong>Why MMM:</strong> Multi-touch attribution (MTA) breaks for Units because the median F1→F2 lag is 18-26 weeks (BCM approval cycles) and 38% of touch-points are offline (advertorials · trade-shows · BCM-coordinator conversations) where no cookie exists. Meta's open-source Robyn MMM is the doctrinal answer · runs in R · 12-week training window · 26-week adstock decay tuned for Units (vs 4-week Pools · 8-week Termite).</li>
        <li><strong>Channel decomposition (locked · 14 channels):</strong> Google Ads (P-05) · Meta Ads (P-06) · LinkedIn Ads · YouTube (organic) · SEO/organic (P-04) · AEO/LLM-search · Direct/Brand · Email/Klaviyo · Print-Physical (P-11 aggregated) · Partnerships (P-10 aggregated) · Social-organic (P-09) · Sponsorships (P-11 §11E broken out) · Advertorials (P-11 §11G broken out) · Referral-loop (F3 cross-LOB).</li>
        <li><strong>Adstock parameters (locked · Units-tuned):</strong> Geometric decay 0.65 weekly · half-life ~6 weeks · 95% effect captured by week-26. Saturation curve (Hill) — α=2.4 (steeper saturation than Pools α=1.8 because BCM-channel saturates faster).</li>
        <li><strong>Modelled outputs (refreshed monthly):</strong> (a) Channel-level ROAS at F1 · F2 · F3 stages · all 14 channels; (b) Carry-over effect — what % of this-month's revenue is attributable to ad-spend 8/16/24 weeks ago; (c) Diminishing-returns curves — at what spend does each channel saturate; (d) Cross-LOB bowtie — % of Units-spend that drives Pools/Termite F3-conversion (target ≥18%); (e) Budget-optimiser recommendation — re-allocate next month's $-envelope to maximise blended ROAS.</li>
        <li><strong>30× LTV propagation (WS-05 anchor):</strong> Robyn outputs feed into the LTV-economics ledger. F1-CAC ÷ blended-LTV ratio target ≤1:30 across 24-month window. M24 target is the locked Carla CFO commitment: blended Units ROAS 14.6× · cross-LOB-credit-back lifts effective ROAS to 21.4× · LTV ratio 30:1.</li>
        <li><strong>Robyn governance:</strong> YDT Data Scientist runs the model monthly · Carla CFO + YDT Account Director joint sign-off on budget-reallocations &gt;15% any channel. Code lives in <code>/analytics/robyn-units/</code> · R 4.3 + Robyn 3.10.5 · executed on Cloudflare-hosted RStudio container · raw data sourced from GA4 BigQuery export + HubSpot + Klaviyo + CallRail.</li>
        <li><strong>Forbidden states:</strong> (a) Any single-channel ROAS report quoted to stakeholders without Robyn-decomposed context (last-click bias forbidden); (b) Budget-shift &gt;15% on a single channel without Robyn-attribution check; (c) MMM refresh skipped &gt;45 days. All 3 audit-flagged in §12G handover.</li>
      </ol>
    </div>

    {/* 12D PUREPROFILE DBA HEALTH PANEL */}
    <div className="kw-block">
      <h3>12D · Pureprofile DBA Health Panel · The Brand-Equity Truth-Layer</h3>
      <ol>
        <li><strong>Why a brand panel:</strong> Robyn MMM (§12C) measures revenue-attribution. It does NOT measure brand-equity drift — the slow, expensive damage when promise-execution slips. Pureprofile's Distinctive Brand Assets (DBA) Health Panel runs quarterly tracking on a 384-respondent SE-QLD panel (Sarah &amp; Mark demographic) — 6 brand-equity dimensions tracked over time. Locked at $18,000/quarter · $72k/year · classified under P-01 Brand budget (Carla CFO direct).</li>
        <li><strong>6 DBA dimensions tracked (quarterly):</strong> (a) <strong>Unaided awareness</strong> — "name a Brisbane unit-renovation specialist" (Y1 target 18% · M24 target 34%); (b) <strong>Aided awareness</strong> — "have you heard of YBMT" (Y1 28% · M24 52%); (c) <strong>Consideration</strong> — "would you consider for your unit reno" (Y1 14% · M24 28%); (d) <strong>Preference</strong> — "first choice" (Y1 8% · M24 18%); (e) <strong>Promise-association</strong> — unprompted recall of "built like it's our own home" or close paraphrase (Y1 12% · M24 26%); (f) <strong>Category-association</strong> — unprompted recall of "whole-of-home stewardship" or close paraphrase (Y1 6% · M24 14%).</li>
        <li><strong>BCM-coordinator parallel panel (annual · $24k):</strong> 184-respondent BCM-coordinator panel tracks (a) aided awareness · (b) trust-score (1-10 Likert · target ≥7.4) · (c) approval-cycle-time perception (target ≤21 days reported · vs 180-day industry) · (d) recommendation-likelihood (NPS · target ≥48).</li>
        <li><strong>Gift-kit recall sub-study (§11F cross-reference):</strong> Pureprofile re-contacts F3-converted lot-owners at 6/12/18 month intervals · measures gift-kit-recall · neighbour-referral-rate · cross-LOB engagement-rate. Sub-study cost $14k/year · sample 84-respondent rolling cohort.</li>
        <li><strong>Quarterly Pureprofile readout:</strong> 22-page deck delivered to Carla CFO · 6 DBA dimensions trended · BCM panel snapshot · gift-kit sub-study · DBA-decline-alerts (any dimension dropping &gt;15% QoQ triggers Quality Gate review). YDT Brand Director presents at YBMT board · Carla CFO chair.</li>
        <li><strong>Brand-equity → MMM coupling:</strong> Pureprofile DBA quarterly scores feed into Robyn (§12C) as a soft variable — "brand-equity index" — explaining variance that channel-spend alone misses. This is the locked methodology (Carla CFO + YDT Data Scientist · doctrine v1.0).</li>
        <li><strong>Forbidden states:</strong> (a) Promise-association score dropping &gt;15% QoQ without Quality Gate review; (b) BCM trust-score dropping below 7.0/10 without escalation to Carla CFO within 7 days; (c) Pureprofile readout skipped &gt;1 quarter. All 3 audit-flagged in §12G.</li>
      </ol>
    </div>

    {/* 12E MASTER KPI SCORECARD 20-ROW */}
    <div className="kw-block">
      <h3>12E · Master KPI Scorecard · The 20-Row Truth Table Across All 12 Pillars</h3>
      <table className="kw-table">
        <thead><tr><th>#</th><th>KPI</th><th>F-stage</th><th>Source pillar</th><th>Y1 target</th><th>M24 target</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Brand-recall unaided · Sarah &amp; Mark panel</td><td>F1</td><td>P-01 / P-12 §12D</td><td>18%</td><td>34%</td></tr>
          <tr><td>2</td><td>Brand-recall aided · BCM-coordinator panel</td><td>F1</td><td>P-01 / P-12 §12D</td><td>42%</td><td>68%</td></tr>
          <tr><td>3</td><td>Website sessions / month (organic + paid)</td><td>F1</td><td>P-02 / P-04</td><td>34k</td><td>62k</td></tr>
          <tr><td>4</td><td>BCM Approval Pack downloads / month</td><td>F1→F2</td><td>P-03 §3.2</td><td>184/mo</td><td>340/mo</td></tr>
          <tr><td>5</td><td>SEO matrix · top-3 ranking pages (of 540)</td><td>F1</td><td>P-04</td><td>148</td><td>312</td></tr>
          <tr><td>6</td><td>Google Ads qualified leads / month</td><td>F1→F2</td><td>P-05</td><td>92/mo</td><td>164/mo</td></tr>
          <tr><td>7</td><td>Meta Ads qualified leads / month</td><td>F1→F2</td><td>P-06</td><td>68/mo</td><td>124/mo</td></tr>
          <tr><td>8</td><td>Pre-Reno Consults held / month</td><td>F2</td><td>P-08 §8.4</td><td>38/mo</td><td>72/mo</td></tr>
          <tr><td>9</td><td>BCM Approval Meetings held / month</td><td>F2</td><td>P-08 §8.6</td><td>22/mo</td><td>48/mo</td></tr>
          <tr><td>10</td><td>Dual MEDDPICC pass-rate (both ≥12/21)</td><td>F2</td><td>P-12 §12B</td><td>61%</td><td>74%</td></tr>
          <tr><td>11</td><td>Stage 4→5 conversion (Consult → Proposal)</td><td>F2</td><td>P-08 §8.5</td><td>48%</td><td>61%</td></tr>
          <tr><td>12</td><td>Stage 5→7 conversion (Proposal → Contract)</td><td>F2</td><td>P-08 §8.7</td><td>34%</td><td>42%</td></tr>
          <tr><td>13</td><td>Closed-won projects / month</td><td>F2→F3</td><td>P-08 §8.7</td><td>14/mo</td><td>28/mo</td></tr>
          <tr><td>14</td><td>Tier mix (Refresh / Renew / Reset)</td><td>F2</td><td>P-08 §8.9</td><td>52/32/16%</td><td>44/34/22%</td></tr>
          <tr><td>15</td><td>Build-completion gift-kit recall @ 6mo</td><td>F3</td><td>P-11 §11F / P-12 §12D</td><td>88%</td><td>92%</td></tr>
          <tr><td>16</td><td>Neighbour-referral rate @ 90 days</td><td>F3</td><td>P-10 §10.7 / P-11 §11F</td><td>41%</td><td>54%</td></tr>
          <tr><td>17</td><td>Cross-LOB engagement @ 18 months</td><td>F3</td><td>P-10 / P-11 §11F</td><td>28%</td><td>42%</td></tr>
          <tr><td>18</td><td>Blended Units CAC (paid + earned)</td><td>F1→F2</td><td>P-12 §12C</td><td>$1,840</td><td>$1,420</td></tr>
          <tr><td>19</td><td>Blended Units ROAS (Robyn-decomposed)</td><td>F1→F3</td><td>P-12 §12C</td><td>8.4×</td><td>14.6×</td></tr>
          <tr><td>20</td><td>Effective ROAS w/ 50% cross-LOB credit-back</td><td>F3</td><td>P-12 §12C</td><td>11.8×</td><td>21.4×</td></tr>
        </tbody>
      </table>
      <p className="kw-ps"><em>This 20-row scorecard IS the single source of truth for the Carla CFO board readout. Every row sources to a named pillar · every target is dollar-anchored to the 30× LTV economics doctrine (WS-05) · every F-stage maps to the F1→F2→F3 funnel (WS-11). YDT operates against this scorecard · no substitutions.</em></p>
    </div>

    {/* 12F REPORTING CADENCE */}
    <div className="kw-block">
      <h3>12F · Reporting Cadence · Who Reports What When To Whom</h3>
      <ol>
        <li><strong>Daily (automated · Slack):</strong> UTM-presence crawler (§12A) · pacing alerts on Google Ads + Meta Ads (P-05/06 spend &gt;110% of daily-pace = pause) · GA4 anomaly detection (events ±2σ from 28-day baseline). Audience: YDT Performance team · Carla CFO read-only.</li>
        <li><strong>Weekly (Monday 9am AEST · 22-min standup):</strong> Lead-volume by source (F1→F2) · MEDDPICC dual-pass rate · pipeline-stage progression (P-08 §8.1-8.11) · channel-mix actuals vs plan. Audience: YDT Account Director · Carla CFO · YBMT GM Construction. Slide template locked in <code>/reporting/templates/weekly-units-v2.gslides</code>.</li>
        <li><strong>Monthly (1st Wed · 88-min readout):</strong> All 20 KPI rows (§12E) vs target · Robyn MMM refresh (§12C) · channel-budget re-allocation recommendation · Pillar-12 forbidden-state audit (§12G). Audience: Carla CFO · YDT Account Director · YDT Data Scientist · YBMT Board. Deck template: <code>/reporting/templates/monthly-units-board-v3.gslides</code>.</li>
        <li><strong>Quarterly (4th week · 184-min board session):</strong> Pureprofile DBA readout (§12D) · BCM-coordinator panel readout · gift-kit sub-study (§11F) · cross-LOB bowtie analysis · 30× LTV ratio audit. Audience: YBMT Full Board · Carla CFO chair · YDT Account Director presents. This is the locked Quality Gate session — any pillar failing &gt;2 forbidden states triggers full review.</li>
        <li><strong>Annual (Y1 close · 8-hour off-site):</strong> Full 12-pillar audit · all 14 Robyn channels re-tuned · Pureprofile panel re-recruited · MEDDPICC rubric review · YDT performance review. Audience: YBMT Board · YDT senior leadership · Carla CFO · facilitated by external strategic-advisor (rotating · year-1 = Corrina McGowan as YDT founder).</li>
        <li><strong>Reporting forbidden states:</strong> (a) Skipped monthly readout &gt;48 hours late = Quality Gate fail; (b) Robyn refresh skipped &gt;45 days = MMM-data-staleness flag; (c) Pureprofile readout skipped &gt;1 quarter = brand-equity-blindspot flag; (d) Any KPI row showing red (&lt;80% of target) for 2 consecutive months without remediation plan = Carla CFO escalation. All 4 audit-logged in §12G.</li>
      </ol>
    </div>

    {/* 12G FORBIDDEN STATES + YDT HANDOVER AUDIT */}
    <div className="kw-block">
      <h3>12G · Forbidden States &amp; YDT Handover Audit · The Doctrine Enforcement Layer</h3>
      <ol>
        <li><strong>Master forbidden-states ledger (28 items consolidated from all 12 pillars):</strong> Tracked in a single Notion-database <code>doctrine-forbidden-states-units</code> · automated audit-script runs nightly · flags any breach · routes to YDT Account Director Slack with 24-hour remediation SLA · 7-day escalation to Carla CFO.</li>
        <li><strong>The 7 critical forbidden states (Quality Gate triggers):</strong> (a) Promise text outside the 2 sanctioned physical surfaces (P-11 §11I); (b) F2-credit claimed without dual-MEDDPICC ≥12/21 (P-12 §12B); (c) Print/physical artifact deployed without Carla CFO sign-off (P-11 §11I); (d) URL deployed without 5 mandatory UTMs (P-12 §12A); (e) Budget-shift &gt;15% on single channel without Robyn check (P-12 §12C); (f) Pureprofile DBA score dropping &gt;15% QoQ without Quality Gate review (P-12 §12D); (g) Champion Confirmation form missing on closed-won deal (P-12 §12B). Any single occurrence = pillar paused · YDT must remediate before progression.</li>
        <li><strong>YDT handover audit · the 12-pillar checklist:</strong> Before YDT assumes full operational control (target M3 post-engagement), Carla CFO runs a 12-pillar audit · 21 questions per pillar · 252 total checkpoints. ≥232/252 (92%) required to release operational authority. Failed checkpoints rolled into a 30-day remediation plan · Carla CFO chairs weekly remediation standup until 92% threshold cleared.</li>
        <li><strong>The 5 Congruency Doctrine anchors verified in every monthly report (WS-04/01/02/05/11):</strong> (a) <strong>Sarah &amp; Mark persona</strong> — appears in every campaign brief · every creative review · every sales-stage script (P-08); (b) <strong>Whole-of-Home Stewardship category</strong> — appears in every content piece header · every advertorial topic (P-11 §11G); (c) <strong>Built-like-our-own-home promise</strong> — sanctioned text-placements only · audited monthly; (d) <strong>30× LTV economics</strong> — quoted in every board readout · Robyn-attributed (§12C); (e) <strong>F1→F2→F3 funnel</strong> — all 20 KPI rows (§12E) tagged by F-stage · MEDDPICC dual-buyer gate enforced. Any anchor missing from a monthly readout = doctrine-drift flag.</li>
        <li><strong>YDT operational red-lines (contractual):</strong> YDT may NOT (a) deploy a print/physical artifact without Carla CFO sign-off; (b) re-allocate &gt;15% of a channel-budget without Robyn check; (c) modify the 24-event GA4 taxonomy (§12A) without dual sign-off; (d) skip a monthly readout; (e) substitute any stack component (sGTM · Robyn · Pureprofile · HubSpot · Klaviyo · CallRail · GA4) without joint approval. These are MSA clause 4.7.1-4.7.5 · enforceable contractually.</li>
        <li><strong>Annual doctrine refresh:</strong> Every January · the 12-pillar doctrine + Congruency Doctrine v1.0 + Depth Standard v1.0 + Quality Gate doctrine are reviewed by Carla CFO + YDT Account Director · revisions versioned (v1.1, v1.2 ...) · all previous-version assets audited for drift · remediation plan published within 30 days of doctrine-version bump.</li>
        <li><strong>Pillar-12 budget envelope:</strong> Y1 total $342,000 (sGTM Cloudflare $14k · HubSpot Marketing+Sales Hub Pro $48k · Klaviyo $14k · CallRail DNI $18k · Robyn YDT data-science labour $84k · Pureprofile panels $96k · audit tooling + Notion + Slack $24k · YDT Account Director time-allocation $44k). M24 ROAS-attribution-quality target: 92% of revenue attributable through dual-MEDDPICC + Robyn + Pureprofile · vs industry 38% last-click attribution.</li>
      </ol>
    </div>

    <div className="kw-pillar-foot">
      <p><strong>Pillar 12 · Instrumentation · Closed.</strong> 7 sub-sections (12A-12G) · 20 master-KPI rows · 28 forbidden-state ledger · 252-checkpoint YDT handover audit · 5 Congruency Doctrine anchors verified monthly · $342k Y1 envelope · 92% attribution-quality M24 target vs 38% industry default. If Pillar 12 is intact, the entire DOC 6 Units GTM Kit is defensible. If Pillar 12 drifts, every other pillar's claims become unprovable. Carla CFO holds direct authority over §12B (dual-MEDDPICC) · §12C (Robyn) · §12D (Pureprofile) · §12G (handover audit). YDT executes within the locked stack.</p>
      <p><em>DOC 6 · Units Renovations GTM Kit · 11 pillars mounted (P-01/02/03/04/05/06/08/09/10/11/12) · P-07 Email deferred to WS-10 CRM workstream by design · all 5 Congruency Doctrine anchors propagated through every pillar · ready for YDT handover.</em></p>
    </div>
  </section>
)
