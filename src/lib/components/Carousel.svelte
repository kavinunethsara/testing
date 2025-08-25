<script lang="ts">
	let { images }: { images: Array<string> } = $props();
	let current = $state(0);

	const get_image_class = (key: number) => {
		if (key < current) return 'left';
		if (key == current) return 'current';
		if (key > current) return 'right';
	};
</script>

<div class="carousel">
	<div class="container">
		{#each images as image, key}
			<img src={image} class={get_image_class(key)} alt="Current carousel" />
		{/each}
	</div>
	<div class="thumbnails">
		{#each images as image, key}
			<button
				onclick={() => {
					current = key;
				}}
			>
				<img
					src={image}
					alt="Carousel image {key}"
					class={key == current ? 'active' : 'inactive'}
				/>
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '/src/sass/colors.scss';
	@use '/src/sass/units.scss';
	.carousel {
		display: block;
		position: relative;

		width: 100%;
		margin: units.$s-md;
		height: fit-content;

		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: row;

		img {
			max-width: 100%;
			transition: 0.5s ease-in-out;

			&.left {
				margin-left: -100%;
			}

			&.current {
				margin-left: 0%;
			}

			&.right {
				margin-left: 100%;
			}
		}
	}

	.thumbnails {
		display: flex;
		flex-direction: row;
		gap: units.$s-sm;

		padding: units.$s-sm;
		justify-content: center;

		button {
			background-color: transparent;
			border: none;
			outline: none;
			padding: 0;
			margin: 0;
		}

		img {
			height: 8ch;
		}
	}

	.inactive {
		opacity: 0.5;
	}
</style>
