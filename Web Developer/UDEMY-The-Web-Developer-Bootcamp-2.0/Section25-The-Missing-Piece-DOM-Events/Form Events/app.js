const form = document.querySelector("#shelterForm");

const input = document.querySelector("#catName");

const list = document.querySelector("#cats");

form.addEventListener("submit", function(evt){
    evt.preventDefault();//page does not go to /shelter
    //Zip codes search - see if the xyz company delivers to your zip code or not
    //if yes then you are re-directed to the next page
    //if no, you get a console.log msg as the one below
    
    //console.log(input.value);
    const catName = input.value;
    const newLi = document.createElement("LI");
    newLi.innerText = catName;
    console.log(newLi);

    list.append(newLi);

    input.value = "";
});

