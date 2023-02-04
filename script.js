let computerScore = 0
let playerScore = 0

let playerChoice = ''
document.querySelector('#rock').onclick = function() {
    playerChoice = 'rock';
    playRound(playerChoice)
}
document.querySelector('#paper').onclick = function() {
    playerChoice = 'paper';
    playRound(playerChoice)
}
document.querySelector('#scissors').onclick = function() {
    playerChoice = 'scissors';
    playRound(playerChoice)
}

document.querySelector('#finishGame').onclick = function() {
    if (computerScore > playerScore) {
        console.log("You Lost!")
    } else if (playerScore > computerScore) {
        console.log("You Won!")
    } else {
        console.log("You Tied!")
    }
}

// ----------- HELPER FUNCTIONS --------------------

function getComputerChoice() {
    // returns a random option for the computer
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
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
function playRound(playerChoice) {
    let outcome = false;
    let computerChoice = getComputerChoice();

    if (computerChoice == 'rock') {
        outcome = rockOutcomes(playerChoice);
    } else if (computerChoice == 'paper') {
        outcome = paperOutcomes(playerChoice);
    } else {
        outcome = scissorsOutcomes(playerChoice);
    }

    if (outcome == undefined) {
        return;
    } else if (outcome == true) {
        playerScore++;
    } else {
        computerScore++;
    }
}