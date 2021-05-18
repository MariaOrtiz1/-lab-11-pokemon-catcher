// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { capturePokemon, encounterPokemon } from './local-storage.js';
// initialize state

const radio1 = document.querySelector('#poke-button-1');
const radio2 = document.querySelector('#poke-button-2');
const radio3 = document.querySelector('#poke-button-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');
const button = document.querySelector('#catch');

renderThreePokemon();

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;

    capturePokemon(selectedPokemonId);
    renderThreePokemon();
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);

    const randomPokemon = pokemonData[randomIndex];

    return randomPokemon;
}

function renderThreePokemon() {
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (
        pokemon1.id === pokemon2.id
      || pokemon1.id === pokemon3.id 
      || pokemon2.id === pokemon3.id
    ) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }


    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);

    img1.src = `./assets/${pokemon1.img}`;
    img2.src = `./assets/${pokemon2.img}`;
    img3.src = `./assets/${pokemon3.img}`;

    radio1.value = pokemon1.id;
    radio2.value = pokemon2.id;
    radio3.value = pokemon3.id;
}
