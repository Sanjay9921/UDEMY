const password = prompt("Please enter a password...");

// Password must be 6+ characters
if(password.length >= 6){
    console.log("Long enough :)");
}
else{
    console.log("Password is short :( Atleast 6 characters pls!");
}

// Password cannot include space
if(password.indexOf(" ") === -1){
    console.log("Good job bruv. No space.")
}
else{
    console.log("Bruv space detected, remove that cringe. Now.")
}

