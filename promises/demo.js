function hello(){
    return new Promise( (resolve , reject) =>{
        let x = setTimeout(() => {
            return 4
        }, 2000);

        console.log(x)

        if(x % 2 == 0) resolve("success")
        
        else reject("reject")
    })
}

let p = hello()
console.log(p)