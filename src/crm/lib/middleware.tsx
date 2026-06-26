/**
 * CoSai. × YBMT — Auth Middleware
 * ---------------------------------------------------------------------------
 * Two middlewares that wrap CRM routes:
 *
 *   requireAuth()
 *     - Reads the session cookie
 *     - Looks up the session row in D1 (validates expiry + active user)
 *     - If valid: stashes `user` in c.var and continues
 *     - If invalid: redirects to /crm/auth/login?next=<original-url>
 *     - Special case: if `user.must_change_password === 1` AND the route is
 *       not /crm/auth/change-password or /crm/auth/logout, redirect to
 *       /crm/auth/change-password
 *
 *   requireRole(...roles)
 *     - Must be chained AFTER requireAuth() (Hono runs middlewares in order)
 *     - If user.role is in the allowed list: continue
 *     - Otherwise: return 403 with a branded page (NOT a redirect — the user
 *       is logged in, they just can't see this thing)
 *
 * Why a 403 page instead of a redirect on role mismatch:
 *   - Redirect loops on misconfigured links → bad UX
 *   - Clear signal to the user about *why* they can't see something
 *   - Easier to spot in logs (403 vs unauthenticated 302)
 */

import type { MiddlewareHandler } from 'hono'
import { getCookie } from 'hono/cookie'
import { SESSION_COOKIE, getSession, type AuthUser, type Role } from './auth'
import { PageShell } from '../components/page-shell'

// Hono context variable shape — `c.var.user` is populated by requireAuth.
export type AuthContext = {
  Bindings: { DB: D1Database }
  Variables: { user: AuthUser }
}

// ── requireAuth ──────────────────────────────────────────────────────────

export const requireAuth = (): MiddlewareHandler<AuthContext> => {
  return async (c, next) => {
    const cookie = getCookie(c, SESSION_COOKIE) ?? null
    const result = await getSession(c.env.DB, cookie)

    if (!result) {
      // Build a relative redirect with ?next= so we come back here post-login.
      const url = new URL(c.req.url)
      const nextParam = encodeURIComponent(url.pathname + url.search)
      return c.redirect(`/crm/auth/login?next=${nextParam}`, 302)
    }

    const { user } = result

    // Force password change if flagged — unless they're already on a path that
    // allows them to do so (or logging out).
    if (user.must_change_password === 1) {
      const path = new URL(c.req.url).pathname
      const allowed = path === '/crm/auth/change-password' || path === '/crm/auth/logout'
      if (!allowed) {
        return c.redirect('/crm/auth/change-password', 302)
      }
    }

    c.set('user', user)
    await next()
  }
}

// ── requireRole ──────────────────────────────────────────────────────────

export const requireRole = (...roles: Role[]): MiddlewareHandler<AuthContext> => {
  return async (c, next) => {
    const user = c.get('user') as AuthUser | undefined
    if (!user) {
      // Defensive — requireAuth() should have run first.
      return c.redirect('/crm/auth/login', 302)
    }
    if (!roles.includes(user.role)) {
      return c.html(<ForbiddenPage user={user} requiredRoles={roles} />, 403)
    }
    await next()
  }
}

// ── 403 page ─────────────────────────────────────────────────────────────

const roleLabel: Record<string, string> = {
  cosai_admin:     'CoSai Admin',
  sinbau_ceo:      'Sinbau CEO',
  estimator:       'Estimator',
  project_manager: 'Project Manager',
}

const ForbiddenPage = ({ user, requiredRoles }: { user: AuthUser; requiredRoles: Role[] }) => (
  <PageShell title="403 · Forbidden" active={null} user={{ name: user.name, role: user.role }} trainingMode={false}>
    <div class="page" style={{ maxWidth: '640px', textAlign: 'center', paddingTop: '80px' }}>
      <span class="caption" style={{ color: 'var(--danger-terracotta)' }}>403 · Forbidden</span>
      <h1 style={{ marginTop: '8px', fontSize: '32px' }}>You don't have access to this page</h1>
      <p style={{ color: 'var(--muted-stone)', marginTop: '16px', lineHeight: 1.6 }}>
        You're signed in as <strong>{user.name}</strong> ({roleLabel[user.role] ?? user.role}).
        This page is reserved for: <strong>{requiredRoles.map(r => roleLabel[r] ?? r).join(' · ')}</strong>.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
        <a href="/crm/dashboard" class="btn btn-primary">Back to dashboard</a>
        <a href="/crm/auth/logout" class="btn btn-secondary">Sign out</a>
      </div>
    </div>
  </PageShell>
)
