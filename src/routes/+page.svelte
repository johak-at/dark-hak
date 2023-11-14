<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}
</script>

<ul class="flex flex-col items-center gap-5">
	{#each $patterns as pattern}
		<li>
			<a href="/{pattern.slug}" class="transition-all hover:underline {pattern.done ? 'done' : ''}"
				>{pattern.name}</a
			>
		</li>
	{/each}
</ul>

<button on:click={clearProgress} class="btn">Clear Progress</button>

<style>
	.done {
		text-decoration: line-through;
	}
</style>
