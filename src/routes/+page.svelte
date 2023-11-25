<script>
	import { patterns, defaultValue } from '$lib/store';

	function clearProgress() {
		$patterns = defaultValue;
	}
</script>

<main class="prose">
	<h1>dark-hak</h1>

	<p>
		Als <em>Dark Patterns</em> bzw. <em>Deceptive Design</em> werden insbesondere Online-Designpraktiken
		bezeichnet, die User*innen zu Handlungen veranlassen, welche sie unbeeinflusst so nicht setzen würden.
		Sie basieren auf der gezielten Ausnutzung einer Reihe menschlicher Schwächen.
	</p>

	<p>
		<em>Dark Patterns</em> erfahren aktuell viel Aufmerksamkeit. Da sie im kurzlebigen Internet immer
		wieder in neuen Kombinationen auftreten und sie oft im rechtlichen Graubereich liegen, ist ihrer
		Verbreitung aber nur schwer beizukommen.
	</p>

	<p>
		Das wirksamste Mittel zum Schutz vor diesen manipulativen Designpraktiken ist Aufklärung.
		Zahlreiche Initiativen bieten daher wertvolle Informationen und gesammelte Beispiele, u.a.
		widmet sich der VKI auf den Seiten
		<a href="https://konsument.at/dark-patterns-so-manipulieren-websites-und-apps/66873"
			>konsument.at</a
		>
		und <a href="https://europakonsument.at/dark-patterns/66704">europakonsument.at</a> ausführlich der
		Thematik.
	</p>

	<p>
		Basierend auf diesen und weiteren Quellen<sup>[<a href="#quellen">1</a>]</sup> haben
		Schüler*innen der <a href="https://www.johak.at">JO.HAK</a>
		auf der vorliegenden Website einen kleinen interaktiven "Hindernisparcours" zur Demonstration einer
		Reihe verschiedener <em>Dark Patterns</em> erstellt. Wurde eine Aufgabe erfolgreich bewältigt, wird
		sie von der Liste gestrichen:
	</p>
</main>

<nav>
	<ul class="flex flex-col items-center gap-5 my-5">
		{#each $patterns as pattern}
			<li>
				<a
					href="/{pattern.slug}"
					class="transition-all hover:underline {pattern.done ? 'line-through' : ''}"
					>{pattern.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<button on:click={clearProgress} class="btn mb-5">Clear Progress</button>

<aside id="quellen" class="prose">
	<h2>Zusätzliche Quellen</h2>
	<ul>
		<li>
			Dark Patterns: Manipulation im Netz - Studie vom ÖIAT im Auftrag der AK Wien. (<a
				href="https://wien.arbeiterkammer.at/darkpatterns">Link</a
			>)
		</li>
		<li>
			Brignull, H. (2023): Deceptive patterns - exposing the tricks that tech companies use to
			control you. (<a href="https://www.deceptive.design/book">Link</a>)
		</li>
	</ul>
</aside>
