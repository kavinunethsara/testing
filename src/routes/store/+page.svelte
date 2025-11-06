<script lang="ts">
	import Overlain from '$lib/components/Overlain.svelte';
	import ThumbView from '$lib/components/scrollview/ThumbView.svelte';
	import { onMount } from 'svelte';

	let items: Array<StoreItem> = $state([]);

	onMount(async () => {
		const results = await fetch('api/tiles.json');
		items = await results.json();
	})

</script>

<Overlain>
	<h1>Store</h1>
	<ThumbView {items} />
</Overlain>
