
// Keep track of the players score.
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const div = document.querySelector("div");

const newDiv = document.createElement("p");
const score = document.createElement("p");
const winner = document.createElement("p");
const resetBtn = document.createElement("button");

resetBtn.textContent = "Reset Game";

/* Get the computer choice */
function getComputerChoice() {
    const computerChoice = Math.random();

    if(computerChoice < 0.33) {
        return 'rock';
    }else if (computerChoice < 0.66) {
        return 'paper';
    }else {
        return 'scissors';
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    newDiv.remove();
    score.remove();
    winner.remove();
    resetBtn.remove();
}

function updateScore() {
    score.textContent = `You ${humanScore} vs ${computerScore} Computer`;

    div.appendChild(score);

    if(humanScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = `Congratulations! You Win!`;
        div.appendChild(winner);
        div.appendChild(resetBtn);

    }else if(computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = `Sorry! You lose!`;
        div.appendChild(winner);
        div.appendChild(resetBtn);
    }
}

// To play 1 round
function playRound(humanChoice, computerChoice) {

    humanSelection = humanChoice.target.id;
    computerChoice = getComputerChoice();

    if(newDiv) {
        newDiv.remove();
    }

    // If the userChoice is 'rock' and the cumputerChoice is 'scissors', user wins.
    if(humanSelection === 'rock' && computerChoice === 'scissors') {

        newDiv.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        div.appendChild(newDiv);

        humanScore += 1; // Add a point for the user.

        updateScore();

        return;

    }else if(humanSelection === 'scissors' && computerChoice === 'paper') { // If the userChoice is 'scissors' and the cumputerChoice is 'paper', user wins.

        newDiv.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        div.appendChild(newDiv);
        
        humanScore += 1; // Add a point for the user.

        updateScore();

        return;

    }else if(humanSelection === 'paper' && computerChoice === 'rock') { // If the userChoice is 'paper' and the cumputerChoice is 'rock', user wins.

        newDiv.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        div.appendChild(newDiv);
        
        humanScore += 1; // Add a point for the user.

        updateScore();

        return;

    }else if(humanSelection === computerChoice) { // If both select the same option, it is a draw.

        newDiv.textContent = `It's a draw! No one gets point.`;
        div.appendChild(newDiv);

        updateScore();

    }else { // Else, the user lose.

        newDiv.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
        div.appendChild(newDiv);

        computerScore += 1; // Add a point for the computer.

        updateScore();

        return;

    }
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

resetBtn.addEventListener("click", resetGame);