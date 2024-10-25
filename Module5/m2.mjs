/*
M2: Hoger/lager v2

Zorg ervoor dat de gebruiker kan blijven gokken tot het juiste getal is gevonden.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let randomizedNumber = random(1, 10);
let guess;

do
{
    guess = parseFloat(await userInput.question("Getal: "));
    hogerLager(guess, randomizedNumber);
} while (guess != randomizedNumber);


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hogerLager(guess, answer)
{
    if (guess < answer)
    {
        console.log("Hoger");
    }
    else if (guess > answer)
    {
        console.log("Lager");
    }
    else
    {
        console.log("Proficiat! Je hebt het juiste getal geraden!")
        process.exit();
    }
}