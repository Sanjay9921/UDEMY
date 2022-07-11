const numbers = [1,2,3,4,5,6];

numbers.filter(n => {
    return n===4;
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

const goodMovies = movies.filter(movie => {
    return movie.score > 95;
})

//Filter -> Map
const altGoodMovies = movies.filter(m => m.score > 95);//Implicit return method
const goodTitles = altGoodMovies.map(m => m.title);

//Filter -> Map Method ii
movies.filter(m => m.score > 95).map(m => m.title);