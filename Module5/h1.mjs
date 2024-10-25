/*
H1: Perfecte getallen

Schrijf een applicatie dat alle "perfecte getallen" tussen 1 en 100 weergeeft. 
Een getal is perfect als de som van zijn delers (het getal zelf niet inbegrepen) gelijk is aan het getal zelf. 
Bijvoorbeeld: 6 is een perfect getal want 1 + 2 + 3 (alle delers van 6) = 6
*/

function perfectNumbers(min, max)
{
    console.log(`Perfecte getallen tussen ${min} en ${max}: `);

    for(let i = min; i < max; i++)
    {
        let sum = 0;

        for (let j = 1; j < i; j++)
        {
            if (i % j == 0)
            {
                sum += j;
            }
        }

        if (sum == i)
        {
            console.log(i);
        }
    }
}

perfectNumbers(1, 100);