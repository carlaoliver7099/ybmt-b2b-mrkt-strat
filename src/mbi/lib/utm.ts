// ═══════════════════════════════════════════════════════════════════════════
// UTM validator + parser — enforces the LOCKED schema from utm_convention
// ═══════════════════════════════════════════════════════════════════════════
// Schema (locked · matches migrations-mbi/0002_seed_doctrine.sql):
//   utm_source   = channel root            e.g. meta · google · linkedin · email · referral · direct · organic · gbp · aeo · pr
//   utm_medium   = type                    e.g. paid · cpc · cpm · organic · email · social · referral · qr · partner · direct
//   utm_campaign = LOB-stage-region(-cell) e.g. poe-l1-seq-decks · tdr-l3-bne · ur-l2-gc-investor
//   utm_content  = creative variant ID     e.g. video-16x9-v1 · brochure-front · qr-print-1
//   utm_term     = audience / keyword      e.g. pool-deck-brisbane · renovators-25-44
// ═══════════════════════════════════════════════════════════════════════════

import type { UtmTuple, UtmValidation, LobCode, RegionCode, StageCode } from './types'

const SOURCE_VOCAB = new Set([
  'google','meta','linkedin','youtube','email','referral',
  'direct','organic','gbp','aeo','pr',
])

const MEDIUM_VOCAB = new Set([
  'paid','cpc','cpm','organic','email','social','referral','qr','partner','direct',
])

const CAMPAIGN_RE = /^(tdr|poe|ur)-(l1|l2|l3|r1|r2|r3|r4)-(seq|bne|gc|sc)(-[a-z0-9]+(-[a-z0-9]+)*)?$/
const SLUG_RE     = /^[a-z0-9]+(-[a-z0-9]+)*$/

// Channel resolution: maps utm_source to dim_channel.code.
// Most are 1:1 — only edge cases need explicit mapping.
const SOURCE_TO_CHANNEL: Record<string, string> = {
  google:   'google-search',  // default · search-ads paid traffic; YouTube has its own utm_source
  meta:     'meta',
  linkedin: 'linkedin',
  youtube:  'youtube',
  email:    'email',
  referral: 'referral-partner',
  direct:   'direct',
  organic:  'seo',
  gbp:      'gbp-local',
  aeo:      'aeo',
  pr:       'pr-editorial',
}

export function validateUtm(t: UtmTuple): UtmValidation {
  const reasons: string[] = []
  const parsed: UtmValidation['parsed'] = {}

  // 1. utm_source
  if (!t.utm_source) {
    reasons.push('utm_source missing')
  } else if (!SOURCE_VOCAB.has(t.utm_source.toLowerCase())) {
    reasons.push(`utm_source "${t.utm_source}" not in locked vocab`)
  } else {
    parsed.channel_code = SOURCE_TO_CHANNEL[t.utm_source.toLowerCase()] ?? t.utm_source.toLowerCase()
  }

  // 2. utm_medium
  if (!t.utm_medium) {
    reasons.push('utm_medium missing')
  } else if (!MEDIUM_VOCAB.has(t.utm_medium.toLowerCase())) {
    reasons.push(`utm_medium "${t.utm_medium}" not in locked vocab`)
  }

  // 3. utm_campaign  (LOB-stage-region(-cell))
  if (!t.utm_campaign) {
    reasons.push('utm_campaign missing')
  } else {
    const m = t.utm_campaign.toLowerCase().match(CAMPAIGN_RE)
    if (!m) {
      reasons.push(`utm_campaign "${t.utm_campaign}" does not match LOB-stage-region(-cell) convention`)
    } else {
      parsed.lob_code    = m[1].toUpperCase() as LobCode
      parsed.stage_code  = m[2].toUpperCase() as StageCode
      parsed.region_code = m[3].toUpperCase() as RegionCode
    }
  }

  // 4. utm_content (optional · but if present must be a slug)
  if (t.utm_content && !SLUG_RE.test(t.utm_content.toLowerCase())) {
    reasons.push(`utm_content "${t.utm_content}" must be lowercase hyphen-separated slug`)
  }

  // 5. utm_term (optional · but if present must be a slug)
  if (t.utm_term && !SLUG_RE.test(t.utm_term.toLowerCase())) {
    reasons.push(`utm_term "${t.utm_term}" must be lowercase hyphen-separated slug`)
  }

  return {
    is_valid: reasons.length === 0,
    drift_reasons: reasons,
    parsed,
  }
}

// Parse a URL string and pull UTM params from the querystring.
export function extractUtmFromUrl(url: string): UtmTuple {
  try {
    const u = new URL(url)
    return {
      utm_source:   u.searchParams.get('utm_source'),
      utm_medium:   u.searchParams.get('utm_medium'),
      utm_campaign: u.searchParams.get('utm_campaign'),
      utm_content:  u.searchParams.get('utm_content'),
      utm_term:     u.searchParams.get('utm_term'),
    }
  } catch {
    return {}
  }
}

// Build a compliant UTM querystring — Corrina/YDT can use this helper to mint links.
export function buildUtm(opts: {
  source: string; medium: string;
  lob: LobCode; stage: StageCode; region: RegionCode;
  cell?: string; content?: string; term?: string;
}): string {
  const campaign = [
    opts.lob.toLowerCase(),
    opts.stage.toLowerCase(),
    opts.region.toLowerCase(),
    opts.cell?.toLowerCase(),
  ].filter(Boolean).join('-')

  const params = new URLSearchParams()
  params.set('utm_source',   opts.source.toLowerCase())
  params.set('utm_medium',   opts.medium.toLowerCase())
  params.set('utm_campaign', campaign)
  if (opts.content) params.set('utm_content', opts.content.toLowerCase())
  if (opts.term)    params.set('utm_term',    opts.term.toLowerCase())
  return params.toString()
}
