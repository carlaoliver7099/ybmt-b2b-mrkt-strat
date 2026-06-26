// ============================================================================
// YBMT RESORT YARDS — Gold Coast (Cell 6/9)
// ============================================================================
// Doctrine inherited from pools-gtm.tsx · category-defining frame:
//   "Turn Your Backyard Into a Resort"
//   30-Days Guaranteed · DBA-3 = proof seal · DBA-6 = sonic mnemonic
//
// Regional archetype (Gold Coast):
//   - Mediterranean villa · sub-tropical · canal-front Resort Yard
//   - Mermaid Waters · Broadbeach Waters · Sorrento · Burleigh hinterland
//   - Aspirational lifestyle market · entertainer demographic
//   - Highest AOV per Resort Yard in SEQ
//
// 4 JTBDs (trigger-led, aspirational):
//   - Fast-Track Host (event-driven · 6-8 weeks)
//   - Pool Completion (pool installed, yard half-done)
//   - Deck Replacement (existing pool, tired surround)
//   - Pre-Sale Investor (uplift on listing)
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/pool-gold-coast'
const RESORT_YARD_PROMISE = '30-Days Guaranteed.'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

// Reuses Brisbane Resort Yards seal for now (DBA-3 brand-locked across regions)
const ResortYardSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <img
    src={`/static/resort-yards/dba/dba-03-30-day-guarantee-seal.png`}
    alt="30-Day Resort Yard Guarantee · YBMT × CoSai Construction"
    width={size}
    height={size}
    class={className}
    style={`width:${size}px;height:${size}px`}
    onerror="this.style.display='none'"
  />
)

const ResortYardsFooter = () => (
  <footer class="bg-[#1b3a5c] text-white py-12 mt-16">
    <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-3 gap-8 items-start mb-8">
        <div>
          <div class="font-bold text-2xl mb-1" style="font-family:Inter,sans-serif">YBMT</div>
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Resort Yards · Gold Coast</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            Mediterranean villa · canal-front · sub-tropical Resort Yards.
            <br />Mermaid Waters · Broadbeach Waters · Sorrento · Burleigh.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/pools-gc/fast-track-host" class="hover:text-[#b8743d]">Fast-Track Host</a></li>
            <li><a href="/pools-gc/pool-completion" class="hover:text-[#b8743d]">Pool Completion</a></li>
            <li><a href="/pools-gc/deck-replacement" class="hover:text-[#b8743d]">Deck Replacement</a></li>
            <li><a href="/pools-gc/pre-sale-investor" class="hover:text-[#b8743d]">Pre-Sale Investor</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Credentialled</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>30-Day Resort Yard guarantee</li>
            <li>$20M Public Liability Insurance</li>
            <li>QBCC Home Warranty Insurance</li>
            <li>2-year build warranty · transferable</li>
            <li>Coastal-rated material specifications</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">"{YBMT_GROUP_PROMISE}"</div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Resort Yards · Gold Coast · A line of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

export const PoolGoldCoastHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-pool-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-pool-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-44 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-[#b8743d] text-white text-[11px] uppercase tracking-wider font-semibold">
              YBMT Resort Yards
            </span>
            <span class="text-[11px] uppercase tracking-wider text-white/80">Gold Coast · Canal-Front to Hinterland</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Mediterranean villa. <br />
            <em class="text-[#b8743d]">Coast-rated build.</em>
          </h1>

          <p class="text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
            Turn your backyard into a resort. Travertine, coastal-rated timber, sub-tropical planting,
            sunset-lit deck, salt-water-rated finishes throughout.
            <strong class="text-white"> 30-Days Guaranteed.</strong>
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a href="#which-job" class="inline-flex items-center gap-2 px-6 py-3 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
              Find your pathway
              <i class="fas fa-arrow-right text-xs"></i>
            </a>
            <a href="#guarantee" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white rounded font-semibold transition-colors">
              The 30-Day Guarantee
            </a>
          </div>

          <div class="flex items-center gap-6">
            <ResortYardSeal size={90} />
            <div class="text-sm text-white/90 leading-snug">
              <div class="font-semibold text-white mb-1">A YBMT guarantee — written into your contract.</div>
              30-day build window from contract to handover. Coastal-rated specifications throughout.
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
            Salt-air doesn't compromise. <br />
            <em>Neither do we.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Mermaid Waters. Broadbeach Waters. Sorrento. Burleigh hinterland. Canal-frontage
            Resort Yards demand 316 marine-grade stainless, coastal-rated hardwood, salt-water
            pumps, UV-stable composite decking, and sub-tropical planting that thrives in humidity.
          </p>
          <p class="text-stone-700 leading-relaxed">
            We build to coastal specifications by default — not as an upgrade.
          </p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm">
          <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-4">Coastal-spec defaults</div>
          <ul class="space-y-4 text-sm">
            {[
              ['316 marine-grade stainless', 'All fixings, brackets, fasteners · not 304 budget-grade · spec\'d for canal-frontage salt exposure.'],
              ['Coastal-rated hardwood', 'Spotted gum or ironbark decking · class 1 durability · 25-year structural life on the Coast.'],
              ['Salt-water pumps + plumbing', 'All pump housings, valves, and plumbing rated for salt-chlorinated pools · standard on every Coast build.'],
              ['UV-stable composite', 'Where composite decking is specified, only UV-stable Class A grades · holds colour 15+ years.'],
              ['Sub-tropical planting', 'Frangipani, hardenbergia, lomandra, dianella · humidity-tolerant, low-irrigation, salt-aerosol-tolerant.'],
              ['30-Day build guarantee', 'Coast-rated build, Coast-priced timeline · 30 days contract-to-handover. Written into the contract.'],
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

    <section id="which-job" class="bg-white py-20">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-center mb-12">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Find your pathway</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight" style="font-family:Fraunces,serif">
            Four reasons people call YBMT Resort Yards. <br />
            <em>One of them is yours.</em>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          {[
            { n: '01', tag: 'Fast-Track Host', urgency: 'Acute · 6-8 weeks', headline: 'You\'re hosting in 6 weeks. The yard is not ready.', body: 'Christmas, anniversary, milestone birthday, family reunion. Resort-grade build, 30-day delivery, event-locked completion. We schedule backwards from your date.', cta: 'See the Fast-Track pathway', href: '/pools-gc/fast-track-host', accent: '#b8743d' },
            { n: '02', tag: 'Pool Completion', urgency: 'Planned · 8-12 weeks', headline: 'The pool went in. The yard around it didn\'t.', body: 'Beautiful pool, builder\'s rubble surround. We finish the resort — coping, decking, planting, lighting, alfresco. Coastal-rated throughout.', cta: 'See the Pool Completion pathway', href: '/pools-gc/pool-completion', accent: '#1b3a5c' },
            { n: '03', tag: 'Deck Replacement', urgency: 'Planned · 4-6 weeks', headline: 'The pool is fine. The deck around it has had it.', body: 'Splinters, mould, lifting boards, fading composite. We strip and rebuild to current coastal spec — without touching the pool. 4-week typical turnaround.', cta: 'See the Deck Replacement pathway', href: '/pools-gc/deck-replacement', accent: '#5b7a3a' },
            { n: '04', tag: 'Pre-Sale Investor', urgency: 'Acute · 8-week to listing', headline: 'You\'re listing on the Coast. The yard is the photo.', body: 'Drone photography sells canal-front. A Resort Yard transforms the headline image. Historical uplift: $80k–$220k on achieved sale price (M12 Coast comparables).', cta: 'See the Pre-Sale pathway', href: '/pools-gc/pre-sale-investor', accent: '#a04030' },
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

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// JTBD PAGE TEMPLATE
// ============================================================================

type PoolJtbdProps = {
  tag: string; urgency: string; trigger: string; headline: string; subhead: string
  anxiety: string[]; whatYouNeed: string[]
  whatWeDeliver: { title: string; body: string }[]
  timeline: string
  leadMagnet: { title: string; subtitle: string; cta: string }
  accent: string
}

const PoolJtbdPage = ({ tag, urgency, trigger, headline, subhead, anxiety, whatYouNeed, whatWeDeliver, timeline, leadMagnet, accent }: PoolJtbdProps) => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-pool-gold-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-pool-gold-coast.mp4`} type="video/mp4" />
        </video>
        <div class="absolute inset-0" style={`background:linear-gradient(to right, ${accent}cc 0%, ${accent}88 40%, transparent 100%)`}></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
      </div>

      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-24 lg:py-36 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-5">
            <span class="px-3 py-1 rounded-full bg-white text-[#1b3a5c] text-[11px] uppercase tracking-wider font-semibold">{tag}</span>
            <span class="text-[11px] uppercase tracking-wider text-white/85 font-semibold">Urgency: {urgency}</span>
          </div>
          <div class="text-[11px] uppercase tracking-wider text-white/80 font-semibold mb-3">Trigger: {trigger}</div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5" style="font-family:Fraunces,serif">{headline}</h1>
          <p class="text-lg text-white/95 leading-relaxed max-w-xl">{subhead}</p>
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
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The Resort Yard deliverable</div>
        <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-10" style="font-family:Fraunces,serif">
          What you get — <em>coastal-spec, date-locked, photo-ready.</em>
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
          <ResortYardSeal size={90} className="mx-auto mb-5" />
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">{leadMagnet.title}</div>
          <h3 class="text-2xl lg:text-3xl font-bold leading-snug" style="font-family:Fraunces,serif">{leadMagnet.subtitle}</h3>
        </div>
        <form class="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your name" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <input type="text" placeholder="Gold Coast suburb" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <select class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300">
            <option>Property type</option>
            <option>Canal-front home</option>
            <option>Coastal strip · ocean-side</option>
            <option>Hinterland acreage</option>
            <option>Investment property</option>
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

    <ResortYardsFooter />
  </div>
)

export const PoolGCFastTrackHostPage = () => (
  <PoolJtbdPage
    tag="Fast-Track Host · Gold Coast"
    urgency="Acute · 6–8 weeks to event"
    trigger="Calendar event with a fixed date · christmas, anniversary, milestone birthday, family reunion"
    headline="The date won't move. Your yard has to."
    subhead="Six to eight weeks. A canal-front Resort Yard that's photo-ready by the morning of the event. Coastal-rated travertine, coastal-rated decking, sub-tropical planting, sunset-lit alfresco. Event-locked completion · written into the contract."
    anxiety={[
      'Christmas is in 7 weeks. Can you actually finish in time?',
      'I don\'t want a half-built yard hiding behind potted plants for the photos.',
      'My agent\'s drone photographer arrives the day before. Will it be ready?',
      'Tradies disappearing right before the date — how do you guarantee against that?',
      'I don\'t want builder\'s rubble in the canal during the event.',
    ]}
    whatYouNeed={[
      'A date-locked build · finish date in the contract · event date is the anchor',
      'Coastal-spec materials throughout · 316 stainless, ironbark, salt-rated finishes',
      'Sub-tropical planting that\'s already established at handover · not freshly planted',
      'Drone-photography-ready finish · no rubble, no temporary fencing, no exposed sub-frame',
      'A 30-day guarantee with financial backing · not just verbal promises',
    ]}
    whatWeDeliver={[
      { title: 'Date-locked program', body: 'Event date is the anchor · we schedule backwards · day-by-day program in your contract.' },
      { title: 'Pre-grown planting', body: 'Frangipani, hardenbergia, lomandra delivered at 80% mature size · established appearance Day 1.' },
      { title: 'Coastal-spec build', body: '316 marine-grade stainless throughout · ironbark decking · salt-rated pumps · UV-stable composite where specified.' },
      { title: 'Drone-photo readiness', body: '48-hour pre-event clean-up + presentation pass · ready for your agent\'s drone or your event photographer.' },
      { title: 'Plain-vehicle on-site', body: 'No tradie-truck advertising in your driveway · respectful of canal-front neighbour relations.' },
      { title: '30-Day Guarantee', body: 'Coast-rated build, Coast-priced timeline · 30-day contract-to-handover for any Resort Yard up to 90m². Written contract.' },
    ]}
    timeline="From call to scope agreed: 5 business days. From scope to start: 7 days. Build window: 30 days for Resort Yards up to 90m². Date-locked to your event."
    leadMagnet={{
      title: 'Fast-Track Host · Gold Coast Field Guide',
      subtitle: 'The 30-day Resort Yard build plan, event-anchored.',
      cta: 'Send me the Field Guide',
    }}
    accent="#b8743d"
  />
)

export const PoolGCPoolCompletionPage = () => (
  <PoolJtbdPage
    tag="Pool Completion · Gold Coast"
    urgency="Planned · 8–12 weeks"
    trigger="Pool installed by another builder · surround unfinished or substandard"
    headline="The pool builder finished. The Resort Yard didn't."
    subhead="A beautiful canal-front pool surrounded by builder's rubble and exposed sub-frame. We finish what the pool builder didn't — coping, decking, planting, lighting, alfresco kitchen, glass balustrade. Coastal-spec throughout."
    anxiety={[
      'The pool builder said the surround was "out of scope". Now what?',
      'I want a Resort Yard, not just a pool with concrete around it.',
      'How do I avoid re-doing the work the pool builder skipped on?',
      'I don\'t want to wait until summer is over to use the pool.',
      'Will the warranty be split between pool builder and yard builder?',
    ]}
    whatYouNeed={[
      'A clean handover from your pool builder · no warranty crossover disputes',
      'A scoped fixed-price quote for everything outside the pool shell',
      'Coastal-spec coping · travertine or natural stone, not pool-builder concrete',
      'Sub-tropical planting integrated into the design, not added afterwards',
      'A 30-day build window so you can use the pool by month-end',
    ]}
    whatWeDeliver={[
      { title: 'Pool-builder coordination', body: 'We liaise with your pool builder on warranty boundaries · clean handover, no overlap disputes.' },
      { title: 'Travertine coping', body: 'Natural stone coping, salt-rated · not budget concrete · cool underfoot in Coast summer.' },
      { title: 'Coastal decking', body: 'Spotted gum or ironbark · class 1 durability · 25-year structural life · UV-stable finish.' },
      { title: 'Alfresco integration', body: 'Outdoor kitchen, glass balustrade, sunset-lit ceiling, weather-rated cabinetry · coastal-spec.' },
      { title: 'Sub-tropical planting', body: 'Designed with the pool · frangipani, hardenbergia, lomandra · established at handover.' },
      { title: '30-Day build window', body: 'Coast-rated build, coast-priced timeline · 30 days contract-to-handover. Written into contract.' },
    ]}
    timeline="From call to scope agreed: 5 business days. Pool-builder warranty handover: 1 week. Build window: 30 days. Total: ~6 weeks from first call."
    leadMagnet={{
      title: 'Pool Completion · Gold Coast Field Guide',
      subtitle: 'The 30-day finish for the pool the builder left half-done.',
      cta: 'Send me the Field Guide',
    }}
    accent="#1b3a5c"
  />
)

export const PoolGCDeckReplacementPage = () => (
  <PoolJtbdPage
    tag="Deck Replacement · Gold Coast"
    urgency="Planned · 4–6 weeks"
    trigger="Existing pool decking failed · splinters, lift, mould, fade"
    headline="The pool is fine. The deck around it has had it."
    subhead="Salt air and Coast humidity defeat pine in 8 years. We strip and rebuild to current coastal spec — without touching the pool. Spotted gum or ironbark or UV-stable composite. 4-week typical turnaround."
    anxiety={[
      'The deck is splintering. The grandkids can\'t use it.',
      'Composite from 2015 has faded to grey. Can the new stuff hold colour?',
      'The boards are lifting. Is the sub-frame rotten or just the boards?',
      'How do you replace the deck without damaging the pool shell?',
      'My HOA / strata is asking about colour and material approval.',
    ]}
    whatYouNeed={[
      'Honest read on whether sub-frame is salvageable or full rebuild needed',
      'Coastal-spec hardwood OR UV-stable Class A composite · not the cheap fade-in-2-years stuff',
      '316 marine-grade stainless fixings · not 304 budget · for canal-front salt exposure',
      'Pool shell protection during demolition · no damage warranty crossover',
      'A 4-week turnaround · you want the deck back by next weekend, not next season',
    ]}
    whatWeDeliver={[
      { title: 'Sub-frame audit', body: 'Day-1 inspection · honest read on sub-frame condition · scope confirms full or partial rebuild.' },
      { title: 'Coastal-spec hardwood', body: 'Spotted gum or ironbark · class 1 durability · 25-year life · salt-rated.' },
      { title: 'OR UV-stable composite', body: 'Class A composite only · holds colour 15+ years · fade-resistant warranty.' },
      { title: '316 marine-grade fixings', body: 'All stainless · not 304 · canal-front salt-exposure-rated.' },
      { title: 'Pool-shell protection', body: 'Temporary edge protection during demo · pool stays usable during build.' },
      { title: '4-week turnaround', body: 'Demo week 1 · sub-frame correction week 2 · deck install weeks 3-4 · handover day 28.' },
    ]}
    timeline="From call to scope: 3 business days. From scope to start: 5 days. Build window: 28 days. Total: ~5 weeks."
    leadMagnet={{
      title: 'Deck Replacement · Gold Coast Field Guide',
      subtitle: 'Hardwood vs composite · which is right for a canal-front Resort Yard?',
      cta: 'Send me the Field Guide',
    }}
    accent="#5b7a3a"
  />
)

export const PoolGCPreSaleInvestorPage = () => (
  <PoolJtbdPage
    tag="Pre-Sale Investor · Gold Coast"
    urgency="Acute · 8 weeks to listing"
    trigger="Listing the property · agent recommends pre-sale Resort Yard uplift"
    headline="On the Coast, the yard is the photo."
    subhead="Drone photography sells canal-front. A Resort Yard transforms the headline image — and the achievable price. Historical M12 example: Mermaid Waters canal-front · pre-Resort-Yard achieved $2.85M · post-Resort-Yard achieved $3.12M · spend $148k · uplift $270k · ROI 1.82×."
    anxiety={[
      'My agent says the Resort Yard adds $250k to my price. Is that real?',
      'I list in 8 weeks. Can you actually deliver by then?',
      'I don\'t want to over-capitalise on a flip.',
      'How do I prove to a buyer\'s solicitor the build is properly warranted?',
      'My agent has a drone photographer locked in. Will the yard be ready?',
    ]}
    whatYouNeed={[
      'M12 ROI evidence specific to your suburb · not generic uplift claims',
      'An 8-week date-locked program · backwards-scheduled from listing-go-live',
      'A 2-year transferable build warranty · powerful selling point at settlement',
      'YBMT-recommended drone photographer + stager · seamless agent handover',
      'A Resort Yard certificate for the marketing pack · buyer\'s solicitor accepts it',
    ]}
    whatWeDeliver={[
      { title: 'Suburb-specific ROI', body: 'M12 comparables for Mermaid Waters, Broadbeach Waters, Sorrento, Burleigh · pre-reno vs post-reno achieved.' },
      { title: 'Agent-coordinated program', body: 'Joint walkthrough with you + agent · scope agreed against listing-go-live · 8-week build.' },
      { title: 'Coastal-spec finish', body: 'Travertine, ironbark, 316 stainless, sub-tropical planting · holds up in drone photography.' },
      { title: 'Drone photographer hand-off', body: 'YBMT-recommended Coast drone photographer · listed within 5 business days of handover.' },
      { title: 'Marketing-pack certificate', body: '"YBMT Resort Yard · 2-year warranty transferable at settlement" certificate for your sales pack.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full scope, photographic record, material schedule, QBCC HWI certificate · transferred at settlement.' },
    ]}
    timeline="From call to ROI projection: 3 business days. From agreed scope to listing-go-live: 8 weeks. From listing to settlement: 30-60 days typical."
    leadMagnet={{
      title: 'Pre-Sale Investor · Gold Coast ROI Calculator',
      subtitle: 'Suburb-specific Resort Yard uplift · canal-front, coastal strip, hinterland.',
      cta: 'Send me the ROI Calculator',
    }}
    accent="#a04030"
  />
)
