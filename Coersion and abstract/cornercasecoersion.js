//to string -> "" + value

console.log("" + 0) // "0"
console.log("" + (-0)) //"0"

console.log([] + "") // -> ""
console.log( "" + {}) // -> obj obj

console.log([1,2,3] + "")

console.log([null , undefined] + "")

console.log([1,2,null , undefined,4] + "")


//ot number 
console.log(0 - "010") //decimal
console.log(0 - "o10")
console.log(0 - 010) //octal 010 treated as 
console.log(0 - "0xb") // hexadecimal
console.log(0 - 0xb)

console.log(1 - []) // -1
console.log([] - 1) // -1
console.log(["0"] - 1) // -1
console.log([6]-1) //5