/*
H1: Schaar/Steen/Papier

We gaan een simpele versie van rock/paper/scissors maken. Vraag aan de gebruiker of ze rock, paper or scissors willen 'gooien'.
Laat zien of de gebruiker of computer heeft gewonnen.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Laat de computer willekeurig kiezen
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

// Vraag de speler te kiezen
console.log("1. Rock\n2. Paper\n3. Scissors\n");
let playerChoice = parseFloat(await userInput.question("Maak een keuze (1-3): "));
console.log(""); // witruimte

let result = "";

// Bepaal wie wint
switch (playerChoice)
{
    // Speler kiest "rock"
    case 1:
        switch (computerChoice)
        {
            case "scissors":
                result = "win";
                break;
            case "paper":
                result = "lose";
                break;
            default:
                result = "tie";
        }
        break;

    // Speler kiest "paper"
    case 2:
        switch (computerChoice)
        {
            case "rock":
                result = "win";
                break;
            case "scissors":
                result = "lose";
                break;
            default:
                result = "tie";
        }
        break;

    // Speler kiest "scissors"
    case 3:
        switch (computerChoice)
        {
            case "paper":
                result = "win";
                break;
            case "rock":
                result = "lose";
                break;
            default:
                result = "tie";
        }
        break;

    // Speler geeft andere invoer dan 1-3
    default:
        console.log("Ongeldige invoer.");
        process.exit();
}

// Print keuze van computer en speler
console.log("PC: " + computerChoice + "\nJij: " + choices[playerChoice - 1] + "\n");

// Print wie wint
switch (result)
{
    case "win":
        console.log("Proficiat! Je hebt gewonnen.");
        break;
    case "lose":
        console.log("Helaas! De computer wint.");
        break;
    default:
        console.log("Gelijkspel!");
}

process.exit();