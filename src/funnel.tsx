import { TopNav } from './nav'

// Marketing Funnel deep-dive page.
// Worked example: YBMT Decks (Outdoor Entertainment / Pool Decking)
// Layers shown: Theory → 3-stage funnel → Digital content layer → Print content layer
//             → How the chain feeds the Sales Value Chain → Theory appendix

export const FunnelPage = () => (
  <div class="min-h-screen">
    <TopNav active="funnel" />

    {/* ===================== HERO ===================== */}
    <header class="max-w-[1100px] mx-auto px-6 lg:px-10 pt-14 pb-10">
      <div class="flex items-center gap-2 mb-5 flex-wrap">
        <span class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
          <span class="dot bg-[var(--ybmt-orange)]"></span> Worked Example · YBMT Decks
        </span>
        <span class="chip bg-[var(--ybmt-navy)]/10 text-[var(--ybmt-navy)]">
          <i class="fas fa-book text-[10px]"></i> Theory + Content
        </span>
        <a href="/" class="chip bg-white border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)]">
          <i class="fas fa-arrow-left text-[10px]"></i> Charter
        </a>
        <a href="/value-chain" class="chip bg-white border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)]">
          <i class="fas fa-diagram-project text-[10px]"></i> Value Chain
        </a>
      </div>

      <h1 class="display text-5xl md:text-6xl font-bold text-[var(--ybmt-navy)] leading-[1.05] mb-5">
        The Marketing Funnel
      </h1>
      <p class="text-xl text-[var(--ink-soft)] leading-relaxed max-w-3xl">
        How a stranger becomes a Request for Quote. The theory underneath, the content that does the work,
        and the metrics that prove it. Worked end-to-end on
        <span class="font-semibold text-[var(--ink)]"> YBMT Decks (Outdoor Entertainment & Pool Decking)</span> —
        the same architecture applies to Renovations and Termite Repairs.
      </p>

      {/* In-page nav */}
      <div class="mt-8 flex flex-wrap gap-2">
        {[
          { id: 'overview', label: 'Funnel overview' },
          { id: 'awareness', label: '1 · Awareness' },
          { id: 'consideration', label: '2 · Consideration' },
          { id: 'rfq', label: '3 · RFQ' },
          { id: 'digital', label: 'Digital media layer' },
          { id: 'print', label: 'Print media layer' },
          { id: 'handoff', label: 'Hand-off to sales' },
          { id: 'theory', label: 'Theory appendix' },
        ].map((l) => (
          <a href={`#${l.id}`} class="chip bg-white border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)] transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </header>

    {/* ===================== OVERVIEW: THE 3-STAGE FUNNEL ===================== */}
    <section id="overview" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          The funnel, end-to-end
        </h2>
        <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Theory + Reality</span>
      </div>
      <p class="text-[var(--ink-soft)] mb-10">
        Three psychological stages a buyer moves through. We measure each one. We have content for each one.
      </p>

      {/* Visual funnel — wider sections at top, narrower at bottom */}
      <div class="bg-white border border-[var(--line)] rounded-2xl p-6 lg:p-10 shadow-sm">
        {/* Stage 1 — Awareness */}
        <div class="relative">
          <div class="mx-auto bg-gradient-to-r from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-lg p-5 lg:p-6 shadow-sm" style="width: 100%;">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Stage 1 · Top of funnel</div>
                <div class="display text-2xl font-bold mt-1">Awareness</div>
                <div class="text-sm text-white/80 mt-1">
                  "I didn't know YBMT existed. Now I do, and I'm intrigued enough to click."
                </div>
              </div>
              <div class="text-right">
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Metric</div>
                <div class="display text-xl font-bold metric-num">Reach · Impressions · CTR</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center my-2"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

        {/* Stage 2 — Consideration */}
        <div class="relative">
          <div class="mx-auto bg-[var(--ybmt-navy-soft)] text-white rounded-lg p-5 lg:p-6 shadow-sm" style="width: 82%;">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Stage 2 · Middle of funnel</div>
                <div class="display text-2xl font-bold mt-1">Consideration</div>
                <div class="text-sm text-white/80 mt-1">
                  "I'm spending time on their site. I downloaded the Buyer's Guide. I'm comparing."
                </div>
              </div>
              <div class="text-right">
                <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Metric</div>
                <div class="display text-xl font-bold metric-num">Time-on-page · Downloads · Pages/session</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center my-2"><i class="fas fa-chevron-down text-[var(--ink-fade)]"></i></div>

        {/* Stage 3 — RFQ */}
        <div class="relative">
          <div class="mx-auto bg-[var(--ybmt-orange)] text-white rounded-lg p-5 lg:p-6 shadow-md" style="width: 60%;">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div class="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Stage 3 · Bottom of funnel</div>
                <div class="display text-2xl font-bold mt-1">RFQ — Request for Quote</div>
                <div class="text-sm text-white/90 mt-1">
                  "I'm raising my hand. Please quote my job."
                </div>
              </div>
              <div class="text-right">
                <div class="text-[10px] uppercase tracking-wider text-white/80 font-semibold">Metric</div>
                <div class="display text-xl font-bold metric-num">RFQs / week · Lead quality score</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 grid md:grid-cols-3 gap-4">
          <div class="border border-[var(--line)] rounded-lg p-4 bg-[var(--paper-warm)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">If Stage 1 underperforms</div>
            <p class="text-sm text-[var(--ink-soft)]">Not enough people see us. <strong>Spend more on paid, double down on SEO/AEO,</strong> get Gerry into more partnership rooms.</p>
          </div>
          <div class="border border-[var(--line)] rounded-lg p-4 bg-[var(--paper-warm)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">If Stage 2 underperforms</div>
            <p class="text-sm text-[var(--ink-soft)]">People arrive but bounce. <strong>Landing page copy, Buyer's Guide hook, proof system</strong> need work — the credibility layer is weak.</p>
          </div>
          <div class="border border-[var(--line)] rounded-lg p-4 bg-[var(--paper-warm)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">If Stage 3 underperforms</div>
            <p class="text-sm text-[var(--ink-soft)]">Engaged but won't ask. <strong>RFQ friction</strong> is the issue — too many form fields, no clear CTA, no trust signals at the moment of decision.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ===================== STAGE 1 — AWARENESS ===================== */}
    <StageDeepDive
      id="awareness"
      stage="1"
      title="Awareness"
      tagline="Buy attention. Earn attention. Borrow attention."
      icon="bullhorn"
      jobToBeDone={`"I have a backyard problem. I don't yet know who solves it."`}
      buyerState="Cold · Unaware of YBMT · May not yet know they want a deck"
      contentJob="Pattern interrupt. Get them to click. Plant the YBMT distinctive brand asset."
      kpiPrimary="CTR (Click-Through Rate)"
      kpiTargets={[
        { metric: 'Meta Ads CTR', target: '> 1.2%', source: 'Industry benchmark (home services AU)' },
        { metric: 'Google Search CTR (branded)', target: '> 15%', source: 'Brand recall test' },
        { metric: 'Google Search CTR (non-brand)', target: '> 3%', source: 'Industry benchmark' },
        { metric: 'GBP impressions / month', target: '> 5,000 per region', source: 'GBP analytics' },
      ]}
      theoryBlocks={[
        {
          title: 'Mental availability (Ehrenberg-Bass)',
          body: 'A buyer can only buy from brands they remember. Awareness builds the "memory structure" that gets YBMT into the consideration set the second a need arises.',
        },
        {
          title: '95-5 Rule (LinkedIn B2B Institute)',
          body: 'At any moment, only ~5% of your market is actively in-market. The other 95% are out-of-market — but they\'ll be in-market eventually. Awareness invests in the 95% so we get the call when they enter the 5%.',
        },
      ]}
    />

    {/* ===================== STAGE 2 — CONSIDERATION ===================== */}
    <StageDeepDive
      id="consideration"
      stage="2"
      title="Consideration"
      tagline="Earn the time. Earn the download. Earn the comparison."
      icon="magnifying-glass"
      jobToBeDone={`"I'm shortlisting 3–5 deck builders. Why YBMT?"`}
      buyerState="Warm · Aware of YBMT · Comparing against ≥2 competitors"
      contentJob="Demonstrate expertise. Reduce perceived risk. Make the comparison feel obvious."
      kpiPrimary="Time-on-page + Buyer's Guide download rate"
      kpiTargets={[
        { metric: 'Avg. time on Decks landing page', target: '> 2:30', source: 'GA4 engagement metric' },
        { metric: 'Pages per session', target: '> 2.5', source: 'GA4' },
        { metric: 'Buyer\'s Guide download conversion', target: '> 4% of unique visitors', source: 'Lead-magnet industry benchmark' },
        { metric: 'Bounce rate (landing pages)', target: '< 55%', source: 'GA4' },
      ]}
      theoryBlocks={[
        {
          title: 'Jobs To Be Done (Christensen)',
          body: 'The buyer isn\'t buying a deck — they\'re buying weekends with family, a property uplift, status with neighbours. The Buyer\'s Guide speaks to the job, not the product.',
        },
        {
          title: 'Trust transfer (Cialdini · Influence)',
          body: 'Authority (Gerry as named CEO), social proof (Google reviews + case studies), and consistency (the Buyer\'s Guide reinforces what the ad promised) compound credibility at the moment of comparison.',
        },
      ]}
    />

    {/* ===================== STAGE 3 — RFQ ===================== */}
    <StageDeepDive
      id="rfq"
      stage="3"
      title="RFQ — Request for Quote"
      tagline="Make it effortless. Make it obvious. Make it now."
      icon="handshake-angle"
      jobToBeDone={`"I'm ready to talk. Make it easy to ask."`}
      buyerState="Hot · Self-qualified · Decision-imminent within 14–60 days"
      contentJob="Remove friction. Capture context. Promise rapid response."
      kpiPrimary="RFQ submission rate + Lead quality"
      kpiTargets={[
        { metric: 'RFQ form completion rate', target: '> 30% of form-starters', source: 'Form analytics' },
        { metric: 'Visitor → RFQ conversion', target: '> 1.5%', source: 'Site-wide GA4 funnel' },
        { metric: 'Buyer\'s Guide downloader → RFQ', target: '> 12%', source: 'Lead-magnet attribution' },
        { metric: 'Lead-quality score (CRM-rated)', target: '≥ 7 / 10 average', source: 'Sales team rating at first contact' },
      ]}
      theoryBlocks={[
        {
          title: 'Conversion-rate optimisation (Bryan Eisenberg)',
          body: 'At the moment of action, every additional form field costs ~10% of completions. The RFQ asks for what we MUST know (job type, suburb, contact), nothing else. Qualification happens on the follow-up call, not the form.',
        },
        {
          title: 'Speed-to-lead (HBR · Oldroyd 2011)',
          body: 'Leads contacted within 5 minutes are 21× more likely to qualify than those contacted in 30 minutes. YBMT KPI: 4-hour first response, 24-hour quote turnaround. Speed compounds strike rate.',
        },
      ]}
    />

    {/* ===================== DIGITAL MEDIA LAYER ===================== */}
    <section id="digital" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-laptop text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          Digital Media Layer
        </h2>
        <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">The Stuff Online</span>
      </div>
      <p class="text-[var(--ink-soft)] mb-10 max-w-3xl">
        Four moving parts make the digital layer work: two <strong>traffic sources</strong> (Paid + Organic) push clicks
        into <strong>Landing Pages</strong> — the destination layer that converts those clicks into
        either a <strong>Buyer's Guide download</strong> (named lead) or a <strong>direct RFQ</strong> (hot lead). No
        landing pages = no measurement, no A/B test, no conversion. They're the hinge.
      </p>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* PAID */}
        <DigitalCard
          colour="orange"
          icon="dollar-sign"
          label="Paid Media"
          tagline="Buy attention"
          stage="Awareness → Consideration"
          intro="Money in, attention out. The fastest, most controllable traffic — but it stops when we stop spending."
          channels={[
            { name: 'Meta Ads (Facebook + Instagram)', detail: '10 ad variants across 3 audience segments (Renovators · Pool Owners · New Builds). 16:9 hero video + 9:16 vertical for Stories. Targeting: 30km radius of Brisbane / Gold Coast / Sunshine Coast.' },
            { name: 'Google Search Ads', detail: 'Branded ("ybmt decks brisbane") + non-brand ("pool deck builder gold coast"). Performance Max campaign per service line. Exact + phrase match keyword set.' },
            { name: 'Google Display & YouTube remarketing', detail: 'Re-engage anyone who hit the landing page but didn\'t convert. Lower-cost, higher-intent traffic.' },
          ]}
          assetExamples={[
            'meta-ad-copy-10-variants.html',
            'meta-ad-video-16x9.mp4',
            'meta-ad-video-9x16.mp4',
            'Google Search ad templates (× 9 — 3 service lines × 3 regions)',
            'UTM-tagged tracking links (per ad × per LP)',
          ]}
          economics="Pay-per-click. Cost per RFQ: ~$45–$120 in Y1, declining as creative + targeting matures."
        />

        {/* ORGANIC */}
        <DigitalCard
          colour="navy"
          icon="seedling"
          label="Organic Media"
          tagline="Earn attention"
          stage="Awareness → Consideration"
          intro="Time in, attention out. Slower to compound than paid — but it doesn't switch off when we stop paying."
          channels={[
            { name: 'Google Business Profile (GBP)', detail: '3 regional GBPs (BNE · GC · SC), each listing Decks + Renovations + Termite as service categories. Google reviews are the single highest-ROI organic asset.' },
            { name: 'SEO — service pages', detail: '/decks · /renovations · /termite-repairs landing pages built to rank for "deck builder Brisbane" and 300+ keyword variations across the 3×3 grid.' },
            { name: 'SEO — blog (5 cornerstone + supporting)', detail: '5 Decks articles already drafted. Topical authority cluster: pool decking, outdoor entertainment, timber vs composite, QBCC compliance, maintenance.' },
            { name: 'AEO (Answer Engine Optimisation)', detail: 'Schema-marked-up FAQ pages designed to be cited by ChatGPT, Perplexity, Google AI Overview when buyers ask "best deck builder in Brisbane".' },
            { name: 'Social (Instagram + Facebook + LinkedIn)', detail: 'Process · proof · personality · promotion · partnership. Single @ybmt handle per platform, content tagged by service line.' },
          ]}
          assetExamples={[
            'seo-blog-posts-5-articles.html',
            'GBP profile × 3 regions (pending)',
            'Schema-marked FAQ snippets (pending)',
            'Social content calendar (pending)',
            'UTM-tagged social bio + post links',
          ]}
          economics="Compounds over 6–18 months. Cost per RFQ approaches near-zero at maturity. Highest-ROI long-term."
        />

        {/* LANDING PAGES — the destination layer */}
        <DigitalCard
          colour="violet"
          icon="bullseye"
          label="Landing Pages"
          tagline="Convert the click"
          stage="Awareness → Consideration → RFQ"
          intro="Where every paid and organic click LANDS. This is the destination layer — the hinge between traffic and conversion. UTM tags on every inbound link tell us exactly which ad / post / channel sent the visitor, so every dollar and every hour is attributable."
          channels={[
            { name: '9 × Service-Region LPs (the 3×3 grid)', detail: '/decks/brisbane · /decks/gold-coast · /decks/sunshine-coast (and same for Renovations, Termite Repairs). Each LP localised: regional photos, regional QBCC reference, regional postcode in copy, regional testimonials. Same conversion structure, different proof.' },
            { name: 'Campaign-specific LPs (paid traffic)', detail: '/lp/pool-decking-bne, /lp/composite-decks-gc — narrow-promise pages with one CTA. Used for Meta + Google Ads. Match the ad creative word-for-word (message match → higher Quality Score → lower CPC).' },
            { name: 'UTM-tag schema (every inbound link)', detail: 'utm_source (meta · google · gbp · email · social · referral) · utm_medium (cpc · organic · social · email · referral) · utm_campaign (decks-bne-pool · termite-gc-q2) · utm_content (ad variant A/B/C) · utm_term (keyword). Captured in GA4 + CRM lead record.' },
            { name: 'On-page conversion mechanics', detail: 'Above-the-fold: regional hook + 1 hero image + 2 CTAs (Get Quote · Download Buyer\'s Guide). Social proof block (Google reviews + QBCC licence + insurance badges). FAQ accordion. Trust footer.' },
            { name: 'Page-speed + Core Web Vitals', detail: 'LCP <2.5s, CLS <0.1, mobile-first. Every 1s of LP load delay = ~7% drop in conversion (Akamai/Portent benchmarks). Non-negotiable.' },
          ]}
          assetExamples={[
            'lp-decks-{region}.html × 3 (status: PENDING — must be built)',
            'lp-pool-decking-campaign.html (paid match)',
            'utm-builder.xlsx (Gerry + agency reference)',
            'GA4 + GTM container + conversion events',
            'A/B test register (hero copy · CTA · proof block)',
          ]}
          economics="Build once + iterate. A +0.5% LP→RFQ lift on 600 visits/wk = +3 RFQs/wk = ~$35K extra quotes/wk. Cheapest lever on the board."
        />

        {/* LEAD MAGNET */}
        <DigitalCard
          colour="emerald"
          icon="book-open"
          label="Buyer's Guide"
          tagline="Capture intent"
          stage="Consideration → RFQ"
          intro="The middle-of-funnel hinge. Downloads convert anonymous traffic into named, sequenced leads."
          channels={[
            { name: '15-page YBMT Decks Buyer\'s Guide', detail: 'Gerry McGuire-voiced. Walks the buyer through: how to choose a deck builder, common mistakes, materials comparison, QBCC compliance, cost ranges, questions to ask.' },
            { name: 'Gated download form', detail: 'Email + name + suburb + job type. Email triggers the 9-flow lifecycle automation.' },
            { name: 'Re-qualification mechanism', detail: 'Downloaders are 12× more likely to RFQ than non-downloaders. The guide pre-sells YBMT before sales ever speak to them.' },
          ]}
          assetExamples={[
            'buyers-guide-15-pages-UPDATED.html (status: SALVAGE — strongest existing asset)',
            'Download landing page',
            'Email sequence (Flow 1 of 9 — Welcome)',
          ]}
          economics="Build once, runs forever. Cost per qualified lead falls to <$10 once traffic flows."
        />
      </div>

      {/* SUMMARY ROW */}
      <div class="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
          <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Year 1 traffic mix</div>
          <p class="text-[var(--ink-soft)]"><strong>Paid 65% · Organic 25% · Lead magnet 10%.</strong> Heavy on paid because organic hasn't compounded yet. All traffic — paid + organic — lands on the same LP grid.</p>
        </div>
        <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
          <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Year 3 traffic mix</div>
          <p class="text-[var(--ink-soft)]"><strong>Paid 35% · Organic 50% · Lead magnet 15%.</strong> Compounding organic does the heavy lifting; paid becomes a sharpener, not a crutch.</p>
        </div>
        <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
          <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">What it all funnels into</div>
          <p class="text-[var(--ink-soft)]">Traffic → <strong>UTM-tagged Landing Page</strong> → one of two destinations: <strong>Buyer's Guide download</strong> (named lead) or <strong>RFQ form</strong> (hot lead). No dead ends, no untracked clicks.</p>
        </div>
      </div>

      {/* ===== UTM + LP ARCHITECTURE DEEP-DIVE ===== */}
      <div class="mt-8 bg-white border border-[var(--line)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div class="flex items-baseline justify-between mb-4">
          <h3 class="display text-2xl font-bold text-[var(--ybmt-navy)]">
            <i class="fas fa-tags text-[#7e57c2] mr-2"></i>
            UTM + Landing Page architecture
          </h3>
          <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">How attribution actually works</span>
        </div>
        <p class="text-sm text-[var(--ink-soft)] mb-6 leading-relaxed max-w-3xl">
          A UTM tag is a string appended to a URL that tells Google Analytics + the CRM <em>where the click came from</em>.
          Without UTMs, every visitor looks like "direct / unknown" and we can't tell whether $1 spent on Meta beats $1 spent
          on Google — or whether Gerry's LinkedIn post drove more RFQs than the Friday Facebook ad. With UTMs, every cent is attributable.
        </p>

        {/* UTM schema */}
        <div class="mb-7">
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">The schema — every inbound link uses these 5 fields</div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm border border-[var(--line)] rounded-lg overflow-hidden">
              <thead class="bg-[var(--paper-warm)] text-[var(--ink)]">
                <tr>
                  <th class="text-left px-3 py-2 font-semibold">Parameter</th>
                  <th class="text-left px-3 py-2 font-semibold">Means</th>
                  <th class="text-left px-3 py-2 font-semibold">Example values (YBMT Decks)</th>
                </tr>
              </thead>
              <tbody class="text-[var(--ink-soft)]">
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2"><code class="text-[12px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">utm_source</code></td>
                  <td class="px-3 py-2">The platform / referrer</td>
                  <td class="px-3 py-2"><code class="text-[11px]">meta</code> · <code class="text-[11px]">google</code> · <code class="text-[11px]">gbp</code> · <code class="text-[11px]">linkedin</code> · <code class="text-[11px]">referral-partner</code></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2"><code class="text-[12px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">utm_medium</code></td>
                  <td class="px-3 py-2">The marketing type</td>
                  <td class="px-3 py-2"><code class="text-[11px]">cpc</code> · <code class="text-[11px]">organic</code> · <code class="text-[11px]">social</code> · <code class="text-[11px]">email</code> · <code class="text-[11px]">referral</code></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2"><code class="text-[12px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">utm_campaign</code></td>
                  <td class="px-3 py-2">The campaign name (LOB-region-theme)</td>
                  <td class="px-3 py-2"><code class="text-[11px]">decks-bne-pool-q1</code> · <code class="text-[11px]">termite-gc-warranty</code></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2"><code class="text-[12px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">utm_content</code></td>
                  <td class="px-3 py-2">Which creative / variant</td>
                  <td class="px-3 py-2"><code class="text-[11px]">video-16x9-A</code> · <code class="text-[11px]">hero-pool-deck</code> · <code class="text-[11px]">cta-quote-orange</code></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2"><code class="text-[12px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">utm_term</code></td>
                  <td class="px-3 py-2">Keyword (search ads) or audience tag</td>
                  <td class="px-3 py-2"><code class="text-[11px]">pool+deck+builder</code> · <code class="text-[11px]">renovators-30km</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Worked example */}
        <div class="mb-7 p-4 rounded-lg bg-[var(--paper-warm)] border-l-4 border-[#7e57c2]">
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Worked example — one tagged Meta ad click</div>
          <code class="text-xs text-[var(--ink)] break-all leading-relaxed">
            https://ybmt.com.au/decks/brisbane?<strong class="text-[#7e57c2]">utm_source=meta</strong>&<strong class="text-[#7e57c2]">utm_medium=cpc</strong>&<strong class="text-[#7e57c2]">utm_campaign=decks-bne-pool-q1</strong>&<strong class="text-[#7e57c2]">utm_content=video-16x9-A</strong>&<strong class="text-[#7e57c2]">utm_term=renovators-30km</strong>
          </code>
          <p class="text-xs text-[var(--ink-soft)] mt-3">
            When that visitor submits an RFQ, the CRM lead record stores all 5 UTM values plus the LP they landed on.
            We can now answer: <em>"Of our Y1 revenue, what % was sourced from Meta video-A vs Google branded search vs GBP organic?"</em>
          </p>
        </div>

        {/* The 3x3 LP grid */}
        <div class="mb-3">
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-3">The 3 × 3 Landing Page grid — 9 evergreen destinations</div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-xs border border-[var(--line)] rounded-lg overflow-hidden">
              <thead class="bg-[var(--ybmt-navy)] text-white">
                <tr>
                  <th class="text-left px-3 py-2 font-semibold">Service line ↓ / Region →</th>
                  <th class="text-left px-3 py-2 font-semibold">Brisbane</th>
                  <th class="text-left px-3 py-2 font-semibold">Gold Coast</th>
                  <th class="text-left px-3 py-2 font-semibold">Sunshine Coast</th>
                </tr>
              </thead>
              <tbody class="text-[var(--ink-soft)]">
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2 font-semibold text-[var(--ybmt-navy)]">YBMT Decks</td>
                  <td class="px-3 py-2"><code class="text-[11px]">/decks/brisbane</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/decks/gold-coast</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/decks/sunshine-coast</code></td>
                </tr>
                <tr class="border-t border-[var(--line)] bg-[var(--paper-warm)]/50">
                  <td class="px-3 py-2 font-semibold text-[var(--ybmt-navy)]">YBMT Renovations</td>
                  <td class="px-3 py-2"><code class="text-[11px]">/renovations/brisbane</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/renovations/gold-coast</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/renovations/sunshine-coast</code></td>
                </tr>
                <tr class="border-t border-[var(--line)]">
                  <td class="px-3 py-2 font-semibold text-[var(--ybmt-navy)]">YBMT Termite Repairs</td>
                  <td class="px-3 py-2"><code class="text-[11px]">/termite-repairs/brisbane</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/termite-repairs/gold-coast</code></td>
                  <td class="px-3 py-2"><code class="text-[11px]">/termite-repairs/sunshine-coast</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-[var(--ink-soft)] mt-3">
            Plus <strong>campaign-specific LPs</strong> for short-lived paid promos (<code class="text-[11px]">/lp/pool-decking-bne-summer</code>) which message-match the ad creative for higher Quality Score and lower CPC.
          </p>
        </div>

        {/* Why this matters */}
        <div class="mt-6 grid md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Attribution</div>
            <p class="text-[var(--ink-soft)]">Every signed contract can be traced back to the exact ad, post, or referral that started the journey.</p>
          </div>
          <div class="p-3 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">A/B testing</div>
            <p class="text-[var(--ink-soft)]">Two ad variants, same LP → CTR + conversion compared. Or same ad, two LPs → message-match impact measured.</p>
          </div>
          <div class="p-3 rounded-lg bg-white border border-[var(--line)]">
            <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Budget allocation</div>
            <p class="text-[var(--ink-soft)]">Stop guessing. The channel with the lowest cost-per-RFQ and highest LP→RFQ rate gets next month's budget lift.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ===================== PRINT MEDIA LAYER ===================== */}
    <section id="print" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-file-pdf text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          Print Media Layer
        </h2>
        <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Gerry's BD Pack</span>
      </div>
      <p class="text-[var(--ink-soft)] mb-10 max-w-3xl">
        Three credibility assets Gerry hands over after the meet-and-greet — the "we left you with some
        information" follow-up moment from Value Chain Stage A. Print-grade PDFs designed to be opened,
        skimmed, and re-shared inside the buyer's household or boardroom.
      </p>

      <div class="grid lg:grid-cols-3 gap-5">
        {/* CAPABILITY STATEMENT */}
        <PrintCard
          icon="id-card-clip"
          label="Capability Statement"
          purpose="Prove we exist, we're licensed, we're real."
          stage="After first meeting · Within 24 hrs"
          length="2 pages · A4 · PDF"
          audience="Anyone who needs to do due diligence — strata committees, property managers, owner-builders, channel partners."
          contains={[
            'QBCC licence 15030821 (front and centre)',
            'ABN 74 076 531 765',
            'Named CEO: Gerry McGuire',
            'Regions: Brisbane · Gold Coast · Sunshine Coast',
            'Service lines: Decks · Renovations · Termite Repairs',
            'Insurance status (PI / PL when bound)',
            'Warranty position (QBCC statutory: 6.5yr structural / 12mo non-structural)',
            'Recent project photography (3–4 hero images)',
            '3–5 short testimonials with attribution',
          ]}
          variants="One per service line × one per region. Two variants per LOB: Channel-Buyer (for partners) and End-Buyer (for customers)."
          status="REWRITE — 3 existing statements have segmentation defects (PM-template bleed)"
        />

        {/* BUYER'S GUIDE */}
        <PrintCard
          icon="book"
          label="Buyer's Guide"
          purpose="Educate the buyer. Pre-sell YBMT. Reduce comparison fatigue."
          stage="After first meeting · Or self-downloaded online"
          length="15 pages · A4 · PDF · Print-ready"
          audience="End-buyer (homeowner / unit-owner) seriously evaluating a deck project."
          contains={[
            'How to choose a deck builder (5 questions to ask)',
            'Materials guide: timber vs composite vs aluminium',
            'QBCC compliance — what to verify',
            'Cost ranges by region and project type',
            'Common mistakes that cost $5K–$20K',
            'Project timeline expectations',
            'Maintenance and warranty walk-through',
            'Gerry McGuire founder letter (named CEO)',
            'Next steps: how to get a YBMT quote',
          ]}
          variants="One per service line. Decks version exists and is the strongest single asset in the kit."
          status="SALVAGE — visual rebrand to master identity only"
        />

        {/* PARTNERSHIP / REFERRAL KIT */}
        <PrintCard
          icon="handshake"
          label="Partnership / Referral Kit"
          purpose="Convert a peer into a paid referral channel."
          stage="After Gerry meets an architect, pool builder, RE agent, pest controller"
          length="8 pages · A4 · PDF"
          audience="Channel partners: architects, pool builders, real estate agents (Decks); pest control firms (Termite); strata/PM firms (Renovations)."
          contains={[
            'How YBMT shows up for a partner\'s client (the partner\'s reputation is protected)',
            'Referral mechanic: 7% of contract value, capped at $3,000 per job',
            'Payment trigger: only on collected revenue (not invoiced)',
            'Service Agreement template (one-pager preview)',
            'What a "good fit" referral looks like (job type, region, budget band)',
            'How to make the referral (call, email template, online form)',
            'Partner onboarding pack: 4-week ramp',
            'Co-branded marketing assets available to active partners',
          ]}
          variants="One per service line. Partner archetypes differ: Decks = architects/pool builders/RE; Renovations = strata/PM/RE; Termite = pest control firms."
          status="REWRITE — existing Decks kit has 5% fee (must update to 7%/$3K cap)"
        />
      </div>

      {/* GERRY'S MOMENT */}
      <div class="mt-8 callout p-6 rounded-lg">
        <div class="flex items-start gap-4">
          <i class="fas fa-quote-left text-2xl text-[var(--ybmt-orange)] mt-1"></i>
          <div>
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Gerry's exact words</div>
            <p class="text-lg leading-relaxed text-[var(--ink)] italic">
              "Great chatting today. Following up on our chat / meeting — please find attached the YBMT
              capability statement, our Buyer's Guide, and our Partnership Kit. Have a flick through
              when you've got 10 minutes, and I'll give you a call Thursday to answer any questions."
            </p>
            <div class="text-sm text-[var(--ink-soft)] mt-3">
              This email is sent within 24 hrs of every first conversation. It's the consistent BD ritual
              that turns a friendly chat into a sequenced opportunity.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===================== HAND-OFF TO SALES VALUE CHAIN ===================== */}
    <section id="handoff" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-right-left text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          How the marketing funnel feeds the sales value chain
        </h2>
      </div>
      <p class="text-[var(--ink-soft)] mb-10 max-w-3xl">
        The marketing funnel ends where the sales value chain begins. One continuous chain from
        stranger to paid invoice.
      </p>

      {/* Combined visual flow */}
      <div class="bg-white border border-[var(--line)] rounded-2xl p-6 lg:p-8 shadow-sm">
        {/* Top label */}
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="text-center">
            <div class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
              <i class="fas fa-bullhorn"></i> Pre-Sales · Marketing Funnel
            </div>
          </div>
          <div class="text-center">
            <div class="chip bg-[var(--emerald)]/10 text-[var(--emerald)]">
              <i class="fas fa-money-bill-trend-up"></i> Post-Sales · Value Chain
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-7 gap-2 items-stretch">
          {/* Marketing funnel side */}
          <FlowPill colour="navy" label="Awareness" sub="Digital + Print" />
          <FlowArrow />
          <FlowPill colour="navy-soft" label="Consideration" sub="Buyer's Guide" />
          <FlowArrow />
          <FlowPill colour="orange" label="RFQ" sub="Form / Verbal" />
          <FlowArrow strong />
          {/* Value chain side */}
          <FlowPill colour="emerald" label="Quote → Job → Cash" sub="Stages B · C · D" />
        </div>

        <div class="mt-8 pt-6 border-t border-[var(--line)] grid md:grid-cols-3 gap-5 text-sm">
          <div class="p-4 bg-[var(--paper-warm)] rounded-lg">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Pre-sales job</div>
            <p class="text-[var(--ink-soft)]"><strong>Marketing's only job</strong> is to make the phone ring with qualified RFQs. Everything before "RFQ" is marketing's problem.</p>
          </div>
          <div class="p-4 bg-[var(--paper-warm)] rounded-lg">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">The hand-off</div>
            <p class="text-[var(--ink-soft)]">An RFQ enters the CRM with channel attribution intact. Sales (Stage B) picks it up within 4 hours. No leads are lost between marketing and sales.</p>
          </div>
          <div class="p-4 bg-[var(--paper-warm)] rounded-lg">
            <div class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Post-sales job</div>
            <p class="text-[var(--ink-soft)]"><strong>Sales' only job</strong> is to convert RFQs into signed contracts at 50–75% strike rate, then deliver at 34% GP margin.</p>
          </div>
        </div>

        <div class="mt-6 p-5 bg-[var(--ybmt-navy)] text-white rounded-lg">
          <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange-soft)] font-semibold mb-2">The unbroken chain</div>
          <p class="leading-relaxed">
            Awareness → Consideration → RFQ → Quote → Won → Contract → Delivered → Cash → Reviewed → Referred.
            Every step has an owner, a system, and a KPI. <strong class="text-[var(--ybmt-orange-soft)]">No one stage owns the business.</strong>
            The business is the chain.
          </p>
        </div>
      </div>
    </section>

    {/* ===================== METRICS DASHBOARD MOCKUP ===================== */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-gauge-high text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          The funnel scoreboard (Year 1 targets)
        </h2>
      </div>
      <p class="text-[var(--ink-soft)] mb-10">Decks Year 1 working numbers — what "on track" looks like, week by week.</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScoreCard label="Reach / week" value="~25,000" sub="Paid + Organic combined" tone="navy" />
        <ScoreCard label="Site visits / week" value="~600" sub="UTM-tracked LP loads (Decks)" tone="navy" />
        <ScoreCard label="LP → RFQ rate" value=">1.5%" sub="Direct LP form submits" tone="orange" />
        <ScoreCard label="Buyer's Guide DLs / week" value="~24" sub="4% of unique visitors" tone="emerald" />
        <ScoreCard label="RFQs / week" value="~9" sub="1.5% of visits · 12% of guide DLs" tone="orange" />
        <ScoreCard label="Quotes issued / week" value="$200K" sub="From RFQs converted to formal quotes" tone="navy" />
        <ScoreCard label="Strike rate" value="50–75%" sub="Quotes → signed contracts" tone="orange" />
        <ScoreCard label="Sales won / week" value="$100K–$150K" sub="Year 1 run-rate to $5M revenue" tone="emerald" />
        <ScoreCard label="Cost / RFQ" value="$45–$120" sub="Falling as creative + targeting mature" tone="navy" />
      </div>

      <div class="mt-6 p-5 rounded-lg bg-[var(--paper-warm)] border border-[var(--line)] text-sm text-[var(--ink-soft)]">
        <i class="fas fa-circle-info text-[var(--ybmt-orange)] mr-2"></i>
        <strong class="text-[var(--ink)]">These numbers are the Pillar-12 instrumentation surface.</strong> Without them
        being captured in real time (CRM + GA4 + ad platform APIs), this entire page is a story.
        With them, it's a scoreboard. The custom CRM appraisal (D7) determines how this is wired.
      </div>
    </section>

    {/* ===================== THEORY APPENDIX ===================== */}
    <section id="theory" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-graduation-cap text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          Appendix · Theory & Sources
        </h2>
      </div>
      <p class="text-[var(--ink-soft)] mb-10 max-w-3xl">
        Every decision on this page is anchored to a published source. This is the bibliography.
        If a finance director, a marketing hire, or a Sinbau board observer wants to pressure-test
        the funnel logic, this is where they go.
      </p>

      <div class="bg-white border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm">
        {[
          {
            theory: 'Ehrenberg-Bass Distinctive Brand Assets (DBA)',
            authors: 'Sharp, B. (2010) · How Brands Grow · Oxford University Press',
            relevance: 'Why we lock one master visual identity (YBMT navy/orange/white) and never fragment into sub-brands. DBAs only compound if consistently applied.',
            applied: 'D1 lock · Naming Convention v1.0 · Pillar 1 brand identity',
          },
          {
            theory: '95-5 Rule',
            authors: 'Romaniuk, J. & Sharp, B. via LinkedIn B2B Institute (2021)',
            relevance: 'At any moment ~95% of buyers are out-of-market. Awareness invests in the 95% so we get the call when they enter the 5%.',
            applied: 'Year 1 paid mix (65% paid) + sustained organic build',
          },
          {
            theory: 'Mental availability + Physical availability',
            authors: 'Romaniuk, J. (2018) · Building Distinctive Brand Assets',
            relevance: 'A buyer must remember us (mental) AND find us easily (physical). Print pack + digital footprint + GBP + paid + organic are all physical availability.',
            applied: 'Print media layer + Digital media layer (this page)',
          },
          {
            theory: 'Jobs To Be Done (JTBD)',
            authors: 'Christensen, C. et al. (2016) · Competing Against Luck · HarperBusiness',
            relevance: 'Buyers don\'t buy products, they hire products to do a job. YBMT Decks isn\'t selling timber — it\'s selling weekends with family, status with neighbours, property uplift.',
            applied: 'Buyer\'s Guide content structure · Landing page copy hierarchy',
          },
          {
            theory: 'Influence — six principles',
            authors: 'Cialdini, R. (1984/2021) · Influence · Harper Business',
            relevance: 'Authority, social proof, consistency, reciprocity, scarcity, liking. Used deliberately in the Buyer\'s Guide and the Stage 2 trust system.',
            applied: 'Buyer\'s Guide founder letter (authority) · Reviews (social proof) · Ad-to-page-to-guide consistency',
          },
          {
            theory: 'Speed-to-lead research',
            authors: 'Oldroyd, J. et al. (2011) · HBR · "The Short Life of Online Sales Leads"',
            relevance: 'Leads contacted within 5 minutes are 21× more likely to qualify than at 30 minutes. Speed compounds strike rate.',
            applied: 'YBMT KPI: 4-hr first response · 24-hr quote turnaround · Stage B value chain',
          },
          {
            theory: 'Hierarchy of Effects (AIDA / modern variants)',
            authors: 'Lavidge & Steiner (1961) · St. Elmo Lewis (1898 original)',
            relevance: 'Attention → Interest → Desire → Action. The 3-stage funnel (Awareness → Consideration → RFQ) is the modern compression of this hierarchy.',
            applied: 'Funnel stage definitions · KPI selection per stage',
          },
          {
            theory: 'Conversion Rate Optimisation (CRO)',
            authors: 'Eisenberg, B. (2008) · Always Be Testing · Wiley',
            relevance: 'Every form field costs ~10% of completions. RFQ form keeps only must-have fields; qualification happens on the follow-up call.',
            applied: 'RFQ form design · Stage 3 conversion targets',
          },
          {
            theory: 'Marketing-Sales SLA (Service Level Agreement)',
            authors: 'HubSpot research (Halligan & Shah, 2014)',
            relevance: 'When marketing and sales sign a formal hand-off agreement, qualified-lead conversion improves 38–67%. Marketing\'s job ends at "RFQ in CRM with attribution intact."',
            applied: 'Hand-off section (this page) · CRM deal-creation rule · Stage B value chain',
          },
          {
            theory: 'Compounding asset thesis',
            authors: 'Multiple sources incl. Buffer/Ahrefs longitudinal SEO data',
            relevance: 'Organic content (SEO, GBP reviews, social proof) compounds non-linearly over 6–18 months. Year 1 mix is 65% paid; Year 3 mix flips to 50% organic as compounding takes hold.',
            applied: 'Year 1 → Year 3 channel mix shift · Pillar 4 SEO/GEO/AEO',
          },
        ].map((row, i, arr) => (
          <div class={`p-5 ${i < arr.length - 1 ? 'border-b border-[var(--line)]' : ''} hover:bg-[var(--paper-warm)] transition-colors`}>
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-[var(--ybmt-navy)] text-base">{row.theory}</div>
                <div class="text-xs text-[var(--ink-fade)] mt-0.5 italic">{row.authors}</div>
                <p class="text-sm text-[var(--ink-soft)] mt-2 leading-relaxed">{row.relevance}</p>
              </div>
              <div class="md:w-64 md:flex-shrink-0">
                <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Applied at YBMT in</div>
                <div class="text-xs text-[var(--ink)] bg-[var(--ybmt-orange)]/8 border border-[var(--ybmt-orange)]/25 rounded p-2">{row.applied}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ===================== FOOTER ===================== */}
    <footer class="max-w-[1100px] mx-auto px-6 lg:px-10 pb-16">
      <div class="border-t border-[var(--line)] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--ink-fade)]">
        <div class="flex items-center gap-4">
          <div class="w-7 h-7 rounded bg-[var(--ybmt-navy)] flex items-center justify-center text-white font-bold text-xs">Y</div>
          <div>
            <div class="font-semibold text-[var(--ink-soft)]">YBMT Marketing Funnel · v1.0</div>
            <div>Worked example: YBMT Decks · 2026-06-23</div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 md:gap-6">
          <a href="/" class="hover:text-[var(--ybmt-orange)]"><i class="fas fa-house mr-1"></i> Charter</a>
          <a href="/value-chain" class="hover:text-[var(--ybmt-orange)]"><i class="fas fa-diagram-project mr-1"></i> Value Chain</a>
          <span><i class="fas fa-id-card mr-1"></i> QBCC 15030821</span>
        </div>
      </div>
    </footer>
  </div>
)

// ============== SUB-COMPONENTS ==============

type TheoryBlock = { title: string; body: string }
type KPI = { metric: string; target: string; source: string }

type StageDeepDiveProps = {
  id: string
  stage: string
  title: string
  tagline: string
  icon: string
  jobToBeDone: string
  buyerState: string
  contentJob: string
  kpiPrimary: string
  kpiTargets: KPI[]
  theoryBlocks: TheoryBlock[]
}

const StageDeepDive = ({ id, stage, title, tagline, icon, jobToBeDone, buyerState, contentJob, kpiPrimary, kpiTargets, theoryBlocks }: StageDeepDiveProps) => (
  <section id={id} class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16 read-section">
    <div class="flex items-start gap-5 mb-6">
      <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--ybmt-orange)] to-[var(--ybmt-orange-soft)] text-white flex items-center justify-center display text-2xl font-bold shadow-md">
        {stage}
      </div>
      <div class="flex-1">
        <div class="text-[11px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Funnel stage {stage}</div>
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)] leading-tight">
          <i class={`fas fa-${icon} text-[var(--ybmt-orange)] mr-2 text-xl`}></i>
          {title}
        </h2>
        <div class="text-sm text-[var(--ink-soft)] mt-1 italic">{tagline}</div>
      </div>
    </div>

    {/* JTBD + state + content job */}
    <div class="grid md:grid-cols-3 gap-4 mb-5">
      <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">
          <i class="fas fa-user mr-1"></i> Buyer state
        </div>
        <p class="text-sm text-[var(--ink)]">{buyerState}</p>
      </div>
      <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">
          <i class="fas fa-comment-dots mr-1"></i> Job to be done
        </div>
        <p class="text-sm text-[var(--ink)] italic">{jobToBeDone}</p>
      </div>
      <div class="p-4 bg-white border border-[var(--line)] rounded-lg">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">
          <i class="fas fa-bullseye mr-1"></i> Content's job
        </div>
        <p class="text-sm text-[var(--ink)]">{contentJob}</p>
      </div>
    </div>

    {/* KPIs + Theory side-by-side */}
    <div class="grid lg:grid-cols-2 gap-4">
      {/* KPI block */}
      <div class="bg-[var(--ybmt-navy)] text-white rounded-xl p-5">
        <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-3">
          <i class="fas fa-gauge-high mr-1"></i> KPIs · Primary: {kpiPrimary}
        </div>
        <div class="space-y-3">
          {kpiTargets.map((k) => (
            <div class="bg-white/5 border border-white/10 rounded-lg p-3">
              <div class="flex items-baseline justify-between gap-3">
                <div class="text-sm font-medium">{k.metric}</div>
                <div class="display text-base font-bold text-[var(--ybmt-orange-soft)] metric-num whitespace-nowrap">{k.target}</div>
              </div>
              <div class="text-[10px] text-white/50 mt-1">Source: {k.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Theory block */}
      <div class="bg-white border border-[var(--line)] rounded-xl p-5">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-3">
          <i class="fas fa-book mr-1"></i> Why this works — the theory
        </div>
        <div class="space-y-3">
          {theoryBlocks.map((t) => (
            <div class="border-l-2 border-[var(--ybmt-orange)] pl-3">
              <div class="text-sm font-semibold text-[var(--ybmt-navy)]">{t.title}</div>
              <p class="text-xs text-[var(--ink-soft)] mt-1 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
        <div class="mt-4 pt-3 border-t border-[var(--line)] text-[10px] text-[var(--ink-fade)]">
          <i class="fas fa-link mr-1"></i> Full sources in the Theory Appendix below.
        </div>
      </div>
    </div>
  </section>
)

// Digital media card
type Channel = { name: string; detail: string }
type DigitalCardProps = {
  colour: 'orange' | 'navy' | 'emerald' | 'violet'
  icon: string
  label: string
  tagline: string
  stage: string
  intro: string
  channels: Channel[]
  assetExamples: string[]
  economics: string
}

const DigitalCard = ({ colour, icon, label, tagline, stage, intro, channels, assetExamples, economics }: DigitalCardProps) => {
  const headerCls = colour === 'orange'
    ? 'bg-gradient-to-br from-[var(--ybmt-orange)] to-[var(--ybmt-orange-soft)] text-white'
    : colour === 'navy'
    ? 'bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white'
    : colour === 'violet'
    ? 'bg-gradient-to-br from-[#5b3a8a] to-[#7e57c2] text-white'
    : 'bg-gradient-to-br from-[var(--emerald)] to-[#3a8f70] text-white'

  return (
    <div class="bg-white border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div class={`${headerCls} px-5 py-4`}>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-[10px] uppercase tracking-wider text-white/70 font-semibold">{stage}</div>
            <div class="font-bold display text-xl mt-0.5">
              <i class={`fas fa-${icon} mr-2`}></i>
              {label}
            </div>
          </div>
        </div>
        <div class="text-xs text-white/80 mt-1 italic">{tagline}</div>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <p class="text-sm text-[var(--ink-soft)] mb-4 leading-relaxed">{intro}</p>

        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Channels</div>
        <div class="space-y-3 mb-5">
          {channels.map((c) => (
            <div class="border-l-2 border-[var(--ybmt-orange)] pl-3">
              <div class="text-sm font-semibold text-[var(--ybmt-navy)]">{c.name}</div>
              <div class="text-xs text-[var(--ink-soft)] mt-0.5 leading-relaxed">{c.detail}</div>
            </div>
          ))}
        </div>

        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Actual assets · Decks LOB</div>
        <ul class="space-y-1 mb-5">
          {assetExamples.map((a) => (
            <li class="text-xs text-[var(--ink-soft)] flex items-start gap-2">
              <i class="fas fa-file text-[var(--ink-fade)] mt-0.5 text-[10px]"></i>
              <code class="text-[11px] bg-[var(--paper-warm)] px-1.5 py-0.5 rounded">{a}</code>
            </li>
          ))}
        </ul>

        <div class="mt-auto pt-4 border-t border-[var(--line)]">
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Economics</div>
          <div class="text-xs text-[var(--ink)]">{economics}</div>
        </div>
      </div>
    </div>
  )
}

// Print media card
type PrintCardProps = {
  icon: string
  label: string
  purpose: string
  stage: string
  length: string
  audience: string
  contains: string[]
  variants: string
  status: string
}

const PrintCard = ({ icon, label, purpose, stage, length, audience, contains, variants, status }: PrintCardProps) => (
  <div class="bg-white border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm flex flex-col">
    <div class="bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white px-5 py-4">
      <div class="font-bold display text-xl">
        <i class={`fas fa-${icon} mr-2 text-[var(--ybmt-orange-soft)]`}></i>
        {label}
      </div>
      <div class="text-xs text-white/80 mt-1 italic">{purpose}</div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div>
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">When sent</div>
          <div class="text-xs text-[var(--ink)] mt-0.5">{stage}</div>
        </div>
        <div>
          <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Format</div>
          <div class="text-xs text-[var(--ink)] mt-0.5">{length}</div>
        </div>
      </div>

      <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Audience</div>
      <p class="text-xs text-[var(--ink-soft)] mb-4 leading-relaxed">{audience}</p>

      <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">Contains</div>
      <ul class="space-y-1.5 mb-4">
        {contains.map((c) => (
          <li class="text-xs text-[var(--ink)] flex items-start gap-2">
            <i class="fas fa-check text-[var(--emerald)] mt-0.5 text-[9px]"></i>
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1 mt-auto pt-3 border-t border-[var(--line)]">Variants</div>
      <p class="text-xs text-[var(--ink-soft)] mb-3 leading-relaxed">{variants}</p>

      <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Current status</div>
      <div class="text-[11px] font-semibold text-[var(--amber)] bg-[var(--ybmt-orange)]/10 border border-[var(--ybmt-orange)]/20 rounded px-2 py-1.5">{status}</div>
    </div>
  </div>
)

// Flow pill in the hand-off diagram
const FlowPill = ({ colour, label, sub }: { colour: 'navy' | 'navy-soft' | 'orange' | 'emerald'; label: string; sub: string }) => {
  const cls = colour === 'navy'
    ? 'bg-[var(--ybmt-navy)] text-white'
    : colour === 'navy-soft'
    ? 'bg-[var(--ybmt-navy-soft)] text-white'
    : colour === 'orange'
    ? 'bg-[var(--ybmt-orange)] text-white'
    : 'bg-[var(--emerald)] text-white'
  return (
    <div class={`${cls} rounded-xl p-4 text-center shadow-sm`}>
      <div class="font-bold display text-base">{label}</div>
      <div class="text-[11px] opacity-80 mt-0.5">{sub}</div>
    </div>
  )
}

const FlowArrow = ({ strong = false }: { strong?: boolean }) => (
  <div class="flex items-center justify-center py-1 lg:py-0">
    <i class={`fas fa-arrow-right text-${strong ? '[var(--ybmt-orange)]' : '[var(--ink-fade)]'} ${strong ? 'text-lg' : 'text-base'} hidden lg:block`}></i>
    <i class={`fas fa-arrow-down text-${strong ? '[var(--ybmt-orange)]' : '[var(--ink-fade)]'} ${strong ? 'text-lg' : 'text-base'} lg:hidden`}></i>
  </div>
)

// Scoreboard card
const ScoreCard = ({ label, value, sub, tone }: { label: string; value: string; sub: string; tone: 'navy' | 'orange' | 'emerald' }) => {
  const accent = tone === 'orange' ? 'text-[var(--ybmt-orange)]' : tone === 'emerald' ? 'text-[var(--emerald)]' : 'text-[var(--ybmt-navy)]'
  return (
    <div class="bg-white border border-[var(--line)] rounded-xl p-5">
      <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">{label}</div>
      <div class={`metric-num display text-2xl font-bold mt-1 ${accent}`}>{value}</div>
      <div class="text-[11px] text-[var(--ink-soft)] mt-1">{sub}</div>
    </div>
  )
}
