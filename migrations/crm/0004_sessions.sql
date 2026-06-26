-- ============================================================================
-- CoSai. × YBMT — CRM Schema Migration · 0004 · Sessions table
-- ----------------------------------------------------------------------------
-- Server-side session store (opaque tokens, not JWTs).
--
-- Rationale:
--   - Instant revocation: setting active=0 or deleting the row logs the user out.
--   - Password change invalidates all sessions for that user (DELETE WHERE user_id=...).
--   - No secret material distributed to clients; the cookie is just a random token.
--   - Cloudflare D1 cost is trivial — sessions table stays small (5 users × few devices).
--
-- The cookie carries a 256-bit base64url-encoded random token (44 chars).
-- The token_hash column stores its SHA-256 so that even DB read-only access
-- to this table cannot impersonate a user.
-- ============================================================================

CREATE TABLE IF NOT EXISTS sessions (
  id           TEXT PRIMARY KEY,                 -- opaque random ID (also stored in cookie)
  token_hash   TEXT NOT NULL,                    -- SHA-256(id) — defence in depth
  user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_agent   TEXT,                             -- forensic — captured at create time
  ip_address   TEXT,                             -- forensic — first-seen IP
  created_at   TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  expires_at   TEXT NOT NULL,                    -- ISO 8601 UTC; checked on every request
  last_seen_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE INDEX IF NOT EXISTS idx_sessions_user    ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

INSERT OR IGNORE INTO schema_migrations (version, name) VALUES (4, '0004_sessions');
