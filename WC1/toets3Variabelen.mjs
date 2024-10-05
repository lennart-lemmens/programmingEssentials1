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