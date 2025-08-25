function tcbyloop(){

    console.log("loop starts")
    for (let i = 0; i < 10000000000; i++) {
        
    }

    console.log("loop ends")
}

function tcbyRuntimeFeature(){
    console.log("timer starts")
    setTimeout(() => {
        console.log("timer ends")
    }, 5000);

    console.log("runtime function ends")
}

console.log("hi")
tcbyloop()

tcbyRuntimeFeature()

tcbyloop()

console.log("byeee")