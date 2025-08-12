/*
const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const index =  Math.floor(Math.random() * 3 + 1);
    return choices[index];
    switch(index){
        case 0:
        computerChoice.classList.add("computerChoice");
        computerChoice.textContent =  "rock";
        cont.appendChild(computerChoice);  
        

        case 1:
        computerChoice.classList.add("computerChoice");
        computerChoice.textContent =  "paper";
        cont.appendChild(computerChoice);    
        

        case 2:
        computerChoice.classList.add("computerChoice");
        computerChoice.textContent =  "scissors";
        cont.appendChild(computerChoice);     
      
    }
    console.log(object);
   
}
const score = document.querySelector(".score");

let humanScore=0;
let computerScore = 0;
let round = "";

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

//score.textContent

function playGame(){ //invokes function 5times
    const score = document.getElementById("human-score");
   
    for(let i=1; i<=5; i++){
        console.log(playRound());
      //  console.log(`Round ${i}`);
        console.log(`Human choice: | score: ${humanScore}`);
        console.log(`Computer choice: | score: ${computerScore}`);
        console.log("========================");
    }
  
   // }
  winner();
}

    

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


playGame();


const btnChoice = document.querySelectorAll("button");

btnChoice.forEach((button)=> {
    button.addEventListener("click", (e) => {
    let target = e.target;
    const cont = document.querySelector(".steve");
    const humanChoice = document.createElement("h4");
    humanChoice.classList.add("humanChoice");

    switch(target.id){
        case "rock":
        humanChoice.textContent = "rock";
        cont.appendChild(humanChoice);   
        return "rock";
        
        case "paper":
        humanChoice.textContent = "paper";
        cont.appendChild(humanChoice);   
        return "paper";

        case "scissors":
         humanChoice.textContent = "scissors";
        cont.appendChild(humanChoice);   
        return "scissors";
  
    }
    console.log(round);

    })  
})
*/

//dom
const gameContainer = document.querySelector(".outer-container");
const humanResult = document.querySelector(".steve img");
const zombieResult = document.querySelector(".zombie img")
const result = document.querySelector(".result");

const optionChoices = document.querySelectorAll(".image");

console.log(gameContainer, humanResult, zombieResult, result, optionChoices);


//loop thru image options then popp up if active click
optionChoices.forEach((image1, index1) => {
    image1.addEventListener("click", (e) =>{
        image1.classList.add("active");

        optionChoices.forEach((image2, index2) => {
            //if current index dont match clicked index
            index1 !== index2 && image2.classList.remove("active");
        });

        //select image that human click
        let imgSrc = e.target.src;
        //changes steve to what the human click
        humanResult.src = imgSrc;

        let index = Math.floor(Math.random() * 3);
        const zombieImg = ["rock.jpg", "paper.jpg", "scissors.jpg"]
        zombieResult.src = zombieImg[index];
        
        let human = ["rock", "paper", "scissors"][index];
        console.log(human);

    });
});