import { TopNav } from './nav'

// Value Chain page — A → B → C → D
// Source: 4 hand-drawn diagrams locked 2026-06-23.
//
// A = Business Development (Gerry + BD/Sales)
// B = Quoting (Sales + Aroflow)
// C = Sales Contract (Sales + Master Builders + Accounts)
// D = Job Management (Operations)

export const ValueChainPage = () => (
  <div class="min-h-screen">
    <TopNav active="value-chain" />

    {/* HERO */}
    <header class="max-w-[1100px] mx-auto px-6 lg:px-10 pt-14 pb-10">
      <div class="flex items-center gap-2 mb-5">
        <span class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
          <span class="dot bg-[var(--ybmt-orange)]"></span> Operating Playbook
        </span>
        <span class="chip bg-[var(--ybmt-navy)]/10 text-[var(--ybmt-navy)]">
          <i class="fas fa-lock text-[10px]"></i> v1.0 LOCKED
        </span>
        <a href="/" class="chip bg-white border border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ybmt-orange)] hover:text-[var(--ybmt-orange)]">
          <i class="fas fa-arrow-left text-[10px]"></i> Charter
        </a>
      </div>

      <h1 class="display text-5xl md:text-6xl font-bold text-[var(--ybmt-navy)] leading-[1.05] mb-5">
        The Value Chain
      </h1>
      <p class="text-xl text-[var(--ink-soft)] leading-relaxed max-w-3xl">
        Four sequential stages turn a stranger into a paid, completed job —
        with profit protected end-to-end. Every team member fits inside one stage.
        Every system, document, and KPI maps to one stage. Read left-to-right.
      </p>
    </header>

    {/* FLOW STRIP — at-a-glance pill bar showing A → B → C → D */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-14">
      <div class="bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-4 text-center">
          The four-stage value chain
        </div>
        <div class="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {[
            { id: 'a', letter: 'A', title: 'Business Development', owner: 'Gerry · BD + Sales', icon: 'handshake' },
            { id: 'b', letter: 'B', title: 'Quoting', owner: 'Sales · Aroflow + CRM', icon: 'file-invoice' },
            { id: 'c', letter: 'C', title: 'Sales Contract', owner: 'Sales · Master Builders + Accounts', icon: 'file-signature' },
            { id: 'd', letter: 'D', title: 'Job Management', owner: 'Operations · Site team', icon: 'hard-hat' },
          ].map((s, i) => (
            <>
              <a href={`#stage-${s.id}`} class="flex-1 group">
                <div class="border border-[var(--line)] rounded-xl p-4 bg-[var(--paper-warm)] hover:border-[var(--ybmt-orange)] hover:bg-white transition-all">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-[var(--ybmt-navy)] text-white flex items-center justify-center font-bold display group-hover:bg-[var(--ybmt-orange)] transition-colors">
                      {s.letter}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="font-semibold text-[var(--ybmt-navy)] text-sm">
                        <i class={`fas fa-${s.icon} mr-1.5 text-[var(--ybmt-orange)]`}></i>
                        {s.title}
                      </div>
                      <div class="text-[11px] text-[var(--ink-soft)] truncate">{s.owner}</div>
                    </div>
                  </div>
                </div>
              </a>
              {i < 3 && (
                <div class="flex items-center justify-center text-[var(--ink-fade)]">
                  <i class="fas fa-arrow-right hidden md:block"></i>
                  <i class="fas fa-arrow-down md:hidden"></i>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>

    {/* ========== STAGE A — BUSINESS DEVELOPMENT ========== */}
    <Stage
      id="a"
      letter="A"
      title="Business Development"
      subtitle="Scope of works · Gerry · Bus.Dev + Sales"
      icon="handshake"
      owner="Gerry McGuire (CEO, lead BD)"
      handsTo="Stage B · Quoting"
      step1={{
        title: 'Meet & Greet',
        intent: 'First human contact. Build rapport. Qualify intent.',
        items: [
          { label: 'Meet & greet', checked: true },
          { label: 'Have a chat', checked: true },
          { label: 'Phone call / in-person', checked: true },
        ],
        footnote: 'A real conversation. Not a sales pitch.',
      }}
      step2={{
        title: 'Follow-up',
        intent: '"We left you with some information." Send the credibility pack.',
        items: [
          { label: 'Capability statement', checked: true },
          { label: 'Buyer\'s guide', checked: true },
          { label: 'Referral / Partnership kit / guide', checked: true },
        ],
        footnote: 'Sent via personalised email within 24 hrs of the meeting.',
      }}
      systems={['Email (gerry@ybmt.com.au)', 'Capability statement PDF (per LOB)', 'Buyer\'s Guide PDF', 'Partnership kit PDF']}
      kpis={['First response time: 4 hrs', 'Follow-up sent: within 24 hrs of meeting', 'Buyer\'s Guide download = qualified lead signal']}
    />

    {/* ========== STAGE B — QUOTING ========== */}
    <Stage
      id="b"
      letter="B"
      title="Quoting"
      subtitle="Value Chain — Quoting"
      icon="file-invoice"
      owner="Sales team (Aroflow + CRM)"
      handsTo="Stage C · Sales Contract"
      step1={{
        title: 'RFQ Capture',
        intent: 'The lead asks for a price. Capture, route, and time-stamp.',
        items: [
          { label: 'Website RFQ form', checked: false },
          { label: 'Landing page submission', checked: false },
          { label: 'Verbal referral', checked: false },
        ],
        footnote: 'All RFQs land in CRM with channel attribution.',
      }}
      step2={{
        title: 'Quote & Follow-up',
        intent: 'Compute the quote, issue it, follow up systematically until decision.',
        items: [
          { label: 'Quote computed in Aroflow', checked: false, sub: 'Materials + labour + overhead allocation' },
          { label: 'Follow-up sequence in CRM', checked: false, sub: '24-hr first follow-up · then cadence' },
        ],
        footnote: 'Strike rate target: 50–75% of quotes issued.',
      }}
      systems={['Aroflow (quote computation)', 'CRM (RFQ capture, follow-up cadence)', 'Website RFQ forms', 'Call-tracking number (per region)']}
      kpis={['24-hr quote turnaround', '24-hr follow-up after issue', '50–75% strike rate', '~$200K of quotes per week (Y1)']}
    />

    {/* ========== STAGE C — SALES CONTRACT ========== */}
    <Stage
      id="c"
      letter="C"
      title="Sales Contract"
      subtitle="Value Chain → Sales Contract"
      icon="file-signature"
      owner="Sales team + Accounts (Master Builders portal)"
      handsTo="Stage D · Job Management"
      step1={{
        title: 'Quote Accepted',
        intent: 'Quote converts. Lock the deal in the system immediately.',
        items: [
          { label: 'Quote accepted by customer', checked: false },
          { label: 'Update Aroflow', checked: false },
          { label: 'Status: Quote Won', checked: false, sub: 'Triggers Stage C workflow' },
        ],
        footnote: 'No verbal acceptances. Written acceptance = system update.',
      }}
      step2={{
        title: 'Issue Contract & Invoice',
        intent: 'Convert a "Won" status into a legally binding, drawdown-staged contract.',
        items: [
          { label: 'Master Builders portal login', checked: false },
          { label: 'Prepare Sales Contract', checked: false },
          { label: 'Define & detail draw $ amounts + conditions for draws', checked: false, sub: 'Progress payments staged against milestones' },
          { label: 'Issue Sales Contract', checked: false },
          { label: 'Issue Sales Invoice', checked: false },
        ],
        footnote: 'Master Builders contract = QBCC-compliant. Non-negotiable.',
      }}
      systems={['Aroflow (status update + audit trail)', 'Master Builders Association portal', 'Accounts (invoicing)', 'CRM (deal stage)']}
      kpis={['Contract issued within 48 hrs of "Won" status', 'Drawdown stages defined before contract issue', 'Sales invoice issued same day as contract']}
    />

    {/* ========== STAGE D — JOB MANAGEMENT ========== */}
    <Stage
      id="d"
      letter="D"
      title="Job Management"
      subtitle="JOB Management value chain"
      icon="hard-hat"
      owner="Operations · Site supervisor + tradies"
      handsTo="Repeat / Referral / Review"
      step1={{
        title: 'Receive & Plan',
        intent: 'Take the signed contract and translate it into labour + materials schedule.',
        items: [
          { label: 'Receive Sales Contract', checked: false },
          { label: 'Plan labour mix · order & scheduling', checked: false },
          { label: 'Materials · order & scheduling', checked: false },
        ],
        footnote: 'Scheduling locks supplier orders and trade availability before work starts.',
      }}
      step2={{
        title: 'Manage the Margin',
        intent: 'Deliver the job protecting GP margin. Every basis point is profit.',
        items: [
          { label: 'Manage the GP Margin', checked: false, sub: 'Target: 34% gross margin held end-to-end' },
          { label: 'On scope', checked: false, sub: 'No unpaid variations. Change orders priced.' },
          { label: 'On time', checked: false, sub: 'Schedule held. Customer informed of any slippage.' },
          { label: 'On budget', checked: false, sub: 'Actual cost ≤ quoted cost.' },
        ],
        footnote: 'ALWAYS — non-negotiable. Three breaches in a row triggers root-cause review.',
        emphasis: true,
      }}
      systems={['Aroflow (job costing, actuals vs quote)', 'Suppliers (order placement)', 'Trade scheduling (calendar)', 'Site reporting (daily logs)']}
      kpis={['GP margin ≥ 34% per job', '100% on time (or formally re-baselined)', '100% on scope (variations = signed change orders)', '100% on budget (no margin leakage)']}
    />

    {/* ========== THE WHOLE-CHAIN SUMMARY ========== */}
    <section class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-20">
      <div class="bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white rounded-2xl p-8 lg:p-12 shadow-xl">
        <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange-soft)] font-semibold mb-3">How the chain protects the JV</div>
        <h2 class="display text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          Every link defends a different number.
        </h2>

        <div class="grid md:grid-cols-4 gap-5 text-sm">
          <div class="bg-white/5 rounded-xl p-5 border border-white/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-7 h-7 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center font-bold text-xs">A</span>
              <span class="font-semibold">BD</span>
            </div>
            <p class="text-white/80 text-xs leading-relaxed">Defends <strong class="text-[var(--ybmt-orange-soft)]">top-of-funnel volume</strong> — without a steady BD rhythm, the funnel starves.</p>
          </div>
          <div class="bg-white/5 rounded-xl p-5 border border-white/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-7 h-7 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center font-bold text-xs">B</span>
              <span class="font-semibold">Quoting</span>
            </div>
            <p class="text-white/80 text-xs leading-relaxed">Defends <strong class="text-[var(--ybmt-orange-soft)]">strike rate</strong> — without 24-hr turnaround and follow-up, $200K of quotes/wk evaporates.</p>
          </div>
          <div class="bg-white/5 rounded-xl p-5 border border-white/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-7 h-7 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center font-bold text-xs">C</span>
              <span class="font-semibold">Contract</span>
            </div>
            <p class="text-white/80 text-xs leading-relaxed">Defends <strong class="text-[var(--ybmt-orange-soft)]">cash flow</strong> — drawdown-staged contracts mean money lands as milestones, not at the end.</p>
          </div>
          <div class="bg-white/5 rounded-xl p-5 border border-white/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-7 h-7 rounded-full bg-[var(--ybmt-orange)] flex items-center justify-center font-bold text-xs">D</span>
              <span class="font-semibold">Job Mgmt</span>
            </div>
            <p class="text-white/80 text-xs leading-relaxed">Defends <strong class="text-[var(--ybmt-orange-soft)]">34% GP margin</strong> — the difference between a $5M business and a $500K NP business.</p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/15 grid md:grid-cols-2 gap-6">
          <div>
            <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange-soft)] font-semibold mb-2">Read this way</div>
            <p class="text-white/90 leading-relaxed">
              If revenue is short, look at <strong>A</strong> (not enough leads) or <strong>B</strong> (poor conversion).
              If revenue is fine but profit is short, look at <strong>D</strong> (margin leakage).
              If cash is tight despite winning work, look at <strong>C</strong> (drawdown stages too back-loaded).
            </p>
          </div>
          <div>
            <div class="text-xs uppercase tracking-wider text-[var(--ybmt-orange-soft)] font-semibold mb-2">One system, one truth</div>
            <p class="text-white/90 leading-relaxed">
              Aroflow + CRM + Master Builders portal are the spine. Every stage writes to one of these systems —
              so reporting (Pillar 12) reads the chain end-to-end without spreadsheet acrobatics.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer class="max-w-[1100px] mx-auto px-6 lg:px-10 pb-16">
      <div class="border-t border-[var(--line)] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--ink-fade)]">
        <div class="flex items-center gap-4">
          <div class="w-7 h-7 rounded bg-[var(--ybmt-navy)] flex items-center justify-center text-white font-bold text-xs">Y</div>
          <div>
            <div class="font-semibold text-[var(--ink-soft)]">YBMT Value Chain · v1.0 LOCKED</div>
            <div>Operating playbook · 2026-06-23</div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 md:gap-6">
          <a href="/" class="hover:text-[var(--ybmt-orange)]"><i class="fas fa-house mr-1"></i> Back to Charter</a>
          <span><i class="fas fa-id-card mr-1"></i> QBCC 15030821</span>
          <span><i class="fas fa-phone mr-1"></i> 1300 448 784</span>
        </div>
      </div>
    </footer>
  </div>
)

// ============== STAGE SUB-COMPONENT ==============

type ChecklistItem = { label: string; checked: boolean; sub?: string }

type StepBlock = {
  title: string
  intent: string
  items: ChecklistItem[]
  footnote?: string
  emphasis?: boolean
}

type StageProps = {
  id: string
  letter: string
  title: string
  subtitle: string
  icon: string
  owner: string
  handsTo: string
  step1: StepBlock
  step2: StepBlock
  systems: string[]
  kpis: string[]
}

const Stage = ({ id, letter, title, subtitle, icon, owner, handsTo, step1, step2, systems, kpis }: StageProps) => (
  <section id={`stage-${id}`} class="max-w-[1100px] mx-auto px-6 lg:px-10 mb-16 read-section">
    {/* Stage header */}
    <div class="flex items-start gap-5 mb-6">
      <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--ybmt-navy)] to-[var(--ybmt-navy-soft)] text-white flex items-center justify-center display text-3xl font-bold shadow-md">
        {letter}
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-[11px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold">Stage {letter}</div>
        <h2 class="display text-3xl font-bold text-[var(--ybmt-navy)] leading-tight">
          <i class={`fas fa-${icon} text-[var(--ybmt-orange)] mr-2 text-xl`}></i>
          {title}
        </h2>
        <div class="text-sm text-[var(--ink-soft)] mt-1">{subtitle}</div>
      </div>
      <div class="hidden md:flex flex-col items-end gap-1 text-xs">
        <div class="chip bg-[var(--paper-warm)] text-[var(--ink-soft)] border border-[var(--line)]">
          <i class="fas fa-user-tie text-[10px]"></i> {owner}
        </div>
        <div class="chip bg-[var(--ybmt-orange)]/10 text-[var(--amber)]">
          <i class="fas fa-arrow-right text-[10px]"></i> Hands to: {handsTo}
        </div>
      </div>
    </div>

    {/* Two-step body */}
    <div class="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-2 items-stretch">
      <StepCard step="1" block={step1} />
      <div class="flex md:items-center justify-center py-3 md:py-0">
        <div class="w-12 h-12 rounded-full bg-white border-2 border-[var(--ybmt-orange)] flex items-center justify-center shadow-sm">
          <i class="fas fa-arrow-right text-[var(--ybmt-orange)] text-sm hidden md:block"></i>
          <i class="fas fa-arrow-down text-[var(--ybmt-orange)] text-sm md:hidden"></i>
        </div>
      </div>
      <StepCard step="2" block={step2} />
    </div>

    {/* Systems + KPIs footer row */}
    <div class="grid md:grid-cols-2 gap-4 mt-5">
      <div class="bg-[var(--paper-warm)] border border-[var(--line)] rounded-xl p-4">
        <div class="text-[10px] uppercase tracking-wider text-[var(--ink-fade)] font-semibold mb-2">
          <i class="fas fa-cogs mr-1.5"></i> Systems & tools
        </div>
        <div class="flex flex-wrap gap-1.5">
          {systems.map((s) => (
            <span class="chip bg-white text-[var(--ink-soft)] border border-[var(--line)]">{s}</span>
          ))}
        </div>
      </div>
      <div class="bg-[var(--ybmt-navy)] text-white rounded-xl p-4">
        <div class="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-2">
          <i class="fas fa-gauge-high mr-1.5"></i> KPIs that govern this stage
        </div>
        <ul class="space-y-1">
          {kpis.map((k) => (
            <li class="text-xs text-white/90 flex items-start gap-2">
              <i class="fas fa-check text-[var(--ybmt-orange-soft)] mt-0.5 text-[10px]"></i>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

// ============== STEP CARD ==============

const StepCard = ({ step, block }: { step: string; block: StepBlock }) => {
  const borderCls = block.emphasis ? 'border-[var(--ybmt-orange)]' : 'border-[var(--line)]'
  const headerBg = block.emphasis
    ? 'bg-gradient-to-r from-[var(--ybmt-orange)] to-[var(--ybmt-orange-soft)] text-white'
    : 'bg-white text-[var(--ybmt-navy)]'

  return (
    <div class={`bg-white border-2 ${borderCls} rounded-xl overflow-hidden shadow-sm`}>
      <div class={`${headerBg} px-5 py-3 border-b ${block.emphasis ? 'border-white/20' : 'border-[var(--line)]'}`}>
        <div class={`text-[10px] uppercase tracking-wider font-semibold ${block.emphasis ? 'text-white/70' : 'text-[var(--ink-fade)]'}`}>
          Step {step}
        </div>
        <div class="font-semibold display text-lg">{block.title}</div>
      </div>
      <div class="p-5">
        <p class="text-sm text-[var(--ink-soft)] italic mb-4 leading-relaxed">{block.intent}</p>
        <ul class="space-y-2.5">
          {block.items.map((item) => (
            <li class="flex items-start gap-3">
              <span class={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                item.checked
                  ? 'bg-[var(--emerald)] border-[var(--emerald)]'
                  : 'bg-white border-[var(--line-strong)]'
              }`}>
                {item.checked && <i class="fas fa-check text-white text-[8px]"></i>}
              </span>
              <div class="flex-1 min-w-0">
                <div class="text-sm text-[var(--ink)] font-medium">{item.label}</div>
                {item.sub && <div class="text-[11px] text-[var(--ink-soft)] mt-0.5">{item.sub}</div>}
              </div>
            </li>
          ))}
        </ul>
        {block.footnote && (
          <div class={`mt-4 pt-3 border-t border-[var(--line)] text-[11px] ${block.emphasis ? 'text-[var(--amber)] font-semibold' : 'text-[var(--ink-fade)]'} leading-relaxed`}>
            <i class="fas fa-info-circle mr-1"></i> {block.footnote}
          </div>
        )}
      </div>
    </div>
  )
}
