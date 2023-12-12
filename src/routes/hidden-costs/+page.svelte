<script>
<<<<<<< HEAD
	/** @type {import('./$types').PageData} */
=======
	import Icon from '@iconify/svelte';
	let currentPage = 'product';

	function switchPage() {
		currentPage = 'checkout';
	}
	function switchPageToCheckout() {
		currentPage = 'switchPage';
	}
	function switchPageToAGB() {
		currentPage = 'AGB';
	}

	let data = [
		{ id: 1, name: 'Cheetos Crunchos Sweet Chilli', price: 2.5 },
		{ id: 2, name: 'Nerds Rainbow Edition', price: 3.0 },
		{ id: 3, name: 'Hersheys Pretzels Special Edition', price: 3.0 },
		{ id: 4, name: 'Gesamtpreis', price: '8,50' }
	];
>>>>>>> 290239403bd46a164a24bc01594bf9b898c35235
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
			-

			<div class="flex justify-center px-64 py-64 bg-base-800">
				<div on:click={switchPage}>
					<button class="btn btn-info">
						Warenkorb
						<Icon icon="typcn:shopping-cart" />
					</button>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		<!-- Das sind die Produkte, mit der Bezeichnung und Preisen -->
	{/if}
	{#if currentPage === 'checkout'}
		<div class="flex justify-center px-64 py-64 bg-base-800">
			<img src="img/LogoHiddenCosts.png" alt="Logo" style="border-radius:1500px" />
		</div>

		<div class="grid grid-cols-3 gap-x-3 gap-y-5 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-5">
			<a href="1" class="group">
				<div class="aspect-h-0.1 aspect-w-0.1 w-full overflow-hidden rounded-lg">
					<img
						src="https://64ce14de7ce972b09bc4-112e2f65dc15f65f089f4c9770786a52.ssl.cf3.rackcdn.com/00-325231-468372748-OLIUvU_q.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Cheetos Crunchos Sweet Chilli</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">2,50€</p>
			</a>
			<a href="2" class="group">
				<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg">
					<img
						src="https://img.fruugo.com/product/1/17/866239171_max.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Nerds Rainbow Edition</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
			</a>
			<a href="3" class="group">
				<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg">
					<img
						src="https://m.media-amazon.com/images/I/71s8Uyy1FCL.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Hersheys Pretzels Special Edition</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
			</a>
		</div>
		<button class="checkout-button" on:click={switchPageToCheckout}>Zur Kasse</button>
	{/if}

	{#if currentPage === 'switchPage'}
		<div class="flex justify-center px-64 py-64 bg-base-800">
			<table>
				<thead>
					<tr><th>ID</th> <th>Name</th> <th>Preis</th> </tr>
				</thead>
				<tbody>
					{#each data as item (item.id)}
						<tr> <td>{item.id}</td> <td>{item.name}</td> <td>{item.price}</td> </tr>
					{/each}
				</tbody>
			</table>

			<button class="AGB" on:click={switchPageToAGB}>AGB</button>
		</div>
	{/if}

	{#if currentPage === 'switchPageToAGB'}
		<div class="flex justify-center px-64 py-64 bg-base-800" />
		<div>ljghvlcgj cvlhkhjkkäjhbklvjgkh gvhjguijopü</div>
		<p>jhgdfhsgyffgdfuzuoiuzutfdfgfgiopouggff</p>
	{/if}
</div>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}
	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}
	th {
		background-color: #f2f2f2;
	}
</style>
