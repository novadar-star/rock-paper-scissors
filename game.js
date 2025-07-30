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
getComputerChoice(); //invokes the fucntion

function getHumanChoice(){
    let input = prompt("Rock, paper and scissors? (lowercase only): ");
    console.log(input.toLowerCase());
}
getHumanChoice();


//tracker of human and computer score
//compare the strings if the same
//if same display "Rock beats paper "
//increment

let humanScore = 0; let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("rock beats paper");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("paper beats rock");
        humanScore ++
    }
    else if(humanChoice == "scissors" && computerChoice =="paper" ){
        console.log("scissors beats paper");
        humanScore++;
    }
    // rock
    else if(computerChoice== "rock" && humanChoice == "scissors"){
        console.log("rock beats paper");
        computerScore++;
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        console.log("paper beats rock");
        computerScore++;

    }
    else{
        console.log("scissors beats paper");
        computerScore++;
    }

}

playRound(humanSelection, computerSelection);