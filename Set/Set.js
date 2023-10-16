'use strict';

const friends = new Set(['Ravi', 'Vishal', 'Ravi', 'Aditya', 'Ravi']);

console.log(friends);
console.log(friends.size);
console.log(friends.has('Ravi'));
friends.add('Raushan');
friends.delete('Vishal');

const array = [95, 20, 80, 40, 20, 65, 20];
const marks = [...friends];
console.log(marks);

//For Each Loop.
/*
-> In For each loop we can't use break; statements. 
-> Inside the for each loop function parameter are 
   respectively.
   (i) First parameter for set element.
   (ii) Second parameter is also represent set element.
   (iii) Third parameter for entire Set. 
*/
friends.forEach(function (friend, _) {
  console.log(friend, _);
});

/************************Use Cases**************************/

/*
   -> Use when you need to work with unique values.
   -> Use when high-performance is really important.
   -> Use to remove duplicates from arrays.
*/
