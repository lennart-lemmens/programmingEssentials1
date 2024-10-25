/*
M3: Hoger/lager v3

Hou het aantal 'levens' bij. De gebruiker kan maar 3 maal gokken voor het Game Over is.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let randomizedNumber = random(1, 10);
let guess;
let lives = 3;

do
{
    guess = parseFloat(await userInput.question("Getal: "));
    hogerLager(guess, randomizedNumber);
    lives--;
} while (lives > 0);

console.log("Helaas! Je levens zijn op!\nWe zochten het getal " + randomizedNumber + ".");
process.exit();

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