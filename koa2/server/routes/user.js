/*
 * @Author: <pcjser> 
 * @Date: 2018-04-18 14:54:00 
 * @Last Modified by:   pcjser 
 * @Last Modified time: 2018-04-18 14:54:00 
 */
const {
  controller,
  get,
  post,
  put
} = require('../lib/decorator')
const {
  checkPassword
} = require('../service/user')

@controller('/api/v0/user')
export class userController {
  @post('/')
  async login(ctx, next) {
    const {
      email,
      password
    } = ctx.request.query
    const matchData = await checkPassword(email, password)

    if(matchData.match) {
      return (ctx.body = {
        success: true
      })
    } else {
      return (ctx.body = {
        success: false,
        err: '用户名或密码不正确'
      })
    }
  }
}