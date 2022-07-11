const btn = document.querySelector('#v2');

//console.dir(btn) 

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

