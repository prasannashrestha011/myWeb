const buttons=document.querySelectorAll('.box');
const displayWinner=document.querySelector('#display-winner');
const reset=document.querySelector('.reset');
buttons.forEach(
    (box)=>{
        box.addEventListener('click',()=>{
            const userchoice=box.innerText;
       
            const botchoice=computerplayer();
            userWin=true;
            if(userchoice==botchoice)
            {
                console.log('game was draw');
                displayWinner.style.display="block";
                displayWinner.innerText="Game was draw,Play again!";
                displayWinner.style.justifycontent="center";
                return;
            }
            else{
                if(userchoice=="rock"){
                    userWin=botchoice=="scissor"?true:false;
                }
                else if(userchoice=="paper"){
                    userWin=botchoice=="rock"?true:false;
                }
                else{
                    userWin=botchoice=="paper"?true:false;
                }
            }
            Winner(userWin);
          
        });
        reset.onclick=()=>{
            displayWinner.style.display="none";
            displayWinner.innerText="";
        }
    }
);
const computerchoice=["rock","paper","scissor"];
 function computerplayer(){
    const cmpchoice=Math.floor(Math.random()*3);
      
      return (computerchoice[cmpchoice]);
}
function Winner(userWin){
    if(userWin)
    {
        console.log("You win!");
        displayWinner.style.display="block";
        displayWinner.innerText="You win!";
        displayWinner.style.justifyContent = "center"; // Correct camelCase
        displayWinner.style.alignItems = "center"; // Correct camelCase
        
        
    }
    else{
        console.log('You lose!');
        displayWinner.style.display="block";
        displayWinner.innerText="You lose!";
        displayWinner.style.justifyContent = "center"; // Correct camelCase
        displayWinner.style.alignItems = "center"; // Correct camelCase
        
    }

}