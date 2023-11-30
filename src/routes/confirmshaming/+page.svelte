<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}
</script>

<button class="btn">Kandi</button>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_5.showModal()">open modal</button>

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	<!-- <div class="modal-box"> -->
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
				<!-- </div> -->
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
