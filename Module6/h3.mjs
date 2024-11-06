/*
H3: Battleships part deux

Als uitbreiding op je zeeslag schrijf je functies om boten op je speelveld te plaatsen. 
Geef de functie een lengte van je boot mee (2 tot 5) en een richting (up, down, left of right). 
Controleer of er genoeg plaats is om de boot te zetten en plaats in de array je boot met B.
*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let playingField = createPlayingField(10);

let x = parseInt(await userInput.question("X-coördinaat: "));
let y = parseInt(await userInput.question("Y-coördinaat: "));
let length = parseInt(await userInput.question("Lengte: "));
let direction = await userInput.question("Richting: ");

playingField = placeBoat(playingField, x, y, length, direction);

printPlayingField(playingField);

process.exit();


function createPlayingField(numberOfCells)
{
    let field = []
    for (let i = 0; i < numberOfCells; i++)
    {
        field[i] = [];
        for (let j = 0; j < numberOfCells; j++)
        {
            field[i][j] = "-";
        }
    }
    return field;
}

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