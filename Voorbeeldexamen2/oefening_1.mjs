import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalGetallen = parseFloat(await userInput.question('Hoeveel willekeurige getallen wil je genereren? '));
let randomGetallen = [];

for (let i = 0; i < aantalGetallen; i++)
{
    randomGetallen.push(random(1, 10));
}

console.log('De gegenereerde willekeurige getallen zijn: ' + randomGetallen);

let aantalEvenGetallen = 0;
for (let i = 0; i < randomGetallen.length; i++)
{
    if (randomGetallen[i] % 2 == 0)
    {
        aantalEvenGetallen++;
    }
}

console.log(`Van de gegenereerde getallen zijn er ${aantalEvenGetallen} even.`);

process.exit();


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}