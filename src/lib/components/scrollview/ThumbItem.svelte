<script lang="ts">
	let {
		title,
		description,
		color = 'red',
		link,
	}: StoreItem = $props();
</script>

<a class={['tile column', `bg-${color}`]} href={link}>
  <img src="/tscreen.png" alt="cins" />
	<div class="col content">
		<h3 class="title">{title}</h3>
		<p class="desc">{description}</p>
	</div>
</a>

<style lang="scss" scoped>
	@use 'sass:color';
	@use '/src/sass/units';
	@use '/src/sass/colors';

	.tile {
		position: relative;
		padding: units.$s-md;

		gap: units.$s-xsm;
		align-items: center;
		justify-content: center;

		text-decoration: none;

		transition: 0.25s ease-out;
		cursor: pointer;


		* {
			z-index: 2;
		}

		&:hover {
			gap: units.$s-md;
		}
	}

	.content {
		flex-grow: 0;

		width: fit-content;
		max-width: 90ch;

		padding: units.$s-md;
		gap: units.$s-md;
	}

	.title,
	.desc {
		margin: 0;
	}
</style>
