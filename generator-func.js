function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); //{ value: 3, done: true }
console.log(generator.next()); //{ value: undefined, done: true }

//generators are iterable!
for (let value of generator) {
  console.log(value); // shows 1, then 2, and that’s all. It doesn’t show 3!
}

/*It’s because for..of iteration ignores the last value, when done: true. 
So, if we want all results to be shown by for..of, we must return them with yield:*/
function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator2 = generateSequence2();

for (let value of generator2) {
  console.log(value); // 1, then 2, then 3
}
