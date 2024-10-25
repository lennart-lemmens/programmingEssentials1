/*
M4: Delers

Schrijf een functie die voor een getal de som van de delers van dit getal gaat afdrukken (zonder het getal zelf). 
Als het getal bijvoorbeeld 12 zou zijn, zal de functie 1 + 2 + 3 + 4 + 6 = 16 weergeven.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let number = parseFloat(await userInput.question("Getal: "));
console.log("Som van alle delers: " + sumOfDivisors(number));
process.exit();

function sumOfDivisors(number)
{
    let sum = 0;
    for(let i = 1; i < number; i++)
    {
        if (number % i == 0)
        {
            sum += i;
        }
    }
    return sum;
}