const rockButton = document.getElementById("btn-rock");
const paperButton = document.getElementById("btn-paper");
const scissorsButton = document.getElementById("btn-scissors");


function playRound(playerSelection) {
    const options = ["rock", "paper", "scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    if (playerSelection.toLowerCase() === computerSelection) {
        return ("Tie");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return ("Lose");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return ("Win");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return ("Lose");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return ("Win");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return ("Win");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return ("Lose");
    } else {
        return ("Invalid entry");
    } 
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    let myWins = 0
    let computerWins = 0
    let ties = 0
    button.addEventListener('click', function() {
        const result = (playRound(button.textContent));
        const resultDiv = document.createElement('div');
        resultDiv.textContent = result;

        if (result === "Tie") {
            ties += 1;
            resultDiv.textContent = ("Ties: " + ties);
            } else if (result === "Win") {
            myWins += 1;
            resultDiv.textContent = ("Your wins: " + myWins);
            } else if (result ==="Lose") {
            computerWins += 1;
            resultDiv.textContent = ("Computer wins: " + computerWins);
            } else {
            resultDiv.textContent =("Please input valid option");
            }   

        if (myWins >= 5) {
            resultDiv.textContent = ("Congrats, you won 5!");
        } else if (computerWins >= 5) {
            resultDiv.textContent = ("You lost! The computer won 5!"); 
        }

        if (myWins >= 5 || computerWins >= 5) {
            container.appendChild(resultDiv);
            buttons.forEach(button => button.disabled = true); 
        } else {
            container.appendChild(resultDiv);
        }

        container.appendChild(resultDiv);
    })

})
