<<<<<<< HEAD
const ContenedorPokemon = document.querySelector('.contenedor-pokemon');
// Elementos del modal
const modal = document.getElementById('modal-pokemon');
const closeBtn = document.querySelector('.close-btn');
const modalName = document.getElementById('modal-name');
const modalId = document.getElementById('modal-id');
const modalImg = document.getElementById('modal-img');
const modalTypes = document.getElementById('modal-types');
const modalHeight = document.getElementById('modal-height');
const modalWeight = document.getElementById('modal-weight');
const modalStats = document.getElementById('modal-stats');

// Cerrar el modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      crearPokemon(data);
    });
}

function fetchPokemons(numero) {
  ContenedorPokemon.innerHTML = ''; // Limpiar contenedor antes de agregar nuevos
  for (let i = 1; i <= numero; i++) {
    // Generar ID aleatorio entre 1 y 649
    let idPoke = Math.floor(Math.random() * 649 + 1);
    fetchPokemon(idPoke);
  }
}

function crearPokemon(pokemon) {
  const carta = document.createElement('div');
  carta.classList.add('pokemon-block');

  // Evento click para abrir el modal
  carta.addEventListener('click', () => {
    mostrarModal(pokemon);
  });

  const spriteContenedor = document.createElement('div');
  spriteContenedor.classList.add('contenedor-img');

  const sprite = document.createElement("img");
  // Obtener el sprite animado
  const spriteAnimado = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
  sprite.src = spriteAnimado ? spriteAnimado : pokemon.sprites.front_default;
  sprite.alt = pokemon.name;

  spriteContenedor.appendChild(sprite);

  const numero = document.createElement('p');
  numero.classList.add('numero');
  numero.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

  const nombre = document.createElement('p');
  nombre.classList.add('nombre');
  nombre.textContent = pokemon.name;

  // Tipos
  const tipos = document.createElement('div');
  tipos.classList.add('tipos-contenedor');

  pokemon.types.forEach(typeData => {
    const tipo = document.createElement('span');
    tipo.classList.add('tipo', typeData.type.name);
    tipo.textContent = typeData.type.name;
    tipos.appendChild(tipo);
  });

  // Estadísticas básicas
  const statsContenedor = document.createElement('div');
  statsContenedor.classList.add('stats-contenedor');

  const hp = pokemon.stats.find(s => s.stat.name === 'hp').base_stat;
  const atk = pokemon.stats.find(s => s.stat.name === 'attack').base_stat;
  const def = pokemon.stats.find(s => s.stat.name === 'defense').base_stat;

  statsContenedor.innerHTML = `
    <div class="stat"><span class="stat-name">HP</span><span class="stat-val">${hp}</span></div>
    <div class="stat"><span class="stat-name">ATK</span><span class="stat-val">${atk}</span></div>
    <div class="stat"><span class="stat-name">DEF</span><span class="stat-val">${def}</span></div>
  `;

  carta.appendChild(spriteContenedor);
  carta.appendChild(numero);
  carta.appendChild(nombre);
  carta.appendChild(tipos);
  carta.appendChild(statsContenedor);

  ContenedorPokemon.appendChild(carta);
}

function mostrarModal(pokemon) {
  modalName.textContent = pokemon.name;
  modalId.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

  // Imagen grande
  const largeImage = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
  modalImg.src = largeImage;

  // Altura/Peso convertir decímetros a m, hectogramos a kg
  modalHeight.textContent = `${pokemon.height / 10}m`;
  modalWeight.textContent = `${pokemon.weight / 10}kg`;

  // Tipos
  modalTypes.innerHTML = '';
  pokemon.types.forEach(typeData => {
    const tipo = document.createElement('span');
    tipo.classList.add('tipo', typeData.type.name);
    tipo.textContent = typeData.type.name;
    modalTypes.appendChild(tipo);
  });

  // Stats
  modalStats.innerHTML = '';
  pokemon.stats.forEach(stat => {
    const row = document.createElement('div');
    row.classList.add('modal-stat-row');

    // Normalizar el valor de la estadística para el ancho de la barra
    const width = (stat.base_stat / 255) * 100;

    row.innerHTML = `
            <span class="stat-label">${stat.stat.name}</span>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" style="width: ${width}%"></div>
            </div>
            <span class="stat-value">${stat.base_stat}</span>
        `;
    modalStats.appendChild(row);
  });

  modal.classList.add('active');
}

fetchPokemons(6);
=======

const ContenedorPokemon = document.querySelector('.contenedor-pokemon');

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      crearPokemon(data);
    });
}

function fetchPokemons(numero){
  for (let i = 1; i<= numero; i++){
    idPoke = Math.floor(Math.random() * 806 + 1)
    fetchPokemon(idPoke);
  }
}

function crearPokemon(pokemon) {
  const carta = document.createElement('div');
  carta.classList.add('pokemon-block');

  const spriteContenedor = document.createElement('div');
  spriteContenedor.classList.add('contenedor-img');

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContenedor.appendChild(sprite);

  const numero = document.createElement('p');
  numero.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement('p');
  nombre.classList.add('nombre');
  nombre.textContent = pokemon.name
  //imagen del pokemon
  carta.appendChild(spriteContenedor)
  //numero del pokemon
  carta.appendChild(numero);
  //nombre del pokemon
  carta.appendChild(nombre);

  ContenedorPokemon.appendChild(carta);

}

fetchPokemons(6);
>>>>>>> f2540f0d314b61a93646269b712cf3f2c23dcbc4
