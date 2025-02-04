<script>
</script>

<footer>
	<button>about</button>
	<button>contribute</button>
	<button>contact</button>
	<button>help</button>
	<button>github</button>
</footer>

<style>
	footer {
		font-size: 1.2em;
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 2rem auto;

		button {
			border: var(--main-border-dark);
			border-right: none;
			padding: 0.4em;
			background: var(--main-gradient);
			cursor: pointer;
			color: var(--main-dark);
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
