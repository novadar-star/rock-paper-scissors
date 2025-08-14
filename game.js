
const gameContainer = document.querySelector(".outer-container");
const humanResult = document.querySelector(".steve img");
const zombieResult = document.querySelector(".zombie img")
const result = document.querySelector(".result");

const optionChoices = document.querySelectorAll(".image");


//loop thru image options then popp up if active click
optionChoices.forEach((image1, index1) => {
    image1.addEventListener("click", (e) => {
        image1.classList.add("active");
        //LOOPS through all the 3 choices 
        optionChoices.forEach((image2, index2) => {
            //if current index dont match clicked index
            index1 !== index2 && image2.classList.remove("active");
        });

        //select image that human click
        let imgSrc = e.target.src;
        //changes steve to what the human click
        humanResult.src = imgSrc;

        //randomnly choosing from 3
        let zombieIndex = Math.floor(Math.random() * 3);
        const zombieImg = ["rock.jpg", "paper.jpg", "scissors.jpg"]
        zombieResult.src = zombieImg[zombieIndex];
        //access zombiechoice as string
        let zombie = ["rock", "paper", "scissors"][zombieIndex];
        
        //acces human
        let human = ["rock", "paper", "scissors"][index1];
        const desc = document.querySelector(".result");

        let humanScore = 0;
        let zombieScore = 0;
        const hscore = document.querySelector("#human-score")
        const zscore = document.querySelector("#zombie-score")

    
            
        function play() {
            //parallel to options so
            if(human === "rock" && zombie === "scissors"){
            humanScore++;
            return "U WIN rock beats scissors"; 
            }
            else if(human === "paper" && zombie  === "rock"){ 
            humanScore++;
            return "U WIN paper beats rock";
    }
    else if(human === "scissors" && zombie  ==="paper" ){
        humanScore++;
          return "U WIN scissors beats paper";
    }
    // rock
    else if(zombie  === "rock" && human=== "scissors"){
     
        computerScore++;
          return "U LOSE rock beats scissors";
    }
    else if(zombie === "paper" && human=== "rock"){
    
        zombieScore++;
          return "U LOSE paper beats rock";
    }
    else if (zombie === "scissors" && human === "paper"){
   
        zombieScore++;
         return "U LOSE scissors beats paper";
    }
    else { //if all are tie
        zombieScore++;
        humanScore++;
        return "tie!";
    }
   
}       

       play();
    

       //let round = document.querySelector("#round");
      
        function playGame(){
            for(let i=1; i<=5; i++){
           // round.textContent = r;
                    console.log(`Round 1: ${i}`);
        console.log(play());
        console.log(`Human choice: ${human} | score: ${humanScore}`);
        console.log(`Computer choice: ${zombie} | score: ${zombieScore}`);
     
        }
        winner();
        }

        function winner(){
         if(humanScore === zombieScore){
            console.log("HUMAN AND COMPUTER TIE!");
        }
        else if(humanScore > zombieScore){
            console.log("HUMAN WON!");
        }
        else{
            console.log("COMPUTER WON!");
        }
        playGame();
    }
     
    });
});


