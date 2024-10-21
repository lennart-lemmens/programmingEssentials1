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

console.log("\nOutput:\n");

// Teken rechthoek
for (let rij = 0; rij < hoogte; rij++)
{
    let lijn = "";
    for (let kolom = 0; kolom < breedte; kolom++)
    {
        let karakter = " "; // standaard leeg
        if (rij === 0 || rij === hoogte - 1 || kolom === 0 || kolom === breedte - 1) // Buitenrand: *
        {
            karakter = "*";
        }
        lijn += karakter;
    }
    console.log(lijn);
}

process.exit();