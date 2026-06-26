/**
 * CoSai. × YBMT — Brand System (LOCKED)
 * ---------------------------------------------------------------------------
 * Single source of truth for all brand tokens.
 * Do NOT redesign. Do NOT add dark mode. Do NOT add new palette colours.
 *
 * Reference: Part 1 of build brief.
 */

// 8-colour palette · light mode only
export const COLORS = {
  inkCharcoal: '#1b1a1e',      // brand bar, body text, primary button bg
  paperCream: '#f5f3ef',       // page background
  whiteCard: '#ffffff',        // cards, inputs
  brassAccent: '#c8a96a',      // the period, primary CTA accent, focus ring, hero KPI numerals
  goodGreen: '#4a7c59',        // won, on-target, positive
  warnAmber: '#b5793a',        // approaching SLA breach
  dangerTerracotta: '#a8453c', // rejected, SLA breached, destructive
  mutedStone: '#7c7a78',       // secondary text, dividers
  borderSoft: '#e3dfd8',       // borders, dividers
} as const

// Stage pill colours from quote_stages.color (12% bg / 60% border / 100% text)
export const stagePillStyle = (hexColor: string) => ({
  backgroundColor: `${hexColor}1f`, // 12% opacity
  borderColor: `${hexColor}99`,     // 60% opacity
  color: hexColor,
})

// Typography (use these font stacks, weights, line-heights)
export const TYPE = {
  display: {
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    weights: [500, 700],
    tracking: '-0.02em', // -0.04em on the wordmark only
    features: '"tnum" 1', // tabular-nums for KPIs
  },
  body: {
    fontFamily: '"Inter", system-ui, sans-serif',
    weights: [400, 500, 600, 700],
    baseSize: '14px',
    lineHeight: 1.55,
  },
  mono: {
    fontFamily: '"JetBrains Mono", "SF Mono", "Menlo", monospace',
    weights: [500],
    size: '13px',
  },
  caption: {
    fontFamily: '"Inter", system-ui, sans-serif',
    weight: 500,
    size: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
  },
}

// Wordmark — the brass period is non-negotiable
export const WORDMARK = {
  brand: 'CoSai.',
  jvLockup: 'CoSai. × YBMT',
  brandFont: '"Space Grotesk", system-ui, sans-serif',
  brandWeight: 700,
  brandTracking: '-0.04em',
  periodColor: COLORS.brassAccent,
}
