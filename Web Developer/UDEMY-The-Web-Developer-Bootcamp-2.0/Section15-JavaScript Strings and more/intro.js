let userName = "sean probe";
let password = 'admin123';

let character = username[2];
let lengthOfStr = username.length;

let concat = userName + password;

//Built in Methods
let anotherLength = "admin123".length;

//Upper Case
let caps = userName.toUpperCase();

//Lower Case
let low = userName.toLowerCase();

//Trim
let trimmedStr = " mein name ist sean probe .".trim();

//Index of
let idx = userName.indexOf('sea');//0
let nidx = userName.indexOf('z');//-1

//Slice
let slicedStr = userName.slice(0,3);

//replace
let replacedStr = userName.replace("pro","cro");//sean crobe 

//repeat
let repeatStr = userName.repeat(2);//sean probesean probe

//null
let loggedInUser = null;
loggedInUser = 'Sean Probe';
