
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
    return humanChoice;
}