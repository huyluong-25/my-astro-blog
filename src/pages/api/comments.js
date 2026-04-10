import sql, { hasDatabaseUrl } from '../../lib/db.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

let schemaReadyPromise;

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
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `;

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
      SELECT id, slug, author, content, created_at
      FROM comments 
      WHERE slug = ${slug} AND status = 'approved'
      ORDER BY created_at DESC
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
      INSERT INTO comments (slug, author, email, content, status)
      VALUES (${slug}, ${author}, ${email}, ${content}, 'pending')
    `;

    return json({ success: true, message: 'Comment submitted and awaiting moderation.' }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}