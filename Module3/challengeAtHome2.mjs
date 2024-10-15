import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// prompt user for 2 numers
let getal1 = parseFloat(await userInput.question("Getal 1: "));
let getal2 = parseFloat(await userInput.question("Getal 2: "));
let grootsteGemeneDeler;

// calculate greatest common divisor

for (let i = 1; i <= getal1 && i <= getal2; i++)
{
    if (getal1 % i == 0 && getal2 % i == 0)
    {
        grootsteGemeneDeler = i;
    }
}

console.log("De grootste gemene deler is " + grootsteGemeneDeler);
process.exit();