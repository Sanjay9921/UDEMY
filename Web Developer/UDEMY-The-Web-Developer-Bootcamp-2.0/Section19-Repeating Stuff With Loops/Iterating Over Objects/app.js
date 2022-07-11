const futureGadgetLab = {
    okabe:1,
    mayuri:2,
    daru:3,
    kurisu:4,
    moeka:5,
    ruka:6,
    feyris:7,
    suzuha:8
}

//For in
for(let person in futureGadgetLab){
    //console.log(person);
    console.log(`${person} is lab number 00${futureGadgetLab[person]}`);
}

let total=0;
let labTotal = Object.values(futureGadgetLab);
for(let labTots of labTotal){
    total += labTots;
}

console.log(total);