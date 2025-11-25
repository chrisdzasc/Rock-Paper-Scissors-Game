
// Keep track of the players score.
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const container = document.querySelector(".results");

const result = document.createElement("p");
const score = document.createElement("p");
const winner = document.createElement("p");
const resetBtn = document.createElement("button");

result.classList.add("result");
score.classList.add("score");
winner.classList.add("winner");
resetBtn.classList.add("reset");

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

    result.remove();
    score.remove();
    winner.remove();
    resetBtn.remove();
}

function updateScore() {
    score.textContent = `You ${humanScore} - ${computerScore} Computer`;

    container.appendChild(score);

    if(humanScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = `Congratulations! You Win!`;
        result.textContent = "";
        container.appendChild(winner);
        container.appendChild(resetBtn);

    }else if(computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = `Sorry! You lose!`;
        result.textContent = "";
        container.appendChild(winner);
        container.appendChild(resetBtn);
    }
}

// To play 1 round
function playRound(humanChoice, computerChoice) {

    humanSelection = humanChoice.target.id;
    computerChoice = getComputerChoice();

    if(result) {
        result.remove();
    }

    // If the userChoice is 'rock' and the cumputerChoice is 'scissors', user wins.
    if(humanSelection === 'rock' && computerChoice === 'scissors') {

        result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        

        humanScore += 1; // Add a point for the user.

        updateScore();

        container.appendChild(result);

        return;

    }else if(humanSelection === 'scissors' && computerChoice === 'paper') { // If the userChoice is 'scissors' and the cumputerChoice is 'paper', user wins.

        result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        
        
        humanScore += 1; // Add a point for the user.

        updateScore();

        container.appendChild(result);

        return;

    }else if(humanSelection === 'paper' && computerChoice === 'rock') { // If the userChoice is 'paper' and the cumputerChoice is 'rock', user wins.

        result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
        
        
        humanScore += 1; // Add a point for the user.

        updateScore();

        container.appendChild(result);

        return;

    }else if(humanSelection === computerChoice) { // If both select the same option, it is a draw.

        result.textContent = `It's a draw! No one gets point.`;
        

        updateScore();

        container.appendChild(result);

    }else { // Else, the user lose.

        result.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
        

        computerScore += 1; // Add a point for the computer.

        updateScore();

        container.appendChild(result);

        return;

    }
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

resetBtn.addEventListener("click", resetGame);