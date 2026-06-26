/**
 * CoSai. × YBMT — Display Formatters
 * ---------------------------------------------------------------------------
 * MANDATORY formatting rules from Part 1 of the build brief.
 * Every money/percent/date/time/quote-number render MUST go through these.
 * ---------------------------------------------------------------------------
 *
 *   Money:        $1,234,567  (comma separator, NO decimals on values ≥ $1,000)
 *                 $42.50      (2dp under $1,000)
 *   Percentages:  34.4%       (ALWAYS 1 decimal, never 34% or 34.40%)
 *   Dates:        12 May 2026 (never 2026-05-12 outside <input type="date">)
 *   Times:        14:30       (24-hour)
 *   Quote#:       Q-2026-0001 (always rendered in JetBrains Mono)
 *
 * All datetimes are stored as ISO 8601 UTC.
 * All datetimes are displayed in Australia/Brisbane.
 */

const AU_LOCALE = 'en-AU'
const TZ = 'Australia/Brisbane'

// ─── MONEY ───────────────────────────────────────────────────────────────
// Storage: NUMERIC(14,2) on Postgres = cents-as-integer on D1/SQLite.
// We accept dollars-as-number on input/output for display.

/**
 * Format a money value per CoSai brand rules.
 * @param value Dollar amount (e.g. 1234567 or 42.50). Pass null for "—".
 */
export function money(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return '—'
  if (Math.abs(value) >= 1000) {
    // No decimals on values ≥ $1,000
    return '$' + Math.round(value).toLocaleString(AU_LOCALE)
  }
  // 2dp under $1,000
  return '$' + value.toFixed(2)
}

/**
 * Compact money for tight cells (e.g. funnel matrix).
 * $1,234,567 → $1.2M · $98,000 → $98k · $850 → $850
 */
export function moneyCompact(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return '—'
  const abs = Math.abs(value)
  if (abs >= 1_000_000) return '$' + (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (abs >= 1_000) return '$' + Math.round(value / 1_000) + 'k'
  return '$' + Math.round(value)
}

// ─── PERCENTAGES ─────────────────────────────────────────────────────────
// ALWAYS 1 decimal. Never 34%, never 34.40%.

export function pct(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return '—'
  return value.toFixed(1) + '%'
}

// ─── DATES & TIMES (Australia/Brisbane) ──────────────────────────────────

/** "12 May 2026" — used everywhere outside form inputs. */
export function date(input: string | Date | null | undefined): string {
  if (input === null || input === undefined) return '—'
  const d = typeof input === 'string' ? new Date(input) : input
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat(AU_LOCALE, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: TZ,
  }).format(d)
}

/** "14:30" — 24-hour. */
export function time(input: string | Date | null | undefined): string {
  if (input === null || input === undefined) return '—'
  const d = typeof input === 'string' ? new Date(input) : input
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat(AU_LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: TZ,
  }).format(d)
}

/** "12 May 2026 · 14:30" — for timeline entries. */
export function dateTime(input: string | Date | null | undefined): string {
  if (input === null || input === undefined) return '—'
  return `${date(input)} · ${time(input)}`
}

/** ISO yyyy-mm-dd for <input type="date"> — Brisbane date-of. */
export function dateInputValue(input: string | Date | null | undefined): string {
  if (input === null || input === undefined) return ''
  const d = typeof input === 'string' ? new Date(input) : input
  if (Number.isNaN(d.getTime())) return ''
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    timeZone: TZ,
  }).formatToParts(d)
  const y = parts.find(p => p.type === 'year')?.value
  const m = parts.find(p => p.type === 'month')?.value
  const dd = parts.find(p => p.type === 'day')?.value
  return `${y}-${m}-${dd}`
}

/** Hours since a timestamp — for SLA calculations. */
export function hoursSince(iso: string | null | undefined, now = new Date()): number | null {
  if (!iso) return null
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return null
  return (now.getTime() - t) / 3_600_000
}

/** Friendly relative: "32h ago" · "2d ago" · "just now" */
export function ago(iso: string | null | undefined, now = new Date()): string {
  if (!iso) return '—'
  const h = hoursSince(iso, now)
  if (h === null) return '—'
  if (h < 1) return 'just now'
  if (h < 24) return `${Math.round(h)}h ago`
  const d = h / 24
  if (d < 14) return `${Math.round(d)}d ago`
  if (d < 60) return `${Math.round(d / 7)}w ago`
  return date(iso)
}

// ─── QUOTE NUMBERS ───────────────────────────────────────────────────────
// Format: Q-YYYY-NNNN · requotes append R · always rendered in JetBrains Mono.

export function quoteNumberFormat(year: number, n: number, isRequote = false): string {
  const padded = n.toString().padStart(4, '0')
  return `Q-${year}-${padded}${isRequote ? 'R' : ''}`
}

// ─── PHONE (AU) ──────────────────────────────────────────────────────────
// Normalise on save · display unchanged.
// Accept: 0412 345 678 · +61412345678 · 0412345678 · (07) 5555 1234
// Mobile output: 04XX XXX XXX
// Landline output: (0X) XXXX XXXX

export function normalisePhoneAU(raw: string | null | undefined): string | null {
  if (!raw) return null
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('61') && digits.length === 11) digits = '0' + digits.slice(2)
  if (digits.length !== 10) return raw.trim() // return as-typed if not parseable
  if (digits.startsWith('04')) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 10)}`
  }
  if (digits.startsWith('0')) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)} ${digits.slice(6, 10)}`
  }
  return raw.trim()
}
