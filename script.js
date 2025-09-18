function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();
    const normalizedComputerChoice = computerChoice.toLowerCase();

    // Condition for a tie
    if (normalizedHumanChoice === normalizedComputerChoice) {
        return "It's a tie!";
    }
    // All losing conditions for the human
    else if (
        (normalizedHumanChoice === "rock" && normalizedComputerChoice === "paper") ||
        (normalizedHumanChoice === "paper" && normalizedComputerChoice === "scissors") ||
        (normalizedHumanChoice === "scissors" && normalizedComputerChoice === "rock")
    ) {
        return `You lose! ${normalizedComputerChoice} beats ${normalizedHumanChoice}.`;
    }
    // All winning conditions for the human
    else {
        return `You win! ${normalizedHumanChoice} beats ${normalizedComputerChoice}.`;
    }
}

const resultsDiv = document.getElementById('results');

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult.includes("win")) {
            humanScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }

        resultsDiv.textContent = `Round ${i + 1}: ${roundResult} | Current Score: Human ${humanScore} | Computer ${computerScore}`;
    }

    // Announce the winner
    if (humanScore > computerScore) {
        finalMessage = "You win the game!";
    } else if (computerScore > humanScore) {
        finalMessage = "The computer wins the game.";
    } else {
        finalMessage = "The game is a tie!";
    }

    resultsDiv.textContent += `\n\n${finalMessage}`;
}

function startGame() {
    playGame();
}

