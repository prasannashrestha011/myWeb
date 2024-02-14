var buttons=document.querySelectorAll('.key');
var screen=document.querySelector('#screen');

buttons.forEach(
    (button)=>{
        button.addEventListener('click',
         (event)=>{
            var keyValue=event.target.innerText;
         
              if(keyValue ==="=")
              {
                 let expression= screen.value;
                 let result=eval(expression);
                 screen.value=result;
                 
                 console.log(result);
              
              }
              else if(keyValue==="C")
              {
                   screen.value="";
              }
              else{
                screen.value+=keyValue;

              }
         })
    }
);