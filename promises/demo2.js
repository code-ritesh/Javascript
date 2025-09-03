const { set } = require("mongoose")

console.log("start")

setTimeout( () =>{
    console.log("timer done 1")
} , 0)

for(let i  = 0 ; i < 1000000000 ; i++){}

let x = Promise.resolve("ritesh promise")

x.then( (value) =>{
    console.log("whose promise ? ," , value)
})

setTimeout(() => {
    console.log("timer done 2")
}, 0);

console.log("end ")