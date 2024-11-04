/*
M1: Getallen optellen

Maak een applicatie dat getallen aan de gebruiker vraagt en deze optelt bij elkaar zolang het ingegeven getal groter is dan 0. 
Van zodra de gebruiker een getal kleiner of gelijk aan 0 ingeeft print de applicatie de som af.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;
let som = 0;

do
{
    getal = parseFloat(await userInput.question("Getal: "));
    if (getal > 0)
    {
        som += getal;
    }
} while (getal > 0);

console.log(som);

process.exit();