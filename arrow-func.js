const func = (x=1,y=2) => { //default params if none provided while calling
    return x+y
}

//console.log(func())
//console.log(func(2,3))

function myFunc (x=1,y=2,z=3) {
   return  [x+y, y+z] //return multiple values
}

console.log(myFunc(4,4,7))