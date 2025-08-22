//higher order functions 
// which takes another function as one argument


function fun(x , fn){
    // x is number , fn is function
    console.log(x)
    console.log(fn)
    fn()
}

fun(10 , function exec(){
    console.log("function passed as an argument to another hof ")
})


let arr = [1,10,11,55,-1,22,50,12,43,46,2,3,9];

arr.sort()

console.log(arr) //exceptation -> arrange in increasing order

// lexocographically order sorting dictationary order

//how to make it sorting order 

let b = [1,10,11,55,-1,22,50,12,43,46,2,3,9];

b.sort(function cmp(a,b){
    return a-b 

    //return a < b nothing new will return sorting happens but not increasing nor lexo never return negative and that's why it returns  the array same as possible 

    // a-b if return negative  then a is placed before b and (a<b)

    //  if result(a-b) is postive it will b before a  (a>b)
    
}) 


//sort is hof function -> this takes comparator function as an argument 

console.log(b)


