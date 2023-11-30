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
	<div>
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
	<div>
		<label for="bestellung">Bestellungen</label>
		<select name="bestellung" id="bestellung">
			<option value="meineBestellungen">Meine Bestellungen</option>
			<option value="sparAboArtikel">Spar-Abo-Artikel</option>
		</select>

		<label for="zahlungen">Zahlungen</label>
		<select name="zahlungen" id="zahlungen">
			<option value="zahlungenUndTransaktionen">Zahlungen und Transaktionen</option>
			<option value="GeschenkgutscheinGuthabenVerwalten"
				>Geschenkgutschein-Guthaben verwalten</option
			>
		</select>

		<h1>Was passiert jetzt?</h1>
		<p>
			Das "roach motel" funktioniert wie eine "Schabenfalle". Es ist verlockend hinein zu geraten,
			aber man kommt nur sehr schwer wieder raus. Registieren/Anmelden ist wesentlich einfacher als
			die Kündigung.
		</p>
	</div>
{/if}

<style>
	div {
		font-family: Arial, Helvetica, sans-serif;
		margin: 0% 8% 0% 8%;
	}

	form {
		width: 100%;
		margin: 0;
		border-radius: 5px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

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
