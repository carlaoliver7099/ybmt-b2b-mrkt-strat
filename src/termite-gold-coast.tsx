// ============================================================================
// YBMT TERMITE DAMAGE REPAIR — Gold Coast (Cell 3/9)
// ============================================================================
// Doctrine inherited from termite-gtm.tsx (4,085 lines):
//   1. Anxiety-first, never aspiration-first
//   2. Credentialled authority (QBCC + TPI + RPEQ engineer co-sign)
//   3. 48-Hour Scoped Quote (the conversion lever)
//   4. Cross-LOB seed at completion
//   5. Insurance-grade documentation as DBA
//
// Regional archetype (Gold Coast):
//   - Canal-front & hinterland homes · salt-air + humidity = elevated termite risk
//   - High investor concentration (Mermaid Waters, Broadbeach Waters, Sorrento)
//   - Pre-purchase volume highest in SEQ (interstate buyers, sight-unseen)
//   - Pre-sale velocity high (shorter holding periods · trade-up market)
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/termite-gold-coast'
const TERMITE_PROMISE = '48-Hour Scoped Quote. Guaranteed.'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

const TermiteSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <img
    src={`/static/termite-brisbane/dba/dba-03-48-hour-quote-seal.png`}
    alt="48-Hour Scoped Quote · Guaranteed · YBMT Termite Damage Repair · QBCC 1234567"
    width={size}
    height={size}
    class={className}
    style={`width:${size}px;height:${size}px`}
  />
)

const TermiteFooter = () => (
  <footer class="bg-[#1b3a5c] text-white py-12 mt-16">
    <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-3 gap-8 items-start mb-8">
        <div>
          <div class="font-bold text-2xl mb-1" style="font-family:Inter,sans-serif">YBMT</div>
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Termite Damage Repair · Gold Coast</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            The structural-restoration line of business for YBMT × CoSai Construction.
            <br />Canal-front · hinterland · sub-floor · framing · cladding.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/termite-gc/pre-purchase" class="hover:text-[#b8743d]">Pre-Purchase Buyer</a></li>
            <li><a href="/termite-gc/pre-sale" class="hover:text-[#b8743d]">Pre-Sale Vendor</a></li>
            <li><a href="/termite-gc/active-discovery" class="hover:text-[#b8743d]">Active Activity Found</a></li>
            <li><a href="/termite-gc/annual-stewardship" class="hover:text-[#b8743d]">Annual Stewardship</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Credentialled</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>TPI Termite Protection Inspector certified</li>
            <li>RPEQ Structural Engineer co-signed reports</li>
            <li>$20M Public Liability Insurance</li>
            <li>QBCC Home Warranty Insurance covered</li>
            <li>Insurance claim documentation standard</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">
          "{YBMT_GROUP_PROMISE}"
        </div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Termite · Gold Coast · A line of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

// ============================================================================
// HUB PAGE
// ============================================================================

export const TermiteGoldCoastHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-termite-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-termite-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-44 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-[#b8743d] text-white text-[11px] uppercase tracking-wider font-semibold">
              YBMT Termite Damage Repair
            </span>
            <span class="text-[11px] uppercase tracking-wider text-white/70">Gold Coast · Hinterland to Coastal Strip</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Canal-front timber, <br />
            <em class="text-[#b8743d]">salt-air damage.</em>
          </h1>

          <p class="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Gold Coast humidity + termite traffic = compounded structural risk. A pest inspector
            found the damage. Now you need the structural carpenter.
            QBCC-licensed · TPI-certified · RPEQ structural-engineer co-signed.
            <strong class="text-white"> 48-Hour Scoped Quote. Guaranteed.</strong>
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a href="#which-job" class="inline-flex items-center gap-2 px-6 py-3 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
              Identify your situation
              <i class="fas fa-arrow-right text-xs"></i>
            </a>
            <a href="#scoped-quote" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white rounded font-semibold transition-colors">
              Request a Scoped Quote
            </a>
          </div>

          <div class="flex items-center gap-6">
            <TermiteSeal size={90} />
            <div class="text-sm text-white/80 leading-snug">
              <div class="font-semibold text-white mb-1">A YBMT guarantee — written into your contract.</div>
              Scoped, structural-engineer-reviewed quote within 48 hours of site walk.<br />
              Insured. Licensed. Documented for your insurer or your buyer's solicitor.
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* REGIONAL FRAME */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Why the Gold Coast is different</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            Salt air weakens. <br />
            <em>Humidity hides the colony.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Mermaid Waters. Broadbeach Waters. Sorrento. Burleigh Heads. Tallebudgera Valley.
            Sub-tropical humidity drives nesting deeper · canal frontages add saline corrosion ·
            interstate buyers often inherit damage they never inspected.
          </p>
          <p class="text-stone-700 leading-relaxed">
            We work the entire LGA — coastal strip to hinterland — and we have run more pre-purchase
            structural scopes for interstate buyers than any other QBCC builder on the Coast.
          </p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm">
          <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-4">What "Insurance-Grade" means</div>
          <ul class="space-y-4 text-sm">
            {[
              ['Scoped quote ≤ 48 hrs', 'Site walk → structural-engineer-reviewed quote in your inbox within two business days. Written into contract.'],
              ['RPEQ structural co-sign', 'Every scope reviewed and co-signed by an RPEQ structural engineer before work commences.'],
              ['Photographic damage record', 'Pre-work, in-progress, and post-work photographs — every cavity, every member. Yours to keep.'],
              ['Insurance-claim documentation', 'Quote, scope, engineering review, and warranty bond packaged in the format your insurer requires.'],
              ['QBCC Home Warranty Insurance', 'Lodged on every contract over $3.3K — your statutory protection.'],
              ['25-year structural guarantee', 'Written. Transferable to the next owner. Your buyer\'s solicitor will love it.'],
            ].map(([title, body]) => (
              <li class="flex gap-3">
                <i class="fas fa-shield-check text-[#5b7a3a] mt-1"></i>
                <div>
                  <div class="font-semibold text-[#1b3a5c]">{title}</div>
                  <div class="text-stone-600 text-xs leading-relaxed">{body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* JTBD CARDS */}
    <section id="which-job" class="bg-white py-20">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-center mb-12">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Find your situation</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight" style="font-family:Fraunces,serif">
            Four reasons people call YBMT Termite. <br />
            <em>One of them is yours.</em>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          {[
            { n: '01', tag: 'Pre-Purchase Buyer', urgency: 'High · 2–6 weeks', headline: 'The building inspector flagged termite damage on the canal-front home you\'re buying.', body: 'Interstate buyer? Sunset clause ticking? We deliver a structural scope + scoped quote within 48 hours so you can renegotiate or proceed with confidence.', cta: 'See the pre-purchase pathway', href: '/termite-gc/pre-purchase', accent: '#1b3a5c' },
            { n: '02', tag: 'Pre-Sale Vendor', urgency: 'Acute · listing in 4 months', headline: 'You\'re listing on the Coast and the pre-sale report shows termite damage.', body: 'Gold Coast inspectors are thorough. You need the damage gone, the work documented, and an insurance-grade certificate for your marketing pack.', cta: 'See the pre-sale pathway', href: '/termite-gc/pre-sale', accent: '#b8743d' },
            { n: '03', tag: 'Active Discovery', urgency: 'Acute · 1–3 weeks', headline: 'You found mud tubes, frass, or a hollow-sounding skirting board.', body: 'Sub-tropical humidity hides damage. You need a structural carpenter on site this week — not a pest controller selling fumigation.', cta: 'See the active-discovery pathway', href: '/termite-gc/active-discovery', accent: '#a04030' },
            { n: '04', tag: 'Annual Stewardship', urgency: 'Planned · 3–12 months', headline: 'Hinterland or canal-front property — you want certified annual structural protection.', body: '23-point structural audit, documented every cavity, lodged with your home file, on a 12-month cadence. Insurer-friendly and buyer-friendly.', cta: 'See the stewardship pathway', href: '/termite-gc/annual-stewardship', accent: '#5b7a3a' },
          ].map(j => (
            <a href={j.href} class="group block bg-[#f5f1ea] rounded-lg p-7 hover:shadow-lg transition-shadow">
              <div class="flex items-start gap-5 mb-4">
                <div class="text-5xl font-bold text-[#b8743d]/30 group-hover:text-[#b8743d]/50 transition-colors" style="font-family:Fraunces,serif">{j.n}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold text-white" style={`background:${j.accent}`}>{j.tag}</span>
                    <span class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">{j.urgency}</span>
                  </div>
                  <h3 class="text-xl font-bold text-[#1b3a5c] leading-snug mb-2" style="font-family:Fraunces,serif">{j.headline}</h3>
                </div>
              </div>
              <p class="text-sm text-stone-700 leading-relaxed mb-4">{j.body}</p>
              <div class="text-sm font-semibold text-[#b8743d] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                {j.cta} <i class="fas fa-arrow-right text-xs"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <TermiteFooter />
  </div>
)

// ============================================================================
// SHARED JTBD PAGE TEMPLATE (Gold Coast variant)
// ============================================================================

type JtbdPageProps = {
  tag: string; urgency: string; trigger: string; headline: string; subhead: string
  anxiety: string[]; whatYouNeed: string[]
  whatWeDeliver: { title: string; body: string }[]
  timeline: string
  leadMagnet: { title: string; subtitle: string; cta: string }
  accent: string
  suburbPlaceholder?: string
}

const JtbdPage = ({ tag, urgency, trigger, headline, subhead, anxiety, whatYouNeed, whatWeDeliver, timeline, leadMagnet, accent, suburbPlaceholder = 'Gold Coast suburb' }: JtbdPageProps) => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-termite-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-termite-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0" style={`background:linear-gradient(to right, ${accent}cc 0%, ${accent}88 40%, transparent 100%)`}></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
      </div>

      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-24 lg:py-36 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-5">
            <span class="px-3 py-1 rounded-full bg-white text-[#1b3a5c] text-[11px] uppercase tracking-wider font-semibold">{tag}</span>
            <span class="text-[11px] uppercase tracking-wider text-white/80 font-semibold">Urgency: {urgency}</span>
          </div>
          <div class="text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-3">Trigger: {trigger}</div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5" style="font-family:Fraunces,serif">{headline}</h1>
          <p class="text-lg text-white/90 leading-relaxed max-w-xl">{subhead}</p>
        </div>
      </div>
    </header>

    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">What you're thinking right now</div>
          <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            <em>Some of these will be familiar.</em>
          </h2>
          <ul class="space-y-3">
            {anxiety.map(q => (
              <li class="flex gap-3 text-stone-700">
                <i class="fas fa-quote-left text-[#b8743d]/40 mt-1.5 text-sm"></i>
                <span class="italic" style="font-family:Fraunces,serif">"{q}"</span>
              </li>
            ))}
          </ul>
        </div>
        <div class="bg-white p-7 rounded-lg shadow-sm">
          <div class="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-4">What you actually need</div>
          <ul class="space-y-4">
            {whatYouNeed.map(item => (
              <li class="flex gap-3 text-sm">
                <i class="fas fa-circle-check text-[#5b7a3a] mt-1"></i>
                <span class="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The YBMT deliverable</div>
        <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-10" style="font-family:Fraunces,serif">
          What you get from us — <em>nothing more, nothing less.</em>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatWeDeliver.map((d, i) => (
            <div class="border-l-4 pl-5 py-2" style={`border-color:${accent}`}>
              <div class="text-3xl font-bold mb-2" style={`font-family:Fraunces,serif;color:${accent}`}>{String(i + 1).padStart(2, '0')}</div>
              <div class="font-bold text-[#1b3a5c] mb-2">{d.title}</div>
              <div class="text-sm text-stone-600 leading-relaxed">{d.body}</div>
            </div>
          ))}
        </div>
        <div class="mt-10 p-5 rounded bg-[#f5f1ea] border-l-4 border-[#b8743d]">
          <div class="text-[10px] uppercase tracking-wider text-[#b8743d] font-semibold mb-1">Your timeline</div>
          <div class="text-lg font-semibold text-[#1b3a5c]" style="font-family:Fraunces,serif">{timeline}</div>
        </div>
      </div>
    </section>

    <section class="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
      <div class="bg-[#1b3a5c] rounded-lg p-10 text-white">
        <div class="text-center mb-8">
          <TermiteSeal size={90} className="mx-auto mb-5" />
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">{leadMagnet.title}</div>
          <h3 class="text-2xl lg:text-3xl font-bold leading-snug" style="font-family:Fraunces,serif">{leadMagnet.subtitle}</h3>
        </div>
        <form class="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your name" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <input type="text" placeholder={suburbPlaceholder} class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <select class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300">
            <option>Stage of report</option>
            <option>Building inspector flagged · pre-purchase</option>
            <option>Pre-sale report flagged · vendor</option>
            <option>I found activity myself · no inspector yet</option>
            <option>Want a planned inspection · stewardship</option>
          </select>
          <button type="button" class="w-full px-6 py-4 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
            {leadMagnet.cta} →
          </button>
        </form>
        <div class="text-center text-xs text-white/60 mt-6">
          We never sell your data. We never quote without a site walk. We don't use voicemail.
        </div>
      </div>
    </section>

    <TermiteFooter />
  </div>
)

// ============================================================================
// 4 JTBD PAGES — Gold Coast regional variants
// ============================================================================

export const TermiteGCPrePurchasePage = () => (
  <JtbdPage
    tag="Pre-Purchase Buyer · Gold Coast"
    urgency="High · 2–6 weeks to settlement"
    trigger="Pre-purchase building inspection flagged termite damage"
    headline="You found the canal-front home. The inspector found the damage. The clock is on your contract."
    subhead="Interstate buyer? Sight-unseen purchase? Sunset clause ticking? We deliver a structural-engineer co-signed scope within 48 hours of site walk — fast enough to renegotiate price, exit cleanly, or proceed with confidence."
    anxiety={[
      'I\'m buying from interstate — how bad is this really?',
      'My sunset clause is 14 days. Will anyone even quote in that window?',
      'The pest inspector said get a builder. Which builder on the Coast?',
      'If I show the seller a fixed quote, can I drop my offer by that amount?',
      'My Sydney solicitor wants documentation, not a tradesman quote.',
    ]}
    whatYouNeed={[
      'A 48-hour scoped quote — fast enough to act before sunset clause expires',
      'A structural-engineer co-signed scope your solicitor (anywhere in Australia) can accept',
      'Insurance-grade documentation you can give to the seller as negotiation proof',
      'No upsell theatre · no kitchen-table pressure · no \"come back next week\"',
      'A clear price band before site walk so you can decide if it\'s worth the call',
    ]}
    whatWeDeliver={[
      { title: 'Same-day callback', body: 'Call by 3pm AEST · we ring you back same day · we don\'t use voicemail.' },
      { title: '90-min site walk', body: 'Within 24-48 hours of your call · sub-floor, framing, roof void, claddings, sub-floor stumps.' },
      { title: 'Scoped quote in 48 hrs', body: 'RPEQ engineer co-signed · itemised by structural member · solicitor-ready (any state).' },
      { title: 'Renegotiation pack', body: 'Buyer-facing one-page summary you hand the seller\'s agent · ends the back-and-forth.' },
      { title: 'Interstate handoff', body: 'We can liaise direct with your Sydney/Melbourne solicitor · video call + emailed pack.' },
      { title: 'Withdraw protection', body: 'If you walk from the contract, your $480 review fee converts to a credit on any future YBMT job for 5 years.' },
    ]}
    timeline="From call to scoped quote: 48 hours. From contract to start: 7 days. From start to finish: typically 2-4 weeks for sub-floor / framing repair."
    leadMagnet={{
      title: 'Pre-Purchase Termite Damage · Gold Coast Buyer\'s Field Guide',
      subtitle: 'The 17 things to check before you settle on a canal-front home.',
      cta: 'Send me the Buyer\'s Field Guide',
    }}
    accent="#1b3a5c"
  />
)

export const TermiteGCPreSalePage = () => (
  <JtbdPage
    tag="Pre-Sale Vendor · Gold Coast"
    urgency="Acute · listing in 60-120 days"
    trigger="Pre-sale building report shows termite damage"
    headline="You're listing on the Coast. The pre-sale report has damage. Every buyer's inspector will find it."
    subhead="Gold Coast inspectors are thorough. Smart vendors fix the structural problem before listing, document it to insurance grade, and hand the documentation to every inspector who walks the house. We do exactly that, on the timeline your agent gave you."
    anxiety={[
      'If I don\'t fix it, every buyer\'s inspector will find it and use it against me.',
      'If I fix it badly, the documentation will hurt me more than the original problem.',
      'My Ray White / Kollosche / Amir Mian agent says list in March. Can you finish before then?',
      'How do I prove to a buyer\'s solicitor that the repair was done properly?',
      'I don\'t want to discount $80K when a $20K repair would close the objection.',
    ]}
    whatYouNeed={[
      'A locked completion date — before your listing photographer arrives',
      'Insurance-grade documentation pack — every buyer\'s solicitor accepts it',
      'A 25-year transferable structural guarantee — the next owner inherits the protection',
      '\"Repaired by YBMT · Structural Engineer Co-Signed\" certificate for the marketing pack',
      'Discreet on-site presence · no big trucks during opens · no signage on the lawn',
    ]}
    whatWeDeliver={[
      { title: 'Date-locked program', body: 'Listing date is your anchor · we schedule backwards from it · finish date in the contract.' },
      { title: 'Marketing-ready certificate', body: 'One-page \"YBMT structural repair · engineer co-signed\" certificate for your sales agent.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full structural engineering review, scope, photographic record, QBCC HWI certificate — the full file.' },
      { title: 'Transferable guarantee', body: '25-year structural guarantee transfers to the next owner · a powerful selling point on the Coast.' },
      { title: 'Discreet build', body: 'Plain vehicles, no signage on your lawn, before-opens schedule · we know it\'s your home until it sells.' },
      { title: 'Listing-photo-ready finish', body: 'Site cleared, paintwork blended, sub-floor reinstated · ready for the photographer.' },
    ]}
    timeline="From call to scoped quote: 48 hours. From contract to start: 7-14 days. From start to listing-ready: 4-6 weeks for typical sub-floor / framing repair package."
    leadMagnet={{
      title: 'Pre-Sale Termite Repair · Gold Coast Vendor Timeline Calculator',
      subtitle: 'Work backwards from your listing date · know exactly when to start.',
      cta: 'Send me the Vendor Timeline Calculator',
    }}
    accent="#b8743d"
  />
)

export const TermiteGCActiveDiscoveryPage = () => (
  <JtbdPage
    tag="Active Discovery · Gold Coast"
    urgency="Acute · this week"
    trigger="You found activity yourself — mud tubes, frass, or hollow timber"
    headline="You found mud tubes. In sub-tropical humidity, the colony is bigger than it looks."
    subhead="The pest controller will arrive and treat the colony. But the colony has already eaten timber that's holding your house up — and that's structural carpentry, not pest control. We arrive on the same site visit, scope what needs replacing, and start before the wet season ends."
    anxiety={[
      'Is the house safe to sleep in tonight?',
      'How much damage have they already done in this humidity?',
      'Do I call the pest controller first, or a builder?',
      'My insurance won\'t cover live infestation — will they cover the structural repair?',
      'How fast can someone actually start? I can\'t live with this.',
    ]}
    whatYouNeed={[
      'A same-week site walk · we don\'t leave you waiting in the queue',
      'A coordinated response with a TPI-licensed pest controller (we have three on call across the Coast)',
      'Honest read on what\'s structural and what\'s cosmetic — without inflating either',
      'A scoped quote that separates immediate-safety work from optional reinforcement',
      'Insurance-claim documentation in the format your insurer requires',
    ]}
    whatWeDeliver={[
      { title: 'Same-week site walk', body: 'Active activity = priority queue · we are on site within 5 business days.' },
      { title: 'Coordinated pest + carpenter', body: 'We bring a TPI-licensed entomologist to the same site walk · one visit, full read.' },
      { title: 'Safety triage report', body: 'Within 24 hours of site walk · what\'s urgent (sleep-in-it safe), what\'s soon, what\'s optional.' },
      { title: 'Insurance-grade paperwork', body: 'Photographic record + engineer co-signed scope · in the format your insurer accepts.' },
      { title: 'Phased repair option', body: 'If budget is a barrier · we phase the work into safety-first and full-restoration tranches.' },
      { title: 'No fumigation upsell', body: 'We do not own the pest treatment · we have no incentive to inflate the chemical side.' },
    ]}
    timeline="From call to site walk: 3-5 business days. Safety triage: 24 hours after site walk. Scoped quote to start: 7-10 days. Phased repair can begin in tranches."
    leadMagnet={{
      title: 'Live Termite Activity · Gold Coast Owner\'s Safety Checklist',
      subtitle: 'What to do this week. What to stop doing immediately.',
      cta: 'Send me the Safety Checklist',
    }}
    accent="#a04030"
  />
)

export const TermiteGCAnnualStewardshipPage = () => (
  <JtbdPage
    tag="Annual Stewardship · Gold Coast"
    urgency="Planned · 3–12 months"
    trigger="3+ years since last inspection · proactive owner"
    headline="Salt air and humidity don't wait. Neither should you."
    subhead="You take stewardship of your canal-front or hinterland home seriously. A 23-point structural audit, lodged with your home file, puts you ahead of every future inspector — the building inspector before a sale, the insurer at renewal, the buyer's solicitor at conveyance."
    anxiety={[
      'I haven\'t had a real structural inspection in years.',
      'When I do sell, what will the inspector find that I should have caught?',
      'My insurance keeps creeping up on the canal-frontage / age-of-asset clause.',
      'I want a real expert, not a hand-held device and a photocopied report.',
      'I don\'t need a panic-driven repair · I want a calm, scheduled program.',
    ]}
    whatYouNeed={[
      'A senior structural carpenter doing the audit — not a pest controller with a phone app',
      'A 23-point report your insurer accepts as evidence of asset stewardship',
      'A calm, annual cadence — booked in your calendar, automatic reminders',
      'Honest read · no inflated findings · no manufactured urgency · no upsell',
      'Documentation lodged with your home file · transferable when you sell',
    ]}
    whatWeDeliver={[
      { title: '23-point structural audit', body: 'Sub-floor, framing, roof void, cladding, veranda, sub-floor stumps, drainage abutments — every member.' },
      { title: 'Annual cadence', body: 'Booked once · automatic reminder 11 months later · same senior carpenter where possible.' },
      { title: 'Home-file report', body: 'PDF lodged with your home file · year-on-year comparison · trend tracking.' },
      { title: 'Insurer-friendly format', body: 'Many insurers reduce premium loading on documented asset stewardship · we hand them the proof.' },
      { title: 'Pre-listing advantage', body: 'When you list, your buyer\'s solicitor inherits 3+ years of documented structural care · powerful evidence.' },
      { title: 'No-upsell promise', body: 'If we find nothing, we charge for the audit and we leave. We don\'t invent work.' },
    ]}
    timeline="From call to audit booking: typically 4-6 weeks. Audit on site: 90 minutes. Report delivered: 5 business days. Next audit auto-reminded at 11 months."
    leadMagnet={{
      title: 'Annual Structural Stewardship · Gold Coast Audit Pack',
      subtitle: 'The 23 points that determine whether your coastal home holds its value.',
      cta: 'Send me the Audit Pack',
    }}
    accent="#5b7a3a"
  />
)
