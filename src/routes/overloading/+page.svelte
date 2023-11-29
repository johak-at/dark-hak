<script>
	import { onMount } from 'svelte';

	let flagStyle = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '200px',
		height: 'auto'
	};

	onMount(() => {
		animateFlag();
	});

	function animateFlag() {
		setInterval(() => {
			$: flagStyle = {
				...flagStyle,
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`
			};
		}, 500);
	}
</script>

<div class="navbar bg-gradient-to-r from-blue-500 via-white to-red-500 text-black test" />
<div>
	<img
		src="https://www.johak.at/wp-content/uploads/2020/08/business-plus-hak-pos.svg"
		alt="blogo"
	/>
	<div
		style="position: {flagStyle.position}; top: {flagStyle.top}; left: {flagStyle.left}; transform: {flagStyle.transform}; width: {flagStyle.width}; height: {flagStyle.height}"
	>
		<img src="img/french.svg" alt="French Flag" />
	</div>
	<h1 class="h-12 text-4xl pb-10 handschrift">Wähle deine Fremdsprache</h1>
	<div class="bg-cyan-500 rounded-3xl flex w-96 p-10">
		<ul>
			<form>
				<div class="grid w-96 h-20 rounded bg-red-700 text-primary-content place-content-center">
					<li class="">
						<input type="radio" name="radio" class="radio radio-error align-middle" checked /> FRANZÖSISCH
					</li>
				</div>

				<div class="grid w-96 h-20 rounded bg-accent text-accent-content place-content-center">
					<li><input type="radio" name="radio" class="radio align-middle" /> spanisch</li>
				</div>

				<div
					class="grid w-96 h-20 rounded bg-secondary text-secondary-content place-content-center"
				>
					<li><input type="radio" name="radio" class="radio align-middle" /> italienisch</li>
				</div>
			</form>
		</ul>
	</div>
</div>

<div class="mockup-phone border-primary">
	<div class="camera" />

	<div class="display">
		<div class="artboard artboard-demo phone-1">Stefano ruft an...</div>
	</div>
</div>

<style>
</style>
