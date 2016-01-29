<?php
namespace app\assets;

use yii\web\AssetBundle;

class ModalOrderExcAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        //'css/jquery-ui-1.10.4.custom.min.css',
        'css/b-popup15.css',
        'css/b-pp-exc-ord.css'
    ];

    public $js = [
        'js/jquery-ui-1.10.4.custom.min.js',
        'js/components/widget/modal/orderExc.js'
    ];
}