console.log("Hello Ariff, let's start building the Rock, Paper, Scissors game")

function getComputerChoice(){
    let randomComputerChoice = Math.floor(Math.random() * 3);
    if (randomComputerChoice === 0) {
        return "Rock";
    } else if (randomComputerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// remember JS if we set randomComputerChoice = 0, JS treats it as a falsy. Hence use ===

console.log( `Computer Choice: ${getComputerChoice()}`);

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
    return humanChoice;
}


console.log( `Human Choice: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, randomComputerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();
    const normalizedComputerChoice = randomComputerChoice.toLowerCase();

    if (normalizedHumanChoice === randomComputerChoice) {
        return "tie"; 
    } else if (normalizedHumanChoice === "rock" && randomComputerChoice === "paper") {
        return "loss";
    
    } else {
        return "";
    }
}