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
					Unter dem Dark Pattern <strong>Overloading</strong> versteht man eine exogene Reizüberflutung,
					die im Rahmen von unzähligen Pop-Up Fenstern oder anderen Auffälligkeiten wie grellen Farben
					oder viel Text beim Benutzer auftaucht. Die betroffene Person wird überfordert, will den Reizen
					entfliehen und trifft dadurch eine manipulierte, unüberlegte und voreilige Entscheidung. Man
					wird förmlich “zubombardiert” und dies verhilft den Unternehmen oftmals zu Daten, welche der
					Benutzer ansonsten nicht preisgegeben hätte.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Paradebeispiel</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Problematik</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Quellen</div>
			<div class="collapse-content">
				<p>hello</p>
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
					Unser Projekt spielt auf einer Fake-Johak Seite und soll den Benutzer animieren,
					Französisch als Fremdsprache zu wählen. Dies kann sehr gut beobachtet werden, wenn man auf
					die Auswahlfelder achtet und ihre Anordnung, bei der Französisch als erstes aufgelistet
					wird und automatisch angewählt ist. Weiters kann man beobachten, dass eine französische
					Flagge stets durch den Bildschirm fliegt, die man nicht entfernen oder ausblenden kann.
					Der Benutzer soll hier von den anderen Optionen „spanisch“ und „italienisch“ möglichst gut
					abgelenkt werden und so die Fremdsprache „französisch“ wählen. Zusätzlich zu den bereits
					vorhandenen Ablenkungen werden nach geringer Zeit auch einige Pop-Up Fenster zum Vorschein
					kommen, die mit einem Timer oder on:Click event automatisch gesteuert werden. Eines der
					Pop-Ups hat das Erscheinungsbild eines Handys, auf dem geschrieben wird: „Michel de France
					ruft an“. Die zwei Hauptziele dieses Pop-Ups sind den Benutzer abzulenken und seine
					Gedanken zu manipulieren, da der Name und das Bild am Telefon einen französischen
					Landsmann verkörpern. Mit diesem Trick wird der Nutzer im Unterbewusstsein daraufhin
					gesteuert, die Fremdsprache „französisch“ zu wählen. Ein anderes Pop-Up wiederum tritt
					erst in Erscheinung, wenn eine andere Fremdsprache ausgewählt wird. Dieses Pop-Up wird
					manipulativ eingesetzt, um den Nutzer zu verunsichern und die Entscheidung zu
					hinterfragen. Bei der Sprache italienisch beispielsweise, werden nach dem Anklicken des
					Kästchens drei Übelkeitsemojis angezeigt. Mit der Aussage im Pop-Up Fenster “wähle eine
					andere Sprache, ich kann nur französisch” wird suggeriert, dass französisch die bessere
					Wahl wäre und dass es ein Fehler wäre eine andere Option zu wählen. Beachtlich auf der
					Website sind auch die Color-Patterns rot, weiß und blau, die offensichtlich in der
					französischen Flagge enthalten sind und so wie alles andere darauf abzielt die Sprache
					“französisch” zu wählen. Die repetitive Verwendung dieser Farben sorgt im Unterbewusstsein
					dafür, die Entscheidung in eine gewisse Richtung zu lenken. Zusätzlich werden der linke
					und der rechte Bildschirmrand der Website mit der Zeit immer voller von Pop-Up Fenstern
					werden, die alle ein französisches Thema und französische Wörter enthalten dies passiert,
					jedoch nur wenn man “italienisch” oder “spanisch” wählt. Wird jedoch “französisch”
					ausgewählt verschwinden diese Pop-Up Fenster wieder. Ein anderes Pop-Up wiederum tritt
					erst in Erscheinung, wenn eine andere Fremdsprache ausgewählt wird. Dieses Pop-Up wird
					manipulativ eingesetzt, um den Nutzer zu verunsichern und die Entscheidung zu
					hinterfragen. Mit der Aussage im Pop-Up Fenster wird suggeriert, dass französisch die
					bessere Wahl wäre und dass es ein Fehler wäre eine andere Option zu wählen. Mit dem Pop-Up
					Fenster „Französischunterricht!“ wird ein Tinder-ähnliches Fenster aufgerufen, in dem eine
					attraktive Französischlehrerin angeblich nur zwei Kilometer vom Standort des Benutzers
					entfernt ist und bereit sei, französisch mit dem glücklichen Kursteilnehmer zu lernen.
					Zusätzlich ist der Name dieser Frau ebenfalls Französisch, so wie die Kilometerangabe.
					Andere Arten von Overloading-Patterns sind unter anderem im großen „Submit“ button
					versteckt. Wenn man gut darauf achtet, kann man erkennen, dass sich der Button nur klicken
					lässt, wenn die Sprache „französisch“ angewählt ist. Ist das nicht der Fall so ist der
					Button zwar immer noch da, aber hat eine unendliche Ladeanimation, welche in diesem Fall
					mithilfe eines Ladekreises dargestellt wird.
				</p>
			</div>
		</div>
	</div>
{:else if mastered === 'bad'}
	<div class="card w-96 bg-base-100 shadow-xl image-full">
		<figure><img src="img/french.svg" alt="french-flag" /></figure>
		<div class="card-body">
			<h2 class="card-title">VERLOREN!</h2>
			<p>Jetzt musst du die französische Sprache lernen. Bedanke dich später</p>
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
