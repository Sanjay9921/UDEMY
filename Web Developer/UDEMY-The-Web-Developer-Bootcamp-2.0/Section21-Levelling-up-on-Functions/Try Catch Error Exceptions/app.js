try{
    hello.toUpperCase();
}catch{
    console.log("Error.");
}

console.log("After error handling.");

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3)); 
    }catch{
        console.log("Enter strings bruv.");
    }
    
}