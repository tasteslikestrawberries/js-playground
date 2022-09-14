//Push even numbers to array
const arr = [];
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}

//console.log(arr);

//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    //console.log(`number ${i} is even`);
  } else {
    //console.log(`number ${i} is odd`)
  }
}

//for of loop
const array = [1,2,3,4,5,6,7,8,9,10];

for(const element of array) {
  //console.log(element)
}

//for in loop
const myObj = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e'
}

for(const item in myObj) {
  //console.log(myObj[item])
}
