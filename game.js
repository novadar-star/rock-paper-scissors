

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
 //invokes the fucntion
let computerChoice = getComputerChoice();
console.log(computerChoice);



function getHumanChoice(){
    let input = prompt("rock, paper and scissors? ");
    if (input === null ){ //string empty
       alert("enter a word please!");
    }
    else{
        return input.toLowerCase(); 
    }
}

let humanChoice = getHumanChoice();
console.log(humanChoice);


      

function playRound(){
    let humanScore=0;
    let computerScore = 0;
    let text = " ";

    if(humanChoice === "rock" && computerChoice === "scissors"){
        text = "U WIN rock beats scissors"; //not displaying   
        humanScore++;
     }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        text = "U WIN paper beats rock";
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice ==="paper" ){
        text= "U WIN scissors beats paper";
        humanScore++;
    }
    // rock
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        text = "U LOSE rock beats scissors";
        computerScore++;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        text = "U LOSE paper beats rock";
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        text = "U LOSE scissors beats paper";
        computerScore++;
    }
    else { //if all are tie
        text = "Same weapons!";
    }
   
    console.log("Human Score: " + humanScore + " Computer Score:" + computerScore);
    console.log(text);
}





function playGame(){ //invokes function 5times

    for(i=1; i<=5;i++){
    playRound(humanChoice, computerChoice);
    return humanChoice;
    
 }
}
    playGame();
    

function winner(humanScore,computerScore){
         if(humanScore === computerScore){
            console.log("human and computer TIE!");
        }
        else if(humanScore > computerScore){
            console.log("human won!");
        }
        else{
            console.log("computer won!");
        }
}
winner();

