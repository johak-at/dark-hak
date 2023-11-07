<script>
	import '../app.postcss';
	let theme = 'synthwave';
</script>

<div data-theme={theme} class="min-h-screen flex flex-col items-center justify-center gap-5">
	<select bind:value={theme} class="fixed top-0 right-0">
		<option value="synthwave">synthwave</option>
		<option value="cyberpunk">cyberpunk</option>
		<option value="coffee">coffee</option>
	</select>

	<slot />
</div>
