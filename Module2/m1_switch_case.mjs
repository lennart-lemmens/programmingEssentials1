/*
M1: Songtitels

Maak een keuzemenu met de keuze tussen 4 verschillende artiesten. 
Lees daarna de keuze in van de gebruiker en toon een songtitel van deze artist.

Maak zowel een versie dat gebruik maakt van if/else en een versie dat gebruik maakt van een switch/case.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een artiest:\n1. Red Hot Chili Peppers\n2. AC/DC\n3. Netsky\n4. De Strangers\n");

let keuze = parseInt(await userInput.question("Geef je keuze in: "));
let artiest;
let lied;

switch (keuze)
{
    case 1:
        artiest = "Red Hot Chili Peppers";
        lied = "Dani California";
        break;
    case 2:
        artiest = "AC/DC";
        lied = "Thunderstruck";
        break;
    case 3:
        artiest = "Netsky";
        lied = "Come Alive";
        break;
    case 4:
        artiest = "De Strangers";
        lied = "Mijnen blauwe geschelpte";
    default:
        process.exit();
}

console.log('\nJe koos voor "' + artiest + '".');
console.log("Ze zijn de artiest achter de hit: " + lied + ".");

process.exit();