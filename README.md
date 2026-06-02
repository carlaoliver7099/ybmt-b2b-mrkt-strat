# YBMT B2B Marketing Strategy — CFO Design Brief

**A CFO-engineered design brief from CoSai CFO Services → Your Digital Team (YDT) → for client YBMT (Your Building & Maintenance Team).**

Hosted at: **[cosaiybmtpool.org](https://cosaiybmtpool.org)** _(deployment pending)_
Effective: 1 June 2026 · Destination: 31 May 2028 · Brief horizon: 24 months

---

## What this is

This repository is the **source code for the design brief site**. It is the formal, contractual instrument by which CoSai CFO Services hands off the strategic marketing-mix design to YDT for ongoing operation under YBMT's brand.

It is **not** a website for YBMT customers. It is a one-time CFO advisory deliverable, hosted as an interactive HTML site so the three parties (CoSai, YBMT, YDT) can read, review, and sign off on it together.

---

## The strategic shift this brief enacts

YBMT's prior marketing infrastructure (22 assets, $25K total spend with YDT) was built for a **B2C luxury consumer launch in Pool Decks**. The CFO has rebriefed the strategy as **B2B trade-to-trade** across three product lines and three regions. This brief replaces the prior assumption and front-loads the assets required to execute the new strategy.

| | Current state (1 June 2026) | Year 1 target (31 May 2027) | Year 2 destination (31 May 2028) |
|---|---|---|---|
| **Revenue** | $3.5M | $6.5M | $10.0M |
| **GPM** | 25% | 32% | 34% |
| **NPM** | 3% | 6% | 10% |
| **Active partners** | 0 | 18 | 30 |

**Product mix (Y2)**: Termite Repair 55% / Pool Decks 30% / Unit Renovations 15%
**Regional split (Y2, demand-weighted)**: Brisbane 44% / Gold Coast 27.5% / Sunshine Coast 28.5%

---

## The 8 modules

1. **Executive Summary** — scope boundary, sign-off pointer
2. **$10M Financial Architecture** — revenue bridge, 3×3 product × region matrix
3. **Gerry McGuire Sales Operating System** — weekly/monthly/quarterly/annual cadence for solo BD
4. **B2B Marketing Mix per buyer segment** — 7Ps for Pool Builders, Pest Control/Insurance, PMs/Strata, Real Estate
5. **Asset Pack** — disposition of 18 existing YDT B2C assets + 13 new CoSai-built B2B assets + Video Production Plan
6. **Measurement Spine** — Lead/Lag KPIs, funnel benchmarks, kill criteria
7. **Interactive Dashboard** — Chart.js illustrative target model (5 charts)
8. **Commercial Architecture** — $10K back-account settlement + $600/wk YDT ongoing scope + three-party sign-off

---

## The headless engagement model

YDT operates as a **headless marketing agency** — they build and run YBMT's marketing function under YBMT's brand. The buyer (pool builder, pest control firm, strata manager, real estate principal) never sees YDT. Every outbound asset appears to come from YBMT, with Gerry McGuire as the face.

- **$10K** — back-account settlement on sign-off (clears prior YDT work)
- **$600/week ongoing** — flat retainer for asset operation, LinkedIn ad layer, monthly case studies, dashboard refresh
- **$31,200/year** — annualised — significantly below the cost of an in-house junior marketer

---

## Technology stack

| Layer | Choice |
|---|---|
| Framework | Hono (Cloudflare Workers + Pages) |
| Language | TypeScript with JSX (`hono/jsx`) |
| Build | Vite + `@hono/vite-build/cloudflare-pages` |
| Styling | Custom CSS with brand-system tokens (no framework) |
| Typography | Fraunces (serif) + Inter (sans) via Google Fonts |
| Icons | FontAwesome 6.4.0 |
| Charts | Chart.js 4.4.1 (CDN) |
| Deployment | Cloudflare Pages |
| Local dev | PM2 daemon + `wrangler pages dev` |

---

## Brand system

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#1B3A5C` | Primary structural colour |
| `--navy-deep` | `#0F2138` | Hero gradient, dark cards |
| `--timber` | `#B8743D` | Accent (warmth, decking, lead-indicator pills) |
| `--aqua` | `#4DB6C7` | Highlight, lag-indicator pills, chart accents |
| `--cream` | `#F5F1EA` | Background, light text on dark |

Typography: Fraunces 300/400 italic for display, Inter 400/500/600/700 for body and UI.

---

## Brand assets shipped with the site

Located in `public/static/brand/`:

| Asset | Purpose |
|---|---|
| `cosai-logo.png` | CoSai. wordmark — nav bar + Module 8 sign-off slot |
| `ybmt-logo.png` | YBMT construction-pillars logo — hero brand bar + Module 8 |
| `gerry-photo.png` | Gerry McGuire headshot — hero approver avatar |
| `carla-signature.png` | Carla's wet-ink signature — Module 8 CoSai sign-off (signed 1 June 2026) |

---

## Local development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start local dev server via PM2 (port 3000)
pm2 start ecosystem.config.cjs

# Test
curl http://localhost:3000

# Tail logs (non-blocking)
pm2 logs webapp --nostream
```

The PM2 config runs `wrangler pages dev dist --ip 0.0.0.0 --port 3000` in fork mode.

---

## Project structure

```
webapp/
├── src/
│   ├── index.tsx              # App entry · Nav, Hero, Module 1, Module 2
│   ├── renderer.tsx           # jsxRenderer · fonts, FontAwesome, page title
│   ├── modules-3-4-5.tsx      # Modules 3, 4, 5 (Sales OS, Marketing Mix, Asset Pack)
│   └── modules-6-7-8.tsx      # Modules 6, 7, 8 (KPIs, Dashboard, Commercial)
├── public/static/
│   ├── style.css              # Brand-system CSS (no framework)
│   ├── dashboard.js           # Chart.js configurations for Module 7
│   └── brand/                 # Logo, signature, photo assets
├── ecosystem.config.cjs       # PM2 process config
├── wrangler.jsonc             # Cloudflare Pages config
├── vite.config.ts             # Vite build config
├── tsconfig.json              # TypeScript (jsxImportSource: hono/jsx)
└── package.json
```

---

## Deployment

The site is intended to deploy to **Cloudflare Pages** and be served at the custom domain **`cosaiybmtpool.org`**.

```bash
# Build
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

Custom domain configuration is handled in the Cloudflare dashboard after first deploy.

---

## Module 7 dashboard — illustrative target model

The dashboard in Module 7 is an **illustrative target model**, not real performance data. It shows the shape of what "on track" looks like across 24 months:

- **Chart 1** — Revenue ramp (monthly $K) · Y1 build (aqua bars) → Y2 scale (timber bars)
- **Chart 2** — Partner pipeline funnel waterfall · 480 prospects → 30 active partners (24-mo cumulative)
- **Chart 3** — Cumulative active partners over time · S-curve, 18 by end of Y1, 30 by end of Y2
- **Chart 4** — GPM by product line over time · Termite (engine) / Pool Decks (volume) / Unit Renos (filler) + Blended
- **Chart 5** — Y2 revenue mix · 3×3 product × region doughnut (9 segments)

YDT populates the dashboard from real CRM and finance data monthly, post-sign-off.

---

## Status

| | |
|---|---|
| **Brief development** | ✅ Complete — all 8 modules + Video Production Plan + brand asset wiring |
| **Build verification** | ✅ Clean (124KB worker bundle, 52 modules) |
| **Local preview** | ✅ Running on PM2 |
| **Deployment to Cloudflare Pages** | ⏸ Pending |
| **Custom domain `cosaiybmtpool.org`** | ⏸ Pending |
| **Three-party sign-off** | ⏸ Carla signed 1 June 2026 · Gerry & Corrina pending |

---

## License

Proprietary © 2026 **CoSai CFO Services** and **Your Building & Maintenance Team (YBMT)**.

This brief, its strategy, copy, design, financial model, and asset specifications are the joint intellectual property of CoSai CFO Services (as engagement deliverable) and YBMT (as the commissioning client). Not for redistribution, copying, or use outside the CoSai → YBMT → YDT three-party engagement defined in Module 8.

---

## Credits

- **Strategy & financial modelling**: Carla · CoSai CFO Services
- **Approver**: Gerry McGuire · Director, YBMT
- **Recipient**: Corrina McGowan · CEO, Your Digital Team
- **Brief construction**: AI-assisted authoring under CFO direction

---

_"You can change the strategy on a single sheet of paper. You can't change the execution without sign-off."_
— CFO note, Module 1
