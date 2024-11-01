/*
@1: 3 Battleships 3 furious

Schrijf een uitbreiding in je functie om te schieten in zeeslag. Binnen deze functie controleer je of je een boot geraakt hebt. 
Indien ja zet je op die plaats in je array een *, anders zet je een ^. 
Indien je dit verder wil uitbreiden kan je twee arrays bijhouden en om beurten schieten tot je een boot gezonken hebt.
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

let x = parseInt(await userInput.question("X coordinate: "));
let y = parseInt(await userInput.question("Y coordinate: "));
let length = parseInt(await userInput.question("Length: "));
let direction = await userInput.question("Direction: ");

// Place a boat and show playing field
playingField = placeBoat(playingField, x, y, length, direction);
printPlayingField(playingField);

let shootX = parseInt(await userInput.question("Pick a X coordinate to shoot: "));
let shootY = parseInt(await userInput.question("Pick a Y coordinate to shoot: "));

// shoot on coordinate and show playing field again
playingField = shoot(playingField, shootX, shootY);
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
    if (array[y][x] == "B") // check if there's a boat on the coordinates
    {
        array[y][x] = "*";
    }
    else
    {
        array[y][x] = "^";
    }
    return array;
}

function placeBoat(array, x, y, length, direction)
{
    let verticalDirection; // up: -1; down: 1; else: 0
    let horizontalDirection; // left: -1; right: 1; else: 0
    
    if (length < 2 || length > 5)
    {
        console.error("De boot moet tussen 2 en 5 vakken groot zijn.");
        process.exit();
    }

    if (direction == "up" && (y - length + 1) >= 0)
    {
        verticalDirection = -1;
        horizontalDirection = 0;
    }
    else if (direction == "down" && (y + length - 1) <= array.length)
    {
        verticalDirection = 1;
        horizontalDirection = 0;
    }
    else if (direction == "left" && (x - length + 1) >= 0)
    {
        verticalDirection = 0;
        horizontalDirection = -1;
    }
    else if (direction == "right" && (x + length - 1) <= array[y].length)
    {
        verticalDirection = 0;
        horizontalDirection = 1;
    }
    else
    {
        console.error("Boat doesn't fit.");
        process.exit();
    }

    for (let i = 0; i < length; i++)
        {
            array[y + (i * verticalDirection)][x + (i * horizontalDirection)] = "B";
        }

    return array;
}