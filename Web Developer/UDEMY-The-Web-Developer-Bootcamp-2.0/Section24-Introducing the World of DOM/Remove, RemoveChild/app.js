const firstli = document.querySelector("li");
const ul = firstli.parentElement;
ul.removeChild(firstli);

//Alternative to the above step
const b = document.querySelector("b");
b.parentElement.removeChild(b);

const img = document.querySelector("img");
img.remove();
img.parentElement.removeChild(img);