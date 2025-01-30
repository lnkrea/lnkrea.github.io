<script>
    export let header = "boards";
    let showSections = true;

    function toggleSections() {
        showSections = !showSections;
    }
</script>
  
<main>
    <header>
        <h3>{header}</h3>
        <button on:click={toggleSections}>+</button>
    </header>
    <div class="sections" style="display: {showSections ? 'grid' : 'none'};">
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
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(243,161,214);
        background: linear-gradient(0deg, #f3a1c1 85%, rgb(255, 210, 220) 100%);
        padding: 10px;
        width: 100%;
    }
    button {
      text-align: right;
        background: rgb(243,161,214);
        color: #284138;
        background: linear-gradient(0deg, #5db192bb 1%, #7fbeb2 85%, rgb(210, 254, 255) 100%);
        border-radius: 2px;
        padding: 0 4px;
        border: 1px solid #284138;
        font-weight: 600;
    }
    h3 {
        margin: 0;
        color: var(--dark);
        font-weight: 500 !important;
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
      text-decoration: none;    }    a:hover {      text-decoration: underline;
    }
  </style>