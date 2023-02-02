function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    // returns a random option
    return options[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    let input = prompt("Rock, Paper, or Scissors?")
    return input
}

// below are the scenarios for each player's moves
function rockOutcomes(playerChoice) {
    if (playerChoice == 'rock') {
        console.log("Tie! Rock does not beat rock.");
    } else if (playerChoice == 'paper') {
        console.log("You win! Paper beats rock.");
        return true;
    } else {
        console.log("You lost! Scissors loses to rock.");
        return false;
    }
}

// the outcomes for computer: paper and the player's choice
function paperOutcomes(playerChoice) {
    if (playerChoice == 'paper') {
        console.log("Tie! Paper does not beat paper.");
    } else if (playerChoice == 'scissors') {
        console.log("You win! Scissors beats paper.");
        return true;
    } else {
        console.log("You lost! Rock loses to paper.");
        return false;
    }
}

// the outcomes for computer: scissors and the player's choice
function scissorsOutcomes(playerChoice) {
    if (playerChoice == 'scissors') {
        console.log("Tie! Scissors does not beat scissors.");
    } else if (playerChoice == 'rock') {
        console.log("You win! Rock beats scissors.");
        return true;
    } else {
        console.log("You lost! Paper loses to scissors.");
        return false;
    }
}

// plays a single ronnd of rock, paper, scissors
function playRound(computerChoice, playerChoice) {
    let outcome = false;
    if (computerChoice == 'rock') {
        outcome = rockOutcomes(playerChoice);
    } else if (computerChoice == 'paper') {
        outcome = paperOutcomes(playerChoice);
    } else {
        outcome = scissorsOutcomes(playerChoice);
    }
    return outcome
}

// main game function
function game() {
    let computerScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let outcome = playRound(computerChoice, playerChoice);
        if (outcome == undefined) {
            continue
        } else if (outcome == true) {
            playerScore++
        } else {
            computerScore++
        }
    }

    console.log("Player's Score: " + playerScore)
    console.log("Computer's Score: " + computerScore)
    if (playerScore > computerScore) {
        console.log("You won!")
    } else if (computerScore > playerScore) {
        console.log("You lost!")
    } else {
        console.log("You tied!")
    }
}

// Player Button Options
const options = document.querySelectorAll('#playerOption');

options.forEach((option) => {
    option.addEventListener('click', () => {
        console.log("hello")
    });
});
