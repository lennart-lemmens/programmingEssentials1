/*
M1: Uitbreiden van "Opteller"

We gaan onze "Opteller" van de vorige oefening licht aanpassen. 
In plaats van de gebruiker om de getallen te vragen gaan we zelf twee getallen definiëren. 
Vervolgens gaan we van deze twee getallen de som, verschil, product en deling laten zien.

Verander één van de getallen naar een getal waar quotes rond staan, dus bijvoorbeeld let getal1 = "33";. 
Bekijk wat voor invloed dit zal hebben op de output van je code.
*/

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
