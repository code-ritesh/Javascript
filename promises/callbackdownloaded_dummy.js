const { set } = require("mongoose");

function download(url , cb){
    console.log("started downloading from url = " , url)
    setTimeout(() => {
        console.log("download completed after 4 sec")
        const content = "abcdefg"
        cb(content)
        //cb(content)
    }, 4000);
}

download("xyz" , function processdownloaded(data){
    console.log("downloaded data is ," , data)
})