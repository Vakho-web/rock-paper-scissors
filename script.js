let playerScore = 0
let computerScore = 0

// Computer random choice
function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Battle function to compare choices
function battle(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        document.getElementById("result").innerText = "Result: " + "It's a tie";
    } else if (
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "paper" && playerSelection === "scissors")
    ) {
        document.getElementById("result").innerText = "Result: " + "You win! " + playerSelection + " beats " + computerSelection;
        playerScore ++
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        document.getElementById("result").innerText = "Result: " + "You lose! " + computerSelection + " beats " + playerSelection;
        computerScore ++
    } else {
        document.getElementById("result").innerText = "Result: " + "Enter Rock, Paper, or Scissors";
    }

    updateScore()
    checkWinner()
}

// Player choice
function getPlayerChoice(event) {
    var playerChoice = event.target.id;
    var computerSelection = getRandomChoice();
    battle(computerSelection, playerChoice);
}

//load all DOM elements before any code is run
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rock').addEventListener('click', getPlayerChoice);
    document.getElementById('paper').addEventListener('click', getPlayerChoice);
    document.getElementById('scissors').addEventListener('click', getPlayerChoice);
    document.querySelector('.popup .closeBtn').addEventListener('click', closePopup);
});

//reset button
function resetBtn() {
    playerScore = 0
    computerScore = 0
    document.getElementById("result").innerText = "Result: "
    updateScore()
}

//update score
function updateScore() {
    document.getElementById('playerScore').innerText = "Player Score: " + playerScore;
    document.getElementById('computerScore').innerText = "Computer Score: " + computerScore;
}

//check for winner
function checkWinner() {
    if(playerScore === 3) {
        document.body.classList.add('active-popup');
        document.getElementById('winner').innerText = "You have defeated the wretched computer!"
    } else if (computerScore === 3) {
        document.body.classList.add('active-popup')
        document.getElementById('winner').innerText = "You have been outsmarted by random chance!"
    }

}

//cllose popup button
function closePopup() {
    document.body.classList.remove('active-popup');
    resetBtn()
}