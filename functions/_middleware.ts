// Middleware for Pages Functions routing
export async function onRequest(context: any) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // If it's an API request, let it pass through to the actual handler
  if (url.pathname.startsWith('/api/')) {
    return next();
  }
  
  return next();
}
