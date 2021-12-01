const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//console.log(randomNumber);

function alertFunc() {
  if (randomNumber > 0.7) alert("I'm bigger than 0.7");
}

//alertFunc();

const arr = [2, 6, 3, 4, 5];

function loopFunc1() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//loopFunc1();

function loopFunc2() {
  for (element of arr) {
    console.log(element);
  }
}

//loopFunc2();

function loopReverseCount() {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

//loopReverseCount()

function practiceLogicalOperators() {
  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  if (
    (randomNumber1 > 0.7 && randomNumber2 > 0.7) ||
    randomNumber1 <= 0.2 ||
    randomNumber2 <= 0.2
  )
    alert("Greater than 0.7 and smaller than 0.2");
}

practiceLogicalOperators()
