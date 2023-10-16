'use strict';

const student = new Map([
  ['name', 'Aditya Kumar'],
  [true, 'Correct'],
  [false, 'Try again!'],
  [[20, 25], 'Marks'],
]);

console.log(student);
console.log(student.keys());
console.log(student.values());
console.log(student.get(true));
console.log(student.has([20, 25]));
student.delete('name');
console.log(student.size);
// student.clear();

student.set(0, 'Aryabhatt');
student.set(document.querySelector('p'), 'Computer Science');
/* 
   When we want to set array as a key value. Then, 
   First we store array in a variable afterthat 
   we use varaible at the place of key. */
const arr1 = [40, 45];
student.set(arr1, 'B.Tech');

/*
   All key & value are store in array respectively. Then store
   in arr array.
*/
const arr = [...student];
console.log(arr);

//For Each Loop.
/*
-> In For each loop we can't use break; statements. 
-> Inside the for each loop function parameter are 
   respectively.
   (i) First parameter for key value.
   (ii) Second parameter for key.
   (iii) Third parameter for entire map. 
*/
student.forEach(function (keyValue, key) {
  console.log(key, keyValue);
});

/************************Use Cases**************************/

/*
   -> Use When you need to Key can have any data type.
   -> Use when you need to compute size & Better performance.
*/
