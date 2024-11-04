/*
E3: Dagen in de maand

Gebruik een switch/case om te controleren hoeveel dagen de variabele maand heeft.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Voer een maand in: ");

switch (maand)
{
    case "januari":
    case "maart":
    case "mei":
    case "juli":
    case "augustus":
    case "oktober":
    case "december":
        console.log(maand + " heeft 31 dagen.");
        break;
    case "april":
    case "juni":
    case "september":
    case "november":
        console.log(maand + " heeft 30 dagen.");
        break;
    case "februari":
        console.log(maand + " heeft 28 of 29 dagen.");
        break;
    default:
        console.log("Deze maand ken ik niet.");
}

process.exit();