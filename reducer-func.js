//EXAMPLE 1
const items = [
  { name: "Phone", price: 40 },
  { name: "Book", price: 25 },
  { name: "Ring", price: 35 },
  { name: "Ball", price: 5 },
];

/*let totalPrice= 0
items.forEach( item => {
  totalPrice += item.price
})*/

//with reducer
const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

// EXAMPLE 2
//with a loop

const numbers = [1, -1, 2, 5];

/*let sum = 0;
for (let n of numbers)
 sum += n;

console.log(sum);*/

// with reducer
//accumulator is like sum=0 in the example above, we initialize it
//the callback function with 2 params is executed multiple times and each time the currentValue will be set to one element of the array:
//first round: accumulator= 0, currentValue=1 => acc=1
//second round: accumulator= 1, currentValue= -1 => acc=0
//third round: accumulator=0, currentValue=2, => acc= 2
//fourth round: accumulator=2, currentValue=5 => acc= 7

//so in each callback function call we want to get the currentValue and add it to the accumulator
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //internally the reduce method will get the result and store it in the accumulator
}, 0); /*the second argument of the reduce method is the initial value of the accumulator - if we don't specify it, the first element
of the array will be used as the initial value*/

console.log(sum);
