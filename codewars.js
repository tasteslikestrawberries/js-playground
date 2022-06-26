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
  console.log(`(${firstpart}) ${secondpart}-${thirdpart}`)
  return `(${firstpart}) ${secondpart}-${thirdpart}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

//INTERESTING SOLUTION:
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  
  console.log(format)
  return format;
}

createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
