//The Old Way
function rollDie(n){
    if(n===undefined){
        n = 6;
    }

    return Math.floor(Math.random * n) + 1;
}

//The New Way
function rollDie(n = 6){
    return Math.floor(Math.random * n) + 1;
}

function greet(msg="Hello", person="World"){
    console.log(`${msg}, ${person} !`);
}

