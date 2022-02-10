//REVERSE A STRING
function stringReverse(str) {
  reversedStr = str.split("").reverse().join("");

  //check for palindrome
  if (str === reversedStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is NOT a palindrome`);
  }
  return reversedStr;
}

//stringReverse("kayak");

//SORT A NUMBER ARRAY
function sortArr(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr;
}

//console.log(sortArr([2,6,1,0,9]))

//FIND ALL STRINGS THAT START WITH LETTER A
function findString(arr) {
  const stringsThatStartWithA = arr
    //.map((string) => string.toLowerCase())
    .filter((string) => string[0] === "a" || string[0] === "A"); //or .includes('a')
  return stringsThatStartWithA;
}

//console.log(findString(["sara", "Ana", "jojo", "tin"]));

