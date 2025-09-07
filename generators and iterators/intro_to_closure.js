function process(){
    let i = 0 ;
    function innerprocess(){
        i +=1;

        return i;}

        return innerprocess // just returning not calling
}

let res = process() // this line call the function which returns the another function interprocess()

//console.log(res) // it return function 

console.log("first time call res , " , res()) // calling the inner function 

console.log("second time call res , " , res())
