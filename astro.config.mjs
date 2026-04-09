// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	output: 'static',
	server: {
		port: 8788,
	},
	preview: {
		port: 8788,
	},
	integrations: [mdx(), sitemap()],
});
