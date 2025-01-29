<script>
    export let course_name = "course name";
    export let course_instructor = "instructor";
    export let course_year = "year";
</script>

<main>
    <h3>{course_name}</h3>
    <p>Instructor: {course_instructor}</p>
    <p>Year: {course_year}</p>
</main>


<style lang="scss">
        main{
        color: var(--dark);
        border: var(--border-dark);
        // width: 200px;
        background-color: #fff;
        font-size: 0.9em;
        h3 {
       padding:10px;
        margin: 0;
        font-weight: 500 !important;
        background: rgb(243,161,214);
        background: linear-gradient(0deg, #f3a1c1 85%, rgb(255, 210, 220) 100%);
    }
    p {
        margin: 10px;
    }
}
</style>