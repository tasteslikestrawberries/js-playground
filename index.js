///tryouts
const array = [1,2,3]
const mappedArray = array.map(element => {
    return element*2
})
console.log(mappedArray)
console.log(array)

////

const word = "radar";
const isPalindrome = () => {
    if (word==word.split("").reverse().join("")) {
        console.log("Word is palindrome")
    }
        else {
            console.log("Word isn't palindrome")
        }
    
}

isPalindrome()

//////

const music = ["pop", "rock", "blues"]
music.push("country")
console.log(music)

music.forEach(element => {
    
    console.log(element + " " + "music")
    
});

//////setTimeout with arrow f.

const learningPromise = () => {
    console.log("Hit");
    setTimeout(() => {
        console.log("Bit")
    }, 300)
    console.log("Kit")
}

learningPromise();

//// classic js promise using constructor
const myPromise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(console.log("Promise is resolved!"))
        }, 300);
    } else {
        reject(console.log("Promise is rejected!"));
    }

});

console.log(myPromise)

///// promise using async await
const demoPromise = async (myPromise) => {
    try {
        const message = await myPromise;
        console.log(message + " works");
    } catch (error) { 
        console.error(error);
    }

    finally {
        console.log("Finally")
    }
}

demoPromise();

/////// sorting string of numbers into integer array (// Sort numerically because default is lexicographical sort)
//https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958

const highAndLow = () => {
    const numbers = "2 4 56 879 980";
    const splitted = numbers.split(" ");
    const sorted = splitted.sort((a,b)=>a-b);
    console.log( sorted[0] + " " + sorted[sorted.length-1] ); //kata task is to return the lowest and highest number
    console.log(sorted);
  }
  highAndLow();
  
  


