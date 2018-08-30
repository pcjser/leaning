<?php

function curl($url,$input,$type='post')
{

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);

//    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,TRUE);
//    curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,2);//严格校验
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    //post提交方式
    $data_string=is_string($input)?$input:http_build_query($input);
    if($type=='post')
    {
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    }else{
        curl_setopt($ch,CURLOPT_URL, $url.'?'.$data_string);
    }

    $data = curl_exec($ch);
    if($data){
        curl_close($ch);
        return $data;
    } else {
        curl_close($ch);
        return [];
    }
}

$op=$_GET['op']??'';
$data=[];

switch ($op)
{
    case 'getMyAppList':
        $data=[
                    [
                        'appId' => '1',
                        'appName' => 'Notify',
                        'appOrder' => 10
                    ],
                    [
                        'appId' => '20',
                        'appName' => 'Vote',
                        'appOrder' => 10
                    ],
                    [
                        'appId' => '30',
                        'appName' => 'Lottery',
                        'appOrder' => 10
                    ]
                ];
        break;
}
echo json_encode($data,JSON_UNESCAPED_UNICODE);