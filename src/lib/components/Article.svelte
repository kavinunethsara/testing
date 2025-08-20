<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="article">
	<div class="background"></div>
	<div class="overlay"></div>
	<article class='content'>
		{@render children()}
	</article>
</div>

<style lang="scss">
	@use 'sass:color';
	@use '/src/sass/units';
	@use '/src/sass/colors';

	.article {
		display: flex;
		flex-direction: column;
		position: relative;

		min-height: 100dvh;

		padding: units.$s-lg;
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
		text-align: center;
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

		background-image: url("/cover.webp");
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
		0% { background-position-y: 0vh; }
		100% { background-position-y: -100vh; }
	}

</style>
