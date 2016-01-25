<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
use app\models\rt\Photo;
use app\assets\MainAsset;
use app\components\widgets\modal\Message;

MainAsset::register($this);

$this->title = 'Индивидуальный гид ' . $guide['info_full']['rt_name'];

?>


<div class="page-ttl">
    <h1 class="page-ttl-h1"><?=$guide['info_full']['nick']; ?></h1>
    <? if($guide['info_full']['rt_name']): ?><h2 class="page-ttl-h3 gray999">&nbsp; <?=$guide['info_full']['rt_name'] ?></h2><br /><? endif; ?>
    <h3 class="page-ttl-h3 orange">Индивидуальный гид по: <? $endCity = array_pop($cities); ?> <? foreach($cities as $_c): ?><?=$_c['name'] ?>, <? endforeach; ?><?=$endCity['name'] ?></h3>
</div>

<div class="club-user-card">
    <p class="club-user-card-photo2">
        <a href="#"><img src="<?=\app\models\rt\guide\User::getAvaUrl(165, 165); ?>" alt="" /></a>
    </p>
    <div class="club-user-card-info">
        <div class="club-user-card-about">
            <div class="club-user-card-about-loc">Специализация гида: самые мистические места Кипра</div>
        </div>
        <div><img src="/i/px.gif" height="15" alt="" /></div>
        <a href="#" class="club-user-card-btn3 show-message-popup">Написать ему</a><br />
        <a href="#" class="club-user-card-btn3">Забронировать экскурсию</a>
    </div>
</div>



<img src="/i/px.gif" height="20" alt="" />

<div class="page-ttl">
    <h2 class="page-ttl-h2">Экскурсии</h2>
</div>

<? foreach($excursions as $exc): ?>
<div class="hotel">
    <div class="hotel_img_wrap">
        <img width="180" src="<? if($exc['main_photo']): echo $exc['main_photo']; elseif($exc['places'][0]['cover_src_path']): ?><?=Yii::$app->params['rutravellerHost'] . $exc['places'][0]['cover_src_path']; ?><? endif; ?>" alt="hotel">
    </div>
    <div class="hotel_descr">
        <a href="#" class="hotel_descr_ttl"><?=$exc['name']; ?></a>
        <? if ($exc['persons_qty_max']): ?> <p class="hotel_descr_place">Для от <?=$exc['persons_qty_min']; ?> до <?=$exc['persons_qty_max']; ?> человек</p><? endif; ?>
        <div class="hotel_price"><span class="red"><? if(!$exc['price']): ?>цена по запросу<? else: ?><? if($exc['is_price_from']): ?>от <? endif; ?><?=$exc['price'] . $exc['currency'] ?> <? if($exc['price_child'] == '-1'): ?>за группу<? else: ?>за одного человека<? endif; ?><? endif; ?></span></div>
        <a href="#" class="hotel_descr_choose_link">Забронировать экскурсию</a>
    </div>
</div>
<? endforeach; ?>

<div class="link_numbers f14">
    <a href="#" class="bold red f12">Все экскурсии гида</a> &rarr;
</div>
<img src="/i/px.gif" height="20" alt="" />
<div class="page-ttl">
    <h2 class="page-ttl-h2">Фотографии гида</h2>
</div>
<div class="hotel-site-pics clearfix">
    <? foreach($photos as $_p): ?>
    <a class="hotel-site-pic" href="#"><img src="<?=Photo::getPhotoUrl($_p['album_id'], $_p['body_id'], $_p['ext'], 130, 130); ?>" alt=""></a>
    <? endforeach; ?>
</div>
<div class="hotel-site-pics-bot f14"><a class="bold red f12" href="#">Все фотографии гида</a> &rarr;

<?=Message::widget(); ?>