<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import type { ScrollDetail } from '.';

	const dispatch = createEventDispatcher();
	export let debounce = 0;
	let div: HTMLDivElement;
	let timeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		const scroll = () => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				const bounds = div.getBoundingClientRect();
				const detail: ScrollDetail = {
					scrollY: window.scrollY,
					top: bounds.top,
					left: bounds.left,
					height: window.outerHeight,
					width: window.outerWidth
				};

				dispatch('scroll', detail);
			}, debounce);
		};

		scroll();
		window.addEventListener('scroll', scroll);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('scroll', scroll);
		};
	});
</script>

<div bind:this={div} />
