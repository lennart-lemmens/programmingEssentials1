/*
H1: Garage

Creëer een object genaamd autoGarage met eigenschappen naam (string) en autos 
(array van objecten, waar elk object een auto vertegenwoordigt met eigenschappen zoals merk en bouwjaar). 
Voeg een methode vervangAuto toe waarmee je een oude auto kunt vervangen door een nieuwe.
*/

let autoGarage = {
    name: 'DDT Oké Cars',
    cars: [
        {
            name: 'VW',
            yearOfConstruction: 2013
        },
        {
            name: 'BMW',
            yearOfConstruction: 2008
        }
    ],
    replaceCar: function(newCarName, newCarYearOfConstruction, oldCarName)
    {
        let replaced = false;
        for (let i = 0; i < this.cars.length; i++)
        {
            if (this.cars[i].name == oldCarName)
            {
                this.cars[i].name = newCarName;
                this.cars[i].yearOfConstruction = newCarYearOfConstruction;
                replaced = true;
            }
        }
        if(!replaced)
        {
            this.cars.push({
                name: newCarName,
                yearOfConstruction: newCarYearOfConstruction
            })
        }
    }
}

console.log(autoGarage);

autoGarage.replaceCar('Seat', 2018, 'VW');

console.log(autoGarage);