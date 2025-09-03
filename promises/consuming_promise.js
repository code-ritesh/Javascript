function createPromiseWithTimeOut(){

    console.log("entering the executor callback in the promise constructor")

    return new Promise( function executor (resolve , reject){

        setTimeout( () => {

            let num = Math.floor(Math.random() * 10)

        if(num % 2 == 0){
            // fullfill the promise
            console.log(num)
            resolve("even number timout")
        }

        else{
            // reject the promise
            reject("odd number timeout")
            console.log(num)
            
        }

        } , 500)

        console.log("exiting the executor callback in the promise constructor")
    })
}

console.log("starting ")
let p = createPromiseWithTimeOut()

console.log("waiting for the promise to complete")

console.log("currently the promise obj state is",p)

console.log("going to register set of handlers to promise obj using then method")

p.then( function fullfilled(val){
    console.log("inside the fullfilled handler , promise state is" , p)
    console.log("the promise got fullfilled with value ", val)}
 , function rejected(err){
    console.log("inside the rejected handler , promise state is" , p)
    console.log("the promise got rejected with reason ", err)})

console.log("after registering the handlers to promise obj using then method")

console.log("ending")

for (let i = 0; i < 100000000; i++) {}

console.log("ending the loop also")



// console.log("after consuming the promise currently the promise obj state is ", p) -> always shows pending bcz the promise is async

//.then is a async method which registers the handlers to the promise obj and returns immediately

// setTimeout(() => {
//     console.log("the promise state is " , p)
// }, 10000);


