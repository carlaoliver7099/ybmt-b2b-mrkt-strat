/**
 * CoSai. × YBMT — CRM Team One-Pager (Public)
 * ---------------------------------------------------------------------------
 * URL: /crm/help
 *
 * Purpose: A single printable page Carla can give to Matt, Corrina, Gerry,
 *          Paul and Darcy on day one. Designed to fit on one A4 sheet when
 *          printed (or saved as PDF via Print → Save as PDF).
 *
 * Audience: Non-developer JV team. Plain English. No jargon.
 *
 * Sections:
 *   1. What this is + URL + login
 *   2. The 5 things you'll do most often (intent-first, not feature-first)
 *   3. Daily rhythm (3 quick habits to make it stick)
 *   4. The pipeline stages explained in one line each
 *   5. Help / contact
 *
 * Print rules:
 *   - @media print → A4 portrait, 12mm margins, no brand bar, no shadows
 *   - All text ≥ 9pt, headings ≤ 14pt → fits in one page
 *   - URL printed in a monospace block so people can read it on paper
 */

import { PageShell } from '../components/page-shell'

interface CrmHelpPageProps {
  liveUrl: string
}

export const CrmHelpPage = ({ liveUrl }: CrmHelpPageProps) => (
  <PageShell title="Team One-Pager">
    <style>{helpCss}</style>

    {/* Print-only header (brand bar is hidden on print) */}
    <div class="print-header">
      <div class="print-wordmark">
        CoSai<span class="brass">.</span> × YBMT
      </div>
      <div class="print-meta">CRM Team One-Pager · v1 · {new Date().toISOString().slice(0, 10)}</div>
    </div>

    <div class="help-page">
      {/* ── Header ───────────────────────────────────────────────── */}
      <header class="help-hero">
        <h1>How to use the CRM</h1>
        <p class="lede">
          This replaces the Google sheet you've been using to track Meta Ads
          leads. Same job — keep track of every quote from "lead landed" to
          "won or lost" — but now everyone's looking at the same picture, the
          quote number is assigned for you, and nothing gets lost between
          inboxes.
        </p>

        <div class="hero-grid">
          <div class="hero-block">
            <div class="hero-label">Web address</div>
            <div class="hero-url mono">{liveUrl}</div>
            <div class="hero-hint">Bookmark this. Works on laptop, tablet, phone.</div>
          </div>
          <div class="hero-block">
            <div class="hero-label">Your password (first time only)</div>
            <div class="hero-pw mono">CoSaiSetup2026!</div>
            <div class="hero-hint">
              You'll be forced to set a new one of your own choice as soon as you log in.
            </div>
          </div>
        </div>
      </header>

      {/* ── The 5 things ──────────────────────────────────────────── */}
      <section class="help-section">
        <h2>The 5 things you'll do most often</h2>
        <ol class="task-list">
          <li>
            <div class="task-num">1</div>
            <div class="task-body">
              <div class="task-title">A new lead comes in (Meta Ads or referral)</div>
              <div class="task-steps">
                Click <span class="kbd">+ New Quote</span> in the top bar → fill in
                the 3 short sections (client / job / numbers) → save. The system
                assigns a quote number like <span class="mono">Q-2026-0099</span> automatically.
              </div>
              <div class="task-who">Done by: whoever takes the lead first (usually Corrina or Matt)</div>
            </div>
          </li>

          <li>
            <div class="task-num">2</div>
            <div class="task-body">
              <div class="task-title">You called/texted/emailed the client — log it</div>
              <div class="task-steps">
                Open the quote → scroll to <em>Log a contact</em> → pick the
                method (call/text/email) → write one line of what was said →
                save. This stops things falling through the cracks and shows
                Carla how warm/cold a lead is.
              </div>
              <div class="task-who">Done by: Corrina (mostly), Matt (after site visits)</div>
            </div>
          </li>

          <li>
            <div class="task-num">3</div>
            <div class="task-body">
              <div class="task-title">The lead moved forward — change the stage</div>
              <div class="task-steps">
                Open the quote → top-right <em>Stage</em> panel → pick the new
                stage (e.g. <strong>RFQ Received → Site Visit Scheduled</strong>). The
                system writes an audit log so we can see who moved what when.
              </div>
              <div class="task-who">Done by: Corrina (early stages), Matt (quote/site stages)</div>
            </div>
          </li>

          <li>
            <div class="task-num">4</div>
            <div class="task-body">
              <div class="task-title">You sent the quote — record sales + costs</div>
              <div class="task-steps">
                Open the quote → <em>Edit</em> → fill in the sales price and
                cost. The system calculates the margin automatically. Move the
                stage to <strong>Quote Sent</strong>.
              </div>
              <div class="task-who">Done by: Matt</div>
            </div>
          </li>

          <li>
            <div class="task-num">5</div>
            <div class="task-body">
              <div class="task-title">The lead said no — close it out properly</div>
              <div class="task-steps">
                Open the quote → <em>Stage</em> panel → pick <strong>Lost / Withdrawn</strong> or
                <strong>Rejected</strong> → choose a reason from the dropdown (price /
                timing / out of area / etc.) → save. This is gold for marketing
                — it tells us why we're losing.
              </div>
              <div class="task-who">Done by: Corrina (mostly), Matt (after a quote)</div>
            </div>
          </li>
        </ol>
      </section>

      {/* ── Daily rhythm ──────────────────────────────────────────── */}
      <section class="help-section">
        <h2>Daily rhythm (3 habits to make it stick)</h2>
        <div class="rhythm-grid">
          <div class="rhythm-card">
            <div class="rhythm-when">First thing</div>
            <div class="rhythm-what">Open the dashboard</div>
            <div class="rhythm-why">
              See what's overdue, what needs a follow-up, what's at risk of
              breaching SLA. 60 seconds. Sets your day.
            </div>
          </div>
          <div class="rhythm-card">
            <div class="rhythm-when">Every contact</div>
            <div class="rhythm-what">Log it before the next call</div>
            <div class="rhythm-why">
              If you don't log it inside 5 minutes, you won't log it at all.
              One line is enough. "Called, no answer, left vm" is fine.
            </div>
          </div>
          <div class="rhythm-card">
            <div class="rhythm-when">End of day</div>
            <div class="rhythm-what">Move stages for what changed</div>
            <div class="rhythm-why">
              Anything that moved forward, mark it. Anything that died, mark
              it. Empty inbox feeling, but for the pipeline.
            </div>
          </div>
        </div>
      </section>

      {/* ── Stages explained ──────────────────────────────────────── */}
      <section class="help-section">
        <h2>The 11 stages, in one line each</h2>
        <table class="stages-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1. RFQ Received</td><td>Lead just landed. Hasn't been contacted yet.</td></tr>
            <tr><td>2. Site Visit Scheduled</td><td>Matt has a date in the diary.</td></tr>
            <tr><td>3. Site Visit Complete</td><td>Matt's been on site. Now he's quoting.</td></tr>
            <tr><td>4. Quote In Preparation</td><td>Numbers being worked out. Not sent yet.</td></tr>
            <tr><td>5. Quote Sent</td><td>Customer has the quote. Now waiting.</td></tr>
            <tr><td>6. Follow-up / Negotiation</td><td>Conversations after sending. They might be haggling.</td></tr>
            <tr><td>7. Requote In Progress</td><td>They asked us to revise. New quote being prepared.</td></tr>
            <tr><td>8. On Hold</td><td>Paused — customer asked us to wait (council, finance, etc.).</td></tr>
            <tr><td>9. Accepted</td><td>Won. Job is ours.</td></tr>
            <tr><td>10. Rejected</td><td>Customer said no, with a reason.</td></tr>
            <tr><td>11. Lost / Withdrawn</td><td>Disqualified, ghosted, out of area, not proceeding.</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Help / contact ────────────────────────────────────────── */}
      <section class="help-section help-footer">
        <h2>If something doesn't work</h2>
        <ul class="help-list">
          <li>
            <strong>Forgot your password?</strong> Tell Carla — she can reset
            it for you (she's set as the admin).
          </li>
          <li>
            <strong>Saw something marked "SAMPLE"?</strong> That's demo data
            we kept for training. Real leads are unmarked. The screen tells
            you the mix at the top of the quotes list.
          </li>
          <li>
            <strong>Something looks wrong?</strong> Take a screenshot and
            send it to Carla. Don't panic — nothing you do in the tool can
            break it, everything is logged + reversible.
          </li>
          <li>
            <strong>Want a new feature?</strong> Tell Carla. We'll batch them
            and add them at the next sprint.
          </li>
        </ul>

        <div class="help-print">
          <button class="btn-print" onclick="window.print()">
            Print this page (or save as PDF)
          </button>
          <span class="print-hint">
            Use your browser's "Save as PDF" option in the print dialog to get
            a digital copy you can email or stick on the fridge.
          </span>
        </div>
      </section>

      {/* ── Footer credit ─────────────────────────────────────────── */}
      <footer class="help-credit">
        <div>
          CoSai<span class="brass">.</span> × YBMT JV · Quote CRM · Built for the operating team
        </div>
        <div class="mono">{liveUrl}</div>
      </footer>
    </div>
  </PageShell>
)

const helpCss = `
  /* ── Print-only header (hidden on screen) ─────────────────────── */
  .print-header { display: none; }

  /* ── Screen layout ────────────────────────────────────────────── */
  .help-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 32px 24px 80px;
    font-family: var(--font-body);
  }

  .help-hero {
    margin-bottom: 32px;
  }
  .help-hero h1 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  .help-hero .lede {
    font-size: 16px;
    line-height: 1.55;
    color: var(--muted-stone);
    max-width: 720px;
    margin-bottom: 24px;
  }
  .brass { color: var(--brass-accent); }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    .hero-grid { grid-template-columns: 1fr; }
  }
  .hero-block {
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 20px;
  }
  .hero-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted-stone);
    margin-bottom: 8px;
  }
  .hero-url {
    font-size: 16px;
    color: var(--ink-charcoal);
    word-break: break-all;
    margin-bottom: 8px;
  }
  .hero-pw {
    font-size: 18px;
    font-weight: 500;
    color: var(--ink-charcoal);
    background: rgba(200, 169, 106, 0.15);
    border: 1px dashed var(--brass-accent);
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-block;
    margin-bottom: 8px;
  }
  .hero-hint {
    font-size: 12px;
    color: var(--muted-stone);
    line-height: 1.5;
  }

  /* ── Sections ──────────────────────────────────────────────────── */
  .help-section {
    margin-bottom: 36px;
  }
  .help-section h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--brass-accent);
  }

  /* ── Task list ─────────────────────────────────────────────────── */
  .task-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .task-list li {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--border-soft);
  }
  .task-list li:last-child { border-bottom: none; }
  .task-num {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: var(--ink-charcoal);
    color: var(--brass-accent);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .task-title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--ink-charcoal);
  }
  .task-steps {
    font-size: 14px;
    line-height: 1.55;
    color: var(--ink-charcoal);
    margin-bottom: 4px;
  }
  .task-who {
    font-size: 12px;
    color: var(--muted-stone);
    font-style: italic;
  }
  .kbd {
    display: inline-block;
    padding: 1px 8px;
    border: 1px solid var(--border-soft);
    border-bottom-width: 2px;
    border-radius: 6px;
    background: var(--white-card);
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink-charcoal);
  }

  /* ── Rhythm grid ───────────────────────────────────────────────── */
  .rhythm-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  @media (max-width: 720px) {
    .rhythm-grid { grid-template-columns: 1fr; }
  }
  .rhythm-card {
    background: var(--white-card);
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    padding: 16px;
  }
  .rhythm-when {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--brass-accent);
    margin-bottom: 6px;
  }
  .rhythm-what {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .rhythm-why {
    font-size: 13px;
    color: var(--muted-stone);
    line-height: 1.5;
  }

  /* ── Stages table ──────────────────────────────────────────────── */
  .stages-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  .stages-table th,
  .stages-table td {
    text-align: left;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-soft);
  }
  .stages-table th {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted-stone);
    background: rgba(245, 243, 239, 0.5);
  }
  .stages-table td:first-child {
    font-weight: 600;
    color: var(--ink-charcoal);
    white-space: nowrap;
    width: 200px;
  }

  /* ── Footer / help ─────────────────────────────────────────────── */
  .help-footer { margin-top: 8px; }
  .help-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
  }
  .help-list li {
    padding: 10px 0;
    border-bottom: 1px solid var(--border-soft);
    font-size: 14px;
    line-height: 1.55;
  }
  .help-list li:last-child { border-bottom: none; }
  .help-list strong { color: var(--ink-charcoal); }

  .help-print {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 20px;
    background: var(--white-card);
    border: 1px dashed var(--brass-accent);
    border-radius: 12px;
  }
  .btn-print {
    background: var(--ink-charcoal);
    color: var(--brass-accent);
    border: none;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn-print:hover { background: #2a282d; }
  .print-hint {
    font-size: 12px;
    color: var(--muted-stone);
    line-height: 1.5;
    flex: 1;
    min-width: 200px;
  }

  .help-credit {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--border-soft);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 12px;
    color: var(--muted-stone);
  }
  .help-credit .mono { font-size: 11px; }

  /* ──────────────────────────────────────────────────────────────── */
  /* ── PRINT STYLES: optimised for A4, fit on one page ───────────── */
  /* ──────────────────────────────────────────────────────────────── */
  @media print {
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }

    /* Hide brand bar, print button, and any nav */
    body > header,
    nav,
    .help-print,
    .help-credit { display: none !important; }

    body {
      background: white !important;
      color: black !important;
      font-size: 9pt !important;
    }

    .print-header {
      display: flex !important;
      justify-content: space-between;
      align-items: baseline;
      padding-bottom: 6mm;
      margin-bottom: 4mm;
      border-bottom: 1pt solid #1b1a1e;
    }
    .print-wordmark {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14pt;
      letter-spacing: -0.04em;
    }
    .print-meta {
      font-size: 8pt;
      color: #666;
    }

    .help-page {
      max-width: none;
      padding: 0;
    }

    .help-hero h1 {
      font-size: 16pt;
      margin-bottom: 4mm;
    }
    .help-hero .lede {
      font-size: 9pt;
      margin-bottom: 4mm;
      color: #333;
    }

    .hero-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
      margin: 0 0 6mm 0;
    }
    .hero-block {
      padding: 3mm;
      border: 0.5pt solid #999;
      border-radius: 2mm;
      background: white;
    }
    .hero-label { font-size: 7pt; margin-bottom: 2mm; }
    .hero-url   { font-size: 9pt; margin-bottom: 2mm; }
    .hero-pw    { font-size: 10pt; padding: 1mm 3mm; margin-bottom: 2mm; }
    .hero-hint  { font-size: 7.5pt; }

    .help-section {
      margin-bottom: 5mm;
      page-break-inside: avoid;
    }
    .help-section h2 {
      font-size: 11pt;
      margin-bottom: 3mm;
      padding-bottom: 1.5mm;
      border-bottom: 1pt solid #1b1a1e;
    }

    .task-list li {
      grid-template-columns: 6mm 1fr;
      gap: 3mm;
      padding: 2mm 0;
      border-bottom: 0.5pt solid #ddd;
      page-break-inside: avoid;
    }
    .task-num {
      width: 5mm;
      height: 5mm;
      font-size: 8pt;
      background: #1b1a1e;
      color: #c8a96a;
    }
    .task-title { font-size: 9pt; margin-bottom: 1mm; }
    .task-steps { font-size: 8.5pt; line-height: 1.4; margin-bottom: 0.5mm; }
    .task-who   { font-size: 7.5pt; }
    .kbd { font-size: 8pt; padding: 0 2pt; }

    .rhythm-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3mm;
    }
    .rhythm-card {
      padding: 3mm;
      border: 0.5pt solid #999;
    }
    .rhythm-when { font-size: 7pt; }
    .rhythm-what { font-size: 9pt; margin-bottom: 2mm; }
    .rhythm-why  { font-size: 7.5pt; line-height: 1.4; }

    .stages-table { font-size: 7.5pt; }
    .stages-table th,
    .stages-table td { padding: 1.5mm 3mm; }
    .stages-table th { font-size: 7pt; }
    .stages-table td:first-child { width: 35mm; }

    .help-list li {
      padding: 2mm 0;
      font-size: 8pt;
      line-height: 1.4;
      border-bottom: 0.5pt solid #ddd;
    }

    /* Make all colours print-friendly */
    .brass { color: #b89254 !important; }
  }
`
