<script lang="ts">
	export let heading: string;

	export let is_shown: boolean = true;
	</script>

<main>
	<header on:click={() => (is_shown = !is_shown)}>
		<h3>{heading}</h3>
		<button>
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
		margin: 0 10px 1em 10px;
		border: var(--main-border-dark);
		background-color: #fff;
		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: rgb(241, 158, 138);
			background: var(--main-gradient);
			font-size: 1.6rem;
			padding: 1rem;
			width: 100%;
			h3 {
				margin: 0;
				color: var(--main-dark);
				font-weight: 600;
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
		// 	display: grid;
		// 	// grid-template-columns: 1fr 1fr 1fr;
		// 	grid-template-rows: auto auto;
		padding: 1rem;
		font-size: 1.3em;
		color: var(--main-dark);
	}
</style>
