import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    highlights: z.array(z.string()).optional(),
    company: z.string().optional(),
    imageUrl: z.string().url().optional(),
  }),
});

const extensionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/extensions' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    installs: z.string(),
    version: z.string(),
    marketplaceUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    icon: z.string(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    color: z.enum(['primary', 'secondary', 'tertiary', 'accent']).default('primary'),
  }),
});

export const collections = {
  projects: projectsCollection,
  extensions: extensionsCollection,
  experience: experienceCollection,
};
