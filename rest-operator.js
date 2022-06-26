const { log } = console;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
/*The rest parameter syntax allows a function to accept an indefinite number of 
arguments as an array, providing a way to represent variadic functions in JavaScript.*/

const sum = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

log(sum(1, 2, 3));

//A function definition can have only one ...restParam.
//The rest parameter must be the last parameter in the function definition.

//here the third argument, args, will be an array that contains the third, fourth, nth — as many arguments that the user includes.
const sum2 = (a, b, ...args) => {
  log("a: ", a);
  log("b: ", b);
  log("look, args is an array: ", args);
};

sum2(1, 2, "owls");
