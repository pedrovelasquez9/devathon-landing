<script>
  import { slide } from "svelte/transition";
  import logo from "../assets/PEE_logo.png";
  export let challengesList = [];
  let challengeListCopy = structuredClone(challengesList);
  const levels = {
    easy: "Fácil",
    medium: "Medio",
    hard: "Difícil",
  };
  const filter = (difficulty) => {
    challengeListCopy = challengesList.filter(
      (value) => value.level === difficulty
    );
  };

  const clearFilter = () => {
    challengeListCopy = structuredClone(challengesList);
  };
</script>

<div class="challenges-content">
  <div class="filter-bar">
    <button class="filter-button easy-font" on:click={() => filter("easy")}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M14 6.5V14q0 .214.143.357t.357.143t.357-.143T15 14V6.308q0-.348-.23-.578t-.578-.23H12.5q-.213 0-.357.143T12 6t.143.357t.357.143zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.691 0-1.153-.462T3.5 18.385V7.115q0-.213.143-.356T4 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h11.27q.213 0 .356.143t.144.357t-.144.357t-.356.143z"
        /></svg
      ></button
    >
    <button class="filter-button medium-font" on:click={() => filter("medium")}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12 13.5v-2.384q0-.27.173-.443t.443-.173h1.769q.69 0 1.153-.462T16 8.884V7.115q0-.69-.462-1.153T14.385 5.5H11.5q-.213 0-.357.143T11 6t.143.357t.357.143h2.885q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.77q-.69 0-1.153.463T11 11.116v2.576q0 .349.23.578t.578.23H15.5q.214 0 .357-.143T16 14t-.143-.357t-.357-.143zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.691 0-1.153-.462T3.5 18.385V7.115q0-.213.143-.356T4 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h11.27q.213 0 .356.143t.144.357t-.144.357t-.356.143z"
        /></svg
      ></button
    >
    <button class="filter-button hard-font" on:click={() => filter("hard")}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M14.385 14.5q.69 0 1.153-.462T16 12.884v-1.653q0-.593-.31-.883T15 10q.38-.058.69-.348t.31-.883V7.115q0-.69-.462-1.153T14.385 5.5H11.5q-.213 0-.357.143T11 6t.143.357t.357.143h2.885q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.27q-.213 0-.356.143t-.143.357t.143.357t.357.143h1.269q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H11.5q-.213 0-.357.143T11 14t.143.357t.357.143zM8.115 17q-.69 0-1.152-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.69 0-1.152-.462T3.5 18.385V7.115q0-.213.143-.356T4 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h11.27q.213 0 .356.143t.144.357t-.144.357t-.356.143z"
        /></svg
      ></button
    >
    <button class="filter-clear-btn" on:click={() => clearFilter()}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.13em"
        height="1em"
        viewBox="0 0 576 512"
        ><path
          fill="currentColor"
          d="M3.9 22.9C10.5 8.9 24.5 0 40 0h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9M432 224a144 144 0 1 1 0 288a144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368z"
        /></svg
      ></button
    >
  </div>
  <div class="challenges-list" transition:slide={{ duration: 1000 }}>
    {#if challengeListCopy.length === 0}
      <h1 transition:slide={{ duration: 1000 }}>
        ¡Todavía no hay retos en esta dificultad!
      </h1>
    {:else}
      {#each challengeListCopy as item}
        <a href={item.link} target="_blank" class="challenge-link">
          <div transition:slide={{ duration: 1000 }} class="challenge-card">
            <div class="corner-dot-container">
              <div class="corner-dot {item.level}" />
            </div>
            <div class="challenge-card-body">
              <img
                class="challenge-image"
                src={logo.src}
                alt="Reto de programación"
              />
              <h2>{item.title}</h2>
              <p>Nivel: {levels[item.level]}</p>
              <p>Ir al reto</p>
            </div>
          </div>
        </a>
      {/each}
    {/if}
  </div>
</div>

<style>
  .filter-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90px;
    min-width: 90px;
    background-color: rgb(9 12 38 / 41%);
    border-radius: 15px;
    height: auto;
    justify-content: flex-start;
    gap: 35px;
    padding: 25px 0 25px 0;
  }

  .challenges-content {
    display: flex;
    gap: 50px;
  }

  .challenge-image {
    width: 80px;
    border-radius: 50%;
  }

  .challenge-card {
    background-color: rgb(9 12 38 / 41%);
    padding: 20px;
    width: 210px;
    height: 285px;
    border-radius: 15px;
  }

  .challenge-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }

  .challenges-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: row;
    width: 100%;
  }

  .challenges-list h1 {
    text-align: center;
    align-content: center;
    width: 100%;
  }

  .challenge-card h2 {
    font-size: 20px;
  }

  .corner-dot-container {
    display: flex;
    justify-content: flex-end;
  }

  .challenge-link {
    color: #fff;
    text-decoration: none;
  }

  .corner-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .filter-button {
    background-color: transparent;
    font-size: 25px;
    border: none;
  }

  .filter-clear-btn {
    background: transparent;
    border: none;
    font-size: 25px;
    color: #fff;
  }

  .easy-font {
    color: green;
  }

  .medium-font {
    color: orange;
  }

  .hard-font {
    color: #900;
  }

  .easy {
    background-color: green;
  }

  .medium {
    background-color: orange;
  }

  .hard {
    background-color: #900;
  }

  @media (max-width: 770px) {
    .challenges-content {
      flex-direction: column;
    }

    .challenges-list {
      justify-content: center;
      align-items: center;
    }

    .filter-bar {
      flex-direction: row;
      height: auto;
      width: 100%;
      padding: 12px;
      min-width: 239px;
      justify-content: center;
    }
  }

  @media (max-width: 537px) {
    .challenge-card,
    .challenge-link {
      width: 100%;
    }
  }
</style>
