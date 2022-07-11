//greet() //Hi!, undefined
greet("Sanjay");
greet(123);

function greet(person){
    console.log(`Hi!, ${person}!`);
}

function greetFull(fname, lname){
    console.log(`Hi!, ${fname} ${lname}!`);
    console.log(`Hi!, ${fname} ${lname[0]}. !`);
}

greetFull("Sanjay", "Prabhu");