let radius = 0;
if (radius > 0){
    const PI = 3.14;
    let msg = "PI!";
}

console.log(radius);
//console.log(PI);//block scope limited so error would be thrown

for(let i=0;i<5;i++){
    let msg = "inside for loop!";
    console.log(msg);
}

//console.log(msg);//block scope limited so error would be thrown

//var keyword
for(var i=0;i<5;i++){
    var msg = "inside for loop!";
    console.log(msg);
}

console.log(msg);//will work with var

