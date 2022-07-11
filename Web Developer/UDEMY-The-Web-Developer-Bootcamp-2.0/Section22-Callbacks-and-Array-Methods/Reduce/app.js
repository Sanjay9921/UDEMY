//summing an array

const arr = [1,2,3,4,5];

arr.reduce((accumulator, currValue)=>{
    return accumulator + currValue;
});

arr.reduce((sum, num) => {
    return sum + num, 100;
});//100 + 1 + ...5




//1: total=9.99, price=8.99
//2: total=9.99+8.99=18.98, price=5.99
//...

const prices = [9.99, 8.99, 5.99, 4.50];
prices.reduce((total, price)=>{
    return total+price;
})

const minPrice = prices.reduce((min, price)=> {
    if(price > min){
        return price;
    }
    return min;
})


