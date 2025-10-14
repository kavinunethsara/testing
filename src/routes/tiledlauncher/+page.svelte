<script lang="ts">
	import DetailTile from '$lib/components/DetailTile.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header
	title="Tiled Launcher"
	subtitle="A Launcher with a configurable tile grid."
	image="/tscreen.png"
	thumbnail
/>

<DetailTile
	title="Configurable"
	description="
		An application launcher that adapts to your workflow. With configurable tile layout and custom tiles, your application laucnher can look and function exactly the way you want.
	"
	thumbnail="/cover.webp"
/>

<DetailTile
	title="Not just a Launcher"
	description="
		Extensive configuration options and configurable grid allows TiledLauncher to be anything — from an Application Laucnher to a Dashboard, or even a System Tray.
	"
	color="dark"
	thumbnail="/cover.webp"
	direction="right"
/>

<DetailTile
	title="Familiar"
	description="
		Start Screen was an unique feature in Windows 8/8.1. If you are one of the few who found it perfect for your taste you would feel right at home in TiledScreen.
	"
	color="green"
	thumbnail="/cover.webp"
/>

<DetailTile
	title="Download"
	description="
		Install TiledScreen on Plasma 6 usnig built-in Get New Widgets, or download it maually.
	"
	color="light"
	direction="right"
	link="/download"
/>
