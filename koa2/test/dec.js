class Boy {
  @speak('中文')
  run() {
    console.log('I can speak ' + this.language)
    console.log('I can run!')
  }
}

function speak(language) {
  return function (target, key, descriptor) {
    console.log(target)
    console.log(key)
    console.log(descriptor)

    target.language = language

    return descriptor
  }
}


const Luke = new Boy()

Luke.run()
