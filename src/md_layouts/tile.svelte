<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Overlain from '$lib/components/Overlain.svelte';

	const {
		children,
		title,
		description,
		download,
		author,
		license,
		email,
		publishedOn,
		lastUpdate,
		version
	}: StoreItem = $props();
</script>

<Overlain>
	<div class="flex col">
		<div class="flex row mob-col">
			<h1 class="title">{title}</h1>
			<a href={download}>
				<Button color="purple">
					<div style="font-size: 13pt; padding: 1ch;">Download</div>
				</Button>
			</a>
		</div>
		<div class="flex row mob-col">
			<p class="desc">{description}</p>
			<p class="author">
				<a href={email}>{author}</a> : {license}
			</p>
		</div>
		<div class="flex row mob-col">
			<p class="desc">
				Version {version} : {new Date(lastUpdate).toLocaleDateString()}
			</p>
			<p class="author">Added on: {new Date(publishedOn).toLocaleDateString()}</p>
		</div>
	</div>
	{@render children?.()}
</Overlain>

<style lang="scss">
	@use '/src/sass/units';

	.title {
		margin: units.$s-sm !important;
		text-align: left !important;
		flex-grow: 1;
	}

	.desc {
		margin: units.$s-sm;
		font-weight: bold;
		text-align: left !important;
		flex-grow: 1;
	}

	.author {
		width: max-content;
		opacity: 0.75;
	}

	.right {
		align-items: flex-end;

		@media screen and (max-width: 600px) {
			& {
				align-items: flex-start;
			}
		}
	}
</style>
