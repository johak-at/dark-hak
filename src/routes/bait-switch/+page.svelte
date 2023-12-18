<script>
	import { updated } from '$app/stores';

	let page = 1;
</script>

{#if page === 1}
	<!-- ANGEBOT -->
	<!-- <div class="prose">
        <h1>Bait and Switch</h1>
    </div> -->
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="img/first-offer.png" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />
			<div>
				<h1 class="text-5xl font-bold">Spiderman Stiefel - Schwinge stilvoll durch die Stadt! 🕷</h1>
				<p class="py-6">
					Entdecke das ultimative Angebot für Spiderman-Fans! Tauche ein in die Welt des
					Wandkletterers mit unseren exklusiven Spiderman-Stiefeln – jetzt zum unschlagbaren Preis!
					Hol dir jetzt die Spiderman-Stiefel!
				</p>
				<button class="btn btn-primary" on:click={() => (page = 2)}>Nur <em>49,99</em> Euro!</button
				>
			</div>
		</div>
	</div>
{/if}

{#if page === 2}
	<!-- ERROR POP - verweist auf neues Angebot -->
	<div class="prose">
		<div style="align-items: center;">
			<!-- <h1>Ups, da ist etwas schief gelaufen!</h1>
            <p>
                Leider ist das Produkt, das du dir ausgesucht hast, nicht mehr verfügbar. Aber keine Sorge,
                wir haben noch viele andere tolle Angebote für dich!
            </p> -->
		</div>
		<div role="alert" class="alert alert-error" id="leadToAnotherPage">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span
				>Ups, da ist etwas schief gelaufen!! Leider ist das Produkt, das du dir ausgesucht hast,
				nicht mehr verfügbar.
			</span>
			<button class="btn btn-primary" on:click={() => (page = 3)}> Unser neues Angebot! </button>
		</div>
	</div>
{/if}

{#if page === 3}
	<!-- NEUES ANGEBOT -->
	<div class="prose" />
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="img/second-offer.png" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />
			<div>
				<h1 class="text-5xl font-bold">
					Unsere Unsere Exklusive Cowboy-Kollektion erwartet dich! 🌟
				</h1>
				<p class="py-6">Hol dir jetzt deine Cowboystiefel zu einem unschlagbaren Preis!</p>
				<button class="btn btn-primary" on:click={() => (page = 4)}
					>Nur für <em>99,99 €</em>! <button />
				</button>
			</div>
		</div>
	</div>
{/if}

{#if page === 4}
	<div class="prose">
		<h1>Bait and Switch</h1>
		<main class="prose">
			<p>
				Die <em>Bait-and-Switch-Methode</em> ist eine solche Strategie, bei der Konsumenten durch das
				Ködern mit einem vermeintlich günstigen Produkt angelockt werden, nur um dann zu erfahren, dass
				dieses Produkt nicht verfügbar ist oder nicht den Erwartungen entspricht.
			</p>
			<p>
				Die Taktik besteht darin, Kunden mit einem günstigen Produkt anzulocken - <em>"Bait"</em> -
				, um dann auf ein teureres umzuschwenken - <em>"Switch"</em> . Durch auffällige Werbung mit niedrigen
				Preisen oder attraktiven Merkmalen werden potenzielle Käufer angelockt. Sobald sie Interesse
				zeigen, wird jedoch auf ein teureres Produkt umgeschwenkt, das vermeintlich besser oder passender
				ist.
			</p>
			<p>
				Die Strategie nutzt psychologische Mechanismen, indem anfängliche Begeisterung über ein
				vermeintliches Schnäppchen Kunden dazu verleitet, die teurere Option zu wählen.
				<em>Bait-and-Switch</em>ist ethisch fragwürdig und kann rechtliche Konsequenzen haben, da es
				in vielen Ländern als irreführende Werbung betrachtet wird.
			</p>
			<p>
				Unternehmen, die Kunden auf diese Weise täuschen, riskieren nicht nur ihren Ruf, sondern
				auch rechtliche Konsequenzen. In einer Zeit, in der Verbraucher verstärkt Wert auf
				Transparenz und Ehrlichkeit legen, ist die Bait-and-Switch-Methode eine riskante Strategie,
				die langfristig mehr Schaden als Nutzen bringen kann. Unternehmen sollten stattdessen auf
				ehrliche und vertrauensbildende Marketingmethoden setzen, um langfristige Kundenbeziehungen
				aufzubauen und einen nachhaltigen Geschäftserfolg zu gewährleisten.
			</p>

			<main />
		</main>
		<img
			src="img/spiderman.png"
			alt="Spiderman"
			class="max-w-sm rounded-lg shadow-2xl"
			style="display: flex; margin: auto"
		/>
		<aside id="quellen" class="prose">
			<h2>Zusätzliche Quellen</h2>
			<ul>
				<li>Bild: Generiert mit LeonardoAI</li>
			</ul>
		</aside>
	</div>
{/if}
