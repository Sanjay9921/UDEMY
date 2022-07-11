/*const h2 = document.querySelector("h2");
h2.setAttribute("class");
h2.setAttribute("class","purple");
h2.setAttribute("class","border");

let currClasses = h2.getAttribute("class");
h2.8setAttribute("class",`${currClasses} purple`);*/

//ClassList

const h2 = document.querySelector("h2");
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("border");
h2.classList.contains("purple");

h2.classList.toggle("purple");
h2.classList.toggle("purple");
h2.classList.toggle("purple");
h2.classList.toggle("purple");
h2.classList.contains("purple");

h2.getAttribute("class");//purple
