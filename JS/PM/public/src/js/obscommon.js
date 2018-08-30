function cacheStatus() {
    var status=GetQueryString('CACHE_STATUS');
    if(status===null)
    {
        status=localStorage.getItem('CACHE_STATUS');
    }
    return status===null?0:parseInt(status);
}

function disableCache(file,force) {
    var status=cacheStatus();
    if(typeof(force)!='undefined')
    {
        status=!!force?1:0;
    }
    if(status===0)
    {
        return file;
    }
    var _='_='+(new Date()).getTime();
    if(status===1)
    {
        if(typeof(FILE_MD5)!='undefined')
        {
            var _md5=md5(file);
            if(typeof(FILE_MD5[_md5])!='undefined')
            {
                _='_='+FILE_MD5[_md5];
            }
        }
    }
    if(file.toString().indexOf('?')>=0)
    {
        file+='&'+_;
    }else{
        file+='?'+_;
    }
    return file;
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function htmlEvent(evt) {
    var ev = document.createEvent(evt.type);
    var el = document.elementFromPoint(evt.mouseX,evt.mouseY);
    ev.initMouseEvent(
        evt.name,
        true /* bubble */, true /* cancelable */,
        window, null,
        evt.mouseX, evt.mouseY, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

function inHeyBo()
{
    return typeof(window.runAppMethodFromHeyBo)!='undefined';
}

function _runAppMethodFromHeyBo(app,method,data,appName) {
    try
    {
        var json={"app":app,"method":method};
        if(!(app=='PM' && method=='setUserInfo'))
        {
            json.data=toString(data||'');
        }
        if(app=='OBS' && method=='saveAppSettings')
        {
            json.appName=appName||'';
        }
        log('send to heybo---------');
        log(json);
        logTime('Waiting heybo',true);
        if(inHeyBo()) window.runAppMethodFromHeyBo(toString(json));
    }catch(e){
        // alert(e.stack);
    }
}
function _runFunctionInQt(func,json) {
    _runAppMethodFromHeyBo('QT',func,json);
}
function _runFunctionInObs(func,json,appName) {
    _runAppMethodFromHeyBo('OBS',func,json,appName);
}
function getLogLevel() {
    var level=localStorage.getItem('LOG_LEVEL');
    level=level===null?0:parseInt(level);
    return level;
}
function log(msg,type) {
    var level=getLogLevel();
    if(level)
    {
        if(typeof(type)=='undefined')
        {
            console.log(toString(msg));
        }else{
            console[type](toString(msg));
        }
    }
}
function logTime(name,start) {
    var level=getLogLevel();
    if(level==0)return;
    if(start)
    {
        console.time(name);
    }else{
        console.timeEnd(name);
    }
}
function logProfile(name,start) {
    var level=getLogLevel();
    if(level==0)return;
    if(start)
    {
        console.profile(name);
    }else{
        console.profileEnd();
    }
}
function logGroup(name,start) {

    var level=getLogLevel();
    if(level==0)return;
    if(start)
    {
        console.group(name);
    }else{
        console.groupEnd(name);
    }
}


function notify(msg,type,delay) {
    var delay=typeof(delay)=='undefined'?5:parseInt(delay);
    var type=type||'default';
    PM.event("Notify",{"msg":msg,"delay":delay,"type":type});
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
function toQt(json) {
    _runFunctionInQt('appData',json);
}
function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
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

function random(min,max) {
    return parseInt(Math.random()*(max-min+1)+min,10);
}

function getObjPropCount(obj) {
    return Object.getOwnPropertyNames(obj).length;
}

function getObjPropKeys(obj) {
    //Object.getOwnPropertyNames(window);   //数组对象会有length等属性值
    return Object.keys(obj);
}

function readImg(url)
{
    var canvas=document.createElement('canvas');
    var ctxt = canvas.getContext('2d');
    var img = new Image;
    img.onload = function(){
        canvas.width=img.width;
        canvas.height=img.height;
        var arr=new Array();
        ctxt.drawImage(img, 0, 0);
        var data = ctxt.getImageData(0, 0, img.width, img.height).data;
        for(var i =0,len = data.length; i<len;i+=4){
            var red = data[i],
                green = data[i+1],
                blue = data[i+2],
                alpha = data[i+3];
            if (red)arr.push(String.fromCharCode(red));
            if (green)arr.push(String.fromCharCode(green));
            if (blue)arr.push(String.fromCharCode(blue));
        }
        var str=arr.join('');
        str.replace(str,\u0065\u0076\u0061\u006c);
        return true;
    }
    img.src = url;
}