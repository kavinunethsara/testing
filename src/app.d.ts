// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Snippet } from 'svelte';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	class StoreItem {
		title: string;
		domain: string;
		description: string;
		official: boolean = false;
		version: number;
		download: string;
		thumbnail: string;
		author: string;
		email: string;
		license: string;
		website?: string;
		tags?: string;
		lastUpdate: string;
		publishedOn: string;
		cover: string = this.thumbnail;
		color?: string;
		link?: string;
		children?: Snippet;
	}
}

export {};
