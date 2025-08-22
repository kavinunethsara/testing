<script lang="ts">
	import '../app.css';
	import '../sass/typography.scss';
	import '../sass/page.scss';
	import '$lib/syntax.css';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<Navigation />
{@render children()}
