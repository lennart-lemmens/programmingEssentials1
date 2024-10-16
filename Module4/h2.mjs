/*
H2: SSP uitbreiden

Zorg ervoor dat het spelletje schaar/steen/papier blijft door gaan tot de gebruiker of de computer 3 maal heeft gewonnen. 
Vraag elke keer opnieuw aan de gebruiker wat hij wilt 'gooien' en laat de computer elke keer een nieuwe keuze maken met 
computerChoice = choices[Math.floor(Math.random()*choices.length)];
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let choices = ['rock', 'paper', 'scissors'];
let computerChoice;

let playerChoice;
let computerScore = 0;
let playerScore = 0;

do
{
    // Laat de computer willekeurig kiezen
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    
    // Vraag de speler te kiezen
    console.log("1. Rock\n2. Paper\n3. Scissors");
    playerChoice = parseFloat(await userInput.question("Maak een keuze (1-3): "));

    // Controleer geldigheid van invoer
    if (playerChoice < 1 || playerChoice > 3 || !playerChoice)
    {
        console.log("Ongeldige invoer!\n");
        continue;
    }

    // Print keuze van computer en speler
    console.log("PC: " + computerChoice + "\nJij: " + choices[playerChoice - 1]);

    // Bepaal wie ronde wint
    if ((playerChoice === 1 && computerChoice === "scissors") || (playerChoice === 2 && computerChoice === "rock") || (playerChoice === 3 && computerChoice === "paper"))
    {
        console.log("Jij wint deze ronde!");
        playerScore++;
    }
    else if ((playerChoice === 1 && computerChoice === "paper") || (playerChoice === 2 && computerChoice === "scissors") || (playerChoice === 3 && computerChoice === "rock"))
    {
        console.log("De computer wint deze ronde!");
        computerScore++;
    }
    else
    {
        console.log("Gelijkspel!");
    }

    console.log("Score: " + computerScore + "-" + playerScore + "\n");

} while (computerScore < 3 && playerScore < 3); // Ga door tot computer of speler 3 punten heeft

// Print de uiteindelijke winnaar
if (playerScore > computerScore)
{
    console.log("Proficiat! Je hebt gewonnen.");
}
else
{
    console.log("Helaas! De computer wint.");
}

process.exit();