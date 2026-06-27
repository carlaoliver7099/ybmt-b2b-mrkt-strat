// ═══════════════════════════════════════════════════════════════════════════
// Multi-touch attribution — 6 models computed for every converted lead
// ═══════════════════════════════════════════════════════════════════════════
// Models:
//   1. first       — 100% credit to first touch
//   2. last        — 100% credit to last touch
//   3. linear      — equal credit across all touches
//   4. time-decay  — exponential weighting (half-life 7 days, recency wins)
//   5. position    — 40% first · 40% last · 20% evenly across middle
//   6. data-driven — proportional to channel's historical conversion lift
//                    (Shapley-style fallback to linear if insufficient data)
// ═══════════════════════════════════════════════════════════════════════════

import type { AttributionModel } from './types'

export interface Touch {
  id: number
  touch_sequence: number
  touch_timestamp: string   // ISO
  channel_code?: string
}

export interface Credit {
  touch_id: number
  model: AttributionModel
  credit: number   // 0..1 · sum across touches = 1 per model
}

// ─── Public API ────────────────────────────────────────────────────────────

export function computeCredits(
  touches: Touch[],
  conversionAt: string,
  modelLifts?: Record<string, number>,   // for data-driven model
): Credit[] {
  if (touches.length === 0) return []
  const sorted = [...touches].sort((a, b) => a.touch_sequence - b.touch_sequence)
  const out: Credit[] = []
  for (const model of ['first','last','linear','time-decay','position','data-driven'] as AttributionModel[]) {
    const fn = MODELS[model]
    const credits = fn(sorted, conversionAt, modelLifts)
    credits.forEach((c, i) => out.push({ touch_id: sorted[i].id, model, credit: c }))
  }
  return out
}

// ─── Model implementations ─────────────────────────────────────────────────

type ModelFn = (touches: Touch[], conversionAt: string, lifts?: Record<string, number>) => number[]

const MODELS: Record<AttributionModel, ModelFn> = {
  first: (t) => t.map((_, i) => (i === 0 ? 1 : 0)),

  last: (t) => t.map((_, i) => (i === t.length - 1 ? 1 : 0)),

  linear: (t) => {
    const w = 1 / t.length
    return t.map(() => w)
  },

  'time-decay': (t, conversionAt) => {
    // Exponential decay · half-life = 7 days
    const HALF_LIFE_MS = 7 * 24 * 60 * 60 * 1000
    const convMs = new Date(conversionAt).getTime()
    const raw = t.map(tt => {
      const ageMs = Math.max(0, convMs - new Date(tt.touch_timestamp).getTime())
      return Math.pow(0.5, ageMs / HALF_LIFE_MS)
    })
    const sum = raw.reduce((s, x) => s + x, 0) || 1
    return raw.map(x => x / sum)
  },

  position: (t) => {
    if (t.length === 1) return [1]
    if (t.length === 2) return [0.5, 0.5]   // collapse when only first+last
    const middleCount = t.length - 2
    const middleEach = 0.20 / middleCount
    return t.map((_, i) => {
      if (i === 0) return 0.40
      if (i === t.length - 1) return 0.40
      return middleEach
    })
  },

  'data-driven': (t, _conversionAt, lifts) => {
    // Use historical conversion-lift weights per channel.
    // Fallback to linear if no lifts supplied or all zero.
    if (!lifts) return MODELS.linear(t, _conversionAt)
    const raw = t.map(tt => (tt.channel_code && lifts[tt.channel_code]) || 0)
    const sum = raw.reduce((s, x) => s + x, 0)
    if (sum === 0) return MODELS.linear(t, _conversionAt)
    return raw.map(x => x / sum)
  },
}

// ─── Helper: collapse credits up to a per-channel rollup ───────────────────

export interface ChannelCreditRollup {
  channel_code: string
  credit: number       // attributed conversions count
  value: number        // attributed $ (closed_value × credit)
}

export function rollupByChannel(
  touches: Touch[],
  credits: Credit[],
  model: AttributionModel,
  closedValue: number,
): ChannelCreditRollup[] {
  const touchById = new Map(touches.map(t => [t.id, t]))
  const acc = new Map<string, ChannelCreditRollup>()
  for (const c of credits) {
    if (c.model !== model) continue
    const t = touchById.get(c.touch_id)
    if (!t?.channel_code) continue
    const cur = acc.get(t.channel_code) ?? { channel_code: t.channel_code, credit: 0, value: 0 }
    cur.credit += c.credit
    cur.value  += c.credit * closedValue
    acc.set(t.channel_code, cur)
  }
  return [...acc.values()].sort((a, b) => b.value - a.value)
}
