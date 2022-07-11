//Check index.html
//LOC 83 has been newly added

document.querySelector("#banner");

//Attribute Id
document.querySelector("#banner").id;
document.querySelector("#banner").id = "whoops";


//Attribute source, href
document.querySelector("#banner").src;
document.querySelector("#banner").href;

//getAttribute
const firstLink = document.querySelector("a");
firstLink.getAttribute("href");
//vs
//document.querySelector("#banner").href;

firstLink.getAttribute("title");

//setAttribute
firstLink.setAttribute("href","http://www.google.com");

//input
document.querySelectorAll("input")[1];
const input = document.querySelectorAll("input[type='text']");
input.type;
input.type = "password";
input.setAttribute("type","text");

