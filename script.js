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

console.log("Computer Chose: " + getComputerChoice());

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

console.log("Human Chose: " + getHumanChoice());

// Declare the players score variables

let computerScore = 0;
let humanScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {}

// Write the logic to play the entire game
