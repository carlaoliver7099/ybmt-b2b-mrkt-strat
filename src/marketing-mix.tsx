// Marketing Mix Inventory — every asset that exists today for YBMT Decks (Pool Decking).
// Mirrors the 10-folder structure of the launch kit + adds Capability Statements as folder 02.

import { TopNav } from './nav'

const BASE = '/static/marketing-mix'

// =====================================================================
// MAIN PAGE
// =====================================================================
export const MarketingMixPage = () => (
  <div class="min-h-screen">
    <TopNav active="marketing-mix" />

    {/* ===================== HERO ===================== */}
    <header class="border-b border-[var(--line)] bg-gradient-to-b from-white to-[var(--paper)]">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10 pt-12 pb-10">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="chip bg-[var(--ybmt-orange)]/10 text-[var(--ybmt-orange)] border border-[var(--ybmt-orange)]/30 font-semibold">
            <i class="fas fa-folder-open mr-1.5"></i> Marketing Mix Inventory
          </span>
          <span class="chip bg-emerald-50 text-emerald-800 border border-emerald-200">
            <i class="fas fa-circle-check mr-1.5"></i> 22 files · launch-ready
          </span>
          <span class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)] border border-[var(--line)]">
            Service line · <strong class="ml-1">YBMT Decks</strong>
          </span>
          <span class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)] border border-[var(--line)]">
            Sub-product · <strong class="ml-1">Pool Decking</strong>
          </span>
        </div>

        <h1 class="display text-4xl lg:text-5xl font-bold text-[var(--ybmt-navy)] leading-tight tracking-tight">
          Ready to see the new <span class="italic text-[var(--ybmt-orange)]">marketing materials</span> for the 3 × 3 strategy?
        </h1>
        <p class="text-lg text-[var(--ink-soft)] mt-4 max-w-3xl leading-relaxed">
          This is the <strong>actual inventory</strong> — every asset that exists today, organised the way the
          Marketing Funnel calls for it: <em>brand → website → lead magnet → sales → paid → email → print → partnerships → execution</em>.
          Click any card to open the file. This is the first finished cell of the 3 × 3 grid: <strong>YBMT Decks (Pool Decking) · SEQ-wide</strong>.
        </p>

        {/* Chip nav */}
        <div class="mt-8 flex flex-wrap gap-2">
          {[
            { id: 'naming', label: 'Naming note' },
            { id: '01-brand', label: '01 · Brand' },
            { id: '02-capability-statements', label: '02 · Capability Statements' },
            { id: '03-website', label: '03 · Website' },
            { id: '04-lead-magnet', label: '04 · Lead magnet' },
            { id: '05-sales', label: '05 · Sales' },
            { id: '06-paid-ads', label: '06 · Paid ads' },
            { id: '07-email', label: '07 · Email' },
            { id: '08-print', label: '08 · Print' },
            { id: '09-partnerships', label: '09 · Partnerships' },
            { id: '10-execution', label: '10 · Execution' },
            { id: 'outcomes', label: '90-day outcomes' },
            { id: 'gaps', label: 'Inventory vs grid' },
          ].map((l) => (
            <a href={`#${l.id}`} class="chip bg-white border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>

    {/* ===================== NAMING NOTE ===================== */}
    <section id="naming" class="max-w-[1100px] mx-auto px-6 lg:px-10 pt-10 pb-6 read-section">
      <div class="bg-[var(--paper-warm)] border-l-4 border-[var(--ybmt-orange)] rounded-r-lg p-5">
        <div class="flex items-start gap-3">
          <i class="fas fa-circle-info text-[var(--ybmt-orange)] text-xl mt-0.5"></i>
          <div>
            <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange)] font-bold mb-1">Naming convention — read this before opening assets</div>
            <p class="text-sm text-[var(--ink)] leading-relaxed">
              This launch kit was built as <em>"YBMT Pool Decks"</em>. Under the <strong>Uber-Eats naming convention</strong> we
              locked (1 master brand · 3 endorsed service-line descriptors), the correct presentation is
              <strong> "YBMT Decks"</strong> with <em>Pool Decking</em> as a sub-product. Some assets still
              say "YBMT Pool Decks" — that needs a copy pass before public launch. Treat the assets below
              as <strong>content-ready, naming-pending</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===================== 01 BRAND ===================== */}
    <Section
      id="01-brand"
      number="01"
      title="Brand"
      tagline="Visual identity assets — logo + 6 hero photographs"
      stage="Used everywhere · upstream of the funnel"
      colour="navy"
    >
      <div class="grid md:grid-cols-2 gap-5 mb-5">
        <AssetCard
          icon="image"
          title="YBMT Decks logo"
          format="PNG"
          path={`${BASE}/01-brand/logo.png`}
          stage="Brand"
          status="ready-rename"
          summary="Master mark for the Decks service line. Currently labelled 'YBMT Pool Decks' — needs rename per locked naming convention."
        />
        <ImageStrip
          paths={[
            `${BASE}/01-brand/01-sunset-luxury.jpg`,
            `${BASE}/01-brand/02-aerial-drone.jpg`,
            `${BASE}/01-brand/03-craftsmanship-detail.jpg`,
            `${BASE}/01-brand/04-family-lifestyle.jpg`,
            `${BASE}/01-brand/05-night-twilight.jpg`,
            `${BASE}/01-brand/06-before-after.jpg`,
          ]}
          title="6 × hero photographs (2K, generated)"
          summary="Sunset Luxury · Aerial Drone · Craftsmanship Detail · Family Lifestyle · Night Twilight · Before/After. Used across landing pages, ads, social, brochure."
        />
      </div>

      <BrandPalette />
    </Section>

    {/* ===================== 02 CAPABILITY STATEMENTS ===================== */}
    <Section
      id="02-capability-statements"
      number="02"
      title="Capability Statements"
      tagline="Gerry's BD pack · cover page for every first meeting + follow-up email"
      stage="Pre-sales BD · Print + PDF"
      colour="orange"
    >
      <div class="grid md:grid-cols-3 gap-4">
        <AssetCard
          icon="file-pdf"
          title="YBMT — Brisbane"
          format="PDF"
          path={`${BASE}/02-capability-statements/cap-statement-brisbane.pdf`}
          stage="BD pack"
          status="rewrite"
          summary="Brisbane-region cap statement. Existing version has PM-template bleed — flagged for rewrite per Outdoor Ent Part-B audit."
        />
        <AssetCard
          icon="file-pdf"
          title="YBMT — Pool Decks · Sunshine Coast"
          format="PDF"
          path={`${BASE}/02-capability-statements/cap-statement-pool-sunshine-coast.pdf`}
          stage="BD pack"
          status="rewrite"
          summary="Sunshine Coast pool-decks-specific cap statement. Segmentation defect identified — needs channel-buyer vs end-buyer split."
        />
        <AssetCard
          icon="file-pdf"
          title="YBMT — Termite Repairs · Sunshine Coast"
          format="PDF"
          path={`${BASE}/02-capability-statements/cap-statement-termite-sunshine-coast.pdf`}
          stage="BD pack"
          status="rewrite"
          summary="Termite Repairs LOB — Sunshine Coast. Demonstrates the cross-service-line BD pack pattern; same defects."
        />
      </div>
      <Callout tone="orange">
        <strong>Status across all 3:</strong> content is decent, structure is wrong. Three cap statements
        currently exist for 1 cell of the 3 × 3 grid. The full grid needs <strong>9 × 2 = 18 variants</strong>{' '}
        (3 service lines × 3 regions × Channel-Buyer / End-Buyer). This is the single biggest production gap.
      </Callout>
    </Section>

    {/* ===================== 03 WEBSITE ===================== */}
    <Section
      id="03-website"
      number="03"
      title="Website"
      tagline="The destination layer — where every paid + organic click lands"
      stage="Awareness → Consideration · Digital"
      colour="violet"
    >
      <div class="grid md:grid-cols-2 gap-5">
        <AssetCard
          icon="window-maximize"
          title="Landing page (conversion-tuned)"
          format="HTML"
          path={`${BASE}/03-website/landing-page.html`}
          stage="Landing Page"
          status="ready-rename"
          summary="Single-promise LP for paid-ad traffic. Above-the-fold hero + dual CTA (Get Quote · Download Buyer's Guide) + social proof block + FAQ accordion. UTM-aware."
        />
        <AssetCard
          icon="file-lines"
          title="5 × SEO blog posts (~7,750 words)"
          format="HTML"
          path={`${BASE}/03-website/seo-blog-posts-5-articles.html`}
          stage="Organic Media"
          status="ready-rename"
          summary="Topical authority cluster: cost guide, composite vs hardwood, QBCC compliance, maintenance, design ideas. Foundation for the 6–18 month organic compounding curve."
        />
      </div>
    </Section>

    {/* ===================== 04 LEAD MAGNET ===================== */}
    <Section
      id="04-lead-magnet"
      number="04"
      title="Lead Magnet"
      tagline="The middle-of-funnel hinge — converts anonymous traffic into named, sequenced leads"
      stage="Consideration → RFQ · Digital + Print"
      colour="emerald"
    >
      <AssetCard
        icon="book-open"
        title="The 2026 SEQ Pool Deck Buyer's Guide (15 pages)"
        format="HTML"
        path={`${BASE}/04-lead-magnet/buyers-guide-15-pages-UPDATED.html`}
        stage="Buyer's Guide"
        status="ready-rename"
        summary="Gerry-voiced, 15 pages. Walks the buyer through: how to choose a deck builder, common mistakes, materials, QBCC compliance, cost ranges, questions to ask. Downloaders are 12× more likely to RFQ than non-downloaders."
        large
      />
    </Section>

    {/* ===================== 05 SALES ===================== */}
    <Section
      id="05-sales"
      number="05"
      title="Sales"
      tagline="The phone-handle that turns an RFQ into a booked site visit"
      stage="Hand-off · Marketing → Value Chain A (BD)"
      colour="navy"
    >
      <AssetCard
        icon="phone-volume"
        title="Premium sales phone script"
        format="HTML"
        path={`${BASE}/05-sales/sales-phone-script.html`}
        stage="RFQ → site visit"
        status="ready"
        summary="The first 7 minutes. Open · qualify · discovery · objection-handling · booking. Engineered for Oldroyd's speed-to-lead window (5-minute callback)."
        large
      />
    </Section>

    {/* ===================== 06 PAID ADS ===================== */}
    <Section
      id="06-paid-ads"
      number="06"
      title="Paid Ads"
      tagline="Buy attention — Meta + Google · ad copy + 2 hero videos"
      stage="Awareness · Digital — Paid Media"
      colour="orange"
    >
      <div class="grid md:grid-cols-3 gap-5">
        <AssetCard
          icon="rectangle-ad"
          title="10 × Meta ad copy variants"
          format="HTML"
          path={`${BASE}/06-paid-ads/meta-ad-copy-10-variants.html`}
          stage="Meta · Paid"
          status="ready"
          summary="10 variants across 3 audience segments (Renovators · Pool Owners · New Builds). Hook + body + CTA per variant. Ready for A/B test setup."
        />
        <VideoCard
          title="Landscape video ad (16:9)"
          path={`${BASE}/06-paid-ads/video-ad-landscape-16x9.mp4`}
          stage="Meta Feed · YouTube"
          status="ready"
          summary="Hero video for Feed + YouTube. Generated via Seedance 2.0. 6.1 MB."
        />
        <VideoCard
          title="Vertical video ad (9:16)"
          path={`${BASE}/06-paid-ads/video-ad-vertical-9x16.mp4`}
          stage="Stories · Reels · TikTok"
          status="ready"
          summary="Stories/Reels-formatted vertical video. Generated via Seedance 2.0. 5.6 MB."
        />
      </div>
    </Section>

    {/* ===================== 07 EMAIL ===================== */}
    <Section
      id="07-email"
      number="07"
      title="Email"
      tagline="Nurture downloaded leads from cold to quote-ready"
      stage="Consideration → RFQ · Lifecycle"
      colour="navy"
    >
      <AssetCard
        icon="envelope-open-text"
        title="5-email nurture sequence (14-day)"
        format="HTML"
        path={`${BASE}/07-email/5-email-nurture-sequence.html`}
        stage="Buyer's Guide downloader flow"
        status="ready"
        summary="Triggered the moment a buyer downloads the guide. 5 emails over 14 days: welcome + 3 education + 1 RFQ ask. Designed for Mailchimp / equivalent."
        large
      />
    </Section>

    {/* ===================== 08 PRINT ===================== */}
    <Section
      id="08-print"
      number="08"
      title="Print"
      tagline="Real estate offices, pool shops, brochure drops"
      stage="Awareness · Print Media Layer"
      colour="orange"
    >
      <AssetCard
        icon="newspaper"
        title="A4 brochure (double-sided)"
        format="HTML → PDF"
        path={`${BASE}/08-print/a4-brochure-double-sided.html`}
        stage="Print drop"
        status="ready-rename"
        summary="Designed for Officeworks print run (250 units in Week 1 of the launch calendar). Front: hook + 3 proof points. Back: 6 hero images + CTA + QR code to LP."
        large
      />
    </Section>

    {/* ===================== 09 PARTNERSHIPS ===================== */}
    <Section
      id="09-partnerships"
      number="09"
      title="Partnerships"
      tagline="Gerry's referral motion — architects, pool builders, real estate"
      stage="Pre-sales BD · Channel"
      colour="violet"
    >
      <AssetCard
        icon="handshake"
        title="Referral partner kit"
        format="HTML"
        path={`${BASE}/09-partnerships/referral-partner-kit.html`}
        stage="Partnership Kit"
        status="ready-rename"
        summary="The 3rd piece of Gerry's BD pack. Explains the referral economics, the customer journey, the partner benefits, and what makes YBMT Decks a safe referral. Pairs with the cap statement + buyer's guide for the 'thanks for our meeting' email."
        large
      />
    </Section>

    {/* ===================== 10 EXECUTION ===================== */}
    <Section
      id="10-execution"
      number="10"
      title="Execution"
      tagline="The 30-day launch playbook — Week 1 foundation → Week 4 optimise"
      stage="Operating cadence"
      colour="emerald"
    >
      <AssetCard
        icon="calendar-days"
        title="30-day launch calendar"
        format="HTML"
        path={`${BASE}/10-execution/30-day-launch-calendar.html`}
        stage="Operating playbook"
        status="ready"
        summary="Week-by-week checklist: Foundation → Go-to-market → Activate paid+organic → Optimise + refer. Mappable to a Notion board or printed for the office wall."
        large
      />
    </Section>

    {/* ===================== 90-DAY OUTCOMES ===================== */}
    <section id="outcomes" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16 read-section">
      <div class="flex items-baseline justify-between mb-2">
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)]">
          <i class="fas fa-chart-line text-[var(--ybmt-orange)] mr-2 text-2xl"></i>
          90-day projected outcomes
        </h2>
        <span class="text-xs uppercase tracking-wider text-[var(--ink-fade)] font-semibold">From the launch kit README</span>
      </div>
      <p class="text-[var(--ink-soft)] mb-6 max-w-3xl">
        Three investment tiers. Based on <strong>$35K average project value · 20% close rate on qualified quotes</strong>.
        This is one cell of the 3 × 3 grid (Decks · Pool Decking · SEQ-wide).
      </p>

      <div class="bg-white border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm">
        <table class="min-w-full text-sm">
          <thead class="bg-[var(--ybmt-navy)] text-white">
            <tr>
              <th class="text-left px-4 py-3 font-semibold">Tier</th>
              <th class="text-left px-4 py-3 font-semibold">Monthly ad spend</th>
              <th class="text-left px-4 py-3 font-semibold">Expected monthly leads</th>
              <th class="text-left px-4 py-3 font-semibold">90-day pipeline</th>
            </tr>
          </thead>
          <tbody class="text-[var(--ink-soft)]">
            <tr class="border-t border-[var(--line)]">
              <td class="px-4 py-3 font-semibold text-[var(--ink)]">Starter</td>
              <td class="px-4 py-3">$1,500 – $2,000</td>
              <td class="px-4 py-3">8 – 12</td>
              <td class="px-4 py-3">$200K – $315K</td>
            </tr>
            <tr class="border-t border-[var(--line)] bg-[var(--ybmt-orange)]/5">
              <td class="px-4 py-3 font-semibold text-[var(--ybmt-navy)]">
                <i class="fas fa-star text-[var(--ybmt-orange)] mr-1"></i> Growth <span class="text-xs font-normal text-[var(--ink-fade)]">recommended</span>
              </td>
              <td class="px-4 py-3">$3,000 – $4,000</td>
              <td class="px-4 py-3">15 – 25</td>
              <td class="px-4 py-3 font-semibold text-[var(--ybmt-navy)]">$315K – $525K</td>
            </tr>
            <tr class="border-t border-[var(--line)]">
              <td class="px-4 py-3 font-semibold text-[var(--ink)]">Aggressive</td>
              <td class="px-4 py-3">$5,000+</td>
              <td class="px-4 py-3">25 – 40</td>
              <td class="px-4 py-3">$525K – $840K+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-xs text-[var(--ink-fade)] mt-3 italic">
        Reference: Marketing Launch Kit README · derived from SEQ pool deck CPL benchmarks + YBMT historical close rate.
      </p>
    </section>

    {/* ===================== INVENTORY vs 3x3 GRID ===================== */}
    <section id="gaps" class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20 read-section">
      <div class="bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-2xl p-8 lg:p-10 shadow-md">
        <div class="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">How this inventory maps to the 3 × 3 grid</div>
        <h2 class="display text-3xl font-bold mb-4">1 cell finished · 8 to go</h2>
        <p class="text-white/85 leading-relaxed max-w-3xl">
          The 22-file inventory above is the <strong>complete Definition-of-Done for one cell</strong>: YBMT
          Decks · Pool Decking · SEQ-wide. That cell is roughly 95% ready (naming pass + cap-statement
          rewrite outstanding). The 3 × 3 strategy needs <strong>9 such cells</strong> — and within Decks
          alone there are also Outdoor Entertainment (non-pool) and Composite-vs-Timber sub-products to extend into.
        </p>

        <div class="mt-7 grid md:grid-cols-3 gap-4">
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-1">Cell finished</div>
            <div class="display text-2xl font-bold">1 / 9</div>
            <div class="text-xs text-white/80 mt-1">Decks · Pool Decking · SEQ</div>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-1">Region-clone effort</div>
            <div class="display text-2xl font-bold">3×</div>
            <div class="text-xs text-white/80 mt-1">LPs / GBPs / cap statements per region</div>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-1">LOB-clone effort</div>
            <div class="display text-2xl font-bold">6×</div>
            <div class="text-xs text-white/80 mt-1">Renovations + Termite Repairs need full kit each</div>
          </div>
        </div>

        <div class="mt-7 grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-2">Ready to deploy today (Decks · Pool · SEQ)</div>
            <ul class="space-y-1.5 text-white/85">
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> 6 hero photographs + logo</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> Landing page · 5 SEO blogs</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> 15-page Buyer's Guide</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> Sales phone script</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> 10 Meta ad variants + 2 videos</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> 5-email nurture sequence</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> A4 brochure · Referral kit</li>
              <li><i class="fas fa-check text-emerald-300 mr-2"></i> 30-day launch calendar</li>
            </ul>
          </div>
          <div>
            <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-2">Outstanding before public launch</div>
            <ul class="space-y-1.5 text-white/85">
              <li><i class="fas fa-circle-exclamation text-amber-300 mr-2"></i> Naming pass: "YBMT Pool Decks" → "YBMT Decks (Pool Decking)" across all assets</li>
              <li><i class="fas fa-circle-exclamation text-amber-300 mr-2"></i> Cap statement rewrite × 3 (segmentation defects)</li>
              <li><i class="fas fa-circle-exclamation text-amber-300 mr-2"></i> Region clone × 2 (Gold Coast + Sunshine Coast LPs)</li>
              <li><i class="fas fa-circle-exclamation text-amber-300 mr-2"></i> GBP setup × 3</li>
              <li><i class="fas fa-circle-exclamation text-amber-300 mr-2"></i> UTM tracking links + GA4 + CRM lead-record schema</li>
              <li><i class="fas fa-circle-xmark text-rose-300 mr-2"></i> Renovations LOB full kit (pending channel architecture)</li>
              <li><i class="fas fa-circle-xmark text-rose-300 mr-2"></i> Termite Repairs LOB full kit (cap statement only today)</li>
              <li><i class="fas fa-circle-xmark text-rose-300 mr-2"></i> Master visual identity decision (refresh vs rebuild)</li>
            </ul>
          </div>
        </div>

        <div class="mt-7 p-4 rounded-lg bg-white/5 border border-white/10 text-sm">
          <i class="fas fa-arrow-right text-[var(--ybmt-orange-soft)] mr-2"></i>
          See <a href="/funnel" class="underline hover:text-[var(--ybmt-orange-soft)] font-semibold">Marketing Funnel</a> for where each asset above slots into Awareness / Consideration / RFQ,
          and <a href="/value-chain" class="underline hover:text-[var(--ybmt-orange-soft)] font-semibold">Value Chain</a> for what happens once an RFQ lands.
        </div>
      </div>
    </section>

    {/* ===================== FOOTER ===================== */}
    <footer class="border-t border-[var(--line)] bg-white">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10 py-8 text-xs text-[var(--ink-fade)] flex flex-wrap items-center gap-x-6 gap-y-2">
        <span>YBMT × CoSai Construction · Joint Venture Intranet</span>
        <span>QBCC 15030821</span>
        <span>ABN 74 076 531 765</span>
        <span><i class="fas fa-phone mr-1"></i> 1300 448 784</span>
        <span class="ml-auto">Inventory · v1 · Decks · Pool Decking · SEQ</span>
      </div>
    </footer>
  </div>
)

// =====================================================================
// SECTION WRAPPER
// =====================================================================
type SectionProps = {
  id: string
  number: string
  title: string
  tagline: string
  stage: string
  colour: 'navy' | 'orange' | 'emerald' | 'violet'
  children: any
}

const Section = ({ id, number, title, tagline, stage, colour, children }: SectionProps) => {
  const badge =
    colour === 'orange' ? 'bg-[var(--ybmt-orange)] text-white' :
    colour === 'emerald' ? 'bg-[var(--emerald)] text-white' :
    colour === 'violet' ? 'bg-[#7e57c2] text-white' :
    'bg-[var(--ybmt-navy)] text-white'

  return (
    <section id={id} class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-14 read-section">
      <div class="flex items-baseline gap-3 mb-2 flex-wrap">
        <span class={`inline-flex items-center justify-center min-w-[2.25rem] h-9 px-2 rounded-md font-bold display text-base ${badge}`}>{number}</span>
        <h2 class="display text-2xl lg:text-3xl font-bold text-[var(--ybmt-navy)]">{title}</h2>
        <span class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)] border border-[var(--line)]">{stage}</span>
      </div>
      <p class="text-[var(--ink-soft)] mb-6 max-w-3xl">{tagline}</p>
      {children}
    </section>
  )
}

// =====================================================================
// ASSET CARD (HTML / PDF / generic)
// =====================================================================
type AssetCardProps = {
  icon: string
  title: string
  format: string
  path: string
  stage: string
  status: 'ready' | 'ready-rename' | 'rewrite' | 'pending'
  summary: string
  large?: boolean
}

const StatusPill = ({ status }: { status: AssetCardProps['status'] }) => {
  const cfg =
    status === 'ready' ? { cls: 'bg-emerald-50 text-emerald-800 border-emerald-200', icon: 'fa-circle-check', label: 'Ready' } :
    status === 'ready-rename' ? { cls: 'bg-amber-50 text-amber-800 border-amber-200', icon: 'fa-pen-to-square', label: 'Ready · naming pass' } :
    status === 'rewrite' ? { cls: 'bg-orange-50 text-orange-800 border-orange-200', icon: 'fa-rotate', label: 'Rewrite' } :
    { cls: 'bg-rose-50 text-rose-800 border-rose-200', icon: 'fa-clock', label: 'Pending' }
  return (
    <span class={`inline-flex items-center gap-1.5 chip border ${cfg.cls} text-[10px]`}>
      <i class={`fas ${cfg.icon}`}></i> {cfg.label}
    </span>
  )
}

const AssetCard = ({ icon, title, format, path, stage, status, summary, large }: AssetCardProps) => {
  const isHtml = path.endsWith('.html')
  const isPdf = path.endsWith('.pdf')
  const isImg = /\.(png|jpe?g|gif|svg|webp)$/i.test(path)
  return (
    <div class={`bg-white border border-[var(--line)] rounded-2xl shadow-sm overflow-hidden flex flex-col ${large ? '' : ''}`}>
      <div class="px-5 py-4 border-b border-[var(--line)] flex items-start justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-lg bg-[var(--paper-warm)] flex items-center justify-center text-[var(--ybmt-navy)]">
            <i class={`fas fa-${icon}`}></i>
          </div>
          <div>
            <div class="font-semibold text-[var(--ink)] leading-tight">{title}</div>
            <div class="text-xs text-[var(--ink-fade)] mt-0.5">
              <span class="font-mono">{format}</span> · <span>{stage}</span>
            </div>
          </div>
        </div>
        <StatusPill status={status} />
      </div>
      <div class="px-5 py-4 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
        {summary}
      </div>
      {isImg && (
        <div class="px-5 pb-4">
          <img src={path} alt={title} class="w-full h-48 object-cover rounded-lg border border-[var(--line)]" loading="lazy" />
        </div>
      )}
      <div class="px-5 py-3 border-t border-[var(--line)] bg-[var(--paper)] flex items-center justify-between gap-2 text-xs">
        <code class="text-[11px] bg-white border border-[var(--line)] px-2 py-0.5 rounded text-[var(--ink-soft)] truncate max-w-[60%]">{path}</code>
        <div class="flex items-center gap-2">
          {(isHtml || isPdf || isImg) && (
            <a href={path} target="_blank" rel="noopener" class="chip bg-[var(--ybmt-orange)] text-white border border-[var(--ybmt-orange)] hover:bg-[var(--ybmt-orange-soft)] font-semibold">
              <i class="fas fa-arrow-up-right-from-square mr-1"></i> Open
            </a>
          )}
          <a href={path} download class="chip bg-white text-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)]">
            <i class="fas fa-download mr-1"></i> Download
          </a>
        </div>
      </div>
    </div>
  )
}

// =====================================================================
// VIDEO CARD
// =====================================================================
type VideoCardProps = {
  title: string
  path: string
  stage: string
  status: AssetCardProps['status']
  summary: string
}

const VideoCard = ({ title, path, stage, status, summary }: VideoCardProps) => (
  <div class="bg-white border border-[var(--line)] rounded-2xl shadow-sm overflow-hidden flex flex-col">
    <div class="px-5 py-4 border-b border-[var(--line)] flex items-start justify-between gap-3">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-lg bg-[var(--paper-warm)] flex items-center justify-center text-[var(--ybmt-navy)]">
          <i class="fas fa-film"></i>
        </div>
        <div>
          <div class="font-semibold text-[var(--ink)] leading-tight">{title}</div>
          <div class="text-xs text-[var(--ink-fade)] mt-0.5"><span class="font-mono">MP4</span> · {stage}</div>
        </div>
      </div>
      <StatusPill status={status} />
    </div>
    <div class="px-5 py-4 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">{summary}</div>
    <div class="px-5 pb-4">
      <video controls preload="metadata" class="w-full rounded-lg border border-[var(--line)] bg-black" style="max-height: 320px;">
        <source src={path} type="video/mp4" />
      </video>
    </div>
    <div class="px-5 py-3 border-t border-[var(--line)] bg-[var(--paper)] flex items-center justify-between gap-2 text-xs">
      <code class="text-[11px] bg-white border border-[var(--line)] px-2 py-0.5 rounded text-[var(--ink-soft)] truncate max-w-[60%]">{path}</code>
      <a href={path} download class="chip bg-white text-[var(--ink-soft)] border border-[var(--line)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)]">
        <i class="fas fa-download mr-1"></i> Download
      </a>
    </div>
  </div>
)

// =====================================================================
// IMAGE STRIP — for the 6 hero photos
// =====================================================================
const ImageStrip = ({ paths, title, summary }: { paths: string[]; title: string; summary: string }) => (
  <div class="bg-white border border-[var(--line)] rounded-2xl shadow-sm overflow-hidden flex flex-col">
    <div class="px-5 py-4 border-b border-[var(--line)] flex items-start justify-between gap-3">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-lg bg-[var(--paper-warm)] flex items-center justify-center text-[var(--ybmt-navy)]">
          <i class="fas fa-images"></i>
        </div>
        <div>
          <div class="font-semibold text-[var(--ink)] leading-tight">{title}</div>
          <div class="text-xs text-[var(--ink-fade)] mt-0.5"><span class="font-mono">JPG · 2K</span> · Brand library</div>
        </div>
      </div>
      <StatusPill status="ready" />
    </div>
    <div class="px-5 py-4 text-sm text-[var(--ink-soft)] leading-relaxed">{summary}</div>
    <div class="px-5 pb-5 grid grid-cols-3 gap-2">
      {paths.map((p, i) => (
        <a href={p} target="_blank" rel="noopener" class="block group">
          <img src={p} alt={`Hero ${i + 1}`} class="w-full h-24 object-cover rounded-md border border-[var(--line)] group-hover:opacity-80 transition" loading="lazy" />
        </a>
      ))}
    </div>
  </div>
)

// =====================================================================
// BRAND PALETTE — visual swatches
// =====================================================================
const BrandPalette = () => (
  <div class="bg-white border border-[var(--line)] rounded-2xl shadow-sm p-5">
    <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-3">Brand colour system (from launch kit)</div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { hex: '#1B3A5C', name: 'Navy', sub: 'Primary · trust · premium' },
        { hex: '#B8743D', name: 'Timber', sub: 'Secondary · decking warmth' },
        { hex: '#4DB6C7', name: 'Pool Aqua', sub: 'Accent · water · freshness' },
        { hex: '#F5F1EA', name: 'Cream', sub: 'Background · off-white' },
      ].map((c) => (
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-md border border-[var(--line)]" style={`background:${c.hex}`}></div>
          <div>
            <div class="text-sm font-semibold text-[var(--ink)]">{c.name}</div>
            <div class="text-[10px] font-mono text-[var(--ink-fade)]">{c.hex}</div>
            <div class="text-[10px] text-[var(--ink-soft)]">{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
    <div class="mt-4 grid grid-cols-2 gap-3 text-xs">
      <div class="p-3 rounded-md bg-[var(--paper-warm)] border border-[var(--line)]">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Display</div>
        <div class="text-[var(--ink)]" style="font-family: 'Fraunces', serif; font-style: italic; font-weight: 600;">Fraunces · italic · 600</div>
      </div>
      <div class="p-3 rounded-md bg-[var(--paper-warm)] border border-[var(--line)]">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-1">Body</div>
        <div class="text-[var(--ink)]" style="font-family: 'Inter', sans-serif; font-weight: 400;">Inter · regular</div>
      </div>
    </div>
  </div>
)

// =====================================================================
// CALLOUT
// =====================================================================
const Callout = ({ tone, children }: { tone: 'orange' | 'navy'; children: any }) => {
  const cls = tone === 'orange'
    ? 'border-l-4 border-[var(--ybmt-orange)] bg-[var(--paper-warm)]'
    : 'border-l-4 border-[var(--ybmt-navy)] bg-white'
  return (
    <div class={`mt-5 rounded-r-lg p-4 text-sm text-[var(--ink-soft)] leading-relaxed ${cls}`}>
      <i class="fas fa-lightbulb text-[var(--ybmt-orange)] mr-2"></i>
      {children}
    </div>
  )
}
