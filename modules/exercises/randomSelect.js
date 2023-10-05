function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let choice = Math.floor(Math.random()*arr.length);
  return arr[choice];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;