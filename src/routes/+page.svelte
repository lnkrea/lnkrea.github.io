<script>
	import '../app.css';
	import Search from '$lib/component/Search.svelte';
	import Board from '$lib/component/navigation/Board.svelte';
	import Form from '$lib/component/forms/Form.svelte';
</script>

<main>
	<h1>welcome to ln_krea</h1>
	<Search placeholder="search for a course" />
	<form>
		<input type="radio" id="course" name="search" checked />course
		<input type="radio" id="year" name="search" />year
		<input type="radio" id="professor" name="search" />professor
	</form>

	<hr />

	<Board heading="archives">
		<div class="section_child">
			<span class="bold">mathematics and sciences</span>
			<ul>
				<li><a href="ar/math/">mathematics</a></li>
				<li><a href="ar/cs">computers</a></li>
				<li><a href="ar/phy">physics</a></li>
				<li><a href="ar/chem">chemistry</a></li>
				<li><a href="ar/bio">biology</a></li>
			</ul>
		</div>

		<div class="section_child">
			<span class="bold">social sciences</span>
			<ul>
				<li><a href="ar/econ">economics</a></li>
				<li><a href="ar/his">history</a></li>
				<li><a href="ar/pol">politics</a></li>
				<li><a href="ar/psyc">psychology</a></li>
				<li><a href="ar/soc">sociology</a></li>
				<li><a href="ar/bus">business</a></li>
				<li><a href="ar/env">environment</a></li>
			</ul>
		</div>

		<div id="last">
			<div class="section_child">
				<span class="bold">arts</span>
				<ul>
					<li><a href="/lit">literature</a></li>
					<li><a href="/ga">global arts</a></li>
				</ul>
			</div>
			<div class="section_child">
				<span class="bold">miscellaneous</span>
				<ul>
					<li><a href="/news">news</a></li>
					<li><a href="/travel">travel</a></li>
				</ul>
			</div>
		</div>
	</Board>

	<Board heading="almanac">
		<div class="section_child">
			<span class="bold">mathematics and sciences</span>
			<ul>
				<li><a href="/math">mathematics</a></li>
				<li><a href="/cs">computers</a></li>
				<li><a href="/phy">physics</a></li>
				<li><a href="/chem">chemistry</a></li>
				<li><a href="/bio">biology</a></li>
			</ul>
		</div>

		<div class="section_child">
			<span class="bold">miscellaneous</span>
			<ul>
				<li><a href="/news">news</a></li>
				<li><a href="/travel">travel</a></li>
			</ul>
		</div>
	</Board>

	<Form />
</main>

<style lang="scss">
	main {
		width: 480px;
		margin: 10px auto;

		input {
			margin: -4px 4px 0px 8px;
		}

	}
	h1 {
		color: var(--main-dark);
		font-size: 3.5em;
		margin: 1em auto 0.5em auto;
	}
	hr {
        background-color: #ffffff !important;
		margin: 4em auto;
        border-top: 1px solid #ff015e;
        // opacity: 0;
	}

	.section_child:nth-child(3) {
		grid-column: 3;
		grid-row: span 2;
	}
	.section_child {
		// padding: 10px;
		color: var(--dark);
		ul {
			list-style-type: none;
			margin-bottom: 12px;
			li {
				margin: 6px 0;
			}
		}
		.bold {
			font-weight: bold;
			text-decoration: underline;
		}
		a {
			color: var(--dark);
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
			// font-weight: 500;
		}
	}

	@media (max-width: 600px) {
		.section_child {
			grid-column: 2;
			grid-row: span 2;
			gap: 10px;
		}
	}
</style>
