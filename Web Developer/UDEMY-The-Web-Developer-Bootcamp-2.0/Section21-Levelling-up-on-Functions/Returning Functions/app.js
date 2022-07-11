function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("Congrats, I am a good func!");
            console.log("You win a trillion dollars (This is a scam please dont rsvp)!");
        }
    }
    else{
        return function(){
            alert("Why would you click this?");
            alert("I literally said this is a scam!");
        }
    }
}

function makeBetweenFunc(mn, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const testRange = function (num){
    return num >= 100 && num <= 200;
}

//makeBetweenFunc(100,200);

// function isBetween(num){
//     return num >= 50 && num <= 100;
// }

// function isBetween(num){
//     return num >= 1 && num <= 10;
// }