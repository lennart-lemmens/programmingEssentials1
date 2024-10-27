/*
E4: Gemiddelde

Maak een array waar je een lijst van punten in gaat bijhouden. Schrijf vervolgens code om de gemiddelde score te berekenen.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let score;
let scoreList = [];
let finishList;

do
{
    score = await userInput.question("Geef je punten in ('S' = stop): ");
    finishList = score.toLowerCase() == "s" ? true : false;
    if (!finishList && score)
    {
        scoreList.push(parseFloat(score));
    }
} while (!finishList);

console.log("");

let total = 0;
for (let i = 0; i < scoreList.length; i++)
{
    total += scoreList[i];
}

console.log(`Gemiddelde: ${total / scoreList.length}`);

process.exit();