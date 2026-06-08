import { UpstreamAnchor } from './upstream-anchor'

const M5HubBar = () => (
  <div style="background: #1B3A5C; color: #F5F1EA; padding: 0.6rem 1.5rem; font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.08em;">
    <strong>CoSai CFO Services · Acting CMO Engagement · YBMT Group</strong> · Phase 5 · Boarding Manifest · v1.0
  </div>
)

const M5Nav = () => (
  <nav style="background: #F5F1EA; border-bottom: 2px solid rgba(27,58,92,0.12); padding: 0.9rem 1.5rem; font-family: 'Inter', sans-serif; font-size: 0.88rem;">
    <a href="/ymt-group-strategy" style="color:#1B3A5C; text-decoration:none; margin-right:1.4rem;">← YBMT Strategy Index</a>
    <a href="/handover" style="color:#1B3A5C; text-decoration:none; margin-right:1.4rem;">A6 Handover</a>
    <a href="/termite-gtm" style="color:#1B3A5C; text-decoration:none; margin-right:1.4rem;">Termite</a>
    <a href="/pools-gtm" style="color:#1B3A5C; text-decoration:none; margin-right:1.4rem;">Pools</a>
    <a href="/units-gtm" style="color:#1B3A5C; text-decoration:none; margin-right:1.4rem;">Units</a>
    <span style="color:#B8743D; font-weight:700;">/ Phase 5 Manifest</span>
  </nav>
)

const M5Hero = () => (
  <section style="background: linear-gradient(135deg, #B8743D 0%, #d18a55 100%); color: #F5F1EA; padding: 4rem 1.5rem; text-align: center;">
    <div style="max-width: 880px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; letter-spacing: 0.18em; color: rgba(245,241,234,0.9); font-weight: 700; margin-bottom: 1.2rem;">PHASE 5 · MARKETING ASSET PRODUCTION · BOARDING MANIFEST v1.0</div>
      <h1 style="font-family: 'Fraunces', serif; font-size: 3rem; line-height: 1.1; margin: 0 0 1.4rem; font-weight: 600;">The empty seats, the boarding order, the luggage allowance.</h1>
      <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.7; max-width: 720px; margin: 0 auto; color: rgba(245,241,234,0.95);">
        Eight asset-lines (AL-01..AL-08) · ~1,165 individual production units across 3 LOBs · sequenced by F-stage dependency · gated by per-asset Definition of Done · congruency-verified against the 5 doctrine anchors. This is the manifest Carla approves <em>before</em> Phase 5 GO.
      </p>
      <div style="font-family: 'Inter', sans-serif; font-size: 0.92rem; color: rgba(245,241,234,0.85); margin-top: 1.8rem; font-weight: 600;">
        Read order: §1 Doctrine entry-gate · §2 The 8 asset-lines · §3 3-LOB allocation matrix · §4 Sequencing wave-plan · §5 Per-AL DoD · §6 Production budget · §7 Quality Gate exit-criteria · §8 Carla sign-off block
      </div>
    </div>
  </section>
)

const M5Doctrine = () => (
  <section style="background: #F5F1EA; padding: 3rem 1.5rem; border-bottom: 1px solid rgba(27,58,92,0.12);">
    <div style="max-width: 920px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.14em; color: #B8743D; font-weight: 700; margin-bottom: 0.6rem;">§1 · PHASE 5 ENTRY-GATE DOCTRINE</div>
      <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; color: #1B3A5C; margin: 0 0 1.2rem;">What must be true before any passenger boards any carriage</h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.75; color: #333; margin: 0 0 1rem;">
        Phase 5 produces the <strong>physical marketing assets</strong> — the headlines, copy, emails, landing pages, PDFs, posts, sales decks, partnership kits — that the doctrine ratified in Phases 1-4 specifies but does not yet contain. Before a single asset is authored, four entry-gate conditions must be true:
      </p>
      <ol style="font-family: 'Inter', sans-serif; font-size: 0.98rem; line-height: 1.85; color: #333;">
        <li><strong>Doctrinal source-of-truth is settled.</strong> The 3 LOB GTM kits (DOC 4/5/6) are committed at <code>d8bc5c0</code> · 33/33 pillars live · A6 Handover signed off in principle by Carla. No more upstream changes during Phase 5 production. If a doctrinal question arises mid-production, work stops on that asset and a Carla CFO ruling is recorded before resumption.</li>
        <li><strong>The 5 Congruency anchors are visible in every asset brief.</strong> Persona Sarah &amp; Mark · Category Whole-of-Home Stewardship · Promise "Built like it's our own home" · Economics 30× LTV · KPI F1→F2→F3 + MEDDPICC + MMM. Every AL- production sheet has these 5 named at the top. If absent · asset rejected at QG.</li>
        <li><strong>Per-asset Definition of Done is locked at this manifest signing.</strong> No moving goalposts. The DoD in §5 below is the contract. YDT (or Carla in current Acting-CMO scope) cannot author against fuzzy targets.</li>
        <li><strong>Production sequencing is wave-based, not parallel-all-at-once.</strong> Per §4, assets ship in 3 waves to allow Quality Gate checks between waves · catching doctrine drift before it propagates across 1,000+ assets. The waterfall is intentional.</li>
      </ol>
      <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.7; color: #555; margin-top: 1rem; font-style: italic;">
        Carla CFO signs this manifest before "PHASE 5 GO" is uttered. The signature is the entry-gate. Once signed, the manifest becomes the operating contract for Phase 5 — modifiable only by joint Carla + (Corrina once YDT engaged) ruling.
      </p>
    </div>
  </section>
)

const M5Section2 = () => (
  <section style="background: #fff; padding: 3.5rem 1.5rem;">
    <div style="max-width: 1080px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.14em; color: #B8743D; font-weight: 700; margin-bottom: 0.6rem;">§2 · THE 8 ASSET-LINES</div>
      <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; color: #1B3A5C; margin: 0 0 1.4rem;">What gets produced · in what unit-count · at what F-stage</h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.75; color: #333; margin: 0 0 1.6rem;">
        Eight asset-lines totaling ~1,165 production units across 3 LOBs. Counts shown are <strong>minimum-ship</strong> — the floor below which the LOB cannot launch. Where a count is "3-LOB blended" the unit-mix is specified in the §3 allocation matrix.
      </p>

      <table style="width:100%; border-collapse:collapse; font-family:'Inter',sans-serif; font-size:0.92rem;">
        <thead>
          <tr style="background:#1B3A5C; color:#F5F1EA;">
            <th style="padding:0.7rem; text-align:left;">AL-#</th>
            <th style="padding:0.7rem; text-align:left;">Asset-line</th>
            <th style="padding:0.7rem; text-align:right;">Units</th>
            <th style="padding:0.7rem; text-align:left;">F-stage</th>
            <th style="padding:0.7rem; text-align:left;">Primary pillar source</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;"><strong>AL-01</strong></td><td style="padding:0.7rem;">Paid-search &amp; paid-social headlines (Google + Meta + LinkedIn)</td><td style="padding:0.7rem; text-align:right;">180</td><td style="padding:0.7rem;">F1</td><td style="padding:0.7rem;">P-05 · P-06</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;"><strong>AL-02</strong></td><td style="padding:0.7rem;">Ad-copy units (RSA descriptions · Meta primary-text · creative briefs)</td><td style="padding:0.7rem; text-align:right;">120</td><td style="padding:0.7rem;">F1→F2</td><td style="padding:0.7rem;">P-05 · P-06</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;"><strong>AL-03</strong></td><td style="padding:0.7rem;">CRM email sequences (Klaviyo · F1-nurture · F2-conversion · F3-loop)</td><td style="padding:0.7rem; text-align:right;">45</td><td style="padding:0.7rem;">F1→F3</td><td style="padding:0.7rem;">P-07 (WS-10 lift-up)</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;"><strong>AL-04</strong></td><td style="padding:0.7rem;">Landing pages (hero · proof · objection-handler · CTA · 1,200-1,800 words ea.)</td><td style="padding:0.7rem; text-align:right;">12</td><td style="padding:0.7rem;">F1→F2</td><td style="padding:0.7rem;">P-02 · P-04</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;"><strong>AL-05</strong></td><td style="padding:0.7rem;">Lead-magnet PDFs (incl. Units BCM Approval Pack 28-32pp · the F2 anchor)</td><td style="padding:0.7rem; text-align:right;">3</td><td style="padding:0.7rem;">F2 (locked)</td><td style="padding:0.7rem;">P-03 §3.2</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;"><strong>AL-06</strong></td><td style="padding:0.7rem;">Sales enablement pack (Pre-Reno Consult deck · proposal templates · Champion form)</td><td style="padding:0.7rem; text-align:right;">~18 docs</td><td style="padding:0.7rem;">F2</td><td style="padding:0.7rem;">P-08 (12-stage pipeline)</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;"><strong>AL-07</strong></td><td style="padding:0.7rem;">Social editorial calendar (180 posts/qtr × 3 LOBs × 4 quarters)</td><td style="padding:0.7rem; text-align:right;">720</td><td style="padding:0.7rem;">F1 · F3</td><td style="padding:0.7rem;">P-09</td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;"><strong>AL-08</strong></td><td style="padding:0.7rem;">Partnership kits (BCM-coordinator outreach · realtor co-marketing · SCA QLD sponsorship deck)</td><td style="padding:0.7rem; text-align:right;">~67 assets</td><td style="padding:0.7rem;">F2</td><td style="padding:0.7rem;">P-10</td></tr>
          <tr style="background:#1B3A5C; color:#F5F1EA; font-weight:700;"><td style="padding:0.8rem;">TOTAL</td><td style="padding:0.8rem;">Across 8 asset-lines × 3 LOBs (where blended)</td><td style="padding:0.8rem; text-align:right;">~1,165</td><td style="padding:0.8rem;">F1→F3</td><td style="padding:0.8rem;">11 pillars sourced</td></tr>
        </tbody>
      </table>

      <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.7; color: #555; margin-top: 1.4rem;">
        <strong>Note on AL-03 lift-up:</strong> CRM emails (P-07 Email) were doctrinally deferred to WS-10 in the engagement scope. For Phase 5, however, AL-03 produces the <em>minimum 45-email ship-set</em> required for Y1 launch (Termite 18 · Pools 12 · Units 15) — the full WS-10 build-out (~120 emails) remains a Q2 post-engagement deliverable.
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.7; color: #555; margin-top: 0.6rem;">
        <strong>Note on AL-05:</strong> Three lead-magnet PDFs is the floor: <em>"Termite Anxiety Resolved" 16pp · "Backyard Dreaming Guide" 24pp · "BCM Approval Pack" 28-32pp</em>. The BCM Approval Pack is the locked F2 anchor for Units — without it, Units P-08 stage-4→5 conversion mechanism is structurally broken.
      </p>
    </div>
  </section>
)

const M5Section3 = () => (
  <section style="background: #F5F1EA; padding: 3.5rem 1.5rem;">
    <div style="max-width: 1080px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.14em; color: #B8743D; font-weight: 700; margin-bottom: 0.6rem;">§3 · 3-LOB ALLOCATION MATRIX</div>
      <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; color: #1B3A5C; margin: 0 0 1.4rem;">How the ~1,165 units split across Termite · Pools · Units</h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.75; color: #333; margin: 0 0 1.4rem;">
        Allocation reflects <strong>sales-mix × buyer-complexity × pillar-intensity</strong> — not equal thirds. Units demands more lead-magnet pages (BCM Approval Pack) · more partnership kits (34 BCM firms + 26 realtors) · more SEO matrix content (540 URLs). Termite demands more paid-search depth (anxiety-driven high-velocity search). Pools demands more social/visual content (transformation imagery).
      </p>

      <table style="width:100%; border-collapse:collapse; font-family:'Inter',sans-serif; font-size:0.92rem;">
        <thead>
          <tr style="background:#1B3A5C; color:#F5F1EA;">
            <th style="padding:0.7rem; text-align:left;">AL-#</th>
            <th style="padding:0.7rem; text-align:left;">Asset-line</th>
            <th style="padding:0.7rem; text-align:center;">Termite</th>
            <th style="padding:0.7rem; text-align:center;">Pools</th>
            <th style="padding:0.7rem; text-align:center;">Units</th>
            <th style="padding:0.7rem; text-align:center;">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;">AL-01</td><td style="padding:0.7rem;">Headlines</td><td style="padding:0.7rem; text-align:center;">72</td><td style="padding:0.7rem; text-align:center;">48</td><td style="padding:0.7rem; text-align:center;">60</td><td style="padding:0.7rem; text-align:center;"><strong>180</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;">AL-02</td><td style="padding:0.7rem;">Ad-copy units</td><td style="padding:0.7rem; text-align:center;">48</td><td style="padding:0.7rem; text-align:center;">36</td><td style="padding:0.7rem; text-align:center;">36</td><td style="padding:0.7rem; text-align:center;"><strong>120</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;">AL-03</td><td style="padding:0.7rem;">CRM emails</td><td style="padding:0.7rem; text-align:center;">18</td><td style="padding:0.7rem; text-align:center;">12</td><td style="padding:0.7rem; text-align:center;">15</td><td style="padding:0.7rem; text-align:center;"><strong>45</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;">AL-04</td><td style="padding:0.7rem;">Landing pages</td><td style="padding:0.7rem; text-align:center;">4</td><td style="padding:0.7rem; text-align:center;">4</td><td style="padding:0.7rem; text-align:center;">4</td><td style="padding:0.7rem; text-align:center;"><strong>12</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;">AL-05</td><td style="padding:0.7rem;">Lead-magnet PDFs</td><td style="padding:0.7rem; text-align:center;">1</td><td style="padding:0.7rem; text-align:center;">1</td><td style="padding:0.7rem; text-align:center;">1</td><td style="padding:0.7rem; text-align:center;"><strong>3</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;">AL-06</td><td style="padding:0.7rem;">Sales enablement docs</td><td style="padding:0.7rem; text-align:center;">6</td><td style="padding:0.7rem; text-align:center;">5</td><td style="padding:0.7rem; text-align:center;">7</td><td style="padding:0.7rem; text-align:center;"><strong>18</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08);"><td style="padding:0.7rem;">AL-07</td><td style="padding:0.7rem;">Social posts (annual)</td><td style="padding:0.7rem; text-align:center;">240</td><td style="padding:0.7rem; text-align:center;">240</td><td style="padding:0.7rem; text-align:center;">240</td><td style="padding:0.7rem; text-align:center;"><strong>720</strong></td></tr>
          <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);"><td style="padding:0.7rem;">AL-08</td><td style="padding:0.7rem;">Partnership kit-assets</td><td style="padding:0.7rem; text-align:center;">14</td><td style="padding:0.7rem; text-align:center;">12</td><td style="padding:0.7rem; text-align:center;">41</td><td style="padding:0.7rem; text-align:center;"><strong>67</strong></td></tr>
          <tr style="background:#1B3A5C; color:#F5F1EA; font-weight:700;"><td style="padding:0.8rem;">TOTAL</td><td style="padding:0.8rem;">per LOB</td><td style="padding:0.8rem; text-align:center;">403</td><td style="padding:0.8rem; text-align:center;">358</td><td style="padding:0.8rem; text-align:center;">404</td><td style="padding:0.8rem; text-align:center;">1,165</td></tr>
        </tbody>
      </table>

      <p style="font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.7; color: #555; margin-top: 1.4rem;">
        <strong>Why the Units count is highest despite Units being 15% of sales mix:</strong> dual-buyer complexity. Every Units asset must work for <em>two</em> audiences (lot-owner Sarah &amp; Mark + BCM-coordinator). Partnership kits alone (AL-08 · 41 units) include 6 Diamond-tier BCM-firm proposals · 14 Gold-tier · 14 Silver-tier · SCA QLD sponsorship deck · ARAMA Silver assets · UDIA Affiliate registration · 26 realtor co-marketing kits. None of these have Termite or Pools equivalents.
      </p>
    </div>
  </section>
)

const M5Section4 = () => (
  <section style="background: #fff; padding: 3.5rem 1.5rem;">
    <div style="max-width: 1080px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.14em; color: #B8743D; font-weight: 700; margin-bottom: 0.6rem;">§4 · SEQUENCING WAVE-PLAN</div>
      <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; color: #1B3A5C; margin: 0 0 1.4rem;">Three waves · F-stage dependency · Quality Gate between each</h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.75; color: #333; margin: 0 0 1.4rem;">
        Phase 5 ships in <strong>3 sequenced waves</strong>, not parallel. Each wave closes with a Quality Gate audit before the next wave commences. This is the same Quality Gate doctrine that protected Phases 1-4 from drift — applied to asset production at scale.
      </p>

      <div style="background:#fff; padding:1.6rem; border-radius:10px; border-left:5px solid #1B3A5C; box-shadow:0 2px 8px rgba(0,0,0,0.06); margin-bottom:1.2rem;">
        <div style="font-family:'Inter',sans-serif; font-size:0.74rem; letter-spacing:0.12em; color:#B8743D; font-weight:700;">WAVE 1 · F2 ANCHORS &amp; CONVERSION PLATFORMS</div>
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.4rem; margin:0.4rem 0 0.6rem;">Build the seats passengers must sit in to convert</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Asset-lines:</strong> AL-04 (12 landing pages) · AL-05 (3 lead-magnet PDFs incl. BCM Approval Pack) · AL-06 (~18 sales enablement docs)
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Why first:</strong> AL-04 + AL-05 + AL-06 are the F2 conversion-anchors. Without landing pages, paid ads have nowhere to send traffic. Without the BCM Approval Pack, Units P-08 stage-4→5 mechanism is broken. Without the Pre-Reno Consult deck, sales calls have no narrative spine. Build the destination before you sell the journey.
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0;">
          <strong>Effort estimate:</strong> ~33 production units · ~8-12 working days at Carla-CMO-equivalent depth (or ~14-18 days for YDT post-handover).<br/>
          <strong>Wave 1 Quality Gate:</strong> All 33 assets carry 5 anchors · all landing pages render at 1,200-1,800 words · BCM Approval Pack passes BCM-coordinator pilot review (n=2 from Diamond-tier firms) · Pre-Reno Consult deck role-played end-to-end with a stand-in lot-owner before sign-off.
        </p>
      </div>

      <div style="background:#fff; padding:1.6rem; border-radius:10px; border-left:5px solid #4DB6C7; box-shadow:0 2px 8px rgba(0,0,0,0.06); margin-bottom:1.2rem;">
        <div style="font-family:'Inter',sans-serif; font-size:0.74rem; letter-spacing:0.12em; color:#B8743D; font-weight:700;">WAVE 2 · F1 ACQUISITION ENGINE</div>
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.4rem; margin:0.4rem 0 0.6rem;">Open the platforms where passengers board</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Asset-lines:</strong> AL-01 (180 headlines) · AL-02 (120 ad-copy units) · AL-08 (~67 partnership kits)
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Why second:</strong> Paid ads (AL-01 + AL-02) and partnership kits (AL-08) are the F1 acquisition mechanisms. They drive traffic <em>into</em> the Wave-1 conversion platforms. Building them before Wave 1 is complete = paying for clicks that land on broken pages. The order is non-negotiable.
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0;">
          <strong>Effort estimate:</strong> ~367 production units · ~12-18 working days.<br/>
          <strong>Wave 2 Quality Gate:</strong> All 180 headlines fit Google RSA + Meta primary-text character limits · all ad-copy units cross-reference a specific Wave-1 landing page · 6 Diamond-tier BCM kits ratified by Carla CFO before Gold/Silver rollout · headline doctrine compliance (no Promise-text in paid creative · §11I 2-sanctioned-surfaces rule applies).
        </p>
      </div>

      <div style="background:#fff; padding:1.6rem; border-radius:10px; border-left:5px solid #B8743D; box-shadow:0 2px 8px rgba(0,0,0,0.06); margin-bottom:1.2rem;">
        <div style="font-family:'Inter',sans-serif; font-size:0.74rem; letter-spacing:0.12em; color:#B8743D; font-weight:700;">WAVE 3 · F2→F3 NURTURE &amp; ADVOCACY LOOP</div>
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.4rem; margin:0.4rem 0 0.6rem;">Feed passengers between stops &amp; turn them into return travellers</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Asset-lines:</strong> AL-03 (45 CRM emails) · AL-07 (720 social posts · year-1 calendar)
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;">
          <strong>Why last:</strong> AL-03 + AL-07 are ongoing-cadence assets — the train's continuous travel experience. They depend on Wave 1 + Wave 2 being live to have any meaning. An F2-conversion email is meaningless without F2 conversions happening. A social post promoting a landing page that doesn't exist is malpractice.
        </p>
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0;">
          <strong>Effort estimate:</strong> ~765 production units · ~22-30 working days (the largest wave by far · social-calendar production drives this).<br/>
          <strong>Wave 3 Quality Gate:</strong> All 45 emails wired to Klaviyo with correct trigger-events from P-12 §12A 24-event taxonomy · all 720 social posts mapped to 4 content-buckets per LOB (Education · Proof · Behind-the-build · Sarah&amp;Mark voice) · F3-advocacy posts include gift-kit-recall hooks per §11F.
        </p>
      </div>

      <div style="background:rgba(27,58,92,0.06); padding:1.2rem 1.4rem; border-radius:8px; border-left:4px solid #1B3A5C;">
        <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0;">
          <strong>Total Phase 5 timeline (at CFO-equivalent author depth):</strong> ~42-60 working days · 3 waves · 2 inter-wave Quality Gates · 1 exit Quality Gate. If YDT executes post-handover, expect ~65-90 working days for the same scope (familiarisation overhead). Carla CFO retains chair-of-Quality-Gate at every wave-close regardless of who's authoring.
        </p>
      </div>
    </div>
  </section>
)

const M5Section5 = () => (
  <section style="background: #F5F1EA; padding: 3.5rem 1.5rem;">
    <div style="max-width: 1080px; margin: 0 auto;">
      <div style="font-family: 'Inter', sans-serif; font-size: 0.78rem; letter-spacing: 0.14em; color: #B8743D; font-weight: 700; margin-bottom: 0.6rem;">§5 · PER-AL DEFINITION OF DONE</div>
      <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; color: #1B3A5C; margin: 0 0 1.4rem;">The 8 contracts · what "shipped" means for each asset-line</h2>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.75; color: #333; margin: 0 0 1.6rem;">
        Each AL- has a locked Definition of Done. No moving goalposts mid-production. If the DoD changes, a new manifest-version (v1.1) is required and Carla CFO re-signs.
      </p>

      <div style="display:grid; gap:1rem;">
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-01 · Paid headlines (180 units)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Every headline (a) fits the channel's character limit (Google RSA 30char · Meta primary 40char · LinkedIn 70char); (b) maps to a specific Wave-1 landing page via UTM contract; (c) carries no Promise-text (2-surface rule); (d) is paired with a hypothesised intent-segment (e.g. "anxious-parent · 11pm search"); (e) sits in a 6-headline A/B variant set so YDT can test from launch.</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-02 · Ad copy units (120 units)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Each unit = headline + body + CTA, channel-formatted. Body carries 1 anchor explicitly (which one is logged). Body references no LOB-other-than-the-one-it-targets (no cross-LOB contamination at F1). Includes a 90-character "creative-brief one-liner" for visual partner so designer doesn't reinvent the strategy.</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-03 · CRM emails (45 units)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Subject + preview-text + body (240-480 words) + CTA. Wired to Klaviyo trigger-event from the locked 24-event GA4 taxonomy (P-12 §12A). F1-nurture emails (n=18) do not pre-sell · F2-conversion emails (n=15) do · F3-loop emails (n=12) seed cross-LOB. Every email named in the format <code>LOB_FStage_TriggerEvent_SequencePosition</code> (e.g. <code>UNITS_F2_pre_reno_consult_held_03</code>).</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-04 · Landing pages (12 units)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> 1,200-1,800 words. 7-section structure: Hero · Proof (3 testimonials) · The Doctrine (LOB-specific) · Objection-handler (3 most common · scripted dissolution) · CTA-primary (F2 anchor link) · CTA-secondary (lead-magnet download) · Trust footer (credentials · governance · BCM/realtor partners). Promise text appears 0 times. 5 anchors all visible. Mobile-first responsive · sub-2s load.</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-05 · Lead-magnet PDFs (3 units · the most-scrutinised)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Each PDF designed in InDesign-equivalent at print-grade · Cream #F5F1EA backgrounds · Fraunces/Inter typography. <em>Termite Anxiety Resolved</em> (16pp) · <em>Backyard Dreaming Guide</em> (24pp) · <em>BCM Approval Pack</em> (28-32pp + DocRaptor-personalisable for the building). BCM Approval Pack passes a 2-firm pilot review (Diamond tier) BEFORE general availability. Each PDF carries an opt-in form linkback to Klaviyo.</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-06 · Sales enablement (~18 docs)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Per LOB: a 16-slide Pre-Reno/Pre-Build Consult deck · a proposal template · a Champion Confirmation form · an objection-handler reference card · a MEDDPICC scoring rubric (Units gets dual). Pre-Reno Consult deck rehearsed end-to-end before sign-off (P-08 §8.4 minute-by-minute script tested).</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-07 · Social posts (720 units · year-1)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> 4 content-buckets per LOB (Education 30% · Proof 25% · Behind-the-build 25% · Sarah&amp;Mark voice 20%). 180 posts/qtr/LOB. Each post = caption (40-150 words) + visual-brief (90 chars) + hashtag-set (locked per LOB · max 8) + CTA. F1 posts drive to landing pages · F3 posts drive referral-loop. No promise text in caption (2-surface rule).</p>
        </div>
        <div style="background:#fff; padding:1.4rem; border-radius:8px; border-left:4px solid #B8743D;">
          <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.5rem; font-size:1.2rem;">AL-08 · Partnership kits (~67 units)</h3>
          <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.65; color:#333; margin:0;"><strong>DoD:</strong> Per partner-tier: a tailored outreach email + a co-marketing 1-pager + a revenue-share term sheet (where applicable) + a quarterly check-in cadence-doc. Diamond-tier BCM kits (n=6) include a printed bound folio · Carla CFO blue-ink-signed (per P-11 §11I). SCA QLD sponsorship deck = 24 slides · Carla-presented if requested. 26 realtor kits include co-listing content templates.</p>
        </div>
      </div>
    </div>
  </section>
)

const M5Section6 = () => (
  <section id="sec-6" style="max-width:1100px; margin:0 auto; padding:3rem 2rem;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:2rem; margin:0 0 0.4rem; border-bottom:3px solid #B8743D; padding-bottom:0.5rem;">§6 · Production budget · per AL × per wave</h2>
    <p style="font-family:'Inter',sans-serif; font-size:1rem; line-height:1.7; color:#444; margin:1rem 0 1.5rem;">Budgets below are <strong>YDT internal cost-to-produce</strong> estimates (creative time + design + copy + media-buy excluded — media is a separate Robyn-MMM-governed line). Bands are wide because final cost depends on YDT's blended rate — Carla to confirm $/hr against YDT proposal. The total range — <strong>$184k – $268k all-in production</strong> across all 8 ALs — is the Phase 5 budget envelope before media. Wave-totals add the throughput discipline: Wave 1 must close before Wave 2 funds, Wave 2 must close before Wave 3 funds.</p>
    <table style="width:100%; border-collapse:collapse; font-family:'Inter',sans-serif; font-size:0.92rem; background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.06); margin-bottom:1.5rem;">
      <thead>
        <tr style="background:#1B3A5C; color:#F5F1EA;">
          <th style="padding:0.8rem 1rem; text-align:left; border:1px solid #1B3A5C;">AL</th>
          <th style="padding:0.8rem 1rem; text-align:left; border:1px solid #1B3A5C;">Asset-line</th>
          <th style="padding:0.8rem 1rem; text-align:right; border:1px solid #1B3A5C;">Units</th>
          <th style="padding:0.8rem 1rem; text-align:right; border:1px solid #1B3A5C;">$/unit (band)</th>
          <th style="padding:0.8rem 1rem; text-align:right; border:1px solid #1B3A5C;">AL total (band)</th>
          <th style="padding:0.8rem 1rem; text-align:center; border:1px solid #1B3A5C;">Wave</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-01</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Paid headlines</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">180</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$45–$75</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$8.1k–$13.5k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W2</td></tr>
        <tr style="background:#F5F1EA;"><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-02</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Ad copy units</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">120</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$120–$180</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$14.4k–$21.6k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W2</td></tr>
        <tr><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-03</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">CRM emails</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">45</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$280–$420</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$12.6k–$18.9k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W3</td></tr>
        <tr style="background:#F5F1EA;"><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-04</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Landing pages</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">12</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$2.8k–$4.2k</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$33.6k–$50.4k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W1</td></tr>
        <tr><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-05</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Lead-magnet PDFs</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">3</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$8k–$14k</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$24k–$42k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W1</td></tr>
        <tr style="background:#F5F1EA;"><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-06</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Sales enablement</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">~18</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$1.4k–$2.2k</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$25.2k–$39.6k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W1</td></tr>
        <tr><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-07</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Social posts (year-1)</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">720</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$65–$95</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$46.8k–$68.4k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W3</td></tr>
        <tr style="background:#F5F1EA;"><td style="padding:0.7rem 1rem; border:1px solid #ddd;"><strong>AL-08</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd;">Partnership kits</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">~67</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;">$280–$420</td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:right;"><strong>$18.8k–$28.1k</strong></td><td style="padding:0.7rem 1rem; border:1px solid #ddd; text-align:center;">W2</td></tr>
        <tr style="background:#1B3A5C; color:#F5F1EA; font-weight:600;"><td style="padding:0.8rem 1rem; border:1px solid #1B3A5C;" colspan="2">TOTAL · ALL ALs · ALL WAVES</td><td style="padding:0.8rem 1rem; border:1px solid #1B3A5C; text-align:right;">~1,165</td><td style="padding:0.8rem 1rem; border:1px solid #1B3A5C;"></td><td style="padding:0.8rem 1rem; border:1px solid #1B3A5C; text-align:right;"><strong>$183.5k – $282.5k</strong></td><td style="padding:0.8rem 1rem; border:1px solid #1B3A5C; text-align:center;">—</td></tr>
      </tbody>
    </table>
    <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.3rem; margin:1.5rem 0 0.7rem;">Wave-gate budget releases</h3>
    <div style="background:#F5F1EA; padding:1.4rem 1.6rem; border-radius:8px; border-left:4px solid #4DB6C7;">
      <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;"><strong>Wave 1 (F2 anchors · weeks 1–4):</strong> Releases AL-04 + AL-05 + AL-06 = <strong>$82.8k – $132k</strong>. Cannot draw down Wave 2 until Wave 1 passes Quality Gate per §7.</p>
      <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 0.6rem;"><strong>Wave 2 (F1 acquisition · weeks 5–8):</strong> Releases AL-01 + AL-02 + AL-08 = <strong>$41.3k – $63.2k</strong>. Cannot draw down Wave 3 until Wave 2 passes Quality Gate.</p>
      <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0;"><strong>Wave 3 (F2→F3 nurture · weeks 9–12):</strong> Releases AL-03 + AL-07 = <strong>$59.4k – $87.3k</strong>. Phase 5 closes on Wave 3 sign-off.</p>
    </div>
    <p style="font-family:'Inter',sans-serif; font-size:0.92rem; line-height:1.7; color:#555; margin:1.2rem 0 0; font-style:italic;">CFO note (Carla): the budget banding gives YDT a stretch-floor and a hard-ceiling. If YDT's proposal lands within the band the wave releases automatically; if above the band, Carla countersigns the variance and routes a written explanation back to YBMT before drawdown. This is the same CFO discipline applied to capital projects — variance is normal, unexplained variance is not.</p>
  </section>
)

const M5Section7 = () => (
  <section id="sec-7" style="max-width:1100px; margin:0 auto; padding:3rem 2rem;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:2rem; margin:0 0 0.4rem; border-bottom:3px solid #B8743D; padding-bottom:0.5rem;">§7 · Quality Gate exit-criteria · what closes Phase 5</h2>
    <p style="font-family:'Inter',sans-serif; font-size:1rem; line-height:1.7; color:#444; margin:1rem 0 1.5rem;">Phase 5 cannot be declared closed until <strong>all 12 gates below clear at 10/10</strong>. Same doctrine applied to Phases 1–4. If any gate fails, the failing AL re-enters Wave-rework — it does not advance, and Carla is the sole arbiter of pass/fail.</p>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(310px, 1fr)); gap:1rem;">
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 1 · Volume</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">All ~1,165 asset-units produced and accepted. No "we'll finish later" — anything missing fails the gate. Final inventory matches §2 exactly.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 2 · LOB allocation</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Termite 403 · Pools 358 · Units 404 · ±5% tolerance. Threshold floors (Termite ≥6 · Pools ≥4 · Units ≥3 per AL) hold without exception.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 3 · Congruency v1.0</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">5 upstream anchors visibly present in 100% of long-form pieces (AL-04 / AL-05 / AL-06). Promise text appears max 2× per asset (2-surface rule). Sarah &amp; Mark voice audible in 100% of AL-07 social.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 4 · Brand-system fidelity</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Navy #1B3A5C / Timber #B8743D / Aqua #4DB6C7 / Cream #F5F1EA used exactly. Fraunces (headlines) + Inter (body) — no substitutions. Logo lockups, spacing tokens, image-treatment rules from P-11 §11A all honoured.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 5 · F1→F2→F3 wiring</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Every asset tagged with its funnel-stage. CTAs map to the correct stage — F1 never asks for purchase, F3 never goes back to discovery. GA4 event names match the 24-event taxonomy.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 6 · Instrumentation hooks</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">CallRail DNI numbers swapped per LOB × source. Klaviyo triggers fire on test-send. HubSpot deal-stage transitions captured. sGTM passes server-side event check.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 7 · MEDDPICC dual-buyer</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Units AL-06 enablement docs include the dual-buyer scorecard (lot-owner + BCM coordinator both ≥12/21). AL-05 BCM Approval Pack tested against the rubric.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 8 · BCM pilot review</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">AL-05 BCM Approval Pack reviewed by 2 Diamond-tier BCM firms BEFORE general release. Written feedback incorporated. Carla reviews the diff.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 9 · Robyn MMM readiness</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Adstock windows pre-configured per LOB (Units 26w · Pools 4w · Termite 8w). Saturation curves baselined. Channel-spend feed wired to model input.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 10 · Compliance &amp; governance</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">ACL/licensing claims accurate. ACCC misleading-conduct review pass. SCA QLD authority-lane content vetted by SCA liaison. Privacy Act consent flows on all opt-in surfaces.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 11 · Budget closure</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">All 3 wave-releases reconciled. Variance ≤ band-ceiling OR Carla-countersigned. YDT invoice schedule matches actual delivered units.</p>
      </div>
      <div style="background:#fff; padding:1.3rem; border-radius:8px; border-top:4px solid #4DB6C7; box-shadow:0 2px 6px rgba(0,0,0,0.06);">
        <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; margin:0 0 0.4rem; font-size:1.1rem;">Gate 12 · Handover-pack</h3>
        <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.6; color:#333; margin:0;">Master asset library indexed in YDT DAM. Naming convention consistent. Source files (InDesign/Figma/AE) handed back. Versioning rules locked. Final master-doc signed by Carla.</p>
      </div>
    </div>
    <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:1.5rem 0 0; padding:1.2rem 1.4rem; background:#1B3A5C; color:#F5F1EA; border-radius:8px;"><strong style="font-family:'Fraunces',serif;">Closure declaration:</strong> Phase 5 closes only when Carla, in writing, marks all 12 gates ✓ and countersigns the master-doc. Up to that point, Phase 5 remains open — partial completion is not closure.</p>
  </section>
)

const M5Section8 = () => (
  <section id="sec-8" style="max-width:1100px; margin:0 auto; padding:3rem 2rem 4rem;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:2rem; margin:0 0 0.4rem; border-bottom:3px solid #B8743D; padding-bottom:0.5rem;">§8 · Carla sign-off · manifest approval (pre-GO)</h2>
    <p style="font-family:'Inter',sans-serif; font-size:1rem; line-height:1.7; color:#444; margin:1rem 0 1.5rem;">This is the wet-ink moment. By signing, Carla — as Acting CMO for YBMT Group and CFO at CoSai CFO Services — confirms the boarding manifest is approved and Phase 5 may proceed under the terms below. <strong>"PHASE 5 GO" is a separate utterance from this manifest approval</strong> — signing the manifest is a prerequisite, not the green light itself.</p>
    <div style="background:#F5F1EA; padding:1.8rem 2rem; border-radius:10px; border:2px solid #1B3A5C; box-shadow:0 4px 12px rgba(27,58,92,0.12);">
      <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.4rem; margin:0 0 1rem;">Manifest approval block</h3>
      <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; color:#333; margin:0 0 1.2rem;"><strong>By signing below, Carla confirms:</strong></p>
      <ul style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.85; color:#333; margin:0 0 1.4rem; padding-left:1.4rem;">
        <li>The 8 asset-lines (§2) and ~1,165-unit volume target are accepted.</li>
        <li>The 3-LOB allocation (§3 · Termite 403 / Pools 358 / Units 404) holds the agreed thresholds.</li>
        <li>The 3-wave sequencing (§4 · F2 anchors → F1 acquisition → F2→F3 nurture) is the correct order of operations.</li>
        <li>The per-AL Definition of Done (§5) is acceptance-criteria-grade and YDT will be held to it.</li>
        <li>The budget envelope (§6 · $184k – $283k production, ex-media) is within YBMT capacity, with wave-gate releases.</li>
        <li>The 12 Quality Gate exit-criteria (§7) are the closure standard — no partial closure, Carla is sole arbiter.</li>
        <li>YDT (Corrina McGowan, headless agency) is the production owner. CFO governance remains with Carla.</li>
      </ul>
      <table style="width:100%; border-collapse:collapse; font-family:'Inter',sans-serif; font-size:0.92rem; margin-top:1rem;">
        <tbody>
          <tr>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C; width:30%; color:#1B3A5C; font-weight:600;">Approver:</td>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C;">Carla Oliver · CFO, CoSai CFO Services · Acting CMO, YBMT Group</td>
          </tr>
          <tr>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C; color:#1B3A5C; font-weight:600;">Signature:</td>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C; font-style:italic; color:#888;">_____________________________________</td>
          </tr>
          <tr>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C; color:#1B3A5C; font-weight:600;">Date:</td>
            <td style="padding:1rem 1rem; border-bottom:1px solid #1B3A5C; font-style:italic; color:#888;">________________</td>
          </tr>
          <tr>
            <td style="padding:1rem 1rem; color:#1B3A5C; font-weight:600;">Counter-sign (YDT):</td>
            <td style="padding:1rem 1rem; font-style:italic; color:#888;">Corrina McGowan · YDT · _____________________________________</td>
          </tr>
        </tbody>
      </table>
      <p style="font-family:'Inter',sans-serif; font-size:0.9rem; line-height:1.7; color:#555; margin:1.4rem 0 0; font-style:italic;">Once both signatures land, Carla utters <strong>"PHASE 5 GO"</strong> and AL execution begins per the §4 wave-plan. Until then, Phase 5 remains in pre-flight.</p>
    </div>
    <div style="margin-top:2rem; padding:1.4rem 1.6rem; background:#1B3A5C; color:#F5F1EA; border-radius:8px;">
      <h3 style="font-family:'Fraunces',serif; color:#F5F1EA; margin:0 0 0.6rem; font-size:1.2rem;">Manifest closure declaration</h3>
      <p style="font-family:'Inter',sans-serif; font-size:0.95rem; line-height:1.7; margin:0;">This Phase 5 Boarding Manifest v1.0 is the Quality-Gate-grade work breakdown for Marketing Asset Production. It mirrors the gate-discipline applied to Phases 1–4. Same doctrine. Same depth. Same congruency anchors. The carriages are built. The seat-map is drawn. The passengers are queued. We wait for Carla's wet-ink and her "PHASE 5 GO."</p>
    </div>
  </section>
)

export const renderPhase5Manifest = () => (
  <>
    <M5HubBar />
    <M5Nav />
    <M5Hero />
    <UpstreamAnchor doc="Phase 5 · Boarding Manifest · v1.0" />
    <M5Doctrine />
    <M5Section2 />
    <M5Section3 />
    <M5Section4 />
    <M5Section5 />
    <M5Section6 />
    <M5Section7 />
    <M5Section8 />
  </>
)
