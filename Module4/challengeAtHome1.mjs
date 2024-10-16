/*
@1: Sterrenrechthoek

Vraag een hoogte en breedte aan de gebruiker. Teken een omtrek van een rechthoek met deze hoogte en breedte.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Vraag hoogte en breedte aan gebruiker
let hoogte = parseFloat(await userInput.question("height: "));
let breedte = parseFloat(await userInput.question("width: "));
let rij;

console.log("\nOutput:\n");

// Teken rechthoek
for (let i = 0; i < hoogte; i++)
{
    rij = "";
    for (let j = 0; j < breedte; j++)
    {
        if (i === 0 || i === hoogte - 1 || j === 0 || j === breedte - 1) // Buitenrand: *
        {
            rij += "*";
        }
        else // Binnenkant: witruimte
        {
            rij += " ";
        }
    }
    console.log(rij);
}

process.exit();