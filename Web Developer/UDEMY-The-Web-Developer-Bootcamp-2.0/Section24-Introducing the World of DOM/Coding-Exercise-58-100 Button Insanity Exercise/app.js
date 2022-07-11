// WRITE YOUR CODE IN HERE:

const div = document.querySelector("div");

for(let i=0;i<100;i++){
    const btn = document.createElement("button");
    btn.innerText = "Hey!";
    div.appendChild(btn);
}