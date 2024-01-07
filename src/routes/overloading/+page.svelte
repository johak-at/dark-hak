<script>
	import { onMount } from 'svelte';
	import { patterns } from '$lib/store.js';

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

	let selectedLanguage = 'french';

	let mastered = 'neutral';

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

	function checkOverloading() {
		if (selectedLanguage !== 'french') {
			$patterns[4].done = true;
			mastered = 'good';
			const french = document.querySelector('.french');
			if (french !== null) {
				french.classList.add('hidden');
			}
		} else {
			mastered = 'bad';
		}
	}
	function setNeutral() {
		mastered = 'neutral';
	}
</script>

{#if mastered === 'neutral'}
	<div class="navbar bg-gradient-to-r from-blue-500 via-white to-red-500 text-black test" />
	<div>
		<div
			style="position: {flagStyle.position}; top: {flagStyle.top}; left: {flagStyle.left}; transform: {flagStyle.transform}; width: {flagStyle.width}; height: {flagStyle.height}"
		>
			<img src="img/french.svg" alt="French Flag" class="z-10" />
		</div>
		<h1 class="h-12 text-4xl pb-20">Wähle deine Fremdsprache</h1>
		<div class="flex flex-col">
			<ul>
				<form class="border" id="radioButtons">
					<div class="grid h-20 rounded-t bg-red-500 text-primary-content place-content-center">
						<li class="text-black text-3xl font-bold">
							<input
								type="radio"
								bind:group={selectedLanguage}
								value="french"
								id="french"
								class="radio radio-error align-middle"
								checked
								on:click={hidePhone}
							/>
							<label for="french">FRANZÖSISCH</label>
						</li>
					</div>

					<div class="grid h-20 bg-white text-accent-content place-content-center">
						<li class="text-gray-300 hover:line-through">
							<input
								type="radio"
								bind:group={selectedLanguage}
								value="spanish"
								class="radio align-middle"
								on:click={showPhone}
							/> spanisch
						</li>
					</div>

					<div class="grid h-20 rounded-b bg-blue-400 text-secondary-content place-content-center">
						<li class="text-gray-500 italy">
							<input
								type="radio"
								bind:group={selectedLanguage}
								value="italian"
								class="radio align-middle hover: line-through"
								on:click={showPhone}
							/>
							italienisch
						</li>
					</div>
				</form>
			</ul>
			<button
				on:click={checkOverloading}
				class="bg-gradient-to-r from-blue-500 via-white to-red-500 text-3xl font-bold p-5 rounded-2xl mt-5 color-black"
			>
				<button type="button" class="text-black">
					{#if selectedLanguage !== 'french'}
						<span class="loader loading loading-spinner loading-md text-black" />
					{/if}
					<span class="submit pl-2 text-black">Submit</span></button
				>
			</button>
		</div>
	</div>

	<div class="mockup-phone border-primary absolute left-10 hidden">
		<div class="camera" />

		<div class="display">
			<div class="artboard artboard-demo phone-1 handybg">
				<div class="chat chat-start">
					<div class="chat-image avatar">
						<div class="w-10 rounded-full">
							<img alt="Tailwind CSS chat bubble component" src="img/franzose2.png" />
						</div>
					</div>
					<div class="chat-header">
						Michél de France
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
			<h3 class="font-bold text-lg text-black">Bonjour!</h3>
			<p class="py-4 text-black">
				Wähl eine andere Sprache, wenn du willst, dass ich dir antworte. Ich spreche nur
				Französisch.
			</p>
		</div>
	</dialog>

	<div class="card w-96 bg-base-100 shadow-xl hidden absolute right-10 top-20">
		<figure>
			<img src="img/peter.png" alt="Shoes" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Französischunterricht!</h2>
			<p>Die Französischlehrerin "Crème de la Crème" ist nur deux kilomètres von dir entfernt</p>
		</div>
	</div>
{:else if mastered === 'good'}
	<div class="prose">
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Begriffserklärung</div>
			<div class="collapse-content">
				<p>
					Unter dem Dark Pattern <strong>Overloading</strong> versteht man eine exogene
					Reizüberflutung, die im Rahmen von unzähligen Pop-Up Fenstern oder anderen Auffälligkeiten
					wie grellen Farben oder viel Text beim Benutzer auftaucht. Die betroffene Person wird
					überfordert, will den Reizen entfliehen und trifft dadurch eine manipulierte, unüberlegte
					und voreilige Entscheidung. Man wird förmlich “zubombardiert” und dies verhilft den
					Unternehmen oftmals zu Daten, welche der Benutzer ansonsten nicht preisgegeben hätte.
					<br />
					Es bezieht sich auf die problematische Nutzung von dunklen (irreführenden oder manipulativen)
					Design-Praktiken in digitalen Schnittstellen, um Nutzer zu überlasten oder zu täuschen. Diese
					Praktiken werden häufig von Websites oder Anwendungen eingesetzt, um bestimmte Verhaltensweisen
					der Nutzer zu fördern, die oft nicht in deren Interesse liegen.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Paradebeispiel</div>
			<div class="collapse-content">
				<p>
					Ein Paradebeispiel für Overloading, in Kombination mit verschiedensten Dark Patterns ist
					der asiatische Onlineshop <strong>Shein</strong>.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Problematik</div>
			<div class="collapse-content">
				<p>
					Diese Praktiken stehen im Widerspruch zu den Prinzipien einer transparenten, ethischen
					Benutzererfahrung. Das Dark Pattern <strong>Overloading</strong> kann zu Frustration, Vertrauensverlust
					und einem negativen Image für die betreffende Website oder Anwendung führen. Aus ethischer
					Sicht ist es wichtig, dass digitale Schnittstellen die Integrität und Autonomie der Nutzer
					respektieren, anstatt sie absichtlich zu überfordern oder zu täuschen.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Quellen</div>
			<div class="collapse-content">
				<p>ChatGPT, ...</p>
			</div>
		</div>

		<div class="collapse bg-base-200 mt-10">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				Unser Projekt
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				<p>
					Unser Projekt soll den Benutzer dazu animieren, Französisch als Fremdsprache zu wählen.
				</p>
				<ul class="text-primary-content">
					<li>Französisch = erste Option</li>
					<li>Französisch = fettgedruckt + großgeschrieben</li>
					<li>Französisch hat größere Schriftgröße</li>
					<li>Italienisch & Spanisch = heller</li>
					<li>Italienisch & Spanisch wird beim Hovern verändert</li>
					<li>...</li>
				</ul>
			</div>
		</div>
	</div>
{:else if mastered === 'bad'}
	<div class="card w-96 bg-base-100 shadow-xl image-full">
		<figure><img src="img/french.svg" alt="french-flag" /></figure>
		<div class="card-body">
			<h2 class="card-title">VERLOREN!</h2>
			<p>Jetzt musst du die französische Sprache lernen. Bedanke dich später!</p>
			<div class="card-actions justify-end">
				<button
					class="btn bg-gradient-to-r from-blue-500 via-white to-red-500 text-black"
					on:click={setNeutral}>Zurück</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.italy:hover::after {
		content: '🤮🤮🤮';
	}
</style>
