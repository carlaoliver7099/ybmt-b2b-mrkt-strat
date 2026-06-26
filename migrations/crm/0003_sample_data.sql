-- ============================================================================
-- CoSai. × YBMT — Sample Data Seed · 0003 · Training Mode dataset
-- ----------------------------------------------------------------------------
-- ~30 sample quotes across 4 LoBs × 3 regions × 8 stages
--  9 sample clients (3 per region · varied client_type)
-- ≥1 rejected quote with requote-eligible reason → demonstrates parent_quote_id chain
-- 5 contact_log entries on first sample quote → demonstrates timeline view
-- All rows is_sample=1 so "Clear all sample data" admin button can purge cleanly.
--
-- Pricing back-calculated from per-LoB target GPM:
--   UNIT_RENO 34% → cost = price × 0.66
--   TERMITE   36% → cost = price × 0.64
--   POOL_OUT  35% → cost = price × 0.65
--   COMMERCIAL 32% → cost = price × 0.68
--
-- Money columns stored as INTEGER cents (×100).
-- Dates anchored relative to 2026-05-15 (a plausible "today").
-- ============================================================================

-- ─── CLIENTS (9) ────────────────────────────────────────────────────────────
INSERT OR IGNORE INTO clients (id, client_name, client_type, primary_contact_name, primary_phone, primary_email, billing_address, referral_source, vip_flag, is_sample) VALUES
  -- Brisbane (3)
  (1001, 'Harbour View Strata',           'Strata',      'Linda Tomasetti', '0411 234 567', 'linda@harbourviewstrata.com.au', '12/45 Mary St, Brisbane City QLD 4000', 'Strata Manager Network',       0, 1),
  (1002, 'Helen & David Marsh',           'Residential', 'Helen Marsh',     '0412 887 991', 'helen.marsh@gmail.com',          '18 Wellington St, Bulimba QLD 4171',     'Referral – pool builder',     0, 1),
  (1003, 'Cumberland Insurance — Davies', 'Insurance',   'Greg Davies',     '0419 005 224', 'gdavies@cumberlandins.com.au',   '22 Stratton St, Newmarket QLD 4051',    'Loss adjuster',                0, 1),

  -- Gold Coast (3)
  (1004, 'Mermaid Waters Holdings',       'Residential', 'Anh Nguyen',      '0408 776 322', 'anh@mermaidholdings.com',        '14 Albatross Ave, Mermaid Beach QLD 4218','Repeat customer',             1, 1),
  (1005, 'Broadbeach Towers BCM',         'Strata',      'Michael Reilly',  '07 5572 8100', 'reception@broadbeachtowers.com.au','Lvl 4/22 Surf Pde, Broadbeach QLD 4218', 'Body corporate referral',   0, 1),
  (1006, 'James & Priya Whitcomb',        'Residential', 'James Whitcomb',  '0405 882 113', 'james.whitcomb@outlook.com',     '8 Brittany Pl, Sorrento QLD 4217',       'Google paid ad',              0, 1),

  -- Sunshine Coast (3)
  (1007, 'Noosa Heritage Properties',     'Residential', 'Robyn Casper',    '0488 332 109', 'robyn@noosaheritage.com.au',     '11 Mossman Ct, Sunshine Beach QLD 4567', 'Real estate agent',            0, 1),
  (1008, 'Mooloolaba Block 28',           'Strata',      'Tom Whittaker',   '07 5444 6622', 'admin@mooloolaba28.com.au',      '28 First Ave, Mooloolaba QLD 4557',     'Strata manager',                0, 1),
  (1009, 'Hastings Street Boutique',      'Commercial',  'Imogen Bell',     '07 5447 2300', 'imogen@hastingsstreetbtq.com.au','73 Hastings St, Noosa Heads QLD 4567',  'LinkedIn',                     0, 1);

-- ─── CLIENT CONTACTS (extra contacts for first sample quote's client) ──────
INSERT OR IGNORE INTO client_contacts (id, client_id, name, role, phone, email, is_primary, notes) VALUES
  (501, 1001, 'Linda Tomasetti',  'Building Manager', '0411 234 567', 'linda@harbourviewstrata.com.au', 1, 'Primary point of contact · authorised to approve works under $15k'),
  (502, 1001, 'Andrew Forsythe',  'BCM Chair',        '0410 882 716', 'andrew@harbourviewstrata.com.au', 0, 'Body corporate chair · signs off on works above $15k');

-- ─── QUOTES (30) ────────────────────────────────────────────────────────────
-- Quote-number scheme: Q-2026-NNNN (4-digit padded)
-- Stage spread: 1×stage1, 2×stage2, 3×stage3, 4×stage4, 6×stage5, 3×stage6,
--               1×stage7 (requote), 2×stage8, 4×stage9 (won), 3×stage10 (rejected), 1×stage11
-- LoB×Region spread targets the 4×3 funnel matrix demo.
--
-- Money: cents (×100). Examples: $42,000 → 4_200_000 cents
--
-- The first quote (id 2001) gets 5 contact log entries below to demo timeline.

INSERT OR IGNORE INTO quotes (
  id, quote_number, client_id, scope_id, stage_id, title, description, job_site_address,
  estimator_id, project_manager_id, line_of_business_id, region_id, lead_source_id,
  rfq_received_date, quote_sent_date, decision_date,
  estimated_cost_cents, sales_price_cents, win_probability_pct,
  accept_reason, reject_reason_id, reject_notes,
  is_requote, parent_quote_id, requote_opportunity, is_sample,
  rfq_received_at, first_response_at, quote_sent_at, last_touchpoint_at,
  notes
) VALUES

-- ═══ STAGE 5 · Quote Sent (6 quotes — the pipeline workhorse) ═══════════════
-- 2001 = Brisbane · Pool/Decks · the "hero" quote that demos the timeline
(2001, 'Q-2026-0001', 1001, 32, 5, 'Common-area lobby refurbishment',
  'Replace timber decking on lobby terrace, new pool-surround composite, pool-side stairs and balustrade refresh. BCM-approved scope.',
  '12/45 Mary St, Brisbane City QLD 4000',
  3, 4, 3, 2, 9,
  '2026-05-08', '2026-05-15', NULL,
  3835000, 5900000, 70,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-08T08:55:00Z', '2026-05-08T09:18:00Z', '2026-05-15T15:42:00Z', '2026-05-19T03:30:00Z',
  'Insurance carrier copied. BCM chair sign-off pending.'),

(2002, 'Q-2026-0002', 1004, 30, 5, 'Mermaid Waters timber deck rebuild',
  'Remove existing 56m² ironbark deck (8 yrs, salt-damaged). Install new ironbark deck with marine 316SS fixings. Strip and re-stain canal-side balustrade.',
  '14 Albatross Ave, Mermaid Beach QLD 4218',
  3, 5, 3, 1, 4,
  '2026-05-04', '2026-05-12', NULL,
  2535000, 3900000, 80,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-04T07:12:00Z', '2026-05-04T07:30:00Z', '2026-05-12T16:00:00Z', '2026-05-17T05:14:00Z',
  'Client wants to host New Year''s Eve. Hard deadline 2026-12-15.'),

(2003, 'Q-2026-0003', 1006, 11, 5, 'Sorrento unit — kitchen + ensuite refresh',
  '14yo unit. Replace kitchen joinery (laminate-on-board), new benchtops (engineered stone), tap/sink upgrade, ensuite tile + fixtures. Tenant-ready.',
  '8 Brittany Pl, Sorrento QLD 4217',
  3, 4, 1, 1, 4,
  '2026-04-29', '2026-05-09', NULL,
  2772000, 4200000, 60,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-29T11:40:00Z', '2026-04-29T13:55:00Z', '2026-05-09T14:18:00Z', '2026-05-12T22:00:00Z',
  'Client comparing 2 quotes. Site visit was good — relationship warm.'),

(2004, 'Q-2026-0004', 1007, 19, 5, 'Sunshine Beach pre-sale refresh',
  '4-bed Queenslander. Internal painting throughout, new floor finishes to living/bed areas, kitchen tap/handle refresh. Photo-ready in 28 days.',
  '11 Mossman Ct, Sunshine Beach QLD 4567',
  3, 4, 1, 3, 13,
  '2026-05-02', '2026-05-10', NULL,
  1815000, 2750000, 65,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-02T06:38:00Z', '2026-05-02T08:02:00Z', '2026-05-10T11:30:00Z', '2026-05-14T09:00:00Z',
  'Realtor referral. Listing goes live 2026-06-15.'),

(2005, 'Q-2026-0005', 1003, 26, 5, 'Newmarket termite repair — engineer-certified',
  'Sub-floor bearer + joist replacement. Insurance claim. Engineer cert required. Plaster make-good to 2 walls + cornice.',
  '22 Stratton St, Newmarket QLD 4051',
  3, 4, 2, 2, 14,
  '2026-04-22', '2026-05-04', NULL,
  4480000, 7000000, 55,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-22T13:20:00Z', '2026-04-22T14:11:00Z', '2026-05-04T16:45:00Z', '2026-05-11T22:00:00Z',
  'Insurance assessor reviewing. Approval expected late May.'),

(2006, 'Q-2026-0006', 1008, 13, 5, 'Mooloolaba unit 12 kitchen reno',
  'Kitchen demo + reinstall. 3.4m galley. New cabinetry, 40mm stone benchtop, induction cooktop, pyrolytic oven, hidden range hood.',
  '12/28 First Ave, Mooloolaba QLD 4557',
  3, 5, 1, 3, 16,
  '2026-05-01', '2026-05-11', NULL,
  2178000, 3300000, 55,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-01T07:25:00Z', '2026-05-01T09:00:00Z', '2026-05-11T13:11:00Z', '2026-05-13T11:30:00Z',
  'BCM approved scope. Awaiting client confirmation.'),

-- ═══ STAGE 6 · Follow-up / Negotiation (3 quotes) ══════════════════════════
(2007, 'Q-2026-0007', 1005, 33, 6, 'Broadbeach Towers — pool fencing replacement',
  'Body-corporate-mandated pool fence upgrade across 3 levels of pool deck. 142m of frameless glass + 8 gates. Compliance certificate at completion.',
  'Lvl 4/22 Surf Pde, Broadbeach QLD 4218',
  3, 5, 3, 1, 16,
  '2026-04-18', '2026-05-02', NULL,
  6175000, 9500000, 50,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-18T08:00:00Z', '2026-04-18T10:32:00Z', '2026-05-02T11:00:00Z', '2026-05-18T04:00:00Z',
  'BCM committee negotiating staging — wants to split across 2 financial years.'),

(2008, 'Q-2026-0008', 1002, 30, 6, 'Bulimba alfresco rebuild',
  '38m² alfresco roof, new ironbark deck under, ceiling fans, downlights, dual-zone ducted-fan louvres.',
  '18 Wellington St, Bulimba QLD 4171',
  3, 4, 3, 2, 10,
  '2026-04-25', '2026-05-06', NULL,
  4615000, 7100000, 60,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-25T17:30:00Z', '2026-04-26T08:15:00Z', '2026-05-06T15:20:00Z', '2026-05-17T08:00:00Z',
  'Pool builder referred — client is comparing one other quote.'),

(2009, 'Q-2026-0009', 1009, 41, 6, 'Hastings Street boutique fitout',
  'Boutique retail fitout. New tiled entry, joinery (3 cabinets), feature wall (limewashed VJ), ceiling-track lighting, custom cash-wrap.',
  '73 Hastings St, Noosa Heads QLD 4567',
  3, 5, 4, 3, 7,
  '2026-04-20', '2026-05-02', NULL,
  3060000, 4500000, 45,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-20T10:00:00Z', '2026-04-20T11:48:00Z', '2026-05-02T16:00:00Z', '2026-05-17T01:30:00Z',
  'Client has shifted timeline — needs August handover not July.'),

-- ═══ STAGE 4 · Quote In Preparation (4 quotes) ═════════════════════════════
(2010, 'Q-2026-0010', 1001, 19, 4, 'Harbour View — pre-tenant refresh unit 7',
  'Vacant unit handover refresh. Internal repaint, fixture cleanup, minor flooring make-good.',
  '12/45 Mary St, Brisbane City QLD 4000',
  3, 5, 1, 2, 8,
  '2026-05-10', NULL, NULL,
  1650000, 2500000, 70,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-10T09:00:00Z', '2026-05-10T11:00:00Z', NULL, '2026-05-13T03:00:00Z',
  'Quick refresh between tenants. Site visit done.'),

(2011, 'Q-2026-0011', 1004, 32, 4, 'Mermaid Waters pool-surround tiling',
  'Re-tile 84m² pool surround. Existing tiles lifted from salt damage. New porcelain large-format with anti-slip rating R11.',
  '14 Albatross Ave, Mermaid Beach QLD 4218',
  3, 5, 3, 1, 17,
  '2026-05-09', NULL, NULL,
  3055000, 4700000, 75,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-09T11:30:00Z', '2026-05-09T13:00:00Z', NULL, '2026-05-12T22:30:00Z',
  'Repeat customer — second job this year.'),

(2012, 'Q-2026-0012', 1007, 22, 4, 'Sunshine Beach termite — wall frame',
  'Wall framing repair to 2 internal load-bearing walls. Termite damage discovered during pre-sale building inspection.',
  '11 Mossman Ct, Sunshine Beach QLD 4567',
  3, 4, 2, 3, 11,
  '2026-05-13', NULL, NULL,
  1856000, 2900000, 60,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-13T07:15:00Z', '2026-05-13T08:40:00Z', NULL, '2026-05-13T08:40:00Z',
  'Pest inspector referral. Client wants to keep sale moving.'),

(2013, 'Q-2026-0013', 1005, 42, 4, 'Broadbeach Towers — make-good lvl 4',
  'Tenant departure make-good on lvl-4 commercial unit. Floor finish, paint, partition removal, base-build reinstatement.',
  'Lvl 4/22 Surf Pde, Broadbeach QLD 4218',
  3, 5, 4, 1, 16,
  '2026-05-11', NULL, NULL,
  2244000, 3300000, 50,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-11T10:00:00Z', '2026-05-11T14:15:00Z', NULL, '2026-05-14T02:00:00Z',
  'BCM-coordinated. Same client as 2007.'),

-- ═══ STAGE 3 · Site Visit Complete (3 quotes) ══════════════════════════════
(2014, 'Q-2026-0014', 1002, 13, 3, 'Bulimba kitchen reno',
  'Demo existing 4m galley kitchen. New cabinetry, stone bench, integrated dishwasher, pendant lighting.',
  '18 Wellington St, Bulimba QLD 4171',
  3, 4, 1, 2, 10,
  '2026-05-12', NULL, NULL,
  2640000, 4000000, 70,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-12T08:00:00Z', '2026-05-12T09:20:00Z', NULL, '2026-05-14T22:00:00Z',
  'Site visit done — quote in prep.'),

(2015, 'Q-2026-0015', 1008, 14, 3, 'Mooloolaba unit 8 bathroom reno',
  'Bathroom strip-out + reinstall. 1980s tile to new floor-to-ceiling. Frameless screen, wall-hung vanity, in-wall cistern.',
  '8/28 First Ave, Mooloolaba QLD 4557',
  3, 5, 1, 3, 16,
  '2026-05-13', NULL, NULL,
  1518000, 2300000, 60,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-13T13:00:00Z', '2026-05-13T15:45:00Z', NULL, '2026-05-14T08:30:00Z',
  'BCM approved. Tight stair access — quoted with concierge protocol.'),

(2016, 'Q-2026-0016', 1003, 24, 3, 'Newmarket termite — roof framing',
  'Roof framing + truss repair to NE corner of ceiling. Termite damage discovered after water-stain investigation. Insurance claim.',
  '22 Stratton St, Newmarket QLD 4051',
  3, 4, 2, 2, 14,
  '2026-05-13', NULL, NULL,
  2880000, 4500000, 50,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-13T11:00:00Z', '2026-05-13T13:20:00Z', NULL, '2026-05-13T13:20:00Z',
  'Engineer scoped roof — awaiting structural sign-off on scope.'),

-- ═══ STAGE 2 · Site Visit Scheduled (2 quotes) ═════════════════════════════
(2017, 'Q-2026-0017', 1009, 40, 2, 'Hastings Street boutique — defit',
  'Defit + make-good after tenant departure. Floor strip, paint, joinery removal.',
  '73 Hastings St, Noosa Heads QLD 4567',
  3, 5, 4, 3, 7,
  '2026-05-14', NULL, NULL,
  1632000, 2400000, 55,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-14T09:00:00Z', '2026-05-14T11:00:00Z', NULL, '2026-05-14T11:00:00Z',
  'Site visit booked for 2026-05-19.'),

(2018, 'Q-2026-0018', 1001, 39, 2, 'Harbour View — rooftop pergola',
  'Bespoke rooftop pergola — 24m², retractable louvred roof, ironbark posts.',
  '12/45 Mary St, Brisbane City QLD 4000',
  3, 4, 3, 2, 8,
  '2026-05-14', NULL, NULL,
  4615000, 7100000, 60,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-14T15:30:00Z', '2026-05-14T16:50:00Z', NULL, '2026-05-14T16:50:00Z',
  'BCM-flagged scope. Site visit needs roof access permit.'),

-- ═══ STAGE 1 · RFQ Received (1 quote · still cold) ═════════════════════════
(2019, 'Q-2026-0019', 1006, 17, 1, 'Sorrento — internal repaint',
  'Whole-unit internal repaint. Off-white throughout, charcoal feature wall to living.',
  '8 Brittany Pl, Sorrento QLD 4217',
  3, 5, 1, 1, 1,
  '2026-05-15', NULL, NULL,
  528000, 800000, 55,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-05-15T10:30:00Z', NULL, NULL, NULL,
  'Inbound web form — needs first response within SLA.'),

-- ═══ STAGE 8 · On Hold (2 quotes) ══════════════════════════════════════════
(2020, 'Q-2026-0020', 1002, 36, 8, 'Bulimba outdoor kitchen',
  'New outdoor kitchen 4.2m run. Concrete bench, built-in BBQ, side burner, sink, fridge cabinet.',
  '18 Wellington St, Bulimba QLD 4171',
  3, 4, 3, 2, 10,
  '2026-04-10', '2026-04-22', NULL,
  3185000, 4900000, 35,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-10T08:00:00Z', '2026-04-10T11:00:00Z', '2026-04-22T16:00:00Z', '2026-05-03T01:00:00Z',
  'Client pausing — overseas until late June.'),

(2021, 'Q-2026-0021', 1004, 38, 8, 'Mermaid Waters privacy screens',
  'Bespoke timber privacy screens to side fence — 28 linear m. Powdercoated steel posts.',
  '14 Albatross Ave, Mermaid Beach QLD 4218',
  3, 5, 3, 1, 17,
  '2026-04-15', '2026-04-29', NULL,
  900250, 1385000, 30,
  NULL, NULL, NULL,
  0, NULL, 0, 1,
  '2026-04-15T12:00:00Z', '2026-04-15T14:30:00Z', '2026-04-29T16:00:00Z', '2026-05-06T05:00:00Z',
  'Council approval delayed — overlay zone clarification needed.'),

-- ═══ STAGE 9 · Accepted — Won (4 quotes) ════════════════════════════════════
(2022, 'Q-2026-0022', 1001, 30, 9, 'Harbour View — terrace deck rebuild',
  'Lobby-level terrace deck replacement. Composite over existing waterproof membrane.',
  '12/45 Mary St, Brisbane City QLD 4000',
  3, 4, 3, 2, 8,
  '2026-03-15', '2026-03-25', '2026-04-08',
  4225000, 6500000, NULL,
  'Returning client. BCM Approval Pack matched. Price + timeline confidence.', NULL, NULL,
  0, NULL, 0, 1,
  '2026-03-15T09:00:00Z', '2026-03-15T10:30:00Z', '2026-03-25T15:00:00Z', '2026-04-09T03:00:00Z',
  'Handed to Aroflo job AF-2026-0184. Started 2026-04-15.'),

(2023, 'Q-2026-0023', 1006, 13, 9, 'Sorrento kitchen reno (early-2026)',
  'Kitchen demo + reinstall. Stone, integrated appliances, soft-close throughout.',
  '8 Brittany Pl, Sorrento QLD 4217',
  3, 5, 1, 1, 4,
  '2026-02-22', '2026-03-02', '2026-03-10',
  2310000, 3500000, NULL,
  'Quote came in $4k under competitor. Site visit confidence sealed it.', NULL, NULL,
  0, NULL, 0, 1,
  '2026-02-22T09:00:00Z', '2026-02-22T11:00:00Z', '2026-03-02T15:00:00Z', '2026-03-10T01:00:00Z',
  'AF-2026-0091. Completed 2026-04-12.'),

(2024, 'Q-2026-0024', 1008, 35, 9, 'Mooloolaba pergola',
  'New pergola to courtyard. 4×3.5m, ironbark posts, polycarbonate roof.',
  '5/28 First Ave, Mooloolaba QLD 4557',
  3, 4, 3, 3, 17,
  '2026-03-08', '2026-03-15', '2026-03-22',
  1885000, 2900000, NULL,
  'BCM-approved. Client matched on timeline (4 weeks).', NULL, NULL,
  0, NULL, 0, 1,
  '2026-03-08T08:00:00Z', '2026-03-08T09:30:00Z', '2026-03-15T15:00:00Z', '2026-03-22T04:00:00Z',
  'AF-2026-0118. Completed 2026-05-02.'),

(2025, 'Q-2026-0025', 1003, 29, 9, 'Newmarket termite — insurance claim repair',
  'Sub-floor bearer + joist + plaster make-good. Insurance carrier: Cumberland. Loss adjuster: Davies.',
  '22 Stratton St, Newmarket QLD 4051',
  3, 4, 2, 2, 14,
  '2026-03-01', '2026-03-12', '2026-03-26',
  5760000, 9000000, NULL,
  'Insurance approved fast — engineer cert + scoped doc convinced loss adjuster.', NULL, NULL,
  0, NULL, 0, 1,
  '2026-03-01T08:00:00Z', '2026-03-01T09:45:00Z', '2026-03-12T15:00:00Z', '2026-03-26T05:00:00Z',
  'AF-2026-0102. Completed 2026-05-10.'),

-- ═══ STAGE 10 · Rejected (3 quotes — including 1 requote-eligible) ═════════
-- 2026 = REJECTED with "Price too high" → eligible for requote (parent of 2030)
(2026, 'Q-2026-0026', 1009, 41, 10, 'Hastings Street — café fitout (rejected)',
  'Café fitout — bench, joinery, coffee station, tiled walls. Initial scope.',
  '73 Hastings St, Noosa Heads QLD 4567',
  3, 5, 4, 3, 7,
  '2026-04-01', '2026-04-12', '2026-04-22',
  3970000, 5840000, NULL,
  NULL, 1, 'Client said price exceeded budget by 18%. Open to value-engineered scope.',
  0, NULL, 1, 1,
  '2026-04-01T09:00:00Z', '2026-04-01T11:00:00Z', '2026-04-12T15:00:00Z', '2026-04-22T02:00:00Z',
  'Pricing reason — requote opportunity flagged.'),

(2027, 'Q-2026-0027', 1005, 33, 10, 'Broadbeach pool deck — rejected',
  'Pool deck rebuild — initial scope. 92m² composite.',
  'Lvl B/22 Surf Pde, Broadbeach QLD 4218',
  3, 5, 3, 1, 16,
  '2026-03-15', '2026-03-25', '2026-04-15',
  3895000, 5990000, NULL,
  NULL, 7, 'Client signed with another contractor (sourced via owner''s relationship).',
  0, NULL, 0, 1,
  '2026-03-15T09:00:00Z', '2026-03-15T11:00:00Z', '2026-03-25T15:00:00Z', '2026-04-15T02:00:00Z',
  'Lost to a contractor with a personal relationship to the owner.'),

(2028, 'Q-2026-0028', 1002, 38, 10, 'Bulimba — fence + screens (rejected)',
  'Fencing + privacy screens to rear yard.',
  '18 Wellington St, Bulimba QLD 4171',
  3, 4, 3, 2, 10,
  '2026-03-20', '2026-03-30', '2026-04-18',
  650000, 1000000, NULL,
  NULL, 6, 'Client stopped responding after 14 days of follow-up.',
  0, NULL, 0, 1,
  '2026-03-20T08:00:00Z', '2026-03-20T10:00:00Z', '2026-03-30T15:00:00Z', '2026-04-18T01:00:00Z',
  'No response from client.'),

-- ═══ STAGE 11 · Lost / Withdrawn (1 quote) ═════════════════════════════════
(2029, 'Q-2026-0029', 1007, 37, 11, 'Sunshine Beach alfresco — withdrawn',
  'Alfresco roof — initial scope. Client withdrew before quote sent (project deferred indefinitely).',
  '11 Mossman Ct, Sunshine Beach QLD 4567',
  3, 5, 3, 3, 13,
  '2026-04-08', NULL, '2026-04-14',
  NULL, NULL, NULL,
  NULL, 3, 'Client postponed project — listing-first decision.',
  0, NULL, 0, 1,
  '2026-04-08T10:00:00Z', '2026-04-08T11:30:00Z', NULL, '2026-04-14T02:00:00Z',
  'Withdrawn — never made it to quote sent.'),

-- ═══ STAGE 7 · Requote In Progress (1 quote · child of 2026) ═══════════════
(2030, 'Q-2026-0026R', 1009, 41, 7, 'Hastings Street — café fitout (value-engineered)',
  'Value-engineered re-scope of Q-2026-0026. Reduced joinery, retained feature wall, simplified coffee station to single-bench layout.',
  '73 Hastings St, Noosa Heads QLD 4567',
  3, 5, 4, 3, 7,
  '2026-04-25', NULL, NULL,
  3060000, 4500000, 65,
  NULL, NULL, NULL,
  1, 2026, 0, 1,
  '2026-04-25T08:00:00Z', '2026-04-25T10:30:00Z', NULL, '2026-05-08T22:00:00Z',
  'Requote of 2026. Re-scoped at 77% of original price. Awaiting client feedback on revised scope.');

-- ─── CONTACT LOG · 5 entries on the hero quote (id 2001) ───────────────────
-- These demonstrate the timeline view + stage history merge.
INSERT OR IGNORE INTO contact_log (
  id, quote_id, contact_method_id, contact_datetime, direction, our_staff_id,
  client_contact_id, client_contact_name, subject, notes, duration_minutes,
  follow_up_required, follow_up_date
) VALUES
  -- t0 · RFQ received
  (3001, 2001, 3, '2026-05-08T08:55:00Z', 'Inbound', 4,
   501, 'Linda Tomasetti',
   'RFQ — lobby + pool surround refurb',
   'Linda forwarded the BCM committee minutes from 6 May. Three suppliers being approached. Wants visit early next week.',
   NULL, 1, '2026-05-09'),

  -- t1 · first response, 23 mins later
  (3002, 2001, 2, '2026-05-08T09:18:00Z', 'Outbound', 4,
   501, 'Linda Tomasetti',
   'First response — site visit options',
   'Called Linda. Offered Tue 13 May 10am or Wed 14 May 2pm. She''ll confirm by EOD with BCM chair Andrew. Sent calendar holds for both.',
   8, 0, NULL),

  -- t2 · site visit confirmation
  (3003, 2001, 4, '2026-05-09T11:42:00Z', 'Outbound', 4,
   501, 'Linda Tomasetti',
   'Site visit confirmed — Tue 13 May 10am',
   'Linda confirmed Tue 13 May 10:00. Andrew Forsythe (BCM chair) will attend. I''ve prepared the BCM Approval Pack template ahead of time.',
   NULL, 0, NULL),

  -- t3 · site visit happened (on-site meeting)
  (3004, 2001, 7, '2026-05-13T10:00:00Z', 'Inbound', 4,
   501, 'Linda Tomasetti',
   'Site visit — lobby + pool surround',
   '90-min site visit. Measured 52m² lobby terrace + 38m² pool-surround zone. Andrew flagged sound-attenuation requirement for early-morning works (he''s on lvl 14). Composite deck preferred over timber for salt-spray. Walked through BCM Approval Pack — Andrew loved the proof-seal approach.',
   90, 1, '2026-05-15'),

  -- t4 · quote sent
  (3005, 2001, 10, '2026-05-15T15:42:00Z', 'Outbound', 4,
   501, 'Linda Tomasetti',
   'Quote document sent · Q-2026-0001',
   'Emailed quote PDF + BCM Approval Pack to Linda and Andrew. $59,000 ex GST. 4-week build window with sound-attenuation protocol (no power tools before 8:30am). Confirmed receipt 16 min later.',
   NULL, 1, '2026-05-19');

-- ─── STAGE HISTORY · history rows for the hero quote (id 2001) ─────────────
-- Demonstrates that stage transitions are audit-logged by the app layer.
INSERT OR IGNORE INTO stage_history (id, quote_id, from_stage_id, to_stage_id, changed_at, changed_by, note) VALUES
  (4001, 2001, NULL, 1, '2026-05-08T08:55:00Z', 4, 'RFQ received via inbound email from Linda Tomasetti'),
  (4002, 2001, 1,    2, '2026-05-09T11:42:00Z', 4, 'Site visit booked — Tue 13 May 10:00 with BCM chair'),
  (4003, 2001, 2,    3, '2026-05-13T11:30:00Z', 4, 'Site visit complete. Measurements + BCM-pack alignment captured.'),
  (4004, 2001, 3,    4, '2026-05-13T16:00:00Z', 4, 'Quote in prep — composite spec + sound-attenuation protocol'),
  (4005, 2001, 4,    5, '2026-05-15T15:42:00Z', 4, 'Quote sent to Linda and Andrew. Confirmed receipt.');

-- ─── STAGE HISTORY · the requote chain (parent 2026 → child 2030) ──────────
-- Demonstrates the requote parent_quote_id chain end-to-end.
INSERT OR IGNORE INTO stage_history (id, quote_id, from_stage_id, to_stage_id, changed_at, changed_by, note) VALUES
  (4101, 2026, NULL, 1,  '2026-04-01T09:00:00Z', 3, 'RFQ received'),
  (4102, 2026, 1,    3,  '2026-04-05T14:00:00Z', 3, 'Site visit complete'),
  (4103, 2026, 3,    4,  '2026-04-05T17:00:00Z', 3, 'Quote in prep'),
  (4104, 2026, 4,    5,  '2026-04-12T15:00:00Z', 3, 'Quote sent · $58,400'),
  (4105, 2026, 5,    10, '2026-04-22T02:00:00Z', 3, 'REJECTED · reason: Price too high (18% over budget). Requote-eligible flagged.'),
  (4106, 2030, NULL, 7,  '2026-04-25T08:00:00Z', 3, 'Requote created from Q-2026-0026 · value-engineered scope · 77% of parent price');

-- ─── RESET AUTOINCREMENT SEQUENCES ──────────────────────────────────────────
-- SQLite tracks autoincrement in the sqlite_sequence table.
-- Bump each table's next-id past the highest seeded id so new inserts don't collide.
INSERT OR REPLACE INTO sqlite_sequence (name, seq) VALUES
  ('lines_of_business', 4),
  ('regions',           3),
  ('scopes',            44),
  ('quote_stages',      11),
  ('reject_reasons',    9),
  ('contact_methods',   11),
  ('lead_sources',      21),
  ('financial_targets', 12),
  ('stage_slas',        7),
  ('team_members',      5),
  ('clients',           1009),
  ('client_contacts',   502),
  ('quotes',            2030),
  ('contact_log',       3005),
  ('stage_history',     4106);

-- Mark migration applied
INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (3, '0003_sample_data');
