// ============================================================================
// YBMT TERMITE DAMAGE REPAIR — Brisbane prototype kit
// ============================================================================
// Built 100% to the locked GitHub strategy spec:
//   - termite-gtm.tsx (4,085 lines · 12 pillars · 350+ assets)
//   - ymt-jtbd.tsx (1,387 lines · 5 personas · 4 trigger clusters)
//
// Doctrine (from termite-gtm.tsx):
//   1. Anxiety-first, never aspiration-first (Kahneman System 1)
//   2. Credentialled authority, not friendly approachability (Edelman 2025)
//   3. Speed-to-quote is the conversion lever (48-hour scoped quote)
//   4. Cross-LOB seed at completion, never at intake
//   5. Insurance-grade documentation as DBA
//
// 4 locked JTBDs (trigger-led, never demographic):
//   - Pre-Purchase Buyer (Tony archetype · pre-purchase building inspection)
//   - Pre-Sale Vendor (Tony archetype · pre-sale building report · highest urgency)
//   - Active Activity Discovery (panic-mode · mud tubes/frass found)
//   - Annual Stewardship (Investor + Stewardship Couple · documented protection)
//
// LOB economics: 55% of Y2 sales mix · 45% GPM · highest-revenue LOB
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/termite-brisbane'

const TERMITE_PROMISE = '48-Hour Scoped Quote. Guaranteed.'
const TERMITE_TAGLINE = 'Insurance-Grade Termite Damage Repair.'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

const TermiteSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <img
    src={`${BASE}/dba/dba-03-48-hour-quote-seal.png`}
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
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Termite Damage Repair</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            The structural-restoration line of business for YBMT × CoSai Construction.
            <br />Sub-floor · framing · bearer · joist · roof timber · cladding · veranda · stump.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/termite/pre-purchase" class="hover:text-[#b8743d]">Pre-Purchase Buyer</a></li>
            <li><a href="/termite/pre-sale" class="hover:text-[#b8743d]">Pre-Sale Vendor</a></li>
            <li><a href="/termite/active-discovery" class="hover:text-[#b8743d]">Active Activity Found</a></li>
            <li><a href="/termite/annual-stewardship" class="hover:text-[#b8743d]">Annual Stewardship</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Credentialled</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>TPI Termite Protection Inspector certified</li>
            <li>Structural Engineer co-signed reports</li>
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
          YBMT Termite Damage Repair · A line of business of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

// ============================================================================
// HUB PAGE — /termite
// ============================================================================

export const TermiteHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    {/* HERO — Seedance 2.0 video background, agency-grade cinematic */}
    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          poster={`${BASE}/video/hero-video-termite-brisbane-poster.jpg`}
          class="w-full h-full object-cover"
        >
          <source src={`${BASE}/video/hero-video-termite-brisbane.mp4`} type="video/mp4" />
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
            <span class="text-[11px] uppercase tracking-wider text-white/70">Brisbane · South East Queensland</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            The structural work <br />
            <em class="text-[#b8743d]">behind the report.</em>
          </h1>

          <p class="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            A pest inspector found damage. Now you need the structural carpenter.
            QBCC-licensed · TPI-certified · structural-engineer co-signed.
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

    {/* CATEGORY FRAME — "the structural work behind the report" */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The category we own</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            Termite repair is <em>structural carpentry</em>, <br />
            not pest control.
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Pest controllers kill termites. We rebuild the home they damaged. Two
            different licences, two different trades, two different problems.
          </p>
          <p class="text-stone-700 leading-relaxed">
            YBMT does not bait or fumigate. We arrive after the inspector — the one who
            wrote the report sitting on your desk — and we restore the timbers that have
            been hollowed: bearers, joists, framing, cladding, veranda posts, sub-floor
            stumps. Each repair is structural-engineer co-signed, insurance-grade
            documented, QBCC home warranty insured.
          </p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm">
          <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-4">What "Insurance-Grade" means</div>
          <ul class="space-y-4 text-sm">
            {[
              ['Scoped quote ≤ 48 hrs', 'Site walk → structural-engineer-reviewed quote in your inbox within two business days. Written into contract.'],
              ['Structural-engineer co-sign', 'Every repair scope reviewed and co-signed by an RPEQ structural engineer before work commences.'],
              ['Photographic damage record', 'Pre-work, in-progress, and post-work photographs — every cavity, every member. Yours to keep.'],
              ['Insurance-claim documentation', 'Quote, scope, engineering review, and warranty bond packaged in the format your insurer requires.'],
              ['QBCC Home Warranty Insurance', 'Lodged on every contract over $3.3K — your statutory protection if anything goes wrong post-completion.'],
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

    {/* 4 JTBD PATHWAY CARDS */}
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
            {
              n: '01',
              tag: 'Pre-Purchase Buyer',
              urgency: 'High · 2–6 weeks',
              headline: 'The building inspector flagged termite damage on the home you want to buy.',
              body: 'You have a contract sunset clause. We deliver a structural scope + scoped quote within 48 hours so you can renegotiate price, exit the contract, or proceed with confidence.',
              cta: 'See the pre-purchase pathway',
              href: '/termite/pre-purchase',
              accent: '#1b3a5c',
            },
            {
              n: '02',
              tag: 'Pre-Sale Vendor',
              urgency: 'Acute · listing in 4 months',
              headline: 'You\'re selling and the pre-sale report shows termite damage.',
              body: 'Listing within 60–120 days. You need the damage gone, the work documented, the timeline guaranteed. We deliver an insurance-grade certificate to your conveyancer + a buyer-facing summary that closes inspection objections.',
              cta: 'See the pre-sale pathway',
              href: '/termite/pre-sale',
              accent: '#b8743d',
            },
            {
              n: '03',
              tag: 'Active Discovery',
              urgency: 'Acute · 1–3 weeks',
              headline: 'You found mud tubes, frass, or a hollow-sounding skirting board.',
              body: 'Something is in your house right now. You need a structural carpenter on site this week — not a pest controller. We coordinate the entomologist and bring the bearer timber on the same site visit.',
              cta: 'See the active-discovery pathway',
              href: '/termite/active-discovery',
              accent: '#a04030',
            },
            {
              n: '04',
              tag: 'Annual Stewardship',
              urgency: 'Planned · 3–12 months',
              headline: 'You haven\'t had an inspection in 3+ years and want certified protection.',
              body: 'You take asset stewardship seriously. We do a 23-point structural audit, document every cavity, lodge it with your home file, and put you on a 12-month inspection cadence. Insurer-friendly and buyer-friendly.',
              cta: 'See the stewardship pathway',
              href: '/termite/annual-stewardship',
              accent: '#5b7a3a',
            },
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

    {/* PROOF — process + outcomes (Insurance-grade ritual) */}
    <section id="scoped-quote" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-5 gap-10 items-start">
        <div class="md:col-span-2">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The 48-Hour Scoped Quote</div>
          <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            Not a guess on the day. <br />
            <em>A structural-engineer-reviewed scope in 48 hours.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-6">
            We never quote from a single site walk. The on-site visit is the scope capture.
            The quote is what arrives in your inbox 48 hours later — reviewed, costed,
            documented, ready for your insurer, your conveyancer, or your bank.
          </p>
          <div class="bg-[#1b3a5c] text-white p-4 rounded text-sm">
            <strong class="text-[#b8743d]">Why this isn't "free quote" theatre:</strong> we
            won't sit at your kitchen table and write numbers on a clipboard. The structural
            engineering review is the work — and we charge nothing for it if you proceed with
            us, or a flat $480 if you don't (refundable against any future YBMT job).
          </div>
        </div>

        <div class="md:col-span-3">
          <div class="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-4">From inspection to repair · the YBMT process</div>
          <ol class="space-y-3">
            {[
              ['Day 0 · Call', 'You ring with the pest inspector\'s report. We answer within 4 business hours · we don\'t use voicemail.'],
              ['Day 1–2 · Site walk', '90-minute structural site walk · sub-floor, framing, roof void, cladding, veranda · photographic record from minute one.'],
              ['Day 2–3 · Engineer review', 'RPEQ structural engineer reviews our scope · adds member-by-member specification · co-signs the package.'],
              ['Day 3 · Scoped Quote delivered', '48 hours from site walk. Itemised. Insurance-grade. Your conveyancer can read it.'],
              ['Day 7–10 · Contract & schedule', 'QBCC HWI lodged · materials ordered · trade scheduled · you get the start date in writing.'],
              ['Day 14–35 · Build', 'Structural carpentry · on-site supervision · photographic record continues · daily progress photos to your inbox.'],
              ['Day 35+ · Documentation pack', 'Complete pack: pre-photos, in-progress, post-photos, engineer sign-off, 25-year structural guarantee, HWI certificate.'],
            ].map(([title, sub], i) => (
              <li class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#1b3a5c] text-white flex items-center justify-center font-bold text-sm" style="font-family:Fraunces,serif">{i + 1}</div>
                <div>
                  <div class="font-semibold text-[#1b3a5c]">{title}</div>
                  <div class="text-sm text-stone-600 leading-snug">{sub}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <TermiteFooter />
  </div>
)

// ============================================================================
// JTBD PAGE BUILDER — shared template for the 4 trigger-led JTBD pages
// ============================================================================

type JtbdPageProps = {
  tag: string
  urgency: string
  trigger: string
  headline: string
  subhead: string
  anxiety: string[]
  whatYouNeed: string[]
  whatWeDeliver: { title: string; body: string }[]
  timeline: string
  leadMagnet: { title: string; subtitle: string; cta: string }
  accent: string
}

const JtbdPage = ({ tag, urgency, trigger, headline, subhead, anxiety, whatYouNeed, whatWeDeliver, timeline, leadMagnet, accent }: JtbdPageProps) => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    {/* HERO — same video, different gradient overlay per JTBD */}
    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-termite-brisbane-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-termite-brisbane.mp4`} type="video/mp4" />
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

    {/* ANXIETY MAP (System 1 recognition) */}
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

    {/* WHAT WE DELIVER (4-6 items, JTBD-specific) */}
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

    {/* LEAD MAGNET — 4-field form per spec */}
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
          <input type="text" placeholder="Brisbane suburb" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
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

    {/* BOOK A SITE WALK CTA */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 pb-20">
      <div class="bg-white rounded-lg p-8 flex flex-wrap items-center justify-between gap-6">
        <div class="flex items-center gap-6">
          <TermiteSeal size={80} />
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">Ready to start</div>
            <h3 class="text-2xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">Book the 90-minute structural site walk.</h3>
            <div class="text-sm text-stone-600 mt-1">Scoped quote in your inbox within 48 hours · structural-engineer co-signed</div>
          </div>
        </div>
        <a href="#scoped-quote" class="px-6 py-4 bg-[#1b3a5c] hover:bg-[#0e2440] text-white rounded font-semibold whitespace-nowrap">Book the site walk →</a>
      </div>
    </section>

    <TermiteFooter />
  </div>
)

// ============================================================================
// 4 JTBD PAGES — each one trigger-led, doctrine-compliant
// ============================================================================

export const TermitePrePurchasePage = () => (
  <JtbdPage
    tag="Pre-Purchase Buyer"
    urgency="High · 2–6 weeks to settlement"
    trigger="Pre-purchase building inspection flagged termite damage"
    headline="The inspection report has damage on it. The clock is on your contract."
    subhead="You found the home. The inspector found the problem. Now you need a structural carpenter who can scope the repair, price it, and document it — fast enough to renegotiate before sunset clause expires."
    anxiety={[
      'How bad is it really — is this a renegotiate, or a walk-away?',
      'My sunset clause is 14 days. Will anyone even quote in that window?',
      'The pest inspector said get a builder. Which builder?',
      'If I show the seller a fixed quote, can I drop my offer by that amount?',
      'My solicitor wants documentation, not a hand-written tradesman quote.',
    ]}
    whatYouNeed={[
      'A 48-hour scoped quote — fast enough to act before sunset clause expires',
      'A structural-engineer co-signed scope your solicitor can accept',
      'Insurance-grade documentation you can give to the seller as negotiation proof',
      'No upsell theatre · no kitchen-table pressure · no \"come back next week\"',
      'A clear price band before site walk so you can decide if it\'s worth the call',
    ]}
    whatWeDeliver={[
      { title: 'Same-day callback', body: 'Call by 3pm · we ring you back same day · we don\'t use voicemail.' },
      { title: '90-min site walk', body: 'Within 24-48 hours of your call · sub-floor, framing, roof void, claddings.' },
      { title: 'Scoped quote in 48 hrs', body: 'RPEQ engineer co-signed · itemised by structural member · solicitor-ready.' },
      { title: 'Renegotiation pack', body: 'Buyer-facing one-page summary you hand the seller\'s agent · ends the back-and-forth.' },
      { title: 'Settlement-day-ready', body: 'If you proceed, we schedule the work to begin within 7 days of unconditional contract.' },
      { title: 'Withdraw protection', body: 'If you walk from the contract, your $480 review fee converts to a credit on any future YBMT job for 5 years.' },
    ]}
    timeline="From call to scoped quote: 48 hours. From contract to start: 7 days. From start to finish: typically 2-4 weeks for sub-floor / framing repair."
    leadMagnet={{
      title: 'Pre-Purchase Termite Damage · Buyer\'s Field Guide',
      subtitle: 'The 17 things to check before you settle.',
      cta: 'Send me the Buyer\'s Field Guide',
    }}
    accent="#1b3a5c"
  />
)

export const TermitePreSalePage = () => (
  <JtbdPage
    tag="Pre-Sale Vendor"
    urgency="Acute · listing in 60-120 days"
    trigger="Pre-sale building report shows termite damage"
    headline="The pre-sale report has damage on it. You list in 4 months. The buyers will see it."
    subhead="You want your asking price. Smart vendors fix the structural problem before listing, document it to insurance grade, and hand the documentation to every inspector who walks the house. We do exactly that, on the timeline your agent gave you."
    anxiety={[
      'If I don\'t fix it, every buyer\'s inspector will find it and use it against me.',
      'If I fix it badly, the documentation will hurt me more than the original problem.',
      'My agent says list in March. Can you finish before then?',
      'How do I prove to a buyer\'s solicitor that the repair was done properly?',
      'I don\'t want to discount $60K when a $20K repair would close the objection.',
    ]}
    whatYouNeed={[
      'A locked completion date — before your listing photographer arrives',
      'Insurance-grade documentation pack — every buyer\'s solicitor accepts it',
      'A 25-year transferable structural guarantee — the next owner inherits the protection',
      '\"Repaired by YBMT · Structural Engineer Co-Signed\" certificate for the marketing pack',
      'Discreet on-site presence · no big trucks, no signage, no surprise tradies during opens',
    ]}
    whatWeDeliver={[
      { title: 'Date-locked program', body: 'Listing date is your anchor · we schedule backwards from it · finish date in the contract.' },
      { title: 'Marketing-ready certificate', body: 'One-page \"YBMT structural repair · engineer co-signed\" certificate for your sales agent.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full structural engineering review, scope, photographic record, QBCC HWI certificate — the full file.' },
      { title: 'Transferable guarantee', body: '25-year structural guarantee transfers to the next owner · a powerful selling point.' },
      { title: 'Discreet build', body: 'Plain vehicles, no signage on your lawn, before-opens schedule · we know it\'s your home until it sells.' },
      { title: 'Listing-photo-ready finish', body: 'Site cleared, paintwork blended, sub-floor reinstated · ready for the photographer.' },
    ]}
    timeline="From call to scoped quote: 48 hours. From contract to start: 7-14 days. From start to listing-ready: 4-6 weeks for typical sub-floor / framing repair package."
    leadMagnet={{
      title: 'Pre-Sale Termite Repair · Vendor\'s Timeline Calculator',
      subtitle: 'Work backwards from your listing date · know exactly when to start.',
      cta: 'Send me the Vendor\'s Timeline Calculator',
    }}
    accent="#b8743d"
  />
)

export const TermiteActiveDiscoveryPage = () => (
  <JtbdPage
    tag="Active Discovery"
    urgency="Acute · this week"
    trigger="You found activity yourself — mud tubes, frass, or hollow timber"
    headline="You found mud tubes. Something is in your house right now."
    subhead="The pest controller will arrive and treat the colony. But the colony has already eaten timber that's holding your house up — and that's structural carpentry, not pest control. We arrive on the same site visit, scope what needs replacing, and start before the wet season ends."
    anxiety={[
      'Is the house safe to sleep in tonight?',
      'How much damage have they already done that I can\'t see?',
      'Do I call the pest controller first, or a builder?',
      'My insurance won\'t cover live infestation — will they cover the structural repair?',
      'How fast can someone actually start? I can\'t live with this.',
    ]}
    whatYouNeed={[
      'A same-week site walk · we don\'t leave you waiting for two months in the queue',
      'A coordinated response with a TPI-licensed pest controller (we have three on call)',
      'Honest read on what\'s structural and what\'s cosmetic — without inflating either',
      'A scoped quote that separates the immediate-safety work from the optional reinforcement',
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
    timeline="From call to site walk: 3-5 business days (active activity = priority queue). From site walk to safety triage: 24 hours. From scoped quote to start: 7-10 days. Phased repair can begin in tranches."
    leadMagnet={{
      title: 'Live Termite Activity · Owner\'s Safety Checklist',
      subtitle: 'What to do this week. What to stop doing immediately.',
      cta: 'Send me the Safety Checklist',
    }}
    accent="#a04030"
  />
)

export const TermiteAnnualStewardshipPage = () => (
  <JtbdPage
    tag="Annual Stewardship"
    urgency="Planned · 3–12 months"
    trigger="3+ years since last inspection · proactive owner"
    headline="The smart owners don't wait for a report. They commission one."
    subhead="You take stewardship of your home seriously. A 23-point structural audit, lodged with your home file, puts you ahead of every future inspector — the building inspector before a sale, the insurer at renewal, the buyer's solicitor at conveyance. We deliver it once a year on the date you set."
    anxiety={[
      'I haven\'t had a real structural inspection in years.',
      'When I do sell, what will the inspector find that I should have caught?',
      'My insurance keeps creeping up on the age-of-asset clause.',
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
    timeline="From call to audit booking: typically 4-6 weeks (planned cadence). Audit on site: 90 minutes. Report delivered: 5 business days. Next audit auto-reminded at 11 months."
    leadMagnet={{
      title: 'Annual Structural Stewardship · Home-Owner\'s Audit Pack',
      subtitle: 'The 23 points that determine whether your home holds its value.',
      cta: 'Send me the Audit Pack',
    }}
    accent="#5b7a3a"
  />
)
