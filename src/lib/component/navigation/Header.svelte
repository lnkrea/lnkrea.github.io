<script lang="ts">
  import { pages } from "../../../data/links";
  import { writable } from "svelte/store";

  const selected_category = writable("archive");

  const handle_category_change = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selected_category.set(target.value);
  };

  const getLinks = (category: string) => {
    return Object.values(pages[category].categories).flatMap(category =>
      Object.keys(category.links)
    );
  };
</script>

<nav>
  <div class="home align_centre"><a href="/">log_krea</a></div>
  <div>
  <form action="/search" method="get">
    <select name="category" id="category" on:change={handle_category_change}>
      <option value="archive">archives</option>
      <option value="utility">utility</option>
      <option value="events">events</option>
    </select>
    <input type="search" name="q" id="q" placeholder="search" />
    <button type="submit">search</button>
  </form>
  </div>
  <div class="align_centre">
  <ul>
    {#each getLinks($selected_category) as url}
      <li><a href={url}>[ {url} ]</a></li>
    {/each}
  </ul>

  </div>
</nav>

<style lang="scss">
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    background: var(--main-bg-dark);
    font-size: 1.2em;
    border-bottom: var(--main-border-dark);
    .align_centre {

      display: flex;
        align-items: center;
    }
    .home {
      padding: 0 0.5em;
      font-weight: 600;
      color: #fff;
      background-color: red;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
    ul {
      display: flex;
      justify-content: flex-start;
      list-style: none;
      li {
        margin: 0 4px;
        a {
            color: var(--main-dark);
            text-decoration: none;
        }
        
      }
    }
  }
</style>
