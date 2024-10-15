/*
E1: Oppervlakte

Maak een script waar je een zijde1 en zijde2 kan ingeven. 
Geef de oppervlakte van een rechthoek met de afmetingen zijde1 en zijde2.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// prompt user to enter 2 sides of a rectangle
let zijde1 = parseFloat(await userInput.question("Zijde 1: "));
let zijde2 = parseFloat(await userInput.question("Zijde 2: "));

// print the surface of the rectangle
console.log("Oppervlakte: " + (zijde1 * zijde2));
process.exit();