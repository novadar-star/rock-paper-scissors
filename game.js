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
let computerChoice = getComputerChoice(); //invokes the fucntion
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




    for(i=1; i<=5;i++){
       playRound(humanChoice, computerChoice)
    }
   //doenst display the result..doesnt counter
 function playRound(humanChoice, computerChoice){
     let humanScore = 0; 
     let computerScore = 0;
     let text = " ";
    if(humanChoice === "rock" && computerChoice === "scissors"){
        text = "rock beats scissors"; //not displaying   
        humanScore++;
     }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        text = "paper beats rock";
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice ==="paper" ){
        text= "scissors beats paper";
        humanScore++;
    }
    // rock
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        text = "rock beats scissors";
        computerScore++;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        text = "paper beats rock";
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
        text = "scissors beats paper";
        computerScore++;
    }
    else { //if all are tie
        text = "Its a tie..no one scored";
    }
    console.log(text);
}

 /*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/

