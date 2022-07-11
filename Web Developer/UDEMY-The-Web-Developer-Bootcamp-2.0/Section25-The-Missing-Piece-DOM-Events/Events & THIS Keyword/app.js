const colorFunc = () => {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

//Buttons
const buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("click", function(){
        button.style.backgroundColor = colorFunc();
    });
}

const h1s = document.querySelectorAll("h1");

for(let h1 of h1s){
    h1.addEventListener("click", function(){
        h1.style.backgroundColor= colorFunc();
        h1.style.color = colorFunc(); 
    })
}


