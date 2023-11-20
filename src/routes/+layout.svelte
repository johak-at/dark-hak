<script>
	import { onNavigate } from '$app/navigation';
	import '../app.postcss';

	let theme = 'synthwave';

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
	data-theme={theme}
	class="min-h-screen flex flex-col items-center justify-center gap-5 py-32 px-4"
>
	<select bind:value={theme} class="fixed top-0 right-0">
		<option value="synthwave">synthwave</option>
		<option value="cyberpunk">cyberpunk</option>
	</select>

	<slot />
</div>
