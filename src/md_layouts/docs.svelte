<script lang="ts">
	import type { Snippet } from "svelte";
  import Article from "$lib/components/Article.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<Article contents>
  {@render children()}
</Article>
