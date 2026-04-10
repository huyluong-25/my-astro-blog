// @ts-check

import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	server: {
		host: true,
		port: 8788,
	},
	preview: {
		host: true,
		port: 8788,
	},
	integrations: [mdx(), sitemap()],
});
