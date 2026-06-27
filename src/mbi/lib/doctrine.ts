// ═══════════════════════════════════════════════════════════════════════════
// Marketing BI · Locked doctrine constants
// ═══════════════════════════════════════════════════════════════════════════
// Source-of-truth references (NEVER edit these without Carla+Corrina sign-off):
//   · ymt-group-strategy.tsx — branded house, 3 LOBs, cross-LOB engine
//   · ymt-channel.tsx — 12-channel matrix, $720K envelope, 60/40 long/short
//   · ymt-paid.tsx — $432K paid, TDR/POE/UR split, 120-cell creative matrix
//   · ymt-kpi-contract.tsx — F1/F2/F3, 4 North Stars
//   · ymt-bowtie.tsx — L1-L3 → R1-R4 funnel framing
// ═══════════════════════════════════════════════════════════════════════════

import type { LobCode, RegionCode, StageCode } from './types'

// ─── Brand palette (DBA-locked) ────────────────────────────────────────────

export const BRAND = {
  navy:   '#1B3A5C',
  timber: '#B8743D',
  aqua:   '#4DB6C7',
  cream:  '#F5F1EA',
  // semantic palette for charts (status colours · not brand palette)
  ok:     '#2E7D5B',
  warn:   '#C77A1A',
  crit:   '#B43A30',
  ink:    '#1A1814',
  inkSoft:'#5A554F',
  line:   '#E5E0D8',
  paper:  '#FBFAF8',
  paperWarm: '#F2EFE9',
} as const

// ─── 3 LOBs (Y2 sales mix locked at 55/30/15 · paid mix locked) ────────────

export const LOBS: Record<LobCode, { name: string; shortName: string; gpm: number; yr1Paid: number }> = {
  TDR: { name: 'Termite Damage Repair',          shortName: 'Termite', gpm: 0.45, yr1Paid: 224000 },
  POE: { name: 'Pools & Outdoor Entertainment',  shortName: 'Pools',   gpm: 0.32, yr1Paid: 138000 },
  UR:  { name: 'Unit Renovations',               shortName: 'Units',   gpm: 0.30, yr1Paid:  69000 },
}

export const LOB_ORDER: LobCode[] = ['TDR', 'POE', 'UR']

// ─── Regions (SEQ is the rollup · 3 leaf regions for the 3×3 grid) ─────────

export const REGIONS: Record<RegionCode, { name: string; isRollup: boolean }> = {
  SEQ: { name: 'South East Queensland', isRollup: true  },
  BNE: { name: 'Brisbane',              isRollup: false },
  GC:  { name: 'Gold Coast',            isRollup: false },
  SC:  { name: 'Sunshine Coast',        isRollup: false },
}

export const REGION_GRID_ORDER: RegionCode[] = ['BNE', 'GC', 'SC']   // for the 3×3 grid axis
export const REGION_ALL_ORDER:  RegionCode[] = ['SEQ', 'BNE', 'GC', 'SC']

// ─── 7 Bowtie stages ───────────────────────────────────────────────────────

export const STAGES: Record<StageCode, { name: string; funnel: 'F1' | 'F2' | 'F3'; side: 'pre' | 'post' }> = {
  L1: { name: 'Awareness',  funnel: 'F1', side: 'pre' },
  L2: { name: 'Education',  funnel: 'F1', side: 'pre' },
  L3: { name: 'Selection',  funnel: 'F1', side: 'pre' },
  R1: { name: 'Onboarding', funnel: 'F2', side: 'post' },
  R2: { name: 'Impact',     funnel: 'F2', side: 'post' },
  R3: { name: 'Expansion',  funnel: 'F2', side: 'post' },
  R4: { name: 'Advocacy',   funnel: 'F3', side: 'post' },
}

export const STAGE_ORDER: StageCode[] = ['L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'R4']

// ─── Budget envelope ───────────────────────────────────────────────────────

export const BUDGET = {
  yr1Total:        720000,
  yr1Paid:         432000,
  yr1NonPaid:      288000,    // owned/earned (content · SEO · GBP · email · partnerships)
  longShortSplit:  { long: 0.60, short: 0.40 },
  paidByLob:       { TDR: 224000, POE: 138000, UR: 69000 },
  linkedInUR:       16000,    // LinkedIn dedicated to UR Investor
} as const

// ─── O/E/P trajectory (12/18/70 today → 45/25/30 by 2030) ──────────────────

export const OEP_TARGETS = {
  current: { owned: 0.12, earned: 0.18, paid: 0.70 },
  y2030:   { owned: 0.45, earned: 0.25, paid: 0.30 },
} as const

// ─── 3 Owned Phrases · 12 L3 Named Offerings (display-only · do not edit) ──

export const OWNED_PHRASES = ['Resort-Grade', 'The Fifth Room', 'Built to MMXXVI Standards'] as const

export const L3_OFFERINGS = [
  'The Fifth Room', 'The Resort Pool', 'The Renewal', 'The Stewardship',
  'The Audit', 'The Repair', 'The Barrier', 'The Watch',
  'The Owner-Grade', 'The Investor', 'The Refresh', 'The Body Corp',
] as const

// ─── Anomaly detection defaults ────────────────────────────────────────────

export const ANOMALY_THRESHOLDS = {
  spend_delta_warning:  0.20,   // 20% over/under plan
  spend_delta_critical: 0.40,
  ctr_delta_warning:    0.30,   // 30% drop from trailing 28-day baseline
  cpc_spike_warning:    0.50,   // 50% cost spike
  sql_volume_drop:      0.40,   // 40% drop in SQL volume vs trailing 4-week avg
  baseline_window_days: 28,
} as const
