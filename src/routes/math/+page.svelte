<script>
    import Course from "$lib/components/Course.svelte";
</script>


<div class="grid">
    <header class="head">
        <Course course_name="course name" course_instructor="instructor" course_year="year" />
    </header>

    <header class="subhead">
        <div class="subhead-heading">/courses</div>
        <div class="subhead-content">

        <h3>2022</h3>
        <ul>
            <li>algebra 1</li>
            <li>analysis 2</li>
        </ul>

        <h3>2022</h3>
        <ul>
            <li>algebra 1</li>
            <li>analysis 2</li>
        </ul>
        </div>
    </header>

    <main>
        <Course course_name="course name" course_instructor="instructor" course_year="year" />
    </main>

</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 4fr;
        gap: 0;
    }

    .subhead {
// margin: 18px;
        .subhead-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(243,161,214);
        background: linear-gradient(0deg, #f3a1c1 85%, rgb(255, 210, 220) 100%);
        padding: 10px;
        width: 100%;
        margin-bottom: 18px;
        }

        .subhead-content {
            margin: 0 10px;
        }

        ul {
list-style-type: none;
margin-bottom: 20px;
        }
    }
</style>