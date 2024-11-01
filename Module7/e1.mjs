/*
E1: Honden

Maak enkele objecten met de naam hond1, hond2, ... met elk de eigenschappen naam (string), leeftijd (getal) en isSpeels (boolean). 
Zorg dat al deze honden in een array terecht komen.
*/

let hond1 = createDog("Samson", 9, true);
let hond2 = createDog("Bobbie", 8, false);

let honden = [hond1, hond2];

console.log(honden);


function createDog(name, age, isPlayful)
{
    return {
        naam: name,
        leeftijd: age,
        isSpeels: isPlayful
    }
}