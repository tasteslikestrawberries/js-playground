const arr = [];

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}

//console.log(arr)

//1. write program that accepts 2 integers and display the larger
function displayLarger(a, b) {
  console.log(Math.max(a, b));
}

//displayLarger(1,40)

//2. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(i + " " + "I am even.");
  if (i % 2 !== 0) console.log(i + " " + "I am odd.");
}
