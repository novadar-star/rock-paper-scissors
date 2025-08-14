const zombieResult =  document.querySelector(".zombie img")

const result = document.querySelector(".result");

const Img = ["rock.jpg", "paper.jpg", "scissors.jpg"]
/*
function getHumanChoice(){
    let humanResult = document.querySelector(".steve img")
    const buttons = document.querySelectorAll("button")
    let input ="";
           
    buttons.forEach((button) => {
        button.addEventListener("click", ()=> {
             
            switch(button.id){
                case "rock":
                    humanResult.src = Img[0];
                    input = "rock";
                    break;
                case "paper":
                    humanResult.src =Img[1];
                    input = "paper";
                    break;
                case "scissor":
                    humanResult.src =Img[2];
                    input = "scissors";
                    break;
                default:
                    break;

            }
            console.log("HUMAN: " + input);
            return humanResult, input;

        })
    })
}

*/
function getHumanChoice(image) {
  humanChoice = image;
  alert(humanChoice)
  return humanChoice;
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

  
//computer choice gets to decide before human so human returns undefined
let humanScore=0;
let zombieScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice ==="paper" ){
       
        result = "You win!";
         humanScore++;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors" ||
    computerChoice === "paper" && humanChoice === "rock" ||
    computerChoice === "scissors" && humanChoice === "paper"){
     
        result= "You lost!";
           computerScore++;
    }
    else { //if all are tie
          result= "You win!";
    }
    document.getElementById("zombie-score").innerHTML = humanScore;
    document.getElementById("human-score").innerHTML = zombieScore;
    document.querySelector(".result").innerHTML = result
    //alert("RESULT: " + result); //not outputting wtf
    //return computerScore, humanScore;
   
}
playRound();

/*
function playGame(){ //invokes function 5times
    let resulttext = document.querySelector(".result");
    for(let i=1; i<=5; i++){

        console.log(`Round ${i}`);
        console.log(playRound());
        console.log(`Human choice: ${humanChoice} | score: ${humanScore}`);
        console.log(`Computer choice: ${computerChoice} | score: ${computerScore}`);
        resulttext.textContent = (`${result}`);
    
    }
  winner();
}
 
    

function winner(){
    let finalresult = document.querySelector(".finalresult")

         if(humanScore === computerScore){
            finalresult.textContent = "HUMAN AND COMPUTER TIE!";
        }
        else if(humanScore > computerScore){
             finalresult.textContent = "HUMAN WON!";
        }
        else{   
            finalresult.textContent = "COMPUTER WON!";
        }
}

playGame();
 */