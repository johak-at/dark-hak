<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let countdown = 60;
	let stock = 10;
	onMount(() => {
		setInterval(() => (countdown = countdown - 1), 1000);
		setInterval(() => (stock = stock - 1), Math.random() * 10000 + 5000);
	});
</script>

<h1>home</h1>
<p>this is the home page.</p>
<button class="btn btn-primary">hallo</button>
<Icon icon="game-icons:bloody-sword" class="text-red-700 text-7xl" />
<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content items-center">
	<span class="countdown font-mono text-5xl">
		<span style="--value:{countdown};" />
	</span>
	sec
</div>
<div class="radial-progress text-primary" style="--value:{stock};">{stock}</div>
