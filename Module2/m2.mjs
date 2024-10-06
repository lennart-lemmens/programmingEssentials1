import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Getal 1: "));
let getal2 = parseFloat(await userInput.question("Getal 2: "));
let resultaat;

console.log("\nWelke operatie wil je uitvoeren?\n1. Optellen\n2. Aftrekken\n3. Vermenigvuldigen\n4. Delen\n");
let keuze = parseFloat(await userInput.question("Kies een operatie: "));

switch (keuze)
{
    case 1:
        resultaat = getal1 + getal2;
        break;
    case 2:
        resultaat = getal1 - getal2;
        break;
    case 3:
        resultaat = getal1 * getal2;
        break;
    case 4:
        resultaat = getal1 / getal2;
        break;
    default:
        console.log("Geef een getal tussen 1 en 4 in.");
        process.exit();
}

console.log("\nResultaat: " + resultaat);

process.exit();