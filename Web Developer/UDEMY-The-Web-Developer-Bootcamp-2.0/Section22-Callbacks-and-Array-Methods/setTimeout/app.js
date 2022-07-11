console.log("Hello!");
setTimeout(()=>{
    console.log("Are you there?");
}, 3000)//3000 ms 
console.log("Word. Bye.");


//Infinite Loop
// setTimeout(()=>{
//     console.log(Math.random());
// }, 2000);

const id = setTimeout(()=>{
    console.log(Math.random());
}, 2000);

clearInterval(id);
