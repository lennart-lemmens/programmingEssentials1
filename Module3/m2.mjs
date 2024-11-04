/*
M2: Sterrenpiramide

Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. Per laag van de piramide komt er een ster bij.
*/

let hoogte = 4;

for (let i = 0; i < hoogte; i++)
{
    let rij = "";

    for (let j = 0; j <= i; j++)
    {
        rij += "*";
    }
    
    console.log(rij);
}