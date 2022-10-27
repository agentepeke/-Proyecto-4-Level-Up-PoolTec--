
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