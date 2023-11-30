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
	<div class="modal-box">
		<h3 class="font-bold text-lg">Vertrag abgelaufen</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" onclick="my_modal_6.showModal()">Risiko eingehen</button>
				<button class="btn" onclick="my_modal_5.close()">Vertrag verlängern</button>
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
