/*
M1: Nummerpiramide

Schrijf een script dat gebruik maakt van een variabele number en aan de hand van die variabele en één of meerdere lussen de volgende output gaat hebben:

1
22
333
4444
*/

let number = 4;

for (let i = 1; i <= number; i++)
{
    let rij = "";
    for (let j = 1; j <= i; j++)
    {
        rij += i;
    }
    console.log(rij);
}