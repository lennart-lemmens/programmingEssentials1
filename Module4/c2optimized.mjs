/*
@2: Piramideomtrek

Combineer @1 met je sterrenpiramide. Zorg voor een extra parameter outline.
Als outline true is zal enkel de omtrek bestaan uit sterren, als het false is laat je gewoon de opgevulde versie zien.
*/


const startTop = true;
const startLeft = true;
const outline = true;
const height = 3;
const width = height;
const rowsToPrint = width;

let starsToAdd;
let spacesToAdd = 0;
let extraStarsPerLine;
let extraSpacesPerLine = 0;

let horizontalOutline;
let verticalOutline = 0;
let diagonalOutline;
let diagonalOutlineIncrease;

if (startTop)
{
    starsToAdd = 1;
    extraStarsPerLine = 1;
    horizontalOutline = height - 1;
    diagonalOutline = 0;
    diagonalOutlineIncrease = 1;

    if (!startLeft)
    {
        spacesToAdd = width - 1;
        extraSpacesPerLine = -1;
        
        if (outline)
        {
            starsToAdd = width;
            extraStarsPerLine = 0;
            verticalOutline = width - 1;
            diagonalOutline = width - 1;
            diagonalOutlineIncrease = -1;
        }
    }
}
else
{
    starsToAdd = width;
    extraStarsPerLine = -1;
    horizontalOutline = 0;
    diagonalOutline = width - 1;
    diagonalOutlineIncrease = -1;

    if (!startLeft)
    {
        extraSpacesPerLine = 1;
        verticalOutline = width - 1;
        
        if (outline)
        {
            starsToAdd = width;
            extraStarsPerLine = 0;
            verticalOutline = width - 1;
            diagonalOutline = 0;
            diagonalOutlineIncrease = 1;
        }
    }
}

for (let rowsPrinted = 0; rowsPrinted < rowsToPrint; rowsPrinted++, spacesToAdd += extraSpacesPerLine, starsToAdd += extraStarsPerLine)
{
    let line = "";
    if (!outline)
    {
        for (let spacesAdded = 0; spacesAdded < spacesToAdd; spacesAdded++)
        {
            line += " ";
        }
    }

    for (let starsAdded = 0; starsAdded < starsToAdd; starsAdded++)
    {
        if (outline)
        {
            let char = " ";
            if (rowsPrinted === horizontalOutline || starsAdded === verticalOutline || starsAdded === diagonalOutline)
            {
                char = "*";
            }
            line += char;
        }
        else
        {
            line += "*";
        }
    }
    console.log(line);
    //verticalOutline += verticalOutlineIncrease;
    diagonalOutline += diagonalOutlineIncrease;
}