<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	const { children, contents = false }: { children: Snippet; contents?: boolean } = $props();
	let toc: HTMLDivElement | undefined = $state();
	let content: HTMLElement;
	let active: boolean = $state(false);

	onMount(() => {
		if (!contents) return;
		const headings = content.querySelectorAll('h2, h3');
		headings.forEach((heading, index) => {
			const link_name = heading.textContent?.replaceAll(' ', '');

			const anchor = document.createElement('a');
			anchor.id = link_name || '';
			heading.appendChild(anchor);

			const pointer = document.createElement('a');
			pointer.textContent = (index + 1).toString() + '. ' + heading.textContent;
			pointer.href = '#' + link_name;
			if (!toc) return;
			toc.appendChild(pointer);
		});
	});
</script>

<div class="article">
	<div class="background"></div>
	<div class="overlay"></div>
	{#if contents}
		<button class="toc-button" aria-label="Table of Contents">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" width="4ch">
				<path
					style="fill:currentColor;fill-opacity:1;stroke:none"
					d="M 2 2 L 2 3 L 8 3 L 8 2 L 2 2 z M 11 2 L 11 3 L 12 3 L 12 5 L 11 5 L 11 6 L 14 6 L 14 5 L 13 5 L 13 3 L 14 3 L 14 2 L 11 2 z M 5 4 L 5 5 L 6 5 L 6 4 L 5 4 z M 7 4 L 7 5 L 8 5 L 8 4 L 7 4 z M 9 4 L 9 5 L 10 5 L 10 4 L 9 4 z M 2 8 L 2 9 L 6 9 L 6 8 L 2 8 z M 9 8 L 9 9 L 10 9 L 10 11 L 9 11 L 9 12 L 11 12 L 12 12 L 14 12 L 14 11 L 13 11 L 13 9 L 14 9 L 14 8 L 12 8 L 11 8 L 9 8 z M 11 9 L 12 9 L 12 11 L 11 11 L 11 9 z M 3 10 L 3 11 L 4 11 L 4 10 L 3 10 z M 5 10 L 5 11 L 6 11 L 6 10 L 5 10 z M 7 10 L 7 11 L 8 11 L 8 10 L 7 10 z "
					class="ColorScheme-Text"
				/>
			</svg>

			<div class={['toc', { active }]} bind:this={toc}></div>
		</button>
	{/if}
	<article class="content" bind:this={content}>
		{@render children()}
	</article>
</div>

<style lang="scss">
	@use 'sass:color';
	@use '/src/sass/units';
	@use '/src/sass/colors';

	.article {
		display: flex;
		flex-direction: row;
		position: relative;

		min-height: 100dvh;

		padding: units.$s-lg;
	}

	.toc-button {
		display: flex;
		position: fixed;

		padding: units.$s-md;
		margin: units.$s-md;
		bottom: 0;
		right: 0;

		background-color: colors.$view;
		color: colors.$on-view;
		border: none;
		z-index: 3;

		&:hover .toc,
		&:focus-within .toc {
			display: flex;
		}

		.toc {
			display: none;
			flex-direction: column;
			position: fixed;

			padding: units.$s-md;
			margin: units.$s-lg;
			bottom: 0;
			right: 0;

			background-color: colors.$view;
			z-index: 4;

			:global(a) {
				display: flex;

				padding: units.$s-sm;

				color: colors.$on-view;
				text-decoration: none;

				&:hover {
					color: colors.$accent;
				}
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: 100ch;
		margin: auto;
		margin-top: 30vh;

		z-index: 2;
	}

	.content :global(h1) {
		text-align: center;
		padding: 0;
		margin: 0;
		margin-bottom: 2ch;
	}

	.content :global(h2) {
		padding: 0;
		margin: 0;
		margin-bottom: 2ch;
		margin-top: 2ch;
	}

	.content :global(p) {
		font-size: 16px;
		line-height: 1.5;
	}

	.content :global(a[href]) {
		text-decoration: none;
		font-weight: bold;
		color: colors.$accent;
	}

	.background {
		position: absolute;

		top: 0;
		left: 0;
		right: 0;
		height: 100vh;

		background-image: url('/cover.webp');
		background-size: cover;
		background-position: center;
		z-index: 0;
	}

	.overlay {
		position: absolute;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background: linear-gradient(colors.$overlay, 150vh, colors.$background 200vh);
		background-size: 100vw 200vh;
		background-repeat: no-repeat;
		background-position-y: -100vh;
		animation: reveal 0.5s ease-out;

		z-index: 1;
	}

	@keyframes reveal {
		0% {
			background-position-y: 0vh;
		}
		100% {
			background-position-y: -100vh;
		}
	}
</style>
