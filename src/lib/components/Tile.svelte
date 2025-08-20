<script lang="ts">
	let {
		title,
		description,
		color = 'red',
		icon,
		background,
		link,
		external = false,
		aligned = false
	}: {
		title: string;
		description: string;
		color?: string;
		icon?: string;
		background?: string;
		link?: string;
		external?: boolean;
		aligned?: boolean;
	} = $props();
</script>

<a class={['tile row', `bg-${color}`, { aligned }]} href={link}>
	{#if icon}
		<img src="/icons/{icon}.svg" class="thumbnail" alt="icon" />
	{/if}
	<div class="col content">
		<h3 class="title">{title}</h3>
		<p class="desc">{description}</p>
	</div>
	{#if link}
		<div class="icon next">
			{#if !external}
			<svg
				width="36px"
				height="36px"
				stroke-width="1"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentcolor"
				><path
					d="M8 12H16M16 12L12.5 8.5M16 12L12.5 15.5"
					stroke="currentcolor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path><path
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					stroke="currentcolor"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			>
			{:else}
			<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">
				<!--
				SPDX-FileCopyrightText: 2024 Carl Schwan <carl@carlschwan.eu>
				SPDX-License-Identifier: LGPL-3.0-only OR LicenseRef-KDE-Accepted-LGPL
				-->
				<path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 10.000641,8.0008275 V 10.00042 L 2.000167,10.000584 2,2.0001643 4.0000006,2.0000002 4.0000007,1 1,1.0001643 1.000167,11.000584 11.000641,11.000421 V 8.0008275 M 6.0004738,1.9999998 9.283674,2.0096898 5.4754464,5.8174465 6.1825535,6.5245535 9.990781,2.7167967 l 0.0097,3.2832027 0.999999,7e-7 -7e-6,-5 H 6.0004733" class="ColorScheme-Text" />
			</svg>
			{/if}
		</div>
	{/if}
	{#if background}
		<div class="background" style="background-image: url('{background}');"></div>
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
		cursor: pointer;

		* {
			z-index: 2;
		}

		&:hover {
			gap: units.$s-md;
		}

		.thumbnail {
			flex-grow: 0;
			height: units.$s-xlg;
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
	}

	.content {
		flex-grow: 0;

		width: fit-content;
		max-width: 90ch;

		padding: units.$s-md;
		gap: units.$s-md;
	}

	.icon {
		flex-grow: 0;
		width: fit-content;
	}

	.aligned .content {
		width: 100%;
	}

	.title,
	.desc {
		margin: 0;
	}

	.box {
		display: block;
		background-color: black;
		padding: 30px;
	}
</style>
