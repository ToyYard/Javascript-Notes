'use strict'; //Responsible for treat all js code as newer version.
/*
-> 'strict mode'; Help us to find bugs.
-> (``) Backtick is template literal in javascript.
-> Ternary operator is a expression.
-> Object is collection of method and variable.
-> Every statement end with semicolon(;).
-> Variable name start with lower case symbol dollor sign or alphabet.
-> Javascript is a dynamic programming language because here we didn't 
   need to specify data types.
-> We can change multiple data types in same variable.
-> Javascript exceute top to bottom.
-> When we check type of null value. Then it's show object but it's 
   not a object. it's a bug.
-> Type of undefined is undefined.
-> Nan: It's a invalid number.
-> Explicit Conversion: Manually convert data types.
   Implicit Conversion: Bydefault convert data types.
-> Always do manually type conversion rather than type coherican. 
   Because it's create lot's of bug.
-> Their are 5 types of falsey value: false,'',undefined, 0, Nan.
-> (==) Check equality without data types.
   For Ex: ( 95 == '95' ).
-> (===) Check equality with data types.
   For Ex: ( 95 === 95 ).
-> Var consider only function scope but in strict mode it's working
   same as let &  const.
-> This function in regular function is undefined.
-> This function in arrow function call parent property.
-> When this keyword defined inside the method and method defined inside 
   the object. In this situation when we call method then it,s point the 
   object calling property.
-> Primitive data types: Number, String, Boolean, Undefined, Null, Symbol, BigInt.
-> Object: Array, Function, Object, Object Literal.
-> Primitive value are immutable with const. While object mutable.
-> Primitive value store in call stack. While Object store in heap memory.
*/

/*
-> We can use string in double quotes as well as single quotes but generally
   we use in double quotes.
-> Null amd 0 are two different things. For example humne kisi server se 
   tempeture manga aur usne 0 bhej diya to aesa lagega jaise tempeture 0 
   hai, lekin null bheja yaani tempeture waha se aaya hi nahi.
-> Undefined yaani variable ko kisi v trah ka value nhi diya gya hai. iss
   situation mai hum variable ka data type v mahi bta sakte.
-> Always try to avoid mutating array. Because it's a bad practice.
*/

/*
-> First class functions are simply values.
-> Functions are just another "type" of object.
-> Higher-Order Function: A function that receives another function as an 
   argument, that returns a new function, or both.
*/

/* 
   -> Default value of a parameter in a function will be undefined. 
   -> if we initialize of a parameter variable then we pass undefined in a 
      function then it's go with initialized value.
*/

/******************How to pass object in a function.*******************/
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

// Method for number formatting.
const num = 1546265.0253;
const option = {
  style: 'currency',
  currency: 'USD',
};
console.log(new Intl.NumberFormat('en-IN', option).format(num));

/***********(?.)Optional Chaining**************/
/* 
   If before optional chaining any types of error occur then it's 
   gives us undefined.
*/
console.log(option?.style);

/* 
   -> Number, String, Boolean, Undefined, Null, Symbol, Bigint These
    are primitive value. When it is declared with const then we 
    cannot reassign the value in this variable.
   -> Arrays Function Object Literal they are object.
*/

/*****************And-Or Operator*****************/

/* 
   (&&) operator always print falsey value if falsey
   value not present then print the last value.
*/
console.log(40 && 0);

/* 
   (||) operator always print truthy value if truthy
   value not present then print the last value.
*/
console.log(0 || false);

/******************Break & Continue**************/

for (let i = 0; i < 8; i++) {
  if (i === 3) {
    // It means for loop iterate except i=2;
    continue;
  }
  if (i === 5) {
    // It means for loop not run further;
    break;
  }
  console.log(i);
}

/************Random Number Generator*************/
let ranNum = Math.trunc(Math.random() * 6) + 1; // Range of ranNum [1, 6]

/***********Nullish Coalescing Operator.*********/
// Nullish: Null and undefined (NOT 0 or '').
console.log(0 ?? 10);
console.log(undefined ?? 10);
