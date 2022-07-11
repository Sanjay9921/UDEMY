// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");

form.addEventListener("submit", function(evt){
    evt.preventDefault();

    const productName = document.querySelector("#product").value;
    const qtyNumber = document.querySelector("#qty").value;
    const newLi = document.createElement("LI");

    newLi.innerText = `${qtyNumber} ${productName}`;
    
    list.appendChild(newLi);
    form.elements.product.value = "";
    form.elements.qty.value = "";
});

