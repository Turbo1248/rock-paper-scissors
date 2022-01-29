let computerScore = 0;
let humanScore = 0;

function computerPlay() {
    switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
};    

function humanPlay() {
    return prompt("Choose your weapon!").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = humanPlay();
    computerSelection = computerPlay();

    switch (playerSelection) {
        case "rock":
            if (computerSelection =="paper") {
                computerScore ++;
                return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you lose!`
            }
            else if (computerSelection =="rock") {
                return `You chose ${playerSelection} and the computer chose ${computerSelection} too, so it's a draw!`
            }
            else {
                humanScore ++;
                return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you win!`
            }
            case "paper":
                if (computerSelection =="scissors") {
                    computerScore ++;
                    return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you lose!`
                }
                else if (computerSelection =="paper") {
                    return `You chose ${playerSelection} and the computer chose ${computerSelection} too, so it's a draw!`
                }
                else {
                    humanScore ++;
                    return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you win!`
                }
                case "scissors":
                    if (computerSelection =="rock") {
                        computerScore ++;
                        return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you lose!`
                    }
                    else if (computerSelection =="scissors") {
                        return `You chose ${playerSelection} and the computer chose ${computerSelection} too, so it's a draw!`
                    }
                    else {
                        humanScore ++;
                        return `You chose ${playerSelection} and the computer chose ${computerSelection}, so you win!`
                    }
            default:
                return "You didn't select a valid option, please try again.";
    }
}

function game() {
    humanScore = 0;
    computerScore = 0;

    for (let i= 0; i < 5; i++) {
        console.log(playRound());
        console.log(`Human Score = ${humanScore}`)
        console.log(`Computer Score = ${computerScore}`)
    }
}
