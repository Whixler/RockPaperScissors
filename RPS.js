let playerScore = 0;
let computerScore = 0;

function randomChoice(){
    let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                return "rock"
            case 1:
                return "paper"
            case 2: 
                return "scissor"
            }
}
        
function playRound(playerChoice){
    let computerChoice = randomChoice();      
        if (computerChoice === playerChoice ){
            infoScore.textContent ="It's a tie!"
            mesScore.textContent = "You picked the same weapon"
        } 
        else if(
            (computerChoice === "rock" && playerChoice === "scissor") || 
            (computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "scissor" && playerChoice === "paper")
        ) {
            infoScore.textContent ="You lose!"
            mesScore.textContent = computerChoice + " beats " + playerChoice
            computerScore++;
        } 
        else if(
            (computerChoice === "rock" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "scissor") ||
            (computerChoice === "scissor" && playerChoice === "rock")
        ) {
            infoScore.textContent ="You win!"
            mesScore.textContent = playerChoice + " beats " + computerChoice
            playerScore++;
        }
        pScore.textContent = "Player Score: " + playerScore;
        cScore.textContent = "Computer Score: " + computerScore;
    }     

document.querySelector("#btnrock")?.addEventListener('click', () => {
    playRound("rock");
});

document.querySelector("#btnpaper")?.addEventListener('click', () => {
    playRound("paper");
});

document.querySelector("#btnscissor")?.addEventListener('click', () => {
    playRound("scissor");
});

//UI
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const infoScore = document.getElementById("info");
const mesScore = document.getElementById("scoreMessage");



