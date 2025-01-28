<script>
  // Install sass by running: npm install -D sass
</script>

<main>
<h3>archives</h3>
<div class="sections">
<div class="section_child">
    <span class="bold">mathematics and sciences</span>
        <ul>
            <li><a href="/math">mathematics</a></li>
            <li><a href="/cs">computers</a></li>
            <li><a href="/phy">physics</a></li>
            <li><a href="/chem">chemistry</a></li>
            <li><a href="/bio">biology</a></li>
        </ul>
</div>

<div class="section_child">
    <span class="bold">social sciences</span>
        <ul>
            <li><a href="/econ">economics</a></li>
            <li><a href="/his">history</a></li>
            <li><a href="/pol">politics</a></li>
            <li><a href="/psyc">psychology</a></li>
            <li><a href="/soc">sociology</a></li>
            <li><a href="/bus">business</a></li>
            <li><a href="/env">environment</a></li>
        </ul>
</div>

<div id="last">
<div class="section_child">
    <span class="bold">arts</span>
        <ul>
            <li><a href="/lit">literature</a></li>
            <li><a href="/ga">global arts</a></li>
        </ul>
</div>
<div class="section_child">
    <span class="bold">miscellaneous</span>
        <ul>
            <li><a href="/news">news🔥</a></li>
            <li><a href="/travel">travel</a></li>
            <li><a href="/lit">literature</a></li>
        </ul>
</div>
</div>
</div>
</main>


<style lang="scss">
    main {
        border: var(--border-dark);
        background-color: #fff;
        margin: auto;
        font-size: 0.9em;
    }
    h3 {
        padding: 10px;
        margin: 0;
        color: var(--dark);
        font-weight: 500 !important;
        background: rgb(243,161,214);
        background: linear-gradient(0deg, rgb(243, 161, 193) 85%, rgb(255, 210, 220) 100%);
    }
    .sections {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        padding: 10px;
    }
    .section_child:nth-child(3) {
        grid-column: 3;
        grid-row: span 2;
    }
    .section_child {
        padding: 10px;
        color: var(--dark);
        ul {
            list-style-type: none;
            li {
                margin: 4px 0;
            }
        }
        .bold {
            font-weight: bold;
            text-decoration: underline;
            
        }
        a {
            color: var(--dark);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 450px) {
        .sections {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
        }
        .section_child:nth-child(3),
        .section_child:nth-child(4) {
            grid-column: span 1;
        }
        #last {
            display: contents;
        }
    }
</style>