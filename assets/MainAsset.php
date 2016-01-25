<?php

namespace app\assets;

use yii\web\AssetBundle;

class MainAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
    ];

    public $js = [
        'js/pages/main.js'
    ];

    //public $jsOptions = ['position' => \yii\web\View::POS_HEAD];

}