<script>
  import Course from './Course.svelte';
  export let courses = [];
</script>

<main>
  <div class="grid">
    {#each courses as course (course.id)}
      <div class="grid-item">
        <Course {course} />
      </div>
    {/each}
  </div>
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px; 
    column-gap: 10px;
    row-gap: 15px;
  }
  .grid-item {
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
