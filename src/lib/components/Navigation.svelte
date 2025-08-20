<script lang="ts">
	import { page } from '$app/state';
	import { crossfade } from 'svelte/transition';

	let [send, recieve] = crossfade({});

	const currentPage = $derived(page.data.page);

	const pages = [
		{
			page: 'home',
			link: '/',
			name: 'Home'
		},
		{
			page: 'about',
			link: '/about',
			name: 'About'
		},
		{
			page: 'download',
			link: '/download',
			name: 'Download'
		}
	];
</script>

<div class="row container">
	<div class="col navigation">
		<nav class="row">
			{#each pages as loc}
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
