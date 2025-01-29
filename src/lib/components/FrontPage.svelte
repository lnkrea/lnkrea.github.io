<script>
    import Search from "./Search.svelte";
    import Board from "./Board.svelte";
    import BoardCourse from "./BoardCourse.svelte";
</script>


<div class="sections">
<Search></Search>

<Board header="archives">
    <BoardCourse></BoardCourse>
</Board>

<Board header="miscellaneous">
    <BoardCourse />
</Board>
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
 @media (max-width: 400px) {
        .sections {
            width: 90%;
        }
    }
</style>