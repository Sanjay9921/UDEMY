let input = prompt("What would you like to do?");

const todos = ["Collect Chicken Eggs",
                "Clean Litter Box"];

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("********************");

        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }

        console.log("********************");
    }
    else if(input === "new"){
        const newToDo = prompt("OK, what is the new todo?");
        todos.push(newToDo);
        
        console.log(`${newToDo} added to the list!`);
    }
    else if(input === "delete"){
        const idx = parseInt(prompt("OK, enter index to delete: "));
        if(!Number.isNaN(idx)){
            const deleted = todos.splice(idx, 1);
            console.log(`OK, delted ${deleted[0]}`);
        }
        else{
            console.log("Unknown index!");
        }  
    }
    input = prompt("What would you like to do?");
}

console.log("Betrayal detected... alright you are free now.")