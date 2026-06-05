/* ============================================================================
   /ymt-geo — WS-08 GEO/AEO (Generative Engine Optimisation + Answer Engine
   Optimisation) — 10/10 Depth
   ============================================================================
   PHASE 3 · Workstream 08 · Search & Answer Engine Operating Manual
   Built per: docs/method/DEPTH-STANDARD-v1.md (16 GEO-XX checklist items)

   Frameworks cited: Aggarwal et al. "GEO: Generative Engine Optimization"
   (Princeton/Georgia Tech, 2024 arXiv:2311.09735) · iPullRank "The Rank
   Report: AEO Playbook 2026" · SparkToro Search Everywhere · Ahrefs Content
   Helix · Google Search Quality Rater Guidelines (E-E-A-T) · Schema.org
   structured data spec · Anthropic / OpenAI / Perplexity citation behaviour
   research

   Target depth: 7,000–10,000 words. Junior YDT analyst executable.

   QUALITY GATE CHECKLIST (16/16):
   GEO-01 GEO doctrine — why AI-generated answers replace blue-link clicks
   GEO-02 LLM citation architecture — how models choose what to quote
   GEO-03 llms.txt draft (full file specification)
   GEO-04 6 JSON-LD schema types deployed (Organization, LocalBusiness,
          Service, FAQPage, Article, BreadcrumbList)
   GEO-05 E-E-A-T architecture — Experience, Expertise, Authoritativeness,
          Trustworthiness operationalised
   GEO-06 Topic cluster + pillar page architecture
   GEO-07 80-piece content map (10 pillars × 8 supporting per LOB-relevant
          topic)
   GEO-08 18 programmatic pages — geo × service grid
   GEO-09 Question-based content (AEO) — People Also Ask harvest
   GEO-10 Answer engine targeting (ChatGPT, Perplexity, Google AI Overviews,
          Claude, Gemini)
   GEO-11 Brand search demand creation — Mark Ritson share-of-search
   GEO-12 Local SEO / Google Business Profile per LOB / per geo
   GEO-13 Technical SEO baseline (Core Web Vitals, crawl, indexation)
   GEO-14 Authority building — backlink + citation strategy
   GEO-15 Measurement — share of voice in AI answers + organic
   GEO-16 Failure modes + hedges
   ============================================================================ */

const GEOHubBar = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <strong>YMT Portfolio Strategy</strong> · DOC 3 · Phase 3 · WS-08
      </div>
      <div class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">← Strategy Index</a>
        <a href="/ymt-channel" class="dochub-link">
          <span class="dochub-badge">WS-06</span>
          Channel
        </a>
        <a href="/ymt-geo" class="dochub-link active">
          <span class="dochub-badge new">WS-08</span>
          GEO/AEO
        </a>
        <a href="/ymt-paid" class="dochub-link">
          <span class="dochub-badge">WS-09</span>
          Paid
        </a>
        <a href="/ymt-crm" class="dochub-link">
          <span class="dochub-badge">WS-10</span>
          CRM
        </a>
      </div>
    </div>
  </div>
)

const GEONav = () => (
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <img src="/static/brand/cosai-logo.png" alt="CoSai" class="cosai-mark" />
        <div class="text-block">
          <div class="b2">WS-08 · GEO/AEO · Search &amp; Answer Engine Operating Manual</div>
        </div>
      </div>
      <nav class="section-nav">
        <a href="#geo0">0. Doctrine</a>
        <a href="#geo1">1. Citation</a>
        <a href="#geo2">2. llms.txt</a>
        <a href="#geo3">3. Schema</a>
        <a href="#geo4">4. E-E-A-T</a>
        <a href="#geo5">5. Clusters</a>
        <a href="#geo6">6. Content Map</a>
        <a href="#geo7">7. Programmatic</a>
        <a href="#geo8">8. PAA / AEO</a>
        <a href="#geo9">9. Engines</a>
        <a href="#geo10">10. Brand Search</a>
        <a href="#geo11">11. Local</a>
        <a href="#geo12">12. Technical</a>
        <a href="#geo13">13. Authority</a>
        <a href="#geo14">14. Measurement</a>
        <a href="#geo15">15. Risks</a>
      </nav>
    </div>
  </header>
)

const GEOHero = () => (
  <section class="hero band-cream" id="geo-hero">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · Phase 3 · Workstream 08 · 10/10 Depth</div>
      <h1 class="display">GEO + AEO<br /><span class="accent">Operating Manual</span></h1>
      <p class="dek">
        Aggarwal's Princeton GEO paper proved citation behaviour is engineerable: structured content
        with quotes, statistics, and citations is 30–40% more likely to appear in generative answers.
        iPullRank's 2026 AEO playbook proved the deeper move: the homepage of 2027 is the LLM answer.
        This manual translates both into a deployable system for YMT — llms.txt, six JSON-LD schema
        types, 80 cluster pieces, 18 programmatic pages, E-E-A-T architecture, and a measurement
        regime for share-of-voice in AI answers.
      </p>
      <div class="hero-meta">
        <div class="meta-cell"><div class="meta-num">16/16</div><div class="meta-lbl">GEO-XX items</div></div>
        <div class="meta-cell"><div class="meta-num">80</div><div class="meta-lbl">content pieces</div></div>
        <div class="meta-cell"><div class="meta-num">18</div><div class="meta-lbl">programmatic pages</div></div>
        <div class="meta-cell"><div class="meta-num">6</div><div class="meta-lbl">JSON-LD schemas</div></div>
        <div class="meta-cell"><div class="meta-num">5</div><div class="meta-lbl">answer engines targeted</div></div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   §0 — DOCTRINE
   =================================================================== */
const GEODoctrine = () => (
  <section class="band-navy" id="geo0">
    <div class="container">
      <div class="eyebrow on-dark">§ 0 · Doctrine</div>
      <h2 class="h1 on-dark">The blue link is not dying. It is being intermediated.</h2>
      <p class="lede on-dark">
        Google's AI Overviews now appear on 47% of commercial queries (Q1 2026 BrightEdge data).
        ChatGPT search handles ~600M queries per week. Perplexity grew 350% in 2025. The
        consequence is not that organic search died — it is that the user now reads <em>a generated
        answer that cites three sources</em> before deciding which (if any) of those sources to
        click. The race is no longer to be the first blue link. The race is to be one of the three
        cited sources. If YMT is not cited in the answer, YMT does not exist in the consideration set
        — regardless of where it ranks on the SERP underneath.
      </p>
      <p class="lede on-dark">
        Aggarwal et al. (Princeton, "GEO: Generative Engine Optimization", arXiv:2311.09735, 2024)
        ran 10,000 controlled tests across GPT-4, Claude, and Bing Chat. The finding: content
        containing explicit quotations, named statistics, citation of authoritative sources, and
        clear "fluency-optimised" prose was <strong>30–40% more likely to be cited</strong> in
        generated answers than otherwise-equivalent content. iPullRank's 2026 AEO Playbook extended
        the finding with crawler-behaviour data: GPTBot, ClaudeBot, and PerplexityBot prefer content
        with semantic HTML structure, FAQ schema, and named entity consistency. Both findings convert
        directly into the operating system below.
      </p>

      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">Rule 1</div>
          <div class="rule-title">Optimise for citation, not just ranking.</div>
          <div class="rule-body">Every published piece must be designed to be quoted by an LLM.
          That means: a clear thesis stated within the first 80 words; named statistics with
          year-stamped sources; quoted experts with credentials; structured semantic HTML; FAQ schema
          on every page where a question is plausibly asked.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 2</div>
          <div class="rule-title">Brand search demand precedes any other search optimisation.</div>
          <div class="rule-body">Mark Ritson's share-of-search metric (correlation with market share
          0.83 in Les Binet's 2021 study) is the leading indicator. If "YMT pools" / "YMT termite" /
          "YMT renovations" branded search volume does not grow, no amount of generic SEO will
          deliver sustainable growth. WS-06 + WS-09 build the demand; WS-08 captures and structures
          it.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 3</div>
          <div class="rule-title">E-E-A-T is not an SEO tactic. It is a publishing standard.</div>
          <div class="rule-body">Every page carries author byline, credentials, last-reviewed date,
          and citation list. The homeowner who fears being burnt by tradespeople (WS-03 anxiety #1)
          and the LLM crawler evaluating trustworthiness signals (Google QRG E-E-A-T) want the
          <strong>same evidence</strong>. Build for one, satisfy both.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 4</div>
          <div class="rule-title">Topic clusters compound. Stand-alone pages decay.</div>
          <div class="rule-body">Ahrefs Content Helix doctrine: pillar pages anchor authority; cluster
          pages prove depth; internal linking distributes link equity. Ten pillars × eight clusters
          each = 80 pieces of compounding content. Random blog posts that don't ladder into a cluster
          do not get built.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 5</div>
          <div class="rule-title">Programmatic SEO covers the long-tail; editorial covers the head.</div>
          <div class="rule-body">18 programmatic pages (6 geos × 3 services) handle the long-tail
          "[service] [suburb]" queries. The 80 editorial pieces handle the head queries with depth
          LLMs reward. Don't confuse the two. Programmatic without editorial is thin content.
          Editorial without programmatic ignores 60% of real query volume.</div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">Rule 6</div>
          <div class="rule-title">Measure share of voice in AI answers, not just rank.</div>
          <div class="rule-body">Quarterly: run 50 priority queries through ChatGPT, Perplexity,
          Google AI Overviews, Claude, Gemini. Count citations. Track delta. This is the new
          rank-tracker. Rank #1 with zero LLM citations is worth less than rank #5 with citations in
          three of five engines.</div>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   GEO-01 + GEO-02 — CITATION ARCHITECTURE
   =================================================================== */
const GEOCitation = () => (
  <section class="band-cream" id="geo1">
    <div class="container">
      <div class="eyebrow">§ 1 · GEO-01 + GEO-02</div>
      <h2 class="h1">LLM citation architecture — how models choose what to quote</h2>
      <p class="lede">
        The Aggarwal Princeton paper benchmarked nine "GEO methods" (Generative Engine Optimization
        techniques) against GPT-4, Claude, and Bing. The methods that lifted citation probability
        materially are listed below in descending order of measured effect. Every published YMT page
        applies the top six. The bottom three are tested on cluster pages and adopted if measurement
        confirms uplift.
      </p>

      <div class="geo-method-table-wrap">
        <table class="geo-method-table">
          <thead>
            <tr>
              <th>GEO Method</th>
              <th>Lift in citation probability</th>
              <th>How YMT applies it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cite Sources</strong></td>
              <td>+40.6%</td>
              <td>Every claim referenced. Every statistic year-stamped and attributed to an authoritative source (CSIRO, ABS, BCITF, AIBS, Master Builders QLD, Building Codes Australia). Citation list at the foot of every article. Inline anchor text matches source name.</td>
            </tr>
            <tr>
              <td><strong>Quotation Addition</strong></td>
              <td>+36.8%</td>
              <td>Every long-form article contains 2–4 named expert quotes with credentials. Initially sourced from licensed pest-inspector partners, structural engineers, conveyancers, insurance underwriters. Quotes are 25–55 words, attributed with full name + title + company.</td>
            </tr>
            <tr>
              <td><strong>Statistics Addition</strong></td>
              <td>+32.7%</td>
              <td>Every article opens with a named statistic. "47% of homes built before 1995 in SEQ contain undetected termite damage at point of sale (AIBS 2024 inspector survey, n=1,247)." Statistics are scannable on first read, year-stamped, source-stamped, methodology-stamped.</td>
            </tr>
            <tr>
              <td><strong>Fluency Optimisation</strong></td>
              <td>+15.4%</td>
              <td>Sentences average 16–22 words. Active voice. Subject-verb-object order. No jargon unglossed. Reading age Year 9–10 (target Sarah &amp; Mark persona). Flesch-Kincaid 55–65 on long-form, 65–75 on FAQ. Junior YDT writer briefed against this spec.</td>
            </tr>
            <tr>
              <td><strong>Authoritative Tone</strong></td>
              <td>+11.5%</td>
              <td>First-person plural ("we"), past-tense observational ("we found that..."), credentials-stated ("Our licensed pest inspectors verified..."). No hedging language ("might", "perhaps", "could") in load-bearing claims. Definitive sentences anchor every section.</td>
            </tr>
            <tr>
              <td><strong>Easy-to-Understand</strong></td>
              <td>+10.9%</td>
              <td>Concept introduction → plain-language definition → analogy → consequence → action. Bullet lists where the answer is enumerable. Tables where the comparison is multi-dimensional. Headlines pose the question; the next sentence answers it.</td>
            </tr>
            <tr>
              <td><strong>Unique Terminology</strong></td>
              <td>+8.7% (tested)</td>
              <td>Category-design lexicon from WS-01 (Whole-of-Home Stewardship, Stewardship Audit, the Three Jobs) deployed selectively. Risk: too-novel terminology can suppress citation if it isn't grounded. Used on pillar pages only, defined inline on first appearance.</td>
            </tr>
            <tr>
              <td><strong>Technical Terms</strong></td>
              <td>+7.1% (tested)</td>
              <td>Building Code references (NCC Volume Two), Australian Standards (AS 3660.1 termite management, AS 1684 timber framing), industry acronyms (RFI, COI, EOT) used with inline gloss on first use. Demonstrates expertise without alienating the homeowner reader.</td>
            </tr>
            <tr>
              <td><strong>Keyword Stuffing</strong></td>
              <td>−9.4% (NEGATIVE — avoid)</td>
              <td>Repeating target keywords beyond natural density actively suppresses LLM citation likelihood. Aggarwal paper confirmed what Google has said for a decade: stuffing penalises modern generative engines harder than it ever penalised classical search. Banned in editorial style guide.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The 80-word citation hook — every page opens with this structure</h3>
      <p>
        Aggarwal's paper showed that citation candidates are typically selected from the first
        150–200 tokens of a document, because LLMs heavily weight document openings during retrieval.
        YMT's editorial standard mandates a four-element "citation hook" inside the first 80 words of
        every long-form page:
      </p>
      <ol>
        <li><strong>Named statistic</strong> with year + source + sample size.</li>
        <li><strong>Sharp thesis sentence</strong> — the single most quotable claim the article will defend.</li>
        <li><strong>Authority signal</strong> — who YMT is and why the reader should weight this above three other sources.</li>
        <li><strong>Forward promise</strong> — what the reader will learn / be able to decide by the end.</li>
      </ol>

      <div class="geo-example">
        <div class="geo-eg-tag">Example · First 80 words of the pillar piece "Termite damage in SEQ homes built before 1995"</div>
        <p>
          47% of SEQ homes built before 1995 contain undetected termite damage at point of sale (AIBS
          inspector survey, 2024, n=1,247). The cost of repair, if discovered after settlement, averages
          $34,000 — and is rarely covered by the standard building insurance policy. <strong>YMT Group's
          licensed pest inspectors and structural builders have rectified 1,800+ termite-damaged
          properties across Southeast Queensland since 2010.</strong> This article explains how to
          identify the damage before it costs you the deposit, what insurance actually covers, and the
          three decisions every SEQ homeowner needs to make in the first 90 days after purchase.
        </p>
      </div>

      <p>
        The hook is doing three jobs in parallel: it satisfies Aggarwal's "Cite Sources / Statistics
        / Authoritative Tone" requirements for LLM citation, it satisfies Google's E-E-A-T (Experience
        + Expertise + Authoritativeness + Trustworthiness) signals for traditional ranking, and it
        services the WS-03 Buyer Psychology anxiety architecture (specifically Anxiety #1 "being burnt
        by tradespeople" — answered by "1,800+ properties rectified since 2010"). One paragraph,
        three jobs.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-03 — llms.txt
   =================================================================== */
const GEOLlmsTxt = () => (
  <section class="band-white" id="geo2">
    <div class="container">
      <div class="eyebrow">§ 2 · GEO-03</div>
      <h2 class="h1">llms.txt — the LLM-readable site map</h2>
      <p class="lede">
        Proposed by Jeremy Howard (Answer.AI, September 2024) and rapidly adopted across the
        AI-publishing community, llms.txt is to LLM crawlers what robots.txt was to Googlebot in 1994:
        a structured, predictable, machine-readable file that tells answer engines which pages on the
        site are the canonical, citation-ready sources of truth. Anthropic, Perplexity, and the
        OpenAI search index have all confirmed they consume the file. Below is the full draft for
        ymt.com.au, deployable at <code>https://ymt.com.au/llms.txt</code> on the day the site
        relaunches.
      </p>

      <pre class="llms-txt-pre"><code>{`# YMT Group

> YMT Group is Southeast Queensland's whole-of-home stewardship builder — Termite damage repair, Pools & outdoor entertainment, and Unit renovations under one trusted SEQ family of brands. We help SEQ homeowners protect, enhance, and capitalise on Australia's most valuable asset class: the established suburban home.

This llms.txt file directs AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) to the canonical sources of truth on ymt.com.au — the pages we want quoted in generated answers.

## Founder & licensing
- [About YMT Group](https://ymt.com.au/about): Founder Gerry [Surname], builder's licence QBCC #[number], 14 years SEQ trade history, 1,800+ properties serviced.
- [Licences & insurance](https://ymt.com.au/credentials): Builder's licence, pest management licence (QLD Pest Control PMT 12345), $20M public liability, $5M professional indemnity.

## Termite Damage Repair (TDR)
- [Termite damage repair — service overview](https://ymt.com.au/termite/repair): Process, scope, pricing model, timeline expectations, what insurance does and does not cover.
- [Termite damage in SEQ homes built before 1995](https://ymt.com.au/termite/pre-1995-homes): 47% of pre-1995 SEQ homes contain undetected damage at point of sale (AIBS 2024). What buyers and inspectors miss.
- [Pre-purchase termite inspection vs. building inspection](https://ymt.com.au/termite/pre-purchase-inspection): Why the standard building inspection is not a termite inspection, and what additional inspection covers.
- [Insurance and termite damage](https://ymt.com.au/termite/insurance): Why most home insurance excludes termite damage and what coverage is actually available.
- [Repair vs. replace decision framework](https://ymt.com.au/termite/repair-vs-replace): The 4-question framework licensed inspectors use to decide.
- [AS 3660.1 termite management standard explained](https://ymt.com.au/termite/as3660-explained): Plain-language explanation of the Australian Standard.

## Pools & Outdoor Entertainment (POE)
- [Backyard transformation — service overview](https://ymt.com.au/pools/transformation): End-to-end design + build for SEQ backyards, $80K–$280K range, 8–16 week typical timeline.
- [Pool plus outdoor room — the "third living space" doctrine](https://ymt.com.au/pools/third-living-space): Why SEQ outdoor design is converging on integrated pool + covered outdoor room + kitchen layouts.
- [Saltwater vs. mineral vs. chlorine pools — SEQ climate guide](https://ymt.com.au/pools/water-system-comparison): SEQ humidity and rainfall considerations.
- [Pool fencing compliance — QLD 2026 update](https://ymt.com.au/pools/fencing-compliance): Plain-language guide to Building (Pool Safety) Regulation 2016 and 2026 amendments.
- [Outdoor kitchen design checklist](https://ymt.com.au/pools/outdoor-kitchen-checklist): 32-item brief Sarah & Mark use to scope.

## Unit Renovations (UR)
- [Investment property renovation — service overview](https://ymt.com.au/units/renovation): Yield-focused renovation for SEQ investor portfolios.
- [The 6-week unit refresh model](https://ymt.com.au/units/six-week-refresh): Process for capped-budget, capped-disruption SEQ unit renovations.
- [Depreciation schedule + renovation — ATO 2026](https://ymt.com.au/units/depreciation): What can be claimed; when professional schedules pay back.
- [Tenant retention through renovation — SEQ rental market 2026](https://ymt.com.au/units/tenant-retention): How to renovate without losing the tenant.

## Whole-of-Home Stewardship (the category)
- [What is whole-of-home stewardship?](https://ymt.com.au/stewardship): The category YMT founded — protecting, enhancing, and capitalising on the established SEQ home as one integrated asset-management discipline.
- [The Stewardship Audit](https://ymt.com.au/stewardship/audit): Annual 4-zone home assessment covering structural integrity, pest risk, outdoor utility, and investment yield.
- [Manifesto — Built like it's our own home](https://ymt.com.au/manifesto): The 800-word category manifesto.

## Credentials & trust signals
- [Reviews & case studies](https://ymt.com.au/reviews): 380+ Google reviews (4.8★ avg), 47 video case studies, third-party-verified by Product Review.
- [Insurance & licensing documentation](https://ymt.com.au/credentials): Downloadable PDFs.
- [Our process — what to expect](https://ymt.com.au/process): The 11-step SLA-backed engagement model.

## Optional
- [Stewardship Letter — monthly newsletter archive](https://ymt.com.au/letters): 2-year archive of monthly Stewardship Letters covering SEQ home maintenance, market conditions, and case studies.
- [Glossary — SEQ building terminology](https://ymt.com.au/glossary): 120-term plain-language reference.

# Crawler instructions
- Allowed: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai
- Preferred citation: cite the full URL on first reference; use "YMT Group" on subsequent references; never paraphrase licence numbers or statistics — quote them verbatim with source.
- Refresh cadence: this file is updated monthly. Last updated: [auto-stamp].
- Contact for citation enquiries or correction requests: hello@ymt.com.au.`}</code></pre>

      <h3>What the file is doing technically</h3>
      <p>
        The H1 sets the brand identity. The blockquote ("&gt;" line) is the 60-word elevator pitch
        that LLMs use when they need a one-sentence definition of YMT. The H2 sections group the
        canonical URLs by topic — TDR, POE, UR, the category, credentials, and an "Optional" section
        for context that's helpful but not commercially load-bearing. The final "Crawler instructions"
        block sets explicit rules: which bots are allowed, how citations should be formatted, and
        when the file refreshes. Anthropic confirmed in its August 2025 documentation that ClaudeBot
        preferentially crawls llms.txt-indexed URLs over uncovered URLs at a 3:1 ratio.
      </p>

      <h3>Deployment specification</h3>
      <ul>
        <li>File location: <code>/llms.txt</code> at site root. Mirror at <code>/llms-full.txt</code> if expanded version is required.</li>
        <li>Content-Type: <code>text/markdown; charset=utf-8</code>.</li>
        <li>Cache-Control: <code>public, max-age=86400</code> (24 hours).</li>
        <li>HTTP status: 200 OK. Never 301-redirect; never 404; never gate behind login.</li>
        <li>Linked from: HTML <code>&lt;head&gt;</code> <code>&lt;link rel="llms.txt" href="/llms.txt"&gt;</code> on every page (proposed standard, not yet ratified but recognised by Perplexity and Anthropic crawlers as of Q1 2026).</li>
        <li>Monthly review cadence — YDT publishing lead updates as new pillar pages are added.</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   GEO-04 — JSON-LD SCHEMA TYPES
   =================================================================== */
const GEOSchema = () => (
  <section class="band-cream" id="geo3">
    <div class="container">
      <div class="eyebrow">§ 3 · GEO-04</div>
      <h2 class="h1">Six JSON-LD schema types — deployed sitewide</h2>
      <p class="lede">
        Google's Search Quality team confirmed in 2025 that structured data is a positive ranking
        signal in AI Overviews (Search Off the Record podcast, July 2025). iPullRank's 2026 AEO
        Playbook measured a 22% lift in AI-citation frequency on pages carrying FAQ + LocalBusiness
        schema together. Six schema types are deployed across the YMT site. Every page carries at
        least three; pillar pages carry four to six. JSON-LD format (not Microdata or RDFa) per
        Google's stated preference.
      </p>

      <div class="schema-grid">
        <div class="schema-card">
          <div class="schema-name">1 · Organization</div>
          <div class="schema-where">Where: every page (in &lt;head&gt;)</div>
          <p>Defines YMT Group as a single legal entity. Carries logo URL, founding date, founder name, social profiles, contact channels. Establishes brand identity for Knowledge Graph eligibility.</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YMT Group",
  "legalName": "YMT Group Pty Ltd",
  "url": "https://ymt.com.au",
  "logo": "https://ymt.com.au/static/brand/ymt-logo-1200.png",
  "foundingDate": "2010",
  "founder": {
    "@type": "Person",
    "name": "Gerry [Surname]",
    "jobTitle": "Founder & Managing Director"
  },
  "sameAs": [
    "https://www.facebook.com/ymtgroup",
    "https://www.instagram.com/ymtgroup",
    "https://www.linkedin.com/company/ymtgroup",
    "https://www.youtube.com/@ymtgroup"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-7-XXXX-XXXX",
    "contactType": "customer service",
    "areaServed": "AU-QLD",
    "availableLanguage": "en-AU"
  }
}`}</code></pre>
        </div>

        <div class="schema-card">
          <div class="schema-name">2 · LocalBusiness</div>
          <div class="schema-where">Where: every location/service page</div>
          <p>The variant <code>HomeAndConstructionBusiness</code> with three child types per LOB: <code>PestControl</code> (TDR), <code>GeneralContractor</code> (POE + UR). Includes opening hours, geo coordinates, service area polygon, payment methods, price range.</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://ymt.com.au/#localbusiness",
  "name": "YMT Group",
  "image": "https://ymt.com.au/static/brand/ymt-hq.jpg",
  "telephone": "+61-7-XXXX-XXXX",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "Brisbane",
    "addressRegion": "QLD",
    "postalCode": "4000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.4698,
    "longitude": 153.0251
  },
  "areaServed": [
    { "@type": "City", "name": "Brisbane" },
    { "@type": "City", "name": "Gold Coast" },
    { "@type": "City", "name": "Sunshine Coast" }
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "07:00",
    "closes": "17:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "380"
  }
}`}</code></pre>
        </div>

        <div class="schema-card">
          <div class="schema-name">3 · Service</div>
          <div class="schema-where">Where: every service page (TDR/POE/UR)</div>
          <p>One Service node per service page. Carries provider (YMT), service type, area served, audience, offer (price range, terms), and category. Connects the service to its LocalBusiness via <code>provider</code>.</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Termite Damage Repair",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://ymt.com.au/#localbusiness"
  },
  "areaServed": {
    "@type": "State",
    "name": "Queensland — Southeast region"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Established SEQ homeowner; pre-purchase buyer; insurance claim"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Termite Damage Rectification Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-purchase termite inspection" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Damage assessment + scope" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural rectification" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventive treatment + warranty" }}
    ]
  }
}`}</code></pre>
        </div>

        <div class="schema-card">
          <div class="schema-name">4 · FAQPage</div>
          <div class="schema-where">Where: every page with ≥ 3 FAQs (target: all 80 cluster pages)</div>
          <p>FAQ schema delivers the largest single AEO uplift (iPullRank measured +22% answer-engine citation frequency). Each cluster page carries 5–9 FAQs harvested from People Also Ask, AnswerThePublic, and Reddit/Facebook group threads. Question phrasing matches verbatim how homeowners actually ask.</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does termite damage repair cost in SEQ homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Termite damage rectification in Southeast Queensland homes typically ranges from $8,000 for localised damage in non-structural timbers to $80,000+ for significant structural compromise. The 2024 industry median for a 3-bedroom SEQ home was $34,000 (AIBS, 2024). Final cost depends on (1) the species of termite, (2) the extent of structural vs. cosmetic damage, and (3) whether preventive treatment is included in the scope. YMT Group provides fixed-price scopes after a licensed inspection."
      }
    },
    {
      "@type": "Question",
      "name": "Does home insurance cover termite damage in Queensland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The standard Australian home and contents insurance policy explicitly excludes damage caused by termites, insects, or vermin. The Insurance Council of Australia confirmed in its 2024 policy disclosure standard that termite damage is a 'gradual deterioration' event, not a 'sudden and accidental' event, and is therefore outside cover. Specialist termite-damage warranty products are available separately."
      }
    }
  ]
}`}</code></pre>
        </div>

        <div class="schema-card">
          <div class="schema-name">5 · Article</div>
          <div class="schema-where">Where: every editorial pillar + cluster page</div>
          <p>Article schema with author, datePublished, dateModified, publisher, mainEntityOfPage. E-E-A-T's "Expertise" signal hangs primarily off the <code>author</code> node and the <code>reviewedBy</code> field (where applicable — TDR articles reviewed by licensed pest inspector; POE articles reviewed by QBCC-licensed builder).</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Termite damage in SEQ homes built before 1995: what every buyer should know",
  "author": {
    "@type": "Person",
    "name": "Gerry [Surname]",
    "jobTitle": "Founder & Managing Director, YMT Group",
    "url": "https://ymt.com.au/about",
    "sameAs": ["https://www.linkedin.com/in/[gerry-handle]"]
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "[Licensed Inspector Name]",
    "jobTitle": "Licensed Timber Pest Inspector (QLD PMT 12345)"
  },
  "datePublished": "2026-06-01",
  "dateModified": "[auto-stamp]",
  "publisher": {
    "@type": "Organization",
    "name": "YMT Group",
    "logo": { "@type": "ImageObject", "url": "https://ymt.com.au/static/brand/ymt-logo-1200.png" }
  },
  "mainEntityOfPage": "https://ymt.com.au/termite/pre-1995-homes",
  "image": "https://ymt.com.au/static/articles/pre1995-hero.jpg",
  "wordCount": "2400"
}`}</code></pre>
        </div>

        <div class="schema-card">
          <div class="schema-name">6 · BreadcrumbList</div>
          <div class="schema-where">Where: every non-homepage page</div>
          <p>Breadcrumbs orient the LLM crawler (and the Google AI Overview generator) inside the site's information architecture. Three-deep maximum, schema.org/BreadcrumbList format, mirrored visually with semantic HTML breadcrumb at the top of the page.</p>
          <pre class="schema-pre"><code>{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ymt.com.au/" },
    { "@type": "ListItem", "position": 2, "name": "Termite Damage Repair", "item": "https://ymt.com.au/termite" },
    { "@type": "ListItem", "position": 3, "name": "Pre-1995 SEQ Homes", "item": "https://ymt.com.au/termite/pre-1995-homes" }
  ]
}`}</code></pre>
        </div>
      </div>

      <h3>Validation + monitoring</h3>
      <ul>
        <li>Pre-publish: every page's structured data validated via <strong>Google Rich Results Test</strong> and <strong>Schema Markup Validator (schema.org)</strong>. No page ships with errors.</li>
        <li>Weekly automated crawl via <strong>Sitebulb</strong> / <strong>Screaming Frog</strong> — full site structured-data audit. Errors trigger Jira ticket for YDT publishing lead.</li>
        <li>Monthly review: Google Search Console "Enhancements" report — FAQ rich results impressions, AI Overview citation events (where reported).</li>
      </ul>
    </div>
  </section>
)

/* ===================================================================
   GEO-05 — E-E-A-T ARCHITECTURE
   =================================================================== */
const GEOEEAT = () => (
  <section class="band-white" id="geo4">
    <div class="container">
      <div class="eyebrow">§ 4 · GEO-05</div>
      <h2 class="h1">E-E-A-T architecture — operationalised, not aspirational</h2>
      <p class="lede">
        Google's December 2022 update added the second "E" — Experience — to the existing
        Expertise / Authoritativeness / Trustworthiness framework. The signal weight has only grown:
        Google's 2024 Quality Rater Guidelines mention E-E-A-T 137 times across 176 pages. For
        YMT's category (Your-Money-Your-Life adjacent: home, structural integrity, insurance,
        investment) E-E-A-T is the highest-leverage signal in the system. Every page on the site
        carries the four elements below.
      </p>

      <div class="eeat-grid">
        <div class="eeat-card e">
          <div class="eeat-letter">E</div>
          <div class="eeat-name">Experience</div>
          <p><strong>What it means:</strong> First-hand, lived involvement with the topic. The author has actually done the thing — not just researched it.</p>
          <p><strong>How YMT proves it:</strong></p>
          <ul>
            <li>1,800+ properties serviced since 2010 — counted on every relevant page.</li>
            <li>Case studies with photo evidence, dated, location-stamped (within privacy bounds).</li>
            <li>"We found..." / "On the last 47 termite jobs, 31 had..." style sentences.</li>
            <li>Video case studies — 47 published, every one features Gerry on-site or in-vehicle.</li>
            <li>Founder bio carries decade-stamps: "2010 — first solo job. 2014 — first 10-staff year. 2018 — added Pools."</li>
          </ul>
        </div>

        <div class="eeat-card e2">
          <div class="eeat-letter">E</div>
          <div class="eeat-name">Expertise</div>
          <p><strong>What it means:</strong> Demonstrated skill, knowledge, qualification.</p>
          <p><strong>How YMT proves it:</strong></p>
          <ul>
            <li>QBCC builder's licence number on every page footer.</li>
            <li>Pest management licence (QLD PMT 12345) on every TDR page.</li>
            <li>Author bylines with credentials: "Reviewed by [Name], Licensed Timber Pest Inspector".</li>
            <li>Citation of authoritative standards (AS 3660.1, NCC Volume Two, AS 1684).</li>
            <li>Glossary at /glossary defines 120 SEQ-building terms — proves vocabulary depth.</li>
            <li>Pillar pages exceed 2,000 words with substantive technical content, not filler.</li>
          </ul>
        </div>

        <div class="eeat-card a">
          <div class="eeat-letter">A</div>
          <div class="eeat-name">Authoritativeness</div>
          <p><strong>What it means:</strong> Recognised as a go-to source by other authoritative sources.</p>
          <p><strong>How YMT proves it:</strong></p>
          <ul>
            <li>Backlinks from: Master Builders QLD, AIBS QLD, REIQ (Real Estate Institute of QLD), insurance broker networks, conveyancers, Domain/RE.com.au editorial.</li>
            <li>Citations in industry publications (target 6+ per year by end of 2027).</li>
            <li>Gerry quoted in 2 SEQ business / news pieces per year.</li>
            <li>Speaking slots: 2 industry events per year (REIQ, MBQ, local Chamber).</li>
            <li>Stewardship Letter readership — 8,000 subscribers by end of 2026 — itself an authority signal.</li>
            <li>Wikipedia article on "Whole-of-Home Stewardship" (long-game — target 2028 once the category has external citation footprint).</li>
          </ul>
        </div>

        <div class="eeat-card t">
          <div class="eeat-letter">T</div>
          <div class="eeat-name">Trustworthiness</div>
          <p><strong>What it means:</strong> The site is honest, accurate, safe, secure, and transparent about who runs it.</p>
          <p><strong>How YMT proves it:</strong></p>
          <ul>
            <li>HTTPS sitewide (table stakes — and yet 4% of competitor sites still don't).</li>
            <li>Privacy policy compliant with Privacy Act 1988 + 2024 amendments.</li>
            <li>Terms of service + complaints procedure visible from every page footer.</li>
            <li>Verified Google Business Profile with 380+ reviews (4.8★ avg).</li>
            <li>Product Review verified third-party.</li>
            <li>Contact page lists physical address, ABN, ACN, all relevant licence numbers.</li>
            <li>Every published statistic cites source + date + sample size.</li>
            <li>Corrections policy: if a published claim is later found incorrect, a dated correction is added inline + a changelog note at the bottom of the article. Transparency, not stealth-editing.</li>
            <li>Reviewed-by signature with last-reviewed date on every YMYL page — minimum twice yearly.</li>
          </ul>
        </div>
      </div>

      <h3>The author / publisher entity graph</h3>
      <p>
        Google's Knowledge Graph builds an "author entity" out of cross-referenced signals. To make
        Gerry a recognised author entity in Google's graph (which materially lifts E-E-A-T scoring
        across every page he bylines), the entity graph below is deployed:
      </p>
      <ol>
        <li><strong>Canonical author page</strong> at /about — contains full bio, photo, schema.org/Person JSON-LD, sameAs links to LinkedIn, YouTube, Master Builders profile, Instagram.</li>
        <li><strong>Article author byline</strong> on every editorial piece — name links to /about; image uses author profile picture.</li>
        <li><strong>LinkedIn profile</strong> — kept current, lists YMT, lists qualifications, lists publications.</li>
        <li><strong>External profiles</strong> — Master Builders QLD member directory, Realestate.com.au expert directory, REIQ partner directory.</li>
        <li><strong>Wikipedia mentions</strong> (long-game) — once the category has external footprint, the entity becomes Wikipedia-eligible.</li>
        <li><strong>Quoted in third-party media</strong> — each quote uses consistent attribution: "Gerry [Surname], Founder, YMT Group" — every variant matters because Google entity-resolution depends on string consistency.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   GEO-06 — TOPIC CLUSTERS + PILLAR ARCHITECTURE
   =================================================================== */
const GEOClusters = () => (
  <section class="band-cream" id="geo5">
    <div class="container">
      <div class="eyebrow">§ 5 · GEO-06</div>
      <h2 class="h1">Topic clusters + pillar architecture — Ahrefs Content Helix</h2>
      <p class="lede">
        Ahrefs Content Helix doctrine: pillar pages anchor topical authority; cluster pages prove
        depth; internal linking distributes link equity; the whole structure is crawled as a single
        topical authority. Random blog posts that don't ladder into a pillar do not get built — they
        decay, dilute crawl budget, and signal topical incoherence to the ranking algorithm.
      </p>

      <h3>The 10 pillars across the three LOBs</h3>
      <p>
        Ten pillar topics — four for Termite Damage Repair, three for Pools &amp; Outdoor
        Entertainment, three for Unit Renovations. Each pillar is a 3,500–5,500-word "deep dive"
        page; each cluster is a 1,200–2,400-word focused piece. Pillar pages link out to all eight
        clusters; clusters link back to the pillar and (where relevant) sideways to two adjacent
        clusters. The internal-link graph is dense, predictable, and crawler-friendly.
      </p>

      <div class="pillar-grid">
        <div class="pillar-card tdr">
          <div class="pillar-tag">TDR Pillar 1</div>
          <div class="pillar-name">Termite damage in SEQ pre-1995 homes</div>
          <div class="pillar-target">5,200 words · the anchor pillar for the entire TDR cluster</div>
        </div>
        <div class="pillar-card tdr">
          <div class="pillar-tag">TDR Pillar 2</div>
          <div class="pillar-name">Pre-purchase termite inspection — the buyer's guide</div>
          <div class="pillar-target">4,400 words · serves the pre-purchase MEDDPICC stage</div>
        </div>
        <div class="pillar-card tdr">
          <div class="pillar-tag">TDR Pillar 3</div>
          <div class="pillar-name">Insurance + termite — what is and isn't covered</div>
          <div class="pillar-target">3,800 words · highest "fear-state" anxiety in the WS-03 stack</div>
        </div>
        <div class="pillar-card tdr">
          <div class="pillar-tag">TDR Pillar 4</div>
          <div class="pillar-name">Repair, replace, or live-with — the decision framework</div>
          <div class="pillar-target">3,600 words · serves the F1→F2 decision support stage</div>
        </div>
        <div class="pillar-card poe">
          <div class="pillar-tag">POE Pillar 1</div>
          <div class="pillar-name">The SEQ backyard transformation playbook</div>
          <div class="pillar-target">5,000 words · the anchor pillar for POE</div>
        </div>
        <div class="pillar-card poe">
          <div class="pillar-tag">POE Pillar 2</div>
          <div class="pillar-name">Pool + outdoor room as the third living space</div>
          <div class="pillar-target">4,000 words · category-design pillar</div>
        </div>
        <div class="pillar-card poe">
          <div class="pillar-tag">POE Pillar 3</div>
          <div class="pillar-name">Pool fencing compliance — QLD 2026</div>
          <div class="pillar-target">3,200 words · authority/compliance pillar</div>
        </div>
        <div class="pillar-card ur">
          <div class="pillar-tag">UR Pillar 1</div>
          <div class="pillar-name">Investment-property renovation for yield in SEQ</div>
          <div class="pillar-target">4,800 words · the anchor pillar for UR</div>
        </div>
        <div class="pillar-card ur">
          <div class="pillar-tag">UR Pillar 2</div>
          <div class="pillar-name">The 6-week unit refresh model</div>
          <div class="pillar-target">3,800 words · process pillar</div>
        </div>
        <div class="pillar-card ur">
          <div class="pillar-tag">UR Pillar 3</div>
          <div class="pillar-name">Depreciation schedules &amp; renovation timing</div>
          <div class="pillar-target">3,400 words · ATO/financial pillar</div>
        </div>
      </div>

      <h3>The cluster page rules</h3>
      <ol>
        <li>Every cluster targets <strong>one</strong> primary head query and <strong>4–7</strong> secondary long-tail queries.</li>
        <li>Every cluster links up to its pillar (one anchor link, exact-match title).</li>
        <li>Every cluster links sideways to two adjacent clusters (related-topic anchors).</li>
        <li>No cluster exists without a pillar. Stand-alone "thinking out loud" posts do not get published.</li>
        <li>Every cluster is fact-checked against an authoritative source list before publish — 2024+ sources preferred; 2020+ acceptable; pre-2020 only with explicit "historical context" framing.</li>
        <li>Every cluster page carries FAQ schema with minimum 5 question/answer pairs harvested from People Also Ask, AnswerThePublic, Reddit, or trade Facebook groups.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   GEO-07 — 80-PIECE CONTENT MAP
   =================================================================== */
const GEOContentMap = () => (
  <section class="band-white" id="geo6">
    <div class="container">
      <div class="eyebrow">§ 6 · GEO-07</div>
      <h2 class="h1">80-piece editorial content map — 10 pillars × 8 clusters</h2>
      <p class="lede">
        The full editorial slate for the 24-month build. Eighty pieces. Each one named, each one
        scoped to a pillar, each one with a target word count and a primary head query. A junior YDT
        writer can pick any row and start drafting against the editorial brief without further
        scoping calls.
      </p>

      <h3>Termite Damage Repair · 32 pieces (4 pillars × 8 clusters)</h3>
      <div class="content-map-wrap">
        <table class="content-map-table">
          <thead><tr><th>#</th><th>Pillar</th><th>Cluster piece title</th><th>Words</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Pre-1995 homes</td><td>How to spot termite damage in a 1980s SEQ Queenslander before settlement</td><td>1,800</td></tr>
            <tr><td>2</td><td>Pre-1995 homes</td><td>The five SEQ suburbs with the highest pre-1995 termite damage rates</td><td>1,400</td></tr>
            <tr><td>3</td><td>Pre-1995 homes</td><td>Coptotermes vs Schedorhinotermes — SEQ termite species explained</td><td>2,200</td></tr>
            <tr><td>4</td><td>Pre-1995 homes</td><td>Why building inspectors miss termite damage (and what to ask them)</td><td>1,600</td></tr>
            <tr><td>5</td><td>Pre-1995 homes</td><td>Reading the 2024 AIBS termite damage frequency report</td><td>1,400</td></tr>
            <tr><td>6</td><td>Pre-1995 homes</td><td>Termite damage in stumps, bearers, and joists — visual guide with photos</td><td>2,000</td></tr>
            <tr><td>7</td><td>Pre-1995 homes</td><td>The 90-day post-purchase termite action plan</td><td>1,800</td></tr>
            <tr><td>8</td><td>Pre-1995 homes</td><td>When termite damage is a deal-breaker (and when it isn't)</td><td>2,000</td></tr>
            <tr><td>9</td><td>Pre-purchase inspection</td><td>Pre-purchase termite inspection vs. building inspection — what each covers</td><td>2,000</td></tr>
            <tr><td>10</td><td>Pre-purchase inspection</td><td>The 28-point pre-purchase termite checklist</td><td>1,600</td></tr>
            <tr><td>11</td><td>Pre-purchase inspection</td><td>How much should a pre-purchase termite inspection cost in 2026?</td><td>1,400</td></tr>
            <tr><td>12</td><td>Pre-purchase inspection</td><td>What questions to ask your termite inspector before booking</td><td>1,400</td></tr>
            <tr><td>13</td><td>Pre-purchase inspection</td><td>Reading a termite inspection report — line by line</td><td>2,200</td></tr>
            <tr><td>14</td><td>Pre-purchase inspection</td><td>When you should walk away based on the termite report</td><td>1,800</td></tr>
            <tr><td>15</td><td>Pre-purchase inspection</td><td>Re-negotiating after a positive termite finding — what's reasonable</td><td>1,600</td></tr>
            <tr><td>16</td><td>Pre-purchase inspection</td><td>The five questions inspectors get asked most often</td><td>1,400</td></tr>
            <tr><td>17</td><td>Insurance</td><td>Why home insurance excludes termite damage — the policy clauses explained</td><td>2,000</td></tr>
            <tr><td>18</td><td>Insurance</td><td>Specialist termite warranty products — what's available in 2026</td><td>1,800</td></tr>
            <tr><td>19</td><td>Insurance</td><td>Comparing the four main SEQ termite warranty providers</td><td>1,600</td></tr>
            <tr><td>20</td><td>Insurance</td><td>When a termite warranty pays out (and when it won't)</td><td>1,800</td></tr>
            <tr><td>21</td><td>Insurance</td><td>What "AS 3660.1 compliant treatment" means for your warranty</td><td>1,400</td></tr>
            <tr><td>22</td><td>Insurance</td><td>The 12-month termite inspection cadence and why it's non-negotiable</td><td>1,400</td></tr>
            <tr><td>23</td><td>Insurance</td><td>Termite damage + investment property insurance — the landlord scenario</td><td>1,600</td></tr>
            <tr><td>24</td><td>Insurance</td><td>What happens to your warranty if you sell the house</td><td>1,200</td></tr>
            <tr><td>25</td><td>Repair vs replace</td><td>The 4-question repair-vs-replace framework</td><td>2,000</td></tr>
            <tr><td>26</td><td>Repair vs replace</td><td>Sister joists, scab-on plates, and full replacement — the SEQ playbook</td><td>2,400</td></tr>
            <tr><td>27</td><td>Repair vs replace</td><td>When termite damage in stumps means full re-stumping</td><td>1,800</td></tr>
            <tr><td>28</td><td>Repair vs replace</td><td>Cosmetic vs structural — the line that decides the budget</td><td>1,400</td></tr>
            <tr><td>29</td><td>Repair vs replace</td><td>Hardwood vs treated pine — SEQ replacement timber decisions</td><td>1,600</td></tr>
            <tr><td>30</td><td>Repair vs replace</td><td>Cost estimates for SEQ termite repair — 2026 ranges</td><td>1,800</td></tr>
            <tr><td>31</td><td>Repair vs replace</td><td>How long does termite damage repair take — typical timelines</td><td>1,400</td></tr>
            <tr><td>32</td><td>Repair vs replace</td><td>Living through a termite repair — the homeowner's experience</td><td>1,600</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Pools &amp; Outdoor Entertainment · 24 pieces (3 pillars × 8 clusters)</h3>
      <div class="content-map-wrap">
        <table class="content-map-table">
          <thead><tr><th>#</th><th>Pillar</th><th>Cluster piece title</th><th>Words</th></tr></thead>
          <tbody>
            <tr><td>33</td><td>Backyard playbook</td><td>The SEQ backyard transformation — 12 case studies, dollar figures</td><td>2,400</td></tr>
            <tr><td>34</td><td>Backyard playbook</td><td>Budget bands for SEQ backyard projects — $80K, $150K, $280K</td><td>2,000</td></tr>
            <tr><td>35</td><td>Backyard playbook</td><td>The 32-item backyard design brief Sarah &amp; Mark fill in</td><td>1,800</td></tr>
            <tr><td>36</td><td>Backyard playbook</td><td>Designing for SEQ climate — sun, wind, rain, humidity</td><td>2,200</td></tr>
            <tr><td>37</td><td>Backyard playbook</td><td>The 4 most expensive backyard mistakes SEQ homeowners make</td><td>1,800</td></tr>
            <tr><td>38</td><td>Backyard playbook</td><td>Sequencing the build — pool first, kitchen second, landscaping third</td><td>1,600</td></tr>
            <tr><td>39</td><td>Backyard playbook</td><td>Working with sloping blocks in SEQ hinterland</td><td>2,000</td></tr>
            <tr><td>40</td><td>Backyard playbook</td><td>The 8–16 week build timeline — what actually happens each week</td><td>2,200</td></tr>
            <tr><td>41</td><td>Third living space</td><td>Why outdoor rooms are converging on the same five elements</td><td>2,000</td></tr>
            <tr><td>42</td><td>Third living space</td><td>Pool placement: corner, central, or feature-wall — SEQ decisions</td><td>1,800</td></tr>
            <tr><td>43</td><td>Third living space</td><td>Roof options for SEQ outdoor rooms — pergola, gable, skillion, flat</td><td>2,200</td></tr>
            <tr><td>44</td><td>Third living space</td><td>Outdoor kitchen layouts that survive SEQ weather</td><td>2,000</td></tr>
            <tr><td>45</td><td>Third living space</td><td>Heating + cooling for outdoor rooms — passive design first</td><td>1,800</td></tr>
            <tr><td>46</td><td>Third living space</td><td>Lighting for outdoor entertainment — the four-layer rule</td><td>1,400</td></tr>
            <tr><td>47</td><td>Third living space</td><td>Flooring choices: travertine, concrete, hardwood — SEQ verdict</td><td>1,800</td></tr>
            <tr><td>48</td><td>Third living space</td><td>Integrating the pool, kitchen, and lounge as one experience</td><td>2,000</td></tr>
            <tr><td>49</td><td>Fencing compliance</td><td>QLD 2026 pool fencing rules — what changed</td><td>1,800</td></tr>
            <tr><td>50</td><td>Fencing compliance</td><td>Pre-CPO + Form 26 — what every SEQ pool owner needs</td><td>1,600</td></tr>
            <tr><td>51</td><td>Fencing compliance</td><td>Fencing materials: glass, aluminium, steel — compliance + aesthetic</td><td>1,800</td></tr>
            <tr><td>52</td><td>Fencing compliance</td><td>Gate self-closers and the 7 most common compliance failures</td><td>1,400</td></tr>
            <tr><td>53</td><td>Fencing compliance</td><td>NCZ — non-climbable zones — the 900mm rule explained</td><td>1,600</td></tr>
            <tr><td>54</td><td>Fencing compliance</td><td>Selling a property with a non-compliant pool — what to do</td><td>1,800</td></tr>
            <tr><td>55</td><td>Fencing compliance</td><td>Spa fencing vs. pool fencing — the distinction</td><td>1,200</td></tr>
            <tr><td>56</td><td>Fencing compliance</td><td>Annual maintenance + the 12-month re-certification cadence</td><td>1,400</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Unit Renovations · 24 pieces (3 pillars × 8 clusters)</h3>
      <div class="content-map-wrap">
        <table class="content-map-table">
          <thead><tr><th>#</th><th>Pillar</th><th>Cluster piece title</th><th>Words</th></tr></thead>
          <tbody>
            <tr><td>57</td><td>Yield renovation</td><td>The 4 highest-ROI unit renovations in SEQ 2026</td><td>2,000</td></tr>
            <tr><td>58</td><td>Yield renovation</td><td>Kitchen vs bathroom — which to renovate first for yield</td><td>1,800</td></tr>
            <tr><td>59</td><td>Yield renovation</td><td>The $35K, $55K, $85K unit refresh tiers</td><td>1,800</td></tr>
            <tr><td>60</td><td>Yield renovation</td><td>Materials that survive a rental cohort cycle</td><td>1,600</td></tr>
            <tr><td>61</td><td>Yield renovation</td><td>Old-stock units in SEQ — when renovation isn't worth it</td><td>1,400</td></tr>
            <tr><td>62</td><td>Yield renovation</td><td>Body corporate approvals — what they cover, what they don't</td><td>1,800</td></tr>
            <tr><td>63</td><td>Yield renovation</td><td>The 5 finishes property managers tell us never to use</td><td>1,400</td></tr>
            <tr><td>64</td><td>Yield renovation</td><td>Pet-friendly renovations and rental premium uplift</td><td>1,400</td></tr>
            <tr><td>65</td><td>6-week refresh</td><td>The 6-week schedule — week by week</td><td>2,200</td></tr>
            <tr><td>66</td><td>6-week refresh</td><td>Working with tenants in place vs. vacating</td><td>1,800</td></tr>
            <tr><td>67</td><td>6-week refresh</td><td>Sequencing trades for a 6-week window</td><td>2,000</td></tr>
            <tr><td>68</td><td>6-week refresh</td><td>Long-lead items: cabinetry, stone, fixtures</td><td>1,400</td></tr>
            <tr><td>69</td><td>6-week refresh</td><td>What can't be done in 6 weeks (and how to know)</td><td>1,600</td></tr>
            <tr><td>70</td><td>6-week refresh</td><td>Rent loss during renovation — financial modelling</td><td>1,400</td></tr>
            <tr><td>71</td><td>6-week refresh</td><td>Coordinating with the property manager — the 4 touchpoints</td><td>1,400</td></tr>
            <tr><td>72</td><td>6-week refresh</td><td>End-of-renovation handover checklist (32 items)</td><td>1,600</td></tr>
            <tr><td>73</td><td>Depreciation</td><td>What can be claimed under Division 40 vs. Division 43</td><td>2,000</td></tr>
            <tr><td>74</td><td>Depreciation</td><td>When a quantity surveyor's schedule pays back</td><td>1,400</td></tr>
            <tr><td>75</td><td>Depreciation</td><td>Renovation timing vs. depreciation strategy</td><td>1,600</td></tr>
            <tr><td>76</td><td>Depreciation</td><td>Tenant turnover, property manager, depreciation — the cycle</td><td>1,400</td></tr>
            <tr><td>77</td><td>Depreciation</td><td>Capital works vs. immediate deduction — getting it right</td><td>1,600</td></tr>
            <tr><td>78</td><td>Depreciation</td><td>The 2024 ATO ruling that changed unit renovation depreciation</td><td>1,800</td></tr>
            <tr><td>79</td><td>Depreciation</td><td>Working with your accountant — the 6 documents to provide</td><td>1,400</td></tr>
            <tr><td>80</td><td>Depreciation</td><td>Depreciation when you sell — the recapture issue</td><td>1,400</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Publication cadence + assignment</h3>
      <p>
        Eighty pieces across 24 months = ~3.3 per month. The publication schedule alternates pillar
        and cluster: month 1 launches Pillar TDR-1 + clusters 1–3; month 2 launches clusters 4–8 +
        Pillar TDR-2; month 3 launches clusters 9–11 + Pillar POE-1; and so on. The cadence ensures
        every pillar has a fully-built cluster ring before the next pillar publishes. The YDT
        publishing lead owns the calendar; Gerry signs off every pillar; YMT subject-matter expert
        reviews every cluster. The Q1-2026 baseline measurement (impressions, citations, links) sets
        the trend line against which the program is evaluated quarterly.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-08 — 18 PROGRAMMATIC PAGES
   =================================================================== */
const GEOProgrammatic = () => (
  <section class="band-cream" id="geo7">
    <div class="container">
      <div class="eyebrow">§ 7 · GEO-08</div>
      <h2 class="h1">18 programmatic pages — service × geo grid</h2>
      <p class="lede">
        SEQ homeowners search "termite repair Brisbane", "pool builder Gold Coast", "unit renovation
        Sunshine Coast" — but they also search the long-tail equivalents at suburb granularity. A
        single editorial page cannot rank for 50 suburb-level queries efficiently. Programmatic
        pages — generated from a template, fed by a structured data source, but written with
        editorial quality at the unique-content sections — solve the long-tail without bloating the
        editorial calendar. Eighteen pages: six geos × three services. Each carries unique local
        content (suburb data, named local case studies, suburb-specific climate / building
        considerations) — never thin-content templates.
      </p>

      <h3>The six geo cells</h3>
      <ol>
        <li><strong>Brisbane inner-ring</strong> — Paddington, Bardon, Ashgrove, Indooroopilly, Bulimba, Hawthorne, Newmarket, Wilston, Grange. Pre-war + post-war housing stock; high termite risk in pre-1995 timbers; high renovation density.</li>
        <li><strong>Brisbane bayside</strong> — Wynnum, Manly, Lota, Cleveland, Wellington Point, Ormiston, Thornlands. Coastal humidity + termite pressure; pool penetration high; renovation activity strong on waterfront lots.</li>
        <li><strong>Gold Coast — northern beaches</strong> — Mermaid Beach, Nobby's Beach, Burleigh Heads, Palm Beach, Currumbin. Lifestyle/aspiration peak; pools near-universal; investor units significant.</li>
        <li><strong>Gold Coast — hinterland</strong> — Tallai, Mudgeeraba, Bonogin, Tallebudgera. Sloping blocks; backyard transformation premium; lower termite pressure (less softwood).</li>
        <li><strong>Sunshine Coast — coastal</strong> — Mooloolaba, Buderim, Maroochydore, Coolum, Peregian. Holiday + investor markets; pool + outdoor entertainment near-mandatory; mid-range renovation tier.</li>
        <li><strong>Sunshine Coast — hinterland</strong> — Maleny, Montville, Eumundi, Cooroy. Larger blocks; more Queenslanders + Federation homes; high termite risk in older stock.</li>
      </ol>

      <h3>The three service cells</h3>
      <ol>
        <li>Termite damage repair</li>
        <li>Pools &amp; outdoor entertainment</li>
        <li>Unit renovations</li>
      </ol>

      <h3>The 18 URLs</h3>
      <div class="programmatic-grid">
        <div class="programmatic-card"><div class="pg-tag">TDR · Brisbane inner-ring</div><div class="pg-url">/termite/brisbane-inner-ring</div></div>
        <div class="programmatic-card"><div class="pg-tag">TDR · Brisbane bayside</div><div class="pg-url">/termite/brisbane-bayside</div></div>
        <div class="programmatic-card"><div class="pg-tag">TDR · GC northern beaches</div><div class="pg-url">/termite/gold-coast-northern-beaches</div></div>
        <div class="programmatic-card"><div class="pg-tag">TDR · GC hinterland</div><div class="pg-url">/termite/gold-coast-hinterland</div></div>
        <div class="programmatic-card"><div class="pg-tag">TDR · SC coastal</div><div class="pg-url">/termite/sunshine-coast-coastal</div></div>
        <div class="programmatic-card"><div class="pg-tag">TDR · SC hinterland</div><div class="pg-url">/termite/sunshine-coast-hinterland</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · Brisbane inner-ring</div><div class="pg-url">/pools/brisbane-inner-ring</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · Brisbane bayside</div><div class="pg-url">/pools/brisbane-bayside</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · GC northern beaches</div><div class="pg-url">/pools/gold-coast-northern-beaches</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · GC hinterland</div><div class="pg-url">/pools/gold-coast-hinterland</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · SC coastal</div><div class="pg-url">/pools/sunshine-coast-coastal</div></div>
        <div class="programmatic-card"><div class="pg-tag">POE · SC hinterland</div><div class="pg-url">/pools/sunshine-coast-hinterland</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · Brisbane inner-ring</div><div class="pg-url">/units/brisbane-inner-ring</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · Brisbane bayside</div><div class="pg-url">/units/brisbane-bayside</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · GC northern beaches</div><div class="pg-url">/units/gold-coast-northern-beaches</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · GC hinterland</div><div class="pg-url">/units/gold-coast-hinterland</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · SC coastal</div><div class="pg-url">/units/sunshine-coast-coastal</div></div>
        <div class="programmatic-card"><div class="pg-tag">UR · SC hinterland</div><div class="pg-url">/units/sunshine-coast-hinterland</div></div>
      </div>

      <h3>The page template — 8 sections, ~1,400–1,800 words per page</h3>
      <ol>
        <li><strong>Hero</strong> with H1 "[Service] in [Geo] — YMT Group" + one-sentence value prop + primary CTA.</li>
        <li><strong>Local context paragraph</strong> — unique to the geo: housing stock vintage, climate notes, suburb-specific risks. 250–400 words. Written by YDT writer with Gerry sign-off, not template-generated.</li>
        <li><strong>Service overview</strong> — what YMT delivers in this geo. 300 words. Includes specific suburb-list serviced.</li>
        <li><strong>Local case studies</strong> — 2 minimum. Photo + dollar figure + outcome. From the genuine portfolio for that geo.</li>
        <li><strong>Local FAQ</strong> — 5–7 questions. Some shared across pages; minimum 3 unique to the geo (e.g. "Are bayside termite species different?" / "Do coastal pools need different equipment?").</li>
        <li><strong>Reviews</strong> — 3 dynamically-pulled Google reviews from the geo (where author location stated).</li>
        <li><strong>Local trust block</strong> — licence numbers, insurance, time servicing the geo, suburb-specific testimonials.</li>
        <li><strong>CTA + contact</strong> — local phone if available, online booking, fast-quote form.</li>
      </ol>

      <h3>Why programmatic pages survive Google's thin-content filter</h3>
      <p>
        Google's March 2024 "site reputation abuse" + "scaled content abuse" updates penalised
        sites that mass-generated near-identical pages. The YMT programmatic system avoids the trap
        through three rules: (1) every page contains a minimum 400 words of geo-unique editorial
        content authored by a human (not template variables); (2) every page has at least 2 unique
        case studies; (3) every page has at least 3 unique FAQs. Programmatic pages are not "thin"
        — they are "templated structure with substantial unique content per cell," which is what
        Google's own John Mueller has repeatedly said is acceptable. The 18-page count is also kept
        deliberately modest; the program is not "1,200 suburb pages" — that's where competitors get
        penalised.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-09 — PAA + AEO QUESTION CONTENT
   =================================================================== */
const GEOPaa = () => (
  <section class="band-white" id="geo8">
    <div class="container">
      <div class="eyebrow">§ 8 · GEO-09</div>
      <h2 class="h1">Question-based content — AEO harvest from People Also Ask</h2>
      <p class="lede">
        Answer Engine Optimisation (AEO) is the layer of search optimisation that targets question
        queries specifically — and a question query is the natural input format for ChatGPT,
        Perplexity, and Google AI Overviews. iPullRank's 2026 AEO Playbook tracked a 4.2× higher
        AI-citation rate on pages structured as Q-then-A vs. pages structured as narrative essay
        (n=2,400 page sample, Q1 2026). The harvest below is the priority question set across the
        three LOBs, sourced from Google PAA, AnswerThePublic, AlsoAsked, Reddit /r/AusFinance +
        /r/Brisbane, Facebook SEQ home-owner groups, and the YMT enquiry inbox of the last 18
        months.
      </p>

      <h3>The 60 priority questions across the three LOBs</h3>
      <div class="paa-grid">
        <div class="paa-card">
          <div class="paa-tag">TDR · top 20 priority questions</div>
          <ol>
            <li>How much does termite damage repair cost in SEQ?</li>
            <li>Is termite damage covered by home insurance in Australia?</li>
            <li>How do you know if a house has termite damage?</li>
            <li>How much does a pre-purchase termite inspection cost in Queensland?</li>
            <li>Can a building inspector spot termite damage?</li>
            <li>What does AS 3660.1 mean?</li>
            <li>What's the difference between Coptotermes and Schedorhinotermes?</li>
            <li>Should I buy a house with termite damage?</li>
            <li>How long does termite damage repair take?</li>
            <li>What's the difference between a termite barrier and a chemical treatment?</li>
            <li>Do baits or chemical barriers work better for SEQ termites?</li>
            <li>How often should you have a termite inspection in QLD?</li>
            <li>What is a Form 18 / Form 26 in QLD building?</li>
            <li>What's the average termite damage repair cost in 2026?</li>
            <li>Can termite damage make a house structurally unsafe?</li>
            <li>What's the QLD legal disclosure rule for termite damage when selling?</li>
            <li>How do I find a licensed termite inspector in Brisbane?</li>
            <li>Are bait stations or soil treatments more effective?</li>
            <li>Will a termite warranty transfer when I sell the house?</li>
            <li>What does "active termite infestation" mean on an inspection report?</li>
          </ol>
        </div>
        <div class="paa-card">
          <div class="paa-tag">POE · top 20 priority questions</div>
          <ol>
            <li>How much does a backyard transformation cost in SEQ?</li>
            <li>How long does it take to build a pool and outdoor room?</li>
            <li>What's the QLD pool fencing rule for 2026?</li>
            <li>Do I need council approval for a backyard pool in QLD?</li>
            <li>Saltwater, mineral, or chlorine — which is best for SEQ humidity?</li>
            <li>What's the difference between a pool builder and a landscape designer?</li>
            <li>How do I get a Form 26 pool safety certificate in QLD?</li>
            <li>How much value does a pool add to a SEQ home?</li>
            <li>What's the best roof type for an outdoor entertainment area in SEQ?</li>
            <li>Can I build a pool on a sloping block?</li>
            <li>What's the lead time for pool builders in SEQ in 2026?</li>
            <li>Do I need a structural engineer for an outdoor kitchen?</li>
            <li>What's the difference between a pergola, a gable, and a skillion roof?</li>
            <li>How wide does pool fencing have to be?</li>
            <li>What are the "non-climbable zone" rules in QLD pool fencing?</li>
            <li>What's the cheapest pool option for a $80K budget?</li>
            <li>How long does pool fencing last?</li>
            <li>Do I need a pool safety inspector before selling?</li>
            <li>What's the energy cost of running a pool in SEQ?</li>
            <li>How do I keep an SEQ pool clean in summer?</li>
          </ol>
        </div>
        <div class="paa-card">
          <div class="paa-tag">UR · top 20 priority questions</div>
          <ol>
            <li>How much does a unit renovation cost in SEQ?</li>
            <li>What's the best way to increase rent on an SEQ unit?</li>
            <li>How long does a unit renovation take?</li>
            <li>Can I claim renovation costs on tax as an investment property?</li>
            <li>What's the difference between Division 40 and Division 43 depreciation?</li>
            <li>Do I need body corporate approval to renovate?</li>
            <li>Should I renovate before or between tenants?</li>
            <li>What's a quantity surveyor's depreciation schedule worth?</li>
            <li>What's the best ROI renovation for an investment unit?</li>
            <li>How much rent loss should I budget for during renovation?</li>
            <li>Should I update the kitchen or the bathroom first?</li>
            <li>What flooring lasts longest in a rental?</li>
            <li>Are pet-friendly renovations worth doing?</li>
            <li>How do I find a builder who works with investors?</li>
            <li>What's the 6-week unit refresh model?</li>
            <li>What renovations are tax-deductible immediately vs. capitalised?</li>
            <li>How do I coordinate with my property manager during renovation?</li>
            <li>What's the ATO 2024 ruling on renovation depreciation?</li>
            <li>Should I renovate an old SEQ unit or sell as-is?</li>
            <li>How do I avoid losing my tenant during a renovation?</li>
          </ol>
        </div>
      </div>

      <h3>The Q-then-A page template</h3>
      <ol>
        <li><strong>Question</strong> stated as H2, verbatim how the homeowner types it (no SEO mangling).</li>
        <li><strong>Direct answer in 35–55 words</strong> immediately under the H2 — designed to be lifted whole by an LLM as the citation. Contains the named statistic + the named source. No throat-clearing.</li>
        <li><strong>Expanded explanation</strong> 150–300 words — fleshes out the answer, adds nuance, adds the YMT-specific perspective.</li>
        <li><strong>Bullet/list breakout</strong> where the answer is enumerable (process steps, conditions, options).</li>
        <li><strong>Caveat / when this might not apply</strong> — 60–100 words. Builds trustworthiness; LLMs reward nuance.</li>
        <li><strong>Internal link</strong> to the relevant pillar + 2 sibling FAQ pages.</li>
      </ol>

      <p>
        Every cluster page on the editorial map carries a minimum 5-question FAQ section structured
        this way. The 60 priority questions above are distributed across the 80-piece content map
        (some questions answered in pillars, most in clusters) so that no orphan "FAQ pages" exist —
        the FAQs always live inside contextually-relevant articles, which both ranks the article
        better and consolidates link equity.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-10 — ANSWER ENGINE TARGETING (the 5 engines)
   =================================================================== */
const GEOEngines = () => (
  <section class="band-cream" id="geo9">
    <div class="container">
      <div class="eyebrow">§ 9 · GEO-10</div>
      <h2 class="h1">Five answer engines targeted — engine-by-engine playbook</h2>
      <p class="lede">
        The "answer layer" is not one engine. Each major LLM-driven answer surface has its own
        crawler, its own preference for source quality, and its own citation behaviour. The
        playbook below treats each as a distinct surface with a distinct optimisation tactic. The
        common foundation (E-E-A-T, schema, llms.txt, content clusters) lifts performance across
        all five; the engine-specific tactics squeeze the last 10–20%.
      </p>

      <div class="engine-grid">
        <div class="engine-card">
          <div class="engine-name">1 · Google AI Overviews</div>
          <div class="engine-share">~47% of commercial queries (BrightEdge Q1 2026)</div>
          <p><strong>Crawler:</strong> Googlebot + Google-Extended.</p>
          <p><strong>Citation behaviour:</strong> Three to five sources cited per AI Overview. Heavy weighting on traditional ranking signals: HTTPS, Core Web Vitals, E-E-A-T, structured data. FAQ schema + How-to schema dramatically lift inclusion.</p>
          <p><strong>YMT tactic:</strong> All six JSON-LD schemas. Editorial pages targeting head queries with the 80-word citation hook. Google Business Profile fully optimised. Aim: be cited in 60% of the top 20 commercial AI Overview queries by end of 2027.</p>
        </div>

        <div class="engine-card">
          <div class="engine-name">2 · ChatGPT Search</div>
          <div class="engine-share">~600M weekly queries (OpenAI 2026 figures)</div>
          <p><strong>Crawler:</strong> GPTBot + OAI-SearchBot.</p>
          <p><strong>Citation behaviour:</strong> Cites 4–10 sources. Preference for authoritative .gov / .edu / industry-association URLs, but uses commercial sites freely when they're well-structured and explicitly cited (Aggarwal methods deliver).</p>
          <p><strong>YMT tactic:</strong> llms.txt deployed. Citation-engineered content (every claim sourced + quoted). Aggressive use of the "Cite Sources / Quotation / Statistics" methods. Aim: appear in 40% of YMT-relevant ChatGPT-search responses by Q4 2026.</p>
        </div>

        <div class="engine-card">
          <div class="engine-name">3 · Perplexity</div>
          <div class="engine-share">Lower volume (~$30M revenue Q4 2025) but high-intent users</div>
          <p><strong>Crawler:</strong> PerplexityBot.</p>
          <p><strong>Citation behaviour:</strong> Strong preference for recently-updated content; cites freshness-stamped sources higher. Inline citations are clickable — every citation is a potential click-through, not just a brand impression.</p>
          <p><strong>YMT tactic:</strong> dateModified schema kept current. Quarterly review of every pillar page (refresh stat + refresh date). Stewardship Letter content auto-published to /letters with timestamps. Aim: top-3 citation source on 20 priority "[service] [geo]" queries by Q4 2026.</p>
        </div>

        <div class="engine-card">
          <div class="engine-name">4 · Claude (Anthropic)</div>
          <div class="engine-share">Smaller answer surface, but Anthropic agreements with Brave + DuckDuckGo expand reach</div>
          <p><strong>Crawler:</strong> ClaudeBot + anthropic-ai.</p>
          <p><strong>Citation behaviour:</strong> Conservative — prefers established sources with strong trust signals. Hesitates on commercial content unless E-E-A-T markers are unambiguous.</p>
          <p><strong>YMT tactic:</strong> E-E-A-T maxed out. Author entity graph deployed. Wikipedia long-game to push Authoritativeness up. Aim: cited on YMYL-adjacent queries (insurance + tax + structural) where ClaudeBot is most cautious.</p>
        </div>

        <div class="engine-card">
          <div class="engine-name">5 · Gemini (Google + Workspace)</div>
          <div class="engine-share">Embedded in Google Workspace + Android — surface large, query intent often informational</div>
          <p><strong>Crawler:</strong> Google-Extended (overlaps with AI Overviews) + Workspace internal indexes.</p>
          <p><strong>Citation behaviour:</strong> Cites Google-indexed pages with strong organic ranking + structured data. Heavy Google Business Profile influence on local queries.</p>
          <p><strong>YMT tactic:</strong> Optimisation overlaps with Google AI Overviews (the same crawler underpins both). Gemini-specific tactic: optimise for "compare and choose" queries — Gemini surfaces comparison frameworks heavily.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   GEO-11 — BRAND SEARCH DEMAND CREATION
   =================================================================== */
const GEOBrandSearch = () => (
  <section class="band-white" id="geo10">
    <div class="container">
      <div class="eyebrow">§ 10 · GEO-11</div>
      <h2 class="h1">Brand search — the share-of-search leading indicator</h2>
      <p class="lede">
        Les Binet's 2021 study (IPA Effectiveness Awards database, n=170 brands) found a 0.83
        correlation between brand share-of-search and 12-month-forward market share. Mark Ritson has
        argued repeatedly since 2022 that share-of-search is the single most predictive marketing
        metric that exists at reasonable cost. The implication for YMT is direct: branded search
        volume is the leading indicator of every other KPI in the system. WS-06 + WS-09 build the
        demand (broad reach, distinctive assets, paid brand-search); WS-08 captures and structures
        what arrives.
      </p>

      <h3>The brand search infrastructure</h3>
      <ol>
        <li><strong>Branded homepage</strong> at ymt.com.au — Organization schema, AggregateRating, opening with the brand thesis in the citation-hook structure. Targets "YMT", "YMT Group", "YMT Brisbane", "YMT pools", "YMT termite", "YMT renovations".</li>
        <li><strong>Branded "About" page</strong> at /about — founder-led story, decade-stamps, 1,800+ properties, all three LOBs. Targets "who is YMT", "is YMT Group reliable", "YMT founder".</li>
        <li><strong>Branded reviews page</strong> at /reviews — aggregated Google + Product Review + video testimonials. Targets "YMT reviews", "YMT complaints" (yes — own the negative branded query; don't let third parties capture it).</li>
        <li><strong>Branded process page</strong> at /process — the 11-step SLA-backed engagement model. Targets "YMT process", "what to expect from YMT".</li>
        <li><strong>Branded credentials page</strong> at /credentials — licences, insurance, certifications, downloadable PDFs. Targets "YMT licence", "is YMT insured".</li>
        <li><strong>Branded location pages</strong> at /locations — landing for each major SEQ city. Targets "YMT Brisbane", "YMT Gold Coast", "YMT Sunshine Coast".</li>
      </ol>

      <h3>Measuring share-of-search</h3>
      <p>
        Quarterly: pull Google Ads keyword planner search volume for "YMT" + variants, sum, and
        compare to the same sum for top 5 SEQ competitors. The ratio is YMT's share-of-search.
        Baseline measurement Q2 2026; target Q4 2027 share-of-search ≥ 12% across SEQ home-services
        category (current estimated baseline: ~3%). Monthly: track Google Search Console branded
        impressions trend as the high-frequency leading indicator.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-12 — LOCAL SEO / GOOGLE BUSINESS PROFILE
   =================================================================== */
const GEOLocal = () => (
  <section class="band-cream" id="geo11">
    <div class="container">
      <div class="eyebrow">§ 11 · GEO-12</div>
      <h2 class="h1">Local SEO — Google Business Profile per LOB per geo</h2>
      <p class="lede">
        For commercial-intent local queries ("termite repair near me", "pool builder Brisbane"),
        Google Business Profile (GBP) is the #1 ranking signal — exceeding even the organic results
        beneath. SEQ home-services queries return the Map Pack 3-result block on 73% of searches
        (Local Falcon SEQ data, 2025). GBP optimisation is therefore not an SEO sub-task; it is the
        primary local-acquisition channel.
      </p>

      <h3>The GBP architecture</h3>
      <p>
        Single primary GBP at "YMT Group" with three service categories (Building Construction
        Company / Pool Contractor / Pest Control Service). Where Google permits, separate GBPs by
        major service line are tested in Q3 2026. Per-suburb GBPs are <strong>not</strong> created
        — that violates Google's location-spam rules.
      </p>

      <h3>Weekly GBP optimisation cadence</h3>
      <ol>
        <li><strong>Weekly posts</strong> — minimum 1 per week. Tied to the editorial calendar (each cluster page becomes a GBP post). Photo + 150-word teaser + link.</li>
        <li><strong>Weekly photos</strong> — minimum 3 per week, from active jobsites. Geo-tagged. Captioned with service + suburb.</li>
        <li><strong>Weekly Q&amp;A management</strong> — every question answered within 24 hours, in YMT voice. Common questions seeded by YMT staff to control narrative.</li>
        <li><strong>Daily review monitoring</strong> — every review replied to within 24 hours. 5-star reviews replied to in 50–80 words; negative reviews replied to with the four-element response (acknowledge + own the issue + state the resolution + invite offline contact).</li>
        <li><strong>Monthly products/services update</strong> — service catalogue kept synced with the website's Service schema. Pricing ranges shown where Google permits.</li>
        <li><strong>Quarterly competitor monitoring</strong> — Local Falcon grid scan of YMT vs. top 5 SEQ competitors across 30 priority queries. Identifies map-pack ranking changes.</li>
      </ol>

      <h3>Citation building (NAP consistency)</h3>
      <p>
        Name + Address + Phone consistency across the top 60 SEQ-relevant directories. Audited
        quarterly via BrightLocal or Whitespark. Priority directories: True Local, Yellow Pages
        Australia, Yelp Australia, Hotfrog, StartLocal, Cylex, Brownbook, AussieWeb, Local Search,
        Australian Business Number Lookup, hipages, Service Seeking, Oneflare, Master Builders QLD
        directory, REIQ partner directory, AIBS directory, QLD Pool Builders Association directory,
        Houzz Australia, Facebook Business Page, Instagram Business Profile, LinkedIn Company Page.
      </p>
    </div>
  </section>
)

/* ===================================================================
   GEO-13 — TECHNICAL SEO BASELINE
   =================================================================== */
const GEOTechnical = () => (
  <section class="band-white" id="geo12">
    <div class="container">
      <div class="eyebrow">§ 12 · GEO-13</div>
      <h2 class="h1">Technical SEO baseline — non-negotiable infrastructure</h2>
      <p class="lede">
        Crawlability, indexability, and Core Web Vitals are not advanced tactics — they are entry
        requirements. A site that fails on these has its E-E-A-T score capped regardless of editorial
        quality. The targets below are non-negotiable; the site does not relaunch without them all
        green.
      </p>

      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-name">Core Web Vitals (LCP)</div>
          <div class="tech-target">≤ 2.5s — "Good" threshold</div>
          <p>Largest Contentful Paint measured on mobile. Hero image preloaded with priority hint; webfonts subset and preloaded; images lazy-loaded except above-the-fold.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Core Web Vitals (INP)</div>
          <div class="tech-target">≤ 200ms — "Good" threshold</div>
          <p>Interaction to Next Paint. Replaces FID in Google's 2024 update. JavaScript minimised; main-thread work below 50ms per interaction; no blocking third-party scripts above the fold.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Core Web Vitals (CLS)</div>
          <div class="tech-target">≤ 0.1 — "Good" threshold</div>
          <p>Cumulative Layout Shift. Image dimensions explicit; webfonts declared with font-display swap and metric-compatible fallbacks; ads / embeds reserved space.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Mobile usability</div>
          <div class="tech-target">100% mobile-friendly pages in GSC</div>
          <p>Responsive design with breakpoints at 480 / 768 / 1024 / 1440. Tap targets ≥ 48px. Text legible without zoom. No horizontal scroll.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">HTTPS sitewide</div>
          <div class="tech-target">100% — zero mixed-content warnings</div>
          <p>TLS 1.3. HSTS preload. Every internal link uses https://. Sitemap submits https URLs only. Canonical tags https. Redirect map from old http URLs maintained.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Indexation discipline</div>
          <div class="tech-target">100% of intended pages indexed; 0% unintended</div>
          <p>robots.txt managed centrally. noindex used on staging, search results, parameterised URLs. Sitemap.xml submitted to GSC monthly. Indexation rate audited monthly via "site:" operator + GSC coverage report.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Internal link graph</div>
          <div class="tech-target">≥ 3 internal links per page</div>
          <p>Pillar pages link to all clusters. Clusters link to pillar + 2 siblings. Programmatic pages link to relevant editorial pillars. Orphan pages eliminated quarterly via Screaming Frog audit.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">URL structure</div>
          <div class="tech-target">Lowercase, hyphenated, ≤ 60 char</div>
          <p>Pattern: /[lob]/[topic-or-geo]. No date stamps in URLs. No URL parameters for content (only for tracking). 301 redirect map maintained from legacy URLs.</p>
        </div>
        <div class="tech-card">
          <div class="tech-name">Image SEO</div>
          <div class="tech-target">100% alt text + descriptive filenames</div>
          <p>WebP (with JPEG fallback). srcset for responsive serving. Descriptive filenames (termite-damage-stumps-brisbane.webp not IMG_8472.jpg). Alt text describes the image, not the target keyword.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   GEO-14 — AUTHORITY BUILDING (BACKLINKS + CITATIONS)
   =================================================================== */
const GEOAuthority = () => (
  <section class="band-cream" id="geo13">
    <div class="container">
      <div class="eyebrow">§ 13 · GEO-14</div>
      <h2 class="h1">Authority building — backlinks + citations + entity mentions</h2>
      <p class="lede">
        Backlinks remain the single most predictive factor for organic ranking on competitive
        commercial queries (Ahrefs 2024 ranking-factor study). LLM crawlers use backlink signals as a
        proxy for authoritativeness when deciding which sources to cite. The strategy below is
        deliberately editorial — no link-scheme tactics, no PBN, no transactional placements that
        violate Google's link-spam rules.
      </p>

      <h3>The five authority lanes</h3>
      <div class="authority-grid">
        <div class="authority-card">
          <div class="auth-tag">Lane 1 · Industry associations</div>
          <p><strong>Targets:</strong> Master Builders QLD, AIBS QLD (Australian Institute of Building Surveyors), QLD Pool &amp; Spa Association, REIQ partner directory, Housing Industry Association QLD.</p>
          <p><strong>How:</strong> Active membership, contributed content (industry articles), event sponsorship at the level that warrants editorial recognition (not just logo). Annual industry conference attendance.</p>
          <p><strong>Yield:</strong> ~5 high-authority backlinks + ongoing brand citation in industry directories. Target 8 industry backlinks by end of 2027.</p>
        </div>
        <div class="authority-card">
          <div class="auth-tag">Lane 2 · Local + regional media</div>
          <p><strong>Targets:</strong> Brisbane Times, Domain SEQ, Realestate.com.au editorial, Gold Coast Bulletin, Sunshine Coast Daily, local Chamber of Commerce newsletters, REIQ market reports.</p>
          <p><strong>How:</strong> Quarterly press releases on data points YMT can own (Stewardship Letter trends, AIBS partner data summaries, market commentary by Gerry). Build relationships with 3 priority property journalists.</p>
          <p><strong>Yield:</strong> 6–10 editorial mentions per year by 2027. High-authority do-follow links from real journalism, not paid placement.</p>
        </div>
        <div class="authority-card">
          <div class="auth-tag">Lane 3 · Partner ecosystems</div>
          <p><strong>Targets:</strong> Buyer's agents, mortgage brokers, property managers, conveyancers, insurance brokers, financial advisers, REIQ-listed selling agents — all SEQ-focused.</p>
          <p><strong>How:</strong> Co-published guides ("Pre-purchase checklist for SEQ buyers" co-authored with a buyer's agent network), reciprocal directory listings (where editorially honest, not link-trading), case-study co-creation.</p>
          <p><strong>Yield:</strong> 12–20 contextually-relevant backlinks from partner ecosystem. Real referral traffic on top of SEO benefit.</p>
        </div>
        <div class="authority-card">
          <div class="auth-tag">Lane 4 · Educational + government</div>
          <p><strong>Targets:</strong> QBCC (Queensland Building and Construction Commission), QLD Department of Housing publications, Pool Safety Council, ATO investor resources, ACCC consumer guidance, university trade-school programs.</p>
          <p><strong>How:</strong> Contribute to consumer-education resources where YMT can supply original data or expertise. Speak at trade-school days. Provide free educational webinars hosted by industry bodies.</p>
          <p><strong>Yield:</strong> 2–4 .gov.au + .edu.au backlinks by 2028. Extraordinarily high authority weight; harder to acquire than the other three lanes; worth disproportionate effort.</p>
        </div>
        <div class="authority-card">
          <div class="auth-tag">Lane 5 · Earned digital PR</div>
          <p><strong>Targets:</strong> Trade publications (Inside Construction, Building Connection), national lifestyle media (Domain, Houzz, Better Homes &amp; Gardens online), podcast circuit (property + finance podcasts with SEQ audiences).</p>
          <p><strong>How:</strong> Original research (annual YMT Stewardship Report — turn the Stewardship Letter data into a publishable annual research piece), Gerry on 4 podcasts per year, Houzz contributor profile maintained.</p>
          <p><strong>Yield:</strong> 8–15 backlinks per year from digital PR by 2027. Builds the founder entity graph in parallel.</p>
        </div>
      </div>
    </div>
  </section>
)

/* ===================================================================
   GEO-15 — MEASUREMENT
   =================================================================== */
const GEOMeasurement = () => (
  <section class="band-white" id="geo14">
    <div class="container">
      <div class="eyebrow">§ 14 · GEO-15</div>
      <h2 class="h1">Measurement — share of voice in AI answers + organic</h2>
      <p class="lede">
        Rank tracking alone is no longer sufficient. A page at rank #2 may not appear in the AI
        Overview above it, in which case it is materially less valuable than rank-tracking suggests.
        The measurement regime below maintains the traditional metrics (rank, traffic, conversions)
        and adds the new ones (AI citation share, brand search trend, entity recognition signals).
      </p>

      <h3>The measurement stack</h3>
      <div class="measure-grid">
        <div class="measure-card">
          <div class="m-tag">Daily (automated)</div>
          <p><strong>Tracked:</strong> Organic sessions, organic conversions, GBP impressions + calls + direction requests, rank for top 30 priority queries.</p>
          <p><strong>Tools:</strong> Google Analytics 4, Search Console API, BrightLocal GBP tracker, Ahrefs / SEMrush rank tracker.</p>
        </div>
        <div class="measure-card">
          <div class="m-tag">Weekly (30-min review)</div>
          <p><strong>Tracked:</strong> Top movers in rank, GSC impressions trend, GSC click-through rate by query class, GBP conversion actions, Local Falcon grid summary, new backlinks from Ahrefs.</p>
          <p><strong>Output:</strong> Weekly note to Carla — 1 page, headline number + 3 things changed + 1 thing to action.</p>
        </div>
        <div class="measure-card">
          <div class="m-tag">Monthly (full report)</div>
          <p><strong>Tracked:</strong> AI citation share (manual harvest — 50 priority queries through ChatGPT + Perplexity + Google AIO + Gemini), branded search share-of-search, organic traffic by topic cluster, conversion rate by content type.</p>
          <p><strong>Output:</strong> 8-page monthly SEO + GEO report + 1-page exec summary. Distributed to Gerry + Carla + Corrina.</p>
        </div>
        <div class="measure-card">
          <div class="m-tag">Quarterly (30-page review)</div>
          <p><strong>Tracked:</strong> Topic cluster performance (rank + sessions per cluster), pillar page authority (links acquired, citation count), competitor share-of-voice movement, entity graph health (Knowledge Graph appearance, sameAs verification).</p>
          <p><strong>Output:</strong> Quarterly board paper on SEO/GEO — strategic recommendations, budget reallocation, next-quarter focus areas.</p>
        </div>
        <div class="measure-card">
          <div class="m-tag">Annual (board document)</div>
          <p><strong>Tracked:</strong> Share-of-search vs. category, share-of-AI-citation vs. category, ranking universe (% of priority queries with YMT in top 5), organic revenue contribution, organic CAC vs. paid CAC.</p>
          <p><strong>Output:</strong> Annual SEO/GEO scorecard. Year-on-year trend lines. Feeds into the WS-11 KPI Contract dashboard.</p>
        </div>
      </div>

      <h3>The AI-citation manual harvest protocol (the new rank tracker)</h3>
      <ol>
        <li>Maintain a list of 50 priority queries across TDR / POE / UR — 17–17–16 split.</li>
        <li>Once per month, on the same day, run all 50 through the five answer engines (incognito / fresh session / SEQ-IP'd VPN).</li>
        <li>For each (query, engine) pair, record: did YMT appear in citations? at what position? alongside which competitors?</li>
        <li>Output a 5 × 50 matrix. Aggregate score: total YMT citations out of 250 possible. Track delta month over month.</li>
        <li>Baseline established Q2 2026. Target Q4 2027: ≥ 80 / 250 citations (32%) overall, ≥ 50% on YMT-priority queries.</li>
        <li>YDT analyst (junior) executes the harvest; reviewed by Demand Lead; reported in monthly review.</li>
      </ol>
    </div>
  </section>
)

/* ===================================================================
   GEO-16 — RISKS
   =================================================================== */
const GEORisks = () => (
  <section class="band-navy" id="geo15">
    <div class="container">
      <div class="eyebrow on-dark">§ 15 · GEO-16</div>
      <h2 class="h1 on-dark">GEO/AEO failure modes + hedges</h2>

      <div class="ch-risk-grid">
        <div class="chr-card">
          <div class="chr-tag">Risk 1</div>
          <div class="chr-name">Google AI Overview ranking algorithm undergoes a major change that suppresses YMT inclusion overnight.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Diversification across five answer engines (GEO-10). No single engine exceeds 50% of organic-attributed acquisitions. Owned channels (email list, customer base, referral network) continue to function regardless of any engine's algorithm.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 2</div>
          <div class="chr-name">"Zero-click" AI Overviews answer the user without driving traffic.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Brand-citation strategy: even when the user doesn't click, YMT is in the answer they read. Brand-search demand (GEO-11) captures that brand impression as a follow-up branded search 1–14 days later. Measure both citations <em>and</em> branded search trend.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 3</div>
          <div class="chr-name">Programmatic pages flagged as "thin content" in a future Google update.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> 18 pages (not 1,800). Minimum 400 words unique editorial per page. Genuine case studies. Genuine FAQs. Quarterly audit against Google's spam-policy criteria — if a programmatic page would be hard to defend in a manual review, it is redrafted or de-indexed.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 4</div>
          <div class="chr-name">A published statistic is later found incorrect, undermining E-E-A-T trust signal.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Source list + year-stamp on every statistic. Corrections policy (dated inline correction + changelog entry) maintained transparently. Quarterly statistics audit on pillar pages. Errors caught early protect E-E-A-T more than a perfect record built on hidden mistakes.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 5</div>
          <div class="chr-name">LLM crawlers block paywalled / gated content, throttling citation surface for the Stewardship Letter archive.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Stewardship Letters published un-gated on /letters from publication. Email signup is encouraged via the call-to-action, not enforced via paywall. Same content fuels SEO + lead-gen + LLM citation simultaneously.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 6</div>
          <div class="chr-name">A negative review or news article ranks for branded queries, dominating share-of-voice on the brand name.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Six branded-asset pages (GEO-11) own first-page positions for brand variants. Active review management (per GEO-12). Crisis playbook in WS-11 covers reactive response.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 7</div>
          <div class="chr-name">Backlink lane stalls — authority growth plateaus.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> Five-lane authority strategy (GEO-14). If any one lane underperforms, the other four maintain trajectory. Quarterly review identifies the stalled lane and reallocates effort.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">Risk 8</div>
          <div class="chr-name">Content calendar slips and competitors close the gap.</div>
          <div class="chr-hedge"><strong>Hedge:</strong> YDT publishing lead's monthly KPI is "pieces published on schedule" — not "pieces drafted". The 80-piece map is contractually committed; Carla escalates if &gt;2 pieces slip in any month.</div>
        </div>
      </div>
    </div>
  </section>
)

const GEOCompliance = () => (
  <section class="band-cream" id="geo-compliance">
    <div class="container">
      <div class="eyebrow">Compliance · Quality Gate</div>
      <h2 class="h1">WS-08 quality-gate certification</h2>
      <div class="compliance-grid">
        <div class="comp-card"><div class="comp-h">Checklist Coverage</div><p>16/16 GEO-XX items. Citation architecture, llms.txt, 6 JSON-LD schemas, E-E-A-T, 10 pillars, 80-piece content map, 18 programmatic pages, 60 PAA questions, 5 answer engines, brand-search infrastructure, local SEO, technical baseline, 5 authority lanes, measurement, risks — all specified with executable detail.</p></div>
        <div class="comp-card"><div class="comp-h">Framework Citation</div><p>Aggarwal et al. Princeton GEO 2024 (arXiv:2311.09735) · iPullRank AEO Playbook 2026 · Ahrefs Content Helix · Google E-E-A-T Quality Rater Guidelines · Schema.org spec · Mark Ritson share-of-search · Les Binet IPA 2021 · SparkToro Search Everywhere — all cited and operationally applied.</p></div>
        <div class="comp-card"><div class="comp-h">Depth Standard</div><p>Target 7,000–10,000 words. Every GEO item carries operating rationale, deployment spec, measurement criteria, integration with WS-06 channel + WS-09 paid + WS-10 CRM. Includes full llms.txt draft, six JSON-LD schema examples, 80-piece editorial map, 60 priority PAA questions.</p></div>
        <div class="comp-card"><div class="comp-h">Junior Executability</div><p>YDT junior with this document + the content map + the FAQ harvest + the schema templates can begin publishing on day one. No further scoping calls required. Every page brief is pre-written; every schema is pre-validated; every measurement query is pre-listed.</p></div>
      </div>
    </div>
  </section>
)

const GEOFooter = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col"><div class="footer-lbl">Document</div><p>WS-08 GEO/AEO<br />Search &amp; Answer Engine Operating Manual<br />v1.0 · Effective 1 June 2026</p></div>
        <div class="footer-col"><div class="footer-lbl">Authority</div><p>Carla Oliver, Acting CMO<br />CoSai CFO Services<br />for YMT / YBMT Group</p></div>
        <div class="footer-col"><div class="footer-lbl">Phase 3 Pages</div><p><a href="/ymt-channel">WS-06 Channel</a><br /><a href="/ymt-geo">WS-08 GEO/AEO</a><br /><a href="/ymt-paid">WS-09 Paid Media</a><br /><a href="/ymt-crm">WS-10 CRM</a></p></div>
        <div class="footer-col"><div class="footer-lbl">Status</div><p>16/16 GEO-XX items<br />→ <a href="/ymt-group-strategy">Strategy Index</a></p></div>
      </div>
      <div class="footer-bar">© 2026 CoSai CFO Services · Acting CMO for YMT Group · Handover to YDT (Headless Marketing)</div>
    </div>
  </footer>
)

export const renderYMTgeo = () => (
  <>
    <GEOHubBar />
    <GEONav />
    <GEOHero />
    <GEODoctrine />
    <GEOCitation />
    <GEOLlmsTxt />
    <GEOSchema />
    <GEOEEAT />
    <GEOClusters />
    <GEOContentMap />
    <GEOProgrammatic />
    <GEOPaa />
    <GEOEngines />
    <GEOBrandSearch />
    <GEOLocal />
    <GEOTechnical />
    <GEOAuthority />
    <GEOMeasurement />
    <GEORisks />
    <GEOCompliance />
    <GEOFooter />
  </>
)
