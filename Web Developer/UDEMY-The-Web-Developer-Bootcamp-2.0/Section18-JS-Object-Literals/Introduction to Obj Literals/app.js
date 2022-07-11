//FitBit example
//Key value pair

const fitBitData = {
    totalSteps:100000,
    totalKMS:100,
    avgCalorieBurn:6000,
    workoutsThisWeek:'5 of 7',
    avgGoodSleep:'2:13'
};

const person = {
    firstName: "Sean",
    lastName: "Probe"
};

console.log(person);
console.log(person["firstName"]);
console.log(person["first" + "Name"]);
console.log(person[firstName]);
console.log(person.firstName);

//Valid Keys
//All keys -> conv -> strings
//except symbols

const years = {
    1999:"Good",2020:"Alright, whats this then..."
};

console.log(years["1999"]);
console.log(years[1999]);

//Updating the obj literals
years[1999] = "Nostalgic af bruv.";

//Adding to the obj literals
years[2022] = "Things might improve, right?";
