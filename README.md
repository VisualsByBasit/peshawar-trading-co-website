# Peshawar Trading Co., Ltd. — Website

A Next.js (App Router) website for Peshawar Trading Co., Ltd., a Japan-based exporter of used cars, trucks, buses, construction machinery, generators and agricultural tractors. Built for SEO and conversions: server-rendered pages, per-vehicle detail pages, sitemap.xml, robots.txt, Open Graph/Twitter cards, and JSON-LD structured data (AutoDealer + Vehicle schema).

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build
npm run start     # serve the production build
```

## Structure

```
app/
  layout.js              Root layout: fonts, global <head> metadata, Organization JSON-LD
  page.js                Home page
  sitemap.js              /sitemap.xml
  robots.js               /robots.txt
  manifest.js              /manifest.webmanifest (PWA-style app icon metadata)
  inventory/page.js       Inventory listing (filters + search)
  inventory/[slug]/page.js  One page per vehicle (SSG, own metadata + JSON-LD)
  about/page.js
  contact/page.js
  globals.css             All styling (design tokens, layout, components, animations)
components/               Header, Footer, VehicleCard, ContactForm, InventoryClient,
                           Reveal / AnimatedGrid (scroll animations), ParallaxImage,
                           SafeImage (next/image that hides itself instead of showing
                           a broken-image icon if a URL ever 404s), Icons, Counter
lib/
  site.js                 Brand/contact/social constants — the single source of truth
  vehicles.js             Vehicle inventory data
public/images/            Logo + favicon
```

## Updating the vehicle stock

Edit the `VEHICLES` array in `lib/vehicles.js`. Each entry:

```js
{
  id: "v13",
  slug: "toyota-corolla",           // becomes the URL: /inventory/toyota-corolla
  title: "Toyota Corolla",
  category: "cars",                 // cars | trucks | buses | machinery | generators | tractors
  year: "2018",
  mileage: "50,000 km",
  fuel: "Petrol",
  transmission: "Automatic",
  price: "Contact for Price",       // or e.g. "$8,500 FOB"
  icon: "car",                      // fallback icon key, see VEHICLE_ICONS in components/Icons.js
  img: "https://...",               // full-size photo URL
  imgAlt: "Toyota Corolla sedan",
}
```

Adding a vehicle automatically gives it a listing card, its own detail page (`generateStaticParams` picks it up on the next build), and a sitemap entry.

## About the photos

Every photo on the site — vehicle cards, the hero slideshow, page banners — is currently a real, freely-licensed **representative** photo pulled from [Pexels](https://www.pexels.com) (`images.pexels.com/photos/<id>/...`), not your actual stock or showroom. Swap `img` in `lib/vehicles.js`, the `HERO_SLIDES` array in `lib/site.js`, and the photo calls in `app/page.js` / `app/about/page.js` / `app/contact/page.js` for real photos as they become available — buyers trust real photos far more than reference images, and it's worth doing before the site goes live.

Three things to know about how images are handled:

1. **Pexels, not Wikimedia.** An earlier version of this site hotlinked Wikimedia Commons. That broke in practice: Wikimedia requires a descriptive `User-Agent` header on every request (their [User-Agent policy](https://meta.wikimedia.org/wiki/User-Agent_policy)), Next.js's image optimizer doesn't send one, and Wikimedia returns `403 Forbidden` — which showed up as permanently blank/navy image boxes. Pexels' CDN is built for exactly this (hotlinking into any app, no required headers), so it doesn't have that problem.
2. **Next.js optimizes and re-serves every image** through `/_next/image`, so the hosting `remotePatterns` allowlist in `next.config.mjs` must include any new external photo host you use (`images.pexels.com` is already allowed).
3. **Every image degrades gracefully.** Photos go through the `SafeImage` component (or `HeroSlideshow`'s own error handling), which hides itself if a URL ever breaks instead of showing a broken-image icon — the card/section's navy background shows through instead. Still, it's worth spot-checking occasionally that photos load.

## SEO

- **Metadata**: each page sets its own `title`/`description`/canonical via the Next.js Metadata API (`app/*/page.js`); `app/layout.js` sets the sitewide defaults, Open Graph/Twitter cards, and title template.
- **Structured data**: `app/layout.js` injects `AutoDealer` JSON-LD (address, geo, phone, socials); each vehicle page injects `Vehicle`/`Offer` JSON-LD.
- **Sitemap & robots**: generated automatically from `lib/vehicles.js` — new vehicles appear in `/sitemap.xml` on the next build with no manual step.
- **Before launch**: update `SITE.url` in `lib/site.js` to the real production domain (it currently points at a placeholder, `https://peshawartradingjapan.com`) — this feeds canonical URLs, Open Graph, sitemap and JSON-LD.

## Contact details used on the site

All of these live in `lib/site.js` — update them there once and they update everywhere (header, footer, JSON-LD, WhatsApp links):

- WhatsApp / Mobile: +81 90-4325-4004
- Tel: 0766-50-8749 / Fax: 0766-50-8747
- Email: peshawar2004@gmail.com
- Address: 2-8 Motomachi 1-chome, Imizu-shi, Toyama 934-0011, Japan
- Instagram: instagram.com/peshawartradingjapan
- Facebook: facebook.com/share/1Bv9q3dHKu
- TikTok: tiktok.com/@peshawar.trading.j

## Deploying

This is a standard Next.js app (uses `next/image` optimization, static generation, and file-based `sitemap.js`/`robots.js` routes) — it needs a Node.js-capable host, **not** a plain static host like GitHub Pages.

**Recommended: [Vercel](https://vercel.com)** (made by the Next.js team, free tier is enough for this site) — connect the GitHub repo and it deploys automatically on every push, with HTTPS and a CDN included. Any other Node host (Netlify, Render, a VPS with `npm run build && npm run start`) also works.
