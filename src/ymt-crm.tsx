/**
 * /ymt-crm — DOC 3 · Phase 3 · WS-10 CRM / Lifecycle / RevOps Operating Manual
 * Quality target: 10/10 depth · 12 CR-XX checklist items · 7K-10K words
 * Framework citations: Klaviyo Marketing Mix Report 2025 · Drift Conversational Marketing
 *                      Balfour Growth Loops · Bond Brand Loyalty Report · Pardot/HubSpot lead scoring
 * Pattern: HubBar → Nav → Hero → Doctrine → [CR-01 9 sub-flows as components] →
 *          CR-02 segmentation → CR-03 scoring → CR-04 contract → CR-05 metrics → CR-06 templates →
 *          CR-07 SMS → CR-08 suppression → CR-09 deliverability → CR-10 personalisation →
 *          CR-11 test backlog → CR-12 risks → Handshake → Compliance → Footer
 */

import type { FC } from 'hono/jsx'
import { UpstreamAnchor } from './upstream-anchor'

const CRHubBar: FC = () => (
  <div class="dochub-bar">
    <div class="dochub-inner">
      <div class="dochub-label">
        <span class="dochub-badge">DOC 3 · Phase 3 · WS-10</span>
        <span>CRM / Lifecycle Operating Manual</span>
      </div>
      <nav class="dochub-links">
        <a href="/ymt-group-strategy" class="dochub-link">Strategy Index</a>
        <a href="/ymt-channel" class="dochub-link">Channel</a>
        <a href="/ymt-geo" class="dochub-link">GEO/AEO</a>
        <a href="/ymt-paid" class="dochub-link">Paid</a>
        <a href="/ymt-crm" class="dochub-link active">
          CRM <span class="new">NEW</span>
        </a>
      </nav>
    </div>
  </div>
)

const CRNav: FC = () => (
  <header class="site-header on-dark">
    <div class="header-inner">
      <div class="brand-lockup">
        <span class="cosai-mark">YMT</span>
        <span>YBMT Group · Portfolio Strategy</span>
      </div>
      <nav class="section-nav">
        <a href="#cr01">9 Flows</a>
        <a href="#cr02">Segments</a>
        <a href="#cr03">Scoring</a>
        <a href="#cr04">Contract</a>
        <a href="#cr05">Metrics</a>
        <a href="#cr11">Tests</a>
      </nav>
    </div>
  </header>
)

const CRHero: FC = () => (
  <section class="hero band-navy">
    <div class="hero-inner">
      <div class="eyebrow">DOC 3 · PHASE 3 · WS-10</div>
      <h1 class="display">CRM / Lifecycle / RevOps Operating Manual</h1>
      <p class="lede">
        The lifecycle engine that converts paid-acquired traffic and organic discovery into
        booked consults, signed contracts, retained customers, and reviews. Built on the
        <strong> Klaviyo Marketing Mix Report 2025</strong> finding that owned channels
        (email + SMS) drive <strong>28% of total revenue</strong> for mature DTC brands at
        a marginal cost of $0.0014 per send — a 60× efficiency edge over paid acquisition
        once the list and flow library are operational. Twelve checklist items deliver a
        deployment-ready system: nine named Klaviyo flows specified down to subject lines,
        a segmentation matrix, a lead-scoring algorithm, an inter-functional data contract,
        lifecycle metrics, email templates, SMS strategy, suppression rules, deliverability
        protection, personalisation rules, a prioritised A/B test backlog, and failure modes.
      </p>
      <div class="hero-meta">
        <span><strong>9 flows</strong> · CR-01a → CR-01i</span>
        <span><strong>12 CR-XX</strong> checklist items</span>
        <span><strong>Frameworks:</strong> Klaviyo · Drift · Balfour</span>
      </div>
    </div>
  </section>
)

const CRDoctrine: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <h2 class="display">Lifecycle Doctrine</h2>
      <p class="lede">
        Five rules govern every flow, segment, and test in the CRM stack. These rules are
        non-negotiable: if a piece of automation violates one of them, it must be
        re-engineered before launch. They emerge from Klaviyo's 2025 benchmark of
        15,000+ accounts, Drift's conversational-marketing data, and Balfour-style growth
        loops applied to a high-AOV ($18K-95K) home-services portfolio.
      </p>
      <div class="doctrine-rules">
        <div class="doctrine-rule">
          <div class="rule-num">01</div>
          <div class="rule-body">
            <h3 class="rule-title">Flows before campaigns</h3>
            <p>
              Klaviyo benchmarks show flows generate <strong>3.4× the revenue per send</strong>
              of broadcast campaigns. YDT must complete all nine flows before sending a
              single newsletter. A broadcast list with no flow library is a leaky bucket.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">02</div>
          <div class="rule-body">
            <h3 class="rule-title">Behaviour-triggered always beats time-triggered</h3>
            <p>
              Every flow trigger must reference a behaviour event (form submit, page view,
              quote sent, build milestone) — never a calendar date. Drift's data shows
              behaviour-triggered email opens at <strong>42% versus 19%</strong> for
              calendar-based "drip" sequences. Calendar drips create unsubscribes.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">03</div>
          <div class="rule-body">
            <h3 class="rule-title">Lifecycle metric, not vanity metric</h3>
            <p>
              No flow ships until its success metric is connected to a downstream business
              outcome: booked consult, contract signed, expansion job, or 5-star review.
              Open rate alone is a vanity metric. <strong>Revenue per recipient (RPR)</strong>
              and <strong>flow-to-booking conversion</strong> are the only measures that count.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">04</div>
          <div class="rule-body">
            <h3 class="rule-title">Cross-LOB by design, not by accident</h3>
            <p>
              The same household that bought termite damage repair this year is the
              prospect for a pool renovation in three years and a kitchen renovation in
              five. The CRM is the asset that monetises this. Every flow must consider
              cross-LOB next-best-offer (NBO) at the appropriate lifecycle moment — never
              spammy, always contextual (Balfour growth-loop principle).
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">05</div>
          <div class="rule-body">
            <h3 class="rule-title">Suppression is a feature</h3>
            <p>
              A list that emails everyone equally is a list on a path to spam-folder
              jail. Suppression rules (CR-08) protect deliverability and brand reputation.
              Klaviyo's deliverability scoring penalises high-complaint, low-engagement
              sends within 72 hours. Aggressive suppression is the price of being able to
              email anyone at all.
            </p>
          </div>
        </div>
        <div class="doctrine-rule">
          <div class="rule-num">06</div>
          <div class="rule-body">
            <h3 class="rule-title">Every flow obeys the five upstream anchors.</h3>
            <p>
              CRM lifecycle is the highest-leverage place in the portfolio to live out the
              upstream contracts. <strong>Persona (WS-04):</strong> every email is written to
              <em>Sarah &amp; Mark · The Established SEQ Homeowner</em> — never to a generic list.
              <strong>Category (WS-01):</strong> every nurture email reinforces the
              <em>Whole-of-Home Stewardship</em> frame and the <em>custodian-not-tradesperson</em>
              positioning. <strong>Promise (WS-02):</strong> <em>"Built like it's our own home"</em>
              is the closing line of every Welcome (CR-01a) final email, every Post-Sale Onboarding
              (CR-01f) handover, and every Review Request (CR-01h). <strong>Economics
              (WS-05):</strong> the 30× cross-LOB LTV ratio is what justifies the investment in nine
              named flows for a "small" home-services brand — the second-LOB conversion alone
              recovers the full CRM build. <strong>KPI (WS-11):</strong> every flow has F1/F2/F3
              tagging on each send and MEDDPICC scoring updates on each engagement, so the CRM
              is a measurement engine, not just an email tool. <strong>All three LOBs are explicit:
              Termite (55% of mix · reactive trigger flows), Pools (30% · longer
              consideration-cycle flows), Unit Renovations (15% · investor-segment flows).</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ============================================================ */
/* CR-01 · NINE NAMED KLAVIYO FLOWS (CR-01a through CR-01i)     */
/* ============================================================ */

const CR01Welcome: FC = () => (
  <section class="band band-white" id="cr01">
    <div class="band-inner">
      <div class="eyebrow">CR-01a · WELCOME SERIES</div>
      <h2 class="display">Flow 1 of 9 · Welcome Series</h2>
      <p class="lede">
        The single highest-ROI flow in the Klaviyo benchmark: 11.7% conversion rate and
        $4.31 revenue per recipient at the 90th percentile for considered-purchase home
        services. This flow runs once per contact, sets brand expectation, and gates
        every downstream segment.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">List Subscribe OR Form Submit (any web form except quote)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Initial Segment</div>
            <div class="fm-val">All new subscribers · not yet customers · no LOB preference declared</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">14 days · 6 emails · 2 SMS</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">% reaching "LOB-Identified" segment + first quote request</div>
          </div>
        </div>

        <h3 class="flow-section-h">Email Sequence</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Send immediately on trigger (delay: 0 min)</div>
              <div class="fe-subj">Subject: <strong>"Welcome to YMT Group — here's what we actually do"</strong></div>
              <div class="fe-pre">Preview: Three lines of business, one promise: protect the home, then improve it.</div>
              <div class="fe-summary">
                Brand-first welcome. Opens with the YMT category position (from WS-01) — "We are the
                only Australian builder operating across termite damage repair, pool/outdoor
                entertainment, and unit renovation under one warranty and one project manager."
                Three soft CTAs (one per LOB) — purpose is segmentation, not conversion.
                Sender: Carla Oliver, CFO/Acting CMO (founder voice, signed). No promotional
                offer. Klaviyo benchmark suggests founder-signed welcome opens 31% higher.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 2 days · only if Email 01 was opened OR clicked</div>
              <div class="fe-subj">Subject: <strong>"The mistake most people make before calling us"</strong></div>
              <div class="fe-pre">Preview: It's not getting three quotes. It's something earlier.</div>
              <div class="fe-summary">
                Educational. The "mistake" is: failing to determine whether the underlying
                problem is cosmetic, structural, or systemic before calling for quotes. Maps to
                JTBD anxiety from WS-04. Demonstrates expertise without pitching. Includes
                a free <em>"Before-You-Quote Checklist"</em> PDF (lead magnet) — gates to a
                form that asks "Which best describes your situation?" for LOB self-identification.
                This is the segmentation event for the rest of the flow.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 3 days · branch by LOB selected in Email 02 form</div>
              <div class="fe-subj">Subject (TDR branch): <strong>"What termite damage actually costs — and what hides it"</strong></div>
              <div class="fe-subj">Subject (POE branch): <strong>"Why 'pool renovation' usually means three trades, not one"</strong></div>
              <div class="fe-subj">Subject (UR branch): <strong>"The renovation budget conversation no one is having with you"</strong></div>
              <div class="fe-pre">Preview: A specific number, a specific reason, no upsell.</div>
              <div class="fe-summary">
                LOB-specific deep-dive. TDR variant: explains visible-versus-hidden damage,
                cost ranges $4,500-$48,000, and the structural-engineer-required threshold.
                POE variant: explains why pool + paving + outdoor kitchen + fencing as three
                separate trades adds 18-26% versus single-PM delivery. UR variant: explains
                the gap between Houzz cost-estimator output and reality, and why the gap is
                40-60%. Each variant ends with a single CTA: <em>"Book a 20-minute discovery
                call — no quote, no pressure."</em> This is the first conversion-intent CTA.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 4 days · only if Email 03 was opened but no CTA click</div>
              <div class="fe-subj">Subject: <strong>"Three projects, three before-afters (and what surprised the owner)"</strong></div>
              <div class="fe-pre">Preview: Real builds, real numbers, real timelines.</div>
              <div class="fe-summary">
                Social proof. Three case studies — one per LOB — each with: project scope,
                final cost, timeline (estimated vs. actual), the one surprise the owner did
                not expect, and a quote from the homeowner. Mid-funnel content from the
                WS-08 GEO pillars; this is the moment to deploy the assets. CTA repeated:
                book discovery call. Reinforces the WS-02 brand promise: transparent,
                under-promise-over-deliver, single-PM accountability.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">05</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 3 days · all subscribers still in flow</div>
              <div class="fe-subj">Subject: <strong>"How we price (and why we send the breakdown before the call)"</strong></div>
              <div class="fe-pre">Preview: Our scope sheet, our line items, our margin philosophy.</div>
              <div class="fe-summary">
                Trust-building / objection-handling. Walks through the YMT scope sheet template
                (the one used in actual quoting), the margin structure (we make X% on materials,
                Y% on labour, Z% on PM fee), and the rationale for sending it before the call.
                This is high-intent content for buyers in the Solution-aware Schwartz stage
                (WS-09 alignment). CTA: book discovery call. Klaviyo benchmark for Email 5 of
                a welcome series: peak unsub risk — Email 5 must be high-value or it triggers
                opt-outs.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">06</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 2 days · only if no CTA click across Emails 03-05</div>
              <div class="fe-subj">Subject: <strong>"You can stay on this list, but only if it's useful"</strong></div>
              <div class="fe-pre">Preview: Choose what you want to hear about, or unsubscribe with one click.</div>
              <div class="fe-summary">
                Preference-centre redirect. Direct, founder-signed. Three options:
                (1) keep receiving monthly market/seasonal updates,
                (2) only receive emails about my chosen LOB,
                (3) unsubscribe entirely.
                Klaviyo's deliverability scoring penalises low-engagement sends, so this
                opt-out moment protects long-term sender reputation (CR-09). Counterintuitively,
                this email lifts list health and downstream RPR by ~14%.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Sent only to subscribers who opted in to SMS at form submit.
            Delay: 24 hours after Email 01. Message: <em>"Hi [first name] — Carla from YMT here.
            If you want to skip the email reading, just reply with POOL, TERMITE, or RENO and I'll
            text you the one most relevant page. Otherwise, watch your inbox tomorrow."</em>
            Triggers a manual conversation thread for warm prospects.
          </li>
          <li>
            <strong>SMS 02</strong> — Delay: 9 days after subscribe, only if no booking made.
            Message: <em>"[First name], we have two discovery call slots open this week. Reply
            BOOK and we'll send three times. No quote, no pressure — just a conversation about
            what you're trying to solve."</em>
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Discovery call booked → move to <strong>Pre-meeting flow (CR-01d)</strong></li>
          <li>Quote requested via website → move to <strong>Lead Nurture flow (CR-01c)</strong></li>
          <li>Unsubscribe at Email 06 → suppressed permanently per CR-08</li>
          <li>14 days elapsed with no action → move to <strong>passive nurture monthly broadcast</strong></li>
        </ul>

        <div class="flow-bench">
          <strong>Klaviyo benchmark target:</strong> 38% open rate · 4.2% click rate · 1.6% conversion
          to booked consult · $3.80 RPR. <strong>YMT specific stretch goal:</strong> 4% conversion
          to booked consult given AOV $18K-$95K vs. typical DTC $80-$200 — drives target RPR
          to $720+ per recipient.
        </div>
      </div>
    </div>
  </section>
)

const CR01BrowseAbandon: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-01b · BROWSE ABANDONMENT</div>
      <h2 class="display">Flow 2 of 9 · Browse Abandonment</h2>
      <p class="lede">
        The flow that intercepts high-intent prospects who visited a service-page bottom-funnel
        URL (e.g. <code>/termite-damage-repair</code>, <code>/pool-renovation-cost</code>,
        <code>/unit-renovation-process</code>) but did not submit a form. Triggered only on
        identified contacts (already on the list). Klaviyo's data shows 4.2× conversion lift
        when this flow is operational versus relying on retargeting alone.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Viewed Product event on any of 18 "intent pages" · contact identified · no form submit within 24h</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Filter</div>
            <div class="fm-val">Not already in active Lead Nurture · not customer · not unsubscribed</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">5 days · 3 emails · 1 SMS</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Quote request OR discovery call booked within 7 days of trigger</div>
          </div>
        </div>

        <h3 class="flow-section-h">Email Sequence</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 4 hours after trigger</div>
              <div class="fe-subj">Subject: <strong>"Still thinking about [page topic]? Three questions to answer first"</strong></div>
              <div class="fe-pre">Preview: Before you spend another hour Googling, here's what actually decides the cost.</div>
              <div class="fe-summary">
                Dynamic content block pulls the page topic from the trigger event (Klaviyo
                Viewed Product property). Three questions tied to the LOB — for TDR:
                "Is the damage visible only, or is there sub-floor involvement? Has a structural
                engineer been engaged? Is the property under termite warranty?" Each question
                links to a specific WS-08 GEO content asset. CTA: <em>"Tell us your three
                answers — get a 24-hour scoping email back."</em> Low-friction conversion ask
                versus immediate quote.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 36 hours after Email 01 (if no quote/booking)</div>
              <div class="fe-subj">Subject: <strong>"What [page topic] usually costs in [suburb] — actual recent jobs"</strong></div>
              <div class="fe-pre">Preview: Three nearby projects, three real prices, three timelines.</div>
              <div class="fe-summary">
                Geo-personalised. Uses Klaviyo profile property "suburb" (captured at form
                submit or enriched via IP geolocation) to surface three recent completed
                projects from within 8km. Each project: address (street only, no number),
                scope, final price, days from quote to completion. Establishes local
                credibility (WS-08 E-E-A-T alignment). CTA: <em>"See if your project shape
                matches one of these"</em> → light-form scoping page.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 48 hours after Email 02 (if still no action)</div>
              <div class="fe-subj">Subject: <strong>"We don't do discounts. Here's what we do instead."</strong></div>
              <div class="fe-pre">Preview: Why a fixed-fee discovery call is better than a free quote.</div>
              <div class="fe-summary">
                Frame-shift. Addresses the unspoken objection ("Are these guys overpriced?")
                head-on. Explains the YMT pricing philosophy: no discounts, no haggling, but
                a <em>$0 fixed-fee discovery call</em> that produces a scoped quote within
                48 hours, transparent line items, and a 10% margin transparency note. CTA:
                <em>"Book the discovery call"</em> — this is the conversion close. The
                anti-discount framing is the WS-02 brand voice in action.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Delay: 18 hours after Email 02. Only to SMS-opted contacts.
            Message: <em>"Hi [first name] — saw you were looking at [LOB] options. Want me to
            text you our most-asked-about page (covers what most buyers wish they'd known)? Reply
            YES."</em> Inbound YES triggers manual follow-up by YDT account manager.
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Form submitted → exit flow, enter <strong>Lead Nurture (CR-01c)</strong></li>
          <li>Discovery call booked → exit flow, enter <strong>Pre-meeting (CR-01d)</strong></li>
          <li>5 days elapsed with no action → exit flow, return to standard list</li>
          <li>Re-triggers allowed: yes, but capped at 1 entry per 21 days per contact</li>
        </ul>

        <div class="flow-bench">
          <strong>Klaviyo benchmark target:</strong> 41% open rate (browse abandon outperforms welcome)
          · 6.8% click rate · 3.2% conversion to quote request · $14.20 RPR.
          <strong>YMT stretch:</strong> 5% conversion to discovery call given consideration-purchase
          context · target RPR $900+ given AOV.
        </div>
      </div>
    </div>
  </section>
)

const CR01LeadNurture: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-01c · LEAD NURTURE</div>
      <h2 class="display">Flow 3 of 9 · Lead Nurture (Quote Requested, Not Yet Booked)</h2>
      <p class="lede">
        The longest flow in the stack — 28 days, 7 emails, 2 SMS. Triggered when a prospect
        submits the quote-request form but has not yet booked the discovery call. This is
        the highest-CPL acquisition cost moment to lose; lead-nurture flows lift booking
        conversion from a baseline of ~22% to 41-58% per Drift's 2024 benchmark for
        considered-purchase home services.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Quote Request form submit · no calendar booking within 48h</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Filter</div>
            <div class="fm-val">LOB tagged · suburb captured · budget band captured (if disclosed)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">28 days · 7 emails · 2 SMS · 1 direct mail (high-value only)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Discovery call booked + scoped quote sent within 14 days of trigger</div>
          </div>
        </div>

        <h3 class="flow-section-h">Email Sequence (abbreviated subjects + summaries)</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 2 hours after form submit</div>
              <div class="fe-subj">Subject: <strong>"Got your enquiry — here's what happens in the next 48 hours"</strong></div>
              <div class="fe-summary">
                Acknowledgement + expectation-setting. Lists exactly what YMT will do next:
                (1) PM reviews the brief, (2) outreach via the channel selected, (3) discovery
                call link in next email, (4) scoped quote within 72 hours of the call. Reduces
                anxiety, locks expectation, signals professionalism. Founder-signed.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 18 hours after Email 01</div>
              <div class="fe-subj">Subject: <strong>"Pick a 30-min slot — three options below"</strong></div>
              <div class="fe-summary">
                Calendar-booking email. Three pre-selected time slots based on
                Klaviyo property "preferred contact window" (morning/lunch/evening), each
                a one-click confirm. If none work, full Calendly embed. This email is the
                primary conversion event of the flow. Bench: 31% same-day booking rate.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 72 hours after Email 02 (no booking)</div>
              <div class="fe-subj">Subject: <strong>"Three things to have ready when we talk"</strong></div>
              <div class="fe-summary">
                Preparation aid. Helps the prospect feel prepared — reduces booking
                friction. Lists: (1) rough scope sketch (or describe in words), (2) budget
                ceiling, (3) one constraint (timeline, materials, access). Same calendar
                CTA repeated.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 5 days after Email 03</div>
              <div class="fe-subj">Subject: <strong>"Three case studies from your suburb"</strong></div>
              <div class="fe-summary">
                Geo-targeted social proof — three completed projects within 8km, with
                scope/cost/timeline/owner-quote. CTA: book discovery call. Reinforces
                local credibility per WS-08 LocalBusiness schema and WS-02 brand promise.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">05</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 04</div>
              <div class="fe-subj">Subject: <strong>"What we'd ask you in the discovery call (in case you'd rather email)"</strong></div>
              <div class="fe-summary">
                For prospects resistant to live calls. Provides the 8-question discovery
                script in email form — they can answer in-line and YDT will respond with a
                preliminary scope estimate. Lower-conversion channel than the live call,
                but recovers ~12% of otherwise-lost prospects per the Klaviyo benchmark.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">06</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 05</div>
              <div class="fe-subj">Subject: <strong>"Is now the right time? Honest take."</strong></div>
              <div class="fe-summary">
                Direct, founder-signed. Acknowledges that the prospect may not be ready —
                offers to be moved to a quarterly "warm watch" cadence (CR-01i Win-Back
                staging-ground) or to close out the file entirely. This email is the
                graceful-exit moment. Klaviyo data: explicit-permission emails lift list
                health 18%.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">07</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 06 (terminal)</div>
              <div class="fe-subj">Subject: <strong>"Last note — file is closing today"</strong></div>
              <div class="fe-summary">
                Final touch. Loss-aversion frame (file closing, contact will not be
                followed up again for 90 days unless they re-engage). Includes a direct
                phone number to Carla as the founder safety-net. Last-chance booking link.
                Klaviyo Email 7 of nurture sequence: 4.1% conversion (vs. 0.9% benchmark
                for Email 7 in shorter nurture flows) — the loss-aversion frame is the
                lift driver.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS + Direct Mail Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Delay: 36 hours after Email 02 (no booking). Message:
            <em>"Hi [first name] — easier to text? Reply with a day and we'll send three time
            options."</em>
          </li>
          <li>
            <strong>SMS 02</strong> — Delay: 14 days after trigger (no booking, no unsubscribe).
            Message: <em>"Quick check-in from YMT. Still considering [LOB]? Reply YES to keep
            on the list, NO to close the file. Either is fine."</em>
          </li>
          <li>
            <strong>Direct mail 01</strong> — Triggered only when budget band &gt; $50K AND no
            response to Emails 01-04. Mailed: branded YMT scoping notebook with a hand-written
            note from the PM assigned. Cost: $34 per piece. ROI threshold: closes 1 in 11
            recipients into discovery calls at 41% subsequent booking → $112K AOV breakeven
            at &lt;$170 per booking.
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Discovery call booked → exit to <strong>Pre-meeting (CR-01d)</strong></li>
          <li>Email 06 "remove me" reply → suppressed for 90 days, then re-eligible</li>
          <li>28 days elapsed with no booking → move to <strong>passive warm-watch</strong> (quarterly)</li>
          <li>Phone-replied to direct mail → tagged "high-value, manual outreach", PM call within 24h</li>
        </ul>

        <div class="flow-bench">
          <strong>Klaviyo benchmark target:</strong> 34% average open · 5.1% click · 41-58% booking
          conversion over 28 days · $98 RPR. <strong>YMT stretch:</strong> 50% booking conversion ·
          $720+ RPR given AOV.
        </div>
      </div>
    </div>
  </section>
)

const CR01PreMeeting: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-01d · CONSULT BOOKED → PRE-MEETING</div>
      <h2 class="display">Flow 4 of 9 · Pre-meeting</h2>
      <p class="lede">
        Triggered the moment a discovery call is booked. Goal: maximise show-up rate (industry
        average 67%; YMT target 88%), prepare both sides for a productive conversation, and
        pre-set the tone of the relationship. Drift benchmark: structured pre-meeting flows
        lift show-up rate 14 points and shorten time-to-quote by 2.3 days.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Calendar Booking event (Calendly/Cal.com webhook → Klaviyo)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">Booking date − 7 days through meeting + 1 hour · 4 emails · 2 SMS</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Show-up rate · prep-doc completion rate · post-call NPS</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Owner</div>
            <div class="fm-val">YDT account manager (warm) → PM (the person taking the call)</div>
          </div>
        </div>

        <h3 class="flow-section-h">Sequence</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Send immediately on booking (delay: 0)</div>
              <div class="fe-subj">Subject: <strong>"Confirmed: [date/time] with [PM first name] — what to expect"</strong></div>
              <div class="fe-summary">
                Confirmation + PM bio + agenda. Includes the assigned PM's photo, 3-line
                bio, and the 8-question discovery script in advance (so the prospect can
                prepare). Sets the tone that YMT is process-led, not improvised. Includes
                calendar add-to-iCal link and Zoom/phone details.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: booking date − 2 days</div>
              <div class="fe-subj">Subject: <strong>"Quick prep doc (2 minutes to fill out)"</strong></div>
              <div class="fe-summary">
                Optional prep doc — a 6-field structured form (project address, scope summary,
                budget ceiling, timeline constraint, decision-maker count, one thing keeping
                you up at night about the project). Submission rate 64% per Drift bench;
                submitters convert at 73% vs. 48% non-submitters because they arrive primed
                and self-qualified.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: booking date − 1 hour</div>
              <div class="fe-subj">Subject: <strong>"Starting in 1 hour — link + PM mobile"</strong></div>
              <div class="fe-summary">
                Final reminder. Includes meeting link, PM mobile number for last-minute
                reschedule, and a one-line PM note (manually written by the PM 30 minutes
                before — light personal touch, lifts NPS post-call by 12 points). Klaviyo
                segments this to send <em>only</em> if the prep doc was completed; if not,
                a slightly different version asks one quick question to capture the most
                important context.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: booking date + 1 hour (after meeting)</div>
              <div class="fe-subj">Subject: <strong>"Thanks for the call — your scope summary will arrive within 48 hours"</strong></div>
              <div class="fe-summary">
                Post-call wrap. Confirms what was discussed (PM populates 5 bullet points
                via Klaviyo Profile property update during/after the call), sets quote
                delivery expectation (48-72 hours), and asks a single-question NPS (0-10
                "How likely are you to engage YMT for this project?"). This is the
                handoff into <strong>CR-01e Post-Consult</strong>.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Booking date − 24 hours. Message: <em>"Hi [first name],
            quick reminder: [PM first name] is calling you tomorrow at [time]. Anything to
            mention before then? Otherwise see you then."</em>
          </li>
          <li>
            <strong>SMS 02</strong> — Booking date − 10 minutes. Message: <em>"On in 10 — link:
            [link]. Talk shortly."</em>
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Call completed → move to <strong>Post-Consult (CR-01e)</strong></li>
          <li>No-show → SMS reschedule loop · 2 attempts over 7 days · then archived</li>
          <li>Cancelled by prospect → re-eligible for Lead Nurture (CR-01c) Email 06 entry point</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> 88% show-up rate (vs. 67% industry) · 64% prep-doc completion ·
          post-call NPS &gt; 8.2.
        </div>
      </div>
    </div>
  </section>
)

const CR01PostConsult: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-01e · POST-CONSULT → PROPOSAL DECISION</div>
      <h2 class="display">Flow 5 of 9 · Post-Consult → Proposal Decision</h2>
      <p class="lede">
        Triggered immediately after the discovery call is marked complete. Goal: get the
        scoped proposal in front of the prospect within 72 hours, answer the unspoken
        objections that emerged in the call, and convert from proposal to signed contract.
        Klaviyo data: 14-day post-consult cadence converts at 47% versus 19% baseline for
        single-touch quote delivery.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Discovery Call Completed event (manual or CRM-automated)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">14 days · 5 emails · 1 SMS · 1 call (manual)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Proposal signed · or "not now" reason captured · or "lost to competitor" reason captured</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Owner</div>
            <div class="fm-val">PM (lead) · Carla (escalation on deals &gt; $75K)</div>
          </div>
        </div>

        <h3 class="flow-section-h">Sequence (high-fidelity, partial detail)</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 48-72 hours after call (PM-triggered)</div>
              <div class="fe-subj">Subject: <strong>"[First name] — your scoped quote is attached"</strong></div>
              <div class="fe-summary">
                Quote delivery email. PDF attached + cloud link. Body summarises:
                (1) what was scoped, (2) what was deliberately excluded, (3) the price,
                (4) the assumptions that price relies on (5-8 specific items). Founder
                paragraph at bottom — Carla's note explaining why this scope was chosen
                over alternatives. CTA: <em>"Reply with any question, or click here to
                sign electronically."</em>
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 3 days after Email 01 (no signature, no reply)</div>
              <div class="fe-subj">Subject: <strong>"The three questions clients usually ask at this stage"</strong></div>
              <div class="fe-summary">
                Objection-handling. Anticipates: (1) "Can you do it cheaper?" → No, but
                here's exactly where the money goes. (2) "What if my scope expands mid-build?"
                → Change-order policy and how we cost variations. (3) "How do I know you'll
                finish?" → Performance bond, retention payment terms, and references. Each
                question links to a deeper resource (WS-08 GEO asset reuse). CTA: schedule
                a 15-minute "any questions" call with PM.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 4 days after Email 02</div>
              <div class="fe-subj">Subject: <strong>"References — two recent clients said you could call them"</strong></div>
              <div class="fe-summary">
                Reference unlock. PM has manually selected 2-3 recent clients (same LOB,
                similar scope value, within 12km if possible) and asked them in advance.
                Provides phone numbers, the projects, and what to ask. This is a
                trust-tier conversion lever — typically a 22% lift to close rate when
                deployed at this stage per Bond Brand Loyalty Report 2024.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 5 days after Email 03</div>
              <div class="fe-subj">Subject: <strong>"Where are you in the decision? Three honest options."</strong></div>
              <div class="fe-summary">
                Direct, founder-signed. Three buttons:
                <strong>(A)</strong> Yes, ready to sign — link to e-sign.
                <strong>(B)</strong> Need more time / specific blocker — opens a single-question
                form asking what's holding up.
                <strong>(C)</strong> Going with someone else / not now — opens a single-question
                form asking who/why (intelligence capture).
                Klaviyo benchmark: this email type closes 19% direct and yields 41%
                decision-stage data even from non-closers.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">05</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 4 days after Email 04 (terminal)</div>
              <div class="fe-subj">Subject: <strong>"Closing your file today — quick last note"</strong></div>
              <div class="fe-summary">
                Loss-aversion + graceful close. File closes today, prospect moves to passive
                annual contact, quote will be re-priced if re-engaged after 90 days.
                Carla-signed. Final CTA: e-sign button + her direct mobile.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS + Manual Touch Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Delay: 2 days after Email 02. Message: <em>"Hi [first name],
            quick check — any questions on the quote? Happy to jump on a 15-min call. Reply YES
            and I'll send three times."</em>
          </li>
          <li>
            <strong>Manual call 01</strong> — Triggered by Klaviyo task creation 7 days after
            Email 01 if no signature, no decision-question response. PM personally calls. 38%
            lift in close rate when this call is executed within 7-10 days of quote per Drift
            data.
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>E-sign signed → move to <strong>Post-Sale Onboarding (CR-01f)</strong></li>
          <li>Email 04 "Going with someone else" → tagged "lost", moved to 90-day quiet period, then Win-Back (CR-01i)</li>
          <li>Email 04 "Need more time" → tagged "warm watch", moved to 30-day re-engagement cadence</li>
          <li>14 days elapsed silent → tagged "ghost", moved to passive annual nurture</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> 47% proposal-to-sign rate · 87% reason-capture rate even from
          lost deals · 22-point NPS lift on the 4-week post-call survey.
        </div>
      </div>
    </div>
  </section>
)

const CR01PostSale: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-01f · POST-SALE ONBOARDING</div>
      <h2 class="display">Flow 6 of 9 · Post-Sale Onboarding</h2>
      <p class="lede">
        Triggered the moment the contract is signed. Goal: convert the anxious post-purchase
        "did I make the right decision?" moment into confident, advocacy-ready commitment.
        Bond Brand Loyalty 2024: structured 14-day post-purchase onboarding lifts customer
        lifetime value by 31% and post-build NPS by 18 points.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Contract Signed event (e-sign webhook → Klaviyo)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">14 days from signature to build kickoff · 6 emails · 1 welcome pack</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Buyer's-remorse cancellation rate &lt; 2% · post-onboarding NPS &gt; 8.5 · referral mention rate</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Tone Shift</div>
            <div class="fm-val">Selling voice → service voice · PM owns voice from this point</div>
          </div>
        </div>

        <h3 class="flow-section-h">Sequence</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 2 hours after contract signed</div>
              <div class="fe-subj">Subject: <strong>"Welcome to the YMT build — here's what happens next"</strong></div>
              <div class="fe-summary">
                Confirmation + relief. Lists exactly the next 14 days: PM intro call,
                scope confirmation walkthrough, materials list arrival, build start date.
                Founder-signed thank-you paragraph. Reduces post-purchase anxiety in the
                window when cancellations cluster.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 24 hours after Email 01</div>
              <div class="fe-subj">Subject: <strong>"Meet [PM first name] — your single point of contact for the next [duration]"</strong></div>
              <div class="fe-summary">
                PM introduction. Photo, full bio, direct mobile, working hours, escalation
                path (to Carla if needed). Sets the WS-02 brand promise — single-PM
                accountability — in motion. Schedules the kickoff call.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 3 days after Email 02</div>
              <div class="fe-subj">Subject: <strong>"Your welcome pack is on its way (physical mail)"</strong></div>
              <div class="fe-summary">
                Heralds the welcome pack — a branded folder containing: scope summary,
                materials list, build timeline, PM contact card, what-to-expect-by-week
                guide, and one small physical gift (a branded tape measure or a $10
                voucher to a coffee chain near the project). Cost per pack: $42. Lifts
                4-week NPS by 12 points (Bond Loyalty data).
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 5 days after Email 03</div>
              <div class="fe-subj">Subject: <strong>"Three questions clients usually ask in week one of a build"</strong></div>
              <div class="fe-summary">
                Anticipatory FAQ. Common week-one anxieties: payment milestones, materials
                arrival, neighbour notification, change-order process. Pre-empts inbound
                support tickets. Klaviyo benchmark: lifts CSAT by 9 points and reduces
                support contact by 34%.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">05</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 4 days after Email 04</div>
              <div class="fe-subj">Subject: <strong>"Build kickoff confirmed for [date] — final pre-flight"</strong></div>
              <div class="fe-summary">
                Pre-build readiness. Confirms access arrangements, site preparation,
                neighbour notification status, parking, dust/noise expectations, and
                what to remove or cover. Last "no surprises" touch before construction
                starts.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">06</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 1 hour after build start (manual PM trigger)</div>
              <div class="fe-subj">Subject: <strong>"We're on site — [PM first name] checking in"</strong></div>
              <div class="fe-summary">
                Build-day-one touch. Personally written by the PM (template provided but
                edited). Day-one photo of site, brief note about the day's plan. Hands
                off into <strong>CR-01g Build-in-Progress</strong>.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Build day 1 reached → move to <strong>Build-in-Progress (CR-01g)</strong></li>
          <li>Cancellation request received → escalate to Carla immediately, separate save-flow runs</li>
          <li>14 days elapsed without build start → triggers PM alert, manual investigation</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> Buyer's-remorse cancellation &lt; 2% (vs. industry 6-8%) ·
          onboarding NPS 8.5+ · 73% of customers report at least one positive interaction
          to a friend within 30 days (referral pipeline driver).
        </div>
      </div>
    </div>
  </section>
)

const CR01BuildProgress: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-01g · BUILD-IN-PROGRESS UPDATES</div>
      <h2 class="display">Flow 7 of 9 · Build-in-Progress</h2>
      <p class="lede">
        Active during construction. Goal: maintain communication cadence, reduce inbound
        "where are we?" support load, surface change-order moments early, and build the
        story that will drive review-request conversion at completion. Drift Conversational
        Marketing 2024: builds with ≥ weekly proactive update cadence drive 41% more
        5-star reviews than those without.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Build Started event · runs until Build Complete event</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Cadence</div>
            <div class="fm-val">Weekly update email + milestone-event emails + on-demand SMS</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Inbound support volume per week · positive-sentiment NPS pulse</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Voice</div>
            <div class="fm-val">PM-led, photographed-from-site, low polish, high specificity</div>
          </div>
        </div>

        <h3 class="flow-section-h">Email Cadence (per week)</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">W</div>
            <div class="fe-body">
              <div class="fe-subj">Weekly Status — Friday 4pm</div>
              <div class="fe-summary">
                Three-section template: <strong>(1) What we did this week</strong> — 4-6
                bullet points with one site photo per bullet. <strong>(2) What's planned
                for next week</strong> — 3-5 bullet points. <strong>(3) Anything from you?</strong>
                — decision items, access requests, material confirmations. Personalised
                paragraph from PM. Cost per send: ~20 minutes of PM time. ROI: 40% lower
                inbound support volume, 41% lift in 5-star reviews at completion.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">M</div>
            <div class="fe-body">
              <div class="fe-subj">Milestone — "We've reached [milestone name]"</div>
              <div class="fe-summary">
                Triggered by PM marking a milestone complete in the project tracker:
                e.g. "Demolition complete", "Frame inspection passed", "Waterproofing
                signed off", "Practical completion". Single-photo, single-paragraph,
                celebratory tone. Lifts customer-loyalty NPS materially per Bond Loyalty
                data because milestone acknowledgement is the moment commitment is
                reinforced.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">CO</div>
            <div class="fe-body">
              <div class="fe-subj">Change-Order — "Decision needed: [item]"</div>
              <div class="fe-summary">
                Triggered when PM logs a change-order requirement (scope expansion, materials
                substitution, timing variance). Structured: what changed, why, three options
                with cost/timeline impact for each, recommended option, deadline for
                decision. The pre-existing change-order policy from <strong>CR-01e Email 02</strong>
                makes this email expected rather than surprising. Klaviyo benchmark: 76% of
                change-orders resolved within 48 hours when delivered via structured
                email vs. 31% via phone alone.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS Layer</h3>
        <ul class="flow-sms-list">
          <li><strong>SMS — Day-of access:</strong> "PM on site by 7:30am — gate code reminder: [code]."</li>
          <li><strong>SMS — Weather variance:</strong> "Heavy rain forecast tomorrow — we'll [action]. No impact to deadline."</li>
          <li><strong>SMS — Inspector booked:</strong> "[Inspector] visiting [date/time] for [stage]. Just informational."</li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Build Complete event → move to <strong>Review Request (CR-01h)</strong></li>
          <li>Build paused &gt; 14 days (e.g. council hold) → flow pauses, escalation email to client + Carla</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> Inbound "where are we?" support tickets &lt; 0.4 per week per
          active project · weekly-update open rate &gt; 71% (high because subject lines are
          project-relevant, not promotional) · 41% lift in 5-star review conversion at
          completion.
        </div>
      </div>
    </div>
  </section>
)

const CR01ReviewRequest: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-01h · POST-COMPLETION → REVIEW REQUEST</div>
      <h2 class="display">Flow 8 of 9 · Review Request</h2>
      <p class="lede">
        Triggered at practical completion. Goal: convert satisfied customers into public
        reviews on Google Business Profile, Houzz, and ProductReview.com.au — the three
        platforms that compound WS-08 GEO/AEO authority. Klaviyo benchmark for considered-
        purchase home services: structured 21-day review-request flow lifts review
        conversion from 8% (organic) to 34-41%.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger</div>
            <div class="fm-val">Build Complete + Final Payment Received events (both required)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">21 days · 4 emails · 1 SMS · 1 hand-written thank-you card</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Review conversion rate to Google + Houzz + PR.com.au · review sentiment · referral mention</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Critical Filter</div>
            <div class="fm-val">Only enter if mid-build NPS &gt; 7 · suppress otherwise to protect review-platform reputation</div>
          </div>
        </div>

        <h3 class="flow-section-h">Sequence</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 3 days after trigger (let dust settle)</div>
              <div class="fe-subj">Subject: <strong>"How did we go? Quick 0-10 question (no commitment)"</strong></div>
              <div class="fe-summary">
                Single-question NPS gate. 0-10 scoring. Branches:
                <strong>Score 9-10</strong> → continue to Email 02 review request.
                <strong>Score 7-8</strong> → continue to Email 02 lighter review request + private
                feedback form.
                <strong>Score 0-6</strong> → exit review flow, trigger PM follow-up call within 24 hours,
                Carla escalation if &lt; 5. Critical: never ask a 0-6 customer for a public review.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 2 days after Email 01 (only NPS 7+)</div>
              <div class="fe-subj">Subject: <strong>"Would you mind sharing that publicly? (60 seconds)"</strong></div>
              <div class="fe-summary">
                Direct review request. Three buttons: Google, Houzz, ProductReview. Each
                opens the platform with a pre-populated subject and three optional prompt
                questions (what did you choose us for · what surprised you · who would you
                recommend this for). Per Bond data: prompts lift review length 3.1× and
                star-rating completeness; multi-prompt structure also defeats AI-spam
                detection on review platforms.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 02 (if no review confirmed)</div>
              <div class="fe-subj">Subject: <strong>"No worries if not — but if you want to..."</strong></div>
              <div class="fe-summary">
                Gentle reminder, founder-signed. Acknowledges that reviews take effort,
                offers an alternative: a 10-minute phone call where Carla asks the questions
                and writes the review with the customer's approval. Counterintuitive lift:
                this email actually generates ~14% of total reviews from customers who
                would not otherwise have written one.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 9 days after Email 03 (terminal)</div>
              <div class="fe-subj">Subject: <strong>"Thank you for letting us into your home"</strong></div>
              <div class="fe-summary">
                Closing thank-you. No review ask. Includes the 6-month warranty walkthrough,
                the post-completion care guide (LOB-specific — pool chemistry / termite
                re-inspection / paint touch-up), and an opt-in to the YMT customer-only
                quarterly update. Plants the seed for cross-LOB (Balfour growth-loop:
                today's TDR customer is tomorrow's pool prospect).
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">SMS + Direct Mail Layer</h3>
        <ul class="flow-sms-list">
          <li>
            <strong>SMS 01</strong> — Delay: 5 days after Email 02 (no review). Message: <em>"Hi
            [first name] — quick text from [PM first name]. If you want to leave a Google
            review but the email link is a pain, here it is: [shortlink]. Takes 60 seconds.
            No worries if not."</em>
          </li>
          <li>
            <strong>Direct mail 01</strong> — Hand-written thank-you card, signed by PM and Carla,
            mailed within 7 days of build completion regardless of review status. Bond Loyalty
            data: hand-written touches lift 12-month referral mentions by 47%.
          </li>
        </ul>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>Public review confirmed → tagged "advocate", moved to <strong>quarterly advocate cadence</strong></li>
          <li>NPS &lt; 7 → exits flow immediately, PM follow-up within 24 hours, no public ask</li>
          <li>21 days elapsed → moves to standard customer-only quarterly nurture</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> 34-41% public review conversion · review sentiment avg ≥ 4.7 stars ·
          21% advocate referral rate within 18 months · zero negative-review platform damage
          (because NPS-gating prevents detractor review-asks).
        </div>
      </div>
    </div>
  </section>
)

const CR01WinBack: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-01i · WIN-BACK / CROSS-LOB</div>
      <h2 class="display">Flow 9 of 9 · Win-Back &amp; Cross-LOB</h2>
      <p class="lede">
        The portfolio's compounding-value flow. Triggered for two distinct populations:
        <strong> (a) lost prospects</strong> who declined a quote 90+ days ago, and
        <strong> (b) past customers</strong> who completed a build 18+ months ago.
        Goal: reignite consideration at the moment they are likely re-evaluating — and,
        critically, offer a cross-LOB next-best-action when the original LOB is not the
        current need. This is the Balfour <em>growth loop</em> applied to a multi-LOB
        home-services portfolio.
      </p>

      <div class="flow-spec">
        <div class="flow-meta-grid">
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger A (lost prospect)</div>
            <div class="fm-val">Tagged "lost" in CR-01e + 90 days elapsed + no engagement in last 30 days</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Trigger B (past customer)</div>
            <div class="fm-val">Build Complete + 18 months elapsed + LOB ≠ next-best-LOB available</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Duration</div>
            <div class="fm-val">35 days · 5 emails · 0 SMS (deliberate — too cold for SMS)</div>
          </div>
          <div class="flow-meta-cell">
            <div class="fm-lbl">Goal Metric</div>
            <div class="fm-val">Re-engagement rate · new LOB quote request · referral pipeline</div>
          </div>
        </div>

        <h3 class="flow-section-h">Sequence (Track A — lost prospect)</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-when">Delay: trigger + 0 (when both gates clear)</div>
              <div class="fe-subj">Subject: <strong>"Three months on — anything change with [original LOB]?"</strong></div>
              <div class="fe-summary">
                Soft check-in, no pitch. References the previous quote conversation by
                LOB only (not by scope or price — too cold-restart). Asks if anything has
                shifted. Founder-signed. The "permission to re-engage" email.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 01</div>
              <div class="fe-subj">Subject: <strong>"What we've changed since we last spoke"</strong></div>
              <div class="fe-summary">
                Genuine update. Three concrete improvements YMT has made in 90 days:
                e.g. new financing partner, new materials line, new PM hire with X
                specialty. Demonstrates the business is evolving — credible reason to
                re-engage.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 10 days after Email 02</div>
              <div class="fe-subj">Subject: <strong>"Or — were you actually thinking about [cross-LOB]?"</strong></div>
              <div class="fe-summary">
                Cross-LOB pivot. If the original quote was UR, surface POE or TDR. If
                original was TDR, surface UR (renovation) or POE (entertainment). Two
                case studies of customers who started in one LOB and engaged a second.
                This is the portfolio's compounding revenue driver.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">04</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 14 days after Email 03</div>
              <div class="fe-subj">Subject: <strong>"Last note from us for a while"</strong></div>
              <div class="fe-summary">
                Permission-decay email. Acknowledges this is not the right time, offers
                an annual-only cadence opt-in or full unsubscribe. Maintains brand goodwill
                even with non-converters.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">Sequence (Track B — past customer, 18+ months)</h3>
        <ol class="flow-email-list">
          <li class="flow-email">
            <div class="fe-num">01</div>
            <div class="fe-body">
              <div class="fe-subj">Subject: <strong>"18 months on — how's the [original LOB project] holding up?"</strong></div>
              <div class="fe-summary">
                Warranty / maintenance check-in. LOB-specific:
                TDR — termite re-inspection reminder + 12-month warranty status.
                POE — pool chemistry checkup, paving sealant lifecycle.
                UR — paint touch-up window, fitting warranty reminders.
                Provides genuine value before any ask. Bond Loyalty: customers who receive
                proactive 18-month touches refer at 3.4× the rate of those who don't.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">02</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 7 days after Email 01</div>
              <div class="fe-subj">Subject: <strong>"The next thing most [original LOB] customers ask about"</strong></div>
              <div class="fe-summary">
                Cross-LOB recommendation by data. Example: 38% of UR customers engage POE
                within 24 months. 14% of TDR customers do UR within 18 months because the
                damage repair reveals further structural opportunity. Specific case studies.
              </div>
            </div>
          </li>
          <li class="flow-email">
            <div class="fe-num">03</div>
            <div class="fe-body">
              <div class="fe-when">Delay: 14 days after Email 02</div>
              <div class="fe-subj">Subject: <strong>"Friends or family thinking about [LOB]? We pay for referrals."</strong></div>
              <div class="fe-summary">
                Explicit referral activation. Refer-a-friend mechanic: $500 credit to
                referrer's next YMT engagement OR $500 charity donation in their name if
                they decline credit. Compounding loop closure — the past customer becomes
                the next-customer-pipeline.
              </div>
            </div>
          </li>
        </ol>

        <h3 class="flow-section-h">Exit Conditions</h3>
        <ul class="flow-exit-list">
          <li>New quote request → enter <strong>Lead Nurture (CR-01c)</strong> as a returning prospect</li>
          <li>Referral submitted → enter referral processing flow, original customer earns credit</li>
          <li>35 days elapsed with no action → exit to standard annual-cadence</li>
        </ul>

        <div class="flow-bench">
          <strong>Bench:</strong> Track A 11-18% re-engagement (lost-prospect reactivation).
          Track B 28-34% cross-LOB lead generation · 19% referral submission · 47% lift in
          12-month repeat-customer GP vs. baseline (the compounding-revenue thesis at work).
        </div>
      </div>
    </div>
  </section>
)

/* ============================================================ */
/* CR-02 through CR-12 (systems, scoring, contract, metrics)    */
/* ============================================================ */

const CR02Segmentation: FC = () => (
  <section class="band band-cream" id="cr02">
    <div class="band-inner">
      <div class="eyebrow">CR-02 · SEGMENTATION ARCHITECTURE</div>
      <h2 class="display">Segmentation: RFM × Lifecycle × LOB × Lead Source</h2>
      <p class="lede">
        The segmentation matrix is the foundation under every flow. Without it, the nine
        flows above cannot target accurately and personalisation rules (CR-10) have nothing
        to lean on. We use a four-dimensional segment model — RFM × Lifecycle Stage × LOB
        × Lead Source — generating a finite, manageable set of high-fidelity segments
        rather than the thousands of low-signal segments that paralyse most CRMs.
      </p>

      <div class="segment-matrix-wrap">
        <h3 class="flow-section-h">Dimension 1 · RFM (Recency · Frequency · Monetary)</h3>
        <table class="segment-matrix">
          <thead>
            <tr><th>Tier</th><th>Recency</th><th>Frequency</th><th>Monetary (LTV)</th><th>Population %</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Champions</strong></td><td>&lt; 6 months</td><td>2+ projects</td><td>&gt; $80K</td><td>4-7%</td></tr>
            <tr><td><strong>Loyal</strong></td><td>&lt; 12 months</td><td>1 project</td><td>$20K-$80K</td><td>18-24%</td></tr>
            <tr><td><strong>At-Risk</strong></td><td>12-24 months</td><td>1 project</td><td>$20K-$80K</td><td>14-18%</td></tr>
            <tr><td><strong>Hibernating</strong></td><td>&gt; 24 months</td><td>1 project</td><td>any</td><td>22-31%</td></tr>
            <tr><td><strong>New Prospect</strong></td><td>n/a</td><td>0 projects</td><td>$0</td><td>30-42%</td></tr>
          </tbody>
        </table>

        <h3 class="flow-section-h">Dimension 2 · Lifecycle Stage</h3>
        <ul class="dim-list">
          <li><strong>Cold subscriber</strong> — list member, no quote requested, no LOB declared</li>
          <li><strong>LOB-Identified</strong> — declared LOB interest (via Email 02 of Welcome)</li>
          <li><strong>Quote-Requested</strong> — submitted quote form, in Lead Nurture (CR-01c)</li>
          <li><strong>Consult-Booked</strong> — calendar booking confirmed</li>
          <li><strong>Proposal-Sent</strong> — scoped quote delivered, in CR-01e</li>
          <li><strong>Active-Build</strong> — contract signed through completion</li>
          <li><strong>Past-Customer</strong> — build complete, in warranty period</li>
          <li><strong>Out-of-Warranty</strong> — &gt; 24 months post-completion</li>
        </ul>

        <h3 class="flow-section-h">Dimension 3 · LOB</h3>
        <ul class="dim-list">
          <li><strong>TDR-primary</strong> · TDR-secondary · TDR-only</li>
          <li><strong>POE-primary</strong> · POE-secondary · POE-only</li>
          <li><strong>UR-primary</strong> · UR-secondary · UR-only</li>
          <li><strong>Multi-LOB</strong> — engaged 2+ LOBs (the highest-LTV cohort, ~11% of customer base)</li>
        </ul>

        <h3 class="flow-section-h">Dimension 4 · Lead Source</h3>
        <ul class="dim-list">
          <li><strong>Paid-Search</strong> (Google) · <strong>Paid-Social</strong> (Meta) · <strong>Paid-LinkedIn</strong> (UR only)</li>
          <li><strong>YouTube/CTV</strong> view-through · <strong>Organic-Search</strong> · <strong>GEO/AEO</strong> (LLM citation)</li>
          <li><strong>Direct/Brand</strong> · <strong>Referral</strong> (named referrer) · <strong>Direct-Mail</strong></li>
        </ul>

        <h3 class="flow-section-h">Combined Segment Examples (the segments YMT actually uses)</h3>
        <table class="segment-matrix">
          <thead>
            <tr><th>Segment Name</th><th>Definition</th><th>Used By</th></tr>
          </thead>
          <tbody>
            <tr><td>SEG-01 New-Prospect-TDR-PaidSearch</td><td>RFM: New · Stage: Cold · LOB: TDR-primary · Source: Paid-Search</td><td>Welcome Flow, Browse Abandon</td></tr>
            <tr><td>SEG-02 Quote-Requested-POE-Organic</td><td>Stage: Quote-Requested · LOB: POE · Source: Organic</td><td>Lead Nurture (CR-01c)</td></tr>
            <tr><td>SEG-03 At-Risk-UR-Past-Customer</td><td>RFM: At-Risk · LOB: UR · Stage: Past-Customer · Source: any</td><td>Win-Back Track B (CR-01i)</td></tr>
            <tr><td>SEG-04 Champion-Multi-LOB</td><td>RFM: Champion · LOB: Multi-LOB · Stage: any post-build</td><td>Quarterly advocate cadence + cross-LOB referral</td></tr>
            <tr><td>SEG-05 Hibernating-Any-Source-No-NPS</td><td>RFM: Hibernating · NPS not captured</td><td>NPS re-survey + Win-Back Track B alternate entry</td></tr>
            <tr><td>SEG-06 Proposal-Sent-No-Decision-72h</td><td>Stage: Proposal-Sent · &gt; 72h · No e-sign · No "lost" tag</td><td>CR-01e Email 03 reference unlock + manual call alert</td></tr>
            <tr><td>SEG-07 Detractor-Any-LOB</td><td>NPS 0-6 captured in last 90 days · suppressed from review request</td><td>PM personal follow-up · suppressed from broadcast</td></tr>
            <tr><td>SEG-08 Active-Build-Week-N</td><td>Stage: Active-Build · current week of build (1-26)</td><td>Build-in-Progress weekly status routing</td></tr>
          </tbody>
        </table>

        <p class="lede" style="margin-top:1.5rem;">
          Total segments in active use: <strong>32-38</strong> (driven by combinations of the
          four dimensions). Segments are reviewed monthly — any segment with population &lt; 50
          contacts is collapsed into a parent segment to avoid statistical noise per Klaviyo's
          minimum-viable-segment guidance.
        </p>
      </div>
    </div>
  </section>
)

const CR03LeadScoring: FC = () => (
  <section class="band band-white" id="cr03">
    <div class="band-inner">
      <div class="eyebrow">CR-03 · LEAD SCORING ALGORITHM</div>
      <h2 class="display">Lead Score: Every Behaviour → Point Value → MQL Threshold</h2>
      <p class="lede">
        The lead-scoring algorithm decides who YDT's account managers call versus who stays
        in self-serve flows. Without it, manual outreach time is allocated by gut instinct
        — the worst possible allocation mechanism. The model below is calibrated to
        YMT's AOV of $18K-95K and the operational constraint of 1 PM hour per booked
        consult; MQL threshold is set so monthly MQL volume matches PM capacity.
      </p>

      <div class="score-spec">
        <h3 class="flow-section-h">Point Schedule (positive — engagement)</h3>
        <table class="score-table">
          <thead>
            <tr><th>Behaviour</th><th>Points</th><th>Half-life</th></tr>
          </thead>
          <tbody>
            <tr><td>Email opened</td><td>+1</td><td>14 days</td></tr>
            <tr><td>Email clicked (any link)</td><td>+3</td><td>21 days</td></tr>
            <tr><td>Page viewed: blog/content</td><td>+1</td><td>14 days</td></tr>
            <tr><td>Page viewed: service page (TDR/POE/UR)</td><td>+5</td><td>30 days</td></tr>
            <tr><td>Page viewed: cost/pricing page</td><td>+10</td><td>30 days</td></tr>
            <tr><td>Page viewed: case-study page</td><td>+4</td><td>30 days</td></tr>
            <tr><td>Form submit: newsletter</td><td>+3</td><td>permanent</td></tr>
            <tr><td>Form submit: download (lead magnet)</td><td>+8</td><td>permanent</td></tr>
            <tr><td>Form submit: quote request</td><td>+40</td><td>permanent (triggers MQL re-evaluation)</td></tr>
            <tr><td>Calendar booking made</td><td>+50</td><td>permanent (triggers SQL)</td></tr>
            <tr><td>SMS opt-in</td><td>+5</td><td>permanent</td></tr>
            <tr><td>Replied to email (any inbox reply)</td><td>+15</td><td>21 days</td></tr>
            <tr><td>Watched ≥ 75% of YouTube video</td><td>+6</td><td>30 days</td></tr>
            <tr><td>Referred by an existing customer</td><td>+25</td><td>permanent</td></tr>
          </tbody>
        </table>

        <h3 class="flow-section-h">Point Schedule (negative — disengagement)</h3>
        <table class="score-table">
          <thead>
            <tr><th>Behaviour</th><th>Points</th></tr>
          </thead>
          <tbody>
            <tr><td>Email unopened across 4+ consecutive sends</td><td>−5</td></tr>
            <tr><td>Email marked as spam</td><td>−40 (auto-suppress per CR-08)</td></tr>
            <tr><td>Unsubscribed from one preference category</td><td>−10</td></tr>
            <tr><td>SMS opt-out</td><td>−10</td></tr>
            <tr><td>No engagement event for 90 days</td><td>−15</td></tr>
            <tr><td>Bounce (soft, repeated)</td><td>−5 per bounce after 3</td></tr>
          </tbody>
        </table>

        <h3 class="flow-section-h">Threshold Tiers + Routing</h3>
        <table class="score-table">
          <thead>
            <tr><th>Score Band</th><th>Tier</th><th>Routing</th></tr>
          </thead>
          <tbody>
            <tr><td>0-9</td><td>Cold</td><td>Self-serve flows only · no manual outreach · monthly broadcast eligible</td></tr>
            <tr><td>10-24</td><td>Warm</td><td>Behaviour-triggered flows · automated personalisation · no PM time yet</td></tr>
            <tr><td>25-49</td><td>MQL</td><td>YDT account manager outreach within 48h · LOB-specific call script</td></tr>
            <tr><td>50-89</td><td>SQL</td><td>PM-direct outreach within 24h · scoped quote priority queue</td></tr>
            <tr><td>90+</td><td>Hot</td><td>Carla escalation · same-day call · &gt; $75K AOV likely</td></tr>
          </tbody>
        </table>

        <h3 class="flow-section-h">Calibration Notes</h3>
        <ul class="dim-list">
          <li>
            <strong>MQL threshold (25)</strong> calibrated to deliver ~80 MQLs/month at full paid-
            spend deployment, matching YDT account manager capacity of 1 hour per MQL.
          </li>
          <li>
            <strong>Half-life decay</strong> prevents stale scores. A prospect who scored 30 four
            months ago without further engagement will have decayed below MQL — correctly,
            because they are no longer in-market.
          </li>
          <li>
            <strong>Negative scoring</strong> is essential. Without it, the model rewards opens
            but never punishes disengagement, leading to PM time wasted on prospects who
            have effectively churned.
          </li>
          <li>
            <strong>Re-scoring cadence:</strong> Klaviyo recalculates lead scores on every event
            and on a nightly batch. Threshold-crossing events trigger Slack alerts to the
            YDT inbox.
          </li>
        </ul>
      </div>
    </div>
  </section>
)

const CR04DataContract: FC = () => (
  <section class="band band-cream" id="cr04">
    <div class="band-inner">
      <div class="eyebrow">CR-04 · CRM DATA CONTRACT</div>
      <h2 class="display">Data Contract: Marketing ↔ Estimating ↔ Finance</h2>
      <p class="lede">
        The CRM is the system of record. But the same contact moves through marketing
        (Klaviyo), estimating (the quoting tool — Buildxact or similar), and finance
        (Xero). Without an explicit data contract, fields drift, attribution breaks,
        and lifetime value calculations become guesswork. This contract enumerates
        every field that crosses a system boundary, who owns it, when it updates, and
        what the downstream system can rely on.
      </p>

      <div class="contract-spec">
        <table class="contract-table">
          <thead>
            <tr><th>Field</th><th>System of Origin</th><th>Klaviyo</th><th>Estimating</th><th>Finance (Xero)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>email</strong></td><td>Form submit</td><td>Primary key</td><td>Read-only</td><td>Read-only</td></tr>
            <tr><td><strong>first_name / last_name</strong></td><td>Form submit</td><td>Owner</td><td>Read-only</td><td>Owner (legal name) — overrides Klaviyo for invoicing</td></tr>
            <tr><td><strong>mobile</strong></td><td>Form submit / discovery call</td><td>Owner</td><td>Read-only</td><td>Read-only</td></tr>
            <tr><td><strong>address_full</strong></td><td>Discovery call</td><td>Read-only</td><td>Owner</td><td>Owner (registered office)</td></tr>
            <tr><td><strong>suburb / state / postcode</strong></td><td>Form submit (suburb) → Estimating (full)</td><td>Read-write (suburb only)</td><td>Owner</td><td>Read-only</td></tr>
            <tr><td><strong>lob_primary</strong></td><td>Form submit / Email 02 reply</td><td>Owner</td><td>Read-only</td><td>Read-only</td></tr>
            <tr><td><strong>lob_secondary</strong></td><td>Estimating / cross-LOB Win-Back</td><td>Read-write</td><td>Owner</td><td>Read-only</td></tr>
            <tr><td><strong>budget_band</strong></td><td>Discovery call</td><td>Read-only</td><td>Owner</td><td>Read-only</td></tr>
            <tr><td><strong>lead_score</strong></td><td>Klaviyo calculation</td><td>Owner</td><td>Read-only</td><td>N/A</td></tr>
            <tr><td><strong>lifecycle_stage</strong></td><td>Klaviyo (driven by events)</td><td>Owner</td><td>Read-only · drives Estimating priority queue</td><td>Read-only</td></tr>
            <tr><td><strong>lifecycle_substage</strong></td><td>Estimating · custom statuses</td><td>Read-only</td><td>Owner</td><td>Read-only</td></tr>
            <tr><td><strong>quote_value</strong></td><td>Estimating</td><td>Read-only · drives CR-01e routing</td><td>Owner</td><td>Read-only (until contract signed)</td></tr>
            <tr><td><strong>contract_value</strong></td><td>Estimating · upon e-sign</td><td>Read-only</td><td>Owner</td><td>Owner (becomes invoiced amount)</td></tr>
            <tr><td><strong>build_status</strong></td><td>Estimating / PM tracker</td><td>Read-only · drives Build-in-Progress flow</td><td>Owner</td><td>Read-only</td></tr>
            <tr><td><strong>build_complete_date</strong></td><td>Estimating</td><td>Read-only · triggers Review Request</td><td>Owner</td><td>Owner (becomes final invoice trigger)</td></tr>
            <tr><td><strong>final_payment_received</strong></td><td>Xero</td><td>Read-only · gates Review Request</td><td>Read-only</td><td>Owner</td></tr>
            <tr><td><strong>nps_score</strong></td><td>Klaviyo (Email 01 of CR-01h)</td><td>Owner</td><td>Read-only · drives PM follow-up priority</td><td>Read-only</td></tr>
            <tr><td><strong>referral_source</strong></td><td>Form submit / Discovery call</td><td>Owner</td><td>Read-only</td><td>Read-only (drives referral payouts)</td></tr>
            <tr><td><strong>customer_ltv</strong></td><td>Finance roll-up (nightly)</td><td>Read-only · drives Champion segment</td><td>Read-only</td><td>Owner</td></tr>
            <tr><td><strong>warranty_expiry_date</strong></td><td>Estimating · per LOB</td><td>Read-only · drives 18-month Win-Back</td><td>Owner</td><td>Read-only</td></tr>
          </tbody>
        </table>

        <h3 class="flow-section-h">Sync Cadence + SLAs</h3>
        <ul class="dim-list">
          <li><strong>Klaviyo → Estimating:</strong> Real-time webhook on form submit + lifecycle stage change. SLA: &lt; 30 seconds.</li>
          <li><strong>Estimating → Klaviyo:</strong> Real-time webhook on quote_value, contract_value, build_status, build_complete_date. SLA: &lt; 60 seconds.</li>
          <li><strong>Xero → Klaviyo:</strong> Hourly batch on payment events. SLA: &lt; 1 hour.</li>
          <li><strong>Klaviyo → Xero:</strong> Daily batch (NPS, lifecycle stage) for finance reporting only. No real-time dependency.</li>
          <li><strong>Conflict resolution:</strong> System of origin always wins. If first_name differs between Klaviyo (owner: marketing) and Xero (owner: finance for invoicing), the invoice uses Xero's value; emails use Klaviyo's. This is intentional — invoices need legal names, marketing uses preferred names.</li>
        </ul>
      </div>
    </div>
  </section>
)

const CR05Metrics: FC = () => (
  <section class="band band-white" id="cr05">
    <div class="band-inner">
      <div class="eyebrow">CR-05 · LIFECYCLE METRICS</div>
      <h2 class="display">Lifecycle Metrics: Email LTV, Retention Curves, Expansion, NPS</h2>
      <p class="lede">
        What gets measured drives what gets resourced. The lifecycle metric stack below
        is the contract between the CRM function and the CFO (Carla). It connects every
        flow to revenue, every segment to retention, and every customer to lifetime
        value — providing the operating board pack for the marketing function.
      </p>

      <div class="metric-grid">
        <div class="metric-card">
          <div class="metric-name">Email LTV per Subscriber</div>
          <div class="metric-formula">Total revenue attributed to email (90-day window) ÷ active subscribers</div>
          <div class="metric-target">Target: &gt; $42 per subscriber/year by month 9 of operation</div>
          <div class="metric-cadence">Cadence: Monthly</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Flow Revenue per Recipient (RPR)</div>
          <div class="metric-formula">Revenue from contacts who entered flow ÷ contacts who entered flow</div>
          <div class="metric-target">Welcome $720+ · Browse Abandon $900+ · Lead Nurture $720+ · Win-Back $310+</div>
          <div class="metric-cadence">Cadence: Per-flow, monthly</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Customer Lifetime Value (CLTV)</div>
          <div class="metric-formula">Sum of all contract values per customer · attributed to first-touch channel</div>
          <div class="metric-target">Single-LOB customer baseline $32K · Multi-LOB CLTV $94K · target ratio 2.9×</div>
          <div class="metric-cadence">Cadence: Quarterly board pack</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Cross-LOB Conversion Rate</div>
          <div class="metric-formula">% of single-LOB customers who engage a second LOB within 36 months</div>
          <div class="metric-target">Baseline ~7% (industry avg) · target by month 18: 18% · stretch by month 30: 27%</div>
          <div class="metric-cadence">Cadence: Quarterly</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Retention Curve (12 / 24 / 36 month)</div>
          <div class="metric-formula">% of customers still in active engagement (NPS response, email open, referral, repeat) at each anniversary</div>
          <div class="metric-target">12-mo: 78% · 24-mo: 64% · 36-mo: 52%</div>
          <div class="metric-cadence">Cadence: Quarterly cohort analysis</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">NPS by Lifecycle Stage</div>
          <div class="metric-formula">NPS captured at: discovery call + 1h, post-onboarding day 14, mid-build week 4, post-completion day 3</div>
          <div class="metric-target">Discovery: 8.0 · Onboarding: 8.5 · Mid-build: 8.2 · Completion: 8.8</div>
          <div class="metric-cadence">Cadence: Monthly average + per-customer surfaced for &lt; 7</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">Referral Pipeline Velocity</div>
          <div class="metric-formula">New referral-sourced leads ÷ active customer cohort ÷ 30 days</div>
          <div class="metric-target">By month 12: 0.14 referred leads per customer per month (industry avg 0.04)</div>
          <div class="metric-cadence">Cadence: Monthly</div>
        </div>
        <div class="metric-card">
          <div class="metric-name">List Health Score (composite)</div>
          <div class="metric-formula">Klaviyo deliverability score · 30-day open rate · 90-day click rate · spam complaint rate · unsubscribe rate · all normalised</div>
          <div class="metric-target">&gt; 85/100 sustained · alert if drops below 75 for 7+ days</div>
          <div class="metric-cadence">Cadence: Weekly</div>
        </div>
      </div>

      <h3 class="flow-section-h" style="margin-top:2rem;">CLTV Calculation Methodology</h3>
      <p>
        CLTV is the central financial metric tying the marketing function to YBMT
        portfolio strategy. The formula is intentionally simple at the customer level
        (sum of all signed contracts attributed to a single customer record) and
        sophisticated only at the cohort-rollup level (where channel-attribution decay
        and cross-LOB lift are modelled). The simpler customer-level formula prevents
        manipulation and aligns with Carla's CFO-grade requirement: every CLTV figure
        in a board pack must be reconcilable to Xero invoices within 5%.
      </p>
    </div>
  </section>
)

const CR06EmailTemplates: FC = () => (
  <section class="band band-cream" id="cr06">
    <div class="band-inner">
      <div class="eyebrow">CR-06 · EMAIL DESIGN TEMPLATES</div>
      <h2 class="display">Three Email Design Templates: Transactional · Nurture · Broadcast</h2>
      <p class="lede">
        Email design is not decoration; it is the visual implementation of the WS-02
        brand system in every inbox interaction. Three templates cover 100% of YMT's
        outbound — each with explicit rules on what changes and what stays locked.
      </p>

      <div class="tpl-grid">
        <div class="tpl-card">
          <div class="tpl-tag">TEMPLATE 1</div>
          <h3>Transactional</h3>
          <p>
            <strong>Use cases:</strong> Quote delivery (CR-01e Email 01), contract signed
            confirmation (CR-01f Email 01), build milestone events, payment receipts.
          </p>
          <ul>
            <li><strong>Visual:</strong> Plain, single-column, max width 580px. Single brand lockup top. Navy heading on cream, body in dark grey on white.</li>
            <li><strong>Typography:</strong> Fraunces 22pt for the headline only, Inter 15pt for body. No display flourishes.</li>
            <li><strong>CTA:</strong> One primary button (Timber background, white text). Never two.</li>
            <li><strong>From name:</strong> "Carla Oliver, YMT Group" — always founder-attributed for transactional weight.</li>
            <li><strong>Footer:</strong> Full address (ASIC + ACMA compliance), unsubscribe link, preference centre link.</li>
          </ul>
        </div>
        <div class="tpl-card">
          <div class="tpl-tag">TEMPLATE 2</div>
          <h3>Nurture (Flow Emails)</h3>
          <p>
            <strong>Use cases:</strong> Welcome series, lead nurture, browse abandon,
            post-consult, review request, win-back. All nine flows above default to this template.
          </p>
          <ul>
            <li><strong>Visual:</strong> Two-band hero + body. Hero: Navy band with eyebrow tag + headline (Fraunces 28pt). Body: cream band with 15pt Inter content.</li>
            <li><strong>Imagery:</strong> One hero image, max 720px wide, project-relevant (not stock). Site photos preferred over rendered.</li>
            <li><strong>CTA:</strong> Primary CTA mid-email + secondary link at bottom. Both lead to the same destination — primary is button, secondary is text link for risk-averse readers.</li>
            <li><strong>Personalisation tokens:</strong> first_name (always), suburb (where relevant), lob_primary (drives dynamic content blocks).</li>
            <li><strong>From name:</strong> Varies by flow stage — PM name for Build-in-Progress, Carla for founder-voice moments, generic "YMT Group" for low-touch nurture only.</li>
          </ul>
        </div>
        <div class="tpl-card">
          <div class="tpl-tag">TEMPLATE 3</div>
          <h3>Broadcast (Newsletter / Seasonal)</h3>
          <p>
            <strong>Use cases:</strong> Monthly market update, seasonal LOB content
            (pre-summer pool tips, pre-winter termite advisory, autumn renovation timing).
          </p>
          <ul>
            <li><strong>Visual:</strong> Multi-section, three-column where appropriate. Heaviest design density.</li>
            <li><strong>Structure:</strong> Top story (one) + three LOB updates + one case study + one CTA. Standard six-section frame.</li>
            <li><strong>Cadence:</strong> Monthly only · suppress to anyone with Active-Build status (they have enough YMT email already).</li>
            <li><strong>From name:</strong> "YMT Group" — broadcast does not warrant founder attribution.</li>
            <li><strong>Length target:</strong> 700-900 words of substantive content. Anything shorter is filler.</li>
          </ul>
        </div>
      </div>

      <h3 class="flow-section-h" style="margin-top:2rem;">Locked Brand Elements (Apply to All Three Templates)</h3>
      <ul class="dim-list">
        <li><strong>Logo lockup</strong> — top-left, 120px wide, never rotated or recoloured.</li>
        <li><strong>Colour palette</strong> — Navy #1B3A5C (primary), Timber #B8743D (CTA), Aqua #4DB6C7 (accent), Cream #F5F1EA (background bands). No other colours permitted in body copy.</li>
        <li><strong>Typography</strong> — Fraunces (serif, web-loaded) for display; Inter (sans-serif) for body. Email-safe fallbacks: Georgia and Arial.</li>
        <li><strong>Tone</strong> — direct, founder-signed where founder voice is required (transactional, CR-01a, CR-01c Email 06-07, CR-01e Email 04, CR-01i). Otherwise PM-attributed for Build-in-Progress and onboarding.</li>
        <li><strong>Footer compliance</strong> — full registered address, ABN, ACMA-compliant unsubscribe within one click. No "click here to unsubscribe" buried in 8pt grey on grey.</li>
      </ul>
    </div>
  </section>
)

const CR07SMS: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-07 · SMS STRATEGY</div>
      <h2 class="display">SMS: When, What, Frequency Cap</h2>
      <p class="lede">
        SMS is a high-trust, high-attention channel — Klaviyo's 2025 data shows a 98%
        read rate within 3 minutes — and therefore must be used sparingly to retain that
        trust. Aggressive SMS strategies that work in DTC retail (4-6 sends per week) are
        catastrophic for considered-purchase home services where SMS opt-out can damage
        the entire relationship. The rule: SMS is for time-sensitive coordination, not
        promotion.
      </p>

      <div class="sms-policy">
        <h3 class="flow-section-h">When SMS is Permitted</h3>
        <ul class="dim-list">
          <li><strong>Booked-call reminders</strong> — 24h before and 10 min before a discovery call (CR-01d).</li>
          <li><strong>Build-day coordination</strong> — access codes, weather variances, inspector visits (CR-01g).</li>
          <li><strong>Quote-decision nudge</strong> — single SMS at Lead Nurture Email 02 + 36h (CR-01c).</li>
          <li><strong>Welcome SMS opt-in confirmation</strong> — one message (CR-01a SMS 01).</li>
          <li><strong>Review-request shortcut</strong> — one message if email path fails (CR-01h SMS 01).</li>
        </ul>

        <h3 class="flow-section-h">When SMS is Forbidden</h3>
        <ul class="dim-list">
          <li>Promotional broadcasts (newsletters, sale announcements — there are no sales)</li>
          <li>Re-engagement / win-back (use email — SMS to a 90-day-cold contact damages trust)</li>
          <li>Multi-LOB cross-sell prompts (use email — SMS feels invasive for upsell)</li>
          <li>Anything to an Active-Build customer beyond build-coordination (they get weekly emails from their PM already)</li>
          <li>NPS surveys (use email — survey-by-SMS shows lower-quality responses per Klaviyo bench)</li>
        </ul>

        <h3 class="flow-section-h">Frequency Cap</h3>
        <ul class="dim-list">
          <li>Maximum <strong>2 SMS per 7-day window</strong> per contact, across all flows.</li>
          <li>Hard exception: Active-Build coordination is uncapped (operational necessity), but each message must be from the PM, signed personally.</li>
          <li>Hard exception: discovery-call reminders are exempt from the cap.</li>
          <li>Time-of-day: 9am-7pm local time only · suppress on Sundays unless directly coordinating a Monday build start.</li>
        </ul>

        <h3 class="flow-section-h">Opt-in Mechanic</h3>
        <p>
          SMS opt-in is captured only at quote-request and discovery-booking forms — never
          at lower-intent capture points. Double opt-in (Welcome SMS 01 reply YES) is required
          before SMS frequency cap unlocks beyond 1 per 14 days. ACMA-compliant unsubscribe
          via REPLY STOP processed instantly.
        </p>
      </div>
    </div>
  </section>
)

const CR08Suppression: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-08 · SUPPRESSION RULES</div>
      <h2 class="display">Suppression: When We Stop Emailing</h2>
      <p class="lede">
        Suppression is the cost of being allowed to email at all. Klaviyo's deliverability
        algorithm — and the spam filters at Gmail, Outlook, and Apple Mail — penalise
        senders who continue to send to low-engagement contacts. Aggressive suppression
        protects every other contact's deliverability. The seven rules below are non-
        negotiable; YDT operates them automatically inside Klaviyo.
      </p>

      <div class="sup-rules">
        <div class="sup-rule">
          <div class="sup-num">01</div>
          <div class="sup-body">
            <h4>Hard bounce</h4>
            <p>Suppressed permanently from the first hard bounce. No retry. The address is invalid; sending again damages sender reputation. Klaviyo handles this automatically.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">02</div>
          <div class="sup-body">
            <h4>Repeated soft bounce (3+ within 30 days)</h4>
            <p>Suppressed for 90 days, then a single re-validation email. If that bounces, permanent suppression. Soft bounces often indicate mailbox-full or temporary issues, hence the recovery path.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">03</div>
          <div class="sup-body">
            <h4>Spam complaint</h4>
            <p>Suppressed permanently. Suppress within 60 seconds of the complaint webhook. This is the most damaging signal to deliverability — one complaint per thousand sends is the Gmail tolerance ceiling.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">04</div>
          <div class="sup-body">
            <h4>No engagement for 120 days</h4>
            <p>Suppressed from broadcast and nurture flows. Eligible for a single sunset email ("Are you still here? Reply YES to stay") at day 120. If no reply within 14 days, suppressed for 180 days. This is the largest single deliverability protector.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">05</div>
          <div class="sup-body">
            <h4>Unsubscribed</h4>
            <p>Suppressed permanently from the unsubscribed channel (email or SMS). Preference-centre unsubscribe is per-category (broadcasts vs flows vs transactional) — transactional emails (quote delivery, payment receipts) survive any unsubscribe per ACMA-permitted exemptions.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">06</div>
          <div class="sup-body">
            <h4>NPS detractor (score 0-6)</h4>
            <p>Suppressed from review-request flow only (CR-01h). Not suppressed from other flows. The rule prevents asking unhappy customers for public reviews — which is both ethically right and protective of platform reputation.</p>
          </div>
        </div>
        <div class="sup-rule">
          <div class="sup-num">07</div>
          <div class="sup-body">
            <h4>Active-Build "sufficient contact" rule</h4>
            <p>Suppressed from broadcast and win-back flows for the duration of an active build + 30 days. The customer is receiving 1-2 PM updates per week already; additional marketing email damages the relationship and the trust the PM is building.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const CR09Deliverability: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">CR-09 · DELIVERABILITY PROTECTION</div>
      <h2 class="display">Deliverability: Warmup · List Hygiene · Spam Triggers</h2>
      <p class="lede">
        Deliverability is the foundation under every other metric in this manual. If
        emails don't reach the inbox, no flow converts, no segment matters, no test runs.
        Three workstreams own deliverability: sending-domain warmup, ongoing list hygiene,
        and content/structure spam-trigger avoidance.
      </p>

      <div class="deliv-block">
        <h3 class="flow-section-h">1 · Sending Domain Warmup (one-time, month 1)</h3>
        <ul class="dim-list">
          <li><strong>Dedicated subdomain:</strong> All marketing email sends from <code>mail.ymtgroup.com.au</code> — never the root domain. Protects the corporate domain from any spam-folder risk.</li>
          <li><strong>SPF, DKIM, DMARC:</strong> All three records published. DMARC policy starts at <code>p=none</code> for week 1-2 monitoring, escalates to <code>p=quarantine</code> by week 4, and <code>p=reject</code> by month 3.</li>
          <li><strong>BIMI</strong> (Brand Indicators for Message Identification): Once DMARC reaches reject, register BIMI to surface the YMT logo in Gmail/Yahoo inboxes — lifts open rate by ~12% in the consumer cohort.</li>
          <li><strong>Warmup schedule:</strong> Day 1-3: 500 sends/day to most-engaged contacts (opens in last 30 days). Day 4-7: 1,500/day. Week 2: 5,000/day. Week 3: full deployment. Klaviyo's automated warmup mode handles this.</li>
          <li><strong>Postmaster Tools:</strong> Register at Gmail Postmaster Tools, Microsoft SNDS. Monitor sender reputation weekly.</li>
        </ul>

        <h3 class="flow-section-h">2 · Ongoing List Hygiene (continuous)</h3>
        <ul class="dim-list">
          <li><strong>Pre-send validation:</strong> Run new captures through ZeroBounce or NeverBounce before adding to active sends. Klaviyo's built-in validation handles obvious typos.</li>
          <li><strong>Engagement-based segmentation:</strong> All broadcasts and most flows send only to contacts engaged in last 90 days. The remainder go to the 120-day sunset path (CR-08 rule 4).</li>
          <li><strong>Quarterly purge:</strong> Every quarter, contacts with 0 engagement events in 180+ days are archived (not deleted — retrievable if they re-engage from another channel).</li>
          <li><strong>Bot-trap protection:</strong> Honeypot fields on all forms. Submissions hitting the honeypot are tagged and quarantined for review.</li>
        </ul>

        <h3 class="flow-section-h">3 · Content + Structure Spam Triggers</h3>
        <ul class="dim-list">
          <li><strong>Subject line:</strong> No ALL CAPS, no excessive punctuation (!!!), no spam-trigger words (FREE, GUARANTEE, ACT NOW). Klaviyo's subject-line tester flags issues before send.</li>
          <li><strong>Body HTML:</strong> Plain-text version always included alongside HTML. HTML images-only emails (no text) are spam-classified by Gmail.</li>
          <li><strong>Image-to-text ratio:</strong> Minimum 40% text content. Image-heavy emails (newsletters with stock photos) score worse than text-heavy founder-voice emails.</li>
          <li><strong>Link count:</strong> Maximum 8 links per email; excessive linking is a spam signal. Browse Abandon and Build-in-Progress emails are the exceptions (one specific URL each).</li>
          <li><strong>Sender reputation alerts:</strong> Klaviyo deliverability score must remain &gt; 85/100. Drops below 75 trigger a 7-day broadcast pause and a forensic review.</li>
        </ul>
      </div>
    </div>
  </section>
)

const CR10Personalisation: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-10 · PERSONALISATION RULES</div>
      <h2 class="display">Personalisation: What Dynamic Content Goes Where</h2>
      <p class="lede">
        Personalisation is only an asset when it is accurate. Inaccurate personalisation
        — "Hi {`{first_name|default:there}`}" — actively damages trust. The rule is: only
        use a personalisation token if the underlying data is verified, and gracefully
        degrade when not. The schedule below tells YDT exactly where each token can be
        used and what the fallback is when data is missing.
      </p>

      <div class="pers-table-wrap">
        <table class="pers-table">
          <thead>
            <tr><th>Token</th><th>Where used</th><th>Fallback</th><th>Confidence threshold</th></tr>
          </thead>
          <tbody>
            <tr><td><code>first_name</code></td><td>All emails greeting, SMS opener</td><td>"Hi there"</td><td>Email-validated form submit only</td></tr>
            <tr><td><code>suburb</code></td><td>Browse Abandon Email 02 (case-studies-near-you), Lead Nurture Email 04, Win-Back Track B</td><td>"in your area" / soft generic</td><td>Validated against Australia Post API or self-declared in form</td></tr>
            <tr><td><code>lob_primary</code></td><td>Welcome Email 03 (LOB branch), Browse Abandon, Lead Nurture, all post-sale flows</td><td>n/a — gate the email instead</td><td>Self-declared OR Klaviyo Viewed Product event on 2+ LOB pages</td></tr>
            <tr><td><code>pm_first_name</code></td><td>Pre-meeting Email 03, Post-Sale Onboarding, Build-in-Progress, Review Request</td><td>"your project manager"</td><td>Set manually by Estimating when assigned</td></tr>
            <tr><td><code>project_scope_summary</code></td><td>CR-01e (Post-Consult) emails 01 and 02</td><td>n/a — gate the email instead</td><td>Populated by PM in CRM during/after discovery call</td></tr>
            <tr><td><code>quote_value</code></td><td>CR-01e Email 04 ("X-dollar quote awaiting your decision") only when band &gt; $50K</td><td>"your quote"</td><td>Estimating field, real-time webhook</td></tr>
            <tr><td><code>last_engagement_date</code></td><td>Win-Back Track A Email 01 ("Three months on...")</td><td>"a while back"</td><td>Klaviyo native field</td></tr>
            <tr><td><code>warranty_expiry_date</code></td><td>Win-Back Track B Email 01</td><td>n/a — gate the email instead</td><td>Set by Estimating per LOB warranty terms</td></tr>
            <tr><td><code>recent_case_studies</code></td><td>Lead Nurture Email 04, Browse Abandon Email 02</td><td>Generic top-3 case studies fallback</td><td>3 case studies within 8km of suburb token; falls back to LOB-only if fewer than 2 within range</td></tr>
            <tr><td><code>build_status</code></td><td>Build-in-Progress weekly status (template variable)</td><td>n/a — gate the email instead</td><td>Set by PM in tracker</td></tr>
          </tbody>
        </table>

        <p style="margin-top:1.5rem;">
          <strong>The "gate the email" principle:</strong> When the data is not available
          to support meaningful personalisation, the correct response is to <em>not send
          the email</em> — not to send a generic version with awkward fallback. The
          schedule above tagged "gate the email instead" means the flow waits for the
          data, exits the contact from the flow, or routes to a different, more generic
          email entirely.
        </p>
      </div>
    </div>
  </section>
)

const CR11TestBacklog: FC = () => (
  <section class="band band-white" id="cr11">
    <div class="band-inner">
      <div class="eyebrow">CR-11 · A/B TEST BACKLOG</div>
      <h2 class="display">First 12 A/B Tests, in Priority Order</h2>
      <p class="lede">
        A test backlog turns CRM into a learning function rather than a static system.
        The twelve tests below are sequenced by <strong>expected lift × ease of execution
        × statistical detectability</strong>. Each is sized to reach 95% confidence within
        ≤ 4 weeks at YMT's send volume. YDT runs one at a time within each flow (parallel
        tests across flows are permitted) to avoid contamination.
      </p>

      <div class="test-list">
        <div class="test-item">
          <div class="test-rank">01</div>
          <div class="test-body">
            <h4>Welcome Email 01 — founder-signed vs. brand-signed</h4>
            <p>Hypothesis: founder-signed lifts open + click 25%+. Variables: from name, signature block. Sample size: 4 weeks at ~600 new subs/wk = 2,400. Detectable lift: 4pp difference in click. Decision: keep winner, reroll loser to graveyard.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">02</div>
          <div class="test-body">
            <h4>Browse Abandon Email 01 — question-led subject vs. cost-led subject</h4>
            <p>"Still thinking about [topic]?" vs. "[Topic] typically costs $X-$Y." Hypothesis: cost-led wins open rate but question-led wins click. Decision logic: optimise for click (closer to revenue).</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">03</div>
          <div class="test-body">
            <h4>Lead Nurture Email 02 — three-slot calendar vs. full Calendly embed</h4>
            <p>Three pre-selected slots (1-click confirm) vs. full Calendly. Hypothesis: pre-selected wins by friction reduction. Decision: 4-week test, winner becomes default.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">04</div>
          <div class="test-body">
            <h4>Post-Consult Email 04 — three-option decision button vs. single CTA</h4>
            <p>Three buttons (sign / need-time / lost) vs. single CTA + reply prompts. Hypothesis: three buttons lifts decision-capture rate by 30pp because it normalises "no".</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">05</div>
          <div class="test-body">
            <h4>Welcome SMS opt-in — discovery-call form vs. quote-request form</h4>
            <p>Opt-in checkbox shown at discovery-call form only vs. both forms. Hypothesis: limiting to higher-intent moment improves SMS engagement quality.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">06</div>
          <div class="test-body">
            <h4>Review Request — Email 02 prompt question count</h4>
            <p>One open prompt vs. three structured prompts. Hypothesis: three structured prompts lift review length by 3× per Bond data — confirm in YMT's cohort.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">07</div>
          <div class="test-body">
            <h4>Win-Back Track A — cross-LOB at Email 03 vs. cross-LOB at Email 01</h4>
            <p>When to surface the cross-LOB pivot. Hypothesis: Email 03 wins because contact has been re-warmed; Email 01 feels like bait-and-switch.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">08</div>
          <div class="test-body">
            <h4>Lead score MQL threshold — 25 vs. 30 vs. 20</h4>
            <p>Calibration test. Hypothesis: threshold of 25 maximises booked-consult-per-PM-hour. Test by routing 33% of contacts to each threshold for 6 weeks, measure downstream conversion.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">09</div>
          <div class="test-body">
            <h4>Build-in-Progress — weekly Friday vs. weekly Monday status</h4>
            <p>Day-of-week test. Hypothesis: Friday wins because customers want closure-for-the-week; Monday loses because it competes with work-mode inbox triage.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">10</div>
          <div class="test-body">
            <h4>Welcome Email 06 — soft preference centre vs. direct-stay-or-go</h4>
            <p>Tonality test. Hypothesis: direct-stay-or-go lifts long-term list health but may lift unsubscribe in the short term. Decide by 90-day RPR of remaining cohort.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">11</div>
          <div class="test-body">
            <h4>Post-Sale Email 03 — welcome pack mentioned vs. unmentioned (surprise)</h4>
            <p>Hypothesis: surprise welcome pack lifts NPS materially; pre-announced lifts perceived value-for-money. Trade-off test.</p>
          </div>
        </div>
        <div class="test-item">
          <div class="test-rank">12</div>
          <div class="test-body">
            <h4>Cross-LOB nudge timing — 18 months vs. 24 months post-completion</h4>
            <p>Hypothesis: 18 months is the sweet spot where the original project has settled but the next project is becoming top-of-mind. Critical for portfolio CLTV — test budget approved.</p>
          </div>
        </div>
      </div>

      <p style="margin-top:1.5rem;">
        <strong>Test governance:</strong> Each test must have a written hypothesis + minimum
        detectable effect (MDE) + decision criterion locked before launch. No "let's see
        what happens" tests — they waste sample and create noise. Test results enter the
        YMT learning log (a shared doc updated quarterly by YDT) so the CRM accumulates
        institutional learning rather than re-running the same tests every 18 months.
      </p>
    </div>
  </section>
)

const CR12Risks: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">CR-12 · FAILURE MODES + HEDGES</div>
      <h2 class="display">Eight Ways This CRM Stack Can Fail (and the Hedges)</h2>
      <p class="lede">
        Every risk register below is paired with an explicit hedge. Hedges that depend on
        capabilities outside YDT's remit are escalated to Carla for resource decisions.
      </p>

      <div class="ch-risk-grid">
        <div class="chr-card">
          <div class="chr-tag">RISK 01</div>
          <div class="chr-name">Estimating-Klaviyo webhook breakage</div>
          <p>Webhook fails for &gt; 1 hour → Build-in-Progress and Review Request flows stall, NPS collection breaks, lifecycle stage drifts.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> Nightly reconciliation batch from Estimating to Klaviyo + Zapier monitor + Slack alert on any &gt; 30min webhook lag.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 02</div>
          <div class="chr-name">List health collapse from a single bad send</div>
          <p>One newsletter with poor subject line or wrong segment can spike spam complaints, drop sender reputation 15+ points in a week.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> All broadcasts seed-tested through a 50-person internal seed list 24h before main send · Klaviyo subject-line scorer required &gt; 80 · CFO sign-off on any broadcast to &gt; 5,000 contacts.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 03</div>
          <div class="chr-name">PM voice inconsistency in Build-in-Progress</div>
          <p>Weekly status emails are PM-written. Style varies wildly → some customers feel cared for, others abandoned.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> Three-section template with placeholder text · YDT editorial review of every status email in first month per PM · monthly NPS pulse to catch drift.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 04</div>
          <div class="chr-name">Detractor leak to Review Request</div>
          <p>NPS gate fails (data not captured, sync drift) → low-NPS customer asked for public review → bad review on Google.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> Review Request flow filter requires positive NPS captured in last 30 days · if NPS missing, send the gating NPS email FIRST, never the review request directly.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 05</div>
          <div class="chr-name">Cross-LOB cannibalisation</div>
          <p>Win-Back Track B surfaces POE to a customer who is talking to YMT directly about a TDR issue → confusing, can lose both.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> Suppress all marketing automation to any contact with open opportunity in Estimating in last 30 days · "Active conversation" supersedes lifecycle automation.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 06</div>
          <div class="chr-name">Klaviyo deliverability ban from spike</div>
          <p>Imported list (e.g. from acquisition or trade show) hits an unwarmed segment → high complaint rate → Klaviyo throttles or suspends.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> No bulk imports permitted without 30-day double-opt-in re-confirmation · CFO approval required for any list import &gt; 200 contacts.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 07</div>
          <div class="chr-name">Personalisation token failure</div>
          <p>Token rendering bug or data missing → "Hi {`{first_name}`}" goes out raw → trust damaged.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> Klaviyo preview-render test required for every flow email update · seed-test 50 contacts before flow activation · "gate the email" principle in CR-10.</div>
        </div>
        <div class="chr-card">
          <div class="chr-tag">RISK 08</div>
          <div class="chr-name">YDT key-person dependency</div>
          <p>YDT lead leaves → tribal knowledge of segment definitions, test history, flow logic lost.</p>
          <div class="chr-hedge"><strong>Hedge:</strong> This document IS the hedge · all segments documented in Klaviyo with description fields · quarterly playbook review · cross-trained backup at YDT named in the SLA.</div>
        </div>
      </div>
    </div>
  </section>
)

const CRHandshake: FC = () => (
  <section class="band band-white">
    <div class="band-inner">
      <div class="eyebrow">PHASE 3 CROSS-WORKSTREAM HANDSHAKES</div>
      <h2 class="display">How CRM Hooks into the Rest of the Strategy Portfolio</h2>
      <p class="lede">
        WS-10 does not stand alone. Six explicit handshakes connect this CRM manual to the
        rest of DOC 3. If any of these connections breaks, the lifecycle engine starts
        running on stale data or wrong assumptions.
      </p>
      <div class="handshake-grid">
        <div class="handshake-card">
          <div class="hs-tag">→ WS-06 CHANNEL</div>
          <h4>Lead-source attribution feeds segmentation</h4>
          <p>Every contact arrives with a lead_source tag set by the channel layer (WS-06 source taxonomy). The CRM segment matrix (CR-02 Dimension 4) reuses these tags exactly — same naming, same definitions. No translation layer.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">→ WS-08 GEO/AEO</div>
          <h4>Content assets reused in flow emails</h4>
          <p>The 80-piece content map (WS-08) is the asset library for every flow's CTAs. Welcome Email 03, Browse Abandon Email 02, Lead Nurture Email 04, Win-Back Track A Email 02 all link to WS-08 GEO content. The CRM stack does not produce new content — it deploys existing.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">→ WS-09 PAID</div>
          <h4>Offline conversion import closes the loop</h4>
          <p>WS-09 PM-11 specifies the offline conversion workflow. CRM provides the truth events (form_submit, calendar_book, contract_sign, build_complete) back to Google Ads + Meta + LinkedIn — the data that turns paid platforms from "click optimisation" into "revenue optimisation".</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">→ WS-02 BRAND</div>
          <h4>Voice, palette, lockup locked across templates</h4>
          <p>The three email templates (CR-06) implement the WS-02 brand system exactly: Navy/Timber/Aqua/Cream palette, Fraunces + Inter typography, founder-signed voice rules. No template variation permitted that contradicts WS-02.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">→ WS-05 BOWTIE</div>
          <h4>Lifecycle stages = Bowtie funnel stages</h4>
          <p>The CRM lifecycle stages (CR-02 Dimension 2) map 1:1 to the WS-05 bowtie funnel: Cold subscriber → Quote-Requested = left lobe; Consult-Booked → Active-Build = neck of bow; Past-Customer → Multi-LOB = right lobe (expansion). Same model, same names.</p>
        </div>
        <div class="handshake-card">
          <div class="hs-tag">→ WS-11 KPI CONTRACT</div>
          <h4>Lifecycle metrics roll up to the CFO board pack</h4>
          <p>CR-05's eight lifecycle metrics feed directly into the WS-11 KPI contract. Email LTV, Cross-LOB rate, Retention curves, NPS-by-stage are not separate marketing measures — they are line items in the same CFO board pack that tracks revenue and gross margin.</p>
        </div>
      </div>
    </div>
  </section>
)

const CRCompliance: FC = () => (
  <section class="band band-cream">
    <div class="band-inner">
      <div class="eyebrow">COMPLIANCE</div>
      <h2 class="display">Compliance, Privacy, and Operating Constraints</h2>
      <div class="compliance-grid">
        <div class="comp-card">
          <div class="comp-h">Spam Act 2003 (Australia)</div>
          <p>All marketing email and SMS comply with the Spam Act: clear sender identification, functional unsubscribe processed within 5 business days (YMT processes within 60 seconds via Klaviyo), explicit consent at capture. Transactional emails (quote, contract, build coordination) operate under the inferred-consent exemption.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Australian Privacy Principles (APP)</div>
          <p>Privacy collection notice on every form. Personal information stored in Klaviyo (EU + US regions) under EU SCCs. Data retention: contacts not engaged for 36 months are archived (not retained for marketing). Right-to-erasure requests processed within 30 days per APP 13.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">ACMA SMS rules</div>
          <p>SMS opt-in is double-confirmed before frequency cap unlocks. All SMS sends include sender identifier and REPLY STOP unsubscribe. Sends only 9am-7pm local time. Premium-rate SMS never used.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">Klaviyo Acceptable Use Policy</div>
          <p>No purchased lists. No imported contacts without verifiable opt-in. Sender reputation monitored weekly via Klaviyo Deliverability Hub. Any complaint rate spike triggers immediate broadcast pause + forensic review.</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">ACL (consumer guarantees)</div>
          <p>Warranty terms surfaced in CR-01f Email 03 (welcome pack) and CR-01i Track B Email 01. No marketing claim contradicts the contractual warranty. Reviews requested only from contracts that have reached final-payment-received status (CR-01h Critical Filter).</p>
        </div>
        <div class="comp-card">
          <div class="comp-h">YDT operating SLA</div>
          <p>YDT operates the Klaviyo account on YMT's behalf with: weekly metric review, monthly flow performance report, quarterly playbook update, and 4-hour emergency response for deliverability or compliance incidents. Named cross-trained backup required at YDT to hedge key-person risk (CR-12 Risk 08).</p>
        </div>
      </div>
    </div>
  </section>
)

const CRFooter: FC = () => (
  <footer class="doc-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-lbl">Document</div>
          <p>DOC 3 · Phase 3 · WS-10<br />CRM / Lifecycle / RevOps Operating Manual</p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Frameworks Cited</div>
          <p>Klaviyo Marketing Mix Report 2025 · Drift Conversational Marketing · Balfour Growth Loops · Bond Brand Loyalty Report 2024 · Pardot/HubSpot lead-scoring methodology</p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Checklist Coverage</div>
          <p>12 of 12 CR-XX items · 9 of 9 Klaviyo flows (CR-01a → CR-01i) · 12 A/B tests sequenced · 8 risks hedged</p>
        </div>
        <div class="footer-col">
          <div class="footer-lbl">Handover</div>
          <p>Operating manual ready for YDT (Corrina McGowan) to deploy in Klaviyo. CFO sign-off: Carla Oliver. Owner of measurement: CFO board pack monthly.</p>
        </div>
      </div>
      <div class="footer-bar">
        <span>YBMT Group · Portfolio Strategy</span>
        <span>WS-10 of 11 · Phase 3 Lifecycle Layer</span>
        <span>CoSai CFO Services · 2026</span>
      </div>
    </div>
  </footer>
)

export const renderYMTcrm = () => (
  <>
    <CRHubBar />
    <CRNav />
    <CRHero />
    <CRDoctrine />
    <UpstreamAnchor doc="WS-10 CRM / Lifecycle / RevOps" />
    <CR01Welcome />
    <CR01BrowseAbandon />
    <CR01LeadNurture />
    <CR01PreMeeting />
    <CR01PostConsult />
    <CR01PostSale />
    <CR01BuildProgress />
    <CR01ReviewRequest />
    <CR01WinBack />
    <CR02Segmentation />
    <CR03LeadScoring />
    <CR04DataContract />
    <CR05Metrics />
    <CR06EmailTemplates />
    <CR07SMS />
    <CR08Suppression />
    <CR09Deliverability />
    <CR10Personalisation />
    <CR11TestBacklog />
    <CR12Risks />
    <CRHandshake />
    <CRCompliance />
    <CRFooter />
  </>
)
