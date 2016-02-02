<div class="page-ttl">
    <h2 class="page-ttl-h2">Экскурсии индивидуального гида</h2>
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
            <a href="javascript:void(0);" data-exc-id="<?=$exc['id']; ?>" data-exc-name="<?=$exc['name']; ?>" class="hotel_descr_choose_link show-order-exc-popup">Забронировать экскурсию</a>
        </div>
    </div>
<? endforeach; ?>