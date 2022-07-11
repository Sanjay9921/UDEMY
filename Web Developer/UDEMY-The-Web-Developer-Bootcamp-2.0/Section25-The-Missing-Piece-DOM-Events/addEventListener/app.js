const btn = document.querySelector('#v2');

//console.dir(btn) 

//OnClick
btn.onClick = function(){
    console.log("You Clicked Me!");
    console.log("I hope it worked!");
}

function scream(){
    console.log("AAURGH!");
    console.log("Stahp touching me bruv. ");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick =() =>{
    alert("you clicked h1!");
};

//ADD EVENT LISTNER
const btn3 = document.querySelector('#v3');

//Experiment: Replace "click" -> dblclick, mouseup 
btn3.addEventListener('click', function(){
    alert("Clicked!");
})

function twist(){
    console.log("Twist!");
}

function shout(){
    console.log("Shout!");
}

//Check the functions with onclick - which goes first?
const tasBtn = document.querySelector("#tas");

//tasBtn.onclick = twist;
//tasBtn.onclick = shout;

//One click 
tasBtn.addEventListener("click", twist,{
    once: true
});

//Multiple Clicks
tasBtn.addEventListener("click",shout);