let computerChoice;
        let getHumanChoice;
        let getComputerChoice;     
        let humanScore = 0;
        let computerScore = 0;
        let rounds = 5;
        
        function playRound(humanChoice, computerChoice){
            getHumanChoice = prompt("Pick your weapon:Rock, Paper, Scissors: ").toLowerCase();
            getComputerChoice = Math.floor(Math.random()*3) + 1;
            if(getComputerChoice === 1){
            computerChoice = "rock";
        } else if(getComputerChoice === 2){
            computerChoice = "paper";
        } else if(getComputerChoice === 3){
            computerChoice = "scissors";
        }
        console.log(computerChoice);
            if(computerChoice === getHumanChoice ){
                console.log("You picked the same weapon, no winners this round!");
            }else if((computerChoice === "rock" && getHumanChoice === "scissors") || 
            (computerChoice === "paper" && getHumanChoice === "rock") ||
            (computerChoice === "scissors" && getHumanChoice === "paper")){
                console.log(computerChoice + " beats " + getHumanChoice +", you lose!")
                computerScore++;
            }else if((computerChoice === "rock" && getHumanChoice === "paper") ||
            (computerChoice === "paper" && getHumanChoice === "scissors") ||
            (computerChoice === "scissors" && getHumanChoice === "rock")){
                console.log(getHumanChoice + " beats " + computerChoice +", you win!")
                humanScore++;
            }
            console.log("Human Score: " + humanScore + "  || Computer Score: "+ computerScore);
            console.log("");
            
        }     
               
        for (let i = 0; i < rounds; i++){
            playRound(getHumanChoice, computerChoice);
        }