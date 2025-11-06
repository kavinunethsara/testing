<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Tile from '$lib/components/Tile.svelte';
</script>

<Header
	title="Tiled Widgets"
	subtitle="A collection of highly customizable widgets for KDE Plasma 6."
/>
<Tile
	title="Version 2.1 Release"
	description="See what's new in TiledWidgets 2.1"
	link="/changelog/"
	color="light"
/>
<div class="row mob-col equal">
	<Tile
		title="TiledScreen"
		description="A fullscreen launcher that uses a customizable tile grid."
		background="/tscreen.png"
		link="/tiledscreen"
	/>
	<Tile
		title="TiledLauncher"
		description="A laucher popup with a customizable tile grid."
		color="purple"
		background="/fed.png"
		link="/tiledlauncher"
	/>
</div>
<Tile
	title="Store"
	description="Download and Install additional tile for Tiled Widgets."
	color="dark"
	link="/store"
	aligned
/>
<Tile
	title="Documentation"
	description="API and Developer documentation for developing your own tiles."
	color="blue"
	link="/docs"
	aligned
/>
