'hi'==='hi';//true
['hi','bye'] === ['hi','bye'];//false
[1] === [1];//false
[1] == [1];//false
[] == [];//false

let arr1 = [1,2,3];
let arr2 = arr1;//copying the arr1
arr1.push(4);//arr1=[1,2,3,4]
//arr2=[1,2,3,4] also
arr1 === arr2;//true (Unlike LOC 2)