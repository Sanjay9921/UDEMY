const button = document.querySelector("button");
button.addEventListener("click", function(evt){
    //alert("CLICK!");
    console.log(evt);
})

const input = document.querySelector("input");
input.addEventListener("keydown", function(evt){
    //console.log("Keydown");
    console.log(evt.key);
    console.log(evt.code);

})

// input.addEventListener("keyup", function(){
//     console.log("Keyup");
// })

window.addEventListener("keydown", function(evt){
    //console.log(evt.code);
    switch(evt.code){
        case 'ArrowUp':
            console.log("Arrow Up!");
            break;
        case 'ArrowDown':
            console.log("Arrow Down!");
            break;
        case 'ArrowLeft':
            console.log("Arrow Left!");
            break;
        case 'ArrowUp':
            console.log("ArrowUp!");
            break; 
        default:
            console.log("Ignored!");
    }
})