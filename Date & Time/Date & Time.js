'use strict';
// This code give us current date & time.
const now = new Date();
console.log(now);

/* When we pass only 0 as a parameter in new Date(); function. then it's 
   gives (Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)). This 
   is a default or starting time.
*/
console.log(new Date(0));

/* When we pass single arguement as a parameter in new Date(); function. 
   Then function treat arguement as a milisecond. That means function 
   add milisecond in starting time and show the new date and time.
*/
console.log(new Date(2000));

/* console.log(new Date(year, month, date, hour, minutes, second)); When 
   we leave any arguement then it's takes default value for that place.
*/
const future = new Date(2035, 10, 5, 10, 10, 10);
console.log(future);

// Methods for extracting data from future object.
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// It's gives time in international standard format.
console.log(future.toISOString());

/* It's gives starting to future time in milisecond.
   Which is 2077850410000 milisecond.
*/
console.log(future.getTime());
console.log(new Date(2077850410000));

// Methods for updating data in future object.
future.setFullYear(2040);
future.setMonth(11);
future.setDate(15);
future.setHours(5);
future.setMinutes(5);
future.setSeconds(5);
console.log(future);

// We can pass date and time in string format in new Date function.
const movementsDates = [
  '2019-11-18T21:31:17.178Z',
  '2019-12-23T07:42:02.383Z',
  '2020-01-28T09:15:04.904Z',
  '2020-04-01T10:17:24.185Z',
  '2020-05-08T14:11:59.604Z',
  '2020-05-27T17:01:17.194Z',
  '2020-07-11T23:36:17.929Z',
  '2020-07-12T10:51:36.790Z',
];
console.log(new Date(movementsDates[0]));

// Method for date formating.
const pastTime = new Date(2020, 10, 5, 10, 10, 10);
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};
console.log(new Intl.DateTimeFormat('en-IN', options).format(pastTime));

// How to set timer and clear.
const foodMenu = ['pizza', 'burger'];
const foodTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`You are to late in bringing ${ing1} or ${ing2}`);
  },
  2000,
  ...foodMenu
);
if (foodMenu.includes('pizza')) {
  clearTimeout(foodTimer);
}

// How to set a time interval for repeating a particular task.
let i = 0;
const table = setInterval(function () {
  i = i + 1;
  if (i >= 5) {
    clearInterval(table);
  }
  console.log(i);
}, 1000);
