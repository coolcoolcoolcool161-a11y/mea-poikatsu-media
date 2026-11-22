import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    service: z.string(),
    category: z.string(),
    benefit: z.string(),
    code: z.string().optional(),
    codeLabel: z.string().optional(),
    code2: z.string().optional(),
    code2Label: z.string().optional(),
    conditions: z.string().optional(),
    verified: z.string().optional(),
    url: z.string().url().optional(),
    officialSite: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    dateModified: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
