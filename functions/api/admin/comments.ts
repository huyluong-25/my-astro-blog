// Admin endpoint for managing comments
// Email header required for verification

function verifyAdmin(request: any, adminPassword: string) {
  const authHeader = request.headers.get('Authorization')?.split(' ')[1];
  return authHeader === adminPassword;
}

export async function onRequestGet(context: any) {
  const adminPassword = context.env.ADMIN_PASSWORD || 'admin123';
  
  if (!verifyAdmin(context.request, adminPassword)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const db = context.env.DB;
  
  if (!db) {
    console.error('DB binding not found in context.env');
    return new Response(
      JSON.stringify({ error: 'Database binding error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  const url = new URL(context.request.url);
  const status = url.searchParams.get('status') || 'pending';

  try {
    const comments = await db
      .prepare(
        `SELECT id, slug, author, email, content, created_at, status 
         FROM comments 
         WHERE status = ? 
         ORDER BY created_at DESC 
         LIMIT 100`
      )
      .bind(status)
      .all();

    return new Response(
      JSON.stringify(comments.results || []),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('Error fetching comments:', error.message, error.stack);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function onRequestPatch(context: any) {
  const adminPassword = context.env.ADMIN_PASSWORD || 'admin123';
  
  if (!verifyAdmin(context.request, adminPassword)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const db = context.env.DB;
  const { id, status } = await context.request.json();

  if (!id || !['approved', 'rejected'].includes(status)) {
    return new Response(
      JSON.stringify({ error: 'Invalid id or status' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    await db
      .prepare('UPDATE comments SET status = ? WHERE id = ?')
      .bind(status, id)
      .run();

    return new Response(
      JSON.stringify({ success: true, message: `Comment ${status}` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error updating comment:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function onRequestDelete(context: any) {
  const adminPassword = context.env.ADMIN_PASSWORD || 'admin123';
  
  if (!verifyAdmin(context.request, adminPassword)) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const db = context.env.DB;
  const { id } = await context.request.json();

  if (!id) {
    return new Response(
      JSON.stringify({ error: 'id required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    await db
      .prepare('DELETE FROM comments WHERE id = ?')
      .bind(id)
      .run();

    return new Response(
      JSON.stringify({ success: true, message: 'Comment deleted' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error deleting comment:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
