'use strict';

const foodPrice = [25, 45, 69, 32, 45, 85];

//For Each Loop.
/*
-> In For each loop we can't use break; statements. 
-> Inside the for each loop function parameter are 
   respectively.
   (i) First parameter for array element.
   (ii) Second parameter for array index.
   (iii) Third parameter for entire array. 
*/
foodPrice.forEach(function (item, i) {
  console.log(item, i);
});

// For of loop.
for (const [i, item] of foodPrice.entries()) {
  if (item > 75) {
    console.log(`(${i}) Nonveg item.`);
  } else {
    console.log(`(${i}) Veg item.`);
  }
}
