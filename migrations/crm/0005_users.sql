-- ============================================================================
-- CoSai. × YBMT — CRM Schema Migration · 0005 · Seed users
-- ----------------------------------------------------------------------------
-- Seeds the 4 roles spec'd in the build brief:
--   - cosai_admin       (Carla Olver)
--   - sinbau_ceo        (Gerry McGuire)
--   - estimator         (Matt Gran)
--   - project_manager   (Paul Stanborough, Darcy Coombs)
--
-- Every seeded user is created with must_change_password=1, meaning the very
-- first time they sign in they will be force-redirected to /crm/auth/change-password.
-- The shared bootstrap password is:
--
--   ▒  Bootstrap password (shared by all 5 seed users — must be changed on first login):
--   ▒
--   ▒      CoSaiSetup2026!
--   ▒
--
-- The bcrypt hash below was generated with bcryptjs cost=10 and verified to
-- match 'CoSaiSetup2026!' exactly. Do NOT regenerate without updating the
-- bootstrap password documented above.
-- ============================================================================

-- All users share the same hash for the bootstrap password. Each will be forced
-- to set a unique personal password on first login (D1 enforces nothing here;
-- the must_change_password column drives the redirect in src/crm/lib/auth.ts).

INSERT OR IGNORE INTO users (email, name, password_hash, role, team_member_id, active, must_change_password) VALUES
  -- Carla — CIMA/PMO director, CEO of CoSai Construction Pty Ltd
  ('carla@cosai.com.au',  'Carla Olver',       '$2b$10$b2wKma1VGOyoyDpt.WQhHe9zm8u/8r5HUc/cDPVMfUkmSfe0VJ.Yu', 'cosai_admin',     1, 1, 1),

  -- Gerry — CEO of Sinbau Pty Ltd / YBMT
  ('gerry@ybmt.com.au',   'Gerry McGuire',     '$2b$10$b2wKma1VGOyoyDpt.WQhHe9zm8u/8r5HUc/cDPVMfUkmSfe0VJ.Yu', 'sinbau_ceo',      2, 1, 1),

  -- Matt — Estimator
  ('matt@cosai.com.au',   'Matt Gran',         '$2b$10$b2wKma1VGOyoyDpt.WQhHe9zm8u/8r5HUc/cDPVMfUkmSfe0VJ.Yu', 'estimator',       3, 1, 1),

  -- Paul — PM #1
  ('paul@cosai.com.au',   'Paul Stanborough',  '$2b$10$b2wKma1VGOyoyDpt.WQhHe9zm8u/8r5HUc/cDPVMfUkmSfe0VJ.Yu', 'project_manager', 4, 1, 1),

  -- Darcy — PM #2
  ('darcy@cosai.com.au',  'Darcy Coombs',      '$2b$10$b2wKma1VGOyoyDpt.WQhHe9zm8u/8r5HUc/cDPVMfUkmSfe0VJ.Yu', 'project_manager', 5, 1, 1);

-- Bump sqlite_sequence past the seeded IDs to prevent collisions on later INSERTs
-- (only needed because users table has AUTOINCREMENT and we want IDs 1-5 reserved
-- for these seed accounts).
INSERT OR REPLACE INTO sqlite_sequence (name, seq) VALUES ('users',
  (SELECT MAX(id) FROM users)
);

INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (5, '0005_users');
