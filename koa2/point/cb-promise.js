const fs = require('fs')

/* 读取package.json */

//基础写法
fs.readFile('../package.json', (err, data) => {
  if (err) return console.log(err);
  data = JSON.parse(data);
  console.log(data.name);
})

//封装函数  返回Promise
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, file) => {
      if (err) reject(err)
      else resolve(file)
    })
  })
}

readFileAsync('../package.json')
  .then(data => JSON.parse(data))
  .then(res => console.log(res.name))
  .catch(err => console.log(err))

  
//使用promisify
const util = require('util');

util.promisify(fs.readFile)('../package.json')
  .then(JSON.parse)
  .then(data => console.log(data.name))
  .catch(err => console.log(err))