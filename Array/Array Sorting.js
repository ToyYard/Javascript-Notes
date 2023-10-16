'use strict';

// Array Sorting.
const student = ['Aditya', 'Ravi', 'Kundan', 'Vishal', 'Sachin'];
student.sort();
console.log(student);

const mathAnswer = [25, 45, -67, 69, 32, -26, -46, 45, 85];
mathAnswer.sort();
console.log(mathAnswer);

const graphValue = [25, 45, -67, 69, 32, -26, -46, 45, 85];

/*
-> Return > 0, B, A (Switch Order).
-> Return <= 0, A, B (Keep Order).
*/

// Ascending Order.
graphValue.sort(function (a, b) {
  return a - b;
});
console.log(graphValue);

// Decending Order.
graphValue.sort(function (a, b) {
  return b - a;
});
console.log(graphValue);
