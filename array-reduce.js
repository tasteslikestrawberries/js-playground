const {log} = console;

const sumNumbers = (...args) => {
  //rest operator creates an array of parameters (any custom number of parameters)
  //that's why we can use the reduce method on args

  //reduce takes 2 parameters: a callback function and (optional) initial value
  //in the callback function, the first param is accumulator and the second is element of the array
  //if you sent the optional initial value (in this case 0) - this is the start value of the accumulator
  //if you didn't send the optional initial value, then the start value is the first array element
  return args.reduce((acc, element) => acc + element, 0); //acc accumulates the values
};

//console.log(sumNumbers(1,2,3,4,5)) //output:15

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
const totalPrice = items.reduce((acc, item) => {
  return acc + item.price;
}, 0);

//log(totalPrice);

// EXAMPLE 2
//with a loop

const numbers = [1, -1, 2, 5];

/*let sum = 0;
for (let n of numbers)
 sum += n;

log(sum);*/

// with reducer
//accumulator is like sum=0 in the example above, we initialize it
//the callback function with 2 params is executed multiple times and each time the currentValue will be set to one element of the array:
//first round: accumulator= 0, currentValue=1 => acc=1
//second round: accumulator= 1, currentValue= -1 => acc=0
//third round: accumulator=0, currentValue=2, => acc= 2
//fourth round: accumulator=2, currentValue=5 => acc= 7

//so in each callback function call we want to get the currentValue and add it to the accumulator
const sum = numbers.reduce((acc, el) => {
  return acc + el; //internally the reduce method will get the result and store it in the accumulator
}, 0); /*the second argument of the reduce method is the initial value of the accumulator - if we don't specify it, the first element
of the array will be used as the initial value*/

//log(sum);

//REDUCE ARRAY OF OBJECTS 
const peopleArr = [
  { id: 1, name: "Anna", age: 23, active: true },
  { id: 2, name: "Joe", age: 33, active: false },
  { id: 3, name: "Sara", age: 42, active: false },
  { id: 4, name: "Noah", age: 18, active: true },
];

    //using map and filter (filter active users/map by name)
    const activePeople = peopleArr
      .filter((person) => person.active)
      .map((person) => person.name);
    log(activePeople);

    //THE ABOVE WITH REDUCE
    const activePeeps = peopleArr.reduce((acc, e) => {
      if (e.active) {
        acc.push(e.name);
      }
      return acc;
    }, []);
    log(activePeeps)

//REDUCE ARRAY TO OBJECT
const reducedObj = peopleArr.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

const reducedObj2 = peopleArr.reduce(
  (acc, item) => ({ ...acc, [item.name]: item.active }),
  {}
);

log(reducedObj);
log(reducedObj2);



