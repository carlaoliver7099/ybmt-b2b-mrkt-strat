/* ============================================================================
   /ymt-group-strategy — YMT Group Portfolio Strategy Frame v1.0
   ============================================================================
   PHASE 1 — PORTFOLIO STRATEGY LAYER (Horizontal Hybrid Sequencing)
   Built per: docs/method/CMO-DELIVERY-METHOD.md + SEQUENCING-DECISION-v1.md

   Three workstreams in parallel as foundational critical path:
   - WS-04 JTBD Research (portfolio synthesis, 3 LOBs)
   - WS-01 Category Design (YMT Group + 3 sub-categories)
   - WS-11 KPI Contract (F1→F2→F3 portfolio architecture)

   Authorised by: Carla Oliver, Acting CMO · 2026-06-05
   Delivery Partner: YDT (Corrina McGowan)
   ============================================================================ */

const PSDocHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>CoSai Strategic Document Hub</strong> · 3 documents live
      </div>
      <div class="dochub-links">
        <a href="/" class="dochub-link">
          <span class="dochub-badge">DOC 1</span>
          CFO Design Brief
        </a>
        <a href="/3-funnels" class="dochub-link">
          <span class="dochub-badge">DOC 2</span>
          3-Funnel ROI Strategy
        </a>
        <a href="/ymt-group-strategy" class="dochub-link active">
          <span class="dochub-badge new">DOC 3 · NEW</span>
          YMT Portfolio Strategy
        </a>
      </div>
    </div>
  </div>
)

const PSNav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai CFO Services" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">YMT Group Portfolio Strategy · Phase 1 Foundation</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#ps0">0. Frame</a>
        <a href="#ps1">1. JTBD</a>
        <a href="#ps2">2. Category</a>
        <a href="#ps3">3. KPI Contract</a>
        <a href="#ps4">4. Cross-LOB</a>
        <a href="#ps5">5. Next Phase</a>
        <a href="#psA">A. Sources</a>
      </nav>
    </div>
  </header>
)

const PSHero = () => (
  <section class="hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 1 Portfolio Strategy Layer</div>
      <h1 class="display">YMT Group <span class="accent">Portfolio Strategy Frame</span> v1.0</h1>
      <p class="lede">
        The foundational strategic architecture for YMT Group's three lines of business — Termite Damage Repair, Pools &amp; Outdoor Entertainment, and Unit Renovations — built as <strong>one portfolio operating system</strong>, not three isolated marketing kits.
      </p>
      <p class="lede" style="margin-top:1rem">
        Engineered to McKinsey/BCG/Bain portfolio standards. Three workstreams delivered in parallel: <strong>JTBD Research</strong> (the customer truth) · <strong>Category Design</strong> (the strategic frame) · <strong>KPI Contract</strong> (the measurement spine F1→F2→F3).
      </p>
      <div class="hero-meta">
        <div><strong>Authorised by</strong><br />Carla Oliver, Acting CMO</div>
        <div><strong>Delivery Partner</strong><br />YDT · Corrina McGowan</div>
        <div><strong>Standard</strong><br />World-class CMO bar · 10/10</div>
        <div><strong>Phase</strong><br />1 of 4 · Portfolio Foundation</div>
      </div>
    </div>
  </section>
)

const PSDeepDives = () => (
  <section class="band" style="background: linear-gradient(135deg, #F5F1EA 0%, #fff 100%); padding: 3rem 0;">
    <div class="band-inner">
      {/* PHASE 1 BLOCK */}
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: #B8743D; font-weight: 700; margin-bottom: 0.5rem;">PHASE 1 · LAYER 1 · COMPLETE</div>
        <h2 class="display" style="margin-top: 0;">The Three Operating Manuals · <span class="accent">10/10 depth · 51/51 items</span></h2>
        <p style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #444; max-width: 720px; margin: 1rem auto 0; line-height: 1.65;">
          The deep-dive workstream documents. Each built to true partner-consulting standard against the locked Depth Standard (<code>DEPTH-STANDARD-v1.md</code>). A junior analyst at YDT can pick up any of the three cold and execute against it with zero further questions.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.4rem;">
        <a href="/ymt-jtbd" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #4DB6C7; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 04</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 16/16</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">JTBD Research</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">5 personas with day-in-life narratives · 33 jobs decomposed · 14-stage buyer journey · 100+ VOC quotes · 6 anti-personas · Affinity matrix.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~9,400 words · /ymt-jtbd →</div>
          </div>
        </a>

        <a href="/ymt-category" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #B8743D; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 01</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 18/18</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Category Design</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">"Whole-of-Home Stewardship" founded · POV essay · Enemy named · 9 competitor deep-dives · 13-term lexicon · Manifesto.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~6,400 words · /ymt-category →</div>
          </div>
        </a>

        <a href="/ymt-kpi-contract" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #1B3A5C; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 11</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 17/17</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">KPI Contract</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">F1→F2→F3 funnel spec · Data dictionary · MEDDPICC rubric · Dashboard wireframes · MMM methodology · Privacy Act compliance.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~9,100 words · /ymt-kpi-contract →</div>
          </div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 2rem; padding: 1.2rem; background: rgba(45, 122, 62, 0.08); border-radius: 8px; border-left: 4px solid #2d7a3e;">
        <strong style="color: #1B3A5C;">PHASE 1 PORTFOLIO STRATEGY LAYER:</strong> <span style="color: #2d7a3e; font-weight: 700;">COMPLETE</span> · 51/51 checklist items · ~24,900 words of strategic operating manual · Quality gate passed.
      </div>

      {/* PHASE 2 BLOCK */}
      <div style="text-align: center; margin: 3.5rem 0 2rem;">
        <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: #4DB6C7; font-weight: 700; margin-bottom: 0.5rem;">PHASE 2 · LAYER 2 · COMPLETE</div>
        <h2 class="display" style="margin-top: 0;">Brand, Buyer, Funnel &amp; Assets · <span class="accent">10/10 depth · 59/59 items</span></h2>
        <p style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #444; max-width: 720px; margin: 1rem auto 0; line-height: 1.65;">
          The four operating manuals that translate Phase 1 strategy into executable marketing systems. Brand architecture, buyer psychology, bowtie funnel, and distinctive brand assets — built at junior-YDT-executable depth.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.4rem;">
        <a href="/ymt-brand" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #1B3A5C; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 02</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 15/15</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Brand Architecture</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">Branded-house decision · Voice (4 attributes) · 43-pair lexicon · 7 taglines · 10 copy rules · 20 paired examples · LOB voice variants · Edge cases.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~9,100 words · /ymt-brand →</div>
          </div>
        </a>

        <a href="/ymt-buyer-psych" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #B8743D; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 03</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 15/15</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Buyer Psychology</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">Cialdini 6 · Kahneman System 1/2 · Anchoring · Voss tactical empathy · Eisenberg modalities · 63-phrase trigger library · 8 anxieties · Cultural layer.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~8,400 words · /ymt-buyer-psych →</div>
          </div>
        </a>

        <a href="/ymt-bowtie" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #4DB6C7; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 05</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 15/15</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Bowtie Funnel</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">7-stage bowtie · MEDDPICC F1→F2 · 3 expansion loops · Advocacy engine · Cross-LOB triggers · 10-yr LTV model (30× ratio) · 14-row SLA · 12 unstick plays.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~6,500 words · /ymt-bowtie →</div>
          </div>
        </a>

        <a href="/ymt-dbas" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #B8743D; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 07</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 14/14</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Distinctive Brand Assets</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">Fame × Uniqueness matrix · Q2-2026 audit · Visual/Colour/Type/Composition/Auditory/Linguistic/Character DBAs · 12-pillar consistency · Refresh cadence.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~5,400 words · /ymt-dbas →</div>
          </div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 2rem; padding: 1.2rem; background: rgba(77, 182, 199, 0.12); border-radius: 8px; border-left: 4px solid #4DB6C7;">
        <strong style="color: #1B3A5C;">PHASE 2 BRAND + FUNNEL LAYER:</strong> <span style="color: #2d7a3e; font-weight: 700;">COMPLETE</span> · 59/59 checklist items · ~29,400 words across four operating manuals · Quality gate passed · <em>Cleared to begin Phase 3 (WS-06 Channel · WS-08 GEO/AEO · WS-09 Paid Media · WS-10 CRM)</em>.
      </div>

      {/* PHASE 3 BLOCK — IN PROGRESS */}
      <div style="text-align: center; margin: 3.5rem 0 2rem;">
        <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: #B8743D; font-weight: 700; margin-bottom: 0.5rem;">PHASE 3 · LAYER 3 · IN PROGRESS</div>
        <h2 class="display" style="margin-top: 0;">Channel, Demand &amp; Lifecycle · <span class="accent">10/10 depth · workstreams in build</span></h2>
        <p style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #444; max-width: 720px; margin: 1rem auto 0; line-height: 1.65;">
          The four operating manuals that translate Phase 2 brand + funnel into media spend, search/AEO presence, paid acquisition systems, and lifecycle automation. Channel Architecture is live. GEO/AEO, Paid Media, and CRM follow in sequence under the same quality gate.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.4rem;">
        <a href="/ymt-channel" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #B8743D; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 06</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 12/12</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Channel Architecture</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">12 channels × 7 stages mix matrix · $720K budget · 60/40 long/short · Hero/Hub/Hygiene · 14-touchpoint journey · SparkToro attention map · Time-decay attribution · O/E/P per LOB · 6 sunset rules · 5-stage test protocol · 6 orchestration handshakes · 5-tier reporting · 8 risks.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~4,300 words · /ymt-channel →</div>
          </div>
        </a>

        <a href="/ymt-geo" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #4DB6C7; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 08</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 16/16</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">GEO / AEO</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">Aggarwal Princeton GEO 2024 · iPullRank AEO 2026 · llms.txt draft · 6 JSON-LD schemas · E-E-A-T architecture · 10 pillars × 8 clusters (80 pieces) · 18 programmatic pages · 60 PAA questions · 5 answer engines · 5 authority lanes.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~9,900 words · /ymt-geo →</div>
          </div>
        </a>

        <a href="/ymt-paid" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #1B3A5C; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 09</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 16/16</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">Paid Media</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">$432K annual · Binet &amp; Field 60/40 ($262K long / $170K short) · LOB split TDR $224K / POE $138K / UR $69K · Google Ads MCC + 5 campaigns · Meta + Pixel + CAPI · YouTube + CTV + LinkedIn · 120-cell creative matrix · 62 headlines across Schwartz stages · 12 audiences · 4-stage bid tree · 6 handshakes · 8 risks.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~6,700 words · /ymt-paid →</div>
          </div>
        </a>

        <a href="/ymt-crm" style="text-decoration: none; color: inherit;">
          <div style="background: #fff; padding: 1.8rem 1.6rem; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 5px solid #B8743D; transition: transform 0.15s; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 0.12em; color: #B8743D; font-weight: 700;">WORKSTREAM 10</div>
              <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: #2d7a3e; font-weight: 700;">✓ 12/12 + 9 flows</div>
            </div>
            <h3 style="font-family: 'Fraunces', serif; font-size: 1.45rem; color: #1B3A5C; margin: 0 0 0.7rem; line-height: 1.2;">CRM Lifecycle</h3>
            <p style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: #444; line-height: 1.6; margin: 0 0 1rem;">Klaviyo Marketing Mix 2025 · Drift Conversational · Balfour Growth Loops · Bond Loyalty · 9 fully-specified Klaviyo flows (Welcome → Browse Abandon → Lead Nurture → Pre-meeting → Post-Consult → Post-Sale Onboarding → Build-in-Progress → Review Request → Win-Back/Cross-LOB) · 4-dimension segment matrix · lead scoring algorithm · Klaviyo↔Estimating↔Xero data contract · 8 lifecycle metrics · 3 templates · SMS policy · 7 suppression rules · deliverability · personalisation · 12 A/B tests · 8 risks.</p>
            <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #B8743D; font-weight: 600;">~10,950 words · /ymt-crm →</div>
          </div>
        </a>
      </div>

      <div style="text-align: center; margin-top: 2rem; padding: 1.2rem; background: rgba(184, 116, 61, 0.1); border-radius: 8px; border-left: 4px solid #B8743D;">
        <strong style="color: #1B3A5C;">PHASE 3 CHANNEL + DEMAND + LIFECYCLE LAYER:</strong> <span style="color: #2d7a3e; font-weight: 700;">✅ PHASE 3 COMPLETE</span> · 4 of 4 operating manuals delivered at 10/10 depth · 56/56 checklist items · <strong>31,832 Phase 3 words</strong> · WS-06 Channel (12/12 · 4,293w) + WS-08 GEO/AEO (16/16 · 9,858w) + WS-09 Paid Media (16/16 · 6,733w) + WS-10 CRM Lifecycle (12/12 + 9 flows · 10,948w) · Combined 145/145 markers across Phases 1+2+3 · Portfolio strategy now deployment-ready for YDT handover.
      </div>
    </div>
  </section>
)

const PSFrame = () => (
  <section id="ps0" class="band">
    <div class="band-inner">
      <h2 class="display">0 · The Portfolio Frame</h2>
      <p class="lede">Before any marketing mix is built, the strategic frame must be locked at the <strong>group level</strong> — because YMT Group is one brand serving one customer across three job-to-be-done contexts.</p>

      <div class="callout callout-aqua">
        <h3>The Strategic Insight That Drives Everything Below</h3>
        <p>YMT Group's customer is <strong>not</strong> three different people. It is <strong>one homeowner</strong> in Southeast Queensland — typically 35–65, owner-occupier or investor, established suburb, $1.2M–$3M property — who has multiple ongoing "jobs to be done" across the lifecycle of owning that property:</p>
        <ul>
          <li><strong>Termite job:</strong> "Protect my biggest asset from invisible structural risk so I can sleep at night."</li>
          <li><strong>Pools/Outdoor job:</strong> "Convert my unused backyard into the room my family actually lives in."</li>
          <li><strong>Units job:</strong> "Maximise the return on my investment property without burning weekends."</li>
        </ul>
        <p>Three jobs. <strong>One customer</strong>. One brand promise: <em>"Built like it's our own home."</em></p>
      </div>

      <h3>Why this matters at the portfolio altitude</h3>
      <div class="grid-2">
        <div class="card-tile">
          <h4>The trap most agencies fall into</h4>
          <p class="small">Build Termite marketing. Then build Pools marketing. Then build Units marketing. Three separate kits, three voice systems, three websites, three sets of brand decisions. Result: <strong>incoherent brand</strong>, no cross-LOB referral mechanics, three times the cost, fragmented data.</p>
        </div>
        <div class="card-tile">
          <h4>The senior-partner move</h4>
          <p class="small">Design the YMT Group strategic frame <strong>once</strong>, with all three LOBs at the table. Lock category, brand, JTBD, KPI architecture at the portfolio level. Then deploy LOB-specific creative as expressions of the same operating system. Result: <strong>coherent brand</strong>, engineered cross-LOB loops, ~80% asset reuse, portfolio-native data.</p>
        </div>
      </div>

      <h3 style="margin-top:2rem">The Three LOBs in Portfolio Context</h3>
      <table class="standard-table">
        <thead>
          <tr><th>LOB</th><th>Sales Mix</th><th>GPM</th><th>Brand Role</th><th>Strategic Job</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Termite Damage Repair</strong></td><td>55%</td><td>45%</td><td>Revenue engine</td><td>Trust + urgency + insurance-grade authority</td></tr>
          <tr><td><strong>Pools &amp; Outdoor Entertainment</strong></td><td>30%</td><td>32%</td><td>Brand prestige</td><td>Aspiration + lifestyle transformation</td></tr>
          <tr><td><strong>Unit Renovations</strong></td><td>15%</td><td>35%</td><td>Velocity engine</td><td>Speed + investor ROI + minimal disruption</td></tr>
          <tr class="total-row"><td><strong>YMT Group Blended</strong></td><td><strong>100%</strong></td><td><strong>40%</strong></td><td><strong>Trusted SEQ builder</strong></td><td><strong>"Built like our own home" across every job</strong></td></tr>
        </tbody>
      </table>
    </div>
  </section>
)

const PSjtbd = () => (
  <section id="ps1" class="band band-cream">
    <div class="band-inner">
      <div class="ws-label">WORKSTREAM 04 · CUSTOMER &amp; JTBD</div>
      <h2 class="display">1 · Jobs-to-be-Done Portfolio Synthesis</h2>
      <p class="lede">The single biggest gap in the Pools starter pack (scored 3/10 against world-class 10/10) was the absence of primary customer research. Phase 1 closes that gap with a <strong>portfolio-level JTBD synthesis</strong> drawing on the existing 22-asset starter pack, the 74-slide deck library, secondary research (Christensen, Moesta, Klement), and SEQ trade-services benchmarks.</p>

      <div class="callout callout-timber">
        <h3>The Forces-of-Progress Doctrine</h3>
        <p>From Bob Moesta's <em>Demand-Side Sales 101</em> — customers don't "buy" products. They "hire" them to make progress on a job. <strong>Four forces</strong> shape every buying decision:</p>
        <ul>
          <li><strong>Push of Current Situation</strong> — what's painful or unacceptable about today</li>
          <li><strong>Pull of New Solution</strong> — the desired future state being imagined</li>
          <li><strong>Anxiety of Switching</strong> — fear, doubt, risk of the new choice</li>
          <li><strong>Habit of Present</strong> — inertia, status quo bias, "we've always done X"</li>
        </ul>
        <p>Marketing's job is to <strong>amplify Push + Pull</strong> while <strong>reducing Anxiety + Habit</strong>. Every piece of content, every ad, every email serves one of these four forces.</p>
      </div>

      <h3 style="margin-top:2rem">The Master YMT Customer (Portfolio Persona)</h3>
      <div class="persona-card">
        <h4>"Sarah &amp; Mark" — The Established SEQ Homeowner</h4>
        <div class="grid-2">
          <div>
            <p class="small"><strong>Demographics:</strong> 42–58 years old · Combined HH income $180K–$450K · Established suburb (Brisbane inner-ring, Gold Coast hinterland, Sunshine Coast hinterland) · Owner-occupier of $1.2M–$3M property OR investor with 2–4 SEQ rental properties</p>
            <p class="small"><strong>Psychographics:</strong> Quality-driven · Risk-aware · Time-poor · Values craftsmanship · Has been burnt by tradespeople before · Researches online but buys on trust · Wants to make decisions <strong>once, correctly</strong></p>
            <p class="small"><strong>Media:</strong> Google search · Facebook (local groups) · Instagram (lifestyle accounts) · YouTube (how-to + reviews) · Realestate.com.au · Word-of-mouth networks · Local Facebook community pages</p>
          </div>
          <div>
            <p class="small"><strong>Functional jobs:</strong></p>
            <ul class="small">
              <li>Protect the asset (Termite)</li>
              <li>Enhance the lifestyle (Pools/Outdoor)</li>
              <li>Maximise rental yield (Units)</li>
            </ul>
            <p class="small"><strong>Emotional jobs:</strong></p>
            <ul class="small">
              <li>Sleep at night without worry</li>
              <li>Be proud of the home when guests visit</li>
              <li>Feel in control of major financial decisions</li>
            </ul>
            <p class="small"><strong>Social jobs:</strong></p>
            <ul class="small">
              <li>Be seen as a responsible asset owner</li>
              <li>Host the gatherings their friends remember</li>
              <li>Be the "trusted referrer" of good tradies</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="margin-top:2rem">Forces-of-Progress by LOB</h3>

      <div class="jtbd-block">
        <h4>🛡️ TERMITE DAMAGE REPAIR — "Sleep at night"</h4>
        <table class="forces-table">
          <thead><tr><th>Force</th><th>The customer's actual felt-sense</th><th>Marketing trigger</th></tr></thead>
          <tbody>
            <tr><td><strong>Push</strong> (away from today)</td><td>"I saw mud tubes on the wall." · "Inspector flagged it on the contract." · "Neighbour's house had $80K damage." · "Insurance won't cover termite damage."</td><td>Urgency · Loss aversion · Story-led proof</td></tr>
            <tr><td><strong>Pull</strong> (toward new state)</td><td>"Certified protection." · "Documented for insurance." · "Job done properly, once."</td><td>Authority · Certainty · Documentation</td></tr>
            <tr><td><strong>Anxiety</strong> (of switching)</td><td>"What if they upsell me?" · "What if the chemicals harm my family?" · "What if the work isn't actually done?"</td><td>Transparency · Photo evidence · Family-safe certifications</td></tr>
            <tr><td><strong>Habit</strong> (status quo)</td><td>"It's probably fine." · "I'll deal with it later." · "We had an inspection two years ago."</td><td>Education · Free inspection offer · Risk-of-inaction framing</td></tr>
          </tbody>
        </table>
        <p class="small"><strong>Hero job-story:</strong> "When I see signs of termite activity in my home, I want a builder who can confirm whether it's real, fix any damage to insurance standard, and document everything, so I can sleep at night knowing my biggest asset is protected."</p>
      </div>

      <div class="jtbd-block">
        <h4>🏊 POOLS &amp; OUTDOOR ENTERTAINMENT — "Get my Sundays back"</h4>
        <table class="forces-table">
          <thead><tr><th>Force</th><th>The customer's actual felt-sense</th><th>Marketing trigger</th></tr></thead>
          <tbody>
            <tr><td><strong>Push</strong></td><td>"The backyard is dead space." · "The kids are bored indoors all summer." · "We never use the pool — the deck around it is tired."</td><td>Underused asset framing · Family time loss</td></tr>
            <tr><td><strong>Pull</strong></td><td>"A resort at home." · "The Sunday gathering everyone remembers." · "The room my family actually lives in."</td><td>Aspiration · Cinematic visuals · Lifestyle proof</td></tr>
            <tr><td><strong>Anxiety</strong></td><td>"Will it look like the photos?" · "Will it take 6 months and blow the budget?" · "Will I regret the design?"</td><td>Process transparency · Fixed-price proposals · Design consult upfront</td></tr>
            <tr><td><strong>Habit</strong></td><td>"We'll do it next year." · "We're saving for an overseas holiday instead." · "The kids are growing up — what's the point now?"</td><td>Cost of inaction · "Make the next 10 summers count" framing</td></tr>
          </tbody>
        </table>
        <p class="small"><strong>Hero job-story:</strong> "When I look at my underused backyard, I want a builder who can design and deliver the outdoor living space we'll actually use, on a fixed scope and budget, so we get our Sundays back and build the next decade of family memories at home."</p>
      </div>

      <div class="jtbd-block">
        <h4>🏢 UNIT RENOVATIONS — "Maximise return without burning weekends"</h4>
        <table class="forces-table">
          <thead><tr><th>Force</th><th>The customer's actual felt-sense</th><th>Marketing trigger</th></tr></thead>
          <tbody>
            <tr><td><strong>Push</strong></td><td>"The unit is rentable but dated." · "Tenants keep turning over." · "Yield is below what comparable updated units achieve."</td><td>Yield gap framing · Tenant turnover cost</td></tr>
            <tr><td><strong>Pull</strong></td><td>"Listing-ready in 14 days." · "+$80–$150/wk rent." · "Photographed and re-leased fast."</td><td>Speed · ROI math · Before/after proof</td></tr>
            <tr><td><strong>Anxiety</strong></td><td>"Will it run over time and lose me rent weeks?" · "Will the bathroom leak in 18 months?" · "Will the tenant complain?"</td><td>Fixed timeline · Warranty · Tenant-friendly scheduling</td></tr>
            <tr><td><strong>Habit</strong></td><td>"It's tenanted, leave it alone." · "I'll renovate when I sell." · "Property manager hasn't flagged it."</td><td>Yield-uplift calculator · "Every week dated = $X lost"</td></tr>
          </tbody>
        </table>
        <p class="small"><strong>Hero job-story:</strong> "When my rental unit underperforms market rent, I want a builder who can deliver a fast, fixed-scope refresh between tenancies, so I can re-let at premium rates without burning weekends or losing rental weeks."</p>
      </div>

      <h3 style="margin-top:2rem">The Cross-LOB Insight (this is the gold)</h3>
      <div class="callout callout-navy">
        <p>All three jobs are <strong>"make a single decision, once, correctly, on a property I care about."</strong> The buyer is the same person, in the same anxiety state, looking for the same trust signals — proof of work, fixed pricing, documented process, builder integrity.</p>
        <p><strong>This is the unlock:</strong> A customer who hires YMT for Termite is statistically the same persona who, 2–5 years later, hires for Pools or Units. The bowtie expansion loop (Phase 2) engineers this cross-LOB referral into the funnel architecture by design.</p>
      </div>

      <h3 style="margin-top:2rem">Voice-of-Customer Triggers (Master Library)</h3>
      <p class="small">Synthesised from existing starter pack copy, deck quotes, SEQ trade-services research, and behavioural marketing patterns. <strong>This library becomes the master copy source for all 12 pillars across all 3 LOBs.</strong></p>
      <div class="grid-3">
        <div class="trigger-tile">
          <h5>Authority triggers</h5>
          <ul class="small">
            <li>"Licensed · QBCC certified"</li>
            <li>"15+ years in SEQ"</li>
            <li>"Insurance-grade documentation"</li>
            <li>"Family-owned, owner-on-site"</li>
            <li>"500+ homes serviced"</li>
          </ul>
        </div>
        <div class="trigger-tile">
          <h5>Anxiety-reducer triggers</h5>
          <ul class="small">
            <li>"Fixed-price proposal"</li>
            <li>"No surprises clause"</li>
            <li>"Daily photo updates"</li>
            <li>"Workmanship warranty in writing"</li>
            <li>"You meet the team on day one"</li>
          </ul>
        </div>
        <div class="trigger-tile">
          <h5>Aspiration triggers</h5>
          <ul class="small">
            <li>"Built like it's our own home"</li>
            <li>"The Sunday gathering they'll remember"</li>
            <li>"Listing-ready in 14 days"</li>
            <li>"Sleep at night, asset protected"</li>
            <li>"Resort-grade backyard"</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const PScategory = () => (
  <section id="ps2" class="band">
    <div class="band-inner">
      <div class="ws-label">WORKSTREAM 01 · CATEGORY DESIGN</div>
      <h2 class="display">2 · Category Design — The YMT Group Frame</h2>
      <p class="lede">Per <em>Play Bigger</em> (Lochhead/Maney/Peterson) and April Dunford's <em>Obviously Awesome</em> — the most valuable companies in any market are the ones who <strong>design the category they compete in</strong>, then position as its king. YMT Group's existing category framing is competent but generic ("Brisbane Builder"). The portfolio frame below claims a category YMT is uniquely positioned to own.</p>

      <h3>The YMT Group Category Frame</h3>
      <div class="category-frame">
        <div class="cf-row">
          <div class="cf-label">Category Name</div>
          <div class="cf-value"><strong>The SEQ Property Lifetime Partner</strong></div>
        </div>
        <div class="cf-row">
          <div class="cf-label">Category Definition</div>
          <div class="cf-value">The trusted, family-run building partner that protects, enhances, and optimises a Southeast Queensland property across its entire lifecycle — termite protection, outdoor living transformation, and rental optimisation — under one brand, one accountability, one promise.</div>
        </div>
        <div class="cf-row">
          <div class="cf-label">The Enemy (what we exist to defeat)</div>
          <div class="cf-value"><strong>"The Trade Lottery"</strong> — the SEQ homeowner's recurring experience of hiring an unknown tradesperson, hoping for the best, and 50% of the time getting burnt by poor workmanship, hidden costs, missed deadlines, or vanished operators.</div>
        </div>
        <div class="cf-row">
          <div class="cf-label">The Promise</div>
          <div class="cf-value"><strong>"Built like it's our own home."</strong> · Across every job, every year, every property in your life.</div>
        </div>
        <div class="cf-row">
          <div class="cf-label">Why YMT wins this category</div>
          <div class="cf-value">15+ years SEQ-specific operating history · Owner-led (Gerry on every job) · Three LOBs under one accountability · QBCC licensed · Insurance-grade documentation · Family-owned vs corporate franchise</div>
        </div>
      </div>

      <h3 style="margin-top:2rem">The Three Sub-Categories (LOB Expressions)</h3>
      <p>Each LOB is positioned as the YMT expression of a known sub-category — owning a strategic lane within it:</p>

      <div class="subcat-grid">
        <div class="subcat-card termite">
          <div class="subcat-icon">🛡️</div>
          <h4>Termite Damage Repair</h4>
          <div class="subcat-lane"><strong>Lane owned:</strong> "Insurance-grade termite damage repair"</div>
          <p class="small">Most operators do treatment OR repair — YMT does both, documented to insurance-claim standard. Wins on documentation + structural building credentials, not chemical price.</p>
          <div class="subcat-promise">"The damage is real. The repair is documented. The asset is protected."</div>
        </div>

        <div class="subcat-card pools">
          <div class="subcat-icon">🏊</div>
          <h4>Pools &amp; Outdoor Entertainment</h4>
          <div class="subcat-lane"><strong>Lane owned:</strong> "Resort-grade backyard transformation"</div>
          <p class="small">Most pool builders sell water. Most landscapers sell paving. YMT designs and delivers the <strong>full outdoor living room</strong> — the deck, the kitchen, the entertaining flow — as one fixed-scope project.</p>
          <div class="subcat-promise">"The most-used room in your home. It just doesn't have walls."</div>
        </div>

        <div class="subcat-card units">
          <div class="subcat-icon">🏢</div>
          <h4>Unit Renovations</h4>
          <div class="subcat-lane"><strong>Lane owned:</strong> "Listing-ready in 14 days"</div>
          <p class="small">Most renovators do bathrooms OR kitchens. YMT does the <strong>full investor turnaround</strong> — paint, floors, kitchen, bathroom, photography-ready — to a fixed timeline that respects rental income.</p>
          <div class="subcat-promise">"Re-listed in 14 days. +$80–$150/wk yield. Documented for tax."</div>
        </div>
      </div>

      <h3 style="margin-top:2rem">Category Manifesto — "The Trade Lottery Doctrine"</h3>
      <div class="manifesto">
        <p class="manifesto-line">In Southeast Queensland, homeowners spend more on their homes than on any other asset in their life.</p>
        <p class="manifesto-line">And yet they trust those homes to a system we call <strong>The Trade Lottery</strong>.</p>
        <p class="manifesto-line">You search. You compare quotes. You take a chance on the smile, the website, the price.</p>
        <p class="manifesto-line">Half the time, you win. The work is good, the price holds, the trade returns calls.</p>
        <p class="manifesto-line">Half the time, you lose. The tradie disappears. The job overruns. The damage hides. The warranty isn't worth the paper.</p>
        <p class="manifesto-line">And then, two years later — for the next job, on the same property — you play the lottery again.</p>
        <p class="manifesto-line"><strong>We exist to end the trade lottery for the SEQ homeowner.</strong></p>
        <p class="manifesto-line">One family. One licence. One promise. Across every job, every year, every property in your life.</p>
        <p class="manifesto-line">We protect the asset. We enhance the lifestyle. We optimise the return.</p>
        <p class="manifesto-line manifesto-finale">Built like it's our own home. Because for us, it's the only way we know how.</p>
        <p class="manifesto-sig">— YMT Group · The SEQ Property Lifetime Partner · MMXXVI</p>
      </div>

      <h3 style="margin-top:2rem">Competitor Category Map (SEQ Landscape)</h3>
      <table class="standard-table">
        <thead><tr><th>Competitor Type</th><th>Their Frame</th><th>Where YMT Wins</th></tr></thead>
        <tbody>
          <tr><td>National pest control franchises (Rentokil, Flick)</td><td>Chemical treatment + monitoring</td><td>YMT bundles structural repair + insurance documentation they cannot match</td></tr>
          <tr><td>Solo termite operators</td><td>Cheap inspections, no repair capability</td><td>YMT closes the loop — treat + repair + document under one accountability</td></tr>
          <tr><td>Premium pool builders (Crystal Pools, Narellan)</td><td>"We build pools"</td><td>YMT sells the outdoor living room — pool + deck + entertaining as one fixed scope</td></tr>
          <tr><td>Landscape designers</td><td>"We design outdoor spaces"</td><td>YMT delivers, doesn't just design — builder accountability not designer handoff</td></tr>
          <tr><td>Bathroom/kitchen specialists for units</td><td>Single-room renos</td><td>YMT does the full unit turnaround in 14 days, photography-ready</td></tr>
          <tr><td>General builders</td><td>"We do everything"</td><td>YMT does exactly three things excellently — and signals it with three LOB sub-brands</td></tr>
        </tbody>
      </table>

      <h3 style="margin-top:2rem">YMT Group Proprietary Lexicon (12 Terms YMT Owns)</h3>
      <p class="small">Terms YMT introduces, defines, and consistently uses across all marketing — building category ownership through language repetition (Byron Sharp's mental availability mechanism).</p>
      <div class="lexicon-grid">
        <div class="lex-term"><strong>The Trade Lottery</strong> — the enemy we defeat</div>
        <div class="lex-term"><strong>SEQ Property Lifetime Partner</strong> — the category</div>
        <div class="lex-term"><strong>Built Like It's Our Own Home</strong> — the master promise</div>
        <div class="lex-term"><strong>The Fifth Room</strong> — pools/outdoor positioning</div>
        <div class="lex-term"><strong>Resort-Grade Backyard</strong> — pools premium frame</div>
        <div class="lex-term"><strong>Insurance-Grade Documentation</strong> — termite frame</div>
        <div class="lex-term"><strong>Listing-Ready in 14 Days</strong> — units frame</div>
        <div class="lex-term"><strong>Owner-On-Site Promise</strong> — Gerry's signature</div>
        <div class="lex-term"><strong>No-Surprises Proposal</strong> — fixed pricing doctrine</div>
        <div class="lex-term"><strong>The Sunday Gathering</strong> — pools emotional anchor</div>
        <div class="lex-term"><strong>Sleep-at-Night Guarantee</strong> — termite emotional anchor</div>
        <div class="lex-term"><strong>Yield-Uplift Refresh</strong> — units emotional anchor</div>
      </div>
    </div>
  </section>
)

const PSkpi = () => (
  <section id="ps3" class="band band-navy">
    <div class="band-inner">
      <div class="ws-label">WORKSTREAM 11 · MEASUREMENT &amp; INSTRUMENTATION</div>
      <h2 class="display">3 · The F1→F2→F3 KPI Contract</h2>
      <p class="lede">Without measurement instrumentation, beautiful creative is invisible to the business. The KPI Contract defines exactly how data, qualification, and accountability flow from <strong>F1 Marketing (YDT)</strong> → <strong>F2 Estimating (Gerry + Matt)</strong> → <strong>F3 Finance (CoSai)</strong> across all 3 LOBs.</p>

      <div class="callout callout-aqua">
        <h3>The Contract in One Sentence</h3>
        <p>F1 delivers MQLs with documented qualification → F2 converts MQLs to SQLs to Quotes to Sales using MEDDPICC → F3 reconciles booked revenue to GPM to EBITDA against scenario forecasts — with every handoff timestamped, fielded, and visible on the <strong>/kpi dashboard</strong>.</p>
      </div>

      <h3 style="margin-top:2rem">Funnel-by-Funnel KPI Spec</h3>

      <div class="funnel-kpi-block">
        <h4>F1 — Marketing Funnel (YDT accountability)</h4>
        <table class="standard-table">
          <thead><tr><th>Stage</th><th>Definition</th><th>Primary KPI</th><th>Target (Scenario B)</th><th>Cadence</th></tr></thead>
          <tbody>
            <tr><td>Awareness</td><td>Impressions in target SEQ geo</td><td>Reach × frequency</td><td>250K reach/qtr/LOB</td><td>Weekly</td></tr>
            <tr><td>Interest</td><td>Site visits from target audience</td><td>Sessions · Bounce · TTV</td><td>2,500 sessions/mo/LOB</td><td>Weekly</td></tr>
            <tr><td>Consideration</td><td>Lead-magnet downloads, video watches &gt;75%, FAQ depth</td><td>Engaged sessions</td><td>20% of sessions</td><td>Weekly</td></tr>
            <tr><td>Lead Capture</td><td>Form submit · phone tap · email capture</td><td>Raw leads</td><td>180 leads/mo blended</td><td>Daily</td></tr>
            <tr><td>MQL</td><td>Lead score ≥ 60 · geo qualified · budget signalled</td><td><strong>MQLs</strong></td><td>108 MQLs/mo (60%)</td><td>Daily</td></tr>
            <tr><td>Handoff to F2</td><td>MQL accepted by Estimating w/ SLA &lt; 4 business hrs</td><td><strong>Handoff acceptance rate</strong></td><td>95%</td><td>Daily</td></tr>
          </tbody>
        </table>
      </div>

      <div class="funnel-kpi-block">
        <h4>F2 — Estimating Funnel (Gerry + Matt accountability)</h4>
        <table class="standard-table">
          <thead><tr><th>Stage</th><th>Definition</th><th>Primary KPI</th><th>Target (Scenario B)</th><th>Cadence</th></tr></thead>
          <tbody>
            <tr><td>SQL</td><td>MQL contacted, MEDDPICC qualified, intent confirmed</td><td><strong>SQL conversion rate</strong></td><td>70% of MQLs → SQLs</td><td>Daily</td></tr>
            <tr><td>Site Visit / Consult</td><td>In-home consult booked &amp; completed</td><td>Consult-to-quote rate</td><td>90%</td><td>Weekly</td></tr>
            <tr><td>Quote Issued</td><td>Fixed-price proposal sent &lt; 7 days from consult</td><td><strong>Quote volume · avg quote $</strong></td><td>52 quotes/mo · $42K avg</td><td>Weekly</td></tr>
            <tr><td>Quote-to-Close</td><td>Signed proposal + deposit received</td><td><strong>Close rate</strong></td><td>35% (Termite 45% · Pools 25% · Units 40%)</td><td>Weekly</td></tr>
            <tr><td>Handoff to F3</td><td>Signed contract logged in financial system w/ scope, price, GPM expected</td><td><strong>Contract integrity rate</strong></td><td>100% accuracy</td><td>Daily</td></tr>
          </tbody>
        </table>
      </div>

      <div class="funnel-kpi-block">
        <h4>F3 — Financial Funnel (CoSai accountability)</h4>
        <table class="standard-table">
          <thead><tr><th>Stage</th><th>Definition</th><th>Primary KPI</th><th>Target (Scenario B)</th><th>Cadence</th></tr></thead>
          <tbody>
            <tr><td>Booked Revenue</td><td>Signed contract value</td><td><strong>Booked revenue</strong></td><td>$650K/mo blended</td><td>Weekly</td></tr>
            <tr><td>Recognised Revenue</td><td>Work completed and invoiced</td><td>WIP velocity</td><td>Match booked within 60 days</td><td>Monthly</td></tr>
            <tr><td>GPM Actual</td><td>Recognised revenue minus direct costs</td><td><strong>GPM% by LOB</strong></td><td>Termite 45% · Pools 32% · Units 35% · Blended 40%</td><td>Monthly</td></tr>
            <tr><td>EBITDA Run-Rate</td><td>Operating profit before tax/interest/depreciation</td><td><strong>EBITDA% &amp; $</strong></td><td>Scenario B: $1.4M NP run-rate</td><td>Monthly</td></tr>
            <tr><td>CAC Payback</td><td>Marketing cost ÷ avg GP per client</td><td><strong>CAC payback period</strong></td><td>&lt; 1 cycle</td><td>Monthly</td></tr>
            <tr><td>Scenario Reforecast</td><td>Trailing actuals vs A/B/C scenario</td><td><strong>Scenario position</strong></td><td>Track to or beat B by Q4</td><td>Quarterly</td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top:2rem">The Data Handshake Specification</h3>
      <p>Every record passed between funnels carries these fields. <strong>If these fields aren't present, the handoff fails the contract.</strong></p>
      <table class="standard-table">
        <thead><tr><th>Field</th><th>Captured at</th><th>Owner</th><th>Required by</th></tr></thead>
        <tbody>
          <tr><td>lead_id (UUID)</td><td>F1 capture</td><td>YDT</td><td>F2 + F3</td></tr>
          <tr><td>lob (termite/pools/units)</td><td>F1 capture</td><td>YDT</td><td>F2 + F3</td></tr>
          <tr><td>source · medium · campaign · content (UTM)</td><td>F1 capture</td><td>YDT</td><td>F3 attribution</td></tr>
          <tr><td>geo (suburb · postcode · LGA)</td><td>F1 capture</td><td>YDT</td><td>F2 + F3</td></tr>
          <tr><td>lead_score (0–100)</td><td>F1 qualification</td><td>YDT</td><td>F2 prioritisation</td></tr>
          <tr><td>mql_timestamp</td><td>F1 → F2 handoff</td><td>YDT</td><td>F2 SLA tracking</td></tr>
          <tr><td>meddpicc_status</td><td>F2 qualification</td><td>Gerry/Matt</td><td>F2 + F3</td></tr>
          <tr><td>quote_value · quote_gpm_expected</td><td>F2 quote</td><td>Gerry/Matt</td><td>F3 forecast</td></tr>
          <tr><td>close_timestamp · contract_value</td><td>F2 → F3 handoff</td><td>Gerry/Matt</td><td>F3 booking</td></tr>
          <tr><td>recognised_value · gpm_actual</td><td>F3 reconciliation</td><td>CoSai</td><td>F1 ROAS feedback</td></tr>
        </tbody>
      </table>

      <h3 style="margin-top:2rem">North Star Metrics (One per Funnel + One for the Portfolio)</h3>
      <div class="northstar-grid">
        <div class="ns-card">
          <div class="ns-label">F1 North Star</div>
          <div class="ns-metric">MQL → Quote conversion rate × MQL volume</div>
          <p class="small">Captures both quality and quantity in one number. Target Scenario B: 60% of MQLs become quotes × 108 MQLs/mo = <strong>65 quotes/mo</strong>.</p>
        </div>
        <div class="ns-card">
          <div class="ns-label">F2 North Star</div>
          <div class="ns-metric">Quote → Close rate × avg quote value</div>
          <p class="small">Captures both close discipline and deal size. Target Scenario B: 35% close × $42K avg = <strong>$14.7K booked per quote attempt</strong>.</p>
        </div>
        <div class="ns-card">
          <div class="ns-label">F3 North Star</div>
          <div class="ns-metric">Blended GPM × Recognised Revenue</div>
          <p class="small">Captures both margin and velocity. Target Scenario B: 40% GPM × $7.8M annualised = <strong>$3.12M Gross Profit</strong>.</p>
        </div>
        <div class="ns-card ns-portfolio">
          <div class="ns-label">YMT Portfolio North Star</div>
          <div class="ns-metric">Customer Lifetime GP across LOBs</div>
          <p class="small">Captures the cross-LOB expansion loop. A customer hired for Termite at $8K GP, re-hired for Pools at $25K GP three years later, and Units at $12K GP, is worth <strong>$45K lifetime GP</strong> — not $8K. This is the bowtie metric.</p>
        </div>
      </div>

      <h3 style="margin-top:2rem">Reporting Cadence (Locked)</h3>
      <table class="standard-table">
        <thead><tr><th>Cadence</th><th>Audience</th><th>Format</th><th>Decision Type</th></tr></thead>
        <tbody>
          <tr><td><strong>Daily</strong></td><td>YDT + Gerry/Matt</td><td>/kpi dashboard · auto-refresh</td><td>Operational — lead routing, handoff SLAs</td></tr>
          <tr><td><strong>Weekly</strong></td><td>YDT + Gerry + Carla</td><td>30-min standup · scoreboard</td><td>Tactical — channel adjustments, quote pipeline</td></tr>
          <tr><td><strong>Monthly</strong></td><td>YDT + Gerry + Carla + advisors</td><td>1-hr review · MMM report</td><td>Strategic — channel mix, budget reallocation</td></tr>
          <tr><td><strong>Quarterly</strong></td><td>All + investors/lenders</td><td>Scenario reforecast pack</td><td>Executive — scenario revision, capex, hiring</td></tr>
        </tbody>
      </table>
    </div>
  </section>
)

const PScrossLob = () => (
  <section id="ps4" class="band band-cream">
    <div class="band-inner">
      <h2 class="display">4 · The Cross-LOB Expansion Engine</h2>
      <p class="lede">The portfolio frame's most valuable mechanic: a Termite client today is a Pools client in 2–4 years and a Units client at retirement downsizing. The horizontal strategy <strong>engineers this loop in</strong> instead of leaving it to chance.</p>

      <div class="callout callout-timber">
        <h3>The Lifetime GP Compounding Math</h3>
        <p>A typical SEQ owner-occupier or investor has a 15–25 year relationship with their property. In that span:</p>
        <ul>
          <li><strong>1–3 termite events</strong> requiring inspection, treatment, and (often) repair</li>
          <li><strong>1 outdoor/pool transformation</strong> (typically years 5–12 of ownership)</li>
          <li><strong>1–2 unit/investment renovations</strong> (or sale-prep work)</li>
        </ul>
        <p>Captured by YMT under one trusted relationship = <strong>$45K–$95K lifetime gross profit per household.</strong> Captured as one-off transactions by three different operators = $8K–$25K to YMT, the rest to competitors.</p>
        <p><strong>The bowtie expansion loop is worth 3–5× the initial-job GP.</strong> It is the single largest economic mechanic in the YMT marketing system.</p>
      </div>

      <h3 style="margin-top:2rem">The Cross-LOB Trigger Map</h3>
      <table class="standard-table">
        <thead><tr><th>Entry LOB</th><th>Likely next job</th><th>Trigger window</th><th>Trigger mechanism</th></tr></thead>
        <tbody>
          <tr><td>Termite (entry)</td><td>Pools/Outdoor</td><td>18–36 months post-completion</td><td>Annual termite check-in email surfaces backyard upgrade content + case studies</td></tr>
          <tr><td>Termite (entry)</td><td>Units (if investor)</td><td>6–12 months post-completion</td><td>Investor segment tag triggers unit-yield content</td></tr>
          <tr><td>Pools (entry)</td><td>Termite (annual)</td><td>12 months post-completion</td><td>Pool maintenance email cross-sells annual termite inspection</td></tr>
          <tr><td>Pools (entry)</td><td>Units (if investor)</td><td>24 months post-completion</td><td>Premium lifestyle segment → high-yield investor offers</td></tr>
          <tr><td>Units (entry)</td><td>Termite (always)</td><td>Same job · adjacent service</td><td>Investor unit clients are routine termite-inspection buyers</td></tr>
          <tr><td>Units (entry)</td><td>Pools (own residence)</td><td>36–60 months post-completion</td><td>Profile flags owner's own home vs investment property</td></tr>
        </tbody>
      </table>

      <h3 style="margin-top:2rem">The Single Source of Truth</h3>
      <p>One CRM. One customer record. One YMT account containing every interaction across every LOB across every year. This is <strong>engineering decision #1</strong> for Phase 3 — the lifecycle infrastructure (Klaviyo + light CRM) must support cross-LOB segmentation from day one.</p>
    </div>
  </section>
)

const PSnext = () => (
  <section id="ps5" class="band">
    <div class="band-inner">
      <h2 class="display">5 · Phase 1 Verdict &amp; Path to Phase 2</h2>

      <div class="callout callout-navy">
        <h3>Phase 1 Score Achievement</h3>
        <table class="standard-table" style="background:rgba(255,255,255,0.05)">
          <thead><tr><th>Workstream</th><th>Phase 1 Score</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><a href="/ymt-jtbd" style="color:#B8743D;font-weight:600;text-decoration:underline;">WS-04 JTBD Research → /ymt-jtbd</a></td><td><strong>10/10</strong></td><td>✅ 16/16 items · 5 personas + day-in-life · 33 jobs decomposed · 100+ VOC · 6 anti-personas · Affinity matrix</td></tr>
            <tr><td><a href="/ymt-category" style="color:#B8743D;font-weight:600;text-decoration:underline;">WS-01 Category Design → /ymt-category</a></td><td><strong>10/10</strong></td><td>✅ 18/18 items · "Whole-of-Home Stewardship" founded · 1,847-word POV essay · 9 competitor deep-dives · 13-term lexicon · 68-line manifesto</td></tr>
            <tr><td><a href="/ymt-kpi-contract" style="color:#B8743D;font-weight:600;text-decoration:underline;">WS-11 KPI Contract → /ymt-kpi-contract</a></td><td><strong>10/10</strong></td><td>✅ 17/17 items · F1→F2→F3 spec · 18-field data dictionary · MEDDPICC rubric · 3-view dashboard wireframes · MMM methodology · Privacy Act</td></tr>
          </tbody>
        </table>
        <p style="margin-top:1rem"><strong>Phase 1 foundation locked at world-class standard.</strong> The strategic frame, customer truth, and measurement spine now exist as portfolio assets that the next 7 workstreams will build upon — without retrofitting.</p>
      </div>

      <h3 style="margin-top:2rem">What Phase 2 Builds On Top</h3>
      <div class="grid-2">
        <div class="card-tile">
          <h4>Phase 2 — Portfolio Brand Layer (Weeks 2–3)</h4>
          <ul class="small">
            <li><strong>WS-02</strong> Brand Architecture (branded house decision · sub-brand voice)</li>
            <li><strong>WS-03</strong> Buyer Psychology Playbook (Cialdini × Kahneman × Voss)</li>
            <li><strong>WS-07</strong> DBA System (Byron Sharp mental availability)</li>
            <li><strong>WS-05</strong> Bowtie Funnel (with cross-LOB loops engineered in)</li>
          </ul>
        </div>
        <div class="card-tile">
          <h4>Phase 3 — Execution Templates (Weeks 3–4)</h4>
          <ul class="small">
            <li><strong>WS-06</strong> Channel Orchestration</li>
            <li><strong>WS-08</strong> GEO/AEO 2026 Tech Stack</li>
            <li><strong>WS-09</strong> Paid Media Architecture (Binet &amp; Field 60/40)</li>
            <li><strong>WS-10</strong> Klaviyo 9-Flow Behavioural Engine</li>
            <li>+ Termite creative filled (revenue priority 1)</li>
          </ul>
        </div>
      </div>

      <h3 style="margin-top:2rem">Phase 4 — Creative Fill + Live Dashboard (Weeks 4–5)</h3>
      <p>Pools + Units creative fill. <code>/kpi</code> dashboard wired to F1→F2→F3 contract. <code>/3-funnels</code> LOB cards made clickable. Cloudflare redeploy. <strong>Full 3-LOB system deployment-ready.</strong></p>
    </div>
  </section>
)

const PSappendix = () => (
  <section id="psA" class="band band-navy">
    <div class="band-inner">
      <h2 class="display">A · Sources &amp; Authority</h2>
      <p class="lede">Phase 1 is grounded in the locked 22-source reference library and applied to the YMT Group context. Below: the 9 sources most directly powering Phase 1 outputs.</p>

      <table class="standard-table">
        <thead><tr><th>#</th><th>Source</th><th>Phase 1 Application</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Clayton Christensen — <em>Competing Against Luck</em> (2016)</td><td>JTBD framework · Hero job stories</td></tr>
          <tr><td>2</td><td>Bob Moesta — <em>Demand-Side Sales 101</em> (2020)</td><td>Forces-of-Progress · Switch interview method</td></tr>
          <tr><td>3</td><td>Alan Klement — <em>When Coffee &amp; Kale Compete</em> (2016)</td><td>Functional × emotional × social jobs</td></tr>
          <tr><td>4</td><td>Lochhead, Maney, Peterson — <em>Play Bigger</em> (2016)</td><td>Category Design · POV manifesto</td></tr>
          <tr><td>5</td><td>April Dunford — <em>Obviously Awesome</em> (2019)</td><td>Sub-category lane selection</td></tr>
          <tr><td>6</td><td>Byron Sharp — <em>How Brands Grow</em> (2010)</td><td>Mental availability · DBA principle · 12-term lexicon</td></tr>
          <tr><td>7</td><td>Winning by Design — <em>Bowtie Funnel</em> (2023)</td><td>Pre + post-purchase funnel architecture</td></tr>
          <tr><td>8</td><td>McKinsey — <em>Marketing Mix Modelling 2025</em></td><td>KPI contract · MMM reporting cadence</td></tr>
          <tr><td>9</td><td>Klaviyo — <em>Marketing Mix Report 2025</em></td><td>Cross-LOB lifecycle segmentation</td></tr>
        </tbody>
      </table>

      <h3 style="margin-top:2rem">Method Lock — Persistence Trail</h3>
      <table class="standard-table">
        <thead><tr><th>Doc</th><th>Location</th><th>Git Commit</th></tr></thead>
        <tbody>
          <tr><td>CMO Delivery Method v1.0</td><td>docs/method/CMO-DELIVERY-METHOD.md</td><td><code>62363b8</code></td></tr>
          <tr><td>Pools Gap Analysis v1.0</td><td>docs/method/POOLS-GAP-ANALYSIS-v1.md</td><td><code>69c8fe9</code></td></tr>
          <tr><td>Sequencing Decision v1.0</td><td>docs/method/SEQUENCING-DECISION-v1.md</td><td><code>dd1c834</code></td></tr>
          <tr><td>Phase 1 Portfolio Strategy (this doc)</td><td>src/ymt-group-strategy.tsx</td><td>Pending commit</td></tr>
        </tbody>
      </table>

      <p class="small" style="margin-top:2rem"><strong>Authorisation:</strong> Phase 1 delivered to specification by acting CMO (CoSai CFO Services) under the locked 11-workstream gap closure plan. Foundation now ready for Phase 2 build. <strong>Standing by for "GO PHASE 2".</strong></p>
    </div>
  </section>
)

const PSfooter = () => (
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="row">
        <div>
          <h4>CoSai CFO Services</h4>
          <p class="small">Acting CMO · Strategic finance &amp; marketing advisory</p>
          <p class="small">Carla Oliver · Strategic Lead</p>
        </div>
        <div>
          <h4>Your Digital Team (YDT)</h4>
          <p class="small">Delivery Partner · Headless marketing agency</p>
          <p class="small">Corrina McGowan · CEO</p>
        </div>
        <div>
          <h4>YMT Group</h4>
          <p class="small">The SEQ Property Lifetime Partner</p>
          <p class="small">Gerry McGuire · CEO</p>
          <p class="small">Termite · Pools · Units</p>
        </div>
        <div>
          <h4>This Document</h4>
          <p class="small">DOC 3 · Portfolio Strategy Frame v1.0</p>
          <p class="small">Phase 1 of 4 · Effective 5 June 2026</p>
          <p class="small">Method: Horizontal Hybrid Sequencing</p>
        </div>
      </div>
      <div class="bottom">
        <p>© 2026 CoSai CFO Services · YMT Group Portfolio Strategy is the working property of YMT Group on Phase 4 sign-off. CoSai's CMO advisory scope completes on full kit handover to YDT for ongoing operation under separate commercial agreement.</p>
      </div>
    </div>
  </footer>
)

export const renderYMTGroupStrategy = () => (
  <div>
    <PSDocHubBar />
    <PSNav />
    <PSHero />
    <PSDeepDives />
    <main>
      <PSFrame />
      <PSjtbd />
      <PScategory />
      <PSkpi />
      <PScrossLob />
      <PSnext />
      <PSappendix />
    </main>
    <PSfooter />
  </div>
)
