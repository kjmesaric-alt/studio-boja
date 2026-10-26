# studio boja.

Portfolio website for studio boja. — an Amsterdam-based interior design studio.

## Running locally

```bash
npm install       # install dependencies (first time only)
npm run dev       # start dev server → http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

Open locally: http://localhost:4321

Requires Node.js 22+. Check `.nvmrc`.

## Adding a project

See [ADDING-A-PROJECT.md](ADDING-A-PROJECT.md) for the full guide.

Quick scaffold:

```bash
npm run new my-project-slug
```

Then edit `src/content/projects/my-project-slug/index.md` and drop images into
`public/projects/my-project-slug/`. Commit and push — the site rebuilds automatically.

## Deploying (GitHub Pages)

Automatic on push to `main` via `.github/workflows/deploy.yml`.

One-time repo setup:
1. **Settings → Pages → Source = GitHub Actions**
2. Add your custom domain and put it in `public/CNAME`

## Documentation

- Astro docs: https://docs.astro.build
- Add project guide: [ADDING-A-PROJECT.md](ADDING-A-PROJECT.md)

## Project structure

```text
src/
	components/                  shared UI components (Nav, Typewriter, ImageGallery, ProjectGrid)
	content/projects/            project content files (.md)
	layouts/BaseLayout.astro     base page layout
	lib/projects.ts              project data helpers
	pages/                       routes (index, residential, commercial, services, about, contact, [slug])
	styles/tokens.css            design tokens (colors, spacing, fonts)
	styles/global.css            global styles

public/
	images/                      static site images
	projects/                    project-specific media
	fonts/                       local fonts

scripts/new-project.sh         scaffold a new project content entry
```

## Customising colours

Edit `src/styles/tokens.css`. Fill in the `TODO` placeholder values:
- `--color-text-primary`
- `--hover-bg-1` through `--hover-bg-5` and matching `--hover-text-*`

## Open items

See `todo.md` (gitignored, local only).
