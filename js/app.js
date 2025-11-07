
// Keep track of the players score.
let humanScore = 0;
let computerScore = 0;

/* Get the computer choice */
function getComputerChoice() {
    const computerChoice = Math.random();

    if(computerChoice < 0.33) {
        return 'rock';
    } else if (computerChoice < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

/* Get the human choice */
function getHumanChoice() {

    // Ask the user his choice and save it in a variable
    const humanChoice = prompt('Rock, Paper or Scissors?');

    // Return his choice
    return humanChoice.toLowerCase();
}

// To play 1 round
function playRound(humanChoice, computerChoice) {
    
    // If the userChoice is 'rock' and the cumputerChoice is 'scissors', user wins.
    if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return humanScore += 1; // Add a point for the user.
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') { // If the userChoice is 'scissors' and the cumputerChoice is 'paper', user wins.
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return humanScore += 1; // Add a point for the user.
    } else if(humanChoice === 'paper' && computerChoice === 'rock') { // If the userChoice is 'paper' and the cumputerChoice is 'rock', user wins.
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return humanScore += 1; // Add a point for the user.
    } else if(humanChoice === computerChoice) { // If both select the same option, it is a draw.
        console.log(`It's a draw! No one gets point.`);
    } else { // Else, the user lose.
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return computerScore += 1; // Add a point for the computer.
    }
}

/* To play the game */
function playGame() {

    // Call playRound() 5 times to play.
    for(let i = 0; i < 5; i++ ) {
        playRound(getHumanChoice(), getComputerChoice()); 
    }

    // Announce who wins.
    if(humanScore > computerScore) {
        console.log(`Final score: ${humanScore} - ${computerScore}. You win!`);
    } else if(humanScore === computerScore) {
        console.log(`Final score: ${humanScore} - ${computerScore}. It's a draw!`)
    } else {
        console.log(`Final score: ${humanScore} - ${computerScore}. You lose!`);
    }
}

// Invoke the function to play.
playGame();