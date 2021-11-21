let currentResult=0;

const userInput = document.getElementById('input');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('currentResultOutput');
const currentCalculationOutput = document.getElementById('currentCalculationOutput');

outputResult = (result, text) => {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const userInput = 50;
let result;

result = 18 + userInput;
result = result - 10;
result = result * 5;
result = result / 2;

alert(result);
alert(userInput);