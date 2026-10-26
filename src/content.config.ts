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
    order: z.number().optional().default(99),
  }),
});

export const collections = { projects };
