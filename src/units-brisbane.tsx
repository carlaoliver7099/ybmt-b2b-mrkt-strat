// ============================================================================
// YBMT UNITS — Brisbane (Cell 5/9)
// ============================================================================
// Sub-brand: YBMT Units · "Renovations That Settle Quietly. 30 Days. Body Corporate Approved."
// Category frame: "Renovations That Settle Quietly — Body Corporate, Tenant, Owner-Occupier"
//
// Doctrine (from units-gtm.tsx · 2,095 lines):
//   Rule 1 — The unit is not a house. BCM by-laws, common-property rules, acoustic compliance.
//   Rule 2 — Voice is closer to quantity surveyor than copywriter (numerate, BCM-fluent).
//   Rule 6 — Trust transfer to BCM is the strategic conversion event.
//   Rule 7 — Pre-sale renovation is the highest-AOV JTBD.
//   Persona overlay: Sarah & Mark as investor-owner OR downsizer.
//
// 4 trigger-led JTBDs:
//   JTBD-1 · Between-tenant Refresh (investor · $28k–$42k · 28 days)
//   JTBD-2 · Modern Liveable Renew (owner-occupier · $42k–$78k · 6 weeks)
//   JTBD-3 · BCM Common-Property Coordination (BCM-channel inbound)
//   JTBD-4 · Pre-Sale Reset (realtor-channel · $78k–$120k · highest AOV)
//
// Regional archetype (Brisbane):
//   - New Farm · Bulimba · Hamilton · Hawthorne · Toowong · Indooroopilly
//   - River-corridor mid-density · investor-heavy + downsizer-heavy mix
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/units-brisbane'
const UNITS_PROMISE = '30 Days. Body Corporate Approved.'
const UNITS_TAGLINE = 'Renovations That Settle Quietly.'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

// Units DBA placeholder — reuses navy seal until dedicated DBA-4 seal is generated
const UnitsSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <div
    class={`inline-flex items-center justify-center rounded-full text-center ${className}`}
    style={`width:${size}px;height:${size}px;background:#1b3a5c;color:#fff;font-family:Fraunces,serif;line-height:1.1;padding:${size * 0.1}px;font-size:${size * 0.13}px;border:3px solid #b8743d;`}
  >
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
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Units · Brisbane</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            Kitchen · Bathroom · Whole-unit refresh · BCM-coordinated upgrades · Pre-sale renovations.
            <br />New Farm · Bulimba · Hamilton · Hawthorne · Toowong · Indooroopilly.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/units/refresh" class="hover:text-[#b8743d]">Between-Tenant Refresh</a></li>
            <li><a href="/units/renew" class="hover:text-[#b8743d]">Modern Liveable Renew</a></li>
            <li><a href="/units/bcm-coordination" class="hover:text-[#b8743d]">BCM Coordination</a></li>
            <li><a href="/units/pre-sale" class="hover:text-[#b8743d]">Pre-Sale Reset</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Credentialled</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>BCM-Approved contractor (8 SEQ schemes)</li>
            <li>$20M Public Liability Insurance</li>
            <li>QBCC Home Warranty Insurance covered</li>
            <li>2-year build warranty · transferable</li>
            <li>Acoustic-compliant scheduling</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">"{YBMT_GROUP_PROMISE}"</div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Units · Brisbane · A line of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

// ============================================================================
// HUB PAGE — /units
// ============================================================================

export const UnitsBrisbaneHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-units-brisbane-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-units-brisbane.mp4`} type="video/mp4" />
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
            <span class="text-[11px] uppercase tracking-wider text-white/70">Brisbane · River Corridor</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Renovations that <br />
            <em class="text-[#b8743d]">settle quietly.</em>
          </h1>

          <p class="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Kitchen, bathroom, whole-unit refresh. Body-corporate friendly. Tenant-respectful.
            Signed off in 30 days.
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
              Fixed-price scope. 30-day build window. Body-corporate liaison handled by us.<br />
              2-year build warranty · transferable at settlement.
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* CATEGORY FRAME */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The category we own</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            The unit is not a house. <br />
            <em>We renovate accordingly.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Body-corporate by-laws. Common-property rules. Acoustic-floor compliance. Working-hour
            restrictions. Lift-access scheduling. Trade-of-record discipline. No other Brisbane
            renovator leads with BCM compliance language because no other Brisbane renovator
            has run as many BCM-coordinated jobs.
          </p>
          <p class="text-stone-700 leading-relaxed">
            We're closer to a quantity surveyor than a copywriter — and for the investor-owner
            and the downsizer, that's exactly correct.
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
              <div class="text-xs text-stone-600 leading-relaxed">Cosmetic update · paint · floors · splashback + benchtop · regrout + tap upgrade · door hardware. <strong>Investor JTBD: between-tenant uplift.</strong></div>
            </li>
            <li>
              <div class="flex items-baseline justify-between mb-1">
                <div class="font-bold text-[#1b3a5c]">TIER 2 · RENEW</div>
                <div class="text-xs text-stone-500">$42k–$78k · 5–7 wks</div>
              </div>
              <div class="text-xs text-stone-600 leading-relaxed">Partial gut · full kitchen · full bathroom · electrical to current code · plumbing fixture replacement. <strong>Owner-occupier JTBD: modern liveable.</strong></div>
            </li>
            <li>
              <div class="flex items-baseline justify-between mb-1">
                <div class="font-bold text-[#1b3a5c]">TIER 3 · RESET</div>
                <div class="text-xs text-stone-500">$78k–$120k · 8–10 wks</div>
              </div>
              <div class="text-xs text-stone-600 leading-relaxed">Whole-unit gut · full kitchen + bathroom(s) + floors + electrical/plumbing recompliance + balcony refresh + acoustic floor treatment. <strong>Pre-sale + downsizer JTBD.</strong></div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* 4 JTBD CARDS */}
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
            { n: '01', tag: 'Between-Tenant Refresh', urgency: 'Tight · 28 days', headline: 'The lease ends next month. You want rent uplift on the next tenancy.', body: 'Refresh tier ($28k–$42k). 28-day build window. We coordinate BCM approval, you coordinate the leasing agent. Target rent uplift: $40–$140/week.', cta: 'See the Refresh pathway', href: '/units/refresh', accent: '#1b3a5c' },
            { n: '02', tag: 'Modern Liveable Renew', urgency: 'Planned · 6 weeks', headline: 'You bought the unit to live in. You want the kitchen and bathroom done properly.', body: 'Renew tier ($42k–$78k). 6-week build. Full kitchen + full bathroom + electrical recompliance. Body Corporate Approved. Built like it\'s our own home.', cta: 'See the Renew pathway', href: '/units/renew', accent: '#b8743d' },
            { n: '03', tag: 'BCM Coordination', urgency: 'BCM-channel inbound', headline: 'You\'re a Body Corporate Manager and a lot-owner just asked you for a contractor referral.', body: 'For BCMs: we make your scheme renovations easier. Pre-approved scope templates. Single point of accountability. BCM Referral Kit + preferred-contractor onboarding.', cta: 'See the BCM partner page', href: '/units/bcm-coordination', accent: '#5b7a3a' },
            { n: '04', tag: 'Pre-Sale Reset', urgency: 'Realtor-coordinated · 8 weeks', headline: 'You\'re listing the unit. Your agent says a pre-sale renovation lifts the achievable price.', body: 'Reset tier ($78k–$120k). 8-week build. Whole-unit gut. Coordinated to your agent\'s listing-go-live date. Historical M12 uplift: $180k–$240k on achieved sale price.', cta: 'See the Pre-Sale pathway', href: '/units/pre-sale', accent: '#a04030' },
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

    {/* BCM APPROVAL PACK CTA */}
    <section id="bcm-pack" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-[#1b3a5c] rounded-lg p-10 text-white grid md:grid-cols-5 gap-10 items-center">
        <div class="md:col-span-2 flex justify-center">
          <UnitsSeal size={140} />
        </div>
        <div class="md:col-span-3">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">The universal lead magnet</div>
          <h3 class="text-3xl font-bold mb-4 leading-snug" style="font-family:Fraunces,serif">The BCM Approval Pack.</h3>
          <p class="text-white/85 mb-6 leading-relaxed">
            32-page A4 PDF. Pre-built scope templates. By-law compliance checklist. Working-hour
            schedule. Acoustic-floor specification. The full pack your Body Corporate Manager
            needs to sign off your renovation in one meeting, not three.
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
// SHARED JTBD PAGE TEMPLATE
// ============================================================================

type UnitsJtbdProps = {
  tag: string; tier: string; aov: string; timeline: string
  headline: string; subhead: string
  anxiety: string[]; whatYouNeed: string[]
  whatWeDeliver: { title: string; body: string }[]
  leadMagnet: { title: string; subtitle: string; cta: string }
  accent: string
  formFields?: { label: string; placeholder: string }[]
  suburb?: string
}

const UnitsJtbdPage = ({ tag, tier, aov, timeline, headline, subhead, anxiety, whatYouNeed, whatWeDeliver, leadMagnet, accent, formFields, suburb = 'Brisbane suburb' }: UnitsJtbdProps) => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-units-brisbane-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-units-brisbane.mp4`} type="video/mp4" />
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
            { label: 'suburb', placeholder: suburb },
            { label: 'building', placeholder: 'Building name (optional)' },
          ]).map(f => (
            <input type={f.label === 'email' ? 'email' : 'text'} placeholder={f.placeholder} class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          ))}
          <button type="button" class="w-full px-6 py-4 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
            {leadMagnet.cta} →
          </button>
        </form>

        <div class="text-center text-xs text-white/60 mt-6">
          BCM-fluent. Investor-numerate. Owner-occupier-respectful. We don't use voicemail.
        </div>
      </div>
    </section>

    <UnitsFooter />
  </div>
)

// ============================================================================
// 4 JTBD PAGES
// ============================================================================

export const UnitsRefreshPage = () => (
  <UnitsJtbdPage
    tag="Between-Tenant Refresh"
    tier="TIER 1 · Refresh"
    aov="$28k–$42k"
    timeline="28-day build window"
    headline="Between tenants. 28 days. Body Corporate Approved."
    subhead="Our Refresh tier is engineered for the investor who needs the unit re-let on Day 28, with a $40–$140/week rent uplift to justify the spend. Cosmetic update · paint · floor coverings · kitchen splashback + benchtop · bathroom regrouting + tap upgrade · door hardware refresh."
    anxiety={[
      'Every week empty is $480–$620 of lost rent.',
      'The BCM is slow to approve. Will my renovation drag into month two?',
      'I want rent uplift, not a renovation that breaks even on five years of higher rent.',
      'I\'m interstate. Who actually oversees the work day-to-day?',
      'My leasing agent has a tenant lined up for week 5. Can you actually finish by then?',
    ]}
    whatYouNeed={[
      'A 28-day build window — not "4-6 weeks depending on suppliers"',
      'BCM approval handled by us — you don\'t have to chase the building manager',
      'A scoped fixed-price quote · no surprise variations · no kitchen-table negotiations',
      'Photographic record + handover pack for your leasing agent',
      'A clear before-and-after rent-uplift projection · numerate, not aspirational',
    ]}
    whatWeDeliver={[
      { title: 'BCM approval pre-built', body: 'We submit the Refresh-tier BCM Approval Pack on your behalf · approval typically lands in 5 business days.' },
      { title: '28-day fixed program', body: 'Day 1 → Day 28 schedule · in your contract · with daily progress photos to your inbox.' },
      { title: 'Investor ROI sheet', body: 'Pre-reno rent vs projected post-reno rent · payback period · capital uplift on resale · real numbers from M12 comparables.' },
      { title: 'Plain-vehicle on-site', body: 'No tradie-truck advertising in your common car park · respectful of the BCM working-hour rules.' },
      { title: 'Leasing-agent handover', body: 'Listing-photo-ready finish · floor plan + spec sheet for your agent · ready for re-let Day 29.' },
      { title: '2-year build warranty', body: 'Transferable. Your next tenant inherits a documented, warranted unit.' },
    ]}
    leadMagnet={{
      title: 'Investor lead magnet',
      subtitle: 'The Between-Tenant Refresh BCM Approval Pack.',
      cta: 'Send me the Refresh BCM Pack',
    }}
    accent="#1b3a5c"
  />
)

export const UnitsRenewPage = () => (
  <UnitsJtbdPage
    tag="Modern Liveable Renew"
    tier="TIER 2 · Renew"
    aov="$42k–$78k"
    timeline="6-week build window"
    headline="Modern liveable. 6 weeks. Body Corporate Approved."
    subhead="Full kitchen + full bathroom + electrical recompliance + floor coverings. $42k–$78k fixed price. 6-week build window. Body Corporate Approved. Built like it's our own home."
    anxiety={[
      'I\'ve never renovated before. How do I know I\'m not being upsold?',
      'The BCM by-laws are written in legal English I don\'t understand.',
      'Every renovator says "6 weeks". None of them actually finish in 6 weeks.',
      'I\'m living in the unit during the reno. Can I sleep here?',
      'My neighbour complained about noise from the last unit\'s reno. How do you handle that?',
    ]}
    whatYouNeed={[
      'A fixed price · written into the contract · no variation theatre',
      'A 6-week date-locked program · day 1 to day 42 in your calendar',
      'BCM approval, by-law compliance, working-hour schedule · all handled by us',
      'A construction sequence designed for in-residence living · or a temporary accommodation plan',
      'Acoustic-floor treatment as standard · so the unit below doesn\'t complain',
    ]}
    whatWeDeliver={[
      { title: 'Fixed-price contract', body: 'No "approximately" · no "subject to" · the price on day 1 is the price on day 42.' },
      { title: 'BCM-fluent submission', body: 'We translate the by-laws into your scope · submit on your behalf · respond to BCM queries.' },
      { title: 'In-residence sequencing', body: 'Wet-area work first · kitchen second · paint last · keep one bedroom usable throughout.' },
      { title: 'Acoustic-floor as standard', body: 'BCM-compliant acoustic underlay on every floor change · your downstairs neighbour stays your friend.' },
      { title: '6-week date-locked program', body: 'Day 1–42 schedule in the contract · daily progress photos · finish-date guaranteed.' },
      { title: '2-year transferable warranty', body: 'Written into the contract · inherited by the next owner at settlement.' },
    ]}
    leadMagnet={{
      title: 'Owner-occupier lead magnet',
      subtitle: 'The Renew BCM Approval Pack + 6-Week Build Timeline.',
      cta: 'Send me the Renew BCM Pack',
    }}
    accent="#b8743d"
  />
)

export const UnitsBcmCoordinationPage = () => (
  <UnitsJtbdPage
    tag="BCM Coordination"
    tier="Partner channel · BCM-facing"
    aov="Per-scheme renovation pipeline"
    timeline="Preferred-contractor onboarding · 7-email sequence"
    headline="For Body Corporate Managers. We make your scheme renovations easier."
    subhead="Your lot-owners ask you for contractor referrals. The bad ones cost you reputation. We are the contractor your scheme committee will thank you for recommending — pre-approved scope templates, single point of accountability, BCM Referral Kit on its way to your office."
    anxiety={[
      'My committee asked me for a renovation contractor. The last one I recommended was a disaster.',
      'I don\'t have time to vet contractors for every lot-owner inquiry.',
      'I need a contractor who understands by-laws · not one who argues about them.',
      'I want to add YBMT to my preferred-contractor list — what\'s the onboarding?',
      'How do I know YBMT won\'t make my role harder?',
    ]}
    whatYouNeed={[
      'A contractor who treats you (the BCM) as the primary stakeholder · not the lot-owner',
      'Pre-built scope templates · pre-built by-law compliance checklists',
      'A single point of accountability inside YBMT (Carla direct line, 1 business day SLA)',
      'A contractor who never escalates lot-owner disputes to you',
      'Onboarding that respects your time · 1-page intake · automatic 7-email sequence',
    ]}
    whatWeDeliver={[
      { title: 'BCM Referral Kit', body: 'Physical 24-page A4 binder shipped to your office · scope templates · case studies · BCM-fluency proof.' },
      { title: 'Pre-built scope library', body: 'Refresh / Renew / Reset BCM Approval Packs ready to drop into your scheme\'s approval pathway.' },
      { title: '1-business-day SLA', body: 'Carla personally responds within 1 business day to any BCM inquiry · phone or email · no voicemail.' },
      { title: 'Dispute-free protocol', body: 'We absorb lot-owner friction · we never escalate scope disputes to the BCM.' },
      { title: 'Preferred-contractor onboarding', body: '7-email sequence over 30 days · Carla intro call · then you\'re live on our partner channel.' },
      { title: 'Quarterly referral report', body: 'Every quarter you receive a 1-page report of jobs originated from your referrals · transparent attribution.' },
    ]}
    leadMagnet={{
      title: 'BCM-only lead magnet',
      subtitle: 'Request a BCM Referral Kit.',
      cta: 'Send me the BCM Referral Kit',
    }}
    accent="#5b7a3a"
    formFields={[
      { label: 'name', placeholder: 'BCM firm name' },
      { label: 'name', placeholder: 'Your name + role' },
      { label: 'email', placeholder: 'BCM work email' },
      { label: 'name', placeholder: 'Which scheme prompted the inquiry?' },
    ]}
  />
)

export const UnitsPreSalePage = () => (
  <UnitsJtbdPage
    tag="Pre-Sale Reset"
    tier="TIER 3 · Reset · highest-AOV"
    aov="$78k–$120k"
    timeline="8-week build · coordinated to your listing date"
    headline="Pre-sale renovation. 8 weeks. $180k–$240k uplift on achieved sale price."
    subhead="Reset tier whole-unit gut. Coordinated to your agent's listing timeline. M12 historical example: New Farm 2-bed pre-reno median $880k · post-reno achieved $1.12M · spend $94k · uplift $240k · ROI 2.55× · holding period 8 weeks. Body Corporate Approved."
    anxiety={[
      'My agent says spending $90k now lifts my achievable price by $240k. Is that real?',
      'I have to settle on a new place in 90 days. Can you finish before my listing date?',
      'How do I prove to the buyer\'s solicitor that the renovation was done properly?',
      'I want the photography to capture the renovation, not just hide the dated kitchen.',
      'The agent wants commission on the uplifted price. How do I make sure the maths still works?',
    ]}
    whatYouNeed={[
      'A pre-reno vs post-reno ROI projection · grounded in M12 historical YBMT comparables · suburb-specific',
      'An 8-week date-locked program · backwards-scheduled from your agent\'s listing-go-live',
      'A 2-year transferable build warranty · powerful selling point to the buyer at settlement',
      'YBMT-recommended listing photographer + stager · seamless agent handover',
      'A pre-sale renovation certificate for your sales pack · buyer\'s solicitor accepts it',
    ]}
    whatWeDeliver={[
      { title: 'M12 ROI evidence', body: 'Six anonymised historical jobs · pre-reno suburb median · post-reno achieved · spend · uplift · ROI · all in YBMT target suburbs.' },
      { title: 'Agent-coordinated program', body: 'Joint walkthrough with you + agent · scope agreed against your settlement-timeline target · listing-date locked.' },
      { title: '8-week build', body: 'Whole-unit gut · full kitchen + bathroom(s) + floors + electrical/plumbing recompliance + balcony refresh + acoustic floor.' },
      { title: 'Photographer + stager hand-off', body: 'YBMT-recommended Toby Scott photography + Jodie Carter staging · listed within 5 business days of handover.' },
      { title: 'Marketing-pack certificate', body: '"YBMT pre-sale renovation · 2-year warranty transferable at settlement" certificate for your sales pack.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full engineering review + scope + photographic record + QBCC HWI certificate · transferred to the purchaser at settlement.' },
    ]}
    leadMagnet={{
      title: 'Realtor-channel lead magnet',
      subtitle: 'The Pre-Sale Renovation ROI Calculator.',
      cta: 'Send me the Pre-Sale ROI Calculator',
    }}
    accent="#a04030"
  />
)
