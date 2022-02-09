//rest param
const sum = (...args) => {
    return args.reduce((acc, b) => acc + b, 0); //acc accumulates the values
  }

  console.log(sum(1,2,3,4,5)) //output:15

//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);