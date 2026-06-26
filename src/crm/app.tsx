/**
 * CoSai. × YBMT — CRM Sub-Application
 * ---------------------------------------------------------------------------
 * Mounted at /crm/* inside the main intranet Hono app.
 *
 * Phase status:
 *   ✅ Phase 1 — Foundation
 *   ✅ Phase 2 — Schema + seed + /settings/lookups verification (this commit)
 *   ⏳ Phase 3 — Auth
 *   ⏳ Phase 4 — Dashboard
 *   ⏳ Phase 5 — RFQ Intake
 *   ⏳ Phase 6 — Quote detail + contact logger
 *   ⏳ Phase 7 — Polish + deploy
 */

import { Hono } from 'hono'
import { CrmLandingPage } from './routes/landing'
import { LookupsPage } from './routes/lookups'
import {
  getLinesOfBusiness,
  getRegions,
  getScopes,
  getQuoteStages,
  getRejectReasons,
  getContactMethods,
  getLeadSources,
  getFinancialTargets,
  getStageSlas,
  getTeamMembers,
  countRows,
  countRealQuotes,
  countSampleQuotes,
} from './lib/db'

// Cloudflare bindings
type Bindings = {
  DB: D1Database
}

export const crm = new Hono<{ Bindings: Bindings }>()

// ── Root: Phase 1 landing page (brand-proof) ─────────────────────────────
crm.get('/', (c) => c.html(<CrmLandingPage />))

// Alias that points at the landing page until Phase 4 dashboard lands
crm.get('/dashboard', (c) => c.html(<CrmLandingPage />))

// ── Phase 2 · /settings/lookups · read-only verification of seed data ──
crm.get('/settings/lookups', async (c) => {
  const db = c.env.DB
  if (!db) {
    return c.html(
      <CrmLandingPage />,
      500,
    )
  }

  // Fan out reads in parallel — each is a single-table SELECT.
  const [
    linesOfBusiness,
    regions,
    scopes,
    quoteStages,
    rejectReasons,
    contactMethods,
    leadSources,
    financialTargets,
    stageSlas,
    teamMembers,
    clientsCount,
    contactLogCount,
    stageHistoryCount,
    usersCount,
    quotesSample,
    quotesReal,
  ] = await Promise.all([
    getLinesOfBusiness(db),
    getRegions(db),
    getScopes(db),
    getQuoteStages(db),
    getRejectReasons(db),
    getContactMethods(db),
    getLeadSources(db),
    getFinancialTargets(db),
    getStageSlas(db),
    getTeamMembers(db),
    countRows(db, 'clients'),
    countRows(db, 'contact_log'),
    countRows(db, 'stage_history'),
    countRows(db, 'users'),
    countSampleQuotes(db),
    countRealQuotes(db),
  ])

  return c.html(
    <LookupsPage
      linesOfBusiness={linesOfBusiness}
      regions={regions}
      scopes={scopes}
      quoteStages={quoteStages}
      rejectReasons={rejectReasons}
      contactMethods={contactMethods}
      leadSources={leadSources}
      financialTargets={financialTargets}
      stageSlas={stageSlas}
      teamMembers={teamMembers}
      counts={{
        clients: clientsCount,
        quotes_sample: quotesSample,
        quotes_real: quotesReal,
        contact_log: contactLogCount,
        stage_history: stageHistoryCount,
        users: usersCount,
      }}
    />
  )
})

// ── Health check — confirms D1 binding is wired (used at end of each phase) ─
crm.get('/health', async (c) => {
  const dbBound = c.env?.DB ? true : false
  let migrationsApplied: number | null = null
  let quotesCount: number | null = null
  if (dbBound) {
    try {
      const m = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM schema_migrations').first<{ n: number }>()
      migrationsApplied = m?.n ?? 0
      const q = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM quotes').first<{ n: number }>()
      quotesCount = q?.n ?? 0
    } catch {
      // Tables may not exist yet on a fresh DB — leave counters null.
    }
  }
  return c.json({
    ok: true,
    app: 'cosai-crm',
    phase: 2,
    phase_title: 'Schema + Seed',
    db_binding_present: dbBound,
    migrations_applied: migrationsApplied,
    quotes_count: quotesCount,
    timestamp: new Date().toISOString(),
  })
})
