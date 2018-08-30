var superagent = require('superagent');
var async = require('async');
var url = require('url');
var cheerio = require('cheerio');

var express = require('express');
var app = express();

var eventproxy = require('eventproxy');
var ep = eventproxy();

var baseUrl = 'http://i.jandan.net/ooxx/page-445#comments'

superagent.get(baseUrl).end(function(err, sres) {
    // 常规的错误处理
    if (err) {
        return next(err);
    }
    var $ = cheerio.load(sres.text);
    $('.commentlist li').each(function(i, e) {
        var src = $(e).html();
        if(i === 0) {
            console.log(src)
        }
    })
})

app.listen(3000, function(req, res) {
    console.log('app is running at port 3000');
})