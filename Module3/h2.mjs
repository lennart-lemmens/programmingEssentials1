/*
H2: Lopende gemiddelde

Schrijf een script dat aan de gebruiker vraagt om een getal in te geven. 
Het script zal gemiddelde van de ingegeven getallen bijhouden en telkens afdrukken. 
Het script stopt wanneer de het gemiddelde boven 25 gaat.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;
let totaal = 0;
let gemiddelde = 0;
let aantalGetallen = 1;

do
{
    // prompt user to enter number
    getal = parseFloat(await userInput.question("Getal: "));
    
    // calculate average of all numbers and print it
    totaal += getal;
    gemiddelde = totaal / aantalGetallen;
    
    console.log("Gemiddelde: " + gemiddelde);
    
    // add 1 to total amount of numbers prompted
    aantalGetallen++
} while (gemiddelde <= 25);

// when average is higher than 25, end program
process.exit();