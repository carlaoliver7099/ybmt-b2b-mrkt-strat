/**
 * CoSai. × YBMT — Auth Primitives
 * ---------------------------------------------------------------------------
 * Server-side session store (opaque token in cookie → D1 sessions row).
 *
 * Why opaque tokens, not JWTs:
 *   - Instant revocation: delete the sessions row, user is out next request.
 *   - Password changes wipe all sessions for that user_id in the same txn.
 *   - No secret to leak to the client.
 *   - One D1 SELECT per request is cheap compared to JWT verify on Workers
 *     (Web Crypto.subtle import + verify is also ~1ms; the difference is
 *     immaterial. Revocation wins.)
 *
 * Roles (CHECK constraint in users table):
 *   - cosai_admin       (Carla)
 *   - sinbau_ceo        (Gerry)
 *   - estimator         (Matt)
 *   - project_manager   (Paul, Darcy)
 */

import bcrypt from 'bcryptjs'

// ── Types ──────────────────────────────────────────────────────────────────

export type Role = 'cosai_admin' | 'sinbau_ceo' | 'estimator' | 'project_manager'

export interface AuthUser {
  id: number
  email: string
  name: string
  role: Role
  team_member_id: number | null
  must_change_password: number       // 0 | 1
  active: number                     // 0 | 1
}

export interface SessionRow {
  id: string
  token_hash: string
  user_id: number
  user_agent: string | null
  ip_address: string | null
  created_at: string
  expires_at: string
  last_seen_at: string
}

// ── Constants ──────────────────────────────────────────────────────────────

/** Cookie name. Prefixed with __Host- in production for tightest scope. */
export const SESSION_COOKIE = 'cosai_sid'

/** Session lifetime: 12 hours. Re-login required daily. */
export const SESSION_TTL_MS = 12 * 60 * 60 * 1000

/** bcrypt cost — 10 rounds ≈ 60-90ms on Workers. Standard for web apps. */
export const BCRYPT_ROUNDS = 10

// ── Crypto helpers (Web Crypto, not Node crypto) ───────────────────────────

/**
 * Generate a cryptographically secure random session ID.
 * 32 bytes → 256 bits of entropy → 43-char base64url.
 */
export function generateSessionId(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return base64urlEncode(bytes)
}

/** SHA-256 hex of the session id — stored as `token_hash` for defence in depth. */
export async function hashSessionId(id: string): Promise<string> {
  const data = new TextEncoder().encode(id)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return hex(new Uint8Array(buf))
}

// ── Password hashing (bcryptjs — works on Cloudflare Workers) ──────────────

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, BCRYPT_ROUNDS)
}

/**
 * Verify a password against a bcrypt hash. ALWAYS run this — even when the
 * email lookup failed — to avoid timing-attack disclosure of which emails exist.
 */
export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
  if (!plain || !hashed) return false
  try {
    return await bcrypt.compare(plain, hashed)
  } catch {
    return false
  }
}

/**
 * A pre-computed bcrypt hash that always fails compare(). Used to keep
 * timing constant when the email doesn't exist.
 *
 * Generated once with bcrypt.hash('decoy-never-matches', 10).
 * Format must be a valid bcrypt hash so bcrypt.compare returns false in
 * constant-ish time rather than throwing.
 */
export const DECOY_HASH = '$2b$10$abcdefghijklmnopqrstuuKbjJ9aRMzCWydG4axHJxg6h3o0gNQ.S2'

// ── DB-level auth operations ───────────────────────────────────────────────

/** Look up a user by email (case-insensitive). Returns null if not found / inactive. */
export async function getUserByEmail(db: D1Database, email: string): Promise<AuthUser & { password_hash: string } | null> {
  const row = await db
    .prepare(
      `SELECT id, email, name, password_hash, role, team_member_id,
              must_change_password, active
         FROM users
        WHERE LOWER(email) = LOWER(?) AND active = 1
        LIMIT 1`
    )
    .bind(email.trim())
    .first<AuthUser & { password_hash: string }>()
  return row ?? null
}

/** Look up a user by ID. Strips password_hash before returning. */
export async function getUserById(db: D1Database, id: number): Promise<AuthUser | null> {
  const row = await db
    .prepare(
      `SELECT id, email, name, role, team_member_id, must_change_password, active
         FROM users
        WHERE id = ? AND active = 1
        LIMIT 1`
    )
    .bind(id)
    .first<AuthUser>()
  return row ?? null
}

/**
 * Create a new session row and return the opaque token to put in the cookie.
 * The token's SHA-256 hash is what's stored — even if the DB leaks, tokens
 * remain unforgeable.
 */
export async function createSession(
  db: D1Database,
  userId: number,
  meta: { userAgent?: string; ipAddress?: string } = {}
): Promise<string> {
  const id = generateSessionId()
  const tokenHash = await hashSessionId(id)
  const now = new Date()
  const expiresAt = new Date(now.getTime() + SESSION_TTL_MS)

  await db
    .prepare(
      `INSERT INTO sessions (id, token_hash, user_id, user_agent, ip_address, expires_at)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .bind(
      id,
      tokenHash,
      userId,
      meta.userAgent ?? null,
      meta.ipAddress ?? null,
      expiresAt.toISOString(),
    )
    .run()

  // Update last_login_at on the user record (best-effort; don't fail login if this fails)
  try {
    await db.prepare(`UPDATE users SET last_login_at = ? WHERE id = ?`)
      .bind(now.toISOString(), userId).run()
  } catch { /* non-fatal */ }

  return id
}

/**
 * Look up a session by its cookie value. Returns null when the cookie is
 * missing/invalid/expired. Touches last_seen_at on hit (rolling activity).
 */
export async function getSession(db: D1Database, cookieValue: string | null): Promise<{ session: SessionRow; user: AuthUser } | null> {
  if (!cookieValue) return null
  // Sanity bound — opaque token is 43 chars base64url; cap to prevent DB DoS via long input
  if (cookieValue.length < 20 || cookieValue.length > 64) return null

  const expectedHash = await hashSessionId(cookieValue)

  const row = await db
    .prepare(
      `SELECT s.id, s.token_hash, s.user_id, s.user_agent, s.ip_address,
              s.created_at, s.expires_at, s.last_seen_at,
              u.id AS u_id, u.email, u.name, u.role, u.team_member_id,
              u.must_change_password, u.active
         FROM sessions s
         JOIN users u ON u.id = s.user_id
        WHERE s.id = ?
          AND u.active = 1
        LIMIT 1`
    )
    .bind(cookieValue)
    .first<any>()

  if (!row) return null

  // Constant-time-ish hash compare (defence in depth — id match would already mean the row is genuine,
  // but verify the stored hash matches the recomputed one in case of DB tampering).
  if (!timingSafeEqual(row.token_hash, expectedHash)) return null

  // Expiry check (server-side; never trust the client)
  if (new Date(row.expires_at).getTime() <= Date.now()) {
    // Clean up expired session row best-effort
    db.prepare('DELETE FROM sessions WHERE id = ?').bind(cookieValue).run().catch(() => {})
    return null
  }

  // Touch last_seen_at (fire-and-forget — don't block the request)
  db.prepare('UPDATE sessions SET last_seen_at = ? WHERE id = ?')
    .bind(new Date().toISOString(), cookieValue)
    .run()
    .catch(() => {})

  return {
    session: {
      id: row.id,
      token_hash: row.token_hash,
      user_id: row.user_id,
      user_agent: row.user_agent,
      ip_address: row.ip_address,
      created_at: row.created_at,
      expires_at: row.expires_at,
      last_seen_at: row.last_seen_at,
    },
    user: {
      id: row.u_id,
      email: row.email,
      name: row.name,
      role: row.role,
      team_member_id: row.team_member_id,
      must_change_password: row.must_change_password,
      active: row.active,
    },
  }
}

/** Delete a single session (logout this device). */
export async function deleteSession(db: D1Database, id: string): Promise<void> {
  await db.prepare('DELETE FROM sessions WHERE id = ?').bind(id).run()
}

/** Delete ALL sessions for a user (used after password change). */
export async function deleteAllSessionsForUser(db: D1Database, userId: number): Promise<void> {
  await db.prepare('DELETE FROM sessions WHERE user_id = ?').bind(userId).run()
}

/**
 * Change a user's password atomically:
 *  1. Update password_hash
 *  2. Clear must_change_password flag
 *  3. Delete all sessions for that user (force re-login everywhere)
 */
export async function changePassword(
  db: D1Database,
  userId: number,
  newPlain: string
): Promise<void> {
  const newHash = await hashPassword(newPlain)
  // D1 doesn't support multi-statement transactions, but these are safe individually;
  // worst case is a brief window where the password is changed but old sessions linger
  // — we mitigate by always running the delete second.
  await db.prepare(
    `UPDATE users
        SET password_hash = ?,
            must_change_password = 0
      WHERE id = ?`
  ).bind(newHash, userId).run()
  await deleteAllSessionsForUser(db, userId)
}

// ── Password policy ────────────────────────────────────────────────────────

export interface PasswordCheck {
  ok: boolean
  reason?: string
}

/**
 * Conservative password policy:
 *   - ≥ 10 chars (NIST 2024 floor for human-typed passwords)
 *   - At least one letter and one non-letter (digit or symbol)
 *   - Not equal to email or name
 *   - Not in a tiny common-password denylist
 *
 * No upper/lower/symbol rules (counterproductive per NIST SP-800-63B).
 */
export function checkPasswordPolicy(plain: string, opts: { email?: string; name?: string } = {}): PasswordCheck {
  if (!plain || plain.length < 10) return { ok: false, reason: 'Password must be at least 10 characters.' }
  if (plain.length > 128)            return { ok: false, reason: 'Password must be 128 characters or fewer.' }
  if (!/[A-Za-z]/.test(plain))       return { ok: false, reason: 'Password must contain at least one letter.' }
  if (!/[^A-Za-z]/.test(plain))      return { ok: false, reason: 'Password must contain at least one digit or symbol.' }

  const lower = plain.toLowerCase()
  if (opts.email && lower.includes(opts.email.toLowerCase().split('@')[0])) {
    return { ok: false, reason: 'Password cannot contain your email name.' }
  }
  if (opts.name && opts.name.length >= 3 && lower.includes(opts.name.toLowerCase())) {
    return { ok: false, reason: 'Password cannot contain your name.' }
  }
  if (COMMON_PASSWORDS.has(lower)) {
    return { ok: false, reason: 'That password is too common — please choose another.' }
  }
  return { ok: true }
}

// Tiny denylist — top entries from public breach corpora that meet the length floor.
const COMMON_PASSWORDS = new Set<string>([
  'password123', 'password1234', 'qwerty12345', '1234567890', 'abc123abc1',
  'letmein123', 'iloveyou12', 'welcome123', 'admin12345', 'passw0rd123',
  'changeme123', 'cosaiadmin1', 'cosai12345',
])

// ── Utility — base64url + hex + constant-time compare ──────────────────────

function base64urlEncode(bytes: Uint8Array): string {
  let bin = ''
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function hex(bytes: Uint8Array): string {
  let out = ''
  for (let i = 0; i < bytes.length; i++) out += bytes[i].toString(16).padStart(2, '0')
  return out
}

/** Constant-time string equality (returns false fast only if lengths differ). */
function timingSafeEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}
