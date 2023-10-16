'use strict';

/********************Function Declaration*******************/

/* 
   The JavaScript interpreter hoists the entire function 
   declaration to the top of the current scope, so that
   function can be call before the declaration.
*/
function add(num1, num2) {
  console.log('Add both number.');
  return num1 + num2;
}

// Function calling.
add(5, 8);

// Function call and print return value.
console.log(add(5, 8));

/* 
   Here, We store return value of add function in addition 
   variable. After that we can print only return value.
*/
const addition = add(5, 8);
console.log(addition);

/***********************************************************/

/********************Function Expression*******************/

const subtract = function (num1, num2) {
  console.log('Sbtract num2 from num1.');
  return num1 - num2;
};

// Working same as function declaration.
subtract(12, 8);
console.log(subtract(12, 8));
const subtraction = subtract(12, 8);
console.log(subtraction);

/***********************************************************/

/****************Arrow Function Expression*****************/
/* 
-> Arrow function expression is a alternative of function 
   expression.
-> Arrow functions are always unnamed. If the arrow function
   needs to call itself, use a named function expression 
   instead.   
-> All valid form of arrow function expression are given 
   below.
*/
(function (num1, num2) {
  return num1 * num2;
});

(num1, num2) => {
  return num1 * num2;
};

(num1, num2) => num1 * num2;

/*
   The braces can only be omitted if the function directly 
   returns an expression. If the body has additional lines 
   of processing, then braces are required and also return 
   keyword.
*/
(num1, num2) => {
  console.log('Function expression.');
  return num1 * num2;
};

/* 
   If only one arguement pass in the arrow function expression.
   Then we can also remove parentheses.
*/
num => num * 2;

num => {
  console.log('Function expression.');
  return num * 5;
};

/* 
   You can also assign the arrow function to a 
   variable.
*/
let divide = num => num / 2;

/* 
-> Default value of a parameter in a function will be undefined. 
-> if we initialize of a parameter variable then we pass undefined in a 
   function to the respective parameter then it's go with initialized value.
*/

/******************Pass object in a function.*******************/

/*
   When we pass object in a function. Then we can change original object 
   with the help of parametr variable as well as person variable.
*/
const person = {
  name: 'Aditya Kumar',
  passport: 24739479284,
};
const checkIn = function (passenger) {
  passenger.name = 'Mr. ' + passenger.name;
  person.passport = 24739479280;
};
checkIn(person);
console.log(person);

/******************Higher order function.***********************/

/* 
-> First class functions are simply values. 
-> Functions are just another "type" of object.   
-> Higher-Order Function: A function that receives another 
   function as an argument, that returns a new function, or both.
*/

// First class function.
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase, ...others].join(' ');
};

// Higher order function with receiving another function as a arguement.
const transformer = function (str, fn) {
  console.log(`Original Sring: ${str}`);
  console.log(`Transfored Sring: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);

// Higher order function with returning another function.
const startingName = function (firstName) {
  return function (lastName) {
    console.log(`${firstName} ${lastName}`);
  };
};
const fullName = startingName('Aditya');
fullName('Kumar');
startingName('Aditya')('Kumar');

// Same function written with the help of arrow function.
const myName = firstName => lastName => console.log(`${firstName} ${lastName}`);
myName('Aditya')('Kumar');

/********************Imediately Invoked Function**********************/

// It is use for define scope of the variable. And also it's run immediately.
(function () {
  console.log('Hello Learner!');
})();

(() => console.log('Hii Learner!'))();

// We have another way to define scope of the variable.
{
  const teacher = 'May be you understand!';
  console.log(teacher);
}
