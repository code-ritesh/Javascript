// const x = 10
// x = 0 

// console.log(x)  -> throws error

const obj = {x : 10}

obj.x = 14 // -no error

// obj = {} //-> error 

// stops reassignment update the obj
// not unintialsized const

console.log(obj)