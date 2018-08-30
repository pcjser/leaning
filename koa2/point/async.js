const fs = require('fs');

//第一阶段   异步回调
function readFile(cb) {
  fs.readFile('../package.json', (err, data) => {
    if(err) return cb(err)
    cb(null, data)
  })
}

readFile((err, data) => {
  if(!err) {
    data = JSON.parse(data);
    console.log(data.name);    
  } else {
    console.log(err);    
  }
})

//第二阶段 Promise
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) return reject(err)
      else resolve(data)
    })
  })
}

readFileAsync('../package.json')
  .then(data => JSON.parse(data))
  .then(res => console.log(res.name))
  .catch(err => console.log(err))

//第三阶段 co + Generator Function + Promise(可组合)
const co = require('co')
const util = require('util')

co(function *() {
  let data = yield util.promisify(fs.readFile)('../package.json')

  data = JSON.parse(data)

  console.log(data.name)
})

//第四阶段 Async 统一世界

const readAsync = util.promisify(fs.readFile)

async function init() {
  let data = await readAsync('../package.json')

  data = JSON.parse(data)

  console.log(data.name);
  
}

init()