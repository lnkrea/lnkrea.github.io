<script lang="ts">
    import type { PageData } from './$types';
    import Mess from '$lib/component/food/Mess.svelte';

    let { data }: { data: PageData } = $props();
</script>

<div class="container">
    <Mess />
</div>

<style lang="scss">
    .container {
        max-width: 580px;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        .container {
            padding: 0 2em;
        }
    }
</style>


