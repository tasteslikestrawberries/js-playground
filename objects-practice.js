const users = {
  Marco: {
    age: 29,
    country: "Croatia",
  },
  Lola: {
    age: 26,
    country: "France",
  },
  Noah: {
    age: 44,
    country: "USA",
  }
};

//access property names
function checkUserProperties(user) {
    return users[user];
}

console.log(checkUserProperties('Lola'))

//add a property/key
function addUser(user) {
    return users[user] = {age: 31, country: 'Russia'};
}

addUser('Ana')
console.log(users)
