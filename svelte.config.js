import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				docs : path.join(__dirname, "./src/md_layouts/docs.svelte"),
				_ : path.join(__dirname, "./src/md_layouts/tile.svelte"),
			}
		})
	],
	kit: {
		adapter: adapter(),
		paths: {
			base: '/tiledwidgets'
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
