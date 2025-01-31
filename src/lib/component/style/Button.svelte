<script>
	export let type;
	export let text = 'submit';
</script>

<button {type}>{text}</button>

<style lang="scss">
	button {
		border: var(--main-border-dark);
		padding: 0.4em 0.9em;
		background: var(--main-gradient);
		cursor: pointer;
		font-size: 0.8em;
		color: var(--main-dark);
	}

	button:hover {
		background: linear-gradient(
			0deg,
			rgba(211, 131, 111) 0%,
			rgba(238, 173, 156) 20%,
			rgb(255, 210, 186) 100%
		);
		color: rgba(43, 39, 39);
		/* text-decoration: underline; */
		// box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>
