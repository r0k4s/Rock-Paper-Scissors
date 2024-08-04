// Write the logic to get the computer choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const numberToWords = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
  };
  let computerChoice = numberToWords[randomNumber];
  return computerChoice;
}

// Write the logic to get the human choice

function getHumanChoice() {
  let humanChoice = prompt("What is your choice? Rock, Paper or Scissors.");
  if (humanChoice !== null) {
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  }
  if (
    humanChoice !== "Rock" &&
    humanChoice !== "Paper" &&
    humanChoice !== "Scissors"
  ) {
    alert("Invalid choice, please choose Rock, Paper or Scissors.");
    return getHumanChoice();
  }
  return humanChoice;
}

//

let computerScore = 0;
let humanScore = 0;

// Write the logic to play the entire game

function playRound() {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  console.log(
    "Computer chose " +
      computerSelection +
      " and human chose " +
      humanSelection +
      "."
  );

  if (computerSelection === humanSelection) {
    console.log(" - The round ended in a draw.");
  } else if (
    (computerSelection === "Rock" && humanSelection === "Scissors") ||
    (computerSelection === "Scissors" && humanSelection === "Paper") ||
    (computerSelection === "Paper" && humanSelection === "Rock")
  ) {
    console.log(" - Computer won this round.");
    ++computerScore;
  } else {
    console.log(" - Human won this round.");
    ++humanScore;
  }
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    playRound();
  }
  console.log(
    "Computer won " +
      computerScore +
      " times and human won " +
      humanScore +
      " times."
  );
  if (computerScore >= humanScore) console.log(" - Computer won this match.");
  else console.log(" - Human won this match.");
}

playGame();
