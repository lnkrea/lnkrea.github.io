<script>
    import '../app.css';
	import Header from "$lib/component/navigation/Header.svelte";
	import Footer from "$lib/component/navigation/Footer.svelte";
	import { applyAction } from "$app/forms";
</script>

<Header />

<slot>

</slot>

<Footer />

