Math.max(1,2,3,4,5);//5

const nums = [1,2,3,4,5];
Math.max(nums); //NaN

Math.max(...nums);//5

console.log(..."hello");//h e l l o
console.log("h","e","l","l","o");//h e l l o

const nums1 = [1,2];
const nums2 = [3,4];
const numsAll = [...nums1, ...nums2];

