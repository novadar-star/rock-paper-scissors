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
      console.log(weapon);
}
let computerChoice = getComputerChoice(); //invokes the fucntion

function getHumanChoice(){
    let input = prompt("Rock, paper and scissors? (lowercase only): ");
    if (input === null ){ //string empty
        alert("enter a word please!");
        return 0;
    }
    else{
        console.log(input.toLowerCase());
    }
}
let humanChoice = getHumanChoice();


//tracker of human and computer score
//compare the strings if the same
//if same display "Rock beats paper "
//increment
  function playRound(humanChoice, computerChoice){
     let humanScore = 0; let computerScore = 0;
            if(humanChoice === "rock" && computerChoice === "scissors"){
                console.log("rock beats paper"); //not displaying   
                humanScore++;
            }
            else if(humanChoice === "paper" && computerChoice === "rock"){
                console.log("paper beats rock");
                humanScore ++
            }
            else if(humanChoice === "scissors" && computerChoice ==="paper" ){
                console.log("scissors beats paper");
                humanScore++;
            }
            // rock
            else if(computerChoice === "rock" && humanChoice === "scissors"){
                console.log("rock beats paper");
                computerScore++;
            }
            else if(computerChoice === "paper" && humanChoice === "rock"){
                console.log("paper beats rock");
                computerScore++;

            }
            else if (computerChoice === "scissors" && humanChoice === "paper"){
                console.log("scissors beats paper");
                computerScore++;
            }
            else { //automatically goes here
                console.log("Its a tie..no one scored")
            }
            }
let winner_round = playRound();

function playGame(){

    for(let i=0; i<5; i++){
       console.log(winner_round + i);
        
}
    
    //score
    if(humanScore == computerScore){
        console.log("Tie!");
    }
    else if(humanScore > computerScore){
        console.log("human won!");
    }
    else{
        console.log("computer won!");
    }



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


}