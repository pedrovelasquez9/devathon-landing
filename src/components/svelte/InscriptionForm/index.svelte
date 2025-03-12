<script>
  import { onMount } from "svelte";
  let teamName = "";
  let member1 = "";
  let member2 = "";
  let house = "gryffindor";
  let registered = 0;
  let error = "";
  const maxRegistrations = 20;

  function registerTeam() {
    if (!teamName || !member1 || !member2) {
      error = "Todos los campos son obligatorios";
      return;
    }
    if (registered >= maxRegistrations) {
      error = "El cupo está lleno";
      return;
    }
    registered++;
    alert(`¡${teamName} ha sido registrado exitosamente!`);
    teamName = "";
    member1 = "";
    member2 = "";
    error = "";
  }
</script>

<div class="container">
  <h1>Inscripción - Torneo de Programación Mágica</h1>
  <p>Elige a tu equipo y defiende el honor de tu casa</p>

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}

  <input
    type="text"
    bind:value={teamName}
    placeholder="Nombre del equipo"
    required
  />
  <input type="text" bind:value={member1} placeholder="Miembro 1" required />
  <input type="text" bind:value={member2} placeholder="Miembro 2" required />

  <select bind:value={house}>
    <option value="gryffindor">Gryffindor</option>
    <option value="hufflepuff">Hufflepuff</option>
    <option value="ravenclaw">Ravenclaw</option>
    <option value="slytherin">Slytherin</option>
  </select>

  <button on:click={registerTeam} disabled={registered >= maxRegistrations}>
    Inscribirse
  </button>
</div>

<style>
  body {
    font-family: "Luminari", fantasy;
    background-image: url("/hogwarts-background.jpg");
    background-size: cover;
    background-position: center;
    color: #f0e6d2;
    text-align: center;
  }

  .container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
  }

  input,
  select,
  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
  }

  button {
    background: #b8860b;
    color: white;
    cursor: pointer;
  }

  button:disabled {
    background: grey;
  }
</style>
