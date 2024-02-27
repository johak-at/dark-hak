<script>
	$: sum = data.reduce(function (total, candy) {
		return total + candy.price * candy.quantity;
	}, 0);
	let data = [
		{
			id: 1,
			name: 'Cheetos Crunchos Sweet Chilli',
			price: 2.5,
			quantity: 3,
			picture: 'img/crisps.jpg'
		},
		{ id: 2, name: 'Nerds Rainbow Edition', price: 3.5, quantity: 2, picture: 'img/candy.jpg' },
		{
			id: 3,
			name: 'Hersheys Pretzels Special Edition',
			price: 3.5,
			quantity: 2,
			picture: 'img/chocolate.jpg'
		}
	];
</script>

<div
	class=" grid grid-cols-[40px_1fr_40px_40px] lg:grid-cols-[200px_40px_1fr_40px_40px] place-items-center gap-10"
>
	{#each data as candy (candy.id)}
		<img src={candy.picture} alt={candy.name} class=" hidden lg:block" />
		<div>{candy.quantity} x</div>
		<h3 class="font-bold justify-self-start">{candy.name}</h3>
		<div>{candy.price}</div>
		<div class="justify-self-end">{candy.price * candy.quantity}</div>
	{/each}

	<div class="sum justify-self-end">Summe: {sum}</div>
</div>

<style>
	.sum {
		grid-column: -1/1;
		/* grid-row-start: -1; */
	}
</style>
