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
            console.log("You picked the same weapon, no winners this round!"); //change to output
        } 
        else if(
            (computerChoice === "rock" && playerChoice === "scissor") || 
            (computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "scissor" && playerChoice === "paper")
        ) {
            console.log(computerChoice + " beats " + playerChoice +", you lose!") // computer wins
            computerScore++;
        } 
        else if(
            (computerChoice === "rock" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "scissor") ||
            (computerChoice === "scissor" && playerChoice === "rock")
        ) {
            console.log(playerChoice + " beats " + computerChoice +", you win!") // you win
            playerScore++;
        }
        updateScore();
        console.log("Human Score: " + playerScore + "  || Computer Score: "+ computerScore); // update score
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

function updateScore(){
    pScore.textContent = "Player Score: " + playerScore;
    cScore.textContent = "Computer Score: " + computerScore;
}

const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

// updateScore();


