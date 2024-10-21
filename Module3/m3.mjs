import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Getal: "));
let deler = 2;

do
{
    if ((getal < 2) || ((getal % deler == 0) && (getal != deler))) // controleer of getal kleiner is dan 2 en of het deelbaar is door een ander getal dan zichzelf en 1
    {
        console.log(`${getal} is geen priemgetal`);
        process.exit();
    }
    deler++;
} while (deler <= getal);

console.log(`${getal} is een priemgetal`);
process.exit();

// eventuele optimalisatie: aantal keer tellen dat getal deelbaar is en op het einde testen of dat aantal exact gelijk is aan 2 of niet.