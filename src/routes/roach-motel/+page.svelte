<script>
	import { patterns, defaultValue } from '$lib/store';
	// @type {import('./$types').PageData}

	let page = 1;

	let name = '';
	let email = '';
	let password = '';
	let adresse = '';
	let grund = 'Grund wählen';
	let grundcheck = false;
	$: if (grund !== 'Grund wählen') {
		grundcheck = true;
	} else {
		grundcheck = false;
	}

	let check = false;

	function handleSubmit() {
		console.log('Name:', name);
		console.log('E-Mail:', email);
		console.log('Passwort:', password);
		console.log('Grund:', grund);
		console.log('Adresse:', adresse);
	}

	function chooseReason() {}
</script>

<div class="mb-auto self-start">
	{#if page === 1}
		<div class="mx-[7vw] self-start">
			<h1 class="text-7xl pb-5">Registrieren</h1>
			<p class="text-xl">Erstelle hier deinen Account!</p>
			<form on:submit|preventDefault={handleSubmit}>
				<label class="my-2 block" for="name">Name:</label>
				<input
					class="p-2 w-60 mb-4 box-border border-solid rounded outline-1 outline-white"
					type="text"
					id="name"
					bind:value={name}
				/>

				<label class="my-2 block" for="password">Adresse: (optional)</label>
				<input
					class="p-2 w-60 mb-4 box-border border-solid rounded outline-1 outline-white"
					type="text"
					id="adresse"
					bind:value={adresse}
				/>

				<label class="my-2 block" for="email">E-Mail:</label>
				<input
					class="p-2 w-60 mb-4 box-border border-solid rounded outline-1 outline-white"
					type="email"
					id="email"
					bind:value={email}
				/>

				<label class="my-2 block" for="password">Passwort:</label>
				<input
					class="p-2 w-60 mb-4 box-border border-solid rounded outline-1 outline-white"
					type="password"
					id="password"
					bind:value={password}
				/>
				<br />

				<p class="text-xl prose">
					Wir schätzen Ihre Mitgliedschaft bei uns. Wenn Sie jemals das Bedürfnis verspüren, ihren
					Account zu löschen, können Sie dies jederzeit tun. Wir werden Ihre Daten dann umgehend
					löschen.
				</p>

				<h2 class="text-xl pb-5 pt-20">Ihre Zufriedenheit steht an erster Stelle</h2>
				{#if name != '' && email != '' && password != ''}
					<button on:click={() => (page = 2)} class="btn btn-success mt-2 text-lg"
						>Registrieren</button
					>
				{:else}
					<button class="btn btn-success mt-2 text-lg">Registrieren</button>
				{/if}
			</form>
		</div>
	{/if}
	{#if page === 2}
		<div class="mx-[7vw] self-start max-w-6xl">
			<h1 class="text-5xl py-5">Herzlich Willkommen {name}!</h1>

			<p class="pb-5">
				Alle Infos zu deinem Konto findest du hier. Schau dich um und entdecke, was du suchst. Wir
				freuen uns, dass du dabei bist!
			</p>

			<p class="pt-5 pb-10">
				Dieses dark pattern beschreibt Services, für die man sich leicht anmelden kann, die eine
				Abmeldung jedoch sehr schwer machen. Alle, die mal ihren Account löschen wollten, wissen: Es
				werden einem Steine in den Weg gelegt und vergräbt die Option tief in den Einstellungen.
				<br />
				<br />
				Du hast dich erfolgreich angemeldet beziehungsweise einen neuen Account erstellt. Nun steht die
				Herausforderung bevor, deinen Account zu löschen. Der Weg zur Löschung des Accounts mag zwar
				anspruchsvoll und komplex sein, aber wir wünschen dir viel Vergnügen dabei, dich zu befreien!
			</p>

			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Bestellungen</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine Bestellungen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Spar-Abo-Artikel
						</li>
					</ul>
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Zahlungen</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Zahlungen und Transaktionen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Geschenkgutschein-Guthaben verwalten
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Einkaufen mit Punkten
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Konto aufladen
						</li>
					</ul>
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Kundenservice</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Kontaktieren Sie uns
						</li>
					</ul>
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Kontoeinstellungen</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Anmeldung und Sicherheit
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Kostenloses Unternehmenskonto erstellen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							1-Click-Einstellungen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Inhalt und Geräte
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine öffentlichen Profile verwalten
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Digitale Lieferung verwalten
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">Adressen</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine Mitgliedschaften
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Kürzlich angesehen
						</li>
						<li
							on:click={() => (page = 3)}
							class="py-2 transition-all hover:underline cursor-pointer"
						>
							Sonstiges
						</li>
					</ul>
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Message Center</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Nachrichten
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Kommunikationseinstellungen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Angebotsbenachrichtigungen
						</li>
					</ul>
				</div>
			</div>
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Personalisierung</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Ihr öffentliches Profil
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine Empfehlungen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine Interessen
						</li>
					</ul>
				</div>
			</div>

			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">App-Einstellungen</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Cookie-Einstellungen
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Einstellungen für Werbung
						</li>
					</ul>
				</div>
			</div>

			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">Daten und Datenschutz</div>
				<div class="collapse-content">
					<ul>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Datenschutzerklärung
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Meine Informationen anfordern
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							Empfehlungseinstellungen
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
	{#if page === 3}
		<p class="text-gray-400 mx-28">
			<a on:click={() => (page = 2)} class="text-lg transition-all hover:underline cursor-pointer"
				>Kontoeinstellungen</a
			>
			> <a class="text-lg">Sonstiges</a>
		</p>
		<div class="mx-[7vw] self-start max-w-6xl">
			<h1 class="text-5xl py-5">Sonstiges</h1>
			<p>
				Willkommen in den zusätzlichen Informationen!
				<br />
				<br />
				Hier gibt's mehr Details zu deinen Account-Einstellungen. Entdecke hilfreiche Tipps, wie du deinen
				Account personalisieren und anpassen kannst. Wir möchten sicherstellen, dass du alles verstehst
				und das Beste aus deiner Erfahrung herausholst. Falls du Fragen hast oder Unterstützung brauchst,
				kannst du dich gerne an unseren Kundensupport wenden. Wir sind hier, um sicherzustellen, dass
				alles reibungslos läuft und du dich in deinen Account-Einstellungen gut zurechtfindest.
				<br />
				Danke, dass du Teil unserer Community bist! Genieße die zusätzlichen Infos und mache das Beste
				aus deinem Konto.
			</p>
			<p on:click={() => (page = 4)} class="transition-all hover:underline cursor-pointer">Mehr</p>
			<br />
			<br />
			<br />
			<h1 class="text-2xl">Weitere Erklärung:</h1>
			<p>
				<br />
				Es wird angestrebt, den Nutzerinnen und Nutzern das Gefühl zu vermitteln, dass sie Teil einer
				Gemeinschaft sind und zu einem Team gehören. Dabei wird betont, dass sich die Kunden sicher fühlen
				können, ohne jedoch die Option zu nennen, den Account zu löschen oder zu erklären, wie man ihn
				löschen kann. Es wird vermieden, konkret auf diese Möglichkeit einzugehen und stattdessen Vertrauen
				und Zugehörigkeit hervorzuheben.
			</p>
		</div>
	{/if}
	{#if page === 4}
		<p class="text-gray-400 mx-28">
			<a on:click={() => (page = 2)} class="text-lg transition-all hover:underline cursor-pointer"
				>Kontoeinstellungen</a
			>
			>
			<a on:click={() => (page = 3)} class="text-lg transition-all hover:underline cursor-pointer"
				>Sonstiges</a
			>
			> <a class="text-lg">Mehr</a>
		</p>
		<div class="mx-[7vw] self-start max-w-6xl">
			<div class="py-5">
				<div role="alert" class="alert border-2 alert-warning">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					>
					<p class="text-lg py-5">
						Eine Kontoschließung ist endgültig!
						<br />
						Bitte beachten Sie, dass die Kontoschließung dauerhaft erfolgt. Sobald Ihr Konto geschlossen
						wurde, steht es Ihnen nicht mehr zur Verfügung und kann nicht wiederhergestellt werden. Wenn
						Sie sich später entscheiden, wieder Bestellungen bei uns aufzugeben, oder Produkte und Services
						verwenden möchten, für die ein Konto erforderlich ist, müssen Sie ein neues Konto erstellen.
					</p>
				</div>
			</div>
			<p class="pt-5">Bitte wählen Sie den Hauptgrund für die Schließung Ihres Kontos aus.</p>
			<div class="dropdown py-5">
				<div tabindex="0" role="button" class="btn m-1">{grund}</div>
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a on:click={() => (grund = 'Ich verwende dieses Konto nicht mehr')}
							>Ich verwende dieses Konto nicht mehr</a
						>
					</li>
					<li>
						<a on:click={() => (grund = 'Ich habe ein anderes Konto')}>Ich habe ein anderes Konto</a
						>
					</li>
					<li>
						<a on:click={() => (grund = 'Ich möchte ein neues Konto erstellen')}
							>Ich möchte ein neues Konto erstellen</a
						>
					</li>
					<li>
						<a
							on:click={() =>
								(grund =
									'Bedenken bezüglich zur Kontosicherheit/zu nicht autorisierten Aktivitäten')}
							>Bedenken bezüglich zur Kontosicherheit/zu nicht autorisierten Aktivitäten</a
						>
					</li>
					<li>
						<a on:click={() => (grund = 'Bedenken bezüglich des Datenschutzes')}
							>Bedenken bezüglich des Datenschutzes</a
						>
					</li>
					<li>
						<a on:click={() => (grund = 'Ich möchte keinen Grund nennen')}
							>Ich möchte keinen Grund nennen</a
						>
					</li>
				</ul>
			</div>
			<br />
			<div class="flex gap-4 pb-5">
				<input type="checkbox" bind:checked={check} class="checkbox" />
				<div>Ja, ich möchte mein Amazon-Konto dauerhaft schließen und meine Daten löschen.</div>
			</div>
			{#if grundcheck && check}
				<button class="btn" on:click={() => (page = 5)}>Mein Konto löschen</button>
			{:else}
				<button class="btn">Mein Konto löschen</button>
			{/if}

			<p class="pt-10">
				Nachdem Sie Ihr Konto geschlossen haben, beurteilen wir, welche Informationen erhalten
				werden sollen. Wir entscheiden regelmäßig einige Daten im Einklang mit unseren rechtlichen
				Pflichten, darunter auch das Handelsgesetzbuch, zur Geltendmachung, Ausübung oder
				Verteidigung von Rechtsansprüchen und zur Betrugsprävention/Gewähr von Sicherheit, wie in
				der DSGVO vorgesehen, zu erhalten. Daher speichern wir üblicherweise Transaktionsdaten im
				Zusammenhang mit Kundenbestellungen von Produkten und Services, beispielsweise den Namen des
				Kunden, das bestellte Produkt, das Bestelldatum, die Lieferadresse, die Zahlungsart, den
				Preis und die USt. Wir können auch beschränkt personenbezogene Kontoinformationen nach der
				Schließung des Kontos behalten, um diese Rechte und Pflichten auszuüben.
			</p>
		</div>
	{/if}

	{#if page === 5}
		<p class="text-gray-400 mx-28">
			<a on:click={() => (page = 2)} class="text-lg transition-all hover:underline cursor-pointer"
				>Kontoeinstellungen</a
			>
			>
			<a on:click={() => (page = 3)} class="text-lg transition-all hover:underline cursor-pointer">
				Sonstiges</a
			>
			>
			<a on:click={() => (page = 4)} class="text-lg transition-all hover:underline cursor-pointer"
				>Mehr</a
			>
			> <a class="text-lg">Mein Konto löschen</a>
		</p>
		<div class="mx-[7vw] self-start max-w-6xl">
			<h1 class="py-5 text-4xl">Du hast es geschafft!</h1>

			<button
				on:click={() => {
					($patterns[6].done = true), window.location.replace('/');
				}}
				class="btn">Aufgabe abschließen</button
			>

			<p class="text-2xl pt-16">Was lernen wir daraus?</p>
			<p class="text-lg py-5">
				Dieses "Dark Pattern" beschreibt Services, bei denen die Anmeldung einfach ist, die
				Abmeldung jedoch erschwert wird. Jeder, der jemals versucht hat, seinen Account zu löschen,
				weiß: Es werden einem hier Hürden in den Weg gelegt, und die entsprechenden Optionen sind
				tief in den Einstellungen vergraben. Viele Services machen die Abmeldung nahezu unmöglich.
				Stell dir vor, du meldest dich in wenigen Minuten online für ein Streaming-Abo an, kannst
				dich aber plötzlich nicht direkt auf der Seite abmelden. Stattdessen musst du dich erst
				durch die Einstellungen durchklicken und dich am Ende vielleicht sogar telefonisch abmelden.
				Dabei musst du mehrmals bestätigen, dass du dich wirklich abmelden möchtest und dir der
				Konsequenzen bewusst bist.
				<br />
				Vermutlich musstest du dich auch bei unserem Beispiel durchklicken, um den richtigen Weg zu "Mein
				Konto löschen" zu finden. Offensichtlich hast du jedoch nicht aufgegeben und Zeit investiert,
				auch wenn die Registrierung schneller ging. Genau das ist ein Dark Pattern, ein undurchsichtiges
				Muster – eine Grauzone. Natürlich sollte es möglich sein, das eigene Konto zu löschen, aber wie
				einfach das sein soll, ist nicht klar definiert. Es ist verständlich, dass Plattformen alles
				versuchen, um gewonnene Benutzer nicht wieder gehen zu lassen. Es ist jedoch faszinierend, welche
				Tricks und Verstecke genutzt werden, um Personen in eine bestimmte Richtung zu lenken.
				<br />
				<br />
				Wir hoffen ihr wisst nun was "Roach Motel" ist und wie es funktioniert.
				<br />
				Wir stehen für KEINE Frage offen :)
			</p>
		</div>
	{/if}
</div>
