<script>
  import { onMount } from 'svelte';
  import io from 'socket.io-client';

  let socket;
  let registered = false;
  let userName = '';
  let houses = [];
  let participants = [];
  let errorMsg = '';

  // Conectar al backend y suscribirse a los eventos del socket
  onMount(() => {
    // socket = io('http://localhost:3001');
    socket = io(window.location.origin, { path: '/socket.io', transports: ['websocket'] });

    // Actualiza los puntos en tiempo real
    socket.on('pointsUpdate', data => {
      houses = houses.map(house => {
        if (house.name === data.houseName) {
          return { ...house, points: data.newPoints };
        }
        return house;
      });
    });

    // Actualiza la lista de participantes conectados
    socket.on('userList', data => {
      participants = data;
    });
  });

  function register() {
    if (userName.trim() === '') {
      errorMsg = 'Ingresa tu nombre.';
      return;
    }
    socket.emit('register', { name: userName }, response => {
      if (response.status === 'ok') {
        registered = true;
        houses = response.houses; // Se espera que el backend envíe la lista de casas con sus puntos
      } else {
        errorMsg = response.message;
      }
    });
  }

  function incrementPoints(houseName) {
    socket.emit('increment', { houseName }, response => {
      if (response.status !== 'ok') {
        errorMsg = response.message;
      }
    });
  }

  function restartPoints(houseName) {
    socket.emit('restart', { houseName }, response => {
      if (response.status !== 'ok') {
        errorMsg = response.message;
      }
    });
  }
</script>

<div class="container">
  <!-- Lista de participantes conectados -->
  <div class="participants">
    <h3>Participantes:</h3>
    <ul>
      {#each participants as participant}
        <li>{participant.name}</li>
      {/each}
    </ul>
  </div>

  {#if !registered}
    <!-- Formulario de registro -->
    <div class="register-form">
      <h1>Bienvenido al Gran Comedor de Hogwarts</h1>
      <p>Ingresa tu nombre para unirte a la experiencia</p>
      <input type="text" bind:value={userName} placeholder="Tu nombre" />
      <button on:click={register}>Entrar</button>
      {#if errorMsg}
        <div class="error">{errorMsg}</div>
      {/if}
    </div>
  {:else}
    <h1>Gran Comedor de Hogwarts</h1>
    <div class="houses">
      {#each houses as house (house.name)}
        <div class="house {house.name.toLowerCase()}">
          <div class="tube-wrapper">
            <div class="crest"></div>
            <div class="tube-top"></div>
            <div class="progress-container">
              <!-- El alto del relleno se ajusta según los puntos (0 a 100%) -->
              <div class="fill" style="height: {house.points}%"></div>
            </div>
            <div class="tube-bottom"></div>
          </div>
          <div class="info">
            <p>{house.name} - {house.points} / {house.maxPoints} puntos</p>
            <button on:click={() => incrementPoints(house.name)}>Sumar 5 puntos</button>
            <button on:click={() => restartPoints(house.name)}>Reiniciar puntos</button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0;
    margin: 0;
    color: #fff;
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/sorting-hat-bg.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Cinzel Decorative', cursive;
  }

  /* ===== PARTICIPANTES (ESQUINA SUPERIOR DERECHA) ===== */
  .participants {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    max-width: 200px;
    z-index: 100;
  }
  .participants h3 {
    margin: 0 0 5px 0;
    font-size: 1rem;
  }
  .participants ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
  }
  .participants li {
    margin: 0;
  }

  /* ===== CONTENEDOR PRINCIPAL ===== */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
  }

  /* ===== FORMULARIO DE REGISTRO ===== */
  .register-form {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 2rem;
  }
  .register-form input {
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .register-form button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .error {
    color: #ff8080;
    margin-top: 1rem;
  }

  /* ===== CONTENEDORES DE LAS CASAS ===== */
  .houses {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }

  /* Cada contenedor abarca el 80% de la altura del navegador */
  .house {
    width: 150px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: none;
    margin: 1rem;
  }

  /* Contenedor del diseño del tubo */
  .tube-wrapper {
    position: relative;
    height: 70%; /* 70% del contenedor para el diseño del tubo */
    width: 100%;
  }

  /* Escudo de la casa */
  .crest {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
  }

  /* Tapa superior dorada */
  .tube-top {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 30px;
    background-color: #b5912f;
    border-radius: 40px 40px 0 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) inset;
    z-index: 1;
  }

  /* Contenedor del tubo con transparencia */
  .progress-container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 70%;
    background: rgba(255, 255, 255, 0.25);
    border: 2px solid #b5912f;
    border-radius: 35px;
    overflow: hidden;
    z-index: 0;
  }

  /* Tubo inferior dorado */
  .tube-bottom {
    position: absolute;
    top: 103%;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 10%;
    background-color: #b5912f;
    border-radius: 0 0 40px 40px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.5) inset;
    z-index: 1;
  }

  /* Relleno vertical que sube según los puntos */
  .fill {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    transition: height 0.5s ease;
  }

  /* Área inferior con la puntuación y el botón; se ubica fuera del tubo */
  .info {
    text-align: center;
    width: 100%;
  }
  .info p {
    margin: 0.5rem 0;
  }
  .info button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
  }

  /* ===== ESTILOS ESPECÍFICOS POR CASA ===== */
  .gryffindor .crest {
    background-image: url('../assets/gryffindor.webp');
  }
  .gryffindor .fill {
    background: linear-gradient(180deg, #740001, #ae0001);
  }
  .gryffindor .info button {
    background-color: #ae0001;
  }

  .hufflepuff .crest {
    background-image: url('../assets/hufflepuff.webp');
  }
  .hufflepuff .fill {
    background: linear-gradient(180deg, #ffd800, #eee117);
  }
  .hufflepuff .info button {
    background-color: #eee117;
    color: #000;
  }

  .ravenclaw .crest {
    background-image: url('../assets/ravenclaw.webp');
  }
  .ravenclaw .fill {
    background: linear-gradient(180deg, #222f5b, #4b6d9b);
  }
  .ravenclaw .info button {
    background-color: #4b6d9b;
  }

  .slytherin .crest {
    background-image: url('../assets/slytherin.webp');
  }
  .slytherin .fill {
    background: linear-gradient(180deg, #1a472a, #2a623d);
  }
  .slytherin .info button {
    background-color: #2a623d;
  }
</style>
