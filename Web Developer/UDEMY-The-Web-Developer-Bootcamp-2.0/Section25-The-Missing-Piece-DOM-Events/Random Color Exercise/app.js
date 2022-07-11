const colorFunc = () => {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

//H1
const h1 = document.querySelector("h1");

//Button
const button = document.querySelector("button");
button.addEventListener("click", function(){
    const newColor = colorFunc();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});



