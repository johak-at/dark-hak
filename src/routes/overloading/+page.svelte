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
	<h1 class="h-12 text-4xl pb-10">Wähle deine Fremdsprache</h1>
	<div class="bg-cyan-500 rounded-3xl flex w-96 p-10">
		<ul>
			<form>
				<div class="grid w-96 h-20 rounded bg-red-500 text-primary-content place-content-center">
					<li class="text-black text-3xl font-bold">
						<input type="radio" name="radio" class="radio radio-error align-middle" checked /> FRANZÖSISCH
					</li>
				</div>

				<div class="grid w-96 h-20 rounded bg-white text-accent-content place-content-center">
					<li class="text-gray-300 hover:line-through">
						<input type="radio" name="radio" class="radio align-middle" /> spanisch
					</li>
				</div>

				<div class="grid w-96 h-20 rounded bg-blue-400 text-secondary-content place-content-center">
					<li class="text-gray-500 italy">
						<input type="radio" name="radio" class="radio align-middle hover: line-through" />
						italienisch
					</li>
				</div>
			</form>
		</ul>
	</div>
</div>

<div class="mockup-phone border-primary z-50">
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

<style>
	.italy:hover::after {
		content: '🤮🤮🤮';
	}
	.handybg {
		/* background-image: url('img/tower.jpg'); */
	}
</style>
