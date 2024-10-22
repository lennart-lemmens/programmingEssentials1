/*
M2: Sterrenpiramide uitbreiden

We voegen enkele variabele booleans toe aan onze sterrenpiramide van oefeningenreeks 3: startTop en startLeft. 
Afhankelijk van of deze variabelen true of false zijn zal de vorm van onze piramide veranderen.
*/

const startTop = true;
const startLeft = true;
const height = 3;
const width = height;
const rowsToPrint = width;

let starsToAdd;
let spacesToAdd = 0;
let extraStarsPerLine;
let extraSpacesPerLine = 0;

if (startTop)
{
    starsToAdd = 1;
    extraStarsPerLine = 1;

    if (!startLeft)
    {
        spacesToAdd = width - 1;
        extraSpacesPerLine = -1;
    }
}
else
{
    starsToAdd = width;
    extraStarsPerLine = -1;

    if (!startLeft)
    {
        extraSpacesPerLine = 1;
    }
}

for (let rowsPrinted = 0; rowsPrinted < rowsToPrint; rowsPrinted++, spacesToAdd += extraSpacesPerLine, starsToAdd += extraStarsPerLine)
{
    let line = "";
    for (let spacesAdded = 0; spacesAdded < spacesToAdd; spacesAdded++)
    {
        line += " ";
    }

    for (let starsAdded = 0; starsAdded < starsToAdd; starsAdded++)
    {
        line += "*";
    }
    console.log(line);
}
