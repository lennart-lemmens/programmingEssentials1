/*
Schrijf een klein scriptje dat de gebruiker om 4 getallen gaat vragen, print nadien het gemiddelde (dus de som van de 4 getallen gedeeld door 4) af naar de console.

LET OP: Zorg ervoor dat je maximum 2 variabelen gebruikt!
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let totaal = 0;

let getal = parseFloat(await userInput.question("Geef het eerste getal: "));
totaal += getal;

getal = parseFloat(await userInput.question("Geef het tweede getal: "));
totaal += getal;

getal = parseFloat(await userInput.question("Geef het derde getal: "));
totaal += getal;

getal = parseFloat(await userInput.question("Geef het vierde getal: "));
totaal += getal;

console.log("Het gemiddelde is " + (totaal / 4));

process.exit();