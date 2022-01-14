// enter temperature in Kelvin
const kelvin = 353;

// converting Kelvin to Celsius
const celsius = kelvin - 273;

// converting Celsius to Fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// converting Celsius to Newton
//let newton = Math.floor(celsius * (33 / 100));
let newton = Math.round(celsius * (33 / 100));
//let newton = (celsius * (33 / 100)).toFixed(2);

// using string interpolation to print the converted degrees in Fahrenheit and Newton
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, which is equivalent to ${newton} degrees Newton.`);
