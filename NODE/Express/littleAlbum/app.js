var express = require('express');
var app = express();
var router = require("./controller/router");

app.set("view engine", "ejs");


/*路由中间件*/
//静态页面(文件路由)
app.use(express.static("./public"));  //从根目录开始
// app.use("/static" ,express.static("./public"));  //从/static目录开始
//首页
app.get("/", router.showIndex);

//404
app.use(function(req, res) {
  res.render("err")
})

app.listen(3001, function() {
  console.log("listen on 3131")
});
