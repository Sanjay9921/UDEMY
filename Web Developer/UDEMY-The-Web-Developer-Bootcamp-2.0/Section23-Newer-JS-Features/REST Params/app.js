//Arguements Objects

function sumReduce(...nums){
    return nums.reduce((total, x) => total+x);
}

//function sumArr(){//no args written here -> pass any args 
    //console.log(arguments);

    //arguements is not an array
    //return arguments.reduce((total, x) => total + x);
//}

function raceResults(gold, silver, ...others){
    console.log(`Gold Medal to : ${gold}`);
    console.log(`Silver Medal to : ${silver}`);
    console.log(`Participation Medals to : ${others}`);
}

//raceResults("sanjay","prabhu","sean","probe");



