// function download(url) {
//     return new Promise((resolve, reject) => {
//         console.log("downloading from url", url);
//         setTimeout(() => {
//             const content = "ritesh rana data";
//             resolve(content);
//         }, 5000);
//     });
// }

// let obj1 = download("xyz.com");

// let obj2 = obj1.then((content) => {
//     console.log("saving the downloading data");
//     // ✅ Wrap setTimeout in a Promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let file = "file1.txt";
//             console.log("file data saved in", file);
//             resolve(file); // ✅ Pass file to the next .then
//         }, 5000);
//     });
// });

// let obj3 = obj2.then((file) => {
//     console.log("uploading the file to new url");
//     // ✅ Wrap again in a Promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let newUrl = `www.newurl.com/${file}`;
//             console.log("file uploaded to new url at", newUrl);
//             resolve(newUrl); // ✅ Pass newUrl further if needed
//         }, 5000);
//     });
// });


// Tasks: (Don't use promises only use promises)
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 6000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

download("www.xyz.com")
.then(function processDownload(value) {
    console.log("downloading done with following value", value);
    return writeFile(value);
})
.then(function processWrite(value) {
    console.log("data written in the file with name", value);
    return uploadData(value, "www.upload.com");
})
.then(function processUpload(value) {
    console.log("we have uploaded with", value);
});