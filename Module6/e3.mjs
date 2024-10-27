/*
E3: Alles samen

Maak een combinatie van de vorige twee challenges. Schrijf code om een namenlijst op te vullen met namen van je medestudenten. 
Blijf dit herhalen totdat je 'S' ingeeft om te stoppen. Eens je een lijst met namen hebt opgevuld nodig je deze personen uit om deel te nemen aan een superleuk vak.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let student;
let studentList = [];
let finishList = false;

do
{
    student = await userInput.question("Geef de naam van een student in ('S' = stop): ");
    finishList = student.toLowerCase() == "s" ? true : false;
    if (!finishList)
    {
        studentList.push(student);
    }
} while (!finishList);

console.log("");

for (let i = 0; i < studentList.length; i++)
{
    console.log(`${studentList[i]}, je bent uitgenodigd voor de cursus Programming Essentials 1 aan de EhB!`);
}

process.exit();