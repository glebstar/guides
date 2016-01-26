<?php

use app\assets\ModalMessageAsset;

ModalMessageAsset::register($this);

?>

<div class="pp-message" id="pp-message" data-class-send-button="pp-message-btn">
    <div class="pp-message-wrp">
        <div class="pp-message-content">
            <div class="pp-message-title"><span class="pp-message-close"></span>Написать сообщение</div>
            <div class="pp-message-wrap">
                <!--
                <table class="pp-message-tbl">
                    <tr class="pp-message-str">
                        <td class="pp-message-cell pp-message-cell-ava">
                            <a href="#" class="pp-message-cell-ava-link">
                                <img src="" alt="" />
                            </a>
                        </td>
                        <td class="pp-message-cell">
                            <a href="#" class="pp-message-username"></a>
                            <span class="pp-message-name"></span>
                        </td>
                    </tr>
                </table>
                -->
                <textarea cols="30" rows="10" class="pp-mesage-text"></textarea>
            </div>
            <div class="pp-message-sent">Ваше сообщение <br />
                <span class="pp-message-sent-username"></span> отправлено</div>
            <div class="pp-message-submit"><a class="pp-message-btn" href="#" >Отправить</a></div>
        </div>
    </div>
</div>
