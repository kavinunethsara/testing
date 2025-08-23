<script lang="ts">
  import ThumbItem from "./ThumbItem.svelte";

  let { items }:{ items: Array<StoreItem> } = $props();
  const left = $derived(items.filter((_, index) => index % 2 == 0));
  const right = $derived(items.filter((_, index) => index % 2 != 0));
</script>

<div class="row mob-col equal">
  <div class="flex col">
    {#each left as item }
      <ThumbItem {...item} />
    {/each}
  </div>
  <div class="flex col">
    {#each right as item }
      <ThumbItem {...item} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use '/src/sass/units.scss';

  .row, .col {
    gap: units.$s-sm;
  }
</style>
