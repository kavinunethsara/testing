<script lang="ts">
	import DetailTile from '$lib/components/DetailTile.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header title="Tiled Screen" subtitle="A configurable full screen launcher with tiles" image="/tscreen.png" thumbnail />
<DetailTile title="blah" description="
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
" thumbnail="/cover.webp" />
<DetailTile title="blah" description="nah" color="dark" thumbnail="/cover.webp" direction="right" />
<DetailTile title="blah" description="nah" thumbnail="/cover.webp" color="purple" />
