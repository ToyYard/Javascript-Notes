'use strict';

/*
   We doesn't need to define closures like a function
   or array. it's automatically happen in certain 
   situation. We need to only recognize it.
*/
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger.`);
  };
};

/*
   After the calling secureBooking function it will destroy
   from call stack with local variables.
*/
const booker = secureBooking();

/*
-> A closure makes a function remember all the variables 
   that existed in the enviroment in which function was 
   created.
-> When we call booker function then no local variable present
   in call stack. Because we have not defined any variable in 
   the local enviroment of booker function.
*/
booker();
booker();

// Anothe way to create closure.
let add;
const sum = function () {
  const a = 25;
  add = function () {
    console.log(a + 5);
  };
};
sum();
add();

// For checking closure variable.
console.dir(add);

// Closure also include argument of a parent function.
const subtract = function (wait, b) {
  const a = 25;
  setTimeout(function () {
    console.log(a - b);
  }, wait * 1000);
  console.log(`Wait upto ${wait} second.`);
};
subtract(2, 5);
