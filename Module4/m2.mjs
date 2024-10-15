/*
M2: Sterrenpiramide uitbreiden

We voegen enkele variabele booleans toe aan onze sterrenpiramide van oefeningenreeks 3: startTop en startLeft. 
Afhankelijk van of deze variabelen true of false zijn zal de vorm van onze piramide veranderen.
*/

let startTop = true;
let startLeft = true;
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
        
            for (let j = 1; j < hoogte - i; j++) // voeg witruimte toe voor de sterren, beginnende met de meeste witruimte
            {
                rij += " ";
            }
            
            for (let k = 0; k <= i; k++) // teken de sterren beginnende met de korte zijde
            {
                rij += "*";
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
        
            for (let j = hoogte - i; j > 0; j--) // voeg witruimte toe voor de sterren, beginnende met geen witruimte
            {
                rij += " ";
            }
            
            for (let k = 0; k < i; k++) // teken sterren beginnende met langste zijde
            {
                rij += "*";
            }
            
            console.log(rij);
        }
    }
}