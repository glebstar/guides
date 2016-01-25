<?php

namespace app\assets;

use yii\web\AssetBundle;

class ModalMessageAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/b-pp-message.css'
    ];

    public $js = [
        'js/components/widget/modal/message.js'
    ];
}