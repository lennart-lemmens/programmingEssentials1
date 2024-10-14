let grootte = 9; // werkt alleen met oneven getallen

// upper part of diamond
for (let i = 1; i <= grootte; i += 2)
{
    let rij = "";

    for (let j = ((grootte - i) / 2); j > 0; j--) // add spacing
    {
        rij += " ";
    }
    for (let k = 1; k <= i; k++) // add asterisk
    {
        rij += "*";
    }
    console.log(rij)
}

// lower part of diamond
for (let i = (grootte - 2); i > 0; i -= 2)
    {
        let rij = "";
    
        for (let j = ((grootte - i) / 2); j > 0; j--) // add spacing
        {
            rij += " ";
        }
        for (let k = 1; k <= i; k++) // add asterisk
        {
            rij += "*";
        }
        console.log(rij)
    }