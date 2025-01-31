<script>
    export let heading = "board";

	let is_shown = true;
</script>

<main>
	<header>
		<h3>{heading}</h3>
		<button on:click={() => (is_shown = !is_shown)}>
			{is_shown ? '-' : '+'}
		</button>
	</header>

	{#if is_shown}
		<div>
			<slot></slot>
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		margin-bottom: 1em;
		border: var(--main-border-dark);
		background-color: #fff;
		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: rgb(241, 158, 138);
			background: var(--main-gradient);
			padding: 0.6em;
			width: 100%;
			h3 {
				margin: 0;
				color: var(--main-dark);
				font-weight: 500 !important;
			}
			button {
				text-align: center;
				background: rgb(243, 161, 214);
				color: #284138;
				background: linear-gradient(0deg, #5db192bb 1%, #7fbeb2 55%, rgb(210, 254, 255) 100%);
				border-radius: 2px;
				padding: 0 4px;
				border: 1px solid #284138;
				font-weight: 600;
                width: 1.5em;
			}
		}
	}
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto auto;
		padding: 0.6em;

		font-size: 0.9em;
        color: var(--main-dark);
	}
</style>
