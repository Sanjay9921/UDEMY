const helloBtn = document.querySelector("#hello");
const goodbyeBtn = document.querySelector('#goodbye');

function hello(){
    console.log("hello");
}

function goodbye(){
    console.log("goodbye");
}

helloBtn.addEventListener("click",hello);
goodbyeBtn.addEventListener("click",goodbye);