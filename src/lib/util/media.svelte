<script lang="ts">
	import Resize from './resize.svelte';

	let mediaElement: HTMLDivElement;
	export let mobile: boolean | undefined = undefined;

	function handleResize() {
		if (mediaElement) {
			mobile = mediaElement.offsetParent === null;
		}
	}
</script>

<Resize on:resize={handleResize} />
<div class="hidden md:block" bind:this={mediaElement} />
