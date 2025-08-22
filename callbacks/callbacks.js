function fun( x , fn){
    console.log(x)
    fn()
}

fun(12 , function greet(){
    console.log("hello world")
})



// fun - hof -> it takes fn (which is function ) as an argument
// greet -> callback function -> it is passed as an argument in hof in js
// x-> number

//function pass as an argument in hof is a callback function