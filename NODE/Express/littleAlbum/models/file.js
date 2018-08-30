const fs = require('fs');


module.exports.getAllAlbums = function(callback) {
    fs.readdir("./uploads", function(err, files) {
        var allAlbums = [];
        (function iterator(i) {
            if(i == files.length) {
                console.log(allAlbums)
                callback(allAlbums);
                return;
            }
            fs.stat(`./uploads/${files[i]}`, function(err, stats) {
                if(stats.isDirectory()) {
                    allAlbums.push(files[i])
                }
                iterator(i + 1);
            })
        })(0) 
    })
}

module.exports.getAllImagesByAlbumName = function(albumName, callback) {
    fs.readdir(`./uploads/${albumName}`, function(err, files) {
        var allAlbums = [];
        (function iterator(i) {
            if(i == files.length) {
                console.log(allAlbums)
                callback(allAlbums);
                return;
            }
            fs.stat(`./uploads/${files[i]}`, function(err, stats) {
                if(stats.isDirectory()) {
                    allAlbums.push(files[i])
                }
                iterator(i + 1);
            })
        })(0) 
    })
}