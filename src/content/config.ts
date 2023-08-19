import { defineCollection, z } from "astro:content";

const BlogPost = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.date(),
  updatedDate: z.date(),
  heroImage: z.string().optional(),
  archived: z.boolean().optional().default(true),
});

const blog = defineCollection({
  schema: BlogPost,
});

const page = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog };
