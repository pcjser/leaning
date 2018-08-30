var http = require('http')
var cheerio = require('cheerio')
var fs = require('fs')
var curIndex = 0;

var courseName = ''
var url = ''

var courseList = [
    {
        courseId: 861,
        courseName: "基于Websocket的火拼俄罗斯" 
    },
    // {
    //     courseId: 718,
    //     courseName: "前端实时可视化开发工具体验" 
    // },
    // {
    //     courseId: 709,
    //     courseName: "移动端Web组件-Dialog对话框" 
    // },
    // {
    //     courseId: 706,
    //     courseName: "JavaScript正则表达式" 
    // },
    // {
    //     courseId: 687,
    //     courseName: "Echarts3入门基础与实战" 
    // },
    // {
    //     courseId: 659,
    //     courseName: "原生JS实现帧动画库" 
    // },
    // {
    //     courseId: 644,
    //     courseName: "JS实现人机大战之五子棋（AI篇）" 
    // },
    // {
    //     courseId: 639,
    //     courseName: "JS实现人机大战之五子棋（UI篇）" 
    // },
    // {
    //     courseId: 580,
    //     courseName: "前端性能优化-基础知识认知" 
    // },
    // {
    //     courseId: 566,
    //     courseName: "AC2015前端技术大会" 
    // },
    // {
    //     courseId: 514,
    //     courseName: "FullPage.js全屏滚动插件" 
    // },
    // {
    //     courseId: 488,
    //     courseName: "DOM探索之基础详解篇" 
    // },
    // {
    //     courseId: 471,
    //     courseName: "Velocity.js实现弹出式相框" 
    // },
    // {
    //     courseId: 459,
    //     courseName: "JS插件开发之LightBox图片画廊(下)" 
    // },
    // {
    //     courseId: 454,
    //     courseName: "JS插件开发之LightBox图片画廊(上)" 
    // },
    // {
    //     courseId: 425,
    //     courseName: "侧栏工具条开发" 
    // },
    // {
    //     courseId: 386,
    //     courseName: "JS实现旋转木马幻灯片效果" 
    // },
    // {
    //     courseId: 359,
    //     courseName: "Avalon探索之旅基础教程-复杂绑定" 
    // },
    // {
    //     courseId: 353,
    //     courseName: "如何使用高德云图在线制作属于你的地图" 
    // },
    // {
    //     courseId: 250,
    //     courseName: "Ajax全接触" 
    // },
    // {
    //     courseId: 277,
    //     courseName: "JavaScript深入浅出" 
    // },
    // {
    //     courseId: 270,
    //     courseName: "Avalon探索之旅基础教程-简单绑定" 
    // },
    // {
    //     courseId: 12,
    //     courseName: "形形色色的下拉菜单" 
    // },
    // {
    //     courseId: 186,
    //     courseName: "电商网站前端架构" 
    // },
    // {
    //     courseId: 22,
    //     courseName: "网页广告特效" 
    // },
    // {
    //     courseId: 193,
    //     courseName: "可调大小面板实现（Resizeable Panel）" 
    // },
    // {
    //     courseId: 176,
    //     courseName: "Tab选项卡切换效果" 
    // },
    // {
    //     courseId: 174,
    //     courseName: "商城分类导航效果" 
    // },
    // {
    //     courseId: 167,
    //     courseName: "JS动画效果" 
    // },
    // {
    //     courseId: 138,
    //     courseName: "DOM事件探秘" 
    // },
    // {
    //     courseId: 144,
    //     courseName: "用JavaScript实现图片剪切效果" 
    // },
    // {
    //     courseId: 347,
    //     courseName: "如何使用高德JS-API进行基于LBS的开发" 
    // },
    // {
    //     courseId: 34,
    //     courseName: "用JS实现购物车特效" 
    // },
    // {
    //     courseId: 101,
    //     courseName: "瀑布流布局" 
    // },
    // {
    //     courseId: 44,
    //     courseName: "表单验证" 
    // },
    // {
    //     courseId: 120,
    //     courseName: "Tooltip浮动提示框效果" 
    // },
    // {
    //     courseId: 92,
    //     courseName: "WhenIOSLovesJS" 
    // },
    // {
    //     courseId: 119,
    //     courseName: "impress让你的内容舞起来" 
    // },
    // {
    //     courseId: 99,
    //     courseName: "阿当大话西游之WEB组件" 
    // },
    // {
    //     courseId: 114,
    //     courseName: "QQ空间时光轴特效" 
    // },
    // {
    //     courseId: 60,
    //     courseName: "鼠标拖拽效果" 
    // },
    // {
    //     courseId: 74,
    //     courseName: "侧边栏信息展示效果" 
    // },
    // {
    //     courseId: 72,
    //     courseName: "手风琴效果" 
    // },
    // {
    //     courseId: 65,
    //     courseName: "回到顶部效果" 
    // },
    // {
    //     courseId: 80,
    //     courseName: "用JavaScript实现图片缓慢缩放效果" 
    // },
    // {
    //     courseId: 32,
    //     courseName: "用JS实现放大镜特效" 
    // },
    // {
    //     courseId: 81,
    //     courseName: "人人网评论功能" 
    // },
    // {
    //     courseId: 35,
    //     courseName: "用Socketio打造协作应用" 
    // },
    // {
    //     courseId: 50,
    //     courseName: "Yahoo军规" 
    // },
    // {
    //     courseId: 91,
    //     courseName: "鼠标悬浮效果" 
    // },
    // {
    //     courseId: 8,
    //     courseName: "信息列表制作" 
    // },
    // {
    //     courseId: 18,
    //     courseName: "焦点图轮播特效" 
    // },
    // {
    //     courseId: 17,
    //     courseName: "信息滚动效果制作" 
    // },
    // {
    //     courseId: 31,
    //     courseName: "图片展示特效" 
    // },
    // {
    //     courseId: 52,
    //     courseName: "固定边栏滚动特效" 
    // },
    // {
    //     courseId: 58,
    //     courseName: "弹出层效果" 
    // },
    // {
    //     courseId: 59,
    //     courseName: "倒计时效果" 
    // },
    // {
    //     courseId: 90,
    //     courseName: "展开与收起效果" 
    // },
    // {
    //     courseId: 56,
    //     courseName: "网页定位导航特效" 
    // },
    // {
    //     courseId: 21,
    //     courseName: "搜索框制作" 
    // }
]


function startCrawler(index){
    courseName = courseList[index].courseName
    url = 'http://www.imooc.com/learn/' + courseList[index].courseId
    if (!fs.existsSync(courseName)) {
        fs.mkdirSync(courseName);
    }
    http.get(url, function(res) {
        var html = ''
        res.on('data', function(data) {
            html += data
        })
        res.on('end', function() {
            var courseData = filterChapters(html)
            printCourseInfo(courseData)
        })
    }).on('error', function() {
        console.log('获取课程数据出错！');
    })
}

startCrawler(curIndex);

function filterChapters(html) {
    var $ = cheerio.load(html)
    var chapters = $('.mod-chapters')
    var courseData = []
    chapters.each(function(item) {
        var chapter = $(this)
        var chapterTitle = chapter.find('strong').text()
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function(item) {
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text()
            var id = video.attr('href').split('video/')[1]
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.push(chapterData)
    })
    return courseData
}

function printCourseInfo(courseData) {    
    courseData.forEach(function(item) {
        var chapterTitle = item.chapterTitle;
        var maxLength = item.videos.length;
        var curLength = 0;
        console.log(maxLength);
        console.log(courseName+'下载开始')
        item.videos.forEach(function(video) {
            http.get('http://www.imooc.com/course/ajaxmediainfo/?mid=' + video.id + '&mode=flash', function(res) {
                var dataUrl = '';
                res.on("data", function(chunk) {
                    dataUrl += chunk;
                });
                res.on("end", function() {
                    dataUrl = JSON.parse(dataUrl)
                    var url = null;
                    var urlList = null;
                    if (!dataUrl.data.result) {
                        console.log("练习题跳过");
                        curLength++;
                    } else {
                        urlList = dataUrl.data.result.mpath
                        if (urlList[2]) {
                            url = urlList[2];
                        } else {
                            url = urlList[1];
                        }
                        http.get(url, function(res) {
                            var videoData = "";
                            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
                            res.on("data", function(chunk) {
                                videoData += chunk;
                            });
                            res.on("end", function() {
                                var title = video.title.replace(/\s/g, "").replace("开始学习", "").replace(/\//g, '').split("(")[0]
                                // console.log(title)
                                fs.writeFile('./' + courseName + '/' + title + '.mp4', videoData, "binary", function(err) {
                                    if (err) {
                                        console.log("down fail");
                                    }                                    
                                    curLength++;
                                    console.log(curLength);
                                    if(curLength == maxLength){
                                        curIndex++
                                        if(curIndex == courseList.length){
                                            console.log('列表下载完成')
                                        }else {
                                            console.log(courseName+'下载完成')
                                            startCrawler(curIndex);
                                        }                                        
                                    }
                                });
                            });
                        });
                    }
                })
            })
        })
    })
}





var server = http.createServer(function(req, res) {}).listen(50085);
// console.log("http start");



// var url = "http://v2.mukewang.com/e849a994-0ca1-4e6f-a73c-57437a3fb2e7/L.mp4?auth_key=1482143421-0-0-2db7e326cf76475bad092daa6716e500";
// http.get(url, function(res){
//     var imgData = "";
//
//     res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
//
//
//     res.on("data", function(chunk){
//         imgData+=chunk;
//     });
//
//     res.on("end", function(){
//         fs.writeFile("./abc.mp4", imgData, "binary", function(err){
//             if(err){
//                 console.log("down fail");
//             }
//             console.log("down success");
//         });
//     });
// });


//文件读取
// fs.readFile('courseList.txt', 'utf8', function(error, data){
//     if(error) throw error
//     console.log(data)
// })


// 删除文件
// fs.unlink('bb.txt', function(){
// console.log('success') ;
// });
// 修改文件名称
// fs.rename('bb.txt','bigbear.txt',function(err){
// console.log('rename success') ;
// });
// 查看文件状态
// fs.stat('bb.txt', function(err, stat){
//  console.log(stat);
// });
// 判断文件是否存在
// fs.exists('bb.txt', function( exists ){
//    console.log( exists ) ;
// });
