import { mungeNames, mungeCaptured, mungeEncountered, mungeGens } from '../data-utils.js';
import { getPokedex, setPokedex } from '../local-storage.js';

let pkmnC
let resetButton = document.querySelector('#release-pokemon')