-- ============================================================================
-- CoSai. × YBMT — CRM Lookup Seed · 0002 · Canonical reference data
-- ----------------------------------------------------------------------------
-- All lookup values from Part 2 of the build brief.
-- Idempotent: INSERT OR IGNORE on every row so re-running is safe.
-- Money columns seeded as INTEGER cents (×100).
-- ============================================================================

-- ─── LINES OF BUSINESS ──────────────────────────────────────────────────────
INSERT OR IGNORE INTO lines_of_business
  (id, code,        name,                     description, is_specialty, sort_order, color,     active, target_avg_won_value_cents, target_wins_per_week) VALUES
  (1,  'UNIT_RENO',  'Unit Renovations',      'Full/partial unit reno, kitchen/bathroom/laundry, flooring, painting, fixtures, pre-tenant refresh.', 1, 1, '#3b82f6', 1, 2500000,  2.0),
  (2,  'TERMITE',    'Termite Damage Repair', 'Structural restoration of termite-damaged homes. Insurance claim repair work.',                       1, 2, '#a8453c', 1, 5000000,  0.6),
  (3,  'POOL_OUT',   'Decks Entertainment',   'Decking, pergolas, outdoor kitchens, pool surrounds, alfresco roofing, custom outdoor builds.',         1, 3, '#0ea5e9', 1, 3500000,  0.4),
  (4,  'COMMERCIAL', 'Commercial / Other',    'Commercial defit/fitout, make good, strata common-area, non-specialty.',                              0, 4, '#c8a96a', 1, 3000000,  0.2);

-- ─── REGIONS ────────────────────────────────────────────────────────────────
INSERT OR IGNORE INTO regions (id, code, name, sort_order, active) VALUES
  (1, 'GC',  'Gold Coast',     1, 1),
  (2, 'BNE', 'Brisbane',       2, 1),
  (3, 'SC',  'Sunshine Coast', 3, 1);

-- ─── QUOTE STAGES (11) ──────────────────────────────────────────────────────
-- Terminal: 9 (won), 10 (lost), 11 (lost)
INSERT OR IGNORE INTO quote_stages (id, name, sort_order, is_terminal, is_won, is_lost, color) VALUES
  (1,  'RFQ Received',                1,  0, 0, 0, '#6366f1'),
  (2,  'Site Visit Scheduled',        2,  0, 0, 0, '#0ea5e9'),
  (3,  'Site Visit Complete',         3,  0, 0, 0, '#06b6d4'),
  (4,  'Quote In Preparation',        4,  0, 0, 0, '#8b5cf6'),
  (5,  'Quote Sent',                  5,  0, 0, 0, '#f59e0b'),
  (6,  'Follow-up / Negotiation',     6,  0, 0, 0, '#f97316'),
  (7,  'Requote In Progress',         7,  0, 0, 0, '#eab308'),
  (8,  'On Hold',                     8,  0, 0, 0, '#94a3b8'),
  (9,  'Accepted — Handed to Aroflo', 9,  1, 1, 0, '#10b981'),
  (10, 'Rejected',                    10, 1, 0, 1, '#ef4444'),
  (11, 'Lost / Withdrawn',            11, 1, 0, 1, '#64748b');

-- ─── REJECT REASONS (9) · ids 1, 2, 4 are requote-eligible ─────────────────
INSERT OR IGNORE INTO reject_reasons (id, reason, is_requote_eligible, sort_order, active) VALUES
  (1, 'Price too high',                              1, 1,  1),
  (2, 'Timeline too long / unavailable when needed', 1, 2,  1),
  (3, 'Project cancelled / postponed by client',     0, 3,  1),
  (4, 'Scope changed',                               1, 4,  1),
  (5, 'Budget not approved',                         0, 5,  1),
  (6, 'No response from client',                     0, 6,  1),
  (7, 'Went with another contractor',                0, 7,  1),
  (8, 'Insurance / claim not approved',              0, 8,  1),
  (9, 'Other',                                       0, 99, 1);

-- ─── CONTACT METHODS (11) ───────────────────────────────────────────────────
INSERT OR IGNORE INTO contact_methods (id, name, category, sort_order, active) VALUES
  (1,  'Phone call (inbound)',         'Phone',     1,  1),
  (2,  'Phone call (outbound)',        'Phone',     2,  1),
  (3,  'Email (inbound)',              'Email',     3,  1),
  (4,  'Email (outbound)',             'Email',     4,  1),
  (5,  'SMS / text',                   'Messaging', 5,  1),
  (6,  'WhatsApp',                     'Messaging', 6,  1),
  (7,  'On-site meeting / site visit', 'Meeting',   7,  1),
  (8,  'Video call (Zoom/Teams)',      'Meeting',   8,  1),
  (9,  'In-person meeting (office)',   'Meeting',   9,  1),
  (10, 'Quote document sent',          'Document',  10, 1),
  (11, 'Aroflo handover',              'System',    11, 1);

-- ─── LEAD SOURCES (21) ──────────────────────────────────────────────────────
INSERT OR IGNORE INTO lead_sources (id, name, category, is_paid, sort_order, active) VALUES
  (1,  'Website / contact form',          'Digital',   0, 1,  1),
  (2,  'Facebook — organic',              'Digital',   0, 2,  1),
  (3,  'Facebook — paid ad',              'Digital',   1, 3,  1),
  (4,  'Google — paid ad',                'Digital',   1, 4,  1),
  (5,  'Google — organic search',         'Digital',   0, 5,  1),
  (6,  'Instagram',                       'Digital',   0, 6,  1),
  (7,  'LinkedIn',                        'Digital',   0, 7,  1),
  (8,  'Referral — existing client',      'Referral',  0, 10, 1),
  (9,  'Referral — trade partner',        'Referral',  0, 11, 1),
  (10, 'Referral — pool builder',         'Referral',  0, 12, 1),
  (11, 'Referral — pest inspector',       'Referral',  0, 13, 1),
  (12, 'Referral — architect / designer', 'Referral',  0, 14, 1),
  (13, 'Referral — real estate agent',    'Referral',  0, 15, 1),
  (14, 'Insurance — loss adjuster',       'Insurance', 0, 20, 1),
  (15, 'Insurance — direct claim',        'Insurance', 0, 21, 1),
  (16, 'Strata manager',                  'Direct',    0, 30, 1),
  (17, 'Repeat customer',                 'Direct',    0, 31, 1),
  (18, 'Phone enquiry — unknown source',  'Direct',    0, 32, 1),
  (19, 'Walk-in / on-site enquiry',       'Direct',    0, 33, 1),
  (20, 'Trade show / event',              'Direct',    0, 34, 1),
  (21, 'Other / Unknown',                 'Direct',    0, 99, 1);

-- ─── FINANCIAL TARGETS (12) ─────────────────────────────────────────────────
-- target/stretch stored as INTEGER cents.
-- For percentage metrics (win_rate_pct, gpm_target_pct, etc.) values are
-- stored as cents-of-a-percent (×100), so 34.00% = 3400, 50.00% = 5000.
-- For day/hour metrics, values stored as ×100 too (so 5.00 days = 500).
-- The unit column tells the formatter how to render it.
INSERT OR IGNORE INTO financial_targets (id, metric, target_value_cents, stretch_value_cents, unit, description, active) VALUES
  (1,  'weekly_won_value',       10000000, 15000000, '$/week', 'Target value of jobs WON per week', 1),
  (2,  'weekly_rfq_value',       20000000, 25000000, '$/week', 'Target value of NEW RFQs received per week', 1),
  (3,  'win_rate_pct',           5000,     7500,     '%',      'RFQ → Accepted conversion rate', 1),
  (4,  'gpm_target_pct',         3400,     4000,     '%',      'Gross profit margin target on sent quotes', 1),
  (5,  'response_time_hours',    100,      NULL,     'hours',  'P90 time from RFQ received to first customer contact', 1),
  (6,  'quote_cycle_days',       500,      300,      'days',   'P90 time from RFQ received to quote sent', 1),
  (7,  'decision_window_days',   1000,     NULL,     'days',   'Target decision time after quote sent', 1),
  (8,  'follow_up_cadence_days', 200,      NULL,     'days',   'Max gap between customer touchpoints on a sent quote', 1),
  (9,  'cost_variance_pct',      500,      NULL,     '%',      'Max variance estimated vs delivered (won jobs)', 1),
  (10, 'gpm_compliance_pct',     9000,     10000,    '%',      '% of sent quotes that meet/beat 34% GPM target', 1),
  (11, 'reject_capture_pct',     10000,    10000,    '%',      '% of rejected quotes with a captured reject reason', 1),
  (12, 'stale_quote_pct',        1000,     500,      '%',      'Max % of open quotes past their stage SLA', 1);

-- ─── STAGE SLAs (7) ─────────────────────────────────────────────────────────
INSERT OR IGNORE INTO stage_slas (id, from_stage_id, to_stage_id, sla_name, target_hours, breach_hours, description, active) VALUES
  (1, 1,  NULL, 'First response (RFQ → first contact)',   1,   4,   'Respond within 1 business hour. Conversion drops sharply after 4h.', 1),
  (2, 1,  2,    'Site visit booked',                      24,  48,  'Once first contact made, book the site visit within 24h.', 1),
  (3, 2,  3,    'Site visit completed',                   48,  120, 'From scheduling to completion.', 1),
  (4, 3,  5,    'Quote prep + sent',                      48,  120, 'From site visit complete to quote sent.', 1),
  (5, 5,  NULL, 'First follow-up after sending',          24,  72,  'Touchpoint within 24h of sending quote.', 1),
  (6, 5,  NULL, 'Decision close window',                  240, 504, '10 business days target to a yes/no. 21d = stale.', 1),
  (7, 10, 7,    'Requote on price/timeline/scope reject', 120, 240, 'Hot rejections deserve a quick second bite. 5 business days.', 1);

-- ─── TEAM MEMBERS (5) ───────────────────────────────────────────────────────
INSERT OR IGNORE INTO team_members (id, full_name, role, company, active) VALUES
  (1, 'Carla Olver CPA CIMA', 'Embedded Finance Project Manager', 'COSAI Construction Pty Ltd', 1),
  (2, 'Gerry McGuire',        'CEO',                              'Sinbau Pty Ltd',             1),
  (3, 'Matt Gran',            'Estimator',                        'Sinbau Pty Ltd',             1),
  (4, 'Paul Stanborough',     'Project Manager',                  'Sinbau Pty Ltd',             1),
  (5, 'Darcy Coombs',         'Project Manager',                  'Sinbau Pty Ltd',             1);

-- ─── SCOPES (33, grouped by LoB) ────────────────────────────────────────────
INSERT OR IGNORE INTO scopes (id, name, sort_order, active, line_of_business_id) VALUES
  -- Unit Renovations (LoB 1)
  (11, 'Full unit renovation',                  10, 1, 1),
  (12, 'Partial unit renovation',               11, 1, 1),
  (13, 'Kitchen renovation / upgrade',          12, 1, 1),
  (14, 'Bathroom renovation',                   13, 1, 1),
  (15, 'Laundry renovation',                    14, 1, 1),
  (16, 'Flooring replacement',                  15, 1, 1),
  (17, 'Internal painting & cosmetic',          16, 1, 1),
  (18, 'Fixture & fitting replacement',         17, 1, 1),
  (19, 'Pre-tenant / pre-sale refresh',         18, 1, 1),
  (20, 'General maintenance & repairs',         19, 1, 1),
  -- Termite (LoB 2)
  (21, 'Load-bearing timber replacement',       20, 1, 2),
  (22, 'Wall framing repair',                   21, 1, 2),
  (23, 'Floor joist & bearer replacement',      22, 1, 2),
  (24, 'Roof framing & truss repair',           23, 1, 2),
  (25, 'Sub-floor structural works',            24, 1, 2),
  (26, 'Engineer-certified structural repair',  25, 1, 2),
  (27, 'Termite damage assessment',             26, 1, 2),
  (28, 'Plaster, cornice & finishing make-good',27, 1, 2),
  (29, 'Insurance claim repair',                28, 1, 2),
  -- Decks Entertainment (LoB 3)
  (30, 'Timber decking',                        30, 1, 3),
  (31, 'Composite decking',                     31, 1, 3),
  (32, 'Pool surround deck',                    32, 1, 3),
  (33, 'Stairs, steps & balustrades',           33, 1, 3),
  (34, 'Pool fencing & screens',                34, 1, 3),
  (35, 'Pergola / patio',                       35, 1, 3),
  (36, 'Outdoor kitchen',                       36, 1, 3),
  (37, 'Alfresco roofing',                      37, 1, 3),
  (38, 'Privacy screens & awnings',             38, 1, 3),
  (39, 'Custom outdoor build',                  39, 1, 3),
  -- Commercial / Other (LoB 4)
  (40, 'Commercial defit',                      50, 1, 4),
  (41, 'Commercial fitout',                     51, 1, 4),
  (42, 'Make good',                             52, 1, 4),
  (44, 'Other / Custom',                        99, 1, 4);

-- Mark migration applied
INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (2, '0002_lookups');
