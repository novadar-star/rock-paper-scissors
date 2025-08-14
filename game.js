

//assign zombie container to the random
function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    let zombieResult =  document.querySelector(".zombie img")
    const zombieImg = ["rock.jpg", "paper.jpg", "scissors.jpg"]
  
    let weapon = "";

    switch(index){
        case 0:
            zombieResult.src = zombieImg[0];
            weapon = "rock";
            break;
        case 1:
             zombieResult.src = zombieImg[1];
            weapon = "paper";
            break;
        case 2:
             zombieResult.src = zombieImg[2];
            weapon = "scissors";
            break;
        default:
            break;
    }
    console.log("Zombie: " + weapon);
    return zombieResult, weapon;
}

function getHumanChoice(){
    let humanResult = document.querySelector(".steve img")
    const humanImg = ["rock.jpg", "paper.jpg", "scissors.jpg"]
    
    const buttons = document.querySelectorAll("button")

    buttons.forEach((button) => {
        button.addEventListener("click", ()=> {
            let input ="";
            switch(button.id){
                case "rock":
                    humanResult.src = humanImg[0];
                    input = "rock";
                    break;
                case "paper":
                    humanResult.src = humanImg[1];
                    input = "paper";
                    break;
                case "scissor":
                    humanResult.src = humanImg[2];
                    input = "scissors";
                    break;
                default:
                    break;

            }
            console.log("Human: " + input);
            return humanResult, input;
        })
    })


}

//computer choice gets to decide before human so human returns undefined
 let humanScore=0;
  let computerScore = 0;
function playRound(){
   humanChoice = getHumanChoice();

    if(humanChoice === "rock" && computerChoice === "scissors"){
       //not displaying   
        humanScore++;
        return "U WIN rock beats scissors"; 
     }
    else if(humanChoice === "paper" && computerChoice === "rock"){
       
        humanScore++;
         return "U WIN paper beats rock";
    }
    else if(humanChoice === "scissors" && computerChoice ==="paper" ){
        humanScore++;
          return "U WIN scissors beats paper";
    }
    // rock
    else if(computerChoice === "rock" && humanChoice === "scissors"){
     
        computerScore++;
          return "U LOSE rock beats scissors";
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
    
        computerScore++;
          return "U LOSE paper beats rock";
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
   
        computerScore++;
         return "U LOSE scissors beats paper";
    }
    else { //if all are tie
        computerScore++;
        humanScore++;
        return "tie!";
    }
   
}
   

function playGame(){ //invokes function 5times
    for(let i=1; i<=5; i++){

        console.log(`Round 1: ${i}`);
        console.log(playRound());
        console.log(`Human choice: ${humanChoice} | score: ${humanScore}`);
        console.log(`Computer choice: ${computerChoice} | score: ${computerScore}`);
    }
  winner();
}
 
    

function winner(){
         if(humanScore === computerScore){
            console.log("HUMAN AND COMPUTER TIE!");
        }
        else if(humanScore > computerScore){
            console.log("HUMAN WON!");
        }
        else{
            console.log("COMPUTER WON!");
        }
}

playGame();

 