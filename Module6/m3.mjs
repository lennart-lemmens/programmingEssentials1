/*
M3: Search

Schrijf een functie om in een namenlijst te zoeken op welke plaats een bepaalde naam voorkomt. 
Wat je teruggeeft is ofwel de index van de naam binnen de array ofwel -1 als je de naam niet kan vinden. 
Als je bijvoorbeeld een lijst hebt met de volgende namen let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"] 
en je zoekt op Mehdi dan krijg je als resultaat 4.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let names = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];

let nameToLookUp = await userInput.question("Welke naam wil je opzoeken? ");
console.log("Index van de naam: " + searchName(names, nameToLookUp));

process.exit();


function searchName(array, name)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] == name)
        {
            return i; // if name is found in array, return index of name
        }
    }
    return -1; // if name is not found, return -1
}