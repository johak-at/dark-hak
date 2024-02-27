<script>
	import { onNavigate } from '$app/navigation';
	import { theme } from '$lib/store';
	import Icon from '@iconify/svelte';
	import '../app.postcss';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div
	data-theme={$theme}
	class="min-h-screen flex flex-col items-center justify-center gap-10 py-32 px-4"
>
	<header class="flex absolute top-0 w-full justify-between items-center p-3 bg-base-100">
		<a href="/" class="text-4xl flip"><Icon icon="streamline:emergency-exit" /></a>
		<div class="flex gap-4 items-baseline">
			<label for="theme">Theme:</label>
			<select bind:value={$theme} class="select select-bordered" id="theme">
				<option value="synthwave">synthwave</option>
				<option value="cyberpunk">cyberpunk</option>
				<option value="johak">johak</option>
			</select>
		</div>
	</header>

	<slot />
</div>

<style>
	.flip {
		transform: scaleX(-1);
	}
</style>
