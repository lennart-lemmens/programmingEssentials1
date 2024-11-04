/*
@2: Dagen in de maand v2

We gaan E3 en H1 met elkaar combineren. 
Vraag aan de gebruiker zowel een maand als een jaar. 
Geef het aantal dagen in die maand terug aan de gebruiker. 
Gebruik zowel een if/else als een switch/case structuur in je oplossing.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Voer een maand in: ");
let jaar = await userInput.question("Voer een jaar in: ");
let dagen;

switch (maand)
{
    case "januari":
    case "maart":
    case "mei":
    case "juli":
    case "augustus":
    case "oktober":
    case "december":
        dagen = 31;
        break;
    case "april":
    case "juni":
    case "september":
    case "november":
        dagen = 30;
        break;
    case "februari":
        if (jaar % 400 == 0 || (jaar % 4 == 0 && jaar % 100 != 0))
        {
            dagen = 29;
        }
        else
        {
            dagen = 28;
        }
        break;
    default:
        console.log("Deze maand ken ik niet.");
        process.exit();
}

console.log("De maand " + maand + " heeft " + dagen + " dagen in het jaar " + jaar + ".");

process.exit();