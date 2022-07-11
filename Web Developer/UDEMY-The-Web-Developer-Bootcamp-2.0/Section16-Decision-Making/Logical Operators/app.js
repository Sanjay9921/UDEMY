//AND &&

/*
1<=4 && 'a' === "a";//true
9 > 10 && 9 >= 9;//false
"abc".length === 3 && 1+1 === 3;//false
*/

const password = prompt("Enter your password: ");

if(password.length >= 6 && password.indexOf(" ") === -1){
    console.log("Valid Password!");
}
else{
    console.log("Incorrect Format for password!");
}

//OR ||

/*
1 !== 1 || 10 === 10 //true
10/2 === 5 || null //true
0 || undefined //false
*/

const age = 90;
if(age >=0 && (age < 5 || age>=65)){
    console.log("Frei Fahrkarte!");
}
else if(age < 10){
    console.log("Die Fahrkarte kostet zehn euro!")
}
else if(age < 65){
    console.log("Die Fahrkarte kostet zwanzig euro!");
}
else{
    console.log("Bruder, du bist auf high!");
}

//NOT !

/*
!null //true
!(0===0) //false
!(3<=4) //false
*/

const firstName = promt("Wie heiβen sie?");

if(!firstName){
    console.log("VERSUCHEN SIE ES NOCHMAL!")
}
