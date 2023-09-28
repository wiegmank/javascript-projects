const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}


// TODO 1: write a validator 
// that ensures input starts with "a"
let hasFirstLetterA = function(word) {
  return (word[0] === 'a' || word[0] === 'A');
};

//console.log(getValidInput("Enter a phrase that starts with the letter 'a': ", hasFirstLetterA));

// TODO 2: write a validator 
// that ensures input is a vowel

let inputIsAVowel = function(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(word) == -1) {
    return false;
  } else {
    return true;
  }
};

console.log(getValidInput("Enter a vowel: ", inputIsAVowel));

// Be sure to test your code!
