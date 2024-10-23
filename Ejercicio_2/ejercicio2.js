const pokemonImageContainer = document.querySelector(".random-image");

const allPokemons = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((pokemons) => {
      console.log(pokemons);
      const pokemonsArray = pokemons.results;
      const randomPokemon = Math.floor(Math.random() * 151);
      const randomPokemonId = pokemonsArray[randomPokemon];

      fetch(randomPokemonId.url)
        .then((res) => res.json())
        .then((thisRandomPokemon) => {
          console.log(thisRandomPokemon);
          pokemonImageContainer.src = thisRandomPokemon.sprites.front_default;
        });
    })
    .catch((err) => {
      console.error("That Pokémon doesn't exist", err);
    });
};

allPokemons();
