/*
H2: Schrikkeljaar

Schrijf een script dat een jaartal inleest en als output het aantal dagen in februari weergeeft.

De 'regels' voor een schrikkeljaar zijn als volgt:
Het jaartal is deelbaar door 4 => wel een schrikkeljaar
Het jaartal is deelbaar door 100 => geen schrikkeljaar
Het jaartal is deelbaar door 400 => toch wel een schrikkeljaar
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let year = parseInt(await userInput.question("Voer een jaar in: "));
let daysInFebruary;

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
{
    //console.log(year + " is een schrikkeljaar.");
    daysInFebruary = 29;
}
else
{
    //console.log(year + " is geen schrikkeljaar.");
    daysInFebruary = 28;
}

console.log("In " + year + "heeft februari " + daysInFebruary + " dagen.");

process.exit();