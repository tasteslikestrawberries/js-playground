//JAVASCRIPT Create phone number:

function createPhoneNumber(numbers) {
  let firstpart = "";
  let secondpart = "";
  let thirdpart = "";
  for (var i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstpart += numbers[i].toString();
    } else if (i >= 3 && i < 6) {
      secondpart += numbers[i].toString();
    } else if (i >= 6) {
      thirdpart += numbers[i].toString();
    }
  }
  //console.log(`(${firstpart}) ${secondpart}-${thirdpart}`);
  return `(${firstpart}) ${secondpart}-${thirdpart}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//INTERESTING SOLUTION:
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  //console.log(format);
  return format;
}

createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//Array.diff
function arrayDiff(a, b) {
  const filtered = a.filter((item) => !b.includes(item));
  //console.log(filtered);
  return filtered;
}

arrayDiff([1, 4, 7, 9], [1, 4, 5]);

//Find the odd int
function findOdd(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (!obj[el]) {
      obj[el] = 1;
      continue;
    }

    ++obj[el];
  }

  const myArr = Object.entries(obj);
  for (let [key, value] of myArr) {
    if (value % 2 !== 0) return +key; //+ converts key from string to number
  }
}

console.log(findOdd([1, 1, 2]));
//JAVASCRIPT Create phone number:

function createPhoneNumber(numbers) {
  let firstpart = "";
  let secondpart = "";
  let thirdpart = "";
  for (var i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstpart += numbers[i].toString();
    } else if (i >= 3 && i < 6) {
      secondpart += numbers[i].toString();
    } else if (i >= 6) {
      thirdpart += numbers[i].toString();
    }
  }
  //console.log(`(${firstpart}) ${secondpart}-${thirdpart}`);
  return `(${firstpart}) ${secondpart}-${thirdpart}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//INTERESTING SOLUTION:
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  //console.log(format);
  return format;
}

createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//Array.diff
function arrayDiff(a, b) {
  const filtered = a.filter((item) => !b.includes(item));
  //console.log(filtered);
  return filtered;
}

arrayDiff([1, 4, 7, 9], [1, 4, 5]);

//Find the odd int
function findOdd(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (!obj[el]) {
      obj[el] = 1;
      continue;
    }

    ++obj[el];
  }

  const myArr = Object.entries(obj);
  for (let [key, value] of myArr) {
    if (value % 2 !== 0) return +key; //+ converts key from string to number
  }
}

console.log(findOdd([1, 1, 2]));