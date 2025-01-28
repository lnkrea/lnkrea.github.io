<script>
    import Search from "./Search.svelte";
    import Courses from "./Courses.svelte";
</script>


<div class="sections">
<Search></Search>
<Courses></Courses>
</div>


<style lang="scss">
    .sections {
        width: 480px;
        display: grid;
        margin: auto;
    }

 @media (max-width: 600px) {
        .sections {
            width: 95%;
        }
    }
</style>