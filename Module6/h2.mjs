/*
H2: Battleships

We gaan starten met een basis om zeeslag te kunnen spelen. Maak gebruik van een multidimensional array die je speelveld voorstelt. 
Deze array stelt 10 rijen en kolommen voor voor je speelveld. Schrijf een functie waar je twee cooordinaten aan meegeeft. 
x stelt voor waar je in de breedte op schiet, y stelt voor waar je in de hoogte op schiet. Op die plaats zet je in de array een *.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let playingField = [
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"],
    ["-","-","-","-","-","-","-","-","-","-"]
];

let x = parseInt(await userInput.question("X-coördinaat: "));
let y = parseInt(await userInput.question("Y-coördinaat: "));

playingField = shoot(playingField, x, y);

printPlayingField(playingField);

process.exit();


function printPlayingField(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let line = "";
        for (let j = 0; j < array[i].length; j++)
        {
            line += array[i][j] + " ";
        }
        console.log(line);
    }
}

function shoot(array, x, y)
{
    array[y][x] = "*";
    return array;
}