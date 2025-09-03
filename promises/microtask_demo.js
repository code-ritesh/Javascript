function createPromise(){
    return new Promise( (resolve , reject) =>{
        console.log("resolving the promise")
        for(let i = 0 ; i < 100000000 ; i++){}
        resolve("promise resolved")
    })
}

setTimeout(() => {
    console.log("timer completed")
}, 0);

let p = createPromise()

console.log("the state of p is" , p)

p.then( (value) => {
    console.log("fullfilled 1 the value ", value)
})

p.then( (value) => {
    console.log("fullfilled 2 the value ", value)
})

p.then( (value) => {
    console.log("fullfilled 3 the value ", value)
})

for(let i = 0 ; i < 10000000 ; i++){}

console.log("end")


// So the real sequence is:

// Call Stack (global synchronous code)

// Microtask Queue

// Macrotask Queue