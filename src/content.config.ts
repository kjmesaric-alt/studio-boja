import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["residential", "commercial", "graphic"]),
    subcategory: z
      .enum(["renovation", "hospitality", "offices", "stores", ""])
      .default(""),
    // Higher numbers appear first; a project without a number goes to the very top
    order: z.number().optional().default(Number.MAX_SAFE_INTEGER),
  }),
});

export const collections = { projects };
