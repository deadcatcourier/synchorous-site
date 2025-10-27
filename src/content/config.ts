import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    published: z.date().optional(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    published: z.date().optional(),
    tags: z.array(z.string()).optional(),
    externalLink: z.string().url().optional(),
  }),
});

export const collections = { essays, updates };
