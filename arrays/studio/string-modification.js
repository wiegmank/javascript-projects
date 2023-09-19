const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newString = str.slice(3)+str.slice(0,3)
console.log(newString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string "${str}" had the first 3 letters moved to the end, and is now "${newString}."`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userReply = input.question("How many letters would you like to relocate?\n")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userReply > (str.length)) {
    userReply = 3;
    console.log("The string is too short to move that many letters. We will just move 3 letters.");
} else if (userReply < 0) {
    userReply = 3;
    console.log("Sorry, you didn't enter a positive number. Let's just move 3 letters this time.");
}

let userString = str.slice(userReply) + str.slice(0, (userReply));
console.log(`You have decided to change "${str} to "${userString}". Is that pig-latin?`);