const fs = require('fs');

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