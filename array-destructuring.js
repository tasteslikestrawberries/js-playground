let a = 8,
  b = 6;

[a, b] = [b, a];

console.log(b, a);

//destructuring with rest parameter
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(someArr) {
  const [, , ...myArr] = someArr;

  return myArr;
}
const arr = removeFirstTwo(source);

console.log(arr);

//do the same thing using filter()
function mapArr(arr) {
  return arr.filter((val, idx) => (idx > 1 ? val : undefined));
}

console.log(mapArr(source));
