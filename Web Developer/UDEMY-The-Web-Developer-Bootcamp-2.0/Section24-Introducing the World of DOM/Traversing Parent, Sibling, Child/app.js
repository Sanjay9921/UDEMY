//Parent

const firstBold = document.querySelector("b");
firstBold;
firstBold.parentElement;
firstBold.parentElement.parentElement;
firstBold.parentElement.parentElement.parentElement;

//Children

const para = firstBold.parentElement;
para.children;
para.children[0];
para.children[0].parentElement;

//Sibling - previous and next

const firstSqImg = document.querySelector("sqaure");
firstSqImg.parentElement;
firstSqImg.previousSibling;
firstSqImg.nextSibling;
firstBold.previousElementSibling;
firstBold.nextElementSibling;