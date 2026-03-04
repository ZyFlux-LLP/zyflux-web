# SEO Health Report — zyflux.com

**Audit Date:** March 3, 2026
**Site Type:** SaaS / Tech Agency
**Framework:** Next.js (App Router)
**CDN:** Cloudflare
**Pages Crawled:** 4 of 4 (/, /services, /about, /projects)

---

## Overall SEO Health Score: 43 / 100 — Needs Significant Work

| Severity | Count |
|----------|-------|
| 🔴 Critical | 5 |
| 🟡 High | 9 |
| 🔵 Medium | 7 |
| 🟢 Low | 4 |

---

## Category Scores

| Category | Weight | Score |
|----------|--------|-------|
| Technical SEO | 25% | 40/100 |
| Content Quality | 25% | 55/100 |
| On-Page SEO | 20% | 35/100 |
| Schema / Structured Data | 10% | 20/100 |
| Performance / CWV | 10% | 55/100 |
| Images | 5% | 65/100 |
| AI Search Readiness | 5% | 25/100 |

---

## Executive Summary

### Site at a Glance

| Check | Status | Detail |
|-------|--------|--------|
| HTTPS | ✅ Pass | Cloudflare CDN active |
| Mobile viewport | ✅ Pass | `width=device-width, initial-scale=1` |
| All images have alt text | ✅ Pass | 56/56 images pass |
| HTML lang attribute | ✅ Pass | `lang="en"` present |
| robots.txt | ⚠️ Warn | Exists but points to wrong domain (zyflux.in) |
| XML sitemap | ❌ Fail | /sitemap.xml returns 404 |
| Canonical tags | ❌ Fail | Missing on all 4 pages |
| Unique page titles | ❌ Fail | All pages share identical title |
| Unique meta descriptions | ❌ Fail | All pages share identical description |
| Schema accuracy | ❌ Fail | Organization URL/logo point to zyflux.in |
| site.webmanifest | ❌ Fail | 404 error on every page load |

### Top 5 Critical Issues

1. **No XML Sitemap at zyflux.com** — robots.txt references zyflux.in (unresolvable domain). Googlebot cannot discover pages automatically.
2. **Duplicate Page Titles Across All Pages** — Every page has "ZyFlux – Smart Tech & AI Solutions". Google can't distinguish pages — massive ranking loss.
3. **No Canonical Tags on Any Page** — Without canonicals, duplicate content dilutes ranking signals.
4. **Schema / OG Image Point to Broken Domain** — Organization schema URL and OG image both reference zyflux.in which does not resolve.
5. **Animated H1 Text Corrupts SEO Signal** — Rotating H1 renders as one long concatenated string in the DOM: "Revolutionizing…SMART TECHAI TechWeb Tech…Solutions".

### Top 5 Quick Wins

1. 🗺️ **Create sitemap.xml** — Next.js has built-in sitemap generation. Add `app/sitemap.ts` in 10 minutes.
2. 🏷️ **Add unique `<title>` per page** — Update Next.js metadata export on each page. Takes 30 minutes for all 4 pages.
3. 🔗 **Add canonical tags** — One line per layout: `alternates.canonical = 'https://zyflux.com/PAGE'`.
4. 🔧 **Fix robots.txt sitemap URL** — Change zyflux.in → zyflux.com. One-line edit.
5. 📦 **Fix Organization schema domain** — Replace all zyflux.in references in JSON-LD with zyflux.com. Takes 5 minutes.

---

## Technical SEO — Score: 40/100

### Crawlability & Indexability

| Check | Status | Detail |
|-------|--------|--------|
| robots.txt sitemap URL | ⚠️ Warn | `Sitemap: https://www.zyflux.in/sitemap.xml` — zyflux.in does not resolve |
| sitemap.xml at zyflux.com | ❌ Fail | Returns HTTP 404 |
| site.webmanifest | ❌ Fail | 404 console error on all pages |
| robots.txt allows crawlers | ✅ Pass | `User-agent: * Allow: /` |
| noindex meta tags | ✅ Pass | None detected — all pages indexable |

### Security & Infrastructure

| Check | Status | Detail |
|-------|--------|--------|
| HTTPS | ✅ Pass | Cloudflare CDN active |
| Next.js App Router | ✅ Pass | SSR-capable, good SEO foundation |
| Facebook Pixel (×2) | ⚠️ Warn | Two separate Pixel IDs — render-blocking, potential privacy issues |
| Calendly widget | ⚠️ Warn | Heavy external JS loaded on every page |

### robots.txt — Current vs. Recommended

**Current (broken):**
```
User-agent: *
Allow: /
Sitemap: https://www.zyflux.in/sitemap.xml   ← WRONG DOMAIN
```

**Recommended:**
```
User-agent: *
Allow: /
Sitemap: https://zyflux.com/sitemap.xml       ← Correct domain
```

### Next.js Sitemap Implementation

Create `app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zyflux.com',          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: 'https://zyflux.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://zyflux.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zyflux.com/about',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://zyflux.com/contact',  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
```

---

## On-Page SEO — Score: 35/100

### Per-Page Metadata Audit

| Page | Title | Meta Desc | Canonical | H1 | Status |
|------|-------|-----------|-----------|-----|--------|
| `/` | ✅ 56 chars | ⚠️ Generic | ❌ Missing | ⚠️ Animated/concat | Needs Work |
| `/services` | ❌ Duplicate | ❌ Duplicate | ❌ Missing | ⚠️ Animated/concat | Critical |
| `/projects` | ❌ Duplicate | ❌ Duplicate | ❌ Missing | — | Critical |
| `/about` | ❌ Duplicate | ❌ Duplicate | ❌ Missing | ⚠️ Animated/concat | Critical |
| `/contact` | ❌ Duplicate | ❌ Duplicate | ❌ Missing | — | Critical |

### Recommended Page Titles & Meta Descriptions

| Page | Recommended Title | Recommended Meta Description |
|------|-------------------|------------------------------|
| `/` | ZyFlux – AI & Smart Tech Solutions \| Web, App & AI Development | ZyFlux partners with ambitious businesses to accelerate growth through AI, web development, mobile apps, and UI/UX design. Based in Navi Mumbai. Book a free consultation. |
| `/services` | Services – Web, App, AI & Digital Marketing \| ZyFlux | Explore ZyFlux's full-stack services: custom web development, Flutter app development, AI/ML solutions, UI/UX design, graphics, and digital marketing. Get started today. |
| `/projects` | Projects & Portfolio – Case Studies \| ZyFlux | Browse ZyFlux's portfolio of 20+ successful projects including Dainik Nirnayak, Sparksfly, MissCallPay, and more. Real results for real businesses. |
| `/about` | About ZyFlux – Our Story, Team & Values \| AI Tech Agency | Founded by four engineering graduates, ZyFlux is a Navi Mumbai-based tech agency delivering web, mobile, and AI solutions with innovation, quality, and measurable results. |
| `/contact` | Contact ZyFlux – Book a Free Consultation | Ready to transform your business? Contact ZyFlux at team@zyflux.com or +91 7021309381. Response within 2 hours. Free strategy session included. |

### H1 Tag Issues

- ❌ **Homepage H1 is animated concatenation** — DOM renders: `"Revolutionizing your businessSMART TECHAI TechWeb TechMobile AppDigi TechDesigningUI/UXWeb TechSolutions"` — meaningless to Google.
- ❌ **Services page H1 concatenated** — `"BusinessDevelopmentExcellence"`.
- ⚠️ **About page H1: "About ZyFlux"** — Acceptable but could be more keyword-rich.

**Fix:** Use `aria-hidden` on animated spans, add a screen-reader-only static H1:

```jsx
<h1>
  <span aria-hidden="true" className="animated-text">...</span>
  <span className="sr-only">Smart Tech & AI Solutions for Your Business</span>
</h1>
```

### Internal Linking Issues

| Issue | Status | Recommendation |
|-------|--------|----------------|
| 37 links with `href="#"` | ⚠️ Warn | Replace with `<button>` elements — adds noise to link graph |
| No blog or content pages | ❌ Fail | No internal links to educational resources — limits topical authority |
| Privacy Policy / Terms pages missing | ❌ Fail | Shown in footer as plain text, no actual pages exist |
| Major pages linked from nav + footer | ✅ Pass | Home, Services, Projects, About, Contact all accessible |

---

## Content Quality & E-E-A-T — Score: 55/100

### E-E-A-T Assessment

| Signal | Rating | Notes |
|--------|--------|-------|
| Experience | ⚠️ Weak | No case study depth, no author profiles |
| Expertise | 🔵 Moderate | Service descriptions mention tech stack (TensorFlow, Flutter, etc.) |
| Authoritativeness | ❌ Poor | No team profiles, no external mentions, no blog |
| Trustworthiness | ⚠️ Moderate | Testimonials present but use auto-generated avatars |

### Word Count by Page

| Page | Word Count | Target | Status |
|------|-----------|--------|--------|
| Homepage | 2,106 | 1,500+ | ✅ Good |
| About | ~900 | 800+ | ✅ Good |
| Services | 574 | 1,500+ | ⚠️ Thin |
| Projects | Not measured | 800+ | — |

### Content Issues

| Issue | Priority | Recommendation |
|-------|----------|----------------|
| Inconsistent stats: Homepage "5+ yrs / 200+ projects" vs About "3+ yrs / 20+ projects" | 🟡 High | Align all statistics to accurate, consistent numbers |
| Services page thin content (574 words for 6 services) | 🟡 High | Expand each service to 200–400 words; target 1,500+ total |
| No team member profiles on About page | 🟡 High | Add names, roles, photos, LinkedIn links for founders |
| Generic stock Unsplash images for all projects | 🟡 High | Replace with actual project screenshots |
| Duplicate Unsplash image for different projects | 🟡 High | "Sparksfly" and "Namma Pondy" use the same photo |
| Auto-generated ui-avatars for client testimonials | 🔵 Medium | Use real client logos (with permission) |
| No blog or thought leadership content | 🔵 Medium | Start a blog with 2–4 articles/month |
| Copyright year shows 2025 | 🟢 Low | Update to `new Date().getFullYear()` |

---

## Schema & Structured Data — Score: 20/100

### Current Schema Inventory

| Schema Type | Status | Issue |
|-------------|--------|-------|
| Organization | ⚠️ Broken | URL and logo reference `zyflux.in` (unresolvable) |
| WebSite | ❌ Missing | No SearchAction or website identity |
| LocalBusiness | ❌ Missing | Physical address in footer but not marked up |
| Service | ❌ Missing | 6 services offered, none have schema |
| Review / AggregateRating | ❌ Missing | 7 testimonials present but not marked up |
| BreadcrumbList | ❌ Missing | No breadcrumb markup on inner pages |
| FAQPage | ❌ Missing | No FAQ content exists on any page |

### Current Organization Schema (Broken)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ZyFlux",
  "url": "https://www.zyflux.in/",        ← WRONG ❌
  "logo": "https://www.zyflux.in/logo.png", ← WRONG ❌
  "sameAs": [
    "https://www.linkedin.com/company/zyflux",
    "https://twitter.com/zyflux_com",
    "https://instagram.com/zyflux_com"
  ]
}
```

### Recommended Schema (Replace in layout.tsx)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://zyflux.com/#organization",
      "name": "ZyFlux",
      "url": "https://zyflux.com",
      "logo": { "@type": "ImageObject", "url": "https://zyflux.com/assets/logo3.png" },
      "description": "AI, web, mobile & digital marketing agency based in Navi Mumbai.",
      "email": "team@zyflux.com",
      "telephone": "+917021309381",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H-3/1001 Valley Shilp CHS, Kharghar Sec-36",
        "addressLocality": "Navi Mumbai",
        "postalCode": "410210",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/zyflux",
        "https://instagram.com/zyflux_com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://zyflux.com/#website",
      "url": "https://zyflux.com",
      "name": "ZyFlux",
      "publisher": { "@id": "https://zyflux.com/#organization" }
    }
  ]
}
```

---

## Performance & Core Web Vitals — Score: 55/100

| Metric | Estimate | Target | Status |
|--------|----------|--------|--------|
| LCP | ~2–4s (estimated) | < 2.5s | ⚠️ At risk |
| INP | Unknown | < 200ms | ⚠️ At risk (heavy scripts) |
| CLS | Likely good | < 0.1 | ✅ Likely pass |

### Performance Issues

| Issue | Impact | Priority | Fix |
|-------|--------|----------|-----|
| Large Unsplash images (1200×600) loaded from external CDN | LCP, bandwidth | 🟡 High | Self-host in WebP/AVIF with Next.js Image + `sizes` prop |
| Two Facebook Pixel instances loading `fbevents.js` | LCP, INP | 🟡 High | Remove duplicate Pixel ID; lazy-load remaining pixel |
| Calendly widget loaded on all pages | LCP, TTI | 🔵 Medium | Load only on pages/components that need it via dynamic import |
| Logo served as 489×511 PNG (displayed at ~40px) | Bandwidth | 🔵 Medium | Convert to SVG or WebP with srcset |
| 6 video elements on /services without lazy loading | LCP, bandwidth | 🔵 Medium | Add `preload="none"` and poster images to all videos |

---

## Images — Score: 65/100

| Metric | Value | Status |
|--------|-------|--------|
| Total images | 56 | — |
| Images with alt text | 56 (100%) | ✅ Pass |
| Images missing alt text | 0 | ✅ Pass |
| External CDN images (Unsplash) | 7 | ⚠️ Warn |

### Image Issues

| Issue | Count | Priority | Recommendation |
|-------|-------|----------|----------------|
| Stock Unsplash photos for client projects | 7 | 🟡 High | Replace with actual project screenshots |
| Same Unsplash image used for 2 different projects | 2 | 🟡 High | Use unique images per project |
| Auto-generated ui-avatars for client testimonials | 7 | 🔵 Medium | Use real client logos |
| Logo PNG at 489×511px | 1 | 🔵 Medium | Convert to SVG or serve with srcset |

---

## AI Search Readiness (GEO) — Score: 25/100

### Current Signals

| Signal | Status | Detail |
|--------|--------|--------|
| /llms.txt | ❌ Missing | AI crawlers cannot easily understand ZyFlux's offering |
| Organization schema | ❌ Broken | Invalid URL prevents entity recognition |
| FAQ content | ❌ Missing | No FAQ anywhere — misses AI Overview opportunities |
| Thought leadership blog | ❌ Missing | No articles = no citation opportunities |
| Meta description quality | ⚠️ Weak | Too generic for AI engine summaries |
| AI crawler accessibility | ✅ Pass | Cloudflare likely allows GPTBot, ClaudeBot, PerplexityBot |

### Recommended /llms.txt

Create `/public/llms.txt`:

```
# ZyFlux – AI & Smart Tech Agency

Organization: ZyFlux
Website: https://zyflux.com
Description: ZyFlux is a Navi Mumbai-based tech agency specializing in AI
solutions, web development, Flutter mobile apps, UI/UX design, and digital
marketing for startups and enterprises.

Services:
- Web Development (HTML, CSS, JS, WordPress, Wix)
- App Development (Flutter, FlutterFlow, Dart)
- AI/ML Solutions (Python, TensorFlow, PyTorch)
- UI/UX Design (Figma, Adobe XD)
- Digital Marketing (SEO, Google Ads, Meta Ads)
- Graphics & Multimedia (Adobe Creative Suite)

Contact: team@zyflux.com | +91 7021309381
Location: Navi Mumbai, India
```

### GEO Opportunities

| Opportunity | Impact | Effort |
|-------------|--------|--------|
| Add FAQ sections to Services & About pages | 🟡 High | Low |
| Create /llms.txt | 🟡 High | Low |
| Write detailed case study pages for each project | 🟡 High | Medium |
| Add Service schema markup | 🔵 Medium | Low |
| Start a blog with technical articles | 🟡 High | High (ongoing) |

---

## Prioritized Action Plan

### 🔴 Critical — Fix Immediately (This Week)

| # | Action | Pages Affected | Effort |
|---|--------|----------------|--------|
| 1 | Create `app/sitemap.ts` + fix robots.txt sitemap URL | All | 30 min |
| 2 | Add unique `<title>` to every page via Next.js metadata | /services, /projects, /about, /contact | 1 hour |
| 3 | Add `alternates.canonical` to all page metadata | All | 30 min |
| 4 | Fix Organization schema + OG image domain (zyflux.in → zyflux.com) | layout.tsx | 15 min |
| 5 | Fix animated H1 — use `aria-hidden` + `.sr-only` static text | /, /services, /about | 2 hours |

### 🟡 High — Fix Within 1 Week

| # | Action | Pages Affected | Effort |
|---|--------|----------------|--------|
| 6 | Add unique meta descriptions to all pages | /services, /projects, /about, /contact | 30 min |
| 7 | Fix site.webmanifest 404 (create or remove link tag) | layout.tsx | 15 min |
| 8 | Align inconsistent stats (3+/20+ vs 5+/200+) | /, /about | 30 min |
| 9 | Add team member profiles (names, photos, LinkedIn) to About page | /about | 4 hours |
| 10 | Remove duplicate Facebook Pixel instance | layout.tsx | 30 min |
| 11 | Replace stock Unsplash project images with real screenshots | /, /projects | 4 hours |
| 12 | Expand Services page content from 574 → 1,500+ words | /services | 1 day |
| 13 | Upgrade to full LocalBusiness + WebSite schema | layout.tsx | 30 min |
| 14 | Lazy-load Calendly widget (only on contact/trigger) | layout.tsx | 1 hour |

### 🔵 Medium — Fix Within 1 Month

| # | Action | Effort |
|---|--------|--------|
| 15 | Add FAQ sections with FAQ schema to /services and /about | 1 day |
| 16 | Create /llms.txt for AI visibility | 30 min |
| 17 | Create Privacy Policy and Terms of Service pages | 2 hours |
| 18 | Replace `href="#"` on 37 carousel nav buttons with `<button>` elements | 2 hours |
| 19 | Self-host and optimize images in WebP format | 4 hours |
| 20 | Replace ui-avatars client thumbnails with real logos | 2 hours |
| 21 | Add `preload="none"` and poster images to 6 service page videos | 2 hours |

### 🟢 Low — Backlog

| # | Action | Effort |
|---|--------|--------|
| 22 | Update copyright year to 2026 (use `new Date().getFullYear()`) | 5 min |
| 23 | Convert logo PNG to SVG | 1 hour |
| 24 | Start a blog / content marketing program | Ongoing |
| 25 | Add BreadcrumbList schema to inner pages | 1 hour |

---

## Score Projection

| Stage | Score |
|-------|-------|
| Current | 43/100 |
| After Critical fixes (5 issues) | ~72/100 |
| After all High + Critical fixes | ~80/100 |
| After full action plan | 85+/100 |

---

*Audit performed on zyflux.com — March 3, 2026. Covers: /, /services, /about, /projects pages. Performance metrics are estimated from observed page composition; use Google PageSpeed Insights for precise CWV data.*
