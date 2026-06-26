/**
 * CoSai. × YBMT — Brand Bar (charcoal top bar)
 * ---------------------------------------------------------------------------
 * Lives at the top of every CRM page. 48px tall on desktop.
 * Charcoal bg · white text · brass period on the wordmark.
 *
 * Props:
 *   - active: which nav item is highlighted
 *   - user: { name, role } — pass null/undefined when not logged in
 *   - trainingMode: shows the cream training-mode strip beneath the bar
 */

import { Wordmark } from './wordmark'

type NavKey = 'dashboard' | 'quotes' | 'new' | 'settings' | null

interface BrandBarProps {
  active?: NavKey
  user?: { name: string; role: string } | null
  trainingMode?: boolean
}

const navItems: { key: Exclude<NavKey, null>; label: string; href: string }[] = [
  { key: 'dashboard', label: 'Dashboard',  href: '/crm/dashboard' },
  { key: 'quotes',    label: 'Quotes',     href: '/crm/quotes' },
  { key: 'new',       label: 'New RFQ',    href: '/crm/quotes/new' },
  { key: 'settings',  label: 'Settings',   href: '/crm/settings/lookups' },
]

const roleLabel: Record<string, string> = {
  cosai_admin:     'CoSai Admin',
  sinbau_ceo:      'Sinbau CEO',
  estimator:       'Estimator',
  project_manager: 'PM',
}

export const BrandBar = ({ active = null, user = null, trainingMode = false }: BrandBarProps) => (
  <>
    {/* ── Charcoal brand bar ───────────────────────────────────────── */}
    <header
      style={{
        background: '#1b1a1e',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        {/* Left — wordmark */}
        <a href="/crm/dashboard" style={{ textDecoration: 'none', display: 'inline-flex' }}>
          <Wordmark jv size="md" color="white" />
        </a>

        {/* Middle — nav */}
        {user && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            {navItems.map(item => {
              // Settings is admin-only
              if (item.key === 'settings' && user.role !== 'cosai_admin' && user.role !== 'sinbau_ceo') return null
              const isActive = active === item.key
              return (
                <a
                  key={item.key}
                  href={item.href}
                  style={{
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.62)',
                    textDecoration: 'none',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    background: isActive ? 'rgba(200,169,106,0.16)' : 'transparent',
                    borderBottom: isActive ? '1.5px solid #c8a96a' : '1.5px solid transparent',
                    transition: 'color 0.12s, background 0.12s',
                  }}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        )}

        {/* Right — user identity */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '12px',
          }}
        >
          {user ? (
            <>
              <div style={{ textAlign: 'right', lineHeight: 1.25 }}>
                <div style={{ color: '#ffffff', fontWeight: 600 }}>{user.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {roleLabel[user.role] ?? user.role}
                </div>
              </div>
              <a
                href="/crm/auth/logout"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
              >
                Sign out
              </a>
            </>
          ) : (
            <a
              href="/crm/auth/login"
              style={{
                color: '#1b1a1e',
                background: '#c8a96a',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 600,
              }}
            >
              Sign in
            </a>
          )}
        </div>
      </div>
    </header>

    {/* ── Training Mode strip (auto when count(real_quotes) = 0) ───── */}
    {trainingMode && (
      <div
        style={{
          background: '#f5f3ef',
          borderBottom: '1px solid #e3dfd8',
          color: '#1b1a1e',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '10px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '13px',
          }}
        >
          <span
            style={{
              background: '#c8a96a',
              color: '#1b1a1e',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Training Mode
          </span>
          <span style={{ color: '#7c7a78' }}>
            Sample data is shown so you can learn the system. Real quotes you create will appear immediately. Sample data can be cleared from{' '}
            <a href="/crm/settings/lookups" style={{ color: '#1b1a1e', textDecoration: 'underline' }}>Settings</a> when you're ready to go live.
          </span>
        </div>
      </div>
    )}
  </>
)
