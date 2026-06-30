#!/usr/bin/env bash
# Usage: npm run new <project-slug>
# Creates src/content/projects/<slug>/index.md and public/projects/<slug>/
# so a new project is ready to receive images and text.

set -euo pipefail

SLUG="${1:-}"

if [[ -z "$SLUG" ]]; then
  echo "Usage: npm run new <project-slug>"
  echo "Example: npm run new my-new-project"
  exit 1
fi

CONTENT_DIR="src/content/projects/$SLUG"
PUBLIC_DIR="public/projects/$SLUG"

if [[ -d "$CONTENT_DIR" ]]; then
  echo "Project '$SLUG' already exists at $CONTENT_DIR"
  exit 1
fi

mkdir -p "$CONTENT_DIR"
mkdir -p "$PUBLIC_DIR"

cat > "$CONTENT_DIR/index.md" << 'TEMPLATE'
---
title: "Project Title"
category: "residential"      # residential | commercial | graphic
subcategory: "renovation"    # renovation | hospitality | offices | stores | leave empty for graphic
order: 99
---

A short description of the project. This text appears on the right side of the project page.
Write as many paragraphs as needed.
TEMPLATE

echo ""
echo "Project '$SLUG' created!"
echo "  Text: $CONTENT_DIR/index.md"
echo "  Images: $PUBLIC_DIR/"
echo ""
echo "Next steps:"
echo "  1. Edit $CONTENT_DIR/index.md — update title, category, subcategory, and description."
echo "  2. Drop your images into $PUBLIC_DIR/ (prefix with 01-, 02-, ... to control order)."
echo "  3. Commit and push — the site rebuilds automatically."
