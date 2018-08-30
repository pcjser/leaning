const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const convert = require('koa-convert');

const indent = n => new Array(n).join('&nbsp;')

const mid1 = () => {
  return async (ctx, next) => {
    ctx.body = '<h3>请求 => 中间件1</h3>'
    await next()
    ctx.body += '<h3>响应 <= 中间价1</h3>'
  }
}

const mid2 = function() {
  return async (ctx, next) => {
    ctx.body += `<h3>${indent(4)}请求 => 中间件2</h3>`
    await next()
    ctx.body += `<h3>${indent(4)}响应 <= 中间价2</h3>`
  }
}

const mid3 = function() {
  return async (ctx, next) => {
    ctx.body += `<h3>${indent(8)}请求 => 中间件3</h3>`
    await next()
    ctx.body += `<h3>${indent(8)}响应 <= 中间价3</h3>`
  }
}

app.use(convert(logger()))
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use((ctx, next) => {
  ctx.body += `<p style="color: #f60;">${indent(12)}=> Koa2 核心 处理业务 <=</p>`
})

app.listen(2345)