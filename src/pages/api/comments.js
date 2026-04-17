import sql, { hasDatabaseUrl } from '../../lib/db.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

let schemaReadyPromise;

const REACTION_COLUMN_MAP = {
  like: 'reactions_like',
  love: 'reactions_love',
  haha: 'reactions_haha'
};

function ensureCommentsSchema() {
  if (!hasDatabaseUrl || !sql) {
    throw new Error('DATABASE_URL is missing. Please set DATABASE_URL in your environment.');
  }

  if (!schemaReadyPromise) {
    // Tách riêng 2 lệnh SQL ra để chiều lòng thằng Postgres
    schemaReadyPromise = (async () => {
      // 1. Lệnh tạo bảng
      await sql`
        CREATE TABLE IF NOT EXISTS comments (
          id BIGSERIAL PRIMARY KEY,
          slug TEXT NOT NULL,
          author TEXT NOT NULL,
          email TEXT NOT NULL,
          content TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'pending',
          parent_id BIGINT DEFAULT NULL,
          reactions_like INTEGER NOT NULL DEFAULT 0,
          reactions_love INTEGER NOT NULL DEFAULT 0,
          reactions_haha INTEGER NOT NULL DEFAULT 0,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `;

      // Ensure columns exist for old tables
      await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_like INTEGER NOT NULL DEFAULT 0;`;
      await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_love INTEGER NOT NULL DEFAULT 0;`;
      await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS reactions_haha INTEGER NOT NULL DEFAULT 0;`;
      await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS parent_id BIGINT DEFAULT NULL;`;

      // 2. Lệnh tạo Index
      await sql`
        CREATE INDEX IF NOT EXISTS idx_comments_slug_status_created_at
        ON comments (slug, status, created_at DESC);
      `;
    })();
  }

  return schemaReadyPromise;
}

export async function GET({ request }) {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug')?.trim();

  if (!hasDatabaseUrl) {
    return json({ error: 'DATABASE_URL is missing. Please set DATABASE_URL in your environment.' }, 503);
  }

  if (!slug) {
    return json({ error: 'Missing required query parameter: slug' }, 400);
  }

  try {
    await ensureCommentsSchema();

    const comments = await sql`
      SELECT id, slug, author, content, created_at, parent_id, reactions_like, reactions_love, reactions_haha
      FROM comments 
      WHERE slug = ${slug} AND status = 'approved'
      ORDER BY created_at ASC
    `;

    return json(comments);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}

export async function POST({ request }) {
  if (!hasDatabaseUrl) {
    return json({ error: 'DATABASE_URL is missing. Please set DATABASE_URL in your environment.' }, 503);
  }

  try {
    await ensureCommentsSchema();

    const payload = await request.json();
    const slug = String(payload?.slug || '').trim();
    const author = String(payload?.author || '').trim();
    const email = String(payload?.email || '').trim();
    const content = String(payload?.content || '').trim();
    const parentId = payload?.parent_id ? Number(payload.parent_id) : null;

    if (!slug || !author || !email || !content) {
      return json({ error: 'slug, author, email, content are required' }, 400);
    }

    if (author.length > 120 || email.length > 255 || content.length > 5000 || slug.length > 255) {
      return json({ error: 'Input too long' }, 400);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return json({ error: 'Invalid email format' }, 400);
    }

    await sql`
      INSERT INTO comments (slug, author, email, content, status, parent_id)
      VALUES (${slug}, ${author}, ${email}, ${content}, 'pending', ${parentId})
    `;

    return json({ success: true, message: 'Comment submitted and awaiting moderation.' }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}

export async function PATCH({ request }) {
  if (!hasDatabaseUrl) {
    return json({ error: 'DATABASE_URL is missing. Please set DATABASE_URL in your environment.' }, 503);
  }

  try {
    await ensureCommentsSchema();

    const payload = await request.json();
    const commentId = Number(payload?.commentId);
    const reaction = String(payload?.reaction || '').trim().toLowerCase();
    const reactionColumn = REACTION_COLUMN_MAP[reaction];

    if (!Number.isInteger(commentId) || commentId <= 0) {
      return json({ error: 'Invalid commentId' }, 400);
    }

    if (!reactionColumn) {
      return json({ error: 'Invalid reaction. Allowed: like, love, haha' }, 400);
    }

    const updated = await sql`
      UPDATE comments
      SET ${sql(reactionColumn)} = ${sql(reactionColumn)} + 1
      WHERE id = ${commentId}
      RETURNING id, reactions_like, reactions_love, reactions_haha
    `;

    if (updated.length === 0) {
      return json({ error: 'Comment not found' }, 404);
    }

    return json({ success: true, comment: updated[0] });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}