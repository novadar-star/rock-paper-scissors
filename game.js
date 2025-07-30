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