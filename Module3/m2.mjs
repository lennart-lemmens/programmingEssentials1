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