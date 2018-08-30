var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger');

var indent = function(n) {
  return new Array(n).join('&nbsp;')
}

var mid1 = function() {
  return function *(next) {
    this.body = '<h3>请求 => 中间件1</h3>'
    yield next
    this.body += '<h3>响应 <= 中间价1</h3>'
  }
}

var mid2 = function() {
  return function *(next) {
    this.body += '<h3>' + indent(4) + '请求 => 中间件2</h3>'
    yield next
    this.body += '<h3>' + indent(4) + '响应 <= 中间价2</h3>'
  }
}

var mid3 = function() {
  return function *(next) {
    this.body += '<h3>' + indent(8) + '请求 => 中间件3</h3>'
    yield next
    this.body += '<h3>' + indent(8) + '响应 <= 中间价3</h3>'
  }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use(function *(next) {
  this.body += '<p style="color: #f60;">' + indent(12) + 'Koa 核心 处理业务</p>'
})

app.listen(2345)