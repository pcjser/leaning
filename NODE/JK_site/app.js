var express = require('express')
var app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.use()

app.get('/', function(req, res) {
  res.render('home.ejs', {
    name: 'yorkie'
  });
})

app.get('/request/:id', function(req, res) {
  var locals = {name: 'pc', 'id': req.params['id']};

  res.render('home.ejs', locals);
})

var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port

  console.log('App is running at http://%s:%s', host, port)
})