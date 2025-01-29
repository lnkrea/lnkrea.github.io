<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  export const prerender = true;
</script>

<Header />

<slot />
