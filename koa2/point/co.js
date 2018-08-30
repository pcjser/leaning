const co = require('co')
const fetch = require('node-fetch')

// co(function *() {
//   const res = yield fetch('https://api.douban.com/v2/movie/1291843')  //自动执行  执行完毕后继续执行

//   const movie = yield res.json()

//   const summary = movie.summary
  
//   console.log('summary', summary)
// })

function run(generator) {   //模拟以上co运行过程
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value

  promise.then(data => {      //一层promise 完成第一个yield执行  并返回一个promise
    const it2 = iterator.next(data)
    const promise2 = it2.value

    promise2.then(data2 => {  //二层promise 完成第二个yield执行
      iterator.next(data2)
    })
  })
}

run(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')  //自动执行  执行完毕后继续执行

  console.log(res)

  const movie = yield res.json()

  const summary = movie.summary
  
  console.log('summary', summary)
})