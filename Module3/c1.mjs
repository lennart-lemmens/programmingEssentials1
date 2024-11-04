/*
@1: Rij van Fibonacci

De rij van Fibonacci is een rij getallen waarbij elk getal de som is van de twee voorgaande getallen. 
De rij begint met 0 en 1. De rij begint dus als volgt: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Schrijf een script dat de rij van Fibonacci afdrukt tot een bepaald getal. 
Vraag aan de gebruiker tot welk getal de rij moet afgedrukt worden.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// prompt user for a number
let eindGetal = parseFloat(await userInput.question("Tot welk getal moet de Fibonacci-rij lopen? "));

// set variables for 2 previous numbers to first 2 numbers of sequence: 0 and 1
let vorigGetal1 = 0, vorigGetal2 = 1;


// print Fibonacci sequence until number user entered
console.log(vorigGetal1); // print 0

for (let huidigGetal = vorigGetal2; huidigGetal <= eindGetal; vorigGetal1 = vorigGetal2, vorigGetal2 = huidigGetal) // every loop, print the sum of the 2 previous numbers and set both variables to the next number in the sequence
{
    console.log(huidigGetal);
    huidigGetal = vorigGetal1 + vorigGetal2;
}

process.exit();