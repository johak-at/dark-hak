<<<<<<< Updated upstream
<script>
	import Icon from '@iconify/svelte';
	let currentPage = 'product';

	function switchPage() {
		currentPage = 'checkout';
		
	}
	function switchPageToCheckout(){
		currentPage ="switchPage";
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
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={switchPage} >
			<Icon icon="typcn:shopping-cart" />
		</div>
	{/if}
	{#if currentPage === 'checkout'}
	<div class="flex justify-center px-64 py-64 bg-base-800">Mein Warenkorb</div>
	

	<div class="grid grid-cols-1 gap-x-3 gap-y-5 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
	  <a href="#" class="group">
		<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg bg-gray-100 ">
		  <img src="https://64ce14de7ce972b09bc4-112e2f65dc15f65f089f4c9770786a52.ssl.cf3.rackcdn.com/00-325231-468372748-OLIUvU_q.jpg" alt="sweet" class="group-hover:opacity-75">
		</div>
		<h3 class="mt-4 text-sm text-gray-700">Cheetos Crunhos Sweet Chilli</h3>
		<p class="mt-1 text-lg font-medium text-gray-900">2,50€</p>
	  </a>
	  <a href="#" class="group">
		<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg bg-gray-100">
		  <img src="https://img.fruugo.com/product/1/17/866239171_max.jpg" alt="sweet" class="group-hover:opacity-75">
		</div>
		<h3 class="mt-4 text-sm text-gray-700">Nerds Rainbow Edition</h3>
		<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
	  </a>
	  <a href="#" class="group">
		<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg bg-gray-100">
		  <img src="https://m.media-amazon.com/images/I/71s8Uyy1FCL.jpg" alt="sweet" class="group-hover:opacity-75">
		</div>
		<h3 class="mt-4 text-sm text-gray-700">Hersheys Pretzels Special Edition</h3>
		<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
	  </a>
	  <button class="checkout-button" on:click={switchPageToCheckout}>Zur Kasse</button>
	</div>
	{/if}
</div>
<style>
</style>
=======
<div class="mockup-browser border bg-base-300 max-w-[90%]">
	<div class="mockup-browser-toolbar">
		<div class="input">https://sicherlichecht.shop</div>
	</div>
	<div>Willkommen bei Sicherlich echt!</div>
	<p>
		Wir sind ein Unternehmen aus Österreich und verkaufen Süßigkeiten aus der ganzen Welt. Wir sind
		zwar erst am Anfang, doch wollen in Zukunft groß hinaus.
	</p>

	<div class="flex justify-center px-64 py-64 bg-base-800">
		<button class="btn btn-info">Info</button>
		<button class="btn btn-success">Success</button>
		<button class="btn btn-warning">Warning</button>
		<button class="btn btn-error">Error</button>
	</div>
</div>
>>>>>>> Stashed changes
