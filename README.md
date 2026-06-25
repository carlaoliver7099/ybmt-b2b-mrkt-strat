# YBMT × CoSai Construction — Strategic Intranet

## Project Overview
- **Name**: YBMT × CoSai Construction JV Strategic Intranet
- **Goal**: Make the 3 services × 3 regions × 3 years operating model legible, trackable, and demonstrably executing — for the JV partners, the team, and the customer-facing brand.
- **Charter**: FY27 ($5M) → FY28 ($7M) → FY29 ($10M) · 34% GPM · 10% NPM · $200K/wk prequalified quote bar

## Currently Completed Features

### Strategic operating system
- `/` — Charter homepage · plain-English explainer of the 3×3 operating model with all 4 source diagrams (Financial Strategy · 3×3 Grid · Sales Mix · Unit Economics) + 5 operating KPIs
- `/matrix` — **3×3 Build Status Matrix** · 9-cell engagement scoreboard across three streams (Strategy · Assets · Story) · scored honestly, revenue-weighted
- `/funnel` — Marketing Funnel deep-dive (theory + digital + print + appendix)
- `/value-chain` — Value Chain operating playbook (A→B→C→D)
- `/marketing-mix` — Marketing Mix Inventory · 22 launch-ready assets across 10 categories

### YBMT Resort Yards (Pool LOB · Brisbane prototype) — NEW
Built 100% to the locked GitHub strategy spec (`pools-gtm.tsx`, 2,454 lines):

- `/pools` — Resort Yards landing hub · category-defining frame · 3 archetype gallery (Tropical / Coastal / Mediterranean) · 4 JTBD pathway cards · Resort Yard Inspection ritual
- `/pools/fast-track-host` — Fast-Track Host JTBD landing page
- `/pools/pool-completion` — Pool-Completion Buyer JTBD landing page
- `/pools/deck-replacement` — Replacement Buyer JTBD landing page
- `/pools/pre-sale-investor` — Pre-Sale Investor JTBD landing page
- `/pools/capability-statement-brisbane` — **NEW** 4-page printable capability statement (cover · channel-buyer · end-buyer JTBD ladder · evidence)

**DBA assets generated and embedded:**
- DBA-3 "Built in 30 Days · Guaranteed" seal (AI-generated, validated legible)
- 3 archetype heroes — Tropical / Coastal / Mediterranean (2752×1536 each)
- DBA-6 sonic mnemonic — 2-second timber + brass acoustic sting (wired into every page footer as "Hear the brand" button)

**Doctrine compliance:**
- 0 "Free Quote / Free Consultation / No Obligation" CTAs (forbidden language enforced)
- "Resort Yard" branding throughout (sub-brand rebrand executed)
- "Built like it's our own home" YBMT Group closing on every page
- JTBD-led, never demographic-led
- Lead magnet forms: 4 fields only per spec

## URLs

- **Live sandbox**: https://3000-i0ba6dm9wlccxe1cosx0c-3844e1b6.sandbox.novita.ai
- **GitHub repo**: https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat
- **Branches**:
  - `main` — locked Tier-1 work (HEAD: `1a8d681`)
  - `session/intranet-sandbox` — session work (HEAD: `23119cc` Resort Yards)

## Route Summary

| Path | Purpose |
|------|---------|
| `/` | Charter homepage — operating model in plain English |
| `/matrix` | 3×3 Build Status Matrix — scoreboard |
| `/funnel` | Marketing funnel deep-dive |
| `/value-chain` | Value Chain operating playbook |
| `/marketing-mix` | 22-asset launch inventory |
| `/pools` | Resort Yards hub |
| `/pools/fast-track-host` | JTBD landing page |
| `/pools/pool-completion` | JTBD landing page |
| `/pools/deck-replacement` | JTBD landing page |
| `/pools/pre-sale-investor` | JTBD landing page |
| `/pools/capability-statement-brisbane` | 4-page printable capability statement |

## Data Architecture

- **No runtime database** — all content rendered server-side from TSX components on Cloudflare Pages edge
- **Static assets**: served from `public/static/` (heroes, DBA seal, marketing-mix kit)
- **Source of truth for strategy**: GitHub `origin/main` (locked Tier-1 strategy docs incl. `pools-gtm.tsx`, gap analysis)

## Features Not Yet Implemented

- Lead-magnet PDF downloads (forms render but submit endpoints not wired)
- Regional variants: Pool-Gold-Coast, Pool-Sunshine-Coast (templates ready to clone)
- Termite LOB build (highest revenue cell — 25% of Y2)
- Units LOB build
- Cloudflare Pages production deployment

## Recommended Next Steps for Development

1. **Cloudflare deployment** — pick deployment path (own CF account vs Genspark-hosted) and ship to production
2. **Wire form submissions** — capture lead-magnet emails via Cloudflare KV or third-party (Resend, SendGrid)
3. **Clone the playbook** — apply Resort Yards structure to Termite-Brisbane (highest revenue cell — 25% of Y2)
4. **Custom domain** — `cosaiybmtpool.org`
5. **Regional variants** — Pool-Gold-Coast and Pool-Sunshine-Coast (clone from Brisbane template)

## User Guide

This intranet is the strategy-execution scoreboard for the YBMT × CoSai JV.

- **Start at `/matrix`** to see exactly what's done, what's partial, and what's empty across all 9 cells
- **Click any green cell** to see the live asset (e.g. Pool-Brisbane → `/pools`)
- **Click any pillar in the homepage banner** to drill into theory (funnel, value chain, marketing mix)
- **Use `/pools` as the canonical example** of what "100% to strategy" looks like — every other LOB/region will be cloned from this template

## Deployment

- **Platform**: Cloudflare Pages (target)
- **Current Status**: ✅ Live in sandbox · ❌ Not yet on Cloudflare production
- **Tech Stack**: Hono + Vite + TypeScript + Tailwind CDN + Font Awesome 6.4
- **Fonts (DBA-4)**: Inter (body) + Fraunces (display, italic)
- **Brand Palette (DBA-5)**: Navy `#1b3a5c` · Timber `#b8743d` · Aqua `#4db6c7` · Cream `#f5f1ea` · Charcoal `#2b2b2b`
- **Last Updated**: 2026-06-25
- **Last Commit**: Resort Yards build + capability statement + DBA-6 sonic mnemonic
