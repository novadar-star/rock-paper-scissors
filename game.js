//WHY THE FUCK IS ZOBIE RETURNING EVEN IF I DONT CCALL THE FUNCITON

//if i dont putonclick ="getcomputerchoice" on buttons html, zombi img doesnt change and di nagrereturn
//assign zombie container to the random
    const Img = ["rock.jpg", "paper.jpg", "scissors.jpg"]

function getComputerChoice(){
    let index =  Math.floor(Math.random() * 3);
    let zombieResult =  document.querySelector(".zombie img")
    let weapon = "";

    switch(index){
        case 0:
            zombieResult.src = Img[0];
            weapon = "rock";
            break;
        case 1:
            zombieResult.src = Img[1];
            weapon = "paper";
            break;
        case 2:
             zombieResult.src = Img[2];
            weapon = "scissors";
            break;
        default:
            break;
    }
    alert("ZOMBIE: " + weapon);
    return zombieResult, weapon;
}

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
            alert("HUMAN: " + input);
            return humanResult, input;

        })
    })
}

  
//computer choice gets to decide before human so human returns undefined
let humanScore=0;
let computerScore = 0;

  
function playRound(){

   humanChoice = getHumanChoice();
 
//result not diplayin except for tie
    if(humanChoice === "rock" && computerChoice === "scissors"){
       //not displaying   
        humanScore++;
        result = "U WIN rock beats scissors"; 
     }
    else if(humanChoice === "paper" && computerChoice === "rock"){
       
        humanScore++;
        result = "U WIN paper beats rock";
    }
    else if(humanChoice === "scissors" && computerChoice ==="paper" ){
        humanScore++;
         result= "U WIN scissors beats paper";
    }
    // rock
    else if(computerChoice === "rock" && humanChoice === "scissors"){
     
        computerScore++;
          result =  "U LOSE rock beats scissors";
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
    
        computerScore++;
         result= "U LOSE paper beats rock";
    }
    else if (computerChoice === "scissors" && humanChoice === "paper"){
   
        computerScore++;
         result = "U LOSE scissors beats paper";
    }
    else { //if all are tie
        computerScore++;
        humanScore++;
         result =  "tie!";
    }
    return result, computerScore,humanScore;
   
}
   //buttons work but not oputputting anything on console
   //random always work first..it must be base on user click

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
 