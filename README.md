# CodeWithAbhilash — Virtual Classes Website

Fully static, SEO-optimized Next.js 14 App Router website for virtual programming classes.

## Tech Stack

- Next.js 16 (App Router) with static export (`output: 'export'`)
- TypeScript
- Tailwind CSS v3
- Lucide React icons
- JSON config-driven content

## Setup

```bash
npm install
npm run dev
```

## Build Static Site

```bash
npm run build
```

Static files are generated in `out/`.

## Config-Driven Content

All editable content is in `/config`:

- `site.json` — site name, contacts, social links, GA4 ID, WhatsApp number
- `courses.json` — course details and course-level SEO
- `testimonials.json` — testimonials on homepage
- `faqs.json` — FAQ accordion and FAQ JSON-LD
- `seo.json` — page-level SEO metadata

## SEO Features Included

- Next Metadata API with per-page title/description/keywords
- Open Graph + Twitter cards
- Canonical URLs
- JSON-LD: Organization, WebSite/SearchAction, FAQPage, Person, Course
- Static `public/sitemap.xml`
- Static `public/robots.txt`
- Semantic HTML structure and heading hierarchy

## Formspree Setup

1. Create a Formspree form.
2. Copy your endpoint (e.g., `https://formspree.io/f/abc123xy`).
3. Update `formspreeEndpoint` in `/config/site.json`.

## GA4 Setup

1. Create a GA4 property in Google Analytics.
2. Copy the Measurement ID (`G-XXXXXXXXXX`).
3. Update `ga4MeasurementId` in `/config/site.json`.

## WhatsApp Setup

Update `whatsapp` in `/config/site.json` with country code and number (no `+`).
The committed value is a placeholder and must be replaced before production deployment.

## Deployment

### Vercel

1. Import this repo in Vercel.
2. Keep default build command (`next build`).
3. Deploy.

### Netlify

- Build command: `npm run build`
- Publish directory: `out`

### GitHub Pages

Deploy the generated `out` folder using your preferred workflow.

## Lint

```bash
npm run lint
```
