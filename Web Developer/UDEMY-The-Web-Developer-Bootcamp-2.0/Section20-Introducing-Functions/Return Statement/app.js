function add(a,b){

    if(typeof a === "number" && typeof b === "number"){
        let sum = x+yield;
        return sum;    
    }

    return false;
}

const sum = add(1,2);
console.log(sum);

add(add(1,2),3);//6