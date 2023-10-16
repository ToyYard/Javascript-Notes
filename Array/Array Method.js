'use strict';

const penPrice = [25, 45, 69, 32, 45, 85, 35, 28, 54, 78];

// Some Method.
penPrice.some(function (data) {
  return data > 50;
});

// Every Method.
penPrice.every(function (data) {
  return data > 0;
});

// Flat Method.
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1.flat()); // Here, Default deep arguement level is 1.

const arr2 = [
  [1, 2, 3],
  [4, [5, 6]],
  [[7, [8, 6]], 5],
];
console.log(arr2.flat(3)); // Here, Deep arguement level is 3.

// Flat Map Method.
/*
   First apply map method then apply flat method on created array by map.
*/
arr1.flatMap(function (data) {
  return data;
});

// Fill Method.
/*
-> If we fill only one number in this type of array. That means we 
   create a array whose length is equal to that number.
-> Fill method parameter meaning respectively X.fill(Element, Start_Index(), End_Index());
-> Fill method also work with normal array.
*/
const x = new Array(9);
x.fill(1, 3, 7);
console.log(x);

// Working same as fill method with another idea.
const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y);

const z = Array.from({ length: 7 }, () => 1);
console.log(y);

// Convert node list into array.
const newArray = Array.from(document.querySelectorAll('.year'), year =>
  Number(year.textContent)
);
console.log(newArray);

// Another way to convert node list into array. But it's need to fix.
const newArray2 = [...document.querySelectorAll('.year')];
console.log(newArray2);
