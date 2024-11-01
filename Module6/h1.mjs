/*
H1: Sort

Maak een array met 10 gehele getallen. schrijf code om deze getallen te sorteren van groot naar klein.
*/

let numbers = [2, 3, 6, 5, 1, 10, 8, 9, 7, 4];

console.log("Array voor het sorteren:");
console.log(numbers);

numbers = sortDescending(numbers);

console.log("\nArray na het sorteren:");
console.log(numbers);


function sortDescending(array)
{
    let numberOfSwaps;
    do
    {
        numberOfSwaps = 0;
        for (let i = 0; i < array.length - 1; i++)
        {
            if (array[i] < array[i + 1])
            {
                // swap numbers if the next number is bigger
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                numberOfSwaps++;
            }
        }
    } while (numberOfSwaps > 0); // keep going until no numbers have to be swapped
    return array;
}