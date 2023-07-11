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
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        document.getElementById("result").innerText = "Result: " + "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        document.getElementById("result").innerText = "Result: " + "Enter Rock, Paper, or Scissors";
    }
}

// Player choice
function getPlayerChoice(event) {
    var playerChoice = event.target.id;
    var computerSelection = getRandomChoice();
    battle(computerSelection, playerChoice);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rock').addEventListener('click', getPlayerChoice);
    document.getElementById('paper').addEventListener('click', getPlayerChoice);
    document.getElementById('scissors').addEventListener('click', getPlayerChoice);
});
