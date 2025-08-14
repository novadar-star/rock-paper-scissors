const zombieResult =  document.querySelector(".zombie img")
const humanResult = document.querySelector(".steve img")
const Img = ["rock.jpg", "paper.jpg", "scissors.jpg"]
let humanScore=0;
let zombieScore = 0;
let result = " ";
let finalResult = "";

function getHumanChoice(image) {
  humanChoice = image; //this is the class of the human
  switch(humanChoice){
    case "rock":
        humanResult.src = Img[0];
        return "rock";
    case "paper":
         humanResult.src = Img[1];
        return "paper";
    case "scissors":
        humanResult.src = Img[2];
        return "scissors"
  }
}

function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    switch(index){
        case 0:
             zombieResult.src = Img[0];
            return "rock";
        case 1:
             zombieResult.src = Img[1];
            return "paper"
        case 2:
             zombieResult.src = Img[2];
            return "scissors";
    }
    
}
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice ==="paper" ){
        result = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    if(computerChoice === "rock" && humanChoice === "scissors" ||
    computerChoice === "paper" && humanChoice === "rock" ||
    computerChoice === "scissors" && humanChoice === "paper"){
     
        result= `You lost! ${computerChoice} beats ${humanChoice}`;
        zombieScore++;
    }
    if(computerChoice === "rock" && humanChoice === "rock" ||
    computerChoice === "paper" && humanChoice === "paper" ||
    computerChoice === "scissors" && humanChoice === "scissors"){
        result = "Its a tie!";
    }
    
    document.getElementById("zombie-score").innerHTML = zombieScore;
    document.getElementById("human-score").innerHTML = humanScore;
    document.querySelector(".result").textContent = result;
   
}

//goes for unlimited round
function playGame(){
    for(let i=0; i<=5; i++){
       // playRound(humanChoice, computerChoice)
    }
    winner();
}
playGame();
 //cant display
function winner(){
         if(zombieScore === 5){
            finalResult = `ZOMBIE WON`;
         }
         else if (humanScore === 5){
            finalResult = `HUMAN WON`;
         }  
      
         
        document.querySelector(".finalResult").textContent= finalResult;
}

