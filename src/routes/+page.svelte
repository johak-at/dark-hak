<script>
	import { patterns } from '$lib/store';
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

<style>
	.done {
		text-decoration: line-through;
	}
</style>
