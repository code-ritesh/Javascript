if(false) var x = 10

console.log(x)

function fun(){
    console.log(z) //accessible here 
    var z = 20 // not accessible outside
}

function gun(){
    console.log(y) // not  accessible
    let y = 10
    // use let get error 

}

gun()