<script>
	import Course from '$lib/components/Course.svelte';
	import Heading from '$lib/components/Heading.svelte';
    import Subheading from '$lib/components/Subheading.svelte';
</script>

<div class="grid">
    <Heading />

		<Subheading />

		<Course course_name="course name" course_instructor="instructor" course_year="year" />
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 0.75fr 1.5fr 4fr;
		gap: 0;
	}
</style>
