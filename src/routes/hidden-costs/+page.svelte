<script>
// @ts-nocheck
import { patterns, defaultValue } from '$lib/store';
	import Icon from '@iconify/svelte';
	let currentPage = 'product';
	
	function goBackPage(){
		currentPage = 'product';
	}
	function switchPage() {
		currentPage = 'checkout';
	}
	function switchPageToExplain() {
		currentPage = 'explain';
	}
	function switchPageToCheckout() {
		currentPage = 'switchPage';
	}
	function switchPageToAGB() {
		currentPage = 'AGB';
	}
	function switchPageToPrice() {
		currentPage = 'price';
	}

	let data = [
		{ id: 1, name: 'Cheetos Crunchos Sweet Chilli', price: 2.5 + '$' },
		{ id: 2, name: 'Nerds Rainbow Edition', price: 3.5 + '$' },
		{ id: 3, name: 'Hersheys Pretzels Special Edition', price: 3.5 + '$' },
		{ id: 4, name: 'Gesamtpreis', price: 9.5 + '$' }
	];

	let hiddenData = [
		{ id: 1, name: 'Cheetos Crunchos Sweet Chilli', price: 2.5 + '$' },
		{ id: 2, name: 'Nerds Rainbow Edition', price: 3.5 + '$' },
		{ id: 3, name: 'Hersheys Pretzels Special Edition', price: 3.5 + '$' },
		{ id: 4, name: 'Gesamtpreis', price: 9.5 + '$' },
		{ id: 5, name: 'Versandgebühren', price: 5 + '$' },
		{ id: 6, name: 'Bearbeitungsgebühren', price: 2 + '$' },
		{ id: 7, name: 'Verpackungsgebühren', price: 1 + '$' },
		{ id: 8, name: 'Zollgebühren', price: 3 + '$' },
		{ id: 9, name: 'Gesamtpreis', price: 20.5 + '$' }
	];
</script>

<!-- <p>on:click={() => {$patterns[2].done = true,
	window.location.replace("/");}}'</p> -->
<div
	class="mockup-browser border bg-base-300 w-[90%] bg-fixed p-10 flex flex-col justify-center items-center gap-4"
>
	<div class="mockup-browser-toolbar">
		<div class="input">https://sicherlichecht.shop</div>
	</div>

	{#if currentPage === 'product'}
		<div>Willkommen bei Sicherlich echt!</div>
		<p>Wir sind ein Unternehmen aus Österreich und verkaufen Süßigkeiten aus der ganzen Welt.</p>
		<div>Wir sind zwar erst am Anfang, doch wollen in Zukunft groß hinaus.</div>
		<div class="flex flex-col justify-center bg-base-800">
			<div class="checkout" on:click={switchPage}>
				<button class="btn btn-info">
					Warenkorb
					<Icon icon="typcn:shopping-cart" />
				</button>
			</div>
		</div>

		<div on:click={switchPageToExplain}>
			<button class="btn btn-warning">
				Erklärung Hidden Costs <Icon icon="material-symbols:book" />
			</button>
		</div>

		<!-- Das sind die Produkte, mit der Bezeichnung und Preisen -->
	{/if}

	{#if currentPage === 'explain'}
		<div class="prose">
			<h1>Erklärung</h1>
			<p>
				Hidden Costs ist ein dark Pattern, welches vor allem bei Online-Shops auftritt.
				Grundsätzlich sind „Hidden Costs“ (Versteckte Kosten), wie der Name schon sagt, Kosten
				welche versteckt auftreten bzw. nicht von Anfang an ersichtlich sind und den Käufer mehr
				bezahlen lassen als er eigentlich bezahlen möchte.
			</p>
			<h2>Es gibt verschiedene Arten von Hidden Costs.</h2>
			Einige haben sind hier aufgelistet und werden im Folgenden beschreiben und es wird erklärt, was
			dies mit den Käufern macht.
			<ol>1. Versandkosten</ol>
			<ol>2. EU und Zoll</ol>
			<ol>3. Ratenzahlung</ol>
			<ol>4. Freiwillige Spenden</ol>
			<ol>5. Bearbeitungsgebühr</ol>
			<ol>6. Abonnement-Falle</ol>

			<h2>Versandkosten, EU und Zoll</h2>

			<p>
				Versandkosten sind Kosten, welche erst am Ende einer Bestellung angezeigt werden und die
				Paket und Lieferkosten enthalten. Mann kann bei den meisten Shops versandkostenfrei
				Bestellen, aber man muss für einen gewissen Wert einkaufen. Viele Menschen legen deshalb
				noch ein Produkt mehr in den Warenkorb obwohl sie es gar nicht kaufen wollen.
			</p>

			<p>
				Innerhalb der EU muss man keinen Zoll zahlen. Wenn man aber allerdings von einem Onlineshop
				aus den USA bestellt, welcher keinen Standort in der EU hat, werden am Ende der Bestellung
				ähnlich wie bei Versandkosten eine Gebühr für den Zoll verrechnet. Ein Beispiel dafür wäre,
				wenn man zum Beispiel Gewand von einem kleineren amerikanischen Händler bestellt.
			</p>

			<h2>Ratenzahlung</h2>

			<p>
				Bei Bestellungen mit größerem Wert, kann man oftmals die Option auf Raten kaufen wählen.
				Dadurch sieht der Produktpreis nach weniger aus als er eigentlich ist und eigentlich zahlt
				man mehr für das Produkt, wie wenn man es direkt mit dem Vollpreis bestellt. Typische
				Beispiele für einen Ratenkauf sind Möbel, Küchen oder auch elektronische Geräte.
			</p>

			<h2>Freiwillige Spenden</h2>

			<p>
				Freiwillige Spenden. Viele kleine Unternehmen mit einem Onlineshop werben mit Freiwilligen
				spenden am ende des Checkouts. Es werden immer gewisse Beträge (1€-5€) vorgeschlagen was man
				zu seiner Bestellung dazu spenden kann. Es wird damit geworben, Gewinnspiele mit dem
				gespendeten Geld zu veranstalten und oder öfters größere Rabatte anbieten zu können. Dies
				verleitet den Menschen dazu eine Kleinigkeit zu spenden, da ein oder zwei Euro für die
				Meisten Menschen verkraftbar ist, für dass was man anscheinend zurückbekommt.
			</p>

			<h2>Bearbeitungsgebühr</h2>

			<p>
				Bearbeitungsgebühren treten häufig bei Angeboten über einen 3. Händler auf. Zum Beispiel
				beim reselling von Konzertkarten oder von Karten für Fußballspiele die eigentlich schon
				ausverkauft sind. Meistens wird der Preis angezeigt und erst bei der letzten Page
				verrechnet. Bearbeitungsgebühren kosten meistens zwischen 5 und 25 € pro Karte.
			</p>

			<h2>Abonnement Falle</h2>

			<p>
				Diese Fall wird vor allem bei Amazon benutzt. Durch ein Abo werden im Beispiel von Amazon
				monatlich oder jährlich ein gewisser Betrag abgebucht und dadurch hat man keine
				Versandkosten mehr oder man bekommt eine vermeintlich schnellere Lieferung. Für Leute die
				viel und häufig bestellen lohnt sich so ein Abo vermutlich aber meistens bezahlt man durch
				ein Abo mehr wie wenn man ab und zu Versandkosten bezahlen muss.
			</p>
			<button class="btn btn-success" on:click={goBackPage}>Startseite</button>
		</div>
	{/if}
	{#if currentPage === 'checkout'}
		<div class="flex justify-center px-64 py-64 bg-base-800">
			<img src="img/LogoHiddenCosts.png" alt="Logo" style="border-radius:1500px" />
		</div>

		<div class="grid grid-cols-3 gap-x-3 gap-y-5 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-5">
			<a href="1" class="group">
				<div class="aspect-h-0.1 aspect-w-0.1 w-full overflow-hidden rounded-lg">
					<img
						src="img/crisps.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Cheetos Crunchos Sweet Chilli</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">2,50€</p>
			</a>
			<a href="2" class="group">
				<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg">
					<img
						src="img/candy.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Nerds Rainbow Edition</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
			</a>
			<a href="3" class="group">
				<div class="aspect-h-0.25 aspect-w-0.25 w-full overflow-hidden rounded-lg">
					<img
						src="img/chocolate.jpg"
						alt="sweet"
						class="group-hover:opacity-90"
						style="width: 25%; height: auto;"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Hersheys Pretzels Special Edition</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">3,00€</p>
			</a>
		</div>
		<div>
			<button class="btn btn-outline" on:click={switchPageToCheckout}>Zur Kasse</button>
			<button class="btn btn-success" on:click={goBackPage}>Startseite</button>
		</div>
	{/if}

	{#if currentPage === 'switchPage'}
		<div class="flex flex-col justify-center px-64 py-64 bg-base-800 gap-4">
			<table>
				<thead>
					<tr><th>ID</th> <th>Name</th> <th>Preis</th> </tr>
				</thead>
				<tbody>
					{#each data as item (item.id)}
						<tr> <td>{item.id}</td> <td>{item.name}</td> <td>{item.price}</td> </tr>
					{/each}
				</tbody>
			</table>

			<button class="btn btn-accent" on:click={switchPageToAGB}>AGB</button>

			<button class="btn btn-active btn-default" on:click={switchPageToPrice}>Checkout</button>
			<button class="btn btn-success" on:click={goBackPage}>Startseite</button>
		</div>
	{/if}

	{#if currentPage === 'AGB'}
		<button class="switchPage" on:click={switchPageToCheckout}>Zur Kasse</button>
		<div class="flex flex-col justify-center px-64 py-64 bg-base-800">
			<div class="prose">
				<h2>1. Geltungsbereich</h2>
				<p>
					Die folgenden Allgemeinen Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem
					Kunden und Sicherlichecht, nachfolgend als "Verkäufer" bezeichnet. Maßgeblich ist jeweils
					die zum Zeitpunkt des Vertragsschlusses gültige Fassung.
				</p>
				<h2>2. Vertragspartner</h2>
				<p>
					Der Kaufvertrag kommt zustande mit: Sicherlichecht Bundesstraße 11 01234 56789 12345
					sicherlichecht@gmail.com AT123456789
				</p>
				<h2>3. Angebot und Vertragsschluss</h2>
				<p>
					3.1 Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot,
					sondern eine Aufforderung zur Bestellung dar.
				</p>
				<p>
					2 Durch Anklicken des Buttons "zahlungspflichtig bestellen" geben Sie eine verbindliche
					Bestellung der im Warenkorb enthaltenen Waren ab.
				</p>
				<h2>4. Preise und Versandkosten</h2>
				<p>
					4.1 Die angegebenen Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer.
				</p>
				<p>
					4.2 Zusätzlich zu den angegebenen Preisen berechnen wir für die Lieferung Versandkosten.
					Die Versandkosten werden Ihnen im Warenkorbsystem und auf der Bestellseite nochmals
					deutlich mitgeteilt.
				</p>
				<h2>5. Zahlung</h2>
				<p>
					Die Zahlung erfolgt wahlweise per Direktüberweisung, Debitkarte, Kreditkarte, Paypal. Die
					Zahlung des Kaufpreises ist unmittelbar mit Vertragsschluss fällig.
				</p>
				<h2>6. Lieferung</h2>
				<p>6.1 Die Lieferung erfolgt innerhalb von 7 Werktagen nach Zahlungseingang.</p>
				6.2 Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Sache
				geht mit der Übergabe an den Kunden auf diesen über.
				<h2>7. Widerrufsrecht</h2>
				Ihnen steht ein Widerrufsrecht zu. Die Einzelheiten zum Widerrufsrecht finden Sie in der Widerrufsbelehrung.
				<h2>8. Eigentumsvorbehalt</h2>
				Die gelieferte Ware bleibt bis zur vollständigen Bezahlung im Eigentum des Verkäufers.
				<h2>9. Gewährleistung</h2>
				Es gelten die gesetzlichen Gewährleistungsbestimmungen.
				<h2>10. Datenschutz</h2>
				Die Datenschutzerklärung finden Sie hier:.
				<h2>11.Anwendbares Recht</h2>
				Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
				<h2>12.Gerichtsstand</h2>
				Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Verkäufers, sofern
				der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
				Sondervermögen ist.
				<h2>13. Gebühren</h2>
				<p>Es gelten noch weitere Gebühren.</p>
				<p>Versandgebühren</p>
				<p>Bearbeitungsgebühren</p>
				<p>Verpackungsgebühren</p>
				<p>Zollgebühren</p>

				<h2>14. Schlussbestimmungen</h2>
				Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
				übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame,
				die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
				<h3>St.Johann im Pongau, 18.12.2023</h3>
				<h3>Martin Mayrhofer</h3>
				Hinweis: Die AGB sollten an die spezifischen Gegebenheiten und Anforderungen Ihres Onlineshops
				angepasst werden. Es wird empfohlen, rechtlichen Rat einzuholen, um sicherzustellen, dass die
				AGB den aktuellen rechtlichen Anforderungen entsprechen.
				<button class="btn btn-success" on:click={goBackPage}>Startseite</button>
			</div>
		</div>
	{/if}

	{#if currentPage === 'price'}
		<div class="flex flex-col justify-center px-64 py-64 bg-base-800 gap-4">
			<table>
				<thead>
					<tr><th>ID</th> <th>Name</th> <th>Preis</th> </tr>
				</thead>
				<tbody>
					{#each hiddenData as item (item.id)}
						<tr> <td>{item.id}</td> <td>{item.name}</td> <td>{item.price}</td> <td /></tr>
					{/each}
				</tbody>
			</table>
			<button
                on:click={() => {
                    ($patterns[2].done = true), window.location.replace('/');
                }}
                class="btn">Aufgabe abschließen</button
            >
			<button class="btn btn-success" on:click={goBackPage}>Startseite</button>
		</div>
	{/if}
</div>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	}
	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}
	th {
		background-color: #f2f2f2;
	}
</style>
