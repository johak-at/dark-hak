<script>
	import Icon from '@iconify/svelte';
	let currentPage = 'product';

	function switchPage() {
		currentPage = 'checkout';
	}
</script>
<div class="mockup-browser border bg-base-300 max-w-[90%] bg-fixed">
	<div class="mockup-browser-toolbar">
		<div class="input">https://sicherlichecht.shop</div>
	</div>

	{#if currentPage === 'product'}
		<div>
			<div>Willkommen bei Sicherlich echt!</div>
			<p>Wir sind ein Unternehmen aus Österreich und verkaufen Süßigkeiten aus der ganzen Welt.</p>
			<div>Wir sind zwar erst am Anfang, doch wollen in Zukunft groß hinaus.</div>

			<div class="flex justify-center px-64 py-64 bg-base-800">
				<button class="btn btn-info">Produkte</button>
				<button class="btn btn-error">Error</button>
			</div>
		</div>
		<div on:click={switchPage}>
			<Icon icon="typcn:shopping-cart" />
		</div>
	{/if}
	{#if currentPage === 'checkout'}
		<div>Mein Warenkorb</div>
	{/if}
</div>
<style>
</style>