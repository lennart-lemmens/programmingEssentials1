/*
E2: Tafel van vermenigvuldiging

Maak een variabele getal aan, gebruik een lus om de tafels van vermenigvuldiging van dat getal te laten zien.
*/

let getal = 5;

console.log("De tafel van " + getal + ":");

for (let i = 1; i < 11; i++)
{
    console.log(getal + " x " + i + " = " + (getal * i));
}