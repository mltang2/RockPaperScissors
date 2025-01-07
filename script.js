function getComputerChoice() {
    let num = Math.random();

    if (num <= 0.33) return "rock";
    else if (num <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Will you choose rock, papper, or scissors? (respond with r, p, or s");
    humanChoice = humanChoice.toLowerCase();
    firstLetter = humanChoice.charAt(0);

    switch (firstLetter) {
        case ("r"):
            return "rock";
            break;
        case ("p"):
            return "paper";
            break;
        case ("s"):
            return "scissors";
            break;
        default:
            console.log("must responde with a letter r, p, or s");
            return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("The computer chose " + computerChoice);

    if (computerChoice == "rock") {
        if (humanChoice == "rock") {
            console.log("Rock ties Rock, no points awarded.");
        }
        else if (humanChoice == "paper") {
            console.log("You Win! Paper beats Rock.");
            humanScore++;
        }
        else {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        } 
    }
    else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanChoice == "paper") {
            console.log("Paper ties Paper, no points awarded");
        }
        else {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        } 
    }
    else {
        if (humanChoice == "rock") {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice == "paper") {
            console.log("You Lose! Scissors beats Paper.");
            computerScore++;
        }
        else {
            console.log("Scissors tie Scissors. no points awarded.");
        } 
    }
}


function playGame() {
    console.log("Welcome to Rock Paper Scissors. You will play 5 rounds. Whoever ends in more points is the winner!")

    for (let i=0; i<5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("The Computer ended with " + computerScore + " points");
    console.log("You ended with " + humanScore + " points");
    if (humanScore > computerScore) {
        console.log("You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Computer Won!");
    }
    else {
        console.log("Draw!")
    }
    humanScore = 0;
    computerScore = 0;
}
