const Koa = require('koa')
const mongoose = require('mongoose')
const {
  resolve
} = require('path')
const {
  connect,
  initSchemas
} = require('./database/init')
const R = require('ramda')
const MiDDLEWARES = ['router']

const useMiddlewares = app => { //加载中间键数组
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middlewares/${name}`)
    )
  )(MiDDLEWARES)
}

;
(async () => {
  await connect()
  initSchemas()

  // require('./tasks/movie')
  // require('./tasks/api')

  const app = new Koa()
  await useMiddlewares(app)

  app.listen(2345)
})()
