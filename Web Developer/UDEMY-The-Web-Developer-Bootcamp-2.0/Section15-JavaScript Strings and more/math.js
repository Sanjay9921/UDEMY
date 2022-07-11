const pi = Math.PI;

let x = Math.floor(23.99999);
let y = Math.ceil(23.99999);

//Random
let random = Math.random();

//Ranged Random Number
//Q. Generate a random number between 1 and 10

//Sol1
const step1 = Math.random;
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3+1;

//Sol2
Math.floor(Math.random() * 10)+1;