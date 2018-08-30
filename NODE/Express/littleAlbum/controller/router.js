var file = require("../models/file");

module.exports.showIndex = function(req, res) {
  file.getAllAlbums(function(albums) {
    res.render("index", {
      "albums": albums
    })
  })  
}