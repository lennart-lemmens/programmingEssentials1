/*
M2: Leeftijdberekenaar
Schrijf een script waar je twee variabelen gebruikt, geboorteJaar en toekomstJaar. 
Laat je script uitprinten hoe oud je zal zijn in toekomstJaar.

Hou er rekening mee dat je twee verschillende leeftijden zou kunnen zijn in toekomstJaar, 
dus zorg ervoor dat je output iets is in de vorm van: In 2031 zal ik 24 of 25 jaar oud zijn.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("In welk jaar ben je geboren? "));
let toekomstJaar = parseFloat(await userInput.question("Kies een jaar: "));

let leeftijd = toekomstJaar - geboorteJaar;

console.log("In " + toekomstJaar + " zal ik " + (leeftijd - 1) + " of " + leeftijd + " jaar oud zijn." );

process.exit();