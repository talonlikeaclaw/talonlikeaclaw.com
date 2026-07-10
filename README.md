# talonlikeaclaw.com

Client-facing freelance services website for Talon Dunbar, Infrastructure & Deployment Engineer based in Montreal, Quebec. Bilingual English/French.

## Tech Stack

- [Next.js 16](https://nextjs.org) (static export)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-intl](https://next-intl.dev) (bilingual EN/FR)

## Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). The root redirects to `/en`.

## Build

```bash
npm run build
```

Outputs static files to `out/`.

## Deployment (Cloudflare Pages)

**Via dashboard:**

1. Connect the GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

**Via Wrangler CLI:**

```bash
npm run build
npx wrangler pages deploy out --project-name talonlikeaclaw
```

The `public/_redirects` file handles the root `/` to `/en/` redirect at the edge.

## Internationalization

- Locales: `en` (default), `fr`
- Translation files: `messages/en.json`, `messages/fr.json`
- Routing config: `src/i18n/routing.ts`
- Language toggle in the navbar

## Project Structure

```
src/
  app/
    [locale]/
      layout.tsx            Root layout (Navbar, Footer, metadata)
      page.tsx              Homepage (all sections)
      opengraph-image.tsx   Dynamic OG image (1200x630 PNG)
    globals.css             Design tokens and global styles
    icon.svg                Favicon
    page.tsx                Root redirect to /en
  components/
    layout/                 Navbar, Footer, LanguageToggle
    sections/               Hero, TrustBand, Services, WhoIHelp, Process, Work, About, Faq, Contact
    ui/                     Container, SectionHeading
  data/                     Localized structured data (services, audiences, process, work, faq)
  i18n/                     Routing and request config
  lib/                      Utils (cn)
public/
  _redirects                Cloudflare Pages root redirect
  headshot.jpg              Profile photo
  projects/                 Work section screenshots
  robots.txt
  sitemap.xml
```
