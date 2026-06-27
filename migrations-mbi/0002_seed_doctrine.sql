-- ═══════════════════════════════════════════════════════════════════════════
-- Seed: locked YMT doctrine dimensions
-- Source: ymt-group-strategy.tsx · ymt-channel.tsx · ymt-paid.tsx ·
--         ymt-bowtie.tsx · ymt-kpi-contract.tsx
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── 3 LOBs (locked 55/30/15 Y2 sales mix · 51.8/31.9/16.0 paid mix) ───────

INSERT OR IGNORE INTO dim_lob (code, name, yr1_paid_share, yr1_paid_budget, yr1_revenue_target, gpm_target, display_order) VALUES
  ('TDR', 'Termite Damage Repair',  0.518, 224000, 2750000, 0.45, 1),
  ('POE', 'Pools & Outdoor Entertainment', 0.319, 138000, 1500000, 0.32, 2),
  ('UR',  'Unit Renovations',       0.160,  69000,  750000, 0.30, 3);

-- ─── 4 Regions (SEQ = rollup of BNE+GC+SC) ─────────────────────────────────

INSERT OR IGNORE INTO dim_region (code, name, is_rollup, display_order) VALUES
  ('SEQ', 'South East Queensland (portfolio)', 1, 1),
  ('BNE', 'Brisbane',       0, 2),
  ('GC',  'Gold Coast',     0, 3),
  ('SC',  'Sunshine Coast', 0, 4);

-- ─── 7 Bowtie stages (L1/L2/L3 · R1/R2/R3/R4 · F1/F2/F3 mapping) ───────────

INSERT OR IGNORE INTO dim_stage (code, name, side, funnel, display_order) VALUES
  ('L1', 'Awareness',   'pre-purchase',  'F1', 1),
  ('L2', 'Education',   'pre-purchase',  'F1', 2),
  ('L3', 'Selection',   'pre-purchase',  'F1', 3),
  ('R1', 'Onboarding',  'post-purchase', 'F2', 4),
  ('R2', 'Impact',      'post-purchase', 'F2', 5),
  ('R3', 'Expansion',   'post-purchase', 'F2', 6),
  ('R4', 'Advocacy',    'post-purchase', 'F3', 7);

-- ─── 12 Channels (per CH-01 12-channel matrix) ─────────────────────────────
-- horizon: long (60% of $720K) | short (40%)
-- oep_class: owned | earned | paid (target 45/25/30 by 2030)

INSERT OR IGNORE INTO dim_channel (code, name, category, budget_bucket, horizon, oep_class, display_order) VALUES
  ('google-search',  'Google Search Ads',      'paid',     'shared', 'short', 'paid',   1),
  ('meta',           'Meta (FB+IG) Ads',        'paid',     'shared', 'short', 'paid',   2),
  ('linkedin',       'LinkedIn Ads',           'paid',     'UR',     'short', 'paid',   3),
  ('youtube',        'YouTube Ads',            'paid',     'shared', 'short', 'paid',   4),
  ('seo',            'Organic Search (SEO/GEO)','organic',  'shared', 'long',  'owned',  5),
  ('aeo',            'AI Answer Engines',      'organic',  'shared', 'long',  'earned', 6),
  ('gbp-local',      'Google Business Profile','organic',  'shared', 'long',  'owned',  7),
  ('email',          'Email Marketing',        'email',    'shared', 'long',  'owned',  8),
  ('content-hub',    'Content/Blog Hub',       'organic',  'shared', 'long',  'owned',  9),
  ('referral-partner','Referral Partners',     'referral', 'shared', 'long',  'earned',10),
  ('pr-editorial',   'PR & Editorial',         'organic',  'shared', 'long',  'earned',11),
  ('direct',         'Direct / Brand',         'direct',   'shared', 'long',  'owned', 12);

-- ─── UTM convention (LOCKED — the schema both teams must follow) ───────────

INSERT OR REPLACE INTO utm_convention (field, rule_pattern, example, description) VALUES
  ('utm_source',
   '^(google|meta|linkedin|youtube|email|referral|direct|organic|gbp|aeo|pr)$',
   'meta',
   'Channel root. Lowercase. One of: google · meta · linkedin · youtube · email · referral · direct · organic · gbp · aeo · pr.'),
  ('utm_medium',
   '^(paid|cpc|cpm|organic|email|social|referral|qr|partner|direct)$',
   'paid',
   'Acquisition type. paid · cpc · cpm · organic · email · social · referral · qr (print) · partner · direct.'),
  ('utm_campaign',
   '^(tdr|poe|ur)-(l1|l2|l3|r1|r2|r3|r4)-(seq|bne|gc|sc)(-[a-z0-9]+)?$',
   'poe-l1-seq-decks',
   'LOB-stage-region(-cell). LOB: tdr/poe/ur. Stage: l1/l2/l3/r1/r2/r3/r4. Region: seq/bne/gc/sc. Optional cell descriptor.'),
  ('utm_content',
   '^[a-z0-9]+(-[a-z0-9]+)*$',
   'video-16x9-v1',
   'Creative variant ID. Lowercase, hyphen-separated. e.g. video-16x9-v1 · carousel-renovators-v3 · brochure-front · qr-print-1.'),
  ('utm_term',
   '^[a-z0-9]+(-[a-z0-9]+)*$',
   'pool-deck-brisbane',
   'Keyword OR audience ID. Lowercase, hyphen-separated. e.g. pool-deck-brisbane · renovators-25-44 · lookalike-1pct.');

-- ─── 4 North Star targets (per KP-16 + KPI Contract) ───────────────────────

INSERT OR IGNORE INTO north_star_targets (code, name, description, target_value, target_date, unit, direction, display_order) VALUES
  ('LTGP_AC',
   'Lifetime GP per Acquired Customer',
   'Portfolio LTGP:AC ratio — primary commercial north star. Drives the $36K floor across the 30× LTV economics model.',
   36000, '2028-12-31', '$', 'gte', 1),
  ('F1_CASC',
   'F1 Acquisition Cost (CAS-C)',
   'Cost to acquire a stranger → SQL → closed-won customer. F1 funnel efficiency ceiling.',
   3200, '2027-12-31', '$', 'lte', 2),
  ('F2_CROSS_LOB',
   'F2 Cross-LOB Attach Rate',
   'Share of closed-won customers who purchase a second LOB within 24 months. Expansion engine health.',
   0.29, '2028-12-31', '%', 'gte', 3),
  ('F3_REFERRAL',
   'F3 Referral Revenue Share',
   'Share of total revenue attributable to advocacy/referral. Advocacy flywheel health.',
   0.22, '2028-12-31', '%', 'gte', 4),
  ('CUMULATIVE_CUSTOMERS',
   'Cumulative Stewardship Customers',
   'Total customers under stewardship by end of Yr-3.',
   1280, '2028-12-31', 'count', 'gte', 5),
  ('SHARE_OF_SEARCH',
   'Share of Search',
   'Brand share of category search queries across SEQ. GEO/AEO authority indicator.',
   0.12, '2027-12-31', '%', 'gte', 6);

-- ─── Default users (Carla + Corrina + placeholder slots) ───────────────────

INSERT OR IGNORE INTO users (email, display_name, role, organisation) VALUES
  ('carla@cosai.com.au',   'Carla Oliver',   'admin',   'CoSai'),
  ('corrina@ydt.com.au',   'Corrina McGowan','admin',   'YDT'),
  ('gerry@ybmt.com.au',    'Gerry',          'viewer',  'YBMT'),
  ('matt@ybmt.com.au',     'Matt',           'viewer',  'YBMT');

-- ─── Yr-1 spend plan (the $720K envelope · $432K paid + $288K non-paid) ────
-- TDR $224K / POE $138K / UR $69K = $432K paid total
-- Spread evenly across 12 months as starting allocation (will be overridden by ingest)

-- Google Search (cross-LOB, weighted to paid mix)
INSERT OR IGNORE INTO spend_plan (year, month, channel_code, lob_code, region_code, planned_amount, notes) VALUES
  (2026, 1, 'google-search', 'TDR', 'SEQ', 7466.67, 'Yr1 even-spread starter — refine after first 90 days'),
  (2026, 1, 'google-search', 'POE', 'SEQ', 4600.00, 'Yr1 even-spread starter'),
  (2026, 1, 'google-search', 'UR',  'SEQ', 2300.00, 'Yr1 even-spread starter'),
  (2026, 1, 'meta',          'TDR', 'SEQ', 3733.33, 'Yr1 even-spread starter'),
  (2026, 1, 'meta',          'POE', 'SEQ', 4600.00, 'POE is meta-heavy LOB'),
  (2026, 1, 'meta',          'UR',  'SEQ', 1150.00, 'Yr1 even-spread starter'),
  (2026, 1, 'linkedin',      'UR',  'SEQ', 1333.33, 'LinkedIn $16K/yr dedicated to UR Investor segment'),
  (2026, 1, 'youtube',       'TDR', 'SEQ', 1866.67, 'Yr1 even-spread starter'),
  (2026, 1, 'youtube',       'POE', 'SEQ', 2300.00, 'Yr1 even-spread starter'),
  (2026, 1, 'youtube',       'UR',  'SEQ',  766.67, 'Yr1 even-spread starter');
-- (additional months 2-12 will be cloned by an ingest helper · keeping seed lean)
