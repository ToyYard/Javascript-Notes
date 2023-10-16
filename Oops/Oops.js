'use strict';

// Class declaretion.
/*
-> Classes ececuted in strict mode only.
-> When we create method in class then it's automatically add in 
   constructor function prototype.
*/
class student {
  constructor(name, course, birthYear) {
    this.name = name;
    this.course = course;
    this.birthYear = birthYear;
  }

  sayHi() {
    console.log('Hello Learner');
  }

  static sayNo() {
    console.log('Hello Aditya');
  }
}

/*
-> At the time of creating object constructor function will automatically call.
-> Static function or properties didn't call with object. Because 
   it's not add in constructor function prototype.
-> Static function can call with class name.
*/
const student1 = new student('Aditya Kumar', 'B.Tech', 2001);

/*
   Teacher class created with extending (student or parent) class methods 
   and properties. In other word we can say teacher class inherit methods 
   and properties of student class.

*/
class teacher extends student {
  constructor(name, course, birthYear, subject) {
    // Super keyword help to call parent constructor function.
    super(name, course, birthYear);
    this.subject = subject;
  }

  sayHi() {
    console.log('Hello Programmer');
  }

  qualification() {
    // Calling own class method.
    this.sayHi();
    // Calling parent class function.
    super.sayHi();
    // Here we useing parent class properties.
    console.log(this.course);
  }
}
const teacher1 = new teacher('Aditya Kumar', 'B.Tech', 2001, 'Mathmatics');
teacher1.qualification();

// Inherit both class properties.
class principal extends teacher {}
const principal1 = new principal('Aditya Kumar', 'B.Tech', 2001, 'Mathmatics');
