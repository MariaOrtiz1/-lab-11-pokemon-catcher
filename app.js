// import functions and grab DOM elements
import { pokemonData } from './data.js';
import { capturePokemon, encounterPokemon, totalPokemonCatched } from './local-storage.js';
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

    const totalCatched = totalPokemonCatched();


    if (totalCatched === 5) {
        window.location.replace('../results/index.html');
    } else {
        renderThreePokemon();
    }
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
  // we're using 'let' in order to allow the pokemon to change when randomized 
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();
// This function is to prevemt from getting two of the same kind of pokemon within each set roll
    while (
      // If anything of these outcomes happen then all pokemon get randomized once again
        pokemon1.id === pokemon2.id
      || pokemon1.id === pokemon3.id 
      || pokemon2.id === pokemon3.id
    ) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }

// this is an imported function that keeps track of the pokemon that we have encountered, making sure to keep score of which pokemon we have encountered
    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);
//  this reassigns the placeholder of the image with the proper image of the pokemon we choose
    img1.src = `./assets/${pokemon1.img}`;
    img2.src = `./assets/${pokemon2.img}`;
    img3.src = `./assets/${pokemon3.img}`;
// assigns value of the pokemon to the radio, so when captured it can log the pokemon's id 
    radio1.value = pokemon1.id;
    radio2.value = pokemon2.id;
    radio3.value = pokemon3.id;
}
// o w o you can do it! Keep on coding!
