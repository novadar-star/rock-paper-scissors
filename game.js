
function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    const cont = document.querySelector(".zombie");
    const computerChoice = document.createElement("h4");
   

    switch(index){
        case 0:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "rock";
         cont.appendChild(computerChoice);  
         return "rock";
        case 1:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "paper";
          cont.appendChild(computerChoice);    
          return "paper";  
        case 2:
          computerChoice.classList.add("computerChoice");
          computerChoice.textContent =  "scissors";
          cont.appendChild(computerChoice);     
          return "scissors"; 
         
    }
   
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "U WIN this round: rock beats scissors"; 
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
    else { 
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


let humanScore=0;
let computerScore = 0;
let round = "";
let roundcount = 0;

const btnChoice = document.querySelectorAll("button");

for(let indexx = 0; indexx< btnChoice.length;indexx+=1){
btnChoice[indexx].addEventListener("click", pressBtns);
function pressBtns(e) {
    let target = e.target;
    const cont = document.querySelector(".steve");
    const humanChoice = document.createElement("h4");
    humanChoice.classList.add("humanChoice");
    const computerChoice = getComputerChoice();


    switch(target.id){
        case "rock":
        humanChoice.textContent = "rock";
        cont.appendChild(humanChoice);   
        round = playRound("rock", computerChoice);
        roundcount++;
        return "rock";
        
        case "paper":
        humanChoice.textContent = "paper";
        cont.appendChild(humanChoice);   
        round = playRound("paper", computerChoice);
        roundcount++;
        return "paper";

        case "scissors":
         humanChoice.textContent = "scissors";
        cont.appendChild(humanChoice);   
        round = playRound("scissors", computerChoice);
        roundcount++;
        return "scissors";
  
    }
    console.log(round);
} 
}
//create an p element under steve similar to zombie so dun ilalagay 
//pinindot mong option