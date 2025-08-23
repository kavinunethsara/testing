<script lang="ts">
	import DetailTile from '$lib/components/DetailTile.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header title="Tiled Screen" subtitle="A Configurable Full-screen Launcher with Tiles" image="/tscreen.png" thumbnail />

<DetailTile
	title="Configurable"
	description="
		An application launcher that adapts to your workflow. With configurable tile layout and custom tiles, your application laucnher can look and function exactly the way you want.
	"
	thumbnail="/cover.webp"
/>

<DetailTile
	title="Extensible"
	description="
		Download costum tiles or create your own. TiledWdgets tile system allows you to create tiles that can do anything a plasmoid can right from your application launcher.
	"
	color="dark"
	thumbnail="/cover.webp"
	direction="right"
/>

<DetailTile
	title="Input Compatibility"
	description="
		Tiles with large touch areas allow for easy access in touch-enabled devices. Vertical scrolling, resizable tile grid cells can easily tweaked to suit a high density mouse controlled environment.
	"
	thumbnail="/cover.webp"
	color="purple"
/>
