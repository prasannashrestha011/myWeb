const boxes=document.querySelectorAll('.box');
const reset=document.querySelector('.reset');
const winner=document.querySelector('#winner-board');
let turno=true;
 const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
          
            if(turno)
            {
                box.innerText="O";
                box.style.color="red";

                turno=false;
            }
            else{
                box.innerText='X';
                box.style.color="blue";
                turno=true;
            }
            box.disabled=true;
            //disable button function when winner is announced
         function disabledAllBoxes()
            {
                boxes.forEach((box)=>{
                    box.disabled=true;
            });
            }

            for(pattern of winPatterns)
            {   console.log(pattern)
                let posi1=boxes[pattern[0]].innerText;
                  let  posi2=boxes[pattern[1]].innerText;
                  let posi3=boxes[pattern[2]].innerText;

                   function displaywinner(posi1){
                    winner.innerText=`Congratulation, You win ${posi1}`;
                  
                    }
                    // checking if a particular row indexes has same value
            if(posi1!=="" && posi2!=="" && posi3!=="")
                  {
                    if(posi1==posi2 && posi2==posi3)
                    {
                            
                            displaywinner(posi1);
                            winner.style.display="block";
                            winner.style.border="2px solid black"
                            disabledAllBoxes();
                           
                        
                    }
                  }
            }

        });
    }
 
);
reset.onclick=()=>{
    boxes.forEach(
        (box)=>{
            box.innerText="";
            box.disabled=false;
            winner.innerText="";
            turno=true;

        }
      
    )
    winner.style.apperance="none";
    winner.style.border="none";
 
}

    