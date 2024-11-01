/*
H2: Rekenmachine (again)

Maak een object genaamd rekenmachine met methoden voor optellen, aftrekken, vermenigvuldigen en delen. 
Elk van deze methoden moet twee parameters accepteren en het resultaat teruggeven.
*/

let calculator = {
    add: function(a, b)
    {
        return a + b;
    },
    subtract: function(a, b)
    {
        return a - b;
    },
    multiply: function(a, b)
    {
        return a * b;
    },
    divide: function(a, b)
    {
        return a / b;
    }
}

console.log(`4 + 2 = ${calculator.add(4, 2)}`);
console.log(`4 - 2 = ${calculator.subtract(4, 2)}`);
console.log(`4 * 2 = ${calculator.multiply(4, 2)}`);
console.log(`4 / 2 = ${calculator.divide(4, 2)}`);