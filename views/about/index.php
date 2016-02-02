<?php
/* @var $this yii\web\View */

use app\components\widgets\modal\Message;

?>

<div class="page-ttl">
    <h2 class="page-ttl-h2">Обо мне</h2>
    <div class="page-ttl-txt2"><?=$guide['info_full']['rt_about_text']; ?></div>
</div>
<p class="club-user-card-contact-ttl">Контакты</p>
<div class="club-user-card-contact-d">
    <p class="club-user-card-contact-p club-user-card-contact-p1">Телефон</p>
    <p class="club-user-card-contact-p4"><? if($guide['info_full']['phone']): ?><?=$guide['info_full']['phone']; ?><? else: ?>не добавлено<? endif; ?></p>
</div>
<div class="club-user-card-contact-d">
    <p class="club-user-card-contact-p club-user-card-contact-p3">Опыт работы</p>
    <p class="club-user-card-contact-p4">Опыт работы <?=$serviceData['work_experience']; ?> <?=\app\helpers\Text::getDeclension($serviceData['work_experience'], ['год', 'года', 'лет']); ?></p>
</div>
<div class="club-user-card-contact-d">
    <p class="club-user-card-contact-p club-user-card-contact-p2">Связь с гидом</p>
    <p class="club-user-card-contact-p4"><a href="javascript:void(0);" class="show-message-popup">Написать</a></p>
</div>
<img src="/i/px.gif" height="20" alt="" />
<p class="club-user-card-contact-ttl">Дополнительные услуги</p>
<div class="club-user-card-contact-f12">Услуги, которые предоставляет гид помимо проведения экскурсий:</div>
<? foreach($serviceItems as $sItem): ?>
<div class="club-user-card-contact-serv">
    <? foreach ($sItem as $_item): ?>
    <p class="club-user-card-contact-serv-p club-user-card-contact-serv-p<?=$serviceAssocStyle[$_item['type']][$_item['type_id']]; ?>"><?=$_item['name']; ?></p>
    <? endforeach; ?>
</div>
<? endforeach; ?>

<p class="club-user-card-contact-all"><a href="/service">Перейти ко всем услугам</a> <span class="arial f14">&rarr;</span></p>
<div class="club-user-card-contact-gift">Индивидуальный гид участвует в программе лояльности<br /><a href="#" target="_blank" class="club-user-card-contact-gift-a">Интересно? получите свой бонус!</a></div>

<?=Message::widget(); ?>