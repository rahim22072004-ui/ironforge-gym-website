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
    sitemap.ts        # /sitemap.xml (home + every programme page)
    robots.ts         # /robots.txt
    not-found.tsx     # branded 404 page
    programs/[slug]/  # a detail page per programme (statically generated)
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
    Schedule.tsx      # weekly class timetable with day tabs
    FAQ.tsx           # accordion + FAQPage structured data
    Contact.tsx       # details, live contact form, map
    MapEmbed.tsx      # click-to-load Google map
    FloatingActions.tsx # floating call + WhatsApp buttons
    Footer.tsx        # links, socials, legal
    ScrollReveal.tsx  # ~1 KB IntersectionObserver reveal layer
    ui/               # Button, Container, SectionHeading, Icons
  data/site.ts        # ← all demo content lives here
  data/blur.ts        # generated base64 image placeholders
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

## The contact form

Submissions are delivered by [Web3Forms](https://web3forms.com) — no server to run. The receiving inbox is decided by `site.formAccessKey` in `src/data/site.ts`; create a free key at web3forms.com to point it somewhere else. The form validates inline, blocks bots with a honeypot, and falls back to a "email us directly" message if the network call fails.

Auto-reply to the sender is a Web3Forms Pro feature and is not enabled on the free plan.

## Performance

- Images pre-converted to **WebP** and served as **AVIF/WebP** with responsive `srcset` by `next/image`.
- Hero image is `priority` + `fetchPriority="high"`; every other image is lazy-loaded.
- All images have explicit dimensions or `fill` inside a fixed-aspect box — measured **CLS: 0**.
- Fonts are self-hosted, latin-subset `woff2` with `display: swap` and metric-adjusted fallbacks (no third-party font request).
- No animation library, no icon library, no UI framework — the only client JS is the navbar and a small reveal observer.
- Every image ships a generated base64 blur placeholder, so nothing pops in.
- Google Maps is click-to-load — the ~1 MB third-party embed costs nothing until a visitor asks for it.
- Vercel Analytics + Speed Insights are wired in (`src/app/layout.tsx`); they only report once deployed on Vercel.
- Measured on the production build: **LCP ≈ 0.8 s**, **CLS 0**, no horizontal overflow at 390 / 820 / 1280 / 1440 px.

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
6. Set the club's real WhatsApp number in `site.whatsapp` and the real address in `site.mapQuery`.
7. Replace the demo class timetable in `schedule` and the FAQ answers in `faqs`.
8. Set the production domain in the `siteUrl` constants (`layout.tsx`, `sitemap.ts`, `robots.ts`, `programs/[slug]/page.tsx`) and regenerate `og-image.jpg` if branding changes.

## Deploy

Works out of the box on any Node host. On Vercel: import the repo, no configuration needed.
