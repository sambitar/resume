# Skills showcase

Skills and portfolio site built with [Astro](https://astro.build). Profile and contact live in [`src/content/themes.yaml`](src/content/themes.yaml).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Production build:

```bash
npm run build
npm run preview
```

Static output is in `dist/`.

## Editing content

| File | Purpose |
|------|---------|
| [`src/content/skills.yaml`](src/content/skills.yaml) | Eight skill domains: title, summary, competency bullets |
| [`src/content/themes.yaml`](src/content/themes.yaml) | Profile name, hero headline/subheadline, themes, footer note |
| [`src/content/portfolio.yaml`](src/content/portfolio.yaml) | Portfolio projects: title, summary, tech, outcome, skill tags, optional `caseStudy` |
| [`src/content/portfolio-tree.yaml`](src/content/portfolio-tree.yaml) | Featured case studies: full pages with UI mockups |
| [`aboutme`](aboutme) | Your private narrative (not published; source notes only) |

After editing YAML, save and refresh the dev server. Each skill needs:

- `id` — URL-safe slug (used as HTML `id` on the card)
- `title` — Card heading
- `summary` — 2–3 sentences (YAML `>` folded block works well)
- `competencies` — List of bullet strings

## Project layout

```
src/
  content/       skills.yaml, themes.yaml
  components/    SkillCard, SkillGrid, ThemeStrip, PortfolioCard, SiteNav
  layouts/       BaseLayout
  lib/           content.ts (loads YAML)
  pages/         index.astro, portfolio.astro
  styles/        global.css
```

## Deploy (static hosting)

Build once, upload `dist/`:

- **Netlify / Cloudflare Pages:** connect the repo; build command `npm run build`, publish directory `dist`
- **GitHub Pages:** build locally or via Actions, deploy `dist` to `gh-pages` or use an Astro GitHub Pages adapter later

No secrets are required for the current site.

Portfolio entries use `tags` to link back to skill cards on the home page (e.g. `systems-integration`). Each card includes an SVG simulated demo in [`src/components/portfolio/demos/`](src/components/portfolio/demos/). Add or edit projects in [`src/content/portfolio.yaml`](src/content/portfolio.yaml).

Optional `caseStudy` on a project card links to a full case study page (slug must match [`src/content/portfolio-tree.yaml`](src/content/portfolio-tree.yaml)).

### Portfolio URL for job applications

Use **[`/portfolio`](http://localhost:4321/portfolio)** — project grid plus featured case studies at the top.

### Case studies (in-depth)

[`/portfolio/meridian-pm`](http://localhost:4321/portfolio/meridian-pm), [`/portfolio/gate-smart-access`](http://localhost:4321/portfolio/gate-smart-access), [`/portfolio/pharma-warehouse-env`](http://localhost:4321/portfolio/pharma-warehouse-env) — one full page per product with light-themed HTML UI mockups.

- Content: [`src/content/portfolio-tree.yaml`](src/content/portfolio-tree.yaml)
- Layout: [`src/layouts/PortfolioTreeLayout.astro`](src/layouts/PortfolioTreeLayout.astro)

Old `/portfolio-test/*` URLs redirect to `/portfolio/*`.

## Later (not implemented)

- `meta.yaml` for location, LinkedIn, and other links
