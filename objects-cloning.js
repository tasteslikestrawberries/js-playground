/*
There are two ways to pass, or copy stuff. One is by value and the other is by reference. 
When you pass, or copy something by value, you are creating a copy of it, a deep copy. 
When you pass or copy something by reference you are creating just an alias to the original, a shallow copy. 
All copies created by reference, i.e. shallow copies, are just aliases. This means that when you change any of 
these copies you are not actually changing that copy. You are changing the original itself. 
Remember, all shallow copies are just aliases, aliases for working with the original.

Quick recap, “by value” means you create a real copy of the original. Both, the copy and original are completely independent. 
Change of one will not affect the other. “By Reference” means you create an alias to the original. 
There is no new copy or clone. There is still only one thing, the original, and a new name, or alias, you can use to call it.*/

//SHALLOW COPY

//Object.assign()
//spread operator

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

const shallowClone = { ...myObj }; //or Object.assign(myObj)

shallowClone.name = "Thea";
shallowClone.address.country = "Italy";
shallowClone.address.pets = [1, 2, 3];

console.log(myObj);
console.log(shallowClone);

//DEEP COPY - structuredClone()

//const deepClone = structuredClone(myObj);
//console.log(deepClone);
