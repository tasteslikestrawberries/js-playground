//rest param
const sum = (...args) => { //rest operator creates an array of parameters (any custom number of parameters)
  //that's why we can use the reduce method on args
  //reduce takes 2 parameters: a callback function and (optional) initial value
  //in the callback function, the first param is accumulator and the second is element of the array
  //if you sent the optional initial value (in this case 0) - this is the start value of the accumulator
  //if you didn't send the optional initial value, then the start value is the first array element
    return args.reduce((acc, element) => acc + element, 0); //acc accumulates the values
  }

  console.log(sum(1,2,3,4,5)) //output:15

//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);