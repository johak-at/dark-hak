<script>
  import { text } from "@sveltejs/kit";
  import { createEventDispatcher, onMount } from "svelte";
  import { patterns } from '$lib/store';

  const dispatch = createEventDispatcher();
  let showDialog = false;
 
  function openDialog() {
    showDialog = true;
  }
 
  function closeDialog() {
    showDialog = false;
    dispatch("close");
  }
 



  const countdown = { days: 0, hours: 3, minutes: 10, seconds: 30 };
 
  const products = [
    { name: "Grafikkarte  1", description: "1.320 MHz, 12 GB  GDDR6, 12,7 TFLOPS", pic: "https://cdn.leonardo.ai/users/dfaeb4bd-badb-444b-a574-85fb0808a44d/generations/542229d3-5b8e-432e-844a-4f2e5ec44827/Leonardo_Diffusion_XL_graphics_card_on_a_transparent_backgroun_2.jpg"},
    { name: "Grafikkarte 2", description: "1.440 MHz, 10 GB GDDR6X, 29,8 TFLOPS", pic: "https://cdn.leonardo.ai/users/dfaeb4bd-badb-444b-a574-85fb0808a44d/generations/542229d3-5b8e-432e-844a-4f2e5ec44827/Leonardo_Diffusion_XL_graphics_card_on_a_transparent_backgroun_1.jpg"},
    { name: "Grafikkarte 3", description: "1.560 MHz, 24 GB GDDR6X, 59,5 TFLOPS", pic: "https://cdn.leonardo.ai/users/dfaeb4bd-badb-444b-a574-85fb0808a44d/generations/542229d3-5b8e-432e-844a-4f2e5ec44827/Leonardo_Diffusion_XL_graphics_card_on_a_transparent_backgroun_0.jpg"},
  ];
 
  function count() {
    if (countdown.seconds > 0) {
      countdown.seconds--;
    } else {
      countdown.seconds = 59;
      if (countdown.minutes > 0) {
        countdown.minutes--;
      } else {
        countdown.minutes = 59;
        if (countdown.hours > 0) {
          countdown.hours--;
        } else {
          countdown.hours = 23;
          if (countdown.days > 0) {
            countdown.days--;
          } else {
            countdown.days = 0;
            countdown.hours = 0;
            countdown.minutes = 0;
            countdown.seconds = 0;
          }
        }
      }
    }
  }
 
  onMount(() => {
    setInterval(count, 1000);
  });






</script>
 
<style>
  .boxes {
    display: flex;
    gap: 10px;
  }
 
  .card {
    width: 200 px;
    height: 300 px;
  }
 
  .card-body {
    background-color: gray;
  }
 
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    max-height: 70vh;
    overflow-y: auto;
  }
 
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
 
  .button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
 
  .open-popup-button {
    padding: 10px;
    background-color: #1e88e5;
    color: white;
    border: none;
    cursor: pointer;
  }
 
  .open-popup-button:hover {
    background-color: #1565c0;
  }

  .preise {
    font-size: 25px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
</style>



<!-- popups start -->

<!-- erklärung  -->
<div class="button-container">
  <button class="open-popup-button" on:click={openDialog}>Erklärung</button>
</div>
 <!-- popups end  -->
 
<div class="boxes">
  {#each products as { name, description, pic }, index}
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <p></p>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
       
        <!-- timer start  -->
      {#if index === Math.floor(products.length / 2)}
      <div class="countdown-container grid grid-flow-col gap-9 text-center auto-cols-max">
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style="--value:{countdown.days}"></span>
          </span>
          days
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style="--value:{countdown.hours}"></span>
          </span>
          hours
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style="--value:{countdown.minutes}"></span>
          </span>
          min
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style="--value:{countdown.seconds}"></span>
          </span>
          sec
        </div>
      </div>
    {/if}
    <!-- timer end  -->
        <img src={pic} alt={`Bild von ${name}`} />

     


     

   
 
        <!-- buttons start -->
        <div class="card-actions justify-end">
          {#if index === 0}
          <p class ="preise" >1099,99€</p>
            <button class="btn btn-primary"  on:click={() => {
              ($patterns[7].done = true), window.location.replace('/');
          }}> Kaufen</button>  

           



          {/if}
          {#if index === 1}
          <p class ="preise" >1299,99€</p>
            <button class="btn btn-primary" >Kaufen</button>
          {/if}




          {#if index === 2}
            <p class ="preise" >1499,99€</p>
            <button class="btn btn-primary"  on:click={() => {
              ($patterns[7].done = true), window.location.replace('/');
          }}>Kaufen</button>
           
          {/if}
        </div>
          <!-- buttons end -->
      </div>
    </div>
  {/each}
 
  {#if showDialog}
    <div class="overlay" on:click={closeDialog}></div>
    <div class="popup">
      <p>Dark Patterns, insbesondere die Simulation von Dringlichkeit, sind manipulative Design-Techniken in Benutzeroberflächen, die einen falschen Zeitdruck erzeugen, um Nutzer zu schnellen Entscheidungen zu drängen, ohne die Konsequenzen gründlich zu überdenken. Simulierte Dringlichkeit beinhaltet oft den Einsatz von irreführenden Elementen wie Countdown-Timern, blinkenden Warnungen oder täuschenden Nachrichten, die darauf abzielen, die Nutzer zu sofortigen Handlungen zu verleiten.</p>
      <br>
 
      <p>Die Auswirkungen der simulierten Dringlichkeit können tiefgreifend sein, da sie psychologische Schwächen ausnutzt, impulsive Verhaltensweisen auslöst und die Fähigkeit der Nutzer zur rationalen Entscheidungsfindung untergräbt. Die Dringlichkeit suggeriert ein zeitlich begrenztes Angebot oder einen unmittelbaren Verlust, wodurch Nutzer dazu gedrängt werden, Transaktionen hastig abzuschließen oder sich für Dienste anzumelden, ohne die Bedingungen vollständig zu verstehen.</p>
      <br>
 
      <p>Ein Beispiel dafür könnte eine E-Commerce-Website sein, die einen Countdown-Timer neben einem Produkt verwendet, um vorzutäuschen, dass ein Rabatt bald abläuft und beim Nutzer einen gewissen Druck erzeugt, das Produkt sofort zu kaufen. In Wirklichkeit könnte der Rabatt jedoch eine wiederkehrende Aktion sein, und die Dringlichkeit ist nur vorgetäuscht, um den Entscheidungsprozess zu beschleunigen.</p>
      <br>
 
      <p>Ähnlich könnten abonnementbasierte Dienste Pop-up-Benachrichtigungen mit alarmierender Sprache wie "Letzte Chance" oder "Fast ausverkauft" verwenden, um den Eindruck zu erwecken, dass eine exklusive Gelegenheit verloren geht. Nutzer könnten dem Druck nachgeben und sich anmelden, ohne den Wert des Dienstes oder Alternativen gründlich zu prüfen.</p>
      <br>
 
      <p>Die Konsequenzen der simulierten Dringlichkeit können zu Käuferreue führen, da Nutzer ihre impulsiven Entscheidungen unter dem Einfluss falscher Zeitbeschränkungen später bereuen könnten. Darüber hinaus untergräbt es das Vertrauen in Online-Plattformen und kann zu Unzufriedenheit führen, wenn Nutzer erkennen, dass sie manipuliert wurden.</p>
      <br>
 
      <p>Zusammenfassend nutzt die simulierte Dringlichkeit als Dark Pattern die menschliche Psychologie aus, um überstürzte Entscheidungen herbeizuführen. Designer und Unternehmen sollten transparente und ethische Benutzererfahrungen priorisieren, um Vertrauen aufzubauen und sicherzustellen, dass Nutzer informierte Entscheidungen treffen können, ohne sich von irreführenden Taktiken unter Druck gesetzt zu fühlen.</p>

      <p>--ChatGPT</p>
 
      <button on:click={closeDialog}>Schließen</button>
    </div>
  {/if}
</div>