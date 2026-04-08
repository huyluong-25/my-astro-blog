export async function onRequestPost(context: any) {
  const db = context.env.DB;
  const { slug, author, email, content } = await context.request.json();

  // Validate input
  if (!slug || !author || !email || !content) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields: slug, author, email, content' }),
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
  if (content.trim().length < 3 || content.trim().length > 5000) {
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
      .bind(slug, author, email, content.trim())
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
