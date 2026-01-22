import { defineCollection, z } from "astro:content";

export const publicaciones = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(["matematicas", "fisica", "quimica"]),
    tags: z.array(z.string()).optional(),
    youtube: z.string().url().optional(),
    image: z.string().optional(),
  }),
});
