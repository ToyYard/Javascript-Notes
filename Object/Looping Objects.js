'use strict';

const student = {
  firstName: 'Aditya',
  lastName: 'Kumar',
  age: 2023 - 2001,
  job: 'Web Developer',
  friends: ['Kundan', 'Ravi', 'Vishal', 'Raushan'],
  // Inside the object any function called method.
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

/* 
   First we store (key or value) in an array then we 
   can easily apply for loop on this.
*/

// All key are store in arr1 array.
const arr1 = Object.keys(student);
console.log(arr1);

// All value are store in arr2 array.
const arr2 = Object.values(student);
console.log(arr2);

/*
   All key & value are store in array respectively. Then store
   in arr3 array.
*/
const arr3 = Object.entries(student);
console.log(arr3);
