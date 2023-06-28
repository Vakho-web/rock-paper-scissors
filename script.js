// Pseudocode
// generate random number between 1 and 3 
// based on the generated number computer will pick the selection

    // if randomNumber === 1 return string rock
    // if randomNumber === 2 return string paper, 
    // if randomNumber === 3 return string scissors

    function getRandomChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    
    // console.log(computerSelection)


// player types in their selection, (case Insensitive) rock, paper or scissors

    function getPlayerChoice() {
        const playerSelection = document.getElementById("playSel");
        const inputValue = playerSelection.value;
        const playerSelectionLowerCase = inputValue.toLowerCase();
        return playerSelectionLowerCase
    }
    
// compare the selection
// if computerSelection === playerSelection => tie
// if computerSelection === rock && playerSelection === paper => player win
// if computerSelection === paper && playerSelection === rock => computer win
// if computerSelection === rock && playerSelection === scissors => computer win
// if computerSelection === scissors && playerSelection === paper => player win
// if computerSelection === paper && playerSelection === scissors => player win
// if computerSelection === scissors && playerSelection === paper => computer win   

    function battle(computerSelection, playerSelection) {
        computerSelection = getRandomChoice();
        playerSelection = getPlayerChoice();
        if (computerSelection === playerSelection) {
            return "It's A tie";
        } else if (
            (computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors")) {
            return "You Win! " + playerSelection + " beats " + computerSelection
        } else if (
            (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
            return "You Lose! " + computerSelection + " beats " + playerSelection
        } else {
            return "Enter Rock, Paper or Scissors"
        }
    }

    function result() {
        document.getElementById("result").innerText = battle();
    }
    

    
