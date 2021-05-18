import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringPokeDex = localStorage.getItem(POKEDEX);
    // if a string doesn't exist then return empty array
    if (!stringPokeDex) {
        
        return [];
    }
// If a string does exist then parse it and return the array 
    const pokedex = JSON.parse(stringPokeDex);

    return pokedex;
}

export function setPokedex(newPokedex) {
    // makes the array into a string in order to be store in the local storage
    const stringPokeDex = JSON.stringify(newPokedex);
// stores the string
    localStorage.setItem(POKEDEX, stringPokeDex);
}

export function capturePokemon(selectedPokemonId) {
    const pokedex = getPokedex();
// comapres the selectedPokemonId that is given by clicking one of the radio buttons vs the id within the data 
    const matchingPokemon = findById(pokedex, selectedPokemonId);
// if the two ids match then we capture the pokemon and increase the value of the capture attribute plus 1
    matchingPokemon.captured++;

    setPokedex(pokedex);
}

export function encounterPokemon(selectedPokemonId) {
    const pokedex = getPokedex();
// comapres the selectedPokemonId that is given by clicking one of the radio buttons vs the id within the data 
    const matchingPokemon = findById(pokedex, selectedPokemonId);
// if the ids match then inscrease the encountered attribute by 1
    if (matchingPokemon) {
        matchingPokemon.encountered++;
        // If there is no id then make a new array 
    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId
        };
// push the pokemon in the array of the pokedex
        pokedex.push(newItem);
    }

    setPokedex(pokedex);
}