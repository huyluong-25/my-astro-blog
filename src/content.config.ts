import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().optional(),
		}),
});

const toeic = defineCollection({
	loader: glob({ base: './src/content/toeic', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		order: z.number().int().nonnegative().optional(),
		category: z.string().optional(),
		categoryLabel: z.string().optional(),
		categoryIcon: z.string().optional(),
		categoryColor: z.string().optional(),
	}),
});

export const collections = { blog, toeic };
