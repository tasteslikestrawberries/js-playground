//SHALLOW COPYING AND MERGING ARRAYS
//SPREAD OPERATOR (returns new array)
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const spreadedArr = [...arr];
const mergedArr = [...arr, ...arr2];
console.log(spreadedArr);
console.log(mergedArr);

//immmutable alternatives:
//WITH CONCAT (also returns new array)
const concatArr = arr.concat();
const concatMerge = arr.concat(arr2);
console.log(concatArr);
console.log(mergedArr);

//WITH SLICE (also returns new array)
const sliceArr = arr.slice();
console.log(sliceArr);

//mutable alternative
//WITH PUSH (changes original array)
arr.push(...arr2);
console.log(arr);

//SHALLOW COPYING OBJECTS
const myObj = {
  name: "Anna",
  age: 23,
  address: {
    country: "USA",
    city: "San Fran",
    address: "Flower street",
  },
  pets: ["Fox", "Blu", "Pipes"],
};

const shallowClone = { ...myObj }; //alternatively can use Object.assign(myObj)
