<script lang="ts">
	import type { Snippet } from "svelte"

    let { children, cutout = false, onActivate = () => {} }: { children: Snippet, cutout:Boolean, onActivate: Function } = $props();
</script>

<button onclick={(event) => onActivate(event)}>
    {@render children?.()}
</button>

<style lang="scss" scoped>
    @use '/src/sass/colors';
    @use '/src/sass/units';

    button {
        display: flex;
        flex-direction: row;

        padding: units.$s-sm;
        padding-left: units.$s-md;
        padding-right: units.$s-md;

        width: fit-content;

        outline: none;
        border: 1px solid transparent;
        @include units.round;
        background-color: colors.$accent;
    }
</style>
