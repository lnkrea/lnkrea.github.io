<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    import { page } from '$app/state';
    const { major, course_name } = page.params;
</script>

hi your major is {major} and course name is {course_name}