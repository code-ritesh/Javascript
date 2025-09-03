
function download(url){
    return new Promise( (resolve , reject) =>{
        console.log("downloaded from url - " , url);

        setTimeout(() => {
            console.log("completing data in 5 sec")

            const content = "ritesh ";
            resolve(content)

            // vv imp
            reject(new Error("download failed due to network error"))

        }, 5000);
    })
}

let promise = download("xyz.com")

 y = promise.then((value) =>{
    console.log("downloaded data is = ", value)

    return "hello this is from then to prove its chaining and also returns promise"
})

.catch( (err) => {
    console.log(err)
    console.log("there is some error in it")
})

y.then ( (value) => {
    console.log("value from previous then is = ", value)
})