let computerChoice;

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
      if(randomNum === 1) {
        computerChoice = 'rock';
        
      }
      else if(randomNum === 2) {
        computerChoice = 'paper';
        
      }
      else if(randomNum === 3) {
        computerChoice = 'scissors';
        
      }
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    
    let result;

    if(playerSelection == computerSelection) {
        result = 'This round is a draw';
       
    }
    else if(playerSelection == 'rock' && computerSelection === 'paper') {
        result = 'You lose. Paper beats rock';
        
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You win. Rock beats scissors';
       
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You win. Paper beats rock';
        
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        result ='You lose. Scissors beat paper';
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You lose. Rock beats scissors';
        
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You win. Scissors beat paper';
    }
    return result;
}



function game() {
    
    let computerScore = 0;
    let playerScore = 0;
    
    for(let i = 0; i < 5; i++) {
        let playChoice = prompt('What is your choice?');
        const playerSelection = playChoice.toLowerCase();
        const computerSelection = computerPlay();
        
        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection, computerSelection) == 'You win. Rock beats scissors' || 
        playRound(playerSelection, computerSelection) == 'You win. Paper beats rock' ||
        playRound(playerSelection, computerSelection) == 'You win. Scissors beat paper') {
            playerScore += 1;
        }
        else if(playRound(playerSelection, computerSelection) == 'You lose. Paper beats rock' || 
        playRound(playerSelection, computerSelection) == 'You lose. Scissors beat paper' || 
        playRound(playerSelection, computerSelection) == 'You lose. Rock beats scissors') {           
            computerScore += 1;
        }
        console.log('Player score: ' + playerScore + ' Computer score: ' + computerScore);
    }
    if(computerScore > playerScore) {
        console.log('You have lost this game. Better luck next time');
    }
    else if(computerScore < playerScore) {
        console.log('You have won this game. Congratulations');
    }
    else if(computerScore === playerScore) {
        console.log('This match has ended in a draw');
    }
}
game();