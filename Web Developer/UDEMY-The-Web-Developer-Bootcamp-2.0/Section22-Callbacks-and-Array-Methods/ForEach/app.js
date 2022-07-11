const numbers = [1,2,3,4,5,6,7,8,9,10];

function print(elem){
    console.log(elem);
};

//print(numbers[0])
//print(numbers[1])

//numbers.forEach(print);

numbers.forEach(function(elem){
    console.log(elem);
});

numbers.forEach(function(eleme){
    if(elem%2==0){
        console.log(elem);
    }
});

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

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})



