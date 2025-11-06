<script lang="ts">
	import { page } from '$app/state';
	import { crossfade } from 'svelte/transition';

	let [send, recieve] = crossfade({});

	const currentPage = $derived(page.data.page);

	const pages = [
		{
			page: 'home',
			link: '/',
			name: 'Home',
			primary: true
		},
		{
			page: 'about',
			link: '/about',
			name: 'About',
			primary: true
		},
		{
			page: 'download',
			link: '/download',
			name: 'Download',
			primary: true
		},
		{
			page: 'store',
			link: '/store',
			name: 'Store',
			primary: false
		},
		{
			page: 'docs',
			link: '/docs',
			name: 'Dev Docs',
			primary: false
		}
	];

	const primaryPages = pages.filter(page => page.primary )
	const secondaryPages = pages.filter(page => !page.primary )

	const currrentTitle = $derived(pages.find(page => page.page == currentPage) ? ": " + pages.find(page => page.page == currentPage)?.name : "" );
</script>

<svelte:head>
	<title>Tiled Widgets {currrentTitle}</title>
</svelte:head>

<div class="row container">
	<div class="col navigation">
		<nav class="row">
			{#each primaryPages as loc}
				<a href={loc.link}>
					{loc.name}
					{#if loc.page == currentPage}
						<div class="positioner" in:recieve={{ key: '1' }} out:send={{ key: '1' }}></div>
					{/if}
				</a>
			{/each}
		</nav>
	</div>
	<div class="col navigation fixed">
		<nav class="row">
			{#each secondaryPages as loc}
				<a href={loc.link}>
					{loc.name}
					{#if loc.page == currentPage}
						<div class="positioner" in:recieve={{ key: '1' }} out:send={{ key: '1' }}></div>
					{/if}
				</a>
			{/each}
		</nav>
	</div>
</div>

<style lang="scss" scoped>
	@use 'sass:color';

	@use '/src/sass/colors';
	@use '/src/sass/units';

	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		align-items: center;
		justify-content: center;

		z-index: 1000;
	}

	.navigation {
		flex-grow: 0;
		width: fit-content;

		margin: units.$s-sm;
		padding: units.$s-sm;

		font-size: 12pt;

		background-color: colors.$view;
		background: colors.$view;
		color: colors.$on-view;
		z-index: 1000;

		box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.8);

		border-radius: 100vh;

		&.fixed {
			position: fixed;
			right: 0;
			background-color: color.adjust(colors.$view, $alpha: -0.4);

			backdrop-filter: blur(10px);

			a .positioner, a:visited .positioner {
				background-color: color.adjust(colors.$accent, $hue: 100);
			}
		}

		@media screen and (max-width: 800px) {
			&.fixed {
				top: calc(12pt + units.$s-sm * 7);
				right: unset;
				margin: auto;
				margin-top: 0;
				margin-right: 0;
			}
		}

		a,
		a:visited {
			display: flex;
			position: relative;

			padding: units.$s-sm;
			padding-left: units.$s-md;
			padding-right: units.$s-md;
			z-index: 2;

			color: colors.$on-view;
			text-decoration: none;

			.positioner {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;

				border-radius: 100vh;
				background: colors.$accent;
				z-index: -1;

				opacity: 0.85;
			}

			&:first-of-type .positioner {
				left: 2px;
			}

			&:last-of-type .positioner {
				right: 2px;
			}
		}
	}
</style>
