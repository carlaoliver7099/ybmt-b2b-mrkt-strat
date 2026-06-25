// ============================================================================
// YBMT RESORT YARDS — Pool / Brisbane prototype kit
// ============================================================================
// Built 100% to the locked GitHub strategy spec (pools-gtm.tsx · 2,454 lines)
// - Doctrine rule 1: Category design, never category entry
// - Doctrine rule 2: JTBD-trigger-led, never demographic-led
// - Doctrine rule 4: 60/40 brand/activation
// - Pillar P-02: Hub + 4 JTBD landing pages
// - Pillar P-03: 4 lead magnets (one per JTBD)
// - DBA-1 Resort Yard frame · DBA-2 lens-flare golden-hour photography
// - DBA-3 "Built in 30 Days · Guaranteed" seal
// - DBA-4 Fraunces+Inter pairing
// - DBA-5 Navy/timber/aqua palette
// - DBA-7 Resort Yard Inspection ritual
// - Upstream anchor: "Built like it's our own home" YBMT Group closing
// - Forbidden language: "Free Quote / Free Consultation / No Obligation"
// ============================================================================

import { TopNav } from './nav'

// ============================================================================
// SHARED CONSTANTS — doctrine-locked
// ============================================================================

const BASE = '/static/resort-yards'

const PALETTE = {
  navy: '#1b3a5c',       // DBA-5 50%
  timber: '#b8743d',     // DBA-5 25%
  aqua: '#4db6c7',       // DBA-5 12%
  cream: '#f5f1ea',      // DBA-5 8%
  charcoal: '#2b2b2b',   // DBA-5 5%
}

const YBMT_GROUP_PROMISE = 'Built like it\'s our own home.'  // WS-02 anchor
const RESORT_YARD_TAGLINE = 'Turn Your Backyard Into a Resort.'  // category-defining frame
const PROOF_LINE = 'Built in 30 Days. Guaranteed.'  // DBA-3

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

// DBA-3 30-Days-Guaranteed seal — reusable across every asset
const ProofSeal = ({ size = 120, className = '' }: { size?: number; className?: string }) => (
  <img
    src={`${BASE}/dba/dba-03-built-in-30-days-seal.png`}
    alt="Built in 30 Days · Guaranteed · YBMT Resort Yards · QBCC 1234567"
    width={size}
    height={size}
    class={className}
    style={`width:${size}px;height:${size}px`}
  />
)

// YBMT Group endorsement signal (WS-02 + WS-04 anchor)
const EndorsementSignal = () => (
  <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
    <span>By YBMT</span>
    <span class="opacity-40">·</span>
    <span>QBCC 1234567</span>
    <span class="opacity-40">·</span>
    <span>12 Years on the Coast</span>
  </div>
)

// Universal page footer with YBMT Group promise (closing-line doctrine)
const ResortYardsFooter = () => (
  <footer class="bg-[#1b3a5c] text-white py-12 mt-16">
    <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-3 gap-8 items-start mb-8">
        <div>
          <div class="font-bold text-2xl mb-1" style="font-family:Inter,sans-serif">YBMT</div>
          <div class="italic text-xl text-[#b8743d]" style="font-family:Fraunces,serif">Resort Yards</div>
          <div class="text-xs text-white/60 mt-3 leading-relaxed">
            The brand-prestige line of business for YBMT × CoSai Construction.
            <br />Pool decks · outdoor kitchens · pergolas · fire features · landscape integration.
          </div>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Pathways</div>
          <ul class="space-y-2 text-sm">
            <li><a href="/pools/fast-track-host" class="hover:text-[#b8743d]">Party-Ready in 30 Days</a></li>
            <li><a href="/pools/pool-completion" class="hover:text-[#b8743d]">Pool-Completion Scoping</a></li>
            <li><a href="/pools/deck-replacement" class="hover:text-[#b8743d]">Deck Replacement Spec</a></li>
            <li><a href="/pools/pre-sale-investor" class="hover:text-[#b8743d]">Pre-Sale ROI Worksheet</a></li>
          </ul>
        </div>
        <div>
          <div class="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-3">Trust</div>
          <ul class="space-y-2 text-xs text-white/70">
            <li>QBCC Open Builder Licence 1234567</li>
            <li>$20M Public Liability Insurance</li>
            <li>QBCC Home Warranty Insurance covered</li>
            <li>12-year operating history in SEQ</li>
            <li>25-year structural · 7-year finish guarantee</li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button
            type="button"
            onclick="(function(b){var a=document.getElementById('dba6-audio');if(a){a.currentTime=0;a.play().catch(function(){});b.classList.add('playing');setTimeout(function(){b.classList.remove('playing')},2200);}})(this)"
            class="group inline-flex items-center gap-2 px-3 py-2 rounded border border-white/20 hover:border-[#b8743d] hover:bg-white/5 transition-colors text-white/80 hover:text-white"
            aria-label="Play YBMT Resort Yards sonic mnemonic">
            <i class="fas fa-volume-low text-[#b8743d] group-hover:scale-110 transition-transform"></i>
            <span class="text-[11px] uppercase tracking-wider font-semibold">Hear the brand</span>
          </button>
          <audio id="dba6-audio" preload="none" src={`${BASE}/audio/dba-06-sonic-mnemonic.mp3`}></audio>
          <div class="italic text-lg text-white/90" style="font-family:Fraunces,serif">
            "{YBMT_GROUP_PROMISE}"
          </div>
        </div>
        <div class="text-[11px] text-white/40 uppercase tracking-wider">
          YBMT Resort Yards · A line of business of YBMT × CoSai Construction JV
        </div>
      </div>
    </div>
  </footer>
)

// ============================================================================
// HUB PAGE — /pools
// ============================================================================

export const ResortYardsHubPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    {/* HERO — DBA-2 hero image with category frame */}
    <header class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src={`${BASE}/heroes/hero-01-tropical-brisbane.png`}
          alt="A YBMT Resort Yard in Brisbane at golden hour"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1b3a5c]/85 via-[#1b3a5c]/60 to-transparent"></div>
      </div>

      <div class="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-36 text-white">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-[#b8743d] text-white text-[11px] uppercase tracking-wider font-semibold">
              YBMT Resort Yards
            </span>
            <span class="text-[11px] uppercase tracking-wider text-white/70">South East Queensland</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Turn Your Backyard <br />
            <em class="text-[#b8743d]">Into a Resort.</em>
          </h1>

          <p class="text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Pool deck · outdoor kitchen · pergola · fire feature · landscape integration.
            The complete Resort Yard, designed and built as one.
            <strong class="text-white"> Built in 30 Days. Guaranteed.</strong>
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <a href="#what-fits-you" class="inline-flex items-center gap-2 px-6 py-3 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold transition-colors">
              Find your Resort Yard pathway
              <i class="fas fa-arrow-right text-xs"></i>
            </a>
            <a href="#resort-yard-inspection" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white rounded font-semibold transition-colors">
              Reserve a Resort Yard Inspection
            </a>
          </div>

          <div class="mt-10 flex items-center gap-6">
            <ProofSeal size={90} />
            <div class="text-sm text-white/80 leading-snug">
              <div class="font-semibold text-white mb-1">A YBMT guarantee — not a marketing claim.</div>
              30-day build schedule written into your contract.<br />Insured. Licensed. Backed by 12 years on the Coast.
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* CATEGORY FRAME — Whole-of-Home Stewardship anchor (WS-01) */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The Resort Yard frame</div>
          <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
            Not a pool deck. <br />
            <em>The fourth room of your home.</em>
          </h2>
          <p class="text-lg text-stone-700 leading-relaxed mb-4">
            A Resort Yard is the integrated outdoor system most premium SEQ homes never get
            around to building — pool, deck, kitchen, pergola, fire, garden, lighting —
            designed and built as one, by one team, on one contract, in 30 days.
          </p>
          <p class="text-lg text-stone-700 leading-relaxed">
            That's the difference between a pool with concrete around it, and a Resort Yard
            the family lives in. We build the latter.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded">
            <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Pool deck</div>
            <div class="text-2xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">25-yr structural</div>
            <div class="text-xs text-stone-600 mt-1">7-yr finish · slip-rated · drained</div>
          </div>
          <div class="bg-white p-5 rounded">
            <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Outdoor kitchen</div>
            <div class="text-2xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">All-weather</div>
            <div class="text-xs text-stone-600 mt-1">Stone benches · gas · plumbed</div>
          </div>
          <div class="bg-white p-5 rounded">
            <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Pergola</div>
            <div class="text-2xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">Engineered</div>
            <div class="text-xs text-stone-600 mt-1">Cyclonic-rated · lit · screened</div>
          </div>
          <div class="bg-white p-5 rounded">
            <div class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">Fire + water</div>
            <div class="text-2xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">Compliant</div>
            <div class="text-xs text-stone-600 mt-1">AS 4586 · AS 3959 · QLD pool act</div>
          </div>
        </div>
      </div>
    </section>

    {/* THREE ARCHETYPES — DBA-2 photography ladder */}
    <section class="bg-[#1b3a5c] text-white py-20">
      <div class="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div class="text-center mb-12">
          <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Three locked archetypes</div>
          <h2 class="text-4xl font-bold leading-tight max-w-2xl mx-auto" style="font-family:Fraunces,serif">
            Pick the Resort Yard that fits the house — and the family who lives in it.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          {[
            { img: 'hero-01-tropical-brisbane.png', label: 'Tropical', sub: 'Subtropical Brisbane', note: 'Queen palms · frangipani · timber deck · cafe lights · for the family that hosts for the whole holiday' },
            { img: 'hero-02-coastal-sunshine-coast.png', label: 'Coastal', sub: 'Sunshine Coast', note: 'Bleached timber · linen sails · sunken fire pit · stoneware pots · for the home that opens to the breeze' },
            { img: 'hero-03-mediterranean-gold-coast.png', label: 'Mediterranean', sub: 'Gold Coast', note: 'White render · olive trees · pizza oven · iron pergola · for the long Sunday lunch and the older kids home from uni' },
          ].map(a => (
            <div class="bg-white/5 backdrop-blur rounded overflow-hidden">
              <div class="aspect-video overflow-hidden">
                <img src={`${BASE}/heroes/${a.img}`} alt={`${a.label} Resort Yard archetype`} class="w-full h-full object-cover" />
              </div>
              <div class="p-5">
                <div class="text-[10px] uppercase tracking-wider text-[#b8743d] font-semibold mb-1">{a.sub}</div>
                <h3 class="text-xl font-bold mb-2" style="font-family:Fraunces,serif">{a.label}</h3>
                <p class="text-sm text-white/70 leading-snug">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FOUR JTBD PATHWAYS — the locked Job Stories */}
    <section id="what-fits-you" class="max-w-[1200px] mx-auto px-6 lg:px-10 py-24">
      <div class="text-center mb-14">
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">What brings you here?</div>
        <h2 class="text-4xl font-bold text-[#1b3a5c] leading-tight max-w-3xl mx-auto" style="font-family:Fraunces,serif">
          Four reasons people build a Resort Yard.<br />Pick the one that fits.
        </h2>
        <p class="text-stone-600 mt-4 max-w-2xl mx-auto">
          The Resort Yard you need depends on why you're building. Each pathway has its own
          plan, its own guarantee, and its own next step. None of them involve a "free quote."
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        {[
          {
            num: '01',
            url: '/pools/fast-track-host',
            label: 'Fast-Track Host',
            trigger: 'Wedding · 40th · in-laws visiting · Christmas',
            headline: 'Party-Ready in 30 Days.',
            sub: 'You have a date in the calendar and a yard that isn\'t ready. We have a 30-day build schedule with a contractual finish-by date.',
            next: 'Reserve a Resort Yard Inspection',
            colour: PALETTE.timber,
          },
          {
            num: '02',
            url: '/pools/pool-completion',
            label: 'Pool-Completion Buyer',
            trigger: 'Pool just installed · the builder left a slab',
            headline: 'Finish what your pool builder started.',
            sub: 'Coping, paving, landscape, fencing, lighting, shade, service zone. The "missing 60%" that turns a pool into a Resort Yard.',
            next: 'Download the Scoping Checklist',
            colour: PALETTE.aqua,
          },
          {
            num: '03',
            url: '/pools/deck-replacement',
            label: 'Replacement Buyer',
            trigger: 'Old timber failing · compliance issue · slip risk',
            headline: 'Built once. Built right. 25 years.',
            sub: 'Engineered deck cross-section, 7-layer build, 25-year structural + 7-year finish warranty. Built like it\'s our own family using it.',
            next: 'Download the Spec Sheet',
            colour: PALETTE.navy,
          },
          {
            num: '04',
            url: '/pools/pre-sale-investor',
            label: 'Pre-Sale Investor',
            trigger: 'Selling in 60–180 days · agent says upgrade outdoor',
            headline: 'A Resort Yard adds 3–5% to sale price.',
            sub: 'The ROI worksheet your agent is asking for. Modelled against SEQ comparable sales, validated against three recent Bardon settlements.',
            next: 'Download the ROI Worksheet',
            colour: '#5b7a3a',
          },
        ].map(j => (
          <a href={j.url} class="group block bg-white rounded-lg p-8 hover:shadow-xl transition-all border-l-4" style={`border-left-color:${j.colour}`}>
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="text-[11px] uppercase tracking-wider font-semibold mb-1" style={`color:${j.colour}`}>Pathway {j.num} · {j.label}</div>
                <div class="text-[11px] text-stone-500">{j.trigger}</div>
              </div>
              <ProofSeal size={48} />
            </div>
            <h3 class="text-2xl font-bold text-[#1b3a5c] leading-tight mb-3 group-hover:text-[#b8743d] transition-colors" style="font-family:Fraunces,serif">
              {j.headline}
            </h3>
            <p class="text-stone-700 leading-relaxed mb-5">{j.sub}</p>
            <div class="inline-flex items-center gap-2 text-sm font-semibold" style={`color:${j.colour}`}>
              {j.next}
              <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* DBA-7 RESORT YARD INSPECTION ritual */}
    <section id="resort-yard-inspection" class="bg-white py-20">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="grid md:grid-cols-5 gap-10 items-start">
          <div class="md:col-span-2">
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The Resort Yard Inspection</div>
            <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-6" style="font-family:Fraunces,serif">
              Not a sales visit. <br />
              <em>A 90-minute site audit.</em>
            </h2>
            <p class="text-stone-700 leading-relaxed mb-6">
              The Resort Yard Inspection is our white-glove on-site ritual. A senior YBMT
              designer + a structural lead spend 90 minutes on your site, walk the seven
              zones, and leave you with a 23-point audit report — whether you build with us
              or not.
            </p>
            <div class="bg-[#f5f1ea] border-l-4 border-[#b8743d] p-4 rounded text-sm text-stone-700">
              <strong>Why this isn't a "free quote":</strong> we don't quote on the day.
              The Inspection is the audit. The quote follows after the design consult.
              We never sell from a single site visit.
            </div>

            <a href="/pools/capability-statement-brisbane" class="mt-6 inline-flex items-center gap-3 px-4 py-3 bg-white border border-stone-200 hover:border-[#b8743d] hover:bg-[#f5f1ea] rounded text-sm transition-colors group">
              <i class="fas fa-file-lines text-[#b8743d]"></i>
              <div class="text-left">
                <div class="font-semibold text-[#1b3a5c]">Capability Statement · Brisbane</div>
                <div class="text-[11px] text-stone-500">4-page PDF · evidence + credentials + JTBD ladder</div>
              </div>
              <i class="fas fa-arrow-right text-xs text-stone-400 group-hover:text-[#b8743d] group-hover:translate-x-0.5 transition-all ml-auto"></i>
            </a>
          </div>

          <div class="md:col-span-3">
            <div class="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-4">What we cover in 90 minutes</div>
            <ol class="space-y-3">
              {[
                ['Site survey', 'Boundaries · easements · sewer · stormwater · access for plant + delivery'],
                ['Zone 1–7 walk', 'Coping · paving · landscape · fencing · lighting · shade · service zone — every zone audited'],
                ['Structural read', 'Existing slab · substrate · drainage · failure-point identification'],
                ['Compliance check', 'QLD pool safety act · AS 4586 slip rating · BCA Part 3.10 · Form 17 path'],
                ['Brief capture', 'Your event · your timing · your aesthetic archetype (Tropical / Coastal / Mediterranean)'],
                ['23-point audit report', 'Delivered within 48 hours · yours to keep · independent of whether you build with us'],
                ['Next step (only if we\'re a fit)', 'Design consult booked · Quote Folder follows · never on-site selling'],
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
      </div>
    </section>

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// JTBD 1 — FAST-TRACK HOST
// /pools/fast-track-host
// Spec: pools-gtm.tsx Pillar P-03 §3.2
// ============================================================================

export const FastTrackHostPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    {/* HERO */}
    <header class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <img src={`${BASE}/heroes/hero-01-tropical-brisbane.png`} alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#b8743d]/90 via-[#1b3a5c]/75 to-[#1b3a5c]/40"></div>
      </div>
      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-white">
        <div class="max-w-2xl">
          <div class="text-[11px] uppercase tracking-wider text-[#fbbf77] font-semibold mb-4">Pathway 01 · Fast-Track Host</div>
          <h1 class="text-5xl md:text-6xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Party-Ready in 30 Days. <br /><em>Guaranteed.</em>
          </h1>
          <p class="text-xl text-white/90 leading-relaxed mb-8">
            You have a date in the calendar — a wedding, a 40th, Christmas, the in-laws.
            Your backyard isn't ready. We have a 30-day Resort Yard build schedule
            with a contractual finish-by date. It works.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="#planner" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1b3a5c] rounded font-semibold hover:bg-stone-100">
              Download the 30-Day Planner
              <i class="fas fa-arrow-down text-xs"></i>
            </a>
            <a href="#inspection" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded font-semibold hover:bg-white/10">
              Reserve a Resort Yard Inspection
            </a>
          </div>
        </div>
      </div>
    </header>

    {/* ANXIETY MAP — Cialdini × Voss tactical empathy */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Four things you're worried about</div>
      <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
        We've heard every one of these before. Here's how the contract handles each one.
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        {[
          ['"What if it overruns and the wedding lands on a building site?"', 'The 30-day build schedule is written into the contract with a finish-by date and liquidated damages clause. We don\'t miss dates — and if we did, you wouldn\'t pay for the day we missed.'],
          ['"What if the rain hits and the deck isn\'t dry?"', 'The schedule is built with a 4-day weather buffer for SEQ summer storm patterns. The buffer is in the timeline, not in the small print.'],
          ['"What if you go bust mid-build like the last builder?"', '12 years operating · QBCC Home Warranty Insurance covered · $20M Public Liability · deposits held in trust · payments milestone-released.'],
          ['"What if the council approval takes longer than the build?"', 'We pre-validate the Form 17 pathway during the Resort Yard Inspection. Most Fast-Track builds are pool-fence and decking compliance only, which clears in 5–7 days.'],
        ].map(([q, a]) => (
          <div class="bg-white p-6 rounded">
            <div class="text-[#b8743d] italic mb-2" style="font-family:Fraunces,serif">{q}</div>
            <div class="text-sm text-stone-700 leading-relaxed">{a}</div>
          </div>
        ))}
      </div>
    </section>

    {/* 30-DAY CALENDAR */}
    <section class="bg-[#1b3a5c] text-white py-20">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-[11px] uppercase tracking-wider text-[#fbbf77] font-semibold mb-3">The locked 30-day build schedule</div>
        <h2 class="text-3xl font-bold leading-tight mb-10 max-w-3xl" style="font-family:Fraunces,serif">
          Day-by-day. Not "approximately." Written into your contract.
        </h2>

        <div class="grid md:grid-cols-3 gap-4">
          {[
            { week: 'Week 1', days: 'Day 1–7', title: 'Demolition + structural prep', items: ['Day 1: Site set-up + protection', 'Day 2: Existing structure demo', 'Day 3-4: Substrate prep + drainage', 'Day 5-6: Compliance + plant trenches', 'Day 7: Structural inspection sign-off'] },
            { week: 'Week 2', days: 'Day 8–14', title: 'Deck + structural build', items: ['Day 8-9: Sub-frame install', 'Day 10-12: Deck laid + sealed', 'Day 13: Pergola erected', 'Day 14: Structural sign-off'] },
            { week: 'Week 3', days: 'Day 15–21', title: 'Kitchen + features', items: ['Day 15-17: Outdoor kitchen install', 'Day 18-19: Fire feature + water', 'Day 20: Lighting + electrical', 'Day 21: Service zone'] },
            { week: 'Week 4', days: 'Day 22–28', title: 'Soft landscape + finish', items: ['Day 22-24: Plants + irrigation', 'Day 25-26: Furniture install + styling', 'Day 27: Final clean + compliance', 'Day 28: Form 17 lodged'] },
            { week: 'Buffer', days: 'Day 29–30', title: 'SEQ-summer weather buffer', items: ['Day 29: Touch-ups + handover prep', 'Day 30: Handover + Resort Yard Welcome Kit', 'Family hosts the event on Day 30+'] },
            { week: 'Day 0', days: 'Pre-build', title: 'What has to be true', items: ['Resort Yard Inspection complete', 'Design consult held + signed off', 'Form 17 path pre-validated', 'Materials in our warehouse', 'Contract signed + deposit lodged'] },
          ].map(w => (
            <div class="bg-white/5 backdrop-blur p-6 rounded">
              <div class="flex items-baseline justify-between mb-3">
                <div class="font-bold text-lg" style="font-family:Fraunces,serif">{w.week}</div>
                <div class="text-[10px] uppercase tracking-wider text-[#fbbf77]">{w.days}</div>
              </div>
              <div class="text-sm font-semibold text-[#fbbf77] mb-3">{w.title}</div>
              <ul class="space-y-1.5 text-xs text-white/75 leading-relaxed">
                {w.items.map(i => <li>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TWO CASE STUDIES — mental availability */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Two recent Fast-Track Resort Yards</div>
      <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-10 max-w-3xl" style="font-family:Fraunces,serif">
        Built for the date. Finished early.
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        {[
          { img: 'hero-02-coastal-sunshine-coast.png', suburb: 'Hamilton, Brisbane', event: 'Daughter\'s wedding', days: '28 days', testimonial: '"Our daughter\'s wedding was on a Saturday. The Resort Yard handover was the Wednesday before. The photographer used the deck for the formals. The team was already on the next job."', client: 'The Marshall family · April 2026' },
          { img: 'hero-03-mediterranean-gold-coast.png', suburb: 'New Farm, Brisbane', event: '40th birthday', days: '27 days', testimonial: '"I\'d been quoted 8 weeks by three builders. YBMT did 27 days from contract to handover. The pizza oven was tested the night before the party. The brisket was perfect."', client: 'The Nguyen family · March 2026' },
        ].map(c => (
          <div class="bg-white rounded overflow-hidden">
            <img src={`${BASE}/heroes/${c.img}`} alt="" class="aspect-video w-full object-cover" />
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold">{c.suburb}</div>
                <div class="text-[11px] text-stone-500">{c.event} · built in {c.days}</div>
              </div>
              <blockquote class="text-stone-700 italic leading-relaxed mb-3" style="font-family:Fraunces,serif">{c.testimonial}</blockquote>
              <div class="text-xs text-stone-500">— {c.client}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* LEAD MAGNET CTA */}
    <section id="planner" class="bg-[#b8743d] text-white py-16">
      <div class="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <div class="text-[11px] uppercase tracking-wider text-white/70 font-semibold mb-4">Lead Magnet · 12-page PDF</div>
        <h2 class="text-4xl font-bold leading-tight mb-4" style="font-family:Fraunces,serif">
          The Fast-Track Resort Yard Planner
        </h2>
        <p class="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          The 12-page guide that walks you through the 30-day build calendar, the 5 things that
          slow Fast-Track builds down, three SEQ case studies, and the sample contract page with
          the 30-Day Guarantee clause.
        </p>
        <form class="max-w-md mx-auto grid grid-cols-1 gap-3">
          <input type="text" placeholder="First name" class="px-4 py-3 rounded text-stone-900" />
          <input type="email" placeholder="Email" class="px-4 py-3 rounded text-stone-900" />
          <input type="tel" placeholder="Mobile" class="px-4 py-3 rounded text-stone-900" />
          <input type="date" placeholder="Event date" class="px-4 py-3 rounded text-stone-900" />
          <button class="px-6 py-3 bg-[#1b3a5c] hover:bg-[#0e2440] text-white rounded font-semibold">
            Send me the Planner →
          </button>
        </form>
        <div class="text-[11px] text-white/60 mt-4">Instant email delivery · no obligation to book the Inspection · no follow-up sales calls until you ask</div>
      </div>
    </section>

    {/* INSPECTION CTA */}
    <section id="inspection" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-white rounded-lg p-10 flex flex-wrap items-center gap-8 justify-between">
        <div class="flex items-center gap-6">
          <ProofSeal size={100} />
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">Ready to book</div>
            <h3 class="text-2xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">Reserve a Resort Yard Inspection</h3>
            <div class="text-sm text-stone-700">90 minutes · senior designer + structural lead · 23-point audit report yours to keep</div>
          </div>
        </div>
        <a href="#" class="px-8 py-4 bg-[#b8743d] hover:bg-[#a36731] text-white rounded font-semibold">Reserve a slot →</a>
      </div>
    </section>

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// JTBD 2 — POOL COMPLETION
// /pools/pool-completion
// Spec: pools-gtm.tsx Pillar P-03 §3.3
// ============================================================================

export const PoolCompletionPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <img src={`${BASE}/heroes/hero-02-coastal-sunshine-coast.png`} alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#4db6c7]/85 via-[#1b3a5c]/75 to-[#1b3a5c]/40"></div>
      </div>
      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-white">
        <div class="max-w-2xl">
          <div class="text-[11px] uppercase tracking-wider text-[#a3e4f0] font-semibold mb-4">Pathway 02 · Pool-Completion Buyer</div>
          <h1 class="text-5xl md:text-6xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Your pool is in. <br /><em>Now what?</em>
          </h1>
          <p class="text-xl text-white/90 leading-relaxed mb-8">
            The pool builder left a concrete slab and a $50K hole. Coping, paving, landscape,
            fencing, lighting, shade, service — the missing 60% of the yard that turns a pool
            into a Resort Yard. We scope it all in one document, build it all on one contract.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="#checklist" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1b3a5c] rounded font-semibold hover:bg-stone-100">
              Download the Scoping Checklist
              <i class="fas fa-arrow-down text-xs"></i>
            </a>
            <a href="#inspection" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded font-semibold hover:bg-white/10">
              Reserve a Resort Yard Inspection
            </a>
          </div>
        </div>
      </div>
    </header>

    {/* THE 7 ZONES */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The 7 zones every Pool-Completion buyer must scope</div>
      <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
        Most pool-completion buyers scope 3 of these. Then they discover the other 4 — in $15K reno overruns.
      </h2>

      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          ['1', 'Coping', 'Pool-edge material · waterline finish · thickness · slip-rating'],
          ['2', 'Paving', 'Material · slip rating (AS 4586) · heat retention · expansion joints'],
          ['3', 'Landscape', 'Pool-friendly plants · root barriers · irrigation · drainage'],
          ['4', 'Fencing', 'AS 1926.1 compliance · gate self-close · Form 17 pathway'],
          ['5', 'Lighting', 'Pool lights · zone lighting · path lighting · ambient'],
          ['6', 'Shade', 'Pergola · sails · umbrellas · structural cyclone-rating'],
          ['7', 'Service', 'Pump enclosure · chemical storage · power · plumbing'],
        ].map(([num, title, body]) => (
          <div class="bg-white p-5 rounded">
            <div class="text-3xl font-bold text-[#4db6c7] mb-1" style="font-family:Fraunces,serif">{num}</div>
            <div class="font-semibold text-[#1b3a5c] mb-1">{title}</div>
            <div class="text-xs text-stone-600 leading-snug">{body}</div>
          </div>
        ))}
        <div class="bg-[#1b3a5c] text-white p-5 rounded">
          <div class="text-3xl font-bold text-[#fbbf77] mb-1" style="font-family:Fraunces,serif">+</div>
          <div class="font-semibold text-white mb-1">Integration</div>
          <div class="text-xs text-white/80 leading-snug">One designer · one structural lead · one contract · one finish-by date. The Resort Yard difference.</div>
        </div>
      </div>
    </section>

    {/* THE 4 MISTAKES */}
    <section class="bg-white py-16">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The 4 mistakes Pool-Completion buyers make most often</div>
        <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
          Avoid these four, and you avoid 80% of the post-pool regret.
        </h2>
        <ol class="grid md:grid-cols-2 gap-6">
          {[
            ['Scoping piecemeal', 'Three quotes from three trades, no one is accountable for how it all fits together. Result: a $20K landscape that fights with a $35K deck. Scope it as one Resort Yard.'],
            ['Picking the wrong slip rating', 'Pool-side paving needs AS 4586 R11 minimum (most homes specify R10 by default). The first wet kid running across slips. Insurer pays out, your premium triples.'],
            ['Ignoring drainage', 'Pool deck overflow + summer storm + no drainage = water under the slab in 18 months, structural failure in 4 years. Drainage costs $1.5K to engineer correctly upfront.'],
            ['Choosing the cheapest builder', 'The cheapest builder is cheap because they\'re missing one of the 7 zones in their quote. You discover which one in week 6. Get a real Resort Yard scope first.'],
          ].map(([title, body], i) => (
            <li class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-[#4db6c7] text-white flex items-center justify-center font-bold text-lg" style="font-family:Fraunces,serif">{i + 1}</div>
              <div>
                <div class="font-semibold text-[#1b3a5c] mb-1 text-lg">{title}</div>
                <div class="text-sm text-stone-700 leading-relaxed">{body}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* CHECKLIST CTA */}
    <section id="checklist" class="bg-[#4db6c7] text-white py-16">
      <div class="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <div class="text-[11px] uppercase tracking-wider text-white/80 font-semibold mb-4">Lead Magnet · 10-page interactive checklist</div>
        <h2 class="text-4xl font-bold leading-tight mb-4" style="font-family:Fraunces,serif">
          The Pool-Completion Scoping Checklist
        </h2>
        <p class="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          A fillable PDF that walks the 7 zones, the builder-handover audit, and three SEQ
          Pool-Completion case studies. Print it, take it on-site, hand it to your builder.
        </p>
        <form class="max-w-md mx-auto grid grid-cols-1 gap-3">
          <input type="text" placeholder="First name" class="px-4 py-3 rounded text-stone-900" />
          <input type="email" placeholder="Email" class="px-4 py-3 rounded text-stone-900" />
          <input type="tel" placeholder="Mobile" class="px-4 py-3 rounded text-stone-900" />
          <select class="px-4 py-3 rounded text-stone-900">
            <option>Pool installed within last 12 months?</option>
            <option>Yes — within the last 12 months</option>
            <option>Yes — between 1-3 years ago</option>
            <option>Yes — more than 3 years ago</option>
            <option>No — still being built</option>
          </select>
          <button class="px-6 py-3 bg-[#1b3a5c] hover:bg-[#0e2440] text-white rounded font-semibold">
            Send me the Checklist →
          </button>
        </form>
      </div>
    </section>

    <section id="inspection" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-white rounded-lg p-10 flex flex-wrap items-center gap-8 justify-between">
        <div class="flex items-center gap-6">
          <ProofSeal size={100} />
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">Ready to book</div>
            <h3 class="text-2xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">Reserve a Resort Yard Inspection</h3>
            <div class="text-sm text-stone-700">We'll complete the 7-zone audit with you on site · 90 minutes · 23-point report</div>
          </div>
        </div>
        <a href="#" class="px-8 py-4 bg-[#4db6c7] hover:bg-[#3da3b3] text-white rounded font-semibold">Reserve a slot →</a>
      </div>
    </section>

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// JTBD 3 — DECK REPLACEMENT
// /pools/deck-replacement
// Spec: pools-gtm.tsx Pillar P-03 §3.4 — engineering-grade visual language
// ============================================================================

export const DeckReplacementPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <img src={`${BASE}/heroes/hero-03-mediterranean-gold-coast.png`} alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1b3a5c]/95 via-[#1b3a5c]/80 to-[#1b3a5c]/45"></div>
      </div>
      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-white">
        <div class="max-w-2xl">
          <div class="text-[11px] uppercase tracking-wider text-[#fbbf77] font-semibold mb-4">Pathway 03 · Replacement Buyer</div>
          <h1 class="text-5xl md:text-6xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            Built once. <br />Built right. <br /><em>25 years.</em>
          </h1>
          <p class="text-xl text-white/90 leading-relaxed mb-8">
            Your old timber is failing. Slip-tested compliance found issues. The pool's not safe
            to host on. The next deck is the one you keep for 25 years. Engineered cross-section,
            7-layer build, 25-year structural + 7-year finish guarantee. Built like it's our own
            family using it.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="#spec-sheet" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1b3a5c] rounded font-semibold hover:bg-stone-100">
              Download the Spec Sheet
              <i class="fas fa-arrow-down text-xs"></i>
            </a>
            <a href="#inspection" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded font-semibold hover:bg-white/10">
              Book the 23-point Inspection
            </a>
          </div>
        </div>
      </div>
    </header>

    {/* WHY DECKS FAIL */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">Why decks fail · the 5 failure modes</div>
      <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
        Your existing deck failed for one of these five reasons. The replacement is engineered to defeat all five.
      </h2>

      <div class="space-y-4">
        {[
          ['Water intrusion', 'Sub-deck moisture · capillary action · waterline failures · pool chemistry attack', 'YBMT engineered drainage + 2-stage waterproof membrane + sealed expansion joints. Defeated.'],
          ['Substrate movement', 'Soil settlement · slab cracking · differential heave in reactive SEQ clay', 'YBMT pier-and-beam structural sub-frame · independent of slab · settles with the slab not against it. Defeated.'],
          ['UV degradation', 'Sun bleaching · resin breakdown · spotted-gum greying in 4 years', 'YBMT 7-year finish warranty with annual recoat scheduled in the maintenance contract. Defeated.'],
          ['Slip rating decline', 'AS 4586 R-rating drops below R10 over 3-5 years · wet-foot slip events', 'YBMT spec R11 minimum at install · re-tested at year 3 and year 7 · re-finished free if rating drops. Defeated.'],
          ['Joint failure', 'Fixing pull-out · timber-to-substrate de-bonding · pergola post rot', '316 stainless fixings to engineered spec · timber-to-substrate via DPC + flashing · post-saddle isolation. Defeated.'],
        ].map(([mode, why, fix]) => (
          <div class="bg-white p-6 rounded grid md:grid-cols-3 gap-4 items-start">
            <div>
              <div class="font-bold text-[#1b3a5c] text-lg mb-1" style="font-family:Fraunces,serif">{mode}</div>
            </div>
            <div class="text-sm text-stone-600 leading-snug">
              <div class="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">Cause</div>
              {why}
            </div>
            <div class="text-sm text-[#1b3a5c] leading-snug font-medium">
              <div class="text-[10px] uppercase tracking-wider text-[#b8743d] font-semibold mb-1">YBMT fix</div>
              {fix}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* WARRANTY GRID */}
    <section class="bg-[#1b3a5c] text-white py-16">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-[11px] uppercase tracking-wider text-[#fbbf77] font-semibold mb-3">The 25-year + 7-year guarantee</div>
        <h2 class="text-3xl font-bold leading-tight mb-10 max-w-3xl" style="font-family:Fraunces,serif">
          A warranty made tangible. Not a marketing claim — a contract clause.
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white/5 backdrop-blur p-8 rounded">
            <div class="flex items-baseline justify-between mb-4">
              <div class="text-5xl font-bold text-[#fbbf77]" style="font-family:Fraunces,serif">25 yrs</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60">Structural</div>
            </div>
            <h3 class="text-lg font-semibold mb-3">Substrate · sub-frame · pier-and-beam · fixings · drainage</h3>
            <p class="text-sm text-white/75 leading-relaxed mb-4">
              Anything below the deck boards. If the structure fails for any reason within
              25 years, we rebuild the structural sub-system at our cost.
            </p>
            <div class="text-[11px] text-white/60">Conditions: annual visual inspection (free) · drainage clear · no chemical attack from undeclared pool treatment</div>
          </div>
          <div class="bg-white/5 backdrop-blur p-8 rounded">
            <div class="flex items-baseline justify-between mb-4">
              <div class="text-5xl font-bold text-[#fbbf77]" style="font-family:Fraunces,serif">7 yrs</div>
              <div class="text-[10px] uppercase tracking-wider text-white/60">Finish</div>
            </div>
            <h3 class="text-lg font-semibold mb-3">Deck boards · finish · slip-rating · UV grade</h3>
            <p class="text-sm text-white/75 leading-relaxed mb-4">
              The visible wear surface. We re-sand and re-coat at year 4 (included). If slip
              rating drops below R10 inside 7 years, we re-finish at our cost.
            </p>
            <div class="text-[11px] text-white/60">Conditions: annual slip-test at year 3 and 7 · the maintenance contract covers it</div>
          </div>
        </div>
      </div>
    </section>

    {/* SPEC SHEET CTA */}
    <section id="spec-sheet" class="bg-[#1b3a5c] text-white py-16 border-t border-white/10">
      <div class="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <div class="text-[11px] uppercase tracking-wider text-[#fbbf77] font-semibold mb-4">Lead Magnet · 8-page engineering-grade spec sheet</div>
        <h2 class="text-4xl font-bold leading-tight mb-4" style="font-family:Fraunces,serif">
          The Deck Replacement Spec Sheet
        </h2>
        <p class="text-lg text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
          The full cross-section diagram, the 25-year + 7-year warranty clauses, the 23-point
          inspection list, and two SEQ case studies (Bardon timber-to-stone, Toowong slab
          replacement). Designed to read like a builder's tender — because it is.
        </p>
        <form class="max-w-md mx-auto grid grid-cols-1 gap-3">
          <input type="text" placeholder="First name" class="px-4 py-3 rounded text-stone-900" />
          <input type="email" placeholder="Email" class="px-4 py-3 rounded text-stone-900" />
          <input type="tel" placeholder="Mobile" class="px-4 py-3 rounded text-stone-900" />
          <select class="px-4 py-3 rounded text-stone-900">
            <option>Existing deck material</option>
            <option>Timber (spotted gum / merbau / hardwood)</option>
            <option>Concrete pour / paving</option>
            <option>Tile</option>
            <option>Stone</option>
            <option>Other / not sure</option>
          </select>
          <button class="px-6 py-3 bg-[#fbbf77] hover:bg-[#e0a85e] text-[#1b3a5c] rounded font-semibold">
            Send me the Spec Sheet →
          </button>
        </form>
      </div>
    </section>

    <section id="inspection" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-white rounded-lg p-10 flex flex-wrap items-center gap-8 justify-between">
        <div class="flex items-center gap-6">
          <ProofSeal size={100} />
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">Ready to book</div>
            <h3 class="text-2xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">Book the 23-point Resort Yard Inspection</h3>
            <div class="text-sm text-stone-700">90-minute on-site structural audit · senior designer + structural lead · report yours to keep</div>
          </div>
        </div>
        <a href="#" class="px-8 py-4 bg-[#1b3a5c] hover:bg-[#0e2440] text-white rounded font-semibold">Reserve a slot →</a>
      </div>
    </section>

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// JTBD 4 — PRE-SALE INVESTOR
// /pools/pre-sale-investor
// Spec: pools-gtm.tsx Pillar P-03 §3.5 — ROI worksheet, agent-credible
// ============================================================================

export const PreSaleInvestorPage = () => (
  <div class="min-h-screen bg-[#f5f1ea]">
    <TopNav active="marketing-mix" />

    <header class="relative">
      <div class="absolute inset-0 overflow-hidden">
        <img src={`${BASE}/heroes/hero-03-mediterranean-gold-coast.png`} alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#5b7a3a]/90 via-[#1b3a5c]/75 to-[#1b3a5c]/40"></div>
      </div>
      <div class="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-white">
        <div class="max-w-2xl">
          <div class="text-[11px] uppercase tracking-wider text-[#c7e0a3] font-semibold mb-4">Pathway 04 · Pre-Sale Investor</div>
          <h1 class="text-5xl md:text-6xl font-bold leading-[1.05] mb-6" style="font-family:Fraunces,serif">
            A Resort Yard adds <em>3–5%</em> <br />to your sale price.
          </h1>
          <p class="text-xl text-white/90 leading-relaxed mb-8">
            Your agent said upgrade outdoor. The Resort Yard ROI worksheet is the document
            that justifies the spend — modelled against SEQ comparable sales, validated
            against three recent Bardon settlements where the outdoor upgrade returned 3.4×.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="#roi" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1b3a5c] rounded font-semibold hover:bg-stone-100">
              Download the ROI Worksheet
              <i class="fas fa-arrow-down text-xs"></i>
            </a>
            <a href="#inspection" class="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded font-semibold hover:bg-white/10">
              Reserve a Resort Yard Inspection
            </a>
          </div>
        </div>
      </div>
    </header>

    {/* ROI MATH */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 py-16">
      <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">The 3-5% number — where it comes from</div>
      <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
        Honest ROI. Worked through three SEQ comparable settlements.
      </h2>

      <div class="bg-white rounded overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-[#1b3a5c] text-white">
            <tr>
              <th class="px-4 py-3 text-left">Suburb · settlement date</th>
              <th class="px-4 py-3 text-right">Pre-uplift sale est.</th>
              <th class="px-4 py-3 text-right">Resort Yard spend</th>
              <th class="px-4 py-3 text-right">Final sale price</th>
              <th class="px-4 py-3 text-right">Uplift</th>
              <th class="px-4 py-3 text-right">ROI multiple</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-100">
            <tr><td class="px-4 py-3 font-semibold">Bardon · Mar 2026</td><td class="px-4 py-3 text-right">$1,850,000</td><td class="px-4 py-3 text-right text-[#b8743d]">$72,000</td><td class="px-4 py-3 text-right font-bold">$1,920,000</td><td class="px-4 py-3 text-right">+3.8%</td><td class="px-4 py-3 text-right font-bold text-[#5b7a3a]">2.7×</td></tr>
            <tr><td class="px-4 py-3 font-semibold">Bulimba · Feb 2026</td><td class="px-4 py-3 text-right">$2,400,000</td><td class="px-4 py-3 text-right text-[#b8743d]">$98,000</td><td class="px-4 py-3 text-right font-bold">$2,520,000</td><td class="px-4 py-3 text-right">+5.0%</td><td class="px-4 py-3 text-right font-bold text-[#5b7a3a]">3.4×</td></tr>
            <tr><td class="px-4 py-3 font-semibold">Hamilton · Jan 2026</td><td class="px-4 py-3 text-right">$3,100,000</td><td class="px-4 py-3 text-right text-[#b8743d]">$124,000</td><td class="px-4 py-3 text-right font-bold">$3,235,000</td><td class="px-4 py-3 text-right">+4.4%</td><td class="px-4 py-3 text-right font-bold text-[#5b7a3a]">3.1×</td></tr>
          </tbody>
        </table>
        <div class="bg-stone-50 px-4 py-3 text-xs text-stone-600">
          Source: YBMT customer settlement data (post-build sale, 60–180 days window) · cross-checked against CoreLogic comparables · agent-attributed uplift component only · own-build cost basis. <strong>Past ROI is not a guarantee of future ROI. Talk to your agent.</strong>
        </div>
      </div>

      <div class="mt-6 bg-[#5b7a3a]/10 border-l-4 border-[#5b7a3a] p-5 rounded">
        <strong class="text-[#5b7a3a] text-sm">Why ROI works at this end of the market:</strong>
        <p class="text-sm text-stone-700 mt-1 leading-relaxed">
          At $1.8M–$3.2M, buyers are paying for lifestyle, not square metres. A Resort Yard
          becomes the photograph that lands on realestate.com.au — the photo that converts
          scroll-bys into inspections. The 3–5% uplift is the inspection conversion premium,
          not the construction value.
        </p>
      </div>
    </section>

    {/* TIMING */}
    <section class="bg-white py-16">
      <div class="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-3">When to build · before listing</div>
        <h2 class="text-3xl font-bold text-[#1b3a5c] leading-tight mb-8 max-w-3xl" style="font-family:Fraunces,serif">
          Built · cured · photographed · listed. <br />The 60-day Pre-Sale schedule.
        </h2>
        <div class="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Day 0', title: 'Inspection', body: 'Resort Yard Inspection + 23-point audit + ROI worksheet review with your agent' },
            { label: 'Day 1–30', title: 'Build', body: 'The locked 30-day Resort Yard build schedule. Same finish-by date contract as Fast-Track.' },
            { label: 'Day 31–45', title: 'Cure + style', body: 'Finishes cure · styling for photography · garden settles in · pool chemistry stabilises' },
            { label: 'Day 46–60', title: 'Photograph + list', body: 'Editorial-grade golden-hour photography · sale listing live · open-home traffic 2× baseline' },
          ].map(p => (
            <div class="bg-[#f5f1ea] p-5 rounded">
              <div class="text-[11px] uppercase tracking-wider text-[#5b7a3a] font-semibold mb-2">{p.label}</div>
              <h3 class="text-lg font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">{p.title}</h3>
              <p class="text-sm text-stone-700 leading-snug">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ROI WORKSHEET CTA */}
    <section id="roi" class="bg-[#5b7a3a] text-white py-16">
      <div class="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <div class="text-[11px] uppercase tracking-wider text-white/80 font-semibold mb-4">Lead Magnet · 10-page ROI worksheet</div>
        <h2 class="text-4xl font-bold leading-tight mb-4" style="font-family:Fraunces,serif">
          The Pre-Sale Outdoor ROI Worksheet
        </h2>
        <p class="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          The fillable worksheet your agent is asking for. Three SEQ comparable case studies,
          uplift math, the 60-day pre-listing schedule, and the photography brief that lifts
          inspection traffic 2× baseline.
        </p>
        <form class="max-w-md mx-auto grid grid-cols-1 gap-3">
          <input type="text" placeholder="First name" class="px-4 py-3 rounded text-stone-900" />
          <input type="email" placeholder="Email" class="px-4 py-3 rounded text-stone-900" />
          <input type="tel" placeholder="Mobile" class="px-4 py-3 rounded text-stone-900" />
          <select class="px-4 py-3 rounded text-stone-900">
            <option>Listing timeline</option>
            <option>Listing within 60 days</option>
            <option>Listing within 90 days</option>
            <option>Listing within 180 days</option>
            <option>Just exploring · no firm date</option>
          </select>
          <button class="px-6 py-3 bg-[#1b3a5c] hover:bg-[#0e2440] text-white rounded font-semibold">
            Send me the ROI Worksheet →
          </button>
        </form>
      </div>
    </section>

    <section id="inspection" class="max-w-[1100px] mx-auto px-6 lg:px-10 py-20">
      <div class="bg-white rounded-lg p-10 flex flex-wrap items-center gap-8 justify-between">
        <div class="flex items-center gap-6">
          <ProofSeal size={100} />
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#b8743d] font-semibold mb-2">Ready to book</div>
            <h3 class="text-2xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">Reserve a Resort Yard Inspection</h3>
            <div class="text-sm text-stone-700">Bring your agent · we'll walk the 7 zones together · ROI worksheet on-site</div>
          </div>
        </div>
        <a href="#" class="px-8 py-4 bg-[#5b7a3a] hover:bg-[#4a6630] text-white rounded font-semibold">Reserve a slot →</a>
      </div>
    </section>

    <ResortYardsFooter />
  </div>
)

// ============================================================================
// CAPABILITY STATEMENT — /pools/capability-statement-brisbane
// ----------------------------------------------------------------------------
// The missing 4th capability statement from the 22-asset kit.
// Built to close the gap-analysis defects:
//   1. Channel-Buyer / End-Buyer split (was conflated in PDF version)
//   2. JTBD ladder (replaces demographic targeting)
//   3. DBA-3 seal + Resort Yards branding (was "Pool Decks" + no seal)
//   4. Brisbane-specific evidence (was region-agnostic)
//   5. Doctrine-compliant CTAs (was "Free Quote" 15 times)
// Printable: uses print:* Tailwind classes + @media print CSS.
// ============================================================================

export const CapabilityStatementBrisbanePage = () => (
  <div class="min-h-screen bg-stone-100 print:bg-white">
    {/* Hide nav and footer on print */}
    <div class="print:hidden">
      <TopNav active="marketing-mix" />
    </div>

    {/* Print stylesheet */}
    <style>{`
      @media print {
        @page { size: A4; margin: 14mm; }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .page-break { page-break-after: always; break-after: page; }
        .no-print { display: none !important; }
        .cap-page { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; }
      }
      .cap-page { background: white; }
      .cap-h-rule { background: linear-gradient(90deg, #1b3a5c 0%, #1b3a5c 40%, #b8743d 40%, #b8743d 50%, #4db6c7 50%, #4db6c7 60%, transparent 60%); height: 4px; }
    `}</style>

    {/* Sticky utility bar — print + back */}
    <div class="no-print sticky top-14 z-30 bg-[#1b3a5c] text-white">
      <div class="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between text-sm">
        <div class="flex items-center gap-3">
          <i class="fas fa-file-lines text-[#b8743d]"></i>
          <span class="font-semibold">Capability Statement · YBMT Resort Yards · Brisbane</span>
          <span class="text-white/50 text-xs hidden md:inline">· v1.0 · 2026</span>
        </div>
        <div class="flex items-center gap-3">
          <a href="/pools" class="text-xs text-white/70 hover:text-white"><i class="fas fa-arrow-left mr-1"></i> Back to Resort Yards</a>
          <button onclick="window.print()" class="px-3 py-1.5 bg-[#b8743d] hover:bg-[#a36731] rounded text-xs font-semibold">
            <i class="fas fa-print mr-1"></i> Print / Save as PDF
          </button>
        </div>
      </div>
    </div>

    {/* ====================== PAGE 1 — COVER ====================== */}
    <article class="cap-page max-w-[900px] mx-auto my-8 print:my-0 p-12 lg:p-16 shadow-lg print:shadow-none page-break">
      <div class="cap-h-rule mb-12"></div>

      <div class="flex items-start justify-between mb-16">
        <div>
          <div class="text-4xl font-bold text-[#1b3a5c]" style="font-family:Inter,sans-serif">YBMT</div>
          <div class="italic text-3xl text-[#b8743d] mt-1" style="font-family:Fraunces,serif">Resort Yards</div>
          <div class="text-[11px] uppercase tracking-[0.2em] text-stone-500 mt-3 font-semibold">South East Queensland · Brisbane</div>
        </div>
        <ProofSeal size={140} />
      </div>

      <div class="mb-12">
        <div class="text-[11px] uppercase tracking-[0.2em] text-[#b8743d] font-semibold mb-3">Capability Statement</div>
        <h1 class="text-5xl lg:text-6xl font-bold text-[#1b3a5c] leading-[1.05] mb-6" style="font-family:Fraunces,serif">
          We build <em>Resort Yards</em> in <br />Brisbane backyards.
        </h1>
        <p class="text-lg text-stone-700 leading-relaxed max-w-2xl">
          Pool deck · outdoor kitchen · pergola · fire feature · landscape integration —
          designed and built as one complete outdoor room.
          Delivered in <strong class="text-[#1b3a5c]">30 days</strong>, guaranteed.
        </p>
      </div>

      <div class="grid grid-cols-3 gap-6 mb-12 pt-8 border-t border-stone-200">
        <div>
          <div class="text-3xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">12</div>
          <div class="text-xs uppercase tracking-wider text-stone-500 mt-1">Years on the Coast</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">340+</div>
          <div class="text-xs uppercase tracking-wider text-stone-500 mt-1">Resort Yards built · SEQ</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-[#1b3a5c]" style="font-family:Fraunces,serif">30 days</div>
          <div class="text-xs uppercase tracking-wider text-stone-500 mt-1">Build · guaranteed</div>
        </div>
      </div>

      <div class="bg-[#f5f1ea] rounded p-6 border-l-4 border-[#b8743d] mb-12">
        <div class="text-[10px] uppercase tracking-[0.2em] text-[#b8743d] font-semibold mb-2">Our category POV</div>
        <p class="text-stone-800 leading-relaxed" style="font-family:Fraunces,serif">
          A pool deck is not the finish of a pool build —
          it's the <em>start</em> of an outdoor room.
          We don't quote pool decks. We design Resort Yards.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div class="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-2">Built for</div>
          <ul class="space-y-1 text-stone-700">
            <li>· Premium builders · pool completion handover</li>
            <li>· Homeowners with new or existing pools</li>
            <li>· Vendors preparing to list (24–90 days)</li>
            <li>· Landscape architects · spec packages</li>
          </ul>
        </div>
        <div>
          <div class="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-2">Brisbane coverage</div>
          <ul class="space-y-1 text-stone-700">
            <li>· Inner Brisbane · Hamilton · Ascot · New Farm</li>
            <li>· West · Toowong · Indooroopilly · Kenmore</li>
            <li>· North · Clayfield · Wavell Heights · Hendra</li>
            <li>· South · Bulimba · Norman Park · Camp Hill</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-stone-200 flex items-end justify-between text-xs text-stone-500">
        <div>
          <div>QBCC Open Builder Licence 1234567</div>
          <div>ABN 74 076 531 765 · $20M Public Liability</div>
          <div>QBCC Home Warranty Insurance covered</div>
        </div>
        <div class="text-right">
          <div>1300 448 784</div>
          <div>info@ybmt.com.au</div>
          <div>ybmt.com.au/resort-yards</div>
        </div>
      </div>
    </article>

    {/* ====================== PAGE 2 — CHANNEL BUYER (PARTNER) ====================== */}
    <article class="cap-page max-w-[900px] mx-auto my-8 print:my-0 p-12 lg:p-16 shadow-lg print:shadow-none page-break">
      <div class="flex items-baseline justify-between mb-2">
        <div class="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">For partners · Page 2 of 4</div>
        <div class="text-xs italic text-[#b8743d]" style="font-family:Fraunces,serif">Built like it's our own home.</div>
      </div>
      <h2 class="text-4xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">If you build pools, sell premium homes, or design landscapes —</h2>
      <h3 class="text-2xl text-[#b8743d] mb-8" style="font-family:Fraunces,serif"><em>we are your finishing partner.</em></h3>

      <div class="grid md:grid-cols-3 gap-5 mb-10">
        <div class="bg-[#f5f1ea] p-5 rounded">
          <div class="w-10 h-10 rounded-full bg-[#1b3a5c] text-white flex items-center justify-center mb-3"><i class="fas fa-swimming-pool"></i></div>
          <div class="font-bold text-[#1b3a5c] mb-1">Pool builders</div>
          <p class="text-xs text-stone-700 leading-relaxed">
            Hand over a finished outdoor room, not a slab of bare concrete. We start the day your shell cures.
            Your client thanks you both — at handover, in a Resort Yard.
          </p>
        </div>
        <div class="bg-[#f5f1ea] p-5 rounded">
          <div class="w-10 h-10 rounded-full bg-[#1b3a5c] text-white flex items-center justify-center mb-3"><i class="fas fa-house-circle-check"></i></div>
          <div class="font-bold text-[#1b3a5c] mb-1">Premium builders</div>
          <p class="text-xs text-stone-700 leading-relaxed">
            New build with a pool? The Resort Yard is the photograph that sells the next one.
            We integrate into your build program so PC is one date, not three.
          </p>
        </div>
        <div class="bg-[#f5f1ea] p-5 rounded">
          <div class="w-10 h-10 rounded-full bg-[#1b3a5c] text-white flex items-center justify-center mb-3"><i class="fas fa-pen-ruler"></i></div>
          <div class="font-bold text-[#1b3a5c] mb-1">Landscape architects</div>
          <p class="text-xs text-stone-700 leading-relaxed">
            Spec a complete Resort Yard package — we deliver to your drawings, your materials,
            your archetype direction. White-label available on request.
          </p>
        </div>
      </div>

      <div class="cap-h-rule mb-8"></div>

      <h3 class="text-xl font-bold text-[#1b3a5c] mb-5" style="font-family:Fraunces,serif">What you get when you refer a client to YBMT Resort Yards</h3>
      <div class="grid md:grid-cols-2 gap-3 text-sm text-stone-700 mb-10">
        {[
          ['Single point of contact', 'One PM for design, build, certification — never a chain of subbies.'],
          ['30-day delivery guarantee', 'In writing. Day-31 = credit. No "weather contingency" theatre.'],
          ['Build program integration', 'We slot into your Gantt. No double-handling, no PC slippage.'],
          ['Photography rights', 'You get the final imagery for your portfolio — co-credited, all parties tagged.'],
          ['Co-branded handover pack', 'Client receives one finished outdoor room and one set of paperwork.'],
          ['Margin protection', 'We do not undercut you on quoted scope. We expand your client lifetime value.'],
        ].map(([title, body]) => (
          <div class="flex gap-3">
            <i class="fas fa-circle-check text-[#5b7a3a] mt-1"></i>
            <div>
              <div class="font-semibold text-[#1b3a5c]">{title}</div>
              <div class="text-xs text-stone-600 leading-relaxed">{body}</div>
            </div>
          </div>
        ))}
      </div>

      <div class="bg-[#1b3a5c] text-white rounded p-6">
        <div class="text-[10px] uppercase tracking-[0.2em] text-[#b8743d] font-semibold mb-2">Partner economics</div>
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <div class="text-2xl font-bold" style="font-family:Fraunces,serif">$85K – $240K</div>
            <div class="text-xs text-white/70 mt-1">Average Resort Yard contract value · Brisbane</div>
          </div>
          <div>
            <div class="text-2xl font-bold" style="font-family:Fraunces,serif">30% – 40%</div>
            <div class="text-xs text-white/70 mt-1">Pool builder partner referrals convert · 12-month rolling</div>
          </div>
          <div>
            <div class="text-2xl font-bold" style="font-family:Fraunces,serif">2.4×</div>
            <div class="text-xs text-white/70 mt-1">Partner lifetime referral cycle · same client returns for renos/maintenance</div>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between">
        <div class="text-sm text-stone-700">
          <div class="font-semibold text-[#1b3a5c] mb-1">Open a partner account</div>
          <div class="text-xs">Trade pricing · co-branded materials · priority scheduling</div>
        </div>
        <div class="text-right text-sm">
          <div class="font-bold text-[#1b3a5c]">Gerry Oliver · Partnerships</div>
          <div class="text-xs text-stone-600">gerry@ybmt.com.au · 1300 448 784</div>
        </div>
      </div>
    </article>

    {/* ====================== PAGE 3 — END BUYER (JTBD LADDER) ====================== */}
    <article class="cap-page max-w-[900px] mx-auto my-8 print:my-0 p-12 lg:p-16 shadow-lg print:shadow-none page-break">
      <div class="flex items-baseline justify-between mb-2">
        <div class="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">For homeowners · Page 3 of 4</div>
        <div class="text-xs italic text-[#b8743d]" style="font-family:Fraunces,serif">Built like it's our own home.</div>
      </div>
      <h2 class="text-4xl font-bold text-[#1b3a5c] mb-2" style="font-family:Fraunces,serif">If you own a Brisbane home with a pool —</h2>
      <h3 class="text-2xl text-[#b8743d] mb-8" style="font-family:Fraunces,serif"><em>one of these four jobs is yours.</em></h3>

      <div class="space-y-4 mb-10">
        {[
          {
            n: '01', tag: 'Fast-Track Host', timer: '30 days',
            headline: 'A date in the diary I cannot move.',
            body: 'Christmas, a 50th, a school formal. The pool is in but the deck is unfinished — we deliver a complete Resort Yard in 30 days or you get a written credit. Day-31 is on us.',
            href: '/pools/fast-track-host',
          },
          {
            n: '02', tag: 'Pool-Completion', timer: 'After PC',
            headline: 'The pool builder has handed over. Now what?',
            body: 'Bare concrete around a beautiful pool is not a finished backyard. We pick up where they stop — coping, deck, pergola, kitchen, fire — designed as one Resort Yard, built in 30 days.',
            href: '/pools/pool-completion',
          },
          {
            n: '03', tag: 'Replacement', timer: '15+ years',
            headline: 'The old deck has had its day.',
            body: 'Replacing timber that has rotted or pavers that have moved is not a repair job — it\'s a 15-year decision. We rebuild as a Resort Yard so the next 15 years deliver lifestyle, not maintenance.',
            href: '/pools/deck-replacement',
          },
          {
            n: '04', tag: 'Pre-Sale Investor', timer: 'Before listing',
            headline: 'I list in 60 days and I want my asking price.',
            body: 'A finished Resort Yard adds typically $180K – $320K to a Brisbane sale price on listings with pools. The 30-day build means you can list to your timeline, not ours.',
            href: '/pools/pre-sale-investor',
          },
        ].map(j => (
          <div class="bg-[#f5f1ea] rounded p-5 flex gap-5 items-start">
            <div class="text-4xl font-bold text-[#b8743d]/40" style="font-family:Fraunces,serif">{j.n}</div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <span class="text-[10px] uppercase tracking-wider bg-[#1b3a5c] text-white px-2 py-0.5 rounded font-semibold">{j.tag}</span>
                <span class="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">Trigger: {j.timer}</span>
              </div>
              <div class="font-bold text-[#1b3a5c] text-lg mb-1" style="font-family:Fraunces,serif">{j.headline}</div>
              <p class="text-sm text-stone-700 leading-relaxed">{j.body}</p>
              <div class="text-xs text-[#b8743d] font-semibold mt-2">
                See the pathway → ybmt.com.au{j.href}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="bg-[#1b3a5c] text-white rounded p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="text-[10px] uppercase tracking-[0.2em] text-[#b8743d] font-semibold mb-1">The next step is not a quote</div>
          <div class="text-lg font-bold" style="font-family:Fraunces,serif">Reserve a Resort Yard Inspection.</div>
          <div class="text-xs text-white/70 mt-1">90 minutes on-site · we walk the 7 zones · you leave with a plan, a price band, and a guaranteed build date.</div>
        </div>
        <div class="text-right">
          <ProofSeal size={80} />
        </div>
      </div>
    </article>

    {/* ====================== PAGE 4 — EVIDENCE + CREDENTIALS ====================== */}
    <article class="cap-page max-w-[900px] mx-auto my-8 print:my-0 p-12 lg:p-16 shadow-lg print:shadow-none">
      <div class="flex items-baseline justify-between mb-2">
        <div class="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">Evidence · Page 4 of 4</div>
        <div class="text-xs italic text-[#b8743d]" style="font-family:Fraunces,serif">Built like it's our own home.</div>
      </div>
      <h2 class="text-4xl font-bold text-[#1b3a5c] mb-8" style="font-family:Fraunces,serif">Brisbane proof.</h2>

      <h3 class="text-sm uppercase tracking-[0.15em] text-stone-500 font-semibold mb-4">Selected Brisbane Resort Yards · 2024 – 2026</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-10">
        {[
          { suburb: 'Hamilton', value: '$220K', archetype: 'Coastal', timer: '28 days', note: 'Tropical pool · iron pergola · outdoor kitchen with 2.4m island' },
          { suburb: 'Ascot', value: '$185K', archetype: 'Mediterranean', timer: '30 days', note: 'Pizza oven · travertine deck · queen palms · gas fire feature' },
          { suburb: 'New Farm', value: '$310K', archetype: 'Tropical', timer: '32 days*', note: 'Listing-ready · resold for $185K above guide price · *2-day variation' },
          { suburb: 'Bulimba', value: '$140K', archetype: 'Coastal', timer: '29 days', note: 'Hamptons-meets-Noosa · sunken fire pit · post-pool-completion' },
          { suburb: 'Toowong', value: '$95K', archetype: 'Tropical', timer: '26 days', note: 'Replacement deck · frangipani screening · QBCC HWI lodged' },
          { suburb: 'Clayfield', value: '$240K', archetype: 'Mediterranean', timer: '30 days', note: 'Premium builder referral · co-branded handover' },
        ].map(j => (
          <div class="border border-stone-200 rounded p-4">
            <div class="flex items-baseline justify-between mb-2">
              <div class="font-bold text-[#1b3a5c]">{j.suburb}</div>
              <div class="text-sm font-semibold text-[#b8743d]">{j.value}</div>
            </div>
            <div class="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
              <span>{j.archetype}</span>
              <span class="opacity-40">·</span>
              <span>{j.timer}</span>
            </div>
            <div class="text-xs text-stone-600 leading-relaxed">{j.note}</div>
          </div>
        ))}
      </div>

      <div class="cap-h-rule mb-8"></div>

      <h3 class="text-sm uppercase tracking-[0.15em] text-stone-500 font-semibold mb-4">Credentials & insurances</h3>
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-stone-700 mb-10">
        {[
          ['QBCC Open Builder Licence', '1234567'],
          ['ABN', '74 076 531 765'],
          ['Public Liability Insurance', '$20,000,000'],
          ['QBCC Home Warranty Insurance', 'Lodged on every contract over $3.3K'],
          ['Workers Compensation', 'WorkCover Queensland (current)'],
          ['Structural Guarantee', '25 years on substrate · written'],
          ['Finish Guarantee', '7 years on visible surfaces · written'],
          ['Delivery Guarantee', '30 days from job start · credit if breached'],
        ].map(([k, v]) => (
          <div class="flex items-center justify-between border-b border-stone-100 pb-2">
            <div class="text-xs uppercase tracking-wider text-stone-500 font-semibold">{k}</div>
            <div class="text-sm font-semibold text-[#1b3a5c]">{v}</div>
          </div>
        ))}
      </div>

      <h3 class="text-sm uppercase tracking-[0.15em] text-stone-500 font-semibold mb-4">Trade partners · Brisbane</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-stone-700 mb-10">
        {[
          'Premier Pool Builders QLD',
          'Brisbane Pool Co',
          'Coastal Builders Group',
          'Hamilton Premium Homes',
          'Ascot Outdoor Living',
          'SEQ Landscape Studios',
          'Sandstone & Stone QLD',
          'Brisbane Pergola Co',
        ].map(p => (
          <div class="bg-stone-50 px-3 py-2 rounded text-center">{p}</div>
        ))}
      </div>

      {/* Closing — YBMT Group promise */}
      <div class="bg-[#1b3a5c] text-white rounded p-8 text-center">
        <ProofSeal size={100} className="mx-auto mb-4" />
        <div class="text-2xl italic text-white mb-3" style="font-family:Fraunces,serif">
          "{YBMT_GROUP_PROMISE}"
        </div>
        <div class="text-[10px] uppercase tracking-[0.2em] text-[#b8743d] font-semibold mb-6">— The YBMT Group promise · since 2014</div>
        <div class="grid grid-cols-3 gap-4 text-xs pt-6 border-t border-white/20">
          <div>
            <div class="font-semibold mb-1">Phone</div>
            <div class="text-white/80">1300 448 784</div>
          </div>
          <div>
            <div class="font-semibold mb-1">Email</div>
            <div class="text-white/80">info@ybmt.com.au</div>
          </div>
          <div>
            <div class="font-semibold mb-1">Web</div>
            <div class="text-white/80">ybmt.com.au/resort-yards</div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-[10px] uppercase tracking-[0.15em] text-stone-400 text-center">
        YBMT Resort Yards · Capability Statement · Brisbane · v1.0 · 2026 · A line of business of YBMT × CoSai Construction JV
      </div>
    </article>

    <div class="print:hidden">
      <ResortYardsFooter />
    </div>
  </div>
)
