import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let year = parseInt(await userInput.question("Voer een jaar in: "));

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
{
    console.log(year + " is een schrikkeljaar.");
}
else
{
    console.log(year + " is geen schrikkeljaar.");
}

process.exit();