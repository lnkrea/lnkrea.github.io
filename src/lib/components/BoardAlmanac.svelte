<div class="section_child">
    <span class="bold">Food</span>
        <ul>
            <li><a href="/mess">mess</a></li>
            <li><a href="/narsee">narsee</a></li>
            <li><a href="/copa mocha">copa </a></li>
            <li><a href="/cravory">cravory</a></li>
            <li><a href="/pjr">pjr</a></li>
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
            <li>convenience store</li>
            <li><a href="/library">library</a></li>
        </ul>
</div>
</div>


<style lang="scss">
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