/*
@3: Diamandomtrek

Zorg ervoor dat je ook je diamand van de vorige oefeningenreeks enkel als omtrek kan laten zien.
*/

let grootte = 5;

for (let i = 0; i < grootte; i++)
{
    let rij = "";

    for (let j = 0; j < grootte; j++)
    {
        // Bovenkant van de diamant
        if (i <= (grootte / 2))
        {
            if ((j === ((grootte - 1) / 2) - i) || (j === ((grootte - 1) / 2) + i))
            {
                rij += "*";
            }
            else
            {
                rij += " ";
            }
        }
        // Onderkant van de diamant
        else
        {
            if ((j === (i - (grootte - 1) / 2)) || (j === ((grootte - 1) - (i - (grootte - 1) / 2))))
            {
                rij += "*";
            }
            else
            {
                rij += " ";
            }
        }
    }

    console.log(rij);
}
