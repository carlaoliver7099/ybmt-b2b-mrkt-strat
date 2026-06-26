#!/usr/bin/env node
/* eslint-disable */
/**
 * CoSai. × YBMT — Build the SQL import script from the JSON dataset.
 *
 * Reads data/meta-ads-leads-2026.json and emits scripts/import-meta-ads-leads.sql
 * which can be applied with:
 *   npx wrangler d1 execute cosai-crm-production --local --file=scripts/import-meta-ads-leads.sql
 *
 * Idempotency strategy:
 *   - Each lead is keyed by sheet_row in `quotes.notes` ("legacy-row=N")
 *   - We use INSERT ... WHERE NOT EXISTS to skip rows already imported
 *   - Clients are keyed by lowercased email — INSERT OR IGNORE + lookup-by-email
 *   - Quote numbers allocated sequentially starting from the current MAX
 *
 * Brisbane TZ math: UTC+10, no DST. brisbane "2026-04-14T16:00" → "2026-04-14T06:00:00.000Z"
 */

const fs = require('fs')
const path = require('path')

const JSON_PATH = path.join(__dirname, '..', 'data', 'meta-ads-leads-2026.json')
const SQL_PATH = path.join(__dirname, 'import-meta-ads-leads.sql')

const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'))
const leads = data.leads

// Brisbane → UTC: subtract 10 hours
function brisbaneToUtcISO(brisbaneIso) {
  if (!brisbaneIso) return null
  // Parse YYYY-MM-DDTHH:MM
  const m = brisbaneIso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/)
  if (!m) throw new Error(`Bad brisbane timestamp: ${brisbaneIso}`)
  const [, y, mo, d, hh, mm] = m
  const utcMs = Date.UTC(Number(y), Number(mo) - 1, Number(d), Number(hh) - 10, Number(mm), 0)
  return new Date(utcMs).toISOString()
}

// Build YYYY-MM-DDTHH:MM:SS.000Z from a YYYY-MM-DD as Brisbane 09:00 (= UTC 23:00 prev day)
// For rfq_received_at we use the date at Brisbane 09:00 (start of business)
function rfqDateToUtcISO(yyyyMmDd) {
  return brisbaneToUtcISO(`${yyyyMmDd}T09:00`)
}

// Service mapping → scope_id + line_of_business_id + region_id (NULL — we let region stay null for now)
const SCOPE_MAP = {
  bathroom: { scope_id: 14, lob_id: 1, label: 'Bathroom renovation' },
  decks:    { scope_id: 30, lob_id: 3, label: 'Timber decking' },
}

// Platform mapping → lead_source_id
const PLATFORM_MAP = {
  fb: { id: 3, label: 'Facebook — paid ad' },
  ig: { id: 6, label: 'Instagram' },
}

// SQL string escape — wrap value in quotes, double single-quotes
function sql(v) {
  if (v === null || v === undefined) return 'NULL'
  if (typeof v === 'number') return v.toString()
  return "'" + String(v).replace(/'/g, "''") + "'"
}

// Title generator: "<Service> — <Suburb> · Meta Ads"
function titleFor(lead) {
  const sname = lead.service === 'bathroom' ? 'Bathroom renovation' : 'Timber decking'
  const city = lead.city && lead.city !== 'Unknown' ? lead.city : 'TBC'
  return `${sname} — ${city}`
}

// Description generator: client-facing summary + verbatim raw notes
function descriptionFor(lead) {
  const sname = lead.service === 'bathroom' ? 'Bathroom Renovation' : 'Deck Built'
  const platLabel = PLATFORM_MAP[lead.platform].label
  const parts = []
  parts.push(`Meta Ads enquiry — ${platLabel}, [LG] ${sname} Service campaign.`)
  if (lead.raw_notes && lead.raw_notes.trim()) {
    parts.push('')
    parts.push('Legacy spreadsheet notes (verbatim from Carla\'s old tracking sheet):')
    parts.push(lead.raw_notes.trim())
  }
  if (lead.site_visit_address) {
    parts.push('')
    parts.push(`Site visit address: ${lead.site_visit_address}`)
  }
  if (lead.site_visit_brisbane) {
    const m = lead.site_visit_brisbane.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/)
    if (m) parts.push(`Site visit booked: ${m[3]}/${m[2]}/${m[1]} at ${m[4]}:${m[5]} Brisbane time`)
  }
  return parts.join('\n')
}

// Migration provenance for the `notes` column
function provenanceFor(lead) {
  return `legacy-row=${lead.sheet_row} | imported=${data._meta.imported_on} | source=Carla legacy Google Sheet`
}

// ─── EMIT SQL ─────────────────────────────────────────────────────────────

const lines = []
lines.push(`-- ===========================================================================`)
lines.push(`-- CoSai. × YBMT — Real Meta Ads lead import`)
lines.push(`-- ----------------------------------------------------------------------------`)
lines.push(`-- Generated:    ${new Date().toISOString()}`)
lines.push(`-- Source:       data/meta-ads-leads-2026.json (${leads.length} leads)`)
lines.push(`-- Idempotency:  Each row keyed by 'legacy-row=N' in quotes.notes`)
lines.push(`--               Reruns are safe — already-imported rows are skipped.`)
lines.push(`-- ===========================================================================`)
lines.push(``)

lines.push(`-- ─── Phase A · Upsert clients ──────────────────────────────────────────────`)
lines.push(``)
for (const lead of leads) {
  const email = lead.email.toLowerCase()
  const phone = lead.phone
  const name = lead.name || '(unknown)'
  const city = (lead.city && lead.city !== 'Unknown') ? lead.city : null
  lines.push(`-- Lead row ${lead.sheet_row}: ${name} (${email})`)
  lines.push(`INSERT INTO clients (client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, is_sample)`)
  lines.push(`SELECT ${sql(name)}, 'Residential', ${sql(name)}, ${sql(phone)}, ${sql(email)}, ${sql(city)}, 0`)
  lines.push(`WHERE NOT EXISTS (SELECT 1 FROM clients WHERE LOWER(primary_email) = ${sql(email)});`)
  lines.push(``)
}

lines.push(`-- ─── Phase B · Insert quotes (one statement each — idempotent by legacy-row) ─`)
lines.push(`-- Quote-number allocation strategy: each INSERT computes its own number`)
lines.push(`-- inline as (MAX existing Q-YYYY-NNNN seq for the year) + 1, formatted with`)
lines.push(`-- printf('%04d', ...). Because we wrap in WHERE NOT EXISTS, re-running this`)
lines.push(`-- script is safe — already-imported leads are skipped and the MAX reflects`)
lines.push(`-- whatever sequence exists at that moment.`)
lines.push(``)

for (let i = 0; i < leads.length; i++) {
  const lead = leads[i]
  const scope = SCOPE_MAP[lead.service]
  const plat = PLATFORM_MAP[lead.platform]
  const title = titleFor(lead)
  const description = descriptionFor(lead)
  const provenance = provenanceFor(lead)
  const email = lead.email.toLowerCase()
  const rfqReceivedDate = lead.rfq_received_date  // ISO yyyy-mm-dd
  const rfqReceivedAt = rfqDateToUtcISO(rfqReceivedDate)  // ISO UTC
  const firstResponseAt = lead.first_response_at_brisbane ? brisbaneToUtcISO(lead.first_response_at_brisbane) : null
  const lastTouchAt = lead.last_touchpoint_at_brisbane ? brisbaneToUtcISO(lead.last_touchpoint_at_brisbane) : null
  const quoteSentAt = lead.quote_sent_at_brisbane ? brisbaneToUtcISO(lead.quote_sent_at_brisbane) : null
  const jobSiteAddress = lead.site_visit_address || null
  const stageId = lead.stage_id
  const rejectReasonId = lead.reject_reason_id || null
  const rejectNotes = lead.reject_notes || null
  // decision_date for stage 11 — use last_touchpoint date if known else rfq_received_date
  const decisionDate = (stageId === 11) ? (lastTouchAt ? lastTouchAt.slice(0, 10) : rfqReceivedDate) : null

  lines.push(`-- Lead row ${lead.sheet_row}: ${lead.name} → Stage ${stageId}`)
  lines.push(`INSERT INTO quotes (`)
  lines.push(`  quote_number, client_id, scope_id, stage_id,`)
  lines.push(`  title, description, job_site_address,`)
  lines.push(`  estimator_id, line_of_business_id, lead_source_id,`)
  lines.push(`  rfq_received_date, rfq_received_at,`)
  lines.push(`  first_response_at, last_touchpoint_at, quote_sent_at,`)
  lines.push(`  decision_date, reject_reason_id, reject_notes,`)
  lines.push(`  is_sample, notes`)
  lines.push(`)`)
  // Allocate the next quote_number inline by reading current MAX for the year.
  // WHERE NOT EXISTS on legacy-row tag prevents double-insert on rerun.
  lines.push(`SELECT`)
  lines.push(`  'Q-2026-' || printf('%04d', COALESCE((SELECT MAX(CAST(SUBSTR(quote_number, 8, 4) AS INTEGER)) FROM quotes WHERE quote_number LIKE 'Q-2026-%'), 0) + 1),`)
  lines.push(`  (SELECT id FROM clients WHERE LOWER(primary_email) = ${sql(email)}),`)
  lines.push(`  ${scope.scope_id}, ${stageId},`)
  lines.push(`  ${sql(title)}, ${sql(description)}, ${sql(jobSiteAddress)},`)
  lines.push(`  3, ${scope.lob_id}, ${plat.id},`)
  lines.push(`  ${sql(rfqReceivedDate)}, ${sql(rfqReceivedAt)},`)
  lines.push(`  ${sql(firstResponseAt)}, ${sql(lastTouchAt)}, ${sql(quoteSentAt)},`)
  lines.push(`  ${sql(decisionDate)}, ${sql(rejectReasonId)}, ${sql(rejectNotes)},`)
  lines.push(`  0, ${sql(provenance)}`)
  lines.push(`WHERE NOT EXISTS (`)
  lines.push(`  SELECT 1 FROM quotes WHERE notes LIKE ${sql('legacy-row=' + lead.sheet_row + ' %')}`)
  lines.push(`);`)
  lines.push(``)
}

lines.push(`-- ─── Phase C · Stage history rows ──────────────────────────────────────────`)
lines.push(`-- One stage_history row per quote: 'Imported from legacy spreadsheet at Stage N'`)
lines.push(``)
for (const lead of leads) {
  lines.push(`INSERT INTO stage_history (quote_id, from_stage_id, to_stage_id, changed_by, note)`)
  lines.push(`SELECT q.id, NULL, q.stage_id, 1, 'Imported from legacy Google Sheet — sheet row ${lead.sheet_row}, current stage on import: ' || qs.name`)
  lines.push(`  FROM quotes q`)
  lines.push(`  JOIN quote_stages qs ON qs.id = q.stage_id`)
  lines.push(` WHERE q.notes LIKE ${sql('legacy-row=' + lead.sheet_row + ' %')}`)
  lines.push(`   AND NOT EXISTS (SELECT 1 FROM stage_history sh WHERE sh.quote_id = q.id);`)
  lines.push(``)
}

lines.push(`-- ─── DONE ──────────────────────────────────────────────────────────────────`)

fs.writeFileSync(SQL_PATH, lines.join('\n'))
console.log(`Wrote ${SQL_PATH}`)
console.log(`  ${leads.length} leads`)
console.log(`  ${lines.length} SQL lines`)
