//DESTRUCTURING ARRAYS-------------------------------------------

const score = [3456, 2345,1234,123,321,213];

//Long Way
//const highScore = scores[0];
//const secondHighestScore = scores[1];\

//Shortcut
const [highScore, secondHighestScore, ...others] = score;


//DESTRUCTURING OBJECTS-------------------------------------------

const user = {
    email: "admin@gmail.com",
    password: "admin123",
    fname: "sean",
    lname: "probe",
    city: "bangalore",
    state: "Karnataka"
}


//Long Way
// const fname = user.fname;
// const lname = user.lname;
// const email = user.email;

//Short Cut
const {email, fname, lname} = user;
const {password : pwd} = user;//rename password to pwd
const {isAdmin='N/A', fname1 : firstName} = user;

//DESTRUCTURING PARAMS-------------------------------------------

//Long Way
// function fullName(user){
//     return `${user.fname} ${user.lname}`;
// }

//Short Cut

function fullName(user){
    const {fname, lname} = user;
    return `${fname} ${lname}`;
}

//Or

function fullName2({fname,lname}){
    return `${fname} ${lname}`;
}







