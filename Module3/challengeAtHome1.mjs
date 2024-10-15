import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// prompt user for a number
let eindGetal = parseFloat(await userInput.question("Tot welk getal moet de Fibonacci-rij lopen? "));

// set variables for 2 previous numbers to first 2 numbers of sequence: 0 and 1
let vorigGetal1 = 0, vorigGetal2 = 1;


// print Fibonacci sequence until number user entered
console.log(vorigGetal1); // print 0

for (let huidigGetal = vorigGetal2; huidigGetal <= eindGetal; vorigGetal1 = vorigGetal2, vorigGetal2 = huidigGetal) // every loop, print the sum of the 2 previous numbers and set both variables to the next number in the sequence
{
    console.log(huidigGetal);
    huidigGetal = vorigGetal1 + vorigGetal2;
}

process.exit();