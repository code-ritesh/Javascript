let x= 10;
console.log(!x) //false

let y = NaN // nan undefined -> falsy values
console.log(!y)

console.log(null == undefined) //true

console.log(12  == "12") // true

console.log(true == "0") // false
console.log(false == "0") // true toboolean conversion 

console.log(null == false)
//y-> false => tonumber = 0
//false final answer


console.log("NaN" == NaN) //false

let obj = { x : 10 , valueOf() {return 100 }}

console.log(99 == 100 ) //false;
console.log(100 == obj) //true overwrite 