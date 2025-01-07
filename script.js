function getComputeChoice() {
    let num = Math.random();

    if (num <= 0.33) return "rock";
    else if (num <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Will you choose rock, papper, or scissors? (respond with r, p, or s");
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
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
