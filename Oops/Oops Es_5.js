'use strict';

/***********************Oops applying before ES-6.*********************/

// Prototype is a type of container where methods and properties are store.

// Constructor Function.
/*
   When we declare constructor function then it's create a prototype
   and attached with this constructor function.
*/
function Student(name, course, birthYear) {
  this.name = name;
  this.course = course;
  this.birthYear = birthYear;
  this.sayHi = function () {
    console.log('Hello Learner');
  };
}

/*
-> When we create object then inbuilt javascript prototype will attached 
   with this object. But if we create object with the help of a constructor 
   function, then it's copy all properties and methods of the constructor
   function. And it's directly connect with constructor function prototype.
   And also constructor function prototype is connect with inbuilt
   javascript prototype.
-> Inbuilt javascript prototype is connected with null container.
-> Method or properties calling due to object. 
   copy sectiom => constructor function prototype => object prototype => Null container.
*/
const student1 = new Student('Aditya Kumar', 'B.Tech', 2001);

/*
-> For follow dry code princile we should write method in a constructor function
   prototype. Because when we create object then, every time all methods are copy 
   in it.
-> We can also store properties in a constructor function prototype.
   Student.prototype.grade = `8${cgpa}`;
*/
Student.prototype.age = function () {
  console.log(2024 - this.birthYear);
};

// Another constructor function.
function Restaurant(place, food) {
  this.place = place;
  this.food = food;
}
Restaurant.prototype.totalBill = function (foodPrice) {
  this.foodPrice = foodPrice;
  console.log('Bill with GST:', this.foodPrice + 25);
};
const restaurant1 = new Restaurant('Patna', 'Cold-Coffie');

/*
-> We can connect one constructor function prototype with other 
   constructor function prototype. So that we can use other 
   constructor function method or properties.
-> Here, Student constructor function prototype connect with the
   Restaurant constructor function prototype.
-> Method or properties calling due to object student1. 
   copy sectiom => Student constructor function prototype => Restaurant constructor function prototype => object prototype => Null container.
*/
Student.prototype.__proto__ = Object.create(Restaurant.prototype);

student1.age();
student1.totalBill(125);
