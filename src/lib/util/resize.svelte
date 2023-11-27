<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let debounce = 0;
	let timeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		const resize = () => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				dispatch('resize');
			}, debounce);
		};

		resize();
		window.addEventListener('resize', resize);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', resize);
		};
	});
</script>
