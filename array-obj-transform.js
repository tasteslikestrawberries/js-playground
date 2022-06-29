const { log } = console;

//TRANSFORMATION PRACTICE
const peeps = [
  {
    name: "Ada",
    age: 31,
    cars: {
      model: "Renault",
      year: 2002,
    },
  },
  {
    name: "Bea",
    age: 28,
    cars: {
      model: "Audi",
      year: 2008,
    },
  },
  {
    name: "Clea",
    age: 42,
    cars: {
      model: "Mini",
      year: 2010,
    },
  },
  {
    name: "Lea",
    age: 51,
    cars: {
      model: "Mini",
      year: 2007,
    },
  },
];

/*interface INewPeep {
  id: number, 
  name: string, 
  model: string
}*/

const newPeeps = peeps.map(({ name, cars: { model } }, idx) => {
  return { id: idx + 1, name, model };
});

/*interface IMiniPeep {
  name: string, 
  model: string
}*/

const miniPeeps = newPeeps
  .filter((item) => item.model === "Mini")
  .map(({ name, model }) => ({ name, model }));

log(miniPeeps);

//destruct name from item (second param of reducer function)
const objectOfObjects = peeps.reduce((acc, { name }, idx) => {
  const id = idx + 1; //initialize id
  acc[id] = { name }; // initialize value for key id
  return acc; //have to return the acc
}, {}); //initialize acc as empty object

log(objectOfObjects);
