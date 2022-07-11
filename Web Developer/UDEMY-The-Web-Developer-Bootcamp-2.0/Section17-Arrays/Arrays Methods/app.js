let movieLine = ["tom", "nancy"];
//movieLine[3] = "pablo" Valid but movieLine[2]=empty/undefined
movieLine[2] = "pablo";

//Important Methods
//push, pop, shift, unshift

//Push - add to end
movieLine.push("Oliver");
movieLine.push("Harry","Ron");

//Pop - remove from end
let poppedElement = movieLine.pop();
console.log(poppedElement);

//Shift - remove from start
movieLine.shift();

//Unshift - add to start
movieLine.unshift("Tom");

/*-----------------------------------------*/
//More Methods
//concat, includes, indexOf
//join, reverse, slice
//splice, sort


//1. concat
let arr1 = [1,2,3,4,5];
let arr2 = ["one","two","three","four","five"];

let arr3 = arr1.concat(arr2);//(10) [1, 2, 3, 4, 5, 'one', 'two', 'three', 'four', 'five']

//2. includes
arr2.includes("two") //true
arr2.includes("Two") //false

//3. indexOf
arr2.indexOf("two"); //1
arr2.indexOf("Two"); //-1

//4. join
arr1 = [1,2,3,4,5]
arr3 = [6,7,8,9,10]

arr1.join(arr3);//'16,7,8,9,1026,7,8,9,1036,7,8,9,1046,7,8,9,105'

str1 = ["I","am","simga"]
str2 = ["Patrick","Bateman"]
str1.join(str2); //'IPatrick,BatemanamPatrick,Batemansimga'


//5. reverse
arr1.reverse(); //(5) [5, 4, 3, 2, 1]

//Note that we didn't put arr1 = arr1.reverse()
//but the reverse operation still happened
//Needs validation

//Reverse the arr1 without chaning the original order/mutating the og
//let arrTemp = arr1.slice().reverse();

//6. slice
arr1.slice(2,4);//(2) [3, 2] -. gives deleted array as result

//Here, arr1 will remain as it was (before slicing)
//unlike the .reverse() operator shown above

const months = ["Jan","March","April","June"];
months.splice(1,0,"Feb");//inserts "Feb" at index 1

//7. splice
arr1.splice(2,4); //(3) [3, 2, 1]
//arr1 is now [5,4]

//similar to reverse()
//we didn't put arr1 = arr1.splice(2,4);

//8. sort
arr3 = [5,2,3,1,2]; //(5) [5, 2, 3, 1, 2]
arr3.sort(); //(5) [1, 2, 2, 3, 5]
//arr3 is now [1, 2, 2, 3, 5]

//similar to reverse()
//we didn't put arr1 = arr1.splice(2,4);