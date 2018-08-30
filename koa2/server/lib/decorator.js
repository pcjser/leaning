/*
 * @Author: <pcjser> 
 * @Date: 2018-04-18 13:53:17 
 * @Last Modified by: pcjser
 * @Last Modified time: 2018-04-18 15:17:52
 */
const Router = require('koa-router')
const {
  resolve
} = require('path')
const _ = require('lodash')
const glob = require('glob')

const symbolPrefix = Symbol('prefix')
const routerMap = new Map()

const isArray = c => _.isArray(c) ? c : [c]

export class Route {
  constructor(app, apiPath) {
    this.app = app
    this.apiPath = apiPath
    this.router = new Router()
  }

  init() {
    glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)

    for(let [conf, controller] of routerMap) {
      const controllers = isArray(controller)
      const prefixPath = conf.target[symbolPrefix]
      if(prefixPath) prefixPath = normalizePath(prefixPath)
      const routerPath = prefixPath + conf.path
      this.router[conf.method](routerPath, ...controllers)
    }

    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
}

const normalizePath = path => path.startsWith('/') ? path : `/${path}`

const router = conf => (target, key, descriptor) => {
  conf.path = normalizePath(conf.path)

  routerMap.set({
    target: target,
    ... conf
  }, target[key])
}

export const controller = path => target => (target.prototype[symbolPrefix] = path)

export const get = path => router({
  method: 'get',
  path
})

export const post = path => router({
  method: 'post',
  path
})

export const put = path => router({  //修改记录
  method: 'put',
  path
})

export const del = path => router({  //删除记录
  method: 'del',
  path
})

export const use = path => router({  //中间件
  method: 'use',
  path
})

export const all = path => router({  //所有请求
  method: 'all',
  path
})
