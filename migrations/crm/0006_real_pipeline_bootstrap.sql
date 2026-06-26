-- ============================================================================
-- CoSai. × YBMT — CRM Schema Migration · 0006 · Real Pipeline Bootstrap
-- ----------------------------------------------------------------------------
-- Purpose: Prepare the CRM to receive Carla's real Meta Ads lead data from
--          the legacy Google Sheet that has, until now, BEEN the entire CRM.
--
-- This migration is intentionally SMALL and IDEMPOTENT. It does one thing:
--
--   Adds Corrina Oliver to team_members (she was created in users via 0005
--   but never linked to a team_member row). Then links user 6 → new team_id.
--   This unlocks proper actor attribution on her contact_log entries via
--   quote_actions.resolveActor().
--
-- Everything else uses what's already in the schema:
--   - description column on quotes → customer-facing context for Matt
--   - notes column on quotes → migration provenance ("Imported from legacy
--     Google Sheet on YYYY-MM-DD, sheet row N")
--   - lead_sources table already has "Facebook — paid ad" + "Instagram"
--   - scopes already has "Bathroom renovation" + "Timber decking"
--   - reject_reasons already has the 9 reasons we need
--   - quote_stages already has the 11 stages
--
-- This migration does NOT:
--   - Wipe sample data (Carla's call: keep but visibly badge as SAMPLE)
--   - Insert any lead rows (that happens via scripts/import-meta-ads-leads.ts
--     which is an idempotent app-layer script that uses the same intake.ts
--     primitives the real RFQ form uses, so the import path is the same one
--     Matt will use day-to-day for new manually-entered leads)
--   - Add any new lookup values (lead_sources already has FB paid ad + IG;
--     scopes already has Bathroom renovation + Timber decking; reject_reasons
--     already has the 9 reasons we need)
-- ============================================================================

-- ─── STEP 1 · Add Corrina to team_members ──────────────────────────────────

INSERT OR IGNORE INTO team_members (id, full_name, role, company, email, phone, active)
VALUES (
  6,
  'Corrina Oliver',
  'PMO Coordinator',
  'COSAI Construction Pty Ltd',
  'corrina@cosai.com.au',
  NULL,
  1
);

-- ─── STEP 2 · Link user (id=6) to her team_member row ──────────────────────

UPDATE users
   SET team_member_id = 6
 WHERE id = 6 AND team_member_id IS NULL;

-- ─── STEP 3 · Record this migration ────────────────────────────────────────

INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (6, '0006_real_pipeline_bootstrap');
