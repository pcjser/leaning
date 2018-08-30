/*
 * @Author: <pcjser> 
 * @Date: 2018-04-18 14:19:35 
 * @Last Modified by: pcjser
 * @Last Modified time: 2018-04-18 14:22:50
 */
const { Route } = require('../lib/decorator')
const { resolve } = require('path')

export const router = app => {
  const apiPath = resolve(__dirname, '../routes')
  const router = new Router(app, apiPath)

  router.init()
}