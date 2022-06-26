//function declaration
function foo(x = 1, y = 2, z = 3) {
  return [x + y, y + z]; //return multiple values
}

//function expression
const sum = function (a, b) {
  console.log(a + b);
};
sum(2, 2);

//with constructor
let sum2 = new Function("a", "b", "console.log(a+b)");

sum2(2, 2);

//immediately invoke function
{
  console.log("I'm executing code immediately!");
}

(function () {
  console.log("anonymous iife");
})();

//ARROW FUNCTIONS
//if multiline, have to have {} and return inside
//if oneline, => does the return (const func = (x,y) => x+y)
const test = (x = 1, y = 2) => {
  //default params if none provided while calling
  return x + y;
};

//console.log(func())
//console.log(func(2,3))

//arrow functions have no this!
const myFunc = () => console.log(this);
myFunc();

//immediately invoked arrow functions
(() => console.log("IIFE!"))();
