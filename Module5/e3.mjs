/*
E3: Temperatuurconverter

Schrijf een functie dat een temperatuur van Farenheit naar Celcius kan omzetten of omgekeerd van Celcius naar Fahrenheit. 
Deze functie zal twee parameters aanvaarden: temperatuur en isCelcius (dat true of false kan zijn). 
Zorg ervoor dat deze functie de waarde zal terugsturen en zelf geen output heeft.
*/

function temperatureConvert(temperature, isCelsius)
{
    if (isCelsius)
    {
        return temperature * (9/5) + 32;
    }
    else
    {
        return (temperature - 32) * (5/9);
    }
}

console.log("20 degrees Celsius is " + temperatureConvert(20, true) + " degrees Fahrenheit.");
console.log("32 degrees Fahrenheit is " + temperatureConvert(32, false) + " degrees Celsius.");