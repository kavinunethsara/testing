import { json } from '@sveltejs/kit';
import { basename, dirname } from 'node:path';
import { base } from '$app/paths';

export const prerender = true;

const modules = import.meta.glob(`/src/routes/custom_tiles/**/*.svx`, {
	eager: true
});

const colors = ['red', 'green', 'blue', 'dark', 'light', 'purple'];

export const GET = () =>
	json(
		Object.entries(modules).map(([filepath, module]) => {
			const slug = basename(dirname(filepath));
			const { metadata }: any = module;
			return {
				slug,
				color: colors[Math.round(Math.random() * 10) % 6],
				link: `${base}/custom_tiles/${slug}`,
				...metadata
			};
		})
	);
