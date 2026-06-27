// ═══════════════════════════════════════════════════════════════════════════
// Marketing BI · API routes (Day 1 scaffold)
// ═══════════════════════════════════════════════════════════════════════════
// Pattern: mirror /crm/* — Hono sub-app · own D1 binding · JSON in/out.
// All routes prefixed with /api once mounted at /mbi.
// ═══════════════════════════════════════════════════════════════════════════

import { Hono } from 'hono'
import type { MbiBindings } from '../lib/types'
import { validateUtm, extractUtmFromUrl, buildUtm } from '../lib/utm'
import { LOBS, REGIONS, STAGES, BUDGET, OEP_TARGETS } from '../lib/doctrine'

export const mbiApi = new Hono<{ Bindings: MbiBindings }>()

// ─── Health ────────────────────────────────────────────────────────────────

mbiApi.get('/health', async (c) => {
  // Probe DB — if not migrated yet, return ok:false so we know.
  try {
    const r = await c.env.MBI_DB.prepare(
      `SELECT COUNT(*) AS n FROM dim_lob`
    ).first<{ n: number }>()
    return c.json({
      ok: true,
      phase: 1,
      lobs_seeded: r?.n ?? 0,
      build: 'day-1-scaffold',
      doctrine: {
        lobs: Object.keys(LOBS),
        regions: Object.keys(REGIONS),
        stages: Object.keys(STAGES),
        budget: BUDGET,
        oep: OEP_TARGETS,
      },
    })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message ?? 'db-not-ready' }, 503)
  }
})

// ─── Doctrine dump (read-only · what the tool was built to measure) ────────

mbiApi.get('/doctrine', async (c) => {
  const db = c.env.MBI_DB
  const [lobs, regions, stages, channels, northStars, utmConv] = await Promise.all([
    db.prepare('SELECT * FROM dim_lob ORDER BY display_order').all(),
    db.prepare('SELECT * FROM dim_region ORDER BY display_order').all(),
    db.prepare('SELECT * FROM dim_stage ORDER BY display_order').all(),
    db.prepare('SELECT * FROM dim_channel ORDER BY display_order').all(),
    db.prepare('SELECT * FROM north_star_targets ORDER BY display_order').all(),
    db.prepare('SELECT * FROM utm_convention').all(),
  ])
  return c.json({
    lobs:        lobs.results,
    regions:     regions.results,
    stages:      stages.results,
    channels:    channels.results,
    northStars:  northStars.results,
    utmConvention: utmConv.results,
  })
})

// ─── UTM validator (live · for Corrina to paste URLs into) ─────────────────

mbiApi.post('/utm/validate', async (c) => {
  const body = await c.req.json<{ url?: string; tuple?: any }>()
  const tuple = body.url ? extractUtmFromUrl(body.url) : body.tuple
  const result = validateUtm(tuple || {})
  // Log it (so we can audit drift over time)
  try {
    await c.env.MBI_DB.prepare(
      `INSERT INTO utm_validation_log
       (utm_source, utm_medium, utm_campaign, utm_content, utm_term, is_valid, drift_reason, source_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      tuple?.utm_source ?? null,
      tuple?.utm_medium ?? null,
      tuple?.utm_campaign ?? null,
      tuple?.utm_content ?? null,
      tuple?.utm_term ?? null,
      result.is_valid ? 1 : 0,
      result.drift_reasons.join(' · ') || null,
      body.url ?? null,
    ).run()
  } catch {
    // non-fatal — validation result is what matters
  }
  return c.json({ ...result, parsed_input: tuple })
})

// ─── UTM builder (mints a compliant querystring · helper for YDT links) ────

mbiApi.post('/utm/build', async (c) => {
  const opts = await c.req.json()
  try {
    const qs = buildUtm(opts)
    return c.json({ ok: true, querystring: qs })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message }, 400)
  }
})

// ─── Spend summary (Yr-1 plan vs actuals · by LOB) ─────────────────────────

mbiApi.get('/spend/summary', async (c) => {
  const db = c.env.MBI_DB
  const planned = await db.prepare(
    `SELECT lob_code, SUM(planned_amount) AS planned
     FROM spend_plan WHERE year = 2026 GROUP BY lob_code`
  ).all<{ lob_code: string; planned: number }>()
  const actual = await db.prepare(
    `SELECT lob_code, SUM(amount) AS actual
     FROM spend_actuals WHERE strftime('%Y', spend_date) = '2026' GROUP BY lob_code`
  ).all<{ lob_code: string; actual: number }>()

  const byLob: Record<string, { planned: number; actual: number; variance_pct: number }> = {}
  for (const code of ['TDR', 'POE', 'UR']) {
    const p = planned.results.find(r => r.lob_code === code)?.planned ?? 0
    const a = actual.results.find(r => r.lob_code === code)?.actual ?? 0
    byLob[code] = {
      planned: p,
      actual: a,
      variance_pct: p === 0 ? 0 : (a - p) / p,
    }
  }
  return c.json({
    envelope: { paid: BUDGET.yr1Paid, total: BUDGET.yr1Total },
    byLob,
  })
})

// ─── North star readings (latest snapshot vs targets) ──────────────────────

mbiApi.get('/north-stars', async (c) => {
  const db = c.env.MBI_DB
  const targets = await db.prepare(
    'SELECT * FROM north_star_targets ORDER BY display_order'
  ).all()
  // Latest snapshot per target
  const snapshots = await db.prepare(
    `SELECT ns1.* FROM north_star_snapshots ns1
     INNER JOIN (
       SELECT target_code, MAX(snapshot_date) AS max_date
       FROM north_star_snapshots GROUP BY target_code
     ) ns2 ON ns1.target_code = ns2.target_code AND ns1.snapshot_date = ns2.max_date`
  ).all()
  return c.json({
    targets: targets.results,
    latest:  snapshots.results,
  })
})

// ─── Ingest stubs (Day 2-3 will flesh these out) ───────────────────────────

mbiApi.post('/ingest/spend/csv', async (c) => {
  // TODO Day 2: accept CSV, parse, validate, insert into spend_actuals
  return c.json({ ok: false, status: 'not-implemented', note: 'Day 2 build' }, 501)
})

mbiApi.post('/ingest/utm/batch', async (c) => {
  // TODO Day 4: accept batch of touch events, validate UTMs, insert
  return c.json({ ok: false, status: 'not-implemented', note: 'Day 4 build' }, 501)
})

// ─── Connection status (which API integrations are live · Day 3) ──────────

mbiApi.get('/integrations/status', async (c) => {
  const db = c.env.MBI_DB
  const creds = await db.prepare(
    `SELECT service, account_label, status, granted_at, last_used_at
     FROM api_credentials ORDER BY service`
  ).all()
  // List the services we KNOW about · whether or not they have a credential row
  const expected = ['google-ads','meta','linkedin','ga4','gsc','gbp','mailchimp','callrail']
  const byService: Record<string, any> = {}
  for (const svc of expected) {
    const rows = creds.results.filter((r: any) => r.service === svc)
    byService[svc] = rows.length === 0
      ? { connected: false, status: 'not-connected' }
      : { connected: rows.some((r: any) => r.status === 'active'), accounts: rows }
  }
  return c.json({ integrations: byService })
})
