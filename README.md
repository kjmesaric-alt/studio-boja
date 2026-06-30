# studio boja.

Portfolio website for studio boja. — an Amsterdam-based interior design studio.

## Running locally

```bash
npm install       # install dependencies (first time only)
npm run dev       # start dev server → http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

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

## Project struct## Project struct## Project struct## Project struct## Project strund## Project s    ## Project struct## Project struct## Project struct## Project struct## Projec image## Project stru, 02.## Pro�)## Project struct## Project struct## Projenail, ProjectGrid## Project struct## Project struct## Project struct## Projectndex (splash), work/, services, about, contact
src/styles/tokens.css          all design tokens (colours, sizes, fonts)
```

## Customising colours

Edit `src/styles/tokens.css`. Fill in the `TODO` placeholder values:
- `--color-text-primary`
- `--hover-bg-1` through `--hover-bg-5` and matching `--hover-text-*`

## Open items

See `todo.md` (gitignored, local only).
