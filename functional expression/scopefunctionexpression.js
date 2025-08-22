const f = function fun(){
    console.log("hello")
}

f()
console.log(f()) // output + undefined 
// fun() gives error 
// scope of fun is accessible by f