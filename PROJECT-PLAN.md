# Studio Boja — Project Plan

This document is the **build specification** for the Studio Boja portfolio website.
It is written for two audiences:

- **The implementation AI** — builds the site from this plan (see [§10](#10-implementation-ai--task-list)).
- **The owner (you)** — provides the missing content/decisions (see [§11](#11-owner-you--checklist)).

Source of truth for visual/behavioural detail: [guidelines.md](guidelines.md) + the 7 reference screenshots provided.
Where this plan and `guidelines.md` disagree, `guidelines.md` wins — except for the open questions flagged in [§9](#9-open-questions--gaps-owner-must-resolve).

---

## 1. Goal

A minimal, image-led portfolio site for **studio boja.**, an Amsterdam interior-design studio.
Projects (images + text) are **placeholders for now** and must be **trivial to add/replace later** by dropping files into a folder — no code changes needed.

---

## 2. Tech stack & rationale

| Concern | Choice | Why |
|---|---|---|
| Framework | **Astro** (static output) | Best-in-class static-site generator; "content collections" map cleanly to a project-per-folder model; zero client JS by default (matches the minimal aesthetic); first-class GitHub Pages support. |
| Styling | Plain CSS with **CSS custom properties** (design tokens) | All the blank hex codes / spacing live in one `tokens.css`; easy to fill in once the owner provides colours. No framework needed for this layout. |
| Interactivity | A few small **vanilla JS** islands | Typewriter splash, Work dropdown, project image scroller, lightbox, slider arrows. No heavy libraries. |
| Content | Markdown front-matter + an images folder **per project** | Adding a project = create one folder, drop images + one text file. Build auto-discovers it. |
| Hosting | **GitHub Pages** via **GitHub Actions** | Free, matches the requirement. Astro builds to `/dist`, Actions publishes it. |
| Forms | **Formspree** (or Web3Forms) on the contact page | GitHub Pages is static — it cannot process form posts. A free form-relay handles email delivery without a backend. |

> If the owner prefers no build step at all, the same content model can be done in plain HTML + a small build script, but Astro is recommended and assumed below.

---

## 3. Hosting & deployment (GitHub Pages)

- Deploy via **GitHub Actions** (`.github/workflows/deploy.yml`) using the official `withastro/action` + `actions/deploy-pages`.
- In repo: **Settings → Pages → Source = GitHub Actions**.
- **Base path matters:**
  - If served at `https://<user>.github.io/studio-boja/` → set `base: '/studio-boja/'` and `site: 'https://<user>.github.io'` in `astro.config.mjs`.
  - If a **custom domain** (e.g. `studioboja.com`) is used → set `base: '/'`, `site: 'https://studioboja.com'`, and add a `public/CNAME` file containing the domain.
- All internal links/asset paths must respect `base` (use Astro's `import.meta.env.BASE_URL` / `<a href={...}>` helpers) so links don't break under the `/studio-boja/` sub-path.

---

## 4. Site map & URLs

Each page has its own URL (requirement met):

| URL | Page | Notes |
|---|---|---|
| `/` | **Opening page** | Full-screen fixed background image + "studio boja" typewriter animation. |
| `/work/` | **Home page** | All projects, 2-column grid, title "interior design" (per screenshot). |
| `/work/residential/` | **Residential** | Subsection: `renovation`. |
| `/work/commercial/` | **Commercial** | Subsections stacked: `hospitality` → `offices` → `stores`. |
| `/work/graphic/` | **Graphic** | Single continuous grid, no subsections. |
| `/work/<project-slug>/` | **Project page** | Left image gallery + right description + slider arrows. |
| `/work/<project-slug>/view/` | **Full-screen image page** | Enlarged image, nav bar visible, left/right arrows, title below. May instead be a lightbox overlay with a URL hash — see [§9](#9-open-questions--gaps-owner-must-resolve). |
| `/scope/` | **Scope page** | 4 images in a row + service descriptions. (Nav label question — see §9.) |
| `/about/` | **About page** | Image left, studio description right. |
| `/contact/` | **Contact page** | Form left, contact details right. |

Navigation bar (all pages except possibly the splash): **studio name (far left)** + **WORK · SCOPE · ABOUT · CONTACT (far right)**. `WORK` has a dropdown: `residential · commercial · graphic design`.

---

## 5. Content model — how projects are added

> This is the core "make it easy to add projects" requirement. Keep it dead simple.

### Folder-per-project

```
src/content/projects/
  cp9-palma-de-mallorca/
    index.md          ← project text + metadata
    01-cover.jpg      ← images, sorted alphabetically; first = thumbnail/cover
    02.jpg
    03.jpg
  t40-bathroom/
    index.md
    01-cover.jpg
    ...
```

**To add a project, the owner does exactly two things:**
1. Create a new folder under `src/content/projects/`.
2. Drop in an `index.md` (copy the template) and any number of images.

The build **auto-discovers** the folder, picks up **all** images (sorted by filename, first = cover), generates the project page, and slots the project into the right category/subsection grid. No code edits.

### `index.md` template

```md
---
title: "CP9 Palma de Mallorca"
slug: "cp9-palma-de-mallorca"      # optional; defaults to folder name
category: "residential"            # residential | commercial | graphic
subcategory: "renovation"          # renovation | hospitality | offices | stores | "" (none for graphic)
order: 1                           # optional, controls position within its grid
---

A short description of the project. This text appears on the right side of
the project page. Write as many paragraphs as needed.
```

- Images are read straight from the folder — **not** listed in front-matter — so adding a photo is just dropping a file in.
- The **cover/thumbnail** is the first image alphabetically; prefix the cover `01-` to control it.
- `category` + `subcategory` decide which grids the project appears in.
- Placeholder content for now: reuse the tomato image + lorem text per [guidelines.md](guidelines.md) "LIST OF PROJECTS".

### Categories & subsections (from guidelines)

- **residential** → `renovation`
- **commercial** → `hospitality`, `offices`, `stores` (stacked in that order)
- **graphic** → no subsections (single grid)

Seed projects to scaffold (placeholders, from guidelines.md):
`T40 Bathroom`, `CP9 Palma de Mallorca`, `D25`, `Franciamore`, `C163`, `VEGL`, `Azores` (residential/renovation); `Elho offices` (commercial/offices); `Butique delicacy` (commercial/stores).

---

## 6. Design tokens (global styles)

All visual constants live in one `src/styles/tokens.css`. **Several are blank in `guidelines.md`** — see §9.

```css
:root {
  /* colours */
  --color-bg: #F5F5F5;            /* general background (given) */
  --color-text-primary: #______; /* general text + titles — OWNER TO PROVIDE */
  --color-text-nav: #741F19;      /* nav studio name + menu (given in guidelines text) */

  /* image grid */
  --thumb-w: 480px;
  --thumb-h: 500px;
  --project-img-max-w: 770px;     /* project page gallery */
  --fullscreen-max-w: 1100px;
  --fullscreen-max-h: 700px;

  /* type */
  --font-family: "Afacad", system-ui, sans-serif;  /* font file — OWNER TO PROVIDE */
  --font-size-base: 13px;
  --nav-name-letter-spacing: 0.09em;  /* studio name 9% */
  --nav-menu-letter-spacing: 0em;     /* menu 0% */

  /* arrow colour */
  --color-arrow: #B3B3B3;
}
```

**Hover-over thumbnail colour combos** (5 pairs, all blank in guidelines — §9). Stored as an array and assigned to projects **deterministically-but-non-sequentially**: hash the project slug → index into the 5 combos. This gives a stable, balanced, non-patterned distribution that survives rebuilds.

Typography: lower-case studio name (9% tracking), upper-case menu (0% tracking), section titles lower-case bold, subtitles lower-case regular, all per guidelines.

---

## 7. Page-by-page spec (condensed)

Full detail is in [guidelines.md](guidelines.md); this is the build checklist. Match the screenshots.

1. **Opening (`/`)** — fixed full-screen background image, "studio boja" typewriter animation, text placed per Figma. (Need Figma ref / placement — §9.)
2. **Home (`/work/`)** — nav bar; section title `interior design` top-left aligned with grid; 2-col grid of **all** projects, 480×500 frames, equal H/V spacing, continuous scroll.
3. **Category pages** — same grid; titles (lower bold) + subtitles (lower regular); residential=renovation; commercial stacks hospitality/offices/stores; graphic=single grid.
4. **Hover behaviour** — on thumbnail hover: background transitions to combo BG, image fades into BG, project **title** appears in combo text colour. Click → project page (normal site colours).
5. **Project page (`/work/<slug>/`)** — project name top-left (aligned exactly with home grid's first image/title). Left: fixed-width image column (max 770px) acting as a vertical-scroll gallery; hovering scrolls images without moving the rest of the page; click image → full-screen. Right: project name heading + description, vertically centred on the image. Between image & text: arrow (`#B3B3B3`) → next image; left arrow appears from image 2 onward.
6. **Full-screen image (`/work/<slug>/view/`)** — nav visible; image max 1100×700; left/right arrows; title below; same typography.
7. **Scope (`/scope/`)** — 4 images in one row, homepage aspect ratio, left image aligns to grid left edge, right image to grid right edge, equal spacing; a short description under each image, aligned to its image. (Need 4 service names/texts — §9.)
8. **About (`/about/`)** — image left (homepage image size), description right, text block vertically centred on image. (Draft copy exists in screenshot.)
9. **Contact (`/contact/`)** — left: form (name, email, inquiry-type dropdown with 4 service options, "tell me about your project" textarea) wired to Formspree/Web3Forms; right: "or reach out directly" + email + phone, all lower-case. (Need form endpoint + confirmed email/phone — §9.)

---

## 8. Repository structure (target)

```
studio-boja/
├─ .github/workflows/deploy.yml      # build + deploy to Pages
├─ .gitignore                        # node_modules, dist, .astro, etc.
├─ .nvmrc                            # pin Node version
├─ astro.config.mjs                  # site + base path
├─ package.json
├─ tsconfig.json
├─ README.md                         # dev + deploy instructions
├─ public/
│  ├─ fonts/                         # Afacad woff2 files (owner-provided)
│  ├─ CNAME                          # only if custom domain
│  └─ images/                        # site chrome (splash background, etc.)
├─ src/
│  ├─ content/
│  │  ├─ config.ts                   # projects collection schema
│  │  └─ projects/                   # ← one folder per project (see §5)
│  ├─ components/                    # Nav, ProjectGrid, Thumbnail, Lightbox, Slider, Typewriter…
│  ├─ layouts/                       # BaseLayout (nav + tokens)
│  ├─ pages/                         # index, work/, work/[category], work/[slug], scope, about, contact
│  └─ styles/
│     ├─ tokens.css
│     └─ global.css
├─ ADDING-A-PROJECT.md               # owner-facing how-to (see that file)
└─ PROJECT-PLAN.md                   # this document
```

---

## 9. Open questions / gaps (OWNER must resolve)

These are blank or ambiguous in the inputs. The AI should build with **clearly-marked placeholders** so filling them in later is trivial.

1. **Colours (blocking final look):**
   - Primary text colour (general text + titles) — blank.
   - Secondary/nav colour — guidelines say `#741F19`; confirm. (Splash screenshots show green, later pages red — confirm which.)
   - The **5 hover BG/text combos** — all blank.
2. **Font:** "Afacad regular 13" — supply the **Afacad** font files (`.woff2`) and confirm licensing for web use. (Pick a fallback until provided.)
3. **Nav label:** guidelines list **"Scope"**; some screenshots say **"Services"**. Confirm. (Plan assumes **Scope**.)
4. **Full-screen image:** dedicated URL (`/work/<slug>/view/`) vs. JS lightbox overlay. Plan assumes a real URL with a lightbox fallback; confirm preference.
5. **Opening page:** need the Figma reference (or exact placement) for the "studio boja" text + the splash background image. Define what happens after the animation (auto-advance to `/work/` or wait for click?).
6. **Scope page:** the 4 service names + short descriptions.
7. **Contact:** confirm email (screenshot shows `hoj@boja.com`) and phone (`+31 6 45 179 256`), the 4 inquiry-type dropdown options, and choose a form provider (Formspree/Web3Forms) — owner creates the account and supplies the form endpoint.
8. **Domain:** custom domain or `github.io` sub-path? (Decides `base`/`CNAME` — see §3.)
9. **Real content:** all project images + texts are placeholders for now; replace later via §5.

---

## 10. Implementation AI — task list

Do these in order. Use placeholders (and the tomato image) wherever real content is missing; never block on §9 — leave a clearly-marked `TODO:` instead.

1. **Scaffold** an Astro project; add `package.json`, `tsconfig.json`, `.nvmrc`, `.gitignore` (ignore `node_modules`, `dist`, `.astro`).
2. **`astro.config.mjs`** — set `site` + `base` (default to the `github.io` sub-path; leave a comment showing the custom-domain variant).
3. **GitHub Pages CI** — `.github/workflows/deploy.yml` using `withastro/action` + `actions/deploy-pages`; document enabling *Settings → Pages → GitHub Actions* in the README.
4. **Design tokens** — `src/styles/tokens.css` + `global.css` per §6, with blank hexes as obvious `TODO` placeholders. Wire up the Afacad `@font-face` pointing at `public/fonts/` (fallback for now).
5. **Content collection** — `src/content/config.ts` schema per §5; helper to read a project's images from its folder (sorted, first = cover).
6. **Layout & Nav** — `BaseLayout` with the nav bar (studio name left, menu right, equal spacing rule, dropdown on Work). Respect `BASE_URL` in all links.
7. **Components** — `ProjectGrid`, `Thumbnail` (with the 5-combo hover behaviour, deterministic slug-hash assignment), `Typewriter`, `ImageGallery`/`Slider` (project page), `Lightbox` (full-screen).
8. **Pages** — implement every URL in §4. Generate category pages and project pages dynamically from the collection.
9. **Seed placeholders** — create the seed project folders from §5 using the tomato placeholder image + lorem text so the grids/pages are populated.
10. **Contact form** — wire to the chosen relay with a `TODO` endpoint placeholder.
11. **README.md** — local dev (`npm install` / `npm run dev` / `npm run build`), how deploy works, and a short pointer to `ADDING-A-PROJECT.md`.
12. **Verify** — `npm run build` succeeds; check spacing/sizes (480×500, 770, 1100×700), each page reachable by its own URL, links work under the `base` sub-path.

---

## 11. Owner (you) — checklist

What you need to do (most can happen in parallel with the build; the AI uses placeholders meanwhile):

1. **Create the GitHub repo** named `studio-boja` and push the code the AI generates.
2. **Enable Pages:** repo *Settings → Pages → Source = GitHub Actions*.
3. **Decide domain:** keep `username.github.io/studio-boja` or set a custom domain (then tell the AI so it sets `base`/`CNAME`).
4. **Provide colours:** primary text hex, confirm nav hex (`#741F19`?), and the **5 hover BG/text combos**.
5. **Provide the Afacad font files** (`.woff2`) + confirm web licensing; drop them in `public/fonts/`.
6. **Confirm the "Scope" vs "Services" nav label.**
7. **Provide opening-page details:** Figma/placement for the "studio boja" text + the splash background image, and the after-animation behaviour.
8. **Provide Scope content:** 4 service names + short descriptions.
9. **Contact:** confirm email/phone, list the 4 inquiry-type options, create a Formspree/Web3Forms account and give the AI the form endpoint.
10. **Add real projects later** by following [ADDING-A-PROJECT.md](ADDING-A-PROJECT.md) — drop a folder with `index.md` + images. (No developer needed.)

---

## 12. Suggested milestones

1. **Scaffold + deploy pipeline** — empty Astro site live on GitHub Pages (proves hosting works).
2. **Content model + Home/Category grids** — seed placeholder projects render in the correct grids.
3. **Project + full-screen pages** — gallery scroll, slider arrows, lightbox.
4. **Remaining pages** — opening splash, scope, about, contact.
5. **Polish** — hover combos, typewriter, spacing/alignment to match screenshots.
6. **Content swap** — owner fills in §9 items and replaces placeholders with real projects.
