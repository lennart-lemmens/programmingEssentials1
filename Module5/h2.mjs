/*
H2: Dagen in de maand

Schrijf een functie dat het aantal dagen in een maand teruggeeft. 
Vraag zowel achter de maand én het jaartal, je zal dus moeten rekening houden met schrikkeljaren.

Maak gerust gebruikt van je vorige script om te zien of een jaar een schrikkeljaar is of niet.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let month = await userInput.question("Maand: ");
let year = await userInput.question("Jaar: ");

month = month.toLowerCase()

console.log(`De maand ${month} heeft ${numberOfDays(month, year)} dagen in ${year}.`);
process.exit();

function numberOfDays(month, year)
{
    switch (month)
    {
        case "januari":
        case "maart":
        case "mei":
        case "juli":
        case "augustus":
        case "oktober":
        case "december":
            return 31;
        case "april":
        case "juni":
        case "september":
        case "november":
            return 30;
        case "februari":
            if (isLeapYear(year))
            {
                return 29;
            }
            else
            {
                return 28;
            }
        default:
            console.log("Onbekende maand.");
            process.exit();
    }
}

function isLeapYear(year)
{
    return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ? true : false;
}