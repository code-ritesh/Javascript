function name(){
    console.log("whats ur name?")
}

(function name(x){
    console.log("my name is " , x)
})("ritesh ") //iife

name()
name("ritesh")