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
        viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M4.5 6h-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5m0 9h-3v-4h3zm5-11h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5m0 11h-3v-5h3zm5-13h-3c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5m0 13h-3V9h3z"
        /></svg
      ></button
    >
    <button class="filter-button medium-font" on:click={() => filter("medium")}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M4.5 6h-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5m0 9h-3v-4h3zm5-11h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5m0 11h-3v-5h3zm5-13h-3c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5m0 13h-3V9h3z"
        /></svg
      ></button
    >
    <button class="filter-button hard-font" on:click={() => filter("hard")}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        ><path
          fill="currentColor"
          d="M4.5 6h-3c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5m0 9h-3v-4h3zm5-11h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5m0 11h-3v-5h3zm5-13h-3c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5m0 13h-3V9h3z"
        /></svg
      ></button
    >
    <button class="filter-clear-btn" on:click={() => clearFilter()}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 1024 1024"
        ><path
          fill="currentColor"
          d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30M204 390h272V182h72v208h272v104H204zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260z"
        /></svg
      ></button
    >
  </div>
  <div class="challenges-list" transition:slide>
    {#if challengeListCopy.length === 0}
      <h1 transition:slide>¡Todavía no hay retos en esta dificultad!</h1>
    {:else}
      {#each challengeListCopy as item}
        <div transition:slide class="challenge-card">
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
            <a href={item.link} target="_blank" class="challenge-link">
              Ir al reto
            </a>
          </div>
        </div>
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
    padding-top: 25px;
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
    height: 260px;
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
    font-size: 30px;
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
    .challenge-card {
      width: 100%;
    }
  }
</style>
