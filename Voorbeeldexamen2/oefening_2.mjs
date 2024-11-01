import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let ingelezenGetallen = [];
let ingelezenGetal;
do
{
    ingelezenGetal = parseFloat(await userInput.question(''));
    ingelezenGetallen.push(ingelezenGetal);
} while (ingelezenGetal != 45);

let totaal = 0;
let aantalGetallenVoorGemiddelde = 0;
for (let i = 0; i < ingelezenGetallen.length; i++)
{
    if (ingelezenGetallen[i] <= 10)
    {
        totaal += ingelezenGetallen[i];
        aantalGetallenVoorGemiddelde++;
    }
}

let gemiddelde = totaal / aantalGetallenVoorGemiddelde;
console.log('Gemiddelde van getallen kleiner of gelijk aan 10: ' + gemiddelde);

process.exit();