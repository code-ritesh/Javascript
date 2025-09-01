// reading enchances
// solve problem of inversion of control
// is a special type of obj that gets returned immediately when we call them
// act as a placeholder for the data  we hope to get back in some point in the future
// in this promise obj we can attach the functionality we want to execute once the future data is done 



// once the future task is done ,  promise will automatically execute the functionality  attached to it 

// promise -> how to create it and how to consume it 

// placeholder is a result u except u dont have it yet



function getRandomMax(max){
    return Math.floor(Math.random()*max)
}

function createPromiseWithLoop(){
    return new Promise( function executor (resolve , reject){

        for(let i = 0 ; i < 1000000000 ; i++){}

        let num = getRandomMax(10)

        if(num % 2 == 0){
            // fullfill the promise
            console.log(num)
            resolve("even number loop")
            
        }

        else{
            // reject the promise
            console.log(num)
            reject("odd number loop")
        }
    })
}



function createPromiseWithTimeOut(){
    return new Promise( function executor (resolve , reject){

        setTimeout( () => {

            let num = getRandomMax(10)

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

        } , 5000)

        
    })
}



let x = createPromiseWithLoop()
console.log(x)


// let y = createPromiseWithTimeOut()
// console.log(y)

// The error only appears when rejection happens AND you didn’t handle it.
// When it resolves (even number), it looks fine, but that doesn’t mean the code is correct — just that you didn’t hit the failure case that time.

// Loop promise: resolves/rejects synchronously, so logging right away shows final state.

// Timeout promise: resolves/rejects asynchronously, so logging right away always shows "pending".


