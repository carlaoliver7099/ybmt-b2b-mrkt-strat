// ============================================================================
// YBMT UNITS — Gold Coast (Cell 8/9)
// ============================================================================
// Sub-brand: YBMT Units · "Renovations That Settle Quietly. 30 Days. Body Corporate Approved."
//
// Regional archetype (Gold Coast):
//   - Surfers Paradise high-rise · Broadbeach tower · Main Beach penthouse
//   - Burleigh Heads boutique blocks
//   - Investor-heavy (interstate + offshore) · short-stay-letting overlay
//   - DA + BCM + body-corporate by-laws layered with high-rise lift-access logistics
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/units-gold-coast'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

const UnitsSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <div class={`inline-flex items-center justify-center rounded-full text-center ${className}`}
       style={`width:${size}px;height:${size}px;background:#1b3a5c;color:#fff;font-family:Fraunces,serif;line-height:1.1;padding:${size * 0.1}px;font-size:${size * 0.13}px;border:3px solid #b8743d;`}>
    <div>
      <div style="font-weight:700;letter-spacing:0.5px">30 DAYS</div>
      <div style="font-size:0.65em;opacity:0.8;margin-top:2px">Body Corporate</div>
      <div style="font-size:0.65em;opacity:0.8">Approved</div>
    </div>
  </div>
)

const UnitsFooter = () => (
  <footer class="bg-[#1b3a5c] text-white py-12 mt-16">
    <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-3 gap-8 items-start mb-8">
        <div>
          <div class="font-bold text-2xl mb-1" style="font-family:Inter,sans-serif">YBMT</div>
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Units · Gold Coast</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            High-rise · boutique block · ocean-facing tower · penthouse renovations.
            <br />Surfers Paradise · Broadbeach · Main Beach · Burleigh Heads.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/units-gc/refresh" class="hover:text-[#b8743d]">Between-Tenant Refresh</a></li>
            <li><a href="/units-gc/renew" class="hover:text-[#b8743d]">Modern Liveable Renew</a></li>
            <li><a href="/units-gc/bcm-coordination" class="hover:text-[#b8743d]">BCM Coordination</a></li>
            <li><a href="/units-gc/pre-sale" class="hover:text-[#b8743d]">Pre-Sale Reset</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">High-rise expertise</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>Lift-access logistics specialist</li>
            <li>Goods-lift scheduling protocol</li>
            <li>BCM-Approved contractor (8 SEQ schemes)</li>
            <li>Short-stay-letting renovation expert</li>
            <li>2-year build warranty · transferable</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">"{YBMT_GROUP_PROMISE}"</div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Units · Gold Coast · A line of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

export const UnitsGoldCoastHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-units-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-units-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-44 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-[#b8743d] text-white text-[11px] uppercase tracking-wider font-semibold">
              YBMT Units
            </span>
            <span class="text-[11px] uppercase tracking-wider text-white/70">Gold Coast · High-Rise to Boutique</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Renovations that <br />
            <em class="text-[#b8743d]">settle quietly.</em>
          </h1>

          <p class="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Surfers Paradise high-rise. Broadbeach tower. Main Beach penthouse. Burleigh boutique block.
            Lift-access logistics, BCM-coordinated, tenant-respectful, signed off in 30 days.
            <strong class="text-white"> 30 Days. Body Corporate Approved.</strong>
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a href="#which-tier" class="inline-flex items-center gap-2 px-6 py-3 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
              Find your tier
              <i class="fas fa-arrow-right text-xs"></i>
            </a>
            <a href="#bcm-pack" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white rounded font-semibold transition-colors">
              Download the BCM Approval Pack
            </a>
          </div>

          <div class="flex items-center gap-6">
            <UnitsSeal size={90} />
            <div class="text-sm text-white/80 leading-snug">
              <div class="font-semibold text-white mb-1">A YBMT guarantee — written into your contract.</div>
              Fixed-price scope. 30-day build window. Goods-lift scheduling + BCM liaison handled by us.
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Why the Gold Coast is different</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            High-rise is not low-rise. <br />
            <em>We renovate accordingly.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Goods-lift scheduling. Concierge protocols. Working-hour by-laws. Short-stay-letting
            disruption windows. Body-corporate fire-rating requirements. Acoustic-floor on every
            level (not just kitchen+bath). 30+ storey tower contractor-vetting boards.
          </p>
          <p class="text-stone-700 leading-relaxed">
            Most Gold Coast renovators can't get past the goods-lift booking. We've run more
            high-rise unit renovations than any other QBCC builder on the Coast.
          </p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm">
          <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-4">The three tiers</div>
          <ul class="space-y-5 text-sm">
            <li>
              <div class="flex items-baseline justify-between mb-1">
                <div class="font-bold text-[#1b3a5c]">TIER 1 · REFRESH</div>
                <div class="text-xs text-stone-500">$28k–$42k · 3–4 wks</div>
              </div>
              <div class="text-xs text-stone-600 leading-relaxed">Cosmetic update for short-stay-letting or between-tenant uplift · investor-driven.</div>
            </li>
            <li>
              <div class="flex items-baseline justify-between mb-1">
                <div class="font-bold text-[#1b3a5c]">TIER 2 · RENEW</div>
                <div class="text-xs text-stone-500">$42k–$78k · 5–7 wks</div>
              </div>
              <div class="text-xs text-stone-600 leading-relaxed">Owner-occupier renovation · interstate downsizer or Coast resident upgrading.</div>
            </li>
            <li>
              <div class="flex items-baseline justify-between mb-1">
                <div class="font-bold text-[#1b3a5c]">TIER 3 · RESET</div>
                <div class="text-xs text-stone-500">$78k–$160k · 8–12 wks</div>
              </div>
              <div class="text-xs text-stone-600 leading-relaxed">Penthouse/whole-unit gut · pre-sale or trophy-asset upgrade · highest AOV.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="which-tier" class="bg-white py-20">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-center mb-12">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Find your situation</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight" style="font-family:Fraunces,serif">
            Four reasons people call YBMT Units. <br />
            <em>One of them is yours.</em>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          {[
            { n: '01', tag: 'Between-Tenant Refresh', urgency: 'Tight · 28 days', headline: 'Short-stay or long-let — you want rent uplift on the next tenancy.', body: 'Refresh tier ($28k–$42k). 28-day build window. Coast investors target $80–$220/week uplift. We coordinate the goods lift, you coordinate the agent.', cta: 'See the Refresh pathway', href: '/units-gc/refresh', accent: '#1b3a5c' },
            { n: '02', tag: 'Modern Liveable Renew', urgency: 'Planned · 6 weeks', headline: 'You bought the ocean-facing unit to live in. You want it done properly.', body: 'Renew tier ($42k–$78k). 6-week build. Full kitchen + full bathroom + electrical recompliance. Body Corporate Approved. Built like it\'s our own home.', cta: 'See the Renew pathway', href: '/units-gc/renew', accent: '#b8743d' },
            { n: '03', tag: 'BCM Coordination', urgency: 'BCM-channel inbound', headline: 'You\'re a high-rise BCM. A lot-owner just asked you for a contractor referral.', body: 'For BCMs: high-rise renovation expertise. Goods-lift scheduling. Pre-approved scope templates. BCM Referral Kit + preferred-contractor onboarding.', cta: 'See the BCM partner page', href: '/units-gc/bcm-coordination', accent: '#5b7a3a' },
            { n: '04', tag: 'Pre-Sale Reset', urgency: 'Realtor-coordinated · 10 weeks', headline: 'You\'re listing the penthouse. Your agent says pre-sale renovation lifts achievable price.', body: 'Reset tier ($78k–$160k). 10-12 week build for penthouses. M12 historical uplift: $280k–$520k achieved sale price on Coast trophy assets.', cta: 'See the Pre-Sale pathway', href: '/units-gc/pre-sale', accent: '#a04030' },
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

    <section id="bcm-pack" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-[#1b3a5c] rounded-lg p-10 text-white grid md:grid-cols-5 gap-10 items-center">
        <div class="md:col-span-2 flex justify-center">
          <UnitsSeal size={140} />
        </div>
        <div class="md:col-span-3">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">The universal lead magnet</div>
          <h3 class="text-3xl font-bold mb-4 leading-snug" style="font-family:Fraunces,serif">The BCM Approval Pack · High-Rise Edition.</h3>
          <p class="text-white/85 mb-6 leading-relaxed">
            32-page A4 PDF. High-rise-specific scope templates. Goods-lift booking protocol.
            Working-hour schedule. Acoustic-floor specification for tower environments. The full
            pack your high-rise BCM needs to sign off your renovation in one meeting, not three.
          </p>
          <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
            Download the BCM Approval Pack
            <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>

    <UnitsFooter />
  </div>
)

// ============================================================================
// JTBD TEMPLATE
// ============================================================================

type UnitsJtbdProps = {
  tag: string; tier: string; aov: string; timeline: string
  headline: string; subhead: string
  anxiety: string[]; whatYouNeed: string[]
  whatWeDeliver: { title: string; body: string }[]
  leadMagnet: { title: string; subtitle: string; cta: string }
  accent: string
  formFields?: { label: string; placeholder: string }[]
}

const UnitsJtbdPage = ({ tag, tier, aov, timeline, headline, subhead, anxiety, whatYouNeed, whatWeDeliver, leadMagnet, accent, formFields }: UnitsJtbdProps) => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-units-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-units-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0" style={`background:linear-gradient(to right, ${accent}cc 0%, ${accent}88 40%, transparent 100%)`}></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
      </div>

      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-24 lg:py-36 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-5">
            <span class="px-3 py-1 rounded-full bg-white text-[#1b3a5c] text-[11px] uppercase tracking-wider font-semibold">{tag}</span>
            <span class="text-[11px] uppercase tracking-wider text-white/80 font-semibold">{tier}</span>
          </div>
          <div class="text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-3">{aov} · {timeline}</div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5" style="font-family:Fraunces,serif">{headline}</h1>
          <p class="text-lg text-white/90 leading-relaxed max-w-xl">{subhead}</p>
        </div>
      </div>
    </header>

    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">What you're thinking right now</div>
          <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif"><em>Some of these will be familiar.</em></h2>
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
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The YBMT Units deliverable</div>
        <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-10" style="font-family:Fraunces,serif">
          What you get — <em>numerate, BCM-fluent, quietly done.</em>
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
      </div>
    </section>

    <section class="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
      <div class="bg-[#1b3a5c] rounded-lg p-10 text-white">
        <div class="text-center mb-8">
          <UnitsSeal size={90} className="mx-auto mb-5" />
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">{leadMagnet.title}</div>
          <h3 class="text-2xl lg:text-3xl font-bold leading-snug" style="font-family:Fraunces,serif">{leadMagnet.subtitle}</h3>
        </div>
        <form class="space-y-4 max-w-md mx-auto">
          {(formFields ?? [
            { label: 'name', placeholder: 'Your name' },
            { label: 'email', placeholder: 'Email' },
            { label: 'suburb', placeholder: 'Gold Coast suburb' },
            { label: 'building', placeholder: 'Building name (optional)' },
          ]).map(f => (
            <input type={f.label === 'email' ? 'email' : 'text'} placeholder={f.placeholder} class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          ))}
          <button type="button" class="w-full px-6 py-4 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
            {leadMagnet.cta} →
          </button>
        </form>
        <div class="text-center text-xs text-white/60 mt-6">
          BCM-fluent. High-rise-experienced. Investor-numerate. We don't use voicemail.
        </div>
      </div>
    </section>

    <UnitsFooter />
  </div>
)

export const UnitsGCRefreshPage = () => (
  <UnitsJtbdPage
    tag="Between-Tenant Refresh · Gold Coast"
    tier="TIER 1 · Refresh"
    aov="$28k–$42k"
    timeline="28-day build window"
    headline="Between tenants. 28 days. Body Corporate Approved."
    subhead="Coast investors targeting $80–$220/week rent uplift on short-stay or long-let. Cosmetic update · paint · floor coverings · kitchen splashback + benchtop · bathroom regrouting + tap upgrade · door hardware. Goods-lift booked. BCM handled."
    anxiety={[
      'Every week empty is $680–$1,400 lost rent on short-stay letting.',
      'The goods-lift booking process in my tower is brutal. Will you handle it?',
      'I want rent uplift on short-stay, not a renovation that breaks even in 4 years.',
      'I\'m interstate or offshore. Who actually oversees the work day-to-day?',
      'My letting agent (Resort Brokers, AirCover, etc.) has bookings from Week 5. Can you finish?',
    ]}
    whatYouNeed={[
      'A 28-day build window — not "4-6 weeks depending on goods-lift availability"',
      'Goods-lift scheduling handled by us · BCM concierge relationships intact',
      'BCM approval handled by us — you don\'t chase the building manager from Sydney',
      'A scoped fixed-price quote · no surprise variations · no kitchen-table negotiations',
      'A clear short-stay rent-uplift projection · numerate, not aspirational',
    ]}
    whatWeDeliver={[
      { title: 'Goods-lift logistics', body: 'We book the goods lift, manage concierge access, schedule deliveries within tower working-hour by-laws.' },
      { title: 'BCM approval pre-built', body: 'High-rise Refresh BCM Approval Pack · submitted on your behalf · approval typically 5 business days.' },
      { title: '28-day fixed program', body: 'Day 1 → Day 28 schedule · in your contract · daily progress photos to your inbox.' },
      { title: 'Short-stay ROI sheet', body: 'M12 Coast comparables · pre-reno nightly rate vs projected post-reno · occupancy uplift · payback period.' },
      { title: 'Interstate/offshore liaison', body: 'WhatsApp + email project channel · video walkthroughs at week 1, 2, 3, handover · no surprises.' },
      { title: 'Letting-agent handover', body: 'Listing-photo-ready finish · spec sheet for your agent · ready for short-stay re-let Day 29.' },
    ]}
    leadMagnet={{
      title: 'Coast investor lead magnet',
      subtitle: 'The Between-Tenant Refresh · High-Rise BCM Approval Pack.',
      cta: 'Send me the Refresh BCM Pack',
    }}
    accent="#1b3a5c"
  />
)

export const UnitsGCRenewPage = () => (
  <UnitsJtbdPage
    tag="Modern Liveable Renew · Gold Coast"
    tier="TIER 2 · Renew"
    aov="$42k–$78k"
    timeline="6-week build window"
    headline="Modern liveable. 6 weeks. Body Corporate Approved."
    subhead="Full kitchen + full bathroom + electrical recompliance + floor coverings. Ocean-facing apartment specs. Goods-lift logistics handled. High-rise acoustic-floor compliance as standard. Built like it's our own home."
    anxiety={[
      'I\'ve never renovated in a high-rise. How do you handle the goods lift?',
      'The BCM by-laws are 47 pages. I can\'t read them all.',
      'Every renovator says "6 weeks". None of them actually finish in 6 weeks on the Coast.',
      'I\'m living in the unit during the reno. With ocean views I don\'t want to leave.',
      'The unit below has a short-stay letting. They will complain.',
    ]}
    whatYouNeed={[
      'A fixed price · written into the contract · no variation theatre',
      'A 6-week date-locked program · day 1 to day 42 in your calendar',
      'Goods-lift + BCM approval + by-law compliance + working-hour schedule · all handled',
      'A construction sequence designed for in-residence living · or temporary accommodation plan',
      'Acoustic-floor treatment as standard · so the unit below doesn\'t complain',
    ]}
    whatWeDeliver={[
      { title: 'Fixed-price contract', body: 'No "approximately" · no "subject to" · the price on day 1 is the price on day 42.' },
      { title: 'BCM-fluent submission', body: 'High-rise by-laws translated into your scope · submit on your behalf · respond to BCM queries.' },
      { title: 'Goods-lift logistics', body: 'Lift booking, concierge coordination, delivery scheduling within tower working-hour by-laws.' },
      { title: 'In-residence sequencing', body: 'Wet-area first · kitchen second · paint last · keep one bedroom usable throughout.' },
      { title: 'Acoustic-floor as standard', body: 'BCM-compliant acoustic underlay on every floor change · short-stay neighbour stays your friend.' },
      { title: '6-week date-locked program', body: 'Day 1–42 schedule in the contract · daily progress photos · finish-date guaranteed.' },
    ]}
    leadMagnet={{
      title: 'Coast owner-occupier lead magnet',
      subtitle: 'The Renew · High-Rise BCM Approval Pack + 6-Week Build Timeline.',
      cta: 'Send me the Renew BCM Pack',
    }}
    accent="#b8743d"
  />
)

export const UnitsGCBcmCoordinationPage = () => (
  <UnitsJtbdPage
    tag="BCM Coordination · Gold Coast"
    tier="Partner channel · BCM-facing"
    aov="High-rise scheme renovation pipeline"
    timeline="Preferred-contractor onboarding · 7-email sequence"
    headline="For high-rise BCMs. We make tower-scheme renovations easier."
    subhead="Your lot-owners ask you for contractor referrals. The wrong contractor in a high-rise causes lift-jamming, by-law violations, and concierge complaints. We are the contractor your committee will thank you for recommending — high-rise-fluent, goods-lift-disciplined, dispute-free."
    anxiety={[
      'My committee asked me for a high-rise contractor. The last one stranded a lift for 3 hours.',
      'I don\'t have time to vet contractors for every lot-owner inquiry.',
      'I need a contractor who understands tower by-laws · not one who argues about them.',
      'I want to add YBMT to my preferred-contractor list — what\'s the onboarding?',
      'How do I know YBMT won\'t cause concierge complaints?',
    ]}
    whatYouNeed={[
      'A contractor who treats you (the BCM) as the primary stakeholder · not the lot-owner',
      'High-rise-specific scope templates · goods-lift booking protocols · concierge etiquette',
      'A single point of accountability inside YBMT (Carla direct line, 1 business day SLA)',
      'A contractor who never escalates lot-owner disputes to you',
      'Onboarding that respects your time · 1-page intake · automatic 7-email sequence',
    ]}
    whatWeDeliver={[
      { title: 'BCM Referral Kit (high-rise)', body: 'Physical 24-page A4 binder · high-rise scope templates · tower case studies · BCM-fluency proof.' },
      { title: 'High-rise scope library', body: 'Refresh / Renew / Reset packs ready to drop into your tower\'s approval pathway.' },
      { title: '1-business-day SLA', body: 'Carla personally responds within 1 business day · phone or email · no voicemail.' },
      { title: 'Concierge etiquette', body: 'Our trades are briefed on tower concierge protocols · lift behaviour, lobby access, working-hours.' },
      { title: 'Dispute-free protocol', body: 'We absorb lot-owner friction · we never escalate scope disputes to the BCM.' },
      { title: 'Quarterly referral report', body: 'Every quarter you receive a 1-page report of jobs originated from your referrals · transparent attribution.' },
    ]}
    leadMagnet={{
      title: 'BCM-only lead magnet · high-rise',
      subtitle: 'Request a BCM Referral Kit · High-Rise Edition.',
      cta: 'Send me the BCM Referral Kit',
    }}
    accent="#5b7a3a"
    formFields={[
      { label: 'name', placeholder: 'BCM firm name' },
      { label: 'name', placeholder: 'Your name + role' },
      { label: 'email', placeholder: 'BCM work email' },
      { label: 'name', placeholder: 'Which tower prompted the inquiry?' },
    ]}
  />
)

export const UnitsGCPreSalePage = () => (
  <UnitsJtbdPage
    tag="Pre-Sale Reset · Gold Coast"
    tier="TIER 3 · Reset · highest-AOV"
    aov="$78k–$160k (penthouse to $250k)"
    timeline="10-12 week build · agent-coordinated"
    headline="Penthouse pre-sale. 10–12 weeks. $280k–$520k uplift on achieved sale price."
    subhead="Reset tier whole-unit gut for Coast trophy assets. M12 example: Main Beach 3-bed sub-penthouse pre-reno achieved $1.85M · post-reno achieved $2.34M · spend $148k · uplift $490k · ROI 3.3× · holding period 10 weeks. Body Corporate Approved."
    anxiety={[
      'My agent (Amir Mian, Kollosche, Ray White) says $150k now lifts my achievable price by $480k. Is that real?',
      'I have to settle on a new place in 90 days. Can you finish before listing?',
      'How do I prove to the buyer\'s solicitor that the renovation was done properly in a high-rise?',
      'I want the photography to capture ocean views, not just hide the dated kitchen.',
      'The agent wants commission on the uplifted price. How do I keep the maths working?',
    ]}
    whatYouNeed={[
      'A pre-reno vs post-reno ROI projection · M12 Coast trophy-asset comparables · suburb-specific',
      'A 10-12 week date-locked program · backwards-scheduled from agent\'s listing-go-live',
      'A 2-year transferable build warranty · powerful selling point to the buyer at settlement',
      'YBMT-recommended drone photographer + stager · seamless agent handover',
      'A pre-sale renovation certificate for your sales pack · buyer\'s solicitor accepts it',
    ]}
    whatWeDeliver={[
      { title: 'Coast M12 ROI evidence', body: 'Six anonymised historical trophy-asset jobs · Main Beach, Broadbeach, Surfers · pre vs post-reno.' },
      { title: 'Agent-coordinated program', body: 'Joint walkthrough with you + agent · scope agreed against listing-go-live · 10-12 week build.' },
      { title: 'Penthouse-grade fitout', body: 'Whole-unit gut · full kitchen + bathroom(s) + floors + electrical/plumbing + balcony + acoustic floor.' },
      { title: 'Drone-photographer handoff', body: 'YBMT-recommended Coast drone photographer · ocean-view captured · listed in 5 business days of handover.' },
      { title: 'Marketing-pack certificate', body: '"YBMT pre-sale renovation · 2-year warranty transferable" certificate for your sales pack.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full engineering review + scope + photographic record + QBCC HWI · transferred at settlement.' },
    ]}
    leadMagnet={{
      title: 'Coast realtor-channel lead magnet',
      subtitle: 'The Pre-Sale Renovation ROI Calculator · Coast Trophy Assets.',
      cta: 'Send me the Pre-Sale ROI Calculator',
    }}
    accent="#a04030"
  />
)
