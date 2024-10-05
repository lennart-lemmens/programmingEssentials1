import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("In welk jaar ben je geboren? "));
let toekomstJaar = parseFloat(await userInput.question("Kies een jaar: "));

let leeftijd = toekomstJaar - geboorteJaar;

console.log("In " + toekomstJaar + " zal ik " + (leeftijd - 1) + " of " + leeftijd + " jaar oud zijn." );

process.exit();