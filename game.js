
function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    const cont = document.querySelector(".zombie");
    const computerChoice = document.createElement("p");
    let weapon = "";

    switch(index){
        case 0:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "rock";
         cont.appendChild(computerChoice);            
          weapon = "rock";
          break;
        case 1:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "paper";
          cont.appendChild(computerChoice);      
           weapon = "paper";
          break;    
        case 2:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "scissors";
          cont.appendChild(computerChoice);      
           weapon = "scissors";
          break;
    }
    console.log(weapon);
   
}


function playRound(humanChoice, computerChoice){
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

/*
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
 */
    
/*
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

*/
//playGame();


const message = document.querySelector("p");
let humanScore=0;
let computerScore = 0;
let rounds = "";
let roundcount = 0;

const btnChoice = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.target.style.background = "#C28340";
     const computerChoice = getComputerChoice();
    round = playRound("rock", computerChoice);
    roundcount++;
});

btnChoice.addEventListener("click",(e) => {
    let target = e.target;

    switch(target.id){
        case "rock":
          const cont = document.querySelector(".rock-container");
          const humanChoice = document.createElement("p");
          humanChoice.classList.add("humanChoice");
          humanChoice.textContent = "rock";
          cont.appendChild(humanChoice);    
          
          
    }
    console.log(target.id);


} )
