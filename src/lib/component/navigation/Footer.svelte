<script>
</script>

<footer>
	<button><a href="https://krea.edu.in/">krea</a></button>
	<button><a href="/">home</a></button>
	<button><a href="https://github.com/lnkrea/lnkrea.github.io">github</a></button>
</footer>

<style>
	footer {
		font-size: 1.2em;
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 2rem auto;
		  min-height: 50px;

		button {
			border: var(--main-border-dark);
			border-right: none;
			padding: 0.4em;
			background: var(--main-gradient);
			cursor: pointer;
			color: var(--main-dark);

			margin-bottom: 2rem;
			a {
				text-decoration: none;
				color: var(--main-dark);
			}
		}

		button:hover {
			background:var(--main-gradient-selected);
			color: rgba(43, 39, 39);
			/* text-decoration: underline; */
			font-weight: 500;
			box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
		}
		button:last-child {
			border-right: var(--main-border-dark);
		}
	}
</style>
