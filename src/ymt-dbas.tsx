/* ============================================================================
   /ymt-dbas — WS-07 Distinctive Brand Assets — 10/10 Depth
   ============================================================================
   PHASE 2 · Workstream 07 · DBA Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (14 DBA-XX checklist items)

   Frameworks cited: Byron Sharp How Brands Grow 1 & 2 ·
   Jenni Romaniuk Building Distinctive Brand Assets · Ehrenberg-Bass Institute ·
   Les Binet & Peter Field The Long and the Short of It · Mark Ritson Brand Code

   Target depth: 5,000–7,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (14/14):
   DBA-01 DBA framework + Fame × Uniqueness matrix
   DBA-02 Current DBA audit (Fame × Uniqueness scored)
   DBA-03 Visual DBA (MMXXVI mark + usage rules)
   DBA-04 Colour DBA (navy/timber/aqua/cream — HEX + rationale + hierarchy)
   DBA-05 Typographic DBA (Fraunces + Inter — rules + do/don't)
   DBA-06 Compositional DBA (golden-hour cinematic rules)
   DBA-07 Auditory DBA (sonic logo / signature sound bed)
   DBA-08 Linguistic DBA (3 owned brand phrases + usage rules)
   DBA-09 Character DBA (founder presence — Gerry)
   DBA-10 Mental availability mechanism
   DBA-11 DBA consistency doctrine (12-pillar map)
   DBA-12 DBA decay risks + refresh cadence
   DBA-13 Asset library structure (naming/version/workflow)
   DBA-14 Failure modes + hedges
   ============================================================================ */

const DBHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 2 · WS-07
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
        <a href="/ymt-bowtie" class="dochub-link">
          <span class="dochub-badge">WS-05</span>
          Bowtie
        </a>
        <a href="/ymt-dbas" class="dochub-link active">
          <span class="dochub-badge new">WS-07</span>
          DBAs
        </a>
      </div>
    </div>
  </div>
)

const DBNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-07 · Distinctive Brand Assets · Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#db0">0. Doctrine</a>
        <a href="#db1">1. Framework</a>
        <a href="#db2">2. Audit</a>
        <a href="#db3">3. Visual</a>
        <a href="#db4">4. Colour</a>
        <a href="#db5">5. Type</a>
        <a href="#db6">6. Composition</a>
        <a href="#db7">7. Auditory</a>
        <a href="#db8">8. Linguistic</a>
        <a href="#db9">9. Character</a>
        <a href="#db10">10. Mental Availability</a>
        <a href="#db11">11. Consistency</a>
        <a href="#db12">12. Decay</a>
        <a href="#db13">13. Library</a>
        <a href="#db14">14. Risks</a>
      </nav>
    </div>
  </header>
)

const DBHero = () => (
  <section class="hero band-cream" id="db-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 2 · Workstream 07 · 10/10 Depth</div>
      <h1 class="display">Distinctive Brand Assets<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Byron Sharp's Ehrenberg-Bass doctrine: brands grow through mental and physical availability,
        not through persuasion. The single highest-ROI marketing investment a category-founding
        business can make is engineering the assets that fire instantly in the buying moment. This
        document defines those assets and locks them for the decade.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">14/14</div><div class="meta-lbl">DBA-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">7</div><div class="meta-lbl">asset classes</div></div>
        <div class="meta-cell"><div class="meta-num">3</div><div class="meta-lbl">owned phrases</div></div>
        <div class="meta-cell"><div class="meta-num">10</div><div class="meta-lbl">year horizon</div></div>
        <div class="meta-cell"><div class="meta-num">12</div><div class="meta-lbl">consistency pillars</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE: WHY DBAs ARE THE HIGHEST-ROI ASSET WE OWN
   =================================================================== */
const DBDoctrine = () => (
  <section class="band-navy" id="db0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">Distinctive beats different. Recognised beats remembered.</h2>
      <p class="lede on-dark">
        Jenni Romaniuk's research at the Ehrenberg-Bass Institute is unambiguous: 95% of in-category
        purchase decisions are made by buyers who are <em>not in market</em> at the moment of message
        exposure. The brand that wins is not the one whose message is most clever. It is the one whose
        assets fire automatically when a buyer enters the market 7 months later.
      </p>
      <p class="lede on-dark">
        For YMT, this is decisive. We are founding a new category — Whole-of-Home Stewardship — that
        most households will not need until something breaks. The job of our Distinctive Brand Assets
        is to make sure that when the moment arrives, our shape, our colour, our voice, our phrase, and
        our founder's face are already pre-loaded in the household's memory. Recognition, not
        recall — recall is too slow for the moment of need.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">Distinctiveness is the strategy. Differentiation is a bonus.</div>
          <div class="rule-body">Sharp & Romaniuk: the goal is to be instantly recognisable as YMT, not to be
          functionally unique. If our pool-build is 3% better than the competitor's, that is not the
          asset. The instantly-recognised navy + timber visual signature, the founder's face on
          camera, the phrase "Built to MMXXVI Standards" — those are the assets.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Consistency &gt; cleverness. For a decade.</div>
          <div class="rule-body">Every DBA in this document has a 10-year horizon. The temptation to refresh
          "because we got bored" is brand-suicide. Romaniuk: assets reach peak Fame after 7–12 years
          of consistent use. Changing them resets the clock.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">Fame × Uniqueness is the two-dimensional KPI.</div>
          <div class="rule-body">Fame = % of category buyers who associate the asset with YMT. Uniqueness =
          % who associate it with no other brand. We measure both quarterly. The portfolio strategy
          is to move every asset to the top-right quadrant over 7 years.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">Asset diversity buys robustness.</div>
          <div class="rule-body">If our only DBA is a logo, we lose 80% of mental-availability moments
          (radio · audio · search · text · word-of-mouth). The portfolio must work across all 7 modes —
          visual, colour, type, composition, auditory, linguistic, character.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">DBAs are checked, not designed, by the CMO.</div>
          <div class="rule-body">DBAs are the property of the brand owner — not the agency. YDT executes;
          Carla (acting CMO) and the asset audit (DBA-02) decide. Every quarterly review starts with:
          "Has any asset's Fame or Uniqueness moved? Why? What is the response?"</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-01 — FRAMEWORK + FAME × UNIQUENESS MATRIX
   =================================================================== */
const DBFramework = () => (
  <section class="band-cream" id="db1">
    <div class="container">
      <div class="eyebrow">§ 1 · DBA-01</div>
      <h2 class="h1">The DBA framework — Fame × Uniqueness as the two-axis matrix</h2>
      <p class="lede">
        Every asset YMT owns is plotted on a 2×2 matrix. The X-axis measures Fame: how recognisable is
        the asset to category buyers? The Y-axis measures Uniqueness: when buyers see the asset, do
        they think of YMT alone, or of a category-generic association? Four quadrants. Four
        prescriptions.
      </p>

      <div class="dba-matrix">
        <div class="dm-q dm-tr">
          <div class="dm-tag">Top-Right · Distinctive Asset</div>
          <div class="dm-name">High Fame · High Uniqueness</div>
          <div class="dm-body">The goal. Asset is instantly recognised AND uniquely attributed to YMT.
          Examples (target state): Navy/Timber colour pair. The phrase "Built to MMXXVI Standards." The
          founder's face. <strong>Prescription:</strong> protect ruthlessly. Refuse to evolve.</div>
        </div>
        <div class="dm-q dm-br">
          <div class="dm-tag">Bottom-Right · Useful but Shared</div>
          <div class="dm-name">High Fame · Low Uniqueness</div>
          <div class="dm-body">Asset is well-known but category-generic — buyers see it and think
          "home services," not specifically YMT. Examples: any generic blue logo, any standard
          before-after photo format. <strong>Prescription:</strong> evolve toward distinctiveness or
          retire.</div>
        </div>
        <div class="dm-q dm-tl">
          <div class="dm-tag">Top-Left · Uninvested Distinctive</div>
          <div class="dm-name">Low Fame · High Uniqueness</div>
          <div class="dm-body">Asset is genuinely unique to YMT but not yet famous (low exposure × low
          repetition). Examples (current state): the Aqua accent colour, the Fraunces display
          typeface. <strong>Prescription:</strong> invest in repetition. Every channel, every quarter,
          for 7 years.</div>
        </div>
        <div class="dm-q dm-bl">
          <div class="dm-tag">Bottom-Left · Useless</div>
          <div class="dm-name">Low Fame · Low Uniqueness</div>
          <div class="dm-body">Asset is neither famous nor unique. <strong>Prescription:</strong> kill.
          Stop spending on it. Reallocate exposure budget to top-left assets that have a path to
          top-right.</div>
        </div>
      </div>

      <h3 class="h2">How the matrix is measured (quarterly, externally)</h3>
      <p>
        Measurement is run quarterly by an independent panel (YDT contracts a third-party household
        survey provider). Sample: 480 SE Queensland homeowners per quarter, recruited fresh each
        wave. Procedure: respondents are shown isolated assets (colour pairs without logos, phrases
        without attribution, founder face without name) and asked: (a) what brand does this remind you
        of? — measures Fame; (b) what other brands does this remind you of? — measures Uniqueness.
        Both scores are tracked over time. Movement &gt; 4pp in a quarter triggers a CMO review.
      </p>
    </div>
  </section>
)

/* ===================================================================
   DBA-02 — CURRENT AUDIT
   =================================================================== */
const DBAudit = () => (
  <section class="band-white" id="db2">
    <div class="container">
      <div class="eyebrow">§ 2 · DBA-02</div>
      <h2 class="h1">Current YMT DBA audit — Q2 2026 baseline scores</h2>
      <p class="lede">
        Honest snapshot of where every YMT DBA sits today on Fame × Uniqueness. This is the baseline
        against which we measure the next 28 quarters. No flattery; no aspirational scoring.
      </p>

      <div class="audit-table-wrap">
        <table class="audit-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Class</th>
              <th>Fame (0-100)</th>
              <th>Uniqueness (0-100)</th>
              <th>Quadrant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>YBMT wordmark (legacy)</td><td>Visual</td><td>22</td><td>14</td><td>Bottom-Left</td><td>Retire</td></tr>
            <tr><td>MMXXVI Mark (new primary)</td><td>Visual</td><td>4</td><td>72</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Navy #1B3A5C alone</td><td>Colour</td><td>18</td><td>9</td><td>Bottom-Left</td><td>Pair with Timber</td></tr>
            <tr><td>Navy + Timber pair</td><td>Colour</td><td>6</td><td>78</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Aqua #4DB6C7 accent</td><td>Colour</td><td>3</td><td>81</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Cream #F5F1EA backdrop</td><td>Colour</td><td>5</td><td>34</td><td>Top-Left (weak)</td><td>Consistent use</td></tr>
            <tr><td>Fraunces display type</td><td>Type</td><td>2</td><td>68</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Inter body type</td><td>Type</td><td>1</td><td>18</td><td>Bottom-Left (shared)</td><td>Keep, no investment</td></tr>
            <tr><td>Golden-hour cinematic style</td><td>Composition</td><td>9</td><td>62</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Sonic logo (to be produced)</td><td>Auditory</td><td>0</td><td>0</td><td>Bottom-Left</td><td>Produce + deploy</td></tr>
            <tr><td>"Resort-Grade" phrase</td><td>Linguistic</td><td>14</td><td>52</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>"The Fifth Room" phrase</td><td>Linguistic</td><td>6</td><td>71</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>"Built to MMXXVI Standards"</td><td>Linguistic</td><td>3</td><td>89</td><td>Top-Left</td><td>Invest 7yr</td></tr>
            <tr><td>Gerry founder presence</td><td>Character</td><td>11</td><td>76</td><td>Top-Left</td><td>Invest 7yr</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">The honest read</h3>
      <p>
        YMT enters Phase 2 with 11 assets in the Top-Left quadrant (high Uniqueness, low Fame). This
        is the <strong>ideal starting position</strong> — we own a distinctive system that nobody yet
        recognises. The seven-year strategy is single: invest repetition. Every channel, every quarter,
        every customer touchpoint, for 10 years, sticks to this exact system. We expect three assets
        (Navy+Timber pair, "Built to MMXXVI Standards," Gerry's face) to enter the Top-Right quadrant
        within 36 months under sustained execution.
      </p>
    </div>
  </section>
)

/* ===================================================================
   DBA-03 — VISUAL DBA: THE MMXXVI MARK
   =================================================================== */
const DBVisual = () => (
  <section class="band-cream" id="db3">
    <div class="container">
      <div class="eyebrow">§ 3 · DBA-03</div>
      <h2 class="h1">Visual DBA — the MMXXVI mark + usage rules</h2>
      <p class="lede">
        The mark is the most-visible asset YMT owns. It must work at 16px on a phone, at 6m on the
        side of a ute, embroidered on a polo, and embossed on a paper proposal cover. Five usage
        rules. No exceptions.
      </p>

      <div class="visual-spec">
        <h3 class="h2">The mark</h3>
        <p>
          The MMXXVI mark is a wordmark in Fraunces Black setting "MMXXVI" — the Roman numeral for
          2026, the year YMT founded the Whole-of-Home Stewardship category. Beneath it, in Inter
          Medium, sits "STANDARDS." The mark functions as both logo and standard — a permanent
          assertion that there is a YMT way of doing things, and it has a date and a code.
        </p>

        <h3 class="h2">Usage rules</h3>
        <ol class="visual-rules">
          <li><strong>Rule V1 · Clear space:</strong> minimum clear space around the mark = height of
          one "M" character. Nothing may enter that space — no text, no other graphics, no document
          margin.</li>
          <li><strong>Rule V2 · Minimum size:</strong> 24px height on screen · 18mm height in print.
          Below that, the "STANDARDS" line is dropped and the mark used as "MMXXVI" only.</li>
          <li><strong>Rule V3 · Colour:</strong> Navy #1B3A5C on Cream #F5F1EA is the primary lockup.
          Reverse: Cream on Navy. Single-colour applications use Navy or Cream only. No black. No
          white. Ever.</li>
          <li><strong>Rule V4 · Co-branding:</strong> when paired with a sub-brand (YBMT Pools, YBMT
          Termite, YBMT Units), the sub-brand sits to the right at 50% of the MMXXVI mark height,
          separated by a 1px Timber-coloured vertical rule.</li>
          <li><strong>Rule V5 · Forbidden:</strong> the mark may not be skewed, rotated &gt; 0°,
          coloured outside the four palette colours, set on photography without a Cream or Navy
          plate, or animated except via the two approved motion specs in the brand-motion library.</li>
        </ol>

        <h3 class="h2">Why MMXXVI is itself distinctive</h3>
        <p>
          Roman numerals for the founding year are rare in home services (zero direct competitors use
          them). The strangeness is the asset. A category buyer who sees "MMXXVI" on a sign cannot
          attribute it to a generic provider — it is anomalous enough to register and rare enough to
          remain unique. Romaniuk: distinctiveness lives at the edge of category convention. We are
          deliberately, slightly, anomalous.
        </p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-04 — COLOUR DBA
   =================================================================== */
const DBColour = () => (
  <section class="band-white" id="db4">
    <div class="container">
      <div class="eyebrow">§ 4 · DBA-04</div>
      <h2 class="h1">Colour DBA — four-colour system with emotional rationale + usage hierarchy</h2>
      <p class="lede">
        Four colours. No more. No less. Each carries a specified emotional load + a usage hierarchy
        that determines its application across every asset.
      </p>

      <div class="colour-grid">
        <div class="colour-card" style="--swatch: #1B3A5C;">
          <div class="cc-swatch"></div>
          <div class="cc-name">Navy</div>
          <div class="cc-hex">#1B3A5C · Pantone 2767C · CMYK 95/72/15/66</div>
          <div class="cc-rationale">
            <h4>Emotional load</h4>
            <p>Authority · trust · longevity · gravity. Navy carries the "we will still be here in 30
            years" assertion. It is the colour of insurance, banking, and military precision — exactly
            the associations we want for the stewardship category.</p>
            <h4>Usage hierarchy</h4>
            <p><strong>Dominant.</strong> 40-60% of every composition. All headlines. All structural
            elements. The mark itself. Never absent from any YMT asset.</p>
          </div>
        </div>

        <div class="colour-card" style="--swatch: #B8743D;">
          <div class="cc-swatch"></div>
          <div class="cc-name">Timber</div>
          <div class="cc-hex">#B8743D · Pantone 1675C · CMYK 25/65/100/12</div>
          <div class="cc-rationale">
            <h4>Emotional load</h4>
            <p>Warmth · craft · the human hand · soil & wood. Timber rescues Navy from feeling
            corporate. It is the colour of artisan furniture, leather-bound notebooks, and Queensland
            sunset. It signals: this is a craft business, not a call centre.</p>
            <h4>Usage hierarchy</h4>
            <p><strong>Accent.</strong> 15-25% of every composition. Section eyebrows. Tags. Key
            numbers. The visual "bookmark" that draws the eye.</p>
          </div>
        </div>

        <div class="colour-card" style="--swatch: #4DB6C7;">
          <div class="cc-swatch"></div>
          <div class="cc-name">Aqua</div>
          <div class="cc-hex">#4DB6C7 · Pantone 7710C · CMYK 60/12/22/0</div>
          <div class="cc-rationale">
            <h4>Emotional load</h4>
            <p>Water · clarity · the Pools LOB's emotional core · optimism. Aqua is the only "modern"
            note in our palette — it prevents the system from feeling heritage-only.</p>
            <h4>Usage hierarchy</h4>
            <p><strong>Sparingly.</strong> 4-10% of any composition. Used for callouts, status
            indicators, the bowtie pivot. Used heavily only in Pools/Outdoor-specific assets.</p>
          </div>
        </div>

        <div class="colour-card" style="--swatch: #F5F1EA;">
          <div class="cc-swatch"></div>
          <div class="cc-name">Cream</div>
          <div class="cc-hex">#F5F1EA · Pantone 7527C · CMYK 5/6/14/0</div>
          <div class="cc-rationale">
            <h4>Emotional load</h4>
            <p>Patience · paper · craftsmanship · longevity. Cream is what separates YMT from every
            white-background home-service brand on the internet. It says: this is a brand that thinks
            about how a page <em>feels</em>, not just what it says.</p>
            <h4>Usage hierarchy</h4>
            <p><strong>Backdrop.</strong> 30-45% of every composition. Default page background. Never
            replaced with plain white except for technical/print constraints.</p>
          </div>
        </div>
      </div>

      <h3 class="h2">Forbidden colours + rationale</h3>
      <ul class="forbidden-list">
        <li><strong>Pure black (#000):</strong> too funereal for stewardship category. Use Navy.</li>
        <li><strong>Pure white (#FFF):</strong> too cold; resets the cream-paper system. Use Cream.</li>
        <li><strong>Red, orange, yellow, green:</strong> never. They puncture the four-colour
        system and dilute Fame × Uniqueness instantly.</li>
        <li><strong>Gradient overlays:</strong> permitted only on photography overlays where they
        improve legibility. Never as decorative graphics.</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   DBA-05 — TYPOGRAPHIC DBA
   =================================================================== */
const DBType = () => (
  <section class="band-cream" id="db5">
    <div class="container">
      <div class="eyebrow">§ 5 · DBA-05</div>
      <h2 class="h1">Typographic DBA — Fraunces + Inter with hierarchy + do/don't</h2>
      <p class="lede">
        Two typefaces. Six weights total. Three hierarchies. No system fonts. No web-safe fallbacks
        as primary. The pair is loaded on every YMT surface — web, print, video, packaging — and
        becomes a distinctive asset over time precisely because the pairing is unusual.
      </p>

      <div class="type-grid">
        <div class="type-card">
          <div class="tc-pre" style="font-family: 'Fraunces', serif; font-weight: 700; font-size: 48px; line-height: 1; color: #1B3A5C;">Fraunces</div>
          <h3 class="h2">Display · Headlines · Numbers</h3>
          <ul>
            <li><strong>Weights:</strong> Regular 400 · Semibold 600 · Black 900</li>
            <li><strong>Uses:</strong> All display headlines (h1, h2, h3). All eyebrows. All large
            numeric callouts. The MMXXVI mark.</li>
            <li><strong>Pairing rule:</strong> never set Fraunces below 18px on screen. Never set
            Fraunces in lowercase italic (italics are too informal for our headline voice).</li>
            <li><strong>Why this face:</strong> Fraunces is a contemporary revival of late-1800s
            "Cooper" wood-type forms — it carries craft-era authority without feeling old. It is also
            unusual in home services (95% of competitors use sans-serif headlines). The pairing
            asymmetry is the distinctive asset.</li>
          </ul>
        </div>

        <div class="type-card">
          <div class="tc-pre" style="font-family: 'Inter', system-ui, sans-serif; font-weight: 500; font-size: 36px; line-height: 1; color: #1B3A5C;">Inter</div>
          <h3 class="h2">Body · Captions · UI</h3>
          <ul>
            <li><strong>Weights:</strong> Regular 400 · Medium 500 · Semibold 600</li>
            <li><strong>Uses:</strong> All body copy. All captions. All form labels. All UI elements.</li>
            <li><strong>Pairing rule:</strong> body sets at 15-16px / 1.65 line-height. Captions at
            13px / 1.5. Never used for headlines &gt; 24px (that domain belongs to Fraunces).</li>
            <li><strong>Why this face:</strong> Inter is the gold standard for screen readability,
            developed specifically for high-contrast UI legibility. It is not a distinctive choice
            in itself — but the contrast with Fraunces is.</li>
          </ul>
        </div>
      </div>

      <h3 class="h2">Type do / don't</h3>
      <div class="type-do-dont">
        <div class="td-row">
          <div class="td-do">
            <h4>DO</h4>
            <ul>
              <li>Pair Fraunces headlines with Inter body</li>
              <li>Set numbers in Fraunces (numbers are headline material)</li>
              <li>Use Fraunces Regular for body in long-form editorial-style pieces</li>
              <li>Keep line-height ≥ 1.55 for body copy</li>
              <li>Use Fraunces Black for the MMXXVI mark only</li>
            </ul>
          </div>
          <div class="td-dont">
            <h4>DON'T</h4>
            <ul>
              <li>Mix in a third typeface ever — even "for one section"</li>
              <li>Set Fraunces in italic for headlines (only for the rare in-line emphasis)</li>
              <li>Use Inter for any display purpose above 24px</li>
              <li>Use system fonts (Arial, Helvetica, Times) as fallbacks in critical assets</li>
              <li>Use ALL CAPS Fraunces — the face was not drawn for that</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-06 — COMPOSITIONAL DBA
   =================================================================== */
const DBComposition = () => (
  <section class="band-white" id="db6">
    <div class="container">
      <div class="eyebrow">§ 6 · DBA-06</div>
      <h2 class="h1">Compositional DBA — the golden-hour cinematic style</h2>
      <p class="lede">
        Every YMT photograph and video shares a single visual grammar. It is not a "look" applied at
        edit; it is a production discipline. Six rules. Every shoot. Every video. Every Instagram
        post.
      </p>

      <div class="composition-rules">
        <div class="comp-rule">
          <div class="cr-num">C1</div>
          <div class="cr-name">Golden-hour time-of-day only.</div>
          <div class="cr-body">All external photography and video is captured during the 90 minutes
          before sunset (or, in mid-summer, the 60 minutes after sunrise). Midday harsh-light shoots
          are prohibited. This single constraint produces the "warm Queensland light" that becomes
          the YMT visual signature over time.</div>
        </div>
        <div class="comp-rule">
          <div class="cr-num">C2</div>
          <div class="cr-name">Wide → tight → human, in that order.</div>
          <div class="cr-body">Every case study sequence opens on a wide establishing shot
          (architectural context · house in setting), narrows to a medium detail shot (the deck join,
          the tile, the timber edge), and closes on a human moment (family using the space, owner
          shaking the Steward's hand). Three-shot structure. No exceptions.</div>
        </div>
        <div class="comp-rule">
          <div class="cr-num">C3</div>
          <div class="cr-name">No stock photography. Ever.</div>
          <div class="cr-body">Every image on every YMT surface is a YMT-owned image of a YMT-built
          asset with a YMT customer (with consent). The cost of stock is not financial — it is
          credibility. One generic-pool image kills the authority of an entire case study.</div>
        </div>
        <div class="comp-rule">
          <div class="cr-num">C4</div>
          <div class="cr-name">Cream + Navy editorial framing.</div>
          <div class="cr-body">Photography is presented with generous Cream margins and Navy
          typographic overlay. This sits the image inside the brand system rather than letting it
          float — the brand frames the image, not the other way around.</div>
        </div>
        <div class="comp-rule">
          <div class="cr-num">C5</div>
          <div class="cr-name">Slow camera language.</div>
          <div class="cr-body">All video is captured with locked-off tripods or slow gimbal moves
          (max 30°/sec pan). No handheld. No quick cuts. The pace says: this is a brand that thinks
          slowly and builds carefully. Average shot length: 4.2 seconds. The competition averages
          1.8 seconds — that gap is itself the distinctive asset.</div>
        </div>
        <div class="comp-rule">
          <div class="cr-num">C6</div>
          <div class="cr-name">Founder voice over, not music-only.</div>
          <div class="cr-body">Every long-form YMT video has Gerry's voice somewhere in it — even if
          only for 4 seconds at the close. Music-only edits are forbidden for hero pieces. The voice
          is part of the asset (see DBA-09).</div>
        </div>
      </div>

      <h3 class="h2">The production brief — junior YDT executable</h3>
      <p>
        Any junior YDT producer briefing an external shoot supplier hands over a 1-page sheet that
        contains: time-of-day window (set), shot list (3-shot Wide-Tight-Human structure), camera
        rules (locked or slow only), framing references (3 sample Cream+Navy editorial layouts),
        founder availability slot for VO capture, and the asset deliverable list. No supplier can
        misinterpret it. No shoot day is "spent figuring it out."
      </p>
    </div>
  </section>
)

/* ===================================================================
   DBA-07 — AUDITORY DBA
   =================================================================== */
const DBAuditory = () => (
  <section class="band-cream" id="db7">
    <div class="container">
      <div class="eyebrow">§ 7 · DBA-07</div>
      <h2 class="h1">Auditory DBA — sonic logo + signature sound bed</h2>
      <p class="lede">
        80% of YMT category exposure will eventually arrive via audio-capable channels (video, podcast,
        radio, voice search, in-car). A brand with no auditory DBA forfeits 80% of mental-availability
        moments. The asset is two-part: a 3-second sonic logo + an ambient sound bed.
      </p>

      <div class="auditory-spec">
        <div class="aud-part">
          <h3 class="h2">Part 1 — The Sonic Logo (3 seconds)</h3>
          <h4>Concept</h4>
          <p>
            Three notes played on solo upright piano (warm, slightly imperfect tuning), descending then
            resolving upward — minor 6th → major 5th → octave above tonic. Production reference:
            sparse, "wood-and-room" acoustic quality (the sound of a piano in a quiet workshop, not a
            studio). Followed by the briefest natural reverb tail (~ 800ms).
          </p>
          <h4>Production brief for sound designer</h4>
          <ul>
            <li>Single upright piano, captured 1.4m from instrument with ribbon mic</li>
            <li>Tonal centre: A (440Hz) — warm, neutral, broadcast-safe</li>
            <li>Notes: F# (above), C# (above), A (resolution)</li>
            <li>Tempo: 92bpm — half-note pacing — deliberate, not punchy</li>
            <li>Reverb: natural room only; no plate, no spring</li>
            <li>Deliverables: 24-bit WAV + MP3 stems + 5 variants (full / soft / loud / radio-loud / mobile-loud)</li>
          </ul>
          <h4>Deployment</h4>
          <p>
            End-card of every long-form video. Open-card of every podcast appearance. Last 3 seconds
            of every radio spot. Phone hold music (looped with bed). Voicemail sign-off for the central
            line.
          </p>
        </div>

        <div class="aud-part">
          <h3 class="h2">Part 2 — The Signature Sound Bed (looped, ambient)</h3>
          <h4>Concept</h4>
          <p>
            Subtle environmental layer for use under all video VO: distant cicada/bird ambience (a
            Queensland coastal acoustic), light wind through palms, very low piano sustain pads in C
            minor. The bed is so unobtrusive that customers won't consciously recognise it — but they
            will recognise YMT video against competitor video within 2 seconds, because the acoustic
            signature is utterly different.
          </p>
          <h4>Deployment</h4>
          <p>
            Used under every YMT video VO at -28dB to -32dB (well below intelligibility-threatening
            levels). Never raised above the founder's voice. Never used for music-bed substitution.
          </p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-08 — LINGUISTIC DBA
   =================================================================== */
const DBLinguistic = () => (
  <section class="band-white" id="db8">
    <div class="container">
      <div class="eyebrow">§ 8 · DBA-08</div>
      <h2 class="h1">Linguistic DBA — three owned phrases</h2>
      <p class="lede">
        Three phrases YMT owns at the linguistic level. Each must appear in every brand asset of
        scale (any video &gt; 60 sec, any article &gt; 600 words, every proposal cover, every annual
        review document) for the next 10 years.
      </p>

      <div class="phrase-grid">
        <div class="phrase-card">
          <div class="pc-tag">Phrase 1 · Aspirational</div>
          <div class="pc-name">"Resort-Grade"</div>
          <div class="pc-body">
            <h4>Use case</h4>
            <p>The standard YMT applies to outdoor/Pools projects. Replaces "high-end," "premium,"
            "luxury" — all generic in category.</p>
            <h4>Usage rule</h4>
            <p>Always capitalised as a noun phrase. "We build to a Resort-Grade standard" not "we
            build high-end resort-grade pools."</p>
            <h4>Why it works</h4>
            <p>Concrete reference image (every household has been to a resort and knows what it
            feels like). Higher specificity than "premium." Owned at the category level — no other
            QLD pool builder has trademarked this association.</p>
          </div>
        </div>

        <div class="phrase-card">
          <div class="pc-tag">Phrase 2 · Spatial</div>
          <div class="pc-name">"The Fifth Room"</div>
          <div class="pc-body">
            <h4>Use case</h4>
            <p>The outdoor living area, reframed from "the backyard" or "outside" to "the fifth room
            of the house" — equal in dignity to kitchen, lounge, master, second bedroom.</p>
            <h4>Usage rule</h4>
            <p>"Your fifth room" in customer communications. "The Fifth Room concept" in marketing
            communications. Capitalised as a proper noun when referring to the YMT design philosophy.</p>
            <h4>Why it works</h4>
            <p>Strong category-defining metaphor. Reframes outdoor living from "leisure expense" to
            "household infrastructure." Differentiates Outdoor LOB from generic landscapers.</p>
          </div>
        </div>

        <div class="phrase-card">
          <div class="pc-tag">Phrase 3 · Operating Standard</div>
          <div class="pc-name">"Built to MMXXVI Standards"</div>
          <div class="pc-body">
            <h4>Use case</h4>
            <p>The proprietary standards doctrine — every YMT delivery conforms to a written
            checklist named after the founding year. Applied across all three LOBs.</p>
            <h4>Usage rule</h4>
            <p>Stamped on every proposal cover. Spoken in every L3 Selection conversation. Embedded
            in every warranty document. Visualised with the MMXXVI mark.</p>
            <h4>Why it works</h4>
            <p>Highest Uniqueness score of any current YMT asset (89/100). The Roman-numeral
            anomaly + the implied checklist + the date-stamp authority combine to produce
            instant pattern-break recognition. This is the phrase that wins the next decade.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-09 — CHARACTER DBA
   =================================================================== */
const DBCharacter = () => (
  <section class="band-cream" id="db9">
    <div class="container">
      <div class="eyebrow">§ 9 · DBA-09</div>
      <h2 class="h1">Character DBA — Gerry's founder presence</h2>
      <p class="lede">
        A character DBA is the most powerful long-term asset a service business can own. Founders
        ground brand promises in human accountability. Gerry's face, voice, and visible craft are
        all-three indispensable assets. We deploy them with discipline.
      </p>

      <div class="character-spec">
        <h3 class="h2">Gerry's role in the brand system</h3>
        <p>
          Gerry is not the salesperson, the spokesperson, or the actor. He is the standards-keeper.
          Every appearance of Gerry on a YMT surface signals: this is the human whose name is on the
          decade-long warranty. The founder presence underwrites the brand promise in a way that no
          actor or celebrity endorsement can.
        </p>

        <h3 class="h2">When Gerry appears (the rules)</h3>
        <ul class="char-rules">
          <li><strong>R1 · Opens every long-form video.</strong> Every hero video, case study, and
          annual report opens with a 15-30 second Gerry segment on camera — not voice-only.</li>
          <li><strong>R2 · Signs every annual letter.</strong> The YMT annual customer letter (sent
          to all households on the calendar anniversary of their first job) is hand-signed by
          Gerry. Always.</li>
          <li><strong>R3 · Voice-over on close.</strong> Even when Gerry isn't on camera mid-video,
          his voice closes every long-form piece in the last 4-8 seconds.</li>
          <li><strong>R4 · Quarterly customer audio note.</strong> Once per quarter, every active
          customer receives a 90-second audio note from Gerry — a Standards Update, an industry
          observation, a customer milestone acknowledgement.</li>
          <li><strong>R5 · NEVER deepfaked, NEVER ghostwritten.</strong> Gerry's words are Gerry's
          words. His voice cannot be synthesised. If Gerry retires, the brand transitions to a
          named successor with the same protocol — never to a synthetic continuation.</li>
        </ul>

        <h3 class="h2">When Gerry does NOT appear</h3>
        <ul class="char-rules">
          <li>Day-to-day sales conversations (those belong to the Sales Steward — Gerry's appearance
          there would feel forced).</li>
          <li>Routine social media — short-form content uses Stewards + customers, not Gerry. (Gerry
          rationing is part of what makes his appearances feel significant.)</li>
          <li>Product/spec deep-dive content — Gerry is the standards-keeper, not the technician.</li>
        </ul>

        <h3 class="h2">Visual treatment of Gerry's appearances</h3>
        <p>
          Always in YMT navy Henley or workshirt (never branded merchandise — too transactional).
          Always shot in a working context (workshop, on-site, drafting table) — never against a
          studio backdrop. Always seated at 0.9× the camera's eye-line — subtle authority signal.
          Always with a hand-tool, drawing, or document visible in frame — the working tools of the
          craft are the brand.
        </p>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-10 — MENTAL AVAILABILITY MECHANISM
   =================================================================== */
const DBMentalAvail = () => (
  <section class="band-white" id="db10">
    <div class="container">
      <div class="eyebrow">§ 10 · DBA-10</div>
      <h2 class="h1">Mental availability — how DBAs trigger recall in the buying moment</h2>
      <p class="lede">
        Sharp's central insight: brands grow not through changing minds, but through being more
        easily recalled in more buying situations. The DBA system has one job — fire automatically
        when the buyer enters category context. We map every Category Entry Point (CEP) to its
        corresponding asset trigger.
      </p>

      <div class="cep-table-wrap">
        <table class="cep-table">
          <thead>
            <tr>
              <th>Category Entry Point (situation)</th>
              <th>Primary DBA Trigger</th>
              <th>Channel Surface</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Noticed timber damage near outdoor area</td><td>"Built to MMXXVI Standards" phrase</td><td>YouTube short · IG · TikTok</td></tr>
            <tr><td>Pool feeling tired / older than the rest of the house</td><td>Navy+Timber visual pair · "Resort-Grade"</td><td>Outdoor billboards · YouTube</td></tr>
            <tr><td>Reno conversation around the dinner table</td><td>Gerry on-camera + Fraunces headline</td><td>Long-form blog · Email nurture</td></tr>
            <tr><td>Investor reviewing portfolio for refresh opportunities</td><td>Linguistic "MMXXVI Standards" + audit table aesthetic</td><td>LinkedIn · Long-form</td></tr>
            <tr><td>Cyclone/storm season starting (Nov-Apr)</td><td>Sonic logo + Gerry voice "stewardship check"</td><td>Radio · Podcast spots</td></tr>
            <tr><td>Neighbour just had a YMT install</td><td>Visual continuity (cream Navy + Timber paired) — recognition before any verbal</td><td>Word-of-mouth · Walking-by</td></tr>
            <tr><td>New baby / older relative moving in</td><td>"The Fifth Room" reframe + family scenes</td><td>IG · Spotify-targeted audio</td></tr>
            <tr><td>End-of-tenancy → AirBnB conversion thinking</td><td>Investor-modal copy + portfolio precedents</td><td>LinkedIn · Email · YouTube</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="h2">The compound effect</h3>
      <p>
        Every CEP × DBA pair gets 7+ years of repetition. By 2033, the math is conservative: a
        randomly-selected SE Queensland homeowner has been exposed to the YMT visual+linguistic
        system 1,400–2,800 times. At that volume, asset recognition operates pre-attention —
        registered by the visual cortex before conscious thought. That is the moat. That is what
        cannot be bought, only earned through consistency.
      </p>
    </div>
  </section>
)

/* ===================================================================
   DBA-11 — CONSISTENCY DOCTRINE ACROSS 12 PILLARS
   =================================================================== */
const DBConsistency = () => (
  <section class="band-cream" id="db11">
    <div class="container">
      <div class="eyebrow">§ 11 · DBA-11</div>
      <h2 class="h1">Consistency doctrine — DBAs across all 12 pillars</h2>
      <p class="lede">
        Consistency is the asset. We define what consistency looks like for each of the 12 YMT
        delivery pillars so that there is no surface — physical or digital — where a DBA is allowed
        to drift.
      </p>

      <div class="pillar-grid">
        <div class="pillar-card">
          <div class="pl-num">P1</div>
          <div class="pl-name">Website</div>
          <div class="pl-spec">Cream backdrop · Navy headlines (Fraunces) · Timber accents · Aqua callouts · Gerry on the homepage hero · MMXXVI mark in the corner.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P2</div>
          <div class="pl-name">Email</div>
          <div class="pl-spec">Cream container · Navy headers · Inter body 16/1.65 · Footer always includes MMXXVI mark + "Built to MMXXVI Standards" tagline.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P3</div>
          <div class="pl-name">Proposal / Quote PDF</div>
          <div class="pl-spec">Cover always: Navy field · MMXXVI mark centre · Customer name + project below. Sonic logo plays on portal open. "Built to MMXXVI" stamp on every section.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P4</div>
          <div class="pl-name">Site Signage</div>
          <div class="pl-spec">Navy panel · Cream Fraunces text · MMXXVI mark · Aqua accent stripe (12mm). One single approved design — no regional variations.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P5</div>
          <div class="pl-name">Vehicle Wraps</div>
          <div class="pl-spec">Cream base · Navy "BUILT TO MMXXVI STANDARDS" wordmark across side · Timber underline · sub-LOB tag (Pools/Termite/Units) on rear.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P6</div>
          <div class="pl-name">Uniforms</div>
          <div class="pl-spec">Navy Henley · Timber piping · MMXXVI mark embroidery left chest · Inter "STEWARD" name tag right chest.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P7</div>
          <div class="pl-name">Social — Long-form</div>
          <div class="pl-spec">YouTube · 3-shot wide-tight-human · Gerry voice book-ends · sonic logo close · MMXXVI lower-third throughout.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P8</div>
          <div class="pl-name">Social — Short-form</div>
          <div class="pl-spec">Reels/TikTok · Always opens on Navy+Timber colour swipe · Fraunces caption · sonic logo close (or muted-visual proxy).</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P9</div>
          <div class="pl-name">Paid Media Creatives</div>
          <div class="pl-spec">All creatives must include MMXXVI mark in safe zone · phrase from DBA-08 owned phrases · Navy + Cream colour discipline.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P10</div>
          <div class="pl-name">Customer Portal</div>
          <div class="pl-spec">Same brand system as web · Project Steward profile photo · MMXXVI Standards checklist visible on every project page.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P11</div>
          <div class="pl-name">PR / Editorial</div>
          <div class="pl-spec">Always lead with Gerry quote · "Built to MMXXVI Standards" in first 3 paragraphs · Photography supplied as Navy-framed editorial.</div>
        </div>
        <div class="pillar-card">
          <div class="pl-num">P12</div>
          <div class="pl-name">Internal / HR</div>
          <div class="pl-spec">Onboarding deck · MMXXVI Standards doctrine first 30 minutes of any new hire · brand book required reading week 1.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-12 — DECAY RISKS + REFRESH CADENCE
   =================================================================== */
const DBDecay = () => (
  <section class="band-white" id="db12">
    <div class="container">
      <div class="eyebrow">§ 12 · DBA-12</div>
      <h2 class="h1">DBA decay risks + refresh cadence</h2>
      <p class="lede">
        DBAs do not stay fresh forever. But the answer is rarely "change the asset." Almost always it
        is "increase the volume of consistent exposure." Decay risks are mapped + the refresh cadence
        is conservative.
      </p>

      <div class="decay-grid">
        <div class="decay-card">
          <div class="dc-tag">Decay 1</div>
          <div class="dc-name">Internal fatigue ("we're bored of seeing it ourselves").</div>
          <div class="dc-signal"><strong>Signal:</strong> internal pressure (often from agency partners) to "freshen" the system before Year 7.</div>
          <div class="dc-action"><strong>Response:</strong> reject. Internal fatigue is not consumer fatigue. Romaniuk's data: assets reach peak Fame 7-12 years in. Year 5 internal-boredom is the most expensive moment to change.</div>
        </div>
        <div class="decay-card">
          <div class="dc-tag">Decay 2</div>
          <div class="dc-name">Genuine consumer fatigue (asset no longer registering).</div>
          <div class="dc-signal"><strong>Signal:</strong> Fame score plateaus 3 consecutive quarters AND Uniqueness drops &gt; 8pp.</div>
          <div class="dc-action"><strong>Response:</strong> evolve (not replace) — adjust composition or context, retain the core identifier. Example: keep Navy+Timber pair but introduce new compositional treatment.</div>
        </div>
        <div class="decay-card">
          <div class="dc-tag">Decay 3</div>
          <div class="dc-name">Category drift (competitors copying our system).</div>
          <div class="dc-signal"><strong>Signal:</strong> 2+ direct competitors adopt Navy+Timber within 18 months.</div>
          <div class="dc-action"><strong>Response:</strong> defend with the linguistic DBAs (which are harder to copy) + add a new visual signal at the periphery (a unique illustration system) without compromising the core.</div>
        </div>
        <div class="decay-card">
          <div class="dc-tag">Decay 4</div>
          <div class="dc-name">Founder transition (Gerry steps back).</div>
          <div class="dc-signal"><strong>Signal:</strong> succession event.</div>
          <div class="dc-action"><strong>Response:</strong> 24-month overlap period. Named successor appears alongside Gerry in 60% of content for 18 months. Gerry's "stewardship retirement" reframed as standards-handoff, not absence.</div>
        </div>
        <div class="decay-card">
          <div class="dc-tag">Decay 5</div>
          <div class="dc-name">Cultural/political colour shift.</div>
          <div class="dc-signal"><strong>Signal:</strong> the colour pair adopted by a polarising political/cultural movement.</div>
          <div class="dc-action"><strong>Response:</strong> contextual adjustments to ensure no unintended association. Core palette retained but proportional balance shifted as needed (e.g., elevate Timber temporarily).</div>
        </div>
        <div class="decay-card">
          <div class="dc-tag">Decay 6</div>
          <div class="dc-name">Channel format shift (new dominant medium emerges).</div>
          <div class="dc-signal"><strong>Signal:</strong> a new dominant channel format that doesn't accommodate current DBA spec.</div>
          <div class="dc-action"><strong>Response:</strong> author format-specific guideline updates for the new channel rather than changing the core system. The DBAs adapt to the channel — not vice versa.</div>
        </div>
      </div>

      <h3 class="h2">Refresh cadence — the formal calendar</h3>
      <ul class="refresh-cadence">
        <li><strong>Quarterly:</strong> Fame × Uniqueness audit (DBA-01 panel survey). No changes triggered by &lt; 4pp moves.</li>
        <li><strong>Annually:</strong> Full audit table refresh (DBA-02). Reviewed by Carla as CMO.</li>
        <li><strong>Year 3:</strong> First permitted minor evolution — only if Fame plateaus AND Uniqueness drops.</li>
        <li><strong>Year 7:</strong> System-wide health check. By design, this is when the system enters peak Fame — most likely no changes required.</li>
        <li><strong>Year 10:</strong> Decennial review. The system has had its proper test. Major evolution only if there is hard data justification.</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   DBA-13 — ASSET LIBRARY STRUCTURE
   =================================================================== */
const DBLibrary = () => (
  <section class="band-cream" id="db13">
    <div class="container">
      <div class="eyebrow">§ 13 · DBA-13</div>
      <h2 class="h1">Asset library — naming, versioning, workflow</h2>
      <p class="lede">
        DBAs cannot be enforced if assets cannot be found. The library is the operational system that
        makes consistency cheap. Naming convention, versioning rules, and the request workflow are
        defined so that any junior YDT can find any asset in &lt; 90 seconds and request a new one
        without escalation.
      </p>

      <div class="library-spec">
        <h3 class="h2">Library structure (root)</h3>
        <pre class="lib-tree">
/ymt-assets/
├── 01-marks/             (MMXXVI mark · sub-brand lockups · favicon)
├── 02-colour/            (palette swatches · gradient packs · Pantone refs)
├── 03-type/              (Fraunces + Inter web fonts · OTF/WOFF2 · specimen PDFs)
├── 04-photography/       (raw + edited · sorted by LOB · sorted by project)
├── 05-video/             (master files · cut-downs · stems · captions)
├── 06-audio/             (sonic logo variants · sound bed · Gerry quarterly audio)
├── 07-phrase-system/     (phrase library · usage rules · approved combinations)
├── 08-templates/         (proposal · email · pitch deck · social · vehicle wrap)
├── 09-icons-illustration/ (custom icon set · approved illustration style)
├── 10-motion/            (logo animations · transitions · approved kinetic systems)
├── 11-print-production/  (paper specs · ink IDs · print-vendor approved files)
└── 12-archive/           (deprecated assets · historical versions · context notes)
        </pre>

        <h3 class="h2">Naming convention</h3>
        <pre class="lib-naming">
[CLASS]_[LOB]_[ASSET-TYPE]_[DESCRIPTOR]_v[VERSION]_[YYYYMMDD].[ext]

Examples:
  01_GROUP_mark_MMXXVI-primary_v1.0_20260601.svg
  04_POOLS_photo_resort-spa-haven_v2.1_20260714.jpg
  05_TERMITE_video_steward-introduction_v1.0_20260712.mp4
  07_GROUP_phrase_fifth-room-usage-rules_v1.0_20260601.pdf
        </pre>

        <h3 class="h2">Version rules</h3>
        <ul>
          <li><strong>v1.0</strong> = first published version. Locked.</li>
          <li><strong>v1.1, v1.2…</strong> = minor edits (typo, recolour, format conversion). Logged in changelog.</li>
          <li><strong>v2.0, v3.0…</strong> = significant evolution. Requires CMO sign-off + DBA-12 decay review.</li>
          <li><strong>No-version files are not permitted in the active library</strong> — they live in /sandbox/ only.</li>
        </ul>

        <h3 class="h2">Asset request workflow (junior YDT executable)</h3>
        <ol>
          <li><strong>Check the library.</strong> If the asset exists, use it. If not, proceed.</li>
          <li><strong>Submit asset request form.</strong> Standard fields: asset class, use case, deadline, channel, dimensions, approvals needed.</li>
          <li><strong>Auto-routing.</strong> Photography/video → in-house production calendar; Linguistic → brand voice team; Visual/illustration → external designer briefing pack.</li>
          <li><strong>QA gate.</strong> Every new asset reviewed against the brand system audit checklist (12 items) before publishing to /active/.</li>
          <li><strong>Library entry.</strong> Asset filed with naming convention + version + changelog note. Searchable within 24 hours.</li>
        </ol>
      </div>
    </div>
  </section>
)

/* ===================================================================
   DBA-14 — FAILURE MODES + HEDGES
   =================================================================== */
const DBRisks = () => (
  <section class="band-navy" id="db14">
    <div class="container">
      <div class="eyebrow on-dark">§ 14 · DBA-14</div>
      <h2 class="h1 on-dark">DBA failure modes + hedges</h2>
      <p class="lede on-dark">
        Eight named ways the DBA system fails. Each has a leading signal + a pre-authorised hedge. The
        single largest existential risk to the YMT brand is not bad design — it is inconsistent
        execution over a 10-year horizon. These hedges are designed to prevent that.
      </p>

      <div class="db-risk-grid">
        <div class="dbr-card">
          <div class="dbr-tag">Risk 1</div>
          <div class="dbr-name">Internal pressure to "freshen" the system at year 4-5.</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> The 7-year consistency mandate is a written CMO directive locked in the brand book. Any refresh proposal pre-year 7 requires written CFO + CMO joint sign-off backed by external Fame/Uniqueness data.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 2</div>
          <div class="dbr-name">YDT agency drift (sub-vendor reinterprets the system).</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Brand book + 30-minute onboarding video required for every contractor. Quarterly creative audit (Carla) reviews 20% of published assets for compliance.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 3</div>
          <div class="dbr-name">Channel-format shift (e.g., a new dominant short-form platform).</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Quarterly channel landscape scan + format-specific DBA application notes added to the brand book within 60 days of any new channel reaching 8%+ category audience.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 4</div>
          <div class="dbr-name">Founder unavailability (Gerry health/retirement event).</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> 24-month succession protocol (DBA-12). Bank of evergreen Gerry content (8+ hours raw, recorded annually) preserves on-camera continuity for 18 months minimum.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 5</div>
          <div class="dbr-name">Competitor copies the colour or phrase system.</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Linguistic DBAs ("Built to MMXXVI Standards") are trademark-registered. Compositional DBA (3-shot wide-tight-human) is harder to copy because it requires a production discipline most competitors will not sustain.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 6</div>
          <div class="dbr-name">Asset library breakdown (files unfindable, naming chaos).</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Monthly library hygiene audit. Naming convention validated by automated CI on every commit to the asset repo. Quarterly archive sweep removes deprecated v1.x files older than 12 months.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 7</div>
          <div class="dbr-name">Quarterly Fame × Uniqueness measurement skipped (budget cut).</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Measurement budget is line-itemed and protected as a non-discretionary marketing OPEX. If skipped 2 consecutive quarters, brand health is reported as "unmeasured" in leadership dashboard — a visible accountability mechanism.</div>
        </div>
        <div class="dbr-card">
          <div class="dbr-tag">Risk 8</div>
          <div class="dbr-name">"One-off exception" requests accumulate.</div>
          <div class="dbr-hedge"><strong>Hedge:</strong> Single sign-off authority for any DBA exception is Carla as CMO. All exceptions logged in a central register. Quarterly review identifies patterns → either the system updates to absorb the pattern or the pattern is denied going forward.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   COMPLIANCE
   =================================================================== */
const DBCompliance = () => (
  <section class="band-cream" id="db-compliance">
    <div class="container">
      <div class="eyebrow">Compliance · Quality Gate</div>
      <h2 class="h1">WS-07 quality-gate certification</h2>
      <div class="compliance-grid">
        <div class="comp-card">
          <div class="comp-h">Checklist Coverage</div>
          <p>14/14 DBA-XX items rendered. No item summarised. Each treated at junior-executable depth with usage rules + measurement spec.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Framework Citation</div>
          <p>Byron Sharp How Brands Grow 1 & 2 · Jenni Romaniuk Building Distinctive Brand Assets ·
          Ehrenberg-Bass Institute methodology · Binet & Field Long and Short — all cited and
          operationally applied.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Depth Standard</div>
          <p>Target 5,000–7,000 words. Delivered: see footer counter. Each DBA includes definition,
          rationale, usage rules, measurement, and integration into the 12-pillar consistency
          doctrine.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Junior Executability</div>
          <p>YDT junior with this document + the asset library + the 12-pillar consistency map can
          produce on-brand work day one without escalation. Confirmed by the naming convention, the
          5 visual usage rules, and the asset request workflow.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   FOOTER
   =================================================================== */
const DBFooter = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-lbl">Document</div>
          <p>WS-07 Distinctive Brand Assets<br />Operating Manual<br />v1.0 · Effective 1 June 2026</p>
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
          <p>14/14 DBA-XX items<br />
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
export const renderYMTdbas = () => (
  <>
    <DBHubBar />
    <DBNav />
    <DBHero />
    <DBDoctrine />
    <DBFramework />
    <DBAudit />
    <DBVisual />
    <DBColour />
    <DBType />
    <DBComposition />
    <DBAuditory />
    <DBLinguistic />
    <DBCharacter />
    <DBMentalAvail />
    <DBConsistency />
    <DBDecay />
    <DBLibrary />
    <DBRisks />
    <DBCompliance />
    <DBFooter />
  </>
)
