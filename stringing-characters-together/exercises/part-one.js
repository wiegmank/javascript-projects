let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num);
console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
num = String(num)
console.log(num.replace(".", "").length)

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 123.45
num = String(num)
if (num.indexOf(".") != -1) {
    console.log(num.replace(".", "").length);
} else {
    console.log(num.length);
}