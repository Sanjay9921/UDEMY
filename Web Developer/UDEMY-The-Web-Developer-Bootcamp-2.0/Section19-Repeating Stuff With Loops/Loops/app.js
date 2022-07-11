//first for loop

for(let i=1;i<=10;i++){
    console.log("Cruel Summer");
}


//Looping over Arrays
let arr = [11,22,33,44,55]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
} 

//For of 

for(let i of arr){
    console.log(i);
}

//For in
const futureGadgetLab = {
    okabe:1,
    mayuri:2,
    daru:3,
    kurisu:4,
    moeka:5,
    ruka:6,
    feyris:7,
    suzuha:8
}

for(let person in futureGadgetLab){
    //console.log(person);
    console.log(`${person} is lab number 00${futureGadgetLab[person]}`);
}


for(let char of "friyay cringe here we go!"){
    console.log(char);
}

//Nested Loops
//Based pattern - check this out
const n = 4;
for(let i=0;i<n;i++){
    for(let j=0;j<n-1-i;j++){
        console.log(" ");
    }

    for(let j=0;j<(2*i+1);j++){
        if(j%2==0){
            console.log("*");
        }
        else{
            console.log(" ");
        }
    }

    for(let j=0;j<n-1-i;j++){
        console.log(" ");
    }

    console.log();
}

//While loop
let count = 0;

while(count < 10){
    console.log(`Count is: ${count}`);
    count+=1;
}

const SECRET = "BabyHippo";
let counter = 3;

let guess = prompt("Enter the secret code: ");
while(guess !== SECRET){
    guess = prompt("Enter the secret code: ");
    if(guess !== SECRET && counter>0){
        counter--;
        console.log(`You have ${counter} tries left!`);
    }else{
        break;
    }
}

console.log("Congrats. You got it. Yay.");


