// const add = function (x,y) {
//     return x + y;
// }

const add = (x,y) => {
    return x+y;
}

const square = (x) => {
    return x*x;
}

const altSquare = x => {
    return x*x;
}

const rollDie = () => {
    return Math.floor(Math.random()*6) + 1;
}

//Implicit Returns
const isEven = x => {
    x%2 === 0;
}

const anotherAdd = (a,b) => a+b;

//Arrow Functions in Map
sigmaMovies = [
    {
        title: "Blade Runner 2049",
        score: 100
    },
    {
        title: "Drive 2011",
        score: 100
    },
    {
        title: "American Pyscho 2000",
        score: 95
    },
    {
        title: "NightCrawler 2014",
        score: 90
    }
]

mpvies.map(function(movie){
    return `${movie.title} - ${movie.score/10}`;
})

const newMovies = movies.map(movie=>`${movie.title} - ${movie.score/10}`);

//this = window object -> non arrow function -> traditional function
const person = {
    fname: "Viggo",
    lname: "Mortensen",
    fullName: function(){
        return `${this.fname} ${this.lname}`;
    }
}
console.log(person.fullName);//Viggo Mortensen

const person2 = {
    fname: "Viggo",
    lname: "Mortensen",
    fullName: ()=>{
        return `${this.fname} ${this.lname}`;
    }
}
console.log(person.fullName);//"undefined undefined"

const person3 = {
    fname: "Viggo",
    lname: "Mortensen",
    fullName: ()=>{
        return `${this.fname} ${this.lname}`;
    },
    shoutName: function(){
        setTimeout(()=>{
            console.log(this);
            console.log(this.fullName);
        }, 3000);
    }
}
console.log(person.fullName);//"undefined undefined"




