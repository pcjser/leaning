/*
* @Author: SWAIN
* @Date:   2018-01-04 22:36:32
* @Last Modified by:   SWAIN
* @Last Modified time: 2018-01-04 22:38:26
*/
var http = require('http')
var Promise = require('Promise')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/701'

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter')


    var courseData = []
    chapters.each(function(item){
        var chapter = $(this)
        var chapterTitle = chapter.find('strong').text()
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
    })

    videos.each(function(item){
        var video = $(this).find('.studyvideo')
        var videoTitle = video.text()
        var id = video.attr('href').split('video/')[1]

        chapterData.videos.push({
            tit
        })
    })
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
