<script lang="ts">
	let {
		title = 'Title',
		subtitle = 'Subtitle',
		thumbnail = false,
		image = "/cover.webp",
	}: { title?: String; subtitle?: String; thumbnail?: boolean; image ?: string } = $props();
</script>

<header>
	<div class="overlay" style="background-image: url('{image}');"></div>
	<div class="content">
		{#if thumbnail}
			<div class="thumb bg-purple" style="background-image: url('{image}');"></div>
		{/if}
		<h1 class="title">{title}</h1>
		<h2 class="subtitle">{subtitle}</h2>
	</div>
</header>

<style scoped lang="scss">
	@use '/src/sass/colors';
	@use '/src/sass/units';

	header {
		display: flex;
		flex-direction: column;

		position: relative;
		width: 100%;
		min-height: 100dvh;
		padding: units.$s-xlg;

		background-color: colors.$overlay;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;

		padding: units.$s-md;
		gap: units.$s-md;

		align-items: center;
		justify-content: center;
	}

	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		z-index: -1;
	}

	.title {
		margin: 0;
		font-weight: bold;
		font-size: 48pt;
		letter-spacing: 0.2ch;
	}

	.subtitle {
		margin: 0;
		font-weight: normal;
		font-size: 18pt;
	}

	.thumb {
		width: 30ch;
		aspect-ratio: 1;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		@include units.round();
	}
</style>
