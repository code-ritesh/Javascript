
function blocking(){
    for(let i  = 0 ; i < 1000000000 ; i++){}
}

console.log("start")

setTimeout( () =>{
    console.log("timer done 1")
} , 0)


blocking()

let x = Promise.resolve("ritesh promise")
x.then( (value) =>{
    console.log("whose promise ? ," , value)
    blocking()
})

let y = Promise.resolve("ritesh promise 2")
y.then( (value) =>{
    console.log("whose promise 2 ? ," , value)
    setTimeout(() => {
        console.log("inside promise 2 timeout")
    }, 0);
})

let z = Promise.resolve("ritesh promise 3")
z.then( (value) =>{
    console.log("whose promise 3 ? ," , value)
    blocking()
})

setTimeout(() => {
    console.log("timer done 2")
}, 0);

console.log("end ")