<script lang="ts">
    import { page } from '$app/state';
    const major = page.params.major;
    // import type { PageData } from './$types';
    // let { major }: { major: string } = $props();
</script>

<h1>your major is {major}</h1>