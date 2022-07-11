function callTwice(func){
    func();
    func();
}

//callTwice(1) //error - 1 is not a function

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

callTwice(rollDie());