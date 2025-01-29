<script>
    export let header = "boards";
  </script>
  
  <main>
    <h3>{header}</h3>
    <div class="sections">
      <slot></slot>
    </div>
  </main>
  
  <style lang="scss">
    main {
        border: var(--border-dark);
        background-color: #fff;
        margin: 10px auto;
        font-size: 0.9em;
        width: 100%;
    }
    h3 {
        padding: 10px;
        margin: 0;
        color: var(--dark);
        font-weight: 500 !important;
        background: rgb(243,161,214);
        background: linear-gradient(0deg, #f3a1c1 85%, rgb(255, 210, 220) 100%);
    }
    .sections {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        padding: 10px;
    }
  
    @media (max-width: 450px) {
      .sections {
        grid-template-columns: 2fr;
      }
    }
  
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
  </style>