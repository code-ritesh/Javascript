function fetchData(url){
    return new Promise( function (resolve , reject){
        console.log("start downloading from ",url)

        setTimeout(() => {
            let data = "dummy data"
            console.log("download completed")
            resolve(data)
            //console.log("download completed")
        }, 7000);
    })
}

console.log("start")

let obj = fetchData("xyz.com")

obj.then( (data) => {
    console.log("data is ",data);
})

console.log("end")