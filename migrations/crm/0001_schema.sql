-- ============================================================================
-- CoSai. × YBMT — CRM Schema Migration · 0001 · Initial Schema
-- ----------------------------------------------------------------------------
-- Target:    Cloudflare D1 (SQLite)
-- Source:    Postgres 16 spec from Part 2 of build brief (translated)
-- Honors:    9 non-negotiables from Part 1 (especially GPM as generated col)
--
-- Translation rules from Postgres → D1/SQLite:
--   NUMERIC(14,2)            → INTEGER (cents)  · suffix _cents
--                              GPM stays as REAL (computed percentage 0-100)
--   TIMESTAMPTZ              → TEXT  (ISO 8601 UTC, e.g. 2026-06-26T05:25:04.760Z)
--   SERIAL PRIMARY KEY       → INTEGER PRIMARY KEY AUTOINCREMENT
--   BOOLEAN                  → INTEGER  (0 or 1)
--   DATE                     → TEXT  (ISO yyyy-mm-dd)
--   GENERATED ALWAYS AS STORED → preserved (D1 supports it)
--   DEFAULT now()            → DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
--   ON DELETE CASCADE        → preserved verbatim
--   CHECK (col IN (...))     → preserved verbatim
--
-- Money columns: stored as integer cents (e.g. $32,500.00 → 3_250_000).
-- App layer multiplies/divides by 100 at the boundary. Never use floats.
-- ============================================================================

-- ─── LOOKUPS ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS lines_of_business (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT,
  code                     TEXT NOT NULL UNIQUE,
  name                     TEXT NOT NULL UNIQUE,
  description              TEXT,
  is_specialty             INTEGER NOT NULL DEFAULT 0,
  sort_order               INTEGER,
  color                    TEXT,
  active                   INTEGER NOT NULL DEFAULT 1,
  target_avg_won_value_cents  INTEGER,    -- NUMERIC(14,2) → cents
  target_wins_per_week     REAL,
  created_at               TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS regions (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  code        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL UNIQUE,
  sort_order  INTEGER,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS scopes (
  id                   INTEGER PRIMARY KEY AUTOINCREMENT,
  name                 TEXT NOT NULL UNIQUE,
  description          TEXT,
  sort_order           INTEGER,
  active               INTEGER NOT NULL DEFAULT 1,
  line_of_business_id  INTEGER REFERENCES lines_of_business(id),
  created_at           TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_scopes_lob ON scopes(line_of_business_id);

CREATE TABLE IF NOT EXISTS quote_stages (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL UNIQUE,
  sort_order  INTEGER NOT NULL,
  is_terminal INTEGER NOT NULL DEFAULT 0,
  is_won      INTEGER NOT NULL DEFAULT 0,
  is_lost     INTEGER NOT NULL DEFAULT 0,
  color       TEXT,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS reject_reasons (
  id                   INTEGER PRIMARY KEY AUTOINCREMENT,
  reason               TEXT NOT NULL UNIQUE,
  is_requote_eligible  INTEGER NOT NULL DEFAULT 0,
  sort_order           INTEGER,
  active               INTEGER NOT NULL DEFAULT 1,
  created_at           TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS contact_methods (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL UNIQUE,
  category    TEXT,
  sort_order  INTEGER,
  active      INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS lead_sources (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL UNIQUE,
  category    TEXT,
  is_paid     INTEGER NOT NULL DEFAULT 0,
  sort_order  INTEGER,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_lead_sources_active ON lead_sources(active);

CREATE TABLE IF NOT EXISTS financial_targets (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  metric              TEXT NOT NULL UNIQUE,
  target_value_cents  INTEGER,        -- NUMERIC(14,2) → cents (handles money + percent + days as scaled int)
  stretch_value_cents INTEGER,
  unit                TEXT,
  description         TEXT,
  active              INTEGER NOT NULL DEFAULT 1,
  updated_at          TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS stage_slas (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  from_stage_id   INTEGER REFERENCES quote_stages(id),
  to_stage_id     INTEGER REFERENCES quote_stages(id),
  sla_name        TEXT NOT NULL,
  target_hours    INTEGER NOT NULL,
  breach_hours    INTEGER NOT NULL,
  description     TEXT,
  active          INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS team_members (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name   TEXT NOT NULL,
  role        TEXT NOT NULL,
  company     TEXT NOT NULL,
  email       TEXT,
  phone       TEXT,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- ─── CORE ───────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS clients (
  id                   INTEGER PRIMARY KEY AUTOINCREMENT,
  client_name          TEXT NOT NULL,
  client_type          TEXT CHECK (client_type IN ('Residential','Commercial','Strata','Insurance','Government','Other')),
  primary_contact_name TEXT,
  primary_phone        TEXT,
  primary_email        TEXT,
  billing_address      TEXT,
  referral_source      TEXT,
  vip_flag             INTEGER NOT NULL DEFAULT 0,
  notes                TEXT,
  is_sample            INTEGER NOT NULL DEFAULT 0,
  created_at           TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at           TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS client_contacts (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id   INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  role        TEXT,
  phone       TEXT,
  email       TEXT,
  is_primary  INTEGER NOT NULL DEFAULT 0,
  notes       TEXT,
  created_at  TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_client_contacts_client ON client_contacts(client_id);

-- ─── THE BIG ONE · quotes table with GPM GENERATED column ──────────────────
-- gpm_percent is a GENERATED column derived from sales_price + estimated_cost.
-- It is computed in cents-arithmetic, then divided to yield a percent (REAL).
-- App code MUST NEVER write to gpm_percent. Verified by SQLite itself.

CREATE TABLE IF NOT EXISTS quotes (
  id                       INTEGER PRIMARY KEY AUTOINCREMENT,
  quote_number             TEXT UNIQUE,
  client_id                INTEGER NOT NULL REFERENCES clients(id),
  scope_id                 INTEGER REFERENCES scopes(id),
  stage_id                 INTEGER NOT NULL REFERENCES quote_stages(id),
  title                    TEXT NOT NULL,
  description              TEXT,
  job_site_address         TEXT,
  estimator_id             INTEGER REFERENCES team_members(id),
  project_manager_id       INTEGER REFERENCES team_members(id),
  line_of_business_id      INTEGER REFERENCES lines_of_business(id),
  region_id                INTEGER REFERENCES regions(id),
  lead_source_id           INTEGER REFERENCES lead_sources(id),

  -- Dates (ISO yyyy-mm-dd)
  rfq_received_date        TEXT,
  quote_sent_date          TEXT,
  decision_date            TEXT,
  job_start_date           TEXT,
  job_end_date             TEXT,

  -- Money columns — INTEGER cents
  estimated_cost_cents          INTEGER,
  sales_price_cents             INTEGER,
  actual_delivered_cost_cents   INTEGER,

  -- GPM · GENERATED column · computed from cents columns above
  -- Formula: ((sales - cost) / sales) * 100
  -- Null-safe: returns NULL when sales is NULL or 0
  -- Result is a REAL percent, e.g. 34.4
  gpm_percent              REAL GENERATED ALWAYS AS (
    CASE
      WHEN sales_price_cents IS NULL OR sales_price_cents = 0 THEN NULL
      ELSE ((CAST(sales_price_cents AS REAL) - COALESCE(estimated_cost_cents, 0))
            / CAST(sales_price_cents AS REAL)) * 100.0
    END
  ) STORED,

  win_probability_pct      INTEGER CHECK (win_probability_pct IS NULL OR win_probability_pct BETWEEN 0 AND 100),
  accept_reason            TEXT,
  reject_reason_id         INTEGER REFERENCES reject_reasons(id),
  reject_notes             TEXT,
  is_requote               INTEGER NOT NULL DEFAULT 0,
  parent_quote_id          INTEGER REFERENCES quotes(id),
  requote_opportunity      INTEGER NOT NULL DEFAULT 0,
  is_sample                INTEGER NOT NULL DEFAULT 0,

  -- Timestamps (ISO 8601 UTC)
  rfq_received_at          TEXT,
  first_response_at        TEXT,
  quote_sent_at            TEXT,
  last_touchpoint_at       TEXT,

  notes                    TEXT,
  created_at               TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at               TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_quotes_client  ON quotes(client_id);
CREATE INDEX IF NOT EXISTS idx_quotes_stage   ON quotes(stage_id);
CREATE INDEX IF NOT EXISTS idx_quotes_lob     ON quotes(line_of_business_id);
CREATE INDEX IF NOT EXISTS idx_quotes_region  ON quotes(region_id);
CREATE INDEX IF NOT EXISTS idx_quotes_sample  ON quotes(is_sample);
CREATE INDEX IF NOT EXISTS idx_quotes_parent  ON quotes(parent_quote_id);
CREATE INDEX IF NOT EXISTS idx_quotes_number  ON quotes(quote_number);

-- ─── CONTACT LOG · timeline of touchpoints ──────────────────────────────────

CREATE TABLE IF NOT EXISTS contact_log (
  id                   INTEGER PRIMARY KEY AUTOINCREMENT,
  quote_id             INTEGER NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
  contact_method_id    INTEGER REFERENCES contact_methods(id),
  contact_datetime     TEXT NOT NULL,            -- ISO 8601 UTC
  direction            TEXT CHECK (direction IN ('Inbound','Outbound','Internal')),
  our_staff_id         INTEGER REFERENCES team_members(id),
  client_contact_id    INTEGER REFERENCES client_contacts(id),
  client_contact_name  TEXT,
  subject              TEXT,
  notes                TEXT NOT NULL,
  duration_minutes     INTEGER,
  follow_up_required   INTEGER NOT NULL DEFAULT 0,
  follow_up_date       TEXT,                     -- ISO yyyy-mm-dd
  created_at           TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_contact_log_quote ON contact_log(quote_id);
CREATE INDEX IF NOT EXISTS idx_contact_log_dt    ON contact_log(contact_datetime DESC);

-- ─── STAGE HISTORY · audit trail (written by app in same txn) ──────────────

CREATE TABLE IF NOT EXISTS stage_history (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  quote_id        INTEGER NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
  from_stage_id   INTEGER REFERENCES quote_stages(id),
  to_stage_id     INTEGER NOT NULL REFERENCES quote_stages(id),
  changed_at      TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  changed_by      INTEGER REFERENCES team_members(id),
  note            TEXT
);
CREATE INDEX IF NOT EXISTS idx_stage_history_quote ON stage_history(quote_id);

-- ─── USERS · auth (bcrypt password_hash, role enforced at app layer) ───────

CREATE TABLE IF NOT EXISTS users (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  email           TEXT NOT NULL UNIQUE,
  name            TEXT NOT NULL,
  password_hash   TEXT NOT NULL,
  role            TEXT NOT NULL CHECK (role IN ('cosai_admin','sinbau_ceo','estimator','project_manager')),
  team_member_id  INTEGER REFERENCES team_members(id),
  active          INTEGER NOT NULL DEFAULT 1,
  must_change_password INTEGER NOT NULL DEFAULT 1,   -- force-change on first login (Phase 3)
  created_at      TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  last_login_at   TEXT
);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- ─── SCHEMA VERSION TRACKING ────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS schema_migrations (
  version    INTEGER PRIMARY KEY,
  name       TEXT NOT NULL,
  applied_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (1, '0001_schema');
