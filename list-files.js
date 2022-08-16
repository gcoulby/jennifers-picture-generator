const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "./public/img");

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    console.log(files);
    var json = JSON.stringify(files);
    fs.writeFile("./src/file-list.json", json, "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
    });
});
