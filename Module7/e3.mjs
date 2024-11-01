/*
E3: Leeftijden

Maak twee objecten, persoon1 en persoon2, elk met eigenschappen naam (string) en leeftijd (getal). 
Schrijf een functie genaamd vergelijkLeeftijd die de leeftijden van de twee personen vergelijkt en zegt wie ouder is.
*/

let persoon1 = {
    naam: 'Harry',
    leeftijd: 12
}

let persoon2 = {
    naam: 'Ron',
    leeftijd: 14
}

vergelijkLeeftijd(persoon1, persoon2);


function vergelijkLeeftijd(object1, object2)
{
    if (object1.leeftijd > object2.leeftijd)
    {
        console.log(`${object1.naam} is ouder dan ${object2.naam}.`);
    }
    else if (object1.leeftijd < object2.leeftijd)
    {
        console.log(`${object2.naam} is ouder dan ${object1.naam}.`);
    }
    else
    {
        console.log(`${object1.naam} en ${object2.naam} zijn even oud.`);
    }
}