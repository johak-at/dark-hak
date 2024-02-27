<script>
	import { updated } from '$app/stores';
	import { patterns } from '$lib/store.js';

	let page = 1;

	/**
	 * @type {HTMLDialogElement}
	 */
	let my_modal_5;

	let isConfirmationModalVisible = false;

	async function openModal() {
		await Promise.resolve(); // Wait for the next tick
		my_modal_5.showModal();
	}

	/**
	 * @param {string} choice
	 */
	function handleConfirmation(choice) {
		if (choice === 'JA') {
			isConfirmationModalVisible = true;
			openModal();
		} else if (choice === 'NEIN') {
			page = 3;
		}
	}

	function closeConfirmationModal() {
		isConfirmationModalVisible = false;
	}
</script>

{#if page === 1}
	<h1 class="text-lg">WÄHLE DEIN ABO:</h1>
	<div class="boxes">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="img/prevention1.jpg" alt="cars" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">BASIC ABO</h2>
				<h3>5,99€ pro Woche</h3>
				<!-- <p class="small">Steuern und Gebühren nicht inkludiert</p> -->
				<ul class="ulstandard">
					<li>Zugang zur stetig wachsenden Spielebibliothek</li>
					<li>Jederzeit kündbar</li>

					<li>Begrenzte Anzahl von Werbeunterbrechungen</li>
					<li>Sammle Treuepunkte!</li>
				</ul>

				<div class="collapse bg-base-100x">
					<input type="checkbox" />
					<div class="collapse-title text-s font-medium-light">Mehr</div>
					<div class="collapse-content">
						<ul class="ulmore">
							<li>
								<strong>Festlegung des Preises: </strong> Der Preis für das BASIC Abonnement wird durch
								den Anbieter einseitig festgelegt und kann von Zeit zu Zeit angepasst werden. Änderungen
								werden dem Abonnenten angemessen im Nachhinein mitgeteilt.
							</li>
							<li>
								<strong>Zahlungsverpflichtung:</strong> Der Abonnent verpflichtet sich, den festgelegten
								Preis für das Abonnement gemäß den vereinbarten Zahlungsbedingungen zu entrichten.
							</li>
							<li>
								<strong>Preisänderungen: </strong> Der Anbieter behält sich das Recht vor, den Preis
								für das Abonnement nach eigenem Ermessen zu ändern. Solche Änderungen werden dem Abonnenten
								per E-Mail oder durch andere geeignete Mittel mitgeteilt. Der Abonnent hat das Recht,
								das Abonnement zu kündigen, wenn er mit einer Preisänderung nicht einverstanden ist,
								jedoch unterliegt die fortgesetzte Nutzung der Dienste nach der Mitteilung einer Preisänderung
								der Zustimmung zu dieser Änderung.
							</li>
							<li>
								<strong>Steuerliche Anpassungen</strong>: Der festgelegte Preis für das Abonnement
								kann zusätzliche Steuern oder Abgaben enthalten oder von diesen betroffen sein. Der
								Abonnent ist verantwortlich für alle geltenden Steuern, die im Zusammenhang mit dem
								Abonnement anfallen.
							</li>
							<li>
								<strong>Zahlungsmethoden:</strong> Der Anbieter kann bestimmte Zahlungsmethoden für das
								Abonnement akzeptieren. Der Abonnent ist verpflichtet, gültige und aktuelle Zahlungsinformationen
								bereitzustellen.
							</li>
							<li>
								<strong>Verweigerung des Zugangs bei Zahlungsausfall:</strong> Bei Zahlungsausfall kann
								der Anbieter das Abonnement aussetzen oder beenden, bis die ausstehenden Zahlungen beglichen
								sind.
							</li>
						</ul>
					</div>
				</div>
				<div class="card-actions justify-end">
					<button class="btn btn-primary" on:click={() => (page = 2)}>ABO AUSWÄHLEN</button>
				</div>
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl two">
			<figure>
				<img src="img/prevention2.jpg" alt="cars" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">PLUS ABO</h2>
				<p>12,99€ *Ab Abo-Start 5 Monate*</p>
				<ul class="ulstandard">
					<li>Inklusive Probeabo</li>
					<li>Jederzeit kündbar**</li>
					<li>Steuern und Gebühren inklusive</li>
					<li>Neue Features entdecken</li>
					<li>Werbefrei</li>
					<li>Inkl. Treuepunkt im Austausch mit Coins</li>
				</ul>

				<div class="collapse bg-base-100x">
					<input type="checkbox" />
					<div class="collapse-title text-s font-medium-light">Mehr</div>
					<div class="collapse-content">
						<ul class="ulmore">
							<li>
								<strong>Festlegung und Anpassung des Preises:</strong> Der Anbieter behält sich das Recht
								vor, den Preis für das PLUS Abonnement einseitig festzulegen und kann diesen unangekündigt
								verändern. Änderungen werden dem Abonnenten im Nachhinein mitgeteilt.
							</li>

							<li>
								<strong>Kosten nach Ablauf des Abonnements: </strong>Nach Ablauf des Abonnements
								behält sich der Anbieter das Recht vor, die Kosten für die Nutzung der Dienste zu
								überprüfen und gegebenenfalls anzupassen. Jegliche Änderungen werden dem Abonnenten
								rechtzeitig mitgeteilt.
							</li>

							<li>
								<strong>Finanzielle Verantwortlichkeit des Abonnenten: </strong>Der Abonnent
								übernimmt die volle finanzielle Verantwortung für das Abonnement. Im Falle
								unvollständiger Zahlungen und nach wiederholten Mahnungen behält sich der Anbieter
								das Recht vor, angemessene Maßnahmen zu ergreifen, einschließlich der Aussetzung des
								Zugangs zu den Diensten.
							</li>

							<li>
								<strong>Fortsetzung der Dienstleistungen: </strong>Die Fortsetzung der
								Dienstleistungen nach Ablauf des Abonnements erfolgt auf Basis der zu diesem
								Zeitpunkt geltenden Konditionen. Der Abonnent wird über etwaige Änderungen
								informiert und hat das Recht, das Abonnement zu kündigen, wenn er mit den neuen
								Bedingungen nicht einverstanden ist.
							</li>

							<li>
								<strong>*Laufzeit des Abonnements:</strong>
								Die Laufzeit dieses Abonnements erstreckt sich über einen Zeitraum von 5 Monaten, beginnend
								ab dem Datum der Anmeldung. Während dieser Periode ist eine vorzeitige Kündigung nicht
								möglich.
							</li>
							<li>
								<strong>**Monatsabrechnung:</strong>
								Das wöchentliches Abonnement folgt einem monatlichen Abrechnungszyklus. Wenn sich der
								Abonnent entscheidet, sein Abonnement in der laufenden Woche zu kündigen, wird ihn der
								Service für den gesamten Monat in Rechnung gestellt, um sicherzustellen, dass der Abonnent
								während dieser Zeit weiterhin uneingeschränkten Zugang genießen können.
							</li>
						</ul>
					</div>
				</div>

				<div class="card-actions justify-end">
					<button class="btn btn-primary" on:click={() => (page = 2)}>ABO AUSWÄHLEN</button>
				</div>
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="img/prevention3.jpg" alt="cars" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">PREMIUM ABO</h2>
				<p>60€ pro Jahr *Ab Abo Start 2,5 Jahre*</p>

				<ul class="ulstandard">
					<li>Inklusive Probeabo</li>
					<li>Neue und verschlüsselte Features freischalten</li>
					<li>Werbefrei</li>
					<li>Inkl. Treuepunkt in Austausch mit Coins und EXTRA-Speed</li>
				</ul>

				<div class="collapse bg-base-100x">
					<input type="checkbox" />
					<div class="collapse-title flex text-s font-medium-light">Mehr</div>
					<div class="collapse-content">
						<ul class="ulmore">
							<li>
								<strong>Zahlungsverpflichtung:</strong> Der Abonnent verpflichtet sich, den festgelegten
								Preis für das Abonnement gemäß den vereinbarten Zahlungsbedingungen zu entrichten.
							</li>

							<li>
								<strong>Festlegung und Anpassung des Preises:</strong> Der Anbieter behält sich das Recht
								vor, den Preis für das PREMIUM Abonnement einseitig festzulegen und kann diesen unangekündigt
								verändern. Änderungen werden dem Abonnenten im Nachhinein mitgeteilt.
							</li>

							<li>
								<strong>Vertragslaufzeit:</strong>
								Die festgelegte Laufzeit des Abonnements erstreckt sich über einen Zeitraum von 2,5 Jahren,
								beginnend ab dem Datum der Anmeldung. Während dieser Zeitspanne ist eine frühzeitige
								Kündigung nicht möglich. Nach Ablauf des Abonnements behält sich der Anbieter das Recht
								vor, die anfallenden Kosten für die restlichen 6 Monaten des Jahres in Rechnung zu stellen.
								Jegliche Änderungen werden dem Abonnenten zeitnah mitgeteilt.
							</li>

							<li>
								<strong>Steuerliche Anpassungen</strong>: Der festgelegte Preis für das Abonnement
								kann zusätzliche Steuern oder Abgaben enthalten oder von diesen betroffen sein. Der
								Abonnent ist verantwortlich für alle geltenden Steuern, die im Zusammenhang mit dem
								Abonnement anfallen.
							</li>

							<li>
								<strong>Fortsetzung der Dienstleistungen: </strong>Die Fortsetzung der
								Dienstleistungen nach Ablauf des Abonnements erfolgt gemäß den zu diesem Zeitpunkt
								gültigen Bedingungen. Der Abonnent wird über mögliche Änderungen informiert und hat
								das Recht, das Abonnement zu kündigen, sofern er den neuen Bedingungen nicht
								zustimmt.
							</li>
						</ul>
					</div>
				</div>
				<div class="card-actions justify-end">
					<button class="btn btn-primary" on:click={() => (page = 2)}>ABO AUSWÄHLEN</button>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if page === 2}
	<div class="areyousure">WEISST DU WELCHES ANGEBOT AM GÜNSTIGSTEN IST?</div>
	<button class="btn" on:click={() => handleConfirmation('JA')}>JA</button>
	<button class="btn" on:click={() => (page = 3)}>NEIN</button>

	<!-- First confirmation modal -->
	{#if isConfirmationModalVisible}
		<dialog bind:this={my_modal_5} class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Bist du dir wirklich sicher?</h3>
				<p class="py-4">Wir wissen beide das stimmt nicht. Gehe zurück und klicke NEIN!</p>
				<div class="modal-action">
					<form method="dialog">
						<button class="btn" on:click={closeConfirmationModal}>Zurück</button>
					</form>
				</div>
			</div>
		</dialog>
	{/if}
{/if}

{#if page === 3}
	<div class="end w-2/5">
		<h1 class="pb-14 text-4xl"><strong>Price Comparison Prevention</strong></h1>
		<div class="text-lg pb-14">
			<p class="pb-5">
				Die Price Comparison Prevention bezieht sich auf eine Praxis, bei der Unternehmen versuchen,
				Verbraucher daran zu hindern, Preise von Produkten oder Dienstleistungen mit Konkurrenten
				oder zwischen Produkten selbst zu vergleichen. Dies wird oft durch verschiedene Methoden
				erreicht, die sich darauf fokussieren, die Entscheidung der Verbraucher zu manipulieren.
				Hier sind einige der bekanntesten Techniken:
			</p>
			<ul class="pb-5 flex flex-col gap-4">
				<li>
					<strong>Unklare Produktbezeichnungen:</strong> Unternehmen verwenden möglicherweise unterschiedliche
					Bezeichnungen für dasselbe Produkt auf verschiedenen Plattformen, um den direkten Vergleich
					zu erschweren.
				</li>

				<li>
					<strong>Zusätzliche Gebühren:</strong> Versteckte Gebühren oder zusätzliche Kosten können absichtlich
					erst später in "Kleintext" eingesetzt werden, denn es besteht meistens eine große Wahrscheinlichkeit,
					dass die Verbraucher die langen Texten sowieso nicht lesen werden.
				</li>

				<li>
					<strong>Komplexe Rabattstrukturen:</strong> Unternehmen können komplizierte Rabattstrukturen
					einführen, bei denen Vergleiche zwischen Produkten schwierig sind, insbesondere wenn unterschiedliche
					Rabattmodelle auf verschiedene Produkte angewendet werden.
				</li>

				<li>
					<strong>Versteckte Bedingungen:</strong> Unternehmen können spezielle Bedingungen für Rabatte
					oder Sonderangebote einführen, die ziemlich schwierig zu finden sind, um den Nutzer zu binden,
					auch wenn der angezeigte Preis zunächst attraktiv erscheint.
				</li>
			</ul>

			Diese Praxis ist oft ethisch fragwürdig, da sie die Transparenz und Fairness im Markt
			beeinträchtigen kann. Verbraucher sollten sich bewusst sein und nach Möglichkeiten suchen,
			solche Taktiken zu umgehen, indem sie die Details und Bedingungen von Angeboten vorsichtig
			prüfen.
		</div>

		<p class="pb-12 text-xl text-center">Welches Angebot ist am günstigsten?</p>
		<div class="flex justify-between">
			<div class="tooltip" data-tip="falsch">
				<button class="btn">BASIC</button>
			</div>
			<div class="tooltip" data-tip="falsch">
				<button class="btn">PLUS</button>
			</div>
			<div class="tooltip" data-tip="richtig">
				<button
					class="btn"
					on:click={() => {
						($patterns[4].done = true), window.location.replace('/');
					}}>PREMIUM</button
				>
			</div>
		</div>
	</div>
	<p class="mt-44 text-sm">
		Die Bilder wurden mit <a href="https://leonardo.ai/">Leonardo Ai</a> generiert.
	</p>
{/if}

<style>
	.boxes {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.card {
		margin-right: 30px;
		margin-bottom: 20px;
	}

	.ulstandard li {
		list-style-type: disc;
	}

	@media screen and (max-width: 600px) {
		.card {
			width: 100%; /* angepasste breite für kleinere bildschirme */
		}

		.boxes {
			display: grid;
		}

		.end {
			padding: 10px;
			justify-content: center;
			width: 100%;
		}
	}
</style>
