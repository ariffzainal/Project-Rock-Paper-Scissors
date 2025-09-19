let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const resultsDiv = document.getElementById('results');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

// This is to hide the results give by default;
resultsDiv.style.display = 'none';

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



function playRound(humanChoice) {

    // Show the results div if it's hidden
    resultsDiv.style.display = 'block';

    // This check will clear the "Game restarted!" message on the first move.
    if (roundNumber === 0) {
        resultsDiv.innerHTML = "";
    }

    // Check for invalid input at the very beginning
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(humanChoice.toLowerCase())) {
        resultsDiv.innerHTML = `That's not a valid choice. Please choose Rock, Paper, or Scissors.`;
        return;
    }
    


    // This is the gatekeeper check to end the game after 5 rounds.
    if (roundNumber >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    const normalizedHumanChoice = humanChoice.toLowerCase();
    const normalizedComputerChoice = computerChoice.toLowerCase();
    let roundResult;

    // The code below now determines the winner and stores the result in a variable.
    // It no longer uses return statements here.
    if (normalizedHumanChoice === normalizedComputerChoice) {
        roundResult = "It's a tie!";
    }
    else if (
        (normalizedHumanChoice === "rock" && normalizedComputerChoice === "paper") ||
        (normalizedHumanChoice === "paper" && normalizedComputerChoice === "scissors") ||
        (normalizedHumanChoice === "scissors" && normalizedComputerChoice === "rock")
    ) {
        roundResult = `You lose! ${normalizedComputerChoice} beats ${normalizedHumanChoice}.`;
        computerScore++;
    }
    else {
        roundResult = `You win! ${normalizedHumanChoice} beats ${normalizedComputerChoice}.`;
        humanScore++;
    }

    // Now that the result is known, we can update the score and the display.
    roundNumber++;
    let roundMessage = `Round ${roundNumber}: ${roundResult}`;
    let scoreMessage = `Score: Human ${humanScore} | Computer ${computerScore}`;
    resultsDiv.innerHTML += `${roundMessage} | ${scoreMessage}<br>`;

    // Finally, check if the game is over and display the final message.
    if (roundNumber === 5) {
        let finalMessage;

        let finalMessageClass = ''; // New variable to hold the class name
     
        if (humanScore > computerScore) {
            finalMessage = "You win the game!";
            finalMessageClass = 'win-message';
        } else if (computerScore > humanScore) {
            finalMessage = "The computer wins the game.";
            finalMessageClass = 'lose-message';
        } else {
            finalMessage = "The game is a tie!";
            finalMessageClass = 'tie-message';
        }

        resultsDiv.innerHTML += `<br><span class="final-message ${finalMessageClass}">${finalMessage}</span><br>`;



        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;



    }
}


function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    resultsDiv.innerHTML = "Game restarted! Choose your first move.";

    // Re-enable the buttons when the game restarts
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

