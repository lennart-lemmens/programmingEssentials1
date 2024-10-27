/*
E1: Studentenlijst

Start met een lege array. Schrijf code om deze array op te vullen met namen. Blijf dit herhalen tot je de waarde 'S' meegeeft om te stoppen. Druk vervolgens je namenlijst af.
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

console.log("Studentenlijst: ");

for (let i = 0; i < studentList.length; i++)
{
    console.log("- " + studentList[i]);
}

process.exit();