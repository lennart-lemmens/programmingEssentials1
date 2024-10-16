/*
E3: Veelvouden uitbreiden

Pas je vorige script aan. Zorg ervoor dat je aan de hand van de variabelen deelbaar1 en deelbaar2 
kan kiezen of een getal wel of niet deelbaar moet zijn door deler1 of deler2 om ze weer te geven.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Met welk getal beginnen we? "));
let end = parseFloat(await userInput.question("Met welk getal eindigen we? "));
let deler1 = parseFloat(await userInput.question("Wat is het eerste getal waarop we testen? "));
let deler2 = parseFloat(await userInput.question("Wat is het tweede getal waarop we testen? "));
let deelbaar1 = await userInput.question("Wil je dat de getallen deelbaar zijn door het eerste getal? (y/n) ");
let deelbaar2 = await userInput.question("Wil je dat de getallen deelbaar zijn door het tweede getal? (y/n) ");

// Verander 2 laatste antwoorden in booleans

deelbaar1 = (deelbaar1 === "y");
deelbaar2 = (deelbaar2 === "y");

// Print alle getallen tussen start en end die al dan niet deelbaar zijn door deler1 en deler2 op basis van booleans
if (deelbaar1)
{
    if (deelbaar2)
    {
        for (let i = start; i <= end; i++) // Print alle getallen die deelbaar zijn door deler1 en deler2
        {
            if (i % deler1 == 0 && i % deler2 == 0)
            {
                console.log(i);
            }
        }
    }
    else
    {
        for (let i = start; i <= end; i++) // Print alle getallen die deelbaar zijn door deler1 en niet door deler2
        {
            if (i % deler1 == 0 && i % deler2 != 0)
            {
                console.log(i);
            }
        }
    }
}
else
{
    if (deelbaar2)
    {
        for (let i = start; i <= end; i++) // Print alle getallen die deelbaar zijn door deler2 en niet door deler1
        {
            if (i % deler1 != 0 && i % deler2 == 0)
            {
                console.log(i);
            }
        }
    }
    else
    {
        for (let i = start; i <= end; i++) // Print alle getallen die niet deelbaar zijn door deler1 en niet door deler2
        {
            if (i % deler1 != 0 && i % deler2 != 0)
            {
                console.log(i);
            }
        }
    }
}

process.exit();