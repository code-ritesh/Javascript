
function* fetchNextElement() { // generator function 
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    yield 4;
} 

const iter = fetchNextElement();

console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4th",iter.next());
console.log("5th",iter.next());
console.log("6th",iter.next());

// iter.next() returns an object with two properties value and done
// value is the value yielded by the generator function
// done is a boolean indicating whether the generator function has completed its execution

// iter.next() is return yielded value and pauses the function execution


// what is yield keyword
// it is used to pause the function execution and return a value
// when next function is called it resumes the function execution from where it was paused
// and continues until it hits the next yield statement or the end of the function

// to make a function a generator function we use * after function keyword