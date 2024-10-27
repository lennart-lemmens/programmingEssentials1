/*
E2: Uitnodigingen

Start met een array waar je namen van je medestudenten gaat bijhouden. 
Loop over de volledige lijst en print voor elke naam af dat de persoon is uitgenodigd om deel te nemen aan de leukste cursus van EhB. 
Je moet niet per se programming essentials opgeven, we kunnen daar tegen.
*/

let students = ["Harry", "Ron", "Hermione"];

for (let i = 0; i < students.length; i++)
{
    console.log(`${students[i]}, je bent uitgenodigd voor de cursus Programming Essentials 1 aan de EhB!`);
}