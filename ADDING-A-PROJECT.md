# Adding a project to studio boja.

You do **not** need to touch any code. Adding a project is two steps: make a folder, drop in your files.

## Step 1 — Create a folder

Inside `src/content/projects/`, create a new folder named after the project, using
lower-case words separated by hyphens (this becomes the page URL):

```
src/content/projects/d25/
```

## Step 2 — Add your images

Drop any number of images into that folder. They are shown in **alphabetical order**,
and the **first one is used as the thumbnail/cover**. Prefix filenames with numbers to
control the order:

```
src/content/projects/d25/
  01-cover.jpg
  02.jpg
  03.jpg
```

## Step 3 — Add the text file

Create a file called `index.md` in the same folder and copy this template, then edit it:

```md
---
title: "D25"
category: "residential"      # residential | commercial | graphic
subcategory: "renovation"    # renovation | hospitality | offices | stores | leave empty for graphic
order: 3                      # optional — lower numbers appear first in the grid
---

A short description of the project. This text shows on the right side of the
project page. Write as many paragraphs as you like.
```

### What the fields mean

| Field | What to put |
|---|---|
| `title` | The project name shown on the site. |
| `category` | Which main section it belongs to: `residential`, `commercial`, or `graphic`. |
| `subcategory` | The sub-section. Residential → `renovation`. Commercial → `hospitality`, `offices`, or `stores`. Graphic → leave empty (`""`). |
| `order` | Optional. Controls position within its grid (smaller = earlier). |

## Step 4 — Publish

Commit and push the new folder to GitHub. The site rebuilds automatically and the new
project appears:
- in the **home** grid,
- in its **category** page (and the right sub-section),
- on its own **project page** at `/work/d25/`.

## Removing or editing a project

- **Edit:** change the images or text in the folder and push.
- **Remove:** delete the folder and push.

That's it — no code changes ever needed.
