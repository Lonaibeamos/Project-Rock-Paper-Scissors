function getComputerChoice(){
    let random  = Math.floor(Math.random() * 3) + 1
    switch(random){
        case 1:
             return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            break;
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

  if(humanScore >= 5 || computerScore >= 5){
    return "Game Over! Refresh to play again.";
  }

  if (humanChoice === computerChoice) {
    console.log('its a tie');
    return "tie"
  }

 if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('you lost paper beats rock');
    computerScore++;
  }

  if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('you lost scissors beats paper');
     computerScore++;
  }
  

  if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('you lost rock beats scissors');
    computerScore++;
  }

  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('you win rock beats scissors');
     humanScore++;
  }

  if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('you win paper beats rock');
    humanScore++;
  }

  if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('you win scissors beats paper');
     humanScore++;
  }


  let result = `||computerScore: ${computerScore} || humanScore: ${humanScore}`;
   
  if (humanScore == 5 || computerScore == 5) {

  let final = (humanScore > computerScore) ? `human won ${humanScore} - ${computerScore}` : `computer won ${computerScore} - ${humanScore}`;
   result += `||  \n       \n👉 Winner:[${final}]`;
  return result;
  }

  return result;
}
/*
The KEY RULE (this is the brain-breaker)

Function calls happen BEFORE assignment.
so when you do this:
let result = playRound('rock', getComputerChoice());
the function playRound is called first, and only after it returns a value is that value assigned to result.
This means that any side effects (like updating scores) happen during the function call, not during the assignment.
*/

let div = document.querySelector('div')
document.getElementById("buttons").addEventListener('click',(e) => {
    let button = e.target.id;
    let para = document.createElement('p');
    switch(button){
        case 'btn1':
       para.textContent = playRound('rock',getComputerChoice());
            break;
        case 'btn2':
         para.textContent = playRound('paper',getComputerChoice());
            break;
        case 'btn3':
         para.textContent = playRound('scissors',getComputerChoice());
            break;
        default:
            return "Click only the buttons BREV!!!";
    }
    div.appendChild(para);
}
)
