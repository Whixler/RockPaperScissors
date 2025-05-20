let playerScore = 0;
let computerScore = 0;

function randomChoice(){
    let computerChoice;
    let random = Math.floor(Math.random() * 3) + 1;
        if(random === 1){
            computerChoice = "rock";
        } else if(random === 2){
            computerChoice = "paper";
        } else if(random === 3){
            computerChoice = "scissor";
        }
    return computerChoice;
}
        
function playRound(playerChoice){
    let computerChoice = randomChoice();      
        if (computerChoice === playerChoice ){
            console.log("You picked the same weapon, no winners this round!");
        } else if(
            (computerChoice === "rock" && playerChoice === "scissor") || 
            (computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "scissor" && playerChoice === "paper")){
                console.log(computerChoice + " beats " + playerChoice +", you lose!")
                computerScore++;
        } else if(
            (computerChoice === "rock" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "scissor") ||
            (computerChoice === "scissor" && playerChoice === "rock")){
                console.log(playerChoice + " beats " + computerChoice +", you win!")
                playerScore++;
        }
        console.log("Human Score: " + playerScore + "  || Computer Score: "+ computerScore);
        console.log("");
            
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

const container = document.querySelector("#main");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "First to score 5 points wins!";
container.appendChild(content);
