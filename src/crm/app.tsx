/**
 * CoSai. × YBMT — CRM Sub-Application
 * ---------------------------------------------------------------------------
 * Mounted at /crm/* inside the main intranet Hono app.
 *
 * Phase status:
 *   ✅ Phase 1 — Foundation
 *   ✅ Phase 2 — Schema + seed + /settings/lookups verification
 *   ✅ Phase 3 — Auth: bcrypt + opaque sessions + RBAC
 *   ✅ Phase 4 — Dashboard: KPIs + funnel matrix + SLA actions
 *   ✅ Phase 5 — RFQ Intake (this commit): /quotes/new + /quotes index + Q-YYYY-NNNN allocator
 *   ⏳ Phase 6 — Quote detail + contact logger
 *   ⏳ Phase 6 — Quote detail + contact logger
 *   ⏳ Phase 7 — Polish + deploy
 *
 * Route map:
 *   /crm                          → landing (public)
 *   /crm/auth/login    (GET/POST) → sign in
 *   /crm/auth/logout   (GET)      → sign out
 *   /crm/auth/change-password     → forced on first login
 *   /crm/dashboard                → (auth) — Phase 4 will replace landing
 *   /crm/settings/lookups         → (auth + cosai_admin/sinbau_ceo)
 *   /crm/health                   → JSON status (public)
 */

import { Hono } from 'hono'
import { CrmLandingPage } from './routes/landing'
import { LookupsPage } from './routes/lookups'
import { DashboardPage } from './routes/dashboard'
import { auth } from './routes/auth'
import { quotesApp } from './routes/intake'
import { requireAuth, requireRole, type AuthContext } from './lib/middleware'
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
import {
  getDashboardKpis,
  getFunnelMatrix,
  getPipelineByStage,
  getRejectReasonsBreakdown,
  getActionsNeeded,
  getRecentActivity,
} from './lib/dashboard-queries'

export const crm = new Hono<AuthContext>()

// ── Public routes ────────────────────────────────────────────────────────

crm.get('/', (c) => c.html(<CrmLandingPage />))

// ── Auth sub-app (login/logout/change-password) ──────────────────────────

crm.route('/auth', auth)

// ── Authenticated routes ────────────────────────────────────────────────
// Anything below this point requires a valid session.

crm.use('/dashboard',           requireAuth())
crm.use('/dashboard/*',         requireAuth())
crm.use('/quotes',              requireAuth())
crm.use('/quotes/*',            requireAuth())
crm.use('/settings',            requireAuth())
crm.use('/settings/*',          requireAuth())

// Settings is admin-only (both CoSai admin and Sinbau CEO)
crm.use('/settings',            requireRole('cosai_admin', 'sinbau_ceo'))
crm.use('/settings/*',          requireRole('cosai_admin', 'sinbau_ceo'))

// ── /quotes/* · Phase 5 RFQ intake + index ─────────────────────────────

crm.route('/quotes', quotesApp)

// ── /dashboard · Phase 4 cockpit ─────────────────────────────────────────

crm.get('/dashboard', async (c) => {
  const db = c.env.DB
  const user = c.get('user')
  const pwChanged = c.req.query('pwchanged') === '1'
  const now = new Date()

  const [
    kpis,
    matrix,
    linesOfBusiness,
    regions,
    pipeline,
    rejectReasons,
    actionsNeeded,
    recentActivity,
  ] = await Promise.all([
    getDashboardKpis(db, now),
    getFunnelMatrix(db, now),
    getLinesOfBusiness(db),
    getRegions(db),
    getPipelineByStage(db),
    getRejectReasonsBreakdown(db, now),
    getActionsNeeded(db, now, 12),
    getRecentActivity(db, 12),
  ])

  return c.html(
    <DashboardPage
      user={{ name: user.name, role: user.role }}
      pwChanged={pwChanged}
      now={now.toISOString()}
      kpis={kpis}
      matrix={matrix}
      linesOfBusiness={linesOfBusiness}
      regions={regions}
      pipeline={pipeline}
      rejectReasons={rejectReasons}
      actionsNeeded={actionsNeeded}
      recentActivity={recentActivity}
    />
  )
})

// ── /settings/lookups · Phase 2 verification page ───────────────────────

crm.get('/settings/lookups', async (c) => {
  const db = c.env.DB
  const user = c.get('user')

  const [
    linesOfBusiness, regions, scopes, quoteStages, rejectReasons,
    contactMethods, leadSources, financialTargets, stageSlas, teamMembers,
    clientsCount, contactLogCount, stageHistoryCount, usersCount,
    quotesSample, quotesReal,
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
      user={{ name: user.name, role: user.role }}
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

// ── Health check ────────────────────────────────────────────────────────

crm.get('/health', async (c) => {
  const dbBound = c.env?.DB ? true : false
  let migrationsApplied: number | null = null
  let quotesCount: number | null = null
  let usersCount: number | null = null
  let sessionsCount: number | null = null
  if (dbBound) {
    try {
      const m = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM schema_migrations').first<{ n: number }>()
      migrationsApplied = m?.n ?? 0
      const q = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM quotes').first<{ n: number }>()
      quotesCount = q?.n ?? 0
      const u = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE active = 1').first<{ n: number }>()
      usersCount = u?.n ?? 0
      const s = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM sessions').first<{ n: number }>()
      sessionsCount = s?.n ?? 0
    } catch {
      // Tables may not exist yet — leave counters null.
    }
  }
  return c.json({
    ok: true,
    app: 'cosai-crm',
    phase: 5,
    phase_title: 'RFQ Intake',
    db_binding_present: dbBound,
    migrations_applied: migrationsApplied,
    quotes_count: quotesCount,
    users_active: usersCount,
    sessions_active: sessionsCount,
    timestamp: new Date().toISOString(),
  })
})
