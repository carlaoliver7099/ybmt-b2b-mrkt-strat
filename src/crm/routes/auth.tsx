/**
 * CoSai. × YBMT — Auth Routes
 * ---------------------------------------------------------------------------
 *   GET  /crm/auth/login            — login form
 *   POST /crm/auth/login            — process credentials
 *   GET  /crm/auth/logout           — destroy session + clear cookie
 *   GET  /crm/auth/change-password  — change-password form (required on first login)
 *   POST /crm/auth/change-password  — process new password
 *
 * Security notes:
 *   - Email lookup AND password verify always run, even on misses, so the
 *     timing channel does not leak which emails exist.
 *   - The error message on failed login is intentionally vague.
 *   - Cookie is HttpOnly, SameSite=Lax (allows top-level GET nav back from links),
 *     Secure when behind HTTPS, Path=/crm so it doesn't leak to the main intranet.
 *   - Forms POST to the same path they GET from → simple, CSRF-safe under
 *     SameSite=Lax + same-origin form.
 */

import { Hono } from 'hono'
import { setCookie, deleteCookie, getCookie } from 'hono/cookie'
import { PageShell } from '../components/page-shell'
import { Wordmark } from '../components/wordmark'
import {
  SESSION_COOKIE,
  SESSION_TTL_MS,
  getUserByEmail,
  verifyPassword,
  DECOY_HASH,
  createSession,
  deleteSession,
  changePassword,
  checkPasswordPolicy,
} from '../lib/auth'
import { requireAuth, type AuthContext } from '../lib/middleware'

export const auth = new Hono<AuthContext>()

// ── Helpers ──────────────────────────────────────────────────────────────

/** Validate that a ?next= value points only back into /crm/ (no open redirect). */
const sanitizeNext = (raw: string | undefined | null): string => {
  if (!raw) return '/crm/dashboard'
  try {
    // Strip protocol-relative + absolute URLs
    if (raw.startsWith('//') || raw.includes('://')) return '/crm/dashboard'
    if (!raw.startsWith('/crm/')) return '/crm/dashboard'
    // Avoid sending them back to auth pages (would loop)
    if (raw.startsWith('/crm/auth/')) return '/crm/dashboard'
    // Cap length
    if (raw.length > 256) return '/crm/dashboard'
    return raw
  } catch {
    return '/crm/dashboard'
  }
}

const isHttps = (urlStr: string): boolean => {
  try { return new URL(urlStr).protocol === 'https:' } catch { return false }
}

const setSessionCookie = (c: any, sessionId: string) => {
  setCookie(c, SESSION_COOKIE, sessionId, {
    path: '/crm',                                      // scoped to the CRM only
    httpOnly: true,                                    // no JS access
    sameSite: 'Lax',                                   // CSRF defence; allows top-level nav
    secure: isHttps(c.req.url),                        // HTTPS only in prod
    maxAge: Math.floor(SESSION_TTL_MS / 1000),         // matches DB expires_at
  })
}

// ── GET /login ───────────────────────────────────────────────────────────

auth.get('/login', (c) => {
  // If already signed in, bounce straight to the dashboard
  const cookie = getCookie(c, SESSION_COOKIE)
  if (cookie) {
    // Don't block on session validation — just go to dashboard; the dashboard's
    // requireAuth will redirect back if the cookie is stale.
    return c.redirect('/crm/dashboard', 302)
  }
  const next = sanitizeNext(c.req.query('next'))
  const error = c.req.query('error') === '1'
  return c.html(<LoginPage next={next} error={error} />)
})

// ── POST /login ──────────────────────────────────────────────────────────

auth.post('/login', async (c) => {
  const form = await c.req.parseBody()
  const email = String(form['email'] ?? '').trim()
  const password = String(form['password'] ?? '')
  const nextRaw = String(form['next'] ?? '')
  const next = sanitizeNext(nextRaw)

  if (!email || !password) {
    return c.html(<LoginPage next={next} error={true} email={email} />, 400)
  }

  // Always run a bcrypt compare to keep timing constant whether the email
  // existed or not.
  const user = await getUserByEmail(c.env.DB, email)
  const ok = user
    ? await verifyPassword(password, user.password_hash)
    : (await verifyPassword(password, DECOY_HASH), false)

  if (!user || !ok) {
    return c.html(<LoginPage next={next} error={true} email={email} />, 401)
  }

  // Issue session
  const sid = await createSession(c.env.DB, user.id, {
    userAgent: c.req.header('User-Agent') ?? undefined,
    ipAddress: c.req.header('CF-Connecting-IP')
      ?? c.req.header('X-Forwarded-For')?.split(',')[0].trim()
      ?? undefined,
  })
  setSessionCookie(c, sid)

  // If they need to change their password, force that first (the middleware
  // will redirect from `next` anyway, but going there directly is cleaner UX).
  if (user.must_change_password === 1) {
    return c.redirect('/crm/auth/change-password', 302)
  }
  return c.redirect(next, 302)
})

// ── GET /logout ──────────────────────────────────────────────────────────

auth.get('/logout', async (c) => {
  const cookie = getCookie(c, SESSION_COOKIE)
  if (cookie) {
    try { await deleteSession(c.env.DB, cookie) } catch { /* ignore */ }
  }
  deleteCookie(c, SESSION_COOKIE, { path: '/crm' })
  return c.redirect('/crm/auth/login', 302)
})

// ── Change password (must be authenticated) ──────────────────────────────

auth.get('/change-password', requireAuth(), (c) => {
  const user = c.get('user')
  const forced = user.must_change_password === 1
  return c.html(<ChangePasswordPage userName={user.name} userRole={user.role} forced={forced} />)
})

auth.post('/change-password', requireAuth(), async (c) => {
  const user = c.get('user')
  const form = await c.req.parseBody()
  const current = String(form['current_password'] ?? '')
  const newPw = String(form['new_password'] ?? '')
  const confirm = String(form['confirm_password'] ?? '')

  // 1. Confirm match
  if (newPw !== confirm) {
    return c.html(
      <ChangePasswordPage
        userName={user.name}
        userRole={user.role}
        forced={user.must_change_password === 1}
        error="The two new passwords don't match."
      />,
      400,
    )
  }

  // 2. Policy check
  const policy = checkPasswordPolicy(newPw, { email: user.email, name: user.name })
  if (!policy.ok) {
    return c.html(
      <ChangePasswordPage
        userName={user.name}
        userRole={user.role}
        forced={user.must_change_password === 1}
        error={policy.reason!}
      />,
      400,
    )
  }

  // 3. Verify current password against DB (re-read to get password_hash)
  const fresh = await getUserByEmail(c.env.DB, user.email)
  if (!fresh) {
    // User was deactivated since cookie was issued
    deleteCookie(c, SESSION_COOKIE, { path: '/crm' })
    return c.redirect('/crm/auth/login', 302)
  }
  const currentOk = await verifyPassword(current, fresh.password_hash)
  if (!currentOk) {
    return c.html(
      <ChangePasswordPage
        userName={user.name}
        userRole={user.role}
        forced={user.must_change_password === 1}
        error="Your current password is incorrect."
      />,
      400,
    )
  }

  // 4. Disallow re-using the same password
  const sameAsOld = await verifyPassword(newPw, fresh.password_hash)
  if (sameAsOld) {
    return c.html(
      <ChangePasswordPage
        userName={user.name}
        userRole={user.role}
        forced={user.must_change_password === 1}
        error="Your new password must be different from your current one."
      />,
      400,
    )
  }

  // 5. Commit: changePassword() also wipes all sessions for this user.
  await changePassword(c.env.DB, user.id, newPw)

  // 6. Issue a fresh session (so they don't get bounced to /login immediately)
  const sid = await createSession(c.env.DB, user.id, {
    userAgent: c.req.header('User-Agent') ?? undefined,
    ipAddress: c.req.header('CF-Connecting-IP') ?? undefined,
  })
  setSessionCookie(c, sid)

  return c.redirect('/crm/dashboard?pwchanged=1', 302)
})

// ── Pages (server-rendered) ──────────────────────────────────────────────

interface LoginPageProps {
  next: string
  error?: boolean
  email?: string
}

const LoginPage = ({ next, error = false, email = '' }: LoginPageProps) => (
  <PageShell title="Sign in" active={null} user={null} trainingMode={false}>
    <div style={{ maxWidth: '420px', margin: '64px auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Wordmark jv size="lg" />
        <p style={{ marginTop: '16px', color: 'var(--muted-stone)', fontSize: '14px' }}>
          Quote CRM · sign in to continue
        </p>
      </div>

      <div class="card">
        {error && (
          <div
            role="alert"
            style={{
              background: 'rgba(168,69,60,0.08)',
              border: '1px solid rgba(168,69,60,0.3)',
              color: 'var(--danger-terracotta)',
              padding: '12px 14px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '13px',
            }}
          >
            Email or password is incorrect.
          </div>
        )}

        <form method="post" action="/crm/auth/login" autocomplete="on" noValidate>
          <input type="hidden" name="next" value={next} />

          <div style={{ marginBottom: '16px' }}>
            <label class="label" for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              class="input"
              required
              autofocus={!email}
              autocomplete="username"
              value={email}
              placeholder="you@cosai.com.au"
              aria-invalid={error ? 'true' : 'false'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label class="label" for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              class="input"
              required
              autofocus={!!email}
              autocomplete="current-password"
              aria-invalid={error ? 'true' : 'false'}
            />
          </div>

          <button type="submit" class="btn btn-primary" style={{ width: '100%' }}>
            Sign in
          </button>
        </form>
      </div>

      <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: 'var(--muted-stone)' }}>
        Trouble signing in? Contact your administrator.
        {' · '}
        <a href="/crm/help" style={{ color: 'var(--muted-stone)', textDecoration: 'underline' }}>
          First time here?
        </a>
      </p>
    </div>
  </PageShell>
)

interface ChangePasswordPageProps {
  userName: string
  userRole: string
  forced: boolean
  error?: string
}

const ChangePasswordPage = ({ userName, userRole, forced, error }: ChangePasswordPageProps) => (
  <PageShell
    title={forced ? 'Set your password' : 'Change password'}
    active={null}
    user={forced ? null : { name: userName, role: userRole }}
    trainingMode={false}
  >
    <div style={{ maxWidth: '480px', margin: '48px auto', padding: '0 24px' }}>
      {forced && (
        <div
          style={{
            background: 'rgba(200,169,106,0.12)',
            border: '1px solid rgba(200,169,106,0.45)',
            borderRadius: '8px',
            padding: '14px 16px',
            marginBottom: '24px',
            fontSize: '13px',
            color: 'var(--ink-charcoal)',
          }}
        >
          <strong>First sign-in</strong> · You're using the shared bootstrap password.
          Please set your own password before continuing.
        </div>
      )}

      <div class="card">
        <h1 style={{ marginBottom: '8px' }}>
          {forced ? 'Set your password' : 'Change password'}
        </h1>
        <p style={{ color: 'var(--muted-stone)', marginBottom: '24px', fontSize: '13px' }}>
          Signed in as <strong>{userName}</strong>
        </p>

        {error && (
          <div
            role="alert"
            style={{
              background: 'rgba(168,69,60,0.08)',
              border: '1px solid rgba(168,69,60,0.3)',
              color: 'var(--danger-terracotta)',
              padding: '12px 14px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '13px',
            }}
          >
            {error}
          </div>
        )}

        <form method="post" action="/crm/auth/change-password" autocomplete="on" noValidate>
          <div style={{ marginBottom: '16px' }}>
            <label class="label" for="current_password">Current password</label>
            <input
              id="current_password"
              name="current_password"
              type="password"
              class="input"
              required
              autocomplete="current-password"
              autofocus
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label class="label" for="new_password">New password</label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              class="input"
              required
              minLength={10}
              maxLength={128}
              autocomplete="new-password"
            />
            <span class="help">
              At least 10 characters · must include a letter and a digit or symbol.
            </span>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label class="label" for="confirm_password">Confirm new password</label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              class="input"
              required
              minLength={10}
              maxLength={128}
              autocomplete="new-password"
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit" class="btn btn-primary" style={{ flex: 1 }}>
              {forced ? 'Set password & continue' : 'Update password'}
            </button>
            {!forced && (
              <a href="/crm/dashboard" class="btn btn-ghost">Cancel</a>
            )}
          </div>
        </form>
      </div>
    </div>
  </PageShell>
)
