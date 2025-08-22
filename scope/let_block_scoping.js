var teacher = "ritesh"

function fun(){
    console.log(teacher) // no error given -> undefined
    //console.log(content) // gives error 
    var teacher = "xyz" //scope of fun available everywhere in function
    let content = "js" // content will access post declaration

    if(content == "js"){
        let hours = "128+"
        console.log(hours) // only access in if block
        //acess content teacher 
    }

    console.log(teacher , content)
    // gives error console.log(hours)
}


fun()
// console. log(teacher , content , hour) // hour , content gives error 

/*

*/