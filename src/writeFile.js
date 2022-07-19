//import file system to use .writeFile function
const fs = require('fs');

//take the output that is fed into this and put it into an index.html file in the dist folder
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", data, err => {
            if(err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: "File Created"
            })
        })
    })
}

module.exports = writeToFile;