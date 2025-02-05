<script lang="ts">
  import Board from "$lib/component/style/Board.svelte";
  import { menus } from "../../../data/menus";

  export let days: string[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const today = new Date().getDay();
  let selected_day = days[today === 0 ? 6 : today - 1]; // Adjust for Sunday being 0 in getDay()
  let yest_day = days[today === 0 ? 5 : today - 2]; // Adjust for Sunday being 0 in getDay()
  let next_day = days[today === 6 ? 0 : today]; // Adjust for Sunday being 0 in getDay()

  function selectDay(day: string) {
    selected_day = day;
    console.log(selected_day);
  }

  $: heading = selected_day === days[today - 1] ? "today" : selected_day;

  const abbreviate_day = (day: string) => {
    return day.slice(0, 3);
  };

  $: day_labels = [
    { label: "yesterday", day: yest_day },
    { label: `${heading}'s menu`, day: selected_day },
    { label: "tomorrow", day: next_day },
  ];

  $: is_shown = [
    selected_day === yest_day,
    selected_day !== yest_day && selected_day !== next_day,
    selected_day === next_day
  ];
</script>

<div class="week_day_selector">
  {#each days as day}
    <button
      class:selected={selected_day === day}
      on:click={() => selectDay(day)}
    >
      <span class="full">{day}</span>
      <span class="abbr">{abbreviate_day(day)}</span>
    </button>
  {/each}
</div>

<!-- looping through yest_day, today, tomorrow-->
{#each day_labels as { label, day }, i}
  <Board heading={label} is_shown={is_shown[i]}>
    <!-- the three grids for bf, lunch, dinner+ snacks-->
    <div class="grid">
      <!--div containing the breakfast menu -->
      <div>
        <h4>Breakfast</h4>
        <div class="mobile">
          {#each menus[day][0] as item}
            <p>{item}</p>
          {/each}
        </div>
      </div>

      <!--div containing the lunch menu -->
      <div>
        <h4>Lunch</h4>
        <div class="mobile">
          {#each menus[day][1] as item}
            <p>{item}</p>
          {/each}
        </div>
      </div>

      <!--flex containing the dinner and snacks menu -->
      <div class="flex">
        <div>
          <h4>Snacks</h4>
          <div class="mobile">
            {#each menus[day][3] as item}
              <p>{item}</p>
            {/each}
          </div>
        </div>

        <div>
          <h4 class="">Dinner</h4>
          <div class="mobile">
            {#each menus[day][2] as item}
              <p>{item}</p>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </Board>
{/each}

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    .flex {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    h4 {
      margin-bottom: 0.25em;
      text-decoration: underline;
    }
  }
  .week_day_selector {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 2em auto;
    margin-bottom: 20px;

    button {
      font-size: 1.4rem !important; /* Ensure font size is applied */
      border: var(--blue-border);
      border-right: none;
      padding: 0.6em;
      background: var(--blue-gradient);
      cursor: pointer;
      color: #151534;
      text-shadow: 0px 0px 1px white;

      span.full {
        display: inline;
      }

      span.abbr {
        display: none;
      }
    }

    button:hover,
    .selected {
      background: var(--blue-gradient-selected);
      color: #fff;
      font-weight: 600;
      box-shadow: inset 0 4px 6px rgba(50, 52, 90, 0.2);
      text-shadow: 0px 0px 1px rgb(39, 35, 51);
    }
    button:last-child {
      border-right: var(--blue-border);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2em;
      font-size: 1.4rem !important;
      .mobile {
        // font-size: 0.9em !important;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    .flex {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .week_day_selector {
      flex-wrap: wrap;

      button {
        width: 6ch;
        span.full {
          display: none;
        }

        span.abbr {
          display: inline;
        }
      }
    }
  }

  @media (max-width: 300px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
