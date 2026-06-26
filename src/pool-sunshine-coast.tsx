// ============================================================================
// YBMT RESORT YARDS — Sunshine Coast (Cell 7/9)
// ============================================================================
// Regional archetype: Hamptons-meets-Noosa · coastal-luxe · sunrise-east-light
//   Noosa Heads · Sunshine Beach · Castaways Beach · Sunrise Beach · Buderim
//   Hinterland acreage Resort Yards (Maleny, Montville)
//   Aspirational lifestyle market · longer holding periods · multi-generational
// ============================================================================

import { TopNav } from './nav'

const BASE = '/static/pool-sunshine-coast'
const YBMT_GROUP_PROMISE = `Built like it's our own home.`

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
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Resort Yards · Sunshine Coast</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            Hamptons-coastal · Noosa beach-house · hinterland acreage Resort Yards.
            <br />Noosa · Sunshine Beach · Buderim · Maleny · Montville · Mooloolaba.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">JTBDs</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/pools-sc/fast-track-host" class="hover:text-[#b8743d]">Fast-Track Host</a></li>
            <li><a href="/pools-sc/pool-completion" class="hover:text-[#b8743d]">Pool Completion</a></li>
            <li><a href="/pools-sc/deck-replacement" class="hover:text-[#b8743d]">Deck Replacement</a></li>
            <li><a href="/pools-sc/pre-sale-investor" class="hover:text-[#b8743d]">Pre-Sale Investor</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Credentialled</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>30-Day Resort Yard guarantee</li>
            <li>Noosa Council DA-coordination</li>
            <li>$20M Public Liability Insurance</li>
            <li>2-year build warranty · transferable</li>
            <li>Coastal-rated specifications standard</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">"{YBMT_GROUP_PROMISE}"</div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Resort Yards · Sunshine Coast · A line of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

export const PoolSunshineCoastHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata"
          poster={`${BASE}/video/hero-video-pool-sunshine-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-pool-sunshine-coast.mp4`} type="video/mp4" />
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
            <span class="text-[11px] uppercase tracking-wider text-white/80">Sunshine Coast · Noosa to Mooloolaba</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Hamptons-coastal. <br />
            <em class="text-[#b8743d]">Sunrise-east light.</em>
          </h1>

          <p class="text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
            Turn your Noosa beach-house yard into a resort. Whitewashed timber, woven seating,
            pandanus and frangipani, coastal-blue tile, salt-water-rated finishes.
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
              30-day build window. Coastal-rated specifications. Noosa Council DA-coordinated.
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Why the Sunshine Coast is different</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            Sunrise light. <br />
            <em>Coastal-luxe restraint.</em>
          </h2>
          <p class="text-stone-700 leading-relaxed mb-4 text-lg">
            Noosa Heads. Sunshine Beach. Castaways. Buderim ridge. Maleny acreage. The Sunshine Coast
            Resort Yard is quieter than the Gold Coast — whitewashed weatherboard, woven outdoor
            seating, pandanus and frangipani planting, soft-blue mineral pool finishes.
          </p>
          <p class="text-stone-700 leading-relaxed">
            We work within Noosa Council DA requirements, vegetation overlays, and the
            architectural restraint that defines Coast luxury.
          </p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm">
          <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-4">Coastal-luxe spec defaults</div>
          <ul class="space-y-4 text-sm">
            {[
              ['Whitewashed hardwood', 'Spotted gum or silvertop ash · Sikkens whitewash finish · holds for 5-7 years before refinish.'],
              ['Mineral pool finish', 'Soft-blue mineral interior · matte pebble or polished glass-bead · NOT bright Mediterranean blue.'],
              ['Coastal-luxe planting', 'Pandanus, frangipani, lomandra, native grasses · Council-compliant, fire-retardant, salt-tolerant.'],
              ['Woven outdoor seating', 'Coastal-rated synthetic rattan + teak frames · 10-year UV warranty · holds the Hamptons aesthetic.'],
              ['Noosa Council DA-coord', 'We submit DA + vegetation overlay paperwork on your behalf · 4-week typical approval.'],
              ['30-Day build guarantee', 'Coast-rated build, Coast-priced timeline · written into the contract.'],
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
            { n: '01', tag: 'Fast-Track Host', urgency: 'Acute · 6-8 weeks', headline: 'Christmas in Noosa. Family flying in. Yard\'s not done.', body: 'Coastal-luxe Resort Yard, 30-day delivery, event-locked completion. Noosa Council DA fast-tracked. We schedule backwards from your date.', cta: 'See the Fast-Track pathway', href: '/pools-sc/fast-track-host', accent: '#b8743d' },
            { n: '02', tag: 'Pool Completion', urgency: 'Planned · 8-12 weeks', headline: 'The pool builder finished. The Hamptons-coastal yard didn\'t.', body: 'Whitewashed decking, woven outdoor seating, coastal-luxe planting, sunset alfresco. We finish what the pool builder skipped.', cta: 'See the Pool Completion pathway', href: '/pools-sc/pool-completion', accent: '#1b3a5c' },
            { n: '03', tag: 'Deck Replacement', urgency: 'Planned · 4-6 weeks', headline: 'The beach-house deck has seen 12 summers.', body: 'Salt air, sun, sand. We strip and rebuild with whitewashed spotted gum or coastal composite. Pool stays untouched.', cta: 'See the Deck Replacement pathway', href: '/pools-sc/deck-replacement', accent: '#5b7a3a' },
            { n: '04', tag: 'Pre-Sale Investor', urgency: 'Acute · 8 weeks to listing', headline: 'You\'re listing in Sunshine Beach. The yard is the photo.', body: 'Coast drone photography sells the lifestyle. A Resort Yard transforms the headline image. M12 uplift: $120k–$340k on achieved sale price.', cta: 'See the Pre-Sale pathway', href: '/pools-sc/pre-sale-investor', accent: '#a04030' },
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
          poster={`${BASE}/video/hero-video-pool-sunshine-coast-poster.jpg`}
          class="w-full h-full object-cover">
          <source src={`${BASE}/video/hero-video-pool-sunshine-coast.mp4`} type="video/mp4" />
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
          What you get — <em>coastal-luxe, date-locked, photo-ready.</em>
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
          <input type="text" placeholder="Sunshine Coast suburb" class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300 placeholder-stone-500" />
          <select class="w-full px-4 py-3 bg-white text-stone-800 rounded border border-stone-300">
            <option>Property type</option>
            <option>Beach-house · Noosa / Sunshine Beach</option>
            <option>Hinterland acreage · Maleny / Montville</option>
            <option>Coastal strip · Buderim / Mooloolaba</option>
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

export const PoolSCFastTrackHostPage = () => (
  <PoolJtbdPage
    tag="Fast-Track Host · Sunshine Coast"
    urgency="Acute · 6–8 weeks to event"
    trigger="Calendar event with a fixed date · Christmas, milestone birthday, family reunion"
    headline="Noosa Christmas. Family flying in. Yard's not done."
    subhead="Six to eight weeks. A Hamptons-coastal Resort Yard photo-ready by the morning of the event. Whitewashed spotted gum, woven outdoor seating, mineral pool finish, pandanus + frangipani planting. Event-locked completion · written into the contract."
    anxiety={[
      'Christmas is in 7 weeks and family is flying up from Melbourne. Can you finish in time?',
      'Noosa Council DA can take 8 weeks. How do you compress that?',
      'I don\'t want builder\'s rubble on Hastings Street footpath during the build.',
      'I want Hamptons restraint, not Gold-Coast bling. Will you respect that?',
      'My agent\'s drone photographer is locked in. Will the planting be established?',
    ]}
    whatYouNeed={[
      'Noosa Council DA submission handled by us · we know the planner relationships',
      'A date-locked build · finish date in the contract · event date is the anchor',
      'Hamptons-coastal aesthetic by default · whitewashed timber, woven seating, soft-blue finishes',
      'Pre-grown pandanus + frangipani · established at handover, not freshly planted',
      'Drone-photography-ready finish · no rubble, no temporary fencing, no exposed sub-frame',
    ]}
    whatWeDeliver={[
      { title: 'Date-locked program', body: 'Event date is the anchor · we schedule backwards · day-by-day program in your contract.' },
      { title: 'Council DA-coordinated', body: 'We submit DA + vegetation overlay on your behalf · planner relationships make 4-week approval realistic.' },
      { title: 'Pre-grown coastal planting', body: 'Pandanus, frangipani, lomandra at 80% mature size · established appearance Day 1.' },
      { title: 'Hamptons-coastal aesthetic', body: 'Whitewashed spotted gum · woven outdoor seating · mineral pool finish · sunrise-light tested.' },
      { title: 'Drone-photo readiness', body: '48-hour pre-event clean-up + presentation pass · ready for your agent\'s drone or your event photographer.' },
      { title: '30-Day Guarantee', body: 'Coast-rated build, Coast-priced timeline · 30-day contract-to-handover for any Resort Yard up to 90m². Written contract.' },
    ]}
    timeline="From call to DA submission: 7 business days. DA approval: 4 weeks typical. Build window: 30 days. Total: ~9 weeks from first call."
    leadMagnet={{
      title: 'Fast-Track Host · Sunshine Coast Field Guide',
      subtitle: 'The 30-day Hamptons-coastal Resort Yard, event-anchored.',
      cta: 'Send me the Field Guide',
    }}
    accent="#b8743d"
  />
)

export const PoolSCPoolCompletionPage = () => (
  <PoolJtbdPage
    tag="Pool Completion · Sunshine Coast"
    urgency="Planned · 8–12 weeks"
    trigger="Pool installed by another builder · Hamptons-coastal surround unfinished"
    headline="The pool went in. The Hamptons-coastal yard didn't."
    subhead="A beautiful Noosa pool surrounded by builder's rubble. We finish what the pool builder didn't — whitewashed decking, woven outdoor seating, pandanus + frangipani planting, sunset alfresco. Hamptons-coastal-spec throughout."
    anxiety={[
      'The pool builder said the surround was "out of scope". Now what?',
      'I want a Hamptons-coastal Resort Yard, not just a pool with concrete around it.',
      'Will my Noosa neighbours\' overlooking laneway dispute affect the build?',
      'I don\'t want to wait until autumn to enjoy the pool.',
      'How do I avoid warranty disputes between pool builder and yard builder?',
    ]}
    whatYouNeed={[
      'A clean handover from your pool builder · no warranty crossover disputes',
      'A scoped fixed-price quote for everything outside the pool shell',
      'Whitewashed hardwood coping · not budget concrete · sunrise-light tested',
      'Pandanus + frangipani planting integrated into the design from Day 1',
      'A 30-day build window so you can use the pool this season',
    ]}
    whatWeDeliver={[
      { title: 'Pool-builder coordination', body: 'We liaise with your pool builder on warranty boundaries · clean handover, no overlap.' },
      { title: 'Whitewashed coping', body: 'Spotted gum or silvertop ash · Sikkens whitewash · cool underfoot in Noosa summer.' },
      { title: 'Coastal-luxe decking', body: 'Whitewashed hardwood · class 1 durability · 25-year structural life · refinish 5-7 yrs.' },
      { title: 'Alfresco integration', body: 'Outdoor kitchen, glass balustrade, sunset-lit ceiling · Hamptons-coastal aesthetic.' },
      { title: 'Council-compliant planting', body: 'Pandanus, frangipani, lomandra · fire-retardant, salt-tolerant, vegetation-overlay-compliant.' },
      { title: '30-Day build window', body: 'Coast-rated build, coast-priced timeline · 30 days contract-to-handover. Written into contract.' },
    ]}
    timeline="From call to scope agreed: 5 business days. Pool-builder warranty handover: 1 week. Build window: 30 days. Total: ~6 weeks from first call."
    leadMagnet={{
      title: 'Pool Completion · Sunshine Coast Field Guide',
      subtitle: 'The 30-day finish for the pool the builder left half-done.',
      cta: 'Send me the Field Guide',
    }}
    accent="#1b3a5c"
  />
)

export const PoolSCDeckReplacementPage = () => (
  <PoolJtbdPage
    tag="Deck Replacement · Sunshine Coast"
    urgency="Planned · 4–6 weeks"
    trigger="Existing pool decking failed · splinters, lift, mould, fade"
    headline="Twelve Noosa summers. The beach-house deck has had it."
    subhead="Salt air, sand, sun. Pine fails in 8 years on the Coast. We strip and rebuild to current Hamptons-coastal spec — without touching the pool. Whitewashed spotted gum or UV-stable coastal composite. 4-week turnaround."
    anxiety={[
      'The deck is splintering. The grandkids can\'t use it.',
      'Composite from 2013 has faded grey. Can the new stuff hold colour?',
      'The boards are lifting. Is the sub-frame rotten or just the boards?',
      'How do you replace the deck without damaging the mineral pool finish?',
      'Noosa Council vegetation overlay covers half the yard. Is that an issue?',
    ]}
    whatYouNeed={[
      'Honest read on whether sub-frame is salvageable or full rebuild needed',
      'Whitewashed hardwood OR UV-stable Class A composite · holds Hamptons aesthetic 15+ yrs',
      '316 marine-grade stainless fixings · not 304 budget · for Noosa salt-air exposure',
      'Pool shell protection during demolition · no mineral-finish damage',
      'A 4-week turnaround · you want the deck back by next weekend, not next season',
    ]}
    whatWeDeliver={[
      { title: 'Sub-frame audit', body: 'Day-1 inspection · honest read on sub-frame condition · scope confirms full or partial rebuild.' },
      { title: 'Whitewashed hardwood', body: 'Spotted gum or silvertop ash · Sikkens whitewash finish · refinish 5-7 yrs · Hamptons aesthetic.' },
      { title: 'OR UV-stable composite', body: 'Class A composite only · holds Hamptons-coastal colour 15+ yrs · fade-resistant warranty.' },
      { title: '316 marine-grade fixings', body: 'All stainless · not 304 · Noosa salt-aerosol-rated.' },
      { title: 'Pool-shell protection', body: 'Temporary edge protection during demo · mineral pool stays unmarked.' },
      { title: '4-week turnaround', body: 'Demo week 1 · sub-frame correction week 2 · deck install weeks 3-4 · handover day 28.' },
    ]}
    timeline="From call to scope: 3 business days. From scope to start: 5 days. Build window: 28 days. Total: ~5 weeks."
    leadMagnet={{
      title: 'Deck Replacement · Sunshine Coast Field Guide',
      subtitle: 'Whitewashed hardwood vs UV-stable composite · which is right for a Noosa beach-house?',
      cta: 'Send me the Field Guide',
    }}
    accent="#5b7a3a"
  />
)

export const PoolSCPreSaleInvestorPage = () => (
  <PoolJtbdPage
    tag="Pre-Sale Investor · Sunshine Coast"
    urgency="Acute · 8 weeks to listing"
    trigger="Listing the property · agent recommends pre-sale Resort Yard uplift"
    headline="In Noosa, the yard is the photo."
    subhead="Drone photography sells Sunshine Coast lifestyle. A Hamptons-coastal Resort Yard transforms the headline image — and the achievable price. M12 example: Sunshine Beach beachfront · pre-Resort-Yard achieved $4.2M · post-Resort-Yard achieved $4.65M · spend $182k · uplift $450k · ROI 2.47×."
    anxiety={[
      'My agent says the Resort Yard adds $400k to my price. Is that real?',
      'I list in 8 weeks. Can you deliver before Tom Offermann\'s photographer arrives?',
      'I don\'t want to over-capitalise on a flip.',
      'How do I prove to a buyer\'s solicitor the build is properly warranted?',
      'The Noosa vegetation overlay limits planting. Will the yard still photograph well?',
    ]}
    whatYouNeed={[
      'M12 ROI evidence specific to your suburb · Noosa, Sunshine Beach, Castaways, Buderim',
      'An 8-week date-locked program · backwards-scheduled from listing-go-live',
      'A 2-year transferable build warranty · powerful selling point at settlement',
      'YBMT-recommended drone photographer + stager · seamless agent handover',
      'A Resort Yard certificate for the marketing pack · buyer\'s solicitor accepts it',
    ]}
    whatWeDeliver={[
      { title: 'Suburb-specific ROI', body: 'M12 comparables for Noosa Heads, Sunshine Beach, Castaways, Buderim · pre-reno vs post-reno.' },
      { title: 'Agent-coordinated program', body: 'Joint walkthrough with you + agent (Tom Offermann, Adam Watts, Reed & Co) · 8-week build.' },
      { title: 'Hamptons-coastal finish', body: 'Whitewashed hardwood, mineral pool, woven seating, pandanus + frangipani · holds the aesthetic in drone photography.' },
      { title: 'Drone photographer hand-off', body: 'YBMT-recommended Sunshine Coast drone photographer · listed within 5 business days of handover.' },
      { title: 'Marketing-pack certificate', body: '"YBMT Resort Yard · 2-year warranty transferable at settlement" certificate for your sales pack.' },
      { title: 'Buyer\'s solicitor pack', body: 'Full scope, photographic record, material schedule, QBCC HWI certificate · transferred at settlement.' },
    ]}
    timeline="From call to ROI projection: 3 business days. From agreed scope to listing-go-live: 8 weeks. From listing to settlement: 30-60 days typical."
    leadMagnet={{
      title: 'Pre-Sale Investor · Sunshine Coast ROI Calculator',
      subtitle: 'Suburb-specific Resort Yard uplift · Noosa, Sunshine Beach, Buderim, hinterland.',
      cta: 'Send me the ROI Calculator',
    }}
    accent="#a04030"
  />
)
