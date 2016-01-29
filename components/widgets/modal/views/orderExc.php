<?php
use app\assets\ModalOrderExcAsset;
ModalOrderExcAsset::register($this);
?>

<div class="popup15 pp-exc-ord" id="pp-exc-ord">
    <div class="popup15-ttl"><span class="popup15-ttl-x">&nbsp;</span>Заявка на подбор экскурсии</div>
    <div class="popup15-cont popup15-cont-pd10">
        <p class="pp-exc-ord-ttl">Общая информация</p>
        <div class="pp-exc-ord-d">
            <a href="javascript:void(0);" class="pp-exc-ord-d-a" onclick="$(this).siblings('.pp-exc-ord-ul').toggle();">&nbsp;</a>
            <input disabled="disabled" style="background-color: white" type="text" placeholder="Страна" data-country-id="" value="" class="order-exc-sel-country_id pp-exc-ord-d-inp m-placeholder">
            <ul class="pp-exc-ord-ul" id="pp-exc-ord-countries" style="display: none;">
                <li class="pp-exc-ord-li"><a style="cursor:pointer;" data-country-id="1">Россия</a></li>
                <li class="pp-exc-ord-li"><a style="cursor:pointer;" data-country-id="2">Италия</a></li>
            </ul>
        </div>
        <div class="pp-exc-ord-sep">&nbsp;</div>
        <div class="pp-exc-ord-d">
            <a href="javascript:void(0);" class="pp-exc-ord-d-a" onclick="$(this).siblings('.pp-exc-ord-ul').toggle();">&nbsp;</a>
            <input disabled="disabled" style="background-color: white" type="text" placeholder="Город или курорт" data-city-id="" value="" class="order-exc-sel-city_id pp-exc-ord-d-inp m-placeholder">
            <ul class="pp-exc-ord-ul" id="pp-exc-ord-cities" style="display: none;">

                <li class="pp-exc-ord-li"><a style="cursor:pointer;" data-country-id="1" data-city-id="1">Москва</a></li>
                <li class="pp-exc-ord-li"><a style="cursor:pointer;" data-country-id="1" data-city-id="2">Санкт-Петербург</a></li>

            </ul>
        </div>
        <img src="/i/px.gif" height="10" alt="">
        <div class="pp-exc-ord-d">
            <a href="javascript:void(0);" class="pp-exc-ord-d-a">&nbsp;</a>
            <input type="text" placeholder="Дата" value="" class="order-exc-sel-data pp-exc-ord-d-inp m-placeholder">
        </div>
        <div class="pp-exc-ord-sep">&nbsp;</div>
        <div class="pp-exc-ord-d3">
            <input type="text" value="" placeholder="Цена, до" class="order-exc-sel-price pp-exc-ord-d-inp2 m-placeholder">
            <span class="pp-exc-ord-d-s">руб.</span>
        </div>
        <div class="pp-exc-ord-sep">&nbsp;</div>
        <img src="/i/px.gif" height="20" alt="">
        <p class="pp-exc-ord-ttl">Количество человек на экскурсии</p>
        <div class="pp-exc-ord-d2">
            <input type="text" value="" placeholder="Взрослых" class="order-exc-sel-adults pp-exc-ord-d-inp3 m-placeholder">
        </div>
        <div class="pp-exc-ord-sep">&nbsp;</div>
        <div class="pp-exc-ord-d2">
            <input type="text" value="" placeholder="Детей" class="order-exc-sel-child pp-exc-ord-d-inp3 m-placeholder">
        </div>
        <img src="/i/px.gif" height="20" alt="">
        <p class="pp-exc-ord-ttl">Дополнительная информация</p>
        <textarea class="order-exc-sel-info pp-exc-ord-textarea"></textarea>
        <img src="/i/px.gif" height="20" alt="">
        <div class="pp-exc-ord-d">
            <input type="text" placeholder="Ваше имя *" value="" class="order-exc-sel-name pp-exc-ord-d-inp m-placeholder">
        </div>
        <div class="pp-exc-ord-sep">&nbsp;</div>
        <div class="pp-exc-ord-d">
            <input type="text" placeholder="Телефон для связи *" value="" class="order-exc-sel-phone pp-exc-ord-d-inp m-placeholder">
        </div>
        <img src="/i/px.gif" height="10" alt="">
        <div class="pp-exc-ord-d">
            <input type="text" placeholder="Ваш e-mail *" value="" class="order-exc-sel-email pp-exc-ord-d-inp m-placeholder">
        </div>
    </div>
    <div class="popup15-cont popup15-cont-pd10" style="display:none;">
        <p class="pp-exc-ord-ttl center">Благодарим Вас за пользование услугами нашего портала!</p>
        Ваша заявка отправлена. Как только мы обработаем её, наши гиды свяжутся с Вами.
        <div><img src="/i/px.gif" height="20" alt=""></div>
        <p class="pp-exc-ord-ttl center">Искренне Ваш, RuTraveller</p>
    </div>
    <div class="popup15-submit clearfix">
        <a href="javascript:void(0);" class="custom-btn-submit popup15-submit-btn-red22 flr">Отправить заявку</a>
        <a href="javascript:void(0);" class="custom-btn-cancel popup15-submit-btn-red22 flr" style="display:none;">Закрыть</a>
        <a href="javascript:void(0);" class="popup15-submit-btn-cancel">Закрыть</a>
    </div>
</div>