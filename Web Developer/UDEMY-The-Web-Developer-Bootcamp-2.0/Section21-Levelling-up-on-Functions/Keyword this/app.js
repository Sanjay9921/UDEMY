const cat = {
    name: "Fluffy",
    color: "grey",
    breed: "random",
    meow(){
        console.log("Meow.");
        //console.log("This is: ",this);
        console.log(`${this.name} says MEOW`);
    }
}

const meow2 = cat.meow;
//meow2() //undefined

//window //huge object - uncomment LOC7 and write meow2() and observe

