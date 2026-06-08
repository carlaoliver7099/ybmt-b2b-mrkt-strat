# CONGRUENCY DOCTRINE v1.0
**Status:** LOCKED · 2026-06 · Carla Oliver (Acting CMO, CoSai CFO Services) for YMT/YBMT Group
**Companions:** `DEPTH-STANDARD-v1.md` (the coverage gate) · this doc (the congruency gate)
**Owner of enforcement:** Acting CMO until handover; thereafter YDT (Corrina McGowan)

---

## 1. The Gap This Doctrine Closes

The Depth Standard ensures every workstream document is **internally complete** — that all
checklist items are present, all frameworks cited, all word-count thresholds met. It does NOT
guarantee that the document **explicitly inherits from the upstream decisions** that justify its
existence.

A document can pass the Depth Standard while still being a **stand-alone artefact** —
internally competent, externally orphaned. McGowan opens it, asks "where does this connect to
MEDDPICC qualification?" or "which persona are we targeting?" — and the answer is not on the page.

The Congruency Doctrine closes that gap.

## 2. The Five Upstream Anchors

Every Phase 3 and Phase 4 deliverable must explicitly cite five upstream contracts:

| # | Anchor | Source | Locked Reference |
|---|---|---|---|
| 1 | **Persona** | WS-04 JTBD (`/ymt-jtbd`) | "Sarah & Mark · The Established SEQ Homeowner" |
| 2 | **Category POV** | WS-01 Category (`/ymt-category`) | "Whole-of-Home Stewardship" |
| 3 | **Brand Promise** | WS-02 Brand (`/ymt-brand`) | "Built like it's our own home." |
| 4 | **Economics** | WS-05 Bowtie (`/ymt-bowtie`) | "30× cross-LOB LTV over 10-year horizon" |
| 5 | **KPI Contract** | WS-11 KPI (`/ymt-kpi-contract`) | "F1 → F2 → F3 funnel · MEDDPICC · MMM" |

These five are the **non-negotiables**. Other upstream references (WS-03 buyer psychology, WS-07
DBAs, WS-06 channel, WS-08 GEO, WS-09 paid, WS-10 CRM) are encouraged but not mandatory in
every document — the FIVE above are mandatory.

## 3. The Mechanism — How Congruency Is Enforced

### 3.1 Structural Mechanism: `UpstreamAnchor` Component
Every Phase 3 and Phase 4 document **must** import and render the shared
`<UpstreamAnchor doc="..."/>` component (`src/upstream-anchor.tsx`) **immediately after its
Doctrine block**. This produces a visible 5-card strip on the page that names each anchor,
cites the source workstream, and links to the source document.

The single shared component is the source of truth. If an upstream anchor changes (e.g., the
brand promise is re-worded), updating `upstream-anchor.tsx` propagates the change everywhere
in one commit. This is intentional. **Do not duplicate the anchor copy across documents.**

### 3.2 Doctrinal Mechanism: Final Doctrine Rule
Every Phase 3/Phase 4 document's Doctrine section must include a **final rule** (numbered last)
titled something like *"Every [decision/asset/flow] obeys the five upstream anchors"*. The rule
body must:

1. Explicitly name all five anchors with reference to the source workstream
2. Frame each anchor as a **constraint** ("does this serve Sarah & Mark…", "does this reinforce
   Whole-of-Home Stewardship…", etc.) — not as a passive reference
3. Cover all three LOBs by name (Termite Damage Repair, Pools/Outdoor Entertainment,
   Unit Renovations)

This rule is what binds the page-body recommendations to the anchors. It is the operational
equivalent of saying "if the anchor and the recommendation conflict, the anchor wins."

### 3.3 Body Mechanism: Natural Citation
Anywhere in the body of the document where a recommendation could plausibly invoke an upstream
decision, it **should** — using the exact phrase from the locked reference column above
(grep-stable strings). For example:
- A paid headline example should be tagged "anchors on Built like it's our own home (WS-02)"
- A CRM flow trigger should be tagged "F1 → F2 hand-off, MEDDPICC re-score required (WS-11)"
- A channel decision should reference "30× cross-LOB LTV justification (WS-05)"

Density target: **at least 3 grep-stable occurrences of each anchor per document body**,
NOT counting the UpstreamAnchor strip and NOT counting the final Doctrine rule. This is the
verification gate (see §5).

## 4. The Three-LOB Coverage Requirement

In addition to the five anchors, every Phase 3 / Phase 4 document must demonstrate explicit
treatment of **all three lines of business**, proportionate to the YMT Group sales mix:

| LOB | Sales mix | GPM | Brand role | Minimum named references per doc |
|---|---|---|---|---|
| Termite Damage Repair | 55% | 45% | Revenue engine | 6 |
| Pools / Outdoor Entertainment | 30% | 32% | Brand prestige | 4 |
| Unit Renovations | 15% | 35% | Velocity engine | 3 |

Specifically:
- Each LOB needs **named treatment of its specific buyer behaviour and channel implications**
  (not just a list-mention)
- The Units LOB has historically been under-represented across the portfolio and is the most
  common congruency failure mode — verify carefully
- LOB references in the UpstreamAnchor strip do NOT count toward the minimum (it's a shared
  component)

## 5. The Congruency Verification Gate

Before a Phase 3 or Phase 4 commit closes, run the verification script:

```bash
cd /home/user/webapp
for path in /ymt-channel /ymt-geo /ymt-paid /ymt-crm /termite-gtm /pools-gtm /units-gtm; do
  C=$(curl -s "http://localhost:3000$path")
  PERSONA=$(echo "$C" | grep -oE "Sarah &amp; Mark|Established SEQ" | wc -l)
  CAT=$(echo "$C" | grep -oE "Whole-of-Home Stewardship" | wc -l)
  PROM=$(echo "$C" | grep -oE 'Built like (it&#39;s|our) our own home' | wc -l)
  ECON=$(echo "$C" | grep -oE "30×|30x cross-LOB" | wc -l)
  KPI_F=$(echo "$C" | grep -oE "F1 → F2|F1/F2/F3" | wc -l)
  KPI_M=$(echo "$C" | grep -oE "MEDDPICC" | wc -l)
  T=$(echo "$C" | grep -oiE "termite" | wc -l)
  P=$(echo "$C" | grep -oiE "pool|outdoor" | wc -l)
  U=$(echo "$C" | grep -oiE "unit ren|unit-ren|unit reno" | wc -l)
  echo "$path · Persona=$PERSONA · Cat=$CAT · Promise=$PROM · 30x=$ECON · F1F2F3=$KPI_F · MEDDPICC=$KPI_M · T=$T · P=$P · U=$U"
done
```

### Pass thresholds (per document)

| Metric | Pass threshold |
|---|---|
| Persona references | ≥ 4 |
| Category POV references | ≥ 2 |
| Brand Promise references | ≥ 2 |
| 30× LTV references | ≥ 2 |
| F1/F2/F3 references | ≥ 2 |
| MEDDPICC references | ≥ 2 |
| Termite LOB references | ≥ 6 |
| Pools LOB references | ≥ 4 |
| Units LOB references | ≥ 3 |

If any metric falls below threshold, the workstream **does not advance**. The author retrofits
the body of the document with named references until the gate passes, then commits.

## 6. Forward Application

This doctrine applies to:
- **All current Phase 3 documents** (WS-06, WS-08, WS-09, WS-10) — retrofitted under v1.0 release
- **All current Phase 4 documents** (DOC 4 Termite, DOC 5 Pools) — retrofitted under v1.0 release
- **All future Phase 4 documents** (DOC 6 Units) — built compliant from day one
- **Any future workstream additions** — must demonstrate compliance before merge

## 7. Change Control

This doctrine itself is governed by the Quality Gate. Changes require:
1. Written rationale
2. Acting CMO sign-off (Carla Oliver) until handover
3. Then YDT sign-off (Corrina McGowan)

The five upstream anchors are **locked**. They do not change without re-baselining the entire
portfolio. The verification thresholds in §5 may be tightened over time but never loosened.

---

**Authority:** Carla Oliver · Acting CMO · CoSai CFO Services · for YMT / YBMT Group
**First Application:** 2026-06 Congruency Sweep (Phase 3 + Phase 4 partial)
**Next Review:** At Phase 4 close (DOC 6 Units delivery)
