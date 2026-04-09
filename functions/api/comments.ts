async function ensureCommentsTable(db: any) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL,
        author TEXT NOT NULL,
        email TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'pending'
      )`
    )
    .run();

  await db
    .prepare('CREATE INDEX IF NOT EXISTS idx_slug ON comments(slug)')
    .run();
}

function slugFromReferer(request: Request) {
  const referer = request.headers.get('referer');
  if (!referer) return '';

  try {
    const refererUrl = new URL(referer);
    const pathname = refererUrl.pathname;
    const blogMatch = pathname.match(/^\/blog\/(.+?)\/?$/);

    if (blogMatch) {
      return decodeURIComponent(blogMatch[1]);
    }

    const normalized = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, '');
    if (!normalized) return 'home';

    return normalized;
  } catch {
    return '';
  }
}

export async function onRequestPost(context: any) {
  const db = context.env.DB;

  if (!db) {
    return new Response(
      JSON.stringify({ error: 'Database binding DB is missing in runtime environment' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  await ensureCommentsTable(db);

  let payload: any = {};
  const contentType = context.request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      payload = await context.request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await context.request.formData();
      payload = {
        slug: formData.get('slug'),
        author: formData.get('author'),
        email: formData.get('email'),
        content: formData.get('content')
      };
    }
  } catch {
    payload = {};
  }

  const slug = String(payload?.slug || slugFromReferer(context.request)).trim();
  const author = String(payload?.author || '').trim();
  const email = String(payload?.email || '').trim();
  const content = String(payload?.content || '').trim();

  // Validate input
  if (!slug || !author || !email || !content) {
    const missingFields = [
      !slug ? 'slug' : null,
      !author ? 'author' : null,
      !email ? 'email' : null,
      !content ? 'content' : null
    ].filter(Boolean).join(', ');

    return new Response(
      JSON.stringify({ error: `Missing required fields: ${missingFields}` }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Invalid email format' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Validate content length
  if (content.length < 3 || content.length > 5000) {
    return new Response(
      JSON.stringify({ error: 'Comment must be between 3 and 5000 characters' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const result = await db
      .prepare(
        'INSERT INTO comments (slug, author, email, content) VALUES (?, ?, ?, ?)'
      )
      .bind(slug, author, email, content)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        id: result.meta.last_row_id,
        message: 'Comment submitted! It will appear after moderation.'
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('Error inserting comment:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to save comment. Please try again.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

export async function onRequestGet(context: any) {
  const db = context.env.DB;

  if (!db) {
    return new Response(
      JSON.stringify({ error: 'Database binding DB is missing in runtime environment' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  await ensureCommentsTable(db);

  const url = new URL(context.request.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return new Response(
      JSON.stringify({ error: 'slug parameter is required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const result = await db
      .prepare(
        `SELECT author, content, created_at FROM comments 
         WHERE slug = ? AND status = 'approved' 
         ORDER BY created_at DESC 
         LIMIT 100`
      )
      .bind(slug)
      .all();

    return new Response(
      JSON.stringify(result.results || []),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60' // Cache for 1 minute
        }
      }
    );
  } catch (error: any) {
    console.error('Error fetching comments:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to load comments' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Optional: GET /api/comments/stats?slug=xxx (view comment count)
export async function onRequestOptions(context: any) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
