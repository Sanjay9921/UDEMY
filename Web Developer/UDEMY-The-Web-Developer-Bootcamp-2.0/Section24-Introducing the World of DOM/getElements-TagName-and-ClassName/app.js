//1. getElementsByTagName
//not case sensitive 
//HTML Collection
document.getElementsByTagName("img");

const allImages = document.getElementsByTagName("img");
allImages[0];
console.dir(allImages[1]);

allImages.length;//Not an Array but an iterable HTML Collection

//TASK--View the src of the images

//Iterable HTML Collection
//NOT an ARRAY!!!
for(let img of allImages){
    console.log(img.src);

    //Manipulating the dom objects
    //img.src = "https://en.wikipedia.org/wiki/File:Steins;Gate_0_anime.png";
}

document.getElementsByTagName("p");
document.getElementsByTagName("div");
document.getElementsByTagName("b");
document.getElementsByTagName("a");

//-----------------------------------------------------------------------
//1. getElementsByClassName
//HTML Collection

const sqaureImages = document.getElementsByClassName("square");
for(let img of sqaureImages){
    console.log(img.src);

    //Manipulating the dom objects
    //img.src = "https://en.wikipedia.org/wiki/File:Steins;Gate_0_anime.png";
}


