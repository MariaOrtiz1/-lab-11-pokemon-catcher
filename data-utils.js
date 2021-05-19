import { findById } from './utils.js';
import { pokemonData } from './data.js';

export function mungeCaptured(exampleArray) {
    // results will always start off as an empty array!
    const results = [];
// loops through all of the pokemon and searches for the right id
    for (let item of exampleArray) {
// When the right id is found, it is pushed into the empty array, this is function is for the capture id!
        const mungedDataCaptured = findById(exampleArray, item.id);
        results.push(mungedDataCaptured.captured);
    }
    return results; 
}

// Very similar to our previous function of captured! 
export function mungeEncountered(exampleArray) {
    // results will always start off as an empty array!
    const results = [];
// loops through all of the pokemon and searches for the right id
    for (let item of exampleArray) {
// When the right id is found, it is pushed into the empty array, this is function is for the enecountered id!
        const mungedDataEncountered = findById(exampleArray, item.id);
        results.push(mungedDataEncountered);
    }
    return results; 
}

export function mungeNames(exampleArray) {
    // results will always start off as an empty array!
    const results = [];
// loops through all of the pokemon and searches for the right id
    for (let item of exampleArray) {
        // Since we are searching for a string within our array it is best to use the imported function to find by id
        const data = findById(pokemonData, item.id);
        console.log(data.name);
        // once we get the data that we need, we push the results into our array
        results.push(data.name);
    }

    return results;
}


// very very similar to our mungeNames because we are repeating the step just with a different id, which is generation this time!
export function mungeGens(exampleArray) {
    // results will always start off as an empty array!
    const results = [];
// loops through all of the pokemon and searches for the right id
    for (let item of exampleArray) {
        // Since we are searching for a string within our array it is best to use the imported function to find by id
        const data = findById(pokemonData, item.id);
        console.log(data.gen);
        // once we get the data that we need, we push the results into our array
        results.push(data.gen);
    }

    return results;
}