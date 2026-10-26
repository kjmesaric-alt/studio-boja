# AGENTS.md

This file provides guidance to AI coding agents (Claude Code and others) when working with code in this repository.

## About the owner

The owner is an interior designer, not a developer. Explain everything in plain, non-technical language: say what a command does before running it, avoid unexplained jargon (git, npm, terminal, build, etc.), and after doing work, explain what changed and why in a sentence or two.

## What this is

Portfolio website for studio boja. (Amsterdam interior design studio), built with Astro 7 as a fully static site. No framework components, no tests, no linter.

## Commands

```bash
npm install            # first time only
npm run dev            # local preview at http://localhost:4321
npm run build          # build into dist/
npm run preview        # preview the built site
npm run new <slug>     # scaffold src/content/projects/<slug>/index.md
```

When starting the dev server from an agent, use background mode: `astro dev --background` (manage with `astro dev stop|status|logs`).

Node 22+ required (see `.nvmrc`).

## Architecture

- **Projects are folders, not code.** Each project lives in `src/content/projects/<slug>/` containing `index.md` (frontmatter: `title`, `category` = residential|commercial|graphic, `subcategory` = renovation|hospitality|offices|stores|"", optional `order`) plus its images. Schema is in `src/content.config.ts` (glob loader on `*/index.md`). The owner adds projects without touching code — keep it that way (see `ADDING-A-PROJECT.md`).
- **Images are discovered by path**, not referenced in frontmatter: `src/lib/projects.ts` globs all images under `src/content/projects/**`, sorts them alphabetically per folder; the first image is the cover/thumbnail. `getHoverCombo()` deterministically assigns one of 5 hover colour combos from a hash of the slug.
- **Routes:** `src/pages/{residential,commercial,graphic}.astro` are category grids; `src/pages/[slug].astro` is the per-project page (URL `/<slug>/`). Shared layout is `src/layouts/BaseLayout.astro`.
- **Styling:** design tokens (colours, spacing, fonts) in `src/styles/tokens.css`; Afacad font served from `public/fonts/`.
- **Specs:** `guidelines.md` is the source of truth for visual/behaviour detail; `PROJECT-PLAN.md` is the original build spec. Where they disagree, `guidelines.md` wins.

## Deployment

Pushing to `main` on GitHub triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. The site is served on the custom domain `boja.studio` (`site` in `astro.config.mjs`, plus `public/CNAME`), so `base` stays `/` and internal links are root-relative (`href="/about/"`).

## Git and GitHub rules (important)

This folder (`studio boja code`) is the only thing that goes to GitHub. The parent `boja` folder holds the owner's personal files (branding, identity, templates, website material) — never add, copy, or commit anything from outside this folder.

- Only commit files the website needs: `src/`, `public/`, `scripts/`, `.github/`, config files (`package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore`, `.vscode/`), and the docs (`README.md`, `ADDING-A-PROJECT.md`, `guidelines.md`, `PROJECT-PLAN.md`, `AGENTS.md`, `CLAUDE.md`).
- Never commit: `dist/`, `node_modules/`, `.astro/`, `.DS_Store`, `todo.md`, `.claude/settings.local.json`, `agent/`, `.agents/`, `skills-lock.json`, `.env*`. These are listed in `.gitignore`; keep it that way.
- Stage files by name (`git add src/ public/ ...`), never `git add -A` / `git add .` without first checking `git status`. Before every commit, show the owner the list of files in plain words and get a yes.
- GitHub rejects files over 100 MB; warn before committing anything over ~10 MB (the `public/services/*.svg` files are already 11–13 MB each — candidates for optimising).
- The repo sits inside OneDrive. OneDrive can turn symlinks into plain files and occasionally conflict-copies files inside `.git/`; don't use symlinks, and if git reports odd errors, check for `* (1)`-style duplicate files first.
