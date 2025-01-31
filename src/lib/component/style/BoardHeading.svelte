<script>
	export let heading = 'Board';
</script>

<header>
	<h3>{heading}</h3>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgb(241, 158, 138);
		background: linear-gradient(
			0deg,
			/* rgba(241, 158, 138, 1) 0%, */
			rgba(255, 181, 162, 0.85) 0%,
			rgba(255, 205, 178, 1) 40%,
			rgba(255, 205, 178, 1) 90%,
			rgba(255, 234, 222, 1) 100%
		);
		padding: 0.6em;
		width: 100%;
	}

	h3 {
		margin: 0;
		color: var(--main-dark);
		font-weight: 500 !important;
	}
</style>
