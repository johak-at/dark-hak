<script>
	import { updated } from '$app/stores';

	let page = 1;
</script>
{#if page === 1}
<div class="mockup-browser border bg-base-300 max-w-[80%]">
	<div class="mockup-browser-toolbar">
		<div class="input">https://verrydarkpattern.org</div>
	</div>
	<div class="flex justify-center px-4 py-4 bg-base-1500">
		<div class="navbar bg-base-100">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</div>
					<ul
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Homepage</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Portfolio</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>About</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 2)}>Description</button></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 3)}>Account Settings</button></li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="btn btn-ghost text-xl">Shop</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>

		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content text-center">
				<div>
					<br />
					<div class="flex justify-center">
						<p class="py-6" />
						<div class="card w-[300px] bg-base-100 shadow-xl">
							<figure>
								<img
									src="https://farbtonkarte.de/wp-content/uploads/2020/05/Farbe-Gold-Bedeutung-1155x770.jpg?ezimgfmt=rs:618x412/rscb1/ngcb1/notWebP"
									alt="Shoes"
								/>
							</figure>
							<div class="card-body">
								<h2 class="card-title"><bold>GOLD SUBSCRIPTION</bold></h2>
								<p>Unlock exclusive content, ad-free browsing, and VIP perks—subscribe to Gold!</p>
								<div class="card-actions justify-end">
									<button class="btn btn-primary">Subscribe Now</button>
								</div>
							</div>
						</div>

						<div class="card w-[300px] bg-base-100 shadow-xl">
							<figure>
								<img
									src="https://img.freepik.com/free-vector/silver-metal-background-1_78370-324.jpg"
									alt="Shoes"
								/>
							</figure>
							<div class="card-body">
								<h2 class="card-title"><bold>SILVER SUBSCRIPTION</bold></h2>	
								<p>Explore exclusive content, elevate experience, join our community</p>
								<div class="card-actions justify-end">
									<button class="btn btn-primary">Subscribe Now</button>
								</div>
							</div>
						</div>

						<div class="card w-[300px] bg-base-100 shadow-xl">
							<figure>
								<img
									src="https://static9.depositphotos.com/1036506/1142/i/450/depositphotos_11424278-stock-photo-metal-background-bronze.jpg"
									alt="Shoes"
								/>
							</figure>
							<div class="card-body">
								<h2 class="card-title"><bold>BRONZE SUBSCRIPTION</bold></h2>
								<p>Experience the essenc of our platform with our best Bronze setup</p>
								<div class="card-actions justify-end">
									<button class="btn btn-primary">Subscribe Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="footer items-center p-4 bg-neutral text-neutral-content">
			<aside class="items-center grid-flow-col">
				<svg
					width="36"
					height="36"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p>Copyright © 2023 - All right reserved</p>
			</aside>
			<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/></svg
					></a
				>
			</nav>
		</footer>
	</div>
</div>
{/if}

{#if page === 2}
<div class="mockup-browser border bg-base-300 max-w-[80%]">
	<div class="mockup-browser-toolbar">
		<div class="input">https://verrydarkpattern.org</div>
	</div>
	<div class="flex justify-center px-4 py-4 bg-base-1500">
		<div class="navbar bg-base-100">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</div>
					<ul
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 1)}>Homepage</button></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Portfolio</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>About</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 2)}>Description</button></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 3)}>Account Settings</button></li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="btn btn-ghost text-xl">Description</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>

		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content text-center">
				<div>
					<p class="description">Dark Patterns sind manipulative Designentscheidungen in Benutzeroberflächen, die darauf abzielen, Nutzerinnen zu täuschen oder zu verleiten, um bestimmte Handlungen auszuführen, die sie möglicherweise nicht freiwillig tun würden. Das Muster der "Misdirection" bezieht sich auf eine Taktik, bei der die Aufmerksamkeit der Nutzerinnen bewusst von wichtigen Informationen abgelenkt wird, um sie zu beeinflussen.<br>
					Misdirection nutzt Ablenkungstechniken, wie visuelle Elemente, falsche Anordnungen oder sprachliche Tricks, um die Wahrnehmung der Nutzerinnen zu manipulieren. Zum Beispiel könnte bei einem Online-Kauf eine Option zum Abonnieren eines Newsletters voreingestellt sein, und die eigentliche Schaltfläche zum Abwählen könnte kleiner oder weniger auffällig platziert sein. So könnten Nutzerinnen, die nicht genau hinsehen, unwissentlich dem Abonnement zustimmen, weil sie die entscheidende Schaltfläche übersehen haben.<br>
					Ein weiteres Beispiel für Misdirection wäre, wenn beim Abschluss eines kostenpflichtigen Dienstes die Schaltfläche zum "Weiter" oder "Bestätigen" hervorgehoben und auffällig ist, während die Option zum "Abbrechen" oder "Nicht fortfahren" in kleinerer Schrift oder am Rand platziert wird. Dies lenkt die Aufmerksamkeit weg von der Option, den Prozess zu stoppen, und drängt die Nutzer*innen eher dazu, fortzufahren.<br>
					Visuell kann Misdirection durch übermäßige Grafikelemente, Pop-ups oder blinkende Anzeigen verstärkt werden, die die eigentliche Handlungsmöglichkeit überlagern oder verdecken. Diese Ablenkungen beeinträchtigen die Fähigkeit der Nutzer*innen, klare und fundierte Entscheidungen zu treffen, und können dazu führen, dass sie versehentlich unerwünschte Aktionen ausführen.<br>
					Im Wesentlichen manipuliert Misdirection die visuelle und sprachliche Präsentation von Informationen, um die Aufmerksamkeit gezielt von bestimmten Optionen abzulenken oder zu entführen, sodass Nutzer*innen unabsichtlich Entscheidungen treffen, die ihren eigentlichen Absichten entgegenstehen. Es ist wichtig, solche dunklen Muster zu erkennen und zu vermeiden, um eine faire und ethische Benutzererfahrung zu gewährleisten.</p>	
				</div>
			</div>
		</div>

		<footer class="footer items-center p-4 bg-neutral text-neutral-content">
			<aside class="items-center grid-flow-col">
				<svg
					width="36"
					height="36"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p>Copyright © 2023 - All right reserved</p>
			</aside>
			<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/></svg
					></a
				>
			</nav>
		</footer>
	</div>
</div>
{/if}

{#if page === 3}
<div class="mockup-browser border bg-base-300 max-w-[80%]">
	<div class="mockup-browser-toolbar">
		<div class="input">https://verrydarkpattern.org</div>
	</div>
	<div class="flex justify-center px-4 py-4 bg-base-1500">
		<div class="navbar bg-base-100">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</div>
					<ul
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 1)}>Homepage</button></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>Portfolio</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><a>About</a></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 2)}>Description</button></li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li><button on:click={() => (page = 3)}>Account Settings</button></li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="btn btn-ghost text-xl">Shop</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>

		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content text-center">
				<div>
					<div class="avatar">
						<div class="w-24 rounded">
						  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					  </div>
				</div>
			</div>
		</div>

		<footer class="footer items-center p-4 bg-neutral text-neutral-content">
			<aside class="items-center grid-flow-col">
				<svg
					width="36"
					height="36"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p>Copyright © 2023 - All right reserved</p>
			</aside>
			<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					>
				</a>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
						/></svg
					></a
				>
			</nav>
		</footer>
	</div>
</div>
{/if}

<style>
	.mockup-browser {
		width: 100%;
		height: 850px;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.05);
		background-color: rgb(163, 163, 163);
	}
	.mockup-browser-toolbar {
		height: 2.5rem;
		background-color: #787878;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		z-index: 2;
	}

	/* a nav bar that is at the verry top of the mockup browser window  but under the tool bar of the browser*/
	.mockup-browser .navbar {
		position: absolute;
		top: 3rem;
		left: 0;
		right: 0;
		z-index: 1;
	}

	/* a footer that is at the bottom of the mockup browser window */
	.mockup-browser .footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}

	/* the text "hello there" is centered in the mockup browser window */
	.mockup-browser .hero-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 0;
	}

	.mockup-browser .card {
		margin: 2rem;
	}

	.description {
		text-align: left;
	}
</style>
