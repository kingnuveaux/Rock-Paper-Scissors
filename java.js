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
    }

    else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        message = "You win! Rock beats Scissors!"
    }

    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        message = "You win! Scissors beats Paper!"
    }

    else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        message = "You lose! Rock beats Scissors!"
    }

    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        message = "You win! Paper beats Rock!"
    }

    else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        message = "You lose! Scissors beats Paper!"
    }

    else message = 'Try again using "Rock, Paper or Scissors".'

    return message
}

var playerSelection = "rock";
//console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playerSelection = window.prompt("Rock, Paper or Scissors?", "What you got?");
        
        var computerSelection = computerPlay();
        //if (playerSelection != ("rock" || "paper" || "scissors")) {
        //    alert("Please enter rock, paper or scissors only! This is your last warning!!");
        //    i--
        //    if (i < 0) {
        //        i = 0
        //    }
        //}
        results = playRound (playerSelection, computerSelection)
        console.log(results)
    }
    
}

console.log(game());

//  GAME NEEDS COMPUTER TO CHOOSE DIFFERENT RESULT EACH RECURSION
//  GAME DOESN'T RECOGNIZE INPUT AFTER 1ST GUESS (CAN INPUT ANYTHING!) GAME NEEDS TO RECOGNIZE NEW INPUT EACH RECURSION
