<script>
	import { onNavigate } from '$app/navigation';
	import { theme } from '$lib/store';
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
	class="min-h-screen flex flex-col items-center justify-center gap-5 py-32 px-4"
>
	<select bind:value={$theme} class="fixed top-1 right-1 select select-bordered">
		<option value="synthwave">synthwave</option>
		<option value="cyberpunk">cyberpunk</option>
		<option value="johak">johak</option>
	</select>

	<slot />
</div>
