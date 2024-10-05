// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1 = 3;
let getal2 = 7;

console.log("Som: " + (getal1 + getal2));
console.log("Verschil: " + (getal1 - getal2));
console.log("Product: " + (getal1 * getal2));
console.log("Deling: " + (getal1 / getal2));

process.exit();
