/*
M2: Fibonacci
Schrijf code om een reeks van Fibonacci op te bouwen, je houd de reeks bij in een array. 
Start met een array dat de waarden 0 en 1 bevat, je vult de array op tot deze 10 getallen bevat. 
Binnen deze reeks zal elk volgend getal de som zijn van de vorige twee getallen. Het resultaat dat je moet bekomen is dus [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].
*/

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++)
{
    fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
}

console.log(fibonacci);