//is Palindrome?

const word = "radar";
const isPalindrome = () => {
  if (word == word.split("").reverse().join("")) {
    console.log("Word is palindrome");
  } else {
    console.log("Word isn't palindrome");
  }
};

isPalindrome();

//classic js promise using constructor
const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(console.log("Promise is resolved!"));
    }, 300);
  } else {
    reject(console.log("Promise is rejected!"));
  }
});

console.log(myPromise);

//promise using async await
const demoPromise = async (myPromise) => {
  try {
    const message = await myPromise;
    console.log(message + " works");
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finally");
  }
};

demoPromise();

//sorting string of numbers into integer array (// Sort numerically because default is lexicographical sort)
//https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958

const highAndLow = () => {
  const numbers = "2 4 56 879 980";
  const splitted = numbers.split(" ");
  const sorted = splitted.sort((a, b) => a - b);
  console.log(sorted[0] + " " + sorted[sorted.length - 1]); //kata task is to return the lowest and highest number
  console.log(sorted);
};
highAndLow();

//find multiple missing numbers from array
function findMissingNumbers(arr1, arr2) {
  if (arr1 === arr2) {
    console.log("There are no missing elements");
    return;
  }

  const arr1Sorted = arr1.sort((a, b) => a - b);
  const arr2Sorted = arr2.sort((a, b) => a - b);

  const resultArray = [];
  let i = 0,
    j = 0;
  while (i < arr1Sorted.length) {
    if (arr1Sorted[i] !== arr2Sorted[j]) {
      resultArray[resultArray.length] = arr1Sorted[i];
      i++;
    } else {
      i++;
      j++;
    }
  }

  return resultArray;
}

const arr1 = [3, 2, 1, 4, 1, 5, 6];
const arr2 = [3, 2, 1];
const res = findMissingNumbers(arr1, arr2);
console.log(res);

////
