console.log(Number("abcd"))
console.log(Number("123"))
console.log(Number("0xa"))

let x = NaN

console.log( isNaN(x))
console.log(Number.isNaN(x))

console.log(isNaN("ritesh"))
// gives true bcz isnan converts the incoming input to a number 

console.log(Number.isNaN("ritesh"))

if(typeof(x) == 'number' && x !== x) {console.log("true only for nan")}

else console.log("not a nan")

console.log(x !== x) // same as if else 
