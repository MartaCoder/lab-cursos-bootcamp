//API não deixa de ser um servidor, que está servindo dados
//Importante entender como o protocolo HTTP funciona
//O mais convencional é o HTTP

const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="detalhes">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/wellrccity/pokedex-html-js/refs/heads/master/assets/img/pokemons/poke_1.gif"
              alt="${pokemon.name}"
            />
          </div>
        </li>`;
}

const pokemons = document.getElementById('pokemonList')

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => response.results)

  .then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      pokemons.innerHTML += convertPokemonToLi(pokemon)
    }
  })
  .catch((error) => {
    console.log(error);
  });
