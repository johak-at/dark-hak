<script>
	/** @type {import('./$types').PageData} */

	let page = 1;

	let name = '';
	let email = '';
	let password = '';

	function handleSubmit() {
		console.log('Name:', name);
		console.log('E-Mail:', email);
		console.log('Passwort:', password);
	}
</script>

<div class="mb-auto self-start">
	{#if page === 1}
		<div class="mx-28 self-start">
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

				<h2 class="text-3xl pb-1 pt-20">Ihre Zufriedenheit steht an erster Stelle</h2>
				<button on:click={() => (page = 2)} class="btn btn-success mt-2">Registrieren</button>
			</form>
		</div>
	{/if}
	{#if page === 2}
		<div class="mx-28 self-start max-w-6xl">
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
				<input type="radio" name="my-accordion-2" checked="checked" />
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
							class="py-2 transition-all hover:underline cursor-pointer"
							on:click={() => (page = 3)}
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
							<a>Nachrichten</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Kommunikationseinstellungen</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Angebotsbenachrichtigungen</a>
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
							<a>Ihr öffentliches Profil</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Meine Empfehlungen</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Meine Interessen</a>
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
							<a>Cookie-Einstellungen</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Einstellungen für Werbung</a>
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
							<a>Datenschutzerklärung</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Meine Informationen anfordern</a>
						</li>
						<li class="py-2 text-lg transition-all hover:underline cursor-not-allowed">
							<a>Empfehlungseinstellungen</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
	{#if page === 3}
		<div class="mx-28 self-start">
			<p class="text-gray-400"><a on:click={() => (page = 2)} class="text-lg transition-all hover:underline cursor-pointer">Kontoeinstellungen</a> > <a>Sonstiges</a></p>
			<h1 class="text-5xl py-5">Sonstiges</h1>
			<p>
				Willkommen in den zusätzlichen Informationen!
				<br />
				<br />
				Hier gibt's mehr Details zu deinen Account-Einstellungen. Entdecke hilfreiche Tipps, wie du deinen
				Account personalisieren und anpassen kannst. Wir möchten sicherstellen, dass du alles verstehst
				und das Beste aus deiner Erfahrung herausholst.
				<br />
				<br />
				Falls du Fragen hast oder Unterstützung brauchst, kannst du dich gerne an unseren Kundensupport
				wenden. Wir sind hier, um sicherzustellen, dass alles reibungslos läuft und du dich in deinen
				Account-Einstellungen gut zurechtfindest.
				<br />
				<br />
				Danke, dass du Teil unserer Community bist! Genieße die zusätzlichen Infos und mache das Beste
				aus deinem Konto.
				<br />
				<br />
				<br />
				<br />
				Es wird angestrebt, den Nutzerinnen und Nutzern das Gefühl zu vermitteln, dass sie Teil einer
				Gemeinschaft sind und zu einem Team gehören. Dabei wird betont, dass sich die Kunden sicher fühlen
				können, ohne jedoch die Option zu nennen, den Account zu löschen oder zu erklären, wie man ihn
				löschen kann. Es wird vermieden, konkret auf diese Möglichkeit einzugehen und stattdessen Vertrauen
				und Zugehörigkeit hervorzuheben.
			</p>
			<p class="transition-all hover:underline cursor-pointer">Mehr</p>
		</div>
	{/if}
</div>
