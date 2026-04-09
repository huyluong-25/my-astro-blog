# 🚀 Comment System Setup Guide

## Quick Start

### Prerequisites
- Cloudflare Account
- Node.js >= 22.12.0
- Wrangler CLI

### Step-by-Step Setup

#### 1. Database Migration (Already Done!)
```bash
npx wrangler d1 execute huy-blog-comments --remote --file ./migrations/0001_init_comments.sql
```

#### 2. Local Development
```bash
npm run dev
# Visit: http://localhost:8788/blog/[post-slug]
# Admin: http://localhost:8788/admin
```

`npm run dev` uses `wrangler pages dev` so Cloudflare Functions (`/api/*`) and D1 bindings are available locally.
If you only want to preview Astro UI without API, run:

```bash
npm run dev:astro
```

Astro dev/preview is also pinned to `http://localhost:8788`.

#### 3. Deployment to Cloudflare

**First time deployment:**

```bash
# Build
npm run build

# Deploy
wrangler deploy
```

**Set Admin Password:**
```bash
# For production (Cloudflare)
wrangler secret put ADMIN_PASSWORD --env production

# Enter your secure password (NOT just "admin123"!)
```

---

## Admin Panel

**URL:** `https://yourdomain.com/admin`

**Features:**
- 🔐 Password protected
- ✅ Approve/Reject comments
- 🗑️ Delete comments
- 📊 Filter by status (pending, approved, rejected)

**Default dev password:** `admin123`

**⚠️ Important:** Change password in production!

---

## API Endpoints

### For Users (Public)
- `GET /api/comments?slug=post-slug` - Get approved comments
- `POST /api/comments` - Submit comment (requires: slug, author, email, content)

### For Admin (Protected)
- `GET /api/admin/comments?status=pending` - List comments
- `PATCH /api/admin/comments` - Approve/Reject (body: {id, status})
- `DELETE /api/admin/comments` - Delete comment (body: {id})

All admin endpoints require `Authorization: Bearer ADMIN_PASSWORD` header.

---

## Cloudflare D1 Database

**Database Name:** `huy-blog-comments`

**Table: comments**
```sql
- id: INTEGER (primary key, auto-increment)
- slug: TEXT (blog post slug)
- author: TEXT (commenter name)
- email: TEXT (commenter email)
- content: TEXT (comment text)
- created_at: DATETIME (auto timestamp)
- status: TEXT ('pending', 'approved', 'rejected')
```

**Query database:**
```bash
# List all pending comments
wrangler d1 execute huy-blog-comments --remote "SELECT * FROM comments WHERE status='pending'"

# Count by status
wrangler d1 execute huy-blog-comments --remote "SELECT status, COUNT(*) as count FROM comments GROUP BY status"
```

---

## Environment Variables

### Dev (.dev.vars)
```
ADMIN_PASSWORD=admin123
```

### Production (Cloudflare Secrets)
```bash
wrangler secret put ADMIN_PASSWORD --env production
```

### VPS/Nginx static deployment (important)

If you deploy `dist/` behind Nginx on VPS, set this environment variable for the container:

```bash
CF_API_ORIGIN=https://mechanical-main.pages.dev
```

Then Nginx will proxy all `/api/*` requests to Cloudflare Functions.

---

## Troubleshooting

### Comments not loading?
1. Check browser console (F12 > Console)
2. Verify `/api/comments` returns data
3. Check database:
```bash
wrangler d1 execute huy-blog-comments --remote "SELECT COUNT(*) FROM comments WHERE status='approved'"
```

### Admin page not working?
1. Verify password is correct
2. Check if endpoint returns 401 (wrong password)
3. Check Cloudflare Workers logs

### Deployment issues?
1. Ensure `wrangler.toml` has correct database_id
2. Run: `npx wrangler d1 list`
3. Check: `npm run build` succeeds

---

## Security Tips

✅ **DO:**
- Use strong password in production
- Store password in Cloudflare secrets (not code)
- Enable rate limiting on API
- Validate email addresses
- Escape HTML content (already done!)

❌ **DON'T:**
- Commit `.dev.vars` to git
- Use weak passwords
- Allow unmoderated user content
- Expose database credentials

---

## File Structure

```
mechanical-main/
├── functions/api/
│   ├── comments.ts (POST/GET for users)
│   └── admin/
│       └── comments.ts (PATCH/DELETE for admin)
├── migrations/
│   └── 0001_init_comments.sql
├── src/
│   ├── components/Comments.astro
│   ├── layouts/BlogPost.astro (updated)
│   └── pages/admin.astro (admin panel)
├── wrangler.toml (D1 config)
└── .dev.vars (local secrets)
```

---

## Next Steps

1. ✅ Deploy to production
2. 📝 Test comment submission
3. 🔐 Approve comments in admin
4. 📧 (Optional) Add email notifications
5. 🎨 (Optional) Customize styling

---

## Support

For issues:
- Check Wrangler docs: https://developers.cloudflare.com/workers/
- Check Astro docs: https://docs.astro.build/
- Check D1 docs: https://developers.cloudflare.com/d1/
