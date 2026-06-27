-- ═══════════════════════════════════════════════════════════════════════════
-- YMT Marketing Funnel BI Tool · v1 Initial Schema
-- ═══════════════════════════════════════════════════════════════════════════
-- Built to locked YMT doctrine:
--   · 3 LOBs (Termite/Pools/Units · TDR/POE/UR)
--   · 3 Regions (SEQ/BNE/GC/SC — SEQ = portfolio rollup)
--   · 7 Bowtie stages (L1/L2/L3 → R1/R2/R3/R4)
--   · 12 Channels (per CH-01 matrix)
--   · F1/F2/F3 (Acquisition/Expansion/Advocacy)
--   · 4 North Stars (LTGP/AC · CAS-C · cross-LOB attach · referral %)
--   · 60/40 long/short · O/E/P 12/18/70 → 45/25/30
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── Dimension tables (the locked 3×3 grid + channels + stages) ────────────

CREATE TABLE IF NOT EXISTS dim_lob (
  code TEXT PRIMARY KEY,           -- 'TDR' | 'POE' | 'UR'
  name TEXT NOT NULL,              -- 'Termite Damage Repair' etc.
  yr1_paid_share REAL NOT NULL,    -- 0.518 (TDR=$224K/$432K) | 0.319 (POE) | 0.160 (UR)
  yr1_paid_budget REAL NOT NULL,   -- 224000 | 138000 | 69000
  yr1_revenue_target REAL,         -- portion of $5M
  gpm_target REAL,                 -- TDR=0.45 etc.
  display_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS dim_region (
  code TEXT PRIMARY KEY,           -- 'SEQ' | 'BNE' | 'GC' | 'SC'
  name TEXT NOT NULL,
  is_rollup INTEGER DEFAULT 0,     -- SEQ = rollup of BNE+GC+SC
  display_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS dim_stage (
  code TEXT PRIMARY KEY,           -- 'L1' | 'L2' | 'L3' | 'R1' | 'R2' | 'R3' | 'R4'
  name TEXT NOT NULL,              -- 'Awareness' | 'Education' | 'Selection' | ...
  side TEXT NOT NULL,              -- 'pre-purchase' | 'post-purchase'
  funnel TEXT NOT NULL,            -- 'F1' (acquisition) | 'F2' (expansion) | 'F3' (advocacy)
  display_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS dim_channel (
  code TEXT PRIMARY KEY,           -- 'google-search' | 'meta' | 'linkedin' | ...
  name TEXT NOT NULL,
  category TEXT NOT NULL,          -- 'paid' | 'organic' | 'email' | 'referral' | 'direct'
  budget_bucket TEXT,              -- 'TDR' | 'POE' | 'UR' | 'shared' (for paid envelope)
  horizon TEXT NOT NULL,           -- 'long' | 'short' (for 60/40 split)
  oep_class TEXT NOT NULL,         -- 'owned' | 'earned' | 'paid'
  display_order INTEGER NOT NULL
);

-- ─── UTM convention dictionary (the locked schema · LIVE source of truth) ──

CREATE TABLE IF NOT EXISTS utm_convention (
  field TEXT PRIMARY KEY,          -- 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term'
  rule_pattern TEXT NOT NULL,      -- regex or grammar
  example TEXT NOT NULL,
  description TEXT NOT NULL,
  locked_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Validation log: every inbound UTM gets checked against the convention
CREATE TABLE IF NOT EXISTS utm_validation_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  observed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  is_valid INTEGER NOT NULL,       -- 1 = passes convention, 0 = drifts
  drift_reason TEXT,
  source_url TEXT,
  lead_id TEXT                     -- FK reference to CRM lead (cross-db)
);
CREATE INDEX IF NOT EXISTS idx_utm_validation_observed ON utm_validation_log(observed_at);
CREATE INDEX IF NOT EXISTS idx_utm_validation_valid ON utm_validation_log(is_valid);

-- ─── Spend tables (the $720K envelope · Yr-1 plan vs actuals) ──────────────

CREATE TABLE IF NOT EXISTS spend_plan (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  year INTEGER NOT NULL,           -- 2026
  month INTEGER NOT NULL,          -- 1..12
  channel_code TEXT NOT NULL,
  lob_code TEXT NOT NULL,
  region_code TEXT NOT NULL,
  stage_code TEXT,                 -- null = LOB-level not stage-allocated
  planned_amount REAL NOT NULL,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (channel_code) REFERENCES dim_channel(code),
  FOREIGN KEY (lob_code) REFERENCES dim_lob(code),
  FOREIGN KEY (region_code) REFERENCES dim_region(code)
);
CREATE INDEX IF NOT EXISTS idx_spend_plan_ym ON spend_plan(year, month);
CREATE INDEX IF NOT EXISTS idx_spend_plan_lob ON spend_plan(lob_code);

CREATE TABLE IF NOT EXISTS spend_actuals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  spend_date DATE NOT NULL,        -- daily granularity
  channel_code TEXT NOT NULL,
  lob_code TEXT NOT NULL,
  region_code TEXT NOT NULL,
  stage_code TEXT,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'AUD',
  source TEXT NOT NULL,            -- 'csv' | 'google-ads-api' | 'meta-api' | 'linkedin-api' | 'manual'
  external_id TEXT,                -- the platform's campaign/ad ID for reconciliation
  raw_payload TEXT,                -- JSON dump of source row for audit
  ingested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (channel_code) REFERENCES dim_channel(code),
  FOREIGN KEY (lob_code) REFERENCES dim_lob(code),
  FOREIGN KEY (region_code) REFERENCES dim_region(code)
);
CREATE INDEX IF NOT EXISTS idx_spend_actuals_date ON spend_actuals(spend_date);
CREATE INDEX IF NOT EXISTS idx_spend_actuals_channel ON spend_actuals(channel_code);
CREATE INDEX IF NOT EXISTS idx_spend_actuals_lob_region ON spend_actuals(lob_code, region_code);

-- ─── Activity metrics (the 84-cell matrix: 12 channels × 7 stages) ─────────

CREATE TABLE IF NOT EXISTS activity_metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  metric_date DATE NOT NULL,
  channel_code TEXT NOT NULL,
  stage_code TEXT NOT NULL,
  lob_code TEXT,
  region_code TEXT,
  impressions INTEGER DEFAULT 0,
  reach INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  ctr REAL,                        -- computed but stored for fast read
  cpc REAL,
  cpm REAL,
  spend REAL DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  conversion_value REAL DEFAULT 0,
  source TEXT NOT NULL,            -- 'google-ads-api' | 'meta-api' | 'csv' | 'ga4-api' | 'manual'
  external_id TEXT,
  ingested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (channel_code) REFERENCES dim_channel(code),
  FOREIGN KEY (stage_code) REFERENCES dim_stage(code)
);
CREATE INDEX IF NOT EXISTS idx_activity_date ON activity_metrics(metric_date);
CREATE INDEX IF NOT EXISTS idx_activity_channel_stage ON activity_metrics(channel_code, stage_code);

-- ─── Attribution events (every touch · 6 attribution models supported) ─────
-- One row per touchpoint per lead. A "lead" has many "touches".

CREATE TABLE IF NOT EXISTS attribution_touches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id TEXT NOT NULL,           -- cross-db FK to CRM (cosai-crm.leads.id)
  touch_sequence INTEGER NOT NULL, -- 1 = first touch, n = last
  touch_timestamp DATETIME NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  channel_code TEXT,               -- resolved from utm_source via mapping
  lob_code TEXT,                   -- parsed from utm_campaign (LOB-stage-cell convention)
  region_code TEXT,                -- parsed from utm_campaign
  stage_code TEXT,                 -- parsed from utm_campaign
  referrer TEXT,
  landing_page TEXT,
  session_id TEXT,
  ingested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (channel_code) REFERENCES dim_channel(code)
);
CREATE INDEX IF NOT EXISTS idx_touches_lead ON attribution_touches(lead_id);
CREATE INDEX IF NOT EXISTS idx_touches_ts ON attribution_touches(touch_timestamp);
CREATE INDEX IF NOT EXISTS idx_touches_campaign ON attribution_touches(utm_campaign);

-- Lead snapshot pulled from CRM (cross-db read) for fast joins.
-- Refreshed daily via scheduled ingest job.
CREATE TABLE IF NOT EXISTS lead_snapshot (
  lead_id TEXT PRIMARY KEY,
  created_at DATETIME NOT NULL,
  stage TEXT,                      -- 'mql' | 'sql' | 'quoted' | 'won' | 'lost'
  lob_code TEXT,                   -- which LOB the lead converted into
  region_code TEXT,
  pipeline_value REAL,             -- quote value
  closed_value REAL,               -- if won
  closed_at DATETIME,
  is_cross_lob_expansion INTEGER DEFAULT 0,
  is_referral INTEGER DEFAULT 0,
  refreshed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_lead_snapshot_stage ON lead_snapshot(stage);
CREATE INDEX IF NOT EXISTS idx_lead_snapshot_lob ON lead_snapshot(lob_code);

-- Computed attribution credits per model (one row per lead per touch per model)
CREATE TABLE IF NOT EXISTS attribution_credits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id TEXT NOT NULL,
  touch_id INTEGER NOT NULL,
  model TEXT NOT NULL,             -- 'first' | 'last' | 'linear' | 'time-decay' | 'position' | 'data-driven'
  credit REAL NOT NULL,            -- 0..1
  computed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (touch_id) REFERENCES attribution_touches(id)
);
CREATE INDEX IF NOT EXISTS idx_credits_lead_model ON attribution_credits(lead_id, model);

-- ─── North Star snapshots (4 locked targets · daily history) ───────────────

CREATE TABLE IF NOT EXISTS north_star_targets (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  target_value REAL NOT NULL,
  target_date DATE NOT NULL,
  unit TEXT NOT NULL,              -- '$' | '%' | 'count' | 'ratio'
  direction TEXT NOT NULL,         -- 'lte' (lower is better) | 'gte' (higher is better)
  display_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS north_star_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  snapshot_date DATE NOT NULL,
  target_code TEXT NOT NULL,
  actual_value REAL NOT NULL,
  status TEXT NOT NULL,            -- 'on-track' | 'at-risk' | 'off-track'
  notes TEXT,
  computed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (target_code) REFERENCES north_star_targets(code)
);
CREATE INDEX IF NOT EXISTS idx_ns_snapshots_date ON north_star_snapshots(snapshot_date);

-- ─── Cell performance (the 3×3 grid heatmap · pre-aggregated for speed) ────

CREATE TABLE IF NOT EXISTS cell_performance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  lob_code TEXT NOT NULL,
  region_code TEXT NOT NULL,
  spend REAL DEFAULT 0,
  sessions INTEGER DEFAULT 0,
  mqls INTEGER DEFAULT 0,
  sqls INTEGER DEFAULT 0,
  quoted INTEGER DEFAULT 0,
  won INTEGER DEFAULT 0,
  pipeline_value REAL DEFAULT 0,
  closed_value REAL DEFAULT 0,
  cas_c REAL,                       -- cost to acquire customer (closed-won basis)
  cas_sql REAL,                     -- cost per SQL
  win_rate REAL,
  computed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (lob_code) REFERENCES dim_lob(code),
  FOREIGN KEY (region_code) REFERENCES dim_region(code)
);
CREATE INDEX IF NOT EXISTS idx_cell_perf_period ON cell_performance(period_start, period_end);
CREATE INDEX IF NOT EXISTS idx_cell_perf_lob_region ON cell_performance(lob_code, region_code);

-- ─── Anomaly detection (the "things going wrong" feed) ─────────────────────

CREATE TABLE IF NOT EXISTS anomalies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  detected_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  metric TEXT NOT NULL,            -- 'spend' | 'ctr' | 'cpc' | 'sql-volume' | 'cas-c' | 'win-rate'
  scope_lob TEXT,
  scope_region TEXT,
  scope_channel TEXT,
  expected REAL NOT NULL,
  actual REAL NOT NULL,
  delta_pct REAL NOT NULL,
  severity TEXT NOT NULL,          -- 'info' | 'warning' | 'critical'
  status TEXT DEFAULT 'open',      -- 'open' | 'acknowledged' | 'resolved' | 'dismissed'
  resolved_at DATETIME,
  resolved_by TEXT,
  notes TEXT
);
CREATE INDEX IF NOT EXISTS idx_anomalies_status ON anomalies(status);
CREATE INDEX IF NOT EXISTS idx_anomalies_severity ON anomalies(severity);

-- ─── API credentials (encrypted at rest · referenced by ingestion jobs) ────

CREATE TABLE IF NOT EXISTS api_credentials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  service TEXT NOT NULL,           -- 'google-ads' | 'meta' | 'linkedin' | 'ga4' | 'gsc' | 'mailchimp' | 'callrail'
  account_label TEXT NOT NULL,     -- human-readable e.g. "Corrina · YDT Google Ads"
  status TEXT DEFAULT 'pending',   -- 'pending' | 'active' | 'expired' | 'revoked'
  account_id TEXT,                 -- e.g. Google Ads customer ID, Meta Business Manager ID
  secret_ref TEXT,                 -- reference to Cloudflare secret (NOT the secret itself)
  scopes TEXT,                     -- JSON array of granted scopes
  granted_by TEXT,                 -- who granted it
  granted_at DATETIME,
  expires_at DATETIME,
  last_used_at DATETIME,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_api_creds_service ON api_credentials(service);

-- ─── Ingest log (audit trail of every data load) ───────────────────────────

CREATE TABLE IF NOT EXISTS ingest_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  finished_at DATETIME,
  source TEXT NOT NULL,            -- 'csv' | 'google-ads-api' | 'meta-api' | etc.
  source_detail TEXT,              -- filename / account / endpoint
  rows_total INTEGER DEFAULT 0,
  rows_inserted INTEGER DEFAULT 0,
  rows_updated INTEGER DEFAULT 0,
  rows_rejected INTEGER DEFAULT 0,
  rejected_reasons TEXT,           -- JSON
  status TEXT DEFAULT 'running',   -- 'running' | 'completed' | 'failed'
  error_message TEXT,
  initiated_by TEXT                -- 'carla' | 'corrina' | 'system-scheduled'
);
CREATE INDEX IF NOT EXISTS idx_ingest_log_started ON ingest_log(started_at);

-- ─── Reports (saved dashboards + scheduled exports) ────────────────────────

CREATE TABLE IF NOT EXISTS saved_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  config TEXT NOT NULL,            -- JSON: filters, modules, layout
  owner TEXT NOT NULL,             -- 'carla' | 'corrina' | 'shared'
  is_scheduled INTEGER DEFAULT 0,
  schedule_cron TEXT,              -- e.g. '0 7 * * 1' = Mon 7am
  schedule_recipients TEXT,        -- JSON array of emails
  last_run_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS report_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  report_id INTEGER NOT NULL,
  ran_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  format TEXT NOT NULL,            -- 'pdf' | 'csv' | 'json' | 'email'
  status TEXT NOT NULL,            -- 'success' | 'failed'
  output_ref TEXT,                 -- R2 path or download URL
  error TEXT,
  FOREIGN KEY (report_id) REFERENCES saved_reports(id)
);

-- ─── Users + roles (multi-tenant access · Carla/Corrina/YDT analysts) ──────

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL,              -- 'admin' | 'analyst' | 'viewer' | 'exec'
  organisation TEXT,               -- 'CoSai' | 'YBMT' | 'YDT'
  active INTEGER DEFAULT 1,
  last_login_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── Annotations (Corrina's "we paused this campaign" notes on the timeline)
CREATE TABLE IF NOT EXISTS annotations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_date DATE NOT NULL,
  scope_lob TEXT,
  scope_region TEXT,
  scope_channel TEXT,
  title TEXT NOT NULL,
  body TEXT,
  author TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_annotations_date ON annotations(event_date);
