<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;
use app\components\widgets\menu\LeftMenu;
use app\components\widgets\Header;
use app\components\widgets\Footer;
use app\components\widgets\Right;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

    <!--[if IE]><link rel="stylesheet" type="text/css" href="css/ie.css" /><![endif]-->
    <!--[if lt IE 7]><link rel="stylesheet" type="text/css" href="css/ie6.css" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" type="text/css" href="css/ie7.css" /><![endif]-->
    <!--[if lt IE 7]><script type="text/javascript" src="js/DD_belatedPNG.js"></script><![endif]-->
    <!--[if lte IE 8]><script type="text/javascript" src="js/DD_roundies.js"></script><![endif]-->
    <!--[if IE 8]> <script type="text/javascript"> document.body.className='ie8';</script> <![endif]-->

</head>
<body>
<?php $this->beginBody() ?>

<div id="container">
    <div class="fix">
        <?=Header::widget();?>
        <div id="content">
            <div class="content-wrap">
                <table class="content-main-tbl">
                    <tr class="content-main-str">
                        <td class="content-main-td-left-205 content-main-td-right20">
                            <?=LeftMenu::widget();?>
                        </td>
                        <td class="content-main-td-center">
                            <table class="content-main-tbl">
                                <tr class="content-main-str">
                                    <td class="content-main-td-center">
                                        <?= $content ?>
                                    </td>
                                    <td class="content-main-td-right-180 content-main-td-left20">
                                        <?=Right::widget(); ?>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                </table>
            </div>

        </div>
        <!--/Content-->

    </div> <!-- // fix -->
    <div class="empty"></div>
</div> <!-- // container-->

<!--Footer-->
<?=Footer::widget();?>
<!--/Footer-->


<!-- popups -->
<!-- /popups -->


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
