/*
M1: Korting plz

Maak een array waar je enkele prijzen in gaat bijhouden. schrijf vervolgens een functie om 15 procent korting te geven. 
Deze functie krijgt een prijs binnen en geeft als resultaat de nieuwe prijs met korting terug. Loop vervolgens over al je prijzen en pas de geefKorting functie toe op elke prijs.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let price;
let prices = [];
let finishList;

do
{
    price = await userInput.question("Voer de prijs in euro in ('S' = stop): ");
    finishList = price.toLowerCase() == "s" ? true : false;
    if (!finishList && price)
    {
        prices.push(parseFloat(price));
    }
} while (!finishList);

let discountedprices = [];
const korting = 15;
for (let i = 0; i < prices.length; i++)
{
    discountedprices.push(geefKorting(prices[i], korting));
}

console.log("");
for (let i = 0; i < discountedprices.length; i++)
{
    console.log(`${prices[i]} euro met ${korting}% korting is ${discountedprices[i]} euro.`);
}

process.exit();


function geefKorting(price, korting)
{
    return price * (1 - (korting / 100));
}