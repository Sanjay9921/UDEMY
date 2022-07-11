let totalEggs = 0;//Global variable

function collectEggs(){
    let totalEggs = 6;//function scope unless it has global scope as defined above
    console.log(totalEggs);
}

console.log(totalEggs);//0
collectEggs();
console.log(totalEggs);//6







