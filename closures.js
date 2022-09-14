//closure example

function outerFunc() {
  const name = "Ann";

  function innerFunc() {
    console.log(name);
  }

  return innerFunc;
}

const myFunc = outerFunc();
myFunc();
