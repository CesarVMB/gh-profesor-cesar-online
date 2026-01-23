import { defineCollection, z } from "astro:content";

const publicaciones = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.enum(["matematicas", "fisica", "quimica"]),
    tags: z.array(z.string()).optional(),

    youtube: z.string().trim().min(1).optional(),

    image: z.string().trim().min(1).optional(),
  }),
});

export const collections = { publicaciones };
