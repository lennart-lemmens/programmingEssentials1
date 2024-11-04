/*
H1: Aantal seconden

Schrijf een script dat aan de hand van een aantal dagen, uren, minuten en seconden de totale tijd in seconden zal berekenen.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dag = parseFloat(await userInput.question("Geef het aantal dagen: "));
let uren = parseFloat(await userInput.question("Geef het aantal uren: "));
let minuten = parseFloat(await userInput.question("Geef het aantal minuten: "));
let seconden = parseFloat(await userInput.question("Geef het aantal seconden: "));

console.log("Aantal seconden: " + ((dag*60*60*24) + (uren * 60 * 60) + (minuten * 60) + seconden));

process.exit();