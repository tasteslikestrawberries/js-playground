let a = 8, b = 6;

[a,b] = [b,a]

console.log(b,a)

//destructuring with rest parameter
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [,, ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr)