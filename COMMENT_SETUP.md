# Comment Backend Migration Note

Cloudflare D1/Pages Functions comment backend has been removed from this project.

## Current status

- Frontend comment UI is still present on blog posts.
- Existing Cloudflare comment APIs are removed.
- `PUBLIC_COMMENTS_API_BASE_URL` must be configured for your new backend.

## New backend integration contract

Your backend should provide:

- `GET /api/comments?slug=post-slug`
  - Return JSON array: `[{ author, content, created_at }]`
- `POST /api/comments`
  - Accept JSON body: `{ slug, author, email, content }`
  - Return JSON success/error

## Build with custom backend

```bash
PUBLIC_COMMENTS_API_BASE_URL=https://your-api.example.com npm run build
```

If not set, comment form is hidden and a configuration message is shown.

## VPS deploy

Use the static Docker + Nginx pipeline (`Jenkinsfile`) now included in this repo.
