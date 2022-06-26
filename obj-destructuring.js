const temp = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today } = temp;
const { tomorrow } = temp;

console.log(today, tomorrow);

//with custom names
/*Destructuring allows you to assign a new variable name when extracting values. 
You can do this by putting the new name after a colon when assigning the value.*/
const { today: myToday } = temp;
const { tomorrow: myTomorrow } = temp;

console.log(myToday, myTomorrow);

//nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday },
} = LOCAL_FORECAST;
const {
  today: { high: highToday },
} = LOCAL_FORECAST;

console.log(lowToday, highToday);

//pass an object as function param
const myObj = {
  color: "blue",
  shape: "circle",
  size: "large",
};

//if object is undefined, set a default values
//const myFunc = ({ color = "default color", shape = "default shape" } = {}) =>
//const myFunc = ({ color, shape } = {}) =>
const myFunc = ({ color, shape }) =>
  //console.log("This is a".concat(" ",color, " ", shape));
  console.log(`This is a ${color} ${shape}`) //use this for string concatation
myFunc(myObj); //have to call the function with the object name as argument
