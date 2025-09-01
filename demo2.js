
console.log("a is called for first time",a())

var a = () =>{
    console.log("a is assingned using expression")
    return 123;
}

function a(){
    console.log("a is assingned using simple function")
    return 400;
}

console.log("a is called second time",a())