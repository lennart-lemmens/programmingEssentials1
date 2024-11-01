/*
E2: Voorstellen

Zorg ervoor dat de honden van E1 zich kunnen voorstellen.
*/

let hond1 = createDog("Samson", 9, true);
let hond2 = createDog("Bobbie", 8, false);

let honden = [hond1, hond2];

hond1.stelVoor();
hond2.stelVoor();


function createDog(name, age, isPlayful)
{
    return {
        naam: name,
        leeftijd: age,
        isSpeels: isPlayful,
        stelVoor: function()
        {
            let speelsheid;
            if (this.isSpeels == true)
            {
                speelsheid = "speels";
            }
            else
            {
                speelsheid = "niet speels";
            }
            console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${speelsheid}.`);
        }
    }
}