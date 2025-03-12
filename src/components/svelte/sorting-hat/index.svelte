<script>
  import SortingHatImage from "../assets/sorting-hat.png";
  import GryffindorShield from "../assets/gryffindor.webp";
  import SlytherinShield from "../assets/slytherin.webp";
  import HufflepuffShield from "../assets/hufflepuff.webp";
  import RavenclawShield from "../assets/ravenclaw.webp";

  let name = "";
  let selectedHouse = "";
  let availableHouses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  function cleanForm() {
    selectedHouse = "";
  }

  function assignHouse() {
    if (!name) return;
    if (availableHouses.length === 0) {
      alert("Todas las casas han sido asignadas");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableHouses.length);
    selectedHouse = availableHouses[randomIndex];
    availableHouses = availableHouses.filter((h) => h !== selectedHouse);
  }
</script>

<div class="container">
  <div class="row">
    <div class="shield-container">
      <img
        class:gryffindor-shield={!availableHouses.includes("Gryffindor")}
        class:gray-shield={availableHouses.includes("Gryffindor")}
        src={GryffindorShield.src}
        alt="Gryffindor shield"
      />
    </div>
    <div class="shield-container">
      <img
        class:slytherin-shield={!availableHouses.includes("Slytherin")}
        class:gray-shield={availableHouses.includes("Slytherin")}
        src={SlytherinShield.src}
        alt="Slytherin shield"
      />
    </div>
  </div>
  <div class="row">
    <div class="shield-container">
      <img
        class:ravenclaw-shield={!availableHouses.includes("Ravenclaw")}
        class:gray-shield={availableHouses.includes("Ravenclaw")}
        src={RavenclawShield.src}
        alt="Ravenclaw shield"
      />
    </div>
    <div class="shield-container">
      <img
        class:hufflepuff-shield={!availableHouses.includes("Hufflepuff")}
        class:gray-shield={availableHouses.includes("Hufflepuff")}
        src={HufflepuffShield.src}
        alt="Hufflepuff shield"
      />
    </div>
  </div>
  <div class="centered-card">
    <div class="hat-container">
      <img
        src={SortingHatImage.src}
        alt="sorting hat"
        class="sorting-hat-image"
      />
    </div>
    <form class="card" on:submit|preventDefault>
      <h2>Bienvenidos al sombrero seleccionador de Programación en español</h2>
      <input
        on:input={() => cleanForm()}
        class="input"
        type="text"
        placeholder="Ingresa tu equipo"
        bind:value={name}
      />
      <button class="button" type="button" on:click={assignHouse}
        >¡Descubrir mi Casa!</button
      >
      {#if selectedHouse}
        <div class="house {selectedHouse}">
          <h3>El {name}, ha sido asignado a {selectedHouse}!</h3>
        </div>
      {/if}
    </form>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap");

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url("../assets/sorting-hat-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Cinzel Decorative", cursive;
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  .gray-bg {
    background-blend-mode: luminosity;
    background-color: #fff;
  }

  .shield-container img {
    width: 350px;
    margin: 0 50px;
  }

  .gray-shield {
    filter: grayscale();
  }

  .gryffindor-shield {
    filter: drop-shadow(0px 0px 20px #7f0909);
  }

  .slytherin-shield {
    filter: drop-shadow(0px 0px 20px #1a472a);
  }

  .ravenclaw-shield {
    filter: drop-shadow(0px 0px 20px #213b91);
  }

  .hufflepuff-shield {
    filter: drop-shadow(0px 0px 20px #ffdb58);
  }

  .row {
    display: flex;
    width: 100%;
    height: 50dvh;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .centered-card {
    position: absolute;
  }

  .card {
    background: rgba(34, 34, 34, 0.9);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
    color: #fff;
    max-width: 400px;
    font-size: 20px;
  }

  .sorting-hat-image {
    width: 350px;
    filter: drop-shadow(0px 0px 20px #fff);
  }

  .input {
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 80%;
    font-size: 16px;
    font-weight: bold;
    font-family: "Cinzel Decorative", cursive;
  }

  .button {
    margin-top: 15px;
    padding: 12px;
    background-color: gold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s;
    font-size: 16px;
    font-family: "Cinzel Decorative", cursive;
  }

  .button:hover {
    transform: scale(1.1);
  }

  .house {
    margin-top: 20px;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
    text-shadow: 1px 1px 4px black;
  }

  .hat-container {
    position: relative;
    animation: float 2s ease-in-out infinite;
    text-align: center;
  }

  .hat-svg {
    width: 250px;
    height: auto;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>
