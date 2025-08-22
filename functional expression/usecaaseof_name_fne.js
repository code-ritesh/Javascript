function fun(fn){
    console.log("welcome to game")
    fn()
}

fun( function name(){
    console.log("ritesh")
    //console.trace()

})
 //no err without name but give func name -> cannot access outside

// console.log(name) //gives error

//for recursive cases named function expression are also helpful