if (typeof(qt) != "undefined") {
    new QWebChannel(qt.webChannelTransport, function (channel) {
        window.HsAppJs  = channel.objects.HsAppJs;
    });
}

function isQt() {
    return typeof(HsAppJs) !='undefined';
}

//{"event":"evtName","data":JSON}
function obsEvt(data)
{
    callObsFunc(data);
}

//{"app":"appName","method":"appMethod","data":JSON};
function obsRun(data)
{
    callObsFunc(data);
}

function callObsFunc(data) {

    if (isQt()) {
        var arg=typeof(data)=='string'?data:JSON.stringify(data);
        HsAppJs.runQtMethod(arg);
    }
}

function toString(args) {
    try
    {
        return typeof(args)=='string'?args:JSON.stringify(args);
    }catch (e)
    {
        return args;
    }
}
function toJson(args) {
    try
    {
        return typeof(args)=='object'?args:JSON.parse(args);
    }catch (e)
    {
        return args;
    }
}
var pad = function() {
    var tbl = [];
    return function(num, n) {
        var len = n-num.toString().length;
        if (len <= 0) return num;
        if (!tbl[len]) tbl[len] = (new Array(len+1)).join('0');
        return tbl[len] + num;
    }
}();

function sec2time(sec) {
    var timeLeft=parseInt(sec);
    var startHours = pad(parseInt(timeLeft / (60 * 60 * 1000), 10),2);
    var startMinutes = pad(parseInt((timeLeft - startHours*3600*1000) / (60 * 1000), 10),2);
    var startSec = pad(parseInt((timeLeft - startHours*3600*1000 - startMinutes * 60 * 1000)/1000),2);
    return startHours+':'+startMinutes+':'+startSec;
}

function trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g,'');
}

function getUserToken(callback) {
    if (isQt()) {
        HsAppJs.getToken(function (token) {
            if (token) {
                callback(token);
            }
        });
    }
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}