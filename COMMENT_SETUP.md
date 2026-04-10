# Comment Backend Migration Note

Cloudflare D1/Pages Functions comment backend has been removed from this project.
The project now includes a Postgres-powered Astro API at `src/pages/api/comments.js`.

## Current status

- Frontend comment UI is still present on blog posts.
- Existing Cloudflare comment APIs are removed.
- Built-in Astro API supports `GET /api/comments` and `POST /api/comments` with Postgres.
- `PUBLIC_COMMENTS_API_BASE_URL` is optional:
  - Not set: frontend calls same-origin `/api/comments`.
  - Set: frontend calls external API base URL.

## API contract

Built-in endpoint behavior:

- `GET /api/comments?slug=post-slug`
  - Return approved comments only
  - JSON array shape: `[{ id, slug, author, content, created_at }]`
- `POST /api/comments`
  - Accept JSON body: `{ slug, author, email, content }`
  - Inserts a new row with `status = pending`
  - Return JSON success/error

On startup, API creates this table if it does not exist:

```sql
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  author TEXT NOT NULL,
  email TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## Environment variables

Required for API runtime:

```bash
DATABASE_URL=postgres://user:password@host:5432/db_name
```

Optional for frontend:

```bash
PUBLIC_COMMENTS_API_BASE_URL=https://your-api.example.com npm run build
```

If `PUBLIC_COMMENTS_API_BASE_URL` is not set, frontend uses same-origin `/api/comments`.

## VPS deploy

Dockerfile now runs Astro SSR Node server, so built-in API routes are served in production.

Required runtime env on VPS/container:

```bash
DATABASE_URL=postgres://user:password@host:5432/db_name
PORT=8788
```

Container serves app on port `8788`.
