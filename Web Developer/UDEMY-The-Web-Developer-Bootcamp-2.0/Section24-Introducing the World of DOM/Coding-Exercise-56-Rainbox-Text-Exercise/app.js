const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const source = document.querySelectorAll("span");

let count=0;
for(let src of source){
    src.style.color = colors[count++];
}