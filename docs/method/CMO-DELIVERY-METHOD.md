# CoSai CMO Delivery Method — LOCKED v1.0

**Prepared by:** CoSai CFO Services (acting CMO)
**For:** YDT (Corrina McGowan, CEO — headless marketing agency)
**Approved by:** Carla Oliver (MBA/CPA/CIMA), CoSai
**Date locked:** 2026-06-04
**Status:** 🔒 LOCKED — do not modify without Carla's written approval

---

## PURPOSE

This document defines what "deployment-ready marketing mix content" means when CoSai (acting CMO) delivers a Go-to-Market kit to YDT (headless agency). It is the **definition of done** for every LOB strategy paper produced under the YBMT/YMT engagement.

A deliverable is **NOT complete** until all 12 pillars below are present at the specified depth.

---

## CORE DEFINITION

> Deployment-ready marketing mix content means every asset is **written, structured, sized, and instrumented** so that YDT can take it, paste it into the marketing infrastructure tools they already use, and switch on a working revenue engine **within 14 days** — with no creative ambiguity, no missing copy, no "we'll figure that out later."

It is the difference between **strategy** ("we should run Google Ads") and **deliverable** ("here are 18 ad variants, written, with assets, headlines, descriptions, sitelinks, callouts, structured snippets, bid strategy, budget split, and the Looker Studio template — load it Monday").

---

## THE 12-PILLAR INVENTORY

Every LOB Go-to-Market paper (Pools · Termite · Units) MUST include all 12 pillars at the depth specified.

### PILLAR 1 — BRAND IDENTITY KIT
**Deployable into:** Figma + brand.yml + Hono CSS
- Sub-brand name + tagline (locked, copyable)
- Brand promise statement (1 sentence)
- Positioning statement (Target · Need · Category · Differentiator · Outcome)
- Voice & tone guide (Do/Don't with 6+ example phrases each)
- 5-7 Distinctive Brand Assets codified (per Ehrenberg-Bass)
- Color palette (hex/RGB/CMYK + usage ratios)
- Typography stack (display + body + sizes + line-heights + letter-spacing)
- Logo lockup direction (primary · secondary · footer · favicon · social avatar)
- Photography style brief
- Video style brief (camera language · pacing · audio mnemonic)
- Iconography system
- CSS variables file ready to paste into Hono `/static/style.css`

### PILLAR 2 — WEBSITE COPY KIT
**Deployable into:** Hono / WordPress / Webflow
- Hub page hero copy (headline · sub · 4 trust signals · 2 CTAs)
- "Why a specialist" section (4 trust pillars with proof)
- Materials/scope/services table (4-tier comparison)
- Compliance/credentials authority section
- Process section (5-step build, copy per step)
- 3 regional landing pages (Brisbane · Gold Coast · Sunshine Coast — full copy)
- 45 programmatic suburb pages spec (Hono template + data structure)
- Quote page (5-field form, microcopy, trust signals)
- Gallery page (alt text, captions, project details)
- About/Team page (director bios, story arc)
- FAQ section (15 questions)
- Footer copy + 404 + thank-you + error states
- Meta titles + descriptions (every page, under 60/155 chars)
- Open Graph + Twitter Card metadata

### PILLAR 3 — LEAD MAGNET KIT
**Deployable into:** PDF design + email automation
- Lead magnet name + cover design brief
- Full table of contents (8 chapters with synopsis)
- Chapter outlines (bullet points per chapter)
- 5 embedded CTAs with anchor points
- Cost calculator interactive spec (if applicable)
- Landing page copy (hero · benefits · social proof · form · privacy)
- Auto-delivery email (subject + preview + body + signature)
- Thank-you page copy + delivery sequence
- Lead-magnet-specific Meta ad creative (3 variants)

### PILLAR 4 — SEO + GEO + AEO CONTENT ENGINE
**Deployable into:** Hono + Search Console + llms.txt
**This is the 2026 SEO playbook — not 2021 keyword stuffing.**

#### 4A. Foundation (technical)
- `llms.txt` file (AI engine prioritisation, drop into Hono root)
- `robots.txt` optimised for AI crawlers
- `sitemap.xml` with priority weighting
- Schema markup JSON-LD templates: LocalBusiness · Service · Product · FAQ · HowTo · Review · AggregateRating · BreadcrumbList · Article · Person (E-E-A-T)
- Entity-based SEO setup: Wikidata draft entry · Google Knowledge Panel · brand entity NAP across 50 directories

#### 4B. Content (rankable + AI-citable)
- 5 pillar pages outlined (long-form, answer-first, 2,500+ words each)
- 15 cluster blog posts with full briefs (titles · meta · H2s · word count · entities · internal links)
- 3 comparison tables (AI engines cite tables 2.3× more)
- 45 programmatic suburb pages (1 template + populated data JSON)
- 8 "answer pages" for AI Overview targeting (40-60 word direct answers)

#### 4C. Off-page (AI engine seeding)
- 20 Reddit/Quora seed posts drafted (AI engines train on these)
- 15 industry directory submissions
- 5 guest post pitches for SEQ home/lifestyle publications
- Press release template

### PILLAR 5 — GOOGLE ADS DEPLOYMENT KIT
**Deployable into:** Google Ads Editor (CSV import-ready)
- Account structure CSV importable
- 3 campaigns × 4 ad groups (12 ad groups with names, themes, geo)
- Keywords per ad group: 15-25 with match type, intent tier, expected CPC
- Negative keyword list (50-100 negatives)
- Responsive Search Ads: 15 headlines (max 30 char) + 4 descriptions (max 90 char) per ad group
- Sitelink extensions (6 sitelinks)
- Callout extensions (10 callouts)
- Structured snippets (Services · Brands · Highlights)
- Image extensions (4 per ad group, 1200×1200 + 1200×628)
- Call extension + location extension
- Smart bidding strategy spec (Target CPA · target value · learning period)
- Budget pacing model (monthly $ → daily $ → expected leads)
- Conversion tracking spec (events, values, attribution)
- Looker Studio dashboard template

### PILLAR 6 — META ADS DEPLOYMENT KIT
**Deployable into:** Meta Ads Manager
- 3 audience layers fully defined (Cold · Lookalike · Retargeting) with size estimates
- 6 ad sets (2 per audience layer)
- 18 ad creative concepts (6 per layer × 3 variations)
- Ad copy per variant: primary text (125 char) · headline (40 char) · description (30 char) · CTA
- 6 video ad scripts with shot lists (3 vertical 9:16 + 3 horizontal 16:9 + 3 square 1:1)
- 6 static image briefs (composition · subject · copy overlay · brand stamp)
- 6 carousel ad briefs (5 slides each)
- Pixel + Conversions API setup spec (events, parameters, deduplication)
- Budget pacing model + bid strategy
- A/B test plan (weeks 1, 2, 4, 8)
- Creative refresh cadence

### PILLAR 7 — EMAIL LIFECYCLE KIT
**Deployable into:** Klaviyo / Mailchimp / HubSpot
**Behaviour-triggered, not time-based.**

#### 9 Behaviour-Triggered Flows (every email fully written):
1. Welcome flow (3 emails after first signup/lead magnet)
2. Browse abandonment (2 emails, high-value page viewed but no action)
3. Quote-requested (5 emails — pre-call prep + objection-handling)
4. Quote-stale (3 emails — quote viewed but no decision in 14 days)
5. Post-quote nurture (5 emails — social proof + scarcity + final offer)
6. Won-job onboarding (4 emails — set expectations + share excitement)
7. In-build experience (3 emails — milestones + reassurance + reviews)
8. 12-month follow-up (1 email — re-engagement + referral + review request)
9. Win-back (3 emails — for past leads who never converted)

#### Per email:
- Subject line (4 variants for A/B test)
- Preview text
- Body copy (full HTML-friendly)
- CTA copy + link destination
- Send timing trigger
- Personalisation tokens
- Mobile preview check

#### Plus:
- Broadcast email templates (4: announcement · case study · seasonal · educational)
- Email design template (header · body · CTA · footer · unsubscribe)
- Segmentation logic (tag/move rules between flows)
- Suppression rules (when NOT to send)
- Benchmarks per flow (open % · CTR · conversion expected)

### PILLAR 8 — SALES ENABLEMENT KIT
**Deployable into:** HubSpot / Pipedrive + handed to estimator
**This is the F1→F2 handoff. Critical.**
- Inbound phone script (greeting · qualification · discovery · close)
- Discovery questions (20 questions ranked by importance + objection-revealing power)
- Lead qualification matrix (A/B/C/D scoring criteria + actions per tier)
- 5 objection-handling scripts ("too expensive" · "thinking about it" · "checking with spouse" · "got another quote" · "not the right time")
- Voicemail script (15-second callback-getter)
- Follow-up sequence (1hr · 24hr · 3-day · 7-day · 14-day)
- Quote presentation template (PowerPoint/Slides + PDF)
- Quote follow-up scripts (3 touch points)
- Email templates for estimators (8: post-call · quote sent · checking in · site visit · contract ready · etc.)
- CRM field requirements (source · suburb · trigger event · project type · budget tier · timing · qualification score · attribution path)
- Quality scorecard (how to rate each lead handoff)
- Estimator handoff SLA (speed-to-call · speed-to-quote · win-rate by source)

### PILLAR 9 — SOCIAL CONTENT ENGINE
**Deployable into:** Buffer / Later / Meta Business Suite
- 90-day content calendar (full grid: date · platform · pillar · caption · hashtags · brief · CTA · expected engagement)
- 5 content pillars with % allocation (40% project showcase · 25% education · 15% behind-scenes · 10% local lifestyle · 10% testimonials)
- 72 individual posts written (36 Instagram + 24 Facebook + 12 LinkedIn over 90 days)
- Per post: caption (hooks + body + CTA) · hashtag set (3 broad + 5 niche + 3 hyperlocal) · image/video brief
- Reel/Short scripts (24 scripts, 8 per month × 3 months)
- Carousel post briefs (12 carousels with slide-by-slide outlines)
- Stories templates (8 reusable: poll · quiz · countdown · BTS · before-after · review · question box · link sticker)
- Hashtag bank (50 hashtags categorised: broad / niche / hyperlocal / branded / trending)
- Engagement playbook (10 communities to engage in, what to say, cadence)
- UGC + repost protocol (permission templates, attribution)
- Crisis comms templates

### PILLAR 10 — PARTNERSHIPS & REFERRAL KIT
**Deployable into:** HubSpot Partner Portal + Print

#### 10A. Customer Referral Engine
- Post-job referral activation email (sent day 14 after handover)
- Tell-a-friend landing page copy + form
- Referral reward structure (referrer + referee both rewarded)
- Branded "Card" template (digital + printable)
- Tracking system spec (referral source codes in CRM)
- Quarterly top-referrer recognition program

#### 10B. Trade Partner Kit (Architects / Pool Builders / Designers / Real Estate / Insurance / PMs)
- 30-target partner hit list (named businesses, rationale per LOB)
- Partner outreach email sequence (5 emails)
- Partner-facing brochure copy (4-pager)
- Co-branded marketing materials template
- Commission structure + terms
- Partner onboarding kit (training videos · brand guidelines · co-marketing budget)
- Partner CRM segment + tracking spec

### PILLAR 11 — PRINT & PHYSICAL TOUCHPOINT KIT
**Deployable into:** Print shop
- A4 double-sided brochure (full copy + InDesign-ready layout brief)
- DL flyer for letterbox drops (copy + design brief)
- Business card design brief (with QR code linking to LOB page)
- Yard sign template (during build) with QR to project page
- Vehicle decal copy + layout brief
- Project completion photo book (premium leave-behind)
- Welcome kit physical contents (for won jobs)
- Suburb-specific letterbox drop A5 cards (45 variants from 1 template)
- Print quality + paperstock specifications
- QR code system linking print → trackable landing pages

### PILLAR 12 — INSTRUMENTATION & KPI KIT
**Deployable into:** GA4 + Looker Studio + Slack
**This is where F1 marketing flows into F2 estimating and F3 finance.**

#### 12A. Tracking infrastructure
- GA4 setup spec (events · parameters · conversions · audiences · custom dimensions)
- Server-side tracking spec (iOS17+ resilience)
- UTM parameter taxonomy (consistent across all channels)
- CRM field requirements (every lead carries to Estimating)
- Call tracking spec (CallRail dynamic number insertion)
- Form-tracking spec (every form field captured)
- Conversion API setup (Meta + Google + LinkedIn)

#### 12B. Reporting (the dashboards)
- Daily tactical dashboard (Looker Studio, 6 widgets: spend · clicks · leads · CPL · close % · revenue)
- Weekly performance dashboard (Looker Studio, 12 widgets, channel-level)
- Monthly strategic dashboard (brand health · share of voice · pipeline · close rates · cohort retention)
- Quarterly board dashboard (F1→F2→F3 view for Carla + Gerry + Corrina)

#### 12C. The F1→F2→F3 Data Contract
- **F1 (Marketing) → F2 (Estimating):** exact field list, freshness SLA, quality scorecard
- **F2 (Estimating) → F1:** quote velocity · win rate by source · revenue per lead source
- **F2 (Estimating) → F3 (Finance):** quote pipeline · expected close month · GPM expectation
- **F3 (Finance) → F1+F2:** actual revenue · actual GPM · LTV by source · CAC payback by source
- KPIs locked per gate with target ranges and red/amber/green thresholds

#### 12D. The decision rhythm
- Daily 15-min standup (what to look at, what to escalate)
- Weekly 60-min performance review (agenda + dashboard set)
- Monthly 90-min strategy review (agenda + dashboard set)
- Quarterly board pack (template + content owners)

---

## DELIVERABLE STRUCTURE (per LOB GTM paper)

Each LOB paper (`/pools-gtm`, `/termite-gtm`, `/units-gtm`) follows this structure:

```
§ 1. The Opportunity (1 page — market · buyer · moment)
§ 2. The Positioning (1 page — category · tagline · promise · proof)
§ 3. The Customer (1 page — 4 Job Stories · triggers · fear map)
§ 4. The Marketing Mix (THE BULK — Pillars 1–11 deployable content)
§ 5. The Funnel Contract (F1 → F2 → F3 data spec + KPIs)
§ 6. The 90-Day Roadmap (week-by-week, owner, KPI, evidence)
§ 7. The Investment Tiers (Starter / Growth / Aggressive — costed)
▸ APPENDIX A — Strategic Foundations (plain-English thought-leadership summary for Corrina/Gerry)
▸ APPENDIX B — Reference Library (full citations with codes)
```

**The bulk of the document is ready-to-deploy content. The strategy frames it. References sit at the back for leadership reference.**

---

## REFERENCE LIBRARY (locked v2 — 2026 SEO refresh)

### Tier 1 — Foundational (cited in every paper)
- `[BS-HBG]` Byron Sharp — How Brands Grow Vol 1+2 (2010, 2015)
- `[JR-DBA]` Jenni Romaniuk — Building Distinctive Brand Assets (2018)
- `[BF-LSI]` Binet & Field — The Long and the Short of It (2013, 2024 update)
- `[DK-TFS]` Daniel Kahneman — Thinking, Fast and Slow (2011)
- `[RC-INF]` Robert Cialdini — Influence (1984, rev. 2021, 7 principles inc. Unity)
- `[CC-JTBD]` Clayton Christensen — Competing Against Luck (2016)
- `[BM-DSS]` Bob Moesta — Demand-Side Sales 101 (2020)

### Tier 2 — Tactical
- `[PB-CAT]` Ramadan et al — Play Bigger: Category Design (2016)
- `[MN-BG]` Marty Neumeier — The Brand Gap (2003, rev. 2016)
- `[AD-OA]` April Dunford — Obviously Awesome (2019)
- `[AH-OFR]` Alex Hormozi — $100M Offers / Value Equation (2021)
- `[CV-NSD]` Chris Voss — Never Split the Difference (2016)
- `[BE-EIS]` Eisenberg & Eisenberg — Waiting for Your Cat to Bark (2006, 4 modalities)

### Tier 3 — Modern Growth (2026 SEO refresh)
- `[WBD-BOW]` Jacco van der Kooij — Winning by Design Bowtie Funnel
- `[AGG-GEO]` Aggarwal et al (Princeton/Georgia Tech) — Generative Engine Optimization paper (Nov 2023, expanded 2024)
- `[RF-SEO26]` Rand Fishkin (SparkToro) — Search Everywhere Optimization (2024-2025)
- `[AH-AIO]` Ahrefs + Semrush — How AI Overviews Are Changing Search (Apr 2026)
- `[SEL-26]` Search Engine Land + iPullRank — State of Search 2026
- `[MK-AEO]` Mike King (iPullRank) — AEO Playbook (2024-2025)
- `[AK-WA]` Avinash Kaushik — Web Analytics 2.0 + 2025 blog updates
- `[JN-MED]` Andy Whyte — MEDDPICC (2020)

### Tier 4 — 2025-2026 (the absolute latest)
- `[MCK-25]` McKinsey — State of AI in Marketing 2025
- `[KLA-25]` Klaviyo — 2025 Email Benchmark Report
- `[ED-TB25]` Edelman — Trust Barometer 2025
- `[HS-26]` HubSpot — State of Marketing 2026

---

## CITATION DENSITY (locked)

**Medium density** — citations on every major framework + key statistic (~15-20 inline citations per paper).

Inline format example:
> "Premium B2C purchases are 90% gut-decided then logic-justified — System 1 commits before System 2 rationalises `[DK-TFS]`. Channel allocation that ignores this competes for the 10% already convinced while ignoring the 90% who never search at all `[BS-HBG]`."

---

## OUTPUT LOCATION (locked)

Three HTML pages on the Hono site at `/home/user/webapp`:
- `/pools-gtm` — Pools/Outdoor Entertainment GTM paper (replaces /3-funnels Section 4 Pools card)
- `/termite-gtm` — Termite Damage Repair GTM paper
- `/units-gtm` — Unit Renovations GTM paper
- `/kpi` — unified F1→F2→F3 dashboard, fed by all 3 LOBs
- All linked from `/3-funnels` Section 4
- Deployed to Cloudflare in Phase D

---

## DEFINITION OF DONE (per LOB)

A LOB GTM paper is **not complete** until:
- ✅ All 12 pillars present at the depth specified above
- ✅ ~350+ individual deployable content assets
- ✅ All copy actually written (no `[INSERT HERE]` placeholders)
- ✅ Schema markup, CSV imports, JSON data files ready to load
- ✅ KPIs wired into the F1→F2→F3 data contract
- ✅ Strategic Bibliography appendix with codified references
- ✅ Page deployed to Cloudflare and accessible

---

## SCOPE & SEQUENCING

**Per Carla's approval, execution follows Scope Option C:**
- Highest-ROI pillars first across all 3 LOBs (Pillars 1, 2, 5, 7, 12)
- Then layer Pillars 3, 4, 6, 8, 9, 10, 11 in follow-up sessions
- Maximises revenue lift per session

---

## FILE STATUS

🔒 **THIS DOCUMENT IS LOCKED.**

Any change to the 12-pillar inventory, definition of done, citation policy, or output location requires Carla Oliver's written approval. Reference this file at the start of every YBMT/YMT marketing session.

**Path:** `/home/user/webapp/docs/method/CMO-DELIVERY-METHOD.md`
**Version:** 1.0
**Locked:** 2026-06-04 by Carla Oliver, CoSai
