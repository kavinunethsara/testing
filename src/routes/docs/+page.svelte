<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import Tile from '$lib/components/Tile.svelte';
	import { base } from '$app/paths';
</script>

<Article>
	<h2>Custom Tiles</h2>
	<div class="row mob-col equal">
		<Tile
			title="Writing Custom Tiles"
			description="Create your own tiles for Tiled Widgets"
			color="purple"
			link="{base}/docs/tiles"
		/>
		<Tile
			title="Publishing Tiles"
			description="Add your tile to the Tile Store. "
			link="{base}/docs/publish"
		/>
	</div>
	<h2>Building From Source</h2>
	<div class="row mob-col equal">
		<Tile
			title="Build Instructions"
			description="Build Tiled Screen from source."
			color="green"
			link="{base}/docs/build"
			aligned
		/>
	</div>
</Article>
