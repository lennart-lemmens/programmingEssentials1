import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let numberOfQuestions = 5;
let answer;
let score = 0;

console.log("Welkom bij de quiz! Beantwoord de volgende vragen:");

// Question 1
console.log("Vraag 1: Wat is de hoofdstad van Frankrijk?");
answer = await userInput.question("Jouw antwoord: ");
checkAnswer(answer, "Parijs");

// Question 2
console.log("Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?");
answer = await userInput.question("Jouw antwoord: ");
checkAnswer(answer, 8);

// Question 3
console.log("Vraag 3: Wat is het grootste zoogdier ter wereld?");
answer = await userInput.question("Jouw antwoord: ");
checkAnswer(answer, "Blauwe vinvis");

// Question 4
console.log("Vraag 4: Wie schreef het toneelstuk 'Romeo an Julia'?");
answer = await userInput.question("Jouw antwoord: ");
checkAnswer(answer, "Shakespeare");

// Question 5
console.log("Vraag 5: Hoeveel poten heeft een spin?");
answer = await userInput.question("Jouw antwoord: ");
checkAnswer(answer, 8);

console.log("Je hebt " + score + " van de " + numberOfQuestions + " vragen juist beantwoord.");

process.exit();

function checkAnswer(userAnswer, correctAnswer)
{
    if (userAnswer == correctAnswer)
    {
        console.log("Goed antwoord!\n");
        score++;
    }
    else
    {
        console.log("Fout antwoord. Het juiste antwoord is: " + correctAnswer + "\n");
    }
}