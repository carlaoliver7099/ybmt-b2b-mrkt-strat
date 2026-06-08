/* ============================================================================
   /src/upstream-anchor.tsx — Congruency Anchor Component
   ============================================================================
   PURPOSE
   The single shared component that every Phase 3 and Phase 4 deliverable
   embeds immediately after its Doctrine block. Its job is to make the
   upstream → downstream traceability EXPLICIT on the rendered page, so a
   YDT analyst opening any execution document can see — without leaving the
   page — which Phase 1 / Phase 2 decisions this document is bound to obey.

   This component is the operating manifestation of CONGRUENCY-DOCTRINE-v1.md.
   Five upstream anchors are cited in every downstream document:

     1. PERSONA       (WS-04) — "Sarah & Mark · The Established SEQ Homeowner"
     2. CATEGORY POV  (WS-01) — "Whole-of-Home Stewardship"
     3. BRAND PROMISE (WS-02) — "Built like it's our own home."
     4. ECONOMICS     (WS-05) — 30× LTV ratio (10-year horizon, 3-LOB)
     5. KPI CONTRACT  (WS-11) — F1 → F2 → F3 funnel + MEDDPICC + MMM

   USAGE
     import { UpstreamAnchor } from './upstream-anchor'

     <Doctrine />
     <UpstreamAnchor doc="WS-09 Paid Media" />    -- drop here
     <NextSection />

   The `doc` prop is a string used in the eyebrow so the reader knows
   which downstream document is being anchored. Lede copy is identical
   across all docs by design — that consistency IS the point.
   ============================================================================ */

type UpstreamAnchorProps = {
  doc: string
}

export const UpstreamAnchor = ({ doc }: UpstreamAnchorProps) => (
  <section class="upstream-anchor" id="upstream-anchor">
    <div class="ua-inner">
      <div class="ua-eyebrow">Upstream Anchor · {doc} obeys these five decisions</div>
      <h2 class="ua-title">Every recommendation below is bound to five upstream contracts.</h2>
      <p class="ua-lede">
        This document does not invent strategy. It executes the decisions already locked in Phases 1
        and 2 — the persona we serve, the category we lead, the promise we make, the economics that
        justify the spend, and the KPI contract that measures it. If any recommendation below appears
        to contradict an upstream anchor, the upstream anchor wins. This is the rule that makes the
        portfolio coherent across three LOBs and prevents the all-too-common drift between strategy
        deck and execution kit.
      </p>

      <div class="ua-grid">
        <div class="ua-card ua-persona">
          <div class="ua-ws">WS-04 · Persona</div>
          <h3 class="ua-h">Sarah &amp; Mark</h3>
          <p class="ua-b">
            The Established SEQ Homeowner. 42–58, owner-occupier or 2–4-property investor,
            $1.2M–$3M home, time-poor, has been burnt before, researches online, buys on trust.
            Every line below is written to <strong>them</strong>, not to a generic audience.
          </p>
          <a href="/ymt-jtbd">View WS-04 JTBD →</a>
        </div>

        <div class="ua-card ua-category">
          <div class="ua-ws">WS-01 · Category</div>
          <h3 class="ua-h">Whole-of-Home Stewardship</h3>
          <p class="ua-b">
            The category YMT designs and leads. Enemy: the transactional trades market. Lexicon:
            <strong> stewardship · custodian · sleep at night · built like our own home</strong>.
            Every page, ad, email below reinforces this category frame.
          </p>
          <a href="/ymt-category">View WS-01 Category →</a>
        </div>

        <div class="ua-card ua-promise">
          <div class="ua-ws">WS-02 · Promise</div>
          <h3 class="ua-h">"Built like it's our own home."</h3>
          <p class="ua-b">
            The portfolio brand promise. Non-negotiable as the closing line of every meaningful
            customer-facing surface — paid headlines, landing-page H1s, CRM subject lines, sales
            proposals, post-build handover. <strong>One brand. Three LOBs. One promise.</strong>
          </p>
          <a href="/ymt-brand">View WS-02 Brand →</a>
        </div>

        <div class="ua-card ua-economics">
          <div class="ua-ws">WS-05 · Economics</div>
          <h3 class="ua-h">30× LTV ratio</h3>
          <p class="ua-b">
            Cross-LOB 10-year customer LTV is ~30× first-job revenue. <strong>This is why we can
            afford a 60/40 long/short split</strong>, why we invest in owned channels, why CRM
            and lifecycle matter, and why MEDDPICC qualification is a long-term value gate, not
            a short-term lead filter.
          </p>
          <a href="/ymt-bowtie">View WS-05 Bowtie →</a>
        </div>

        <div class="ua-card ua-kpi">
          <div class="ua-ws">WS-11 · KPI Contract</div>
          <h3 class="ua-h">F1 → F2 → F3 · MEDDPICC · MMM</h3>
          <p class="ua-b">
            The single shared funnel language. <strong>F1</strong> = market reach + brand search,
            <strong> F2</strong> = qualified opportunity (MEDDPICC scored), <strong>F3</strong> =
            customer + expansion. MMM as the truth-check. <strong>Every KPI cited below maps to
            an F-stage or to a MEDDPICC criterion.</strong>
          </p>
          <a href="/ymt-kpi-contract">View WS-11 KPI Contract →</a>
        </div>
      </div>
    </div>
  </section>
)
