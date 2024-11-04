/*
H1: Highscore

Schrijf een script dat 5 getallen inleest. 
Toon na het inlezen wat het hoogste getal, het laagste getal en het gemiddelde is.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Getal 1: "));
let getal2 = parseFloat(await userInput.question("Getal 2: "));
let getal3 = parseFloat(await userInput.question("Getal 3: "));
let getal4 = parseFloat(await userInput.question("Getal 4: "));
let getal5 = parseFloat(await userInput.question("Getal 5: "));

let hoogste = getal1;
let laagste = getal1;
let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5;

if (getal2 > hoogste)
{
    hoogste = getal2;
}
else if (getal2 < laagste)
{
    laagste = getal2;
}

if (getal3 > hoogste)
{
    hoogste = getal3;
}
else if (getal3 < laagste)
{
    laagste = getal3;
}

if (getal4 > hoogste)
{
    hoogste = getal4;
}
else if (getal4 < laagste)
{
    laagste = getal4;
}

if (getal5 > hoogste)
{
    hoogste = getal5;
}
else if (getal5 < laagste)
{
    laagste = getal5;
}

console.log("Hoogste getal: " + hoogste);
console.log("Laagste getal: " + laagste);
console.log("Gemiddelde: " + gemiddelde);

process.exit();