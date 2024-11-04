/*
E3: Opteller

Voor deze oefening gebruiken we de file e3_opteller.mjs die we op de GitHub Repo voor deze oefeningenreeks kunnen terugvinden.

Maak een heel simpele rekenmachine die twee getallen aan de gebruiker vraagt en de som hiervan weergeeft.
*/

// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1 = parseFloat(await userInput.question("Getal 1: "));
let getal2 = parseFloat(await userInput.question("Getal 2: "));

console.log("Som: " + (getal1 + getal2));

process.exit();
