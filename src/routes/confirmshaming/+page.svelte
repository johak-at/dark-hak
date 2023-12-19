<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}

	function close() {
		$patterns[1].done = true;
		window.location.replace('/');
	}
</script>

<div class="flex justify-center items-center">
	<button class="btn" onclick="description.showModal()">Erklärung Confirmshaming</button>
</div>

<dialog id="description" class="modal">
	<div class="modal-box prose">
		<img src="img/confirmshaming2.png" alt="book" class="m-auto" />

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

<div class="flex justify-center items-center">
	<button class="btn" onclick="my_modal_5.showModal()">Beispiel Confirmshaming</button>
</div>

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	<div class="card w-96 glass">
		<figure>
			<img src="img/confirmshaming.png" alt="car!" class="p-5" />
		</figure>
		<div class="card-body justify-center">
			<h2 class="card-title">Virenschutz abgelaufen</h2>
			<p>Wollen Sie jetzt sicher weiter arbeiten?</p>
			<div class="card-actions justify-center">
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

<script>
    import { patterns, defaultValue } from '$lib/store';
 
    function clearProgress() {
        $patterns = defaultValue;
    }
 
    function close() {
        $patterns[1].done = true;
        window.location.replace('/');
    }
</script>
 
<dialog id="my_modal_6" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box flex flex-col items-center justify-center">
        <h1 class="font-bold text-lg">Sind Sie sich sicher?</h1>
        <img src="img/virus2.jpg" alt="car!" class="m-auto" />
        <div class="modal-action">
            <form method="dialog">
                <div class="stats shadow">
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-8 h-8 stroke-current"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >
                        </div>
                        <div class="stat-title">Downloads</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">in den letzten 3 Tagen</div>
                    </div>
 
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-8 h-8 stroke-current"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                /></svg
                            >
                        </div>
                        <div class="stat-title">Neue User</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">in den letzten 3 Tagen</div>
                    </div>
                </div>
 
                <button class="btn" on:click={close}>Ja, ich will es riskieren</button>
 
                <button class="btn" onclick="my_modal_6.close()">Nein, ich gehe doch lieber sicher</button>
            </form>
        </div>
    </div>
</dialog>
