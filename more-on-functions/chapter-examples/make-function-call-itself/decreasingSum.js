function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      decreasingSum(integer)
      //call decreasingSum function again
   }
}

console.log(decreasingSum(5));
