import { json } from '@sveltejs/kit';
import { basename, dirname } from 'node:path';

export const prerender = true;

const modules = import.meta.glob('/src/routes/custom_tiles/**/*.svx', {
  eager: true
});

export const GET = () =>
json(
  Object.entries(modules).map(([filepath, module]) => {
    const slug = basename(dirname(filepath));
    const { metadata }: any = module;
    return {
      slug,
      link: `/custom_tiles/${slug}`,
      ...metadata
    };
  })
);
