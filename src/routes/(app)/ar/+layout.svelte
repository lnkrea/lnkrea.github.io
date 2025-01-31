<script>
    import Heading from "$lib/component/Heading.svelte";
    import Subheading from "$lib/component/Subheading.svelte";
    import Content from "$lib/component/Content.svelte";
</script>

<div class="grid">
	<Heading>
		<slot></slot>
	</Heading>

	<Subheading />

	<Content />
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 0.75fr 1fr 4fr;
		gap: 0;
	}
</style>
