/**
 * CoSai. × YBMT — CRM Sub-Application
 * ---------------------------------------------------------------------------
 * Mounted at /crm/* inside the main intranet Hono app.
 *
 * Phase status:
 *   ✅ Phase 1 — Foundation (this file)
 *   ⏳ Phase 2 — Schema + seed
 *   ⏳ Phase 3 — Auth
 *   ⏳ Phase 4 — Dashboard
 *   ⏳ Phase 5 — RFQ Intake
 *   ⏳ Phase 6 — Quote detail + contact logger
 *   ⏳ Phase 7 — Polish + deploy
 */

import { Hono } from 'hono'
import { CrmLandingPage } from './routes/landing'

// Cloudflare bindings — D1 will be wired in Phase 2.
type Bindings = {
  DB: D1Database
}

export const crm = new Hono<{ Bindings: Bindings }>()

// ── Root: Phase 1 landing page (brand-proof) ─────────────────────────────
crm.get('/', (c) => c.html(<CrmLandingPage />))

// Aliases that point at the landing page until later phases land
crm.get('/dashboard', (c) => c.html(<CrmLandingPage />))

// Health check — confirms D1 binding is wired (used at the end of each phase)
crm.get('/health', async (c) => {
  const dbBound = c.env?.DB ? true : false
  return c.json({
    ok: true,
    app: 'cosai-crm',
    phase: 1,
    phase_title: 'Foundation',
    db_binding_present: dbBound,
    timestamp: new Date().toISOString(),
  })
})
