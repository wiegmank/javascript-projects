const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
let degreesK = Number(degreesC) + 273.15;

console.log('Degrees K:', degreesK);
