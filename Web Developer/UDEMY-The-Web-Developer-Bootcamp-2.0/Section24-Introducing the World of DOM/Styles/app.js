const h1 = document.querySelector("h1");
h1.style;
h1.style.color;//inline styles only not css sheet

h1.style.color = "blue";//inline style
h1.style.fontSize = "3em";
h1.style.border = "2px solid pink";

//Inline Styling
const allLinks = document.querySelectorAll("a");
for(let link of allLinks){
    //link.style.color = "cyan";
    link.style.color = "rgb(0,108,134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

//h1.style,fontSize;
window.getComputedStyle(h1);
window.getComputedStyle(h1).color;//"rgb(0,108,134)"
window.getComputedStyle(h1).fontFamily;
window.getComputedStyle(h1).margin;



