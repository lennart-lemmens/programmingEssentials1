/*
M2: Sterrenpiramide uitbreiden

We voegen enkele variabele booleans toe aan onze sterrenpiramide van oefeningenreeks 3: startTop en startLeft. 
Afhankelijk van of deze variabelen true of false zijn zal de vorm van onze piramide veranderen.
*/

let startTop = false;
let startLeft = false;
let hoogte = 3;

if (startTop == true)
{
    if (startLeft == true)
    {
        for (let i = 0; i < hoogte; i++) // teken een piramide met de punt omhoog die links begint
        {
            let rij = "";
        
            for (let j = 0; j <= i; j++) // teken sterren beginnende met de korte zijde
            {
                rij += "*";
            }
            
            console.log(rij);
        }
    }
    else
    {
        for (let i = 0; i < hoogte; i++) // teken een piramide met de punt omhoog die rechts begint
        {
            let rij = "";
        
            for (let j = 0; j < hoogte; j++) 
            {
                if (j >= hoogte - 1 - i) // teken sterren beginnende met de korte zijde
                {
                    rij += "*";
                }
                else // voeg witruimte toe voor de sterren, beginnende met de meeste witruimte
                {
                    rij += " ";
                }
            }
            
            console.log(rij);
        }
    }
}
else
{
    if (startLeft == true)
    {
        for (let i = hoogte; i > 0; i--) // teken een piramide met de punt omlaag die links begint
        {
            let rij = "";
        
            for (let j = 0; j < i; j++) // teken sterren beginnende met de langste zijde
            {
                rij += "*";
            }
            
            console.log(rij);
        }
    }
    else
    {
        for (let i = hoogte; i > 0; i--) // teken een piramide met de punt omlaag die rechts begint
        {
            let rij = "";
        
            for (let j = 0; j < hoogte; j++) 
            {
                if (j >= i - 1) // teken sterren beginnende met de lange zijde
                {
                    rij += "*";
                }
                else // voeg witruimte toe voor de sterren, beginnende met geen witruimte
                {
                    rij += " ";
                }
            }
            
            console.log(rij);
        }
    }
}