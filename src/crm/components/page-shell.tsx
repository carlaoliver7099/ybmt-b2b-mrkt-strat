/**
 * CoSai. × YBMT — Page Shell
 * ---------------------------------------------------------------------------
 * Wraps every CRM page with:
 *   - Locked HTML lang, viewport, title
 *   - Brand fonts (Space Grotesk · Inter · JetBrains Mono via Google Fonts)
 *   - Base CSS variables (the 8 palette colours)
 *   - Reset + typography baseline
 *   - Brand bar
 *
 * Light mode only. Do not add dark-mode media queries.
 */

import type { PropsWithChildren } from 'hono/jsx'
import { BrandBar } from './brand-bar'

interface PageShellProps {
  title: string
  active?: 'dashboard' | 'quotes' | 'new' | 'settings' | null
  user?: { name: string; role: string } | null
  trainingMode?: boolean
}

export const PageShell = ({
  title,
  active = null,
  user = null,
  trainingMode = false,
  children,
}: PropsWithChildren<PageShellProps>) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light only" />
      <title>{title} · CoSai. × YBMT</title>
      {/* Brass-period favicon — the signature element, even in the tab strip */}
      <link
        rel="icon"
        type="image/svg+xml"
        href={`data:image/svg+xml,${encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1b1a1e"/><circle cx="16" cy="22" r="6" fill="#c8a96a"/></svg>'
        )}`}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;700&display=swap"
      />
      <style>{baseCss}</style>
    </head>
    <body>
      <BrandBar active={active} user={user} trainingMode={trainingMode} />
      <main>{children}</main>
    </body>
  </html>
)

/**
 * Base CSS — locked to the 8-colour palette + typography rules.
 * Component-level styles live alongside their components.
 * No hard-coded hex outside this file + brand.ts.
 */
const baseCss = `
  /* ── Palette CSS variables (single source of truth) ─────────── */
  :root {
    --ink-charcoal:       #1b1a1e;
    --paper-cream:        #f5f3ef;
    --white-card:         #ffffff;
    --brass-accent:       #c8a96a;
    --good-green:         #4a7c59;
    --warn-amber:         #b5793a;
    --danger-terracotta:  #a8453c;
    --muted-stone:        #7c7a78;
    --border-soft:        #e3dfd8;

    --font-display: "Space Grotesk", system-ui, sans-serif;
    --font-body:    "Inter", system-ui, sans-serif;
    --font-mono:    "JetBrains Mono", "SF Mono", "Menlo", monospace;
  }

  /* ── Reset ───────────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    background: var(--paper-cream);
    color: var(--ink-charcoal);
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 1.55;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 500;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--ink-charcoal);
  }
  h1 { font-size: 28px; line-height: 1.2; }
  h2 { font-size: 20px; line-height: 1.3; }
  h3 { font-size: 16px; line-height: 1.35; font-weight: 600; }
  h4 { font-size: 13px; line-height: 1.4; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted-stone); }

  p { margin: 0 0 12px 0; }
  a  { color: var(--ink-charcoal); }

  /* ── Tabular figures on KPIs ────────────────────────────────── */
  .num {
    font-family: var(--font-display);
    font-variant-numeric: tabular-nums;
    font-weight: 500;
  }
  .mono {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 13px;
  }
  .caption {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted-stone);
  }

  /* ── Cards ───────────────────────────────────────────────────── */
  .card {
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(27,26,30,0.04);
    padding: 24px;
  }

  /* ── Buttons ─────────────────────────────────────────────────── */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.12s, border 0.12s, transform 0.04s;
  }
  .btn:active { transform: translateY(0.5px); }
  .btn-primary {
    background: var(--ink-charcoal);
    color: #ffffff;
    border-color: var(--ink-charcoal);
  }
  .btn-primary:hover { background: #2a282d; }
  .btn-primary:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--paper-cream), 0 0 0 4px var(--brass-accent);
  }
  .btn-secondary {
    background: transparent;
    color: var(--ink-charcoal);
    border-color: var(--ink-charcoal);
  }
  .btn-secondary:hover { background: rgba(27,26,30,0.04); }
  .btn-danger {
    background: var(--danger-terracotta);
    color: #ffffff;
    border-color: var(--danger-terracotta);
  }
  .btn-ghost {
    background: transparent;
    color: var(--muted-stone);
    border-color: transparent;
  }
  .btn-ghost:hover { color: var(--ink-charcoal); }

  /* ── Inputs ──────────────────────────────────────────────────── */
  .input, .select, .textarea {
    width: 100%;
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 8px;
    padding: 10px 14px;
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--ink-charcoal);
    line-height: 1.4;
    transition: border 0.12s, box-shadow 0.12s;
  }
  .input:focus, .select:focus, .textarea:focus {
    outline: none;
    border-color: var(--brass-accent);
    box-shadow: 0 0 0 2px rgba(200,169,106,0.25);
  }
  .input[aria-invalid="true"], .select[aria-invalid="true"], .textarea[aria-invalid="true"] {
    border-color: var(--danger-terracotta);
  }
  .label {
    display: block;
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 600;
    color: var(--ink-charcoal);
    margin-bottom: 6px;
  }
  .help {
    display: block;
    font-size: 12px;
    color: var(--muted-stone);
    margin-top: 6px;
  }
  .error-text {
    display: block;
    font-size: 12px;
    color: var(--danger-terracotta);
    margin-top: 6px;
  }

  /* ── Stage pill ──────────────────────────────────────────────── */
  .stage-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid currentColor;
    font-size: 12px;
    font-weight: 500;
    font-family: var(--font-body);
    line-height: 1.3;
  }
  .stage-pill::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: currentColor;
  }

  /* ── State colours ───────────────────────────────────────────── */
  .text-good   { color: var(--good-green); }
  .text-warn   { color: var(--warn-amber); }
  .text-bad    { color: var(--danger-terracotta); }
  .text-muted  { color: var(--muted-stone); }
  .text-brass  { color: var(--brass-accent); }

  /* ── Layout helpers ──────────────────────────────────────────── */
  .page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 24px;
  }
  @media (max-width: 720px) {
    .page { padding: 24px 16px; }
  }

  /* ── Section heading ─────────────────────────────────────────── */
  .section-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .section-heading h2 { font-weight: 500; }
`
