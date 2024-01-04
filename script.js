/*
Player vs computer
Start with function 'getComputerChoice' to return random selction
*/

let getComputerChoice = function() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

/* Need function to play single round 
Should take 2 parameters (playerSelection & computerSelection);
*/

function playRound(playerSelection, computerSelection) {
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);

  if (playerSelection.toLowerCase() === computerSelection) {
    //return("It's a draw");
    console.log("It's a draw");
    computerSelection = getComputerChoice();
    return(playRound(playerSelection,computerSelection));
  }
    else {
      switch (playerSelection.toLowerCase()) {
        case "rock":
          if (computerSelection === "paper") {
            computerWinCount ++;
            return "You lose, paper beats rock";
          }
          else {
            playerWinCount ++;
            return "You win, rock beats scissors";
          }
          break;
          case "paper":
          if (computerSelection === "scissors") {
            computerWinCount ++;
            return "You lose, scissors beats paper";
          }
          else {
            playerWinCount ++;
            return "You win, paper beats rock";
          }
          break;
          
          case "scissors":
            if (computerSelection === "rock") {
              computerWinCount ++;
              return "You lose, rock beats scissors";
            }
            else {
              playerWinCount ++;
              return "You win, scissors beats paper";
            }
            break;
      }
    } 
}

//let playerSelection = prompt("Select your weapon");
//let computerSelection = getComputerChoice();

//console.log(playRound(playerSelection,computerSelection));

/*new function called game, runs playRound function 5 times
and keeps score and announces winner
*/

let playerWinCount = 0;
let computerWinCount = 0;

function game() {
  playerWinCount = 0;
  computerWinCount = 0;

  while (playerWinCount < 5 && computerWinCount < 5) {

  let playerSelection = prompt("Select your weapon");
  let computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
  console.log("Player Score: " + playerWinCount)
  console.log("Computer Score: " + computerWinCount)
  }

  if (playerWinCount === 5) {
    return "Well done, you win the game!"
  }
    return "Unlucky, computer wins the game!"
}

console.log(game());