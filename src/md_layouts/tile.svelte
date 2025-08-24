<script lang="ts">
	import type { Snippet } from "svelte";
  import Overlain from "\$lib/components/Overlain.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<Overlain>
  {@render children()}
</Overlain>
