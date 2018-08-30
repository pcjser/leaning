var fs = require('fs')

/*stream 基于事件*/

var source = fs.readFileSync('../buffer/wall.jpg')

fs.writeFileSync('stream_copy_wall.jpg', source)