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