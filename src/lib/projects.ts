// Glob all images under src/content/projects/**
// Using ?url to get resolved asset URLs (dev: direct path, prod: hashed)
const allImages = import.meta.glob<string>(
  "/src/content/projects/**/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true, query: "?url", import: "default" }
);

/** Derive the URL slug from a content entry id (e.g. "d25/index.md" → "d25"). */
export function entrySlug(id: string): string {
  return id.replace(/\/index(\.md)?$/, "").replace(/\.md$/, "");
}

// A file named "thumbnail.<ext>" is used only as the grid cover, not in the gallery
const isThumbnail = (k: string) => /\/thumbnail\.[^/]+$/i.test(k);

function projectKeys(slug: string): string[] {
  const prefix = `/src/content/projects/${slug}/`;
  return Object.keys(allImages)
    .filter((k) => k.startsWith(prefix))
    .sort();
}

export function getProjectImages(slug: string): string[] {
  return projectKeys(slug)
    .filter((k) => !isThumbnail(k))
    .map((k) => allImages[k]);
}

export function getProjectCover(slug: string): string {
  const thumb = projectKeys(slug).find(isThumbnail);
  if (thumb) return allImages[thumb];
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
