function whoWon(player1,player2){

  if ((player1.toLowerCase() === "rock" || player1.toLowerCase() === "paper" || player1.toLowerCase() === "scissors") && (player2.toLowerCase() === "rock" || player2.toLowerCase() === "paper" || player2.toLowerCase() === "scissors")) {
    
   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }
 return `INVALID SELECTION`;
}
 module.exports = whoWon;