const express = require('express');
const formidable = require('formidable');
var app = express();

app.set("view engine", "ejs");

app.get("/regist", function(req, res) {
  res.render("regist")
})

//执行注册
// app.post("")
app.post("/doregist", function() {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.write('received upload:\n\n');
    // res.end(util.inspect({fields: fields, files: files}));
  });
})


app.listen(3000, function() {
  console.log('listen at 3000');  
});