// DEFINE YOUR FUNCTION BELOW:

function capitalize(str){
    if(str.length<1){
        return "";
    }

    let newStr = str.slice(0,1).toUpperCase();
    newStr += str.slice(1);

    return newStr;
}