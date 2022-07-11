const newImg = document.createElement("img");
newImg.src = "https://unsplash.com/photos/pi4a3mucMEA";
document.body.appendChild(newImg);
newImg.classList.add("square");


const newH3 = document.createElement("h3");
newH3.innerText = "I am new !";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("i am happy bottom text");
//p.appendChild("i am not happy top text");


//Prepend
const newB = document.createElement("b");
newB.append("Am I happy ? ");
p.prepend(newB);//adds it as the first child

//insertAdjacentElement
const h2 = document.createElement("h2");
h2.append("I might be happy");

const h1 = document.createElement("h1");
h1.insertAdjacentElement("afterend", h2);

//after
const h3 = document.createElement("h3");
h2.innerText = "I am h3";
h1.after(h3);
