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
			flagStyle = {
				...flagStyle,
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`
			};
		}, 500);
	}

	function showPhone() {
		const phone = document.querySelector('.mockup-phone');
		if (phone !== null) {
			phone.classList.remove('hidden');
		}
		const modal = document.querySelector('#my_modal_3');
		if (modal !== null) {
			modal.showModal();
		}
	}

	function hidePhone() {
		const phone = document.querySelector('.mockup-phone');
		if (phone !== null) {
			phone.classList.add('hidden');
		}
	}

	const myTimeOut = setTimeout(() => {
		showUnterricht();
	}, 10000);

	function showUnterricht() {
		const unterricht = document.querySelector('.card');
		if (unterricht !== null) {
			unterricht.classList.remove('hidden');
		}
	}
</script>

<div class="navbar bg-gradient-to-r from-blue-500 via-white to-red-500 text-black test" />
<div>
	<div
		style="position: {flagStyle.position}; top: {flagStyle.top}; left: {flagStyle.left}; transform: {flagStyle.transform}; width: {flagStyle.width}; height: {flagStyle.height}"
	>
		<img src="img/french.svg" alt="French Flag" class="z-10" />
	</div>
	<h1 class="h-12 text-4xl pb-10">Wähle deine Fremdsprache</h1>
	<div class="bg-cyan-500 rounded-3xl flex w-96 p-10">
		<ul>
			<form>
				<div class="grid w-96 h-20 rounded bg-red-500 text-primary-content place-content-center">
					<li class="text-black text-3xl font-bold">
						<input
							type="radio"
							name="radio"
							id="french"
							class="radio radio-error align-middle"
							checked
							on:click={hidePhone}
						/>
						<label for="french">FRANZÖSISCH</label>
					</li>
				</div>

				<div class="grid w-96 h-20 rounded bg-white text-accent-content place-content-center">
					<li class="text-gray-300 hover:line-through">
						<input type="radio" name="radio" class="radio align-middle" on:click={showPhone} /> spanisch
					</li>
				</div>

				<div class="grid w-96 h-20 rounded bg-blue-400 text-secondary-content place-content-center">
					<li class="text-gray-500 italy">
						<input
							type="radio"
							name="radio"
							class="radio align-middle hover: line-through"
							on:click={showPhone}
						/>
						italienisch
					</li>
				</div>
			</form>
		</ul>
	</div>
</div>

<div class="mockup-phone border-primary absolute left-10 hidden">
	<div class="camera" />

	<div class="display">
		<div class="artboard artboard-demo phone-1 handybg">
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component" src="img/franzose.jpg" />
					</div>
				</div>
				<div class="chat-header">
					Stéphanie de France
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div class="chat-bubble">Französisch ist eine WELTSPRACHE🌏</div>
				<div class="chat-footer opacity-50" />
			</div>
			<div class="chat chat-end">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS chat bubble component" src="img/nikolas-pb.png" />
					</div>
				</div>
				<div class="chat-header">
					Nikolus aus Caorle
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div class="chat-bubble">Ich will auch ein Mann von Welt sein!!</div>
				<div class="chat-footer opacity-50">Seen just now</div>
			</div>
		</div>
	</div>
</div>

<dialog id="my_modal_3" class="modal">
	<div class="modal-box bg-gradient-to-r from-blue-500 via-white to-red-500">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<h3 class="font-bold text-lg">Bonjour!</h3>
		<p class="py-4">
			Wähl eine andere Sprache, wenn du willst, dass ich dir antworte. Ich spreche nur Französisch.
		</p>
	</div>
</dialog>

<div class="card w-96 bg-base-100 shadow-xl hidden absolute right-10 top-20">
	<figure>
		<img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">Französischunterricht!</h2>
		<p>Die Französischlehrerin "Crème de la Crème" ist nur deux kilomètres von dir entfernt</p>
	</div>
</div>

<style>
	.italy:hover::after {
		content: '🤮🤮🤮';
	}
</style>
