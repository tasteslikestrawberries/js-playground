//accessing array element with negative indexes,for example: arr[-1] isn't allowed and returns undefined
const arr = [2, 5, 6, 7];
//console.log(arr[-1])
//console.log(arr[-2])

//BASIC ARRAY MANIPULATION

const hobbies = ["Sports", "Cooking", "Dancing", "Cleaning", "Reading"];
hobbies.push("Playing"); //adds element to the end of the array
hobbies.unshift("Singing"); //adds element to the beginning of the array
hobbies.pop(); //removes the last element of the array
hobbies.shift(); //removes the first element from an array and returns that removed element. This method changes the length of the array

/*SPECIAL ARRAY METHODS:*/

//SPLICE - only available on real arrays
hobbies.splice(1, 1);
//console.log(hobbies)
/*start looking at the second element, then delete as many elements as specified (zero here) and then insert this ('Drinking') in place of
the element where you start looking*/
hobbies.splice(1, 0, "Drinking");
//console.log(hobbies)
hobbies.splice(1); // spares the first item but deletes all the other items
hobbies.splice(-1); //goes to the end of the array and looks to the right
//console.log(hobbies)
hobbies.splice(0); //deletes all the items in the array
//console.log(hobbies)

//SLICE - returns a copy of a section of an array - returns a brand new array based on the old array (with brand new memory adress)
const numbers = [2, 6, 7, 8, 3, 4, 5, 10, -5];
const newNumbers = numbers.slice();
//console.log(newNumbers)
const newestNumbers = newNumbers.slice(2, 4);
//console.log(newestNumbers)

//CONCAT - merges two or more arrays - does not change the existing arrays but instead returns a new array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatedArray = arr1.concat(arr2);
//console.log(concatedArray)

//INDEXOF() - returns the index of the first occurence of a value in an array, or -1 if it is not present
const myArr = ["Apple", "Banana", "Kiwi", "Pasta"];
//console.log(myArr.indexOf('Kiwi'))
//LASTINDEXOF() - does the same as indexOf() but starts from the end

//FIND() - returns the value of the first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned
let myNumbers = [5, 6, 7, 8];
const foundNumber = myNumbers.find((number) => number > 5);
//console.log(foundNumber);

//FOREACH() - useful if you need an index (for-of doesn't give you access to index, and in regular for loop you have to manually handle it)
//doesn't have a return value, always returns undefined!
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

//console.log(taxAdjustedPrices);

//CONVERT ARRAY TO OBJECT WITH FOREACH
let result = {};

peopleArr.forEach((person) => {
  if (person.active) {
   result[person.id] = person.name;
  }
});

//console.log(result)

//SORT() AND REVERSE()
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
//console.log(sortedPrices);

//reverse the previously sorted array
//console.log(sortedPrices.reverse());

//sort integers
const numberArray = [5, 6, 3, 2, 1, 8];
//console.log(numberArray.sort((a, b) => (a - b)));

//MAP()
let people = [
  { name: "Manuel", surname: "Lol" },
  { name: "Tin", surname: "Col" },
  { name: "Anita", surname: "Phills" },
];

const happyPeople = people.map(
  (person) => person.name + " " + "is" + " " + "Happy"
);
//console.log(happyPeople);

//FILTER
function filterOut(arr) {
  const filteredArr = arr.filter((element) => element % 2 === 0);
  //console.log(filteredArr);
}

filterOut([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

