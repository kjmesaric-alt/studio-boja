/**
 * Returns the sorted list of image paths for a given project slug.
 * Images live in public/projects/<slug>/ and are served as /projects/<slug>/<file>.
 *
 * We use import.meta.glob to collect all project images at build time, then
 * filter to the requested slug.
 */

// Glob all images under public/projects/**
// Keys are like: /public/projects/cp9-palma-de-mallorca/01-cover.jpg
const allImages = import.meta.glob<{ default: string }>(
  "/public/projects/**/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true }
);

/** Derive the URL slug from a content entry id (strips the .md extension). */
export function entrySlug(id: string): string {
  return id.replace(/\.md$/, "");
}

export function getProjectImages(slug: string): string[] {
  const prefix = `/public/projects/${slug}/`;
  return Object.keys(allImages)
    .filter((k) => k.startsWith(prefix))
    .sort()
    .map((k) => k.replace("/public", "")); // → /projects/<slug>/file.jpg
}

export function getProjectCover(slug: string): string {
  const images = getProjectImages(slug);
  return images[0] ?? "/images/placeholder.svg";
}

/**
 * Assigns one of 5 hover colour combos to a project deterministically,
 * based on a simple hash of the slug. Non-sequential, stable across rebuilds.
 */
export function getHoverCombo(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  // Use a non-sequential permutation: map hash % 5 through a fixed shuffle
  const shuffle = [1, 4, 2, 5, 3];
  return shuffle[hash % 5];
}
