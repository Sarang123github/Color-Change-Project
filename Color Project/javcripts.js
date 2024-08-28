
let button_Color=document.querySelectorAll('.button')
let body= document.querySelector('body')

button_Color.forEach(function(button_Value){

button_Value.addEventListener('click' ,function(e){  //  "e" is event object here
    console.log("e :-"+e.target.id)




 switch(e.target.id) {

  case ('grey'):

  body.style.backgroundColor =e.target.id

  break;
  case ('red'):

  body.style.backgroundColor =e.target.id

  break;
  case ('blue'):

  body.style.backgroundColor =e.target.id

  break;
  case ('yellow'):

  body.style.backgroundColor =e.target.id

  break;

default:
   body.style.backgroundColor='green'


 }


     

})

})