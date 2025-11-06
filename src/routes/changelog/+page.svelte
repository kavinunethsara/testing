<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import DetailTile from '$lib/components/DetailTile.svelte';
	import { base } from '$app/paths';
</script>

<Header title="Version 2.1" subtitle="Introducing Tiled Launcher" />

<DetailTile
	title="Tiled Launcher"
	description="A new addition to Tiled Wdigets, Tiled Launcher is a normal popup widget with a builtin tile grid. Click here for more information."
	link="{base}/tiledlauncher"
	color="green"
	thumbnail="{base}/fed.png"
/>
<DetailTile
	title="First Time Wizard"
	description="New users of the widget will be presented with a short introductory tutorial with interactive elements"
	color="purple"
	direction="right"
	thumbnail="{base}/wizard.gif"
/>
<DetailTile
	title="Better expanded views"
	description="Expanded views no longer open full screen in Tiled Screen — instead using a popup dialog."
	color="dark"
	thumbnail="{base}/networkexpanded.png"
/>
<DetailTile
	title="Improved key navigation"
	description="Tiled Screen toolbar as well as Tiles are now Tab selectable."
	color="blue"
	direction="right"
/>
