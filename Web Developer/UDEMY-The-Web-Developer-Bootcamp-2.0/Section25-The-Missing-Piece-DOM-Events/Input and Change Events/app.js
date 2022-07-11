const input = document.querySelector("input");

const h1 = document.querySelector("h1");

input.addEventListener("input", function(evt){
    //console.log("Input Event!");

    h1.innerText = input.value;
})