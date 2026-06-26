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

### CoSai. × YBMT Quote CRM — `/crm` (in-progress · branch `session/cosai-crm`)

Internal Quote CRM for the JV. **Light mode only**, brand-locked (charcoal + brass period on the CoSai. wordmark).

**Phase status (7-phase delivery plan):**
- ✅ **Phase 1 — Foundation** · brand · fonts · D1 binding · folder structure (`b224595`)
- ✅ **Phase 2 — Schema + Seed** · 16 tables · GPM as GENERATED column · 9 lookup tables seeded · 9 clients + 30 quotes + requote chain (`903f489`)
- ✅ **Phase 3 — Auth + RBAC** · bcryptjs · opaque server-side sessions · forced first-login password change · requireAuth + requireRole middleware (`f1e862a`)
- ✅ **Phase 4 — Dashboard** · KPI strip (5 cards) · 4×3 LoB×Region funnel matrix · pipeline-by-stage · reject reasons (90d, requote-eligible flagged) · SLA-breach actions-needed · unified stage+contact activity feed
- ✅ **Phase 5 — RFQ Intake** · /crm/quotes/new single-screen 3-section form (client / job / numbers) · race-safe Q-YYYY-NNNN allocator with retry-on-collision · client upsert by email-or-phone · validation gates (NIST-style, server-rendered errors) · /crm/quotes browse index · auto-logs initial stage_history row
- ✅ **Phase 6 — Quote Detail** · /crm/quotes/:id full detail page · stage transitions (forward + back + terminal-with-reason) · contact logger writing to contact_log + auto-bumping last_touchpoint_at · requote clone flow (Q-YYYY-NNNNR with parent_quote_id) · editable fields (sales, cost, win%, dates, notes) · stage_history + contact_log timelines on every page · GPM auto-recomputed by GENERATED column on save
- ⏳ Phase 7 — Polish + Clear-samples + deploy + README

**CRM routes (live):**
| Path | Access | Purpose |
|------|--------|---------|
| `/crm` | public | Landing page · brand proof + phase progress |
| `/crm/auth/login` | public | Sign-in form |
| `/crm/auth/logout` | any | Destroys session + clears cookie |
| `/crm/auth/change-password` | auth | Forced on first login; enforces NIST policy |
| `/crm/dashboard` | auth | Operating cockpit · KPIs · funnel matrix · pipeline · rejects · SLA actions · activity |
| `/crm/quotes` | auth | Browse all quotes · post-create toast · sample/requote badges |
| `/crm/quotes/new` (GET/POST) | auth | RFQ intake form · race-safe Q-YYYY-NNNN allocator · client upsert |
| `/crm/quotes/:id` | auth | Quote detail · header · KPI strip · edit panel · stage panel · contact logger · history timelines |
| `/crm/quotes/:id/edit` (POST) | auth | Patch sales/cost/win%/dates/notes · GPM auto-recomputed |
| `/crm/quotes/:id/transition` (POST) | auth | Move stage (forward/back/terminal) · writes stage_history audit |
| `/crm/quotes/:id/log-contact` (POST) | auth | Append contact_log row · bumps last_touchpoint_at + first_response_at |
| `/crm/quotes/:id/requote` (POST) | auth | Clone rejected requote-eligible quote into new Q-...R at stage 7 |
| `/crm/settings/lookups` | `cosai_admin` or `sinbau_ceo` only | Read-only verification of all lookup seeds |
| `/crm/health` | public | JSON: phase, migrations_applied, users_active, sessions_active |

**4 roles · 6 seed users (must change password on first login):**
- `cosai_admin` — Carla Olver (`carla@cosai.com.au`), Corrina Oliver (`corrina@cosai.com.au`)
- `sinbau_ceo` — Gerry McGuire (`gerry@ybmt.com.au`)
- `estimator` — Matt Gran (`matt@cosai.com.au`)
- `project_manager` — Paul Stanborough (`paul@cosai.com.au`), Darcy Coombs (`darcy@cosai.com.au`)
- Bootstrap password (shared, must change on first login): **`CoSaiSetup2026!`**

**Tech stack:**
- Hono (`/crm` sub-app mounted before main intranet's `app.use(renderer)` so it owns its own HTML shell)
- Cloudflare D1 (5 migrations applied locally: schema · lookups · sample data · sessions · users)
- bcryptjs (pure-JS, works on Cloudflare Workers — `bcrypt` native bindings do not)
- Web Crypto API for session token generation + SHA-256

**Source layout:**
```
src/crm/
  app.tsx                  Mount point + route registration
  lib/auth.ts              bcrypt + session primitives + password policy
  lib/middleware.tsx       requireAuth + requireRole
  lib/db.ts                Typed D1 query helpers
  lib/brand.ts             8-colour palette + typography constants
  lib/formatters.ts        money/pct/date/time/quote#/phone
  routes/landing.tsx       Public landing page
  routes/auth.tsx          login + logout + change-password
  routes/lookups.tsx       /settings/lookups (admin-only)
  routes/dashboard.tsx     /dashboard (Phase 4: KPIs + matrix + SLA + activity)
  routes/intake.tsx        /quotes + /quotes/new (Phase 5: index + RFQ intake form + POST handler)
  routes/quote-detail.tsx  /quotes/:id + 4 POST handlers (Phase 6: detail + edit + transition + log + requote)
  lib/dashboard-queries.ts 6 aggregation queries (KPIs, matrix, pipeline, rejects, actions, activity)
  lib/intake.ts            validateIntake() + nextQuoteNumber() + upsertClient() + createQuote()
  lib/quote-actions.ts     transitionStage() + logContact() + createRequote() + updateQuoteFields() + history readers
  components/page-shell.tsx
  components/brand-bar.tsx
  components/wordmark.tsx
migrations/crm/
  0001_schema.sql          16 tables + GPM GENERATED column
  0002_lookups.sql         All canonical reference data
  0003_sample_data.sql     9 clients + 30 quotes + requote chain
  0004_sessions.sql        Server-side session store
  0005_users.sql           5 seed users (must_change_password=1)
```

## URLs

- **Live sandbox**: https://3000-i0ba6dm9wlccxe1cosx0c-3844e1b6.sandbox.novita.ai
- **GitHub repo**: https://github.com/carlaoliver7099/ybmt-b2b-mrkt-strat
- **Branches**:
  - `main` — locked Tier-1 work (HEAD: `1a8d681`)
  - `session/intranet-sandbox` — marketing/intranet session work
  - `session/cosai-crm` — Quote CRM build (Phases 1–6 shipped · Phase 7 next: polish + production deploy)

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
| `/crm` | Quote CRM landing (Phase 1+) |
| `/crm/auth/login` | CRM sign-in |
| `/crm/settings/lookups` | Lookup verification (admin only) |
| `/crm/health` | JSON status |

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
