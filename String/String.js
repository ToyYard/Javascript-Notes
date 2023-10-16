'use strict';
const plane = 'Air-India A320-B6A4';
console.log(plane[0]);
console.log(plane.length);
console.log('B732'.length);
console.log(plane.indexOf('A'));
console.log(plane.lastIndexOf('A'));
console.log(plane.indexOf('32'));
console.log(plane.slice(3));
console.log(plane.slice(-3));
console.log(plane.slice(3, 6));
console.log(plane.toLowerCase());
console.log(plane.toUpperCase());

/*
   Removes the leading and trailing white space and
   line terminator characters from a string.
*/
console.log(plane.trim());

const symbol = plane.replace(/-/g, '_');
const symbo2 = plane.replace('_', '-');
console.log(plane);
console.log(plane.includes('India'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('B6'));

const arr1 = 'Hello+Hii+By+Tata'.split('+');
console.log(arr1);
console.log(arr1.join(' - '));

console.log('B.TECh'.padStart(10, '+'));
console.log('B.TECh'.padEnd(10, '+'));
console.log(plane.repeat(4));

const multiWorks = plane[0].toUpperCase().padEnd(10, '.');
console.log(multiWorks);
