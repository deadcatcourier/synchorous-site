import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.string(),
    category: z.string().optional(),
    version: z.string().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    author: z.string().optional(),
    created: z.string().optional(),
    updated: z.string().optional(),
  }),
});

const glossary = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.string(),
    category: z.string().optional(),
    summary: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  essays,
  glossary,
};

