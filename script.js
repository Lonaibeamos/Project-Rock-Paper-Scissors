const cont = document.getElementById("container");
const btn1 = document.querySelector('#Btn1');
const btn2 = document.querySelector('#Btn2');
const btn3 = document.querySelector('#Btn3');
const resultDiv = document.querySelector('#result');

function getComputerChoice(){
    const ComputerChoice = Math.floor(Math.random() * 3) + 1;
    switch(ComputerChoice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
       // default: break;
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    const HumanChoice = prompt("Rock,paper or scissors");
    HumanChoice = HumanChoice.toLowerCase().trim();
    switch(HumanChoice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default: break;
    }
}


const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice,computerChoice){
    console.log(`             You:         ${humanChoice} | Computer: ${computerChoice}`);
    if(humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors" ){
        console.log("Draw!");
        return;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
       console.log("You lose! Paper beats Rock.");
       computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! scissors beats paper.");
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! rock beats scissors.");  
        computerScore++;
    }
     else if(computerChoice == "rock" && humanChoice == "paper"){
       console.log("You won! Paper beats Rock.");
       humanScore++;
    }
    else if(computerChoice == "paper" && humanChoice == "scissors"){
        console.log("You won! scissors beats paper.");
        humanScore++;
    }
    else if(computerChoice == "scissors" && humanChoice == "rock"){
        console.log("You won! rock beats scissors.");  
        humanScore++;
    }

}
function playGame(){
    console.log(`  |---------human score--------|---------computer score---------|`);
            const a = getComputerChoice();
            const b = getHumanChoice();
            playRound(b,a);
        console.log(`|---------${humanScore}------|----------${computerScore}------|`)
        //console.log(`|----------------------------|--------------------------------|`)
    console.log("--------------------finalScore---------------------");
    console.log(`------human: ${humanScore}--- Computer---${computerScore}`);
}

playGame();

cont.addEventListener('click')


btn1.addEventListener('click',playRound());
btn2.addEventListener('click',playRound());
btn3.addEventListener('click',playRound());
