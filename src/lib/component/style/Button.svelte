<script>
	export let type;
	export let text = 'submit';
</script>

<button {type}>{text}</button>

<style lang="scss">
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
</style>
