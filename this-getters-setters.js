//console.log(this === window) //the window object is only defined in the browser, and isn't defined within Node.js so //window is not defined here

const myObj = {
    name: 'Anna',
    surname: 'Johnson',
    age: 30,
    func: function tryThis() {
        return this.age; 
    },
    get wholeName() {
        return `${this.name} ${this.surname}`;
    },
    set city(city){
        //this.city = city//NO! variable must be called differently because setter will recursively call itself (rangeerror call stack exceeded)
        this._city = city; //good
    }
}

console.log(myObj.func())
console.log(myObj.wholeName)
myObj.city = 'Paris';
console.log(myObj._city)

const myObj2 = {
    name:'Lisa'
}

const myObj3 = {
    name:'Courtney'
}

function test() {
    console.log(this?.name)
}

test.call(myObj)
test.call(myObj2)


