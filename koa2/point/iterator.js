/*
//迭代器
function makeIterator(arr) {
  let nextIndex = 0

  //返回一个迭代器对象
  return {
    next: () => {
      //next() 方法返回的结果对象
      if(nextIndex < arr.length) {
        return {
          value: arr[nextIndex++],
          done: false
        }
      } else {
        return {
          done: true
        }        
      }
    }
  }
}

const me = makeIterator(['吃饭', '睡觉', '打豆豆'])

console.log('首先', me.next().value)
console.log('其次', me.next().value)
console.log('然后', me.next().value)
console.log('最后', me.next().done)
*/

//生成器函数   方便使用迭代器而产生
function *makeIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆'])

console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().done)