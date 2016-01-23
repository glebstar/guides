<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/style-main.css',
        'libs/font-awesome/css/font-awesome.min.css',
        'css/b-resize-block.css',
        'css/b-footer.css',
        'css/b-page-ttl.css',
        'css/b-side-nav.css',
        'css/b-header-alter.css',
        'css/b-club-user-card.css',
        'css/b-hotel.css',
        'css/b-index-alter.css'
    ];

    public $js = [
        'js/jquery-1.7.1.min.js',
        'js/b-datepicker2.js',
        'js/b-resize-block.js',
        'js/init.js',
        'js/b-footer.js'
    ];

    public $jsOptions = ['position' => \yii\web\View::POS_HEAD];

    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
