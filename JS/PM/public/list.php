<?php
/**
 * 生成应用信息list.json文件
 */
$show=isset($_GET['show'])?intval($_GET['show']):0;
$msg=[];
$appDir='./app';
$jsonFile='./list/list.json';
$dir=scandir($appDir);
$info=[];
$path=__DIR__;
foreach ($dir as $key => $value) {
    if ($value!=='.' && $value!=='..' && $value!=='scaffold') {
        $file=$path.DIRECTORY_SEPARATOR.$appDir.DIRECTORY_SEPARATOR.$value.DIRECTORY_SEPARATOR.'package.json';
        if (!is_file($file))
        {
            $msg[]="File not found : ".$file;
            continue;
        }
        $json=json_decode(file_get_contents($file),true);
        if (!$json)
        {
            $msg[]="File is not json format : ".$file;
            continue;
        }
        if (!$json['enable'])
        {
            $msg[]="App ".$json['name'].' skipped.';
            continue;
        }
        $info['data'][]=$json;
    }
}

$json='';
if (!$info)
{
    $msg[]="No App found.";
}else{
    $json=json_encode($info,JSON_UNESCAPED_UNICODE);
    if(!$show)file_put_contents($jsonFile,$json);
}
$msg[]="Done.";
if ($show)
{
    echo $json;
}else{
    $str=implode(PHP_EOL,$msg);
    if(PHP_SAPI!=='cli')
    {
        echo nl2br($str);
    }else{
        echo $str;
    }
}