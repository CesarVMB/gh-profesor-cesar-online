import { defineCollection, z } from "astro:content";

export const collections = {
  publicaciones: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(), // ✅ Astro lo convierte a Date
      category: z.enum(["matematicas", "fisica", "quimica"]),
      tags: z.array(z.string()).optional(),
      youtube: z.string().optional(),
      image: z.string().optional(),
    }),
  }),
};
