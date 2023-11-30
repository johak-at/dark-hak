<script>
	// Hier könntest du Daten für deine Produkte einfügen
	const products = [
	  { name: "Geforce RTX 3060", description:"1.320 MHz, 12 GB GDDR6, 12,7 TFLOPS", pic: "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX3060Ti/GAMING-X/KV-3060-Ti-GAMING.png"},
	  { name: "Geforce RTX 3080", description: "1.440 MHz, 10 GB GDDR6X, 29,8 TFLOPS", pic: "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX3090/RTX3090_Ti_gamingTrio/3090-ti-vga-body.png" },
	  { name: "Geforce RTX 3090 ti", description: "1.560 MHz, 24 GB GDDR6X, 59,5 TFLOPS", pic: "https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/RTX3090/RTX3090_Ti_gamingTrio/3090-ti-vga-body.png"},
	];
  </script>
  
  <style>
	.boxes {
	  display: flex;
	  gap: 10px; /* Füge einen Abstand zwischen den Produkten hinzu */
	}
  
	.card {
	  width: 300px; /* Verteile den verfügbaren Platz gleichmäßig auf die Karten */
	  height: 350px;
	}
  
	.card-body {
	  background-color: gray;
	}
  </style>
  
  <div class="boxes">
	{#each products as { name, description, pic}}
	  <div class="card w-96 bg-base-100 shadow-xl">
		<figure>
		  <p></p>
		</figure>
		<div class="card-body">
		  <h2 class="card-title">{name}</h2>
		  <p>{description}</p>
		  <img src={pic} alt={`Bild von ${name}`} />
		  <div class="card-actions justify-end">
			<button class="btn btn-primary">Kaufen</button>
		  </div>
		</div>
	  </div>
	{/each}
  </div>