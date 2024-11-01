import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let typeArtikel = await userInput.question('Wat is het type aankoop? ');
let prijsExclBtw = parseFloat(await userInput.question('Wat is de prijs exclusief btw van het artikel? '));

console.log(`De prijs inclusief btw van een aankoop van het type ${typeArtikel} is ${berekenBtw(typeArtikel, prijsExclBtw)} euro.`);

process.exit();


function berekenBtw(type, prijs)
{
    switch (type)
    {
        case 'krant':
            return prijs;
        case 'voeding':
        case 'medicijnen':
            return prijs * 1.06;
        case 'restaurant':
            return prijs * 1.12;
        default:
            return prijs * 1.21;
    }
}