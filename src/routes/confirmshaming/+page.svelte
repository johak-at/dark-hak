<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}
</script>

<button class="btn" onclick="description.showModal()">Erklärung Confirmshaming</button>

<dialog id="description" class="modal">
	<div class="modal-box prose">
		<img src="img/confirmshaming2.png" alt="book" class="m-auto" />

		<h2>Erklärung</h2>

		<h2>Einleitung:</h2>
		<p>
			Das Internet hat unser tägliches Leben in vielerlei Hinsicht bereichert, ermöglicht aber auch
			die Verbreitung von fragwürdigen Praktiken, die oft unbemerkt bleiben. Eine solche fragwürdige
			Methode, die in den letzten Jahren verstärkt an Bedeutung gewonnen hat, ist das sogenannte
			"Confirmshaming". Dabei handelt es sich um eine manipulative Technik, die in die Kategorie der
			Dark Patterns fällt, also Gestaltungsmuster, die Nutzer zu Handlungen verleiten, die sie
			vielleicht nicht bewusst oder freiwillig durchführen würden.
		</p>

		<h2>Erklärung von Confirmshaming:</h2>
		<p>
			Confirmshaming ist eine spezielle Form der Benutzerführung im digitalen Raum, die darauf
			abzielt, Nutzer zu einer bestimmten Handlung zu drängen, indem sie sie in eine unangenehme
			oder beschämende Position versetzt. Dies geschieht häufig im Zusammenhang mit Pop-ups oder
			Dialogfeldern, die den Benutzer dazu auffordern, eine bestimmte Aktion auszuführen, z. B. das
			Abonnieren eines Newsletters oder das Teilen von persönlichen Informationen. Die Besonderheit
			besteht darin, dass die Ablehnung dieser Aufforderung oft mit einer negativen oder peinlichen
			Aussage verbunden ist, die den Nutzer dazu drängt, die gewünschte Handlung zu akzeptieren, um
			einer unangenehmen Situation zu entgehen.
		</p>
		<h2>Beispiele für Confirmshaming:</h2>
		<p>
			Ein häufiges Beispiel für Confirmshaming könnte eine Schaltfläche sein, die den Benutzer dazu
			auffordert, einen Newsletter zu abonnieren, und die Ablehnungsoption mit einer Beschuldigung
			oder schamhaften Aussage verknüpft, wie zum Beispiel "Nein, ich verzichte darauf, klüger zu
			werden" oder "Nein, ich mag es, im Dunkeln zu bleiben". Solche Formulierungen sollen den
			Benutzer unter Druck setzen und ihn dazu bringen, die gewünschte Aktion auszuführen, um einer
			negativen Konnotation zu entgehen.
		</p>

		<h2>Warum ist Confirmshaming problematisch?</h2>
		<p>
			Confirmshaming ist problematisch, da es die Prinzipien der freien Entscheidung und Transparenz
			untergräbt. Es manipuliert die Emotionen der Nutzer, um sie zu Aktionen zu bewegen, die sie
			unter normalen Umständen nicht durchführen würden. Diese Art von dunklen Mustern gefährdet
			nicht nur die Integrität der Online-Erfahrung, sondern kann auch das Vertrauen der Nutzer in
			digitale Plattformen beeinträchtigen. Es ist wichtig, sich der Existenz solcher Praktiken
			bewusst zu sein und sich aktiv für transparente und ethische Gestaltungsstandards im digitalen
			Raum einzusetzen.
		</p>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
			</form>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_5.showModal()">Beispiel Confirmshaming</button>

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	<div class="card w-96 glass">
		<figure>
			<img src="img/confirmshaming.png" alt="car!" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Virenschutz abgelaufen</h2>
			<p>Wollen Sie jetzt sicher weiter arbeiten?</p>
			<div class="card-actions justify-end">
				<button class="btn" onclick="my_modal_6.showModal()">Risiko eingehen</button>
				<button class="btn" onclick="my_modal_5.close()">Vertrag verlängern</button>
			</div>
		</div>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
			</form>
		</div>
	</div>
</dialog>

<dialog id="my_modal_6" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Sind Sie sich sicher?</h3>
		<p class="py-4">This is another popup</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn" onclick="my_modal_6.showModal()">Ja, ich will es riskieren</button>
				<button class="btn" onclick="my_modal_6.close()">Nein, ich gehe doch lieber sicher</button>
			</form>
		</div>
	</div>
</dialog>
