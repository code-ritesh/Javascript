console.log(NaN === NaN) // false, NaN is not equal to anything, even itself

console.log(0 === -0) // true, both are zero

// if one of nan then return false

let obj1 = {x:10}
let obj2 = {x : 10}
let obj3 = {y:10};

console.log(obj1 === obj2) //false address reason
console.log(obj1 === obj1) //true
console.log(obj1 == obj3) //false

console.log( {x :10} == {x:10})