<script>
	import { updated } from '$app/stores';

	let page = 1;
</script>

{#if page === 1}
	<!-- ANGEBOT -->
	<h1 class="prose">Bait and Switch</h1>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="fake-offer.jpg" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />

			<img src="img/first-offer.png" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />

			<div>
				<h1 class="text-5xl font-bold">Spiderman Stiefel - Schwinge stilvoll durch die Stadt</h1>
				<p class="py-6">
					Entdecke das ultimative Angebot für Spiderman-Fans! Tauche ein in die Welt des
					Wandkletterers mit unseren exklusiven Spiderman-Stiefeln – jetzt zum unschlagbaren Preis
					von nur 49,99 Euro!
				</p>
				<button class="btn btn-primary" on:click={() => (page = 2)}
					>Hol dir jetzt die Spiderman-Stiefel</button
				>
			</div>
		</div>
	</div>
{/if}

{#if page === 2}
	<!-- ERROR POP - verweist auf neues Angebot -->
	<h1 class="prose">Bait and Switch</h1>
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
		<span>Error! This product is no longer available/out of stock. </span>
		<button class="btn btn-primary" on:click={() => (page = 3)}> See our new offer! </button>
	</div>
{/if}

{#if page === 3}
	<!-- NEUES ANGEBOT -->
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="real-offer.jpg" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />

			<img src="img/second-offer.png" alt="Fake Offer" class="max-w-sm rounded-lg shadow-2xl" />

			<div>
				<h1 class="text-5xl font-bold">Unsere Unsere Exklusive Cowboy-Kollektion erwartet dich:</h1>
				<p class="py-6" />
				<button class="btn btn-primary" on:click={() => (page = 4)}
					>Hol dir jetzt deine Cowboystiefel zu einem unschlagbaren Preis von nur 99,99 €! 🌟</button
				>
			</div>
		</div>
	</div>
{/if}

{#if page === 4}
	<div class="prose">
		<h1>Bait and Switch</h1>
		<p>
			Die Bait-and-Switch-Methode ist eine solche Strategie, bei der Konsumenten durch das Ködern
			mit einem vermeintlich günstigen Produkt angelockt werden, nur um dann zu erfahren, dass
			dieses Produkt nicht verfügbar ist oder nicht den Erwartungen entspricht. Der eigentliche
			Zweck dieser Taktik besteht darin, die Aufmerksamkeit der Kunden zu gewinnen und sie dazu zu
			bringen, ein teureres Produkt zu kaufen, das möglicherweise nie die Absicht war, zu verkaufen.
			Das Ködern, oder "Bait", beinhaltet die bewusste Werbung für ein Produkt zu einem unschlagbar
			niedrigen Preis oder mit besonders attraktiven Merkmalen. Dies zieht potenzielle Käufer an,
			die von dem vermeintlichen Schnäppchen angelockt werden. Sobald die Kunden jedoch Interesse
			zeigen oder auf das Angebot klicken, wird der "Switch" vorgenommen – das beworbene Produkt ist
			entweder nicht verfügbar oder erfüllt nicht die Erwartungen. In diesem Moment wird den Kunden
			dann ein teureres Produkt vorgestellt, das angeblich besser ist oder ihren Bedürfnissen
			entspricht. Die Taktik basiert auf psychologischen Mechanismen, bei denen die anfängliche
			Euphorie über das vermeintliche Schnäppchen Kunden dazu motiviert, die höherpreisige Option zu
			akzeptieren. Die Bait-and-Switch-Methode ist nicht nur ethisch fragwürdig, sondern kann auch
			rechtliche Konsequenzen nach sich ziehen, da sie in vielen Ländern als irreführende Werbung
			gilt. Unternehmen, die Kunden auf diese Weise täuschen, riskieren nicht nur ihren Ruf, sondern
			auch rechtliche Konsequenzen. In einer Zeit, in der Verbraucher verstärkt Wert auf Transparenz
			und Ehrlichkeit legen, ist die Bait-and-Switch-Methode eine riskante Strategie, die
			langfristig mehr Schaden als Nutzen bringen kann. Unternehmen sollten stattdessen auf ehrliche
			und vertrauensbildende Marketingmethoden setzen, um langfristige Kundenbeziehungen aufzubauen
			und einen nachhaltigen Geschäftserfolg zu gewährleisten.
		</p>
	</div>
{/if}
