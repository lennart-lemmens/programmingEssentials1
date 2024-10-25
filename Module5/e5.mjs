/*
E5: Ingebouwde functies

JavaScript heeft verschillende ingebouwde functies die wij als developer kunnen gebruiken om onze eigen applicaties te verbeteren. 
Zo zijn er verschillende Math-functies. Je kan gebruik maken van Math.min() om het kleinste getal te vinden dat je mee geeft als parameter.

Probeer dit out. Probeer ook even na te denken wat een functienaam zou kunnen zijn om het grootste getal te vinden.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let number1 = parseFloat(await userInput.question("Getal 1: "));
let number2 = parseFloat(await userInput.question("Getal 2: "));
let number3 = parseFloat(await userInput.question("Getal 3: "));

console.log(`Het kleinste getal is ${Math.min(number1, number2, number3)}.`);
console.log(`Het hoogste getal is ${Math.max(number1, number2, number3)}.`);

process.exit();