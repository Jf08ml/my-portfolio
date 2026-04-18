# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (flat config, Next.js core-web-vitals + TypeScript)
```

No test runner is configured.

## Architecture

Single-page portfolio built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

### Content is config-driven — no CMS, no database

All editable content lives in `/app/config/`:
- `siteConfig.ts` — author info, site URL, social links, locale
- `projects.ts` — 5 flagship projects with context, solution, architecture narrative, stack array, and impact metrics
- `techStack.ts` — 6 technology categories with skills

To add or edit content, only these files need to change.

### Page structure

`/app/page.tsx` is the home page. It dynamically imports all 8 section components from `/app/components/sections/` using Next.js `dynamic()` with SSR enabled for code splitting. Each section is a self-contained component consuming data from `/app/config/`.

`/app/blog/page.tsx` is a placeholder with no real content yet.

### Component layers

- `/app/components/sections/` — full-page sections (Hero, About, Projects, TechStack, Architecture, Growth, Philosophy, Contact)
- `/app/components/ui/` — atoms: Button (polymorphic), Badge, Card, SectionWrapper (scroll anchor + motion wrapper), ThemeToggle
- `/app/components/layout/` — Navbar, Footer
- `/app/components/providers/` — ThemeProvider (wraps `next-themes`)

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Design tokens are defined as CSS variables inside `@theme inline` in `app/globals.css`. Light/dark mode switches the variables — never hardcode colors, always use the token names (`--bg`, `--fg`, `--accent`, etc.).

### Animations

All animations use Framer Motion. Pattern: `SectionWrapper` provides shared motion variants; individual sections add staggered children. Spring config: `stiffness 100, damping 20`. Scroll-triggered visibility via `useInView`.

### SEO / metadata

- Static metadata exported from `app/layout.tsx`
- JSON-LD (Person + WebSite schema) generated in `app/lib/metadata.ts` from `siteConfig`
- Sitemap: `app/sitemap.ts` (static generation)
- Robots: `app/robots.ts`
- Google Analytics: GA4 tag `G-V2VNV4GLHM` injected via `next/script` in `app/layout.tsx`

### Path alias

`@/*` maps to the repository root (configured in `tsconfig.json`).
