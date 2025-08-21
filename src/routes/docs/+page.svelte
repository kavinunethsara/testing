<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import Tile from '$lib/components/Tile.svelte';
</script>

<Article>
	<h2>Custom Tiles</h2>
	<div class="row mob-col equal">
		<Tile
			title="Writing Custom Tiles"
			description="Create your own tiles for TiledWidgets"
			color="purple"
			link="/docs/tiles"
		/>
		<Tile
			title="Publishing Tiles"
			description="Add your tile to the Tile Store. "
			link="https://store.kde.org/p/2238981"
		/>
	</div>
	<h2>Building From Source</h2>
	<div class="row mob-col equal">
		<Tile
			title="Build Instructions"
			description="Build TiledScreen from source."
			color="green"
			link="#plasmagetnew"
			aligned
		/>
	</div>
</Article>

<style lang="scss">
	@use '/src/sass/units';
	@use '/src/sass/colors';
	.details {
		display: flex;
		flex-direction: column;

		padding: units.$s-lg;

		background-color: colors.$view;
	}
</style>
