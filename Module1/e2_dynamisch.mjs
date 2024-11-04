/*
E2: Content dynamischer maken

Voor deze oefening gebruiken we de file e2_dynamisch.mjs die we op de GitHub Repo voor deze oefeningenreeks kunnen terugvinden.

We gaan onze vorige oefening iets gaan aanpassen. 
Vanaf nu willen we niet meer enkel deze dingen gaan bepalen in onze code, maar we gaan de gebruiker elke keer achter de input vragen. 
De output van het script blijft dezelfde.
*/

// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let name = await userInput.question("Wat is je naam? ");
let age = await userInput.question("Wat is je leeftijd? ");
let favoriteGame = await userInput.question("Wat is je favoriete game? ");

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
