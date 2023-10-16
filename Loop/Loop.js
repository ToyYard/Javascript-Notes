'use strict';

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

// For Loop.
for (let i = 0; i < mixArray.length; i++) {
  console.log(mixArray[i]);
}

// For of loop.
for (const item of mixArray) {
  console.log(item);
}

// While Loop.
let i = 0;
while (i < mixArray.length) {
  console.log(mixArray[i]);
  // Here loop condition will update.
  i++;
}
