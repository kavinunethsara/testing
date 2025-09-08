<script lang="ts">
	let {
		title,
		description,
		color = 'red',
		direction = 'left',
		thumbnail,
		link,
		aligned = true
	}: {
		title: string;
		description: string;
		color?: string;
		direction?: 'left' | 'right';
		thumbnail?: string;
		link?: string;
		aligned?: boolean;
	} = $props();
</script>

<a class={['tile row', `bg-${color}`, { aligned }, direction]} href={link}>
	{#if thumbnail && direction == 'left'}
		<img src={thumbnail} class="thumbnail" alt="icon" />
	{/if}
	<div class="col content">
		<h3 class="title">{title}</h3>
		<p class="desc">{description}</p>
	</div>
	{#if thumbnail && direction == 'right'}
		<img src={thumbnail} class="thumbnail" alt="icon" />
	{/if}
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

		&[href] {
			cursor: pointer;
		}

		* {
			z-index: 2;
		}

		&:hover {
			gap: units.$s-md;
		}

		.thumbnail {
			flex-grow: 0;
			height: units.$s-xlg * 4;
			width: fit-content;
		}

		.background {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			background-size: cover;
			background-position: center;

			z-index: 1;
			opacity: 0.3;
		}

		@media screen and (max-width: 800px) {
			& {
				flex-direction: column;
				text-align: center !important;
			}
		}
	}

	.content {
		flex-grow: 0;

		width: fit-content;
		max-width: 50ch;

		padding: units.$s-md;
		gap: units.$s-md;
	}

	.icon {
		flex-grow: 0;
		width: fit-content;
		@include units.round();
	}

	.aligned .content {
		width: 100%;
	}

	.title,
	.desc {
		margin: 0;
	}

	.left {
		text-align: right;
	}

	.right {
		text-align: left;
	}

	.box {
		display: block;
		background-color: black;
		padding: 30px;
	}
</style>
