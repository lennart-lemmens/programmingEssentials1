import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naamStudent = await userInput.question('Voer de naam van de student in: ');
let opleidingStudent = await userInput.question('Voer de opleiding van de student in: ');
let leeftijdStudent = parseFloat(await userInput.question('Voer de leeftijd van de student in: '));

let interessesStudent = [];
let interesseInvoer;
console.log("Voer de interesses van de student in (typ 'STOP' om te stoppen): ");
do
{
    interesseInvoer = await userInput.question('');
    if (interesseInvoer != 'STOP')
    {
        interessesStudent.push(interesseInvoer);
    }
} while (interesseInvoer != 'STOP');

let student = {
    naam: naamStudent,
    opleiding: opleidingStudent,
    leeftijd: leeftijdStudent,
    interesses: interessesStudent
}

console.log('');
toonGegevensStudent(student);

process.exit();


function toonGegevensStudent(student)
{
    console.log('Output van de functie: \n');
    console.log(`Naam: ${student.naam}\nOpleiding: ${student.opleiding}\nLeeftijd: ${student.leeftijd}`);
    
    let interesselijst = "Interesses: ";
    for (let i = 0; i < student.interesses.length; i++)
    {
        interesselijst += student.interesses[i];

        if (i < student.interesses.length - 1)
        {
            interesselijst += ", ";
        }
    }
    console.log(interesselijst);
}