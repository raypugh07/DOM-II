// Your code goes here
/*reference sample

let sampleButton = document.querySelector('.sampleButton');
sampleButton.addEventListener('click', (event) => {
  alert('You Clicked the Sample Button!')

let button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  button.style.backgroundColor = "red";
})

})*/

//beg of code

let navA=document.querySelector('.nav');
navA.addEventListener('mouseover',(event)=>{
    event.target.style.color='salmon';
});



//

navA.addEventListener('mouseout',(event)=>{
    event.target.style.color= '' ;

})


let hoverText=document.querySelector('.text-content');
hoverText.addEventListener('mouseenter',(event)=>{
    hoverText.style.color='salmon';
})

hoverText.addEventListener('mouseleave',(event)=>{
    hoverText.style.color='';

})

let signMeUp=document.querySelector('.btn');
signMeUp.addEventListener('click',(event)=>{
    alert('Awesome, you are ready to sign up!');
})

let logoBus=document.querySelector('.logo-heading')
logoBus.addEventListener('dblclick', (event)=>{
    alert('Hey!');
})

logoBus.addEventListener('contextmenu',(event)=>{
    alert('Bye!');
})


let bodyKey=document.querySelector('body');

bodyKey.addEventListener('keydown',(event)=>{
    bodyKey.style.backgroundColor='purple';
    
})
bodyKey.addEventListener('keyup',(event)=>{
    bodyKey.style.backgroundColor='';
    
})

let foot=document.querySelector('.footer');
let footZoom = function(e){
    e.target.style.fontSize = '1.8rem';
}
foot.addEventListener('click', footZoom);



