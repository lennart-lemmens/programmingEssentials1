/*
M1: Hoger/lager

We gaan beginnen met een klein spel te bouwen. De opzet is heel simpel: de gebruiker moet een getal tussen 1 en 10 juist raden. 
Dankzij enkele functies van Math kunnen we random getallen genereren:

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

Begin door aan de gebruiker eenmalig een getal te vragen en zeg aan de gebruiker die het juiste getal heeft geraden of niet. 
Als de gebruiker het juiste getal niét heeft gegokt, laat dan weten of het hoger of lager moet zijn.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let randomizedNumber = random(1, 10);
let guess = parseFloat(await userInput.question("Getal: "));

hogerLager(guess, randomizedNumber);
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
    }
}