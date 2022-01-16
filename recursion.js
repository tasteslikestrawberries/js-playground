console.log("WITH FOR LOOP:");
const myArr = [];
n = 5;
for (let i = n; i >= 1; i--) {
  myArr.push(i);
  console.log(myArr);
}

console.log("WITH RECURSION:");
//with recursion
function countdown(n) {
  if (n < 1) return [];

  const arr = countdown(n - 1);
  arr.unshift(n);
  console.log(arr);
  return arr;
}

countdown(5);
