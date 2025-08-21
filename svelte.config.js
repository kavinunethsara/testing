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
			layout: path.join(__dirname, "./src/md_layouts/docs.svelte")
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
