
function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    let weapon = "";
    switch(index){
        case 0:
            weapon = "rock";
            break;
        case 1:
            weapon = "paper";
            break;
        case 2:
            weapon = "scissors";
            break;
        default:
            break;
    }
   
    return weapon.toLowerCase();
}

function getHumanChoice(){
    let input = prompt("rock, paper and scissors? ");
    if (input === null ){ //string empty
       alert("enter a word please!");
    }
    else{
     
        return input.toLowerCase(); 
    }
  
}
  let humanScore=0;
  let computerScore = 0;

function playRound(){
    computerChoice = getComputerChoice();
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
   
   // for(let i=1; i<=5; i++){
      //  console.log(`Round ${i}`);
        console.log(playRound());
        console.log(`Human choice: ${humanChoice} | score: ${humanScore}`);
        console.log(`Computer choice: ${computerChoice} | score: ${computerScore}`);
        console.log("========================");
   // }
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


const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");


btnRock.addEventListener("click", playRound);

