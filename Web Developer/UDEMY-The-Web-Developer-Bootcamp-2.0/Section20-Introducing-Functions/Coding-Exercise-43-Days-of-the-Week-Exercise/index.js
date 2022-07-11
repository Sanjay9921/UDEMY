// DEFINE YOUR FUNCTION BELOW:

function returnDay(n){
    if(n<1 || n>7){
        return null;
    }

    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    return days[n-1];

}