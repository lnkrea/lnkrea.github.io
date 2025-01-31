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
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 2em auto;
		margin-bottom: 20px;

		button {
			border: var(--main-border-dark);
			border-right: none;
			padding: 0.4em;
			background: var(--main-gradient);
			cursor: pointer;
			font-size: 0.8em;
			color: var(--main-dark);
		}

		button:hover {
			background: linear-gradient(
				180deg,
				rgba(222, 156, 139, 0.85) 0%,
				rgba(222, 156, 139, 0.85) 20%,
				rgb(237, 185, 156) 100%
			);
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
