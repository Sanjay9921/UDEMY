//Alternates to getElement(s)By(Tag/Class/Id)
document.querySelector("p");//Alt: getElementsByTagName
document.querySelector("#banner");//Alt: getElementsById
document.querySelector(".square");//Alt: getElementsByClass

document.querySelector("img:nth-of-type(2)");//img.square

document.querySelector("a[title='Java']");//attr title here

//querySelectorAll
document.getElementsByTagName("p");//returns an HTML Collection of all P tags
document.querySelector("p");//first matching one
document.querySelectorAll("p");//gets all matching ones - Node List, neither a collection nor an array

document.querySelectorAll("p a");


//Creating links
const links = documents.querySelectorAll("p a");
for(let link of links){
    console.log(link.href);//anchor tag source
}