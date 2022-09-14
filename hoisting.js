/* Function expressions in JavaScript are not hoisted, unlike function declarations. 
Function expressions cant't be used before declaration.*/

console.log(`var: ${a}`); // undefined
//console.log(`let: ${b}`) // cannot access b before initialization
//console.log(`const: ${c}`) // cannot access c before initialization

test();
//arrowTest(); //cannot access arrowTest before initialization

var a;
let b;
const c = "constant";

function test() {
  console.log("test");
}

const arrowTest = () => {
  console.log("test");
};

console.log(myVariable)
var myVariable = 'test'
