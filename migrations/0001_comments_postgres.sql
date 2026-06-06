CREATE TABLE IF NOT EXISTS comments (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  author TEXT NOT NULL,
  email TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  reactions_like INTEGER NOT NULL DEFAULT 0,
  reactions_love INTEGER NOT NULL DEFAULT 0,
  reactions_haha INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_like INTEGER NOT NULL DEFAULT 0;
ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_love INTEGER NOT NULL DEFAULT 0;
ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_haha INTEGER NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_comments_slug_status_created_at
ON comments (slug, status, created_at DESC);
