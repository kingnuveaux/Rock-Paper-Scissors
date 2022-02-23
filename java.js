const rock = document.getElementById("1");
const paper = document.getElementById("2")
const scissors = document.getElementById("3")

// The Game Start
function game() {
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    //Add event listeners for all three buttons/run round on click/ track and end game
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = playRound(playerSelection, computerSelection);
            playerWinText.textContent = "Player win totals :" + playerWin;
            computerWinText.textContent = "Computer win totals: " + computerWin;
            endGame();
        })
    })   

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random() * choices.length)];
    return randomChoices    
}

function playRound(playerSelection, computerSelection) {
    //Your code here!
    if (playerSelection.toLowerCase() == "rock" & computerSelection == "rock") {
        message = "Tie!"
    }

    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "paper") {
        message = "Tie!"
    }

    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "scissors") {
        message = "Tie!"
    }

    else if (playerSelection.toLowerCase() == "rock" & computerSelection == "paper") {
        message = "You lose! Paper beats Rock!"
        computerWin++
    }

    else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        message = "You win! Rock beats Scissors!"
        playerWin++
    }

    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        message = "You win! Scissors beats Paper!"
        playerWin++
    }

    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        message = "You lose! Rock beats Scissors!"
        computerWin++
    }

    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        message = "You win! Paper beats Rock!"
        playerWin++
    }

    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        message = "You lose! Scissors beats Paper!"
        computerWin++
    }

    else message = 'Try again using "Rock, Paper or Scissors".'

    return message
}
//Create div Dom for all results

    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20 px";
    container.appendChild(resultsDiv);


//Create computer win tracking DOM
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.textContent = "Player win totals: " + playerWin;
    resultsDiv.appendChild(playerWinText);

//Create computer win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "blue";
    computerWinText.textContent = "Computer win totals: " + computerWin;
    resultsDiv.appendChild(computerWinText);

//Create battle win text DOM
    const battleWinText = document.createElement ("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);
    
//Create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "orange";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

//Determine who won to five points first
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "YOU WIN! ";
            gameWinText.textContent = gameWinner;
        
        //disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
        
        //create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

        //if clicked, reload page
        playAgainButton.addEventListener('click', () => {
            location.reload();
            })

        } else if (computerWin == 5) {
            gameWinner = "COMPUTER WINS!";
            gameWinText.textContent = gameWinner;

        //disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

        //create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

        //if clicked, reload page
            playAgainButton.addEventListener('click', () => {
            location.reload();
            })
        }
    }
}

//fucntion call to start the game
game()