var http = require('http')
var cheerio = require('cheerio')
var url = 'http://i.jandan.net/ooxx/page-445#comments'

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.commentlist li')


    // var courseData = []
    chapters.each(function(item){
        var chapter = $(this)
        var chapterTitle = chapter.find('.commenttext').html()
        console.log(chapterTitle)
        // var videos = chapter.find('.video').children('li')
        // var chapterData = {
        //     chapterTitle: chapterTitle,
        //     videos: []
        // }
    })

    // videos.each(function(item){
    //     var video = $(this).find('.studyvideo')
    //     var videoTitle = video.text()
    //     var id = video.attr('href').split('video/')[1]

    //     chapterData.videos.push({
    //         tit
    //     })
    // })
};

http.get(url, function(res){
    var html = ''
    res.on('data', function(data){
        html += data
    })
    res.on('end', function(){
        filterChapters(html);
    })
}).on('error', function(){
    console.log('获取课程数据出错！');
})
