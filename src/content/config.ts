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
    created: z.date().optional(),
    updated: z.date().optional(),
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

const updates = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    created: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  essays,
  glossary,
  updates,
};

