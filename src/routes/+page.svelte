<script lang="ts">
	export let data;
</script>

<div class="whitespace-pre-wrap font-mono text-sm">
	{@html JSON.stringify(data, null, '  ')}
</div>
