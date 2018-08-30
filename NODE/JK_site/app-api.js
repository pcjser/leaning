var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/category', function(req, res) {
  res.status(200);
  res.json({
    python: 20,
    noedjs: 1,
    others: 10
  })
})

var questions = [{
  id: 1,
  title: 't1',
  asker: 'you',
  course: 'nodejs',
  'last-reply': Date.now(),
  reply: 1,
  state: 'resolved'
},
{
  id: 2,
  title: 't2',
  asker: 'you',
  course: 'nodejs',
  'last-reply': Date.now(),
  reply: 1,
  state: 'unresolved'
}]

app.get('/questions', function(req, res) {
  res.status(200);
  res.json(questions)
})

app.get('/questions/all', function(req, res) {
  res.status(200);
  res.json(questions)
})

app.get('/questions/resolved', function(req, res) {
  res.status(200);
  res.json(questions.filter(function(q) {
    return q && q.state === 'resolved';
  }))
})

app.get('/questions/unresolved', function(req, res) {
  res.status(200);
  res.json(questions.filter(function(q) {
    return q && q.state === 'unresolved';
  }))
})

var server = app.listen(3000, 'localhost', function() {
  // debugger;
  var host = server.address().address;
  console.log(server.address())
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
})

/*
  模块化
  如何设计自己的API
    1.不要让用户使用关键字new
    2.保持简洁  驼峰
    3.不要轻易地输出接口
*/