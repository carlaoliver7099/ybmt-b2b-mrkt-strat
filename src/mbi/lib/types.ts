// ═══════════════════════════════════════════════════════════════════════════
// Marketing BI · TypeScript types (single source of truth for shapes)
// ═══════════════════════════════════════════════════════════════════════════

export type LobCode = 'TDR' | 'POE' | 'UR'
export type RegionCode = 'SEQ' | 'BNE' | 'GC' | 'SC'
export type StageCode = 'L1' | 'L2' | 'L3' | 'R1' | 'R2' | 'R3' | 'R4'
export type Funnel = 'F1' | 'F2' | 'F3'
export type Horizon = 'long' | 'short'
export type OepClass = 'owned' | 'earned' | 'paid'
export type ChannelCategory = 'paid' | 'organic' | 'email' | 'referral' | 'direct'

export type AttributionModel =
  | 'first'
  | 'last'
  | 'linear'
  | 'time-decay'
  | 'position'
  | 'data-driven'

export type LeadStage = 'mql' | 'sql' | 'quoted' | 'won' | 'lost'

export type IngestSource =
  | 'csv'
  | 'google-ads-api'
  | 'meta-api'
  | 'linkedin-api'
  | 'ga4-api'
  | 'gsc-api'
  | 'mailchimp-api'
  | 'manual'

export type NorthStarCode =
  | 'LTGP_AC'
  | 'F1_CASC'
  | 'F2_CROSS_LOB'
  | 'F3_REFERRAL'
  | 'CUMULATIVE_CUSTOMERS'
  | 'SHARE_OF_SEARCH'

export type SeverityLevel = 'info' | 'warning' | 'critical'

export type UserRole = 'admin' | 'analyst' | 'viewer' | 'exec'

// Cloudflare D1 binding — Marketing BI has its own DB separate from CRM.
// (We may also read-cross from CRM DB later via a service binding.)
export type MbiBindings = {
  MBI_DB: D1Database
  // CRM_DB?: D1Database  // optional cross-db read binding · wired in later
}

// ─── UTM parse result ──────────────────────────────────────────────────────

export interface UtmTuple {
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_content?: string | null
  utm_term?: string | null
}

export interface UtmValidation {
  is_valid: boolean
  drift_reasons: string[]
  parsed: {
    channel_code?: string
    lob_code?: LobCode
    region_code?: RegionCode
    stage_code?: StageCode
  }
}

// ─── North star evaluation ─────────────────────────────────────────────────

export interface NorthStarReading {
  code: NorthStarCode
  name: string
  target_value: number
  target_date: string
  actual_value: number
  unit: '$' | '%' | 'count' | 'ratio'
  direction: 'lte' | 'gte'
  status: 'on-track' | 'at-risk' | 'off-track'
  variance_pct: number
}
