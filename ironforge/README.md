# IRONFORGE — Premium Gym Website (Testing Build)

A production-quality, single-page premium fitness club website built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

> This is a **testing / preview build**. All copy, pricing, testimonials and contact details are demo content, ready to be swapped for the real club's branding.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Node 20.9+ is required.

---

## What's inside

```
src/
  app/
    layout.tsx        # fonts, metadata, Open Graph, JSON-LD schema
    page.tsx          # section composition
    globals.css       # design tokens, base styles, animations
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
  components/
    Navbar.tsx        # sticky nav, mobile menu, scroll-spy, mobile CTA bar
    Hero.tsx          # above-the-fold hero + stats
    Stats.tsx         # trust strip
    About.tsx         # two-column story
    Programs.tsx      # 4 program cards
    Trainers.tsx      # 3 coach cards
    Features.tsx      # "why choose us" 01–06 grid
    Gallery.tsx       # facility masonry gallery
    Testimonials.tsx  # results / transformation cards
    Pricing.tsx       # 3 membership tiers
    CTA.tsx           # full-width cinematic CTA
    Contact.tsx       # details + demo contact form
    Footer.tsx        # links, socials, legal
    ScrollReveal.tsx  # ~1 KB IntersectionObserver reveal layer
    ui/               # Button, Container, SectionHeading, Icons
  data/site.ts        # ← all demo content lives here
  fonts/              # self-hosted woff2 (Barlow Condensed + Inter)
public/images/        # optimized WebP assets
```

### Change the content

Nearly everything (nav labels, stats, programs, trainers, features, gallery, testimonials, pricing, address, phone, email, hours) is defined in **`src/data/site.ts`**. Edit that one file and the whole page updates.

### Change the look

Design tokens live at the top of **`src/app/globals.css`** in the `@theme` block:

```css
--color-ink: #05060a;      /* page background   */
--color-charcoal: #0b0d12; /* alternating bands */
--color-ember: #ff4d14;    /* accent colour     */
```

Change `--color-ember` and the entire accent system (buttons, highlights, hovers, focus rings) follows.

---

## Performance

- Images pre-converted to **WebP** and served as **AVIF/WebP** with responsive `srcset` by `next/image`.
- Hero image is `priority` + `fetchPriority="high"`; every other image is lazy-loaded.
- All images have explicit dimensions or `fill` inside a fixed-aspect box — measured **CLS: 0**.
- Fonts are self-hosted, latin-subset `woff2` with `display: swap` and metric-adjusted fallbacks (no third-party font request).
- No animation library, no icon library, no UI framework — the only client JS is the navbar and a small reveal observer.
- Measured on the production build: **LCP ≈ 0.3 s**, initial images ≈ 68 KB, zero console errors.

## SEO

Page title, meta description, canonical, Open Graph + Twitter cards, `HealthAndBeautyBusiness` JSON-LD, `robots.txt`, `sitemap.xml`, favicon set and web manifest are all configured. Update the `siteUrl` constant in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` when the real domain is known.

## Accessibility

Semantic landmarks, one `h1`, labelled sections, skip-to-content link, visible ember focus rings, keyboard-operable mobile menu with focus trap + `Esc` to close, `aria-live` form status, descriptive alt text on every image, and `prefers-reduced-motion` support.

---

## Before going live

1. Replace demo images in `public/images/` (keep the filenames, or update `src/data/site.ts`).
2. Update all content in `src/data/site.ts` — including real pricing and contact details.
3. Point the contact form in `src/components/Contact.tsx` at a real endpoint (Formspree, Resend, a Next.js route handler, or your CRM).
4. Replace placeholder social links (`href="#home"`) in `Footer.tsx` and `Trainers.tsx`.
5. Add real Privacy Policy and Terms pages and link them in `Footer.tsx`.
6. Set the production domain in the three `siteUrl` constants and regenerate `og-image.jpg` if branding changes.

## Deploy

Works out of the box on any Node host. On Vercel: import the repo, no configuration needed.
