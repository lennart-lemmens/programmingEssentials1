/*
E2: Oppervlakes

Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:
- cirkel: Pi x straal x straal (je kan de waarde van Pi opvragen met Math.PI)
- driehoek: basis x hoogte gedeeld door 2
- rechthoek: zijde1 x zijde2
- vierkant: zijde x zijde
 
Zorg ervoor dat je functie om de oppervlakte van een vierkant te berekenen de functie om de oppervlakte van een rechthoek te berekenen gebruikt. 
Zorg ervoor dat al deze functies de waardes terugsturen en zelf geen output hebben.
*/

function circle(radius)
{
    return Math.PI * radius * radius;
}

function triangle(base, height)
{
    return (base * height) / 2;
}

function rectangle(side1, side2)
{
    return side1 * side2;
}

function square(side)
{
    return rectangle(side, side);
}

console.log("Circle with radius 2: " + circle(2));
console.log("Traingle with base 2 and height 3: " + triangle(2, 3));
console.log("Rectangle with base 2 and height 3: " + rectangle(2, 3));
console.log("Square with side 2: " + square(2));