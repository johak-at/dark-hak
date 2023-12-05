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

{#if page === 1}
	<div class="mx-28">
		<h1>Registrieren</h1>
		<p>Erstelle hier deinen Account!</p>

		<form on:submit|preventDefault={handleSubmit}>
			<label for="name">Name:</label>
			<input type="text" id="name" bind:value={name} />

			<label for="email">E-Mail:</label>
			<input type="email" id="email" bind:value={email} />

			<label for="password">Passwort:</label>
			<input type="password" id="password" bind:value={password} />
			<br />
		</form>

		<p>
			Wir schätzen Ihre Mitgliedschaft bei uns. Wenn Sie jemals das Bedürfnis verspüren, ihren
			Account zu löschen, können Sie dies jederzeit tun. Wir werden Ihre Daten dann umgehend
			löschen.
		</p>

		<h2>Ihre Zufriedenheit steht an erster Stelle</h2>
		<button on:click={() => (page = 2)}>Registrieren</button>
	</div>
{/if}
{#if page === 2}
	<div class="mx-28">
		<h1>Was passiert jetzt?</h1>
		<p class="py-10">
			Das "roach motel" funktioniert wie eine "Schabenfalle". Es ist verlockend hinein zu geraten,
			aber man kommt nur sehr schwer wieder raus. Registieren/Anmelden ist wesentlich einfacher als
			die Kündigung.
		</p>

		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" checked="checked" />
			<div class="collapse-title text-xl font-medium">Bestellungen</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Meine Bestellungen</a></li>
					<li class="py-2"><a>Spar-Abo-Artikel</a></li>
				</ul>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Zahlungen</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Zahlungen und Transaktionen</a></li>
					<li class="py-2"><a>Geschenkgutschein-Guthaben verwalten</a></li>
					<li class="py-2"><a>Einkaufen mit Punkten</a></li>
					<li class="py-2"><a>Konto aufladen</a></li>
				</ul>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Kundenservice</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Kontaktieren Sie uns</a></li>
				</ul>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Kontoeinstellungen</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Anmeldung und Sicherheit</a></li>
					<li class="py-2"><a>Kostenloses Unternehmenskonto erstellen</a></li>
					<li class="py-2"><a>1-Click-Einstellungen</a></li>
					<li class="py-2"><a>Inhalt und Geräte</a></li>
					<li class="py-2"><a>Meine öffentlichen Profile verwalten</a></li>
					<li class="py-2"><a>Digitale Lieferung verwalten</a></li>
					<li class="py-2"><a>Adressen</a></li>
					<li class="py-2"><a>Meine Mitgliedschaften</a></li>
					<li class="py-2"><a>Kürzlich angesehen</a></li>
					<li class="py-2" on:click={() => (page = 3)}><a>Sonstiges</a></li>
				</ul>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Message Center</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Nachrichten</a></li>
					<li class="py-2"><a>Kommunikationseinstellungen</a></li>
					<li class="py-2"><a>Angebotsbenachrichtigungen</a></li>
				</ul>
			</div>
		</div>
		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Personalisierung</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Ihr öffentliches Profil</a></li>
					<li class="py-2"><a>Meine Empfehlungen</a></li>
					<li class="py-2"><a>Meine Interessen</a></li>
				</ul>
			</div>
		</div>

		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">App-Einstellungen</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Cookie-Einstellungen</a></li>
					<li class="py-2"><a>Einstellungen für Werbung</a></li>
				</ul>
			</div>
		</div>

		<div class="collapse collapse-arrow bg-base-200">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">Daten und Datenschutz</div>
			<div class="collapse-content">
				<ul>
					<li class="py-2"><a>Datenschutzerklärung</a></li>
					<li class="py-2"><a>Meine Informationen anfordern</a></li>
					<li class="py-2"><a>Empfehlungseinstellungen</a></li>
				</ul>
			</div>
		</div>
	</div>
{/if}
{#if page === 3}
{/if}
<style>
	label {
		display: block;
		margin-bottom: 10px;
		margin-top: 5px;
	}

	input {
		width: 30%;
		padding: 8px;
		margin-bottom: 16px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		background-color: #4caf50;
		color: white;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 10px;
	}

	h1 {
		text-align: left;
		font-size: 70px;
	}

	p {
		text-align: left;
		font-size: 20px;
		max-width: 80%;
	}

	h2 {
		text-align: left;
		padding-top: 4%;
		font-size: 30px;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
