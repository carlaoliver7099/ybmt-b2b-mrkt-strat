// Shared top nav for the YBMT × CoSai JV intranet.
// `active` controls which top-level page is highlighted.

type NavProps = { active?: 'home' | 'value-chain' | 'matrix' }

export const TopNav = ({ active = 'home' }: NavProps) => {
  const linkBase = "px-3 py-1.5 rounded hover:bg-[var(--paper-warm)] transition-colors"
  const activeCls = "text-[var(--ybmt-navy)] font-semibold bg-[var(--paper-warm)]"

  return (
    <nav class="sticky top-0 z-50 bg-[#fbfaf8]/90 backdrop-blur-md border-b border-[var(--line)] no-print">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-md bg-[var(--ybmt-navy)] flex items-center justify-center text-white font-bold text-sm tracking-tighter group-hover:bg-[var(--ybmt-orange)] transition-colors">Y</div>
          <span class="text-sm font-semibold text-[var(--ink)]">YBMT × CoSai Construction</span>
          <span class="hidden md:inline-flex chip bg-[var(--paper-warm)] text-[var(--ink-soft)] border border-[var(--line)]">Intranet</span>
        </a>
        <div class="hidden md:flex items-center gap-1 text-xs text-[var(--ink-soft)]">
          <a href="/" class={`${linkBase} ${active === 'home' ? activeCls : ''}`}>
            <i class="fas fa-house mr-1.5 text-[10px]"></i> Charter
          </a>
          <a href="/value-chain" class={`${linkBase} ${active === 'value-chain' ? activeCls : ''}`}>
            <i class="fas fa-diagram-project mr-1.5 text-[10px]"></i> Value Chain
          </a>
        </div>
      </div>
    </nav>
  )
}
