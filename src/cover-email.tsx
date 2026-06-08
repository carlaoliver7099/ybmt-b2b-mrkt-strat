import { UpstreamAnchor } from './upstream-anchor'

const CEHubBar = () => (
  <div style="background:#1B3A5C; color:#F5F1EA; padding:0.6rem 1.2rem; font-family:'Inter',sans-serif; font-size:0.85rem;">
    <a href="/" style="color:#F5F1EA; text-decoration:none; margin-right:1.2rem;">← Hub</a>
    <span style="opacity:0.85;">Cover Email · Carla Oliver → Gerry McKenzie + Corrina McGowan · {new Date().toLocaleDateString('en-AU', {year:'numeric', month:'long', day:'numeric'})}</span>
  </div>
)

const CEHero = () => (
  <header style="background:linear-gradient(135deg, #1B3A5C 0%, #2a4f78 100%); color:#F5F1EA; padding:3.5rem 2rem 3rem; text-align:center;">
    <div style="max-width:900px; margin:0 auto;">
      <p style="font-family:'Inter',sans-serif; font-size:0.85rem; letter-spacing:0.25em; text-transform:uppercase; opacity:0.75; margin:0 0 0.8rem;">Cover Email · Marketing Mix Railway · v1.0</p>
      <h1 style="font-family:'Fraunces',serif; font-size:2.6rem; margin:0 0 0.8rem; line-height:1.2;">The Marketing Mix Railway · A Briefing</h1>
      <p style="font-family:'Fraunces',serif; font-style:italic; font-size:1.2rem; opacity:0.9; margin:0;">From the CFO's desk · for the CEO and the agency · before the carriages start carrying passengers.</p>
    </div>
  </header>
)

const CEFromBlock = () => (
  <section style="max-width:780px; margin:0 auto; padding:2.5rem 2rem 1rem; font-family:'Inter',sans-serif;">
    <table style="width:100%; border-collapse:collapse; font-size:0.95rem;">
      <tbody>
        <tr>
          <td style="padding:0.6rem 1rem 0.6rem 0; color:#1B3A5C; font-weight:600; width:90px; vertical-align:top;">From:</td>
          <td style="padding:0.6rem 0;">Carla Oliver · CFO, CoSai CFO Services · Acting CMO, YBMT Group</td>
        </tr>
        <tr>
          <td style="padding:0.6rem 1rem 0.6rem 0; color:#1B3A5C; font-weight:600; vertical-align:top;">To:</td>
          <td style="padding:0.6rem 0;">Gerry McKenzie · CEO, YBMT Group<br/>Corrina McGowan · Principal, YDT</td>
        </tr>
        <tr>
          <td style="padding:0.6rem 1rem 0.6rem 0; color:#1B3A5C; font-weight:600; vertical-align:top;">Subject:</td>
          <td style="padding:0.6rem 0;"><strong>Marketing Mix Railway · Portfolio Strategy v1.0 · ready for your review &amp; sign-off (pre-production)</strong></td>
        </tr>
        <tr>
          <td style="padding:0.6rem 1rem 0.6rem 0; color:#1B3A5C; font-weight:600; vertical-align:top;">Link:</td>
          <td style="padding:0.6rem 0;"><a href="https://strategy.cosaiybmtpool.org" style="color:#B8743D; font-weight:600;">https://strategy.cosaiybmtpool.org</a></td>
        </tr>
        <tr>
          <td style="padding:0.6rem 1rem 0.6rem 0; color:#1B3A5C; font-weight:600; vertical-align:top;">Status:</td>
          <td style="padding:0.6rem 0;">Strategy infrastructure complete · production not yet authorised · awaiting your sign-off</td>
        </tr>
      </tbody>
    </table>
    <hr style="margin:1.5rem 0; border:none; border-top:1px solid #d4cfc4;"/>
  </section>
)

const CEOpening = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.8; color:#222;">
    <p style="margin:0 0 1.2rem;">Gerry, Corrina —</p>
    <p style="margin:0 0 1.2rem;">Before either of you opens the URL above, I want to give you the mental model that organises everything you're about to read. The model is a railway, and it's the cleanest possible way to understand what's been built, what hasn't been built yet, and what each of you is being asked to sign off on this week.</p>
    <p style="margin:0 0 1.2rem;">In the railway, <strong>the track is the cross-portfolio strategy</strong> — the operating doctrine that applies to every line of business YBMT runs. <strong>The carriages are the three lines of business</strong> — Termite Damage Repair, Pools &amp; Outdoor Entertainment, Unit Renovations — each with its own go-to-market operating paper, eleven strategic pillars deep. <strong>The boarding manifest is the production plan</strong> — what gets built, in what order, to what standard, at what cost. And <strong>the passengers are the actual marketing assets</strong> — the headlines, the landing pages, the brochures, the nurture emails, the partnership kits, the videos, the social posts — every individual deliverable that will fill the carriages and carry YBMT's revenue forward.</p>
    <p style="margin:0 0 1.2rem; padding:1rem 1.4rem; background:#F5F1EA; border-left:4px solid #B8743D; border-radius:0 4px 4px 0;">Today, <strong>the track is laid, the carriages are built, and the boarding manifest is filed at the platform.</strong> Not one passenger has boarded yet. That is deliberate. We do not produce a single asset until both of you have read the system, accepted it, and signed off on what gets produced. That is the discipline this engagement was structured around, and it is why I am writing to you both before any creative work begins.</p>
    <p style="margin:0 0 1.2rem;">This email tells you (a) what has been built, (b) how to navigate the URL when you sit down with it, (c) what I need each of you to sign off on, and (d) what happens next when you do.</p>
  </section>
)

const CEWhatExists = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.75; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">1 · What has been built</h2>
    <p style="margin:0.8rem 0 1rem;">The site at <a href="https://strategy.cosaiybmtpool.org" style="color:#B8743D; font-weight:600;">strategy.cosaiybmtpool.org</a> contains <strong>approximately 80,000 words of partner-grade strategic infrastructure</strong> across 13 interconnected documents. Every word was written to a Quality Gate doctrine — meaning nothing advanced until the prior workstream was approved at 10/10 against acceptance criteria. The total represents <strong>four completed phases of work</strong>:</p>
    <div style="background:#fff; padding:1.4rem 1.6rem; border-radius:8px; border:1px solid #d4cfc4; margin:1rem 0;">
      <p style="margin:0 0 0.7rem;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Phase 1 · The Foundations (the track ballast).</strong> Who we serve (Sarah &amp; Mark · the Australian dual-income coastal household), the category we are designing (Whole-of-Home Stewardship — owning the long-term care of the home, not selling discrete jobs), and the KPI contract that governs success measurement.</p>
      <p style="margin:0 0 0.7rem;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Phase 2 · The Promise &amp; The Economics (the rails).</strong> The brand promise (<em>"Built like it's our own home"</em>), the buyer psychology, the bowtie funnel modelling that produces 30× lifetime value through cross-LOB nurture, and the distinctive brand assets that make YBMT recognisable.</p>
      <p style="margin:0 0 0.7rem;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Phase 3 · The Channels (the signalling system).</strong> How the brand reaches Sarah &amp; Mark — channel architecture, Generative Engine Optimisation, paid media, CRM lifecycle, and revenue operations.</p>
      <p style="margin:0;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Phase 4 · The Three Carriages (the LOB GTM papers).</strong> Three complete go-to-market operating manuals — one for Termite, one for Pools, one for Units — each containing eleven strategic pillars covering positioning, audience, offer architecture, channel mix, sales process, social, partnerships, print/physical assets, and instrumentation. <strong>This is the deepest document set in the system</strong> and the one Corrina will spend the most time inside.</p>
    </div>
    <p style="margin:1rem 0 1.2rem;">Above and around all four phases sits a Boarding Manifest — the production plan for Phase 5 — which is the document I am asking you both to focus on first when you open the URL.</p>
  </section>
)

const CENotYetBuilt = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.75; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">2 · What has NOT yet been built</h2>
    <p style="margin:0.8rem 0 1rem;">I want to be completely transparent with both of you about this, because the answer is going to be the most important question Gerry asks: <em>"where are the actual ads, brochures, emails, and videos?"</em></p>
    <p style="margin:0 0 1.2rem;">They do not exist yet. <strong>Zero finished marketing assets have been produced.</strong> What exists is the complete operating system that determines what those assets must look like, in what order they will be built, to what standard, and at what cost. The Phase 5 Boarding Manifest enumerates <strong>approximately 1,165 individual marketing assets</strong> that need to be produced — and not one of them gets authored until both of you have signed off on the system.</p>
    <p style="margin:0 0 1.2rem;">Specifically, here is what does NOT yet exist (and will not, until production is authorised):</p>
    <ul style="margin:0 0 1.2rem; padding-left:1.5rem; line-height:1.9;">
      <li><strong>No website copy or landing pages</strong> · 12 landing pages planned (4 per LOB)</li>
      <li><strong>No SEO copy or Generative Engine Optimisation content</strong> · governed by the channel and GEO operating manuals · production begins in Wave 1</li>
      <li><strong>No CRM nurture emails</strong> · 45 emails planned across F1/F2/F3 funnel stages</li>
      <li><strong>No brochures, leave-behinds, or sales attachments</strong> · approximately 18 sales enablement docs planned, including the BCM Approval Pack (the critical document for body-corporate manager approval on Units work)</li>
      <li><strong>No partnership kits</strong> · approximately 67 kits planned for the 34 BCM firms, 26 realtors, and the SCA QLD authority lane</li>
      <li><strong>No lead-magnet PDFs</strong> · 3 planned (the Termite Anxiety Resolved guide, the Backyard Dreaming Guide, the BCM Approval Pack)</li>
      <li><strong>No paid ad headlines or ad copy</strong> · 180 headlines + 120 ad copy units planned across Google, Meta, and LinkedIn</li>
      <li><strong>No social posts</strong> · 720-post year-one calendar planned (240 per LOB)</li>
      <li><strong>And no videos.</strong> Video is not currently in the Phase 5 manifest at all. If we want video as part of the mix — explainer videos, testimonials, walkthroughs, drone aerial showcases for Pools — I need to amend the manifest <em>before</em> production begins, not during.</li>
    </ul>
    <p style="margin:0 0 1.2rem; padding:1rem 1.4rem; background:#1B3A5C; color:#F5F1EA; border-radius:6px;">This is the discipline of the engagement and it is the discipline of CFO-led marketing governance. You do not commission $200,000+ of production without first signing off on the strategic system that determines what gets produced. That is what we are doing this week.</p>
  </section>
)

const CEHowToRead = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.75; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">3 · How to read the URL · suggested order</h2>
    <p style="margin:0.8rem 0 1.2rem;">When you open <a href="https://strategy.cosaiybmtpool.org" style="color:#B8743D; font-weight:600;">strategy.cosaiybmtpool.org</a>, you will land on the strategy hub. From there, I recommend reading the documents in the following order — this is the railway, walked end to end:</p>
    <ol style="padding-left:1.5rem; line-height:1.85;">
      <li style="margin-bottom:1rem;"><strong style="color:#1B3A5C;">Start at the Strategy Index</strong> — <a href="/ymt-group-strategy" style="color:#B8743D;">/ymt-group-strategy</a><br/><span style="color:#555; font-size:0.95rem;">This is the master table of contents. It shows you all four completed phases and how the documents interconnect. Spend 5 minutes here. This is the station you board from.</span></li>
      <li style="margin-bottom:1rem;"><strong style="color:#1B3A5C;">Then the Phase 5 Boarding Manifest</strong> — <a href="/phase-5-manifest" style="color:#B8743D;">/phase-5-manifest</a><br/><span style="color:#555; font-size:0.95rem;">This is the most important document for both of you to read this week. It is the production plan — 8 sections covering the asset inventory, the LOB allocation, the wave sequencing, the per-asset acceptance criteria, the production budget, the Quality Gate exit criteria, and the sign-off block. Gerry, your eyes belong on §6 (the budget envelope) and §7 (the Quality Gate criteria). Corrina, your eyes belong on §5 (the per-AL Definition of Done) and §4 (the three-wave sequencing).</span></li>
      <li style="margin-bottom:1rem;"><strong style="color:#1B3A5C;">Then one carriage — pick the LOB closest to you</strong><br/><span style="color:#555; font-size:0.95rem;">Termite GTM at <a href="/termite-gtm" style="color:#B8743D;">/termite-gtm</a> · Pools GTM at <a href="/pools-gtm" style="color:#B8743D;">/pools-gtm</a> · Units GTM at <a href="/units-gtm" style="color:#B8743D;">/units-gtm</a>. These are dense — each is 11 pillars long. You do not need to read all three. Read one fully, scan the headers of the other two, and you will have a complete picture of what depth has been done at the LOB level. Corrina, you will eventually read all three end to end before production begins.</span></li>
      <li style="margin-bottom:1rem;"><strong style="color:#1B3A5C;">Then the YDT Handover Document</strong> — <a href="/handover" style="color:#B8743D;">/handover</a><br/><span style="color:#555; font-size:0.95rem;">This is the document that explains how Corrina's team enters the system. Corrina, this is your operating brief. Gerry, this gives you visibility into how the agency engages with the strategy. It is the platform announcement that tells passengers (assets) how they will board the carriages.</span></li>
      <li><strong style="color:#1B3A5C;">Optional · the eleven cross-portfolio operating manuals</strong><br/><span style="color:#555; font-size:0.95rem;">These sit at <a href="/ymt-jtbd" style="color:#B8743D;">/ymt-jtbd</a> · <a href="/ymt-category" style="color:#B8743D;">/ymt-category</a> · <a href="/ymt-brand" style="color:#B8743D;">/ymt-brand</a> and similar. These are the deep references for the foundations. You can skim or skip them on first read — they are reference documents, not narrative ones. Corrina's creative directors will live inside these later.</span></li>
    </ol>
    <p style="margin:1.2rem 0 1.2rem;">Estimated reading time for the recommended order: <strong>Gerry, ~45 minutes</strong> (Strategy Index + Manifest + one LOB carriage + handover). <strong>Corrina, ~3 hours</strong> (everything except the optional manuals on first pass; all manuals before any production begins).</p>
  </section>
)

const CEWhatINeed = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.75; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">4 · What I need from each of you</h2>
    <p style="margin:0.8rem 0 1.2rem;">This engagement is structured as a three-corner sign-off: I author the marketing mix on behalf of YBMT, Gerry approves it as the YBMT CEO receiving the strategy, and Corrina counter-signs as the YDT principal who will produce against it. None of us can proceed without the other two.</p>
    <div style="background:#F5F1EA; padding:1.5rem 1.8rem; border-radius:8px; border-left:5px solid #B8743D; margin:1rem 0;">
      <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.2rem; margin:0 0 0.7rem;">Gerry · what I need from you</h3>
      <ol style="margin:0; padding-left:1.3rem; line-height:1.8;">
        <li>Read the Strategy Index, the Phase 5 Manifest (especially §6 budget and §7 Quality Gate), one LOB carriage of your choice, and the Handover document. ~45 minutes total.</li>
        <li>Confirm the strategic direction matches YBMT Group's positioning and revenue ambition.</li>
        <li>Accept the production budget envelope of <strong>$184k – $283k</strong> across three waves (this is production cost only; media spend is governed separately by the channel and paid media operating manuals).</li>
        <li>Decide whether you want video added to the manifest before production starts (current scope does not include video).</li>
        <li>Sign the §8 sign-off block as YBMT CEO approver.</li>
        <li>Confirm whether you want to be in the approval chain at each Wave Quality Gate (per-wave sign-off) or whether you delegate Wave-level approval to me as Acting CMO (manifest-level sign-off only).</li>
      </ol>
    </div>
    <div style="background:#F5F1EA; padding:1.5rem 1.8rem; border-radius:8px; border-left:5px solid #4DB6C7; margin:1rem 0;">
      <h3 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.2rem; margin:0 0 0.7rem;">Corrina · what I need from you</h3>
      <ol style="margin:0; padding-left:1.3rem; line-height:1.8;">
        <li>Read the Strategy Index, the Phase 5 Manifest in full, all three LOB carriages, and the Handover document. ~3 hours total.</li>
        <li>Confirm YDT can produce to the per-AL Definition of Done in §5 of the manifest. If any DoD line is unrealistic for YDT's capacity, flag it now — much cheaper to amend the manifest than to re-do produced work.</li>
        <li>Confirm the three-wave sequencing in §4 is achievable on YDT's calendar (Wave 1 starts at week 1, closes at week 4; Wave 2 weeks 5–8; Wave 3 weeks 9–12).</li>
        <li>Provide a YDT proposal mapping your actual production cost against the §6 budget bands. If YDT lands within band, the wave releases automatically; if above band, I countersign the variance.</li>
        <li>Sign the §8 sign-off block as YDT executor approver.</li>
        <li>Identify which member of your team will be the day-to-day operational counterpart for each Wave so we have a clear chain of contact.</li>
      </ol>
    </div>
  </section>
)

const CEWhatHappensNext = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.75; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">5 · What happens next when you both sign</h2>
    <p style="margin:0.8rem 0 1.2rem;">The moment both signatures land on the §8 block, I issue a single utterance — <strong>"PHASE 5 GO"</strong> — and production begins under the wave-plan locked in §4.</p>
    <div style="background:#fff; padding:1.4rem 1.6rem; border-radius:8px; border:1px solid #d4cfc4; margin:1rem 0;">
      <p style="margin:0 0 0.8rem;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Wave 1 (weeks 1–4) · the F2 anchors.</strong> YDT begins producing the 12 landing pages, the 3 lead-magnet PDFs (including the BCM Approval Pack), and the ~18 sales enablement docs. Budget release: <strong>$83k – $132k</strong>. These are the assets that convert qualified leads into customers. They are produced first because nothing downstream works without them.</p>
      <p style="margin:0 0 0.8rem;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Wave 2 (weeks 5–8) · the F1 acquisition fuel.</strong> YDT produces the 180 paid headlines, the 120 ad copy units, and the 67 partnership kits. Budget release: <strong>$41k – $63k</strong>. These are the assets that fill the funnel — you cannot fire ads without ads to fire.</p>
      <p style="margin:0;"><strong style="color:#1B3A5C; font-family:'Fraunces',serif;">Wave 3 (weeks 9–12) · the F2-to-F3 nurture machine.</strong> YDT produces the 45 CRM nurture emails and the 720-post year-one social calendar. Budget release: <strong>$59k – $87k</strong>. These are the assets that retain, re-engage, and produce the 30× lifetime value we modelled in Phase 2's bowtie funnel.</p>
    </div>
    <p style="margin:1rem 0 1.2rem;">At the end of each wave, the 12 Quality Gate exit criteria in §7 must clear before the next wave funds. This is the variance discipline that keeps the engagement on budget and on brief. If a wave fails its gate, that wave reworks before Wave-N+1 draws down its budget. No exceptions.</p>
    <p style="margin:0 0 1.2rem;">Twelve weeks after PHASE 5 GO, the boarding manifest is closed, the carriages are full of passengers, and the marketing mix is in market. That is the end-state we are working toward, and both of your signatures are what unlocks the first wave.</p>
  </section>
)

const CEClosing = () => (
  <section style="max-width:780px; margin:0 auto; padding:1rem 2rem 3rem; font-family:'Inter',sans-serif; font-size:1.02rem; line-height:1.8; color:#222;">
    <h2 style="font-family:'Fraunces',serif; color:#1B3A5C; font-size:1.7rem; margin:1.5rem 0 0.5rem; border-bottom:2px solid #B8743D; padding-bottom:0.4rem;">6 · Closing note</h2>
    <p style="margin:0.8rem 0 1.2rem;">A few months ago YBMT had three separate businesses with three separate sets of marketing instincts and no shared operating system. Today YBMT has a single integrated portfolio strategy, three line-of-business operating manuals, eleven cross-portfolio operating manuals, a handover protocol with YDT, and a production plan that costs every asset and sequences every wave.</p>
    <p style="margin:0 0 1.2rem;">The work that remains is the work of building the passengers — the actual creative — and that work begins only when both of you have read what I have written, accepted it, and signed off. I am asking you both to spend the time on this. The discipline of reading the strategy before approving the production is the discipline that makes the next twelve weeks predictable instead of chaotic.</p>
    <p style="margin:0 0 1.2rem;">The URL is <a href="https://strategy.cosaiybmtpool.org" style="color:#B8743D; font-weight:600;">strategy.cosaiybmtpool.org</a>. The Phase 5 sign-off block is at <a href="/phase-5-manifest#sec-8" style="color:#B8743D; font-weight:600;">/phase-5-manifest</a> §8. The boarding manifest is filed. The carriages are waiting.</p>
    <p style="margin:0 0 1.2rem;">If either of you would like to walk through the URL together on a screen-share before signing — I am available and recommend it. I would rather spend an hour with each of you on a screen-share than receive a signature you have not interrogated.</p>
    <p style="margin:1.5rem 0 0.4rem;">Yours in CFO-grade marketing governance,</p>
    <p style="margin:0; font-family:'Fraunces',serif; font-size:1.15rem; color:#1B3A5C;"><strong>Carla Oliver</strong></p>
    <p style="margin:0.1rem 0 0; font-size:0.92rem; color:#666;">CFO · CoSai CFO Services<br/>Acting CMO · YBMT Group</p>
  </section>
)

export const renderCoverEmail = () => (
  <>
    <CEHubBar />
    <CEHero />
    <UpstreamAnchor doc="Cover Email · Marketing Mix Railway · v1.0" />
    <CEFromBlock />
    <CEOpening />
    <CEWhatExists />
    <CENotYetBuilt />
    <CEHowToRead />
    <CEWhatINeed />
    <CEWhatHappensNext />
    <CEClosing />
  </>
)
