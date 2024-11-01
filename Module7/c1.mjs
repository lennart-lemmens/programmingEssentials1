/*
@1: FhB

Ontwerp een object voor de Fabienhogeschool Brussel met eigenschappen naam (string), studenten 
(array van objecten, waar elk object een student vertegenwoordigt met eigenschappen zoals naam, leeftijd, en vakken), 
en cursussen (array van strings). Voeg een methode inschrijvenStudent toe waarmee je een student kunt inschrijven voor een cursus.
*/

let fabienHogeschoolBrussel = {
    name: 'Fabienhogeschool Brussel',
    students: [],
    courses: ['Programming Essentials 1', 'Web Essentials', 'Data Essentials', 'Programming Essentials 2', 'Web Advanced', 'Programming Project'],
    enrollStudent: function(name, age, course)
    {
        // if student already exists, add course to their course list
        let studentFound = false;
        for (let i = 0; i < this.students.length; i++)
        {
            if (this.students[i].name == name)
            {
                this.students[i].courses.push(course);
                studentFound = true;
                break;
            }
        }
        // else, add student to student list
        if (!studentFound)
        {
            this.students.push({
            name,
            age,
            courses: course
        })
        }

        // if course already exists, do nothing
        let courseFound = false;
        for (let i = 0; i < this.courses.length; i++)
        {
            if (this.courses[i] == course)
            {
                courseFound = true;
                break;
            }
        }
        // else, add course to course list
        if (!courseFound)
        {
            this.courses.push(course);
        }
    }
}

console.log(fabienHogeschoolBrussel);
fabienHogeschoolBrussel.enrollStudent('Lennart', 32, 'Programming Essentials 1');
console.log(fabienHogeschoolBrussel);