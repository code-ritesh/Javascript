function fun(x){
    let i // assign undefined

    if(x % 2 == 0) i =0
    else i = 1
}

function gun(x){
    if(x % 2 == 0) var i =0
    else var i = 1
}

gun(6)

var x  = 10
var x = 12 // allows you redeclaration in var but not in let