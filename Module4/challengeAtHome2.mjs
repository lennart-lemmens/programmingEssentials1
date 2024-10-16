/*
@2: Piramideomtrek

Combineer @1 met je sterrenpiramide. Zorg voor een extra parameter outline.
Als outline true is zal enkel de omtrek bestaan uit sterren, als het false is laat je gewoon de opgevulde versie zien.
*/

let startTop = false;
let startLeft = false;
let outline = false;
let hoogte = 5;

if (startTop == true)
{
    if (startLeft == true)
    {
        if (outline == true) // startTop == true, startLeft == true, outline == true
        {
            for (let i = 0; i < hoogte; i++) // teken een lege piramide met de punt omhoog die links begint
            {
                let rij = "";
            
                for (let j = 0; j <= i; j++) // teken sterren beginnende met de korte zijde
                {
                    if (i === 0 || i === hoogte - 1 || j === 0 || j === i) // Buitenrand: *
                    {
                        rij += "*";
                    }
                    else // Binnenkant: witruimte
                    {
                        rij += " ";
                    }
                }
                
                console.log(rij);
            }
        }
        else // startTop == true, startLeft == true, outline == false
        {
            for (let i = 0; i < hoogte; i++) // teken een volle piramide met de punt omhoog die links begint
            {
                let rij = "";
            
                for (let j = 0; j <= i; j++) // teken sterren beginnende met de korte zijde
                {
                    rij += "*";
                }
                
                console.log(rij);
            }
        }
    }
    else
    {
        if (outline == true) // startTop == true, startLeft == false, outline == true
        {
            for (let i = 0; i < hoogte; i++) // teken een lege piramide met de punt omhoog die rechts begint
            {
                let rij = "";
                
                for (let j = 0; j < hoogte; j++) // teken de sterren beginnende met de korte zijde
                {
                    if (i === hoogte - 1 || j === hoogte - 1 - i || j === hoogte - 1) // Buitenrand: *
                    {
                        rij += "*";
                    }
                    else // Binnenkant: witruimte
                    {
                        rij += " ";
                    }
                }
                
                console.log(rij);
            }
        }
        else // startTop == true, startLeft == false, outline == false
        {
            for (let i = 0; i < hoogte; i++) // teken een volle piramide met de punt omhoog die rechts begint
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
}
else
{
    if (startLeft == true)
    {
        if (outline == true) // startTop == false, startLeft == true, outline == true
        {
            for (let i = hoogte; i > 0; i--) // teken een lege piramide met de punt omlaag die links begint
            {
                let rij = "";
            
                for (let j = 0; j < i; j++) // teken sterren beginnende met de langste zijde
                {
                    if (i === hoogte || j === 0 || j === i - 1) // Buitenrand: *
                    {
                        rij += "*";
                    }
                    else // Binnenkant: witruimte
                    {
                        rij += " ";
                    }
                }
                
                console.log(rij);
            }
        }
        else // startTop == false, startLeft == true, outline == false
        {
            for (let i = hoogte; i > 0; i--) // teken een volle piramide met de punt omlaag die links begint
            {
                let rij = "";
            
                for (let j = 0; j < i; j++) // teken sterren beginnende met de langste zijde
                {
                    rij += "*";
                }
                
                console.log(rij);
            }
        }
    }
    else
    {
        if (outline == true) // startTop == false, startLeft == false, outline == true
        {
            for (let i = hoogte; i > 0; i--) // teken een lege piramide met de punt omlaag die rechts begint
            {
                let rij = "";
                
                for (let j = 0; j < hoogte; j++) // teken sterren beginnende met langste zijde
                {
                    if (i === hoogte || j === hoogte - i || j === hoogte - 1) // Buitenrand: *
                    {
                        rij += "*";
                    }
                    else // Binnenkant: witruimte
                    {
                        rij += " ";
                    }
                }
                
                console.log(rij);
            }
        }
        else // startTop == false, startLeft == false, outline == false
        {
            for (let i = hoogte; i > 0; i--) // teken een volle piramide met de punt omlaag die rechts begint
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
}