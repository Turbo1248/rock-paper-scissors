let playerSelection;
let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

const onClick = (event) => {
  if (event.target.className === 'playerChoice') {
    playerSelection = (event.target.id);
    removeAllChildNodes(container);
    playRound(playerSelection, computerSelection());
    checkWinner(computerScore, humanScore);
  }
}

window.addEventListener('click', onClick);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
  }
};

function checkWinner(computerScore,humanScore) {
  const winner = document.createElement('p');  
  if (computerScore == 5) {
    winner.textContent = "Computer wins the game!";
    container.appendChild(winner);
  }
  else if (humanScore == 5) {
    winner.textContent = "Computer wins the game!";
    container.appendChild(winner);
  }
  return;
};

computerSelection = function () {
  switch (Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

function playRound(playerSelection, computerSelection) {

  const playerChoice = document.createElement('p');
  playerChoice.textContent = `You chose ${playerSelection}`;
  container.appendChild(playerChoice);

  const computerChoice = document.createElement('p');
  computerChoice.textContent = `The computer chose ${computerSelection}`;
  container.appendChild(computerChoice);

  const result = document.createElement('p');
  result.classList.add = "result";

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    humanScore++;
    result.textContent = "You win! " + `Player score = ${humanScore}, Computer score = ${computerScore}`;
    container.appendChild(result);
    gameCount ++;
    console.log(gameCount);
  }
  else if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")) {
    computerScore ++;
    result.textContent = "You lose! " + `Player score = ${humanScore}, Computer score = ${computerScore}`;
    container.appendChild(result);
    gameCount ++;
    console.log(gameCount);
  }
  else {result.textContent = "It's a draw! " + `Player scscore = ${humanScore}, Computer score = ${computerScore}`;
  container.appendChild(result);
  gameCount ++;
  console.log(gameCount);
  };
};

const container = document.querySelector('#container');
