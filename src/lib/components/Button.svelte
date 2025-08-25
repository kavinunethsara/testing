<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		outline = false,
		onActivate = () => {},
		color = null
	}: {
		children: Snippet;
		outline?: boolean;
		color?: string | null;
		onActivate?: Function;
	} = $props();
</script>

<button onclick={(event) => onActivate(event)} class={[{ outline }, color ? 'bg-' + color : '']}>
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
		height: fit-content;

		outline: none;
		border: 1px solid transparent;
		@include units.round;
		background-color: colors.$accent;
		cursor: pointer;

		&.outline {
			border-color: colors.$text;
			background-color: transparent !important;
			color: colors.$text !important;
		}
	}
</style>
