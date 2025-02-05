<script lang="ts">
  import { data } from '../../../data/2025_t6_courses';
</script>

<div>
    {#each data as course}
    <div class="course">
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <ul>
        {#each course.topics as topic}
        <li>{topic}</li>
        {/each}
        </ul>
    </div>
    {/each}
</div>

<style lang="scss">
  .course {
    margin-bottom: 2rem;
    h3 {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 1rem;
    }
    ul {
      list-style: disc;
      padding-left: 1.5rem;
    }
  }
</style>