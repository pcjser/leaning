/*
 * @Author: <pcjser> 
 * @Date: 2018-04-18 14:41:26 
 * @Last Modified by: pcjser
 * @Last Modified time: 2018-04-18 14:43:10
 */
const mongoose = require('mongoose')
const User = mongoose.model('User')

export const checkPassword = async (email, password) => {
  let match = false
  const user = await User.findOne({email})
  
  if(user) {
    match = await user.comparePassword(password, user.password)
  }

  return {
    match,
    user
  }
}