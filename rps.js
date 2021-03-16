function game(){
   let playerScore= 0;
   let computerScore=0;
   let totalPoints = playerScore + computerScore;
   let choices = ['rock', 'paper', 'scissors'];



while(totalPoints <= 5){

function playerChoice(){
   userInput = prompt("Rock, Paper or Scissors?");
   userAnswer = userInput.toLowerCase(); 
  
  }
  playerChoice();

   function computerChoice(){
   rps = choices[Math.floor(Math.random()* choices.length)];
   return rps;
   }
   computerChoice();

 function playRound(){
 
    if (userAnswer == rps){
      console.log('we have a tie')
     }

     else if(userAnswer == 'rock' && rps == 'scissors' || userAnswer == 'scissors' && rps =='paper' || userAnswer =='paper' && rps =='rock')
     {
        console.log('Player wins');
        console.log('players answer: ' + userAnswer);
        playerScore++; 
        totalPoints++;
        console.log('player score ' + playerScore);
        
     }
     else if(rps == 'rock' && userAnswer == 'scissors' || rps == 'scissors' && userAnswer =='paper' || rps =='paper' && userAnswer =='rock')
     {
        console.log('Computer wins');
        console.log('computers answer ' + rps);
        computerScore++; 
        totalPoints++;
        console.log('computer score ' + computerScore);
       
     }
     
 }
 playRound();

 

}//close on while loop    
        
        
    
}
game();
