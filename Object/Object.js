'use strict';
const course = 'B.Tech';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Object Declaration.
const aditya = {
  firstName: 'Aditya',
  lastName: 'Kumar',
  age: 2023 - 2001,
  job: 'Web Developer',
  friends: ['Kundan', 'Ravi', 'Vishal', 'Raushan'],
  course,
  [weekDays[6]]: {
    open: '4 pm',
    close: '8 pm',
  },
  // Inside the object any function called method.
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

// Extract information from object.
aditya.age;
aditya['age'];

// Add some new information in object.
aditya.location = 'Varanasi';
aditya['emailId'] = 'adityakumar05jan@gmail.com';

// Function Calling.
aditya.calcAge(2001);

// Create completely new object at first level.
const aditya1 = Object.assign({}, aditya);

// Changes apply only in aditya1 object.
aditya1.location = 'Patna';

/*
   Here changes apply on the both object because 
   friends data is not a first level data.
*/
aditya.friends.push('Sachin');
aditya1.friends.push('ritik');
console.log(aditya, aditya1);

/****************Destructuring Objects*****************/

const restaurant = {
  name: 'Chennai Express',
  shopLocation: 'Patna',
  openHour: {
    mon: { open: '8:30am', close: '8:30pm' },
    wed: { open: '9:30am', close: '9:30pm' },
    fri: { open: '10:30am', close: '10:30pm' },
  },
  categories: ['Veg', 'Non-veg', 'Indian', 'American'],
  starterMenu: [
    'Rasgulla',
    'Paneer-Tikka',
    'Soup',
    'Pani-puri',
    'Samosa',
    'Chat',
  ],
  mainMenu: ['Pasta', 'Pizza', 'Burger', 'Dosa'],
  order: function ({ index1, index2 }) {
    return [this.starterMenu[index1], this.starterMenu[index2]];
  },
};

// Function calling destructuring method.
restaurant.order({ index2: 0, index1: 2 });

// Destructuring object keys.
const { name, shopLocation, openHour } = restaurant;
console.log(name, shopLocation, openHour);

// Destructuring with default Values.
const {
  mainMenu,
  price = [],
  starterMenu: starter = [],
  shopLocation: place,
} = restaurant;
console.log(mainMenu, price, starter, place);

// Mutating Variable.
let a = 10;
let b = 20;
const newAssign = { a: 15, b: 10 };
({ a, b } = newAssign);
console.log(a, b);

// Destructuring for nested Object.
const {
  mon: { open: morning, close: evening },
} = openHour;
console.log(morning, evening);

/************************Use Cases**************************/

/*
   -> Use when you need to only string type key values.
   -> Use when you need to include function(method).
   -> Use when working with JSON (can convert to map).
*/
