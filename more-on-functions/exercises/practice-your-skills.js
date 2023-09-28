//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let weirdAnswer = function(someValue) {
    if (typeof someValue == 'number') {
        return someValue * 3;
    } else if (typeof someValue == 'string') {
        return 'ARRR!';
    }
};

console.log(weirdAnswer(5));
console.log(weirdAnswer('hello'));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

arr = arr.map(weirdAnswer);
console.log(arr);
