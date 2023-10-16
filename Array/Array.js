'use strict';

const student = ['Aditya', 'Kundan', 'Ravi', 'Vishal'];

// Help to find length of array.
student.length;

// Replace value at index 3.
student[3] = 'Raushan';

// Adding value at starting position.
student.unshift('Sachin');
// Adding value at ending position.
student.push('Vishal');

// Removing value from starting position.
student.shift();
// Removing value from ending position.
student.pop();

// Help to find index of this value.
student.indexOf('Aditya');
console.log(
  student.findIndex(function (bestFriend) {
    return bestFriend === 'Ravi';
  })
);

// Check this value available in this array or not.
student.includes('Aditya');

// Check data type.
typeof student[2];

// Nested array with different types of value
const mixArray = [
  'B.Tech',
  1995,
  ['Web DEvloper', 'You Tuber', 5000],
  true,
  2000,
  8000,
  false,
  'Hii',
];

/*******************Destructuring Arrays*******************/

// Third way of array declaration.
const birthYear = new Array(2001, 2000, 2002);

const a = birthYear[0];
const b = birthYear[1];
const c = birthYear[2];
const [x, y, z] = birthYear;

const restaurant = {
  name: 'Chennai Express',
  location: 'Patna',
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
  order: function (index1, index2) {
    return [this.starterMenu[index1], this.starterMenu[index2]];
  },
};

// Conseucative destructuring.
let [person1, person2] = restaurant.categories;
console.log(person1, person2);

// Destructuring with skip index(1) of array element.
[person1, , person2] = restaurant.categories;
console.log(person1, person2);

/* 
   // Here we perform reverse.
   let reverse = person1;
   person1 = person2;
   person2 = reverse;
   console.log(person1, person2);

   // Second way of reversing.
   [person1, person2] = [person2, person1];
   console.log(person1, person2);
*/

// Destructuring with the help of method.
[person1, person2] = restaurant.order(1, 3);
console.log(person1, person2);

// Nested Destructuring.
const income = [20, 15, [14, 12]];
const [i, , [j, k], t = 10] = income;
console.log(i, j, k, t);

/*********************************************************/

/*******************Spread Operator***********************/

// How it's work.
const rollNumber = [25, 45, 69, 32, 45, 85];
console.log(...rollNumber);

const newRollNumber = [20, ...rollNumber, 45, 85, ...income];
console.log(newRollNumber);

// It's seperate all the charecter of a string value.
console.log(...restaurant.name);

// When we use spread operator as a rest element then it's must be last element.
const [u, v, ...others] = [26, ...rollNumber, 12];
console.log(u, v, others);

/************************Use Cases**************************/

/*
   -> Use when you need ordered list of values (might contain duplicates).
   -> Use when you need to manipulate data.
*/

/***********************Array Methods***********************/

const penPrice = [25, 45, 69, 32, 45, 85, 35, 28, 54, 78];

/*
//Slice method for array.
console.log(penPrice.slice(2)); // Print [index(2), index(pen.length-1)].
console.log(penPrice.slice(3, 7)); // Print [Index(3), Index(6)].
console.log(penPrice.slice(-2));
console.log(penPrice.slice(1, -5));
*/

/*
// Slice method for array.
penPrice.splice(8); // Delete all the element from penPrice array. Except [index(0), index(7)].
console.log(penPrice);
penPrice.splice(3, 2); // Delete element [Index(3), Index(3+2)] from penPrice array. 
console.log(penPrice);
*/

// Reduce Method.
/*
   Reduce all array elements down to one single value. 
   For Ex- Adding all elements of array together.
*/
const totalPenPrice = penPrice.reduce(function (accumlater, data) {
  return accumlater + data;
});
console.log(totalPenPrice);

// Filter Method.
/*
   filter returns a new array containing the array elements 
   that passed a specified test condition.
*/
const filterNum = penPrice.filter(function (data) {
  return data > 65;
});
console.log(filterNum);

// Find Method.
/*
-> If condition is matched then return only 
   first condition matched element.
-> Find method return only single element.
*/
const budget = penPrice.find(function (data) {
  return data < 45;
});
console.log(budget);

// Map Method
/*
-> Map method only work with number.
-> Map returns a new array containing the result of applying 
   an operation on all original array elements. 
-> Map method return array which has same length as applied aray.
-> For every invalid iterate map method fill undefined in the 
   place of element in array .
-> Inside the map method, function parameter are 
   respectively.
   (i) First parameter for array element.
   (ii) Second parameter for array index.
   (iii) Third parameter for entire array.
*/
const table = penPrice.map(function (data, i) {
  return data * i;
});
console.log(table);

const alphabet = ['e', 'd', 'c', 'b', 'a'];

// Reverse Methos.
alphabet.reverse();
console.log(alphabet);

// Concat Method.
const numAlp = penPrice.concat(alphabet);
console.log(numAlp);

// Join Method.
console.log(alphabet.join('-'));

/***********************************************************/
