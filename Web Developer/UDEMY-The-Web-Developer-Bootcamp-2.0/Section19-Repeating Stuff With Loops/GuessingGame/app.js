let maxNum = parseInt(prompt("Enter maximum number: "));
while(!maxNum){
    maxNum = parseInt(prompt("Enter VALID maximum number: "));
}

const target = Math.floor(Math.random() * maxNum) + 1;
console.log(target);

let guess = parseInt(prompt("Enter your 1st guess: "));
let attempts = 1;

while(parseInt(guess) !== target){
    if(guess === "q")
        break;

    attempts++;
    if(guess > target){
        guess = prompt("Too high!");
    }
    else{
        guess = prompt("Too low!");
    }
}

if(guess === "q"){
    console.log("Your soul is mine!");
}
else{
    console.log(`Hi! Peter Griffin here. You got it! It took you ${attemps} guesses. Lol. `);
}




