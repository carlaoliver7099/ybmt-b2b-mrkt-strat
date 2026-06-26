/**
 * CoSai. × YBMT — Wordmark Component (LOCKED)
 * ---------------------------------------------------------------------------
 * The terminating period on "CoSai." is brass (#c8a96a) — every render.
 * This is the signature element. Do not change.
 *
 * Variants:
 *   <Wordmark />               → "CoSai."  (brand-only, default size)
 *   <Wordmark size="hero" />   → larger for login screen / landing
 *   <Wordmark jv />            → "CoSai. × YBMT"  (joint-venture lockup)
 *   <Wordmark jv color="white" /> → for use on charcoal brand bar
 */

interface WordmarkProps {
  jv?: boolean
  size?: 'sm' | 'md' | 'lg' | 'hero'
  color?: 'charcoal' | 'white'
}

export const Wordmark = ({ jv = false, size = 'md', color = 'charcoal' }: WordmarkProps) => {
  const sizes = {
    sm: '15px',
    md: '20px',
    lg: '28px',
    hero: '56px',
  }
  const ink = color === 'white' ? '#ffffff' : '#1b1a1e'
  const xMuted = color === 'white' ? 'rgba(255,255,255,0.45)' : 'rgba(27,26,30,0.45)'

  return (
    <span
      style={{
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        fontSize: sizes[size],
        color: ink,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '0.4em',
      }}
    >
      <span>
        CoSai<span style={{ color: '#c8a96a' }}>.</span>
      </span>
      {jv && (
        <>
          <span style={{ color: xMuted, fontWeight: 400, fontSize: '0.6em', letterSpacing: '0' }}>×</span>
          <span style={{ fontWeight: 500, letterSpacing: '-0.02em' }}>YBMT</span>
        </>
      )}
    </span>
  )
}
