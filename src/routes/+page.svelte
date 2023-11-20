<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}
</script>

<p class="prose">
	Als <em>Dark Patterns</em> bzw. <em>Deceptive Design</em> werden insbesondere Online-Designpraktiken
	bezeichnet, die User*innen zu Handlungen veranlassen, welche sie unbeeinflusst so nicht setzen würden.
	Sie basieren auf der gezielten Ausnutzung einer Reihe menschlicher Schwächen.
</p>

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
