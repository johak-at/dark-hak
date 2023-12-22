<script>
	import { updated } from '$app/stores';

	let page = 1;
	let showMore = false;

	function toggleDetails() {
		showMore = !showMore;
	}

	let my_modal_5;

	function openModal() {
		my_modal_5.showModal();
	}
</script>

{#if page === 1}
	<h1>Choose your abo</h1>
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
								<strong>Festlegung des Preises: </strong> Der Preis für das Abonnement auf dieser fiktionalen
								Seite wird durch den Anbieter einseitig festgelegt und kann von Zeit zu Zeit angepasst
								werden. Änderungen werden dem Abonnenten angemessen im Voraus mitgeteilt.
							</li>
							<li>
								<strong>Zahlungsverpflichtung:</strong> Der Abonnent verpflichtet sich, den festgelegten
								Preis für das Abonnement gemäß den vereinbarten Zahlungsbedingungen zu entrichten.
							</li>
							<li>
								<strong> über Preisänderungen: </strong> Der Anbieter behält sich das Recht vor, den
								Preis für das Abonnement nach eigenem Ermessen zu ändern. Solche Änderungen werden dem
								Abonnenten per E-Mail oder durch andere geeignete Mittel mitgeteilt. Der Abonnent hat
								das Recht, das Abonnement zu kündigen, wenn er mit einer Preisänderung nicht einverstanden
								ist, jedoch unterliegt die fortgesetzte Nutzung der Dienste nach der Mitteilung einer
								Preisänderung der Zustimmung zu dieser Änderung.
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
					<button class="btn btn-primary" on:click={() => (page = 2)}>Choose the abo!</button>
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
					<li>Jederzeit kündbar*</li>
					<li>Steuern und Gebühren inklusive</li>
					<li>Neue Features entdecken</li>
					<li>Werbefrei</li>
					<li>Inkl. Treuepunkt im Austausch mit Coins</li>
				</ul>

				<div class="collapse bg-base-100x">
					<input type="checkbox" />
					<div class="collapse-title text-s font-medium-light">Show more!</div>
					<div class="collapse-content">
						<ul class="ulmore">
							<li>
								<strong>Laufzeit des Abonnements:</strong>
								Die Laufzeit dieses Abonnements erstreckt sich über einen Zeitraum von 5 Monaten, beginnend
								ab dem Datum der Anmeldung. Während dieser Periode ist eine vorzeitige Kündigung nicht
								möglich.
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
								<strong>Konsequenzen bei Zahlungsverzug: </strong>Sollte es zu
								Zahlungsschwierigkeiten kommen, obliegt es dem Abonnenten, unverzüglich mit dem
								Anbieter in Kontakt zu treten, um eine Lösung zu finden. Der Anbieter behält sich
								das Recht vor, bei ausstehenden Zahlungen angemessene Schritte zu unternehmen, um
								die finanzielle Integrität des Abonnementdienstes aufrechtzuerhalten.
							</li>

							<li>
								<strong>Fortsetzung der Dienstleistungen: </strong>Die Fortsetzung der
								Dienstleistungen nach Ablauf des Abonnements erfolgt auf Basis der zu diesem
								Zeitpunkt geltenden Konditionen. Der Abonnent wird über etwaige Änderungen
								informiert und hat das Recht, das Abonnement zu kündigen, wenn er mit den neuen
								Bedingungen nicht einverstanden ist.
							</li>
						</ul>
					</div>
				</div>

				<div class="card-actions justify-end">
					<button class="btn btn-primary" on:click={() => (page = 3)}>Choose the abo!</button>
				</div>
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="img/prevention3.jpg" alt="cars" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">PREMIUM ABO</h2>
				<p>60€ pro Jahr (Ab Abo Start 1,5 Jahre)</p>

				<ul class="ulstandard">
					<li>Inklusive Probeabo</li>
					<li>Neue und verschlüsselte Features freischalten</li>
					<li>Werbefrei</li>
					<li>Inkl. Treuepunkt in Austausch mit Coins und EXTRA-Speed</li>
				</ul>

				<div class="collapse bg-base-100x">
					<input type="checkbox" />
					<div class="collapse-title text-s font-medium-light">Show more!</div>
					<div class="collapse-content">
						<ul class="ulmore">
							<p>
								<strong>Vertragslaufzeit und Beendigung:</strong>

								Die festgelegte Laufzeit des Abonnements erstreckt sich über einen Zeitraum von
								einem Jahr, beginnend ab dem Datum der Anmeldung. Während dieser Zeitspanne ist eine
								frühzeitige Kündigung nicht möglich. Nach Ablauf des Abonnements behält sich der
								Anbieter das Recht vor, die anfallenden Kosten für die Nutzung der Dienste zu
								evaluieren und gegebenenfalls anzupassen. Jegliche Änderungen werden dem Abonnenten
								zeitnah mitgeteilt. Der Abonnent trägt die volle finanzielle Verantwortung für das
								Abonnement. Im Falle von unvollständigen Zahlungen und nach wiederholten Mahnungen
								behält sich der Anbieter das Recht vor, angemessene Maßnahmen zu ergreifen, darunter
								auch die vorübergehende Aussetzung des Zugangs zu den Diensten. Bei
								Zahlungsschwierigkeiten obliegt es dem Abonnenten, unverzüglich Kontakt mit dem
								Anbieter aufzunehmen, um gemeinsam eine Lösung zu finden. Der Anbieter behält sich
								das Recht vor, bei ausbleibenden Zahlungen angemessene Schritte zu unternehmen, um
								die finanzielle Integrität des Abonnementdienstes zu wahren. Die Fortsetzung der
								Dienstleistungen nach Ablauf des Abonnements erfolgt gemäß den zu diesem Zeitpunkt
								gültigen Bedingungen. Der Abonnent wird über mögliche Änderungen informiert und hat
								das Recht, das Abonnement zu kündigen, sofern er den neuen Bedingungen nicht
								zustimmt.
							</p>
						</ul>
					</div>
				</div>
				<div class="card-actions justify-end">
					<button class="btn btn-primary" on:click={() => (page = 4)}>Choose the abo!</button>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if page === 2}
	<!-- Open the modal using ID.showModal() method -->
	<button class="btn" on:click={openModal}>open modal</button>
	<dialog bind:this={my_modal_5} class="modal modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Hello!</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in the form, it will close the modal -->
					<button class="btn">Close</button>
				</form>
			</div>
		</div>
	</dialog>
{/if}

<style>
	.boxes {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		/* or use "space-around" for space around each card */
	}

	.card {
		margin-right: 30px;
		margin-bottom: 20px;
	}

	/* .small {
		font-size: xx-small;
	} */

	.ulstandard li {
		list-style-type: disc;
	}

	.collapse-title {
		display: flex;
	}

	@media screen and (max-width: 600px) {
		.card {
			width: 100%; /* Adjusted card width for smaller screens */
		}

		.boxes {
			display: grid;
		}
	}
</style>
