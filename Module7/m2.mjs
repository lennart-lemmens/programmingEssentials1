/*
M2: Menu

Maak een object genaamd restaurant met eigenschappen naam (string), keuken (string), en menu (array van objecten). 
Voeg een methode toevoegenAanMenu toe waarmee je een nieuw gerecht aan het menu kunt toevoegen. Elk gerecht heeft een naam en een prijs.
*/

let restaurant = {
    name: 'Chez Jean-Paul',
    kitchen: 'Frans',
    menu: [],
    addToMenu: function(name, price)
    {
        this.menu.push({
            name,
            price
        })
    }
}

restaurant.addToMenu('Foie Gras', 10);
restaurant.addToMenu('Escargots', 5);

console.log(restaurant);